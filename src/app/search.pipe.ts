import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items :any[] ,field : any ,  value: any): any {
    // console.log(items);
    // console.log(field);
    // console.log(value);
    if(!value) return items ; 
    return items.filter(it => it[field].search(value) != -1) ; 
  }

}
