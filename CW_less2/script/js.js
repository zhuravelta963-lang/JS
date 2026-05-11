// false
// 0
// 0n
// ""
// null
// undefined
// NaN

// if(умова){
//     [інструкція якщо істина];
//     [інструкція якщо істина]; //якщо 1 умова, то крапку-кому можна не ставити
//     [інструкція якщо істина];
// } else if{
//     [інструкція якщо істина];
//     [інструкція якщо істина];
// }else{
//     [інструкція якщо хиба]
// }

//оператори порівняння

// ==
// !=
// >
// <
// >=
// <=
// !==
// ===

// let a = 3, b = "3";
// console.log(a === b);

// let a = prompt("What is your number?");
// let b = prompt("What is your number?");
// let c;
// if (a > b){
//     c = "a > b"
// }else if(a < b){
//     c = "a < b"
// }else{
//     c = "a == b"
// }
// alert(c);

// let a = prompt("What is your number?");
// let b = prompt("What is your number?");
// let c;
// if(a > b)c = "a > b";
// else if(a > b)c = "a < b";
// else c = "a == b";
// alert(c);

//умова switch

// let course = prompt("What is your course?"), title;
// switch (course){
//     case'figma':
//         title = 'WEB інструменти';
//         break;
//     case 'Python':
//     case 'Javascript':
//         title = 'Програмування';
//         break;
//     case 'frontend':
//     case 'HTML':
//     case 'CSS':
//         title = "WEB програмування";
//         break;
//     default:
//         title = "Не знаю, що ти хочеш!";
//         break;
// }
// alert(title);


//Логічні оператори

// let a = 'false', b = false, c = true;
// console.log(!a);
// console.log(!!a); //тільки для string
//
// console.log(a && c);
// console.log(a || b);

// let age = prompt("How old?"), info;
// if(age < 18){
//     info = 'Школота'
// }else if(age >= 18 && age <=35){
//     info = 'Призивний'
// }else{
//     info = 'Є шанси'
// }
// alert(info);



let name = prompt("What is your name?"),
    greetings = `Вітаємо, ${name || "гість"}!`;
alert(greetings);