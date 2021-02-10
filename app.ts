// const types: {
//     string: string,
//     number: number,
//     arrType: string[],
//     tuple: [number, string, boolean]
// } = {

enum Enum {FOUR, FIVE, SIX }

const types = {
    string: 'Name',
    number: 22,
    arrType: ['one', 'two', 'three'],
    tuple: [1, 'a', false],
    enum: Enum.FIVE
}
types.tuple.push('3', 4)
types.tuple[0] = 2
console.log(types.tuple)

if (types.enum === Enum.FIVE) {
    console.log(Enum.FIVE)
}