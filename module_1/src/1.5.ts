const user: {
    readonly university: 'Brac'; //type --> literal type (fixed type) & it is only readonly can't be changed or modified further
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isFun: boolean
} = {
    university: 'Brac',
    firstName: 'Khaled',
    lastName: 'Karim',
    isFun: false,
}