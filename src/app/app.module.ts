import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProgramoneComponent } from './programone/programone.component';
import { ProgramtwoComponent } from './programtwo/programtwo.component';
import { ProgramthreeComponent } from './programthree/programthree.component';
import { ProgramfourComponent } from './programfour/programfour.component';
import { ProgramfiveComponent } from './programfive/programfive.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { ProgramsixComponent } from './programsix/programsix.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramoneComponent,
    ProgramtwoComponent,
    ProgramthreeComponent,
    ProgramfourComponent,
    ProgramfiveComponent,
    DashboardComponent,
    HeaderComponent,
    ProgramsixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
