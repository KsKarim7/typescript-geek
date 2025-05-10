"use strict";
{
    // type assertion
    let anything;
    anything = "next level";
    anything;
    const kgToGm = (value) => {
        if (typeof value == 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is : ${convertedValue}`;
        }
        if (typeof value == 'number') {
            return value * 1000;
        }
    };
    const res = kgToGm(1000);
    const res2 = kgToGm('1000');
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
