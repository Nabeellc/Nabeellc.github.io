'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0fd0db7e3e6b5bea0234f5a2abdfa3cc",
"version.json": "9b33e0dc17da6034c672430dff55eb11",
"index.html": "a1100abd09d4cc14f4f18bebe04c610a",
"/": "a1100abd09d4cc14f4f18bebe04c610a",
"main.dart.js": "74af626ef65aa0bd8c103cd95798945f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2a1c2862bfeaf3afc019efea981e3295",
".git/config": "86053aa7e944eac078515c4f12448724",
".git/objects/61/a406deef0b5f4a9d185df1d55700536fbc652e": "84f717699469614a722166b927416f49",
".git/objects/95/3aeb04fae5ecd56f206e9e93ce5a80d2783e4c": "ef14b4874f2821b112dc7922ced4b9de",
".git/objects/0c/4ca19d2db0df7237c295e883f3dc63073f144c": "510504ab0b721e4e0cd50ebc86f15302",
".git/objects/3e/42c735951dc033181f6f10fc12c5c10e1b9f7e": "9f55ae8c12d8f753c350b4103d0fe9c3",
".git/objects/9e/ef5f3f0930fed18bfd7f115b4bcb2effc6fa27": "fc5d70fec2cec842c2aba876048af2f1",
".git/objects/9e/e4cb2c75b531c133d30d9feb731879dfeacdc7": "5ab7a1ac30c73da0f8c9ef746fd84fe4",
".git/objects/33/3963e0311f80f6403f77cc61d0b9fe90ec3056": "86919acf41e93cbf482b6f1d702d5830",
".git/objects/9c/63e0c4894ad2ddba48d332b04e0f0a713547c1": "a0ff04d5c0dd7b6dff718dc4352a755b",
".git/objects/a4/dd9679d0b4e2e5b6880c7605d7f02909b2f00d": "fcd647a56b6df208472e48d713eaf042",
".git/objects/b2/4b5ff5e9f1c3b51dd746e769099db8c6cdc04e": "02a7449a57c690c813a64555d80c0c4d",
".git/objects/ad/8da24fcb341ed5c4a782534db4b7659e96be4b": "4db672a8a0aa47c64a096a01eec21e15",
".git/objects/b4/b95a88cd8d7865904f25cae6812ff3c9f2cac3": "5ed6772a181899af4a1fbab335e41805",
".git/objects/d1/f9e6d7297798204eebc52d3dab39b3554558f6": "11a92a8b4be6311b133431870341c722",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/1248c4d8648c1a42d47b626a2f2837d01e4c7e": "4bc6aad9c151e94efb0bcb80a5677127",
".git/objects/f4/3f00db94f9913d1dc05c0b085af840308158ec": "3b3fb368871aa76346534e2828de2bf2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/8f865279fb7fedac45079c1847a2b9610521ef": "c07e7345773a32a3d1f2059af526c62e",
".git/objects/fd/a3b3d590ed6557d384714a162a096b54cafe75": "22c91f066f4698627c14b654d53483b4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/47889c7d8d414d31d55c4a72145ffa31d752ff": "c7113081690118092588dd42a6bbe946",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/4e/522a06a4f08a0ac7e830997374d41b8512ae3f": "5c9764c24148b3ce14e1b19cd634099e",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/11/b3c34b0a7ed5fdbc55c1d51075596e7a343bae": "dedc96e787f515ab31f6291a9d5ce2cd",
".git/objects/7d/2a8a9d9a4ed0e867e77724add96a3ff7f1cd3c": "aa78531d37c956d8c3e60398854859da",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/91f22a315762e154b4e48ff0b620d47d2e4003": "45d8a09c320823827e91e6ae009728d4",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/87/ad17007662e74ee4fddd5bc68916ce55d99990": "d735b001a67ed314b11a62f7319aed59",
".git/objects/8f/8fe5991cc89f61743fa2a13f2d30d0a3b69c54": "c03201ace0cc3acbdff8b12c8551d0ac",
".git/objects/8a/dfef85e5b33b78a26a220d8ccb7a464d692aa1": "4f2dfb41b69f67e8562c6438613eca4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/64e19db112cef9505060e294487fc633097835": "1b83304de8fcf73cce76500dc07f8c12",
".git/objects/26/73602095b85c95c58bf03a9eda0ea61d724353": "aa1850a95cb7aedea607fe63668b03c9",
".git/objects/86/185a97a388a87e1f040a95393a9330d1c0a073": "3153cf822f26d99885ed251af3d9a4f7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/ee248bd90ed54932381c9d0f40016d21153165": "c73e7277f2ac3aa6ff961f3d0bfd58cf",
".git/objects/09/9595f87faa1130e8e04a94a7ed4698284b1269": "09b50bbf0dec61adfe49c3b7f6b0b82a",
".git/objects/3f/cfd587b562815bcebfe80b88a811e117e8f8f1": "378bcf77a8626fdd9b6b04b5a0f0937e",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/39/ef62222992ce566727410e34b92ce3e02e0f36": "9afc0fa0de273af6f54ace723fa5457c",
".git/objects/55/e8233604cd2da445f38c5643e3f2c91addd55b": "bb6b371ee438284393624a77d6695ca9",
".git/objects/55/ad1da359a675fa986c05f0535eb2651a22f4c5": "788c7a3dde860d37c90c0ed3facf9ed8",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d3/3a91ddbc3240643ec6c1bfc86d231aa1d6a92f": "dc96f7c2a989050b8ca106ca6188f013",
".git/objects/d3/82e4a46070f7581c06d9d307e8b54dd6e8c266": "bca38bbf752019d131e87caef0b97091",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/56ca3ba9d6888cd03833f5a2b2a5d9c08d2877": "c0939d59f53edbe393bf57d429c5ab61",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/dc5355cfb6c497b2576ef554222a80b7474fe0": "8c10311d1528f267afcb19e9a3e060a0",
".git/objects/d2/e35ba7310f6f04f378584211e97021dcf55b9d": "b729ba5113dde46ac1a0d87e57536e6b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/0990547d61f3cdcf1614456603ec8819d81063": "5c607df8a7f53b9b27d54feaba66c38c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/ea/18c9895f624b678c5bfd164be1a56d1d7337e8": "1016a9f0a7e6373c2356dc4b49472a9f",
".git/objects/e6/98e9abae2ffff6926a04786a79bb7378524f43": "efcc3a668107adabdcc9411c1b21928b",
".git/objects/f9/438258e6b0f573cd4c45d41a0e6c969622f275": "a2fb86b339bdf118d45802ed8865b6f4",
".git/objects/c2/bd3920740c4533560930a1c552015c69efef2a": "692ba1f77a5fe4205cae0369f5ad8a20",
".git/objects/f1/7e87f3e4533a431e54faf003cb316811e32496": "c9fb44c4050502674f8d282b2888fd73",
".git/objects/f8/6d4bc11ff9e3e8fdb9fde42f8e5be32783bd6d": "25d8cbc16b51478fd437611e8dc51ad5",
".git/objects/e0/93d8bbd2c80d3d3ae938321e97188e6a18d030": "e43aa761056327ff07f63cc409928b81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6b0dff6750cee3c0b2a7b6f0f360229db14ef7": "6fd31eba20a5d051a9f197bb0074a9e5",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/48/58a675ba79b73e0e232d33ff62e02c7892e63e": "9b844f79b6dffb868f862e9527af7fab",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/12/903c6f606ccb3c4320a7fa4ae1872fb6b9b724": "dc5dd7072010d49fafc818c5321c6c2f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/82/9410c70fa6f41c2f3a998a64981046409c1368": "9bcd331aa5e8374fde91e581cdfca286",
".git/objects/2e/7131f2098587f151de196b25656e2e303a14e1": "1ab191c330a2f4a3351a3461cd63da03",
".git/objects/2e/6da85cb1d71cbdacc6a42cc03efa865b789f3b": "63d61bff88b39a71aab0e00d5e05e2e0",
".git/objects/47/ea720e3971a761825f0f6b7a3bf82311647442": "4fa74c24c8bf0f1229a2fbb68fcabcd1",
".git/objects/78/a457e7122196c06f66d3bc9477eeea28c160b8": "d75a92b329f7a07f4e9e1d590adca1d8",
".git/objects/78/9da555426dce34be1aa66386f39b9482f7284c": "9c37ba5fbd62d1116095be33979999a6",
".git/objects/13/7db1e054691aa6f71e6faaf32782a97987704a": "b53a08ada3c5c35208eaeb344d9e2857",
".git/objects/7f/b6e89b0abdd9636a74f294fb4fe038d04d1571": "c765c121dcb43927f7ffc54b6b4217eb",
".git/objects/8e/faf0194b7cb391a7a30fa359da12cb13f4b380": "154707cd7a349caeb7d88a6cfe27d01e",
".git/objects/8e/7010834f59b6c8c1548d8c90bb0c562d003c5c": "5f7bd178e9027281bbf54490be79d3d8",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d3519d1b32269df818c751a4c679e7a9",
".git/logs/refs/heads/main": "c0454d754835bb2f35b2caeeda266ec0",
".git/logs/refs/remotes/origin/main": "11e84527309ed10f0851bf9d73b69799",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-commit": "4d58bc5ca88e7330533771a694429974",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/post-checkout": "ef678df1e004da305e21cdeead47876f",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push": "a9399d70a31d576f0435e776cae4934e",
".git/hooks/post-merge": "675fe1c500a971841ba2e5abc1aeb579",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c38810f8d452d24b4ec0c7947047fdcf",
".git/refs/remotes/origin/main": "e7875488da26570c603c7c05f020bd51",
".git/lfs/cache/locks/refs/heads/main/verifiable": "91188ef767ae3a3a42e92f1706f161d0",
".git/lfs/objects/9b/e8/9be8fc6b1165a0c9d72f5bf9d6d841a6f9fe9d5369a682718cb94b5f0648a6ed": "c92ea2d936371e5ec62d4e78a29a0b08",
".git/lfs/objects/6a/ee/6aee06cdcab6b2aef74b1734c4778f4421d2da100b0ff9e52b21b55240202929": "301a7604d45b3e739efc881eb04896ea",
".git/lfs/objects/3d/ce/3dce99077602f70421c1c6b2a240bc9b83d64d86681d45f2154143310c980be3": "ac9a721a12bbc803b44f645561ecb1e1",
".git/lfs/objects/a3/6c/a36c6938340ce3bd5bbe926f086f597d3eb92730fbf12dcf6bb95ddf3fa6c455": "78e6081bd171ee00e8fda4906c823398",
".git/lfs/objects/b5/e0/b5e0ebc7670cf108185860fe5971bcd7762ccfa28caa78509382e4088b3e2bd2": "966a6fb680871a3b2c283a5e5aa25fb8",
".git/lfs/objects/b4/42/b44242f56c441de913468b25a65606b25f49520411f02f4ed4e38c5c259b5be1": "47084728848e4dc852eca4a401ccc3c6",
".git/lfs/objects/bc/51/bc514611c26f3b1b3e57968047a9db5adebba91ff8b5d9175ace4d606bfc9e74": "b0077beae687348c775a3ed58bc0fcac",
".git/lfs/objects/fe/97/fe978cd0c09f69eec9d660fe37d8cb63bca783011a53786743ca05eda81eb1a4": "64af6cc0cc92ef5fcdf94c4e383ec7ae",
".git/lfs/objects/27/4b/274bc88473b2b70c27519a850dc01bbd76ea480fe221fbb4ba9db9d0141e278c": "6d0e6f088cdb7a8357691719a1677583",
".git/lfs/objects/4b/38/4b3869370934791157dc38dfbe69685030167f8a21c8641ecf254ea88b4bd62a": "e57aec446c5a348d267003f0a77bb46f",
".git/lfs/objects/19/f7/19f74c3f3ea3502b414e4c40d54a80dc27eebda9cd16d03fde4849fbd76f8a12": "1c973723a4767287ce363c228d6c9a5c",
".git/lfs/objects/88/69/8869f0dbaeb98779899c312b7e7cee7d3ab4361572662e585dbad4a68168f3a3": "2ed93b5ee28f8373a433d23240fef327",
".git/lfs/objects/88/d4/88d466d1764119fdf0180a96e327cc66e815e7af037fd696208e270be1869103": "d21df10c2160fa6a96558ccc6acdb016",
".git/lfs/objects/91/83/91834a8539fa82195ba6fcce27cd38e9de997ee719f3c5002421429c8b4affd6": "835ad53b4cfd2bc467ac597fc6f6b4be",
".git/lfs/objects/ba/cc/baccb205ae45f0b421be1657259b4943ac40c95094ab877f3bcbe12cd544dcbe": "96e752610906ba2a93c65f8abe1645f1",
".git/lfs/objects/a7/f4/a7f465ec2821cc1aadda01aaf30182d433380438a95dc88359721fa184ef211b": "409a9e2c284e9704fbaa6e665f6230e0",
".git/lfs/objects/d2/c8/d2c842e22a9f4ec9d996b23373a905c88d9a203b220c5c151885ad621f974b5c": "c457ef57daa1d16f64b27b786ec2ea3c",
".git/lfs/objects/7a/b2/7ab2525f4b86b65d3e4c70358a17e5a1aaf6f437f99cbcc046dad73d59bb9015": "5dcef449791fa27946b3d35ad8803796",
".git/index": "b40bb2994a64517e9debbb58689db1be",
".git/COMMIT_EDITMSG": "73f596ca7c3fdeb6b070d57c2351f833",
"assets/AssetManifest.json": "bb8642370e6a24b912d83b9c745edede",
"assets/NOTICES": "3e90404282d164217f720c9fef5e9b18",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "8504744836b7fd5f20f16911861368d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "94a97670e451f1306f35ae58cdbb3119",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/logo1.png": "2ed93b5ee28f8373a433d23240fef327",
"assets/assets/images/logo3.png": "b0077beae687348c775a3ed58bc0fcac",
"assets/assets/images/logo2.png": "1c973723a4767287ce363c228d6c9a5c",
"assets/assets/images/logo5.png": "78e6081bd171ee00e8fda4906c823398",
"assets/assets/images/logo4.png": "e57aec446c5a348d267003f0a77bb46f",
"assets/assets/images/granite2.jpg": "47084728848e4dc852eca4a401ccc3c6",
"assets/assets/images/granite3.jpg": "c92ea2d936371e5ec62d4e78a29a0b08",
"assets/assets/images/granite1.jpg": "6d0e6f088cdb7a8357691719a1677583",
"assets/assets/images/granite002.jpg": "409a9e2c284e9704fbaa6e665f6230e0",
"assets/assets/images/granite4.jpg": "d21df10c2160fa6a96558ccc6acdb016",
"assets/assets/images/granite5.jpg": "835ad53b4cfd2bc467ac597fc6f6b4be",
"assets/assets/images/granite6.jpg": "64af6cc0cc92ef5fcdf94c4e383ec7ae",
"assets/assets/icons/instagram.jpeg": "3f73f040d2554cca8ea298c0d1dce0ac",
"assets/assets/icons/facebook.png": "966a6fb680871a3b2c283a5e5aa25fb8",
"assets/assets/icons/whatsapp.jpeg": "ce419199294e28b6d071b5fe42837ae3",
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
