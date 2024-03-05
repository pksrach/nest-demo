import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getProducts(): any {
    return [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3', price: 300 },
    ];
  }

  getProductById(id: number): any {
    return { id: 1, name: 'Product 1', price: 100 };
  }

  createProduct(product: any): any {
    return product;
  }

  updateProduct(product: any): any {
    return product;
  }

  deleteProduct(id: number): any {
    return id;
  }
}
