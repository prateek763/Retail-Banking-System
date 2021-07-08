import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {
  account:any;
  auth!:string;
  accounts:any;
  constructor(private route:ActivatedRoute, private service:EmployeeService) { }

  ngOnInit(): void {
    this.auth=this.route.snapshot.params.token;
    console.warn(this.auth);
  }
  onSearch(data:string){
    console.warn(data);
    this.service.getCustomerAccounts(data,this.auth).subscribe(
      (response:any)=>{console.warn(response);
        this.accounts=response;
        console.warn(this.accounts);
      }
    )
    this.accounts=this.account;
  }

}
