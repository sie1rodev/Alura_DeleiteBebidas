import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { iceCoffee, icecreams, milkshakes, smoothies } from '../data/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getMilkshakes():Product[]{
    return milkshakes
  }
  getIceCreams():Product[]{
    return icecreams
  }
  getSmoothies():Product[]{
    return smoothies
  }
  getIceCoffes():Product[]{
    return iceCoffee
  }
}
