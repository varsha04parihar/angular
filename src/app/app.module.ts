import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { OrderComponent } from './components/order/order.component';
import { LoginComponent } from './components/login/login.component';


import { RegisterationComponent } from './components/registeration/registeration.component';

import { from } from 'rxjs';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { DeleteProfileComponent } from './components/delete-profile/delete-profile.component';

import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
   
    OrderComponent,
    LoginComponent,
  
    RegisterationComponent,
   
    UpdateProfileComponent,
    DeleteProfileComponent,
   
    ProductDetailsComponent,
        CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
