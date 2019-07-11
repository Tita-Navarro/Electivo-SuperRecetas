/* El método workboxSW.precacheAndRoute() eficienta las caches y responde a 
las request de las URLs en el manifest.
Se puede ver en https://goo.gl/S9QRab */

//Precarga de la app

self.__precacheManifest = [].concat(self.__precacheManifest || [])
//workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

//App Shell
workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL("/index.html")
  );

  workbox.googleAnalytics.initialize()

//La API usa Stale While Revalidate para mejorar su velocidad
workbox.routing.registerRoute(/^https?:\/\/www.themealdb.com\/api\/.*/, 
  new workbox.strategies.StaleWhileRevalidate(),
 'GET')

//Las fuentes se usan con cahe first y se vencen al mes
workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, 
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 30 * 24 * 60 * 60
      })
    ]
  }),
  'GET')

// El resto utiliza Network First
workbox.routing.registerRoute(/^https?.*/,
  new workbox.strategies.NetworkFirst(), 'GET')