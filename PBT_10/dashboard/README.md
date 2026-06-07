# 📊 Multi-API Dashboard

Bảng điều khiển tổng hợp dữ liệu, thực hiện gọi đồng thời nhiều API độc lập bằng kỹ thuật `Promise.allSettled()`. Đảm bảo lỗi của một API không làm gián đoạn toàn bộ hệ thống.

## 🔌 API Sử Dụng

Giao diện gọi song song 3 APIs sau:
1. **Random User API**: `https://randomuser.me/api/` (Lấy thông tin người dùng ngẫu nhiên)
2. **Dog API**: `https://dog.ceo/api/breeds/image/random` (Lấy ảnh chó ngẫu nhiên)
3. **Open-Meteo API**: `https://api.open-meteo.com/v1/forecast` (Lấy dữ liệu thời tiết hiện tại)

## 🚀 Cách Chạy Ứng Dụng

1. Mở thư mục `dashboard`.
2. Mở file `index.html` trên trình duyệt web.
3. Ngay khi mở trang, hệ thống sẽ tự động fetch cả 3 APIs cùng lúc.
4. Trải nghiệm tính năng:
   * Quan sát thời gian tải (Load time) hiển thị ở góc phải trên cùng.
   * Nhấn nút "Refresh All" để gọi lại toàn bộ API.
   * *Mẹo test lỗi:* Bạn có thể vào file `app.js`, cố tình sửa sai 1 đường dẫn API (ví dụ đổi `.me` thành `.mee`) để thấy một Widget hiện báo lỗi màu đỏ, trong khi 2 Widget còn lại vẫn tải dữ liệu thành công.