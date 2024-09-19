import { Component } from '@angular/core';
import { MaterialModuleModule } from '../../shared/material-module/material-module.module';

@Component({
  selector: 'app-load-payments',
  standalone: true,
  imports: [MaterialModuleModule],
  templateUrl: './load-payments.component.html',
  styleUrl: './load-payments.component.css'
})
export class LoadPaymentsComponent {

}
