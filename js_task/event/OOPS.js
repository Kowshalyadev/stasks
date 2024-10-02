// 1. Create a base class called Vehicle.
// 2. Add properties: brand, model, year.
// 3. Add methods: startEngine(), accelerate().
// 4. Create two subclasses: Car and Truck.
// 5. Inherit properties and methods from Vehicle.
// 6. Add unique properties and methods to each subclass.
class Vehicle{
    brand;
    model;
    year;
     constructor(brand, model, year){
       this.brand = brand;
       this.model = model;
       this.year = year;
     }
     startEngine(){
       console.log("startEngine...");
     }
     accelerate(){
       console.log("accelerate....");
     }
  }
class car extends Vehicle {
   color;
   constructor(brand, model, year,color,) {
       super(brand, model, year); // Calls the constructor of the Animal class
       this.color = color;
   }
}
class Truck extends Vehicle {
   opentop;
   constructor(brand, model, year,color,opentop) {
       super(brand, model, year);
       this.opentop = opentop;
   }
}
var vehicle1 = new Vehicle("BMW", "KOIME", "2000", "RED");
console.log(vehicle1);
vehicle1. startEngine();
vehicle1. accelerate();

// output:
// Vehicle { brand: 'BMW', model: 'KOIME', year: '2000' }
// startEngine...
// accelerate....





// Create a class called BankAccount with private properties:

// - balance
// - accountNumber

// And public methods:
// - deposit(amount): adds amount to balance
// - withdraw(amount): subtracts amount from balance
// - getBalance(): returns balance


class BankAccount {
    constructor(accountNumber) {
        this._accountNumber = accountNumber; // private property for account number
        this._balance = 0; // private property for balance
    }
deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            return `Deposited: $${amount}. New balance: $${this._balance}`;
        } else {
            return 'Deposit amount must be positive.';
        }
    }
withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            return `Withdrew: $${amount}. New balance: $${this._balance}`;
        } else if (amount > this._balance) {
            return 'Insufficient funds.';
        } else {
            return 'Withdrawal amount must be positive.';
        }
    }
     getBalance() {
        return this._balance;
    }
}

const myAccount = new BankAccount('123456789');
console.log(myAccount.deposit(100)); // Deposited: $100. New balance: $100
console.log(myAccount.withdraw(50));  // Withdrew: $50. New balance: $50
console.log(myAccount.getBalance());   // 50

// output;
// Deposited: $100. New balance: $100
// Withdrew: $50. New balance: $50
// 50

 

// Create a class called MathHelper with a static method:

// - addNumbers(a, b): returns the sum of a and b
class MathHelper {
    static addNumbers(a, b) {
        return a + b;
    }
}
const sum = MathHelper.addNumbers(5, 3);
console.log(sum);

// output:
// 8