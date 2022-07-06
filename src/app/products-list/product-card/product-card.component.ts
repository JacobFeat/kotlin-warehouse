import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../product';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  @Output() deletedProductId = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onDelete(id: string) {
    this.deletedProductId.emit(id);
  }
}
