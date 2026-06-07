# 📋 PHIẾU BÀI TẬP 03: CSS CORE — Selectors, Box Model, Inheritance & Cascade

Repository này chứa các bài thực hành và phân tích về nền tảng cốt lõi của CSS (CSS Core). Dự án đi sâu vào việc kiểm soát các bộ chọn (Selectors), làm chủ mô hình hộp (Box Model), và hiểu rõ cơ chế tính toán độ ưu tiên (Specificity) cũng như luồng kế thừa (Cascade) trong CSS.

## 📂 Cấu Trúc File & Thư Mục

Dự án bao gồm các file ứng với từng bài tập thực hành và câu hỏi lý thuyết:

* **`answers.md`**: File Markdown chứa toàn bộ lời giải lý thuyết, bao gồm giải thích về 3 cách nhúng CSS, tính toán kích thước Box Model, điểm Specificity, và phần giải thích chi tiết cho bài toán Cascade & Debug Layout.
* **`selectors_test.html`**: File kiểm chứng hoạt động của các CSS Selectors đa dạng (Element, Class, ID, Descendant, Pseudo-class, Attribute).
* **`style.css`**: File CSS external chứa các định dạng (styling) cơ bản cho trang Profile cá nhân, áp dụng linh hoạt nhiều loại Selector và thiết lập Typography/Màu sắc.
* **`boxmodel_lab.html` & `boxmodel.css`**: Bài lab thực hành trực quan chứng minh sự khác biệt cực kỳ quan trọng giữa `content-box` (mặc định) và `border-box`. Chứa demo xây dựng layout 3 cột bằng toán học cơ bản.
* **`specificity.html` & `specificity.css`**: "Trường đấu" Specificity — Bài tập viết 10 CSS rules khác nhau nhắm vào cùng một phần tử để hiểu rõ quy tắc tính điểm (0,0,0) và cách CSS quyết định rule nào "thắng".
* **`debug_layout.html` & `debug_layout.css`**: Demo mô phỏng và cách sửa lỗi giao diện layout bị vỡ do tính toán sai kích thước phần tử khi dùng float.

## 🚀 Hướng Dẫn Chạy & Kiểm Tra Dự Án

Vì đây là các bài tập xoay quanh CSS thuần và HTML, không yêu cầu cài đặt môi trường lập trình phức tạp:

1. Clone hoặc tải repository này về máy cá nhân.
2. Điều hướng vào thư mục chứa bài tập.
3. Click đúp chuột vào bất kỳ file `.html` nào (như `boxmodel_lab.html`, `specificity.html`) để mở trực tiếp trên trình duyệt web.
4. **Đặc biệt quan trọng:** Xuyên suốt các bài tập trong phiếu này, hãy luôn mở công cụ **Developer Tools (F12)**, chuyển sang tab **Elements** và xem khung **Computed** để đo đạc Box Model diagram thực tế của trình duyệt.

## 🛠️ Kiến Thức Trọng Tâm Đạt Được

* **CSS Selectors:** Biết cách "nhắm mục tiêu" chính xác vào bất kỳ phần tử DOM nào để tạo kiểu mà không cần thêm class vô tội vạ.
* **Box Model Mastery:** Hiểu sâu sắc lý do tại sao `* { box-sizing: border-box; }` là dòng code phải có mặt đầu tiên trong mọi dự án Web.
* **Specificity & Cascade:** Giải thích được vì sao mã CSS đôi khi "không ăn" và biết cách giải quyết xung đột mã màu/kích thước mà không cần lạm dụng `!important`.
* **Margin Collapse:** Nhận diện và xử lý hiện tượng sụp đổ khoảng cách (margin) giữa các khối.

---

**Tác giả:** Trần Văn Hiếu  
**Lớp:** 66KTPM1 - Đại học Thủy Lợi  
**Năm:** 2026  