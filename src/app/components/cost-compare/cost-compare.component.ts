import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-cost-compare',
  standalone: true,
  imports: [HeaderComponent, ProductListComponent],
  templateUrl: './cost-compare.component.html',
  styleUrl: './cost-compare.component.scss',
})
export class CostCompareComponent {}
