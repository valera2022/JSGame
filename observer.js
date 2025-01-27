export const observePosition = (element) => {
    const observer = new MutationObserver(() => {
        const rect = element.getBoundingClientRect();
        console.log('Element position or attribute changed:', rect);
        // Perform any logic when position changes
    });

    // Observe the position/transform property of the element
    observer.observe(element, { attributes: true, attributeFilter: ['style'] });

    // Optional: Disconnect observer after some time or under some condition
    // observer.disconnect();
};