import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Components/Home/home.component';
import { NotFoundComponent } from './Components/NotFound/notFound.component';
import { ProductComponent } from './Components/Product/product.component';
import { ProductsComponent } from './Components/Products/products.component';
import { CheckoutComponent } from './Components/Checkout/checkout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
