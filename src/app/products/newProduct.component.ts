import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {productService} from '../shared/products.service'
import {productCategoryService} from '../shared/productCategory.service'


@Component({

	templateUrl: 'newProduct.component.html',
	providers:[productService,productCategoryService]
})

export class newProduct implements OnInit{
	private allProductCategories =[] 
	constructor(private product: productService,private productcategoryObj: productCategoryService,private router: Router){}
	
	ngOnInit(){
			 this.productcategoryObj.getAllCategories().subscribe(res=>{
			 	this.allProductCategories = res
			 	return this.allProductCategories
			 })

		}
	
	addProduct(productForm){
		this.product.addProduct(productForm).subscribe(res=>{
		if(res){
			this.router.navigate(['/products'])
		}
	})
	}
}
