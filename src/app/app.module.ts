import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { CartComponent } from './components/cart/cart.component';
import { FillterComponent } from './components/fillter/fillter.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { PizzaComponent } from './components/pizzas/pizza/pizza.component';
import { ItemComponent } from './components/other/item/item.component';
import { CheckoutComponent } from './components/shared/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    PizzasComponent,
    CartComponent,
    FillterComponent,
    CartItemComponent,
    PizzaComponent,
    ItemComponent,
    CheckoutComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
