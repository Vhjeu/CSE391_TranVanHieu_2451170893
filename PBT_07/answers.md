1. Dự đoán Output & So sánh thực tế

- Đoạn 1: In ra undefined
- Đoạn 2: Báo lỗi ReferenceError: Cannot access 'y' before initialization
- Đoạn 3: Báo lỗi TypeError: Assignment to constant variable.
- Đoạn 4: In ra mảng [1, 2, 3, 4]
- Đoạn 5: * In ra: Trong block: 2
    +  In ra: Ngoài block: 1

2. Giải thích các kết quả 

- Đoạn 1 (var và Hoisting): 
+ Biến khai báo bằng var sẽ được đưa lên đầu phạm vi (cơ chế Hoisting). Trình duyệt sẽ hiểu đoạn code này là: khai báo var x; ở dòng 1 (lúc này chưa có giá trị nên bằng undefined), in ra x, rồi mới gán x = 5.

- Đoạn 2 (let và TDZ): let báo lỗi?
+ let (và const) cũng được hoisted, nhưng chúng bị đưa vào vùng Temporal Dead Zone (TDZ) — "Vùng chết tạm thời". Bạn không thể truy cập vào biến let trước dòng code khởi tạo nó.

- Đoạn 3 (const Primitive): báo lỗi?
+ const (Constant) dùng để khai báo hằng số. Trình duyệt không cho phép gán lại (reassign) một giá trị mới cho biến const sau khi đã khởi tạo.

- Đoạn 4 (const Object/Array): const mà sao vẫn bị push thêm phần tử được
+ Đây là một kết quả thường gây bất ngờ. Khai báo const đối với Mảng (Array) hoặc Đối tượng (Object) chỉ khóa địa chỉ vùng nhớ (không cho phép gán lại toàn bộ mảng bằng một mảng khác), chứ KHÔNG khóa các phần tử bên trong. Do đó, bạn vẫn có thể push, pop hoặc sửa đổi các phần tử bên trong mảng bình thường.

- Đoạn 5 (Block Scope):
+ let và const có phạm vi hoạt động trong một khối block (nằm trong cặp ngoặc nhọn { }). Biến a bên trong { } là một biến hoàn toàn độc lập, được tạo mới và sẽ bị hủy khi thoát khỏi khối đó, không hề ghi đè lên biến a ở bên ngoài.

Câu A2:
Dự đoán:
console.log(typeof null);        // "object" (Đây là một lỗi lịch sử của JavaScript từ phiên bản đầu tiên)
console.log(typeof undefined);   // "undefined"
console.log(typeof NaN);         // "number" (NaN nghĩa là "Not a Number", nhưng kiểu dữ liệu của nó vẫn là số)
console.log("5" + 3);            // "53"
console.log("5" - 3);            // 2
console.log("5" * "3");          // 15
console.log(true + true);        // 2 (true ép kiểu thành 1, false thành 0)
console.log([] + []);            // "" (Hai mảng rỗng ép kiểu thành chuỗi rỗng và nối với nhau)
console.log([] + {});            // "[object Object]" (Mảng rỗng "" nối với object biểu diễn dưới dạng chuỗi)
console.log({} + []);            // "[object Object]" (Bên trong hàm console.log, {} được hiểu là object literal)

- Giải thích sự khác biệt giữa "5" + 3 và "5" - 3 (Cơ chế Type Coercion)
+ "5" + 3 (Toán tử cộng / Nối chuỗi): Trong JavaScript, toán tử + có hai tác dụng: tính tổng toán học hoặc nối chuỗi. Khi một trong hai toán hạng là chuỗi (string) - ở đây là "5", JavaScript sẽ tự động ép kiểu (coercion) toán hạng còn lại (3) thành chuỗi. Sau đó, nó thực hiện phép nối chuỗi, kết quả là "5" + "3" = "53".
+ "5" - 3 (Toán tử trừ):
Toán tử - (cũng như *, /) chỉ có duy nhất một mục đích là thực hiện phép tính toán học. Do đó, JavaScript sẽ cố gắng ép kiểu chuỗi "5" về dạng số (number). Phép tính trở thành trừ toán học thông thường: 5 - 3 = 2.

Câu A3:
1. Dự đoán kết quả (Output)

