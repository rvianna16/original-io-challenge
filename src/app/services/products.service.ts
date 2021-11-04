import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: any[] = [
    {
      id: 1,
      title: 'Rasteira tira dedo',
      category: 'sapatos',
      code: 'RT 0568 | 03.07.0653',
      price: 55.2,
      description:
        'Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.',
      sizes: [33, 34, 36, 37, 38, 39, 40],
      colors: [
        {
          name: 'Fucsia',
          hex: '#a9095E',
        },
        {
          name: 'Azul marinho',
          hex: '#6B85C1'
        },
        {
          name: 'Marrom',
          hex: '#A14830'
        },
        {
          name: 'Preto',
          hex: '#000'
        }
      ],
      images: [
        {
          name: 'Foto 01',
          url: 'https://i.imgur.com/JhQ9txD.png',
          
        },
        { 
          name: 'Foto 02',
          url: 'https://i.imgur.com/0nXYAwF.png',
          
        },
        {
          name: 'Foto 03',
          url: 'https://i.imgur.com/dj5RpuL.png',
          
        },
      ],
    },
    {
      id: 2,
      title: 'Sapatenis',
      category: 'sapatos',
      code: 'RT 0568 | 03.07.0653',
      price: 59.2,
      description:
        'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
      sizes: [33, 34, 36, 37, 38],
      colors: [
        {
          name: 'Fucsia',
          hex: '#a9095E',
        },        
        {
          name: 'Marrom',
          hex: '#A14830'
        },
        {
          name: 'Cinza',
          hex: '#c1c1c1'
        }
      ],
      images: [
        {
          name: 'Foto 01',
          url: 'https://i.imgur.com/dj5RpuL.png',
        },
        {
          name: 'Foto 02',
          url: 'https://i.imgur.com/JhQ9txD.png',
          
        },
      ],
    },
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    let products = this.getProducts();

    for (let product of products) {
      if (product.id == id) {
        return product;
      }
    }
  }

  constructor() {}
}
