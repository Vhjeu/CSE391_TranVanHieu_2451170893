Câu A1: Tham khảo chương 20.
### 1. Dự đoán Thứ tự Output

1. `1 - Start`
2. `4 - End`
3. `3 - Promise`
4. `6 - Promise 2`
5. `2 - Timeout 0ms`
6. `7 - Nested timeout`
7. `5 - Timeout 100ms`

---
### 2. Giải thích chi tiết

Trong JavaScript, cơ chế quản lý các tác vụ đồng bộ (Sync) và bất đồng bộ (Async) được thực hiện thông qua **Event Loop**, kết hợp với **Call Stack** (Ngăn xếp gọi hàm) và hai hàng đợi: **Microtask Queue** và **Macrotask Queue**.

Quy tắc ưu tiên thực thi như sau:
**Call Stack (Sync) ➔ Microtask Queue ➔ Macrotask Queue**

1. **Call Stack (Code đồng bộ - Sync):**
* Trình duyệt luôn đọc code từ trên xuống dưới và đưa các tác vụ đồng bộ vào Call Stack để chạy ngay lập tức.
* Do đó, `console.log("1 - Start")` và `console.log("4 - End")` được chạy đầu tiên.

2. **Microtask Queue (Hàng đợi vi tác vụ):**
* Đây là hàng đợi có **độ ưu tiên cao nhất** dành cho các tác vụ bất đồng bộ. Các callback của `Promise` (`.then()`, `.catch()`), `queueMicrotask` được đưa vào đây.
* Ngay sau khi Call Stack trống (chạy xong các lệnh đồng bộ), Event Loop sẽ kiểm tra Microtask Queue. Nó sẽ chạy **toàn bộ** các tác vụ trong hàng đợi này cho đến khi trống rỗng.
* Do đó, `3 - Promise` và `6 - Promise 2` được thực thi ngay sau code đồng bộ.

3. **Macrotask Queue (Hàng đợi vĩ tác vụ):**
* Đây là hàng đợi có độ ưu tiên thấp hơn, chứa các callback của `setTimeout`, `setInterval`, các sự kiện UI (click, scroll), hay thao tác I/O.
* Sau khi Microtask Queue đã trống hoàn toàn, Event Loop mới bốc **MỘT** tác vụ từ Macrotask Queue đưa vào Call Stack để chạy.
* Trình tự xử lý của nhóm này trong đoạn code trên:
* `setTimeout` 0ms đầu tiên được chạy: in ra `2 - Timeout 0ms`.
* `setTimeout` 0ms nằm lồng bên trong `Promise 2` (đã được đưa vào Macrotask Queue ở bước trước) được chạy: in ra `7 - Nested timeout`.
* Cuối cùng, sau khi chờ đủ thời gian, `setTimeout` 100ms hoàn thành và được đưa vào hàng đợi, sau đó chạy: in ra `5 - Timeout 100ms`.


Câu A2:
**1. `await fetch(...)**`
* **fetch trả về gì?** `fetch` trả về một **Promise**. Khi thành công, Promise này resolve ra một đối tượng `Response` chứa các thông tin của phản hồi HTTP (như headers, status) nhưng chưa bao gồm toàn bộ nội dung dữ liệu (body).
* **Tại sao cần await?** Việc gửi yêu cầu qua mạng tốn thời gian. `await` giúp tạm dừng quá trình thực thi của hàm `async` cho đến khi server phản hồi lại (Promise được giải quyết). Điều này giúp viết code bất đồng bộ một cách tuần tự, dễ đọc như code đồng bộ thông thường.

**2. `response.ok**`
* **Khi nào false?** Thuộc tính này trả về `false` khi mã trạng thái HTTP (status code) nằm ngoài khoảng từ **200 đến 299**. Điều này có nghĩa là request đã đến được server nhưng có lỗi xảy ra (lỗi do client gửi sai hoặc lỗi nội bộ của server).
* **3 status codes tương ứng:** * `404` (Not Found - Không tìm thấy tài nguyên)
* `500` (Internal Server Error - Lỗi máy chủ nội bộ)
* `403` (Forbidden - Bị cấm truy cập)

