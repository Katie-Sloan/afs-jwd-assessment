import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CustomersComponent } from 'src/app/home/customers/customers.component';
import { ContractorsComponent } from 'src/app/home/contractors/contractors.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, canLoad: [AuthGuard],
    children: [
      { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
      { path: 'contractors', component: ContractorsComponent, canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
