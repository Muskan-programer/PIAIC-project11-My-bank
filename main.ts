 class customer {
 }
// interface  BankAccount
 interface BankAccount{
    accNunber : number,
    balance : number,
 }

 // class Bank
 class Bank{
    customer: customer[] = [];
    account: BankAccount[]= [];
 }

let  myBank = new Bank ();

let cus = new Customer("Hello","World", 25,"Female", 2565468432, 10002536);

let cus2 = new Customer("Cute","World", 25,"Female", 2565468432, 10002507