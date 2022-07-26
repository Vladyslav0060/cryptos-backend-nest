import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoinService } from './coin.service';
import { CoinController } from './coin.controller';
import { LoggerMiddleware } from 'src/utils/logger.middleware';

@Module({
  providers: [CoinService],
  controllers: [CoinController],
})
export class CoinModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
