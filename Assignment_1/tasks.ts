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