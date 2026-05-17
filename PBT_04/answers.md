Câu A1: lấy nội dung từ chương 12
- static: chiếm chỗ trong flow, Theo luồng tài liệu mặc định (Normal flow) của HTML, có cuộn theo trang, Trạng thái mặc định của mọi phần tử.
- relative,Có (Giữ nguyên không gian ban đầu),Vị trí gốc ban đầu của chính nó,Có,Dịch chuyển nhẹ phần tử; Tạo gốc tọa độ cho phần tử con absolute.
- absolute,Không (Bị rút khỏi flow),Phần tử tổ tiên gần nhất có position khác static,Có (Cuộn theo phần tử cha chứa nó),"Dropdown menu, Tooltips, Nút đóng (X) ở góc thẻ, Đặt icon đè lên ảnh."
- fixed,Không (Bị rút khỏi flow),Viewport (Khung nhìn của trình duyệt),Không (Ghim chết trên màn hình),"Navbar nổi (Sticky/Fixed header), Nút ""Back to Top"", Nút Chat ở góc dưới."
- sticky,Có,Lai giữa relative và fixed. Tham chiếu theo viewport và phần tử cha chứa nó.,"Có, nhưng sẽ ""ghim"" lại khi chạm ngưỡng top/bottom (cho đến khi hết phần tử cha).","Tiêu đề danh sách (Alphabet), Tiêu đề cột của Table, Cột Sidebar ghim khi cuộn."

- absolute tham chiếu body khi:
+ Khi tất cả các phần tử cha, ông, tổ tiên bao bọc bên ngoài nó đều mang thuộc tính position: static (mặc định). Lúc này, nó không tìm thấy hệ tọa độ nào để nương tựa, nên nó sẽ lấy toàn bộ trang web (document) làm gốc tọa độ.

- tham chiếu parent khi:
+ Khi phần tử cha trực tiếp (hoặc bất kỳ phần tử tổ tiên nào bọc ngoài nó) được thiết lập một thuộc tính position khác static (thường dùng nhất là position: relative;).

- Giải thích khái niệm "Nearest Positioned Ancestor" (Tổ tiên được định vị gần nhất):
+ Trong cây DOM HTML, một phần tử có thể bị lồng trong rất nhiều thẻ cha (VD: div lồng trong section, section lồng trong main...).
+ Khi ông đặt một phần tử là position: absolute; và dùng top/left, trình duyệt sẽ chạy ngược từ phần tử đó ra ngoài (lên các thẻ cha, thẻ ông) để tìm.
+ Trình duyệt sẽ dừng lại ở phần tử đầu tiên nó gặp mà có thuộc tính position là relative, absolute, fixed, hoặc sticky. Phần tử đó chính là "Nearest Positioned Ancestor".
+ Gốc tọa độ (0,0) sẽ được đặt ở góc trên cùng bên trái của phần tử tổ tiên này, và phần tử absolute sẽ di chuyển dựa trên mốc tọa độ đó. Mọi phần tử cha nằm bên ngoài nữa sẽ bị bỏ qua.

_________________________________________________________________________________________
Câu A2:
Trường hợp 1: Flexbox chia đều
Dự đoán Bố cục: 1 hàng ngang duy nhất gồm 4 cột.
Giải thích: display: flex mặc định xếp các phần tử nằm ngang (row). Thuộc tính flex: 1 ép tất cả 4 items phải giãn ra hoặc co lại sao cho kích thước của chúng bằng nhau tuyệt đối, chia đều 100% chiều rộng của container.

Sơ đồ (Text Art):

Plaintext
+-------------------------------------------------------+
| [   Item 1   ] [   Item 2   ] [   Item 3   ] [   Item 4   ] |
+-------------------------------------------------------+
Trường hợp 2: Flexbox bẻ dòng (Wrap) với phần trăm
Dự đoán Bố cục: 3 hàng ngang, mỗi hàng có đúng 2 cột (items).
Giải thích: Mỗi item có width: 45% và margin: 2.5% (nghĩa là lề trái 2.5% + lề phải 2.5%). Tổng không gian 1 item chiếm là: 45 + 2.5 + 2.5 = 50%. Do đó, 2 items sẽ chiếm đúng 100% chiều ngang. Các items từ số 3 trở đi sẽ bị thuộc tính flex-wrap: wrap đẩy xuống dòng dưới. 6 items sẽ tạo thành lưới 2x3.

Sơ đồ (Text Art):

Plaintext
+-----------------------------------+
|  [     Item 1     ] [     Item 2     ]  |
|  [     Item 3     ] [     Item 4     ]  |
|  [     Item 5     ] [     Item 6     ]  |
+-----------------------------------+
Trường hợp 3: Flexbox căn lề không gian
Dự đoán Bố cục: 1 hàng ngang chứa 3 items. Item 1 dính sát mép trái, Item 3 dính sát mép phải, Item 2 nằm chính giữa. Tất cả được căn giữa theo chiều dọc.
Giải thích: justify-content: space-between đẩy phần tử đầu tiên và cuối cùng ra 2 mép, phần không gian thừa được chia đều vào giữa các phần tử. align-items: center giúp chúng thẳng hàng ngang theo trục dọc (nếu các item có chiều cao khác nhau).

