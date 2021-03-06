import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { productService } from '../../shared/products.service'
import { productCategoryService } from '../../shared/productCategory.service'
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({

  templateUrl: 'updateProduct.component.html',
  providers: [productService, productCategoryService]
})

export class updateProduct implements OnInit {
  private allProductCategories = [];
  private allProductSubCategories = []
  oldproduct: any
  oldbar: string
  oldengname: string
  oldarbname: string
  oldengdesc: string
  oldarbdesc: string
  oldprice: string
  category: string
  subCategory: string
  filesToUpload: Array<File> = [];
  constructor(private product: productService, private productcategoryObj: productCategoryService, private router: Router, private flash: FlashMessagesService) {
  }


  ngOnInit() {
    this.oldproduct = JSON.parse((this.product.retreive()));
    this.oldbar = this.oldproduct.barcode
    this.oldengname = this.oldproduct.name_en
    this.oldarbname = this.oldproduct.name_ar
    this.oldengdesc = this.oldproduct.description_en
    this.oldarbdesc = this.oldproduct.description_ar
    this.oldprice = this.oldproduct.price
    this.category = this.oldproduct.category

    this.productcategoryObj.getAllCategories().subscribe(res => {
      this.allProductCategories = res
    })
    for (var i = 0; i < this.allProductCategories.length; i++) {
      if (this.allProductCategories[i].name_en == this.category) {
        this.productcategoryObj.getAllsubCategories(this.allProductCategories[i]._id).subscribe(res => {
          if (res) {
            this.allProductSubCategories = res
            this.subCategory = this.oldproduct.subCategory
          }
          else {
            this.subCategory = null
          }
        })
      }
    }

  }

  fileChange(event) {
    this.filesToUpload = <Array<File>>event.target.files;
  }

  updateProduct() {
    if (this.filesToUpload.length > 0) {
      const files: Array<File> = this.filesToUpload;
      const formData = new FormData();

      formData.append("image", files[0], files[0]['name']);
      formData.append('name_en', this.oldengname)
      formData.append('name_ar', this.oldarbname)
      formData.append('description_en', this.oldengdesc)
      formData.append('description_ar', this.oldarbdesc)
      formData.append('price', this.oldprice)
      formData.append('barcode', this.oldbar)
      formData.append('category', this.category)
      formData.append('subCategory', this.subCategory)
      formData.append('id', this.oldproduct._id)

      this.product.updateProduct(formData).subscribe(res => {
        if (res) {
          this.flash.show('Product updated Successfully', { cssClass: 'alert-success', timeout: 3000 })
          this.router.navigate(['/products'])
        }
      })
    }
    else {
      window.scroll(0, 0)
      this.flash.show('Please add an Image', { cssClass: 'alert-danger', timeout: 3000 })
    }
  }

  Onchange(cat) {
    for (var i = 0; i < this.allProductCategories.length; i++) {
      if (this.allProductCategories[i].name_en == cat) {
        this.productcategoryObj.getAllsubCategories(this.allProductCategories[i]._id).subscribe(res => {
          if (res) {
            this.allProductSubCategories = res
            this.subCategory = this.allProductSubCategories[0].name_en
            return this.allProductSubCategories
          }
          else {
            this.subCategory = null
          }
        })
      }
    }
  }


}

interface product {

  id: string,
  name: {
    name_english: string,
    name_ar: string
  },
  category: string,
  subCategory: string,
  description: {
    english_description: string,
    arabic_description: string
  },
  barcode: string,
  price: number,
  pharmacyID: string

}