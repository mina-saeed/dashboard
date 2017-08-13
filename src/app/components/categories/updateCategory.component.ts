import {Component,OnInit } from '@angular/core'
import {categoryService} from '../../shared/categories.service'
import {Router} from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({

	templateUrl:'updateCategory.component.html',
	providers:[categoryService]

})

export class updateCategory implements OnInit {
	private old: any
	engname: string
	arbname: string
	engdesc: string
	arbdesc: string
	searchable: string
	constructor(private category : categoryService, private router:Router ,private flashMessage: FlashMessagesService){
	}
		ngOnInit() {
		this.old = JSON.parse(this.category.retreive());
		this.engname = this.old.name.name_english
		this.arbname = this.old.name.name_ar
		this.engdesc = this.old.description.english_description
		this.arbdesc = this.old.description.arabic_description
		this.searchable = this.old.searchable
	}


updateCategory(categoryFormData){
    var categoryFormDataID:category = categoryFormData;
    categoryFormDataID.id = this.old._id;
	this.category.updateCategory(categoryFormDataID).subscribe(res=>{
		if(res){
		    this.flashMessage.show('Category Updated successfully', { cssClass: 'alert-success', timeout: 3000 })                     
			this.router.navigate(['/medicineCategory'])
		}
	})
}
}


interface category {
	id: String,
	name: {
		name_english: string,
		name_ar: string
	},
	description: {
		english_description: string,
		arabic_description: string
	},
    searchable: string
}

