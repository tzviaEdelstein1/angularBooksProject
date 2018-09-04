import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { routing }  from './app.routing';
import { UserService } from './shared/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './shared/services/books.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    ProductPreviewComponent,
    ProductDetailsComponent,
    CartComponent,
    CartProductComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [UserService,BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
