// Item data for modal display
const itemData = {
   
    3: {
        title: "Green Building",
        description: "Green building in Slop Space is sustainability as image.Environmental value is generated through visibility, certification, and symbolic performance rather than measurable ecological transformation.",
        image: "images/35.jpg"
    },
    4: {
        title: "Architecture competition",
        description: "Architecture competitions are slop spaces of architectural imagery, where value is produced not by building but by the competitive overproduction of images. Here, architecture exists as a speculative visual currency—circulating through platforms, generating attention, and accumulating symbolic value independent of material realization.",
        image: "images/34.jpg"
    },

    8: {
        title: "Real Estate",
        description: "Real estate becomes a speculative image economy.Space generates value through pre-constructed images of future life rather than through lived experience or spatial use.",
        image: "images/38.jpg"
    }
};

// Welcome section fade in/out based on scroll position
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const welcomeSection = document.getElementById('welcome');
    const fadeThreshold = 100; // Distance in pixels before fading
    
    if (scrollY > fadeThreshold) {
        welcomeSection.classList.add('fade-out');
    } else {
        welcomeSection.classList.remove('fade-out');
    }
});

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Modal functionality
const modal = document.getElementById('itemModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

// Open modal when item is clicked
document.querySelectorAll('.item-card').forEach(card => {
    card.addEventListener('click', function() {
        const itemId = this.getAttribute('data-item');
        const item = itemData[itemId];
        
        if (item) {
            modalBody.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
            `;
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
closeBtn.addEventListener('click', function() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Video sound handling - only enable sound on user interaction
// Video autoplay is handled by HTML autoplay attribute
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('mainVideo');
    if (!video) return;
    
    // Enable sound when user first interacts
    let soundEnabled = false;
    const enableSound = async () => {
        if (!soundEnabled) {
            soundEnabled = true;
            try {
                video.muted = false;
                if (video.paused) {
                    await video.play();
                }
            } catch (error) {
                console.log('Could not enable sound:', error);
            }
        }
    };
    
    // Listen for user interaction to enable sound
    document.addEventListener('click', enableSound, { once: true });
    document.addEventListener('scroll', enableSound, { once: true });
    document.addEventListener('touchstart', enableSound, { once: true });
    document.addEventListener('keydown', enableSound, { once: true });
});

