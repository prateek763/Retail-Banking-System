import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  user={
    "userId":"",
    "role":"ADMIN",
    "password":""
}
  disp="none";
  win=window.parent;
  data:any;
  constructor(private service:EmployeeService, private router:Router,private authService:AuthServiceService) { }

  ngOnInit(): void {
  }
  onLogin(id:string,password:string){
    this.user.userId=id;
    this.user.password=password;
    console.warn(this.user);
    this.service.login(this.user).subscribe(
      (response:any)=>{console.warn(response);
      this.data=response;
    console.warn(this.data.authToken);
      //this.router.navigateByUrl("/home");
        this.authService.employeeLogin();
        
      this.win.location.href = "http://localhost:4200/home/"+this.data.authToken;
    },
      (error) => {
        this.disp="block";
        console.error('error caught in component')
        console.warn(error);
      }
    );
  }
}
