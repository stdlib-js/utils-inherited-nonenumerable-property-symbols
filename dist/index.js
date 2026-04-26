"use strict";var g=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var f=g(function(d,p){
var h=require('@stdlib/constants-float64-max-safe-integer/dist'),q=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,l=require('@stdlib/assert-is-nonenumerable-property/dist'),y=require('@stdlib/utils-property-symbols/dist'),m=require('@stdlib/utils-get-prototype-of/dist'),P=require('@stdlib/assert-has-own-property/dist'),b=require('@stdlib/error-tools-fmtprodmsg/dist');function c(i,r){var n,o,e,u,s,v,t,a;if(arguments.length>1){if(!q(r))throw new TypeError(b('1Uf45',r));s=r}else s=h;if(i==null)return[];for(e=m(i),n={},o=[],v=1;e&&v<=s;){for(u=y(e),a=0;a<u.length;a++)t=u[a],P(n,t)===!1&&l(e,t)&&o.push(t),n[t]=!0;e=m(e),v+=1}return o}p.exports=c
});var E=f();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
