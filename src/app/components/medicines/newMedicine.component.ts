import { Component, OnInit } from '@angular/core'
import { medicineService } from '../../shared/medicines.service'
import { categoryService } from '../../shared/categories.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({

    templateUrl: 'newMedicine.component.html',
    providers: [medicineService, categoryService]

})

export class newMedicine implements OnInit {
    private allCategories = []
    private type: Boolean = false;
    private fixedprice: String = 'No';
    private requirePrescription: string = 'No'
    private category: string
    constructor(private medicine: medicineService, private router: Router, private categoryObj: categoryService, private flash: FlashMessagesService) { }
    ngOnInit() {
        this.categoryObj.getAllCategories().subscribe(res => {
            this.allCategories = res
            this.category = this.allCategories[0].name.name_english;
            return this.allCategories
        })
    }



    addNew(medicineFormData) {
        this.medicine.addMedicine(medicineFormData).subscribe(res => {
            if (res) {
                this.flash.show('Medicine added Successfully', { cssClass: 'alert-success', timeout: 3000 })
                this.router.navigate(['/medicines'])
            }
        })
    }

    Onchange(fixed) {
        if (fixed == 'No') {
            this.type = false;
        }
        else {
            this.type = true;
        }
    }

}

