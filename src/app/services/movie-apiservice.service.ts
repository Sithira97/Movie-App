import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieAPIServiceService {

  constructor(private http: HttpClient) { }

  baseURL = "https://api.themoviedb.org/3";
  APIkey = "";
  searchFromHome = new Subject<any>();

  //bannerAPIdata
  bannerAPIData(): Observable<any> {
    return this.http.get(`${this.baseURL}/trending/movie/week?api_key=${this.APIkey}`);
  }

  /*trendingMovieAPIdata
  trendingMovieAPIData(): Observable<any>{
    return this.http.get(`${this.baseURL}/trending/movie/week?api_key=${this.APIkey}`);
  }*/

  //searchmovie
  searchMovie(data: any): Observable<any> {
    //console.log(data,'movie#');
    return this.http.get(`${this.baseURL}/search/movie?api_key=${this.APIkey}&query=${data.movieName}`);
  }

  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseURL}/movie/${data}?api_key=${this.APIkey}`);
  }

  getMovieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseURL}/movie/${data}/videos?api_key=${this.APIkey}`);
  }

  getMovieCast(data: any): Observable<any> {
    return this.http.get(`${this.baseURL}/movie/${data}/credits?api_key=${this.APIkey}`);
  }

  //{"id":28,"name":"Action"}
  fetchActionMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=28`);
  }
  fetchActionMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=28`);
  }

  //{"id":12,"name":"Adventure"}
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=12`);
  }
  fetchAdventureMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=12`);
  }

  //{"id":16,"name":"Animation"}
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=16`);
  }
  fetchAnimationMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=16`);
  }

  //{"id":35,"name":"Comedy"}
  fetchComedyMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=35`);
  }
  fetchComedyMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=35`);
  }

  //{"id":80,"name":"Crime"}
  fetchCrimeMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=80`);
  }
  fetchCrimeMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=80`);
  }

  //{"id":99,"name":"Documentary"}
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=99`);
  }
  fetchDocumentaryMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=99`);
  }

  //{"id":18,"name":"Drama"}
  fetchDramaMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=18`);
  }
  fetchDramaMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=18`);
  }

  //{"id":10751,"name":"Family"}
  fetchFamilyMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=10751`);
  }
  fetchFamilyMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=10751`);
  }

  //{"id":14,"name":"Fantasy"}
  fetchFantasyMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=14`);
  }
  fetchFantasyMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=14`);
  }

  //{"id":36,"name":"History"}
  fetchHistoryMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=36`);
  }
  fetchHistoryMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=36`);
  }

  //{"id":27,"name":"Horror"}
  fetchHorrorMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=27`);
  }
  fetchHorrorMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=27`);
  }

  //{"id":10402,"name":"Music"}
  fetchMusicMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=10402`);
  }
  fetchMusicMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=10402`);
  }

  //{"id":9648,"name":"Mystery"}
  fetchMysteryMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=9648`);
  }
  fetchMysteryMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=9648`);
  }

  //{"id":10749,"name":"Romance"}
  fetchRomanceMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=10749`);
  }
  fetchRomanceMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=10749`);
  }

  //{"id":878,"name":"Science Fiction"}
  fetchSciFiMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=878`);
  }
  fetchSciFiMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=878`);
  }

  //{"id":10770,"name":"TV Movie"}
  fetchTVMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=10770`);
  }
  fetchTVMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=10770`);
  }

  //{"id":53,"name":"Thriller"}
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=53`);
  }
  fetchThrillerMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=53`);
  }

  //{"id":10752,"name":"War"}
  fetchWarMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=10752`);
  }
  fetchWarMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=10752`);
  }

  //{"id":37,"name":"Western"}
  fetchWesternMovies(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&with_genres=37`);
  }
  fetchWesternMoviesMore(): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.APIkey}&page=2&with_genres=37`);
  }

}
