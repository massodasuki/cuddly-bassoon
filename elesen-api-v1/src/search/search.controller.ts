import { Controller, Get, Query} from '@nestjs/common';
import { SearchService } from './search.service';
import { ApiQuery, ApiTags, ApiOkResponse  } from '@nestjs/swagger';
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto';

@ApiTags('Search')
@Controller('/api/v1/applications/search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('ic')
  searchByIC(
      @Query('q') q: string,
      @Query() paginationQuery: PaginationQueryDto,
    ) {
    return this.searchService.searchByIC(q, paginationQuery);
  }

  @Get('vessel')
    searchByVesselNo(
      @Query('q') q: string,
      @Query() paginationQuery: PaginationQueryDto,
    ) {
    return this.searchService.searchVesselNo(q, paginationQuery);
  }
}
