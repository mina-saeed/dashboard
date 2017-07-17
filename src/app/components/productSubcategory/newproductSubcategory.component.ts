import {Component } from '@angular/core'
import {productCategoryService} from '../../shared/productCategory.service'
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({

	templateUrl:'newproductSubcategory.component.html',
	providers:[productCategoryService]

})

export class newproductSubcategory {
	private categoryId:string
	constructor(private category : productCategoryService, private router:Router,private route: ActivatedRoute
	,private flash:FlashMessagesService){
        	this.categoryId = route.snapshot.params['id']; 
    }

addNew(categoryFormData){
		var subcategory: subcategory = categoryFormData;
		subcategory.id = this.categoryId
	    this.category.addsubCategory(subcategory).subscribe(res=>{
		if(res){
		    this.flash.show('Product Subcategory added Successfully', { cssClass: 'alert-success', timeout: 3000 })
			this.router.navigate(['/productSubcategory'+this.categoryId])
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