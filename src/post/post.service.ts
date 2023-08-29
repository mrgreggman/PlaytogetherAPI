import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostModule } from './post.module';
import { Post } from '@prisma/client';

@Injectable()
export class PostService {
    constructor(private readonly prisma: PrismaService) { }

    async getAllPosts(): Promise<Post[]> {
        return this.prisma.post.findMany();
    }

    async getPost(id: number): Promise<Post | null> {
        return this.prisma.post.findUnique({ where: { id: Number(id) } });
    }

    async createPost(data: Post): Promise<Post> {
        return this.prisma.post.create({
            data
        })
    }

    async updatePost(id: number, message: string, image: string, postpublish: Date ): Promise<Post> {
        return this.prisma.post.update({
            where: { id: Number(id) },
            data: { message, image, postpublish }
        });
    }

    async deletepost(id: Number): Promise<Post> {
        return this.prisma.post.delete({
            where: { id: Number(id)}
        });
    }
}