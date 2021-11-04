import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-qr-page',
  templateUrl: './qr-page.page.html',
  styleUrls: ['./qr-page.page.scss'],
})
export class QrPagePage implements OnInit {

  constructor(private qrScanner:QRScanner) { }

  ngOnInit() {

    this.qrScanner.prepare().then((status: QRScannerStatus) => {
     if (status.authorized) {
      this.qrScanner.show();
      (window.document.querySelector('ion-content') as HTMLElement).classList.add('background: none');

       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);

         this.qrScanner.hide();
         scanSub.unsubscribe();
         (window.document.querySelector('ion-content') as HTMLElement).classList.remove('background: none');
       });

     } else if (status.denied) {

     } else {

     }
  })
  .catch((e: any) => console.log('Error is', e));
  }

}

