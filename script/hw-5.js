// 1 - Написать функцию, которая возвращает меньшее из 2 чисел. Например, из двух чисел — 8 и 4 — функция должна вернуть 4.  
// Если передадим 6 и 6, то функция должна вернуть 6.

// Через if 
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
}

console.log(min(5, 6));
console.log(min(6, 6));
console.log(min(10, 8));

// Стрелочная функция, тернарный оператор
let minNumber = (a, b) => {
    return ((a < b) ? a : b);
}

console.log(minNumber(5, 6));
console.log(minNumber(6, 6));
console.log(minNumber(10, 8));


// 2 - Написать функцию, которая принимает число, а возвращает строку 'Число четное', если число четное, 'Число нечетное' — если нечетное.

// только с числовыми значениями  
function even_or_odd(number) {
    if (number % 2 === 0) {
        return 'Число нечетное';
    } else {
        return 'Число четное';
    }
}

console.log(even_or_odd(0));
console.log(even_or_odd(2));
console.log(even_or_odd(3));

// с не числовым значением 
function calcEvenOddnumber(userNumber) {
    if (!isNaN(userNumber)) {
        if (userNumber % 2) {
            return 'Число нечетное';
        } else {
            return 'Число четное';
        }
    } else {
        return 'Вы ввели не числовое значение';
    }
}

console.log(calcEvenOddnumber(0));
console.log(calcEvenOddnumber(2));
console.log(calcEvenOddnumber(3));
console.log(calcEvenOddnumber('ggg'));

//console.log(calcEvenOddnumber(Number(prompt('Пожалуйста, введите любое число'))));


//3.1 - Написать функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.

let squareNumber1 = (number) => console.log(number ** 2);

squareNumber1 (Number(prompt('Введите число')));


//3.2 - Написать функцию, которая принимает параметром число и возвращает квадрат этого числа.

let squareNumber2 = (number) => {
    return number ** 2;
 }
 
 console.log(squareNumber2 (Number(prompt('Введите число'))));


// 4 - Написать функцию, которая спрашивает у пользователя, сколько ему лет.
// Если пользователь вводит отрицательное число, выводим на экран «Вы ввели неправильное значение».
// Если пользователь введет число от 0 до 12, выводит на экран «Привет, друг!».
// Если пользователь введет число больше или равно 13, выводит на экран «Добро пожаловать!».

function askUser(ageUser) {
    if (ageUser < 0) {
        alert ('Вы ввели неправильное значение');
    } else if (ageUser > 12) {
        alert ('Добро пожаловать!'); 
    } else {
        alert ('Привет, друг!');
    }  
}

askUser (Number(prompt('Сколько вам лет?')));


// 5 - Написать функцию, которая на вход принимает 2 числа:
// Проверяет, являются ли переданные параметры корректными числами. (Преобразование типов и isNaN() помогут.)
// Если нет, то вернуть строку 'Одно или оба значения не являются числом'.
// Если оба параметра — числа, то вернуть произведение данных чисел.

function checkNumbers (a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a * b;
    } else {
        return 'Одно или оба значения не являются числом';
    }
}

console.log(checkNumbers (5, 4));
console.log(checkNumbers ('f', 6));


// 6 - Написать функцию, которая спрашивает у пользователя число, проверяет его на корректность, 
// после чего возводит его в куб и возвращает следующую строку: 'n в кубе равняется <получившееся значение>'. 
// Если переданный параметр не число, вернуть строку 'Переданный параметр не является числом'.
// Проверьте самостоятельно, что данная функция работает корректно и выводит правильный результат с параметрами 
// от 0 до 10 включительно.

let calcCube = (userNumber) => {
    if (!isNaN(userNumber)) {
        let result = userNumber**3;
        return `${userNumber} в кубе равняется ${result}`;
    } else {
        return 'Переданный параметр не является числом';
    }
}

console.log (calcCube (Number(prompt('Введите число'))));


// 7 - Создать объекты circle1 и circle2 со свойством radius. У объектов должен быть метод getArea, 
// который возвращает площадь круга через радиус, а также getPerimeter, 
// который возвращает периметр окружности.
const pi = 3.14;

function getArea() {
    return pi * this.radius**2;
}

function getPerimeter() {
    return 2 * pi * this.radius;
}

const circle1 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter
}

const circle2 = {
    radius: 10,
    getArea: getArea,
    getPerimeter: getPerimeter
}

console.log (circle1.getArea());
console.log (circle2.getArea());
console.log (circle1.getPerimeter());
console.log (circle2.getPerimeter());