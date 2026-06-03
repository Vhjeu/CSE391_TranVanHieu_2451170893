
function createCart() {
    // === Private data ===

    let items = [];
    let currentDiscount = null;

    return {
        // 1. Thêm sản phẩm (nếu đã có → tăng quantity)
        addItem(product, quantity = 1) {
            const existingItem = items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                // Dùng spread operator để copy data của product và thêm trường quantity
                items.push({ ...product, quantity });
            }
        },

        // 2. Xóa sản phẩm theo id
        removeItem(productId) {
            items = items.filter(item => item.id !== productId);
        },

        // 3. Cập nhật số lượng
        updateQuantity(productId, newQuantity) {
            if (newQuantity <= 0) {
                this.removeItem(productId);
                return;
            }
            const item = items.find(item => item.id === productId);
            if (item) {
                item.quantity = newQuantity;
            }
        },

        // 4. Tính tổng tiền (Có áp dụng mã giảm giá)
        getTotal() {
            let subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            if (currentDiscount === "SALE10") return subtotal * 0.9;
            if (currentDiscount === "SALE20") return subtotal * 0.8;
            if (currentDiscount === "FREESHIP") return Math.max(0, subtotal - 30000);

            return subtotal;
        },

        // 5. Áp dụng mã giảm giá
        applyDiscount(code) {
            const validCodes = ["SALE10", "SALE20", "FREESHIP"];
            if (validCodes.includes(code)) {
                currentDiscount = code;
            } else {
                console.log("⚠️ Mã giảm giá không hợp lệ!");
            }
        },

        // 6. In giỏ hàng dạng bảng
        printCart() {
            if (items.length === 0) {
                console.log("Giỏ hàng của bạn đang trống!");
                return;
            }

            console.log("┌──────────────────────────────────────────────────────────┐");
            console.log("│ # │ Sản phẩm       │ SL │ Đơn giá      │ Tổng            │");

            items.forEach((item, index) => {
                // Căn lề để bảng hiển thị vuông vắn
                const stt = String(index + 1).padEnd(1, ' ');
                const name = item.name.padEnd(14, ' ');
                const sl = String(item.quantity).padStart(2, ' ');
                const price = item.price.toLocaleString('vi-VN').padStart(12, ' ');
                const total = (item.price * item.quantity).toLocaleString('vi-VN').padStart(15, ' ');

                console.log(`│ ${stt} │ ${name} │ ${sl} │ ${price} │ ${total} │`);
            });

            console.log("├──────────────────────────────────────────────────────────┤");

            const finalTotal = this.getTotal();
            const totalStr = (finalTotal.toLocaleString('vi-VN') + "đ").padStart(44, ' ');
            console.log(`│ Tổng cộng: ${totalStr} │`);

            // In chú thích nếu có mã giảm giá đang kích hoạt
            if (currentDiscount) {
                console.log(`│ (Đã áp dụng mã: ${currentDiscount.padEnd(41, ' ')}) │`);
            }

            console.log("└──────────────────────────────────────────────────────────┘");
        },

        // 7. Lấy tổng số sản phẩm
        getItemCount() {
            return items.reduce((count, item) => count + item.quantity, 0);
        },

        // 8. Xóa toàn bộ giỏ
        clearCart() {
            items = [];
            currentDiscount = null;
        }
    };
}


// ==========================================
// KỊCH BẢN TEST CỦA BẠN
// ==========================================

const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); // Tăng lên 2

cart.printCart();

cart.applyDiscount("SALE10");
console.log("\n--- SAU KHI ÁP DỤNG SALE10 ---");
cart.printCart();

console.log("\nSố SP hiện tại:", cart.getItemCount()); // → 4

cart.removeItem(3);
console.log("Số SP sau khi xóa AirPods (id 3):", cart.getItemCount()); // → 2