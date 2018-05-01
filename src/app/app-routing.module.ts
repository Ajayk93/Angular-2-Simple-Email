import { NgModule }              from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, LoadChildren }  from '@angular/router';
import { EmailComponent }   from './email/email.component';
import { RegistrationComponent } from './MyMailApp/registration/registration.component';
import { LoginComponent }   from './MyMailApp/login/login.component';
import { EmailDetailComponent } from './email/email-detail/email-detail.component';


const appRoutes: Routes = [
  { path : 'register', component: RegistrationComponent },
  { path : 'login', component : LoginComponent },
  { path : 'email', component : EmailComponent},
  { path : 'detail', component: EmailDetailComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}