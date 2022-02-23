import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preMarks'
})
export class PreMarksPipe implements PipeTransform {

  transform(str: string): string {
    return `${str.trim()}!!!!!`;
  }

}
