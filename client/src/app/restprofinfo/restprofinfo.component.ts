import { Component, OnInit } from '@angular/core';
import { ResServiceApiService } from '../res-service-api.service';

@Component({
  selector: 'app-restprofinfo',
  templateUrl: './restprofinfo.component.html',
  styleUrls: ['./restprofinfo.component.css']
})
export class RestprofinfoComponent implements OnInit {
x:any;
pic:string;
  constructor(private restapi:ResServiceApiService) { }

  ngOnInit() {
    this.x=this.restapi.profile;
    this.pic=this.x.photos[0].photo_reference;
  }

}
