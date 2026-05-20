let amount = prompt("Скільки грошей?");
let rate = 43.7;
let commission = 0.005;
let uah = amount * rate;
let finalSum = uah - (uah * commission);
alert(`Після виконання проєкту, буде нараховано ${finalSum} грн з урахуванням комісії банку!`);