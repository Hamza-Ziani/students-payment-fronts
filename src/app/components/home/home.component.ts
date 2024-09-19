import { Component } from '@angular/core';
import { MaterialModuleModule } from '../../shared/material-module/material-module.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModuleModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
