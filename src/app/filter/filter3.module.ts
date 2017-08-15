import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {filter3} from "./filter3.pipe";

@NgModule({
  declarations:[filter3],
  imports:[CommonModule],
  exports:[filter3]
})

export class MainPipe3{}