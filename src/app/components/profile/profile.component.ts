import { Component } from '@angular/core';
import { MaterialModuleModule } from '../../shared/material-module/material-module.module';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MaterialModuleModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
