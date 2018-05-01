import { Component, OnInit } from '@angular/core';
import { MailService } from '../../Shared/mail.service';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css']
})
export class EmailDetailComponent implements OnInit {

  user : string;
  constructor(private mailservice : MailService ) { 
    this.user = this.mailservice.getLoggedUser();
  }

  ngOnInit() {
  }

}
