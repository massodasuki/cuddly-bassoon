import { PartialType } from '@nestjs/mapped-types';
import { CreateNelayanDaratCardsDto } from './create-nelayan-darat-cards.dto';

export class UpdateNelayanDaratCardsDto extends PartialType(CreateNelayanDaratCardsDto) {}