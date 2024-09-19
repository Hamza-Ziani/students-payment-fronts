import { Component } from '@angular/core';
import { MaterialModuleModule } from '../../shared/material-module/material-module.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModuleModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
