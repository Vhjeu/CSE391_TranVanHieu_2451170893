# 📋 PHIẾU BÀI TẬP 08: JAVASCRIPT FUNCTIONS, ARRAYS & OBJECTS

Repository này chứa mã nguồn thực hành các khái niệm cốt lõi và nền tảng nhất trong JavaScript bao gồm: Functions (Arrow, Closure, Higher-Order), Arrays (các method thao tác mảng bậc cao) và Objects (Destructuring, Spread/Rest).

## 📂 Cấu Trúc Bài Tập

Dự án bao gồm các file JavaScript riêng biệt ứng với từng bài toán thực tế:

* **`product_manager.js`**: Ứng dụng quản lý sản phẩm E-Commerce. Áp dụng triệt để các Array Methods (`map`, `filter`, `reduce`, `sort`, `find`) để giải quyết các bài toán như: lọc sản phẩm còn hàng, tính tổng giá trị tồn kho, tìm sản phẩm rẻ nhất theo danh mục.
* **`shopping_cart.js`**: Module Giỏ hàng (Shopping Cart) được thiết kế dựa trên Design Pattern **Closure** để tạo trạng thái đóng gói (private state), bảo vệ dữ liệu nội bộ của giỏ hàng khỏi sự can thiệp trực tiếp từ bên ngoài global scope.
* **`higher_order.js`**: Thử thách xây dựng các Higher-Order Functions (hàm bậc cao) nâng cao. Tự triển khai các utility functions cực kỳ phổ biến trong thực tế như `pipe()` (nối chuỗi hàm), `memoize()` (cache kết quả tính toán để tối ưu hiệu năng), `debounce()` (giới hạn tần suất gọi hàm) và `retry()` (thử lại tác vụ bất đồng bộ).

## 🚀 Hướng Dẫn Chạy Code

Vì đây là các bài tập JavaScript thuần túy xử lý logic, bạn có 2 cách để chạy và kiểm tra kết quả:

### Cách 1: Chạy bằng Node.js (Khuyến nghị)
1. Đảm bảo máy tính của bạn đã cài đặt [Node.js](https://nodejs.org/).
2. Mở Terminal (CMD, PowerShell, hoặc Terminal tích hợp trong VS Code) tại thư mục chứa file.
3. Chạy lệnh thực thi từng file bằng Node. Ví dụ:
   ```bash
   node product_manager.js
   node shopping_cart.js
   node higher_order.js