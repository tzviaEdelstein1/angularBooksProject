import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  constructor(private booksService:BooksService) {
   }
  @Input()
  book:any;
  ngOnInit() {
  }
  removefromCart(){

this.booksService.removeSubject.next(this.book);
  }
}
