import { Component } from '@angular/core';

  export interface Post {
    title: string
    text: string
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 posts: Post[] = [
   {title: 'Vodka', text:'Best Vodka in the World'},
   {title:'Vine', text: 'The best vine in whole World'},
   {title:'Beer', text: 'The best beer in whole World'}
 ]
}
