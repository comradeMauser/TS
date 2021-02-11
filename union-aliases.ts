type Inputs = number|string
type Conversion = 'num' | 'str' | string

function combine(n: Inputs, m: Inputs, resultConversion: Conversion) {
    return resultConversion === 'str' ? String(n) + String(m) :
        resultConversion === 'num' ? Number(n) + Number(m) : `resultConversion is ${resultConversion}`
}

const combineNumbers = combine(100, 99.9, '')
console.log(combineNumbers)

const combineStrings = combine('100', '99.9', 'none')
console.log(combineStrings)

const combineNumbersToString = combine(100, 99.9, 'str')
console.log('combineNumbersToString:', combineNumbersToString)

const combineStringsToNumber = combine('100', '99.9', 'num')
console.log('combineStringsToNumber:', combineStringsToNumber)