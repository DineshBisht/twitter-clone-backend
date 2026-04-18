import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { HashtagsModule } from './hashtags/hashtags.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'twitter-clone',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logger: 'advanced-console',
      logging: 'all',
    }),
    UsersModule,
    PostsModule,
    HashtagsModule,
    AuthModule,
  ],
  providers: [AppService, UsersService],
})
export class AppModule {}
