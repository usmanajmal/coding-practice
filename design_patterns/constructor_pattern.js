/**
 * Person class to show an example of a Construct Design Pattern
 * @param {string} name Name of person
 * @param {number} age  Age of person
 * @param {string} occupation Occupation of person
 */
function Person(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
};

/**
 * Get name of a person
 * @return {string} Name of person
 */
Person.prototype.getName = function () {
    return this.name;
};

/**
 * Convert Person info to a string
 * @return {stirng} Get Person info in string format
 */
Person.prototype.toString = function () {
    return "Name: " + this.name +
           ", Age: " + this.age +
           ", Occupation: " + this.occupation;
};

// Usage:
var me = new Person("Usman", 31, "Engineer");
var myCrush = new Person("REDACTED", 29, "Hotshot Scientist");

// Tests
console.log(me.getName() === "Usman");  // true: PASS
console.log(myCrush.toString() === "Name: REDACTED, Age: 29, Occupation: Hotshot Scientist"); // true: PASS