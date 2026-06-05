Câu A1:
### 1. Sơ đồ cây DOM (DOM Tree)
```text
div#app
 ├── header
 │    ├── h1
 │    │    └── "Todo App" (Text Node)
 │    └── nav
 │         ├── a (class="active")
 │         │    └── "All" (Text Node)
 │         ├── a
 │         │    └── "Active" (Text Node)
 │         └── a
 │              └── "Completed" (Text Node)
 └── main
      ├── form#todoForm
      │    ├── input#todoInput (type="text")
      │    └── button (type="submit")
      │         └── "Add" (Text Node)
      └── ul#todoList
           ├── li.todo-item
           │    └── "Learn HTML" (Text Node)
           └── li.todo-item.completed
                └── "Learn CSS" (Text Node)

```
### 2. Viết câu lệnh `querySelector`
```javascript
// 1. Chọn thẻ <h1>
document.querySelector('h1'); 
// Hoặc chọn chính xác hơn: document.querySelector('header h1');

// 2. Chọn input trong form
document.querySelector('#todoInput'); 
// Hoặc thông qua form: document.querySelector('#todoForm input');

// 3. Chọn TẤT CẢ .todo-item
document.querySelectorAll('.todo-item');

// 4. Chọn link đang active
document.querySelector('a.active'); 
// Hoặc cẩn thận hơn: document.querySelector('nav a.active');

// 5. Chọn <li> đầu tiên trong #todoList
document.querySelector('#todoList li'); 
// Giải thích: Hàm querySelector mặc định chỉ lấy phần tử đầu tiên nó tìm thấy.
// Hoặc có thể dùng pseudo-class: document.querySelector('#todoList li:first-child');

// 6. Chọn TẤT CẢ <a> bên trong <nav>
document.querySelectorAll('nav a');
