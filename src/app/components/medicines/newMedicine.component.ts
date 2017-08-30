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
    filesToUpload: Array<File> = [];
    private allCategories = []
    private type: Boolean = false;
    private fixedprice: String = 'No';
    private requirePrescription: string = 'No'
    private category: string
    bar: string
	engname: string
	arbname: string
	engdesc: string
	arbdesc: string
	price: string
    milligrams: string
    constructor(private medicine: medicineService, private router: Router, private categoryObj: categoryService, private flash: FlashMessagesService) { }
    ngOnInit() {
        this.categoryObj.getAllCategories().subscribe(res => {
            this.allCategories = res
            this.category = this.allCategories[0].name.name_english;
            return this.allCategories
        })
    }
    fileChange(event) {
        this.filesToUpload = <Array<File>>event.target.files;
    }


    addNew() {
        if (this.filesToUpload.length > 0) {
            const files: Array<File> = this.filesToUpload;
            const formData = new FormData();
            formData.append("image", files[0], files[0]['name']);
            formData.append('name_english', this.engname)
            formData.append('name_ar', this.arbname)
            formData.append('english_description', this.engdesc)
            formData.append('arabic_description', this.arbdesc)
            formData.append('price', this.price)
            formData.append('barcode', this.bar)
            formData.append('category', this.category)
            formData.append('requirePrescription', this.requirePrescription)
            formData.append('milligrams', this.milligrams)
            this.medicine.addMedicine(formData).subscribe(res => {
                if (res) {
                    this.flash.show('Medicine added Successfully', { cssClass: 'alert-success', timeout: 3000 })
                    this.router.navigate(['/medicines'])
                }
            })
        }
        else {
            window.scroll(0, 0)
            this.flash.show('Please add an Image', { cssClass: 'alert-danger', timeout: 3000 })
        }
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

