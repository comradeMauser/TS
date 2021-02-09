// const person: {
//     firstName: string,
//     age: number,
// } = {
const person = {
    firstName: 'Name',
    age: 22,
    strings: ['one', 'two', 'three']
}
for (let str of person.strings){
    console.log(str.toUpperCase())
}