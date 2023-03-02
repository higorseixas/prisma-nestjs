import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Contact } from '@prisma/client';

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

  async getContactsByUserId(userId: number) {
    return this.prisma.contact
      .findMany({
        where: { userId: userId },
        select: { id: true, number: true, userId: true }
      })
      .then((result) => {
        return result;
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
