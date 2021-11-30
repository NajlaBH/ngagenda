import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthComponent } from './auth/auth.component';
import { CcontactsComponent } from './ccontacts/ccontacts.component';
import { CbaseComponent } from './cbase/cbase.component';
import { CrudComponent } from './crud/crud.component';

import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
	{path:'', redirectTo:'about', pathMatch:'full' },
	{path: 'login', component: AuthComponent},
	{path: 'home', component: CcontactsComponent},
	{path: 'about', component: CbaseComponent},
	//{path: 'crud', component: CrudComponent},
        {path: 'crud', canActivate: [AuthGuardService], component: CrudComponent},
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
