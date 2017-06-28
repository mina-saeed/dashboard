import {Component , OnInit} from '@angular/core'
import {medicineService} from '../shared/medicines.service'
@Component({
	selector:'app-medicines',
	templateUrl:'medicines.component.html',
	providers:[medicineService]
})

export class medicines implements OnInit{
		private allMedicines =[] 
		constructor(private medicineObj: medicineService){}

		ngOnInit(){
			 this.medicineObj.getAllMedicines().subscribe(res=>{
			 	this.allMedicines = res
			 	return this.allMedicines
			 })

		}

}