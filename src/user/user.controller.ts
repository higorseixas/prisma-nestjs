import {
  Controller,
  Get,
  InternalServerErrorException,
  HttpCode,
  HttpStatus,
  Body
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('allUsers')
  @HttpCode(HttpStatus.OK)
  async getUsers() {
    const users = await this.userService
      .getAllUsers()
      .then((result) => {
        return result;
      })
      .catch((e) => {
        console.log(e);
        throw new InternalServerErrorException();
      });
    return users;
  }

  @Get('getContactsByUser')
  @HttpCode(HttpStatus.OK)
  async getContactsByUserID(@Body() body) {
    const contacts = await this.userService
      .getContactsByUserId(body.id)
      .then((result) => {
        return result;
      })
      .catch((e) => {
        console.log(e);
        throw new InternalServerErrorException();
      });
    return contacts;
  }
}
