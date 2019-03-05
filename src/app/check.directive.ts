import { Directive } from '@angular/core';

@Directive({
  selector: '[appCheck]'
})
export class CheckDirective {

  constructor() { }
  None = function(id){
    document.getElementById(id).style.display='none';
  }

}
