# 📋 PHIẾU BÀI TẬP 04: CSS LAYOUT — Positioning, Flexbox & Grid

Repository này chứa các bài thực hành chuyên sâu về bố cục trang web (Layout) trong CSS. Dự án tập trung vào việc làm chủ 3 kỹ thuật dàn trang quan trọng nhất: Thuộc tính Positioning, Flexbox (1D Layout) và CSS Grid (2D Layout).

## 📂 Cấu Trúc File & Thư Mục

Dự án bao gồm các file ứng với từng bài tập thực hành cụ thể:

* **`answers.md`**: File chứa câu trả lời lý thuyết về đặc điểm của 5 loại Positioning (`static`, `relative`, `absolute`, `fixed`, `sticky`), phân tích khi nào nên dùng Flexbox/Grid, và phần giải thích cách fix bug layout thực tế.
* **`positioning.html` & `positioning.css`**: Trang thử nghiệm (Playground) các kỹ thuật định vị phần tử. Bao gồm Header cố định (`fixed`), Sidebar trượt theo màn hình (`sticky`), Nút cuộn trang và huy hiệu "HOT" gắn trên góc thẻ sản phẩm (`absolute` phụ thuộc `relative`).
* **`flexbox_layout.html` & `flexbox.css`**: Áp dụng Flexbox để xây dựng thanh điều hướng (Navbar) căn giữa hoàn hảo và lưới thẻ sản phẩm (Product Cards) có khả năng tự động xuống hàng (`flex-wrap`). Tích hợp kỹ thuật đẩy nút bấm luôn dính sát đáy thẻ (`margin-top: auto`).
* **`grid_layout.html` & `grid.css`**: Trang chủ E-Commerce hoàn chỉnh xây dựng bằng kiến trúc CSS Grid. Phân chia rõ ràng các vùng: Header, Hero Banner, Sidebar, Main Content (chứa lưới sản phẩm con) và Ads Box.
* **`screenshots/`**: Thư mục chứa các ảnh chụp màn hình chứng minh trạng thái scroll của Fixed Header, Sticky Sidebar và các ảnh minh họa quá trình Debug lỗi CSS.

## 🚀 Hướng Dẫn Chạy Dự Án

Vì các bài tập hoàn toàn sử dụng HTML và CSS thuần túy, bạn không cần cài đặt môi trường phức tạp:

1. Clone hoặc tải repository này về máy.
2. Truy cập vào thư mục của phiếu bài tập.
3. Nhấp đúp chuột vào các file `.html` (như `grid_layout.html`) để mở trực tiếp và xem kết quả trên trình duyệt (Chrome, Edge, Safari...).
4. Mở file `.html` bằng Visual Studio Code và sử dụng extension **Live Server** nếu muốn vừa sửa code vừa xem giao diện cập nhật theo thời gian thực.

## 🛠️ Kiến Thức Trọng Tâm Đạt Được

* **Positioning Context:** Hiểu rõ hệ tọa độ tham chiếu của `absolute` dựa trên phần tử cha gần nhất có khai báo position.
* **Flexbox Mastery:** Xử lý các bài toán dàn ngang, căn giữa dọc/ngang, và phân bổ không gian đồng đều cho các phần tử trên một trục (1-Dimensional).
* **CSS Grid Architecture:** Thiết lập bố cục toàn trang phức tạp, chia cắt không gian theo cả hàng và cột (2-Dimensional) một cách gọn gàng, giảm thiểu việc lồng ghép thẻ `<div>` không cần thiết.

---

**Tác giả:** Trần Văn Hiếu  
**Lớp:** 66KTPM1 - Đại học Thủy Lợi  
**Năm:** 2026  