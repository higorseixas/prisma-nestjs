import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService
  ) {}

  async getAllContacts() {
    return this.prisma.contact
      .findMany({ select: { id: true, number: true } })
      .then((result) => result)
      .catch((e) => {
        console.log(e);
      });
  }
}
