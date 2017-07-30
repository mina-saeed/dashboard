import {Component } from '@angular/core'
import {categoryService} from '../../shared/categories.service'
import {Router} from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';

@Component({

	templateUrl:'updateCategory.component.html',
	providers:[categoryService]

})

export class updateCategory {
	private id: String;
	constructor(private category : categoryService, private router:Router ,private route: ActivatedRoute,private flashMessage: FlashMessagesService){
        		this.id = route.snapshot.params['id'];
    }

updateCategory(categoryFormData){
    var categoryFormDataID:category = categoryFormData;
    categoryFormDataID.id = this.id+'';
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

