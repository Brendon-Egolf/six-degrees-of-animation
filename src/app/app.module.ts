import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'ngx-materialize';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GraphVisDirective } from './directives/graphvis.directive';

@NgModule({
  declarations: [
    AppComponent,
    GraphVisDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MaterializeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
