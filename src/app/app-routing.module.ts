import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ErrordisplayComponent } from './errordisplay/errordisplay.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SearchComponent } from './search/search.component';
import { ExpandcardComponent } from './expandcard/expandcard.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'app-card',component: CardComponent},
  {path:'app-search',component:SearchComponent},
  {path:'app-search/:searchItem',component:SearchComponent}, 
  {path:'app-privacy',component:PrivacyComponent } ,
  {path:'app-expandcard',component:ExpandcardComponent},
  {path:'**',component:ErrordisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
