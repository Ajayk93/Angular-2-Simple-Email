import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../Shared/user.model';

@Pipe({
  name: 'checkuser'
})
export class CheckuserPipe implements PipeTransform {
userlist : User[];
  transform(value: User[], args : any[]): any{
    if(value == null)
    {
      return [];
    }
    return this.userlist = value.filter(t => {return t.Email.match(args[0])}).filter(t=>{return t.Password.match(args[1])});
  }
}
