import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { CustomerComponent } from './component/customer/customer/customer.component';
import { AddAdminComponent } from './component/admin/add-admin/add-admin.component';
import { AdminHeaderComponent } from './component/admin/admin-header/admin-header.component';
import { ViewAdminComponent } from './component/admin/view-admin/view-admin.component';
import { AboutUsComponent } from './component/customer/about-us/about-us.component';
import { ContactUsComponent } from './component/customer/contact-us/contact-us.component';
import { CustomerServiceNavComponent } from './component/customer/customer-service-nav/customer-service-nav.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path: 'customerRegister',component:CustomerComponent},
  {path:'addAdmin', component: AddAdminComponent},
  {path:'adminDashboardHeader', component: AdminHeaderComponent},
  {path:'viewAdmin', component: ViewAdminComponent},
  
  {path:'adminDashboard', component: AdminDashboardComponent,},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'customerNav',component:CustomerServiceNavComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
