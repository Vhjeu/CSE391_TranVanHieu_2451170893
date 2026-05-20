Phần A:
Câu A1:
Kích thước          Số cột          Box layout
< 768px (xs, sm)  --  1 cột  --      4 hàng dọc (Box xếp chồng lên nhau: Box 1 / Box 2 / Box 3 / Box 4)
768px - 991px (md) -- 2 cột   --     2 hàng ngang (Hàng 1: Box 1, Box 2. Hàng 2: Box 3, Box 4)
≥ 992px (lg, xl, xxl)  -- 4 cột  --    1 hàng ngang duy nhất chứa cả 4 box (Box 1, Box 2, Box 3, Box 4)

- col-md-6 nghĩa là bắt đầu từ kích thước màn hình Medium (md, breakpoint ≥ 768px) trở lên, phần tử này sẽ chiếm 6/12 cột của Grid (tương đương 50% chiều rộng container).
- Không cần viết col-sm-12 vì Bootstrap thiết kế theo nguyên tắc Mobile-First (kế thừa từ dưới lên trên). Class col-12 (dành cho kích thước mặc định nhỏ nhất - xs) đã thiết lập chiều rộng là 100% (12/12 cột). Khi màn hình lớn lên tới kích thước sm (≥ 576px), nếu không có khai báo col-sm-* nào khác, nó sẽ tự động kế thừa thuộc tính col-12 của xs. Do đó, việc viết thêm col-sm-12 là dư thừa.