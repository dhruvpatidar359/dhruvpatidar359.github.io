'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0a9285f00c17584a4d6a99dbad378fd6",
"assets/AssetManifest.bin.json": "e37b0a1e7303acf540184ddfc045ba7d",
"assets/AssetManifest.json": "7b45bd53943e7c2d6803926b665ecfc8",
"assets/assets/images/pink_and_blue_mouse.jpg": "d7d42ef9bae07e989322e707a83b2d45",
"assets/assets/images/pink_and_blue_octopus.jpg": "73d7972b8e66bfbcd5a3f11bd47c58a0",
"assets/assets/images/potential01.jpg": "3223c0e2cd9ea422d7a66253280e943b",
"assets/assets/images/potential02.jpg": "e50894393845516d384d1da49585b3f5",
"assets/assets/images/potential03.jpg": "e4a836cbb12e1dd862f64bc0caac6d95",
"assets/assets/images/potential04.jpg": "fc80f11911dbd7abb5aba593f3333d91",
"assets/assets/images/potential05.jpg": "6ba6dc79bd2b0b175ea1530fc2ed23b6",
"assets/assets/images/snackable-01.png": "504fddd27d04c5e50f7e581d2fd134e7",
"assets/assets/images/snackable-02.png": "c8bcee72da233ce491044197fdcc0dfe",
"assets/assets/images/snackable-03.png": "b623eb0c1e93ca8b616ba64041ac6ca8",
"assets/assets/images/snackable-05.png": "a96508ee23e09856ddccdecdd00bb261",
"assets/assets/images/snackable-06.png": "06b688af035ffdd579a686e372bb9d2e",
"assets/assets/images/snackable-08.png": "ae6956517193eee41456d6fd6cdc2acd",
"assets/assets/videos/flocking-coded.mp4": "c9ddbf71995dadccee46cdc36586fa62",
"assets/assets/videos/flocking.mp4": "1f9a4cd0c56069cf1873f2a8c839d190",
"assets/assets/videos/GeminiGoogleDeepMind.mp4": "bae0eb5dd47d6fece76f8eec7240fa26",
"assets/assets/videos/GeminiGoogleDeepMind2.mp4": "6f1c872e073507e46bee32cc1ab70170",
"assets/assets/videos/knitting.mp4": "a1749eaeb442f3863cc9872e62fe82fa",
"assets/assets/videos/pxl.mp4": "20815d9728fa34988d60e8236baf5993",
"assets/assets/videos/staticV1.mp4": "98c2232d4d06aa3b519e74ecc58e0c99",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "2232ee3b138ce2bc41a7b439145eeab5",
"assets/NOTICES": "bdebb58da1be1b4a6b6035a3e8b9c7b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6f0ae29cf3bd06ebe0aa714e774eaa5b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5506949c777d0b66ab3acbbed19726d9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "60dc031753d04c314ea88a0d2283133b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "83e7768320d3424511165b53895bbc98",
"/": "83e7768320d3424511165b53895bbc98",
"main.dart.js": "00a3c290864bd213efcc4f48ad2e6383",
"manifest.json": "dcc385f2d0bbab6deaef19b4c9263af4",
"version.json": "f3f46f514b21001020a5ccc24077b29c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
