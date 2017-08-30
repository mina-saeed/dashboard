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
	private fixedprice: String = 'Yes';
	requirePrescription: string
	oldbar: string
	oldengname: string
	oldarbname: string
	oldengdesc: string
	oldarbdesc: string
	oldmilli: string
	oldprice: string
	category: string
	filesToUpload: Array<File> = [];	
	constructor(private medicine: medicineService, private router: Router,
		private categoryObj: categoryService, private flashMessage: FlashMessagesService) {
	}
	ngOnInit() {
		this.oldmedicine = JSON.parse((this.medicine.retreive()));
		this.oldbar = this.oldmedicine.barcode
		this.oldengname = this.oldmedicine.name_english
		this.oldarbname = this.oldmedicine.name_ar
		this.oldengdesc = this.oldmedicine.english_description
		this.oldarbdesc = this.oldmedicine.arabic_description
		this.oldmilli = this.oldmedicine.milligrams
		this.oldprice = this.oldmedicine.price
		this.category = this.oldmedicine.category
		this.requirePrescription = this.oldmedicine.requirePrescription
		this.categoryObj.getAllCategories().subscribe(res => {
			this.allCategories = res
		})
	}
	fileChange(event) {
		this.filesToUpload = <Array<File>>event.target.files;
	}

	update() {
		if (this.filesToUpload.length > 0) {
            const files: Array<File> = this.filesToUpload;
            const formData = new FormData();
            formData.append("image", files[0], files[0]['name']);
            formData.append('name_english', this.oldengname)
            formData.append('name_ar', this.oldarbname)
            formData.append('english_description', this.oldengdesc)
            formData.append('arabic_description', this.oldarbdesc)
            formData.append('price', this.oldprice)
            formData.append('barcode', this.oldbar)
            formData.append('category', this.category)
            formData.append('requirePrescription', this.requirePrescription)
			formData.append('milligrams', this.oldmilli)
			formData.append('id', this.oldmedicine._id)			
		this.medicine.updateMedicine(formData).subscribe(res => {
			if (res) {
				this.medicine.clear();
				this.flashMessage.show('Medicine updated successfully', { cssClass: 'alert-success', timeout: 3000 })
				this.router.navigate(['/medicines'])
			}
		})
	}
	else{
		window.scroll(0, 0)
		this.flashMessage.show('Please add an Image', { cssClass: 'alert-danger', timeout: 3000 })
	}
	}

	Onchange(fixed) {
		if (fixed == 'NO') {
			this.type = false;
		}
		else {
			this.type = true;
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
	milligrams: number,
	requirePrescription: string
}

