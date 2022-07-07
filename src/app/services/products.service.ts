import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const PORT = '8080'
const URL = `http://localhost:${PORT}/api/`;

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(URL + 'products/all');
  }

  getAllCategories() {
    return this.http.get(URL + 'categories');
  }

  getOnlySelectedCategory(category: string) {
    return this.http.get(URL + 'category/' + category);
  }

  addProduct(req: any) {
    const headers = { 'content-type': 'application/json' };
    const body = req;
    console.log(body);

    return this.http.post(URL + 'product/', body, {
      headers: headers,
    });
  }

  deleteProduct(id: string) {
    return this.http.delete(URL + 'product/' + id);
  }
}
