require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember promote inflict process swift thank'; 
let testAccounts = [
"0x94f19c4cf868ce70905f1bd9135da8c4728aea0db58090f28130ff8a7b8c1e35",
"0xfcdb2fa83c3c534c7b7bf48cc120ab8e35034dc148a7671b349b9a8de6bb227e",
"0x3953da0c8dba172bdf644a2f31ebbf9c01f948ac32ccd14dc3b2165f41d71c20",
"0x6909e6ff23745a79e9d2e50491ec85c93eac07abadd62be6eb906f74dc240b5a",
"0xadad91c3a0367c8b94eec06388093f4e7073ede0fd302e3f1cd26d70b16cc34b",
"0xcd3c45ef5a53f7e2f9dc2489f7d1d741be152443ba4ea989b75025be813f8268",
"0xad4c26660c292e453ec7c5b52ed85be31247fbd3a02adfd4a184be80f5bd1319",
"0xefd38a4a998cf7ce44327986b228d9ced5c39e2485813db03e444e38240b2a08",
"0x9c7dc91d3b978097b08cb9537ffe448c86e01b1b78a64c515d5f482d7cda157b",
"0x4f7cbf502e9b9a64ae47e0ef16b75fab88a7083a2101a76491f6db90b45137da"
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
