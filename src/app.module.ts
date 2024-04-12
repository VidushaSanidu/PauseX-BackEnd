import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Song } from './songs/entity/song.entity';
import { Artist } from './Users/entity/artist.entity';
import { User } from './Users/entity/user.entity';
import { Playlist } from './playlists/playlist.entity';
import { PlaylistModule } from './playlists/playlist.module';

@Module({
  imports: [
    SongsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: process.env.DB_PASSWORD,
      database: 'pauseXDB',
      entities: [Song, Artist, User, Playlist],
      synchronize: true,
    }),
    PlaylistModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  // test database
  // constructor(private dataSource: DataSource) {
  //   console.log(dataSource.driver.database);
  // }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('songs');
  }
}
