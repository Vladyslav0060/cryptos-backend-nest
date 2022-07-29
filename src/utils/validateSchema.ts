import { HttpException } from '@nestjs/common';
import Ajv from 'ajv';
const ajv = new Ajv();

const validateSchema = (schema: any, data: any) => {
  const validate: any = ajv.compile(schema);
  if (!validate(data)) throw new HttpException(validate.errors, 400);
  return data;
};

export default validateSchema;
