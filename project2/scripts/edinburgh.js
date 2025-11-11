// Edinburgh 图片数据
const images = [
    {
        url: 'image/edinburgh.jpg',
        caption: 'Princes Street, 2025',
        text: 'Princes Street is Edinburgh’s main shopping street, known for its beautiful views of Edinburgh Castle and the Old Town. Lined with shops, cafés, and the Scott Monument, it’s a lively and scenic heart of the city.'
    },
    {
        url: 'image/edinburgh3.jpg',
        caption: 'Arthur\'s Seat, 2025',
        text: 'Arthur\'s Seat offers a natural escape within the city. The ancient volcano provides panoramic views of Edinburgh and beyond. Climbing its slopes feels like stepping into another world, where nature and urban life converge.'
    },
    {
        url: 'image/edinburgh2.jpg',
        caption: 'Arthur\'s Seat, 2025',
        text: 'Arthur\'s Seat offers a natural escape within the city. The ancient volcano provides panoramic views of Edinburgh and beyond. Climbing its slopes feels like stepping into another world, where nature and urban life converge.'
    },
    {
        url: 'image/edinburgh1.jpg',
        caption: 'Street Shot, 2025',
        text: ''
    },
    {
        url: 'image/edinburgh4.jpg',
        caption: 'Street Shot, 2025',
        text: ''
    },
    {
        url: 'image/edinburgh5.jpg',
        caption: 'Street Shot, 2025',
        text: ''
    },
    
];

// 使用共享函数
function openModal(index) {
    gallery.openModal(index, images);
}

function shuffleGallery() {
    gallery.shuffleGallery('fade-in-delay');
}

// 视差效果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        if (!item.matches(':hover')) {
            const rate = scrolled * 0.0005 * (index % 2 === 0 ? 1 : -1);
            item.style.transform = `translateY(${rate}px)`;
        }
    });
}, { passive: true });
