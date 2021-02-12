"use strict";
var userInput;
var userName;
userInput = 5050;
userInput = 'String';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(error, code) {
    throw { error: error, errCode: code };
}
generateError('Alarm! ', 666);