Sơ đồ (Text Art):

Plaintext
+-------------------------------------------------------+
| [Item 1]                     [Item 2]                     [Item 3] |
+-------------------------------------------------------+
Trường hợp 4: Cấu trúc Grid kinh điển (Holy Grail thu nhỏ)
Dự đoán Bố cục: 1 hàng ngang gồm 3 cột (Sidebar trái - Nội dung chính - Sidebar phải). Có khoảng trống (gap) 20px giữa các cột.
Giải thích: Lưới được chia đích danh: cột 1 rộng cứng 200px, cột 3 rộng cứng 200px. Cột 2 mang giá trị 1fr (1 fraction) sẽ co giãn và ăn trọn toàn bộ không gian còn sót lại ở giữa.

Sơ đồ (Text Art):

Plaintext
+-------------------------------------------------------+
| [  200px  ]   [        1fr (co giãn)        ]   [  200px  ] |
+-------------------------------------------------------+
Trường hợp 5: Grid lặp lại dư phần tử
Dự đoán Bố cục: 3 hàng ngang. Hàng 1 có 3 cột, Hàng 2 có 3 cột. Hàng 3 chỉ có 1 cột (item số 7) nằm lẻ loi ở lề trái.
Giải thích: repeat(3, 1fr) tạo ra một lưới cứng gồm 3 cột có chiều rộng bằng nhau. Grid sẽ tự động đổ 7 items vào các cột này theo thứ tự từ trái sang phải, từ trên xuống dưới.

Hàng 1: Items 1, 2, 3.

Hàng 2: Items 4, 5, 6.

Hàng 3: Item 7 (nằm ở cột đầu tiên, 2 cột còn lại trống).

Sơ đồ (Text Art):

Plaintext
+-------------------------------------------------------+
| [   Item 1   ]   [   Item 2   ]   [   Item 3   ] |
| [   Item 4   ]   [   Item 5   ]   [   Item 6   ] |
| [   Item 7   ]   [   Trống    ]   [   Trống    ] |
+-------------------------------------------------------+

__________________________________________________________________________________________
Câu C1:
1. Navigation bar ngang (logo + menu + buttons)
Lựa chọn: Flexbox
Giải thích: Navbar là một bố cục 1 chiều (trải dài theo một hàng ngang). Flexbox cực kỳ mạnh mẽ trong việc căn chỉnh các phần tử trên cùng một hàng (align-items: center để căn giữa chiều dọc) và phân bổ không gian trống (justify-content: space-between để đẩy logo sang trái, menu ra giữa, nút sang phải).

2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
Lựa chọn: Grid
Giải thích: Đây là bố cục 2 chiều phức tạp (có cả hàng và cột). Chỉ với một dòng grid-template-columns: repeat(3, 1fr), Grid sẽ tự động chia 3 cột đều tăm tắp. Khi ảnh đổ về nhiều, Grid tự động tạo ra các hàng mới mà vẫn đảm bảo mọi ô ảnh thẳng hàng với nhau theo cả 2 trục (điều mà Flexbox phải dùng width/margin tính toán rất vất vả).

3. Layout blog: main content + sidebar
Lựa chọn: Grid (Có thể dùng Flexbox nhưng Grid tối ưu hơn)
Giải thích: Bố cục tổng thể của một trang web (Macro-layout) là thế mạnh tuyệt đối của Grid. Nó giúp ông kiểm soát không gian rất rõ ràng: grid-template-columns: 1fr 300px (Main content tự co giãn, Sidebar giữ cố định 300px). Nếu dùng Grid, code HTML của ông sẽ rất phẳng và sạch.

4. Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)
Lựa chọn: Grid * Giải thích: Tương tự như lưới Instagram, đây là việc chia không gian thành các cột tỷ lệ đều nhau. Dùng grid-template-columns: repeat(4, 1fr) kết hợp với gap sẽ giúp 4 cột hiển thị hoàn hảo. Khi xuống màn hình mobile, ông chỉ cần đổi lại thành repeat(2, 1fr) hoặc 1fr là nó tự động xếp lại cực mượt.

5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)
Lựa chọn: Flexbox
Giải thích: Card sản phẩm là một bố cục 1 chiều (theo chiều dọc từ trên xuống dưới). Sử dụng display: flex; flex-direction: column;. Ưu điểm tuyệt đối của Flexbox ở đây là thuộc tính margin-top: auto gán cho nút bấm, nó sẽ tự động ăn trọn không gian trống còn lại và đẩy cái nút dính chặt xuống đáy card, bất chấp tên sản phẩm phía trên dài hay ngắn.