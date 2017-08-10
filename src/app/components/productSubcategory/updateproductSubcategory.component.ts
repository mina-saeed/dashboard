import { Component, OnInit } from '@angular/core'
import { productCategoryService } from '../../shared/productCategory.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';

@Component({

    templateUrl: 'updateproductSubcategory.component.html',
    providers: [productCategoryService]

})

export class updateproductSubcategory {
    engname: string
    arbname: string
    engdesc: string
    arbdesc: string
    search: string
    filesToUpload: Array<File> = [];
    private categoryId: string
    private old: any
    constructor(private category: productCategoryService, private router: Router, private flash: FlashMessagesService, private route: ActivatedRoute) {
        this.categoryId = route.snapshot.params['id'];
    }
    ngOnInit() {
        this.old = this.category.retreive();
        this.engname = this.old.name_en
        this.arbname = this.old.name_ar
        this.engdesc = this.old.description_en
        this.arbdesc = this.old.description_ar
        this.search = this.old.searchable
    }

    fileChange(event) {
        this.filesToUpload = <Array<File>>event.target.files;
    }

    updateProductCategory() {
        if (this.filesToUpload.length > 0) {
            const files: Array<File> = this.filesToUpload;
            const formData = new FormData();

            formData.append("image", files[0], files[0]['name']);
            formData.append('name_en', this.engname)
            formData.append('name_ar', this.arbname)
            formData.append('description_en', this.engdesc)
            formData.append('description_ar', this.arbdesc)
            formData.append('searchable', this.search)
            formData.append('id', this.old._id)
            formData.append('catID', this.categoryId)

            this.category.updatesubCategory(formData).subscribe(res => {
                if (res) {
                    this.category.clear()
                    this.flash.show('Product Subcategory updated Successfully', { cssClass: 'alert-success', timeout: 3000 })
                    this.router.navigate(['/productsubCategory' + this.categoryId])
                }
            })
        }
        else {
            this.flash.show('Please add an Image', { cssClass: 'alert-danger', timeout: 3000 })
        }
    }
}

interface category {
    id: String,
    name: {
        name_english: string,
        name_ar: string
    },
    description: {
        english_description: string,
        arabic_description: string
    },
    searchable: string
}
