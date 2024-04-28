import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenefitsComponent } from './benefits/benefits.component';
import { RainfallComponent } from './rainfall/rainfall.component';
import { RainfallsComponent } from './rainfalls/rainfalls.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { SoilanalysisComponent } from './soilanalysis/soilanalysis.component';
import { InsertComponent } from './insert/insert.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { Insert1Component } from './insert1/insert1.component';
import { Update1Component } from './update1/update1.component';
import { Read1Component } from './read1/read1.component';
import { Delete1Component } from './delete1/delete1.component';
import { Insert2Component } from './insert2/insert2.component';
import { Update2Component } from './update2/update2.component';
import { Read2Component } from './read2/read2.component';

import { Delete2Component } from './delete2/delete2.component';
import { LogoutComponent } from './logout/logout.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { WeatherComponent } from './weather/weather.component';
import { GraphComponent } from './graph/graph.component';
const routes: Routes = [
  {
   path:'home',
   component: HomeComponent,
  },
  {
   path: 'contact',
   component: ContactComponent,
  },
  {
   path:'about',
   component: AboutComponent,
  },
  {
   path:'benefits',
   component: BenefitsComponent,
  },
  {
    path:'rainfall',
    component: RainfallComponent,
  },
  {
    path:'temperature',
    component: TemperatureComponent,
  },
  {
    path: 'soilanalysis',
    component: SoilanalysisComponent, 
  },
  {
    path: 'insert',
    component: InsertComponent,
  },
  {
    path: 'read',
    component: ReadComponent,
  },
  {
    path: 'update',
    component: UpdateComponent,
  },
  {
    path: 'delete',
    component: DeleteComponent,
  },
  {
    path: 'insert1',
    component: Insert1Component,
  },
  {
    path: 'read1',
    component: Read1Component,
  },
  {
    path: 'update1',
    component: Update1Component,
  },
  {
    path: 'delete1',
    component: Delete1Component,
  },
  {
    path: 'insert2',
    component: Insert2Component,
  },
  {
    path: 'read2',
    component: Read2Component,
  },
  {
    path: 'update2',
    component: Update2Component,
  },
  {
    path: 'delete2',
    component: Delete2Component,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'rainfalls',
    component: RainfallsComponent,
  },
  {
    path: 'recommendations',
    component: RecommendationsComponent,
  },
  {
    path: 'weather',
    component: WeatherComponent,
  },
  {
    path:'graph',
    component: GraphComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings=[
  InsertComponent,
  ReadComponent,
  DeleteComponent,
  UpdateComponent,
  AppComponent,
  AboutComponent,
  Insert1Component,
  Read1Component,
  Delete1Component,
  Update1Component,
  Insert2Component,
  Read2Component,
  Delete2Component,
  Update2Component
]