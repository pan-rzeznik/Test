import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { HerobarComponent } from './components/herobar/herobar.component';
import { HomeComponent } from './components/home/home.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { CreateAccountsComponent } from './components/create-accounts/create-accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    NewsletterComponent,
    HerobarComponent,
    HomeComponent,
    AccountsComponent,
    CreateAccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
