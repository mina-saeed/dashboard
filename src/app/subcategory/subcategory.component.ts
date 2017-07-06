import {Component , OnInit} from '@angular/core'
import {categoryService} from '../shared/categories.service'
import { ActivatedRoute } from '@angular/router';

@Component({
	templateUrl:'subcategory.component.html',
	providers:[categoryService]
})


export class subcategory implements OnInit{
		private paramName:String
		private allCategories =[] 
		constructor(private categoryObj: categoryService,private route: ActivatedRoute
){  this.paramName = route.snapshot.params['id'] 
}

		ngOnInit(){
			 this.categoryObj.getAllsubCategories(this.paramName).subscribe(res=>{
			 	this.allCategories = res
			 	return this.allCategories
			 })

		}

}