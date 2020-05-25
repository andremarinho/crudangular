import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { UsersComponent } from './views/users/users.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';


const routes: Routes = [
{ path: '' ,  component: HomeComponent},
{ path: 'users',   component: UsersComponent},
{ path: 'products',component: ProductCrudComponent},
{ path:'product-reads', component: ProductReadComponent},
{ path: 'products-create', component: ProductsCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
