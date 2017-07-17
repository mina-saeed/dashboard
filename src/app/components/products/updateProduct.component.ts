import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {productService} from '../../shared/products.service'
import {productCategoryService} from '../../shared/productCategory.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';


@Component({

	templateUrl: 'updateProduct.component.html',
	providers:[productService,productCategoryService]
})

export class updateProduct implements OnInit{
    private allProductCategories =[] ;
    private id: string;
    constructor(private product: productService,private productcategoryObj: productCategoryService,private router: Router,private flash:FlashMessagesService,
     private route: ActivatedRoute){
        this.id = route.snapshot.params['id'];
     }

	
	ngOnInit(){
			 this.productcategoryObj.getAllCategories().subscribe(res=>{
			 	this.allProductCategories = res
			 	return this.allProductCategories
			 })

		}
	
	updateProduct(productForm){
        var productFormID:product = productForm;
        productFormID.id = this.id;
        console.log(productFormID)
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