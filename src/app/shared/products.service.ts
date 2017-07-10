import {Injectable} from '@angular/core'
import {Http, RequestOptions, Headers} from '@angular/http'
import {api} from './api.service'

@Injectable()

export class productService{

	private url ="http://207.154.240.16:3005/"
	constructor(private http: Http,private api :api){}

	allProducts(){
			let headers = new Headers();
    			headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    			headers.append('Content-Type', 'application/json')

			return this.http.get(this.api.productUrl+'all', new RequestOptions({headers: headers})).map(res=>res.json())
	}
	addProduct(product){

			let headers = new Headers();
    			headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    			headers.append('Content-Type', 'application/json')
    return this.http.post(this.api.productUrl+'new', JSON.stringify(product), new RequestOptions({headers: headers})).map(res=>{return res.status})

	}

}