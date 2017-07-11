import {Injectable} from '@angular/core'
import {Http, RequestOptions, Headers} from '@angular/http'
import {api} from './api.service'
var config = JSON.parse(JSON.stringify(require('../../config.json')));


@Injectable()

export class productService{

	private url ="http://207.154.240.16:3005/"
	constructor(private http: Http,private api :api){}

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