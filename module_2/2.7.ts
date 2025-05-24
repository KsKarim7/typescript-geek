{
    //generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }
    type Owner = "bike" | "car" | "ship";

    type Owner2 = keyof Vehicle

    const man: Owner2 = "ship"

    // const user = {
    //     name: 'Md. Khaled',
    //     age: 24,
    //     address: 'dhk'
    // }
    // user['name']


    const getPropertyValue = <x, y extends keyof x>(obj: x, key: y) => {
        return obj[key]
    }

    const user = {
        name: 'Md. Khaled',
        age: 24,
        address: 'dhk'
    }

    const res1 = getPropertyValue(user, 'name');
}