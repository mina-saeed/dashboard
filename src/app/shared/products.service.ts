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

}