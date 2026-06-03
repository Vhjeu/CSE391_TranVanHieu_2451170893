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

Câu A2;
### 1. Dự đoán Output

**Đoạn 1: Counter (Closure)**
```javascript
console.log(c.increment());  // 1 (Tăng từ 0 lên 1 và trả về 1)
console.log(c.increment());  // 2 (Tăng từ 1 lên 2 và trả về 2)
console.log(c.increment());  // 3 (Tăng từ 2 lên 3 và trả về 3)
console.log(c.decrement());  // 2 (Giảm từ 3 xuống 2 và trả về 2)
console.log(c.getCount());   // 2 (Trả về giá trị hiện tại là 2)

```
**Đoạn 2: Vòng lặp `setTimeout**`
```javascript
// Output sau 100ms:
var: 3
var: 3
var: 3

// Output sau 200ms:
let: 0
let: 1
let: 2

```
### 2. Giải thích chi tiết

**Tại sao Đoạn 1 lại lưu được giá trị (Closure)?**
Hàm `counter()` tạo ra một biến `count = 0`. Khi nó `return` về một object chứa các hàm con (`increment`, `decrement`, `getCount`), các hàm con này mang theo một "chiếc ba lô" (Closure) chứa môi trường xung quanh chúng, cụ thể là biến `count`. Dù hàm `counter()` đã chạy xong, biến `count` vẫn không bị xóa đi khỏi bộ nhớ mà được giữ lại để các hàm con thao tác.

**Tại sao `var` và `let` cho kết quả khác nhau trong vòng lặp?**
Đây là một bài toán kinh điển về **Scope (Phạm vi)** trong JavaScript.

* **Trường hợp dùng `var`:** `var` có phạm vi theo hàm (Function Scope) hoặc toàn cục (Global Scope), không có phạm vi theo khối lệnh (Block Scope).
Khi vòng lặp chạy, chỉ có **một biến `i` duy nhất** được tạo ra. Vòng lặp chạy rất nhanh từ 0 đến 2, kết thúc vòng lặp, `i` tăng lên bằng 3. Sau 100ms, 3 cái `setTimeout` mới bắt đầu chạy và cùng tìm đến chung một địa chỉ bộ nhớ của `i`, lúc này `i` đã là 3. Do đó nó in ra ba số 3.
* **Trường hợp dùng `let`:** `let` có phạm vi theo khối (Block Scope).
Mỗi khi vòng lặp `for` chạy một bước mới, nó lại tạo ra một **bản sao hoàn toàn mới** của biến `j` cho riêng vòng lặp đó. Sẽ có 3 biến `j` khác nhau ở 3 ô nhớ khác nhau (chứa giá trị 0, 1, 2). Mỗi cái `setTimeout` sẽ "ôm" (closure) lấy đúng cái biến `j` của vòng lặp sinh ra nó. Sau 200ms, chúng chạy và in ra chính xác các giá trị 0, 1, 2.