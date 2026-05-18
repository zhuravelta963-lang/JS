let isAuthorized = prompt("Are you authorized ? (True/False)");
let internetSpeed = prompt("What is the internet speed? (Mb/c)");
let isBanned = prompt("Are you banned? (True/False)");
if (isAuthorized === "True" && internetSpeed > 20 && isBanned === "False") {
    alert("Вхід виконано");
    console.log("Вхід виконано");
}
else{
    alert("Іди гуляй");
    console.log(internetSpeed);
}