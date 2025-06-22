import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { TiendaService } from '../../services/tienda.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = '';

  constructor(
    private tiendaService: TiendaService
  ) { }
  ngOnInit(): void {
    this.tiendaService.getProducts().subscribe({
      next: (products) => {
        this.products = products.slice(0, 10);
        this.filteredProducts = this.products;
        this.categories = Array.from(new Set(this.products.map(product => product.category)));
      },
      error: (error) => {

        console.error('Error fetching products:', error);
      }
    });
  }
  filterByCategory() {
    this.selectedCategory;
    if (this.selectedCategory) {
      this.filteredProducts = this.products.filter(product => product.category === this.selectedCategory);
    } else {
      this.filteredProducts = this.products;
    }
  }
}
