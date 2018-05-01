import { Component } from '@angular/core';
import { MailService } from './Shared/mail.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers :[MailService]
})
export class AppComponent {
  title = 'app';
  constructor(private serve: MailService){
    this.serve.checklogin = true;
  }
}
