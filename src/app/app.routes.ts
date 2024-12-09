import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ManageProductComponent } from './manage-product/manage-product.component';

export const routes: Routes = [  {
  path: '',
  component: ProductListComponent,
},
{
  path:'add-product',
  component:ManageProductComponent
},
{
  path:'edit-product/:id',
  component:ManageProductComponent
},
{ path: '**', redirectTo: '' }];
