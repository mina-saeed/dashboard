import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface productcategoryModel {
    name_en: string;
    description_en: string;
    image: string

}

@Component({
    selector: 'alert',
    template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <button type="button" class="close" (click)="close()" >&times;</button>
                     <h2 class="modal-title"><strong>{{name_en}}</strong></h2>
                   </div>
                   <div class="modal-body">
              <img src={{image}} alt="No Image" width="550" height="300">
              <h4><strong>{{description_en}}</strong></h4>
                 </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-primary" (click)="close()">OK</button>
                   </div>
                </div>
             </div>`
})
export class productCategoryDialog extends DialogComponent<productcategoryModel, null> implements productcategoryModel {
    name_en: string;
    description_en: string;
    image: string

    constructor(dialogService: DialogService) {
        super(dialogService);
    }
}
