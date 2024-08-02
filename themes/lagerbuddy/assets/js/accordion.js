// Get all the accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

// Add click event listener to each accordion item
accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle the active class on the clicked item
        item.classList.toggle('active');

        // Get the panel associated with the clicked item
        const panel = item.nextElementSibling;

        // Toggle the display of the panel
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});