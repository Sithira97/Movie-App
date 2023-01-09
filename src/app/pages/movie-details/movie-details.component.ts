import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MovieAPIServiceService } from 'src/app/services/movie-apiservice.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  constructor(private service: MovieAPIServiceService, private router: ActivatedRoute) {
    let getParamId = this.router.snapshot.paramMap.get('id');
    //console.log(getParamId,'getid#')
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);

  }

  getMovieDetailsResults = <any> {};
  getMovieVideosResults: any;
  getMovieCastResults: any;

  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      //console.log(result,'getmoviedetails#');
      this.getMovieDetailsResults = result;
    });
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      console.log(result, 'getmovievideos#');
      result.results.forEach((element:any)=>{
        if(element.type == "Trailer"){
          this.getMovieVideosResults = element.key;
        }
      })
    });
  }

  getCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      //console.log(result, 'getmoviecast#');
      this.getMovieCastResults = result.cast;
    });
  }

}
