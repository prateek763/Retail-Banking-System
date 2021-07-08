import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'jwt-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  constructor(private http:HttpClient) { }

  login(user:any){
    return this.http.post<any>("http://18.116.26.227:8090/authentication-ms/login",user);
  }

  addUser(user:any,auth:string){
    httpOptions.headers=httpOptions.headers.set('Authorization',auth);
    return this.http.post<any>("http://18.116.26.227:8090/customer-ms/bankapi/createCustomer",user,httpOptions);
  }

  createAccount(account:any,auth:string,id:string){
    httpOptions.headers=httpOptions.headers.set('Authorization',auth);
    return this.http.post<any>("http://18.116.26.227:8090/account-ms/bankapi/createAccount/"+id,account,httpOptions);
  }

  getCustomer(auth:string,id:string){
    httpOptions.headers=httpOptions.headers.set('Authorization',auth);
    return this.http.get<any>("http://18.116.26.227:8090/customer-ms/bankapi/getCustomerDetails/"+id,httpOptions);
  }

  updateCustomer(user:any,auth:string){
    httpOptions.headers=httpOptions.headers.set('Authorization',auth);
    return this.http.post<any>("http://18.116.26.227:8090/customer-ms/bankapi/updateCustomer",user,httpOptions);
  }

  deleteCustomer(id:string,auth:string){
    httpOptions.headers=httpOptions.headers.set('Authorization',auth);
    return this.http.delete<any>("http://18.116.26.227:8090/customer-ms/bankapi/deleteCustomer/"+id,httpOptions);
  }

  getCustomerAccounts(id:String,auth:string){
    httpOptions.headers=httpOptions.headers.set('Authorization',auth);
    return this.http.get<any>("http://18.116.26.227:8090/account-ms/bankapi/getAccounts/"+id,httpOptions);
  }

  depositAmount(account:any, auth:string){
    httpOptions.headers=httpOptions.headers.set('Authorization',auth);
    return this.http.post<any>("http://18.116.26.227:8090/account-ms/bankapi/deposit",account,httpOptions);
  }

  getStatement(input:any,auth:string){
    console.warn(input);
    
    httpOptions.headers=httpOptions.headers.set('Authorization',auth);
    return this.http.post<any>("http://18.116.26.227:8090/account-ms/bankapi/getStatement",input,httpOptions);
  }

  withdrawAmount(account:any,auth:string){
    httpOptions.headers=httpOptions.headers.set('Authorization',auth);
    return this.http.post<any>("http://18.116.26.227:8090/account-ms/bankapi/withdraw",account,httpOptions);
  }

  transfer(input:any,auth:string){
    httpOptions.headers=httpOptions.headers.set('Authorization',auth);
    return this.http.post<any>("http://18.116.26.227:8090/account-ms/bankapi/transfer",input,httpOptions);
  }

  getTransaction(accountNumber:string, auth:string){
    httpOptions.headers=httpOptions.headers.set('Authorization',auth);
    return this.http.get<any>("http://18.116.26.227:8090/transaction-ms/bankapi/getTransactionsByAccountNumber/"+accountNumber,httpOptions);
  }
}
