import {Component , OnInit} from '@angular/core'
import {medicineService} from '../../shared/medicines.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
	selector:'app-medicines',
	templateUrl:'medicines.component.html',
	providers:[medicineService]
})

export class medicines implements OnInit{
		private allMedicines =[] 
		constructor(private medicineObj: medicineService, private router: Router,private flashMessage: FlashMessagesService){}

		ngOnInit(){
			 this.medicineObj.getAllMedicines().subscribe(res=>{
			 	this.allMedicines = res
			 	return this.allMedicines
			 })

		}

		delete(id){
			this.medicineObj.deleteMedicine(id).subscribe(res=>{
				if(res == 200){
		        this.flashMessage.show('Medicine deleted successfully', { cssClass: 'alert-success', timeout: 3000 })                     
                location.reload()	
			}
			});
		}

		update(medicine){
			this.medicineObj.store(medicine)
			this.router.navigate(['/updateMedicine']);
		}

}