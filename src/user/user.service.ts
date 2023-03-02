import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService
  ) {}

  async getAllUsers() {
    return this.prisma.user
      .findMany({ select: { id: true, nome: true, email: true } })
      .then((result) => result)
      .catch((e) => {
        console.log(e);
      });
  }
}
