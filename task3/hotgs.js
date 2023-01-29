/**
 * Создайте одну глобальную переменную с произвольным значением и две функции.
 * Продемонстрируйте, что глобальная переменная может использоваться в этих двух функциях.
 **/


let radius = 100;

let centrOfRadiusX = 400;
let centrOfRadiusY = 300;

let arr = getRandomCoordinatesOfCircle(centrOfRadiusX, centrOfRadiusY);
console.log("Окружность с радиусом: " + radius + " и координатами ее центра x=" + centrOfRadiusX + " y=" + centrOfRadiusY + ", ее случайные координаты в области видимости окружности : [" + arr + "]");


function getRandomCoordinatesOfCircle(startCoordinateX, startCoordinateY) {
    let randomCoordinateX;
    let randomCoordinateY;
    while (true) {
        randomCoordinateX = Math.ceil(Math.random() * (getMaxCoordinate(startCoordinateX) - getMinCoordinate(startCoordinateX)) + getMinCoordinate(startCoordinateX));
        randomCoordinateY = Math.ceil(Math.random() * (getMaxCoordinate(startCoordinateY) - getMinCoordinate(startCoordinateY)) + getMinCoordinate(startCoordinateY));
        if ((Math.pow((randomCoordinateX - startCoordinateX), 2) + Math.pow((randomCoordinateY - startCoordinateY), 2)) <= Math.pow(radius, 2)) {
            break;
        }
    }
    return Array.of(randomCoordinateX, randomCoordinateY);
}


function getMinCoordinate(startAnyCoordinate) {
    return startAnyCoordinate - radius;
}

function getMaxCoordinate(startAnyCoordinate) {
    return startAnyCoordinate + radius;
}