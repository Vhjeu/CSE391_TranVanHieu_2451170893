Câu A1: Nguồn tham chiếu: chương 01(01_introduction_html_universe.md) 
1. Trong phần "Cuộc Hành Trình 0.3 Giây Xuyên Đại Dương"
Các bước xảy ra (từ DNS lookup đến render).
- Request của tôi xuất phát từ laptop → đi qua router WiFi của nhà mình
- Qua nhà mạng mà tôi đang sử dụng → Hệ thống định vị tìm địa chỉ IP của Shopee để gói tin biết đích đến.
- Gói tin chạy xuyên cáp quang tới Data Center của Shopee.
- Server xử lý: nhận lệnh " tôi muốn xem trang chủ"
-> Server truy vấn Database để lấy danh sách sản phẩm
- Response chạy ngược lại: cáp quang → nhà mạng → router → laptop
- Chrome nhận file HTML, CSS, JS → render ra giao diện 

2. Nguồn tham khảo: Trang facebook.com
Tab Network trong DevTools giống cho thấy những thông tin:
- Danh sách tài nguyên: Mọi file HTML, CSS, JS, hình ảnh, video, và các lời gọi API.
- Name: tên file ( nhưng được mã hoá để tránh lặp )
- Status: Request thành công (200) hay thất bại (404, 500).
- Type: Phân loại xem đó là script, stylesheet, hay ảnh.
- Size: Dung lượng file tải về (giúp tối ưu tốc độ trang).
- Time: Cho thấy file nào tải trước, file nào tải sau và mất bao lâu.

_____________________________________________________________
Câu A2: Nguồn tham khảo: (CHƯƠNG 04 Visible Part of HTML)
Trong phần: Semantic HTML5 — "Thẻ có ý nghĩa"

- Web ban đầu:
<div class="header">
    <div class="logo">ShopTLU</div>
    <div class="menu">
        <div><a href="/">Trang chủ</a></div>
        <div><a href="/products">Sản phẩm</a></div>
    </div>
</div>
<div class="main">
    <div class="product">
        <div class="title">iPhone 16 Pro</div>
        <div class="price">25.990.000đ</div>
        <div class="image"><img src="iphone.jpg"></div>
    </div>
</div>
<div class="footer">© 2026 ShopTLU</div>

-- Một trang web như trên bị Google đánh giá SEO thấp vì:
    Việc lạm dụng thẻ <div> cho mọi thành phần ("Div-soup") khiến cấu trúc trang web trở nên vô nghĩa trong mắt các công cụ tìm kiếm và các thiết bị hỗ trợ người khuyết tật.

-- 4 lỗi semantic:
    1. Sử dụng div cho header, main, footer
    2. Menu được bọc trong div và các đường link nằm trong div con. 
    3. Dùng div cho một thực thể độc lập (iPhone 16 Pro).
    4. Dùng div cho tiêu đề và thiếu alt

-- Sửa lại trang web:
<header>
    <div class="logo">ShopTLU</div>
    <nav class="menu">
        <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/products">Sản phẩm</a></li>
        </ul>
    </nav>
</header>
<main>
    <article class="product">
        <h1 class="title">iPhone 16 Pro</h1>
        <p class="price">25.990.000đ</p>
        <figure class="image">
            <img src="iphone.jpg" alt="iPhone 16 Pro">
        </figure>
    </article>
</main>
<footer>© 2026 ShopTLU</footer>

_____________________________________________________________
Câu A3:
![alt text](screenshots/2.png)
-- Giải thích:
+ Thẻ <div> luôn xếp trên dòng mới và chiếm toàn bộ chiều rộng. Hộp 1, 2, 3 đều dùng <div> nên mỗi cái hộp nằm trên một dòng riêng.
+ Thẻ <span> lấy vừa đủ chiều rộng của nội dung bên trong nên không làm xuống dòng, chúng xếp hàng ngang với nhau
+ Thẻ <strong> cũng không làm xuống dòng mà xếp ngang với nhau, đặc biệt nó còn làm cho in đậm - nhấn mạnh ( điều này là do các trình duyệt mặc định gán cho thẻ <strong> thuộc tính trong css).

_____________________________________________________________
Câu A4: Nguồn tham khảo: Chương 5- TABLES & HYPERLINKS
- Sự khác nhau giữa <thead>, <tbody>, <tfoot>:
+ <thead>: Header - Tiêu đề cột
+ <tbody>: Body	- Dữ liệu chính
+ <tfoot>: Footer - Tổng kết

- KHÔNG NÊN dùng table để tạo layout trang web vì:
+ <table> chỉ dùng cho dữ liệu dạng bảng (danh sách, so sánh, thống kê). KHÔNG dùng cho layout trang web.
+ Tốc độ tải trang chậm.
+ Bảng có tính chất rất cứng nhắc. Khi  xem trang web trên điện thoại, một layout dùng <table> sẽ bị tràn màn hình hoặc co cụm lại rất xấu.
+ Trình đọc màn hình sẽ đọc bảng theo thứ tự từng ô (cell), khiến người khiếm thị không thể hiểu được bố cục trang web.

_______________________________________________________________
Câu B3:
- Lỗi 1: Dòng 1 — Khai báo <!DOCTYPE> thiếu html — Sửa thành <!DOCTYPE html>.
- Lỗi 2: Dòng 1 — Thẻ <html> thiếu thuộc tính ngôn ngữ lang — Thêm lang="vi" để hỗ trợ trình duyệt và SEO.
- Lỗi 3: Dòng 2 — Thẻ <title> thiếu thẻ đóng </title> — Thêm </title> sau tiêu đề trang.
- Lỗi 4: Dòng 3 — Giá trị charset utf8 sai định dạng — Sửa thành "UTF-8" (có dấu gạch ngang).
- Lỗi 5: Dòng 4 — Thẻ <h1> đóng sai bằng thẻ mở <h1> — Sửa thành </h1>.
- Lỗi 6: Dòng 8 — Thẻ liên kết <a> đầu tiên đóng sai bằng <a> — Sửa thành </a>.
- Lỗi 7: Dòng 15 — Thẻ <img> thiếu thuộc tính bắt buộc alt và giá trị src thiếu dấu ngoặc kép — Bao giá trị src trong dấu "" và thêm mô tả alt.
- Lỗi 8: Dòng 17 — Các thẻ <b> và <p> bị đóng chồng chéo (overlapping tags) — Đóng thẻ theo thứ tự ngược lại: </b></p>.
- Lỗi 9: Dòng 23 — Thẻ <table> thiếu cấu trúc Semantic (<thead>, <tbody>) — Bổ sung các thẻ này để phân cấp dữ liệu bảng.
- Lỗi 10: Dòng 25, 26 — Dòng tiêu đề của bảng đang dùng thẻ <td> — Sửa thành <th> để định nghĩa đúng đây là các ô tiêu đề cột.
- Lỗi 11: Dòng 36 — Sử dụng thẻ <main> lần thứ hai — Một trang web chỉ được có duy nhất một thẻ <main>. Thay thế thẻ thứ hai bằng <aside> (vì đây là nội dung bên lề).
- Lỗi 12: Dòng 41 — Thẻ <p> trong footer thiếu thẻ đóng — Thêm </p> để kết thúc đoạn văn bản.



