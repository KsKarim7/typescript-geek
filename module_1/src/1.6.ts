function add(num1: number, num2: number = 10): number {  //explicit return type
    return num1 + num2;
}

add(2, 2)

const addArrow = (num1: number, num2: number): number => num1 + num2


// object --> function --> method 
const richUser = {
    name: "Khalz",
    balance: 100,
    addBalance(balance: number): number { //anonymous normal function 
        return this.balance + balance
    },
};


const arr: number[] = [1, 3, 6]

const newArray: number[] = arr.map((i: number): number => i * i);