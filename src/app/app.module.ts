import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { AppComponent } from './components/app/app.component';
import {routes, RoutingComponents} from './Routes/app.routing';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ChartsModule } from 'ng2-charts';
import {NgxPaginationModule} from 'ngx-pagination';
import { Pipe,PipeTransform} from '@angular/core';
import { MainPipe} from './filter/filter.module'
import { MainPipe2} from './filter/filter2.module'


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents

  ],
  imports: [
    BrowserModule, FormsModule , HttpModule, routes,FlashMessagesModule,ChartsModule,
    NgxPaginationModule,MainPipe,MainPipe2
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
