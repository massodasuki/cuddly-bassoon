import { ApiProperty } from '@nestjs/swagger'

export class MinimalUserDto {
  @ApiProperty({
    description: 'User name',
    example: 'John Doe',
  })
  name: string

  @ApiProperty({
    description: 'Username',
    example: 'johndoe',
  })
  username: string

  @ApiProperty({
    description: 'Start date',
    example: '2023-01-01',
  })
  start_date: Date

  @ApiProperty({
    description: 'End date',
    example: '2023-12-31',
  })
  end_date: Date

  @ApiProperty({
    description: 'District',
    example: 'Kuala Lumpur',
  })
  district: string
}
