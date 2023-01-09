import { Component } from '@angular/core';
import { MovieAPIServiceService } from 'src/app/services/movie-apiservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  bannerGotData: any = [];
  trendingGotData: any = [];
  actionGotData: any = [];
  adventureGotData: any = [];
  animationGotData: any = [];
  comedyGotData: any = [];
  //crimeGotData: any = [];
  //documentaryGotData: any = [];
  dramaGotData: any = [];
  //familyGotData: any = [];
  fantasyGotData: any = [];
  //historyGotData: any = [];
  horrorGotData: any = [];
  //musicGotData: any = [];
  //mysteryGotData: any = [];
  //romanceGotData: any = [];
  sciFiGotData: any = [];
  //tvGotData: any = [];
  thrillerGotData: any = [];
  //warGotData: any = [];
  //westernGotData: any = [];


  constructor(private service: MovieAPIServiceService) {
    this.bannerData();
    this.actionMovie();
    this.adventureMovie(); 
    this.animationMovie(); 
    this.comedyMovie(); 
    this.dramaMovie(); 
    this.fantasyMovie(); 
    this.horrorMovie(); 
    this.sciFiMovie(); 
    this.thrillerMovie();
    //this.trendingData();
  }

  //bannerData
  bannerData() {
    this.service.bannerAPIData().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.bannerGotData = result.results;
    });
  }
  /*
    trendingData() {
      this.service.trendingMovieAPIData().subscribe((result) => {
        //console.log(result,'trendingresult#');
        this.trendingGotData = result.results;
      });
    }*/

  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.actionGotData = result.results;
    });
  }

  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.adventureGotData = result.results;
    });
  }

  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.animationGotData = result.results;
    });
  }

  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.comedyGotData = result.results;
    });
  }

  dramaMovie() {
    this.service.fetchDramaMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.dramaGotData = result.results;
    });
  }

  fantasyMovie() {
    this.service.fetchFantasyMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.fantasyGotData = result.results;
    });
  }

  horrorMovie() {
    this.service.fetchHorrorMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.horrorGotData = result.results;
    });
  }

  sciFiMovie() {
    this.service.fetchSciFiMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.sciFiGotData = result.results;
    });
  }

  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.thrillerGotData = result.results;
    });
  }

}


