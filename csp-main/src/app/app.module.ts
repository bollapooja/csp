import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { RainfallComponent } from './rainfall/rainfall.component';
import { SoilanalysisComponent } from './soilanalysis/soilanalysis.component';
import { InsertComponent } from './insert/insert.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { RainfallsComponent } from './rainfalls/rainfalls.component';
import { GraphComponent } from './graph/graph.component';
import { Insert1Component } from './insert1/insert1.component';
import { Read1Component } from './read1/read1.component';
import { Update1Component } from './update1/update1.component';
import { Delete1Component } from './delete1/delete1.component';
import { WeatherComponent } from './weather/weather.component';
import { Insert2Component } from './insert2/insert2.component';
import { Delete2Component } from './delete2/delete2.component';
import { Update2Component } from './update2/update2.component';
import { Read2Component } from './read2/read2.component';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    BenefitsComponent,
    TemperatureComponent,
    RainfallComponent,
    SoilanalysisComponent,
    InsertComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    RecommendationsComponent,
    RainfallsComponent,
    GraphComponent,
    Insert1Component,
    Read1Component,
    Update1Component,
    Delete1Component,
    WeatherComponent,
    Insert2Component,
    Delete2Component,
    Update2Component,
    Read2Component,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
