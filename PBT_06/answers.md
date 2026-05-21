Phần A:
Câu A1:
Kích thước          Số cột          Box layout
< 768px (xs, sm)  --  1 cột  --      4 hàng dọc (Box xếp chồng lên nhau: Box 1 / Box 2 / Box 3 / Box 4)
768px - 991px (md) -- 2 cột   --     2 hàng ngang (Hàng 1: Box 1, Box 2. Hàng 2: Box 3, Box 4)
≥ 992px (lg, xl, xxl)  -- 4 cột  --    1 hàng ngang duy nhất chứa cả 4 box (Box 1, Box 2, Box 3, Box 4)

- col-md-6 nghĩa là bắt đầu từ kích thước màn hình Medium (md, breakpoint ≥ 768px) trở lên, phần tử này sẽ chiếm 6/12 cột của Grid (tương đương 50% chiều rộng container).
- Không cần viết col-sm-12 vì Bootstrap thiết kế theo nguyên tắc Mobile-First (kế thừa từ dưới lên trên). Class col-12 (dành cho kích thước mặc định nhỏ nhất - xs) đã thiết lập chiều rộng là 100% (12/12 cột). Khi màn hình lớn lên tới kích thước sm (≥ 576px), nếu không có khai báo col-sm-* nào khác, nó sẽ tự động kế thừa thuộc tính col-12 của xs. Do đó, việc viết thêm col-sm-12 là dư thừa.

Câu A2:
1. Giải thích class d-none d-md-block:
- Ẩn khi nào: Ẩn trên các màn hình nhỏ hơn 768px (kích thước xs và sm). Lý do: d-none áp dụng display: none làm mặc định theo nguyên tắc Mobile-First.
- Hiển thị khi nào: Hiển thị dưới dạng khối (display: block) trên các màn hình từ 768px trở lên (từ breakpoint md cho đến lg, xl, xxl).
2. 5 spacing utilities (margin/padding) và giải thích:
- mt-3: Margin-Top mức 3. Thêm khoảng đẩy (margin) ở phía trên phần tử (mức 3 tương đương 1rem).
- px-4: Padding trục X (Left và Right) mức 4. Thêm khoảng đệm (padding) ở bên trái và phải bên trong phần tử (mức 4 tương đương 1.5rem).
- mb-auto: Margin-Bottom Auto. Chiếm toàn bộ không gian trống phía dưới phần tử (thường dùng trong Flexbox để đẩy phần tử lấp đầy khoảng trống).
- py-2: Padding trục Y (Top và Bottom) mức 2. Thêm khoảng đệm ở bên trên và dưới bên trong phần tử.
- mx-auto: Margin trục X Auto. Căn giữa phần tử block theo chiều ngang bằng cách tự động chia đều lề trái và lề phải.
3. Sự khác nhau giữa .container, .container-fluid, .container-md:
- .container: Container có chiều rộng cố định tối đa (max-width) và thay đổi "nhảy bậc" tại mỗi breakpoint (sm, md, lg, xl, xxl). Giữa các phần tử có khoảng lề hai bên.
- .container-fluid: Luôn luôn giãn rộng chiếm 100% chiều rộng màn hình bất kể thiết bị nào, từ mobile đến màn hình desktop siêu lớn.
- .container-md: Là sự kết hợp. Chiếm 100% chiều rộng ở các màn hình nhỏ (dưới 768px). Bắt đầu từ màn hình md (≥ 768px) trở lên, nó mới thu lại và hoạt động như một .container có chiều rộng cố định.

_____________________________________________________________________________
Phần C:
Câu C1:
1. Quy trình đổi màu $primary từ xanh mặc định sang #E63946:
- Công cụ cần thiết: Trình biên dịch SASS (như Node-sass, Dart Sass qua terminal, hoặc extension Live Sass Compiler trên VS Code) và mã nguồn SCSS gốc của Bootstrap (tải qua npm hoặc tải trực tiếp).
- File cần modify/tạo mới: Không sửa trực tiếp vào mã nguồn của Bootstrap. Cần tạo một file SCSS tùy biến riêng (ví dụ: custom.scss).

