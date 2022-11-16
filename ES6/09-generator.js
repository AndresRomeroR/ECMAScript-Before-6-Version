
function* iterate(array) {
    for(let value of array) {
        yield value;
    }
}

const it = iterate(['Andres', 'Ricardo', 'Martha', 'German']);
console.log(it.next().value);//andres
console.log(it.next().value);//ricardo
console.log(it.next().value);//martha
console.log(it.next().value);//german