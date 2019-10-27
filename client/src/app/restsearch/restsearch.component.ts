import { Component, OnInit } from '@angular/core';
import { ResServiceApiService } from '../res-service-api.service';

@Component({
  selector: 'app-restsearch',
  templateUrl: './restsearch.component.html',
  styleUrls: ['./restsearch.component.css']
})
export class RestsearchComponent implements OnInit {

  constructor(private restApi:ResServiceApiService) { }
  city:string;
  prof:any;
  restaurants:any;
  x:any;
  showprof:boolean;
  ngOnInit() {  }
   
  searchRestaurants(){
  this.restApi.getUsers(this.city).subscribe((data)=>{
  this.restaurants = data['results'];
  },(error)=>{
    console.log(error);
  });
  } 
  showprofile(restaurant){
    this.showprof=true;
    this.x=restaurant;
    this.restApi.setRestaurant(restaurant);
  }
  
}