// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.0.8-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonenumerable-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-symbols@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function m(m,d){var p,l,j,h,f,g,a,v;if(arguments.length>1){if(!t(d))throw new TypeError(o("0kB4I",d));f=d}else f=s;if(null==m)return[];for(j=i(m),p={},l=[],g=1;j&&g<=f;){for(h=r(j),v=0;v<h.length;v++)a=h[v],!1===n(p,a)&&e(j,a)&&l.push(a),p[a]=!0;j=i(j),g+=1}return l}export{m as default};
//# sourceMappingURL=index.mjs.map
