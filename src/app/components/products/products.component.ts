import {Component , OnInit} from '@angular/core'
import {productService} from '../../shared/products.service'
import { Router } from '@angular/router'

@Component({
	templateUrl:'products.component.html',
	providers:[productService]
})

export class products implements OnInit{
	private products=[]
	constructor(private prod: productService, private router: Router){}
	ngOnInit(){
		this.prod.allProducts().subscribe(res=>{
			console.log(res)
				this.products = res
				return this.products
			})
	}

	delete(id){
			this.prod.deleteProduct(id).subscribe(res=>{
				if(res == 200){
                location.reload()	
			}
			});
		}

	update(id){
			this.router.navigate(['/updateProduct/'+id]);
		}
}