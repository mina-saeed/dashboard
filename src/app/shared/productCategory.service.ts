import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Http , Headers , RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map' 


@Injectable()

export class productCategoryService {
	private url: string  = 'http://localhost:3007/';

	constructor(private http: Http , private router: Router){}

	getAllCategories():any{
		
		let headers = new Headers();
    		headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    		headers.append('Content-Type', 'application/json')

		return this.http.get(this.url+'all' ,new RequestOptions({headers: headers})).map(res=>res.json())
	}

	addCategory(category){

		let headers = new Headers();
    		headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    		headers.append('Content-Type', 'application/json')

    		return this.http.post(this.url+'new', JSON.stringify(category), new RequestOptions({headers: headers})).map(res=>{
    			return res.status
    		})
	}	
}