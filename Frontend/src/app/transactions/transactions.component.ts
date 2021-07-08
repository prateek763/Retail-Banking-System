import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  id!:string;
  auth!:string;
  transactions:any;
  accounts=[
    {
    accountNumber: 2,
    accountType: "Savings",
    balance: 2000,
    customerId: "PrateekJaiswal",
    transactions: [
      {
        amount: 2000,
        date: "2021-07-07T04:19:59.500+00:00",
        id: 2,
        reference: "Deposit",
        sourceAccountNumber: 2,
        sourceOwnerName: "Prateek Jaiswal",
        targetAccountNumber: 2,
        targetOwnerName: "Prateek Jaiswal"
      }
    ],
    username: "Prateek Jaiswal"
    }
  ];
  disp='none';
  constructor(private route:ActivatedRoute, private service:EmployeeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.auth=this.route.snapshot.params.token;
    console.warn(this.id);
    this.service.getCustomerAccounts(this.id,this.auth).subscribe(
      (response:any)=>{console.warn(response);
        this.accounts=response;
        console.warn(this.accounts);
      }
    )
  }

  onSearch(accNo:string){
    this.disp='none';
    for(let item of this.accounts){
      if(item.accountNumber=== +accNo)
      this.transactions=item.transactions
      else
      this.disp='block'
    }
  }
  getTransaction(accountNumber:string){
    console.warn(accountNumber);
    this.service.getTransaction(accountNumber,this.auth).subscribe(
      (response:any)=>{
        console.warn(response);
        this.transactions=response;
      }
    )
    
  }
}
