let day = prompt("Вітаємо в кінотеатрі Супер А.! Який сьогодні день?");
switch (day) {
    case "Понеділок":
    case "Вівторок":
    case "Середа":
        title = "Вартість квитка складає 150 грн"
        break;
    case "Четвер":
    case "П'ятниця":
        title = "Вартість квитка складає 200 грн"
        break;
    case "Субота":
    case "Неділя":
        title = "Вартість квитка складає 250 грн"
        break;
    default:
        title = "Помилка введення дня тижня";
        break;
}
alert(title);
console.log(title);