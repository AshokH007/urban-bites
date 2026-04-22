/* sidebar-navigation logic */

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    const openSidebar = () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeSidebar = () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    toggle.addEventListener('click', openSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Active link highlighting
    const currentPath = window.location.pathname;
    sidebarLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Handle both root and pages/ paths
        if (currentPath.endsWith(linkPath) || (currentPath === '/' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeSidebar();
    });
});
