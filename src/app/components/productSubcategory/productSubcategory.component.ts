import { Component, OnInit } from '@angular/core'
import { productCategoryService } from '../../shared/productCategory.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
	templateUrl: 'productSubcategory.component.html',
	providers: [productCategoryService]
})

export class productSubcategory implements OnInit {
	private allProductCategories = []
	private paramName: String
	constructor(private categoryObj: productCategoryService, private flashMessage: FlashMessagesService, private router: Router, private route: ActivatedRoute) {
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

}

