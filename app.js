"use strict";
var city = 'Vietnam';
var button = document.querySelector('button');
function clickHandler(data) {
    console.log("good morning", data);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, city));
}
