import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Http , Headers , RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map' 
import {api} from './api.service'


@Injectable()

export class medicineService {
	private url: string  = 'http://207.154.240.16:3004/';

	constructor(private http: Http , private router: Router,private api :api){}

	getAllMedicines():any{
		
		let headers = new Headers();
    		headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    		headers.append('Content-Type', 'application/json')

		return this.http.get(this.api.medicineUrl+'all' ,new RequestOptions({headers: headers})).map(res=>res.json())
	}

	addMedicine(medicine){

		let headers = new Headers();
    		headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    		headers.append('Content-Type', 'application/json')

    		return this.http.post(this.api.medicineUrl+'new', JSON.stringify(medicine), new RequestOptions({headers: headers})).map(res=>{
    			return res.status
    		})
	}	
}