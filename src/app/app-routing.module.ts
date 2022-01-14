import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { EmbeddedProjectsComponent } from './projects/embedded-projects/embedded-projects.component';
import { HomeProjectsComponent } from './projects/home-projects/home-projects.component';
import { ItProjectsComponent } from './projects/it-projects/it-projects.component';
import { MainProjectsComponent } from './projects/main-projects/main-projects.component';
import { PcbProjectsComponent } from './projects/pcb-projects/pcb-projects.component';
import { RoboticsProjectsComponent } from './projects/robotics-projects/robotics-projects.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    path : '',
    component :LandingComponent,
    pathMatch : 'full'
  },
  {
    path : 'register',
    component :RegisterComponent,
    pathMatch : 'full'
  },
 
  {
    path : 'projects',
    component : HomeProjectsComponent,
    children :[
      {
        path : '',
        component : MainProjectsComponent,
      },
      {
        path : 'it-projects',
        component : ItProjectsComponent,
      },
      {
        path : 'embedded',
        component : EmbeddedProjectsComponent,
      },
      {
        path : 'robotics',
        component : RoboticsProjectsComponent,
      },
      {
        path : 'pcb',
        component : PcbProjectsComponent,
      }
    ]
    }
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
