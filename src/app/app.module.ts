import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DemoMaterialModule } from './material-module';
import { IndexComponent } from './pages/index/index.component';
import { SaveInformationOneComponent } from './pages/save-information-one/save-information-one.component';
import { SaveInformationTwoComponent } from './pages/save-information-two/save-information-two.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    IndexComponent,
    SaveInformationOneComponent,
    SaveInformationTwoComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
