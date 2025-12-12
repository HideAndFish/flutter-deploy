'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "285a000d60388af51a894c265172a794",
"drift_worker.dart.js": "01fc11c7aab4939a5595604e0d20852a",
"drift_worker.dart": "4eead357a1ab89aed65316f32ad8d743",
"main.dart.wasm": "4ac4d581080849a5d40aab9724ccb3e1",
"drift_worker.js.map": "4d684e0262f3038143004e07fa0eea13",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "17ee40df228d9b7bc3d0ac76d9bd4471",
"main.dart.wasm.map": "c964e5690fffe0c6b204dc7fa5269233",
"sqlite3.wasm": "9839e2a1f55c56501c36b8e8483ee663",
"version.json": "5f550a9fcaff5fef48e3e8d4df58694c",
"icons/Icon-maskable-192.png": "d2d29070bc6add2636ae4ea859a1d460",
"icons/Icon-maskable-512.png": "027149c0233e0251451cc8523e35be81",
"icons/Icon-512.png": "027149c0233e0251451cc8523e35be81",
"icons/Icon-192.png.png": "9c57fab8c2c1a51c624eabfb89715275",
"icons/Icon-192.png": "d2d29070bc6add2636ae4ea859a1d460",
"icons/Icon-512.png.png": "45ff3a9e9466be14fb971c87ba3a0119",
"manifest.json": "50d68487482365b54e5c3a581e1bd47b",
"main.dart.js": "182ed4515ec11c75a89f9363834c9722",
"splash/img/dark-1x.png": "a7c8f9918d8c71d3a9ea79fedafc2793",
"splash/img/dark-2x.png": "1ce289bfb70ca16a80393d284bbac849",
"splash/img/light-1x.png": "a7c8f9918d8c71d3a9ea79fedafc2793",
"splash/img/dark-3x.png": "ce70dc149ee8cad496c22f433142a445",
"splash/img/dark-4x.png": "9484988909ab5148852a1861e7d58b2a",
"splash/img/light-4x.png": "9484988909ab5148852a1861e7d58b2a",
"splash/img/light-3x.png": "ce70dc149ee8cad496c22f433142a445",
"splash/img/light-2x.png": "1ce289bfb70ca16a80393d284bbac849",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"main.dart.mjs": "c60e5010f0f7fc326902bea4a2063564",
"assets/FontManifest.json": "6837b6a915b08f373e16e1ed6d398a6a",
"assets/AssetManifest.bin": "0a99f737dde9215b89460c5614d64495",
"assets/AssetManifest.bin.json": "c12fc42327bc0cbd1275eec60d3fc16b",
"assets/NOTICES": "7edc7d66a34ad1e335b375bbc8c3503a",
"assets/fonts/MaterialIcons-Regular.otf": "b9fa8d43bf6a2048a46c08d6d585e658",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/assets/images/bg_notification.png": "3e38ed4d5df36f510e4e42af014c4cf6",
"assets/assets/images/pwa_logo.png": "09216c50c8edabdafb5cb224cbd938fb",
"assets/assets/images/skeleton_body.png": "749a859de2882d063637b4f945204895",
"assets/assets/images/main_logo.png": "ad233a252931f26ed6a2588e967887ee",
"assets/assets/images/splash1.png": "754a3db0e3410c554e51a3cbb2e71456",
"assets/assets/images/left_thigh.png": "fe262b1a99dd652ef0884a1de6ae1383",
"assets/assets/images/logo_top.png": "c160299ee947e13e08784369d110428e",
"assets/assets/images/figure_chat.png": "cc09000d18552d5a017ec974c6c49291",
"assets/assets/images/splash5.png": "382f3b5ac307d506cd3a5b17c05fa87c",
"assets/assets/images/left_arm1.png": "8afc04e818adf42b8d05a3a5882a2a39",
"assets/assets/images/top_right_hand.png": "8fc4f4f86f43636f47d508b903417382",
"assets/assets/images/splash3.png": "84273b2b32a25074a397626a66476442",
"assets/assets/images/skeleton1.png": "cc5428ce97bef0ed29526b37456f8090",
"assets/assets/images/left_arm_point.png": "f5e312917fc7095d2af4c06bc5647de4",
"assets/assets/images/bottom_right_leg.png": "d925c9051719a9969bedba0cafb5d0cb",
"assets/assets/images/right_shoulder.png": "d8393cfe68f1e31a210c7522c6c0506b",
"assets/assets/images/skeleton_front.jpg": "14b1936894a6042867354d854791ac23",
"assets/assets/images/pwa_bg.png": "dadaca6abfa179dfc060018402c46519",
"assets/assets/images/splash2.png": "1c1495145cf102acc9e55f895288d0e8",
"assets/assets/images/bottom_right_hand_point.png": "48db8f4617512c1e1ddcc030d205fc08",
"assets/assets/images/dashboard_bg.png": "2d667c6c701226ed201c719e36a29c7b",
"assets/assets/images/top_left_arm_point2.png": "60f5d41d3a3b8d517722da95db072d67",
"assets/assets/images/skeleton_dark.jpg": "69fa3102e34007e5111f28eeeaade0fc",
"assets/assets/images/top_left_leg.png": "fc52c07b4dcf2b0863fb47273338a70e",
"assets/assets/images/referal_header.png": "3ff72cc927bde5bb0e067b6e41c37b1b",
"assets/assets/images/bottom_right_hand.png": "bb86f4f0748ac24fa4e28be2df545cbe",
"assets/assets/images/bglogin.png": "3139172dd181644689bfbfb3a753942d",
"assets/assets/images/left_skeleton.png": "f0e2476e1427b1dd9869613e667453b5",
"assets/assets/images/user_image.png": "88a72bb5bff53361e60cc73ee9f58b4f",
"assets/assets/images/textLogo.png": "519afc88ce0d0a4f80df926a2e509bf4",
"assets/assets/images/chat_header.png": "bc5fe521d379ddcb4ed038a702800697",
"assets/assets/images/main_header.png": "5a0d3750fdcdc496af59ddb5c7d12ce7",
"assets/assets/images/bottom_spine.png": "32c982a69dcfdf1d52be8ee4f49d5e8b",
"assets/assets/images/right_thigh.png": "ebbcd15e86ff57aaee031f26b78dc5a0",
"assets/assets/images/splash4.png": "90360b084426b945340a71ca2c03dbd2",
"assets/assets/images/mainLogo.png": "67501d474ba83db7581ccb72f258b9cc",
"assets/assets/images/bgl.jpg": "544cda327e957ef6e8df2d51bba082b3",
"assets/assets/images/skeleton.png": "5cc2e354b3fde1c4183773f7fde62c2f",
"assets/assets/images/bottom_left_leg.png": "3298330d8b599103593b83bda70563b1",
"assets/assets/images/profile_image.svg": "5a976eecbaac83abadbeee7e2126515c",
"assets/assets/images/left_arm2.png": "e8558e642346f4494ae5417fbcb1a9ec",
"assets/assets/images/figure1.png": "35ca22e15c18a1b679f1edc679eeaf92",
"assets/assets/images/bottom_left_arm_point.png": "a3e35ccfb44978131fa68f546fdc97d4",
"assets/assets/images/center_spine.png": "fd0444d680b8988b83b4df805b304ffc",
"assets/assets/images/top_right_leg.png": "949d062040ce488e51d0ee76082e6329",
"assets/assets/messages.json": "939e52989b93c94d7e32800204be75c2",
"assets/assets/db/sqlite3.wasm": "9839e2a1f55c56501c36b8e8483ee663",
"assets/assets/icons/sale.png": "16814b5ac50ed3c1319c5fada0d65a84",
"assets/assets/icons/desc.png": "9b155742eadaa8f97048a7da812a1122",
"assets/assets/icons/pen.png": "212090a8c6403e0632218ece442daa88",
"assets/assets/icons/personnel.png": "39ac4206aa1528e991cad20d3a9afd33",
"assets/assets/icons/plus.svg": "f8737db81f5e61a3abdd131ee3e844b5",
"assets/assets/icons/refresh_casa2.png": "148fbc1b90ad0bb30f2121f4c6102a6f",
"assets/assets/icons/cash_bonus.svg": "2f590b92cb8ee1381af2be893651bc08",
"assets/assets/icons/add.png": "71ad571d92043cc967b8c37e4fee3347",
"assets/assets/icons/mednean_bonus.png": "b43a042ab3478e297add5f4b0961293e",
"assets/assets/icons/progressbar2.png": "196d6d72cb5d96ae4dd94642bf2cc990",
"assets/assets/icons/create_user.png": "1cdb9a43dcf35bbbd552ca3efe98c53a",
"assets/assets/icons/healing.png": "4c5e52c74d7a50243e0c74b437d969b1",
"assets/assets/icons/become_patient.png": "099320098e48bbd1abf80a6dca52057a",
"assets/assets/icons/search.png": "2f3831656b019810f258b72f3c4d10a3",
"assets/assets/icons/procedure_desktop.png": "07631fd3110fcb4280abd6b36a886ddd",
"assets/assets/icons/today.png": "663c9536bff30aa409479906cb6cae49",
"assets/assets/icons/cancel.png": "5ce3621f95bb55b435095d33e1b237a2",
"assets/assets/icons/logout.png": "1aa81436b1874b10d648df006db2aa30",
"assets/assets/icons/red_dollar.png": "c9526501365c8c95c6c2d6c90a6831f8",
"assets/assets/icons/work_schedule.png": "ec2275796f26cd56a7a50d5c883e9f63",
"assets/assets/icons/dociment.png": "bfef368c02852668cf5361cab46b3ecb",
"assets/assets/icons/request_review.svg": "a0175351f115f5c37d2329f4dee5d2e2",
"assets/assets/icons/menu.png": "ee842723b5f221c56d3dc85e545ac454",
"assets/assets/icons/notification.png": "735f104ee4017d8bde8117d4e38eb61b",
"assets/assets/icons/bonus.svg": "df72893fb5369a7c2902e7a732e9d0db",
"assets/assets/icons/medical_history.png": "3a0b1b109fda0500984ec4027745e7eb",
"assets/assets/icons/arrow_down.svg": "52de24f4b4e84af054558728f61d3f2f",
"assets/assets/icons/progressbar3.png": "82b5029e6d9ba79e08688402820889e7",
"assets/assets/icons/list_patients.png": "c858ef4543c30c3600f461e3e5a1262e",
"assets/assets/icons/queue_patients.png": "2e9df4f754ff2858175974b3edd3b5b7",
"assets/assets/icons/info.png": "073d2e02724c1f93c38a8f16725b0436",
"assets/assets/icons/history_procedure.png": "0ec165f617baf18247ef2fe51886e3f5",
"assets/assets/icons/close.png": "49cdf441a21336361a251909ee9af97f",
"assets/assets/icons/admin_profile.png": "f3ae8538f93bcacf3ac61f8c252b6d99",
"assets/assets/icons/check_in.png": "f65ccfcd1bcb9179cc4a4f6f6081f64c",
"assets/assets/icons/map.png": "e05b0206d1d6e55f9dfa9bdaa8a3aa43",
"assets/assets/icons/money_withdrawn.png": "430e281f93dad9f9e784a3daa6655549",
"assets/assets/icons/bonus_dark.png": "df8f3560d1d6ba12a63164a1f31f616c",
"assets/assets/icons/debtor.png": "77d4d47bd8704f4d7a717dd0df1bc159",
"assets/assets/icons/arrow_up.png": "f558e8a908fa1f359cbd30ffc6f65fd3",
"assets/assets/icons/web.png": "036f131d7c2bbc764967521b03791828",
"assets/assets/icons/add_analyses.png": "3ae89110cc7bffd5679355b3f893905f",
"assets/assets/icons/transactions.png": "da222687c31cb43230f28c1f24081839",
"assets/assets/icons/zone.png": "07bc2096fa4ceca0e7eaae0aa06f931c",
"assets/assets/icons/procedures.png": "06c36fb12e9963c65534172746e05fb3",
"assets/assets/icons/refresh.png": "253685eb3c69bfc13627519b6d4a1ec5",
"assets/assets/icons/add_user.png": "720479dd4d4c5b1bf3efa8e6393ccb57",
"assets/assets/icons/referral_tree.png": "85176553c7ef2dced520e931dbdea6ae",
"assets/assets/icons/instagram.png": "16227ad1e3462e354f9a6affa8383d7f",
"assets/assets/icons/profile.png": "8e77fb9b8af93bf8c5a34f0893c580b0",
"assets/assets/icons/youtube.png": "2bcca2d4aa0440e2fddf300e5d998af4",
"assets/assets/icons/pen.svg": "3d78a29319d7d37dffb8d606ef28515e",
"assets/assets/icons/costs.png": "1c3acd95783c1a56f46acd8a70049b14",
"assets/assets/icons/notification_desktop.png": "fa7dffa5736ee4e05e1f52466535c95d",
"assets/assets/icons/home.png": "d9edfe5ab4d31a77cc56017b7cab5253",
"assets/assets/icons/facebook.png": "d2cc897b62ef3731a1bd16411fbc6260",
"assets/assets/icons/Error.svg": "b69030d759140aaada89f2cc044a3c72",
"assets/assets/icons/Lock.svg": "ea577ace50978a6344c26a10c6f27b49",
"assets/assets/icons/notification_not_read.png": "71d704e6dd64bc8788ce70fa5be6567a",
"assets/assets/icons/withdraw.png": "979cf272a85cc66325c96de4c9141f90",
"assets/assets/icons/filter.png": "671f3884059054b65f70e979992acf7c",
"assets/assets/icons/error.png": "166eabee2e3ec99a4dc416f55b09c305",
"assets/assets/icons/date.svg": "26d07dfb87a2bc5b0a880a5513503d87",
"assets/assets/icons/plus.png": "2341aa317c98b32f6a7ae405b1781a3a",
"assets/assets/icons/arrow_right.png": "2ee179b98332fb11445f4936600af6db",
"assets/assets/icons/money_history.png": "3c327d0ef480c0f7cfb37d8c63c228a9",
"assets/assets/icons/notification_dashboard.png": "53919361f1fe15597d00afabf25f4295",
"assets/assets/icons/woman_patient.png": "c6edeedebdec82e20befed7f2d8ed235",
"assets/assets/icons/queue.png": "dc55df035e97443c72a76d4b4c7b65e4",
"assets/assets/icons/request_ref.svg": "40156145e216267a32e0cb4d55442618",
"assets/assets/icons/reset_password.png": "b596b6e3413fc3b2c5701641efacace1",
"assets/assets/icons/calculator.svg": "4cd2d454df181103a4b1e55c9dcb45d8",
"assets/assets/icons/ref_system.png": "77f388a4f0543f0507d24c99eebaa737",
"assets/assets/icons/healing_desktop.png": "2b36e8c655a62fadb78f5095fe3556ee",
"assets/assets/icons/arrow_bottom.png": "5d507291d4b82f343846424176b72c1e",
"assets/assets/icons/close_menu.png": "49cdf441a21336361a251909ee9af97f",
"assets/assets/icons/arrow_left.png": "e8dbb87ff4b986d12dafce27d1d01d68",
"assets/assets/icons/replenish_blue.png": "875ca6c7487d72e7307c0497ee29b773",
"assets/assets/icons/write_doc.svg": "68523363f1bb17b5c6ef7442b9d80726",
"assets/assets/icons/document.png": "18caea450304e424b519f1df176f1253",
"assets/assets/icons/deptors.png": "9d1a6a9ef048f1aa17aa0745e5125787",
"assets/assets/icons/profile_woman.png": "4966f484d656a290a174606d84f71d51",
"assets/assets/icons/show_appoin.png": "9f52b3b5441efa6ac220f566e78ee32f",
"assets/assets/icons/change_photo.png": "b83d8ecabffa1030ccc7a7f4b4df83b2",
"assets/assets/icons/profile_chat.png": "dc89ae9f8908eadd0212d0e31dba7d78",
"assets/assets/icons/lock.png": "43245c338ceb6c23487550230345d2aa",
"assets/assets/icons/Group.svg": "0bb15de207f7c2c05e7ba94defe80e08",
"assets/assets/icons/stats.png": "e9f4ceddc5df56d74af04eacd188d92b",
"assets/assets/icons/sort.png": "b968ccd815e2712a67ad6cda088f73e4",
"assets/assets/icons/make_appointment.png": "e04ad659f0d99e4554e99e06ba473996",
"assets/assets/icons/electro_queue.png": "2ec7f99b26ffb1e7d15bdfe9f323cfe7",
"assets/assets/icons/request_review.png": "93fc9e0fbc09a1489ef786be7a12ee8f",
"assets/assets/icons/profile_man.png": "e71260d235df08773d92040072508850",
"assets/assets/icons/star.svg": "24f711da25971a6913f779964528c916",
"assets/assets/icons/appointment.png": "7cd7446639237cf7ce4a9e33325af6df",
"assets/assets/icons/info.svg": "ede2c249d088d9ab83ea0a77ecef537b",
"assets/assets/icons/filterToday.png": "fdf8bb8bf1821ba2673554a0be56d8de",
"assets/assets/icons/transaction.png": "bdcf001ffe093be39aed1b3e9081eec7",
"assets/assets/icons/date.png": "e5796381f3d137cbf89310eb4e4e1e71",
"assets/assets/icons/add_discount.png": "5a9dee0ef424c517d6e1677d795f4952",
"assets/assets/icons/arrow_up.svg": "ef01e2117c574f93f076a5728e0128af",
"assets/assets/icons/debtors_desk.png": "06f014280481daa2ba7a18eb3f15fc6a",
"assets/assets/icons/settings.png": "6f66b1d269d7970d6e27a0f9a61e8542",
"assets/assets/icons/Mail.svg": "deba8f9b4446c04abcf1cdca0590833a",
"assets/assets/icons/blue_plus.png": "0e066778bf6a10034c388b45f49556ba",
"assets/assets/icons/plus_procedure.png": "280b3772381966a4d9b0266c5e0ce870",
"assets/assets/icons/accept.png": "9de9d315f7c273fa78e7be029091517e",
"assets/assets/icons/scan.png": "b198b6c456540c8d364fe9684cd0280c",
"assets/assets/icons/pwa_chat.png": "7fc35c21f5dc442622fd24010d4942ad",
"assets/assets/icons/reset_casa.png": "a9519f54416b779b4d983ff87dce119d",
"assets/assets/icons/progressbar1.png": "381a5693b11b84fe58ac885ae1b48149",
"assets/assets/icons/referalls_desktop.png": "bcdbbdcf2d7f61a0bb3d2c136e36872f",
"assets/assets/icons/chat.png": "c8a6c18e597dd20eddfd1d1767ee3724",
"assets/assets/icons/change_casa.png": "4ab05481492109193134663e6895a313",
"assets/assets/icons/edit_discount.png": "ece69a7632abad7d7f012d96d5e59f10",
"assets/assets/icons/statistics.png": "21382fc49f05a69793e89e9ce4f9549b",
"assets/assets/icons/activated.png": "fb7bdab77200118b05bc3008073b733d",
"assets/assets/icons/replenish_dark_blue.png": "5c88e98ddacd9db45b3d018681b8621d",
"assets/assets/icons/tiktok.png": "b8aae0b03c58d028021bfa2255b1f955",
"assets/assets/icons/procedure.png": "7aa838a760e7ed6f483bca01f41363bc",
"assets/assets/icons/cash.png": "95a8bce9124b6d623e76e10546108bb0",
"assets/assets/icons/user_chat.png": "480b2915707ab45eb142c9f5811932b1",
"assets/assets/icons/arrow_down.png": "dd8501968753286113ec298a3bbd403e",
"assets/assets/icons/cash_bonus.png": "3226405feec4eafbbadf5c23c2308e75",
"assets/assets/icons/mark.svg": "347bf5b8265f38749ef33a50a0fa6c15",
"assets/assets/fonts/FixelDisplay-SemiBold.ttf": "d1f0fd31187c7f6bf7804f050c056f22",
"assets/assets/fonts/FixelDisplay-Regular.ttf": "aca7d90676a6c16b723d9cf5c90a434d",
"assets/assets/fonts/FixelDisplay-Bold.ttf": "feaa2e51d5f18c097e3383e981c9cc5a",
"assets/assets/fonts/FixelDisplay-Medium.ttf": "b5ec1af48130b7bc848670f8ef90dcee",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"index.html": "4e43e69d5f2acb7f9e3a6e59ac6fcc8b",
"/": "4e43e69d5f2acb7f9e3a6e59ac6fcc8b",
"drift_worker.js.deps": "23a57d89e5f483989c43e77ff1626c0b"};
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
