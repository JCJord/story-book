import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { SwiperComponent } from './components/swiper/swiper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrimaryButtonComponent,
    SwiperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
