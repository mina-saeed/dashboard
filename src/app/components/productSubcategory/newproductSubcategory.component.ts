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
	private paramName:String
	constructor(private category : productCategoryService, private router:Router,private route: ActivatedRoute
	,private flash:FlashMessagesService){
        	this.paramName = route.snapshot.params['id']; 
    }

addNew(categoryFormData){
	this.category.addsubCategory(categoryFormData).subscribe(res=>{
		if(res){
		    this.flash.show('Product Subcategory added Successfully', { cssClass: 'alert-success', timeout: 3000 })
			this.router.navigate(['/productSubcategory'+this.paramName])
		}
	})
}
}