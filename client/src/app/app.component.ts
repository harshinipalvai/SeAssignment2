import { Component } from '@angular/core';
import { ResServiceApiService } from './res-service-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private restservice:ResServiceApiService){};
  title = 'se';
}
