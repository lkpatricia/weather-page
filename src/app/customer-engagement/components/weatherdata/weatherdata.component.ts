import { Component, OnInit } from '@angular/core';
import { WeathercallService } from '../../services/weathercall.service';

@Component({
  selector: 'app-weatherdata',
  templateUrl: './weatherdata.component.html',
  styleUrls: ['./weatherdata.component.css']
})
export class WeatherdataComponent implements OnInit {

  constructor(private weathercallService: WeathercallService) { }

  ngOnInit() {
    this.weathercallService.getWeatherdata().subscribe(data => {
      console.log(data);
    });
  }

}
