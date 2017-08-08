import { Component } from '@angular/core'
import { productCategoryService } from '../../shared/productCategory.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({

	templateUrl: 'newproductSubcategory.component.html',
	providers: [productCategoryService]

})

export class newproductSubcategory {
	private categoryId: string
	engname: string
	arbname: string
	engdesc: string
	arbdesc: string
	search: string
	filesToUpload: Array<File> = [];
	constructor(private category: productCategoryService, private router: Router, private route: ActivatedRoute
		, private flash: FlashMessagesService) {
		this.categoryId = route.snapshot.params['id'];
	}

	fileChange(event) {
		this.filesToUpload = <Array<File>>event.target.files;
	}
	addNew() {
		if (this.filesToUpload.length > 0) {
			const files: Array<File> = this.filesToUpload;
			const formData = new FormData();

			formData.append("image", files[0], files[0]['name']);

			var name = {
				name_ar: this.arbname,
				name_english: this.engname
			}
			var description = {
				english_description: this.engdesc,
				arabic_description: this.arbdesc
			}
			formData.append('name', this.engname)
			formData.append('description', this.engdesc)
			formData.append('searchable', this.search)
			formData.append('id',this.categoryId)
			this.category.addsubCategory(formData).subscribe(res => {
				if (res) {
					this.flash.show('Product Subcategory added Successfully', { cssClass: 'alert-success', timeout: 3000 })
					this.router.navigate(['/productsubCategory/' + this.categoryId])
				}
			})
		}
		else {
			this.flash.show('Please add an Image', { cssClass: 'alert-danger', timeout: 3000 })

		}
	}
}

interface subcategory {
	id: string,
	name: {
		name_ar: string,
		name_english: string,
	},
	description: {
		english_description: string,
		arabic_description: string
	},
	searchable: string
}