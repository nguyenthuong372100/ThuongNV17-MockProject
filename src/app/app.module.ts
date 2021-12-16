import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TotalComponent } from './total/total.component';
import { RegionComponent } from './region/region.component';
import { HeaderComponent } from './header/header.component';
import{ HttpClientModule} from '@angular/common/http';
import { AComponent } from './a/a.component'
@NgModule({
  declarations: [
    AppComponent,
    TotalComponent,
    RegionComponent,
    HeaderComponent,
    AComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
