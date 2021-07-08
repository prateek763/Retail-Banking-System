import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    "userId":"",
    "role":"ADMIN",
    "password":""
}
  disp="none";
  win=window.parent;
  data:any;
  constructor(private service:EmployeeService, private router:Router) { }

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
      //this.router.navigateByUrl("/customer-home/"+this.data.authToken);
      this.win.location.href = "http://localhost:4200/customer-home/"+this.data.authToken+"/"+id;
    },
      (error) => {
        this.disp="block";
        console.error('error caught in component')
        console.warn(error);
      }
    );
  }
}
