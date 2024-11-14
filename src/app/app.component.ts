import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CostCompareComponent } from './components/cost-compare/cost-compare.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CostCompareComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cost-compare';
}
