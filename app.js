"use strict";
// const person: {
//     firstName: string,
//     lastName: string,
//     age: number,
// } = {
var person = {
    firstName: 'Hans',
    lastName: 'Schmulke',
    age: 30,
    strings: ['one', 'two', 'three']
};
for (var _i = 0, _a = person.strings; _i < _a.length; _i++) {
    var str = _a[_i];
    console.log(str.toUpperCase());
}
