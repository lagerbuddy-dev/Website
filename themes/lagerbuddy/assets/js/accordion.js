// Get all the accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

// Add click event listener to each accordion item
accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle the active class on the clicked item
        item.classList.toggle('accordion-item-active');

        // Get the panel associated with the clicked item
        const content = item.children[1];
        const icon = item.children[0].children[1];

        // Toggle the display of the panel
        if (content.style.display === 'flex') {
            content.style.display = 'none';
            icon.innerHTML = 'expand_circle_down';
        } else {
            content.style.display = 'flex';
            icon.innerHTML = 'expand_circle_up';
        }
    });
});