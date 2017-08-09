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
	constructor(private categoryObj: productCategoryService,private flashMessage: FlashMessagesService, private router: Router, private route: ActivatedRoute) {
		this.paramName = route.snapshot.params['id']
	}

	ngOnInit() {
		this.categoryObj.getAllsubCategories(this.paramName).subscribe(res => {
			console.log(res)
			this.allProductCategories = res
			console.log(this.allProductCategories)
			return this.allProductCategories
		})

	}

	addnew() {
		this.router.navigate(['/newproductsubCategory/' + this.paramName])
	}

	update(category) {
		this.categoryObj.store(category)
		this.router.navigate(['/updateproductsubCategory/' + this.paramName])
	}

	delete(id) {
		this.categoryObj.deletesubCategory(id).subscribe(res => {
			if (res == 200) {
				this.flashMessage.show('ProductSubcategory deleted successfully', { cssClass: 'alert-success', timeout: 3000 })
				location.reload()
			}
		});
	}

}

