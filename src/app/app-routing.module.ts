import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDelivery } from './pages/getDelivery/getDelivery.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportComponent } from './pages/report/report.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'report', component: ReportComponent,
  },
  {
    path: 'getDelivery', component: GetDelivery,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
