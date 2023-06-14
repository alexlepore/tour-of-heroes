import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
//HeroesComponent, gives the Router somewhere to go once you configure the routes.
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


//Routes tell the Router which view to display when a user clicks a
// link or pastes a URL into the browser address bar.
const routes: Routes = [
  //path	A string that matches the URL in the browser address bar.
  //The component that the router should create when navigating to this route.
  // ex: localhost:4200/heroes.
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  //The colon : character in the path indicates that :id is a placeholder for a specific hero id.
];

@NgModule({
  //The following line adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot():
  imports: [RouterModule.forRoot(routes)],
  //The method is called forRoot() because you configure the router at the application's root level. The forRoot() method supplies the service providers 
  //and directives needed for routing, and performs the initial navigation based on the current browser URL.
  exports: [RouterModule]
  //Next, AppRoutingModule exports RouterModule to be available throughout the application.
})
export class AppRoutingModule { }