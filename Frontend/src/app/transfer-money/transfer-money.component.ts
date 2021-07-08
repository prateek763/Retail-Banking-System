import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit {
  id!:string;
  auth!:string;
  disp='none';
  constructor(private route:ActivatedRoute, private service:EmployeeService) { }
  data={
    amount: 1000,
    reference: "transfer",
    sourceAccount: {
      accountNumber: 1,
      amount: 1000
    },
    targetAccount: {
      accountNumber: 2,
      amount: 1000
    }
  };
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.auth=this.route.snapshot.params.token;
    console.warn(this.id);
  }
  transfer(source:string,target:string,amount:string){
    this.data.amount= +amount;
    this.data.sourceAccount.accountNumber= +source;
    this.data.targetAccount.accountNumber= +target;
    this.data.sourceAccount.amount= +amount;
    this.data.targetAccount.amount= +amount;
    console.warn(this.data);
    this.service.transfer(this.data,this.auth).subscribe(
      (response:any)=>{
        console.warn(response);
        if(response==true)
        this.disp='block';
      }
    )
    
  }
}
