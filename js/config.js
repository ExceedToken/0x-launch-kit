'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const _0x_js_1 = require('0x.js');
// Network port to listen on
exports.HTTP_PORT = 3000;
// A time window after which the order is considered permanently expired
exports.ORDER_SHADOWING_MARGIN_MS = 100 * 1000; // tslint:disable-line custom-no-magic-numbers
// Frequency of checks for permanently expired orders
exports.PERMANENT_CLEANUP_INTERVAL_MS = 10 * 1000; // tslint:disable-line custom-no-magic-numbers
// Max number of entities per page
exports.MAX_PER_PAGE = 100;
// Default network id to use when not specified
exports.NETWORK_ID = 42;
// An array of fee recipients
exports.FEE_RECIPIENT = '0x0000000000000000000000000000000000000000';
// A flat fee in ZRX that should be charged to the order maker
exports.MAKER_FEE_ZRX_UNIT_AMOUNT = new _0x_js_1.BigNumber(0);
// A flat fee in ZRX that should be charged to the order taker
exports.TAKER_FEE_ZRX_UNIT_AMOUNT = new _0x_js_1.BigNumber(0);
// Whitelisted token addresses. Set to a '*' instead of an array to allow all tokens.
exports.WHITELISTED_TOKENS = [
    '0x2002d3812f58e35f0ea1ffbf80a75a38c32175fa',
    '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
    '0x1eae15d9f4fa16f5278d02d2f8bda8b0dcd31f71',
    '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
    '0xe41d2489571d322189246dafa5ebde1f4699f498',
    '0xf230b790e05390fc8295f4d3f60332c93bed42e2',
    '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    '0xd850942ef8811f2a866692a623011bde52a462c1',
    '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07',
    '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
    '0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27',
    '0xb5a5f22694352c15b00323844ad545abb2b11028',
    '0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6'
];
// Ethereum RPC url
exports.RPC_URL = 'https://mainnet.infura.io/v3/63828b532caa48a584a4bac9a5faf44c';
// Default ERC20 token precision
exports.DEFAULT_ERC20_TOKEN_PRECISION = 18;
