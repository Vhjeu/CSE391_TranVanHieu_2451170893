
const targetNumber = Math.floor(Math.random() * 100) + 1;
const maxAttempts = 7;

let attempts = 0;
let guessedNumbers = [];
let isWin = false;

alert("Chào mừng đến với trò chơi Đoán Số!\nMáy đã chọn ngẫu nhiên một số từ 1 đến 100.\nBạn có tối đa 7 lần đoán để tìm ra nó.");

while (attempts < maxAttempts) {
    // Lấy input từ người dùng
    let userInput = prompt(`Lần đoán thứ ${attempts + 1}/${maxAttempts}.\nNhập một số từ 1 đến 100 (hoặc bấm Cancel để thoát):`);

    if (userInput === null) {
        alert("Bạn đã thoát trò chơi!");
        break;
    }

    let guess = Number(userInput);

    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
        alert("⚠️ Không hợp lệ! Vui lòng chỉ nhập SỐ NGUYÊN từ 1 đến 100.");
        continue;
    }

    if (guessedNumbers.includes(guess)) {
        alert(`⚠️ Bạn đã đoán số ${guess} này rồi! Hãy suy luận và thử một số khác.`);
        continue;
    }

    attempts++;
    guessedNumbers.push(guess);

    if (guess === targetNumber) {
        isWin = true;
        alert(`🎉 ĐÚNG RỒI! 🎉\nBạn đã tìm ra số bí mật là ${targetNumber}.\nBạn đoán đúng sau ${attempts} lần!`);
        break;
    } else if (guess < targetNumber) {
        alert(`⬆️ Số bí mật CAO HƠN ${guess}.\n(Bạn còn ${maxAttempts - attempts} lần)`);
    } else {
        alert(`⬇️ Số bí mật THẤP HƠN ${guess}.\n(Bạn còn ${maxAttempts - attempts} lần)`);
    }
}

if (!isWin && attempts === maxAttempts) {
    alert(`😭 Rất tiếc, bạn đã hết ${maxAttempts} lượt đoán!\nĐáp án chính xác là: ${targetNumber}\nNhấn F5 để chơi lại nhé!`);
}