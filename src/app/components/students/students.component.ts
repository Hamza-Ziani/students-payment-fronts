import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModuleModule } from '../../shared/material-module/material-module.module';
import { StudentsService } from './services/students.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Students } from '../../models/students.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [MaterialModuleModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent  implements OnInit{
students :Students [] = [];
displayedColumns: string[] = ['id', 'firstname', 'lastName', 'code', 'programId','action'];
dataSource = new MatTableDataSource<any>();

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

constructor(
  private studentsService: StudentsService,
  private router : Router
) { }

ngOnInit(): void {
  this.getAllStudents();
}

getAllStudents(){
  this.studentsService.getAllStudents().subscribe((res:Students []) => {
    this.students = res;
    this.dataSource = new MatTableDataSource(this.students); // Initialize MatTableDataSource with data
      this.dataSource.paginator = this.paginator; // Set paginator after data is assigned
      this.dataSource.sort = this.sort; // Set sorting after data is assigned
      console.log(this.dataSource);

  },err =>{
    console.log(err);

  })
}

studentsDetails(student: Students){
   this.router.navigateByUrl(`/students/${student.code}`);
}

}
