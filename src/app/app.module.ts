import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
//import { LoginRoutingModule } from './login/login-routing/login-routing.module';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http'
//---components are below this line----
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { LoginComponent } from './MyMailApp/login/login.component';
import { RegistrationComponent } from './MyMailApp/registration/registration.component';
import { EmailDetailComponent } from './email/email-detail/email-detail.component';
import { CheckuserPipe } from './Shared/checkuser.pipe';
import { MypageComponent } from './MyMailApp/mypage/mypage.component';
import { GetusermailPipe } from './Shared/getusermail.pipe';



@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    LoginComponent,
    RegistrationComponent,
    EmailDetailComponent,
    CheckuserPipe,
    MypageComponent,
    GetusermailPipe
  ],
  imports: [
    AppRoutingModule , BrowserModule, FormsModule, HttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
