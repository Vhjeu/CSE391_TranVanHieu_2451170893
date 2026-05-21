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