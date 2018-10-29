import User from './user';

export default class Student extends User {
    
    constructor(name, age, score) {
        super(name, age);
        this.score = score;
        
        this.myScore = this.myScore.bind(this);
    }

    myScore() {
        console.log(`My final exam score is ${this.score}`);
    }
    
}