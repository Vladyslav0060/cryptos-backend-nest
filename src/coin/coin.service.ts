import { HttpException, Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { ValidateIf } from 'class-validator';
import { object, string, date, array, number, mixed } from 'yup';

export const res = object({
  data: array()
    .required()
    .of(
      object().shape({
        id: string().required(),
        symbol: string().required(),
        name: string().required(),
        image: string().required(),
        current_price: number().required(),
        market_cap: number().required(),
        market_cap_rank: number().required(),
        total_volume: number().required(),
        high_24h: number().required(),
        low_24h: number().required(),
        price_change_24h: number().required(),
        price_change_percentage_24h: number().required(),
        market_cap_change_24h: number().required(),
        market_cap_change_percentage_24h: number().required(),
        circulating_supply: number().required(),
        total_supply: number().required(),
        ath: number().required(),
        ath_change_percentage: number().required(),
        ath_date: date().required(),
        atl: number().required(),
        atl_change_percentage: number().required(),
        atl_date: date().required(),
        last_updated: date().required(),
      }),
    ),
});

@Injectable()
export class CoinService {
  async getAssets(body: any) {
    const url = process.env.URL_GET_ASSETS;
    const response: AxiosResponse<any> = await axios.get(url);
    console.log(response);
    await res.validate(response).catch((err) => {
      throw new HttpException(err.message, 400);
    });
    return response.data;
  }
}
