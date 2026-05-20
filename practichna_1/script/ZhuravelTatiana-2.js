let rate = 43.7;
let amount_1 = prompt("Введіть дохід за 1 місяць ($)")*rate;
let amount_2 = prompt("Введіть дохід за 2 місяць ($)")*rate;
let amount_3= prompt("Введіть дохід за 3 місяць ($)")*rate;
let totalIncome = amount_1 + amount_2 + amount_3;
let totalTax = totalIncome * 0.05 + 4500;
alert(`Загальна сума доходу Максима складає ${totalIncome} грн.`);
alert(`В кінці кварталу Максиму необхідно сплатити ${totalTax} грн.`);