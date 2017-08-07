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
	fileList: FileList;
    formData: FormData = new FormData();

	constructor(private product: productService, private productcategoryObj: productCategoryService, private router: Router, private flash: FlashMessagesService) { }

	ngOnInit() {
		/*this.productcategoryObj.getAllCategories().subscribe(res => {
			this.allProductCategories = res
			return this.allProductCategories
		})*/

	}

	fileChange(event) {
		this.fileList = event.target.files;
		console.log(this.fileList)
	}

	addProduct() {
         /* this.product.addProduct(productFormData).subscribe(res => {
            if (res) {
                this.flash.show('Product added Successfully', { cssClass: 'alert-success', timeout: 3000 })
                this.router.navigate(['/products'])
            }
        })
	}*/

  if (this.fileList.length > 0) {
      let file: File = this.fileList[0];
	  this.formData.append('image', file);
	
	var name = {
		name_ar: this.arbname,
		name_english: this.engname
	}
	var description = {
		english_description: this.engdesc,
		arabic_description: this.arbdesc
	}

	this.formData.append('name',JSON.stringify(name))
	this.formData.append('description',JSON.stringify(description))
	this.formData.append('price',this.price)
	this.formData.append('barcode',this.bar)
	this.formData.append('category',this.category)
	this.formData.append('pharmacyID',this.pharmacyID)
	console.log(this.formData.get('name'))
		this.product.addProduct(this.formData).subscribe(res => {
			if (res) {
				this.flash.show('Product added Successfully', { cssClass: 'alert-success', timeout: 3000 })
				this.router.navigate(['/products'])
			}
		})
	}
	else{
    this.flash.show('Please add an Image', { cssClass: 'alert-danger', timeout: 3000 })

	}
	}
}
