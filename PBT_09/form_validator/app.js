const form = document.getElementById('registerForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirmPassword');
const phoneInput = document.getElementById('phone');
const submitBtn = document.getElementById('submitBtn');

const nameIcon = document.getElementById('nameIcon');
const emailError = document.getElementById('emailError');
const confirmError = document.getElementById('confirmError');
const phoneError = document.getElementById('phoneError');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');

const modalOverlay = document.getElementById('successModal');
const modalData = document.getElementById('modalData');
const closeModalBtn = document.getElementById('closeModal');

const validState = {
    name: false,
    email: false,
    password: false,
    confirm: false,
    phone: false
};

const checkFormValidity = () => {
    const isAllValid = Object.values(validState).every(val => val === true);
    submitBtn.disabled = !isAllValid;
};

nameInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (val.length >= 2 && val.length <= 50) {
        nameIcon.textContent = '✅';
        validState.name = true;
    } else {
        nameIcon.textContent = val.length > 0 ? '❌' : '';
        validState.name = false;
    }
    checkFormValidity();
});

emailInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (val.length === 0) {
        emailError.textContent = '';
        validState.email = false;
    } else if (!emailRegex.test(val)) {
        emailError.textContent = 'Email không hợp lệ';
        validState.email = false;
    } else {
        emailError.textContent = '';
        validState.email = true;
    }
    checkFormValidity();
});

passwordInput.addEventListener('input', (e) => {
    const val = e.target.value;
    strengthBar.className = 'strength-bar';
    strengthText.textContent = '';
    strengthText.style.color = '';
    validState.password = false;

    if (val.length > 0) {
        const hasLetterAndNumber = /(?=.*[a-zA-Z])(?=.*\d)/.test(val);
        const isStrong = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/.test(val);

        if (val.length >= 8 && isStrong) {
            strengthBar.classList.add('strong');
            strengthText.textContent = 'Mạnh';
            strengthText.style.color = '#28a745';
            validState.password = true;
        } else if (val.length >= 8 && hasLetterAndNumber) {
            strengthBar.classList.add('medium');
            strengthText.textContent = 'Trung bình';
            strengthText.style.color = '#ffc107';
            validState.password = true;
        } else {
            strengthBar.classList.add('weak');
            strengthText.textContent = 'Yếu';
            strengthText.style.color = '#dc3545';
        }
    }

    if (confirmInput.value.length > 0) {
        confirmInput.dispatchEvent(new Event('input'));
    }
    checkFormValidity();
});

confirmInput.addEventListener('input', (e) => {
    const val = e.target.value;
    if (val.length === 0) {
        confirmError.textContent = '';
        validState.confirm = false;
    } else if (val !== passwordInput.value) {
        confirmError.textContent = 'Mật khẩu không khớp';
        validState.confirm = false;
    } else {
        confirmError.textContent = '';
        validState.confirm = true;
    }
    checkFormValidity();
});

phoneInput.addEventListener('input', (e) => {
    let raw = e.target.value.replace(/\D/g, '').substring(0, 10);
    let formatted = raw;

    if (raw.length > 7) {
        formatted = raw.replace(/^(\d{4})(\d{3})(\d{1,3})$/, '$1-$2-$3');
    } else if (raw.length > 4) {
        formatted = raw.replace(/^(\d{4})(\d{1,3})$/, '$1-$2');
    }

    e.target.value = formatted;

    if (raw.length === 10) {
        phoneError.textContent = '';
        validState.phone = true;
    } else {
        phoneError.textContent = raw.length > 0 ? 'Số điện thoại phải đủ 10 số' : '';
        validState.phone = false;
    }
    checkFormValidity();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    modalData.innerHTML = `
        <strong>Họ tên:</strong> ${nameInput.value.trim()}<br>
        <strong>Email:</strong> ${emailInput.value.trim()}<br>
        <strong>Số điện thoại:</strong> ${phoneInput.value.trim()}
    `;
    modalOverlay.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    form.reset();
    Object.keys(validState).forEach(key => validState[key] = false);
    nameIcon.textContent = '';
    strengthBar.className = 'strength-bar';
    strengthText.textContent = '';
    checkFormValidity();
});