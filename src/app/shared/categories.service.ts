import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'
var config = JSON.parse(JSON.stringify(require('../../config.json')));

@Injectable()

export class categoryService {
	constructor(private http: Http) { }

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

	deleteCategory(id) {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		return this.http.delete(config.categoryIP + 'deleteCategory/' + id, new RequestOptions({ headers: headers })).map(res => {
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

	store(category) {
		localStorage.setItem('category', JSON.stringify(category));
	}

	retreive() {
		return localStorage.getItem('category');
	}

	clear() {
		localStorage.removeItem('category');
	}
}