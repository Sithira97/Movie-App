import { Component, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MovieAPIServiceService } from 'src/app/services/movie-apiservice.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  GotData: any = [];
  MoreData: any = [];
  subscription: any;
  getParamId: any ='';

  @Input() item = ''
  
  constructor(private service:MovieAPIServiceService, private router: ActivatedRoute) { 
    this.getParamId = this.router.snapshot.paramMap.get('category');
    this.browse();

  }

  browse(){
  if (this.getParamId == 'action'){
    this.actionMovie();
  }
  if (this.getParamId == 'adventure'){
    this.adventureMovie();
  }
  if (this.getParamId == 'animation'){
    this.animationMovie();
  }
  if (this.getParamId == 'comedy'){
    this.comedyMovie();
  }
  if (this.getParamId == 'crime'){
    this.crimeMovie();
  }
  if (this.getParamId == 'documentary'){
    this.documentaryMovie();
  }
  if (this.getParamId == 'drama'){
    this.dramaMovie();
  }
  if (this.getParamId == 'family'){
    this.familyMovie();
  }
  if (this.getParamId == 'fantasy'){
    this.fantasyMovie();
  }
  if (this.getParamId == 'history'){
    this.historyMovie();
  }
  if (this.getParamId == 'horror'){
    this.horrorMovie();
  }
  if (this.getParamId == 'music'){
    this.musicMovie();
  }
  if (this.getParamId == 'mystery'){
    this.mysteryMovie();
  }
  if (this.getParamId == 'romance'){
    this.romanceMovie();
  }
  if (this.getParamId == 'sciFi'){
    this.sciFiMovie();
  }
  if (this.getParamId == 'tv'){
    this.tvMovie();
  }
  if (this.getParamId == 'thriller'){
    this.thrillerMovie();
  }
  if (this.getParamId == 'war'){
    this.warMovie();
  }
  if (this.getParamId == 'western'){
    this.westernMovie();
  }}
  


  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      //console.log(result,'gotresult#');
      this.GotData = result.results;
    });
    this.service.fetchActionMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }

  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchAdventureMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }

  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchAnimationMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }

  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchComedyMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }

  crimeMovie() {
    this.service.fetchCrimeMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchCrimeMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }

  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchDocumentaryMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }

  dramaMovie() {
    this.service.fetchDramaMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchDramaMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }
  
  familyMovie() {
    this.service.fetchFamilyMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchFamilyMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }

  fantasyMovie() {
    this.service.fetchFantasyMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchFantasyMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }

  historyMovie() {
    this.service.fetchHistoryMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchHistoryMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }

  horrorMovie() {
    this.service.fetchHorrorMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchHorrorMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }

  musicMovie() {
    this.service.fetchMusicMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchMusicMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }

  mysteryMovie() {
    this.service.fetchMysteryMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchMysteryMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }
  romanceMovie() {
    this.service.fetchRomanceMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchRomanceMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }

  sciFiMovie() {
    this.service.fetchSciFiMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchSciFiMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }

  tvMovie() {
    this.service.fetchTVMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchTVMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }

  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchThrillerMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }

  warMovie() {
    this.service.fetchWarMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchWarMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }

  westernMovie() {
    this.service.fetchWesternMovies().subscribe((result) => {
      //console.log(result,'bannerresult#');
      this.GotData = result.results;
    });
    this.service.fetchWesternMoviesMore().subscribe((result) => {
      this.MoreData = result.results;
    });
  }
}
