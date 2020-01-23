import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public something ;
  public nug = 9;
  public subTotal = this.nug + this.something;
  constructor() { }

  ngOnInit() {
  }

}
