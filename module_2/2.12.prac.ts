{
    console.log('Hello');

    function designation(name: string, age: number, role?: 'admin' | 'user' | 'guest') {

        console.log(name, age, role);

    }
    designation('khalz', 24, 'user')
}