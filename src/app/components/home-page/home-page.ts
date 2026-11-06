import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../interfaces/product';
import { iceCoffee, icecreams, milkshakes, smoothies } from '../../data/products';

@Component({
  selector: 'app-home-page',
  imports: [ProductCard],
  standalone: true,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  milkshakes: Product[] = milkshakes;
  icecreams: Product[] = icecreams;
  smoothies: Product[] = smoothies;
  iceCoffee: Product[] = iceCoffee;

}
