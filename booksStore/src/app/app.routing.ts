import { Routes, RouterModule } from '@angular/router';
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
import { registerModuleFactory } from '../../node_modules/@angular/core/src/linker/ng_module_factory_loader';


const appRoutes: Routes = [
    { path: 'books/home', component: HomeComponent, },
   
    { path: 'books/products', component: ProductsComponent, },
    { path: 'books/cart', component: CartComponent, },
 { path: 'books/account', component: AccountComponent,children:[
    { path: 'books/login', component: LoginComponent, },
    { path: 'books/register', component: RegisterComponent, },

 ] },
  

    // otherwise redirect to home
    { path: '',  component: HomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes);