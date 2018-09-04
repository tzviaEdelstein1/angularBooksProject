import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  booksFromServer: any[] = [];
  constructor(private booksService: BooksService) { }

  ngOnInit() {

    let valueFlag = localStorage.getItem("flagSearch");
    let searchValue = localStorage.getItem("searchValue");
    if (valueFlag=="true") {
      this.searchBooks(searchValue);
      localStorage.setItem("flagSearch", "false");
      var input = document.getElementById("searchInput") as HTMLInputElement;
      input.value = searchValue;


    }
  }
  searchBooks(val) {
    localStorage.setItem("searchValue", val);
    this.booksService.getbooksByFilter(val).subscribe(res => this.booksFromServer = JSON.parse(JSON.stringify(res["items"])));
  }
}
