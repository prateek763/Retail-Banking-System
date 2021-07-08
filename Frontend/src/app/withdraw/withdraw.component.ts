import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  auth!:string;
  id!:string;
  disp='none';
  error='none';
  data:any;
  input={
    accountNumber:2,
    amount:1
}
  constructor(private route:ActivatedRoute, private service:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.auth=this.route.snapshot.params.token;
    console.warn(this.id);
  }

  withdraw(id:string,amount:string){
    this.disp='none';
    this.error='none';
    this.input.accountNumber= +id;
    this.input.amount= +amount;
    console.warn(this.input);
    this.service.withdrawAmount(this.input,this.auth).subscribe(
      (response:any)=>{
        console.warn(response);
        this.data=response;
        this.disp="block";
      },
      (error) => {
        this.error='block';
        console.error('error caught in component')
        console.warn(error.message);
      }
    )
  }

  onClick(data:string){
    console.warn(data);
    console.warn("aagya");
    if(data=='detail')
    this.router.navigateByUrl("/customer-home/"+this.auth+"/"+this.id);
    if(data=='withdraw')
    this.router.navigateByUrl("/withdraw/"+this.auth+"/"+this.id);
    if(data=='transfer')
    this.router.navigateByUrl("/transfer-money/"+this.auth+"/"+this.id);
    if(data=='transaction')
    this.router.navigateByUrl("/transactions/"+this.auth+"/"+this.id);
  }

  logout(){
    this.router.navigateByUrl("/landing");
  }
}
