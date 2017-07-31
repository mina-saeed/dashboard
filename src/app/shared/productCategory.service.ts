import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Http , Headers , RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map' 
var config = JSON.parse(JSON.stringify(require('../../config.json')));


@Injectable()

export class productCategoryService {
	constructor(private http: Http , private router: Router){}

	getAllCategories():any{
		
		let headers = new Headers();
    		headers.append('Authorization', config.auth);
    		headers.append('Content-Type', 'application/json')

		return this.http.get(config.productcategoryIP+'all' ,new RequestOptions({headers: headers})).map(res=>res.json())
	}

	addCategory(category){

		let headers = new Headers();
    		headers.append('Authorization', config.auth);
    		headers.append('Content-Type', 'application/json')

    		return this.http.post(config.productcategoryIP+'new', JSON.stringify(category), new RequestOptions({headers: headers})).map(res=>{
    			return res.status
    		})
	}	
	getAllsubCategories(id):any{
		
		let headers = new Headers();
    		headers.append('Authorization', config.auth);
    		headers.append('Content-Type', 'application/json')

		return this.http.get(config.productcategoryIP+'all'+id ,new RequestOptions({headers: headers})).map(res=>res.json())
	}

	addsubCategory(category){

		let headers = new Headers();
    		headers.append('Authorization', config.auth);
    		headers.append('Content-Type', 'application/json')

    		return this.http.post(config.productcategoryIP+'new', JSON.stringify(category), new RequestOptions({headers: headers})).map(res=>{
    			return res.status
    		})
	}
}