import {Component } from '@angular/core'
import {productCategoryService} from '../../shared/productCategory.service'
import {Router} from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';

@Component({

	templateUrl:'updateProductCategory.component.html',
	providers:[productCategoryService]

})

export class updateProductCategory {
	private id: String;
	constructor(private category : productCategoryService, private router:Router,private flash:FlashMessagesService,private route: ActivatedRoute){
                		this.id = route.snapshot.params['id'];

    }

updateProductCategory(categoryFormData){
    var categoryFormDataID:category = categoryFormData;
    categoryFormDataID.id = this.id+'';

	this.category.updateCategory(categoryFormDataID).subscribe(res=>{
		if(res){
		    this.flash.show('Product Category updated Successfully', { cssClass: 'alert-success', timeout: 3000 })
			this.router.navigate(['/productCategory'])
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
