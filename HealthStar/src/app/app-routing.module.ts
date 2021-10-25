import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
