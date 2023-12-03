import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'showflix';
  navgb: any;

  @HostListener('document:scroll') scrollover(){


    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
this.navgb = {
  'background-color' : '#000000'
}
    }else
    {
this.navgb= {}
    }
  }
}
