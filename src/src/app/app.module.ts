import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdvDataService } from './services/adv-data.service';
import { HttpModule } from '@angular/http';
import { AdvertFilterPipe } from './pipes/advert-filter.pipe';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdvertFilterPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [AdvDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
