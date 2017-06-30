import {Component , OnInit} from '@angular/core'
import {productCategoryService} from '../shared/productCategory.service'
@Component({
	templateUrl:'productCategory.component.html',
	providers:[productCategoryService]
})

export class productCategory implements OnInit{
		private allProductCategories =[] 
		constructor(private categoryObj: productCategoryService){}

		ngOnInit(){
			 this.categoryObj.getAllCategories().subscribe(res=>{
			 	this.allProductCategories = res
			 	return this.allProductCategories
			 })

		}

}