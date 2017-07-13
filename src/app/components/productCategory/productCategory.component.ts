import {Component , OnInit} from '@angular/core'
import {productCategoryService} from '../../shared/productCategory.service'
import {Router} from '@angular/router'

@Component({
	templateUrl:'productCategory.component.html',
	providers:[productCategoryService]
})

export class productCategory implements OnInit{
		private allProductCategories =[] 
		constructor(private categoryObj: productCategoryService,private router:Router){}

		ngOnInit(){
			 this.categoryObj.getAllCategories().subscribe(res=>{
			 	this.allProductCategories = res
			 	return this.allProductCategories
			 })

		}


		addnew(id){
			this.router.navigate(['/newproductsubCategory/'+id])
		}

		showsub(id){
			this.router.navigate(['/productsubCategory/'+id])

		}

}