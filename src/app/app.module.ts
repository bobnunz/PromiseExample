import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgNavigateComponent } from './prog-navigate/prog-navigate.component';
import { ButtonNavigateComponent } from './button-navigate/button-navigate.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgNavigateComponent,
    ButtonNavigateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
