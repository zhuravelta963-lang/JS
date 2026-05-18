let score = prompt("Скільки балів?");
let homeworkDone = prompt("Виконували всі дз? (Так/Ні)");
let finalTestPassed = prompt("Пройшли фінальний тест? (Так/Ні)");

if(score >= 70 && homeworkDone === "Так" && finalTestPassed === "Так" ){
    alert("Сертифікат успішно отримано");
    console.log("Сертифікат успішно отримано");
}
else{
    alert("Сертифікат успішно отримано");
    console.log("Умови для отримання сертифіката не виконані");
}

