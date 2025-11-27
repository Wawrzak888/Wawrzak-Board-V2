// Service Worker - niezbędny dla PWA na Androidzie
self.addEventListener('fetch', (event) => {
    // Prosta strategia: Network First (najpierw internet, potem cache)
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});