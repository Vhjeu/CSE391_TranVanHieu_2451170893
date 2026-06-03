

function tinhHoaDon(danhSachMon, coTip = true) {

    let tongTien = 0;


    for (let i = 0; i < danhSachMon.length; i++) {
        tongTien += danhSachMon[i].gia * danhSachMon[i].soLuong;
    }

    // Tính phần trăm giảm giá theo tổng tiền
    let phanTramGiam = 0;
    if (tongTien > 1000000) {
        phanTramGiam = 15;
    } else if (tongTien > 500000) {
        phanTramGiam = 10;
    }


    const homNay = new Date().getDay();
    if (homNay === 3) {
        phanTramGiam += 5;
    }


    const tienGiamGia = tongTien * (phanTramGiam / 100);
    const tienSauGiam = tongTien - tienGiamGia;

    // VAT tính trên giá đã giảm, Tip tính trên giá gốc (theo chuẩn thông thường)
    const tienVAT = tienSauGiam * 0.08;
    const phanTramTip = coTip ? 5 : 0;
    const tienTip = tongTien * (phanTramTip / 100);

    const thanhToan = tienSauGiam + tienVAT + tienTip;

    // 3. Các hàm Hỗ trợ định dạng (Formatter)
    const formatTien = (soTien) => soTien.toLocaleString('vi-VN') + 'đ';
    const formatK = (soTien) => (soTien / 1000) + 'k';

    const taoDong = (trai, phai = "") => {
        const khoangTrang = 36 - trai.length - phai.length;
        const padding = khoangTrang > 0 ? " ".repeat(khoangTrang) : " ";
        return `║ ${trai}${padding}${phai} ║`;
    };

    // 4. In Hóa Đơn
    console.log("╔══════════════════════════════════════╗");
    console.log("║           HÓA ĐƠN NHÀ HÀNG           ║");
    console.log("╠══════════════════════════════════════╣");

    danhSachMon.forEach((mon, index) => {
        // Căn lề từng thành phần của món ăn
        const ten = `${index + 1}. ${mon.ten}`.padEnd(16, ' ');
        const sl = `x${mon.soLuong}`.padEnd(6, ' ');
        const gia = `@${formatK(mon.gia)}`.padEnd(7, ' ');
        const tongMon = `= ${formatK(mon.gia * mon.soLuong)}`;

        console.log(`║ ${ten}${sl}${gia}${tongMon.padStart(7, ' ')} ║`);
    });

    console.log("╠══════════════════════════════════════╣");
    console.log(taoDong("Tổng cộng:", formatTien(tongTien)));
    console.log(taoDong(`Giảm giá (${phanTramGiam}%):`, formatTien(tienGiamGia)));
    console.log(taoDong("VAT (8%):", formatTien(tienVAT)));
    console.log(taoDong(`Tip (${phanTramTip}%):`, formatTien(tienTip)));
    console.log("╠══════════════════════════════════════╣");
    console.log(taoDong("THANH TOÁN:", formatTien(thanhToan)));
    console.log("╚══════════════════════════════════════╝");
}

// ================= TEST ================= //
const order = [
    { ten: "Phở bò", gia: 65000, soLuong: 2 },
    { ten: "Trà đá", gia: 5000, soLuong: 3 },
    { ten: "Bún chả", gia: 55000, soLuong: 1 }
];

const orderVIP = [
    { ten: "Tôm hùm", gia: 800000, soLuong: 1 },
    { ten: "Rượu vang", gia: 350000, soLuong: 1 }
];

console.log("\n--- TEST 1: HÓA ĐƠN THƯỜNG ---");
tinhHoaDon(order, true);

console.log("\n--- TEST 2: HÓA ĐƠN VIP (> 1 Triệu + Hôm nay là Thứ 4) ---");
tinhHoaDon(orderVIP, false);