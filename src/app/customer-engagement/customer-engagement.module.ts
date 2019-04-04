import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CustomerEngagementComponent } from './customer-engagement.component';
import { WeatherdataComponent } from './components/weatherdata/weatherdata.component';
import { WeathercallService } from './services/weathercall.service';

const routes: Routes = [
  { path: '', component: CustomerEngagementComponent },
  { path: 'weatherdata', component: WeatherdataComponent },
];

@NgModule({
  declarations: [CustomerEngagementComponent, WeatherdataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [WeathercallService],
})
export class CustomerEngagementModule { }
