import {Component } from '@angular/core'
import {categoryService} from '../../shared/categories.service'
import {Router} from '@angular/router'
@Component({

	templateUrl:'newCategory.component.html',
	providers:[categoryService]

})

export class newCategory {

	constructor(private category : categoryService, private router:Router){}

addNew(categoryFormData){
	this.category.addCategory(categoryFormData).subscribe(res=>{
		if(res){
			this.router.navigate(['/medicineCategory'])
		}
	})
}
}