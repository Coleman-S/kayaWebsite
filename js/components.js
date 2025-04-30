// Function to load HTML components
function loadComponent(elementId, componentUrl, callback) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    fetch(componentUrl)
        .then(response => response.text())
        .then(data => {
            element.innerHTML = data;
            if (callback && typeof callback === 'function') {
                callback();
            }
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}

// Function to set the active navigation link
function setActiveNavLink() {
    // Get the current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Determine which nav item should be active
    let activeNavId = 'nav-home'; // Default
    
    if (currentPage.includes('venice')) {
        activeNavId = 'nav-venice';
    } else if (currentPage.includes('florence')) {
        activeNavId = 'nav-florence';
    } else if (currentPage.includes('rome')) {
        activeNavId = 'nav-rome';
    } else if (currentPage.includes('valletta')) {
        activeNavId = 'nav-valletta';
    } else if (currentPage.includes('about')) {
        activeNavId = 'nav-about';
    } else if (currentPage.includes('index') || currentPage === '') {
        activeNavId = 'nav-home';
    }
    
    // Set the active class
    const activeNavItem = document.getElementById(activeNavId);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load the header component and then set the active nav link
    loadComponent('header-component', 'components/header.html', setActiveNavLink);
    
    // Load the footer component
    loadComponent('footer-component', 'components/footer.html');
});
