// Dots Navigation

document.addEventListener('DOMContentLoaded', () => {
    // Select the carousel list and navigation dots
    const list = document.querySelector('.news-list');
    const dots = document.querySelectorAll('.dot');
    const cards = document.querySelectorAll('.news-card');

    // Calculate the width of a single card plus the gap for scrolling
    const cardWidth = cards[0].offsetWidth + 15;

    // Event listener for scroll to update the active dot
    list.addEventListener('scroll', () => {
        // Calculate the index of the current active card
        let activeIndex = Math.round(list.scrollLeft / cardWidth);

        // Remove the 'active' class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Add the 'active' class to the current dot
        if (dots[activeIndex]) {
            dots[activeIndex].classList.add('active');
        }
    });
   
    // Event listener for dot clicks to scroll the carousel
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Scroll the list to the corresponding card
            list.scrollLeft = index * cardWidth;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hospitalList = document.querySelector('.hospital-list');
    const leftArrow = document.querySelector('.carousel-arrow.left');
    const rightArrow = document.querySelector('.carousel-arrow.right');

    if (hospitalList) {
        // Function to scroll the carousel
        const scrollCarousel = (direction) => {
            const cardWidth = hospitalList.querySelector('.hospital-button-link').offsetWidth;
            const scrollAmount = cardWidth + 15; // Card width + gap
            hospitalList.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth'
            });
        };

        if (leftArrow) {
            leftArrow.addEventListener('click', () => scrollCarousel(-1));
        }
        if (rightArrow) {
            rightArrow.addEventListener('click', () => scrollCarousel(1));
        }
    }
});
