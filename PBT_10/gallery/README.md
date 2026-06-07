# 🖼️ Infinite Scroll Gallery

Bộ sưu tập hình ảnh áp dụng kỹ thuật cuộn vô hạn (Infinite Scroll) kết hợp với tải trễ ảnh (Lazy Loading) để tối ưu hiệu năng trang web.

## 🔌 API Sử Dụng

* **Lorem Picsum**: `https://picsum.photos/v2/list?page={page}&limit=20`
* Cung cấp danh sách hình ảnh ngẫu nhiên kèm tác giả và kích thước gốc.

## 🚀 Cách Chạy Ứng Dụng

1. Mở thư mục `gallery`.
2. Mở file `index.html` trên trình duyệt web.
3. Trải nghiệm các tính năng:
   * Cuộn chuột xuống gần cuối trang để tự động tải thêm 20 ảnh tiếp theo (quan sát vòng xoay loading hiện lên).
   * Hình ảnh chỉ thực sự được tải về khi xuất hiện trên màn hình (quan sát qua tab Network trong DevTools).
   * Click vào một ảnh bất kỳ để xem kích thước lớn trong khung Lightbox (Modal).