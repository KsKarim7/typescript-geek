function formatString(input: string, toUpper: boolean = true): string {
    if (toUpper) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}

// console.log(formatString("Hello"));          // Output: "HELLO"
// console.log(formatString("Hello", true));   // Output: "HELLO"
// console.log(formatString("Hello", false));  // Output: "hello"


interface obj {
    title: string;
    rating: number;
}

function filterByRating(items: obj[]): obj[] {
    const res: obj[] = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].rating >= 4.0) {
            res.push(items[i])
        }
    }
    return res;
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

// console.log("Output:", filterByRating(books));


function concatenateArrays<T>(...arrays: T[][]): T[] {
    const res: T[] = [];
    for (const a of arrays) {
        for (const i of a) {
            res.push(i);
        }
    }
    return res;
}

// console.log(concatenateArrays(["a", "b"], ["c"]));
// concatenateArrays([1, 2], [3, 4], [5]);


class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    public getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    public getModel(): string {
        return `Model: ${this.model}`;
    }
}

// const myCar = new Car("Toyota", 2020, "Corolla");
// myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
// myCar.getModel();  // Output: "Model: Corolla"


function processValue(val: string | number): number {
    if (typeof val == "string") {
        return val.length
    }
    else {
        return val * 2;
    }
}

// processValue("hello"); 
// processValue(10);     


interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    const res: Product[] = [];
    // let count: number = 0;
    for (let i = 0; i < products.length; i++) {
        if (res.length == 0) {
            res.push(products[i]);
            // count++;
        }
        else {
            if (products[i].price > res[0].price) {
                res[0] = products[i];
            }
        }
    }
    if (res.length != 0) {
        return res[0];
    }
    else {
        return null;
    }
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

// console.log(getMostExpensiveProduct(products));

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    } else {
        return "Weekday";
    }
}
// console.log(getDayType(Day.Monday));   // Output: "Weekday"
// console.log(getDayType(Day.Sunday));   // Output: "Weekend"


async function squareAsync(n: number): Promise<number> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (n < 0) {
                rej("Negative number not allowed");
            } else {
                res(n * n);
            }
        }, 1000);
    });
}
squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed

