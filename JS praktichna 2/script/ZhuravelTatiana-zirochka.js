let temperature = prompt("Яка температура будинку?");
let sensorError = prompt("Чи є несправним датчик?(Так/Ні)");
if (sensorError === "Так") {
    alert("Помилка датчика температури");
    console.log("Помилка датчика температури");
}
else{
    if(temperature < 18){
        alert("Увімкнути обігрів");
        console.log("Увімкнути обігрів");
    }
    else if(temperature >= 18 && temperature <= 25){
        alert("Температура комфортна");
        console.log("Температура комфортна");
    }
    else if(temperature > 25){
        alert("Увімкнути кондиціонер");
        console.log("Увімкнути кондиціонер");
    }
}
