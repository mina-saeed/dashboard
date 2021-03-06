import { Component } from '@angular/core'
import { productCategoryService } from '../../shared/productCategory.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({

	templateUrl: 'newProductCategory.component.html',
	providers: [productCategoryService]

})

export class newProductCategory {
	engname: string
	arbname: string
	engdesc: string
	arbdesc: string
	filesToUpload: Array<File> = [];

	constructor(private category: productCategoryService, private router: Router, private flash: FlashMessagesService) { }

	fileChange(event) {
		this.filesToUpload = <Array<File>>event.target.files;
	}

	addNew() {

		if (this.filesToUpload.length > 0) {
			const files: Array<File> = this.filesToUpload;
			const formData = new FormData();

			formData.append("image", files[0], files[0]['name']);
			formData.append('name_en', this.engname)
			formData.append('name_ar', this.arbname)
			formData.append('description_en', this.engdesc)
			formData.append('description_ar', this.arbdesc)

			this.category.addCategory(formData).subscribe(res => {
				if (res) {
					this.flash.show('Product Category added Successfully', { cssClass: 'alert-success', timeout: 3000 })
					this.router.navigate(['/productCategory'])
				}
			})
		}


		else {
		    window.scroll(0,0)
			this.flash.show('Please add an Image', { cssClass: 'alert-danger', timeout: 3000 })

		}
	}
}