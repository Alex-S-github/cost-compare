import { Component, inject, Input } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ProductService } from '../../service/product.service';
import { DecimalPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [NgClass, DecimalPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() product!: IProduct;
  productService = inject(ProductService);

  removeItem(product: IProduct): void {
    this.productService.removeProduct(product);
  }
}
