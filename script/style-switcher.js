/*========================================Toggle style switcher ==================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",() =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

//hide style - switcher on scroll
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
        {
            document.querySelector(".style-switcher").classList.remove("open");
        }

})


// Function to set active style
function setActivestyle(theme) {
    // Disable all alternate styles
    let alternateStyles = document.querySelectorAll('.alternate-style');
    alternateStyles.forEach((style) => {
        if (theme === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    });
}

// Handle day-night mode
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
});

// Load the correct theme on page load
window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun');
    } else {
        dayNight.querySelector('i').classList.add('fa-moon');
    }

    // Check which theme is currently active and enable it
    let alternateStyles = document.querySelectorAll('.alternate-style');
    alternateStyles.forEach((style) => {
        if (!style.hasAttribute('disabled')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    });
});

// Button activation color

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.aside .nav li a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            links.forEach(lnk => lnk.classList.remove('active'));
            
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});


// 