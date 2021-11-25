import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CnvbarComponent } from './cnvbar/cnvbar.component';
import { CfooterComponent } from './cfooter/cfooter.component';
import { CcontactsComponent } from './ccontacts/ccontacts.component';
import { AuthComponent } from './auth/auth.component';
import { CbaseComponent } from './cbase/cbase.component';

import { FormsModule } from '@angular/forms';

import {AgendaserviceService} from './agendaservice.service';


@NgModule({
  declarations: [
    AppComponent,
    CnvbarComponent,
    CfooterComponent,
    CcontactsComponent,
    AuthComponent,
    CbaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AgendaserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
