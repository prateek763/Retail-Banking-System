import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountViewComponent } from './account-view/account-view.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { DepositWithdrawComponent } from './deposit-withdraw/deposit-withdraw.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { MiniStatementComponent } from './mini-statement/mini-statement.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateComponent } from './update/update.component';
import { EmployeeAuthGuardGuard } from './employee-auth-guard.guard'
import { CustomerComponent } from './customer/customer.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CustomerAuthGuard } from './customer-auth.guard'
const routes: Routes = [
  {
    path:"",
    component:LandingPageComponent
  },
  {
    path:'register/:token',
    component:RegistrationComponent,
    canActivate:[EmployeeAuthGuardGuard]
  },
  {
    path:'welcome',
    component:CustomerHomeComponent,
    canActivate:[EmployeeAuthGuardGuard]
  },
  {
    path:'update',
    component:UpdateComponent,
    canActivate:[EmployeeAuthGuardGuard]
  },
  {
    path:'update/:id/:token',
    component:UpdateComponent,
    canActivate:[EmployeeAuthGuardGuard]
  },
  {
    path:'landing',
    component:LandingPageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin',
    component:AdminLoginComponent
  },
  {
    path:'employee/:token',
    component:EmployeeHomeComponent,
    canActivate:[EmployeeAuthGuardGuard]
  },
  {
    path:'home/:token',
    component:HomeComponent,
    canActivate:[EmployeeAuthGuardGuard]
  },
  {
    path:'view/:token',
    component:AccountViewComponent,
    canActivate:[EmployeeAuthGuardGuard]
  },
  {
    path:'deposit-withdraw/:token',
    component:DepositWithdrawComponent,
    canActivate:[EmployeeAuthGuardGuard]
  },
  {
    path:'statement/:token',
    component:MiniStatementComponent,
    canActivate:[EmployeeAuthGuardGuard]
  },
  {
    path:'customer-home/:token/:id',
    component:CustomerComponent,
    canActivate:[CustomerAuthGuard]
  },
  {
    path:'withdraw/:token/:id',
    component:WithdrawComponent,
    canActivate:[CustomerAuthGuard]
  },
  {
    path:'transfer-money/:token/:id',
    component:TransferMoneyComponent,
    canActivate:[CustomerAuthGuard]
  },
  {
    path:'transactions/:token/:id',
    component:TransactionsComponent,
    canActivate:[CustomerAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
