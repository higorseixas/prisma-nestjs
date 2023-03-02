import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { HttpModule } from '@nestjs/axios';
import { ContactController } from './contact.controller';

@Module({
  controllers: [ContactController],
  providers: [ContactService, PrismaService],
  exports: [ContactService],
  imports: [HttpModule]
})
export class ContactModule {}
