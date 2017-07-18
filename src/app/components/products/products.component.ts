import {Component , OnInit} from '@angular/core'
import {productService} from '../../shared/products.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
	templateUrl:'products.component.html',
	providers:[productService]
})

export class products implements OnInit{
	private products=[]
	constructor(private prod: productService, private router: Router,private flashMessage: FlashMessagesService){}
	ngOnInit(){
		this.prod.allProducts().subscribe(res=>{
				this.products = res
				return this.products
			})
	}

	delete(id){
			this.prod.deleteProduct(id).subscribe(res=>{
				if(res == 200){
		        this.flashMessage.show('Product deleted successfully', { cssClass: 'alert-success', timeout: 3000 })                     
                location.reload()	
			}
			});
		}

	update(id){
			this.router.navigate(['/updateProduct/'+id]);
		}
}