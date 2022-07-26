import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoinController } from 'src/coin/coin.controller';
import { CoinService } from 'src/coin/coin.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './utils/logger.middleware';

@Module({
  imports: [],
  controllers: [AppController, CoinController],
  providers: [AppService, CoinService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
