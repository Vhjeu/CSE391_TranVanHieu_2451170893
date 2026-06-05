const galleryContainer = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const playIndicator = document.getElementById('playIndicator');
const cmdPalette = document.getElementById('commandPalette');
const cmdInput = document.getElementById('cmdInput');
const cmdList = document.getElementById('cmdList');

const images = [
    "https://placehold.co/600x400/1abc9c/white?text=Anh+1",
    "https://placehold.co/600x400/2ecc71/white?text=Anh+2",
    "https://placehold.co/600x400/3498db/white?text=Anh+3",
    "https://placehold.co/600x400/9b59b6/white?text=Anh+4",
    "https://placehold.co/600x400/34495e/white?text=Anh+5",
    "https://placehold.co/600x400/f1c40f/white?text=Anh+6",
    "https://placehold.co/600x400/e67e22/white?text=Anh+7",
    "https://placehold.co/600x400/e74c3c/white?text=Anh+8",
    "https://placehold.co/600x400/95a5a6/white?text=Anh+9"
];

const commands = [
    { id: 'c1', label: 'Tải lại trang', action: () => location.reload() },
    { id: 'c2', label: 'In trang', action: () => window.print() },
    { id: 'c3', label: 'Đóng bảng lệnh', action: closePalette },
    { id: 'c4', label: 'Mở ảnh ngẫu nhiên', action: () => openLightbox(Math.floor(Math.random() * images.length)) },
    { id: 'c5', label: 'Cảnh báo hệ thống', action: () => alert('Lệnh đã được thực thi thành công!') }
];

let currentIndex = 0;
let slideshowInterval = null;
let isPlaying = false;
let filteredCmds = [];
let selectedCmdIndex = 0;

images.forEach((src, index) => {
    const btn = document.createElement('button');
    btn.className = 'thumb-btn';
    btn.setAttribute('aria-label', `Mở ảnh số ${index + 1}`);
    btn.dataset.index = index;

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Ảnh thu nhỏ ${index + 1}`;

    btn.appendChild(img);
    btn.addEventListener('click', () => openLightbox(index));
    galleryContainer.appendChild(btn);
});

function openLightbox(index) {
    if (index < 0 || index >= images.length) return;
    currentIndex = index;
    lightboxImg.src = images[currentIndex];
    lightboxImg.alt = `Ảnh chi tiết số ${currentIndex + 1}`;
    lightbox.classList.remove('hidden');
    document.getElementById('closeLightbox').focus();
}

function closeLightbox() {
    lightbox.classList.add('hidden');
    stopSlideshow();
    const thumbs = document.querySelectorAll('.thumb-btn');
    if (thumbs[currentIndex]) thumbs[currentIndex].focus();
}

function nextImage() {
    openLightbox((currentIndex + 1) % images.length);
}

function prevImage() {
    openLightbox((currentIndex - 1 + images.length) % images.length);
}

function toggleSlideshow() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        playIndicator.classList.remove('hidden');
        slideshowInterval = setInterval(nextImage, 2000);
    } else {
        stopSlideshow();
    }
}

function stopSlideshow() {
    isPlaying = false;
    playIndicator.classList.add('hidden');
    clearInterval(slideshowInterval);
}

document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
document.getElementById('nextBtn').addEventListener('click', nextImage);
document.getElementById('prevBtn').addEventListener('click', prevImage);

function openPalette() {
    cmdPalette.classList.remove('hidden');
    cmdInput.value = '';
    renderCommands(commands);
    cmdInput.focus();
}

function closePalette() {
    cmdPalette.classList.add('hidden');
    document.body.focus();
}

function renderCommands(list) {
    filteredCmds = list;
    cmdList.innerHTML = '';
    selectedCmdIndex = 0;

    if (list.length === 0) {
        const li = document.createElement('li');
        li.className = 'cmd-item';
        li.textContent = 'Không tìm thấy lệnh';
        li.setAttribute('role', 'option');
        li.setAttribute('aria-selected', 'false');
        cmdList.appendChild(li);
        return;
    }

    list.forEach((cmd, idx) => {
        const li = document.createElement('li');
        li.className = `cmd-item ${idx === selectedCmdIndex ? 'active' : ''}`;
        li.textContent = cmd.label;
        li.setAttribute('role', 'option');
        li.setAttribute('aria-selected', idx === selectedCmdIndex);

        li.addEventListener('click', () => {
            closePalette();
            cmd.action();
        });
        li.addEventListener('mouseenter', () => {
            selectedCmdIndex = idx;
            updateCommandSelection();
        });
        cmdList.appendChild(li);
    });
}

function updateCommandSelection() {
    const items = cmdList.querySelectorAll('.cmd-item');
    items.forEach((item, idx) => {
        if (idx === selectedCmdIndex) {
            item.classList.add('active');
            item.setAttribute('aria-selected', 'true');
            item.scrollIntoView({ block: 'nearest' });
        } else {
            item.classList.remove('active');
            item.setAttribute('aria-selected', 'false');
        }
    });
}

cmdInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const results = commands.filter(c => c.label.toLowerCase().includes(keyword));
    renderCommands(results);
});

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        openPalette();
        return;
    }

    if (!cmdPalette.classList.contains('hidden')) {
        if (e.key === 'Escape') {
            closePalette();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (selectedCmdIndex < filteredCmds.length - 1) {
                selectedCmdIndex++;
                updateCommandSelection();
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (selectedCmdIndex > 0) {
                selectedCmdIndex--;
                updateCommandSelection();
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (filteredCmds.length > 0) {
                closePalette();
                filteredCmds[selectedCmdIndex].action();
            }
        }
        return;
    }

    if (!lightbox.classList.contains('hidden')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.code === 'Space') {
            e.preventDefault();
            toggleSlideshow();
        } else if (e.key >= '1' && e.key <= '9') {
            const idx = parseInt(e.key) - 1;
            if (idx < images.length) {
                openLightbox(idx);
            }
        }
    }
});