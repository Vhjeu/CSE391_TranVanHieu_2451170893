# 👥 User Directory (CRUD)

Ứng dụng quản lý danh sách người dùng, tương tác trực tiếp với RESTful API mô phỏng để thực hiện đầy đủ các thao tác: Thêm, Đọc, Sửa, Xóa (CRUD).

## 🔌 API Sử Dụng

* **JSONPlaceholder API**: `https://jsonplaceholder.typicode.com/users`
* Đây là Fake REST API miễn phí dùng để test và làm prototype.

## 🚀 Cách Chạy Ứng Dụng

1. Mở thư mục `user_directory`.
2. Mở file `index.html` bằng trình duyệt web hoặc khởi chạy qua **Live Server**.
3. Các chức năng có thể trải nghiệm ngay trên giao diện:
   * Xem danh sách users (có hiệu ứng Skeleton Loading lúc chờ dữ liệu).
   * Điền form để tạo user mới.
   * Chỉnh sửa thông tin user hiện tại.
   * Xóa user (có xác nhận).
   * Tìm kiếm user theo tên hoặc email.
4. *Lưu ý:* Vì đây là API mô phỏng, các thao tác Thêm/Sửa/Xóa sẽ báo thành công (trả về mã 200/201) nhưng dữ liệu gốc trên server JSONPlaceholder không thực sự thay đổi.