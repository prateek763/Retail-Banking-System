import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {
  disp="none";
  url='';
  auth!:string;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.warn(this.route.snapshot.params.token);
    this.auth=this.route.snapshot.params.token;
  }

  onLogin(data:string){
    console.warn(data);
    console.warn("aagya");
    this.router.navigate(["/register/"+this.auth]);
  }

}
