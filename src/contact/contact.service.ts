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

  async createContact(userId: number, number: string) {
    return this.prisma.user
      .findUnique({
        where: { id: userId }
      })
      .then((existingUser) => {
        if (!existingUser) {
          throw new Error('User does not exist.');
        }
        return this.prisma.contact.create({
          data: {
            userId,
            number
          }
        });
      })
      .catch((error) => {
        throw error;
      });
  }

  async updateContact(userId: number, id: number, number: string) {
    return this.prisma.user
      .findUnique({
        where: { id: Number(userId) }
      })
      .then((existingUser) => {
        if (!existingUser) {
          throw new Error('User does not exist.');
        }
        return this.prisma.contact.update({
          where: { id: Number(id) },
          data: { number }
        });
      })
      .catch((error) => {
        throw error;
      });
  }
}
