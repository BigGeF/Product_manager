import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AllProductComponent } from './all-product/all-product.component';
import { GetOneProductComponent } from './get-one-product/get-one-product.component';


const routes: Routes = [
  {
    path:'new',
    component:NewProductComponent
  },{
    path:'edit/:id',
    component:EditProductComponent
  },{
    path:'',
    component:AllProductComponent
  },{
    path:'detial/:id',
    component:GetOneProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
