const staticCacheName = "mamita-masita-cache";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js"
]
// self is the self worker itself

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCacheName).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})