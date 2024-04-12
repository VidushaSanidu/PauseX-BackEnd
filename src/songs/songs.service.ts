import { Injectable } from '@nestjs/common';
import { AddSongDto } from './dto/addSong.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './entity/song.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song) private songRepository: Repository<Song>,
  ) {}

  getAllSongs(): String {
    return 'returning all the songs';
  }

  async addSong(addSongDto: AddSongDto): Promise<Song> {
    const song = new Song();
    song.title = addSongDto.title;
    song.artists = addSongDto.artists;
    song.duration = addSongDto.duration;
    song.lyrics = addSongDto.lyrics;
    song.releasedDate = addSongDto.releasedDate;

    return await this.songRepository.save(song);
  }
}
