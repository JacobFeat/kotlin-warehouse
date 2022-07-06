import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  myForm!: FormGroup;

  @Output() addedProduct = new EventEmitter<FormGroup>();

  constructor() {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      title: new FormControl(''),
      price: new FormControl(''),
      category: new FormControl(''),
      description: new FormControl(''),
      imgUrl: new FormControl(''),
    });
  }

  onSubmit(form: FormGroup) {
    this.addedProduct.emit(form);
  }
}
