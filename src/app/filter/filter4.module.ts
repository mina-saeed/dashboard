import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {filter4} from "./filter4.pipe";

@NgModule({
  declarations:[filter4],
  imports:[CommonModule],
  exports:[filter4]
})

export class MainPipe4{}