document.addEventListener('partialsLoaded', async () => {
    await import('./best-deals-list.js');
    await import('./shop-list.js');
    await import('./contact-form.js');
    // await import('./products-service.js');
    await import('./products-catalogue.js');
    await import('./testimonials.js');
    await import('./awards.js');
    await import('./cart.js');
    await import('./footer.js');
    await import('./celebration.js');
    await import('./cart-badge.js');
});