import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { OrderDeliveryComponent } from './order-delivery/order-delivery.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    AreaChartComponent,
    OrderDeliveryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
