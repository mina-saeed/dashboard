import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { productService } from '../../shared/products.service'
import { productCategoryService } from '../../shared/productCategory.service'
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({

	templateUrl: 'newProduct.component.html',
	providers: [productService, productCategoryService]
})

export class newProduct implements OnInit {
	private allProductCategories = []
	bar: string
	engname: string
	arbname: string
	engdesc: string
	arbdesc: string
	price: string
	category: string
	subCategory: string
	pharmacyID: string
	filesToUpload: Array<File> = [];


	constructor(private product: productService, private productcategoryObj: productCategoryService, private router: Router, private flash: FlashMessagesService) { }

	ngOnInit() {
		this.productcategoryObj.getAllCategories().subscribe(res => {
			this.allProductCategories = res
			this.category = this.allProductCategories[0].name_en
			this.pharmacyID = '1'
			return this.allProductCategories
		})

	}

	fileChange(event) {
		this.filesToUpload = <Array<File>>event.target.files;
	}

	addProduct() {
		if (this.filesToUpload.length > 0) {
			const files: Array<File> = this.filesToUpload;
			const formData = new FormData();

			formData.append("image", files[0], files[0]['name']);
			formData.append('name_en', this.engname)
			formData.append('name_ar', this.arbname)
			formData.append('description_en', this.engdesc)
			formData.append('description_ar', this.arbdesc)
			formData.append('price', this.price)
			formData.append('barcode', this.bar)
			formData.append('category', this.category)
			formData.append('pharmacyID', this.pharmacyID)
			this.product.addProduct(formData).subscribe(res => {
				if (res) {
					this.router.navigate(['/products'])
					this.flash.show('Product added Successfully', { cssClass: 'alert-success', timeout: 3000 })

				}
			})
		}
		else {
			window.scroll(0, 0)
			this.flash.show('Please add an Image', { cssClass: 'alert-danger', timeout: 3000 })

		}
	}
}
