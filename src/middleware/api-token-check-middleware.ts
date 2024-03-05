import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class ApiTokenCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // First check api-token in the header exists or not
    if (!req.headers['api-token']) {
      throw new BadRequestException('API Token is missing');
    } else if (req.headers['api-token'] !== '1234567890') {
      throw new BadRequestException('Invalid API Token');
    }
    next();
  }
}
