const api = {
    baseURL: "https://jsonplaceholder.typicode.com",

    async request(endpoint, options = {}) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, options);
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
            return await response.json();
        } catch (error) {
            throw error;
        }
    },

    async getUsers() {
        return this.request("/users");
    },
    async getUser(id) {
        return this.request(`/users/${id}`);
    },
    async createUser(data) {
        return this.request("/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });
    },
    async updateUser(id, data) {
        return this.request(`/users/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });
    },
    async deleteUser(id) {
        return this.request(`/users/${id}`, { method: "DELETE" });
    }
};

const ui = {
    tbody: document.getElementById("userTableBody"),
    skeleton: document.getElementById("skeletonLoader"),
    toastContainer: document.getElementById("toastContainer"),

    renderUsers(users) {
        this.tbody.innerHTML = "";
        if (users.length === 0) {
            this.tbody.innerHTML = `<tr><td colspan="5" style="text-align:center">Không tìm thấy user nào</td></tr>`;
            return;
        }
        users.forEach(user => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.company?.name || user.company}</td>
                <td>
                    <button class="btn-edit" data-id="${user.id}">Edit</button>
                    <button class="btn-delete" data-id="${user.id}">Delete</button>
                </td>
            `;
            this.tbody.appendChild(tr);
        });
    },

    showLoading() {
        this.tbody.innerHTML = "";
        this.skeleton.innerHTML = Array(5).fill('<div class="skeleton-row"></div>').join('');
        this.skeleton.classList.remove("hidden");
    },

    hideLoading() {
        this.skeleton.classList.add("hidden");
    },

    showToast(message, type = "success") {
        const toast = document.createElement("div");
        toast.className = `toast ${type}`;
        toast.textContent = message;
        this.toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.add("fade-out");
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    showSuccess(message) {
        this.showToast(message, "success");
    },

    showError(message) {
        this.showToast(message, "error");
    }
};

let usersList = [];
let isEditing = false;

const form = document.getElementById("userForm");
const userIdInput = document.getElementById("userId");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const companyInput = document.getElementById("company");
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
const searchInput = document.getElementById("searchInput");

async function init() {
    ui.showLoading();
    try {
        usersList = await api.getUsers();
        ui.renderUsers(usersList);
    } catch (error) {
        ui.showError("Không thể tải danh sách người dùng.");
    } finally {
        ui.hideLoading();
    }
}

function resetForm() {
    form.reset();
    userIdInput.value = "";
    isEditing = false;
    formTitle.textContent = "Thêm User Mới";
    submitBtn.textContent = "Lưu User";
    cancelBtn.classList.add("hidden");
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        company: { name: companyInput.value }
    };

    try {
        if (isEditing) {
            const id = Number(userIdInput.value);
            await api.updateUser(id, userData);

            const index = usersList.findIndex(u => u.id === id);
            if (index !== -1) {
                usersList[index] = { ...usersList[index], ...userData };
            }
            ui.showSuccess("Cập nhật thành công!");
        } else {
            const newUser = await api.createUser(userData);
            newUser.id = Date.now();
            usersList.unshift(newUser);
            ui.showSuccess("Thêm user thành công!");
        }

        resetForm();
        triggerSearch();
    } catch (error) {
        ui.showError("Có lỗi xảy ra, vui lòng thử lại.");
    }
});

cancelBtn.addEventListener("click", resetForm);

ui.tbody.addEventListener("click", async (e) => {
    if (e.target.classList.contains("btn-delete")) {
        const id = Number(e.target.dataset.id);
        if (confirm("Bạn có chắc chắn muốn xóa user này?")) {
            try {
                await api.deleteUser(id);
                usersList = usersList.filter(u => u.id !== id);
                triggerSearch();
                ui.showSuccess("Đã xóa user!");
            } catch (error) {
                ui.showError("Lỗi khi xóa user.");
            }
        }
    }

    if (e.target.classList.contains("btn-edit")) {
        const id = Number(e.target.dataset.id);
        const user = usersList.find(u => u.id === id);
        if (user) {
            isEditing = true;
            userIdInput.value = user.id;
            nameInput.value = user.name;
            emailInput.value = user.email;
            phoneInput.value = user.phone;
            companyInput.value = user.company?.name || user.company;

            formTitle.textContent = "Cập nhật User";
            submitBtn.textContent = "Cập nhật";
            cancelBtn.classList.remove("hidden");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
});

function triggerSearch() {
    const keyword = searchInput.value.toLowerCase();
    const filtered = usersList.filter(u =>
        u.name.toLowerCase().includes(keyword) ||
        u.email.toLowerCase().includes(keyword)
    );
    ui.renderUsers(filtered);
}

searchInput.addEventListener("input", triggerSearch);

init();