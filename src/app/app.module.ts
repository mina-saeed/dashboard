import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppComponent } from './components/app/app.component';
import { routes, RoutingComponents } from './Routes/app.routing';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { Pipe, PipeTransform } from '@angular/core';
import { MainPipe } from './filter/filter.module'
import { MainPipe2 } from './filter/filter2.module'
import { MainPipe3 } from './filter/filter3.module'
import { MainPipe4 } from './filter/filter4.module'
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { productDialog } from './components/products/dialog.component'
import { TruncatePipe } from 'angular2-truncate';
import { productCategoryDialog } from './components/productCategory/pcdialog.component'
import { productSubcategoryDialog } from './components/productSubcategory/pscdialog.component'
import { adsDialog } from './components/ads/adsDialog.component'



@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    productDialog,
    productCategoryDialog,
    productSubcategoryDialog,
    adsDialog,
    TruncatePipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, routes, FlashMessagesModule, ChartsModule,
    NgxPaginationModule, MainPipe, MainPipe2, MainPipe3,MainPipe4, BootstrapModalModule
  ],
  entryComponents: [
    productDialog,
    productCategoryDialog,
    productSubcategoryDialog,
    adsDialog

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
