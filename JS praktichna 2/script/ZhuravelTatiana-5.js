let grade = prompt("Яка оцінка");
switch(grade) {
    case "11":
    case "12":
    case "10":
        title = "Відмінний результат";
        break;
    case "9":
    case "8":
    case "7":
        title = "Добрий результат";
        break;
    case "6":
    case "5":
    case "4":
        title = "Задовільний результат";
        break;
    case "3":
    case "2":
    case "1":
        title = "Потрібно покращити знання";
        break;
    default:
        title = "Некоректна оцінка";
        break;
}
alert(title);
console.log(title);