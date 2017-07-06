import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import { Http ,Headers ,RequestOptions,Response } from '@angular/http'

import 'rxjs/add/operator/map'
@Injectable()
export class pharmacy {
	private url = 'http://207.154.240.16:3001'
	constructor(private http: Http , private router: Router){

	}

    	getAllpharma():any{
		let headers = new Headers();
    		headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
			headers.append('Content-Type', 'application/json')
    		return this.http.get(this.url+'/allPharmacies', new RequestOptions({  headers: headers})).map(res=>res.json());

	} 

    acceptpharma(acceptedpharma):any{
		let headers = new Headers();
            headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
            headers.append('Content-Type', 'application/json')
        return this.http.post(this.url + '/admin/confirmPharmacy', JSON.stringify(acceptedpharma), new RequestOptions({  headers: headers}))
                .map(res => {return res})
        
	} 	
}