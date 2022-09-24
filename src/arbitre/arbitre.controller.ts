import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ArbitreService} from "./arbitre.service";
import {DemoDto} from "../dtos/demo.dto";
import {DemoModel} from "../models/demo.model";

@Controller('arbitre')
export class ArbitreController {
    constructor(private readonly ar:ArbitreService) {
    }
    @Get()
    getDemo(){
        return this.ar.getAll();
    }

    //src/products/products.controller.ts
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.ar.getOne(id);
    }
    @Post('create')
    create(@Body() data: DemoModel) {
        return this.ar.create(data);
    }
}
