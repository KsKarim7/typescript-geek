{
    // https://github.com/Apollo-Level2-Web-Dev/batch-4-be-a-typescript-technocrat/blob/main/practice_probelms.md  -- Question
    console.log('Hello');

    function designation(name: string, age: number, role?: 'admin' | 'user' | 'guest') {

        console.log(name, age, role);

    }
    designation('khalz', 24, 'user')
}