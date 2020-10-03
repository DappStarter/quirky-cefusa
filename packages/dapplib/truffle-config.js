require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name random night solid inflict another army gift'; 
let testAccounts = [
"0x517ede6fc4637fec41d6e7cf45122ff6597d28732137038dc84e045737697cf3",
"0xfdd9739145f231c3a41002d956ee925fc9b9b8f352e7a950e7ff0591c69efb52",
"0x80cd079413d2d6b2fe68a0acc97a1b599225d05009f0663151555b24b00c707c",
"0xcfd3a9896888e00db9f4e23c075d285cd2b400d4a56fea40ecb23672805c8d2b",
"0xb649033eb97f822e540659c1eab627820b2d688704f3479a3b0d51257d87282b",
"0xf8ad855296feb1ded5ae461c2cf47494b4ac06581daf0027a68d40168579a191",
"0x910248af8f386f67ac814b65d3908e6356e69b8f89f7066d039838484b95ef60",
"0x593ded74960c8e3d8afba0e698fabec009ee4ddc043ff3d3d196ed3c86f1ea67",
"0x1d51c6ddd139e5f18126d23e4c467ff32679d04afca543baa89218e12ea8429b",
"0x1917da02b6ec31e952b70cbd8a8cf28cdfde8f29b2834ab482d139b225254c28"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
