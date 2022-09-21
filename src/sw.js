importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// stale-while-revalidate strategy

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.origin === location.origin && url.pathname === "/") {
    event.respondWith(new StaleWhileRevalidate().handle({ event, request }));
  }
});
