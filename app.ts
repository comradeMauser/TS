function sum(n: number, m: number): number {
    return n + m
}

function printRes(n: number): void {
    console.log(`Result: ` + n)
}

let someFunc: (q: number, w: number) => number
someFunc = sum
// someFunc = printRes

console.warn(sum(121, 144))
console.log(`~~~~~~~~~~~~~~~~~~~~`)
console.log(printRes(169))
console.log(`~~~~~~~~~~~~~~~~~~~~`)
console.log(someFunc(14, 15))