2. KHÔNG nên override trực tiếp .btn-primary { background: red; } mà nên dùng SASS variables vì:
- Phá vỡ tính đồng bộ của hệ thống thiết kế (Design System): Biến $primary trong Bootstrap là biến gốc được sử dụng rải rác ở hàng chục component khác nhau (như bg-primary, text-primary, alert-primary, border-primary, badge, pagination...). Nếu chỉ override thủ công .btn-primary, nút bấm sẽ có màu đỏ, nhưng các thành phần khác vẫn giữ màu xanh mặc định, gây bất nhất giao diện.
- Mất đi sức mạnh tự động tính toán của SASS: Khi thay đổi biến $primary, các hàm (functions) dựng sẵn của Bootstrap sẽ tự động tính toán và sinh ra các phổ màu phụ (sắc độ sáng/tối) dùng cho các trạng thái hover, active, focus-ring, disabled. Nếu dùng CSS thuần đè trực tiếp .btn-primary, người lập trình bắt buộc phải tự viết tay hàng loạt các thuộc tính hover, active rất thủ công, tốn thời gian và khó bảo trì.

Câu C2:
1. code CSS
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #f8f9fa;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.nav-menu { display: flex; gap: 1.5rem; list-style: none; }
.hamburger { display: none; cursor: pointer; }

@media (max-width: 768px) {
    .nav-menu { display: none; flex-direction: column; width: 100%; }
    .hamburger { display: block; }
    .navbar.active .nav-menu { display: flex; }
}

/* Thiết lập Product Card */
.card {
    border: 1px solid #dee2e6;
    border-radius: 8px;
    width: 300px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}
.card img { width: 100%; height: auto; display: block; }
.card-body { padding: 1.5rem; }
.card-title { font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem; }
.btn-primary {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #0d6efd;
    color: white;
    border-radius: 4px;
    text-decoration: none;
}
2. So sánh với Bootstrap version:
- Số dòng CSS cần viết:
+ CSS thuần: Cần viết khoảng 50 - 100+ dòng CSS để xử lý layout (Flexbox), trạng thái hover, shadow, và đặc biệt là viết Media Queries cho responsive.
+ Bootstrap: Tốn 0 dòng CSS custom. Toàn bộ cấu trúc được giải quyết trực tiếp trên HTML bằng các class dựng sẵn (VD: navbar, navbar-expand-lg, card, card-img-top, shadow, col-md-4).

- Thời gian phát triển:
+ CSS thuần: Chậm. Phải tự xây dựng từ đầu, tự tính toán khoảng cách (padding/margin) và tốn nhiều thời gian test lỗi giao diện trên các kích thước màn hình khác nhau.
+ Bootstrap: Rất nhanh (chỉ bằng 1/3 hoặc 1/4 thời gian). Lắp ghép các component có sẵn là chạy được ngay, responsive đã được tính toán chuẩn mực.

- Khả năng tùy biến:
+ CSS thuần: Tuyệt đối (100%). Lập trình viên kiểm soát từng pixel, dễ dàng tạo ra các giao diện độc quyền, dị biệt không đụng hàng.
+ Bootstrap: Thấp hơn nếu chỉ dùng CSS thuần để đè (override). Nếu không biết dùng SCSS để đổi biến số, các trang web làm bằng Bootstrap thường trông rất "công nghiệp" và giống hệt nhau (Bootstrap-y look).

- NÊN dùng Bootstrap khi:
+ Cần làm sản phẩm nhanh, chạy deadline gấp (Landing page sự kiện, Prototype bản nháp).
+ Làm các trang quản trị (Admin Dashboard), trang web nội bộ công ty (nơi tính năng quan trọng hơn sự độc đáo của giao diện).
+ Dự án không có Designer UI/UX riêng biệt, hoặc Backend Developer cần tự dọn giao diện mà không rành CSS sâu.

- KHÔNG NÊN dùng Bootstrap khi:
+ Dự án yêu cầu thiết kế UI/UX độc quyền, có tính nhận diện thương hiệu cao, yêu cầu độ chính xác tới từng pixel (Pixel-perfect) theo bản vẽ Figma.
+ Dự án yêu cầu tối ưu hiệu suất, tốc độ tải trang cực nhanh (việc nhúng toàn bộ thư viện Bootstrap lớn sẽ gây thừa thãi code - "bloatware").
Giao diện quá phá cách, không tuân theo hệ thống Grid 12 cột tiêu chuẩn.