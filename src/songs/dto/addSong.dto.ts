import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class AddSongDto {
  @IsString()
  @IsNotEmpty()
  readonly title;

  @IsString({ each: true })
  @IsArray()
  @IsNotEmpty()
  readonly artists;

  @IsDateString()
  @IsNotEmpty()
  readonly releasedDate: Date;

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration: Date;
}
