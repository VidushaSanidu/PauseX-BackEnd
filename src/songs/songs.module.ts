import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './entity/song.entity';
import { Artist } from 'src/Users/entity/artist.entity';
import { Playlist } from 'src/playlists/playlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Song, Artist, Playlist])],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
