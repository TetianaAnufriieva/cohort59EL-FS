async function getWeather() {
    const apiKey = "3603bb385cba1812ea388450e7b58c94";
    const city = document.getElementById("city").value;

    if (!city) {
        alert("Введите название города");
        return;
    }

    // units=metric — температура в Цельсиях
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Город не найден");
        }

        const data = await response.json();

        document.getElementById("weather").innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Температура: ${data.main.temp}°C</p>
            <p>Погода: ${data.weather[0].description}</p>
            <p>Влажность: ${data.main.humidity}%</p>
            <p>Ветер: ${data.wind.speed} м/с</p>
        `;
    } catch (error) {
        document.getElementById("weather").innerHTML =
            `<p style="color:red;">Ошибка: ${error.message}</p>`;
    }
}
