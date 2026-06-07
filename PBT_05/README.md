# 📋 PHIẾU BÀI TẬP 05: CSS RESPONSIVE & SCSS

Repository này chứa mã nguồn thực hành về Thiết kế Web Tương thích (Responsive Web Design), ứng dụng phương pháp Mobile-First, tạo hiệu ứng với CSS Animations và tổ chức cấu trúc CSS chuyên nghiệp thông qua SCSS (Sass).

## 📂 Cấu Trúc File & Thư Mục

Dự án được chia thành các phần thực hành chính:

* **`answers.md`**: File chứa câu trả lời lý thuyết về Viewport, Breakpoints, Media Queries, cơ bản về SCSS, cũng như phần phân tích trải nghiệm Responsive trên các trang web thực tế (Shopee, Tiki...).
* **`responsive.html` & `responsive.css`**: Trang danh sách sản phẩm E-Commerce được xây dựng theo chuẩn Mobile-First. Giao diện có khả năng tự động thay đổi từ 1 cột (Mobile) -> 2 cột (Tablet) -> 4 cột (Desktop) kèm Navigation Bar co giãn (Hamburger menu).
* **`animations.html` & `animations.css`**: Nơi tập hợp các hiệu ứng (Transitions & Animations) thuần CSS nhằm tăng trải nghiệm người dùng (UX) như: Card hover, Image zoom, Nút bấm tương tác, Loading Spinner và hiệu ứng Fade-in khi cuộn trang.
* **`scss/`**: Thư mục chứa cấu trúc CSS được refactor (viết lại) bằng SCSS. 
  * `_variables.scss`: Lưu trữ các biến màu sắc, font chữ, kích thước.
  * `_mixins.scss`: Khai báo các khối code dùng chung (Responsive breakpoints, Flexbox center...).
  * `_components.scss`: Chứa style cho các thành phần UI độc lập.
  * `style.scss`: File chính dùng để `@import` các partials lại với nhau.

## 🚀 Hướng Dẫn Chạy & Biên Dịch Dự Án

1. **Xem trực tiếp giao diện (HTML/CSS):**
   * Mở file `responsive.html` hoặc `animations.html` trực tiếp trên trình duyệt (Chrome, Edge, Safari) hoặc qua extension **Live Server** trong VS Code.
   * *Mẹo:* Nhấn F12, chọn tính năng "Toggle Device Toolbar" để kiểm tra giao diện ở các kích thước màn hình điện thoại, máy tính bảng khác nhau.

2. **Biên dịch SCSS sang CSS:**
   * Trình duyệt không thể tự đọc được file `.scss`, do đó bạn cần phải biên dịch nó.
   * Nếu dùng VS Code: Cài đặt extension **Live Sass Compiler**. Nhấn nút "Watch Sass" ở thanh trạng thái dưới cùng để nó tự động biên dịch `style.scss` thành `style.css` mỗi khi lưu file.

## 🛠️ Kiến Thức Trọng Tâm Đạt Được

* **Mobile-First Approach:** Tư duy bắt đầu thiết kế từ màn hình di động trước, sau đó dùng `@media (min-width: ...)` để mở rộng layout cho các màn hình lớn hơn.
* **CSS Animations & Transitions:** Làm chủ `@keyframes` và các thuộc tính chuyển động mượt mà để tăng tính tương tác.
* **SCSS Architecture:** Áp dụng Variables, Nesting, Mixins và cơ chế chia nhỏ file (Partials) để quản lý code CSS mạch lạc, dễ bảo trì, chuẩn bị cho các dự án quy mô lớn.

---

**Tác giả:** Trần Văn Hiếu  
**Lớp:** 66KTPM1 - Đại học Thủy Lợi  
**Năm:** 2026  