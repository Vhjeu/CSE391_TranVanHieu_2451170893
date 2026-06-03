Câu A1:
### 1. Viết hàm theo 3 cách

**Cách 1: Function Declaration (Khai báo hàm truyền thống)**
```javascript
function tinhThueBaoHiem1(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    const thuc_nhan = luong - thue;
    return { thue, thuc_nhan };
}

```

**Cách 2: Function Expression (Biểu thức hàm)**
```javascript
const tinhThueBaoHiem2 = function(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    const thuc_nhan = luong - thue;
    return { thue, thuc_nhan };
};

```

**Cách 3: Arrow Function (Hàm mũi tên)**
```javascript
const tinhThueBaoHiem3 = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    const thuc_nhan = luong - thue;
    return { thue, thuc_nhan };
};

```
---
### 2. Sự khác biệt về Hoisting

3 cách viết này **CÓ** sự khác biệt rất lớn về cơ chế Hoisting (đưa khai báo lên đầu).

* **Function Declaration:** Được hoisting **toàn bộ** (cả phần tên hàm lẫn nội dung hàm). Có thể gọi hàm để chạy ở bất kỳ dòng code nào, kể cả những dòng nằm *trước* khi bạn định nghĩa nó.
* **Function Expression & Arrow Function:** Cách chúng hoisting phụ thuộc vào từ khóa khai báo biến (`var`, `let`, `const`).
* Nếu dùng `let/const`: Tên biến được hoisting nhưng bị đưa vào "Vùng chết tạm thời" (Temporal Dead Zone). Gọi hàm trước khi khởi tạo sẽ bị lỗi `ReferenceError`.
* Nếu dùng `var`: Tên biến được hoisting và gán giá trị mặc định là `undefined`. Gọi hàm lúc này sẽ bị lỗi `TypeError: is not a function`.

### 3. Ví dụ Code chứng minh Hoisting

```javascript
// ==========================================
// 1. DÙNG FUNCTION DECLARATION
// ==========================================
// Chạy bình thường dù gọi hàm trước khi định nghĩa
console.log(hoistingTruyenThong(15000000)); 

function hoistingTruyenThong(luong) {
    return luong * 0.1;
}

// ==========================================
// 2. DÙNG FUNCTION EXPRESSION / ARROW FUNCTION
// ==========================================

// Lỗi: Cannot access 'hoistingArrow' before initialization
// console.log(hoistingArrow(15000000)); 

const hoistingArrow = (luong) => {
    return luong * 0.1;
};

// Lỗi: hoistingVar is not a function (Vì lúc này hoistingVar đang là undefined)
// console.log(hoistingVar(15000000));

var hoistingVar = function(luong) {
    return luong * 0.1;
};

```