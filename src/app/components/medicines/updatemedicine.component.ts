import { Component, OnInit } from '@angular/core'
import { medicineService } from '../../shared/medicines.service'
import { categoryService } from '../../shared/categories.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({

	templateUrl: 'updatemedicine.component.html',
	providers: [medicineService, categoryService]

})

export class updatemedicine implements OnInit {
	private oldmedicine: any
	private allCategories = []
	private type: Boolean = true;
	private fixedprice: String = 'No';
	oldbar: string
	oldengname: string
	oldarbname: string
	oldengdesc: string
	oldarbdesc: string
	oldmilli: string
	oldprice: string
	category: string
	constructor(private medicine: medicineService, private router: Router,
		 private categoryObj: categoryService,private flashMessage: FlashMessagesService) {
		 }
	ngOnInit() {
		this.oldmedicine = JSON.parse ((this.medicine.retreive()));
		this.oldbar = this.oldmedicine.barcode
		this.oldengname = this.oldmedicine.name.name_english
		this.oldarbname = this.oldmedicine.name.name_ar
		this.oldengdesc = this.oldmedicine.description.english_description
		this.oldarbdesc = this.oldmedicine.description.arabic_description
		this.oldmilli = this.oldmedicine.milligrams
		this.oldprice = this.oldmedicine.price
		this.category = this.oldmedicine.category
		console.log(this.oldmedicine.barcode)
		/*this.categoryObj.getAllCategories().subscribe(res => {
			this.allCategories = res
		})*/
	}

	update(medicineFormData) {
		var medicineFormDataID:medicine = medicineFormData
		medicineFormDataID.id = this.oldmedicine._id
		this.medicine.updateMedicine(medicineFormDataID).subscribe(res => {
			if (res) {
				this.medicine.clear();
      		    this.flashMessage.show('Medicine updated successfully', { cssClass: 'alert-success', timeout: 3000 })                     
				this.router.navigate(['/medicines'])
			}
		})
	}

	Onchange(fixed) {
		if (fixed == 'NO') {
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

