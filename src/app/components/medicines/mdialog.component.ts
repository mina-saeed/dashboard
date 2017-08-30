import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface medicineModel {
    name_en: string;
    description_en: string;
    price: string
    category: string
    barcode: string
    image: string
    milligrams: string

}

@Component({
    selector: 'alert',
    template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <button type="button" class="close" (click)="close()" >&times;</button>
                     <h4 class="modal-title">{{name_en}}</h4>
                   </div>
                   <div class="modal-body">
              <img src={{image}} alt="No Image" width="550" height="300">
              <p>Description: <strong>{{description_en}}</strong></p>
              <p>Barcode: <strong>{{barcode}}</strong></p>
              <p>Category: <strong>{{category}}</strong></p>
              <p>Price: <strong>{{price}}</strong></p>
              <p>Milligrams: <strong>{{milligrams}}</strong></p>                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-primary" (click)="close()">OK</button>
                   </div>
                </div>
             </div>`
})
export class medicineDialog extends DialogComponent<medicineModel, null> implements medicineModel {
    name_en: string;
    description_en: string;
    price: string
    category: string
    barcode: string
    image: string
    milligrams: string

    constructor(dialogService: DialogService) {
        super(dialogService);
    }
}
