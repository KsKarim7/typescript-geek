{
    // Inheritance

    class MotherClass {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(noOfHours: number) {
            console.log(`${this.name} is gonna sleep for next ${noOfHours} hours`);

        }
    }


    class Student extends MotherClass {

        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
    }


    const student1 = new Student("Khalz", 24, "wari");


    class Teacher extends MotherClass {

        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        }
        takeClass(noOfHours: number) {
            console.log(`${this.name} is going to take ${noOfHours} hours of classes weekly.`);

        }
    }

    const teacher = new Teacher("Sir Richarlison", 45, "Srilanka", "Assistant Professor");
    teacher.takeClass(20);
}