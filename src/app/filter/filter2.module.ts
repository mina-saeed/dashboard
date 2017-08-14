import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {filter2} from "./filter2.pipe";

@NgModule({
  declarations:[filter2],
  imports:[CommonModule],
  exports:[filter2]
})

export class MainPipe2{}