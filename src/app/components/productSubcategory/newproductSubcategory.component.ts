import {Component } from '@angular/core'
import {productCategoryService} from '../../shared/productCategory.service'
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({

	templateUrl:'newproductSubcategory.component.html',
	providers:[productCategoryService]

})

export class newproductSubcategory {
	private paramName:String
	constructor(private category : productCategoryService, private router:Router,private route: ActivatedRoute){
        	this.paramName = route.snapshot.params['id']; 
    }

addNew(categoryFormData){
	this.category.addsubCategory(categoryFormData).subscribe(res=>{
		if(res){
			this.router.navigate(['/productSubcategory'+this.paramName])
		}
	})
}
}