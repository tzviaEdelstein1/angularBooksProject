import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: any[]=[];
  constructor(private booksService:BooksService) { }

  ngOnInit() {

this.booksService.removeSubject.subscribe({next:(book:any)=>{

let index=this.cartProducts.indexOf(book);
this.cartProducts.splice(index,1);
localStorage.setItem("cartProducts",JSON.stringify(this.cartProducts));
}})
    if (localStorage.getItem('cartProducts'))
    this.cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
  }

}
