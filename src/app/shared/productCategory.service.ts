import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Http , Headers , RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map' 
import {api} from './api.service'


@Injectable()

export class productCategoryService {
	private url: string  = 'http://207.154.240.16:3007/';

	constructor(private http: Http , private router: Router,private api :api){}

	getAllCategories():any{
		
		let headers = new Headers();
    		headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    		headers.append('Content-Type', 'application/json')

		return this.http.get(this.api.productcategoryUrl+'all' ,new RequestOptions({headers: headers})).map(res=>res.json())
	}

	addCategory(category){

		let headers = new Headers();
    		headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    		headers.append('Content-Type', 'application/json')

    		return this.http.post(this.api.productcategoryUrl+'new', JSON.stringify(category), new RequestOptions({headers: headers})).map(res=>{
    			return res.status
    		})
	}	
	getAllsubCategories(id):any{
		
		let headers = new Headers();
    		headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    		headers.append('Content-Type', 'application/json')

		return this.http.get(this.api.productcategoryUrl+'all'+id ,new RequestOptions({headers: headers})).map(res=>res.json())
	}

	addsubCategory(category){

		let headers = new Headers();
    		headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    		headers.append('Content-Type', 'application/json')

    		return this.http.post(this.api.productcategoryUrl+'new', JSON.stringify(category), new RequestOptions({headers: headers})).map(res=>{
    			return res.status
    		})
	}
}