import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShirtComponent } from './shirt/shirt.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, ShirtComponent, CartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
