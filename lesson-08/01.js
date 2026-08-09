/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  let res
  let str2 = str.split(" ")
  for (let index = 0; index < str2.length; index++) {
    let el = str2[index][0].toUpperCase() + str2[index].slice(1)
    str2[index] = el
    res = str2.join(' ')
  }
  console.log(res);
}

let str = "hello world from javascript"
capitalizeWords(str);