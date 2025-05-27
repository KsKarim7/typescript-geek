{
    // oop 
    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        // If you use parameter properties like this you don't need to initialize variables
        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;

        }
        makeSound() {
            console.log(`${this.sound}`);

        }
    }

    const dog = new Animal("Tommy", "Rottweiler", "Bark");
    const cat = new Animal("Pussy", "Mixed Breed", "Meow");
    dog.makeSound();
}