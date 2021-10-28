import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any[] = [
    { 
      id: 1,
      title: 'Rasteira tira dedo',
      category: 'sapatos',
      price: 55.20,
      description: 'Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.',
      sizes: [33, 34, 36, 37, 38, 39, 40],
      colors: ['Roxo', 'Azul marinho', 'Marrom', 'Preto'],
      images: [{
        name: 'Foto da rasteira',
        url: 'https://i.imgur.com/z7ETXxK.png'
      }]

    },
    {
      id: 2,
      title: 'Sapatenis',
      category: 'sapatos',
      price: 59.20,
      description: 'Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.',
      sizes: [33, 34, 36, 37, 38, 39, 40],
      colors: ['Roxo', 'Azul marinho', 'Marrom', 'Preto'],
      images: [{
        name: 'Foto da rasteira',
        url: 'https://i.imgur.com/z7ETXxK.png'
      }]
    }
  ]

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    let products = this.getProducts();

    for (let product of products) {
      if(product.id == id) {
        return product;
      }
    }
  }

  constructor() { }
}
