import { Component, OnInit } from '@angular/core';
import { WeathercallService } from './services/weathercall.service';

@Component({
  selector: 'app-customer-engagement',
  templateUrl: './customer-engagement.component.html',
  styleUrls: ['./customer-engagement.component.css']
})

export class CustomerEngagementComponent implements OnInit {
  weatherdata: any = [];

  constructor(private weathercallService: WeathercallService) { }

  ngOnInit() {
    this.weathercallService.getWeatherdata().subscribe(data => {
      this.weatherdata = data;
    });
  }
}
