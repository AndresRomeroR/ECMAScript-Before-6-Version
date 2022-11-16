//flat
const array = [1,1,1,1,1,12,2,2,[2,2,2,2,[3,3,3,3]]];
console.log(array.flat(3));

//flatmap
const array2 = [1,1,1,1,1];
console.log(array2.flatMap(v => [v, v*2]));