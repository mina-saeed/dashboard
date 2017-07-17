import {Component } from '@angular/core'
import {productCategoryService} from '../../shared/productCategory.service'
import {Router} from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({

	templateUrl:'newProductCategory.component.html',
	providers:[productCategoryService]

})

export class newProductCategory {

	constructor(private category : productCategoryService, private router:Router,private flash:FlashMessagesService){}

addNew(categoryFormData){
	this.category.addCategory(categoryFormData).subscribe(res=>{
		if(res){
		    this.flash.show('Product Category added Successfully', { cssClass: 'alert-success', timeout: 3000 })
			this.router.navigate(['/productCategory'])
		}
	})
}
}