**3. `response.json()**`
* **Tại sao cần await lần nữa?** Hàm `response.json()` cũng trả về một **Promise**. Dữ liệu nội dung (body) tải về từ mạng dưới dạng một luồng stream. Cần có thời gian để trình duyệt tải xong toàn bộ luồng dữ liệu này và phân tích cú pháp (parse) từ chuỗi JSON thành một Object JavaScript. Do đó, phải tiếp tục dùng `await` để chờ quá trình này hoàn tất.

**4. `try...catch**`
Trong đoạn code trên, khối `catch` sẽ bắt được các loại lỗi sau:
* **Network error:** Lỗi rớt mạng internet, sai địa chỉ IP, hoặc máy chủ sập hoàn toàn từ chối kết nối (lúc này bản thân hàm `fetch` sẽ tự văng lỗi `TypeError`).
* **Lỗi HTTP (404, 500...):** Mặc định `fetch` không coi lỗi 404 hay 500 là lỗi mạng (nó vẫn resolve bình thường). Nhưng nhờ đoạn code `if (!response.ok) { throw new Error(...) }`, chúng ta đã chủ động ném ra lỗi nếu HTTP status không thành công, và `catch` sẽ tóm được lỗi này.
* **JSON parse error:** Nếu server phản hồi thành công (mã 200) nhưng dữ liệu trả về bị hỏng, hoặc là mã HTML/Plain text chứ không phải chuẩn JSON, lệnh `response.json()` sẽ thất bại và văng ra lỗi `SyntaxError`, khối `catch` cũng sẽ bắt được lỗi này.

Câu A3:
### 1. Sơ đồ 3 trạng thái của Promise

```text
                  ↗ Fulfilled (Thành công) ➔ Gọi hàm trong .then()
                 /
  Pending (Chờ) 
                 \
                  ↘ Rejected (Thất bại)    ➔ Gọi hàm trong .catch()

```

* **Pending:** Trạng thái khởi tạo ban đầu. Tác vụ bất đồng bộ đang được thực thi và chưa có kết quả.
* **Fulfilled (Resolved):** Tác vụ bất đồng bộ đã hoàn tất thành công. Promise trả về một giá trị kết quả.
* **Rejected:** Tác vụ bất đồng bộ đã thất bại. Promise trả về một lý do lỗi.
*(Khi Promise đã chuyển sang Fulfilled hoặc Rejected, trạng thái của nó bị khóa vĩnh viễn và không thể thay đổi được nữa).*
---

### 2. Callback Hell là gì?
- Callback Hell (còn được gọi là Pyramid of Doom - Kim tự tháp diệt vong) là tình trạng xảy ra trong lập trình JavaScript bất đồng bộ khi các hàm callback được lồng vào nhau quá nhiều lớp.
- Mỗi khi một tác vụ bất đồng bộ cần kết quả của tác vụ trước đó để chạy tiếp, lập trình viên phải nhét hàm xử lý vào bên trong hàm trước đó. Khi số lượng tác vụ tăng lên, code liên tục thụt lề sang phải tạo thành hình mũi tên. Điều này khiến cấu trúc code trở nên cực kỳ khó đọc, rất khó để bảo trì, luồng thực thi phức tạp và việc bắt lỗi (error handling) trở thành một cơn ác mộng vì phải xử lý lỗi ở từng cấp độ lồng nhau.
---

### 3. Ví dụ 4 cấp Callback Hell
```javascript
getUser(1, (err, user) => {
    if (err) return console.error(err);
    
    getPosts(user.id, (err, posts) => {
        if (err) return console.error(err);
        
        getComments(posts[0].id, (err, comments) => {
            if (err) return console.error(err);
            
            getAuthor(comments[0].authorId, (err, author) => {
                if (err) return console.error(err);
                
                console.log(author.name);
            });
        });
    });
});

### 4. Refactor thành async/await
```javascript
const displayAuthor = async (userId) => {
    try {
        const user = await getUser(userId);
        const posts = await getPosts(user.id);
        const comments = await getComments(posts[0].id);
        const author = await getAuthor(comments[0].authorId);
        
        console.log(author.name);
    } catch (error) {
        console.error(error);
    }
};

displayAuthor(1);

_____________________________________________________________________________
Câu C1:

### 1. Network Errors (Mất kết nối mạng)

**Chiến lược xử lý:**
Hàm `fetch()` trong JavaScript chỉ thực sự văng lỗi (reject) thành `TypeError` khi có sự cố về kết nối mạng (rớt mạng, không thể phân giải DNS). Khi bắt được lỗi này, chiến lược tốt nhất là:

