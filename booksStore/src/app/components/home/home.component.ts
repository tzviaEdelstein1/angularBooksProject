import { Component, OnInit } from '@angular/core';
import { Store } from '../../shared/models/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

    this.store=new Store();
    this.store.name="books shop";
    this.store.img="";
    this.store.city="Bney Brak";
    this.store.street="Rabbi Aciva";
    this.store.numHouse=12;
   }
store:Store;
  ngOnInit() {
  }

}
