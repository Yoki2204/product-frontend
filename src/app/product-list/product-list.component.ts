import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { SharedModule } from '../shared/shared-module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';

const PRODUCTS: Product[] = [
  { id: 1, name: 'Product 1', type: 'Grocery', description: 'Category 1', price: 100 },
  { id: 2, name: 'Product 2', type: 'Grocery', description: 'Category 2', price: 200 },
  { id: 3, name: 'Product 3', type: 'Grocery', description: 'Category 3', price: 300 },
  { id: 4, name: 'Product 4', type: 'Grocery', description: 'Category 1', price: 400 },
  { id: 5, name: 'Product 5', type: 'Grocery', description: 'Category 2', price: 500 },
  { id: 6, name: 'Product 5', type: 'Grocery', description: 'Category 2', price: 500 },
  { id: 7, name: 'Product 1', type: 'Grocery', description: 'Category 1', price: 100 },
  { id: 8, name: 'Product 2', type: 'Grocery', description: 'Category 2', price: 200 },
  { id: 9, name: 'Product 3', type: 'Grocery', description: 'Category 3', price: 300 },
  { id: 10, name: 'Product 4', type: 'Grocery', description: 'Category 1', price: 400 },
  { id: 11, name: 'Product 5', type: 'Grocery', description: 'Category 2', price: 500 },
  { id: 12, name: 'Product 5', type: 'Grocery', description: 'Category 2', price: 500 },
  // Add more products as needed
];


@Component({
  selector: 'app-product-list',
  imports: [SharedModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductListComponent {
  displayedColumns: string[] = ['name', 'type', 'description', 'price', 'action'];
  dataSource = new MatTableDataSource(PRODUCTS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  searchText: string = '';

  constructor(private router: Router,private productService: ProductService) {

   }

  ngOnInit(): void {

   // this.paginator.pageSize = 5;
this.getAllProducts();
  }

  ngAfterViewInit(){
    this.paginator.pageSize= 5;
    this.paginator.pageIndex =0;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  addProduct() {
    this.router.navigate(['/add-product']);
  }

  editProduct(id: number) {
    this.router.navigate(['/edit-product', id]);
  }
  getAllProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  applyFilter(): void {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }
}
