import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { LoadPaymentsComponent } from './components/load-payments/load-payments.component';
import { StudentsComponent } from './components/students/students.component';
import { LoadStudentsComponent } from './components/load-students/load-students.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component';
import { AuthGuard } from './guards/auth.guard';  // Import the AuthGuard
import { AuthorizationGuard } from './guards/authorization.guard';
import { StudentDetailsComponent } from './components/students/student-details/student-details.component';
import { NewPaymentComponent } from './components/payments/new-payment/new-payment.component';
import { PaymentDetailsComponent } from './components/payments/payment-details/payment-details.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],  // Protect the dashboard route
  },

  {
    path: 'payments',
    component: PaymentsComponent,
    canActivate: [AuthGuard],  // Protect the payments route
  },
  {
    path: 'loadPayments',
    component: LoadPaymentsComponent,
    canActivate: [AuthGuard, AuthorizationGuard],
    data: { roles: ['ADMIN'] },  // Corrected 'role' to 'roles'
  },
  {
    path: 'loadStudents',
    component: LoadStudentsComponent,
    canActivate: [AuthGuard, AuthorizationGuard],
    data: { roles: ['ADMIN'] },  // Corrected 'role' to 'roles'
  },
  {
    path: 'new-payments/:code',
    component: NewPaymentComponent,
    canActivate: [AuthGuard, AuthorizationGuard],
    data: { roles: ['ADMIN'] },  // Corrected 'role' to 'roles'
  },

  {
    path: 'students',
    component: StudentsComponent,
    canActivate: [AuthGuard],  // Protect the students route
  },
  {
    path: 'students/:code',
    component: StudentDetailsComponent,
    canActivate: [AuthGuard],  // Protect the students route
  },
  {
    path: 'payment-details/:id',
    component: PaymentDetailsComponent,
    canActivate: [AuthGuard],  // Protect the students route
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],  // Protect the profile route
  },
];
