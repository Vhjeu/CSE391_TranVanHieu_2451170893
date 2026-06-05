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
