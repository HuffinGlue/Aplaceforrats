// Wait for the window to load before running the script
window.onload = function() {
    // Get all images that have a 'data-src' attribute
    const lazyImages = document.querySelectorAll('img[data-src]');

    // Set up the IntersectionObserver
    // This API efficiently watches for when an element enters or leaves the viewport
    const imageObserver = new IntersectionObserver((entries, observer) => {
        // Loop through the entries to find the images that are visible
        entries.forEach(entry => {
            // Check if the image is intersecting (visible)
            if (entry.isIntersecting) {
                const image = entry.target;
                const src = image.getAttribute('data-src');

                // Set the image's source to the real URL, triggering the load
                image.src = src;

                // Add a class to fade in the image
                image.classList.add('loaded');

                // Stop observing the image once it has been loaded
                observer.unobserve(image);
            }
        });
    });

    // Loop through all the lazy images and observe each one
    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
};
