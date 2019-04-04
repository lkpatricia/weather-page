import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weatherdata',
  templateUrl: './weatherdata.component.html',
  styleUrls: ['./weatherdata.component.css']
})
export class WeatherdataComponent {

  @Input() weatherdata;

  constructor() { }



  // Unfinished Conditionals

  // dailyPlan() {
  //   const currentTemp = this.weatherdata.list[0].main.temp;
  //   const mainCondition = this.weatherdata.list[0].weather[0].main;
  //   const unixTimestamp = this.weatherdata.list[0].dt;
  //   this.planResult = 'Email';

  //   if ((mainCondition === 'Rain') || (currentTemp < 55)) this.planResult = 'Phone Call';
  //   if ((mainCondition === 'Clear') && (currentTemp > 75)) this.planResult = 'Text';
  // }
}
