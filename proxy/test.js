const proxy = new Proxy({}, {
    get(target, key, receiver) {
        console.log(`getting`);
        return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
        console.log(`setting`);
        console.log(receiver);
        return Reflect.set(target, key, value, receiver);
    }
});

proxy.count = 1;

console.log(proxy);