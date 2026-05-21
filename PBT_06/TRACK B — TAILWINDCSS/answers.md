Phần A:
Câu A1:
**Thẻ `<div>` bọc ngoài:**
* `flex` → `display: flex;` (Thiết lập container linh hoạt)
* `items-center` → `align-items: center;` (Căn giữa các phần tử con theo trục dọc - trục chéo)
* `justify-between` → `justify-content: space-between;` (Căn lề hai bên cho các phần tử con, khoảng trống ở giữa)
* `p-4` → `padding: 1rem;` (16px) (Thêm khoảng đệm bên trong đều 4 phía)
* `bg-white` → `background-color: rgb(255 255 255);` (Màu nền trắng)
* `shadow-md` → Bật hiệu ứng đổ bóng ở mức trung bình (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), ...`)
* `rounded-lg` → `border-radius: 0.5rem;` (8px) (Bo tròn các góc ở mức lớn)
* `hover:shadow-xl` → Khi di chuột vào (hover), tăng bóng đổ lên mức cực lớn (extra-large)
* `transition-shadow` → Thêm hiệu ứng chuyển đổi (transition) riêng cho thuộc tính box-shadow để chuyển đổi mượt mà.
* `duration-300` → `transition-duration: 300ms;` (Thời gian hiệu ứng là 300 mili-giây)

**Thẻ `<img>`:**
* `w-16` → `width: 4rem;` (64px) (Chiều rộng)
* `h-16` → `height: 4rem;` (64px) (Chiều cao)
* `rounded-full` → `border-radius: 9999px;` (Bo tròn thành hình tròn hoàn hảo)
* `object-cover` → `object-fit: cover;` (Cắt xén ảnh để vừa khít khung hình vuông 64x64 mà không bị méo)

**Thẻ `<div>` chứa Text:**
* `ml-4` → `margin-left: 1rem;` (16px) (Cách lề trái)
* `flex-1` → `flex: 1 1 0%;` (Cho phép phần tử này giãn ra chiếm hết không gian trống còn lại ở giữa thẻ img và thẻ button)

**Thẻ `<h3>`:**
* `text-lg` → `font-size: 1.125rem;` (18px) (Cỡ chữ lớn)
* `font-semibold` → `font-weight: 600;` (Độ đậm chữ ở mức bán đậm)
* `text-gray-800` → Đặt màu chữ là xám đậm (mã hex thường là `#1f2937`)
* `truncate` → Kết hợp 3 thuộc tính: `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;` (Cắt bớt chữ nếu quá dài và thêm dấu `...` ở cuối)

**Thẻ `<p>`:**
* `text-sm` → `font-size: 0.875rem;` (14px) (Cỡ chữ nhỏ)
* `text-gray-500` → Đặt màu chữ là xám vừa (mã hex thường là `#6b7280`)

**Thẻ `<button>`:**
* `px-4` → `padding-left: 1rem; padding-right: 1rem;` (Khoảng đệm ngang trái/phải)
* `py-2` → `padding-top: 0.5rem; padding-bottom: 0.5rem;` (Khoảng đệm dọc trên/dưới)
* `bg-blue-500` → Nền màu xanh dương
* `text-white` → Chữ màu trắng
* `rounded-md` → `border-radius: 0.375rem;` (6px) (Bo góc ở mức vừa)
* `hover:bg-blue-600` → Khi hover, đổi màu nền sang xanh dương đậm hơn
* `focus:ring-2` → Khi được focus (click vào hoặc tab tới), hiện viền sáng (ring) với độ dày 2px
* `focus:ring-blue-300` → Đặt màu cho cái viền sáng (ring) đó là màu xanh dương nhạt.