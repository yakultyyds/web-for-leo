// Dublin 图片数据
const images = [
    {
        url: 'image/dublin.jpg',
        caption: 'Street Shot, 2025',
        text: ''
    },
    {
        url: 'image/dublin1.jpg',
        caption: 'Street Shot, 2025',
        text: ''
    },
    {
        url: 'image/dublin2.jpg',
        caption: 'Street Shot, 2025',
        text: ''
    },
    {
        url: 'image/dublin3.jpg',
        caption: 'Street Shot, 2025',
        text: ''
    },
    {
        url: 'image/dublin4.jpg',
        caption: 'American Embassy, 2025',
        text: ''
    },
    {
        url: 'image/dublin5.jpg',
        caption: 'Street Shot, 2025',
        text: ''
    },
    {
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=1200&fit=crop',
        caption: 'Grafton Street, 2024',
        text: 'Grafton Street is Dublin\'s premier shopping thoroughfare, where street performers add music to the urban soundtrack. The pedestrianized street creates a vibrant public space where commerce, culture, and community converge in the city center.'
    },
    {
        url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&h=1200&fit=crop',
        caption: 'Christ Church Cathedral, 2024',
        text: 'Christ Church Cathedral stands as one of Dublin\'s oldest buildings, its Gothic architecture reaching toward the sky. The cathedral has been a place of worship for over a thousand years, its stones holding the prayers and history of generations.'
    },
    {
        url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=1200&fit=crop',
        caption: 'Phoenix Park, 2024',
        text: 'Phoenix Park is one of Europe\'s largest urban parks, a vast green space where deer roam freely. The park offers escape from the city\'s density, with wide avenues, wooded areas, and open meadows that invite exploration and contemplation.'
    }
];

// 使用共享函数
function openModal(index) {
    gallery.openModal(index, images);
}

function shuffleGallery() {
    gallery.shuffleGallery('bloom');
}
