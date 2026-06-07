// Разработайте функцию isEven, которая определяет, чётное ли число.
// 

function isEven(number) {
    if (number === 0) {
        return false
    } else if (number % 2 === 0) {
        return true
    } else {
        return false
    };
}

console.log(isEven(0));