import { HttpException, Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { object, string, date, array, number } from 'yup';
import validateSchema from 'src/utils/validateSchema';
import schema from './schema';

@Injectable()
export class CoinService {
  async getAssets(body: any) {
    const url = process.env.URL_GET_ASSETS;
    const response: AxiosResponse<any> = await axios.get(url);
    validateSchema(schema.assetsSchema, response);

    // const validate = ajv.compile(assetsSchema);
    // const valid = validate(response);
    // console.log({ valid });

    // await res.validate(response).catch((err) => {
    //   throw new HttpException(err.message, 400);
    // });
    return response.data;
  }
}
