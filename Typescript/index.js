"use strict";
class car {
    constructor(name, color, brandName) {
        this.name = name;
        this.color = color;
        this.brandName = brandName;
    }
}
class Person {
    constructor(name, height, complexion) {
        this.name = name;
        this.height = height;
        this.complexion = complexion;
    }
    sleep() {
        console.log(this.name + " is sleeping");
    }
}
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log("Hi, my name is " + this.name + " and i am " + this.age + " years old");
    }
}
class Animal {
    constructor(name, skinType) {
        this.name = name;
        this.skinType = skinType;
    }
    makeSound() {
        console.log("This " + this.name + " is making " + this.name + " sound");
    }
}
class Dog extends Animal {
    constructor(name, skinType, breed) {
        super(name, skinType);
        this.breed = breed;
    }
    bark() {
        console.log(this.skinType);
        console.log("A " + this.breed + " is barking");
    }
    makeSound() {
        console.log("This " + this.name + " is woofing");
    }
}
const GS = new Dog("Dog", "fur", "German Sherpard");
GS.bark();
GS.makeSound();
// const bmw = new car("bmw","Blue", "X5")
// const audi = new car("audi", "black", "X6")
// const Noah =  new Person("Noah","189cm","light-skinned")
// console.log(bmw);
// console.log(audi);
// console.log(Noah);
// const Ade = new Student("Ade", 19)
// const Olu = new Student("Olu", 17)
// const Fabian = new Student("Fabian", 22)
// Fabian.introduce()
// Ade.introduce()
// Olu.introduce()
// Noah.sleep()
