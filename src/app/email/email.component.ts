import { Component, OnInit, Input } from '@angular/core';
import { MailService } from '../Shared/mail.service';
import { User } from '../Shared/user.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Mail } from '../Shared/mail.model';
import { NgForm } from '@angular/forms';
import { GetusermailPipe } from '../Shared/getusermail.pipe';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})

export class EmailComponent implements OnInit {
  mails : Mail[] = [];
  currUser : string;
  showbox :boolean = false;
  
  constructor(private service : MailService, private router: Router) { 
   this.service.getAllMail().map(res => res.json()).subscribe(data => {this.mails = data});
    this.currUser = this.service.getLoggedUser();
    this.service.checklogin = false;
  }

  ngOnInit() {
  }
  showmailbox()
  {
    this.showbox = true;
  }

  showAlert(data : any)
  {
    alert(data);
  }

  ComposeNew(mail : NgForm)
  {
    this.service.postMail(mail.value).subscribe(x=>{
      alert("Mail sent successfully");
      this.service.getAllMail().map(res => res.json()).subscribe(data => {this.mails = data});
    });
  }
  
  getItem(user : User)
  {
       if(user != undefined)
       {
         this.service.getCurrentUser(user);
         this.router.navigate(['/detail']);
       }
  }

}
