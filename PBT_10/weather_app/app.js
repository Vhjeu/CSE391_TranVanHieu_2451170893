const form = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const loadingState = document.getElementById('loading');
const errorState = document.getElementById('error');
const successState = document.getElementById('success');
const errorMsg = document.getElementById('errorMsg');
const cityNameEl = document.getElementById('cityName');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const historyList = document.getElementById('historyList');

let searchHistory = JSON.parse(localStorage.getItem('weather_history')) || [];

const weatherIcons = {
    'Clear': '☀️', 'Sunny': '☀️', 'Partly cloudy': '⛅', 'Cloudy': '☁️', 'Overcast': '☁️',
    'Mist': '🌫️', 'Patchy rain possible': '🌦️', 'Light drizzle': '🌧️', 'Light rain': '🌧️',
    'Moderate rain': '🌧️', 'Heavy rain': '⛈️', 'Thunderstorm': '⛈️', 'Snow': '❄️', 'Fog': '🌫️'
};

function updateState(state) {
    loadingState.classList.add('hidden');
    errorState.classList.add('hidden');
    successState.classList.add('hidden');

    if (state === 'loading') loadingState.classList.remove('hidden');
    if (state === 'error') errorState.classList.remove('hidden');
    if (state === 'success') successState.classList.remove('hidden');
}

async function fetchWeather(city) {
    updateState('loading');

    try {
        const response = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);

        if (!response.ok) {
            throw new Error('Thành phố không tồn tại hoặc lỗi dữ liệu.');
        }

        const data = await response.json();

        if (!data.current_condition || data.current_condition.length === 0) {
            throw new Error('Không tìm thấy thông tin thời tiết.');
        }

        const current = data.current_condition[0];
        const weatherDesc = current.weatherDesc[0].value;
        const areaName = data.nearest_area[0].areaName[0].value;

        cityNameEl.textContent = areaName;
        temperature.textContent = `${current.temp_C}°C`;
        humidity.textContent = current.humidity;
        description.textContent = weatherDesc;

        let icon = '🌡️';
        for (const key in weatherIcons) {
            if (weatherDesc.toLowerCase().includes(key.toLowerCase())) {
                icon = weatherIcons[key];
                break;
            }
        }
        weatherIcon.textContent = icon;

        updateState('success');
        addToHistory(areaName);

    } catch (error) {
        errorMsg.textContent = error.message === 'Failed to fetch'
            ? 'Lỗi kết nối mạng. Vui lòng kiểm tra lại.'
            : error.message;
        updateState('error');
    }
}

function addToHistory(city) {
    const formattedCity = city.trim();
    searchHistory = searchHistory.filter(c => c.toLowerCase() !== formattedCity.toLowerCase());
    searchHistory.unshift(formattedCity);

    if (searchHistory.length > 5) {
        searchHistory.pop();
    }

    localStorage.setItem('weather_history', JSON.stringify(searchHistory));
    renderHistory();
}

function renderHistory() {
    historyList.innerHTML = '';
    searchHistory.forEach(city => {
        const li = document.createElement('li');
        li.textContent = city;
        li.addEventListener('click', () => {
            cityInput.value = city;
            fetchWeather(city);
        });
        historyList.appendChild(li);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    }
});

renderHistory();