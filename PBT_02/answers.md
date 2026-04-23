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
