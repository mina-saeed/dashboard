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

			let headers = new Headers();
    			headers.append('Authorization', config.auth);
    			headers.append('Content-Type', 'application/json')
    return this.http.post(config.productIP+'new', JSON.stringify(product), new RequestOptions({headers: headers})).map(res=>{return res.status})

	}

	deleteProduct(id){
		let headers = new Headers();
    		headers.append('Authorization', config.auth);
    		headers.append('Content-Type', 'application/json')
		let myparams: URLSearchParams = new URLSearchParams();
		myparams.set('id',id);

			return this.http.delete(config.productIP+'deleteProduct',new RequestOptions({headers: headers,params:myparams})).map(res=>{
				return res.status
			})

	}

	updateProduct(product){
		let headers = new Headers();
    		headers.append('Authorization', config.auth);
    		headers.append('Content-Type', 'application/json')

    		return this.http.put(config.productIP+'updateProduct', JSON.stringify(product), new RequestOptions({headers: headers})).map(res=>{
    			return res.status
    		})
	}

}