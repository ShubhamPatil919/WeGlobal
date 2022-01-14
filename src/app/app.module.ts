import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CounterComponent } from './counter/counter.component';
import { ProjectsComponent } from './projects/projects.component';
import { PlacementTrackComponent } from './placement-track/placement-track.component';
import { ClientsComponent } from './clients/clients.component';
import { ServicesComponent } from './services/services.component';
import { RegisterComponent } from './register/register.component';
import { HomeProjectsComponent } from './projects/home-projects/home-projects.component';
import { SidebarProjectsComponent } from './projects/sidebar-projects/sidebar-projects.component';
import { ItProjectsComponent } from './projects/it-projects/it-projects.component';
import { EmbeddedProjectsComponent } from './projects/embedded-projects/embedded-projects.component';
import { RoboticsProjectsComponent } from './projects/robotics-projects/robotics-projects.component';
import { PcbProjectsComponent } from './projects/pcb-projects/pcb-projects.component';
import { MainProjectsComponent } from './projects/main-projects/main-projects.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CounterComponent,
    ProjectsComponent,
    PlacementTrackComponent,
    ClientsComponent,
    ServicesComponent,
    RegisterComponent,
    HomeProjectsComponent,
    SidebarProjectsComponent,
    ItProjectsComponent,
    EmbeddedProjectsComponent,
    RoboticsProjectsComponent,
    PcbProjectsComponent,
    MainProjectsComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
