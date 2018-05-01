import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../Shared/user.model';
import { MailService } from '../../Shared/mail.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user : User;
  constructor(private mailserve : MailService) {
    this.mailserve.checklogin = true;
      this.user = {
        Id : null,
        Name : null,
        Age : null,
        Phone : null,
        Email :null,
        Password : null,
        DOB : null,
        Country : null
      }
   }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
   this.mailserve.postUser(form.value).subscribe(x=> {
     alert("Added successfully");
   });
  }
}
