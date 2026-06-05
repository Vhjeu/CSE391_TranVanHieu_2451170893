Câu A1:
### 1. Sơ đồ cây DOM (DOM Tree)
```text
div#app
 ├── header
 │    ├── h1
 │    │    └── "Todo App" (Text Node)
 │    └── nav
 │         ├── a (class="active")
 │         │    └── "All" (Text Node)
 │         ├── a
 │         │    └── "Active" (Text Node)
 │         └── a
 │              └── "Completed" (Text Node)
 └── main
      ├── form#todoForm
      │    ├── input#todoInput (type="text")
      │    └── button (type="submit")
      │         └── "Add" (Text Node)
      └── ul#todoList
           ├── li.todo-item
           │    └── "Learn HTML" (Text Node)
           └── li.todo-item.completed
                └── "Learn CSS" (Text Node)

```
### 2. Viết câu lệnh `querySelector`
```javascript
// 1. Chọn thẻ <h1>
document.querySelector('h1'); 
// Hoặc chọn chính xác hơn: document.querySelector('header h1');

// 2. Chọn input trong form
document.querySelector('#todoInput'); 
// Hoặc thông qua form: document.querySelector('#todoForm input');

// 3. Chọn TẤT CẢ .todo-item
document.querySelectorAll('.todo-item');

// 4. Chọn link đang active
document.querySelector('a.active'); 
// Hoặc cẩn thận hơn: document.querySelector('nav a.active');

// 5. Chọn <li> đầu tiên trong #todoList
document.querySelector('#todoList li'); 
// Giải thích: Hàm querySelector mặc định chỉ lấy phần tử đầu tiên nó tìm thấy.
// Hoặc có thể dùng pseudo-class: document.querySelector('#todoList li:first-child');

// 6. Chọn TẤT CẢ <a> bên trong <nav>
document.querySelectorAll('nav a');

Câu A2:
- Sự khác biệt giữa `innerHTML` và `textContent`, cũng như vấn đề bảo mật XSS liên quan.

### 1. Phân biệt `innerHTML` và `textContent`
* **`innerHTML`**: Lấy hoặc thiết lập nội dung của một phần tử **bao gồm cả các thẻ HTML**. Khi bạn gán một chuỗi chứa các thẻ HTML (như `<strong>`, `<span>`) vào `innerHTML`, trình duyệt sẽ phân tích (parse) chuỗi đó và render ra giao diện như các thẻ HTML thực sự.
* **`textContent`**: Chỉ lấy hoặc thiết lập **văn bản thuần túy (plain text)** của phần tử và tất cả các phần tử con của nó. Nếu bạn gán một chuỗi chứa thẻ HTML vào `textContent`, trình duyệt sẽ coi đó chỉ là các ký tự văn bản thông thường (nó tự động mã hóa các dấu `<` và `>`) và hiển thị nguyên xi chuỗi đó lên màn hình chứ không render thẻ.

**Ví dụ khi nào dùng mỗi cái:**

* **Dùng `innerHTML`:** Khi bạn cần tạo ra cấu trúc giao diện động từ dữ liệu nội bộ đáng tin cậy. Ví dụ: `document.querySelector('#box').innerHTML = '<span>Tên: <strong>Nguyễn Văn A</strong></span>';`
* **Dùng `textContent`:** Khi bạn muốn cập nhật thông tin chữ đơn thuần, đặc biệt là khi dữ liệu đó đến từ người dùng nhập vào. Ví dụ: `document.querySelector('#username').textContent = 'Nguyễn Văn A';`

---

### 2. Câu hỏi bảo mật: Lỗ hổng XSS (Cross-Site Scripting)

**Tại sao `innerHTML` có thể gây lỗ hổng XSS?**
Vì `innerHTML` ra lệnh cho trình duyệt "Hãy đọc chuỗi này và biến nó thành HTML/JavaScript thực sự đi". Nếu chuỗi đó là dữ liệu do người dùng nhập vào (untrusted data), hacker có thể cố tình chèn các đoạn mã độc (như thẻ `<script>` hoặc các sự kiện inline như `onload`, `onerror`). Trình duyệt không phân biệt được đâu là code của ứng dụng, đâu là code của hacker, nên nó sẽ chạy luôn đoạn mã độc đó.

**Phân tích đoạn code minh họa:**

```javascript
// Giả sử user nhập vào input: <img src=x onerror="alert('Hacked!')">
const userInput = document.querySelector("#search").value;
document.querySelector("#result").innerHTML = userInput;  // ← Nguy hiểm!


* Khi gán bằng `innerHTML`, trình duyệt thấy thẻ `<img>` và cố gắng tải hình ảnh từ đường dẫn `src="x"`.
* Đường dẫn `x` không tồn tại, nên việc tải ảnh bị lỗi.
* Lúc này, sự kiện `onerror` (khi có lỗi xảy ra) lập tức được kích hoạt, dẫn đến việc đoạn mã JavaScript `alert('Hacked!')` (hoặc các mã đánh cắp cookie, token nguy hiểm hơn) được thực thi ngay lập tức.

