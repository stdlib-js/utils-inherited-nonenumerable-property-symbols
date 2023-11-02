// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.1.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonenumerable-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-symbols@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function m(m,d){var p,l,j,f,h,v,g,a;if(arguments.length>1){if(!t(d))throw new TypeError(o("1Uf45,IB",d));h=d}else h=s;if(null==m)return[];for(j=i(m),p={},l=[],v=1;j&&v<=h;){for(f=r(j),a=0;a<f.length;a++)g=f[a],!1===n(p,g)&&e(j,g)&&l.push(g),p[g]=!0;j=i(j),v+=1}return l}export{m as default};
//# sourceMappingURL=index.mjs.map
