Câu A1:
type="email" → Ô nhập text, tự kiểm tra có @ → Dùng cho form đăng ký

type="password" → Các ký tự nhập vào bị che đi (thường là dấu chấm) → Dùng cho ô nhập mật khẩu đăng nhập hoặc mã PIN thanh toán.

type="number" → Ô chỉ cho phép nhập số, có nút mũi tên tăng giảm, tự báo lỗi nếu nhập chữ → Dùng để chọn số lượng sản phẩm cần mua trong giỏ hàng.

type="date" → Hiển thị bộ chọn lịch để chọn chính xác ngày tháng năm 

type="checkbox" → Ô vuông nhỏ cho phép chọn nhiều mục cùng lúc hoặc bật/tắt một tùy chọn → Dùng để chọn các tiêu chí lọc sản phẩm 

type="radio" → Ô tròn nhỏ, chỉ được chọn duy nhất một mục trong một nhóm liên quan → Dùng để chọn phương thức thanh toán.

type="file" → Nút bấm mở cửa sổ chọn tệp tin từ thiết bị để tải lên hệ thống → Dùng để tải lên ảnh hoặc video.

type="tel" → Ô nhập văn bản tối ưu cho bàn phím số trên di động, hỗ trợ kiểm tra định dạng bằng thuộc tính pattern → Dùng cho ô nhập số điện thoại người nhận hàng.

type="range" → Thanh trượt điều chỉnh giá trị trong một khoảng từ tối thiểu đến tối đa → Dùng cho bộ lọc khoảng giá giúp khách hàng tìm sản phẩm trong ngân sách.

type="search" → Ô nhập văn bản có nút "X" để xóa nhanh nội dung → Dùng cho thanh tìm kiếm sản phẩm trên đầu trang web.

________________________________________________________________________________________
Câu A2: Chương 7
<!-- Trường hợp 1 -->
<input type="text" required value="">   <!-- User để trống -->
--> Trình duyệt báo lỗi vì required value yêu cầu người dùng nhập dữ liệu

<!-- Trường hợp 2 -->
<input type="email" value="abc">        <!-- User gõ "abc" -->
--> trình duyệt báo lỗi ( form không gửi đi) vì chuỗi "abc" không chứa ký tự @ và tên miền hợp lệ, nên nó vi phạm quy tắc định dạng của loại input này.

<!-- Trường hợp 3 -->
<input type="number" min="1" max="10" value="15"> <!-- User gõ 15 -->
--> Form không được gửi đi vì thuộc tính max="10" là giá trị tối đa được phép nhập. Vì user nhập 15 (>10) nên không hợp lệ

<!-- Trường hợp 4 -->
<input type="text" pattern="[0-9]{10}" value="abc123"> <!-- User gõ "abc123" -->
--> Form không được gửi đi, lỗi vì pattern yêu cầu nhập vào phải là đúng 10 chữ số. Chuỗi "abc123" vừa chứa chữ cái, vừa không đủ độ dài nên không hợp lệ.

<!-- Trường hợp 5 -->
<input type="password" minlength="8" value="123">  <!-- User gõ "123" -->
--> Form chưa được gửi đi. Hiển thị lỗi vì gõ thiếu độ dài mật khẩu ( min=8)

__________________________________________________________________________________________
Câu A3: Accessibility chương 7
- <label for="email"> quan trọng cho người dùng screen reader vì:
+ Với Screen Reader: Nếu không có label, máy chỉ đọc là "ô nhập văn bản" (người khiếm thị không biết nhập gì). Có label, máy sẽ đọc rõ: "Email, ô nhập văn bản".
+ Với người dùng thường: Bấm chuột vào chữ "Email" thì con trỏ tự nhảy vào ô nhập.

- Dùng <fieldset> + <legend> khi:
+ Để nhóm các lựa chọn liên quan (thường là Radio hoặc Checkbox).
Ví dụ: Nhóm chọn giới tính
<fieldset>
  <legend>Giới tính</legend> 
  <input type="radio" id="m"> <label for="m">Nam</label>
  <input type="radio" id="f"> <label for="f">Nữ</label>
</fieldset>

- aria-label dùng khi: Khi nút bấm chỉ có icon, không có chữ.
không nên dùng khi đã có label vì nó có thể bị lặp, máy sẽ có thể đọc lại

__________________________________________________________________________________________
Câu A4: Media
(1)
- Thuộc tính loading="lazy" trên thẻ <img>:
+ Giải thích: Chỉ tải ảnh khi người dùng cuộn trang đến gần vị trí của ảnh đó thay vì tải toàn bộ ngay khi mở trang.
- Cải thiện: Tốc độ tải trang ban đầu nhanh hơn, tiết kiệm băng thông cho người dùng và giảm tải cho server.
- Không nên dùng khi: các ảnh nằm ở phần đầu trang mà người dùng thấy ngay khi vừa vào web, vì nó sẽ làm chậm quá trình hiển thị nội dung đầu tiên.
(2)
- Nên cung cấp nhiều <source> trong thẻ <video> vì:
+ Mỗi trình duyệt hỗ trợ các định dạng video khác nhau. Cung cấp nhiều source giúp trình duyệt tự chọn định dạng nó hiểu được để phát.
- 3 format video web phổ biến:
+ MP4
+ WebM
+ Ogg
- Thuộc tính alt trên <img> dùng để:
+ Hiển thị văn bản của ảnh, hỗ trợ người khiếm thính thông qua trình đọc màn hình.
- alt tốt cho 3 trường hợp:
+ Ảnh sản phẩm iPhone 16: alt="điện thoại iphone 16 256gb màu titan"
+ Ảnh trang trí (decorative): phần trang trí thì không cần phải dùng alt tránh gây rối mắt, lẫn lộn với nội dung chính của web.
+ Ảnh biểu đồ doanh thu Q1/2026: alt="Biểu đồ cột cho thấy doanh thu Q1 năm 2026".

__________________________________________________________________________________________
Câu A5:
- So sánh <figure> vs <img>:
+ Dùng Cách 1 (Chỉ <img>) khi:
Dùng khi hình ảnh đó chỉ là một phần nhỏ, mang tính chất minh họa hoặc bổ trợ ngay lập tức cho nội dung mà không cần giải thích thêm bằng chữ bên dưới.

VD1: Logo của trường Đại học Thủy Lợi trên thanh Header. Nó chỉ cần hiện ra, người dùng tự hiểu đó là logo, không ai để chữ "Logo trường" ở dưới cả.
VD2: Ảnh đại diện facebook nhỏ của tôi trong phần bình luận. Nó chỉ là một biểu tượng nhận diện cá nhân gắn liền với tên người dùng.

+ Dùng Cách 2 (<figure> + <figcaption>) khi:
Dùng khi hình ảnh đó là trọng tâm của nội dung, cần có chú thích rõ ràng để người đọc hiểu thông điệp hoặc dữ liệu đi kèm.

VD1 (Sản phẩm): Một chiếc iPhone 16 trên trang Shopee. Ảnh sản phẩm cần đi kèm tên và giá tiền ngay bên dưới để khách hàng biết họ đang xem cái gì và giá bao nhiêu.
VD2 (Biểu đồ): Một biểu đồ cột thể hiện điểm trung bình của lớp 66KTPM1. Thẻ <figcaption> sẽ ghi: "Hình 1: Thống kê kết quả học tập kỳ 1", giúp giảng viên dễ theo dõi khi đọc báo cáo.