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

Câu A3:
Chiều rộng màn hình.container width
375px (iPhone SE)   100%
600px               540px
800px               720px
1000px              960px
1400px              1140px

Câu A4: nội dung: chương 16
- Variables (Biến):
--> Giải thích: Cho phép lưu trữ các giá trị thường xuyên sử dụng lại (như mã màu, font chữ, kích thước) vào một biến có tiền tố $. Khi cần thay đổi, chỉ cần đổi giá trị ở biến thì toàn bộ file sẽ cập nhật theo, giúp bảo trì code dễ dàng.

Ví dụ:

SCSS
$primary-color: #3498db;
$base-font: 'Arial', sans-serif;

body {
    color: $primary-color;
    font-family: $base-font;
}
Nesting (CSS lồng nhau):

Giải thích: SCSS cho phép viết các CSS selector lồng vào nhau theo đúng cấu trúc phân cấp bậc của HTML. Giúp mã nguồn gọn gàng, trực quan và hạn chế việc lặp lại tên class cha nhiều lần. Ký tự & được dùng để đại diện cho phần tử cha (thường dùng cho hover, active, pseudo-classes).

Ví dụ:

SCSS
nav {
    background-color: #333;
    ul {
        list-style: none;
    }
    a {
        color: white;
        &:hover {
            color: red;
        }
    }
}
Mixins (@mixin, @include):

Giải thích: Cho phép đóng gói một nhóm các thuộc tính CSS lại thành một module có thể tái sử dụng ở nhiều nơi. Điểm mạnh của Mixins so với @extend là nó có thể nhận tham số (arguments) truyền vào giống như hàm trong lập trình.

Ví dụ:

SCSS
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    @include flex-center;
    width: 100%;
}
@extend / Inheritance (Kế thừa):

Giải thích: Cho phép một selector chia sẻ (kế thừa) toàn bộ các thuộc tính CSS của một selector khác. Giúp tuân thủ nguyên tắc DRY (Don't Repeat Yourself), giảm thiểu code lặp lại.

Ví dụ:

SCSS
.btn-base {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
}

.btn-submit {
    @extend .btn-base; /* Kế thừa padding, border, border-radius */
    background-color: green;
}

2.
- Lý do trình duyệt không đọc được: Trình duyệt web (Chrome, Safari, Firefox...) được thiết kế chỉ để hiểu và phân tích cú pháp ngôn ngữ CSS tiêu chuẩn. Phân mở rộng .scss (Sassy CSS) chứa các cú pháp lập trình nâng cao (như khai báo biến $, @mixin, lồng nhau) vốn không tồn tại trong đặc tả chuẩn của ngôn ngữ CSS, do đó trình duyệt không thể dịch được.

- Bước cần thực hiện: Phải thực hiện bước Biên dịch (Compilation). File .scss bắt buộc phải được chạy qua một trình biên dịch (như Node-sass, Dart Sass, hoặc các extension như Live Sass Compiler trên VS Code) để dịch toàn bộ cú pháp SCSS thành một file .css tiêu chuẩn. Cuối cùng, thẻ <link> trong file HTML sẽ gọi đến file .css đã được biên dịch này chứ không gọi file .scss.

________________________________________________________________
Câu B3:
- Lệnh Compile SCSS sang CSS:
# Lệnh biên dịch chuẩn bằng Dart Sass (Biên dịch thư mục scss sang thư mục css)
sass scss/style.scss css/style.css

# Hoặc lệnh theo dõi tự động biên dịch khi có thay đổi (Watch mode)
sass --watch scss/style.scss css/style.css