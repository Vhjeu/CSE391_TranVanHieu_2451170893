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