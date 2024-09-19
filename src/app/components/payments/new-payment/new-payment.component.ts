import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentsService } from '../services/payments.service';
import { MaterialModuleModule } from '../../../shared/material-module/material-module.module';
import { ActivatedRoute } from '@angular/router';
import { PaymentsType } from '../../../enums/PaymentsType';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@Component({
  selector: 'app-new-payment',
  standalone: true,
  imports: [MaterialModuleModule, PdfViewerModule],
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.css'],
})
export class NewPaymentComponent implements OnInit {
  formGroup!: FormGroup;
  pdfUrlFile!: string;
  studentCode: any;
  paymentTypes: string[] = [];
  showSpinner : boolean = false;

  constructor(
    private fb: FormBuilder,
    private paymentsService: PaymentsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.studentCode = this.activatedRoute.snapshot.paramMap.get('code');
    this.formGroup = this.fb.group({
      date: this.fb.control(''),
      amount: this.fb.control(''),
      type: this.fb.control(''),
      studentCode: this.fb.control(this.studentCode),
      fileSource: this.fb.control(''),
      fileName: this.fb.control(''),
    });
    this.getPaymentType();
  }

  // get Payment Type
  getPaymentType() {
    for (let type in PaymentsType) {
      let value = PaymentsType[type];
      if (typeof value === 'string') {
        this.paymentTypes.push(value);
      }
    }
    console.log('Types ', this.paymentTypes);
  }
  // Handle file input
  selectFile(event: any) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.formGroup.patchValue({
        fileSource: file,
        fileName: file.name,
      });
      this.pdfUrlFile = window.URL.createObjectURL(file);
    }
  }

  // Save payment logic
  // Save payment logic
savePayment() {
  this.showSpinner = true;
  const formData: FormData = new FormData();

  let date: Date = new Date(this.formGroup.value.date);
  let formattedDate = date.toISOString().split('T')[0]; // Format to 'yyyy-MM-dd'

  formData.append('date', formattedDate);
  formData.append('amount', this.formGroup.value.amount.toString()); // Convert to string
  formData.append('type', this.formGroup.value.type);
  formData.append('studentCode', this.formGroup.value.studentCode);
  const file = this.formGroup.get('fileSource')?.value as File; // Get the file object from form control
  formData.append('file', file); // Append file object to FormData

  // Send the formData to the backend
  this.paymentsService.savePayment(formData).subscribe(
    (res) => {
      this.showSpinner = false;
      alert('Payment saved successfully:');
    },
    (err) => {
      console.error('Error saving payment:', err);
    }
  );
}


  afterLoadComplete(event: any) {}
}
