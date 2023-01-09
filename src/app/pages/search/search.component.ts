import { Component} from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms'
import { MovieAPIServiceService } from 'src/app/services/movie-apiservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  searchResults:any;
  constructor(private service:MovieAPIServiceService) { 
  }

  searchForm = new FormGroup({
    'movieName':new FormControl()
  });
 
  submitForm(){
    //console.log(this.searchForm.value,'searchform#');
    this.service.searchMovie(this.searchForm.value).subscribe((result)=>{
      //console.log(result,'searchmovie##');
      this.searchResults = result.results;
      })
  };
  
}
