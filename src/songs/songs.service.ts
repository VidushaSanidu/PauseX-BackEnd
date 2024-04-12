import { Injectable } from '@nestjs/common';
import { AddSongDto } from './dto/addSong.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './entity/song.entity';
import { Repository } from 'typeorm';
import { Artist } from 'src/Users/entity/artist.entity';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song) private songRepository: Repository<Song>,
    @InjectRepository(Artist) private artistRepository: Repository<Artist>,
  ) {}

  getAllSongs(): String {
    return 'returning all the songs';
  }

  async addSong(addSongDto: AddSongDto): Promise<Song> {
    const song = new Song();
    song.title = addSongDto.title;
    song.duration = addSongDto.duration;
    song.lyrics = addSongDto.lyrics;
    song.releasedDate = addSongDto.releasedDate;

    const artists = await this.artistRepository.findBy(addSongDto.artists);
    song.artists = artists;
    return await this.songRepository.save(song);
  }
}
