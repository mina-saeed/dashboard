import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {productService} from '../../shared/products.service'
import {productCategoryService} from '../../shared/productCategory.service'
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({

	templateUrl: 'updateProduct.component.html',
	providers:[productService,productCategoryService]
})

export class updateProduct implements OnInit{
    private allProductCategories =[] ;
    oldproduct: any
    	oldbar: string
oldengname: string
	oldarbname: string
	oldengdesc: string
  oldarbdesc: string
  oldprice: string
  category: string
  subCategory: string
    constructor(private product: productService,private productcategoryObj: productCategoryService,private router: Router,private flash:FlashMessagesService){
     }

	
	ngOnInit(){
    console.log(this.product.retreive())
    		this.oldproduct = JSON.parse ((this.product.retreive()));
    this.oldbar = this.oldproduct.barcode
    this.oldengname = this.oldproduct.name.name_english
    this.oldarbname = this.oldproduct.name.name_ar
    this.oldengdesc = this.oldproduct.description.english_description
    this.oldarbdesc = this.oldproduct.description.arabic_description
    this.oldprice = this.oldproduct.price
    this.category = this.oldproduct.category
    this.subCategory = this.oldproduct.subCategory
			 this.productcategoryObj.getAllCategories().subscribe(res=>{
			 	this.allProductCategories = res
			 	return this.allProductCategories
			 })

		}
	
	updateProduct(productForm){
        var productFormID:product = productForm;
        productFormID.id = this.oldproduct._id;
		this.product.updateProduct(productFormID).subscribe(res=>{
		if(res){
		    this.flash.show('Product updated Successfully', { cssClass: 'alert-success', timeout: 3000 })
			this.router.navigate(['/products'])
		}
	})
	}
}

interface product{
    
  id: string,
  name: {
    name_english: string,
    name_ar: string
  },
  category: string,
  subCategory: string,
  description: {
    english_description: string,
    arabic_description: string
  },
  barcode: string,
  price: number,
  pharmacyID: string

}