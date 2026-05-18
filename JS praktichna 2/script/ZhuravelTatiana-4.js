let genre = prompt("Який жанр музики хочете слухати?")
switch (genre) {
    case "rock":
        title = "Увімкнено рок-плейлист";
        break;
    case "pop":
        title = "Увімкнено поп-плейлист";
        break;
    case "jazz":
        title = "Увімкнено джаз-плейлист";
        break;
    case "classical ":
        title = "Увімкнено класичну музику";
        break;
    default:
        title = "Жанр не знайдено";
        break;
}
alert(title);
console.log(title);