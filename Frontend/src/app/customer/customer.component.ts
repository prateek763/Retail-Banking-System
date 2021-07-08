import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  auth!:string;
  id!:string;
  customer:any;
  accounts:any;
  constructor(private route: ActivatedRoute,private service:EmployeeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.auth=this.route.snapshot.params.token;
    console.warn(this.id);
  }

  searchDetails(){
    this.service.getCustomer(this.auth,this.id).subscribe(
      (response:any)=>{console.warn(response);
        this.customer=response;
        console.warn(this.customer);
        this.accounts=this.customer.accounts;
        //this.router.navigateByUrl("/home");
        },
        (error) => {
          console.error('error caught in component')
          console.warn(error);
        }
    );
  }
  changeDate(date:string){
    let temp=date.split("-");
    this.customer.dateOfBirth=temp[1]+"-"+temp[0]+"-"+temp[2];
  }
}
