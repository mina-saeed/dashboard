import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { AppComponent } from './components/app/app.component';
import {routes, RoutingComponents} from './Routes/app.routing';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents

  ],
  imports: [
    BrowserModule, FormsModule , HttpModule, routes,FlashMessagesModule,ChartsModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
