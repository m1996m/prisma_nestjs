import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArbitreModule } from './arbitre/arbitre.module';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [
      ArbitreModule,
      DemoModule,
      prisma.$on('query', (e) => {
          console.log('Query: ' + e.query)
          console.log('Params: ' + e.params)
          console.log('Duration: ' + e.duration + 'ms')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
