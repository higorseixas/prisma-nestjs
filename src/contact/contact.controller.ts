import {
  Controller,
  Get,
  InternalServerErrorException,
  HttpCode,
  HttpStatus
} from '@nestjs/common';
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
}
