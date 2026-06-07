const btnRefresh = document.getElementById('btnRefresh');
const timeDisplay = document.getElementById('timeDisplay');

const widgets = [
    document.getElementById('widgetUser'),
    document.getElementById('widgetDog'),
    document.getElementById('widgetWeather')
];

function setWidgetState(widget, state, errorMsg = "") {
    const loadingEl = widget.querySelector('.widget-loading');
    const errorEl = widget.querySelector('.widget-error');
    const contentEl = widget.querySelector('.widget-content');

    loadingEl.classList.add('hidden');
    errorEl.classList.add('hidden');
    contentEl.classList.add('hidden');

    if (state === 'loading') {
        loadingEl.classList.remove('hidden');
    } else if (state === 'error') {
        errorEl.textContent = errorMsg;
        errorEl.classList.remove('hidden');
    } else if (state === 'success') {
        contentEl.classList.remove('hidden');
    }
}

function renderWidgetData(index, data) {
    if (index === 0) {
        const user = data.results[0];
        document.getElementById('userImg').src = user.picture.large;
        document.getElementById('userName').textContent = `${user.name.first} ${user.name.last}`;
        document.getElementById('userEmail').textContent = user.email;
    } else if (index === 1) {
        document.getElementById('dogImg').src = data.message;
    } else if (index === 2) {
        document.getElementById('weatherTemp').textContent = `${data.current_weather.temperature}°C`;
        document.getElementById('weatherWind').textContent = `Gió: ${data.current_weather.windspeed} km/h`;
    }
}

async function loadDashboard() {
    btnRefresh.disabled = true;
    timeDisplay.textContent = "Đang tải dữ liệu...";

    widgets.forEach(w => setWidgetState(w, 'loading'));

    const startTime = Date.now();

    const results = await Promise.allSettled([
        fetch("https://randomuser.me/api/").then(r => {
            if (!r.ok) throw new Error(`HTTP Error ${r.status}`);
            return r.json();
        }),
        fetch("https://dog.ceo/api/breeds/image/random").then(r => {
            if (!r.ok) throw new Error(`HTTP Error ${r.status}`);
            return r.json();
        }),
        fetch("https://api.open-meteo.com/v1/forecast?latitude=21.03&longitude=105.85&current_weather=true").then(r => {
            if (!r.ok) throw new Error(`HTTP Error ${r.status}`);
            return r.json();
        })
    ]);

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            renderWidgetData(index, result.value);
            setWidgetState(widgets[index], 'success');
        } else {
            setWidgetState(widgets[index], 'error', result.reason.message || "Lỗi tải dữ liệu");
        }
    });

    const endTime = Date.now();
    timeDisplay.textContent = `Data loaded in ${endTime - startTime} ms`;
    btnRefresh.disabled = false;
}

btnRefresh.addEventListener('click', loadDashboard);

loadDashboard();