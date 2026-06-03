function pipe(...fns) {
    return function (initialValue) {
        return fns.reduce((acc, fn) => fn(acc), initialValue);
    };
}

const process = pipe(
    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => "Kết quả: " + x
);
console.log(process(5));

function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);

        if (cache[key] !== undefined) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const expensiveCalc = memoize((n) => {
    let result = 0;
    for (let i = 0; i < n; i++) result += i;
    return result;
});

console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));

function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);

search("i");
search("iP");
search("iPh");
search("iPhone");

async function retry(fn, maxAttempts = 3) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt === maxAttempts) {
                throw new Error(`Đã thử ${maxAttempts} lần nhưng vẫn lỗi: ${error.message}`);
            }
        }
    }
}

const unstableAPI = async () => {
    const success = Math.random() > 0.7;
    if (!success) throw new Error("Network Error");
    return "Lấy dữ liệu thành công!";
};

(async () => {
    try {
        const result = await retry(unstableAPI, 3);
        console.log("Kết quả:", result);
    } catch (err) {
        console.log(err.message);
    }
})();