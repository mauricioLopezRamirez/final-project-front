import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {SaveInformationOneComponent} from './pages/save-information-one/save-information-one.component';
import {SaveInformationTwoComponent} from './pages/save-information-two/save-information-two.component';
import {SearchComponent} from './pages/search/search.component';




const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'save-information-one', component: SaveInformationOneComponent},
  { path: 'save-information-two', component: SaveInformationTwoComponent},
  { path: 'search', component:  SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
