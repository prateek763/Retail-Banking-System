import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  employeeLoggedIn=true;
  customerLoggedIn=true;
  constructor() { }
  employeeLogin(){
    this.employeeLoggedIn=true;
  }
  employeeLogout(){
    this.employeeLoggedIn=false;
  }
  isEmployeeLoggedIn(){
    return this.employeeLoggedIn;
  }
  customerLogin(){
    this.customerLoggedIn=true;
  }
  customerLogout(){
    this.customerLoggedIn=false;
  }
  isCustomerLoggedIn(){
    return this.customerLoggedIn;
  }
}
