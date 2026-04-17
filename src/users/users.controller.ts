import {
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(UsersService) private readonly usersService: UsersService,
  ) {}
  @Get('/:userId')
  getUserByUserId(@Param('userId') userId: string): string {
    return 'getUserByUserId ' + userId;
  }

  @Get('/username')
  getUserByUsername(
    @Param('username') username: string,
  ): Promise<UserEntity | null> {
    return this.usersService.getUserByUsername(username);
  }

  @Post('/')
  createUser(): string {
    return 'createUser';
  }

  @Patch('/:userId')
  updateUserDetails(@Param('userId') userId: string): string {
    return 'updateUserDetails ' + userId;
  }
  @Put('/:userId/follow')
  followUser(@Param('userId') userId: string): string {
    return 'followUser ' + userId;
  }
  @Delete('/:userId/follow')
  unfollowUser(@Param('userId') userId: string): string {
    return 'unfollowUser ' + userId;
  }
  @Get('/:userId/followers')
  getFollowersOfUsers(@Param('userId') userId: string): string {
    return 'getFollowers ' + userId;
  }

  @Put('/:userId/followees')
  getFolloweesOfUsers(@Param('userId') userId: string): string {
    return 'get Followees of given user ' + userId;
  }
}
