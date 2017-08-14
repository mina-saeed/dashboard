import { Component, OnInit } from '@angular/core'
import { productCategoryService } from '../../shared/productCategory.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
	templateUrl: 'productCategory.component.html',
	providers: [productCategoryService]
})

export class productCategory implements OnInit {
	private allProductCategories = []
	p: number = 1;

	constructor(private categoryObj: productCategoryService, private router: Router, private flashMessage: FlashMessagesService) { }

	ngOnInit() {
		this.categoryObj.getAllCategories().subscribe(res => {
			console.log(res)
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

	delete(id) {
		this.categoryObj.deleteCategory(id).subscribe(res => {
			if (res == 200) {
				this.flashMessage.show('ProductCategory deleted successfully', { cssClass: 'alert-success', timeout: 3000 })
				for (var i = 0; i < this.allProductCategories.length; i++) {
					if (this.allProductCategories[i]._id == id) {
						this.allProductCategories.splice(i, 1)
						return this.allProductCategories;
					}
				}
			}
		});
	}

	update(category) {
		this.categoryObj.store(category)
		this.router.navigate(['/updateProductCategory']);
	}

}