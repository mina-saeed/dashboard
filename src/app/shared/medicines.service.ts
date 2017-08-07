import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Http , Headers , RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map' 
var config = JSON.parse(JSON.stringify(require('../../config.json')));


@Injectable()

export class medicineService {
	constructor(private http: Http , private router: Router){}

	getAllMedicines():any{
		
		let headers = new Headers();
    		headers.append('Authorization', config.auth);
    		headers.append('Content-Type', 'application/json')

		return this.http.get(config.medicineIP+'all' ,new RequestOptions({headers: headers})).map(res=>res.json())
	}

	addMedicine(medicine){

		let headers = new Headers();
    		headers.append('Authorization', config.auth);
    		headers.append('Content-Type', 'application/json')

    		return this.http.post(config.medicineIP+'new', JSON.stringify(medicine), new RequestOptions({headers: headers})).map(res=>{
    			return res.status
    		})
	}
		
	deleteMedicine(id){
		let headers = new Headers();
    		headers.append('Authorization', config.auth);
    		headers.append('Content-Type', 'application/json')
		let myparams: URLSearchParams = new URLSearchParams();
		console.log(id);
		myparams.set('id',id);

			return this.http.delete(config.medicineIP+'deleteMedicine',new RequestOptions({headers: headers,params:myparams})).map(res=>{
				return res.status
			})

	}

	updateMedicine(medicine){
		let headers = new Headers();
    		headers.append('Authorization', config.auth);
    		headers.append('Content-Type', 'application/json')

    		return this.http.put(config.medicineIP+'updateMedicine', JSON.stringify(medicine), new RequestOptions({headers: headers})).map(res=>{
    			return res.status
    		})
	}

	store(medicine){
		localStorage.setItem('medicine', JSON.stringify(medicine));
	}

	retreive(){
		return localStorage.getItem('medicine');
	}
	
	clear(){
		localStorage.removeItem('medicine');
	}
}