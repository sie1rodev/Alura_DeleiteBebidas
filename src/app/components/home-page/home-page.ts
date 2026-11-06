import { Component, computed, effect, Pipe, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../interfaces/product';
import { iceCoffee, icecreams, milkshakes, smoothies } from '../../data/products';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [ProductCard, DecimalPipe],
  standalone: true,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  milkshakes: Product[] = milkshakes;
  icecreams: Product[] = icecreams;
  smoothies: Product[] = smoothies;
  iceCoffee: Product[] = iceCoffee;

  cartItens = signal(0);

  showCartAlert = computed(() => this.cartItens() > 0);

  totalValueCart = computed(() => this.cartItens() * 18);

  constructor() {
    effect(() => {
      if (this.cartItens() > 0) {
        console.log(`Carrinho atualizado: ${this.cartItens()} itens`);
      }
    })
  }

  addProduct() {
    this.cartItens.update(itens => itens + 1);
  }

  clearCart() {
    this.cartItens.set(0)
  }
}
