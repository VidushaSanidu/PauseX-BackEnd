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
import { Song } from './entity/song.entity';

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
  async addSong(@Body() addSongDto: AddSongDto): Promise<Song> {
    return this.songsService.addSong(addSongDto);
  }
}
