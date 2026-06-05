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
