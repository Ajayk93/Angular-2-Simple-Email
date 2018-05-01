import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { User } from './user.model';
import { Mail } from './mail.model';
import 'rxjs/add/operator/map';

@Injectable()
export class MailService {
  serveURL = "http://localhost:64722/api/Users";
  mailURL = "http://localhost:64722/api/email";
  checklogin = false;
  user : User;
  constructor(private http : Http) {
   }

   getCurrentUser(userdetail : User)
   {
        this.user = userdetail;
   }

   getAllUsers()
   {
      return this.http.get(this.serveURL);
   }

   getAllMail()
   {
        return this.http.get(this.mailURL);
   }

   postUser(user : User)
   {
     var body = JSON.stringify(user);
     var headerOptions = new Headers({'Content-Type':'application/json'});
     var requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
     return this.http.post(this.serveURL, body, requestOptions).map(res => res.json());
   }

   postMail(mail : Mail)
   {
    var body = JSON.stringify(mail);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
    return this.http.post(this.mailURL, body, requestOptions).map(res => res.json());
   }

  setLoggedUser(user : string)
   {
      sessionStorage.setItem('currUser', user);
   }
   getLoggedUser()
   {
     return sessionStorage.getItem('currUser');
   }

}
