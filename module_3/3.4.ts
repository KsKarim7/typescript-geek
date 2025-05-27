{
    // instance of guard
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log("Sounding");
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeBark() {
            console.log('Barking');
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeMeow() {
            console.log('Meowing');
        }
    }

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {  //using function
            animal.makeBark();
        }
        else if (animal instanceof Cat) {
            animal.makeMeow();
        }
        else {
            animal.makeSound();
        }
    }

    const dog = new Dog("Tom", "Dog")
    const cat = new Cat("Pussy", "Cat")
    getAnimal(cat);
}