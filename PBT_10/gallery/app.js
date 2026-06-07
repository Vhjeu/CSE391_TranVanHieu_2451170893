const gallery = document.getElementById('gallery');
const loadTrigger = document.getElementById('load-trigger');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');

let currentPage = 1;
let isLoading = false;

const lazyObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.onload = () => img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
}, { rootMargin: "0px 0px 200px 0px" });

const scrollObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !isLoading) {
        loadMorePhotos();
    }
}, { rootMargin: "0px 0px 100px 0px" });

async function loadMorePhotos() {
    isLoading = true;
    loadTrigger.style.visibility = 'visible';

    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=20`);
        const data = await response.json();

        data.forEach(photo => {
            const item = document.createElement('div');
            item.className = 'gallery-item';

            const img = document.createElement('img');
            img.dataset.src = `https://picsum.photos/id/${photo.id}/600/400`;
            img.alt = photo.author;

            lazyObserver.observe(img);

            item.addEventListener('click', () => {
                lightbox.classList.remove('hidden');
                lightboxImg.src = `https://picsum.photos/id/${photo.id}/1200/800`;
            });

            item.appendChild(img);
            gallery.appendChild(item);
        });

        currentPage++;
    } catch (error) {
        console.error(error);
    } finally {
        isLoading = false;
    }
}

closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    setTimeout(() => lightboxImg.src = '', 300);
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.add('hidden');
        setTimeout(() => lightboxImg.src = '', 300);
    }
});

scrollObserver.observe(loadTrigger);