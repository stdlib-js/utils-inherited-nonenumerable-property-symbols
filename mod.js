// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),y&&i&&i.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function j(t,r){return null!=t&&v.call(t,r)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var g=b()?function(t){var r,e,n;if(null==t)return s.call(t);e=t[d],r=j(t,d);try{t[d]=void 0}catch(r){return s.call(t)}return n=s.call(t),r?t[d]=e:delete t[d],n}:function(t){return s.call(t)},m=Number,_=m.prototype.toString;var O=b();function w(t){return"object"==typeof t&&(t instanceof m||(O?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function h(t){return p(t)||w(t)}a(h,"isPrimitive",p),a(h,"isObject",w);var S=Number.POSITIVE_INFINITY,P=m.NEGATIVE_INFINITY,E=Math.floor;function I(t){return t<S&&t>P&&E(r=t)===r;var r}function T(t){return p(t)&&I(t)}function A(t){return w(t)&&I(t.valueOf())}function N(t){return T(t)||A(t)}function B(t){return T(t)&&t>0}function V(t){return A(t)&&t.valueOf()>0}function F(t){return B(t)||V(t)}function k(t){return"string"==typeof t}a(N,"isPrimitive",T),a(N,"isObject",A),a(F,"isPrimitive",B),a(F,"isObject",V);var x=String.prototype.valueOf;var C=b();function G(t){return"object"==typeof t&&(t instanceof String||(C?function(t){try{return x.call(t),!0}catch(t){return!1}}(t):"[object String]"===g(t)))}function L(t){return k(t)||G(t)}function M(t){return t!=t}function R(t){return p(t)&&M(t)}function U(t){return w(t)&&M(t.valueOf())}function Y(t){return R(t)||U(t)}a(L,"isPrimitive",k),a(L,"isObject",G),a(Y,"isPrimitive",R),a(Y,"isObject",U);var X=Object.prototype.propertyIsEnumerable;var q=!X.call("beep","0");function z(t,r){return!1!==j(t,r)&&!1===function(t,r){var e;return null!=t&&(!(e=X.call(t,r))&&q&&L(t)?!R(r=+r)&&T(r)&&r>=0&&r<t.length:e)}(t,r)}var D,H=void 0!==Object.getOwnPropertySymbols,J=Object.getOwnPropertySymbols;D=H?function(t){return J(Object(t))}:function(){return[]};var K=D,Q=/./;function W(t){return"boolean"==typeof t}var Z=Boolean.prototype.toString;var $=b();function tt(t){return"object"==typeof t&&(t instanceof Boolean||($?function(t){try{return Z.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function rt(t){return W(t)||tt(t)}function et(){return new Function("return this;")()}a(rt,"isPrimitive",W),a(rt,"isObject",tt);var nt="object"==typeof self?self:null,ot="object"==typeof window?window:null,ut="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},it="object"==typeof ut?ut:null;var ct=function(t){if(arguments.length){if(!W(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return et()}if(nt)return nt;if(ot)return ot;if(it)return it;throw new Error("unexpected error. Unable to resolve global object.")}(),ft=ct.document&&ct.document.childNodes,lt=Int8Array;function at(){return/^\s*function\s*([^(]*)/i}var pt,yt=/^\s*function\s*([^(]*)/i;a(at,"REGEXP",yt),pt=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};var bt=pt;function st(t){return null!==t&&"object"==typeof t}var vt=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!bt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(st);function jt(t){var r,e,n,o;if(("Object"===(e=g(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=yt.exec(n.toString()))return r[1]}return st(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(st,"isObjectLikeArray",vt);var dt="function"==typeof Q||"object"==typeof lt||"function"==typeof ft?function(t){return jt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?jt(t).toLowerCase():r};var gt,mt,_t=Object.getPrototypeOf;mt=Object.getPrototypeOf,gt="function"===dt(mt)?_t:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===g(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Ot=gt;function wt(t){return null==t?null:(t=Object(t),Ot(t))}function ht(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function St(t,r){var e,n,o,u,i,c,f,l;if(arguments.length>1){if(!B(r))throw new TypeError(ht("0kB4I",r));i=r}else i=9007199254740991;if(null==t)return[];for(o=wt(t),e={},n=[],c=1;o&&c<=i;){for(u=K(o),l=0;l<u.length;l++)!1===j(e,f=u[l])&&z(o,f)&&n.push(f),e[f]=!0;o=wt(o),c+=1}return n}export{St as default};
//# sourceMappingURL=mod.js.map
