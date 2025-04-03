import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private kosar: any[] = [];
  private kosarSub = new BehaviorSubject<any[]>([]);

  private productsApi = "https://webshop-X8fcd0-default-rtdb.europe-west1.firebasedatabase.app/megrendelesek.json";

  constructor(private http: HttpClient) {}

  
  getCart(): Observable<any[]> {
    return this.kosarSub.asObservable();
  }
  addProduct(product: any) {
    throw new Error('Method not implemented.');
  }
  
  
  addToCart(product: any) {
    const existingItem = this.kosar.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      if (!product.quantity) product.quantity = 1;
      this.kosar.push(product);
    }
    this.kosarSub.next(this.kosar);  
  }

  
  getCartItems() {
    return this.kosar;
  }

 
  getTotalPrice(): number {
    return this.kosar.reduce((total, item) => total + item.ar * item.quantity, 0);
  }

 
  removeFromCart(productId: string) {
    this.kosar = this.kosar.filter(item => item.id !== productId);
    this.kosarSub.next(this.kosar);  
  }

  
  order() {
    return this.http.post(this.productsApi, this.kosar);
  }
}


