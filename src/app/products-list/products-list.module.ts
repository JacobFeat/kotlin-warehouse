import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { ProductsListComponent } from './products-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MaterialModule } from '../material.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsFiltersComponent } from './products-filters/products-filters.component';

@NgModule({
  declarations: [ProductsListComponent, ProductCardComponent, AddProductComponent, ProductsFiltersComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [ProductsListComponent]
})
export class ProductsListModule {}
