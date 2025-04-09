import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { SearchService } from '../../search.service';

@Component({
    selector: 'app-candies',
    templateUrl: './candies.component.html',
    styleUrls: ['./candies.component.css'],
    standalone: false
})
export class CandiesComponent {

  @Input() candies: any;
  showNotification = false;
  searchText='';
  order='';

  constructor(private cartService: CartService, private cdr:ChangeDetectorRef, private searchServ:SearchService) {
    
    this.searchServ.getSearch().subscribe(
      (text:any)=>{
        console.log('Frissítés', text);
        this.searchText=text;
        console.log('this.searchText', this.searchText);
      }
    );

  }

  kosarbaRak(candy: any, quantity_in: string) {
    const termek = {
      ...candy,       
      picture: candy.picture,
      mennyiseg: parseInt(quantity_in)
    };
    
    this.cartService.addToCart(termek);  
    console.log(candy, 'hozzáadva a kosárhoz.');
    console.log('Kosár tartalma:', this.cartService.getCartItems());

    this.showNotification = true;
    this.cdr.detectChanges();  

    
    setTimeout(() => {
      this.showNotification = false;
      this.cdr.detectChanges();
      console.log('Értesítés eltüntetve:', this.showNotification);
    }, 500);
  }
  sortProducts(order: string) {
    this.order=order;

  }
  

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}




