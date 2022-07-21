const cozumel = "3530103"

const forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?id="+ cozumel +"&units=imperial&appid=c009b8a7673094dcc5e97c71bb8342e8"
const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?id="+ cozumel +"&units=imperial&appid=c009b8a7673094dcc5e97c71bb8342e8"
var date = new Date
var nameDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

if(document.URL.includes("samscoot.github.io/")
    || document.URL.includes("samscoot.github.io/contact.html")){

    fetch(weatherApiUrl).then(response => {
        if(response.ok){
            return  response.json();
        }
        
    }).then(jsObject => {

            let daysToday  = document.querySelector(".forecast div .foreDayToday");
            let iconsToday  = document.querySelector(".forecast div .foreIconToday");
            let descToday  = document.querySelector(".forecast div .descTempToday");
            let tempsToday  = document.querySelector(".forecast div .foreTempToday");
            
            
            daysToday.textContent = "Today";
            iconsToday.src = "https://openweathermap.org/img/wn/" + jsObject.weather[0]["icon"] + ".png";
            
            descToday.textContent = jsObject.weather[0]["description"];
            tempsToday.textContent = jsObject.main["temp_max"];
            
            let nextDay = date.getDay() + 1;

            fetch(forecastApiUrl).then(response => {if(response.ok){return response.json()}}).then(forecastObj =>{
                let foreDays  = document.querySelectorAll(".forecast div .foreDay");
                let foreIcons  = document.querySelectorAll(".forecast div .foreIcon");
                let descTemp  = document.querySelectorAll(".forecast div .descTemp");
                let foreTemps  = document.querySelectorAll(".forecast div .foreTemp");
                for (let index = 0; index < 5; index++) {

                    if(nextDay > nameDays.length - 1)nextDay = 0
                    if(foreDays[index] != undefined) foreDays[index].textContent = nameDays[nextDay];
                    let srcImgFore = "https://openweathermap.org/img/wn/" + forecastObj["list"][index].weather[0].icon + ".png";
                    foreIcons[index].src = srcImgFore;
                    descTemp[index].textContent = forecastObj["list"][index].weather[0]["description"];
                    foreTemps[index].textContent = forecastObj["list"][index].main["temp"];
                    nextDay++
                    
                }
        
            })
    

    })

}
