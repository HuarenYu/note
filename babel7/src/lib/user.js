export default class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;

        this.introduce = this.introduce.bind(this);
    }

    introduce() {
        console.log(`My name is ${this.name}. I am ${this.age} years old.`);
    }

}