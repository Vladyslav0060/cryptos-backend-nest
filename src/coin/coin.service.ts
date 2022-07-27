import { HttpException, Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { object, string, date, array, number } from 'yup';
import Ajv from 'ajv';
const ajv = new Ajv();

const testSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
  },
};

const schema = {
  type: 'object',
  properties: {
    data: {
      type: 'array',
      properties: {
        id: { type: 'string' },
        symbol: { type: 'string' },
        name: { type: 'string' },
        image: { type: 'string' },
        current_price: { type: 'number' },
        market_cap: { type: 'number' },
        market_cap_rank: { type: 'number' },
        total_volume: { type: 'number' },
        high_24h: { type: 'number' },
        low_24h: { type: 'number' },
        price_change_24h: { type: 'number' },
        price_change_percentage_24h: { type: 'number' },
        market_cap_change_24h: { type: 'number' },
        market_cap_change_percentage_24h: { type: 'number' },
        circulating_supply: { type: 'number' },
        total_supply: { type: 'number' },
        ath: { type: 'number' },
        ath_change_percentage: { type: 'number' },
        ath_date: { type: 'number' },
        atl: { type: 'number' },
        atl_change_percentage: { type: 'number' },
        atl_date: { type: 'string' },
        last_updated: { type: 'string' },
      },
    },
  },
  required: ['data'],
};

@Injectable()
export class CoinService {
  async getAssets(body: any) {
    const url = process.env.URL_GET_ASSETS;
    const response: AxiosResponse<any> = await axios.get(url);

    const testObj = {
      id: 1,
    };
    const testValidate = ajv.compile(testSchema);
    const testValid = testValidate(testObj);
    console.log({ testValid });

    const validate = ajv.compile(schema);
    const valid = validate(response);
    console.log({ valid });
    // await res.validate(response).catch((err) => {
    //   throw new HttpException(err.message, 400);
    // });
    return response.data;
  }
}
