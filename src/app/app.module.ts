import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CustomerEngagementComponent } from './customer-engagement/customer-engagement.component';
import { WeatherdataComponent } from './customer-engagement/components/weatherdata/weatherdata.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerEngagementComponent,
    WeatherdataComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
