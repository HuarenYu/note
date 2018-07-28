//generator async controll

const run = require('./run');

function fetch(url) {
    return new Promise((rs, rj) => {
        setTimeout(() => {
            rs(url);
        }, 1000);
    });
}

run(function *() {
    const r1 = yield fetch('/request/1');
    console.log(r1);
    const r2 = yield fetch('/request/2');
    console.log(r2);
    console.log('final result:' + r1 + '---' + r2);
});

async function main() {
    const r1 = await fetch('/request/3');
    console.log(r1);
    const r2 = await fetch('/request/4');
    console.log(r2);
}

main();

