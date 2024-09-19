import { Component } from '@angular/core';
import { MaterialModuleModule } from '../../shared/material-module/material-module.module';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [MaterialModuleModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

}
