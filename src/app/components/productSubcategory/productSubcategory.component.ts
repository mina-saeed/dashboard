import {Component , OnInit} from '@angular/core'
import {productCategoryService} from '../../shared/productCategory.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

@Component({
	templateUrl:'productSubcategory.component.html',
	providers:[productCategoryService]
})

export class productSubcategory implements OnInit{
		private allProductCategories =[] 
        private paramName:String
		constructor(private categoryObj: productCategoryService,private router: Router,private route: ActivatedRoute){
              this.paramName = route.snapshot.params['id'] 
        }

		ngOnInit(){
			 this.categoryObj.getAllsubCategories(this.paramName).subscribe(res=>{
			 	this.allProductCategories = res
			 	return this.allProductCategories
			 })

		}

		addnew(){
			this.router.navigate(['/newproductsubCategory/'+this.paramName])
		}

}