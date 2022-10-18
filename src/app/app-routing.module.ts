import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgramfiveComponent } from './programfive/programfive.component';
import { ProgramfourComponent } from './programfour/programfour.component';
import { ProgramoneComponent } from './programone/programone.component';
import { ProgramsixComponent } from './programsix/programsix.component';
import { ProgramthreeComponent } from './programthree/programthree.component';
import { ProgramtwoComponent } from './programtwo/programtwo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'programOne', component: ProgramoneComponent
  },
  {
    path: 'programTwo', component: ProgramtwoComponent
  },

  {
    path: 'programThree', component: ProgramthreeComponent
  },

  {
    path: 'programFour', component: ProgramfourComponent
  },

  {
    path: 'programFive', component: ProgramfiveComponent
  },
  {
    path: 'programSix', component: ProgramsixComponent
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
