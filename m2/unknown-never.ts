let userInput: unknown
let userName: string

userInput = 5050
userInput = 'String'

if (typeof userInput === 'string') {
    userName = userInput
}

function generateError(error: string, code: number): never {
    throw {error, errCode: code}
}

generateError('Alarm! ', 666)