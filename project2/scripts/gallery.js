// 共享的画廊功能
const gallery = {
    openModal(index, images) {
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modal-image');
        const modalText = document.getElementById('modal-text');
        
        modalImage.src = images[index].url;
        modalText.innerHTML = `
            <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
                ${images[index].caption}
            </h3>
            <p>${images[index].text}</p>
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    closeModal() {
        const modal = document.getElementById('modal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    },

    toggleGrayscale() {
        document.querySelectorAll('.gallery-item img').forEach(img => {
            img.classList.toggle('grayscale');
        });
    },

    shuffleGallery(animationClass) {
        const galleryEl = document.getElementById('gallery');
        const items = Array.from(galleryEl.children);
        
        // 随机打乱
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }
        
        // 重新应用动画
        items.forEach((item, index) => {
            item.style.animationDelay = `${(index + 1) * 0.1}s`;
            if (animationClass) {
                item.classList.remove(animationClass);
                void item.offsetWidth;
                item.classList.add(animationClass);
            }
            galleryEl.appendChild(item);
        });
    }
};

// 全局函数，供HTML调用
function closeModal() {
    gallery.closeModal();
}

function toggleGrayscale() {
    gallery.toggleGrayscale();
}

// ESC键关闭模态窗口
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        gallery.closeModal();
    }
});

