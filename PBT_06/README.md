# 📋 PHIẾU BÀI TẬP 06: CSS FRAMEWORKS — BOOTSTRAP 5

Repository này chứa mã nguồn thực hành và tài liệu phân tích về CSS Framework, cụ thể là **Bootstrap 5 (Track A)**. Mục tiêu của dự án là áp dụng hệ thống Grid System, các Utility classes và Components tích hợp sẵn để xây dựng giao diện Responsive nhanh chóng, chuẩn xác mà hạn chế tối đa việc viết CSS thuần.

## 📂 Cấu Trúc Bài Tập

Dự án bao gồm các file ứng với từng phần yêu cầu của phiếu bài tập:

* **`answers.md`**: File Markdown chứa câu trả lời cho Phần A và Phần C. Bao gồm phân tích cách hoạt động của Grid System (`col-md-6`, breakpoints), giải thích các Utility classes, so sánh phương pháp override SASS variables với CSS thuần, và đánh giá ưu/nhược điểm khi sử dụng Bootstrap.
* **`bootstrap_landing.html`**: Trang Landing Page E-Commerce hoàn chỉnh. Sử dụng 100% các class của Bootstrap để xây dựng Navbar, Carousel (Hero section), Product Grid, Card, Badge, Modal và Footer đa cột.
* **`bootstrap_dashboard.html`**: Giao diện trang quản trị (Admin Dashboard). Ứng dụng layout nâng cao với Sidebar cố định (`position-fixed`), Topbar, thẻ thống kê (Stat cards), Bảng dữ liệu (`table-striped`), Form tìm kiếm và Accordion cho mục FAQ.

## 🚀 Hướng Dẫn Chạy Dự Án

Dự án này sử dụng Bootstrap 5 thông qua CDN, do đó không cần cài đặt Node.js hay bất kỳ công cụ build nào.

1. Clone hoặc tải repository này về máy.
2. Đảm bảo máy tính đang có **kết nối Internet** (để trình duyệt có thể tải file CSS/JS của Bootstrap từ CDN).
3. Mở thư mục chứa file.
4. Nhấp đúp chuột vào file `bootstrap_landing.html` hoặc `bootstrap_dashboard.html` để xem trực tiếp trên trình duyệt web.
5. *Mẹo:* Sử dụng công cụ Developer Tools (F12) > Toggle Device Toolbar để kiểm tra khả năng Responsive của trang web trên các kích thước màn hình khác nhau (Mobile, Tablet, Desktop).

## 🛠️ Kiến Thức Trọng Tâm Đạt Được

* **Hệ thống Lưới (Grid System):** Làm chủ tư duy chia bố cục 12 cột và ứng dụng linh hoạt các breakpoints (`sm`, `md`, `lg`, `xl`) để làm giao diện Responsive.
* **Bootstrap Components:** Biết cách nhúng và tùy biến các khối UI phức tạp như Modal, Carousel, Accordion, Dropdown mà không cần tự viết JavaScript.
* **Utility Classes:** Sử dụng thành thạo các class tiện ích về spacing (`m`, `p`), hiển thị (`d-none`, `d-md-block`), màu sắc (`bg-primary`, `text-danger`) để thao tác nhanh định dạng.
* **Tư duy Kiến trúc CSS:** Hiểu được quy trình tùy biến Framework thông qua SASS variables thay vì override CSS thô.

---

**Tác giả:** Trần Văn Hiếu  
**Lớp:** 66KTPM1 - Đại học Thủy Lợi  
**Năm:** 2026 