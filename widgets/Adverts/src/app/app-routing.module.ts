import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const advWidgetRoutes: Routes = [ 
  { path: ':token', component: HomeComponent },
  { path: ':token/:company', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(advWidgetRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
