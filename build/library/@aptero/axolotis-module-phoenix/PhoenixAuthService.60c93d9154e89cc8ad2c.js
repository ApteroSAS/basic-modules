/*!
 * 
 *   @aptero/axolotis-module-basic v1.0.0
 *
 *   Copyright (c) Aptero  and project contributors.
 *
 *   This source code is licensed under the undefined license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
(self.webpackChunkaxolotis_module_basic=self.webpackChunkaxolotis_module_basic||[]).push([[431],{5327:r=>{for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);r.exports=function bytesToUuid(r,o){var t=o||0,e=n;return[e[r[t++]],e[r[t++]],e[r[t++]],e[r[t++]],"-",e[r[t++]],e[r[t++]],"-",e[r[t++]],e[r[t++]],"-",e[r[t++]],e[r[t++]],"-",e[r[t++]],e[r[t++]],e[r[t++]],e[r[t++]],e[r[t++]],e[r[t++]]].join("")}},5217:r=>{var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var o=new Uint8Array(16);r.exports=function whatwgRNG(){return n(o),o}}else{var t=new Array(16);r.exports=function mathRNG(){for(var r,n=0;n<16;n++)0==(3&n)&&(r=4294967296*Math.random()),t[n]=r>>>((3&n)<<3)&255;return t}}},1171:(r,n,o)=>{var t=o(5217),e=o(5327);r.exports=function v4(r,n,o){var a=n&&o||0;"string"==typeof r&&(n="binary"===r?new Array(16):null,r=null);var s=(r=r||{}).random||(r.rng||t)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,n)for(var u=0;u<16;++u)n[a+u]=s[u];return n||e(s)}}}]);
//# sourceMappingURL=PhoenixAuthService.60c93d9154e89cc8ad2c.js.map