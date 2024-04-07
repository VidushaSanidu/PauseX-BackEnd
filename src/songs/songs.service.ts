import { Injectable } from '@nestjs/common';
import { AddSongDto } from './dto/addSong.dto';

@Injectable()
export class SongsService {
  getAllSongs(): String {
    return 'returning all the songs';
  }

  addSong(addSongDto: AddSongDto): Date {
    return addSongDto.releasedDate;
  }
}
