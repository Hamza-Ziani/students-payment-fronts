import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../services/students.service';
import { Payment } from '../../../models/payment.model';
import { MaterialModuleModule } from '../../../shared/material-module/material-module.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [MaterialModuleModule],
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements AfterViewInit {
  code: string = '';
  studentDetails: Payment[] = [];
  displayedColumns: string[] = ['id', 'date', 'amount', 'type', 'status', 'firstName','action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private activateRoute: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router
  ) {
    this.activateRoute.paramMap.subscribe((params) => {
      const code = params.get('code');
      if (code) {
        this.code = code;  // Store the code in the class variable
        this.studentsService.getStudentByCode(code).subscribe((res) => {
          this.studentDetails = res;
          this.dataSource.data = this.studentDetails;  // Set data for MatTableDataSource
        });
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  newPayments() {
    this.router.navigateByUrl(`new-payments/${this.code}`);
  }


  paymentDetails(payment : Payment){
    this.router.navigateByUrl(`/payment-details/${payment.id}`);
  }
}
