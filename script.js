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
    let y = 10;
    const body = function () {
        let num = prompt('Угадай число от 1 до 100');
        y--;
        if (num === null) {
            alert('Игра окончена');
        } else if (y == 0) {
            let loss = confirm('Попытки закончились, хотите сыграть еще?');
            if (loss == true) {
                gameBot();
            } else if (loss == false) {
                alert('Игра окончена');
            }
        } else if (num > x) {
            alert('Загаданное число меньше, осталось попыток ' + y);
            console.log(num);
            body();
        } else if (!isNumber(num)) {
            alert('Введи число');
            y++;
            body();
        } else if (num < x) {
            alert('Загаданное число больше, осталось попыток ' + y);
            console.log(num);
            body();
        } else if (num == x) {
            let win = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            if (win == true) {
                gameBot();
            } else if (win == false) {
                alert('Игра окончена');
            }
        }
    };
    if (y > 0) {
        body();
    } else if (y == 0) {
        gameBot();
    }
};

randomInt = getRandomInt(1, 100);

gameBot(randomInt);

console.log(randomInt);