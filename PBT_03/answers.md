Phần A:
Câu A1: Nội dung lấy từ Chương 8
- 3 cách nhúng CSS vào HTML (inline, internal, external):
1. Inline CSS 
Ví dụ code: <h1 style="color: #2563eb; font-size: 32px;">cach 1</h1>.

+ Ưu điểm: Có thể áp dụng style nhanh chóng cho một phần tử cụ thể mà không cần viết thêm quy tắc chọn (selector).
+ Nhược điểm: Không thể tái sử dụng code, gây khó khăn cho việc bảo trì khi dự án lớn dần và làm code HTML trở nên rối.
--> Chỉ dùng cho các trường hợp xử lý khẩn cấp hoặc cần ghi đè (override) style tạm thời cho một phần tử duy nhất.

2. Internal CSS 
Ví dụ code:

HTML
<head>
    <style>
        h1 { color: #2563eb; font-size: 32px; }
    </style>
</head>

+ Ưu điểm: Phù hợp cho các dự án nhỏ hoặc trang web đơn (single-page), dễ dàng kiểm soát style của toàn bộ trang trong một file HTML duy nhất.
+ Nhược điểm: Không thể tái sử dụng style cho các trang HTML khác trong cùng một website.
--> Dùng khi làm bản thảo hoặc cho những trang web chỉ có duy nhất một file HTML.

3. External CSS
Ví dụ code:

HTML
<head>
    <link rel="stylesheet" href="styles.css">
</head>

+ Ưu điểm: Tối ưu hiệu suất nhờ cơ chế lưu bộ nhớ đệm của trình duyệt, dễ dàng tái sử dụng cho hàng trăm trang web và giúp tách biệt hoàn toàn giữa nội dung (HTML) và giao diện (CSS).
+ Nhược điểm: Trình duyệt mất thêm thời gian để tải file CSS riêng biệt từ server về.
--> Đây là cách chuẩn để áp dụng cho mọi dự án thực tế và chuyên nghiệp.

Câu A2:
1. h1   --> chọn: ShopTLU                        
2. .price  --> chọn: 25.990.000đ và 45.990.000đ                   
3. #app header   --> chọn: ShopTLU Home Products About          
4. nav a:first-child      --> chọn: home      
5. .product.featured h2    --> chọn: MacBook Pro     
6. article > p       --> chọn: 25.990.000đ, Mô tả sản phẩm..., 45.990.000đ, Mô tả sản phẩm...           
7. a[href="/"]         --> chọn: Home         
8. .top-bar.dark h1     --> chọn: ShopTLU         
screenshot: ![alt text](screenshots/CauA2.png)

Câu A3: Nội dung: chương 11
1. Trường hợp 1: content-box 
Chiều rộng hiển thị thực tế:
400 (width) + 20 (padding trái) + 20 (padding phải) + 5 (border trái) + 5 (border phải) = 450px

Không gian chiếm trên trang:
450 (chiều rộng thực tế) + 10 (margin trái) + 10 (margin phải) = 470px

2. Trường hợp 2: border-box
Trong mô hình border-box, thuộc tính width đã bao gồm cả content, padding và border. Đây là cách tính phổ biến giúp chúng ta kiểm soát kích thước chuẩn xác hơn.

- Chiều rộng hiển thị = 400px
- Kích thước content thực tế:
400 (tổng width) - 20 (padding trái) - 20 (padding phải) - 5 (border trái) - 5 (border phải) = 350px
- Không gian chiếm trên trang:
400 (chiều rộng thực tế) + 10 (margin trái) + 10 (margin phải) = 420px

3. Trường hợp 3: Margin collapse 
Khoảng cách giữa box-a và box-b: 40px
--> Trong CSS, khi hai lề dọc (top và bottom) của hai khối kề nhau, chúng không cộng dồn (25 + 40 = 65) mà sẽ xảy ra hiện tượng Margin Collapse. Trình duyệt sẽ so sánh và lấy giá trị lớn nhất giữa hai lề để áp dụng. Ở đây, 40px lớn hơn 25px nên khoảng cách là 40px.

Phần nâng cao: Margin âm
- Nếu .box-a có margin-bottom: -10px và .box-b có margin-top: 40px:
- Khoảng cách thực tế: 30px
--> Khi kết hợp giữa margin dương và margin âm, khoảng cách sẽ được tính bằng tổng đại số: 40px + (-10px) = 30px.