/*1. Что выведет alert(typeof NaN); ? Number в js NaN - это число
2. Что выведет alert(NaN === NaN); ? выведет false это особенность языка
3. 0.1 + 0.2 == 0.3 ? false
4. Какой тип будет иметь переменная a, если она создается при помощи следующего кода:
var a = "a,b".split('a'); //массив ['a', 'b']
5. Сделать так, чтобы при нажатии на элемент <а> алертом выводилось «Hello world!».*/
document.querySelector('.elem').addEventListener('click', () => {
    document.querySelector('.hello').insertAdjacentHTML('beforeend', 'Hello, world!');
})
    
/*
6. Найти все элементы div с классом one, а также все элементы p с классом two. Затем добавить им всем класс three и визуально плавно спустить вниз.
*/document.querySelectorAll('.one').forEach(elem => {elem.classList.add('three')});
document.querySelectorAll('.two').forEach(elem => {elem.classList.add('three')});
/*
7. Выбрать видимый div с именем red, который содержит тег span.
*/document.querySelectorAll('[name="red"]').forEach(elem => {(elem.offsetWidth > 0) ? elem.querySelector('span').insertAdjacentHTML('beforeend', 'Hello, i am SPAN'):''});

/*
8. Привести пример замыкания.
*/
function makeCounter() {
var count = 0;
   function counter() {
      count = count + 1;
      return count;
   }
   return counter;
}
var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());
/*
9. Написать функцию, которая уменьшает или увеличивает указанное время на заданное количество минут, например:
changeTime('10:00', 1) //return '10:01'
changeTime('10:00', -1) //return '09:59'
changeTime('23:59', 1) //return '00:00'
changeTime('00:00', -1) //return '23:59'
*/
function changeTime(clock, min){
    let clockArr = clock.split(':');
    let time = new Date();
    time.setHours(clockArr[0]);
    time.setMinutes(clockArr[1]);
    time.setMinutes(time.getMinutes() + min);
    
    return `${time.getHours()}:${time.getMinutes()}`;
}
console.log(changeTime('10:00', -5));



/*
10. Написать функцию, возвращающую градус, на который указывают часовая и минутная стрелки в зависимости от времени, например:
clock_degree("00:00") returns : "360:360"
clock_degree("01:01") returns : "30:6"
clock_degree("00:01") returns : "360:6"
clock_degree("01:00") returns : "30:360"
clock_degree("01:30") returns : "30:180"
clock_degree("24:00") returns : "Check your time !"
clock_degree("13:60") returns : "Check your time !"
clock_degree("20:34") returns : "240:204"
*/
function clock_degree(clock){
    let clockArr = clock.split(':');
    if((clockArr[0] > 23 || clockArr[0] < 0) || (clockArr[1] > 59 || clockArr[1] < 0)) return 'Check your time !';
    if (clockArr[0] > 12) clockArr[0] -= 12;
    let degHour = clockArr[0] * 30;
    if(clockArr[0] == 0) degHour = 360;
    const degMin = clockArr[1] * 6;
    return `${degHour}:${degMin}`;
}

console.log(clock_degree('0:35'));

/*
11. Написать простую игру «Угадай число». Программа загадывает случайное число от 0 до 100. Игрок должен вводить предположения и получать ответы «Больше», «Меньше» или «Число угадано».

*/

const numGuess = 50
function inputNum(mess){
    const num = prompt(mess);
    if ((num == +num) && (num > 0 && num <= 100)) return +num;
    inputNum(mess);
}

function compare(n1,n2){
    if(n1 > n2) return 'больше';
    if(n1 < n2) return 'меньше';
    if(n1 == n2) return 'равно';
    
}

let num1 = inputNum('Введите число от 0 до 100');
while(true){
    let message = compare(num1, numGuess);
    if (message == 'равно'){
        alert('Поздравляем! Вы угадали!');
        break;
    };
    num1 = inputNum(`Ваше число ${message} загаданного. Попробуйте еще раз.`)
}


