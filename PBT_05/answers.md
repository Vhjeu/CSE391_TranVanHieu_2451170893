Câu A1: tham khảo nội dung chương 13
1. Thẻ <meta viewport> chuẩn và giải thích các thuộc tính
Thẻ chuẩn:
HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0">
Giải thích từng thuộc tính:

name="viewport": Khai báo cho trình duyệt biết thẻ meta này dùng để điều khiển và cấu hình vùng nhìn (viewport) trên thiết bị.

width=device-width: Hướng dẫn trình duyệt thiết lập chiều rộng của trang web đúng bằng với chiều rộng vật lý của màn hình thiết bị đang hiển thị, giúp layout tự động khớp với mọi kích thước màn hình.

initial-scale=1.0: Đặt mức độ thu phóng ban đầu của trang web là 100% (không bị phóng to hay thu nhỏ) khi trang vừa được tải xong.

2. Nếu THIẾU thẻ <meta viewport>, iPhone sẽ hiển thị trang web như thế nào?
Nếu thiếu thẻ này, Safari trên iPhone (và các trình duyệt di động khác) sẽ mặc định coi đó là một trang web dành cho Desktop. Trình duyệt sẽ render trang ở một chiều rộng cố định (thông thường là 980px), sau đó tự động thu nhỏ (scale down) toàn bộ trang lại để nhét vừa vào chiều rộng hẹp của màn hình điện thoại.
Hậu quả là toàn bộ nội dung (chữ, hình ảnh, nút bấm) sẽ hiển thị cực kỳ nhỏ. Người dùng bắt buộc phải dùng thao tác vuốt phóng to (pinch-to-zoom) và cuộn ngang/dọc liên tục mới có thể đọc nội dung và tương tác.

3. Sự khác nhau giữa Mobile-First và Desktop-First, Ví dụ CSS, và Lý do khuyên dùng Mobile-First
Sự khác biệt cốt lõi:
Mobile-First (Ưu tiên thiết bị di động): Phương pháp tiếp cận "Tăng cường dần" (Progressive Enhancement). Viết CSS mặc định cho màn hình nhỏ nhất (điện thoại) trước. Sau đó dùng Media Queries với min-width để bổ sung, nâng cấp và mở rộng layout khi kích thước màn hình lớn lên (Tablet, Desktop).

Desktop-First (Ưu tiên máy tính): Phương pháp tiếp cận "Thoái hóa duyên dáng" (Graceful Degradation). Viết CSS mặc định cho màn hình lớn nhất (PC) trước. Sau đó dùng Media Queries với max-width để thu hẹp, ẩn bớt phần tử hoặc đơn giản hóa layout khi kích thước màn hình nhỏ đi.

Ví dụ CSS với breakpoint 768px:
Ví dụ Mobile-First:
CSS
/* CSS mặc định được viết cho Mobile (dưới 768px) */
.layout {
    display: block;
    width: 100%;
}
.sidebar {
    display: none; /* Ẩn sidebar trên điện thoại */
}

/* Áp dụng thêm từ màn hình Tablet trở lên (>= 768px) */
@media (min-width: 768px) {
    .layout {
        display: flex;
    }
    .sidebar {
        display: block; /* Hiện sidebar trên màn hình lớn */
        width: 250px;
    }
}

Ví dụ Desktop-First:
CSS
/* CSS mặc định được viết cho Desktop (từ 768px trở lên) */
.layout {
    display: flex;
}
.sidebar {
    display: block;
    width: 250px;
}

/* Ghi đè CSS để thu gọn cho màn hình Mobile (dưới 768px) */
@media (max-width: 767.98px) {
    .layout {
        display: block;
        width: 100%;
    }
    .sidebar {
        display: none; /* Ẩn sidebar trên điện thoại */
    }
}
- Mobile-First được khuyên dùng vì
+ Tối ưu hiệu suất (Performance) cho thiết bị di động: Thiết bị di động thường có cấu hình phần cứng yếu hơn và tốc độ mạng chậm hơn PC. Với Mobile-First, trình duyệt trên điện thoại chỉ cần tải và biên dịch đoạn CSS mặc định rất nhẹ, bỏ qua các đoạn code phức tạp nằm trong Media Queries của màn hình lớn. Ngược lại, nếu dùng Desktop-First, điện thoại sẽ phải tải toàn bộ CSS nặng nề của Desktop rồi mới chạy thêm lệnh để giấu đi, gây lãng phí tài nguyên.

+ Tập trung vào Trải nghiệm người dùng (UX) cốt lõi: Thiết kế trên một không gian nhỏ hẹp bắt buộc lập trình viên phải chắt lọc, ưu tiên giữ lại các tính năng và nội dung quan trọng nhất. Từ cái lõi tinh gọn này mở rộng lên màn hình lớn sẽ dễ dàng và hợp lý hơn so với việc lấy một layout khổng lồ của Desktop rồi tìm cách nhồi nhét, cắt xén để ép vào màn hình điện thoại.
__________________________________________________________________________________________
Câu A2:
1. Extra small (xs)
Kích thước pixel: < 576px
Thiết bị đại diện: Điện thoại di động cầm dọc (Smartphones).
Ví dụ lưới sản phẩm: Hiển thị 1 cột.

2. Small (sm)
Kích thước pixel: ≥ 576px
Thiết bị đại diện: Điện thoại di động cầm ngang (Landscape phones).
Ví dụ lưới sản phẩm: Hiển thị 2 cột.

3. Medium (md)
Kích thước pixel: ≥ 768px
Thiết bị đại diện: Máy tính bảng (Tablets).
Ví dụ lưới sản phẩm: Hiển thị 3 cột.

4. Large (lg)
Kích thước pixel: ≥ 992px
Thiết bị đại diện: Máy tính xách tay, máy tính để bàn cỡ nhỏ (Laptops / Small Desktops).
Ví dụ lưới sản phẩm: Hiển thị 4 cột.

5. Extra large (xl) và Extra extra large (xxl)
Kích thước pixel: ≥ 1200px (xl) và ≥ 1400px (xxl)
Thiết bị đại diện: Máy tính để bàn màn hình lớn (Large Desktops).
Ví dụ lưới sản phẩm: Hiển thị 5 đến 6 cột.