import { Injectable } from '@nestjs/common';
import { Repository, ILike, FindOptionsWhere, DataSource } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { VesselInspection } from '../shared/entities/vessel-inspection.entity';
import { PaginatedResult } from './dto/pagination-result.dto';
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto';


interface PaginationOptions {
  page?: number;
  limit?: number;
}

@Injectable()
export class SearchService {
  constructor(
        @InjectRepository(VesselInspection)
        private vesselRepository: Repository<VesselInspection>,
        private dataSource: DataSource
      ) {}

  searchVesselNo(query: string, paginationQuery: PaginationQueryDto) {
    return this.searchWithPagination(
      this.vesselRepository,
      ['vesselNo'],
      query,
      paginationQuery
    );
  }

  async searchWithPagination<T extends Record<string, any>>(
    repository: Repository<T>,
    fields: (keyof T)[],
    query: string,
    pagination: PaginationOptions = {},
  ): Promise<PaginatedResult<T>> {
    const page = pagination.page ?? 1;
    const limit = pagination.limit ?? 10;
    const skip = (page - 1) * limit;

    const where: FindOptionsWhere<T>[] = fields.map((field) => ({
      [field]: ILike(`%${query}%`),
    })) as FindOptionsWhere<T>[];

    const [data, total] = await repository.findAndCount({
      where,
      skip,
      take: limit,
    });

    return {
      data,
      meta: {
        total,
        page,
        limit,
        pageCount: Math.ceil(total / limit),
      },
    };
  }


  // ==========================

    async searchByIC(query: string, paginationQuery: PaginationQueryDto) {
      return this.searchWithPaginationQueryBuilder(
        'vesselInspection',
        VesselInspection,
        [
          { alias: 'captain', relation: 'nakhoda' },
        ],
        [
          'captain.ic',
        ],
        query ?? '',
        paginationQuery,
    );
  }

    

  /**
   * Search using QueryBuilder to support nested relations and pagination.
   * @param entityName The alias name for the main entity (e.g. 'vessel')
   * @param tableName The entity table name/class
   * @param joins Relation aliases and their join conditions
   * @param searchableFields Fields to apply LIKE on (including relations like 'owner.name')
   * @param query The search string
   * @param pagination Pagination object
   */
  async searchWithPaginationQueryBuilder<T extends Record<string, any>>(
    entityName: string,
    tableName: any,
    joins: { alias: string; relation: string }[],
    searchableFields: string[],
    query: string,
    pagination: PaginationOptions = {},
  ): Promise<PaginatedResult<T>> {
    const page = pagination.page ?? 1;
    const limit = pagination.limit ?? 10;
    const skip = (page - 1) * limit;

    const qb = this.dataSource.getRepository<T>(tableName).createQueryBuilder(entityName);

    // Apply joins for relations
    for (const join of joins) {
      qb.leftJoinAndSelect(`${entityName}.${join.relation}`, join.alias);
    }

    // Build dynamic WHERE with OR conditions
    if (query) {
      searchableFields.forEach((field, index) => {
        const param = `q${index}`;
        const condition = `LOWER(${field}) LIKE LOWER(:${param})`; // ✅ this is the fix

        const paramValue = `%${query}%`;

        if (index === 0) {
          qb.where(condition, { [param]: paramValue });
        } else {
          qb.orWhere(condition, { [param]: paramValue });
        }
      });
    }

    qb.skip(skip).take(limit);

    const [data, total] = await qb.getManyAndCount();

    return {
      data,
      meta: {
        total,
        page,
        limit,
        pageCount: Math.ceil(total / limit),
      },
    };
  }
}