**Cách sửa lỗi:**
Rất đơn giản, hãy thay thế `innerHTML` bằng `textContent` khi làm việc với dữ liệu người dùng nhập:

```javascript
// Cách sửa an toàn:
const userInput = document.querySelector("#search").value;
document.querySelector("#result").textContent = userInput; 

Câu A3:
Dưới đây là dự đoán kết quả và phần giải thích chi tiết về cơ chế sủi bọt sự kiện (Event Bubbling) trong JavaScript:

### 1. Dự đoán Output
**Trường hợp 1: Khi chưa bỏ comment (Chạy bình thường)**
Khi click vào nút `<button id="btn">`, thứ tự in ra sẽ là từ trong ra ngoài:

1. `BUTTON`
2. `INNER`
3. `OUTER`

**Trường hợp 2: Nếu bỏ comment dòng `e.stopPropagation()**`
Output sẽ chỉ in ra một dòng duy nhất:

1. `BUTTON`

### 2. Giải thích chi tiết

* **Event Bubbling (Sủi bọt sự kiện) là gì?** Theo mặc định trong trình duyệt, khi một sự kiện (như `click`) xảy ra trên một phần tử, nó không chỉ chạy hàm xử lý của phần tử đó, mà còn tự động "sủi bọt" (lan truyền) ngược lên các phần tử cha chứa nó, chạy lần lượt đến tận `<html>` hoặc `document`.
Vì `btn` nằm trong `inner`, và `inner` lại nằm trong `outer`, nên sự kiện click truyền từ `btn` ➔ `inner` ➔ `outer`.
* **Tác dụng của `e.stopPropagation()`:**
Hàm này dịch sát nghĩa là "Ngăn chặn sự lan truyền". Khi được gọi ở bên trong listener của `#btn`, nó ra lệnh cho trình duyệt: *"Dừng ngay sự kiện này lại ở đây, không được sủi bọt lên các phần tử cha nữa"*. Do đó, các hàm `console.log` của `#inner` và `#outer` sẽ không bao giờ được kích hoạt.

______________________________________________________________________________
Phần C:
Câu C1:
**1. Sai tên sự kiện ở nút giảm (Decrement)**

* **Lỗi:** `addEventListener("onclick", ...)`
* **Giải thích:** Trong `addEventListener`, tên sự kiện không có chữ "on" ở đầu. Phải sửa thành `"click"`.

**2. Gán giá trị sai cho DOM Element (Reset)**

* **Lỗi:** `countDisplay = count;`
* **Giải thích:** `countDisplay` được khai báo bằng `const` (hằng số) ở đầu file và đang trỏ đến một DOM Element. Bạn không thể gán đè một con số trực tiếp vào nó. Phải gán vào thuộc tính nội dung: `countDisplay.textContent = count;`.

**3. Gọi hàm xóa sai cú pháp (Clear all)**

* **Lỗi:** `item.remove;`
* **Giải thích:** `remove` là một phương thức (hàm) chứ không phải thuộc tính. Bạn bị thiếu dấu ngoặc đơn để kích hoạt hàm. Phải sửa thành `item.remove();`.

**4. Thiếu ép kiểu dữ liệu từ localStorage (Load)**

* **Lỗi:** `count = localStorage.getItem("count");`
* **Giải thích:** Dữ liệu lấy từ localStorage luôn ở dạng chuỗi (String). Nếu lưu `"1"`, khi lấy ra sẽ là `"1"`. Cần ép kiểu về số bằng `Number(...)` để tránh sinh ra lỗi cộng nối chuỗi khi thực hiện các phép toán phía sau.

**5. Không có giá trị mặc định cho lần đầu tải trang (Load)**

* **Lỗi:** Code không xử lý trường hợp người dùng mới vào trang lần đầu (localStorage trống rỗng, trả về `null`).
* **Giải thích:** Khi lấy dữ liệu phải kèm giá trị dự phòng. Ví dụ: `Number(localStorage.getItem("count")) || 0`.

**6. Quên khôi phục lại dữ liệu lịch sử (Load)**

* **Lỗi:** Hàm `load` chỉ lấy giá trị `count` mà quên mất việc lấy chuỗi HTML đã lưu của danh sách lịch sử.
* **Giải thích:** Cần bổ sung lệnh gán lại dữ liệu lịch sử vào `historyList.innerHTML`.

**7. Lỗi mất Event Listener khi khôi phục từ localStorage (Bug logic ẩn)**

* **Lỗi:** Khi tải lại `historyList.innerHTML` từ localStorage, các thẻ `<li>` được vẽ lại bằng chuỗi HTML nên sẽ bị **mất toàn bộ sự kiện click** đã gắn vào chúng bằng `li.addEventListener` lúc đầu. User sẽ không thể click để xóa từng `<li>` được nữa.
* **Giải thích:** Để giải quyết lỗi này, không gắn sự kiện `click` vào từng thẻ `<li>` lúc tạo ra nữa. Thay vào đó, áp dụng kỹ thuật **Event Delegation**: Gắn một sự kiện `click` duy nhất lên thẻ cha `historyList` và kiểm tra `e.target` để biết thẻ `<li>` nào bị click rồi xóa nó.

