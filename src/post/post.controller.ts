import { 
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
         } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostType } from '@prisma/client';

@Controller('posts')
export class PostController {

    constructor(private readonly postService: PostService) { }
    @Get()
    async getAllPost(): Promise<PostType[]> {
        return this.postService.getAllPosts();
    }

    @Post()
    async createPost(@Body() postData: PostType): Promise<PostType> {
        return this.postService.createPost(postData);
    } 

    @Get(':id')
    async getPost(@Param('id') id: number, message: string, image: string, postpublish: Date ): Promise<PostType | null> {
        return this.postService.getPost(id);
    }

    @Put(':id')
    async Update(@Param('id') id: number, message: string, image: string, postpublish: Date ): Promise<PostType> {
        return this.postService.updatePost(id, message, image, postpublish);
    }

    @Delete(':id')
    async delete(@Param('id') id: number, message: string, image: string, postpublish: Date ): Promise<PostType> {
        return this.postService.deletepost(id);
    }
}
    