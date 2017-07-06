import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import {routes, RoutingComponents} from './Routes/app.routing';
import { FlashMessagesModule } from 'angular2-flash-messages';



@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents

  ],
  imports: [
    BrowserModule, FormsModule , HttpModule, routes,FlashMessagesModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
