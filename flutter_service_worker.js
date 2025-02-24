'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "03ce2253106e6d20a96144d461754965",
"version.json": "69956d6fe97677053495741898a3388f",
"splash/img/light-2x.png": "ff83c15730fce088cbdab48d20e5468d",
"splash/img/dark-4x.png": "5dded276c9f2f687fa259e8b4c6ece6a",
"splash/img/light-3x.png": "35f5b2415c225a271314e7e9ef4c0dfb",
"splash/img/dark-3x.png": "35f5b2415c225a271314e7e9ef4c0dfb",
"splash/img/light-4x.png": "5dded276c9f2f687fa259e8b4c6ece6a",
"splash/img/dark-2x.png": "ff83c15730fce088cbdab48d20e5468d",
"splash/img/dark-1x.png": "ce0d2a649beb285e0cc20ba75c258ba9",
"splash/img/light-1x.png": "ce0d2a649beb285e0cc20ba75c258ba9",
"index.html": "10c3ab2d5818004d240d58b8ce4b1942",
"/": "10c3ab2d5818004d240d58b8ce4b1942",
"main.dart.js": "f0a71e921c0d849e82b534b2b9d30f6a",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "45f2bb286505aeb425a724387928f260",
"icons/Icon-192.png": "c43877584b38e6e868fca33730da0a17",
"icons/Icon-maskable-192.png": "c43877584b38e6e868fca33730da0a17",
"icons/Icon-maskable-512.png": "ec51ef6460ffdd81b0696fd255a46659",
"icons/Icon-512.png": "ec51ef6460ffdd81b0696fd255a46659",
"manifest.json": "7f6f075c23be0f864f53d968b8e8732f",
"assets/AssetManifest.json": "7fb654a6aa3140c71ccfba0b89ce86f5",
"assets/NOTICES": "33ae2448ea58861ef07438e764fe313a",
"assets/FontManifest.json": "71de157a1e00547315ec5fc69aeac95d",
"assets/AssetManifest.bin.json": "a57c266dd5e39244fdbf9cff20d1871d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8ffadeeda0f32f2eebfd5265ac2cb6b4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5ea6fc33b7b3e59dcf4aeb52078578c8",
"assets/fonts/MaterialIcons-Regular.otf": "3ea96e0c49ccbfc3074f2229465d3668",
"assets/assets/images/flowGraphicsTop2.png": "cdfd8ee3093f2805a3e9a7e35acdc495",
"assets/assets/images/g1.png": "eba8e6aa376b1f73969d279abdc3b99e",
"assets/assets/images/flowGraphicsBottom.png": "11f8bc8c8152c68bbffef92a99b9a169",
"assets/assets/images/getToKnowYourCycleBanner.png": "50c80e8c9a13efa812e20de268b8737e",
"assets/assets/images/journal.png": "fdcd48e7ee7e99fe9f0ca38a5346e44f",
"assets/assets/images/vaginalDischarge.png": "10ccaa418f67174df9f65c3a12c178e7",
"assets/assets/images/cervicalMucus.png": "3e4348f69e3f0fd99a8b4982b933bfc5",
"assets/assets/images/flowGraphicsTop.png": "d628ceea738c93b22e67d07237bff70c",
"assets/assets/images/emotions.png": "ccdbb7518d133aa5be60ae521015475b",
"assets/assets/common/splash.png": "4dc1ac5da0d9e2441ce71d3ed9fbbbe5",
"assets/assets/common/app-icon.png": "12c5942dc48c2fd148831b6665fe7308",
"assets/assets/audio/notification.wav": "43d5a4f2098844e9dd4ce5e274668e38",
"assets/assets/icons/custom_metrics/basalBodyTemperature.png": "d7e3580ce26137a47681fbc5f1d82d9b",
"assets/assets/icons/custom_metrics/discharge.png": "696d2ef1b71b4e17b53bdb55d6353b2b",
"assets/assets/icons/general/dropFilled.png": "a3dced1a43d6da6f5cae27ae673ab55d",
"assets/assets/icons/general/drop.png": "6655b8a0bd9c1bcd9f988bf89529813d",
"assets/assets/icons/general/drop2.png": "c9d943c5c007a2d1422937ad62d3a3b8",
"assets/assets/icons/general/drop1.png": "3420b648020d9d283a08db88cf251678",
"assets/assets/icons/brand/primaryLogo.png": "08013d5bf7565b203f39b48033514809",
"assets/assets/icons/brand/roundLogo.png": "51c749097ae59fd6ec0ec0d8169c44eb",
"assets/assets/icons/states_of_mind/focus.png": "ffe2b901a54b5e9c3179965ef529c1ec",
"assets/assets/icons/states_of_mind/sociability.png": "acb0a059a0e2077c0a527001949a49d7",
"assets/assets/icons/states_of_mind/energy.png": "491b802618c28ceb273020dc0110352f",
"assets/assets/icons/states_of_mind/confidence.png": "c8ad44363c0f7ffff5d7984ae9d1197d",
"assets/assets/icons/states_of_mind/motivation.png": "10201527a580c696042c6bf5ebdae85e",
"assets/assets/icons/states_of_mind/productivity.png": "c1318fa71ccfa089ebf3281be862fd3b",
"assets/assets/icons/states_of_mind/creativity.png": "43278e35bae7a192565487d5dc34a307",
"assets/assets/icons/states_of_mind/clarity.png": "b8eeb1f2814523bd1b5767d13b6ece3f",
"assets/assets/icons/seasons/summer.png": "1fb9101273b3567893f389bf648eee21",
"assets/assets/icons/seasons/winter.png": "5776be1f33326762fa05a7f905ead82e",
"assets/assets/icons/seasons/spring.png": "e2e8f6d04fad240da475268a69d28edb",
"assets/assets/icons/seasons/autumn.png": "be71e717c96c8563e4fd82603101968c",
"assets/assets/icons/tracking/physical.png": "163b2f1854e57182e5877360bc7ca4cf",
"assets/assets/icons/tracking/cravings.png": "7f35f65668b360d53168cc47d336c85a",
"assets/assets/icons/tracking/mental.png": "9e7fb2fe3dad40dd4efe95d9e995e991",
"assets/assets/icons/tracking/journal.png": "a9545d3de75d9586dd631b3756fb99b9",
"assets/assets/icons/tracking/metrics.png": "1f9c17bcc209df43318f8c0ac32160f7",
"assets/assets/icons/tracking/menstruation.png": "72b757780c569ca1e4a1b29a852b818c",
"assets/assets/icons/tracking/emotions.png": "9464809d84205f632f00d259cf8b03b0",
"assets/assets/fonts/manchego/manchego.ttf": "99e59bca5a9764849a7f999fd80d165e",
"assets/assets/fonts/oswald/static/Oswald-Bold.ttf": "c95751378db3c5c8bfd993b164e13422",
"assets/assets/fonts/oswald/static/Oswald-SemiBold.ttf": "32e8a52171da183dfb2e3a7c73b90ed5",
"assets/assets/fonts/oswald/static/Oswald-Regular.ttf": "b299a657c45aa257f1458b327f491bfb",
"assets/assets/fonts/montserrat/static/Montserrat-Bold.ttf": "354dc625a35bef1b6ec00a79c6cfc0c8",
"assets/assets/fonts/montserrat/static/Montserrat-ExtraBold.ttf": "1497e6fee4dd060b35f6b49e4241cb3f",
"assets/assets/fonts/montserrat/static/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
