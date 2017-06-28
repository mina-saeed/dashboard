import {Component } from '@angular/core'
import {medicineService} from '../shared/medicines.service'
import {Router} from '@angular/router'
@Component({

	templateUrl:'newMedicine.component.html',
	providers:[medicineService]

})

export class newMedicine {

	constructor(private medicine : medicineService, private router:Router){}

addNew(medicineFormData){
	this.medicine.addMedicine(medicineFormData).subscribe(res=>{
		if(res){
			this.router.navigate(['/medicines'])
		}
	})
}
}