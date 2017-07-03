import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import {login} from './login.component'
import {home} from './home.component'
import {sidebar} from './sidebar.component'
import {logout} from './logout.component'
import {medicines} from './medicines/medicines.component'
import {newMedicine} from './medicines/newMedicine.component'
import {products} from './products/products.component'
import {newProduct} from './products/newProduct.component'
import {categories} from './categories/categories.component'
import {newCategory} from './categories/newCategory.component'
import {productCategory} from './productCategory/productCategory.component'
import {newProductCategory} from './productCategory/newProductCategory.component'
import {routes, RoutingComponents} from './Routes/app.routing'



@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    home,
		login ,
		logout ,
		medicines,
		newMedicine,
		products, 
		newProduct,
		categories,
		newCategory,
		productCategory,
		newProductCategory,
    sidebar

  ],
  imports: [
    BrowserModule, FormsModule , HttpModule, routes
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
