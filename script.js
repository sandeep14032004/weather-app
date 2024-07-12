document.querySelector('.search button').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.querySelector('.search input').value;
    const apiKey = '45a7e991ce7b59689655bccd75dfb23e'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found!');
            return;
        }

        document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.querySelector('.temp').textContent = `${data.main.temp}°C`;
        document.querySelector('.city').textContent = data.name;
        document.querySelector('.humidity').textContent = `${data.main.humidity}%`;
        document.querySelector('.Wind').textContent = `${data.wind.speed} km/h`;

        document.querySelector('.weather').style.display = 'block';
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data');
    }
}
