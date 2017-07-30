import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'
var config = JSON.parse(JSON.stringify(require('../../config.json')));

@Injectable()

export class categoryService {
	constructor(private http: Http, private router: Router) { }

	getAllCategories(): any {

		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		return this.http.get(config.categoryIP + 'all', new RequestOptions({ headers: headers })).map(res => res.json())
	}

	addCategory(category) {

		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')

		return this.http.post(config.categoryIP + 'new', JSON.stringify(category), new RequestOptions({ headers: headers })).map(res => {
			return res.status
		})
	}

	getAllsubCategories(id): any {

		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')

		return this.http.get(config.categoryIP + 'all' + id, new RequestOptions({ headers: headers })).map(res => res.json())
	}

	addsubCategory(category) {

		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')

		return this.http.post(config.categoryIP + 'new', JSON.stringify(category), new RequestOptions({ headers: headers })).map(res => {
			return res.status
		})
	}


	deleteCategory(id) {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		let myparams: URLSearchParams = new URLSearchParams();
		console.log(id);
		myparams.set('id', id);

		return this.http.delete(config.categoryIP + 'deleteCategory', new RequestOptions({ headers: headers, params: myparams })).map(res => {
			return res.status
		})

	}

	updateCategory(category) {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')

		return this.http.put(config.categoryIP + 'updateCategory', JSON.stringify(category), new RequestOptions({ headers: headers })).map(res => {
			return res.status
		})
	}
}