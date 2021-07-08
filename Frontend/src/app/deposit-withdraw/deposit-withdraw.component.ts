import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-deposit-withdraw',
  templateUrl: './deposit-withdraw.component.html',
  styleUrls: ['./deposit-withdraw.component.css']
})
export class DepositWithdrawComponent implements OnInit {
  disp="none";
  auth!:string;
  draw="none";
  error="none";
  error1="none";
  data1={
    accountNumber:"1",
    amount:2
  };
  data:any;
  constructor(private service:EmployeeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.error1="none";
    console.warn(this.route.snapshot.params.token);
    this.auth=this.route.snapshot.params.token;
  }
  depositAmount(data:any){
    this.disp='none';
    this.draw='none';
    this.error="none";
    this.error1="none";
    data.amount= +data.amount
    console.warn(data);
    this.service.depositAmount(data,this.auth).subscribe(
      (response:any)=>{
        console.warn(response);
        this.data=response;
        console.warn(this.data);
        this.disp="block";
      },
      (error) => {
        this.error='block';
        console.error('error caught in component')
        console.warn(error.message);
      }
    );
  }

  withdrawAmount(acc:string,amt:string){
    this.disp='none';
    this.draw='none';
    this.error="none";
    this.error1="none";
    this.data1.accountNumber=acc;
    this.data1.amount= +amt;
    console.warn(this.data1);
    this.service.withdrawAmount(this.data1,this.auth).subscribe(
      (response:any)=>{
        console.warn(response);
        this.data=response;
        this.draw="block";
      },
      (error) => {
        this.error1='block';
        console.error('error caught in component')
        console.warn(error.message);
      }
    )
  }
}
