import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { SharedModule } from '../shared/shared-module';
import { Product } from '../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-manage-product',
  imports: [SharedModule],
  templateUrl: './manage-product.component.html',
  styleUrl: './manage-product.component.css',
  providers: [ProductService]
})
export class ManageProductComponent {

  showSuccessMessage = false;
  showErrorMessage = false;
  products: Product[] = [];
  productForm: Product = {
    name: '',
    type: '',
    price: 0,
    description: ''
  };
  oldProductForm: any;
  isEditMode = false;

  constructor(private productService: ProductService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    //this.productForm.id =
    //this.isEditMode = this
    debugger;
    this.route.params.subscribe((params) => {
      debugger;
      if (params['id']) {
        this.productForm.id = params['id'];
        this.getProductById(params['id']);
        this.isEditMode = this.productForm.id ? true : false;
      }
    });
  }

  getProductById(id: number): void {
    debugger;
    this.productService.getProductById(id).subscribe((data) => {
      debugger;
      this.productForm = data;
      this.oldProductForm = data;
    });
  }



  submitForm(): void {
    this.showSuccessMessage = false;
    this.showErrorMessage = false;
    if (this.isEditMode) {
      this.productService.updateProduct(this.productForm.id!, this.productForm)
        .subscribe(() => {
          this.resetForm();
        });
    } else {
      if (this.isValid()) {
        this.productService.createProduct(this.productForm)
          .subscribe((response) => {
            if (response) {
              this.showErrorMessage = false;
              this.showSuccessMessage = true;
              this.resetForm();
            }

          });
      } else {
        this.showSuccessMessage = false;
        this.showErrorMessage = true;
      }
    }
  }

  isValid() {
    if (this.productForm.name && this.productForm.description && this.productForm.price && this.productForm.type) {
      return true;
    } else {
      return false;
    }
  }


  resetForm(): void {
    debugger;
    this.showErrorMessage = false;
    this.showSuccessMessage = false;
    if (this.oldProductForm.id) {
      this.getProductById(this.oldProductForm.id);
    } else {
      this.productForm = {
        name: '',
        type: '',
        price: 0,
        description: ''
      };
    }
  }

  backToProduct(){
    this.router.navigate(['']);
  }
}

