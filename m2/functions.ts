function sum(n: number, m: number): number {
    return n + m
}

function printRes(n: number): void {
    console.log(`Result: ` + n)
}

let someFunc: (q: number, w: number) => number
someFunc = sum

function sumWithCallback(n: number, m: number, cb: (res: number) => void) {
    const result = n + m
    return cb(result)
}

console.warn(sum(121, 144))
console.log(`~~~~~~~~~~~~~~~~~~~~`)

console.log(printRes(169))
console.log(`~~~~~~~~~~~~~~~~~~~~`)

console.log(someFunc(14, 15))
console.log(`~~~~~~~~~~~~~~~~~~~~`)

console.log(sumWithCallback(20, 30, (sum) => {
    return sum
}))