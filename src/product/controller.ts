import { Controller, Get } from '@nestjs/common';
import { ProductService } from './service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {
    this.productService = productService;
  }

  @Get()
  getAll(): any {
    return this.productService.getProducts();
  }
}
