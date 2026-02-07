import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    ProjectsComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
