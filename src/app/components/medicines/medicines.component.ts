import {Component , OnInit} from '@angular/core'
import {medicineService} from '../../shared/medicines.service'
import { Router } from '@angular/router'

@Component({
	selector:'app-medicines',
	templateUrl:'medicines.component.html',
	providers:[medicineService]
})

export class medicines implements OnInit{
		private allMedicines =[] 
		constructor(private medicineObj: medicineService, private router: Router){}

		ngOnInit(){
			 this.medicineObj.getAllMedicines().subscribe(res=>{
			 	this.allMedicines = res
			 	return this.allMedicines
			 })

		}

		delete(id){
			this.medicineObj.deleteMedicine(id).subscribe(res=>{
				if(res == 200){
                location.reload()	
			}
			});
		}

		update(id){
			this.router.navigate(['/updateMedicine/'+id]);
		}

}