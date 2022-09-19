import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaChartComponent } from './area-chart/area-chart.component';

const routes: Routes = [
  { path: '', component: AreaChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
