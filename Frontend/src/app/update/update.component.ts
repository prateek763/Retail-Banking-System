import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  custid!:string;
  customer={
    address: "temp",
    dateOfBirth: "09-06-1999",
    email: "string@string.com",
    panNumber: "EARPM5887E",
    password: "Rishikesh",
    userId: "Rishikesh",
    username: "Rishikesh"
  }
  newCustomer={
    address: "temp",
    dateOfBirth: "09-06-1999",
    email: "string@string.com",
    panNumber: "EARPM5887E",
    password: "Rishikesh",
    userId: "Rishikesh",
    username: "Rishikesh"
  }
  fname=""
  lname=""
  disp!:string;
  exist="none"
  data: any;
  success="none";
  auth!:string;
  accNo!:number;
  constructor(private route: ActivatedRoute,private service:EmployeeService) { }

  ngOnInit(): void {
    this.disp="none";
    this.custid=this.route.snapshot.params.id;
    this.auth=this.route.snapshot.params.token;
    console.warn(this.custid);
    this.service.getCustomer(this.auth,this.custid).subscribe(
      (response:any)=>{console.warn(response);
        this.data=response;
        console.warn(this.data);
        if(response==null)
        this.exist="block"
        else{
        this.customer=response;
        this.changeDate(response.dateOfBirth);
        console.log(this.customer);
        let name=this.customer.username.split(" ");
        this.fname=name[0];
        this.lname=name[1];
        }
        //this.router.navigateByUrl("/home");
        },
        (error) => {
          this.exist="block";
          console.error('error caught in component')
          console.warn(error);
        }
    );
  }
  updateCustomer(data:any){
    console.warn(data);
    this.newCustomer.address=data.address;
    this.generateDate(data.dob);
    this.newCustomer.username=data.fname+" "+data.lname;
    this.newCustomer.email=data.email;
    this.newCustomer.panNumber=data.panNo;
    this.newCustomer.password=data.pass;
    this.newCustomer.userId=this.customer.userId;
    console.warn(this.newCustomer);
    this.service.updateCustomer(this.newCustomer,this.auth).subscribe(
      (response:any)=>{console.warn(response);
      window.confirm("User updated successfully");}
    );
    console.warn("sab badhiya");
  }
  changeDate(date:string){
    let temp=date.split("-");
    this.customer.dateOfBirth=temp[1]+"-"+temp[0]+"-"+temp[2];
  }
  generateDate(date:any){
    let temp=new Date(date.getTime()).toLocaleDateString("en-us");
    let temp1=temp.split("/");
    if(+temp1[1]<=9)
      temp1[1]="0"+temp1[1];
    if(+temp1[0]<=9)
      temp1[0]="0"+temp1[0];
    this.newCustomer.dateOfBirth=temp1[1]+"-"+temp1[0]+"-"+temp1[2];
  }
}
