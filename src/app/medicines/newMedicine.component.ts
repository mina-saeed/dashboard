import { Component, OnInit } from '@angular/core'
import { medicineService } from '../shared/medicines.service'
import { categoryService } from '../shared/categories.service'
import { Router } from '@angular/router'
@Component({

	templateUrl: 'newMedicine.component.html',
	providers: [medicineService, categoryService]

})

export class newMedicine implements OnInit{
	private allCategories = []
	constructor(private medicine: medicineService, private router: Router, private categoryObj: categoryService) { }
	ngOnInit() {
		this.categoryObj.getAllCategories().subscribe(res => {
			this.allCategories = res
			return this.allCategories
		})

	}

	addNew(medicineFormData) {
		this.medicine.addMedicine(medicineFormData).subscribe(res => {
			if (res) {
				this.router.navigate(['/medicines'])
			}
		})
	}
}

