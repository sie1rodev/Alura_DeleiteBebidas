import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { milkshakes } from '../../data/products';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home-page',
  imports: [ProductCard],
  standalone: true,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  milkshakes: Product[] = milkshakes;

}
