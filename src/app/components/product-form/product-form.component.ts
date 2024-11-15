import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  productService = inject(ProductService);

  productForm = new FormGroup({
    weight: new FormControl<number>(0, {
      nonNullable: true,
      validators: Validators.required,
    }),
    price: new FormControl<number>(0, {
      nonNullable: true,
      validators: Validators.required,
    }),
    description: new FormControl<string>(''),
  });

  onSubmit() {
    if (this.productForm.valid) {
      const product = {
        weight: this.productForm.value.weight as number,
        price: this.productForm.value.price as number,
        description: this.productForm.value.description || '',
      } as IProduct;
      this.productService.addProduct(product);
    }
  }
}
