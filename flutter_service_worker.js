'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d75fbf6efd750f647a1f5069f6a41686",
".git/config": "cf99aa1716ef0b2a0c4227c3bd96b5e5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c660775c0d98c8c316d10ec9b366d1a9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "19f7cfaf744cbd0d84e90418a356580a",
".git/logs/refs/heads/master": "19f7cfaf744cbd0d84e90418a356580a",
".git/logs/refs/remotes/origin/master": "64cce2ceba561bce75bb22c538b96f1c",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/3f57b5baeb011560c7f38978e76554b007d007": "2a2c69327279eeabf83cbd4f4e364fd8",
".git/objects/06/c0654c30f085b58a0498cbff99aa5b27773dcb": "5aaf374b1ca91adc4601b148800656fa",
".git/objects/08/df2419b2a2bf19059064c6d4b6285b3f6666b8": "7559f0abbe83085a86954e9ec9527445",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0b/c35869cc376cbb34af4440de8e995e6f2ae0e0": "8479347d3f23807a96b0539dc575c845",
".git/objects/0d/427f002fcfb2a2fa26c54152094c42ee6fe3ed": "10af7d3655ab10c56575cb7d30c802f7",
".git/objects/0e/e4ea84191293e7b473342ce4926df375e32ed6": "c5a19a49c1aed7d3275f6196cfa39d98",
".git/objects/0f/6d50c19bde945f24839079e263dfad5b6bc87c": "e5e03fe80ed00ea7fcdb8e738503663e",
".git/objects/0f/7f2234a010593e4b32eda20682d82e91440521": "98e2b8bd4af0bfe2895fe997606d3db0",
".git/objects/11/79b3a46a2239d64a814df8580308459fefc958": "d0b9f222b77d2a04a5fc7630b82b7629",
".git/objects/13/885788fbbb60756318649f8edae8c8ff89bfae": "09217bce5f3386b356cac5ece9e475f6",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/92da15879ad5a2f2a9533b11b72519d1ca389b": "9302e54391ecadc94b99382224d91db7",
".git/objects/32/5b1ca23a457c9f37939dc6b5686c7229caee22": "9ff3faed079e39ee080825279267fef3",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3a/716760a4adc6fdd4c45df874d7093c550abf61": "ab6dd9506d49039b140b28bee826a0d1",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/90a5efc50c8c741ba7064d3b1407c3b9d12c6e": "87575d493544ca32090c93d18f28652d",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/40/ab46d502db38a5b389506ebfd6c841b2bb97fb": "bbae9b85e3e1cc958b43a057c68cffb3",
".git/objects/42/bd94bfa5347cdc6ab0f9fbbcb37600f52e0a05": "df62cf8db027c8dd3f13c1c59a5ccc5c",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/1716351d39939b56d13e01a053431f800860d8": "f1d08f0085d7953c27d2e39c398256e7",
".git/objects/47/4e788d416e83f9cc54d9d63412e60ccd05a379": "b148df32787a9888633eaa53c9f827a0",
".git/objects/47/f1a8c39c24462161d38bece17384d95a05245f": "7b933f28f587340c01d1ab54e0072726",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4c/107fdcec51e9c0658a81be7e6d694babcf69ca": "87d8ba544a30230b70f57ae104496da3",
".git/objects/4d/30e901e3cf20d923e9e438e4e4b0a703a7584d": "36e651a7b829862a29ddc13421d5cbbf",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/5727527e29d521dd2609daaa37cb9c56db07d8": "3d37d01b89fcc8f283019fa0a8646932",
".git/objects/5b/e9e80a27d73c10185b9b043ec352c76cdc4651": "40f97732e57a9cef5b2f6827bc85cc50",
".git/objects/61/bbe556520db1b322aa928e699765daad896a53": "0c5a12fd624a2418e836b0274ee2e4ae",
".git/objects/62/0efebbdf44f490911441098a6417de36a5c73d": "dba442da9189b41bc396e03fe6306e75",
".git/objects/64/b6be1cf61ea424dea9fc378675295360753f8e": "462750bc7abc70034aac0f8d38549386",
".git/objects/68/a6fc5ad49bf912dceeb9e9eb0c848c0fafdf49": "4b5fa46a1cdb7fb6ce5876289a2dff99",
".git/objects/6a/d3cfbad7e35bea5b9410d5e0ce420682f3e950": "6791d68236a261f01a06559e229a56c3",
".git/objects/6e/d7ced1c9b4d6723218340610c98bfdee678102": "1b9b323da1bef31144712a4d6f2c1492",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/0faad2fdb9adaa99adec7a658935d8edc58f80": "f0101f1c255537ce0a361a4a397c2cbe",
".git/objects/90/6338f15a612d2bb5f1ddeed14b81a9a904ee99": "2fe6d593b1bd663b5339b7583cc7c95a",
".git/objects/92/2542f6bd90124fd8c57673b96a0740746e9c55": "276d8df54d99d96ede332d975d26b0a9",
".git/objects/9c/24959890e5cb5b805aced4e0179e2265928605": "6df8e65a738b902601511bdb011764ef",
".git/objects/9d/baa041e120fc5db0dd19ce7afdd33250b4e34c": "dc3be5d3a1e5083691530dc0cdfc5f07",
".git/objects/9f/117b8b5975b9f9a6d154b7f907090afd523351": "9eaedd102786a085385411665f46534a",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b2/5a699e66aef6e708518f5c6512b6392ba8d596": "d0df95da261ead8976be757566aa2e77",
".git/objects/b3/eea8049eab4c3929edbcb301f259224ff5dbc0": "7bcdf8be90e6272c9d3c369f512e8484",
".git/objects/b4/3f70f3bf7b2939d99c54dcb147954726edb6a9": "b5974ad5e244e8bb958698f8bc48687e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/c782c08b89db9d587a2cfee9cc7d9c1aaed972": "6d6ca6973c26c33d65305853119fd8e9",
".git/objects/cc/251c5e7171df79af981c5f2c596a1d62ad0804": "b4a44432ee535b6ac10959fe7fc8b723",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/0f57681d5b5ebf3146595b1d297ce924f50b0b": "e32c5239636205026dbd84b3cb46b275",
".git/objects/ce/1c3a6ecf92af5c8475c65bca053559072ce568": "6641d6ea411d3a2cd2fbe62b9994c514",
".git/objects/d1/cf82d946386cbcab61af560294a652c78c1c87": "4efe3da633ea7c477e8f1ac7920bb6b2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/e5/09fab6561219af4a6edcc7a5a4abbd42bd402c": "9688d88e25399868ac9e1f214326d824",
".git/objects/ea/a2e44d8f15b86e8f4e5db1c4069514e940d7df": "0f6cf9acadb306cf47ce28d94a9f34af",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/4844d3040b866f5880cf8874d9e4e610c72ca9": "4e635f4cc182e32598d73b7515aa02e0",
".git/objects/f3/1c83b11cc54faba377640d8e07e98e0272f14c": "e4eb8053c2fa66a7d4d0927b9ebe679a",
".git/objects/f3/e86bd6cde222a1ec6744cc596ef21e51651559": "2f085b4b5c074a5492b506b01913c941",
".git/objects/f9/70b20c9f25a3594988b28db99e8195d6853fbb": "9973c879eafaf72afb736bb390a0377a",
".git/objects/fb/213e3d9e71046fa534f774c25ce2945acae652": "4b0be68b45267b6b3dd218344eb22b00",
".git/objects/fc/ff3c5c48729c75d83b6d5ed706708bb4bd3b0f": "444d2070837670ee87a6ec371b00ebfa",
".git/objects/fd/df83514e31112d5f8927fa0c7ec000bec99a76": "06785e2c78a04b9bf28388a2551e6d00",
".git/refs/heads/master": "3f1619832457ad8514a8e5823473f536",
".git/refs/remotes/origin/master": "3f1619832457ad8514a8e5823473f536",
"assets/AssetManifest.bin": "0a9285f00c17584a4d6a99dbad378fd6",
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
"index.html": "c44fb6a637c8f7afaa2dd08048eca867",
"/": "c44fb6a637c8f7afaa2dd08048eca867",
"main.dart.js": "d4d93c98def87daf6e0361e6dd83fe7b",
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
