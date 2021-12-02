import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CnvbarComponent } from './cnvbar/cnvbar.component';
import { CfooterComponent } from './cfooter/cfooter.component';
import { CcontactsComponent } from './ccontacts/ccontacts.component';
import { AuthComponent } from './auth/auth.component';
import { CbaseComponent } from './cbase/cbase.component';

import { ContactService } from './services/contact.service';
import { NvbarService } from './services/nvbar.service';

import { CrudComponent } from './crud/crud.component';

import { CrudService } from './services/crud.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    CnvbarComponent,
    CfooterComponent,
    CcontactsComponent,
    AuthComponent,
    CbaseComponent,
    CrudComponent,
    AddContactComponent,
    UpdateContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ContactService,
    NvbarService,
    CrudService,
    AuthGuardService,
    AuthComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
