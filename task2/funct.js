/**
 * Создайте функцию, которая принимает два параметра и возвращает сумму значений этих параметров.
 * Вызовите функцию с двумя произвольными значениями и отобразите результат работы функции на экран.
 * */


let numberValue1 = Math.ceil(Math.random() * 200 - 100);
let numberValue2 = Math.ceil(Math.random() * 200 - 100);

let result = sumTwoValueOfNumber(numberValue1, numberValue2);

alert("Сумма двух произвольных значений: " + numberValue1 + " + " + numberValue2 + " равна = " + result);
console.log("Сумма двух произвольных значений: " + numberValue1 + " + " + numberValue2 + " равна = " + result);


function sumTwoValueOfNumber(numberValue1, numberValue2) {
    return numberValue1 + numberValue2;
}