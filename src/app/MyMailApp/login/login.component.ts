import { Component, ViewChild, OnInit, Pipe } from '@angular/core';
import { MailService } from '../../Shared/mail.service';
import { User } from '../../Shared/user.model';
import { CheckuserPipe } from '../../Shared/checkuser.pipe';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers :[MailService]
})

export class LoginComponent implements OnInit {
  flag = 0;
  users : User[]=[];
  user : User[];
  constructor(private router: Router, private service : MailService) {
    this.service.getAllUsers().subscribe(data=> this.users = data.json());
   }

  ngOnInit() {
  }

  matchUser(formdata : NgForm)
  {
      this.user = new CheckuserPipe().transform(this.users,[formdata.value.email, formdata.value.password]);
      if(this.user.length == 0)
      {
          alert("Doesn't exist any user with this credential");
      }
      else
      {
        this.service.setLoggedUser(formdata.value.email);
        this.flag = 1;
        this.router.navigate(['/email']);
      }
  }
}
