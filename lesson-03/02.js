// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(n) {
    return n % 2 === 0;
}

let total = isEven(2);
console.log(total);