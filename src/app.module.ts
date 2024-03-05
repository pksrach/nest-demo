import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiTokenCheckMiddleware } from './middleware/api-token-check-middleware';
import { LoggerMiddleware } from './middleware/LoggerMiddleware';
import { ProductModule } from './product/module';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'product', method: RequestMethod.ALL });
  }
}
