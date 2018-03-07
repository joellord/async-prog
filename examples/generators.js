function* iterable() {
    let i = 4;
    while(i--) {
        yield i;
    }
}

for (let iteration of iterable()) {
    console.log(iteration);
}

// 3
// 2
// 1
// 0