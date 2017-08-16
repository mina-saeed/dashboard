import { Component, OnInit } from '@angular/core'
import { productCategoryService } from '../../shared/productCategory.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import { DialogService } from "ng2-bootstrap-modal";
import { productSubcategoryDialog } from './pscdialog.component';

@Component({
	templateUrl: 'productSubcategory.component.html',
	providers: [productCategoryService]
})

export class productSubcategory implements OnInit {
	private allProductCategories = []
	private paramName: String
	constructor(private dialogService: DialogService, private categoryObj: productCategoryService, private flashMessage: FlashMessagesService, private router: Router, private route: ActivatedRoute) {
		this.paramName = route.snapshot.params['id']
	}

	ngOnInit() {
		this.categoryObj.getAllsubCategories(this.paramName).subscribe(res => {
			this.allProductCategories = res
			return this.allProductCategories
		})

	}

	addnew() {
		this.router.navigate(['/newproductsubCategory/' + this.paramName])
	}

	update(category) {
		this.categoryObj.store(category)
		this.router.navigate(['/updateproductsubCategory'])
	}

	delete(id) {
		this.categoryObj.deletesubCategory(id).subscribe(res => {
			if (res == 200) {
				window.scroll(0,0)
				this.flashMessage.show('ProductSubcategory deleted successfully', { cssClass: 'alert-success', timeout: 3000 })
				for (var i = 0; i < this.allProductCategories.length; i++) {
					if (this.allProductCategories[i]._id == id) {
						this.allProductCategories.splice(i, 1)
						return this.allProductCategories;
					}
				}
			}
		});
	}

	show(category) {
		this.dialogService.addDialog(productSubcategoryDialog, {
			name_en: category.name_en, description_en: category.description_en,
			image: category.subImage
		});
	}

}

