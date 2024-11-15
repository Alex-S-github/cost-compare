import { Component, inject, WritableSignal } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { IProduct } from '../../interfaces/product.interface';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  productService = inject(ProductService);
  productsItems: WritableSignal<IProduct[]> = this.productService.productsItems;
}
