'use strict';
// create random id - 62^6 different options
function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

//The maximum is inclusive and the minimum is inclusive 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//the func convert new Date() and return month&year string
function getTime() {
    var t = new Date();
    var time = t.toString();
    return time.slice(4, 7) + ' ' + time.slice(11, 15);
}