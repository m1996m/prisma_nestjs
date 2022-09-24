import { Module } from '@nestjs/common';
import { ArbitreController } from './arbitre.controller';
import { ArbitreService } from './arbitre.service';
import {PrismaModule} from "nestjs-prisma";

@Module({
  imports:[PrismaModule],
  controllers: [ArbitreController],
  providers: [ArbitreService]
})
export class ArbitreModule {}
