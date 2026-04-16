import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:userId')
  getUserByUserId(@Param('userId') userId: string): string {
    return 'getUserByUserId ' + userId;
  }

  @Get('/username')
  getUserByUsername(@Param('username') username: string): string {
    return 'getUserByUsername ' + username;
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
