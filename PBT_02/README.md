# 📋 PHIẾU BÀI TẬP 02: HTML5 FORMS & MEDIA

Repository này chứa các bài thực hành chuyên sâu về biểu mẫu (Forms), kỹ thuật kiểm tra dữ liệu đầu vào phía client (HTML5 Validation), thiết kế trang web hỗ trợ khả năng truy cập (Accessibility) và cách nhúng các nội dung đa phương tiện (Multimedia).

## 📂 Cấu Trúc File & Thư Mục

Dự án bao gồm các file sau để giải quyết từng phần của phiếu bài tập:

* **`answers.md`**: File Markdown chứa lời giải lý thuyết về 10 loại Input, giải thích cơ chế Validation, nguyên tắc Accessibility, cách phân biệt `<figure>` vs `<img>`, chiến lược Validation bảo mật và giải thích code fix bug form.
* **`validation_test.html`**: Trang thử nghiệm nhỏ dùng để kiểm chứng các dự đoán về hành vi báo lỗi của trình duyệt đối với các thuộc tính `required`, `pattern`, `min/max`, `minlength`.
* **`register.html`**: Form đăng ký tài khoản hoàn chỉnh. Ứng dụng `<fieldset>` và `<legend>` để gom nhóm thông tin, kết hợp chặt chẽ với `<label for="...">` và Regex pattern phức tạp để kiểm tra định dạng mật khẩu, SĐT, Email.
* **`media.html`**: Trang hiển thị sản phẩm trực quan bằng đa phương tiện. Tích hợp video YouTube (`<iframe>`), Video/Audio thuần HTML5 (`<video>`, `<audio>` với nhiều `<source>`), hỗ trợ tải trễ ảnh (`loading="lazy"`) và đồ họa vector (SVG).
* **`checkout.html`**: Giao diện Giỏ hàng và Thanh toán nâng cao. Kết hợp `<table>` hiển thị danh sách sản phẩm và Form nhập mã giảm giá, phương thức giao hàng sử dụng các thẻ input đặc biệt như `range`, `date`.
* **`screenshots/`**: Thư mục chứa các ảnh chụp màn hình thông báo lỗi (validation tooltips) từ trình duyệt để đối chiếu với dự đoán lý thuyết.

## 🚀 Hướng Dẫn Chạy & Kiểm Tra Dự Án

Các bài tập được viết hoàn toàn bằng HTML thuần, rất dễ dàng để chạy thử:

1. Clone hoặc tải repository này về máy.
2. Mở thư mục chứa dự án.
3. Nhấp đúp chuột vào các file `.html` (như `register.html`, `checkout.html`) để mở trực tiếp trên trình duyệt web (Chrome, Edge, Firefox...).
4. Để test form validation, hãy thử nhập sai định dạng hoặc để trống các trường và bấm nút Submit, sau đó quan sát thông báo lỗi trình duyệt hiển thị.

## 🛠️ Kiến Thức Trọng Tâm Đạt Được

* **Client-side Validation:** Làm chủ các thuộc tính xác thực dữ liệu của HTML5 (`pattern`, `required`, `min/max`), giảm thiểu rác dữ liệu gửi lên server.
* **Web Accessibility (a11y):** Tư duy thiết kế web "tất cả mọi người đều có thể dùng", thông qua việc liên kết nhãn `<label>` chuẩn xác, giúp người dùng trình đọc màn hình (Screen Reader) thao tác dễ dàng.
* **Multimedia Embedding:** Nắm rõ cách nhúng Video/Audio tối ưu băng thông (cung cấp nhiều format dự phòng) và sử dụng thẻ hình ảnh có ngữ nghĩa (`<figure>`).

---

**Tác giả:** Trần Văn Hiếu  
**Lớp:** 66KTPM1 - Đại học Thủy Lợi  
**Năm:** 2026  