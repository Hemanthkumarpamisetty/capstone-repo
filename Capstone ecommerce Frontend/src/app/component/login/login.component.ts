import { Component, OnInit, NgModule  } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { loginModel } from 'src/app/model/loginModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginRequest: loginModel = new loginModel();
  response: any;


  constructor(
    private jwtService:LoginService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ){}
  ngOnInit(): void {
    this.localStorageService.clear();
  }

  username: string = '';
  password: string = '';
  readFormData(formData: any) {
    console.log("------------------Login--1----",formData.form.value);
    
    this.loginRequest.username = formData.form.value.username;
    this.loginRequest.password = formData.form.value.password;
    this.getAccessToken(this.loginRequest);
    this.router.navigate(['/adminDashboardHeader']);
  }
  getAccessToken(authRequest: loginModel) {
    console.log("---Login.ts--2--", authRequest);
    
    this.jwtService.getGeneratedToken(authRequest).subscribe((resp)=>{
      console.log(resp);
       this.response= resp;
       const responseData=JSON.parse(this.response);
     // const token=resp.
      //console.log("tokenavalue"+token);
      this.localStorageService.setItem("adminId",responseData.data.adminID );
      
    })
  }

}
