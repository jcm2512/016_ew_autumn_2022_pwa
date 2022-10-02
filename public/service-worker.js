/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/bg/hw_bg.png",
    "revision": "1332cc6970631de1f570e14dc842e978"
  },
  {
    "url": "assets/elements/dialog.svg",
    "revision": "bb8b962734e63e1c5e9b2c85515f88b8"
  },
  {
    "url": "assets/icons/nav/ghost-active.svg",
    "revision": "c7498c883a2314222ab68e5c8f3fd8bd"
  },
  {
    "url": "assets/icons/nav/ghost.svg",
    "revision": "8f3b663b2d698e4f9407c231e63c3b2a"
  },
  {
    "url": "assets/icons/nav/home-active.svg",
    "revision": "76e8f551a2ddb5d8e35f9ceaaab683aa"
  },
  {
    "url": "assets/icons/nav/home.svg",
    "revision": "62ac5fcddc5c3b93e3ddbf56ef99c513"
  },
  {
    "url": "assets/icons/nav/loading.svg",
    "revision": "7cd7f895b42751072fa90dbc8f227a80"
  },
  {
    "url": "assets/icons/nav/monsters-active.svg",
    "revision": "7f1503c0ccf56e3b3ed2bf4cf37ca9a9"
  },
  {
    "url": "assets/icons/nav/monsters.svg",
    "revision": "c7e1d900606d06709eeb0c093c20ab03"
  },
  {
    "url": "assets/icons/nav/scan-barcode.svg",
    "revision": "0ae82e1e2a1f8184d553aece97ce0fb2"
  },
  {
    "url": "assets/icons/nav/stop.svg",
    "revision": "27b511c41c88515b488be9a99c70e1f0"
  },
  {
    "url": "assets/icons/nav/user-square-active.svg",
    "revision": "84bd439569a52da11689068da9079484"
  },
  {
    "url": "assets/icons/nav/user-square.svg",
    "revision": "474b18ba76de299856b768a3fd289077"
  },
  {
    "url": "assets/icons/nav/verify-active.svg",
    "revision": "be92a4133b1b0ee62ff5fc2485d37408"
  },
  {
    "url": "assets/icons/nav/verify.svg",
    "revision": "3097887145fa434401654d98f9fcfd4b"
  },
  {
    "url": "assets/stamps/monsters_a1_001_bw.png",
    "revision": "083a25f9aa12d67a037706d7f434cc6b"
  },
  {
    "url": "assets/stamps/monsters_a1_001.png",
    "revision": "29c90130c7ca20969310228101797316"
  },
  {
    "url": "assets/stamps/monsters_a1_002_bw.png",
    "revision": "37bbab89b7ed5eee1b845f5678ae3ad1"
  },
  {
    "url": "assets/stamps/monsters_a1_002.png",
    "revision": "133a12c6344479e5683e790a2b302597"
  },
  {
    "url": "assets/stamps/monsters_a1_003_bw.png",
    "revision": "bbf3b6c1c97bd17f589af36db6e80afa"
  },
  {
    "url": "assets/stamps/monsters_a1_003.png",
    "revision": "1995c7e12cf6410ef4345bd002168255"
  },
  {
    "url": "assets/stamps/monsters_a1_004_bw.png",
    "revision": "f35d51a8a607b21d56f43489e239ee27"
  },
  {
    "url": "assets/stamps/monsters_a1_004.png",
    "revision": "1d2284b63f172518c85f34021b87c847"
  },
  {
    "url": "assets/stamps/monsters_a1_005_bw.png",
    "revision": "c15c021d9f57efa901ffed0b798b4993"
  },
  {
    "url": "assets/stamps/monsters_a1_005.png",
    "revision": "0ef5c86f65d8452e1111cbcfac40a98d"
  },
  {
    "url": "assets/stamps/monsters_a1_006_bw.png",
    "revision": "86214939ea64a53c46d0a30769e40590"
  },
  {
    "url": "assets/stamps/monsters_a1_006.png",
    "revision": "aba0341138ea6650b9a26805b2b709ce"
  },
  {
    "url": "assets/stamps/monsters_a2_001_bw.png",
    "revision": "6650bc13cf33a0d8075c81bd39fbbb4b"
  },
  {
    "url": "assets/stamps/monsters_a2_001.png",
    "revision": "9da790712d2453606816792816ffc958"
  },
  {
    "url": "assets/stamps/monsters_a2_002_bw.png",
    "revision": "c01c7749afb175b763aacccd20bf2d4c"
  },
  {
    "url": "assets/stamps/monsters_a2_002.png",
    "revision": "7a87e30b4a90e9441971fac7a3f9cba4"
  },
  {
    "url": "assets/stamps/monsters_a2_003_bw.png",
    "revision": "b760b5d59e29dc45551de1f4eeedc22c"
  },
  {
    "url": "assets/stamps/monsters_a2_003.png",
    "revision": "9df3c45f1094ff474ae2b35b06a8361b"
  },
  {
    "url": "assets/stamps/monsters_a2_004_bw.png",
    "revision": "abcfd70f4def940b07c719f33e43860a"
  },
  {
    "url": "assets/stamps/monsters_a2_004.png",
    "revision": "3e98f1596a197fb846fd37c13bdc2cc9"
  },
  {
    "url": "assets/stamps/monsters_a2_005_bw.png",
    "revision": "27613f3a8538b6a09ee23d718d558442"
  },
  {
    "url": "assets/stamps/monsters_a2_005.png",
    "revision": "f58b9df30e6c72243fb7a02591e176cf"
  },
  {
    "url": "assets/stamps/monsters_a2_006_bw.png",
    "revision": "2740c1a02b5bee9f5d964d1e7c708a69"
  },
  {
    "url": "assets/stamps/monsters_a2_006.png",
    "revision": "744eb9aa10f7bea22007135b6aa008fa"
  },
  {
    "url": "assets/stamps/monsters_a3_001_bw.png",
    "revision": "f03e610e521cf98d020a514022e6faaa"
  },
  {
    "url": "assets/stamps/monsters_a3_001.png",
    "revision": "1a64181db89be45ca758c90c69a6c346"
  },
  {
    "url": "assets/stamps/monsters_a3_002_bw.png",
    "revision": "ab9d85eace94ed4c1222664237099816"
  },
  {
    "url": "assets/stamps/monsters_a3_002.png",
    "revision": "0e3694879b58a3da01699b78e4abb586"
  },
  {
    "url": "assets/stamps/monsters_a3_003_bw.png",
    "revision": "fb0d72f347be359c3e13defddb9c4c41"
  },
  {
    "url": "assets/stamps/monsters_a3_003.png",
    "revision": "fc9a899e21eca7c9c8d20dad7f268100"
  },
  {
    "url": "assets/stamps/monsters_a3_004_bw.png",
    "revision": "36cbaaddb3fb7030285663a9acb2c502"
  },
  {
    "url": "assets/stamps/monsters_a3_004.png",
    "revision": "12bae3a718514bc62a98cf512e1310fd"
  },
  {
    "url": "assets/stamps/monsters_a3_005_bw.png",
    "revision": "ca899cbcfd7e3d631835b04c17aaa078"
  },
  {
    "url": "assets/stamps/monsters_a3_005.png",
    "revision": "055c11532b3616b46e0fd46418d852a7"
  },
  {
    "url": "assets/stamps/monsters_a3_006_bw.png",
    "revision": "5fd675a80dd86f2c331a3821a3f8d694"
  },
  {
    "url": "assets/stamps/monsters_a3_006.png",
    "revision": "6342a17932c1ea3dd25c7d8eaaf9aa75"
  },
  {
    "url": "assets/stamps/monsters_a4_001_bw.png",
    "revision": "fdafa7ee799ed1cf60b7ff5e8cbd8be8"
  },
  {
    "url": "assets/stamps/monsters_a4_001.png",
    "revision": "72f72b3be3269a6d545caa47e3758a3f"
  },
  {
    "url": "assets/stamps/monsters_a4_002_bw.png",
    "revision": "5b0a5a0ab5e1199131d3b2d32f0c8e0a"
  },
  {
    "url": "assets/stamps/monsters_a4_002.png",
    "revision": "5deadc2e5d1b248dbe5098679218c956"
  },
  {
    "url": "assets/stamps/monsters_a4_003_bw.png",
    "revision": "01a6502b8038d579e2c405e7ba78dbbd"
  },
  {
    "url": "assets/stamps/monsters_a4_003.png",
    "revision": "91eb9e3933b3e6f8eea4be7a213dbfde"
  },
  {
    "url": "assets/stamps/monsters_a4_004_bw.png",
    "revision": "88091c411e8ef60b66b66240c698f661"
  },
  {
    "url": "assets/stamps/monsters_a4_004.png",
    "revision": "f011002c77ae6ea1bbbec84d75b928e1"
  },
  {
    "url": "assets/stamps/monsters_a4_005_bw.png",
    "revision": "9dc4e5a107c520d5a4040ed57d1c3957"
  },
  {
    "url": "assets/stamps/monsters_a4_005.png",
    "revision": "3463ade2f5ca2e1b90f9603b1797f14f"
  },
  {
    "url": "assets/stamps/monsters_a4_006_bw.png",
    "revision": "868d7ee5759043781a1987007c119290"
  },
  {
    "url": "assets/stamps/monsters_a4_006.png",
    "revision": "f9171a065425fe8bbfb6d73e6b1c3857"
  },
  {
    "url": "assets/stamps/specials_a1_001_bw.png",
    "revision": "a12e1a8a5e2485438d6ff4c4952ff48e"
  },
  {
    "url": "assets/stamps/specials_a1_001.png",
    "revision": "0fc704cb1e4d1368324b03f5ec98d8fe"
  },
  {
    "url": "assets/stamps/specials_a1_002_bw.png",
    "revision": "3c94b36638d568ddfe06e46d73741d0b"
  },
  {
    "url": "assets/stamps/specials_a1_002.png",
    "revision": "1d146013f365831b519f8fb67ad4df8b"
  },
  {
    "url": "assets/stamps/specials_a1_003_bw.png",
    "revision": "1af2d20b194d3765fa6de631cf4f05f0"
  },
  {
    "url": "assets/stamps/specials_a1_003.png",
    "revision": "6314f41a1d59b4f66ce0720d2e3f176a"
  },
  {
    "url": "assets/stamps/specials_a1_004_bw.png",
    "revision": "d9f08bc25d4012371836bcc11445f94f"
  },
  {
    "url": "assets/stamps/specials_a1_004.png",
    "revision": "6a667ccf54f4e0fdec27973a46967ba2"
  },
  {
    "url": "assets/stamps/specials_a1_005_bw.png",
    "revision": "4531ac078a3a25e3fe832b023a9d29f8"
  },
  {
    "url": "assets/stamps/specials_a1_005.png",
    "revision": "f4ba72dddb33096e3ff67e81d60931ee"
  },
  {
    "url": "assets/stamps/specials_a1_006_bw.png",
    "revision": "1a75b27f5ec0e8d42f6aa6cb7d3bc2a2"
  },
  {
    "url": "assets/stamps/specials_a1_006.png",
    "revision": "af23c10d182de4ead1f347f51d61a9b9"
  },
  {
    "url": "assets/stamps/specials_a2_001_bw.png",
    "revision": "8e5618e56577f7bab4df9f33e6052bfa"
  },
  {
    "url": "assets/stamps/specials_a2_001.png",
    "revision": "1c0fe3787a2d591262b80a91051c3d42"
  },
  {
    "url": "assets/stamps/specials_a2_002_bw.png",
    "revision": "5471bc7e439399aa4b834f57e2024575"
  },
  {
    "url": "assets/stamps/specials_a2_002.png",
    "revision": "e657c8c32c6bf1176b12dfa2704c300a"
  },
  {
    "url": "assets/stamps/specials_a2_003_bw.png",
    "revision": "3474aba35e11b3ec79e5bc72d1da1e4f"
  },
  {
    "url": "assets/stamps/specials_a2_003.png",
    "revision": "f2cce16b33b7447dc46a8bad3bc54e59"
  },
  {
    "url": "assets/stamps/specials_a2_004_bw.png",
    "revision": "2a5e35f74961579d8d941091fa26dd45"
  },
  {
    "url": "assets/stamps/specials_a2_004.png",
    "revision": "2434ea6348ef8244ca57fa6928e63b29"
  },
  {
    "url": "assets/stamps/specials_a2_005_bw.png",
    "revision": "3a380a3ee4ece60d2a3ce70b43e0b428"
  },
  {
    "url": "assets/stamps/specials_a2_005.png",
    "revision": "b33f76664b8ccf3285146ac072463fc9"
  },
  {
    "url": "assets/stamps/specials_a2_006_bw.png",
    "revision": "8d9b5cd28c9bdda64cd1d7c26ee86605"
  },
  {
    "url": "assets/stamps/specials_a2_006.png",
    "revision": "bbd79c7d2f042b6c73e99f22c8244f1d"
  },
  {
    "url": "assets/stamps/specials_a2_007_bw.png",
    "revision": "e0946d9dd28f765a4fb0a8d7ba51ca33"
  },
  {
    "url": "assets/stamps/specials_a2_007.png",
    "revision": "07ed4b575817ee8e6504dbfd19e48bc6"
  },
  {
    "url": "assets/stamps/specials_a2_008_bw.png",
    "revision": "cd463e23b81100fa60daab2b05d40cf9"
  },
  {
    "url": "assets/stamps/specials_a2_008.png",
    "revision": "f7a01bfbe72c40544e61306ba47e263c"
  },
  {
    "url": "assets/stamps/specials_a2_009_bw.png",
    "revision": "60af59797ecea858f8dc4c82f80a8569"
  },
  {
    "url": "assets/stamps/specials_a2_009.png",
    "revision": "866f72e2e261e5ffadd4f0fb0f6ada31"
  },
  {
    "url": "assets/stamps/teachers_anna_01.png",
    "revision": "84237fbb4aa86d818476f7599ca717c8"
  },
  {
    "url": "assets/stamps/teachers_anna_02.png",
    "revision": "ae48632f71c59c2e3e2f2500ffbd9a7e"
  },
  {
    "url": "assets/stamps/teachers_anna_03.png",
    "revision": "6f0ff74143a184b122cdcbf24ed3bd0b"
  },
  {
    "url": "assets/stamps/teachers_anthony_01.png",
    "revision": "e04a12016ae0264f3db962403d6f0c50"
  },
  {
    "url": "assets/stamps/teachers_anthony_02.png",
    "revision": "f4cf6dda23bc12696b323afc01f49ba1"
  },
  {
    "url": "assets/stamps/teachers_anthony_03.png",
    "revision": "8fed417cd77bb5c38759844c7aedfda4"
  },
  {
    "url": "assets/stamps/teachers_avery_01.png",
    "revision": "b9058cf4e80c1c9f2f47eceb15809fa8"
  },
  {
    "url": "assets/stamps/teachers_avery_02.png",
    "revision": "da3f8d800553ab1fb29ba03a5834ddcb"
  },
  {
    "url": "assets/stamps/teachers_avery_03.png",
    "revision": "44f942481c10917a127d8391b13f2327"
  },
  {
    "url": "assets/stamps/teachers_ayako_01.png",
    "revision": "cd9bff305b9cdab14a32b27e7f446e17"
  },
  {
    "url": "assets/stamps/teachers_ayako_02.png",
    "revision": "f59132f2da486477a884246a6a606746"
  },
  {
    "url": "assets/stamps/teachers_ayako_03.png",
    "revision": "87a7af06799427aebd945c909e90d5b2"
  },
  {
    "url": "assets/stamps/teachers_brandon_01.png",
    "revision": "6c6d74262a0de01efbf2a97a57920da6"
  },
  {
    "url": "assets/stamps/teachers_brandon_02.png",
    "revision": "da00e0a02309c96a82f855e211cd76af"
  },
  {
    "url": "assets/stamps/teachers_brandon_03.png",
    "revision": "b98bade3c994cdb730475c35f38c36ed"
  },
  {
    "url": "assets/stamps/teachers_cameron_01.png",
    "revision": "459c224db34144dac98d0498d3919541"
  },
  {
    "url": "assets/stamps/teachers_cameron_02.png",
    "revision": "ac2ca3d941c17273b590c7b2db3eb543"
  },
  {
    "url": "assets/stamps/teachers_cameron_03.png",
    "revision": "4a1e4ef2a2debce556d94570a2042f52"
  },
  {
    "url": "assets/stamps/teachers_chance_01.png",
    "revision": "db3c20fbd83229808f43dccfb4f80f8c"
  },
  {
    "url": "assets/stamps/teachers_chance_02.png",
    "revision": "db3c20fbd83229808f43dccfb4f80f8c"
  },
  {
    "url": "assets/stamps/teachers_chance_03.png",
    "revision": "db3c20fbd83229808f43dccfb4f80f8c"
  },
  {
    "url": "assets/stamps/teachers_chris_01.png",
    "revision": "f47504a31c50daaed5c3b07ad76e2ed6"
  },
  {
    "url": "assets/stamps/teachers_chris_02.png",
    "revision": "5929ec991996ebae071dd404cec9728e"
  },
  {
    "url": "assets/stamps/teachers_chris_03.png",
    "revision": "9c2f8ea71e04015a3b55fd962c2af07d"
  },
  {
    "url": "assets/stamps/teachers_georgia_01.png",
    "revision": "3c10008c871958596b068caf246256b0"
  },
  {
    "url": "assets/stamps/teachers_georgia_02.png",
    "revision": "1ca1ad89de5aac168e544b309e050215"
  },
  {
    "url": "assets/stamps/teachers_georgia_03.png",
    "revision": "35592e07bb4e67919dce3e5e1ccac50e"
  },
  {
    "url": "assets/stamps/teachers_haruka_01.png",
    "revision": "e643774c28fd28efa20489d4a2ffe1c8"
  },
  {
    "url": "assets/stamps/teachers_haruka_02.png",
    "revision": "b2e52aefd0f5c49bfa5337e6efd7f066"
  },
  {
    "url": "assets/stamps/teachers_haruka_03.png",
    "revision": "0aba398c8bc79e5fe624f493107cfd5b"
  },
  {
    "url": "assets/stamps/teachers_isaac_01.png",
    "revision": "eb78285edddfadcbd81a3f2b12313545"
  },
  {
    "url": "assets/stamps/teachers_isaac_02.png",
    "revision": "37be55b20da4cdbd248d9a8b8a769b58"
  },
  {
    "url": "assets/stamps/teachers_isaac_03.png",
    "revision": "62348f9a77fd89fa25c11852200a7dde"
  },
  {
    "url": "assets/stamps/teachers_james_01.png",
    "revision": "99ee333579707d62e446c9222a5d00c8"
  },
  {
    "url": "assets/stamps/teachers_james_02.png",
    "revision": "046e15f1cc7aebe94f352de737303b05"
  },
  {
    "url": "assets/stamps/teachers_james_03.png",
    "revision": "3933e9d6ab55c40a4b8b066486853f19"
  },
  {
    "url": "assets/stamps/teachers_jason_01.png",
    "revision": "be04d415fe61f2dc749c09fd0b5059f7"
  },
  {
    "url": "assets/stamps/teachers_jason_02.png",
    "revision": "fc12469992e915beff7583a9c104635d"
  },
  {
    "url": "assets/stamps/teachers_jason_03.png",
    "revision": "a615708379b851c7964f36a4162d62aa"
  },
  {
    "url": "assets/stamps/teachers_joe_01.png",
    "revision": "069b4403f9165d1e6a73f8e42cd065cc"
  },
  {
    "url": "assets/stamps/teachers_joe_02.png",
    "revision": "a70a6558344643adb460064c26b41f72"
  },
  {
    "url": "assets/stamps/teachers_joe_03.png",
    "revision": "04adf66910877070d09e9145a7a4190c"
  },
  {
    "url": "assets/stamps/teachers_joey_01.png",
    "revision": "1257d798382b9ea1128f3763e905417e"
  },
  {
    "url": "assets/stamps/teachers_joey_02.png",
    "revision": "39604c03d8e132c911de1bf49af13ce4"
  },
  {
    "url": "assets/stamps/teachers_joey_03.png",
    "revision": "de7447f8be5514a586b143aa5f30d7dd"
  },
  {
    "url": "assets/stamps/teachers_katrina_01.png",
    "revision": "db3c20fbd83229808f43dccfb4f80f8c"
  },
  {
    "url": "assets/stamps/teachers_katrina_02.png",
    "revision": "db3c20fbd83229808f43dccfb4f80f8c"
  },
  {
    "url": "assets/stamps/teachers_katrina_03.png",
    "revision": "db3c20fbd83229808f43dccfb4f80f8c"
  },
  {
    "url": "assets/stamps/teachers_kuni_01.png",
    "revision": "db3c20fbd83229808f43dccfb4f80f8c"
  },
  {
    "url": "assets/stamps/teachers_kuni_02.png",
    "revision": "db3c20fbd83229808f43dccfb4f80f8c"
  },
  {
    "url": "assets/stamps/teachers_kuni_03.png",
    "revision": "db3c20fbd83229808f43dccfb4f80f8c"
  },
  {
    "url": "assets/stamps/teachers_mari_01.png",
    "revision": "db3c20fbd83229808f43dccfb4f80f8c"
  },
  {
    "url": "assets/stamps/teachers_mari_02.png",
    "revision": "db3c20fbd83229808f43dccfb4f80f8c"
  },
  {
    "url": "assets/stamps/teachers_mari_03.png",
    "revision": "db3c20fbd83229808f43dccfb4f80f8c"
  },
  {
    "url": "assets/stamps/teachers_michi_01.png",
    "revision": "a9bf9a3508c1a848bfd8513968225497"
  },
  {
    "url": "assets/stamps/teachers_michi_02.png",
    "revision": "e2e51ff959f98cb24b745b18cc35f720"
  },
  {
    "url": "assets/stamps/teachers_michi_03.png",
    "revision": "5366e6497592353be295a5b431be7eed"
  },
  {
    "url": "assets/stamps/teachers_mike_01.png",
    "revision": "db3c20fbd83229808f43dccfb4f80f8c"
  },
  {
    "url": "assets/stamps/teachers_mike_02.png",
    "revision": "db3c20fbd83229808f43dccfb4f80f8c"
  },
  {
    "url": "assets/stamps/teachers_mike_03.png",
    "revision": "db3c20fbd83229808f43dccfb4f80f8c"
  },
  {
    "url": "assets/stamps/teachers_profile_bw.png",
    "revision": "58dbd983df9eae2a211f779b142e1fd9"
  },
  {
    "url": "assets/stamps/teachers_rika_01.png",
    "revision": "7f87b0847694b6337e2871e624a6a183"
  },
  {
    "url": "assets/stamps/teachers_rika_02.png",
    "revision": "7bee84e75850ff880bd53e7c41768fd5"
  },
  {
    "url": "assets/stamps/teachers_rika_03.png",
    "revision": "465aa96f49ff4d80679451ac1a7ab1d6"
  },
  {
    "url": "assets/stamps/teachers_sakurako_01.png",
    "revision": "80cd1b6aa216a1c0180c4fc5f580eab6"
  },
  {
    "url": "assets/stamps/teachers_sakurako_02.png",
    "revision": "f6122b8bca139e84f21c1d1c6564c6f6"
  },
  {
    "url": "assets/stamps/teachers_sakurako_03.png",
    "revision": "365d91721be3a6937ff083a6a3e1a027"
  },
  {
    "url": "build/bundle.css",
    "revision": "2a35b22aa83b2ced60a7ecc30ee39e1b"
  },
  {
    "url": "build/bundle.js",
    "revision": "677d073738152e6df6fe90f51f79bf5b"
  },
  {
    "url": "favicon.png",
    "revision": "df91dc163c369f33f94340a06d5e0964"
  },
  {
    "url": "fonts/Fredoka-Regular.ttf",
    "revision": "31d41d3ce805bcfad27a5437876fe814"
  },
  {
    "url": "fonts/KaiseiDecol-Regular.ttf",
    "revision": "5355e690ad486524e38bee0ad2ac895c"
  },
  {
    "url": "fonts/KosugiMaru-Regular.ttf",
    "revision": "f0f9ba6949b53fa1ec3a5c49e508bcda"
  },
  {
    "url": "fonts/LondrinaSolid-Regular.ttf",
    "revision": "0e0c966ac6cad3afcfd672c96197f360"
  },
  {
    "url": "fonts/LuckiestGuy-Regular.ttf",
    "revision": "79188087ce07615e9fb2c074d8808bdb"
  },
  {
    "url": "fonts/Senobi-Gothic-Medium.ttf",
    "revision": "1458e60247321629e03e9ff1be695cd4"
  },
  {
    "url": "global.css",
    "revision": "aeb426816bf0db6ca81b894f9925a1a3"
  },
  {
    "url": "index.html",
    "revision": "0f4a97791a103c815c87094083bde1b3"
  },
  {
    "url": "logo.png",
    "revision": "21d40c1e0d9e5724ba49f277a8ae483f"
  },
  {
    "url": "manifest.json",
    "revision": "93c368ea106ff7a0e8c666f09eb334ff"
  },
  {
    "url": "offline.html",
    "revision": "65e942e3cfc99e7d3432d3939bc66a09"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
