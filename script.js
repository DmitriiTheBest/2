function calcTimeYear(monthNumber) {
    if (!isNaN(monthNumber)) {
        if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
            return 'Зима';
        } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
            return 'Весна';
        } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
            return 'Лето';
        } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
            return 'Осень';
        } else {
            return 'Такого месяца не существует';
        }
    } else {
        return 'Вы ввели не числовое значение';
    }
}



function rememberWords() {

    const fruitsArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let fruitsArraySort = fruitsArray.sort(() => Math.random() - 0.5);
    alert(fruitsArraySort);

    let indexWords = fruitsArraySort.length - 1;

    let userAnswerFirstEl = prompt('Чему равнялся первый элемент массива?');
    let userAnswerLastEl = prompt('Чему равнялся последний элемент массива?');

    if (userAnswerFirstEl.toLowerCase() === fruitsArraySort[0].toLowerCase() && 
    userAnswerLastEl.toLowerCase() === fruitsArraySort[indexWords].toLowerCase()) {

        alert('Поздравляем, Вы угадали оба элемента!');

    } else if (userAnswerFirstEl.toLowerCase() === fruitsArraySort[0].toLowerCase() || 
    userAnswerLastEl.toLowerCase() === fruitsArraySort[indexWords].toLowerCase()) {

        alert ('Вы были близки к победе!');

    } else {
        alert ('К сожалению, вы ответили неверно.');
    }
}
