import { Controller, Get, Param } from '@nestjs/common';

@Controller('hashtags')
export class HashtagsController {
  @Get()
  getHashTags(): string {
    return 'all to tags';
  }
  @Get('/:tag/posts')
  getPostForHashTag(@Param() param: { tag: string }): string {
    return 'one tag' + param.tag;
  }
}
