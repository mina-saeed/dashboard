import {Component } from '@angular/core'
import {categoryService} from '../shared/categories.service'
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({

	templateUrl:'newSubcategory.component.html',
	providers:[categoryService]

})

export class newSubcategory {
	private paramName:String
	constructor(private category : categoryService, private router:Router,private route: ActivatedRoute){
	this.paramName = route.snapshot.params['id']; 
	}
addNew(categoryFormData){
	this.category.addsubCategory(categoryFormData).subscribe(res=>{
		if(res){
			this.router.navigate(['/subCategory'+this.paramName])
		}
	})
}
}