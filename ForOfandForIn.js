let person = {
    name: 'Banko',
    age: 55
};
for (let i in person) {
    console.log(`${i} is ${person[i]}`);
}

let colors = ['red', 'blue', 'green'];
for (let i of colors) {
    console.log(i);
}