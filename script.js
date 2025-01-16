// Function to adjust page width based on screen size
function adjustPageWidth() {
    const screenWidth = window.innerWidth;
    let scaleFactor = 1;

    if (screenWidth > 992 && screenWidth <= 1600) {
        scaleFactor = 0.9;
    } else if (screenWidth >= 700 && screenWidth <= 767) {
        scaleFactor = 0.8;
    } else if (screenWidth >= 600 && screenWidth < 700) {
        scaleFactor = 0.75;
    } else if (screenWidth <= 600) {
        scaleFactor = 0.5;
    }

    document.body.style.transform = `scale(${scaleFactor})`;
    document.body.style.transformOrigin = '0 0';
}

// Add event listeners
window.addEventListener('resize', adjustPageWidth);
window.addEventListener('DOMContentLoaded', adjustPageWidth);

// Function to toggle the collapsible menu
const leftMenu = document.getElementById('leftMenu');
function toggleMenu() {
    leftMenu.classList.toggle('collapsed');
}

// Add a button for demonstration
const btn = document.createElement('button');
btn.textContent = 'Toggle Menu';
btn.style.position = 'fixed';
btn.style.bottom = '70px';
btn.style.left = '20px';
btn.addEventListener('click', toggleMenu);
document.body.appendChild(btn);
