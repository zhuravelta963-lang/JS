// Task 1

// for(let i= 1; i <= 10; i++){
//     alert(i)
// }


//Task 2

// let N = prompt("Введіть число");
// for (let i = 2; i <= N; i ++) {
//     if(i % 2 === 0) {
//         alert(i);
//     }
// }


//Task 3

// let N = prompt("Введіть число")
// syma = 0;
// for (let i = 1; i <= N; i++) {
//     syma += i;
// }
// alert(syma)

//Task 4

// let N = prompt("Введіть число")
// for (let i = N; i > 0; i--) {
//     alert(i);
// }

//Task 5

// let N = prompt("Введіть число");
// for (let i = 1; i <= 10; i++) {
//     alert(N * i);
// }

//Task 6

// let password;
// do {
//     password = prompt("Введіть пароль:");
//     if (password !== "admin123") {
//         alert("Неправильний пароль");
//     }
// } while (password !== "admin123");
// alert("Пароль правильний");

//Task 7

// let password;
// for (let i = 1; i <= 3; i++) {
//     password = prompt("Введіть пароль");
//     if (password === "admin123") {
//         alert("Доступ дозволено");
//         break;
//     }
//     if (i === 3) {
//         alert("Доступ заблоковано");
//     } else {
//         alert("Неправильний пароль");
//     }
// }

//Task 8

for(i = 1; i <= 20; i ++){
    if(i % 2 !== 0){
        continue;
    }
    alert(i);
}


