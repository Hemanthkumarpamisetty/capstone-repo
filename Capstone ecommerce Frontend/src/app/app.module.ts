import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
// import { AdminHeaderComponent } from './component/admin/admin-header/admin-header.component';
import { LoginComponent } from './component/login/login.component';
import { CustomerComponent } from './component/customer/customer/customer.component';
import { AdminModule } from './component/admin/admin.module';
import { AboutUsComponent } from './component/customer/about-us/about-us.component';
import { ContactUsComponent } from './component/customer/contact-us/contact-us.component';
import { CustomerServiceNavComponent } from './component/customer/customer-service-nav/customer-service-nav.component';
import { SellerRegisterComponent } from './component/seller/seller-register/seller-register.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    // AdminHeaderComponent,
    LoginComponent,
    CustomerComponent,
    AboutUsComponent,
    ContactUsComponent,
    CustomerServiceNavComponent,
    SellerRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
