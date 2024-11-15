import { Injectable, signal } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsItems = signal<IProduct[]>([]);

  addProduct(product: IProduct): void {
    const updatedProduct = {
      ...product,
      pricePerUnit: (product.price / product.weight) * 1000,
    };
    this.productsItems.update((items) => {
      const updatedItems = [...items, updatedProduct];
      return this.calculateDerivedFields(updatedItems);
    });
  }

  removeProduct(product: IProduct): void {
    this.productsItems.update((items) => {
      const updatedItems = items.filter((item) => item !== product);
      return this.calculateDerivedFields(updatedItems);
    });
  }

  private calculateDerivedFields(items: IProduct[]): IProduct[] {
    if (items.length <= 1) {
      return items;
    }

    const minPricePerUnit = Math.min(
      ...items.map((item) => item.pricePerUnit || Infinity)
    );

    return items.map((item) => {
      const pricePerUnit = item.pricePerUnit || item.price / item.weight;
      return {
        ...item,
        pricePerUnit,
        isBestPrice: pricePerUnit === minPricePerUnit,
        priceDifference:
          ((pricePerUnit - minPricePerUnit) / minPricePerUnit) * 100,
      };
    });
  }
}
