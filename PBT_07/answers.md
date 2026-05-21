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