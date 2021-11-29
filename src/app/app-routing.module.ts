import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthComponent } from './auth/auth.component';
import { CcontactsComponent } from './ccontacts/ccontacts.component';
import { CbaseComponent } from './cbase/cbase.component';

const routes: Routes = [
	{path:'', redirectTo:'about', pathMatch:'full' },
	{path: 'login', component: AuthComponent},
	{path: 'home', component: CcontactsComponent},
	{path: 'about', component: CbaseComponent},
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
