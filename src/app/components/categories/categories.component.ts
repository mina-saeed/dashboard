import { Component, OnInit } from '@angular/core'
import { categoryService } from '../../shared/categories.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
	templateUrl: 'categories.component.html',
	providers: [categoryService]
})


export class categories implements OnInit {
	private allCategories = []
	constructor(private categoryObj: categoryService, private router: Router, private flashMessage: FlashMessagesService) { }

	ngOnInit() {
		this.categoryObj.getAllCategories().subscribe(res => {
			console.log(res)
			this.allCategories = res
			return this.allCategories
		})

	}

	delete(id) {
		this.categoryObj.deleteCategory(id).subscribe(res => {
			if (res == 200) {
				this.flashMessage.show('Category deleted successfully', { cssClass: 'alert-success', timeout: 3000 })
				location.reload()
			}
		});
	}

	update(category) {
		this.categoryObj.store(category)
		this.router.navigate(['/updateCategory']);
	}

}