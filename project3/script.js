// Product Data
const products = [
    {
        id: 1,
        title: "432 Park Avenue",
        price: "$30,000,000",
        rating: "4.5",
        image: "images/1.jpg",
    
        hoverImage: "images/12.jpg"
    },
    {
        id: 2,
        title: "111 West 57th Street",
        price: "$14,999,999",
        rating: "4.7",
        image: "images/2.jpg",
        hoverImage: "images/22.jpg"
    },
    {
        id: 3,
        title: "One57",
        price: "$2,999,999",
        rating: "4.3",
        image: "images/3.jpg",
        hoverImage: "images/32.jpg"
    },
    {
        id: 4,
        title: "53 West 53 ",
        price: "$7,999,999",
        rating: "4.6",
        image: "images/4.jpg",
        hoverImage: "images/42.jpg"
    },
    {
        id: 5,
        title: "W15 Central Park West",
        price: "$1,999,999",
        rating: "4.4",
        image: "images/5.jpg",
        hoverImage: "images/52.jpg"
    },
   
    {
        id: 7,
        title: "Thomas Juul-Hansen Skyscraper is Tallest on Manhattan’s East Side",
        price: "$12,000,000",
        rating: "4.2",
        image: "images/7.jpg",
        hoverImage: "images/72.jpg"
    },
    {
        id: 8,
        title: "220 Central Park South",
        price: "$32,999,999",
        rating: "4.8",
        image: "images/8.jpg",
        hoverImage: "images/82.jpg"
    },
    {
        id: 9,
        title: "One Manhattan Square",
        price: "$89,000,000",
        rating: "4.6",
        image: "images/9.jpg",
        hoverImage: "images/92.jpg"
    },
    {
        id: 10,
        title: "The San Remo",
        price: "$89,000,000",
        rating: "4.4",
        image: "images/10.jpg",
        hoverImage: "images/102.jpg"
    },
    {
        id: 11,
        title: "101 Wall Street",
        price: "$45,000,000",
        rating: "4.5",
        image: "images/11.jpg",
        hoverImage: "images/112.jpg"
    },
    {
        id: 12,
        title: "70 Pine Street",
        price: "$47,000,000",
        rating: "4.3",
        image: "images/12'.jpg",
        hoverImage: "images/122.jpg"
    },
    {
        id: 13,
        title: "50 West 66th Street",
        price: "$27,000,000",
        rating: "4.6",
        image: "images/13.jpg",
        hoverImage: "images/132.jpg"
    },
    {
        id: 14,
        title: "277 Fifth Avenue",
        price: "$29,000,000",
        rating: "4.7",
        image: "images/14.jpg",
        hoverImage: "images/142.jpg"
    },
    {
        id: 15,
        title: "The Getty Residences",
        price: "$190,000,000",
        rating: "4.1",
        image: "images/15.jpg",
        hoverImage: "images/152.jpg"
    },
    {
        id: 16,
        title: "56 Leonard Street",
        price: "$47,000,000",
        rating: "4.4",
        image: "images/16.jpg",
        hoverImage: "images/162.jpg"
    },
    {
        id: 17,
        title: "125 Greenwich Street",
        price: "$47,000,000",
        rating: "4.2",
        image: "images/17.jpg",
        hoverImage: "images/172.jpg"
    },
    {
        id: 18,
        title: "One Wall Street",
        price: "$17,000,000",
        rating: "4.0",
        image: "images/18.jpg",
        hoverImage: "images/182.jpg"
    }
];

// Current displayed product list (for search filtering)
let filteredProducts = [...products];
// Current page number
let currentPage = 1;
// Number of products per page
const itemsPerPage = 12;

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updatePagination();
    
    // Search box enter key event
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
});

// Render product list
function renderProducts() {
    const container = document.getElementById('productsContainer');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    container.innerHTML = '';
    
    if (productsToShow.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">No products found</div>';
        return;
    }
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.title}" class="product-image main-image">
            <img src="${product.hoverImage}" alt="${product.title}" class="product-image hover-image">
        </div>
        <div class="product-title">${product.title}</div>
        <div class="product-price">${product.price}</div>
        <div class="product-rating">Rating: ${product.rating} ⭐</div>
    `;
    
    return card;
}

// Search products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => {
            return product.title.toLowerCase().includes(searchTerm) ||
                   product.price.toLowerCase().includes(searchTerm) ||
                   product.rating.includes(searchTerm);
        });
    }
    
    // Reset to first page
    currentPage = 1;
    renderProducts();
    updatePagination();
}

// Update pagination info
function updatePagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const pageInfo = document.getElementById('pageInfo');
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages || totalPages === 0;
}

// Change page
function changePage(direction) {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const newPage = currentPage + direction;
    
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderProducts();
        updatePagination();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

