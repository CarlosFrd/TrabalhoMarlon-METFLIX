import { Component } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private service:MovieApiServiceService) {}

  bannerResult:any=[];
  trendingMovieResult:any=[];
  actionResult:any=[];
  actionMovieResult:any=[];
  adventureMovieResult:any=[];
  animationMovieResult:any=[];
  comedyMovieResult:any=[];
  documentaryMovieResult:any=[];
  sciencefictionMovieResult:any=[];
  thrillerMovieResult:any=[];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
    
    
  }

  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult = result.results;
    });
  
}
trendingData() 
{
  this.service.trendingMovieApiData().subscribe((result) => {
    console.log(result, 'trendingresult#');
    this.trendingMovieResult = result.results;
    
  });
}
 
actionMovie() {
  this.service.fetchActionMovies().subscribe((result) => {
    this.actionMovieResult = result.results;
  });
}

 
adventureMovie() {
  this.service.fetchActionMovies().subscribe((result) => {
    this.adventureMovieResult = result.results;
  });
}

 
animationMovie() {
  this.service.fetchAnimationMovies().subscribe((result) => {
    this.animationMovieResult = result.results;
  });
}


comedyMovie() {
  this.service.fetchComedyMovies().subscribe((result) => {
    this.comedyMovieResult = result.results;
  });
}
 
documentaryMovie() {
  this.service.fetchDocumentaryMovies().subscribe((result) => {
    this.documentaryMovieResult = result.results;
  });
}

 
sciencefictionMovie() {
  this.service.fetchActionMovies().subscribe((result) => {
    this.sciencefictionMovieResult = result.results;
  });
}


thrillerMovie() {
  this.service.fetchThrillerMovies().subscribe((result) => {
    this.thrillerMovieResult = result.results;
  });
}




}
