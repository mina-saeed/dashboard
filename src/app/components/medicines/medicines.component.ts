import { Component, OnInit } from '@angular/core'
import { medicineService } from '../../shared/medicines.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import { DialogService } from "ng2-bootstrap-modal";
import { medicineDialog } from './mdialog.component';

@Component({
	selector: 'app-medicines',
	templateUrl: 'medicines.component.html',
	providers: [medicineService]
})

export class medicines implements OnInit {
	private allMedicines = []
	constructor(private dialogService: DialogService, private medicineObj: medicineService, private router: Router, private flashMessage: FlashMessagesService) { }

	ngOnInit() {
		this.medicineObj.getAllMedicines().subscribe(res => {
			this.allMedicines = res
			console.log(res)
			return this.allMedicines
		})

	}

	delete(id, index) {
		this.medicineObj.deleteMedicine(id).subscribe(res => {
			if (res == 200) {
				window.scroll(0, 0)
				this.flashMessage.show('Medicine deleted successfully', { cssClass: 'alert-success', timeout: 3000 })
				this.allMedicines.splice(index, 1)
				return this.allMedicines;

			}
		});
	}

	update(medicine) {
		this.medicineObj.store(medicine)
		this.router.navigate(['/updateMedicine']);
	}

	show(medicine) {
		this.dialogService.addDialog(medicineDialog, {
			name_en: medicine.name_en, description_en: medicine.english_description, price: medicine.price,
			category: medicine.category, barcode: medicine.barcode, image: medicine.image, milligrams: medicine.milligrams
		});

	}
}