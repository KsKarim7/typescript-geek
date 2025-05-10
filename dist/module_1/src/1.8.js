"use strict";
// Destructuring
{
    const user = {
        id: 123,
        name: {
            Fname: "K",
            Mname: "S",
            Lname: "K",
        },
        contactNo: "011111",
        address: "Maluvai",
    };
    const { contactNo, name: { Mname }, } = user;
    // array destructuring
    const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
    const [, , bestFriend, ...rest] = myFriends;
}
