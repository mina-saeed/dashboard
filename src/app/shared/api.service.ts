import {Injectable} from '@angular/core'

@Injectable()

export class api{
    	public userUrl: string= 'http://207.154.240.16:3001';
	    public pharmacyUrl = 'http://207.154.240.16:3001';
        public medicineUrl: string  = 'http://207.154.240.16:3004/';
        public productUrl ="http://207.154.240.16:3005/";
        public categoryUrl: string  = 'http://207.154.240.16:3006/';
	    public productcategoryUrl: string  = 'http://207.154.240.16:3007/';
}