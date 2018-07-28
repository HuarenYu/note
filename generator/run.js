
function run(gen) {
    const generator = gen();
    function r(g, v) {
        const n = g.next(v);
        if (n.done) return;
        n.value.then(res => {
            r(g, res);
        });
    }
    r(generator);
}

module.exports = run;