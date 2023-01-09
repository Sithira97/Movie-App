import { Component,HostListener, } from '@angular/core';
import { MovieAPIServiceService } from './services/movie-apiservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-netflix';

  constructor(private service:MovieAPIServiceService){}

  navbg:any
  @HostListener('document:scroll') scrollover(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.navbg = {
        'background-color':'black'
      }
    }else{
      this.navbg = {}
    }
  }
  
}
