//Write a “person” class to hold all the details.
class Person {
    constructor(firstName, lastName, age, gender, interests) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    bio() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old. I like ${this.interests.join(', ')}.`;
    }

    greeting() {
        return `Hi! I'm ${this.firstName}.`;
    }
}
// Example usage
let person1 = new Person('Raaj', 'Vimal', 30, 'male', ['music', 'skiing']);
console.log(person1.bio()); // Raaj Vimal is 30 years old. They like music, skiing.
console.log(person1.greeting()); // Hi! I'm Raaj.

//write a class to calculate the Uber price.

class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute, bookingFee) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
        this.bookingFee = bookingFee;
    }

    calculatePrice(distance, duration) {
        const fare = this.baseFare + (distance * this.costPerMile) + (duration * this.costPerMinute);
        return fare + this.bookingFee;
    }
}

// Example usage
const calculator = new UberPriceCalculator(2.5, 1.5, 0.3, 1.2);
const distance = 10; // in miles
const duration = 20; // in minutes
const totalPrice = calculator.calculatePrice(distance, duration);
console.log("Uber Fare Calculation System working...")
console.log(`Total Price: $${totalPrice.toFixed(2)}`);



