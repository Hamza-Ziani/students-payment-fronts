import { Component } from '@angular/core';
import { MaterialModuleModule } from '../../shared/material-module/material-module.module';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-template',
  standalone: true,
  imports: [MaterialModuleModule,RouterOutlet,RouterLink,RouterModule ,CommonModule],
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent {
  showMenu : boolean = true;
  constructor(
    private router: Router,
    public authService : AuthService
  ) { }

  logout(){
    this.authService.isAutenticated = false;
    this.authService.roles = [];
    this.authService.username = '';
    this.router.navigateByUrl('/login');
  }

}
