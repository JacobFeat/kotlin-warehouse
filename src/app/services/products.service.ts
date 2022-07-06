import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products-list/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get('http://localhost:8080/api/all');
  }

  getAllCategories() {
    return this.http.get('http://localhost:8080/api/get/categories');
  }

  getOnlySelectedCategory(category: string) {
    return this.http.get('http://localhost:8080/api/get/' + category);
  }

  addProduct(req: any) {
    const headers = { 'content-type': 'application/json' };
    // const body = JSON.stringify(req);
    const body = req;
    console.log(body);

    return this.http.post('http://localhost:8080/api/new', body, {
      headers: headers,
    });
  }

  deleteProduct(id: string) {
    return this.http.delete('http://localhost:8080/api/delete/' + id);
  }
}
