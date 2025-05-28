{
    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        public addMoney(amount: number) {
            this._balance += amount;
        }
        public getBalance() {
            return this._balance;
        }
    }

    class studentAccount extends BankAccount {
        test() {
            this._balance = 0;
        }
    }

    const poorPeopleAccount = new BankAccount(222, 'Rafiq', 8000);
    poorPeopleAccount.addMoney(9);

}