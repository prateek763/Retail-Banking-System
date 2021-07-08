import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  customer={
    address: "temp",
    dateOfBirth: "09-06-1999",
    email: "string@string.com",
    panNumber: "EARPM5887E",
    password: "Rishikesh",
    userId: "Rishikesh",
    username: "Rishikesh"
  }
  account={
    accountType:"Saving",
    balance:2000,
    customerId:"",
    username:""
  }
  type!:string;
  disp="none"
  data: any;
  success="none";
  auth!:string;
  accNo!:number;
  constructor(private service:EmployeeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.warn(this.route.snapshot.params.token);
    this.auth=this.route.snapshot.params.token;
  }
  createAccount(type:string){
    this.account.accountType=type;
    this.account.customerId=this.customer.userId;
    this.account.username=this.customer.username;
    console.warn(this.account);
    this.service.createAccount(this.account,this.auth,this.account.customerId).subscribe(
      (response:any)=>{console.warn(response);
      this.data=response;
      console.warn(this.data);
      this.success="block";
      this.accNo=response.accountNumber;
      //this.router.navigateByUrl("/home");
      }
    );
  }
  addCustomer(data:any){
    this.success="none";
    this.disp="none";
    console.warn(data);
    this.customer.address=data.address;
    this.generateDate(data.dob);
    this.customer.username=data.fname+" "+data.lname;
    this.customer.email=data.email;
    this.customer.panNumber=data.panNo;
    this.customer.password=data.pass;
    this.customer.userId=data.fname+data.lname;
    console.warn(this.customer);
    this.service.addUser(this.customer,this.route.snapshot.params.token).subscribe(
      (response:any)=>{console.warn(response);
      this.data=response;
      console.warn(this.data);
      if(response==true)
      console.log("User created successfully"); 
      this.createAccount(data.type);
      //this.router.navigateByUrl("/home");
      },
      (error) => {
        this.disp="block";
        console.error('error caught in component')
        console.warn(error);
      }
    );
    
  }
  generateDate(date:any){
    let temp=new Date(date.getTime()).toLocaleDateString("en-us");
    let temp1=temp.split("/");
    if(+temp1[1]<=9)
      temp1[1]="0"+temp1[1];
    if(+temp1[0]<=9)
      temp1[0]="0"+temp1[0];
    this.customer.dateOfBirth=temp1[1]+"-"+temp1[0]+"-"+temp1[2];
  }
}
