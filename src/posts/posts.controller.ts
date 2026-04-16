import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get('/')
  getAllPosts(): string {
    return 'Will share all the posts here';
  }
  @Get('/:postId')
  getPostDetails(@Param('postId') postId: string): string {
    return `Will share the post with ID: ${postId}`;
  }
  @Post('/')
  createNewPost(): string {
    return 'Will create a new post';
  }
  @Delete('/:postId')
  deletePost(@Param('postId') postId: string): string {
    return `Will delete the post with ID: ${postId}`;
  }
  @Put('/:postId/like')
  likePost(@Param('postId') postId: string): string {
    return `Will like the post with ID: ${postId}`;
  }
  @Delete('/:postId/like')
  unlikePost(@Param('postId') postId: string): string {
    return `Will unlike the post with ID: ${postId}`;
  }
}
