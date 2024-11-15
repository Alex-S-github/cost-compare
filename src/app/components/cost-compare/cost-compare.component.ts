import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-cost-compare',
  standalone: true,
  imports: [HeaderComponent, ProductListComponent, ProductFormComponent],
  templateUrl: './cost-compare.component.html',
  styleUrl: './cost-compare.component.scss',
})
export class CostCompareComponent {
  isShowProductForm: boolean = false;
}
