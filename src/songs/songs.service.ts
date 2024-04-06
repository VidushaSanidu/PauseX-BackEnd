import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  getAllSongs(): String {
    return 'returning all the songs';
  }

  addSong(): String {
    return 'song added successfully';
  }
}
