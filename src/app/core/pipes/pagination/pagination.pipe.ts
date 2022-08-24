import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(value: any[], page:any): any {
    console.log(value, page, ...value.slice( 5*(page-1) , 5*(page) ));
      return [ ...value.slice( 5*(page) , 5*(page+1)  )]

  }

}
