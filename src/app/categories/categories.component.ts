import {Component , OnInit} from '@angular/core'
import {categoryService} from '../shared/categories.service'
import {Router} from '@angular/router'

@Component({
	templateUrl:'categories.component.html',
	providers:[categoryService]
})


export class categories implements OnInit{
		private allCategories =[] 
		constructor(private categoryObj: categoryService,private router:Router){}

		ngOnInit(){
			 this.categoryObj.getAllCategories().subscribe(res=>{
				 console.log(res)
			 	this.allCategories = res
			 	return this.allCategories
			 })

		}

		addnew(id){
			this.router.navigate(['/newsubCategory/'+id])
		}

		showsub(id){
			this.router.navigate(['/subCategory/'+id])

		}

}