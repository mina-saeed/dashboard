import {Component } from '@angular/core'
import {productCategoryService} from '../../shared/productCategory.service'
import {Router} from '@angular/router'
@Component({

	templateUrl:'newProductCategory.component.html',
	providers:[productCategoryService]

})

export class newProductCategory {

	constructor(private category : productCategoryService, private router:Router){}

addNew(categoryFormData){
	this.category.addCategory(categoryFormData).subscribe(res=>{
		if(res){
			this.router.navigate(['/productCategory'])
		}
	})
}
}