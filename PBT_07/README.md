# 📋 PHIẾU BÀI TẬP 07: JAVASCRIPT BASICS

Repository này chứa mã nguồn thực hành các khái niệm nền tảng của JavaScript, tập trung vào việc quản lý biến (Scope & Hoisting), ép kiểu dữ liệu (Type Coercion) và xây dựng logic bằng cấu trúc điều khiển (Control Structures).

## 📂 Cấu Trúc Bài Tập

* **`var_let_const.js`**: Code thực hành và kiểm chứng sự khác biệt về Hoisting, Block Scope và Temporal Dead Zone (TDZ) giữa `var`, `let`, `const`.
* **`calculator.js`**: Hàm máy tính cơ bản xử lý các phép toán số học và kiểm soát các luồng ngoại lệ (chia cho 0, sai toán tử, sai kiểu dữ liệu).
* **`student_data.js`**: Chương trình tổng hợp và phân tích dữ liệu sinh viên dựa trên vòng lặp `for` và câu lệnh `if/else`, không phụ thuộc vào Array Methods có sẵn.
* **`guess_number.html` & `guess.js`**: Mini game "Đoán Số" tương tác trực tiếp với người dùng qua trình duyệt sử dụng `prompt` và `alert`. Tích hợp logic giới hạn số lần đoán và bẫy lỗi nhập liệu.
* **`fizzbuzz.js`**: Trò chơi FizzBuzz kinh điển và phiên bản nâng cao cho phép tùy biến Rule (Custom Divisors).
* **`restaurant_bill.js`**: Ứng dụng mô phỏng tính toán hóa đơn nhà hàng dựa trên các quy tắc giảm giá theo điều kiện (tổng tiền, ngày trong tuần), tính VAT và định dạng đầu ra thành hóa đơn (receipt) đẹp mắt trên console.

## 🚀 Hướng Dẫn Chạy Code

### Với các file JavaScript thuần (`.js`):
Yêu cầu phải cài đặt **Node.js** trên máy tính của bạn.
1. Mở Terminal / Command Prompt tại thư mục Phiếu 07.
2. Chạy lệnh:
   ```bash
   node var_let_const.js
   node calculator.js
   node student_data.js
   node fizzbuzz.js