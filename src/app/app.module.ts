import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CreategameComponent } from './Components/creategame/creategame.component'
import { FormsModule } from '@angular/forms';
import { SearchGameComponent } from './Components/search-game/search-game.component';


@NgModule({
  declarations: [
    AppComponent,
    CreategameComponent,
    SearchGameComponent
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
