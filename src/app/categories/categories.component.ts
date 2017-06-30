import {Component , OnInit} from '@angular/core'
import {categoryService} from '../shared/categories.service'
@Component({
	templateUrl:'categories.component.html',
	providers:[categoryService]
})


export class categories implements OnInit{
		private allCategories =[] 
		constructor(private categoryObj: categoryService){}

		ngOnInit(){
			 this.categoryObj.getAllCategories().subscribe(res=>{
			 	this.allCategories = res
			 	return this.allCategories
			 })

		}

}