import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { RegisterationComponent } from './components/registeration/registeration.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';

const routes: Routes = [
 
  {path: 'registeration', component: RegisterationComponent},
  {path: 'login',component:LoginComponent},
  //{path: '', redirectTo: 'user', pathMatch: 'full'},
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
   {path: 'update-profile/:id', component: UpdateProfileComponent},
   { path: 'products/:productId', component: ProductDetailsComponent },
   { path: 'cart', component: CartComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }