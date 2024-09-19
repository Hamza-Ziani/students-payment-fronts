import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentsService } from '../services/payments.service';
import { MaterialModuleModule } from '../../../shared/material-module/material-module.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [MaterialModuleModule,PdfViewerModule],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent {
paymentId : any
pdfUrlFile : any
  constructor(
    private router :Router,
    private activatedRoute: ActivatedRoute,
    private paymentsService : PaymentsService

  ){
    this.paymentId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.paymentId);

    this.paymentsService.getDetailsPayment(this.paymentId).subscribe((res:any)=>{
      let blob :Blob = new Blob([res], {type: 'application/pdf'});
      this.pdfUrlFile = window.URL.createObjectURL(blob);
      console.log("Payment Details",this.pdfUrlFile);

    })
  }


  afterLoadComplete(event :any){

  }

}
