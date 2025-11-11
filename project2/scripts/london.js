// London 图片数据
const images = [
    {
        url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=1200&fit=crop',
        caption: 'Millennium Bridge & St. Paul’s Cathedral, 2025',
        text: ''
    },
    {
        url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&h=1200&fit=crop',
        caption: 'Tower Bridge, 2024',
        text: 'Tower Bridge spans the Thames with Victorian engineering elegance. The bridge\'s bascule mechanism allows it to open for river traffic, while its Gothic towers create a landmark that defines London\'s riverfront. Walking across offers views of the city\'s historical layers.'
    },
    {
        url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=1200&fit=crop',
        caption: 'London Eye, 2024',
        text: 'The London Eye rises as a modern counterpoint to the city\'s historic skyline. This giant observation wheel offers panoramic views of London, revealing the city\'s scale and diversity. From above, the Thames winds through neighborhoods, connecting past and present.'
    },
    {
        url: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&h=1200&fit=crop',
        caption: 'Buckingham Palace, 2024',
        text: 'Buckingham Palace serves as the official residence of the British monarch, its facade embodying royal tradition and continuity. The palace grounds and changing of the guard ceremony create a living connection to centuries of monarchy and ceremony.'
    },
    {
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=1200&fit=crop',
        caption: 'Westminster Abbey, 2024',
        text: 'Westminster Abbey has witnessed coronations, royal weddings, and state funerals for over a thousand years. The Gothic architecture soars upward, its stone vaults and stained glass creating spaces of reverence and historical significance.'
    },
    {
        url: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=1200&h=1200&fit=crop',
        caption: 'Hyde Park, 2024',
        text: 'Hyde Park provides a vast green lung in the heart of London. The Serpentine lake, wide meadows, and tree-lined paths offer escape from urban density. Speakers\' Corner continues a tradition of free speech, where ideas flow in the open air.'
    },
    {
        url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=1200&fit=crop',
        caption: 'Covent Garden, 2024',
        text: 'Covent Garden pulses with energy, where street performers, markets, and theaters create a vibrant public space. The covered market and piazza blend historic architecture with contemporary culture, making it a gathering place for locals and visitors.'
    },
    {
        url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&h=1200&fit=crop',
        caption: 'St. Paul\'s Cathedral, 2024',
        text: 'St. Paul\'s Cathedral dominates the London skyline with its magnificent dome, a masterpiece of English Baroque architecture. The cathedral has survived fires and wars, its resilience mirroring the city\'s ability to endure and rebuild.'
    },
    {
        url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=1200&fit=crop',
        caption: 'Shoreditch, 2024',
        text: 'Shoreditch embodies London\'s creative spirit, where street art, independent galleries, and innovative restaurants define the neighborhood\'s character. The area\'s industrial past meets contemporary culture, creating a dynamic urban landscape.'
    }
];

// 使用共享函数
function openModal(index) {
    gallery.openModal(index, images);
}

function shuffleGallery() {
    gallery.shuffleGallery('slide-in');
}
