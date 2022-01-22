
class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }
  get balance() {
    return this.transactions.reduce((acc, trans) => {
      if (trans instanceof Deposit) {
        return acc += trans.amount;
      } else if (trans instanceof Withdrawal) {
        return acc -= trans.amount;
      }
    },0);
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {
  constructor(amount, account) {
    this.amount = Math.abs(amount);
    this.account = account;
  }
  commit() {
    this.time = new Date();

    this.account.addTransaction(this);
    // this.account.balance += this.value;
  }


}

class Deposit extends Transaction {

  // get value() {
  //   return this.amount;
  // }

}

class Withdrawal extends Transaction {

  // get value() {
  // return -this.amount;
  // }

}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('snow-patrol');
const t1 = new Deposit(50, myAccount);
t1.commit();

const t2 = new Withdrawal(10, myAccount);
t2.commit();

console.log(myAccount);
console.log('Balance is: $', myAccount.balance);
