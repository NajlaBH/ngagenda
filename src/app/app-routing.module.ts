import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthComponent } from './auth/auth.component';
import { CcontactsComponent } from './ccontacts/ccontacts.component';
import { CbaseComponent } from './cbase/cbase.component';
import { CrudComponent } from './crud/crud.component';

import { AuthGuardService } from './services/auth-guard.service';

import { AddContactComponent } from './add-contact/add-contact.component';


const routes: Routes = [
	{path:'', redirectTo:'about', pathMatch:'full' },
	{path: 'login', component: AuthComponent},
	{path: 'home', component: CcontactsComponent},
	{path: 'about', component: CbaseComponent},
	//{path: 'crud', component: CrudComponent},
        {path: 'crud', canActivate: [AuthGuardService], component: CrudComponent},
	{path: 'addContact',canActivate: [AuthGuardService], component:AddContactComponent}, 
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
