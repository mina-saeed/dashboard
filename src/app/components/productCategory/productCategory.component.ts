import { Component, OnInit } from '@angular/core'
import { productCategoryService } from '../../shared/productCategory.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import { DialogService } from "ng2-bootstrap-modal";
import { productCategoryDialog } from './pcdialog.component';
@Component({
	templateUrl: 'productCategory.component.html',
	providers: [productCategoryService]
})

export class productCategory implements OnInit {
	private allProductCategories = []
	p: number = 1;

	constructor(private dialogService: DialogService, private categoryObj: productCategoryService, private router: Router, private flashMessage: FlashMessagesService) { }

	ngOnInit() {
		this.categoryObj.getAllCategories().subscribe(res => {
			this.allProductCategories = res
			return this.allProductCategories
		})

	}


	addnew(id) {
		this.router.navigate(['/newproductsubCategory/' + id])
	}

	showsub(id) {
		this.router.navigate(['/productsubCategory/' + id])

	}

	delete(id, index) {
		this.categoryObj.deleteCategory(id).subscribe(res => {
			if (res == 200) {
				window.scroll(0, 0)
				this.flashMessage.show('ProductCategory deleted successfully', { cssClass: 'alert-success', timeout: 3000 })
				this.allProductCategories.splice(index, 1)
				return this.allProductCategories;
			}
		});
	}

	update(category) {
		this.categoryObj.store(category)
		this.router.navigate(['/updateProductCategory']);
	}

	show(category) {
		this.dialogService.addDialog(productCategoryDialog, {
			name_en: category.name_en, description_en: category.description_en,
			image: category.CategoryImage
		});
	}

}