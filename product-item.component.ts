import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from '../product-item/product'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input()
product: Product

@Output()
OnSelected: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

select() {
  this.OnSelected.emit(this.product);
}

}
