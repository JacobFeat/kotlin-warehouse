import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Category } from './enums/category';
import { Product } from './product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products!: Product[];

  isFormOpened = false;

  categories!: string[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products as Product[];
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe();
    this.products = this.products.filter((product) => product.id !== id);
  }

  onFormOpen(): void {
    this.isFormOpened = !this.isFormOpened;
  }

  onCategorySelect(category: string) {
    if(category === Category.All) {
      this.getAllProducts();
    } else {
      this.productsService.getOnlySelectedCategory(category).subscribe(products => {
        this.products = products as Product[];
      });
    }
  }

  addProduct(form: FormGroup) {
    const req = this.prepareAddProductReq(form.value);
    this.productsService.addProduct(req).subscribe(() => {
      this.getAllProducts();
      this.getAllCategories();
    });
  }

  getAllCategories() {
    return this.productsService.getAllCategories().subscribe((categories) => {
      this.categories = categories as string[];
    });
  }

  prepareAddProductReq(product: Product) {
    const req = {
      title: product.title,
      price: product.price,
      description: product.description,
      imgUrl: product.imgUrl,
      category: product.category,
    };
    return req;
  }
}
