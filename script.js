'use strict';

let randomInt;

const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const gameBot = function (x) {
    const body = function () {
        let num = prompt('Угадай число от 1 до 100');
        if (num === null) {
            alert('Игра окончена');
        } else if (num > x) {
            alert('Загаданное число меньше');
            console.log(num);
            body();
        } else if (!isNumber(num)) {
            alert('Введи число');
            body();
        } else if (num < x) {
            alert('Загаданное число больше');
            console.log(num);
            body();
        } else if (num == x) {
            alert('Поздравляю, Вы угадали!!!');
        }
    };
    body();
};

randomInt = getRandomInt(1, 100);

gameBot(randomInt);

console.log(randomInt);