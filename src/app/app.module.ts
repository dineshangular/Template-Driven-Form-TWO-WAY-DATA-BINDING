import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

const appRoutes: Routes = [
    { path:'twowaybinding', component:TwowaybindingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TwowaybindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
