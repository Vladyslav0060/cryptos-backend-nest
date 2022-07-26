import { Body, Controller, Get } from '@nestjs/common';
import { CoinService } from './coin.service';

@Controller('/coin')
export class CoinController {
  constructor(private readonly coinService: CoinService) {}
  @Get()
  async getAssets(@Body() body: any) {
    return await this.coinService.getAssets(body);
  }
}
