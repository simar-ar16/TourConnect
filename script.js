

// Toggle dark mode and background image
// function toggleTheme() {
//     const body = document.body;
//     const background = document.querySelector('.background-image');

//     // Toggle dark mode class
//     body.classList.toggle('dark-mode');

//     // Change the background image based on dark mode
//     if (body.classList.contains('dark-mode')) {
//         // Dark mode background image
//         background.style.backgroundImage = "url('https://images.unsplash.com/photo-1539213492139-7b268eb93c82?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
//     } else {
//         // Light mode background image
//         background.style.backgroundImage = "url('https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
//     }
// }

// Toggle dark mode and background image
function toggleTheme() {
    const body = document.body;
    const background = document.querySelector('.background-image');

    // Toggle dark mode class
    body.classList.toggle('dark-mode');

    // Change the background image based on dark mode
    if (body.classList.contains('dark-mode')) {
        background.style.backgroundImage = "url('https://4kwallpapers.com/images/walls/thumbs_3t/287.jpg')";
    } else {
        background.style.backgroundImage = "url('https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
    }
}

// Toggle ticket options section
function toggleTicketOptions() {
    const ticketOptions = document.getElementById('ticket-options');
    ticketOptions.style.display = ticketOptions.style.display === 'block' ? 'none' : 'block';
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    const offset = 80; // Adjust this value as needed to match your navbar height + extra space
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Toggle the visibility of the mobile menu
function toggleHamburgerMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active'); // Toggle the "active" class to show/hide the mobile menu
}