import { ApiProperty } from '@nestjs/swagger';

export class DemoModel {
    @ApiProperty()
    name: string;
    @ApiProperty()
    hint?: string;
}