JavaScript
console.log(5 == "5");                // true (Ép kiểu chuỗi "5" thành số 5)
console.log(5 === "5");               // false (Khác kiểu dữ liệu: number và string)
console.log(null == undefined);       // true (Quy tắc đặc biệt của JS: chúng bằng nhau ở so sánh lỏng)
console.log(null === undefined);      // false (Khác kiểu dữ liệu)
console.log(NaN == NaN);              // false (Đặc tính của JS: NaN không bao giờ bằng chính nó)
console.log(0 == false);              // true (0 và false đều là giá trị falsy, ép kiểu ra cùng kết quả)
console.log(0 === false);             // false (Khác kiểu dữ liệu)
console.log("" == false);             // true (Chuỗi rỗng ép kiểu thành 0, false ép kiểu thành 0)

2. Quy tắc sử dụng == (Loose Equality) và === (Strict Equality)
- Từ giờ trở đi, bạn NÊN luôn luôn dùng === (và !==).
+ Tại sao? Toán tử === (so sánh nghiêm ngặt) sẽ kiểm tra cả giá trị lẫn kiểu dữ liệu mà không tự động ép kiểu ngầm (type coercion). Điều này giúp code của bạn an toàn, dễ dự đoán hơn và tránh được những lỗi logic (bugs) "ngớ ngẩn" do sự ép kiểu lộn xộn của JavaScript gây ra (như việc "" == false lại trả về true).
+ Chỉ nên dùng == trong một trường hợp ngoại lệ rất hiếm khi bạn cố tình muốn kiểm tra xem một biến có bị rỗng hay không (vd: if (x == null) sẽ bắt trúng cả trường hợp x là null hoặc undefined), nhưng nhìn chung thói quen tốt nhất vẫn là dùng ===.

Câu 4:
1. TẤT CẢ các giá trị Falsy trong JavaScript
false (Hiển nhiên)

0 (Số không)

-0 (Số không âm)

0n (Số không trong kiểu BigInt)

"", '', hoặc `` (Chuỗi rỗng - không chứa ký tự nào)

null (Giá trị rỗng)

undefined (Chưa được định nghĩa)

NaN (Not a Number)

2. Dự đoán kết quả

if ("0") console.log("A"); 👉 Có in ra "A" (Vì "0" là một chuỗi có chứa ký tự, nó là Truthy).

if ("") console.log("B"); 👉 KHÔNG in (Chuỗi rỗng là Falsy).

if ([]) console.log("C"); 👉 Có in ra "C" (Mảng rỗng vẫn là một Object, mà mọi Object đều là Truthy).

if ({}) console.log("D"); 👉 Có in ra "D" (Object rỗng cũng là Truthy).

if (null) console.log("E"); 👉 KHÔNG in (Nằm trong danh sách 8 Falsy).

if (0) console.log("F"); 👉 KHÔNG in (Nằm trong danh sách 8 Falsy).

if (-1) console.log("G"); 👉 Có in ra "G" (Mọi số khác 0 đều là Truthy, kể cả số âm).

if (" ") console.log("H"); 👉 Có in ra "H" (Đây là một chuỗi có chứa 1 dấu cách, không phải chuỗi rỗng nên nó là Truthy).

Câu A5:
// Cách 1: Nối chuỗi thông thường
const greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2: Tạo đường dẫn (URL) chứa biến
const url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3: Viết khối HTML nhiều dòng
const html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;

___________________________________________________________________
Câu C1:
Lỗi 1: Sai toán tử so sánh (Lỗi Logic nghiêm trọng)

Đoạn code lỗi: if (giaSauGiam = 0)

Giải thích: Bạn đang dùng một dấu bằng (=), đây là phép gán chứ không phải phép so sánh. Biến giaSauGiam sẽ bị ép thành giá trị 0. Số 0 trong JS là Falsy, nên câu lệnh console.log bên trong sẽ không bao giờ chạy, và hàm luôn luôn trả về 0 bất chấp đầu vào.

Cách sửa: Đổi thành if (giaSauGiam === 0).

Lỗi 2: Lỗi "ẩn" vòng lặp for kết hợp setTimeout (Vấn đề về Scope)

Đoạn code lỗi: for (var i = 0; i < 5; i++) { setTimeout(...) }

Giải thích: * Trình duyệt sẽ cho vòng lặp for chạy một mạch từ 0 đến 5 ngay lập tức. Cùng lúc đó, nó đặt 5 cái hẹn giờ (setTimeout) chờ 1 giây sau mới chạy.

Tuy nhiên, do bạn khai báo bằng var i (có phạm vi Global/Function Scope), cả 5 cái hẹn giờ này đều trỏ chung vào cùng một biến i duy nhất.

