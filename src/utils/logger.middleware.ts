import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, body } = req;
    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length') || '-';
      this.logger.debug(
        `${method} ${originalUrl} ${statusCode} ${contentLength} \nBody: ${JSON.stringify(
          body,
        )}\n+-+-+-+-+-+`,
      );
    });

    next();
  }
}
