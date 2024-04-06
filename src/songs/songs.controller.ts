import { Controller, Get, Post } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Get()
  getAllSongs(): String {
    return 'returning all the songs';
  }

  @Post()
  addSong(): String {
    return 'song added successfully';
  }
}