Sau 1 giây, khi các hàm setTimeout bắt đầu chạy thì vòng lặp đã chạy xong từ lâu, lúc này i đã tăng lên bằng 5. Kết quả là nó in ra "Item 5" liên tục 5 lần.

Cách sửa: Thay var i bằng let i. Khác với var, biến let có phạm vi theo khối (Block Scope). Mỗi một vòng lặp sẽ tạo ra một biến i hoàn toàn mới và độc lập, nhờ đó setTimeout sẽ "nhớ" được đúng giá trị của i tại thời điểm đó (in ra 0, 1, 2, 3, 4).

Lỗi 3: Truyền sai kiểu dữ liệu đầu vào (Type Coercion rủi ro)

Đoạn code lỗi: const gia = tinhGiaGiamGia("100000", 20)

Giải thích: Bạn truyền một chuỗi String ("100000") vào một hàm toán học. Dù JavaScript sẽ tự động ép kiểu ngầm để tính toán (trừ thì được, nhưng nếu là dấu + nó sẽ biến thành nối chuỗi). Thói quen này cực kỳ nguy hiểm và dễ sinh bug khó lường.

Cách sửa: Truyền vào số nguyên thật sự: tinhGiaGiamGia(100000, 20).

Lỗi 4: Kiểu dữ liệu trả về không nhất quán (Mixed Return Types)

Đoạn code lỗi: return "Phần trăm giảm không hợp lệ" (Trả về String) và return giaSauGiam (Trả về Number).

Giải thích: Việc một hàm lúc trả về chữ, lúc trả về số khiến các đoạn code dùng nó sau này không biết đường nào mà xử lý (ví dụ không thể mang đi tính toán tiếp được).

Cách sửa: Nên ném ra một lỗi (Throw Error) hoặc in cảnh báo ra console và trả về null hoặc -1.

Lỗi 5: Thiếu kiểm tra (Validate) dữ liệu của giaBan

Đoạn code lỗi: Hàm chỉ kiểm tra phanTramGiam mà bỏ quên biến giaBan.

Giải thích: Nếu vô tình truyền giaBan là chữ (như "abc") hoặc số âm (như -50000), hàm vẫn cắm đầu tính toán và sẽ sinh ra lỗi logic hoặc trả về NaN (Not a Number).

Cách sửa: Thêm điều kiện kiểm tra biến giaBan phải lớn hơn 0 và phải là kiểu number.

Lỗi 6: Dùng var cho biến cục bộ (Bad Practice)

Đoạn code lỗi: var giamGia = giaBan * ...

Giải thích: Trong ES6+ (JavaScript hiện đại), bạn không nên dùng var nữa để tránh lỗi Hoisting và rò rỉ biến ngoài ý muốn.

Cách sửa: Đổi var giamGia thành const giamGia (vì biến này không bị gán lại).
function tinhGiaGiamGia(giaBan, phanTramGiam) {
    // SỬA LỖI 5: Bổ sung validate cho giaBan
    if (typeof giaBan !== 'number' || giaBan < 0) {
        throw new Error("Giá bán không hợp lệ (phải là số và >= 0)");
    }
    
    if (phanTramGiam < 0 || phanTramGiam > 100) {
        // SỬA LỖI 4: Quăng lỗi thay vì return một chuỗi (String)
        throw new Error("Phần trăm giảm không hợp lệ (từ 0 - 100)");
    }
    
    // SỬA LỖI 6: Đổi var thành const
    const giamGia = (giaBan * phanTramGiam) / 100;
    
    // Vẫn dùng let hoặc const ở đây đều được, nhưng code không thay đổi giá trị nên dùng const tốt hơn
    const giaSauGiam = giaBan - giamGia;
    
    // SỬA LỖI 1: Đổi phép gán "=" thành phép so sánh nghiêm ngặt "==="
    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }
    
    return giaSauGiam;
}

// ================= TEST ================= //

// SỬA LỖI 3: Truyền vào giá trị kiểu Number (bỏ ngoặc kép)
const gia = tinhGiaGiamGia(100000, 20);
console.log("Giá sau giảm: " + gia + "đ");

// Dùng try-catch để bắt cái lỗi Throw Error ở trên cho an toàn
try {
    const gia2 = tinhGiaGiamGia(50000, 110);
    console.log("Giá: " + gia2);
} catch (error) {
    console.log("Lỗi: " + error.message);
}

// SỬA LỖI 2 (Lỗi ẩn): Đổi var thành let để tạo Block Scope
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}