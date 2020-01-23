import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InfoComponent } from './info/info.component';
import { EtComponent } from './et/et.component';
import { FormsModule } from '@angular/forms';
import { ItemsComponent } from './items/items.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoreComponent,
    ContactComponent,
    CheckoutComponent,
    InfoComponent,
    EtComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
