import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { AddSongDto } from './dto/addSong.dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  getAllSongs(): String {
    return this.songsService.getAllSongs();
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return 'song';
  }

  @Post()
  addSong(@Body() addSongDto: AddSongDto): Date {
    return this.songsService.addSong(addSongDto);
  }
}
