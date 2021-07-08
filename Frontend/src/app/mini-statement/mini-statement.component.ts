import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-mini-statement',
  templateUrl: './mini-statement.component.html',
  styleUrls: ['./mini-statement.component.css']
})
export class MiniStatementComponent implements OnInit {
  disp = 'none';
  statement = [
    {
      date: '29/05/2021',
      narration: "Deposit was successfull",
      reference: "HSNK1234567",
      amount: 2000.0,
      withdraw: 0.0,
      deposit: 2000.0,
      balance: 9000.0
    }
  ];

  input = {
    accountNo: "1",
    fromDate: "04-07-2021",
    toDate: "04-07-2021"
  };
  auth!: string;
  statements: any;
  not = "none";
  constructor(private route: ActivatedRoute, private service: EmployeeService) { }

  ngOnInit(): void {
    console.warn(this.route.snapshot.params.token);
    this.auth = this.route.snapshot.params.token;
  }
  onSearch(acc: string, fromDate: any, toDate: any) {
    console.warn(acc + " " + fromDate + " " + toDate);
    if (fromDate === "") {
      console.warn("In If");
      
      this.generateDateUndefined();
    }
    else {
      console.warn("In Else");
      
      this.input.fromDate = this.generateDate(fromDate);
      this.input.toDate = this.generateDate(toDate);
    }
    console.warn(acc + " " + fromDate + " " + toDate);
    this.input.accountNo = acc;
    console.warn(this.input);
    this.service.getStatement(this.input, this.auth).subscribe(
      (response: any) => {
        console.warn(response);
        this.statements = response;
        this.disp = 'block';
      },
      (error) => {
        this.not = "block";
        console.error('error caught in component')
        console.warn(error);
      }
    );
  }
  generateDate(date: any) {
    console.warn("In generateDate");
    
    let temp1 = date.split("/");
    return temp1[1] + "-" + temp1[0] + "-" + temp1[2];
  }

  generateDateUndefined() {
    console.warn("In Undefined");
    
    var today: Date = new Date();
    console.log(today);
    var dd: string = String(today.getDate());
    var mm: string = String(today.getMonth());
    var mm1: string = String(today.getMonth() + 1);
    var yyyy: string = String(today.getFullYear());

    if (parseInt(dd) < 10) {
      dd = '0' + dd;
    }

    if (parseInt(mm) < 10) {
      mm = '0' + mm;
    }
    if (parseInt(mm1) < 10) {
      mm1 = '0' + mm1;
    }

    this.input.fromDate = dd + '-' + mm + '-' + yyyy;
    //console.log(fromDate);

    this.input.toDate = dd + '-' + mm1 + '-' + yyyy;
    //console.log(toDate)
  }
}
