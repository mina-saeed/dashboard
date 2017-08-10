import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'
var config = JSON.parse(JSON.stringify(require('../../config.json')));


@Injectable()

export class productCategoryService {
	constructor(private http: Http, private router: Router) { }

	getAllCategories(): any {

		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')

		return this.http.get(config.productcategoryIP + 'all', new RequestOptions({ headers: headers })).map(res => res.json())
	}

	getAllsubCategories(catID): any {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')

		return this.http.get(config.productcategoryIP + 'allSubCategories/' + catID, new RequestOptions({ headers: headers })).map(res => res.json())
	}

	addCategory(category) {

		let headers = new Headers();
		headers.append('Authorization', config.auth);

		return this.http.post(config.productcategoryIP + 'new', category, new RequestOptions({ headers: headers })).map(res => {
			return res.status
		})
	}


	addsubCategory(category) {

		let headers = new Headers();
		headers.append('Authorization', config.auth);

		return this.http.post(config.productcategoryIP + 'addSubCategory', category, new RequestOptions({ headers: headers })).map(res => {
			return res.status
		})
	}

	deleteCategory(id) {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
    	return this.http.delete(config.productcategoryIP + 'deleteCategory/'+id, new RequestOptions({ headers: headers })).map(res => {
			return res.status
		})

	}

		deletesubCategory(id) {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		return this.http.delete(config.productcategoryIP + 'deleteSubCategory/'+id, new RequestOptions({ headers: headers })).map(res => {
			return res.status
		})

	}

	updateCategory(category) {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		return this.http.put(config.productcategoryIP + 'updateCategory', category, new RequestOptions({ headers: headers })).map(res => {
			return res.status
		})
	}

	updatesubCategory(category) {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		return this.http.put(config.productcategoryIP + 'updateSubCategory', category, new RequestOptions({ headers: headers })).map(res => {
			return res.status
		})
	}

	store(product) {
		localStorage.setItem('product', JSON.stringify(product));
	}

	retreive() {
		return localStorage.getItem('product');
	}

	clear() {
		localStorage.removeItem('product');
	}
}