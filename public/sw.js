importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
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
    "revision": "ca42ffa72e0709fd425d7ad3a7b490a1"
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
    "revision": "29e73cbffb69d9a706c9184dff33c3d5"
  },
  {
    "url": "assets/icons/nav/stop.svg",
    "revision": "e3d0da25372c32b390a4a554215df628"
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
    "url": "assets/stamps/Contents.json",
    "revision": "dd4fa8ee80ae15162c5fee20c16092b2"
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
    "url": "assets/stamps/monsters_a1_003_2.png",
    "revision": "0ee940ce4bb71f84e20ef049f79fc148"
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
    "url": "assets/stamps/monsters_a4_006_2.png",
    "revision": "27cf55fb2f3aadbb30bba3552a6cbebe"
  },
  {
    "url": "assets/stamps/monsters_a4_006_bw_2.png",
    "revision": "428c3f73119e50e723b27be84a0c611d"
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
    "revision": "e21557bb6df2ed695c2bb325c9b83523"
  },
  {
    "url": "assets/stamps/teachers_anna_02.png",
    "revision": "c879776be17e35fbec5cb0985f00ab9d"
  },
  {
    "url": "assets/stamps/teachers_anna_03.png",
    "revision": "cba151d2e59037f8804b6bc9fc3d659f"
  },
  {
    "url": "assets/stamps/teachers_georgia_01.png",
    "revision": "7eff7c1167c82ccfdc04ae89953081a0"
  },
  {
    "url": "assets/stamps/teachers_georgia_02.png",
    "revision": "a6251242f8ce41272cbf64631fcc1795"
  },
  {
    "url": "assets/stamps/teachers_georgia_03.png",
    "revision": "237be37dc880d35cbcaa51bb16c14176"
  },
  {
    "url": "assets/stamps/teachers_joe_01.png",
    "revision": "ac6338a112465d17e4384094edfb0a05"
  },
  {
    "url": "assets/stamps/teachers_joe_02.png",
    "revision": "93df3bd7e8f898cdc299e33e67ab84f4"
  },
  {
    "url": "assets/stamps/teachers_joe_03.png",
    "revision": "04106ba994c910b20d64778eebaf0177"
  },
  {
    "url": "assets/stamps/teachers_michi_01.png",
    "revision": "cd7404310377c73ad51d74ec25c48b93"
  },
  {
    "url": "assets/stamps/teachers_michi_02.png",
    "revision": "1bdda783b70fe256096449968ae58fb8"
  },
  {
    "url": "assets/stamps/teachers_michi_03.png",
    "revision": "2bbb925d6d43f79be9019281f724a2cf"
  },
  {
    "url": "assets/stamps/teachers_profile_bw.png",
    "revision": "58dbd983df9eae2a211f779b142e1fd9"
  },
  {
    "url": "assets/stamps/teachers_rika_01.png",
    "revision": "75a6d9b7369290ca224ece66700f64a9"
  },
  {
    "url": "assets/stamps/teachers_rika_02.png",
    "revision": "1de75d618bdc3109d123b4ad1d67b9fc"
  },
  {
    "url": "assets/stamps/teachers_rika_03.png",
    "revision": "37da5d3ca1db4188bf7685cf982831b1"
  },
  {
    "url": "build/bundle.css",
    "revision": "368e518c20d03ec89214eceb74f0da10"
  },
  {
    "url": "build/bundle.js",
    "revision": "e6af54660a969094e2c0658ec76da7ca"
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
    "revision": "a68436f250632fb3375bd6a8bd2e8194"
  },
  {
    "url": "index.html",
    "revision": "11cefb9a55f1960beaec67bacd7a5e0b"
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
]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
