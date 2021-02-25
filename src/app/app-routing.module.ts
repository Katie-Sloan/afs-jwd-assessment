import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './home/customers/customers.component';
import { ContractorsComponent } from './home/contractors/contractors.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), 
  // children: [ 
  //   { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
  //   { path: 'contractors', component: ContractorsComponent, canActivate: [AuthGuard] },
  // ]
 },
 
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