* Hiển thị một thông báo toàn cục (Toast/Banner) cho người dùng: "Mất kết nối mạng. Vui lòng kiểm tra lại Internet."
* Lưu lại các hành động chưa hoàn thành (ví dụ: đang thêm vào giỏ hàng) vào bộ nhớ cục bộ.
* Cung cấp một nút "Thử lại" để người dùng chủ động tải lại dữ liệu, hoặc sử dụng sự kiện `window.addEventListener('online', ...)` để tự động gọi lại API ngay khi có mạng trở lại.

### 2. API Errors (Lỗi mã trạng thái HTTP)

**Chiến lược xử lý:**
Khi server phản hồi, `fetch()` vẫn coi là thành công (resolve) dù mã trạng thái là 4xx hay 5xx. Bạn phải kiểm tra `!response.ok` và xử lý theo từng nhóm mã lỗi:

* **Lỗi 404 (Not Found):** Tài nguyên không tồn tại (ví dụ: sản phẩm đã bị xóa hoặc URL sai).
* *Xử lý:* Điều hướng người dùng về trang lỗi 404 thân thiện hoặc trang chủ, hiển thị thông báo "Sản phẩm này không còn tồn tại hoặc đã bị gỡ xuống."

* **Lỗi 500 (Internal Server Error):** Lỗi từ phía máy chủ (database sập, code backend lỗi).
* *Xử lý:* Tuyệt đối không hiển thị lỗi kỹ thuật thô ra màn hình. Hiển thị thông báo chung chung: "Hệ thống đang gặp sự cố. Vui lòng thử lại sau ít phút." Ghi log lỗi này lên hệ thống theo dõi (như Sentry) để đội backend sửa.

* **Lỗi 429 (Too Many Requests):** Bị chặn do gọi API quá nhanh/nhiều.
* *Xử lý:* Áp dụng chiến lược "Exponential Backoff" (chờ một khoảng thời gian tăng dần trước khi gọi lại). Đọc header `Retry-After` từ server (nếu có) để biết chính xác số giây cần chờ, và báo cho người dùng: "Bạn thao tác quá nhanh, vui lòng chờ X giây."

### 3. Timeout (Xử lý API bị treo)

**Giải thích:**
Mặc định `fetch()` không có tham số timeout, nó có thể treo rất lâu nếu mạng chập chờn hoặc server phản hồi chậm. Ta sử dụng `AbortController` để tạo ra một "công tắc". Khi `setTimeout` đếm hết 10 giây, công tắc này sẽ kích hoạt lệnh `abort()`, ép `fetch()` dừng lại lập tức và văng lỗi `AbortError`.

**Code `fetchWithTimeout`:**

```javascript
async function fetchWithTimeout(url, options = {}, ms = 10000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), ms);
    
    try {
        const response = await fetch(url, { ...options, signal: controller.signal });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        throw error;
    }
}

```

### 4. Retry Logic (Thử lại khi gặp lỗi)

**Giải thích:**
Khi gặp lỗi rớt mạng (`TypeError`) hoặc lỗi hệ thống tạm thời (5xx, 429), ta cho phép gọi lại API tối đa `maxRetries` lần. Lưu ý: Nếu gặp lỗi 4xx (như 400 Bad Request, 401 Unauthorized, 404 Not Found), ta ném lỗi ra ngay lập tức và KHÔNG thử lại, vì dữ liệu client gửi lên đã sai thì có gọi lại 100 lần cũng vẫn sẽ thất bại. Trong code dưới đây, có thêm một khoảng thời gian trễ nhỏ giữa các lần gọi lại để giảm tải cho server.

**Code `fetchWithRetry`:**

```javascript
async function fetchWithRetry(url, options = {}, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url, options);
            
            if (response.ok) return response;
            
            if (response.status >= 400 && response.status < 500 && response.status !== 429) {
                throw new Error(`Lỗi Client: ${response.status}`);
            }
            
            if (i === maxRetries - 1) {
                throw new Error(`API thất bại sau ${maxRetries} lần thử (HTTP ${response.status})`);
            }
        } catch (error) {
            if (error.name === 'AbortError') throw error;
            if (i === maxRetries - 1) throw error;
        }
        
        await new Promise(res => setTimeout(res, 1000 * (i + 1)));
    }
}


