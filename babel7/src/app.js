import User from './lib/user';
import Student from './lib/student';

const u = new User('Cool Lee', 22);
const s = new Student('Jimmy Lin', 13, 100);

u.introduce();

s.introduce();
s.myScore();

function timer(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time === 2000) {
                reject('This is an error.');
            } else {
                resolve(`timer ${time} was done!`);
            }
        }, time);
    });
}

async function runTimer() {
    try {
        const res1 = await timer(1000);
        console.log(res1);
        const res2 = await timer(2000);
        console.log(res2);
    } catch(err) {
        console.log(err);
    }
}

runTimer();