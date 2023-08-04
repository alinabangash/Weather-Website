let weather = {
    apikey : "d3fa7e2786ac4f579559293d61275afa",
    fetchweather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
             city 
             + "&units=imperial&appid=" 
             + this.apikey
        )
            .then((response) => response.json())
            .then((data)=> this.displayweather(data));
    },

    displayweather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon, description,temp,humidity,speed)
        document.querySelector(".city").textContent = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description").textContent = description;
        document.querySelector(".temp").textContent = temp + "°F";
        document.querySelector(".humidity").textContent = "Humidity: " + humidity + "%";
        document.querySelector(".wind").textContent = "Wind Speed: " + speed + " mph";
        document.querySelector(".weather").classList.remove("loading");

    },
    search: function(){
        this.fetchweather(document.querySelector(".searchbar").value);
    },

};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".searchbar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Houston");