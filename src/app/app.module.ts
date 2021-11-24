import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CnvbarComponent } from './cnvbar/cnvbar.component';
import { CfooterComponent } from './cfooter/cfooter.component';
import { CcontactsComponent } from './ccontacts/ccontacts.component';

@NgModule({
  declarations: [
    AppComponent,
    CnvbarComponent,
    CfooterComponent,
    CcontactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
