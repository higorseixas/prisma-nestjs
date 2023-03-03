import {
  Controller,
  Get,
  InternalServerErrorException,
  HttpCode,
  HttpStatus,
  Post,
  Body,
  Put,
  Req
} from '@nestjs/common';
import { query } from 'express';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get('allContacts')
  @HttpCode(HttpStatus.OK)
  async getAllContacts() {
    const contact = await this.contactService
      .getAllContacts()
      .then((result) => {
        return result;
      })
      .catch((e) => {
        console.log(e);
        throw new InternalServerErrorException();
      });
    return contact;
  }

  @Post('createContact')
  @HttpCode(HttpStatus.OK)
  async createContact(@Body() body) {
    const cretUser = await this.contactService
      .createContact(body.userId, body.number)
      .then((result) => {
        return result;
      })
      .catch((e) => {
        console.log(e);
        throw new InternalServerErrorException();
      });
    return cretUser;
  }

  @Put('updateContact')
  @HttpCode(HttpStatus.OK)
  async updateContact(@Req() req) {
    const udateContact = await this.contactService
      .updateContact(req.query.id, req.query.userId, req.query.number)
      .then((result) => {
        return result;
      })
      .catch((e) => {
        console.log(e);
        throw new InternalServerErrorException();
      });
    return udateContact;
  }
}
