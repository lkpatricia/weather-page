import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-engagement',
  templateUrl: './customer-engagement.component.html',
  styleUrls: ['./customer-engagement.component.css']
})

export class CustomerEngagementComponent {
  city = 'Vancouver';
  weather = 'Sunny';
  temp = 23.0;

  constructor() { }
}

