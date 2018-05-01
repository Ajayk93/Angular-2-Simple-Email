import { Pipe, PipeTransform } from '@angular/core';
import { Mail } from '../Shared/mail.model';

@Pipe({
  name: 'getusermail'
})
export class GetusermailPipe implements PipeTransform {

  transform(value: Mail[], args : any): Mail[] {
    if(value == null)
    {
      return [];
    }
    return value.filter(t=> {return t.Email.match(args)});
  }

}