---

### Code đã được sửa lại hoàn chỉnh và tối ưu:

```javascript
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");
let count = 0;

document.querySelector("#incrementBtn").addEventListener("click", function() {
    count++;
    countDisplay.textContent = count;
    
    const li = document.createElement("li");
    li.textContent = "Count changed to " + count;
    historyList.append(li);
});

document.querySelector("#decrementBtn").addEventListener("click", function() {
    count--;
    countDisplay.textContent = count;
});

document.querySelector("#resetBtn").addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
    historyList.innerHTML = "";
});

historyList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});

document.querySelector("#clearHistory").addEventListener("click", () => {
    const items = historyList.querySelectorAll("li");
    items.forEach(item => {
        item.remove();
    });
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("count", count);
    localStorage.setItem("history", historyList.innerHTML);
});

window.addEventListener("load", () => {
    count = Number(localStorage.getItem("count")) || 0;
    countDisplay.textContent = count;
    historyList.innerHTML = localStorage.getItem("history") || "";
});

Câu C2:

### 1. Vấn đề 1: Event Binding vs Event Delegation

**Tại sao gắn (bind) sự kiện lên 1000 elements riêng lẻ là BAD PRACTICE?**

* **Ngốn bộ nhớ (Memory Leak rủi ro):** Trình duyệt phải tạo và lưu trữ 1000 hàm (function objects) trong bộ nhớ RAM cho 1000 sự kiện (event listeners) đó. Số lượng element càng lớn, web càng giật lag và hao tài nguyên.
* **Chậm trễ khởi tạo:** Việc chạy vòng lặp 1000 lần để tìm DOM và gắn sự kiện sẽ làm nghẽn luồng chính (Main Thread) của JavaScript, khiến trang web bị "đơ" tạm thời lúc mới load.
* **Không hỗ trợ phần tử động:** Nếu sau đó bạn dùng JS tạo thêm phần tử thứ 1001, phần tử mới này sẽ **không có** sự kiện đó. Bạn lại phải viết code để bind sự kiện cho riêng nó, rất dễ sinh bug.

**Event Delegation giải quyết thế nào?**
Event Delegation (Ủy quyền sự kiện) tận dụng cơ chế **Event Bubbling (Sủi bọt sự kiện)**.
Thay vì gắn 1000 sự kiện cho 1000 phần tử con, ta chỉ gắn **1 sự kiện duy nhất** cho phần tử cha chứa chúng. Khi người dùng click vào phần tử con, sự kiện sẽ "sủi bọt" lên phần tử cha. Tại đây, ta dùng `event.target` để xác định chính xác phần tử con nào vừa bị click và xử lý.

* *Lợi ích:* Chỉ tốn 1 ô nhớ cho 1 function duy nhất, code chạy cực nhanh và tự động nhận diện được các phần tử con mới được thêm vào sau này.

---

### 2. Vấn đề 2: Reflow và DocumentFragment

**Code Refactor dùng DocumentFragment:**

```javascript
// Tạo một DocumentFragment rỗng trong bộ nhớ
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    
    // Thêm div vào fragment (KHÔNG gây reflow)
    fragment.appendChild(div); 
}

// Thêm toàn bộ fragment vào DOM trong 1 lần duy nhất
document.body.appendChild(fragment); // ← Chỉ gây ra đúng 1 lần reflow!

**Giải thích: Tại sao dùng `DocumentFragment` lại nhanh hơn?**

* **Reflow là gì?** Khi bạn thay đổi cấu trúc DOM (thêm/sửa/xóa phần tử), trình duyệt phải tính toán lại kích thước, vị trí của phần tử đó và tất cả các phần tử liên quan trên màn hình. Quá trình này gọi là **Reflow (hoặc Layout)** và nó **rất tốn tài nguyên**.
* **Code cũ:** Bạn dùng `document.body.appendChild(div)` ngay bên trong vòng lặp. Trình duyệt bị ép phải thực hiện quá trình tính toán Reflow lại cấu trúc trang web **1000 lần liên tục**. Điều này gây ra hiện tượng "thắt cổ chai" hiệu năng.
* **Cách DocumentFragment hoạt động:** `DocumentFragment` giống như một cái "thùng chứa vô hình" nằm trong bộ nhớ RAM (Memory), nó **không nằm trên cây DOM thực tế**. Do đó, việc bạn ném 1000 cái div vào thùng chứa này sẽ không kích hoạt bất kỳ lần Reflow nào. Cuối cùng, khi bạn đổ cả cái thùng đó vào `document.body`, trình duyệt chỉ cần vẽ màn hình lại đúng **1 lần duy nhất** cho toàn bộ 1000 phần tử.