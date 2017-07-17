import { Component } from '@angular/core'
import { categoryService } from '../../shared/categories.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({

	templateUrl: 'newSubcategory.component.html',
	providers: [categoryService]

})

export class newSubcategory {
	private categoryId: string
	constructor(private category: categoryService, private router: Router, private route: ActivatedRoute
		, private flash: FlashMessagesService) {
		this.categoryId = route.snapshot.params['id'];
		console.log(this.categoryId)
	}
	addNew(categoryFormData) {
		var subcategory: subcategory = categoryFormData;
		subcategory.id = this.categoryId
		this.category.addsubCategory(subcategory).subscribe(res => {
			if (res) {
				this.flash.show('Subcategory added Successfully', { cssClass: 'alert-success', timeout: 3000 })
				this.router.navigate(['/subCategory/' + this.categoryId])
			}
		})
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