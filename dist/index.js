"use strict";var g=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var f=g(function(d,p){
var h=require('@stdlib/constants-float64-max-safe-integer/dist'),q=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,l=require('@stdlib/assert-is-nonenumerable-property/dist'),y=require('@stdlib/utils-property-symbols/dist'),m=require('@stdlib/utils-get-prototype-of/dist'),P=require('@stdlib/assert-has-own-property/dist'),b=require('@stdlib/error-tools-fmtprodmsg/dist');function c(i,r){var t,o,e,u,s,v,a,n;if(arguments.length>1){if(!q(r))throw new TypeError(b('1Uf45',r));s=r}else s=h;if(i==null)return[];for(e=m(i),t={},o=[],v=1;e&&v<=s;){for(u=y(e),n=0;n<u.length;n++)a=u[n],P(t,a)===!1&&l(e,a)&&o.push(a),t[a]=!0;e=m(e),v+=1}return o}p.exports=c
});var E=f();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
