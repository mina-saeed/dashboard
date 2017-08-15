import { Component, OnInit,ViewChild } from '@angular/core'
import { productService } from '../../shared/products.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import { DialogService } from "ng2-bootstrap-modal";
import { productDialog } from './dialog.component';

@Component({
	templateUrl: 'products.component.html',
	providers: [productService]
})

export class products implements OnInit {
	private products = []
	public selecteditem: Object

	constructor(private dialogService:DialogService,private prod: productService, private router: Router, private flashMessage: FlashMessagesService) { }
	ngOnInit() {
		this.prod.allProducts().subscribe(res => {
			this.products = res
			return this.products
		})
	}

	delete(id) {
		this.prod.deleteProduct(id).subscribe(res => {
			if (res == 200) {
				this.flashMessage.show('Product deleted successfully', { cssClass: 'alert-success', timeout: 3000 })
				for (var i = 0; i < this.products.length; i++) {
					if (this.products[i]._id == id) {
						this.products.splice(i, 1)
						return this.products;
					}
				}
			}
		});
	}

	update(product) {
		this.prod.store(product)
		this.router.navigate(['/updateProduct']);
	}

	show(product) {
	this.dialogService.addDialog(productDialog, {name_en:product.name_en, description_en:product.description_en, price: product.price,
	category:product.category,pharmacyID:product.pharmacyID,barcode:product.barcode,image:product.ProductImage});
   // print in console

    /*this.modal.
        .size('lg')
        .showClose(true)
        .title('A simple Alert style modal ww')
        .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
        .open();*/
  }
}