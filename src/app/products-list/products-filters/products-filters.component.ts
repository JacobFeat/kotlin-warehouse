import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrls: ['./products-filters.component.scss'],
})
export class ProductsFiltersComponent {
  defaultValue = 'Wszystkie';
  
  @Output() selectedCategory = new EventEmitter<string>();

  @Input() categories!: string[];

  onSelect(category: string): void {
    this.selectedCategory.emit(category);
  }
}
