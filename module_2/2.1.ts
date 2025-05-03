{
    // type assertion
    let anything: any;

    anything = "next level";
    (anything as string)

    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value == 'string') {
            const convertedValue = parseFloat(value) * 1000
            return `The converted value is : ${convertedValue}`
        }
        if (typeof value == 'number') {
            return value * 1000
        }
    }

    const res = kgToGm(1000) as number
    const res2 = kgToGm('1000') as string


    type CustomError = {
        message: string
    }

    try {

    }
    catch (error) {
        console.log((error as CustomError).message);
    }
}