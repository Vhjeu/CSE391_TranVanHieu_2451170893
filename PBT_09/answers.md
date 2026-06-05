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

```

* Khi gán bằng `innerHTML`, trình duyệt thấy thẻ `<img>` và cố gắng tải hình ảnh từ đường dẫn `src="x"`.
* Đường dẫn `x` không tồn tại, nên việc tải ảnh bị lỗi.
* Lúc này, sự kiện `onerror` (khi có lỗi xảy ra) lập tức được kích hoạt, dẫn đến việc đoạn mã JavaScript `alert('Hacked!')` (hoặc các mã đánh cắp cookie, token nguy hiểm hơn) được thực thi ngay lập tức.

**Cách sửa lỗi:**
Rất đơn giản, hãy thay thế `innerHTML` bằng `textContent` khi làm việc với dữ liệu người dùng nhập:

```javascript
// Cách sửa an toàn:
const userInput = document.querySelector("#search").value;
document.querySelector("#result").textContent = userInput; // ← An toàn tuyệt đối!

```

*Trực quan:* Khi dùng `textContent`, chuỗi `<img src=x onerror="alert('Hacked!')">` sẽ hiển thị nguyên xi trên màn hình giống như bạn đang đọc một đoạn văn bản bình thường, trình duyệt sẽ không coi nó là một thẻ HTML để thực thi.