"use strict";
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(2, 2);
const addArrow = (num1, num2) => num1 + num2;
// object --> function --> method 
const richUser = {
    name: "Khalz",
    balance: 100,
    addBalance(balance) {
        return this.balance + balance;
    },
};
const arr = [1, 3, 6];
const newArray = arr.map((i) => i * i);
