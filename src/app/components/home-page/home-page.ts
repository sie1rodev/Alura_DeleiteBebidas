import { milkshakes, icecreams, smoothies, iceCoffee } from './../../data/products';
import { Component, computed, effect, inject, Pipe, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../interfaces/product';
import { DecimalPipe } from '@angular/common';
import { ProductsService } from '../../services/products-service';

@Component({
  selector: 'app-home-page',
  imports: [ProductCard, DecimalPipe],
  standalone: true,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  private productService = inject(ProductsService);

  milkshakes: Product[] = this.productService.getMilkshakes()
  icecreams: Product[] = this.productService.getIceCreams()
  smoothies: Product[] = this.productService.getSmoothies()
  iceCoffee: Product[] = this.productService.getIceCoffes()

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
