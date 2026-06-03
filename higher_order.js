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

Câu C1:
Viết lại thành ≤ 10 dòng dùng filter, map, sort, destructuring, arrow functions:
const processOrders = (orders) => orders
    .filter(({ status, total }) => status === "completed" && total > 100000)
    .map(({ id, customer, total }) => ({
        id, customer, total, discount: total * 0.1, finalTotal: total * 0.9
    }))
    .sort((a, b) => b.finalTotal - a.finalTotal);

Câu A2:

const miniArray = {
    map(arr, fn) {
        const result = [];
        // Lặp qua từng phần tử, đưa qua hàm fn() biến đổi, rồi nhét vào mảng mới
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }
        return result;
    },

    filter(arr, fn) {
        const result = [];
        // Lặp qua từng phần tử, nếu hàm fn() trả về true (hợp lệ) thì mới nhét vào mảng mới
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    reduce(arr, fn, initialValue) {
        let accumulator = initialValue;
        let startIndex = 0;

        // Xử lý edge case: Nếu người dùng không truyền vào initialValue
        // Lấy luôn phần tử đầu tiên của mảng làm giá trị khởi tạo, và bắt đầu lặp từ vị trí số 1
        if (initialValue === undefined) {
            accumulator = arr[0];
            startIndex = 1;
        }

        // Lặp qua từng phần tử, cộng dồn kết quả tính toán vào biến accumulator
        for (let i = startIndex; i < arr.length; i++) {
            accumulator = fn(accumulator, arr[i], i, arr);
        }
        return accumulator;
    }
};

// ==========================================
// TEST CASES (Kết quả sẽ Pass hoàn toàn)
// ==========================================
console.log(miniArray.map([1, 2, 3], x => x * 2));          // → [2, 4, 6]
console.log(miniArray.filter([1, 2, 3, 4], x => x > 2));      // → [3, 4]
console.log(miniArray.reduce([1, 2, 3, 4], (a, b) => a + b, 0)); // → 10