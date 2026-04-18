import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dtos/createUser.dto';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(UsersService) private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}
  // @Get('/:userId')
  // getUserByUserId(@Param('userId') userId: string): string {
  //   return 'getUserByUserId ' + userId;
  // }

  @Get('/@:username')
  async getUserByUsername(
    @Param('username') username: string,
  ): Promise<UserEntity | null> {
    return this.usersService.getUserByUsername(username).catch((error) => {
      if (error === 'Entity not found.') {
        throw new NotFoundException(
          'User not found with username: ' + username,
        );
      }
      throw error;
    });
  }

  @Post('/')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.usersService.createUser(createUserDto);
    if (user) {
      await this.authService.savePassword({
        user: user,
        password: await this.authService.hashPassword(createUserDto.userName),
      });
    }
    return user;
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
