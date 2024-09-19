import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentsService } from './services/payments.service';
import { MaterialModuleModule } from '../../shared/material-module/material-module.module';
import { Payment } from '../../models/payment.model';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [MaterialModuleModule],
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  payments: Payment [] = [];
  displayedColumns: string[] = ['id', 'firstname', 'date', 'amount', 'type', 'status'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private paymentsService: PaymentsService) { }

  ngOnInit() {
    this.getAllPayments();
  }

  getAllPayments() {
    this.paymentsService.getAllPayments().subscribe((res: Payment []) => {
      this.payments = res;
      this.dataSource = new MatTableDataSource(this.payments); // Initialize MatTableDataSource with data
      this.dataSource.paginator = this.paginator; // Set paginator after data is assigned
      this.dataSource.sort = this.sort; // Set sorting after data is assigned
      console.log(this.dataSource);
    }, (err) => {
      console.log(err);
    });
  }
}
