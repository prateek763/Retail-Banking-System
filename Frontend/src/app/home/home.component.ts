import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  disp="none";
  success="none";
  data!:any;
  url='';
  auth!:string;
  constructor(private route:ActivatedRoute,private service:EmployeeService, private authService:AuthServiceService, private router:Router) { }

  ngOnInit(): void {
    console.warn(this.route.snapshot.params.token);
    this.auth=this.route.snapshot.params.token;
    this.url='http://localhost:4200/employee/'+this.auth;
  }

  onCustomer(data:string){
    console.warn(data);
    console.warn("aagya");
    if(data=='create')
    this.url="http://localhost:4200/register/"+this.auth;
    if(data=='view')
    this.url="http://localhost:4200/view/"+this.auth;
    if(data=='deposit-withdraw')
    this.url="http://localhost:4200/deposit-withdraw/"+this.auth;
    if(data=='statement')
    this.url="http://localhost:4200/statement/"+this.auth;
  }
  onUpdate(data:string){
    console.warn(data);
    console.warn("aagya");
    this.url="http://localhost:4200/update/"+data+"/"+this.auth;
    console.warn(this.url);
    
  }

  deleteCustomer(data:string){
    this.success="none";
    this.disp="none"
    console.warn(data);
    this.data=data;
    console.warn(this.data);
    this.service.deleteCustomer(data,this.auth).subscribe(
      (response:any)=>{console.warn(response);
        this.success="block";
      },
      (error) => {
        this.disp="block";
        console.error('error caught in component')
        console.warn(error);
      }
    );
  }
  confirmDelete(){
    this.success="block";
  }

  onLogout(){
    this.authService.employeeLogout();
    this.router.navigateByUrl("/landing");
  }
}
