import {Injectable} from '@angular/core'
import {Http, RequestOptions, Headers} from '@angular/http'
var config = JSON.parse(JSON.stringify(require('../../config.json')));


@Injectable()

export class productService{
	constructor(private http: Http){}

	allProducts(){
			let headers = new Headers();
    			headers.append('Authorization', config.auth);
    			headers.append('Content-Type', 'application/json')

			return this.http.get(config.productIP+'all', new RequestOptions({headers: headers})).map(res=>res.json())
	}
	addProduct(product){
console.log(product.get('barcode'))
			let headers = new Headers();
    			headers.append('Authorization', config.auth);
    return this.http.post(config.productIP+'new', product, new RequestOptions({headers: headers})).map(res=>{return res.status})

	}

	deleteProduct(id){
		let headers = new Headers();
    		headers.append('Authorization', config.auth);
    		headers.append('Content-Type', 'application/json')
			return this.http.delete(config.productIP+'deleteProduct/'+id,new RequestOptions({headers: headers })).map(res=>{
				return res.status
			})

	}

	updateProduct(product){
		let headers = new Headers();
    		headers.append('Authorization', config.auth);
    		return this.http.put(config.productIP+'updateProduct', product, new RequestOptions({headers: headers})).map(res=>{
    			return res.status
    		})
	}

	store(product){
		localStorage.setItem('product', JSON.stringify(product));
	}

	retreive(){
		return localStorage.getItem('product');
	}
	
	clear(){
		localStorage.removeItem('product');
	}

}