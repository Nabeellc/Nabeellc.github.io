'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "33b58421035a90cab04ba196966541da",
"version.json": "9b33e0dc17da6034c672430dff55eb11",
"index.html": "a1100abd09d4cc14f4f18bebe04c610a",
"/": "a1100abd09d4cc14f4f18bebe04c610a",
"main.dart.js": "1496847558c00d2b2a7c9e152e041c51",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2a1c2862bfeaf3afc019efea981e3295",
".git/REBASE_HEAD": "5c7aab099e70702c0f0e2834d2434d07",
".git/ORIG_HEAD": "5c7aab099e70702c0f0e2834d2434d07",
".git/config": "68f0e4629867b2e423954b3b48521b32",
".git/objects/61/a406deef0b5f4a9d185df1d55700536fbc652e": "84f717699469614a722166b927416f49",
".git/objects/95/3aeb04fae5ecd56f206e9e93ce5a80d2783e4c": "ef14b4874f2821b112dc7922ced4b9de",
".git/objects/0c/4ca19d2db0df7237c295e883f3dc63073f144c": "510504ab0b721e4e0cd50ebc86f15302",
".git/objects/3e/42c735951dc033181f6f10fc12c5c10e1b9f7e": "9f55ae8c12d8f753c350b4103d0fe9c3",
".git/objects/50/4f935746d8779c79b48acb6261dc88464c0e95": "89a8cfa70c489edadff12b06d7a16e79",
".git/objects/9e/ef5f3f0930fed18bfd7f115b4bcb2effc6fa27": "fc5d70fec2cec842c2aba876048af2f1",
".git/objects/9e/e4cb2c75b531c133d30d9feb731879dfeacdc7": "5ab7a1ac30c73da0f8c9ef746fd84fe4",
".git/objects/6a/4a2b0af50a34633971130a62aa49f10675c7a6": "c8fd8381e26f8ac2146dfd5113039c14",
".git/objects/32/2cc54b7c03cc4dfc557a32237117386cde13c1": "e748f8c55572d5d7978fb3f54b0d2d49",
".git/objects/32/04ca4282aca951de6a2888987149d526f34870": "a0f4ac74cebf2c267d419921218c58d7",
".git/objects/3c/d5d1f97d9954df09bc800d227902ce1f2ddba6": "87cc8a742c692aac2534d49fa0d2a854",
".git/objects/33/3963e0311f80f6403f77cc61d0b9fe90ec3056": "86919acf41e93cbf482b6f1d702d5830",
".git/objects/05/7bb901f4feaa10fd68f69d4c4ddfe82e50934e": "ca63682ab3b3a8408dcd445a29e6c66f",
".git/objects/05/063fdb76ff57803c914c1679e99a45df8fb787": "9823e22a3b41bfd2d8be02c579393fb2",
".git/objects/9c/4bbe49baa2228142a6d35edb846c149ade6576": "b488f47824e15426a3c8d46f50cf6882",
".git/objects/9c/63e0c4894ad2ddba48d332b04e0f0a713547c1": "a0ff04d5c0dd7b6dff718dc4352a755b",
".git/objects/a4/dd9679d0b4e2e5b6880c7605d7f02909b2f00d": "fcd647a56b6df208472e48d713eaf042",
".git/objects/b2/661ad5408c179c4b6f0d3c405ef650aafb2c58": "9dbf9a8fabda7b88e11201b3c936f5f7",
".git/objects/b2/4b5ff5e9f1c3b51dd746e769099db8c6cdc04e": "02a7449a57c690c813a64555d80c0c4d",
".git/objects/ad/6b80e32ee552d1f5c372c9e7830f474881df79": "89cbe0b127623c421f0624986ae2e645",
".git/objects/ad/8da24fcb341ed5c4a782534db4b7659e96be4b": "4db672a8a0aa47c64a096a01eec21e15",
".git/objects/be/1aa9db5cacf4931ba6d514b72716d28086220d": "737b0433cccfc3dc4d0adb1e0a91b3e5",
".git/objects/be/58c37240ecee3b8808af478f6602ac0bf8b0b9": "a25409007fc5e9fb1eb102ac635935cd",
".git/objects/b4/b95a88cd8d7865904f25cae6812ff3c9f2cac3": "5ed6772a181899af4a1fbab335e41805",
".git/objects/a5/2321ad74f0e05b4922bb710c1e765780cdd2dc": "bfbe6ec9d6320ef67c1018b546a57384",
".git/objects/d1/f9e6d7297798204eebc52d3dab39b3554558f6": "11a92a8b4be6311b133431870341c722",
".git/objects/d6/269d9507dbe04bc68610392d876cbec4bdf139": "a245167a9fef8121fb1d64fbc4e648ca",
".git/objects/d6/bf0da08ad77d9bba34a34b08724a7830c5991e": "266f10d52604b6c77aa59e28845afb02",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/081800c7e2023b10c021c264e81eb28298b815": "93bc40a3b49c15f0c376b72f931e49dc",
".git/objects/bc/5c18336cc6b196a5beaf54fa22e9be859fe9ab": "5339c96caa145e17d077e8b4479e9315",
".git/objects/bc/39760bffdc9795d7d5c348fbacdf9bc5b87601": "f3c5a3ef5ae6bf512d5a3a23603b0f23",
".git/objects/d8/b7814e6f2a83f14e4e9af0b0c591635f413295": "0a491958eb4034cf56cd534a3d385de4",
".git/objects/d8/e1eef6123f99157fdf1ea090f6220e6518e761": "9d3312562b41fcdc6bad22080d9b4fc7",
".git/objects/ab/1248c4d8648c1a42d47b626a2f2837d01e4c7e": "4bc6aad9c151e94efb0bcb80a5677127",
".git/objects/ab/09d7d9f577936851030adfd4cb96feec1e9c19": "ba1692a704a8167243297630fecd2795",
".git/objects/e2/ed1140b907f2379973870b9166859db05b03cf": "726f095bf619365e97f2c3dc3ce8450d",
".git/objects/f4/3f00db94f9913d1dc05c0b085af840308158ec": "3b3fb368871aa76346534e2828de2bf2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/8f865279fb7fedac45079c1847a2b9610521ef": "c07e7345773a32a3d1f2059af526c62e",
".git/objects/fd/a3b3d590ed6557d384714a162a096b54cafe75": "22c91f066f4698627c14b654d53483b4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/47889c7d8d414d31d55c4a72145ffa31d752ff": "c7113081690118092588dd42a6bbe946",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fe/a440fef50ea71d46e82db8014a1999fce33deb": "02c0fb9baa25d358ce822b0566607dc6",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/4e/522a06a4f08a0ac7e830997374d41b8512ae3f": "5c9764c24148b3ce14e1b19cd634099e",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/4b/f6e57c4a8601b8573b24b4354ee6b76bf886fb": "c73c29b5815d6676e33c123c1a3b2b8e",
".git/objects/4b/f0169d0d60a14c0c29ec070f9e2986991c6772": "2ae77c3265fd9114f60ff8b9a1d87da5",
".git/objects/11/b3c34b0a7ed5fdbc55c1d51075596e7a343bae": "dedc96e787f515ab31f6291a9d5ce2cd",
".git/objects/7d/2a8a9d9a4ed0e867e77724add96a3ff7f1cd3c": "aa78531d37c956d8c3e60398854859da",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/91f22a315762e154b4e48ff0b620d47d2e4003": "45d8a09c320823827e91e6ae009728d4",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/87/6de8a3fdf07fcfad18e44c839a3e4fb2872a85": "43ebe2bc21c665d6ce715d6fd1794189",
".git/objects/87/ad17007662e74ee4fddd5bc68916ce55d99990": "d735b001a67ed314b11a62f7319aed59",
".git/objects/74/66a3dd42419b6532ff5aab29b00fc955841063": "46081dc95ccdff660937f67558ec41f8",
".git/objects/8f/8fe5991cc89f61743fa2a13f2d30d0a3b69c54": "c03201ace0cc3acbdff8b12c8551d0ac",
".git/objects/8a/dfef85e5b33b78a26a220d8ccb7a464d692aa1": "4f2dfb41b69f67e8562c6438613eca4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/7066101ec349d4c3334e058a179579b987a200": "39c858743503041acd149adec6ef46e1",
".git/objects/7e/d8e838ae992f7c28a1549d044b78f305204fbb": "f538a4e2154c60c233a398e6c60eedd0",
".git/objects/19/97d8c7fad9ea17500deaaf87411a9116bbba5f": "20b5542167828d93181a0022ead2377d",
".git/objects/26/64e19db112cef9505060e294487fc633097835": "1b83304de8fcf73cce76500dc07f8c12",
".git/objects/26/73602095b85c95c58bf03a9eda0ea61d724353": "aa1850a95cb7aedea607fe63668b03c9",
".git/objects/86/185a97a388a87e1f040a95393a9330d1c0a073": "3153cf822f26d99885ed251af3d9a4f7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/4be0ca3910b4b33190eb373bbcbac59c0b40c6": "74f5fcdcbb1b772328725a4999db5940",
".git/objects/9a/3321e9b787e7b4610ad8def852d13f125c3c2d": "c541c9bd31a8896225de46e4658e3f69",
".git/objects/9a/ee248bd90ed54932381c9d0f40016d21153165": "c73e7277f2ac3aa6ff961f3d0bfd58cf",
".git/objects/36/44c21e73e8a2448f8b4395c4e60ea0940703b7": "9d859dac503d2d3b083061c6702e4dba",
".git/objects/09/9595f87faa1130e8e04a94a7ed4698284b1269": "09b50bbf0dec61adfe49c3b7f6b0b82a",
".git/objects/98/2bfc8d52553549a7825e0ff5cb2cdbc04bcc7a": "6a3558c8163294d2fedf39d87b9644bf",
".git/objects/53/9bfc290a4617c3a6fd52967c3e4cf62bdfa2f9": "693eb14c55328b62fdf7fa5d9ea9b46d",
".git/objects/53/db1d0aeb60625a77d847678f1ff2b428658ce0": "d80e23d9af7d253a906ab191c8beb47d",
".git/objects/3f/cfd587b562815bcebfe80b88a811e117e8f8f1": "378bcf77a8626fdd9b6b04b5a0f0937e",
".git/objects/5e/edc511625341631c0b65965ddf184d27d08a44": "a0642c0f5836581394714310baa33eda",
".git/objects/5e/a34e3ba7eb6f291fe899cd27c41f9c8989f61b": "a63778f83605aa73d81bca842bf6fade",
".git/objects/5b/f93cfb38c272fd27785cce532996bbd32bd906": "58c28247139bdac1afdc81256d3e9b4e",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/39/5cfa4a295ef80facea40e02726677ea4c30cfa": "d568c51987efd14b9aa42501c206a16e",
".git/objects/39/00e1bdcae4ff96c94248d96b2f8c760baed1ce": "f501e3df737d46090719d41ed71b6152",
".git/objects/39/ef62222992ce566727410e34b92ce3e02e0f36": "9afc0fa0de273af6f54ace723fa5457c",
".git/objects/99/e6800c6adf5f0b0fc5608bc24f022070bbaf2e": "ce86f0f0e229064e5713c37bfdb58937",
".git/objects/55/e8233604cd2da445f38c5643e3f2c91addd55b": "bb6b371ee438284393624a77d6695ca9",
".git/objects/55/ad1da359a675fa986c05f0535eb2651a22f4c5": "788c7a3dde860d37c90c0ed3facf9ed8",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/0a/73efa7d05b5db5ccf045b8f8b222c8b4d54c2b": "4647d5d9942fb73147d22cd20d4b79a8",
".git/objects/bf/49bd4c65bd35c1d2f0670a29e7c625e08bc2fe": "65a48d2742d9a820ff824117daf0124b",
".git/objects/d3/3a91ddbc3240643ec6c1bfc86d231aa1d6a92f": "dc96f7c2a989050b8ca106ca6188f013",
".git/objects/d3/82e4a46070f7581c06d9d307e8b54dd6e8c266": "bca38bbf752019d131e87caef0b97091",
".git/objects/d3/542407bf7447a24f91d2d918f94e9a408a48c5": "1e1579007a38b2af2c3c1673844aae52",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/56ca3ba9d6888cd03833f5a2b2a5d9c08d2877": "c0939d59f53edbe393bf57d429c5ab61",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/7bce8827e451b2a5369209e19c83fb76fb4f84": "a04130287dac94f0e5ef472f81b4e7fb",
".git/objects/b1/d02168d92f4d4c30c373e2f94507ae463f5480": "26548469a0a05b5d397d4cd3d5b66480",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/dc5355cfb6c497b2576ef554222a80b7474fe0": "8c10311d1528f267afcb19e9a3e060a0",
".git/objects/d5/5457a968b005414e3d38de7acc3730f23dbb3c": "1f5a631080757c80a871f31f34b714e6",
".git/objects/d2/e35ba7310f6f04f378584211e97021dcf55b9d": "b729ba5113dde46ac1a0d87e57536e6b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/0990547d61f3cdcf1614456603ec8819d81063": "5c607df8a7f53b9b27d54feaba66c38c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/0c38af264be686ab96cee8c7ccddf0fd9ac100": "bee5f3553f6b968b7372279124dcabbd",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/ea/18c9895f624b678c5bfd164be1a56d1d7337e8": "1016a9f0a7e6373c2356dc4b49472a9f",
".git/objects/e6/98e9abae2ffff6926a04786a79bb7378524f43": "efcc3a668107adabdcc9411c1b21928b",
".git/objects/f9/438258e6b0f573cd4c45d41a0e6c969622f275": "a2fb86b339bdf118d45802ed8865b6f4",
".git/objects/f7/7055f85fc954b9701972e692c375a979ac31fb": "562fa92208477b061507cb08dfe82a0c",
".git/objects/ff/e2aa72758256e6014eda2732a049721d82f6af": "69ef90086eaaeda7b2b3daf12ce0d890",
".git/objects/c2/bd3920740c4533560930a1c552015c69efef2a": "692ba1f77a5fe4205cae0369f5ad8a20",
".git/objects/f1/7e87f3e4533a431e54faf003cb316811e32496": "c9fb44c4050502674f8d282b2888fd73",
".git/objects/e7/51fcc77900b4ab9111aca07b09946b58d85d95": "46d38897a79c260f669c36d55b6d5cf4",
".git/objects/f8/6d4bc11ff9e3e8fdb9fde42f8e5be32783bd6d": "25d8cbc16b51478fd437611e8dc51ad5",
".git/objects/e0/97366157656fd7a560a3237d836568691b9dda": "021606a58632eb66b3268387f336e09c",
".git/objects/e0/4590599d7bd63dd4dbb71c59eaf6866a97b4ed": "f0a31db2a8e8526b5a2907e223b4ee74",
".git/objects/e0/93d8bbd2c80d3d3ae938321e97188e6a18d030": "e43aa761056327ff07f63cc409928b81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6b0dff6750cee3c0b2a7b6f0f360229db14ef7": "6fd31eba20a5d051a9f197bb0074a9e5",
".git/objects/46/e28639886e3f63b12c9b8abe6cb167450f6f0b": "4d5bb296f5e891654a8076fa8d283c8e",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/48/58a675ba79b73e0e232d33ff62e02c7892e63e": "9b844f79b6dffb868f862e9527af7fab",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/15/19265af20df23f05a60e6903c942b99e3d906a": "f3b9aa06551222f690f49d7499c74be8",
".git/objects/12/903c6f606ccb3c4320a7fa4ae1872fb6b9b724": "dc5dd7072010d49fafc818c5321c6c2f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/7eb9c1bc6c06eeb2fd086e08be1e392cbaf714": "7bc7064c284b920163b187ccba0c73b3",
".git/objects/82/9410c70fa6f41c2f3a998a64981046409c1368": "9bcd331aa5e8374fde91e581cdfca286",
".git/objects/40/c299f71efa5006736654232fb7b6c17fdb83a3": "828f7e0a89d12183c608b136417bd787",
".git/objects/2e/7131f2098587f151de196b25656e2e303a14e1": "1ab191c330a2f4a3351a3461cd63da03",
".git/objects/2e/6da85cb1d71cbdacc6a42cc03efa865b789f3b": "63d61bff88b39a71aab0e00d5e05e2e0",
".git/objects/2e/e73e5366f3466a899f4433026344be42ea6637": "ed309b9958f008c966831ac3991eebd8",
".git/objects/47/ea720e3971a761825f0f6b7a3bf82311647442": "4fa74c24c8bf0f1229a2fbb68fcabcd1",
".git/objects/78/a457e7122196c06f66d3bc9477eeea28c160b8": "d75a92b329f7a07f4e9e1d590adca1d8",
".git/objects/78/9da555426dce34be1aa66386f39b9482f7284c": "9c37ba5fbd62d1116095be33979999a6",
".git/objects/13/67a7802b0675c9baca9d4291c7597336cc9922": "38bfbf730f0df8228c9c213a14b5eb87",
".git/objects/13/7db1e054691aa6f71e6faaf32782a97987704a": "b53a08ada3c5c35208eaeb344d9e2857",
".git/objects/13/f965645d8bbb1f8ffcc142427f3dfda0ef8110": "42e24002199ba1420196f961a0f95cf7",
".git/objects/7f/1c71546bbabcdfccab73524ec3f82a446a9f8f": "2da19dd7072ba341e5d897b0b91eb223",
".git/objects/7f/b6e89b0abdd9636a74f294fb4fe038d04d1571": "c765c121dcb43927f7ffc54b6b4217eb",
".git/objects/8e/faf0194b7cb391a7a30fa359da12cb13f4b380": "154707cd7a349caeb7d88a6cfe27d01e",
".git/objects/8e/7010834f59b6c8c1548d8c90bb0c562d003c5c": "5f7bd178e9027281bbf54490be79d3d8",
".git/objects/22/a5fe629ef2929886f62e3b75c2541a47a77c11": "efdee736b816c98cc38de7c247d400ac",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "49216dcd701f5d32a88253d60e461e51",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "23a0bcbd763aa27722029d0d73c7adeb",
".git/logs/refs/heads/backup-main": "6e22f80d61864d290273aa74b4e1db19",
".git/logs/refs/heads/main": "df7e14f38db21d423cd6ff4b15447488",
".git/logs/refs/remotes/origin/main": "d82d56f414be65a0e52de280771af9f3",
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
".git/refs/heads/backup-main": "5c7aab099e70702c0f0e2834d2434d07",
".git/refs/heads/main": "5c7aab099e70702c0f0e2834d2434d07",
".git/refs/remotes/origin/main": "6aa4def110091dd7e5bf6de1c78b79eb",
".git/lfs/cache/locks/refs/heads/main/verifiable": "91188ef767ae3a3a42e92f1706f161d0",
".git/lfs/objects/95/b5/95b5839a4d33c6285b5da1117502db1d307eb081ef9427044dbd7122323f9550": "91b72e301ebe57379d868d81a48844b9",
".git/lfs/objects/9b/e8/9be8fc6b1165a0c9d72f5bf9d6d841a6f9fe9d5369a682718cb94b5f0648a6ed": "c92ea2d936371e5ec62d4e78a29a0b08",
".git/lfs/objects/9e/a0/9ea0a32661356867501f51f2a1fd9165567b2b9d2859c55e8112da608557962a": "61a9112ac2bba1d80731115cc3c61ca5",
".git/lfs/objects/6a/ee/6aee06cdcab6b2aef74b1734c4778f4421d2da100b0ff9e52b21b55240202929": "301a7604d45b3e739efc881eb04896ea",
".git/lfs/objects/3d/ce/3dce99077602f70421c1c6b2a240bc9b83d64d86681d45f2154143310c980be3": "ac9a721a12bbc803b44f645561ecb1e1",
".git/lfs/objects/a3/6c/a36c6938340ce3bd5bbe926f086f597d3eb92730fbf12dcf6bb95ddf3fa6c455": "78e6081bd171ee00e8fda4906c823398",
".git/lfs/objects/b5/e0/b5e0ebc7670cf108185860fe5971bcd7762ccfa28caa78509382e4088b3e2bd2": "966a6fb680871a3b2c283a5e5aa25fb8",
".git/lfs/objects/b2/26/b2261b81ebde6588ff9e3762b45f8ef1313807f28fab65d55e6f5e53ab1d8b68": "bba16adfa99964bc4533820057695730",
".git/lfs/objects/b4/42/b44242f56c441de913468b25a65606b25f49520411f02f4ed4e38c5c259b5be1": "47084728848e4dc852eca4a401ccc3c6",
".git/lfs/objects/bc/51/bc514611c26f3b1b3e57968047a9db5adebba91ff8b5d9175ace4d606bfc9e74": "b0077beae687348c775a3ed58bc0fcac",
".git/lfs/objects/ca/3b/ca3b1d7a1e16a26c410ae6d86decbe898968ab3452ff320c8ae07d50e7316361": "86d35993b1c6127f6287719f9eae52af",
".git/lfs/objects/fe/97/fe978cd0c09f69eec9d660fe37d8cb63bca783011a53786743ca05eda81eb1a4": "64af6cc0cc92ef5fcdf94c4e383ec7ae",
".git/lfs/objects/27/4b/274bc88473b2b70c27519a850dc01bbd76ea480fe221fbb4ba9db9d0141e278c": "6d0e6f088cdb7a8357691719a1677583",
".git/lfs/objects/4b/38/4b3869370934791157dc38dfbe69685030167f8a21c8641ecf254ea88b4bd62a": "e57aec446c5a348d267003f0a77bb46f",
".git/lfs/objects/19/f7/19f74c3f3ea3502b414e4c40d54a80dc27eebda9cd16d03fde4849fbd76f8a12": "1c973723a4767287ce363c228d6c9a5c",
".git/lfs/objects/88/69/8869f0dbaeb98779899c312b7e7cee7d3ab4361572662e585dbad4a68168f3a3": "2ed93b5ee28f8373a433d23240fef327",
".git/lfs/objects/88/d4/88d466d1764119fdf0180a96e327cc66e815e7af037fd696208e270be1869103": "d21df10c2160fa6a96558ccc6acdb016",
".git/lfs/objects/38/a5/38a58c5b0003bf35e8deca0b004b7dc8cb0da23da79e97ac49bc7700e197ef23": "197a32b584472b9036cb832eff582701",
".git/lfs/objects/36/67/366749c57bbb95c818b561ccde027eb84da4d3d0a6b8bfe5f2ae914fc9368548": "08b3cd7ad268fbbacc2c87d91f8cd735",
".git/lfs/objects/91/83/91834a8539fa82195ba6fcce27cd38e9de997ee719f3c5002421429c8b4affd6": "835ad53b4cfd2bc467ac597fc6f6b4be",
".git/lfs/objects/ba/cc/baccb205ae45f0b421be1657259b4943ac40c95094ab877f3bcbe12cd544dcbe": "96e752610906ba2a93c65f8abe1645f1",
".git/lfs/objects/a7/f4/a7f465ec2821cc1aadda01aaf30182d433380438a95dc88359721fa184ef211b": "409a9e2c284e9704fbaa6e665f6230e0",
".git/lfs/objects/dc/8f/dc8f38172fad6b205b27374cdef0bbf36b90b3dee9a294c9fe97521d3ed3f63b": "6b446a380e308ad3d84cf955d088f3be",
".git/lfs/objects/d2/c8/d2c842e22a9f4ec9d996b23373a905c88d9a203b220c5c151885ad621f974b5c": "c457ef57daa1d16f64b27b786ec2ea3c",
".git/lfs/objects/d2/16/d2167c08ec476da71f62bc68dfb26d2748a1faba71b8c0e4b9fb0dd59049593f": "b893a69c889ff47a64634f2243c4ece8",
".git/lfs/objects/f7/b8/f7b81049ba475f09750661463b67879e71c162cba081e6bcba6806dd7d0c174d": "d32e5c5a46bd1d9d1c1f04a97eeed965",
".git/lfs/objects/76/e2/76e2fe82d313a6cb07d4b39019b8a2003179a082555bc5e0685bd38e2ac8fb17": "2e92726db0759f260ade7213e94ac29a",
".git/lfs/objects/7a/b2/7ab2525f4b86b65d3e4c70358a17e5a1aaf6f437f99cbcc046dad73d59bb9015": "5dcef449791fa27946b3d35ad8803796",
".git/index": "9d065626ca97a9c9e7c38811be8597a7",
".git/COMMIT_EDITMSG": "a7b835c20414da63366c06a6d21d2cc5",
".git/FETCH_HEAD": "3bf0382f93c77556f232348acbb2c7b3",
".git/rebase-merge/git-rebase-todo.backup": "d12f93a8934ebb496cf58d055f5779de",
".git/rebase-merge/head-name": "360efc618fa1294192e18ee097c9fae4",
".git/rebase-merge/orig-head": "5c7aab099e70702c0f0e2834d2434d07",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "3bbcfdc5c54e576fee1b15c3e556befb",
".git/rebase-merge/onto": "6aa4def110091dd7e5bf6de1c78b79eb",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/patch": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/done": "74f5c080cf8e3ea1059773923f4114d6",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "5c7aab099e70702c0f0e2834d2434d07",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/author-script": "5545af0543fa12c5a040236275e4bfb3",
"assets/AssetManifest.json": "ce82cc5705d49b63f337cae828bc4965",
"assets/NOTICES": "bc19ebc17758a09fa26aa0f49c4f9088",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "06fe48bc4d661c8054a633c82c41ccfa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "747d771cf6a169c52bba7df8cfdfe4bf",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/rock3.jpg": "61a9112ac2bba1d80731115cc3c61ca5",
"assets/assets/images/rock2.jpg": "197a32b584472b9036cb832eff582701",
"assets/assets/images/rock1.jpg": "86d35993b1c6127f6287719f9eae52af",
"assets/assets/images/mainimage.jpeg": "c584243260768e11ad3442464bbdb0ed",
"assets/assets/images/rock5.jpg": "91b72e301ebe57379d868d81a48844b9",
"assets/assets/images/rock4.jpg": "2e92726db0759f260ade7213e94ac29a",
"assets/assets/images/rock6.jpg": "08b3cd7ad268fbbacc2c87d91f8cd735",
"assets/assets/images/rock7.jpg": "bba16adfa99964bc4533820057695730",
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
"assets/assets/icons/instagram.svg": "d32e5c5a46bd1d9d1c1f04a97eeed965",
"assets/assets/icons/instagram.jpeg": "3f73f040d2554cca8ea298c0d1dce0ac",
"assets/assets/icons/facebook.svg": "6b446a380e308ad3d84cf955d088f3be",
"assets/assets/icons/whatsapp.svg": "b893a69c889ff47a64634f2243c4ece8",
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
