import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';  

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
    standalone: false
})
export class CheckoutComponent implements OnInit {
  order = {
    lastName: '',
    firstName: '',
    postalCode: '',
    city: '',
    street: '',
    houseNumber: '',
    email: '',
    phoneNumber: '',
  };

  isSubmitting = false;
  successMessage: string | null = null;
  orderTotal: number | null = null;
  paymentType: string = 'Készpénzes fizetés';

  cartItems: any[] = [];
  user: any;

  constructor(private cartService: CartService, private authService: AuthService, private router: Router) {}  
  ngOnInit(): void {
    this.loadCartItems();
    this.getUserEmail();
  }

  loadCartItems() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.orderTotal = this.cartService.getTotalPrice();
  }

  getUserEmail() {
    this.authService.getCurrentUser().subscribe((user) => {
      this.user = user;
      if (this.user && this.user.email) {
        this.order.email = this.user.email;
      }
    });
  }

  submitOrder(orderForm: NgForm) {
    if (orderForm.valid) {
      this.isSubmitting = true;

      this.cartService.addOrder({
        ...this.order,
        total: this.orderTotal,
        paymentType: this.paymentType,
      });

      this.successMessage = 'A rendelés sikeresen leadva!';

      
      setTimeout(() => {
        this.isSubmitting = false;
        orderForm.resetForm();  
        this.router.navigate(['/']);  
      }, 3000);  

      this.cartService.clearCart();
      this.clearFields();
    }
  }

  clearFields() {
    this.orderTotal = null;
    this.paymentType = 'Készpénzes fizetés';
  }
}









