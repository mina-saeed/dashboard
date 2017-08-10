import { Component, OnInit } from '@angular/core'
import { medicineService } from '../../shared/medicines.service'
import { categoryService } from '../../shared/categories.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import * as $ from 'jquery';
import * as barcode from './barcode.js'

@Component({

    templateUrl: 'newMedicine.component.html',
    providers: [medicineService, categoryService]

})

export class newMedicine implements OnInit {
    private allCategories = []
    private type: Boolean = false;
    private fixedprice: String = 'Yes';
    private scanner: Boolean = false;

    constructor(private medicine: medicineService, private router: Router, private categoryObj: categoryService, private flash: FlashMessagesService) { }
    ngOnInit() {
        this.categoryObj.getAllCategories().subscribe(res => {
            this.allCategories = res
            return this.allCategories
        })
    var sound = new Audio("./src/app/components/medicines/barcode.wav");


        $(document).ready(function () {
            console.log('da5al')
            barcode.config.start = 0.1;
            barcode.config.end = 0.9;
            barcode.config.video = '#barcodevideo';
            barcode.config.canvas = '#barcodecanvas';
            barcode.config.canvasg = '#barcodecanvasg';
            barcode.setHandler(function (barcode) {
                $('#result').html(barcode);
                console.log(barcode)
            });
            barcode.init();

            $('#result').bind('DOMSubtreeModified', function (e) {
                sound.play();
            });

        });

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
            this.type = true;
        }
        else {
            this.type = false;
        }
    }


    /*startScanner() {
           Quagga.init({
               inputStream: {
                   name: "Live",
                   type: "LiveStream",
                   target: document.querySelector('#scanner-container'),
                   constraints: {
                       width: 480,
                       height: 320,
                       facingMode: "environment"
                   },
               },
               decoder: {
                   readers: [
                       "code_128_reader",
                       "ean_reader",
                       "ean_8_reader",
                       "code_39_reader",
                       "code_39_vin_reader",
                       "codabar_reader",
                       "upc_reader",
                       "upc_e_reader",
                       "i2of5_reader"
                   ],
                   debug: {
                       showCanvas: true,
                       showPatches: true,
                       showFoundPatches: true,
                       showSkeleton: true,
                       showLabels: true,
                       showPatchLabels: true,
                       showRemainingPatchLabels: true,
                       boxFromPatches: {
                           showTransformed: true,
                           showTransformedBox: true,
                           showBB: true
                       }
                   }
               },

           }, function (err) {
               if (err) {
                   console.log(err);
                   return
               }
               console.log("Initialization finished. Ready to start");
               Quagga.start();

               // Set flag to is running
           });

           Quagga.onProcessed(function (result) {
               var drawingCtx = Quagga.canvas.ctx.overlay,
               drawingCanvas = Quagga.canvas.dom.overlay;

               if (result) {
                   if (result.boxes) {
                       drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                       result.boxes.filter(function (box) {
                           return box !== result.box;
                       }).forEach(function (box) {
                           Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
                       });
                   }

                   if (result.box) {
                       Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
                   }

                   if (result.codeResult && result.codeResult.code) {
                       Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
                   }
               }
           });


           Quagga.onDetected(function (result) {
               console.log("Barcode detected and processed : [" + result.codeResult.code + "]", result);
           });
                           this.scanner = true

       }
   	
       start(){
           console.log('starttt')
              if (this.scanner) {
               Quagga.stop();
               this.scanner = false
           } else {
               this.startScanner();
           }
       }*/

}

