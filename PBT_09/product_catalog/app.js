const products = [
    { id: 1, name: "iPhone 16 Pro", price: 28990000, category: "phone", image: "https://placehold.co/200x200?text=iPhone+16", rating: 4.8, inStock: true },
    { id: 2, name: "Samsung S24 Ultra", price: 31990000, category: "phone", image: "https://placehold.co/200x200?text=S24+Ultra", rating: 4.7, inStock: true },
    { id: 3, name: "Pixel 9 Pro", price: 21990000, category: "phone", image: "https://placehold.co/200x200?text=Pixel+9", rating: 4.5, inStock: false },
    { id: 4, name: "MacBook Pro M3", price: 45990000, category: "laptop", image: "https://placehold.co/200x200?text=MacBook", rating: 4.9, inStock: true },
    { id: 5, name: "Dell XPS 15", price: 35990000, category: "laptop", image: "https://placehold.co/200x200?text=XPS+15", rating: 4.6, inStock: true },
    { id: 6, name: "ThinkPad X1", price: 32990000, category: "laptop", image: "https://placehold.co/200x200?text=ThinkPad", rating: 4.5, inStock: true },
    { id: 7, name: "iPad Air M2", price: 16990000, category: "tablet", image: "https://placehold.co/200x200?text=iPad+Air", rating: 4.8, inStock: true },
    { id: 8, name: "Galaxy Tab S9", price: 19990000, category: "tablet", image: "https://placehold.co/200x200?text=Tab+S9", rating: 4.6, inStock: true },
    { id: 9, name: "Xiaomi Pad 6", price: 7990000, category: "tablet", image: "https://placehold.co/200x200?text=Pad+6", rating: 4.3, inStock: true },
    { id: 10, name: "AirPods Pro 2", price: 5990000, category: "accessory", image: "https://placehold.co/200x200?text=AirPods", rating: 4.7, inStock: true },
    { id: 11, name: "Sony WH-1000XM5", price: 8490000, category: "accessory", image: "https://placehold.co/200x200?text=Sony+XM5", rating: 4.8, inStock: true },
    { id: 12, name: "Magic Mouse", price: 2490000, category: "accessory", image: "https://placehold.co/200x200?text=Mouse", rating: 4.1, inStock: false },
];

let cartCount = 0;
let searchQuery = "";
let currentCategory = "all";
let currentSort = "default";

const app = document.getElementById('app');

app.innerHTML = `
    <header class="header">
        <h2>TechStore JS</h2>
        <div class="header-actions">
            <button id="themeToggle" class="btn-toggle">🌙 Dark Mode</button>
            <div class="cart-icon">
                🛒 <span id="cartBadge" class="badge">0</span>
            </div>
        </div>
    </header>
    
    <div class="controls">
        <input type="text" id="searchInput" placeholder="Tìm kiếm sản phẩm...">
        
        <div class="filter-group" id="categoryFilters">
            <button class="btn-filter active" data-cat="all">Tất cả</button>
            <button class="btn-filter" data-cat="phone">Điện thoại</button>
            <button class="btn-filter" data-cat="laptop">Laptop</button>
            <button class="btn-filter" data-cat="tablet">Tablet</button>
            <button class="btn-filter" data-cat="accessory">Phụ kiện</button>
        </div>

        <select id="sortSelect">
            <option value="default">Sắp xếp mặc định</option>
            <option value="price-asc">Giá: Thấp đến Cao</option>
            <option value="price-desc">Giá: Cao đến Thấp</option>
            <option value="name-asc">Tên: A - Z</option>
            <option value="rating-desc">Đánh giá cao nhất</option>
        </select>
    </div>

    <div id="productGrid" class="grid"></div>
`;

const productGrid = document.getElementById('productGrid');
const cartBadge = document.getElementById('cartBadge');

function searchProducts(query, currentList) {
    return currentList.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
}

function filterByCategory(category, currentList) {
    if (category === 'all') return currentList;
    return currentList.filter(p => p.category === category);
}

function sortProducts(sortType, currentList) {
    const listCopy = [...currentList];
    switch (sortType) {
        case 'price-asc': return listCopy.sort((a, b) => a.price - b.price);
        case 'price-desc': return listCopy.sort((a, b) => b.price - a.price);
        case 'name-asc': return listCopy.sort((a, b) => a.name.localeCompare(b.name));
        case 'rating-desc': return listCopy.sort((a, b) => b.rating - a.rating);
        default: return listCopy;
    }
}

function updateView() {
    let result = products;
    result = filterByCategory(currentCategory, result);
    result = searchProducts(searchQuery, result);
    result = sortProducts(currentSort, result);

    renderProducts(result);
}

function renderProducts(productList) {
    productGrid.innerHTML = '';

    if (productList.length === 0) {
        productGrid.innerHTML = '<h3 style="grid-column: 1/-1; text-align: center; color: #888;">Không tìm thấy sản phẩm!</h3>';
        return;
    }

    productList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const title = document.createElement('h3');
        title.textContent = product.name;

        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = product.price.toLocaleString('vi-VN') + 'đ';

        const rating = document.createElement('p');
        rating.textContent = `⭐ ${product.rating} | ${product.inStock ? 'Còn hàng' : 'Hết hàng'}`;
        rating.style.marginBottom = '15px';
        rating.style.color = '#666';

        const btnAdd = document.createElement('button');
        btnAdd.className = 'btn-add';
        btnAdd.textContent = 'Thêm vào giỏ';
        if (!product.inStock) {
            btnAdd.disabled = true;
            btnAdd.style.background = '#ccc';
            btnAdd.textContent = 'Tạm hết';
        }

        btnAdd.addEventListener('click', (e) => {
            e.stopPropagation();
            cartCount++;
            cartBadge.textContent = cartCount;
            cartBadge.style.transform = 'scale(1.5)';
            setTimeout(() => cartBadge.style.transform = 'scale(1)', 200);
        });

        card.addEventListener('click', () => showModal(product));

        card.append(img, title, price, rating, btnAdd);
        productGrid.appendChild(card);
    });
}

function showModal(product) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    const content = document.createElement('div');
    content.className = 'modal-content';

    content.innerHTML = `
        <button class="btn-close">×</button>
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p class="price">${product.price.toLocaleString('vi-VN')}đ</p>
        <p>Danh mục: ${product.category.toUpperCase()}</p>
        <p>Đánh giá: ${product.rating} ⭐</p>
        <p style="margin-top:20px; color:#666;">Đây là nội dung mô tả chi tiết ảo của sản phẩm được load động qua JavaScript DOM!</p>
    `;

    overlay.appendChild(content);
    document.body.appendChild(overlay);

    const closeModal = () => document.body.removeChild(overlay);

    content.querySelector('.btn-close').addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    updateView();
});

document.getElementById('categoryFilters').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-filter')) {
        document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        currentCategory = e.target.dataset.cat;
        updateView();
    }
});

document.getElementById('sortSelect').addEventListener('change', (e) => {
    currentSort = e.target.value;
    updateView();
});

document.getElementById('themeToggle').addEventListener('click', (e) => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    e.target.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

updateView();