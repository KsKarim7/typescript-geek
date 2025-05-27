{
    // type guards


    // typeOf as type guard


    type Alphanumeric = string | number;



    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {

        if (typeof param1 == 'number' && typeof param2 == 'number') {
            return param1 + param2
        }
        else {
            return param1.toString() + param2.toString();
        }

    }

    const res = add(2, 3);
    const res1 = add('2', '3');


    // in guard
    type normalUser = {
        name: string
    }
    type adminUser = {
        name: string;
        role: "Admin"
    }
    const getUser = (user: normalUser | adminUser) => {
        if ('role' in user) {
            console.log(`I have a role to play ${user.role}`);

        }
        else {
            console.log("My name is", user.name, "I don't have any role.");

        }
    };

    const nrmluser: normalUser = {
        name: "Hudai user"
    }
    const adminuser: adminUser = {
        name: "admin user",
        role: "Admin",
    }


    getUser(adminuser);
}