import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import {DemoDto} from "../dtos/demo.dto";
import {DemoModel} from "../models/demo.model";

@Injectable()
export class ArbitreService {

    constructor() {
    }
    prisma =new PrismaClient();
    getOne(id: number) {
        return this.prisma.demo.findUniqueOrThrow({ where: { id: id } });
    }
    async getAll() {
        const demo=await this.prisma.demo.findMany();
        if(!demo)
            return null;
        return demo;
    }
    async create(data: any) {
        const demo= await this.prisma.demo.create({data});
        if(!demo)
            return null;
        return data;
    }

}
