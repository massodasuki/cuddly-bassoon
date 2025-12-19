import { PartialType } from '@nestjs/mapped-types';
import { CreateNelayanDaratCardsDto } from './create-nelayan_darat_cards.dto';

export class UpdateNelayanDaratCardsDto extends PartialType(CreateNelayanDaratCardsDto) {}