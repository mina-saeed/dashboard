import { Component, OnInit } from '@angular/core'
import { medicineService } from '../../shared/medicines.service'
import { categoryService } from '../../shared/categories.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({

	templateUrl: 'updatemedicine.component.html',
	providers: [medicineService, categoryService]

})

export class updatemedicine implements OnInit {
	private id: String;
	private allCategories = []
	private type: Boolean = false;
	private fixedprice: String = 'Yes';
	constructor(private medicine: medicineService, private router: Router, private route: ActivatedRoute,
		 private categoryObj: categoryService,private flashMessage: FlashMessagesService) {
		this.id = route.snapshot.params['id'];
	}
	ngOnInit() {
		this.categoryObj.getAllCategories().subscribe(res => {
			this.allCategories = res
			return this.allCategories
		})

	}

	update(medicineFormData) {
		var medicineFormDataID:medicine = medicineFormData
		medicineFormDataID.id = this.id+'';
		this.medicine.updateMedicine(medicineFormDataID).subscribe(res => {
			if (res) {
      		    this.flashMessage.show('Medicine updated successfully', { cssClass: 'alert-success', timeout: 3000 })                     
				this.router.navigate(['/medicines'])
			}
		})
	}

	Onchange(fixed) {
		if (fixed == 'No') {
			this.type = true;
		}
		else {
			this.type = false;
		}
	}


}

interface medicine {
	id: String,
	name: {
		name_english: string,
		name_ar: string
	},
	category: string,
	description: {
		english_description: string,
		arabic_description: string
	},
	barcode: string,
	price: number,
	milligrams: number
}

