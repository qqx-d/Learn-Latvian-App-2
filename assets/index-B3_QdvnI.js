(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Lv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var np={exports:{}},al={},rp={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ps=Symbol.for("react.element"),Dv=Symbol.for("react.portal"),Mv=Symbol.for("react.fragment"),bv=Symbol.for("react.strict_mode"),jv=Symbol.for("react.profiler"),Fv=Symbol.for("react.provider"),Uv=Symbol.for("react.context"),Wv=Symbol.for("react.forward_ref"),zv=Symbol.for("react.suspense"),Vv=Symbol.for("react.memo"),Bv=Symbol.for("react.lazy"),Ld=Symbol.iterator;function Hv(t){return t===null||typeof t!="object"?null:(t=Ld&&t[Ld]||t["@@iterator"],typeof t=="function"?t:null)}var ip={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sp=Object.assign,op={};function Kr(t,e,n){this.props=t,this.context=e,this.refs=op,this.updater=n||ip}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Kr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lp(){}lp.prototype=Kr.prototype;function $u(t,e,n){this.props=t,this.context=e,this.refs=op,this.updater=n||ip}var Gu=$u.prototype=new lp;Gu.constructor=$u;sp(Gu,Kr.prototype);Gu.isPureReactComponent=!0;var Dd=Array.isArray,ap=Object.prototype.hasOwnProperty,Ku={current:null},up={key:!0,ref:!0,__self:!0,__source:!0};function cp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ap.call(e,r)&&!up.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ps,type:t,key:s,ref:o,props:i,_owner:Ku.current}}function $v(t,e){return{$$typeof:ps,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qu(t){return typeof t=="object"&&t!==null&&t.$$typeof===ps}function Gv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Md=/\/+/g;function Wl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Gv(""+t.key):e.toString(36)}function Js(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ps:case Dv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Wl(o,0):r,Dd(i)?(n="",t!=null&&(n=t.replace(Md,"$&/")+"/"),Js(i,e,n,"",function(u){return u})):i!=null&&(Qu(i)&&(i=$v(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Md,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Wl(s,l);o+=Js(s,e,n,a,i)}else if(a=Hv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Wl(s,l++),o+=Js(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function As(t,e,n){if(t==null)return t;var r=[],i=0;return Js(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Kv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Me={current:null},Xs={transition:null},Qv={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:Xs,ReactCurrentOwner:Ku};function dp(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:As,forEach:function(t,e,n){As(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return As(t,function(){e++}),e},toArray:function(t){return As(t,function(e){return e})||[]},only:function(t){if(!Qu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=Kr;z.Fragment=Mv;z.Profiler=jv;z.PureComponent=$u;z.StrictMode=bv;z.Suspense=zv;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qv;z.act=dp;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=sp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ku.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)ap.call(e,a)&&!up.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ps,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:Uv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Fv,_context:t},t.Consumer=t};z.createElement=cp;z.createFactory=function(t){var e=cp.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:Wv,render:t}};z.isValidElement=Qu;z.lazy=function(t){return{$$typeof:Bv,_payload:{_status:-1,_result:t},_init:Kv}};z.memo=function(t,e){return{$$typeof:Vv,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=Xs.transition;Xs.transition={};try{t()}finally{Xs.transition=e}};z.unstable_act=dp;z.useCallback=function(t,e){return Me.current.useCallback(t,e)};z.useContext=function(t){return Me.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Me.current.useDeferredValue(t)};z.useEffect=function(t,e){return Me.current.useEffect(t,e)};z.useId=function(){return Me.current.useId()};z.useImperativeHandle=function(t,e,n){return Me.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Me.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Me.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Me.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Me.current.useReducer(t,e,n)};z.useRef=function(t){return Me.current.useRef(t)};z.useState=function(t){return Me.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Me.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Me.current.useTransition()};z.version="18.3.1";rp.exports=z;var A=rp.exports;const Yv=Lv(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv=A,Jv=Symbol.for("react.element"),Xv=Symbol.for("react.fragment"),Zv=Object.prototype.hasOwnProperty,ey=qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ty={key:!0,ref:!0,__self:!0,__source:!0};function hp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Zv.call(e,r)&&!ty.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Jv,type:t,key:s,ref:o,props:i,_owner:ey.current}}al.Fragment=Xv;al.jsx=hp;al.jsxs=hp;np.exports=al;var f=np.exports,xa={},fp={exports:{}},qe={},pp={exports:{}},mp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(S,L){var D=S.length;S.push(L);e:for(;0<D;){var B=D-1>>>1,J=S[B];if(0<i(J,L))S[B]=L,S[D]=J,D=B;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var L=S[0],D=S.pop();if(D!==L){S[0]=D;e:for(var B=0,J=S.length,Xe=J>>>1;B<Xe;){var yt=2*(B+1)-1,Ul=S[yt],Mn=yt+1,xs=S[Mn];if(0>i(Ul,D))Mn<J&&0>i(xs,Ul)?(S[B]=xs,S[Mn]=D,B=Mn):(S[B]=Ul,S[yt]=D,B=yt);else if(Mn<J&&0>i(xs,D))S[B]=xs,S[Mn]=D,B=Mn;else break e}}return L}function i(S,L){var D=S.sortIndex-L.sortIndex;return D!==0?D:S.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,v=!1,_=!1,y=!1,T=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(S){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=S)r(u),L.sortIndex=L.expirationTime,e(a,L);else break;L=n(u)}}function w(S){if(y=!1,m(S),!_)if(n(a)!==null)_=!0,$e(E);else{var L=n(u);L!==null&&Ee(w,L.startTime-S)}}function E(S,L){_=!1,y&&(y=!1,g(x),x=-1),v=!0;var D=h;try{for(m(L),c=n(a);c!==null&&(!(c.expirationTime>L)||S&&!M());){var B=c.callback;if(typeof B=="function"){c.callback=null,h=c.priorityLevel;var J=B(c.expirationTime<=L);L=t.unstable_now(),typeof J=="function"?c.callback=J:c===n(a)&&r(a),m(L)}else r(a);c=n(a)}if(c!==null)var Xe=!0;else{var yt=n(u);yt!==null&&Ee(w,yt.startTime-L),Xe=!1}return Xe}finally{c=null,h=D,v=!1}}var C=!1,N=null,x=-1,P=5,I=-1;function M(){return!(t.unstable_now()-I<P)}function V(){if(N!==null){var S=t.unstable_now();I=S;var L=!0;try{L=N(!0,S)}finally{L?K():(C=!1,N=null)}}else C=!1}var K;if(typeof p=="function")K=function(){p(V)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,Y=ee.port2;ee.port1.onmessage=V,K=function(){Y.postMessage(null)}}else K=function(){T(V,0)};function $e(S){N=S,C||(C=!0,K())}function Ee(S,L){x=T(function(){S(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(S){S.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,$e(E))},t.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<S?Math.floor(1e3/S):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(S){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var D=h;h=L;try{return S()}finally{h=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(S,L){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var D=h;h=S;try{return L()}finally{h=D}},t.unstable_scheduleCallback=function(S,L,D){var B=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?B+D:B):D=B,S){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=D+J,S={id:d++,callback:L,priorityLevel:S,startTime:D,expirationTime:J,sortIndex:-1},D>B?(S.sortIndex=D,e(u,S),n(a)===null&&S===n(u)&&(y?(g(x),x=-1):y=!0,Ee(w,D-B))):(S.sortIndex=J,e(a,S),_||v||(_=!0,$e(E))),S},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(S){var L=h;return function(){var D=h;h=L;try{return S.apply(this,arguments)}finally{h=D}}}})(mp);pp.exports=mp;var ny=pp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry=A,Ye=ny;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gp=new Set,bi={};function ir(t,e){Mr(t,e),Mr(t+"Capture",e)}function Mr(t,e){for(bi[t]=e,t=0;t<e.length;t++)gp.add(e[t])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Aa=Object.prototype.hasOwnProperty,iy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bd={},jd={};function sy(t){return Aa.call(jd,t)?!0:Aa.call(bd,t)?!1:iy.test(t)?jd[t]=!0:(bd[t]=!0,!1)}function oy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ly(t,e,n,r){if(e===null||typeof e>"u"||oy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ie[t]=new be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ie[e]=new be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ie[t]=new be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ie[t]=new be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ie[t]=new be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ie[t]=new be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ie[t]=new be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ie[t]=new be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ie[t]=new be(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yu=/[\-:]([a-z])/g;function qu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yu,qu);Ie[e]=new be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yu,qu);Ie[e]=new be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yu,qu);Ie[e]=new be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ie[t]=new be(t,1,!1,t.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ie[t]=new be(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ju(t,e,n,r){var i=Ie.hasOwnProperty(e)?Ie[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ly(e,n,i,r)&&(n=null),r||i===null?sy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yt=ry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Os=Symbol.for("react.element"),cr=Symbol.for("react.portal"),dr=Symbol.for("react.fragment"),Xu=Symbol.for("react.strict_mode"),Oa=Symbol.for("react.profiler"),_p=Symbol.for("react.provider"),vp=Symbol.for("react.context"),Zu=Symbol.for("react.forward_ref"),La=Symbol.for("react.suspense"),Da=Symbol.for("react.suspense_list"),ec=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),yp=Symbol.for("react.offscreen"),Fd=Symbol.iterator;function ri(t){return t===null||typeof t!="object"?null:(t=Fd&&t[Fd]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,zl;function mi(t){if(zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zl=e&&e[1]||""}return`
`+zl+t}var Vl=!1;function Bl(t,e){if(!t||Vl)return"";Vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Vl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?mi(t):""}function ay(t){switch(t.tag){case 5:return mi(t.type);case 16:return mi("Lazy");case 13:return mi("Suspense");case 19:return mi("SuspenseList");case 0:case 2:case 15:return t=Bl(t.type,!1),t;case 11:return t=Bl(t.type.render,!1),t;case 1:return t=Bl(t.type,!0),t;default:return""}}function Ma(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case dr:return"Fragment";case cr:return"Portal";case Oa:return"Profiler";case Xu:return"StrictMode";case La:return"Suspense";case Da:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vp:return(t.displayName||"Context")+".Consumer";case _p:return(t._context.displayName||"Context")+".Provider";case Zu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ec:return e=t.displayName||null,e!==null?e:Ma(t.type)||"Memo";case en:e=t._payload,t=t._init;try{return Ma(t(e))}catch{}}return null}function uy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ma(e);case 8:return e===Xu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function In(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cy(t){var e=wp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ls(t){t._valueTracker||(t._valueTracker=cy(t))}function Ep(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=wp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function mo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ba(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ud(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=In(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sp(t,e){e=e.checked,e!=null&&Ju(t,"checked",e,!1)}function ja(t,e){Sp(t,e);var n=In(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fa(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fa(t,e.type,In(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fa(t,e,n){(e!=="number"||mo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var gi=Array.isArray;function Ir(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+In(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ua(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(gi(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:In(n)}}function Cp(t,e){var n=In(e.value),r=In(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ip(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ip(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ds,kp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ds=Ds||document.createElement("div"),Ds.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ds.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ji(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dy=["Webkit","ms","Moz","O"];Object.keys(Ei).forEach(function(t){dy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ei[e]=Ei[t]})});function Tp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ei.hasOwnProperty(t)&&Ei[t]?(""+e).trim():e+"px"}function Np(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Tp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var hy=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function za(t,e){if(e){if(hy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Va(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ba=null;function tc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ha=null,kr=null,Tr=null;function Bd(t){if(t=_s(t)){if(typeof Ha!="function")throw Error(k(280));var e=t.stateNode;e&&(e=fl(e),Ha(t.stateNode,t.type,e))}}function Rp(t){kr?Tr?Tr.push(t):Tr=[t]:kr=t}function Pp(){if(kr){var t=kr,e=Tr;if(Tr=kr=null,Bd(t),e)for(t=0;t<e.length;t++)Bd(e[t])}}function xp(t,e){return t(e)}function Ap(){}var Hl=!1;function Op(t,e,n){if(Hl)return t(e,n);Hl=!0;try{return xp(t,e,n)}finally{Hl=!1,(kr!==null||Tr!==null)&&(Ap(),Pp())}}function Fi(t,e){var n=t.stateNode;if(n===null)return null;var r=fl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var $a=!1;if(Vt)try{var ii={};Object.defineProperty(ii,"passive",{get:function(){$a=!0}}),window.addEventListener("test",ii,ii),window.removeEventListener("test",ii,ii)}catch{$a=!1}function fy(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Si=!1,go=null,_o=!1,Ga=null,py={onError:function(t){Si=!0,go=t}};function my(t,e,n,r,i,s,o,l,a){Si=!1,go=null,fy.apply(py,arguments)}function gy(t,e,n,r,i,s,o,l,a){if(my.apply(this,arguments),Si){if(Si){var u=go;Si=!1,go=null}else throw Error(k(198));_o||(_o=!0,Ga=u)}}function sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hd(t){if(sr(t)!==t)throw Error(k(188))}function _y(t){var e=t.alternate;if(!e){if(e=sr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Hd(i),t;if(s===r)return Hd(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Dp(t){return t=_y(t),t!==null?Mp(t):null}function Mp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mp(t);if(e!==null)return e;t=t.sibling}return null}var bp=Ye.unstable_scheduleCallback,$d=Ye.unstable_cancelCallback,vy=Ye.unstable_shouldYield,yy=Ye.unstable_requestPaint,ce=Ye.unstable_now,wy=Ye.unstable_getCurrentPriorityLevel,nc=Ye.unstable_ImmediatePriority,jp=Ye.unstable_UserBlockingPriority,vo=Ye.unstable_NormalPriority,Ey=Ye.unstable_LowPriority,Fp=Ye.unstable_IdlePriority,ul=null,kt=null;function Sy(t){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(ul,t,void 0,(t.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:ky,Cy=Math.log,Iy=Math.LN2;function ky(t){return t>>>=0,t===0?32:31-(Cy(t)/Iy|0)|0}var Ms=64,bs=4194304;function _i(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=_i(l):(s&=o,s!==0&&(r=_i(s)))}else o=n&~i,o!==0?r=_i(o):s!==0&&(r=_i(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pt(e),i=1<<n,r|=t[n],e&=~i;return r}function Ty(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ny(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Ty(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ka(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Up(){var t=Ms;return Ms<<=1,!(Ms&4194240)&&(Ms=64),t}function $l(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ms(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pt(e),t[e]=n}function Ry(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function rc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var G=0;function Wp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var zp,ic,Vp,Bp,Hp,Qa=!1,js=[],dn=null,hn=null,fn=null,Ui=new Map,Wi=new Map,nn=[],Py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gd(t,e){switch(t){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Ui.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(e.pointerId)}}function si(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_s(e),e!==null&&ic(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xy(t,e,n,r,i){switch(e){case"focusin":return dn=si(dn,t,e,n,r,i),!0;case"dragenter":return hn=si(hn,t,e,n,r,i),!0;case"mouseover":return fn=si(fn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ui.set(s,si(Ui.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Wi.set(s,si(Wi.get(s)||null,t,e,n,r,i)),!0}return!1}function $p(t){var e=Wn(t.target);if(e!==null){var n=sr(e);if(n!==null){if(e=n.tag,e===13){if(e=Lp(n),e!==null){t.blockedOn=e,Hp(t.priority,function(){Vp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ya(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ba=r,n.target.dispatchEvent(r),Ba=null}else return e=_s(n),e!==null&&ic(e),t.blockedOn=n,!1;e.shift()}return!0}function Kd(t,e,n){Zs(t)&&n.delete(e)}function Ay(){Qa=!1,dn!==null&&Zs(dn)&&(dn=null),hn!==null&&Zs(hn)&&(hn=null),fn!==null&&Zs(fn)&&(fn=null),Ui.forEach(Kd),Wi.forEach(Kd)}function oi(t,e){t.blockedOn===e&&(t.blockedOn=null,Qa||(Qa=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Ay)))}function zi(t){function e(i){return oi(i,t)}if(0<js.length){oi(js[0],t);for(var n=1;n<js.length;n++){var r=js[n];r.blockedOn===t&&(r.blockedOn=null)}}for(dn!==null&&oi(dn,t),hn!==null&&oi(hn,t),fn!==null&&oi(fn,t),Ui.forEach(e),Wi.forEach(e),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)$p(n),n.blockedOn===null&&nn.shift()}var Nr=Yt.ReactCurrentBatchConfig,wo=!0;function Oy(t,e,n,r){var i=G,s=Nr.transition;Nr.transition=null;try{G=1,sc(t,e,n,r)}finally{G=i,Nr.transition=s}}function Ly(t,e,n,r){var i=G,s=Nr.transition;Nr.transition=null;try{G=4,sc(t,e,n,r)}finally{G=i,Nr.transition=s}}function sc(t,e,n,r){if(wo){var i=Ya(t,e,n,r);if(i===null)ta(t,e,r,Eo,n),Gd(t,r);else if(xy(i,t,e,n,r))r.stopPropagation();else if(Gd(t,r),e&4&&-1<Py.indexOf(t)){for(;i!==null;){var s=_s(i);if(s!==null&&zp(s),s=Ya(t,e,n,r),s===null&&ta(t,e,r,Eo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ta(t,e,r,null,n)}}var Eo=null;function Ya(t,e,n,r){if(Eo=null,t=tc(r),t=Wn(t),t!==null)if(e=sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Lp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Eo=t,null}function Gp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wy()){case nc:return 1;case jp:return 4;case vo:case Ey:return 16;case Fp:return 536870912;default:return 16}default:return 16}}var un=null,oc=null,eo=null;function Kp(){if(eo)return eo;var t,e=oc,n=e.length,r,i="value"in un?un.value:un.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return eo=i.slice(t,1<r?1-r:void 0)}function to(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fs(){return!0}function Qd(){return!1}function Je(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fs:Qd,this.isPropagationStopped=Qd,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fs)},persist:function(){},isPersistent:Fs}),e}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lc=Je(Qr),gs=le({},Qr,{view:0,detail:0}),Dy=Je(gs),Gl,Kl,li,cl=le({},gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==li&&(li&&t.type==="mousemove"?(Gl=t.screenX-li.screenX,Kl=t.screenY-li.screenY):Kl=Gl=0,li=t),Gl)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),Yd=Je(cl),My=le({},cl,{dataTransfer:0}),by=Je(My),jy=le({},gs,{relatedTarget:0}),Ql=Je(jy),Fy=le({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Uy=Je(Fy),Wy=le({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zy=Je(Wy),Vy=le({},Qr,{data:0}),qd=Je(Vy),By={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$y[t])?!!e[t]:!1}function ac(){return Gy}var Ky=le({},gs,{key:function(t){if(t.key){var e=By[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=to(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(t){return t.type==="keypress"?to(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?to(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qy=Je(Ky),Yy=le({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=Je(Yy),qy=le({},gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),Jy=Je(qy),Xy=le({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zy=Je(Xy),ew=le({},cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tw=Je(ew),nw=[9,13,27,32],uc=Vt&&"CompositionEvent"in window,Ci=null;Vt&&"documentMode"in document&&(Ci=document.documentMode);var rw=Vt&&"TextEvent"in window&&!Ci,Qp=Vt&&(!uc||Ci&&8<Ci&&11>=Ci),Xd=" ",Zd=!1;function Yp(t,e){switch(t){case"keyup":return nw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hr=!1;function iw(t,e){switch(t){case"compositionend":return qp(e);case"keypress":return e.which!==32?null:(Zd=!0,Xd);case"textInput":return t=e.data,t===Xd&&Zd?null:t;default:return null}}function sw(t,e){if(hr)return t==="compositionend"||!uc&&Yp(t,e)?(t=Kp(),eo=oc=un=null,hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qp&&e.locale!=="ko"?null:e.data;default:return null}}var ow={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ow[t.type]:e==="textarea"}function Jp(t,e,n,r){Rp(r),e=So(e,"onChange"),0<e.length&&(n=new lc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ii=null,Vi=null;function lw(t){am(t,0)}function dl(t){var e=mr(t);if(Ep(e))return t}function aw(t,e){if(t==="change")return e}var Xp=!1;if(Vt){var Yl;if(Vt){var ql="oninput"in document;if(!ql){var th=document.createElement("div");th.setAttribute("oninput","return;"),ql=typeof th.oninput=="function"}Yl=ql}else Yl=!1;Xp=Yl&&(!document.documentMode||9<document.documentMode)}function nh(){Ii&&(Ii.detachEvent("onpropertychange",Zp),Vi=Ii=null)}function Zp(t){if(t.propertyName==="value"&&dl(Vi)){var e=[];Jp(e,Vi,t,tc(t)),Op(lw,e)}}function uw(t,e,n){t==="focusin"?(nh(),Ii=e,Vi=n,Ii.attachEvent("onpropertychange",Zp)):t==="focusout"&&nh()}function cw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(Vi)}function dw(t,e){if(t==="click")return dl(e)}function hw(t,e){if(t==="input"||t==="change")return dl(e)}function fw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _t=typeof Object.is=="function"?Object.is:fw;function Bi(t,e){if(_t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Aa.call(e,i)||!_t(t[i],e[i]))return!1}return!0}function rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ih(t,e){var n=rh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rh(n)}}function em(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?em(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tm(){for(var t=window,e=mo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=mo(t.document)}return e}function cc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pw(t){var e=tm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&em(n.ownerDocument.documentElement,n)){if(r!==null&&cc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ih(n,s);var o=ih(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mw=Vt&&"documentMode"in document&&11>=document.documentMode,fr=null,qa=null,ki=null,Ja=!1;function sh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ja||fr==null||fr!==mo(r)||(r=fr,"selectionStart"in r&&cc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ki&&Bi(ki,r)||(ki=r,r=So(qa,"onSelect"),0<r.length&&(e=new lc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=fr)))}function Us(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var pr={animationend:Us("Animation","AnimationEnd"),animationiteration:Us("Animation","AnimationIteration"),animationstart:Us("Animation","AnimationStart"),transitionend:Us("Transition","TransitionEnd")},Jl={},nm={};Vt&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function hl(t){if(Jl[t])return Jl[t];if(!pr[t])return t;var e=pr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in nm)return Jl[t]=e[n];return t}var rm=hl("animationend"),im=hl("animationiteration"),sm=hl("animationstart"),om=hl("transitionend"),lm=new Map,oh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(t,e){lm.set(t,e),ir(e,[t])}for(var Xl=0;Xl<oh.length;Xl++){var Zl=oh[Xl],gw=Zl.toLowerCase(),_w=Zl[0].toUpperCase()+Zl.slice(1);Pn(gw,"on"+_w)}Pn(rm,"onAnimationEnd");Pn(im,"onAnimationIteration");Pn(sm,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(om,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vw=new Set("cancel close invalid load scroll toggle".split(" ").concat(vi));function lh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,gy(r,e,void 0,t),t.currentTarget=null}function am(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;lh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;lh(i,l,u),s=a}}}if(_o)throw t=Ga,_o=!1,Ga=null,t}function te(t,e){var n=e[nu];n===void 0&&(n=e[nu]=new Set);var r=t+"__bubble";n.has(r)||(um(e,t,2,!1),n.add(r))}function ea(t,e,n){var r=0;e&&(r|=4),um(n,t,r,e)}var Ws="_reactListening"+Math.random().toString(36).slice(2);function Hi(t){if(!t[Ws]){t[Ws]=!0,gp.forEach(function(n){n!=="selectionchange"&&(vw.has(n)||ea(n,!1,t),ea(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ws]||(e[Ws]=!0,ea("selectionchange",!1,e))}}function um(t,e,n,r){switch(Gp(e)){case 1:var i=Oy;break;case 4:i=Ly;break;default:i=sc}n=i.bind(null,e,n,t),i=void 0,!$a||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ta(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Wn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Op(function(){var u=s,d=tc(n),c=[];e:{var h=lm.get(t);if(h!==void 0){var v=lc,_=t;switch(t){case"keypress":if(to(n)===0)break e;case"keydown":case"keyup":v=Qy;break;case"focusin":_="focus",v=Ql;break;case"focusout":_="blur",v=Ql;break;case"beforeblur":case"afterblur":v=Ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=by;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Jy;break;case rm:case im:case sm:v=Uy;break;case om:v=Zy;break;case"scroll":v=Dy;break;case"wheel":v=tw;break;case"copy":case"cut":case"paste":v=zy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Jd}var y=(e&4)!==0,T=!y&&t==="scroll",g=y?h!==null?h+"Capture":null:h;y=[];for(var p=u,m;p!==null;){m=p;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=Fi(p,g),w!=null&&y.push($i(p,w,m)))),T)break;p=p.return}0<y.length&&(h=new v(h,_,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==Ba&&(_=n.relatedTarget||n.fromElement)&&(Wn(_)||_[Bt]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=u,_=_?Wn(_):null,_!==null&&(T=sr(_),_!==T||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(y=Yd,w="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=Jd,w="onPointerLeave",g="onPointerEnter",p="pointer"),T=v==null?h:mr(v),m=_==null?h:mr(_),h=new y(w,p+"leave",v,n,d),h.target=T,h.relatedTarget=m,w=null,Wn(d)===u&&(y=new y(g,p+"enter",_,n,d),y.target=m,y.relatedTarget=T,w=y),T=w,v&&_)t:{for(y=v,g=_,p=0,m=y;m;m=ar(m))p++;for(m=0,w=g;w;w=ar(w))m++;for(;0<p-m;)y=ar(y),p--;for(;0<m-p;)g=ar(g),m--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break t;y=ar(y),g=ar(g)}y=null}else y=null;v!==null&&ah(c,h,v,y,!1),_!==null&&T!==null&&ah(c,T,_,y,!0)}}e:{if(h=u?mr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var E=aw;else if(eh(h))if(Xp)E=hw;else{E=cw;var C=uw}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=dw);if(E&&(E=E(t,u))){Jp(c,E,n,d);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Fa(h,"number",h.value)}switch(C=u?mr(u):window,t){case"focusin":(eh(C)||C.contentEditable==="true")&&(fr=C,qa=u,ki=null);break;case"focusout":ki=qa=fr=null;break;case"mousedown":Ja=!0;break;case"contextmenu":case"mouseup":case"dragend":Ja=!1,sh(c,n,d);break;case"selectionchange":if(mw)break;case"keydown":case"keyup":sh(c,n,d)}var N;if(uc)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else hr?Yp(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Qp&&n.locale!=="ko"&&(hr||x!=="onCompositionStart"?x==="onCompositionEnd"&&hr&&(N=Kp()):(un=d,oc="value"in un?un.value:un.textContent,hr=!0)),C=So(u,x),0<C.length&&(x=new qd(x,t,null,n,d),c.push({event:x,listeners:C}),N?x.data=N:(N=qp(n),N!==null&&(x.data=N)))),(N=rw?iw(t,n):sw(t,n))&&(u=So(u,"onBeforeInput"),0<u.length&&(d=new qd("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=N))}am(c,e)})}function $i(t,e,n){return{instance:t,listener:e,currentTarget:n}}function So(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fi(t,n),s!=null&&r.unshift($i(t,s,i)),s=Fi(t,e),s!=null&&r.push($i(t,s,i))),t=t.return}return r}function ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ah(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Fi(n,s),a!=null&&o.unshift($i(n,a,l))):i||(a=Fi(n,s),a!=null&&o.push($i(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yw=/\r\n?/g,ww=/\u0000|\uFFFD/g;function uh(t){return(typeof t=="string"?t:""+t).replace(yw,`
`).replace(ww,"")}function zs(t,e,n){if(e=uh(e),uh(t)!==e&&n)throw Error(k(425))}function Co(){}var Xa=null,Za=null;function eu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,Ew=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,Sw=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(t){return ch.resolve(null).then(t).catch(Cw)}:tu;function Cw(t){setTimeout(function(){throw t})}function na(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),zi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zi(e)}function pn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),St="__reactFiber$"+Yr,Gi="__reactProps$"+Yr,Bt="__reactContainer$"+Yr,nu="__reactEvents$"+Yr,Iw="__reactListeners$"+Yr,kw="__reactHandles$"+Yr;function Wn(t){var e=t[St];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bt]||n[St]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dh(t);t!==null;){if(n=t[St])return n;t=dh(t)}return e}t=n,n=t.parentNode}return null}function _s(t){return t=t[St]||t[Bt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function mr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function fl(t){return t[Gi]||null}var ru=[],gr=-1;function xn(t){return{current:t}}function re(t){0>gr||(t.current=ru[gr],ru[gr]=null,gr--)}function Z(t,e){gr++,ru[gr]=t.current,t.current=e}var kn={},Pe=xn(kn),We=xn(!1),Kn=kn;function br(t,e){var n=t.type.contextTypes;if(!n)return kn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ze(t){return t=t.childContextTypes,t!=null}function Io(){re(We),re(Pe)}function hh(t,e,n){if(Pe.current!==kn)throw Error(k(168));Z(Pe,e),Z(We,n)}function cm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,uy(t)||"Unknown",i));return le({},n,r)}function ko(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kn,Kn=Pe.current,Z(Pe,t),Z(We,We.current),!0}function fh(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=cm(t,e,Kn),r.__reactInternalMemoizedMergedChildContext=t,re(We),re(Pe),Z(Pe,t)):re(We),Z(We,n)}var Ot=null,pl=!1,ra=!1;function dm(t){Ot===null?Ot=[t]:Ot.push(t)}function Tw(t){pl=!0,dm(t)}function An(){if(!ra&&Ot!==null){ra=!0;var t=0,e=G;try{var n=Ot;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ot=null,pl=!1}catch(i){throw Ot!==null&&(Ot=Ot.slice(t+1)),bp(nc,An),i}finally{G=e,ra=!1}}return null}var _r=[],vr=0,To=null,No=0,Ze=[],et=0,Qn=null,Lt=1,Dt="";function bn(t,e){_r[vr++]=No,_r[vr++]=To,To=t,No=e}function hm(t,e,n){Ze[et++]=Lt,Ze[et++]=Dt,Ze[et++]=Qn,Qn=t;var r=Lt;t=Dt;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var s=32-pt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Lt=1<<32-pt(e)+i|n<<i|r,Dt=s+t}else Lt=1<<s|n<<i|r,Dt=t}function dc(t){t.return!==null&&(bn(t,1),hm(t,1,0))}function hc(t){for(;t===To;)To=_r[--vr],_r[vr]=null,No=_r[--vr],_r[vr]=null;for(;t===Qn;)Qn=Ze[--et],Ze[et]=null,Dt=Ze[--et],Ze[et]=null,Lt=Ze[--et],Ze[et]=null}var Qe=null,Ke=null,ie=!1,ct=null;function fm(t,e){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ph(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qe=t,Ke=pn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qe=t,Ke=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qn!==null?{id:Lt,overflow:Dt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qe=t,Ke=null,!0):!1;default:return!1}}function iu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function su(t){if(ie){var e=Ke;if(e){var n=e;if(!ph(t,e)){if(iu(t))throw Error(k(418));e=pn(n.nextSibling);var r=Qe;e&&ph(t,e)?fm(r,n):(t.flags=t.flags&-4097|2,ie=!1,Qe=t)}}else{if(iu(t))throw Error(k(418));t.flags=t.flags&-4097|2,ie=!1,Qe=t}}}function mh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qe=t}function Vs(t){if(t!==Qe)return!1;if(!ie)return mh(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!eu(t.type,t.memoizedProps)),e&&(e=Ke)){if(iu(t))throw pm(),Error(k(418));for(;e;)fm(t,e),e=pn(e.nextSibling)}if(mh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ke=pn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ke=null}}else Ke=Qe?pn(t.stateNode.nextSibling):null;return!0}function pm(){for(var t=Ke;t;)t=pn(t.nextSibling)}function jr(){Ke=Qe=null,ie=!1}function fc(t){ct===null?ct=[t]:ct.push(t)}var Nw=Yt.ReactCurrentBatchConfig;function ai(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Bs(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gh(t){var e=t._init;return e(t._payload)}function mm(t){function e(g,p){if(t){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=vn(g,p),g.index=0,g.sibling=null,g}function s(g,p,m){return g.index=m,t?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,p,m,w){return p===null||p.tag!==6?(p=ca(m,g.mode,w),p.return=g,p):(p=i(p,m),p.return=g,p)}function a(g,p,m,w){var E=m.type;return E===dr?d(g,p,m.props.children,w,m.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===en&&gh(E)===p.type)?(w=i(p,m.props),w.ref=ai(g,p,m),w.return=g,w):(w=ao(m.type,m.key,m.props,null,g.mode,w),w.ref=ai(g,p,m),w.return=g,w)}function u(g,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=da(m,g.mode,w),p.return=g,p):(p=i(p,m.children||[]),p.return=g,p)}function d(g,p,m,w,E){return p===null||p.tag!==7?(p=Gn(m,g.mode,w,E),p.return=g,p):(p=i(p,m),p.return=g,p)}function c(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ca(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Os:return m=ao(p.type,p.key,p.props,null,g.mode,m),m.ref=ai(g,null,p),m.return=g,m;case cr:return p=da(p,g.mode,m),p.return=g,p;case en:var w=p._init;return c(g,w(p._payload),m)}if(gi(p)||ri(p))return p=Gn(p,g.mode,m,null),p.return=g,p;Bs(g,p)}return null}function h(g,p,m,w){var E=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:l(g,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Os:return m.key===E?a(g,p,m,w):null;case cr:return m.key===E?u(g,p,m,w):null;case en:return E=m._init,h(g,p,E(m._payload),w)}if(gi(m)||ri(m))return E!==null?null:d(g,p,m,w,null);Bs(g,m)}return null}function v(g,p,m,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,l(p,g,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Os:return g=g.get(w.key===null?m:w.key)||null,a(p,g,w,E);case cr:return g=g.get(w.key===null?m:w.key)||null,u(p,g,w,E);case en:var C=w._init;return v(g,p,m,C(w._payload),E)}if(gi(w)||ri(w))return g=g.get(m)||null,d(p,g,w,E,null);Bs(p,w)}return null}function _(g,p,m,w){for(var E=null,C=null,N=p,x=p=0,P=null;N!==null&&x<m.length;x++){N.index>x?(P=N,N=null):P=N.sibling;var I=h(g,N,m[x],w);if(I===null){N===null&&(N=P);break}t&&N&&I.alternate===null&&e(g,N),p=s(I,p,x),C===null?E=I:C.sibling=I,C=I,N=P}if(x===m.length)return n(g,N),ie&&bn(g,x),E;if(N===null){for(;x<m.length;x++)N=c(g,m[x],w),N!==null&&(p=s(N,p,x),C===null?E=N:C.sibling=N,C=N);return ie&&bn(g,x),E}for(N=r(g,N);x<m.length;x++)P=v(N,g,x,m[x],w),P!==null&&(t&&P.alternate!==null&&N.delete(P.key===null?x:P.key),p=s(P,p,x),C===null?E=P:C.sibling=P,C=P);return t&&N.forEach(function(M){return e(g,M)}),ie&&bn(g,x),E}function y(g,p,m,w){var E=ri(m);if(typeof E!="function")throw Error(k(150));if(m=E.call(m),m==null)throw Error(k(151));for(var C=E=null,N=p,x=p=0,P=null,I=m.next();N!==null&&!I.done;x++,I=m.next()){N.index>x?(P=N,N=null):P=N.sibling;var M=h(g,N,I.value,w);if(M===null){N===null&&(N=P);break}t&&N&&M.alternate===null&&e(g,N),p=s(M,p,x),C===null?E=M:C.sibling=M,C=M,N=P}if(I.done)return n(g,N),ie&&bn(g,x),E;if(N===null){for(;!I.done;x++,I=m.next())I=c(g,I.value,w),I!==null&&(p=s(I,p,x),C===null?E=I:C.sibling=I,C=I);return ie&&bn(g,x),E}for(N=r(g,N);!I.done;x++,I=m.next())I=v(N,g,x,I.value,w),I!==null&&(t&&I.alternate!==null&&N.delete(I.key===null?x:I.key),p=s(I,p,x),C===null?E=I:C.sibling=I,C=I);return t&&N.forEach(function(V){return e(g,V)}),ie&&bn(g,x),E}function T(g,p,m,w){if(typeof m=="object"&&m!==null&&m.type===dr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Os:e:{for(var E=m.key,C=p;C!==null;){if(C.key===E){if(E=m.type,E===dr){if(C.tag===7){n(g,C.sibling),p=i(C,m.props.children),p.return=g,g=p;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===en&&gh(E)===C.type){n(g,C.sibling),p=i(C,m.props),p.ref=ai(g,C,m),p.return=g,g=p;break e}n(g,C);break}else e(g,C);C=C.sibling}m.type===dr?(p=Gn(m.props.children,g.mode,w,m.key),p.return=g,g=p):(w=ao(m.type,m.key,m.props,null,g.mode,w),w.ref=ai(g,p,m),w.return=g,g=w)}return o(g);case cr:e:{for(C=m.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=i(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=da(m,g.mode,w),p.return=g,g=p}return o(g);case en:return C=m._init,T(g,p,C(m._payload),w)}if(gi(m))return _(g,p,m,w);if(ri(m))return y(g,p,m,w);Bs(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,m),p.return=g,g=p):(n(g,p),p=ca(m,g.mode,w),p.return=g,g=p),o(g)):n(g,p)}return T}var Fr=mm(!0),gm=mm(!1),Ro=xn(null),Po=null,yr=null,pc=null;function mc(){pc=yr=Po=null}function gc(t){var e=Ro.current;re(Ro),t._currentValue=e}function ou(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Rr(t,e){Po=t,pc=yr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Fe=!0),t.firstContext=null)}function st(t){var e=t._currentValue;if(pc!==t)if(t={context:t,memoizedValue:e,next:null},yr===null){if(Po===null)throw Error(k(308));yr=t,Po.dependencies={lanes:0,firstContext:t}}else yr=yr.next=t;return e}var zn=null;function _c(t){zn===null?zn=[t]:zn.push(t)}function _m(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_c(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ht(t,r)}function Ht(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tn=!1;function vc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ut(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ht(t,n)}return i=r.interleaved,i===null?(e.next=e,_c(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ht(t,n)}function no(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rc(t,n)}}function _h(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xo(t,e,n,r){var i=t.updateQueue;tn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,v=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,y=l;switch(h=e,v=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){c=_.call(v,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(v,c,h):_,h==null)break e;c=le({},c,h);break e;case 2:tn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,a=c):d=d.next=v,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);qn|=o,t.lanes=o,t.memoizedState=c}}function vh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var vs={},Tt=xn(vs),Ki=xn(vs),Qi=xn(vs);function Vn(t){if(t===vs)throw Error(k(174));return t}function yc(t,e){switch(Z(Qi,e),Z(Ki,t),Z(Tt,vs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wa(e,t)}re(Tt),Z(Tt,e)}function Ur(){re(Tt),re(Ki),re(Qi)}function ym(t){Vn(Qi.current);var e=Vn(Tt.current),n=Wa(e,t.type);e!==n&&(Z(Ki,t),Z(Tt,n))}function wc(t){Ki.current===t&&(re(Tt),re(Ki))}var se=xn(0);function Ao(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ia=[];function Ec(){for(var t=0;t<ia.length;t++)ia[t]._workInProgressVersionPrimary=null;ia.length=0}var ro=Yt.ReactCurrentDispatcher,sa=Yt.ReactCurrentBatchConfig,Yn=0,oe=null,he=null,_e=null,Oo=!1,Ti=!1,Yi=0,Rw=0;function ke(){throw Error(k(321))}function Sc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_t(t[n],e[n]))return!1;return!0}function Cc(t,e,n,r,i,s){if(Yn=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ro.current=t===null||t.memoizedState===null?Ow:Lw,t=n(r,i),Ti){s=0;do{if(Ti=!1,Yi=0,25<=s)throw Error(k(301));s+=1,_e=he=null,e.updateQueue=null,ro.current=Dw,t=n(r,i)}while(Ti)}if(ro.current=Lo,e=he!==null&&he.next!==null,Yn=0,_e=he=oe=null,Oo=!1,e)throw Error(k(300));return t}function Ic(){var t=Yi!==0;return Yi=0,t}function Et(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?oe.memoizedState=_e=t:_e=_e.next=t,_e}function ot(){if(he===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=he.next;var e=_e===null?oe.memoizedState:_e.next;if(e!==null)_e=e,he=t;else{if(t===null)throw Error(k(310));he=t,t={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},_e===null?oe.memoizedState=_e=t:_e=_e.next=t}return _e}function qi(t,e){return typeof e=="function"?e(t):e}function oa(t){var e=ot(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=he,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Yn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,oe.lanes|=d,qn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,_t(r,e.memoizedState)||(Fe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,qn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function la(t){var e=ot(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);_t(s,e.memoizedState)||(Fe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function wm(){}function Em(t,e){var n=oe,r=ot(),i=e(),s=!_t(r.memoizedState,i);if(s&&(r.memoizedState=i,Fe=!0),r=r.queue,kc(Im.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Ji(9,Cm.bind(null,n,r,i,e),void 0,null),we===null)throw Error(k(349));Yn&30||Sm(n,e,i)}return i}function Sm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Cm(t,e,n,r){e.value=n,e.getSnapshot=r,km(e)&&Tm(t)}function Im(t,e,n){return n(function(){km(e)&&Tm(t)})}function km(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_t(t,n)}catch{return!0}}function Tm(t){var e=Ht(t,1);e!==null&&mt(e,t,1,-1)}function yh(t){var e=Et();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:t},e.queue=t,t=t.dispatch=Aw.bind(null,oe,t),[e.memoizedState,t]}function Ji(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Nm(){return ot().memoizedState}function io(t,e,n,r){var i=Et();oe.flags|=t,i.memoizedState=Ji(1|e,n,void 0,r===void 0?null:r)}function ml(t,e,n,r){var i=ot();r=r===void 0?null:r;var s=void 0;if(he!==null){var o=he.memoizedState;if(s=o.destroy,r!==null&&Sc(r,o.deps)){i.memoizedState=Ji(e,n,s,r);return}}oe.flags|=t,i.memoizedState=Ji(1|e,n,s,r)}function wh(t,e){return io(8390656,8,t,e)}function kc(t,e){return ml(2048,8,t,e)}function Rm(t,e){return ml(4,2,t,e)}function Pm(t,e){return ml(4,4,t,e)}function xm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Am(t,e,n){return n=n!=null?n.concat([t]):null,ml(4,4,xm.bind(null,e,t),n)}function Tc(){}function Om(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Lm(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Dm(t,e,n){return Yn&21?(_t(n,e)||(n=Up(),oe.lanes|=n,qn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Fe=!0),t.memoizedState=n)}function Pw(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=sa.transition;sa.transition={};try{t(!1),e()}finally{G=n,sa.transition=r}}function Mm(){return ot().memoizedState}function xw(t,e,n){var r=_n(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bm(t))jm(e,n);else if(n=_m(t,e,n,r),n!==null){var i=Le();mt(n,t,r,i),Fm(n,e,r)}}function Aw(t,e,n){var r=_n(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bm(t))jm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,_t(l,o)){var a=e.interleaved;a===null?(i.next=i,_c(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=_m(t,e,i,r),n!==null&&(i=Le(),mt(n,t,r,i),Fm(n,e,r))}}function bm(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function jm(t,e){Ti=Oo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rc(t,n)}}var Lo={readContext:st,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},Ow={readContext:st,useCallback:function(t,e){return Et().memoizedState=[t,e===void 0?null:e],t},useContext:st,useEffect:wh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,io(4194308,4,xm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return io(4194308,4,t,e)},useInsertionEffect:function(t,e){return io(4,2,t,e)},useMemo:function(t,e){var n=Et();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Et();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xw.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=Et();return t={current:t},e.memoizedState=t},useState:yh,useDebugValue:Tc,useDeferredValue:function(t){return Et().memoizedState=t},useTransition:function(){var t=yh(!1),e=t[0];return t=Pw.bind(null,t[1]),Et().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=Et();if(ie){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),we===null)throw Error(k(349));Yn&30||Sm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wh(Im.bind(null,r,s,t),[t]),r.flags|=2048,Ji(9,Cm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Et(),e=we.identifierPrefix;if(ie){var n=Dt,r=Lt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Rw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Lw={readContext:st,useCallback:Om,useContext:st,useEffect:kc,useImperativeHandle:Am,useInsertionEffect:Rm,useLayoutEffect:Pm,useMemo:Lm,useReducer:oa,useRef:Nm,useState:function(){return oa(qi)},useDebugValue:Tc,useDeferredValue:function(t){var e=ot();return Dm(e,he.memoizedState,t)},useTransition:function(){var t=oa(qi)[0],e=ot().memoizedState;return[t,e]},useMutableSource:wm,useSyncExternalStore:Em,useId:Mm,unstable_isNewReconciler:!1},Dw={readContext:st,useCallback:Om,useContext:st,useEffect:kc,useImperativeHandle:Am,useInsertionEffect:Rm,useLayoutEffect:Pm,useMemo:Lm,useReducer:la,useRef:Nm,useState:function(){return la(qi)},useDebugValue:Tc,useDeferredValue:function(t){var e=ot();return he===null?e.memoizedState=t:Dm(e,he.memoizedState,t)},useTransition:function(){var t=la(qi)[0],e=ot().memoizedState;return[t,e]},useMutableSource:wm,useSyncExternalStore:Em,useId:Mm,unstable_isNewReconciler:!1};function at(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function lu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gl={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Le(),i=_n(t),s=Ut(r,i);s.payload=e,n!=null&&(s.callback=n),e=mn(t,s,i),e!==null&&(mt(e,t,i,r),no(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Le(),i=_n(t),s=Ut(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mn(t,s,i),e!==null&&(mt(e,t,i,r),no(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Le(),r=_n(t),i=Ut(n,r);i.tag=2,e!=null&&(i.callback=e),e=mn(t,i,r),e!==null&&(mt(e,t,r,n),no(e,t,r))}};function Eh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Bi(n,r)||!Bi(i,s):!0}function Um(t,e,n){var r=!1,i=kn,s=e.contextType;return typeof s=="object"&&s!==null?s=st(s):(i=ze(e)?Kn:Pe.current,r=e.contextTypes,s=(r=r!=null)?br(t,i):kn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gl.enqueueReplaceState(e,e.state,null)}function au(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},vc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=st(s):(s=ze(e)?Kn:Pe.current,i.context=br(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gl.enqueueReplaceState(i,i.state,null),xo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wr(t,e){try{var n="",r=e;do n+=ay(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function aa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function uu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Mw=typeof WeakMap=="function"?WeakMap:Map;function Wm(t,e,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Mo||(Mo=!0,yu=r),uu(t,e)},n}function zm(t,e,n){n=Ut(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){uu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){uu(t,e),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ch(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Mw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Yw.bind(null,t,e,n),e.then(t,t))}function Ih(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ut(-1,1),e.tag=2,mn(n,e,1))),n.lanes|=1),t)}var bw=Yt.ReactCurrentOwner,Fe=!1;function Ae(t,e,n,r){e.child=t===null?gm(e,null,n,r):Fr(e,t.child,n,r)}function Th(t,e,n,r,i){n=n.render;var s=e.ref;return Rr(e,i),r=Cc(t,e,n,r,s,i),n=Ic(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$t(t,e,i)):(ie&&n&&dc(e),e.flags|=1,Ae(t,e,r,i),e.child)}function Nh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Dc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Vm(t,e,s,r,i)):(t=ao(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bi,n(o,r)&&t.ref===e.ref)return $t(t,e,i)}return e.flags|=1,t=vn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Vm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Bi(s,r)&&t.ref===e.ref)if(Fe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Fe=!0);else return e.lanes=t.lanes,$t(t,e,i)}return cu(t,e,n,r,i)}function Bm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Er,Ge),Ge|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(Er,Ge),Ge|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(Er,Ge),Ge|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(Er,Ge),Ge|=r;return Ae(t,e,i,n),e.child}function Hm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cu(t,e,n,r,i){var s=ze(n)?Kn:Pe.current;return s=br(e,s),Rr(e,i),n=Cc(t,e,n,r,s,i),r=Ic(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$t(t,e,i)):(ie&&r&&dc(e),e.flags|=1,Ae(t,e,n,i),e.child)}function Rh(t,e,n,r,i){if(ze(n)){var s=!0;ko(e)}else s=!1;if(Rr(e,i),e.stateNode===null)so(t,e),Um(e,n,r),au(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=st(u):(u=ze(n)?Kn:Pe.current,u=br(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Sh(e,o,r,u),tn=!1;var h=e.memoizedState;o.state=h,xo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||We.current||tn?(typeof d=="function"&&(lu(e,n,d,r),a=e.memoizedState),(l=tn||Eh(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,vm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:at(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=st(a):(a=ze(n)?Kn:Pe.current,a=br(e,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&Sh(e,o,r,a),tn=!1,h=e.memoizedState,o.state=h,xo(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||We.current||tn?(typeof v=="function"&&(lu(e,n,v,r),_=e.memoizedState),(u=tn||Eh(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return du(t,e,n,r,s,i)}function du(t,e,n,r,i,s){Hm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fh(e,n,!1),$t(t,e,s);r=e.stateNode,bw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fr(e,t.child,null,s),e.child=Fr(e,null,l,s)):Ae(t,e,l,s),e.memoizedState=r.state,i&&fh(e,n,!0),e.child}function $m(t){var e=t.stateNode;e.pendingContext?hh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hh(t,e.context,!1),yc(t,e.containerInfo)}function Ph(t,e,n,r,i){return jr(),fc(i),e.flags|=256,Ae(t,e,n,r),e.child}var hu={dehydrated:null,treeContext:null,retryLane:0};function fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gm(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(se,i&1),t===null)return su(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yl(o,r,0,null),t=Gn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fu(n),e.memoizedState=hu,t):Nc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return jw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=vn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=vn(l,s):(s=Gn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?fu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hu,r}return s=t.child,t=s.sibling,r=vn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nc(t,e){return e=yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Hs(t,e,n,r){return r!==null&&fc(r),Fr(e,t.child,null,n),t=Nc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=aa(Error(k(422))),Hs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yl({mode:"visible",children:r.children},i,0,null),s=Gn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fr(e,t.child,null,o),e.child.memoizedState=fu(o),e.memoizedState=hu,s);if(!(e.mode&1))return Hs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(k(419)),r=aa(s,r,void 0),Hs(t,e,o,r)}if(l=(o&t.childLanes)!==0,Fe||l){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ht(t,i),mt(r,t,i,-1))}return Lc(),r=aa(Error(k(421))),Hs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ke=pn(i.nextSibling),Qe=e,ie=!0,ct=null,t!==null&&(Ze[et++]=Lt,Ze[et++]=Dt,Ze[et++]=Qn,Lt=t.id,Dt=t.overflow,Qn=e),e=Nc(e,r.children),e.flags|=4096,e)}function xh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ou(t.return,e,n)}function ua(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Km(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ae(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xh(t,n,e);else if(t.tag===19)xh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ao(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ua(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ao(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ua(e,!0,n,null,s);break;case"together":ua(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function so(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $t(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=vn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Fw(t,e,n){switch(e.tag){case 3:$m(e),jr();break;case 5:ym(e);break;case 1:ze(e.type)&&ko(e);break;case 4:yc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(Ro,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?Gm(t,e,n):(Z(se,se.current&1),t=$t(t,e,n),t!==null?t.sibling:null);Z(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Km(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,Bm(t,e,n)}return $t(t,e,n)}var Qm,pu,Ym,qm;Qm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pu=function(){};Ym=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Vn(Tt.current);var s=null;switch(n){case"input":i=ba(t,i),r=ba(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=Ua(t,i),r=Ua(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Co)}za(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&te("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};qm=function(t,e,n,r){n!==r&&(e.flags|=4)};function ui(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Te(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Uw(t,e,n){var r=e.pendingProps;switch(hc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(e),null;case 1:return ze(e.type)&&Io(),Te(e),null;case 3:return r=e.stateNode,Ur(),re(We),re(Pe),Ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Vs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ct!==null&&(Su(ct),ct=null))),pu(t,e),Te(e),null;case 5:wc(e);var i=Vn(Qi.current);if(n=e.type,t!==null&&e.stateNode!=null)Ym(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Te(e),null}if(t=Vn(Tt.current),Vs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[St]=e,r[Gi]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<vi.length;i++)te(vi[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Ud(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":zd(r,s),te("invalid",r)}za(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&zs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&zs(r.textContent,l,t),i=["children",""+l]):bi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":Ls(r),Wd(r,s,!0);break;case"textarea":Ls(r),Vd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Co)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ip(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[St]=e,t[Gi]=r,Qm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Va(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<vi.length;i++)te(vi[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":Ud(t,r),i=ba(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),te("invalid",t);break;case"textarea":zd(t,r),i=Ua(t,r),te("invalid",t);break;default:i=r}za(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Np(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&kp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ji(t,a):typeof a=="number"&&ji(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&te("scroll",t):a!=null&&Ju(t,s,a,o))}switch(n){case"input":Ls(t),Wd(t,r,!1);break;case"textarea":Ls(t),Vd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+In(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ir(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ir(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Co)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Te(e),null;case 6:if(t&&e.stateNode!=null)qm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Vn(Qi.current),Vn(Tt.current),Vs(e)){if(r=e.stateNode,n=e.memoizedProps,r[St]=e,(s=r.nodeValue!==n)&&(t=Qe,t!==null))switch(t.tag){case 3:zs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=e,e.stateNode=r}return Te(e),null;case 13:if(re(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&Ke!==null&&e.mode&1&&!(e.flags&128))pm(),jr(),e.flags|=98560,s=!1;else if(s=Vs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[St]=e}else jr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Te(e),s=!1}else ct!==null&&(Su(ct),ct=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?me===0&&(me=3):Lc())),e.updateQueue!==null&&(e.flags|=4),Te(e),null);case 4:return Ur(),pu(t,e),t===null&&Hi(e.stateNode.containerInfo),Te(e),null;case 10:return gc(e.type._context),Te(e),null;case 17:return ze(e.type)&&Io(),Te(e),null;case 19:if(re(se),s=e.memoizedState,s===null)return Te(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ui(s,!1);else{if(me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ao(t),o!==null){for(e.flags|=128,ui(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&ce()>zr&&(e.flags|=128,r=!0,ui(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ao(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ui(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return Te(e),null}else 2*ce()-s.renderingStartTime>zr&&n!==1073741824&&(e.flags|=128,r=!0,ui(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ce(),e.sibling=null,n=se.current,Z(se,r?n&1|2:n&1),e):(Te(e),null);case 22:case 23:return Oc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ge&1073741824&&(Te(e),e.subtreeFlags&6&&(e.flags|=8192)):Te(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function Ww(t,e){switch(hc(e),e.tag){case 1:return ze(e.type)&&Io(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ur(),re(We),re(Pe),Ec(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wc(e),null;case 13:if(re(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));jr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(se),null;case 4:return Ur(),null;case 10:return gc(e.type._context),null;case 22:case 23:return Oc(),null;case 24:return null;default:return null}}var $s=!1,Ne=!1,zw=typeof WeakSet=="function"?WeakSet:Set,O=null;function wr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(t,e,r)}else n.current=null}function mu(t,e,n){try{n()}catch(r){ae(t,e,r)}}var Ah=!1;function Vw(t,e){if(Xa=wo,t=tm(),cc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var v;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(v=c.firstChild)!==null;)h=c,c=v;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(v=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=v}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Za={focusedElem:t,selectionRange:n},wo=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,T=_.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:at(e.type,y),T);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){ae(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return _=Ah,Ah=!1,_}function Ni(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&mu(e,n,s)}i=i.next}while(i!==r)}}function _l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jm(t){var e=t.alternate;e!==null&&(t.alternate=null,Jm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[St],delete e[Gi],delete e[nu],delete e[Iw],delete e[kw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xm(t){return t.tag===5||t.tag===3||t.tag===4}function Oh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _u(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Co));else if(r!==4&&(t=t.child,t!==null))for(_u(t,e,n),t=t.sibling;t!==null;)_u(t,e,n),t=t.sibling}function vu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vu(t,e,n),t=t.sibling;t!==null;)vu(t,e,n),t=t.sibling}var Se=null,ut=!1;function Xt(t,e,n){for(n=n.child;n!==null;)Zm(t,e,n),n=n.sibling}function Zm(t,e,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(ul,n)}catch{}switch(n.tag){case 5:Ne||wr(n,e);case 6:var r=Se,i=ut;Se=null,Xt(t,e,n),Se=r,ut=i,Se!==null&&(ut?(t=Se,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(ut?(t=Se,n=n.stateNode,t.nodeType===8?na(t.parentNode,n):t.nodeType===1&&na(t,n),zi(t)):na(Se,n.stateNode));break;case 4:r=Se,i=ut,Se=n.stateNode.containerInfo,ut=!0,Xt(t,e,n),Se=r,ut=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mu(n,e,o),i=i.next}while(i!==r)}Xt(t,e,n);break;case 1:if(!Ne&&(wr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ae(n,e,l)}Xt(t,e,n);break;case 21:Xt(t,e,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,Xt(t,e,n),Ne=r):Xt(t,e,n);break;default:Xt(t,e,n)}}function Lh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zw),e.forEach(function(r){var i=Jw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Se=l.stateNode,ut=!1;break e;case 3:Se=l.stateNode.containerInfo,ut=!0;break e;case 4:Se=l.stateNode.containerInfo,ut=!0;break e}l=l.return}if(Se===null)throw Error(k(160));Zm(s,o,i),Se=null,ut=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)eg(e,t),e=e.sibling}function eg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(lt(e,t),wt(t),r&4){try{Ni(3,t,t.return),_l(3,t)}catch(y){ae(t,t.return,y)}try{Ni(5,t,t.return)}catch(y){ae(t,t.return,y)}}break;case 1:lt(e,t),wt(t),r&512&&n!==null&&wr(n,n.return);break;case 5:if(lt(e,t),wt(t),r&512&&n!==null&&wr(n,n.return),t.flags&32){var i=t.stateNode;try{ji(i,"")}catch(y){ae(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Sp(i,s),Va(l,o);var u=Va(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Np(i,c):d==="dangerouslySetInnerHTML"?kp(i,c):d==="children"?ji(i,c):Ju(i,d,c,u)}switch(l){case"input":ja(i,s);break;case"textarea":Cp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Ir(i,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ir(i,!!s.multiple,s.defaultValue,!0):Ir(i,!!s.multiple,s.multiple?[]:"",!1))}i[Gi]=s}catch(y){ae(t,t.return,y)}}break;case 6:if(lt(e,t),wt(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ae(t,t.return,y)}}break;case 3:if(lt(e,t),wt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zi(e.containerInfo)}catch(y){ae(t,t.return,y)}break;case 4:lt(e,t),wt(t);break;case 13:lt(e,t),wt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xc=ce())),r&4&&Lh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ne=(u=Ne)||d,lt(e,t),Ne=u):lt(e,t),wt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(O=t,d=t.child;d!==null;){for(c=O=d;O!==null;){switch(h=O,v=h.child,h.tag){case 0:case 11:case 14:case 15:Ni(4,h,h.return);break;case 1:wr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ae(r,n,y)}}break;case 5:wr(h,h.return);break;case 22:if(h.memoizedState!==null){Mh(c);continue}}v!==null?(v.return=h,O=v):Mh(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Tp("display",o))}catch(y){ae(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){ae(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:lt(e,t),wt(t),r&4&&Lh(t);break;case 21:break;default:lt(e,t),wt(t)}}function wt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Xm(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ji(i,""),r.flags&=-33);var s=Oh(t);vu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Oh(t);_u(t,l,o);break;default:throw Error(k(161))}}catch(a){ae(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Bw(t,e,n){O=t,tg(t)}function tg(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$s;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ne;l=$s;var u=Ne;if($s=o,(Ne=a)&&!u)for(O=i;O!==null;)o=O,a=o.child,o.tag===22&&o.memoizedState!==null?bh(i):a!==null?(a.return=o,O=a):bh(i);for(;s!==null;)O=s,tg(s),s=s.sibling;O=i,$s=l,Ne=u}Dh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):Dh(t)}}function Dh(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ne||_l(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:at(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&zi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Ne||e.flags&512&&gu(e)}catch(h){ae(e,e.return,h)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Mh(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function bh(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_l(4,e)}catch(a){ae(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ae(e,i,a)}}var s=e.return;try{gu(e)}catch(a){ae(e,s,a)}break;case 5:var o=e.return;try{gu(e)}catch(a){ae(e,o,a)}}}catch(a){ae(e,e.return,a)}if(e===t){O=null;break}var l=e.sibling;if(l!==null){l.return=e.return,O=l;break}O=e.return}}var Hw=Math.ceil,Do=Yt.ReactCurrentDispatcher,Rc=Yt.ReactCurrentOwner,it=Yt.ReactCurrentBatchConfig,H=0,we=null,de=null,Ce=0,Ge=0,Er=xn(0),me=0,Xi=null,qn=0,vl=0,Pc=0,Ri=null,je=null,xc=0,zr=1/0,At=null,Mo=!1,yu=null,gn=null,Gs=!1,cn=null,bo=0,Pi=0,wu=null,oo=-1,lo=0;function Le(){return H&6?ce():oo!==-1?oo:oo=ce()}function _n(t){return t.mode&1?H&2&&Ce!==0?Ce&-Ce:Nw.transition!==null?(lo===0&&(lo=Up()),lo):(t=G,t!==0||(t=window.event,t=t===void 0?16:Gp(t.type)),t):1}function mt(t,e,n,r){if(50<Pi)throw Pi=0,wu=null,Error(k(185));ms(t,n,r),(!(H&2)||t!==we)&&(t===we&&(!(H&2)&&(vl|=n),me===4&&rn(t,Ce)),Ve(t,r),n===1&&H===0&&!(e.mode&1)&&(zr=ce()+500,pl&&An()))}function Ve(t,e){var n=t.callbackNode;Ny(t,e);var r=yo(t,t===we?Ce:0);if(r===0)n!==null&&$d(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$d(n),e===1)t.tag===0?Tw(jh.bind(null,t)):dm(jh.bind(null,t)),Sw(function(){!(H&6)&&An()}),n=null;else{switch(Wp(r)){case 1:n=nc;break;case 4:n=jp;break;case 16:n=vo;break;case 536870912:n=Fp;break;default:n=vo}n=ug(n,ng.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ng(t,e){if(oo=-1,lo=0,H&6)throw Error(k(327));var n=t.callbackNode;if(Pr()&&t.callbackNode!==n)return null;var r=yo(t,t===we?Ce:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=jo(t,r);else{e=r;var i=H;H|=2;var s=ig();(we!==t||Ce!==e)&&(At=null,zr=ce()+500,$n(t,e));do try{Kw();break}catch(l){rg(t,l)}while(!0);mc(),Do.current=s,H=i,de!==null?e=0:(we=null,Ce=0,e=me)}if(e!==0){if(e===2&&(i=Ka(t),i!==0&&(r=i,e=Eu(t,i))),e===1)throw n=Xi,$n(t,0),rn(t,r),Ve(t,ce()),n;if(e===6)rn(t,r);else{if(i=t.current.alternate,!(r&30)&&!$w(i)&&(e=jo(t,r),e===2&&(s=Ka(t),s!==0&&(r=s,e=Eu(t,s))),e===1))throw n=Xi,$n(t,0),rn(t,r),Ve(t,ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:jn(t,je,At);break;case 3:if(rn(t,r),(r&130023424)===r&&(e=xc+500-ce(),10<e)){if(yo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Le(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=tu(jn.bind(null,t,je,At),e);break}jn(t,je,At);break;case 4:if(rn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hw(r/1960))-r,10<r){t.timeoutHandle=tu(jn.bind(null,t,je,At),r);break}jn(t,je,At);break;case 5:jn(t,je,At);break;default:throw Error(k(329))}}}return Ve(t,ce()),t.callbackNode===n?ng.bind(null,t):null}function Eu(t,e){var n=Ri;return t.current.memoizedState.isDehydrated&&($n(t,e).flags|=256),t=jo(t,e),t!==2&&(e=je,je=n,e!==null&&Su(e)),t}function Su(t){je===null?je=t:je.push.apply(je,t)}function $w(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!_t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rn(t,e){for(e&=~Pc,e&=~vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pt(e),r=1<<n;t[n]=-1,e&=~r}}function jh(t){if(H&6)throw Error(k(327));Pr();var e=yo(t,0);if(!(e&1))return Ve(t,ce()),null;var n=jo(t,e);if(t.tag!==0&&n===2){var r=Ka(t);r!==0&&(e=r,n=Eu(t,r))}if(n===1)throw n=Xi,$n(t,0),rn(t,e),Ve(t,ce()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jn(t,je,At),Ve(t,ce()),null}function Ac(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(zr=ce()+500,pl&&An())}}function Jn(t){cn!==null&&cn.tag===0&&!(H&6)&&Pr();var e=H;H|=1;var n=it.transition,r=G;try{if(it.transition=null,G=1,t)return t()}finally{G=r,it.transition=n,H=e,!(H&6)&&An()}}function Oc(){Ge=Er.current,re(Er)}function $n(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ew(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(hc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Io();break;case 3:Ur(),re(We),re(Pe),Ec();break;case 5:wc(r);break;case 4:Ur();break;case 13:re(se);break;case 19:re(se);break;case 10:gc(r.type._context);break;case 22:case 23:Oc()}n=n.return}if(we=t,de=t=vn(t.current,null),Ce=Ge=e,me=0,Xi=null,Pc=vl=qn=0,je=Ri=null,zn!==null){for(e=0;e<zn.length;e++)if(n=zn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zn=null}return t}function rg(t,e){do{var n=de;try{if(mc(),ro.current=Lo,Oo){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Oo=!1}if(Yn=0,_e=he=oe=null,Ti=!1,Yi=0,Rc.current=null,n===null||n.return===null){me=1,Xi=e,de=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ce,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Ih(o);if(v!==null){v.flags&=-257,kh(v,o,l,s,e),v.mode&1&&Ch(s,u,e),e=v,a=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(a),e.updateQueue=y}else _.add(a);break e}else{if(!(e&1)){Ch(s,u,e),Lc();break e}a=Error(k(426))}}else if(ie&&l.mode&1){var T=Ih(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),kh(T,o,l,s,e),fc(Wr(a,l));break e}}s=a=Wr(a,l),me!==4&&(me=2),Ri===null?Ri=[s]:Ri.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Wm(s,a,e);_h(s,g);break e;case 1:l=a;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(gn===null||!gn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=zm(s,l,e);_h(s,w);break e}}s=s.return}while(s!==null)}og(n)}catch(E){e=E,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function ig(){var t=Do.current;return Do.current=Lo,t===null?Lo:t}function Lc(){(me===0||me===3||me===2)&&(me=4),we===null||!(qn&268435455)&&!(vl&268435455)||rn(we,Ce)}function jo(t,e){var n=H;H|=2;var r=ig();(we!==t||Ce!==e)&&(At=null,$n(t,e));do try{Gw();break}catch(i){rg(t,i)}while(!0);if(mc(),H=n,Do.current=r,de!==null)throw Error(k(261));return we=null,Ce=0,me}function Gw(){for(;de!==null;)sg(de)}function Kw(){for(;de!==null&&!vy();)sg(de)}function sg(t){var e=ag(t.alternate,t,Ge);t.memoizedProps=t.pendingProps,e===null?og(t):de=e,Rc.current=null}function og(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ww(n,e),n!==null){n.flags&=32767,de=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{me=6,de=null;return}}else if(n=Uw(n,e,Ge),n!==null){de=n;return}if(e=e.sibling,e!==null){de=e;return}de=e=t}while(e!==null);me===0&&(me=5)}function jn(t,e,n){var r=G,i=it.transition;try{it.transition=null,G=1,Qw(t,e,n,r)}finally{it.transition=i,G=r}return null}function Qw(t,e,n,r){do Pr();while(cn!==null);if(H&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ry(t,s),t===we&&(de=we=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gs||(Gs=!0,ug(vo,function(){return Pr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=it.transition,it.transition=null;var o=G;G=1;var l=H;H|=4,Rc.current=null,Vw(t,n),eg(n,t),pw(Za),wo=!!Xa,Za=Xa=null,t.current=n,Bw(n),yy(),H=l,G=o,it.transition=s}else t.current=n;if(Gs&&(Gs=!1,cn=t,bo=i),s=t.pendingLanes,s===0&&(gn=null),Sy(n.stateNode),Ve(t,ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Mo)throw Mo=!1,t=yu,yu=null,t;return bo&1&&t.tag!==0&&Pr(),s=t.pendingLanes,s&1?t===wu?Pi++:(Pi=0,wu=t):Pi=0,An(),null}function Pr(){if(cn!==null){var t=Wp(bo),e=it.transition,n=G;try{if(it.transition=null,G=16>t?16:t,cn===null)var r=!1;else{if(t=cn,cn=null,bo=0,H&6)throw Error(k(331));var i=H;for(H|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(O=u;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:Ni(8,d,s)}var c=d.child;if(c!==null)c.return=d,O=c;else for(;O!==null;){d=O;var h=d.sibling,v=d.return;if(Jm(d),d===u){O=null;break}if(h!==null){h.return=v,O=h;break}O=v}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var T=y.sibling;y.sibling=null,y=T}while(y!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ni(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,O=g;break e}O=s.return}}var p=t.current;for(O=p;O!==null;){o=O;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,O=m;else e:for(o=p;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:_l(9,l)}}catch(E){ae(l,l.return,E)}if(l===o){O=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,O=w;break e}O=l.return}}if(H=i,An(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(ul,t)}catch{}r=!0}return r}finally{G=n,it.transition=e}}return!1}function Fh(t,e,n){e=Wr(n,e),e=Wm(t,e,1),t=mn(t,e,1),e=Le(),t!==null&&(ms(t,1,e),Ve(t,e))}function ae(t,e,n){if(t.tag===3)Fh(t,t,n);else for(;e!==null;){if(e.tag===3){Fh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){t=Wr(n,t),t=zm(e,t,1),e=mn(e,t,1),t=Le(),e!==null&&(ms(e,1,t),Ve(e,t));break}}e=e.return}}function Yw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Le(),t.pingedLanes|=t.suspendedLanes&n,we===t&&(Ce&n)===n&&(me===4||me===3&&(Ce&130023424)===Ce&&500>ce()-xc?$n(t,0):Pc|=n),Ve(t,e)}function lg(t,e){e===0&&(t.mode&1?(e=bs,bs<<=1,!(bs&130023424)&&(bs=4194304)):e=1);var n=Le();t=Ht(t,e),t!==null&&(ms(t,e,n),Ve(t,n))}function qw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lg(t,n)}function Jw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),lg(t,n)}var ag;ag=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||We.current)Fe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Fe=!1,Fw(t,e,n);Fe=!!(t.flags&131072)}else Fe=!1,ie&&e.flags&1048576&&hm(e,No,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;so(t,e),t=e.pendingProps;var i=br(e,Pe.current);Rr(e,n),i=Cc(null,e,r,t,i,n);var s=Ic();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ze(r)?(s=!0,ko(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vc(e),i.updater=gl,e.stateNode=i,i._reactInternals=e,au(e,r,t,n),e=du(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&dc(e),Ae(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(so(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Zw(r),t=at(r,t),i){case 0:e=cu(null,e,r,t,n);break e;case 1:e=Rh(null,e,r,t,n);break e;case 11:e=Th(null,e,r,t,n);break e;case 14:e=Nh(null,e,r,at(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),cu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Rh(t,e,r,i,n);case 3:e:{if($m(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,vm(t,e),xo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wr(Error(k(423)),e),e=Ph(t,e,r,n,i);break e}else if(r!==i){i=Wr(Error(k(424)),e),e=Ph(t,e,r,n,i);break e}else for(Ke=pn(e.stateNode.containerInfo.firstChild),Qe=e,ie=!0,ct=null,n=gm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jr(),r===i){e=$t(t,e,n);break e}Ae(t,e,r,n)}e=e.child}return e;case 5:return ym(e),t===null&&su(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,eu(r,i)?o=null:s!==null&&eu(r,s)&&(e.flags|=32),Hm(t,e),Ae(t,e,o,n),e.child;case 6:return t===null&&su(e),null;case 13:return Gm(t,e,n);case 4:return yc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fr(e,null,r,n):Ae(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Th(t,e,r,i,n);case 7:return Ae(t,e,e.pendingProps,n),e.child;case 8:return Ae(t,e,e.pendingProps.children,n),e.child;case 12:return Ae(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(Ro,r._currentValue),r._currentValue=o,s!==null)if(_t(s.value,o)){if(s.children===i.children&&!We.current){e=$t(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Ut(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ou(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ou(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ae(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Rr(e,n),i=st(i),r=r(i),e.flags|=1,Ae(t,e,r,n),e.child;case 14:return r=e.type,i=at(r,e.pendingProps),i=at(r.type,i),Nh(t,e,r,i,n);case 15:return Vm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),so(t,e),e.tag=1,ze(r)?(t=!0,ko(e)):t=!1,Rr(e,n),Um(e,r,i),au(e,r,i,n),du(null,e,r,!0,t,n);case 19:return Km(t,e,n);case 22:return Bm(t,e,n)}throw Error(k(156,e.tag))};function ug(t,e){return bp(t,e)}function Xw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(t,e,n,r){return new Xw(t,e,n,r)}function Dc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zw(t){if(typeof t=="function")return Dc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zu)return 11;if(t===ec)return 14}return 2}function vn(t,e){var n=t.alternate;return n===null?(n=tt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ao(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Dc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case dr:return Gn(n.children,i,s,e);case Xu:o=8,i|=8;break;case Oa:return t=tt(12,n,e,i|2),t.elementType=Oa,t.lanes=s,t;case La:return t=tt(13,n,e,i),t.elementType=La,t.lanes=s,t;case Da:return t=tt(19,n,e,i),t.elementType=Da,t.lanes=s,t;case yp:return yl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _p:o=10;break e;case vp:o=9;break e;case Zu:o=11;break e;case ec:o=14;break e;case en:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=tt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Gn(t,e,n,r){return t=tt(7,t,r,e),t.lanes=n,t}function yl(t,e,n,r){return t=tt(22,t,r,e),t.elementType=yp,t.lanes=n,t.stateNode={isHidden:!1},t}function ca(t,e,n){return t=tt(6,t,null,e),t.lanes=n,t}function da(t,e,n){return e=tt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mc(t,e,n,r,i,s,o,l,a){return t=new eE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vc(s),t}function tE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cg(t){if(!t)return kn;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ze(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(ze(n))return cm(t,n,e)}return e}function dg(t,e,n,r,i,s,o,l,a){return t=Mc(n,r,!0,t,i,s,o,l,a),t.context=cg(null),n=t.current,r=Le(),i=_n(n),s=Ut(r,i),s.callback=e??null,mn(n,s,i),t.current.lanes=i,ms(t,i,r),Ve(t,r),t}function wl(t,e,n,r){var i=e.current,s=Le(),o=_n(i);return n=cg(n),e.context===null?e.context=n:e.pendingContext=n,e=Ut(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mn(i,e,o),t!==null&&(mt(t,i,o,s),no(t,i,o)),o}function Fo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Uh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bc(t,e){Uh(t,e),(t=t.alternate)&&Uh(t,e)}function nE(){return null}var hg=typeof reportError=="function"?reportError:function(t){console.error(t)};function jc(t){this._internalRoot=t}El.prototype.render=jc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));wl(t,e,null,null)};El.prototype.unmount=jc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jn(function(){wl(null,t,null,null)}),e[Bt]=null}};function El(t){this._internalRoot=t}El.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nn.length&&e!==0&&e<nn[n].priority;n++);nn.splice(n,0,t),n===0&&$p(t)}};function Fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wh(){}function rE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Fo(o);s.call(u)}}var o=dg(e,r,t,0,null,!1,!1,"",Wh);return t._reactRootContainer=o,t[Bt]=o.current,Hi(t.nodeType===8?t.parentNode:t),Jn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Fo(a);l.call(u)}}var a=Mc(t,0,!1,null,null,!1,!1,"",Wh);return t._reactRootContainer=a,t[Bt]=a.current,Hi(t.nodeType===8?t.parentNode:t),Jn(function(){wl(e,a,n,r)}),a}function Cl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Fo(o);l.call(a)}}wl(e,o,t,i)}else o=rE(n,e,t,i,r);return Fo(o)}zp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_i(e.pendingLanes);n!==0&&(rc(e,n|1),Ve(e,ce()),!(H&6)&&(zr=ce()+500,An()))}break;case 13:Jn(function(){var r=Ht(t,1);if(r!==null){var i=Le();mt(r,t,1,i)}}),bc(t,1)}};ic=function(t){if(t.tag===13){var e=Ht(t,134217728);if(e!==null){var n=Le();mt(e,t,134217728,n)}bc(t,134217728)}};Vp=function(t){if(t.tag===13){var e=_n(t),n=Ht(t,e);if(n!==null){var r=Le();mt(n,t,e,r)}bc(t,e)}};Bp=function(){return G};Hp=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};Ha=function(t,e,n){switch(e){case"input":if(ja(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fl(r);if(!i)throw Error(k(90));Ep(r),ja(r,i)}}}break;case"textarea":Cp(t,n);break;case"select":e=n.value,e!=null&&Ir(t,!!n.multiple,e,!1)}};xp=Ac;Ap=Jn;var iE={usingClientEntryPoint:!1,Events:[_s,mr,fl,Rp,Pp,Ac]},ci={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sE={bundleType:ci.bundleType,version:ci.version,rendererPackageName:ci.rendererPackageName,rendererConfig:ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dp(t),t===null?null:t.stateNode},findFiberByHostInstance:ci.findFiberByHostInstance||nE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ks.isDisabled&&Ks.supportsFiber)try{ul=Ks.inject(sE),kt=Ks}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iE;qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fc(e))throw Error(k(200));return tE(t,e,null,n)};qe.createRoot=function(t,e){if(!Fc(t))throw Error(k(299));var n=!1,r="",i=hg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mc(t,1,!1,null,null,n,!1,r,i),t[Bt]=e.current,Hi(t.nodeType===8?t.parentNode:t),new jc(e)};qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Dp(e),t=t===null?null:t.stateNode,t};qe.flushSync=function(t){return Jn(t)};qe.hydrate=function(t,e,n){if(!Sl(e))throw Error(k(200));return Cl(null,t,e,!0,n)};qe.hydrateRoot=function(t,e,n){if(!Fc(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=hg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=dg(e,null,t,1,n??null,i,!1,s,o),t[Bt]=e.current,Hi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new El(e)};qe.render=function(t,e,n){if(!Sl(e))throw Error(k(200));return Cl(null,t,e,!1,n)};qe.unmountComponentAtNode=function(t){if(!Sl(t))throw Error(k(40));return t._reactRootContainer?(Jn(function(){Cl(null,null,t,!1,function(){t._reactRootContainer=null,t[Bt]=null})}),!0):!1};qe.unstable_batchedUpdates=Ac;qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Sl(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Cl(t,e,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function fg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fg)}catch(t){console.error(t)}}fg(),fp.exports=qe;var oE=fp.exports,zh=oE;xa.createRoot=zh.createRoot,xa.hydrateRoot=zh.hydrateRoot;var Vh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw qr(e)},qr=function(t){return new Error("Firebase Database ("+pg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Uc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,v=u&63;a||(v=64,o||(h=64)),r.push(n[d],n[c],n[h],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new aE;const h=s<<2|l>>4;if(r.push(h),u!==64){const v=l<<4&240|u>>2;if(r.push(v),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gg=function(t){const e=mg(t);return Uc.encodeByteArray(e,!0)},Uo=function(t){return gg(t).replace(/\./g,"")},Wo=function(t){try{return Uc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(t){return _g(void 0,t)}function _g(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!cE(n)||(t[n]=_g(t[n],e[n]));return t}function cE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=()=>dE().__FIREBASE_DEFAULTS__,fE=()=>{if(typeof process>"u"||typeof Vh>"u")return;const t=Vh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wo(t[1]);return e&&JSON.parse(e)},Wc=()=>{try{return hE()||fE()||pE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vg=t=>{var e,n;return(n=(e=Wc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mE=t=>{const e=vg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yg=()=>{var t;return(t=Wc())===null||t===void 0?void 0:t.config},wg=t=>{var e;return(e=Wc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Uo(JSON.stringify(n)),Uo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function _E(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Eg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yE(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wE(){return pg.NODE_ADMIN===!0}function EE(){try{return typeof indexedDB=="object"}catch{return!1}}function SE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CE,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ys.prototype.create)}}class ys{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?IE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new On(i,l,r)}}function IE(t,e){return t.replace(kE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const kE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){return JSON.parse(t)}function fe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Zi(Wo(s[0])||""),n=Zi(Wo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},TE=function(t){const e=Sg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},NE=function(t){const e=Sg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Cu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Vo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Bh(s)&&Bh(o)){if(!Vo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function wi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function PE(t,e){const n=new xE(t,e);return n.subscribe.bind(n)}class xE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ha),i.error===void 0&&(i.error=ha),i.complete===void 0&&(i.complete=ha);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ha(){}function Vc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t){return t&&t._delegate?t._delegate:t}class Xn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Il;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ME(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DE(t){return t===Fn?void 0:t}function ME(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new LE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const jE={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},FE=Q.INFO,UE={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},WE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=UE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bc{constructor(e){this.name=e,this._logLevel=FE,this._logHandler=WE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const zE=(t,e)=>e.some(n=>t instanceof n);let Hh,$h;function VE(){return Hh||(Hh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BE(){return $h||($h=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cg=new WeakMap,Iu=new WeakMap,Ig=new WeakMap,fa=new WeakMap,Hc=new WeakMap;function HE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cg.set(n,t)}).catch(()=>{}),Hc.set(e,t),e}function $E(t){if(Iu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Iu.set(t,e)}let ku={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Iu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ig.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GE(t){ku=t(ku)}function KE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pa(this),e,...n);return Ig.set(r,e.sort?e.sort():[e]),yn(r)}:BE().includes(t)?function(...e){return t.apply(pa(this),e),yn(Cg.get(this))}:function(...e){return yn(t.apply(pa(this),e))}}function QE(t){return typeof t=="function"?KE(t):(t instanceof IDBTransaction&&$E(t),zE(t,VE())?new Proxy(t,ku):t)}function yn(t){if(t instanceof IDBRequest)return HE(t);if(fa.has(t))return fa.get(t);const e=QE(t);return e!==t&&(fa.set(t,e),Hc.set(e,t)),e}const pa=t=>Hc.get(t);function YE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=yn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(yn(o.result),a.oldVersion,a.newVersion,yn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const qE=["get","getKey","getAll","getAllKeys","count"],JE=["put","add","delete","clear"],ma=new Map;function Gh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ma.get(e))return ma.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=JE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ma.set(e,s),s}GE(t=>({...t,get:(e,n,r)=>Gh(e,n)||t.get(e,n,r),has:(e,n)=>!!Gh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tu="@firebase/app",Kh="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new Bc("@firebase/app"),eS="@firebase/app-compat",tS="@firebase/analytics-compat",nS="@firebase/analytics",rS="@firebase/app-check-compat",iS="@firebase/app-check",sS="@firebase/auth",oS="@firebase/auth-compat",lS="@firebase/database",aS="@firebase/data-connect",uS="@firebase/database-compat",cS="@firebase/functions",dS="@firebase/functions-compat",hS="@firebase/installations",fS="@firebase/installations-compat",pS="@firebase/messaging",mS="@firebase/messaging-compat",gS="@firebase/performance",_S="@firebase/performance-compat",vS="@firebase/remote-config",yS="@firebase/remote-config-compat",wS="@firebase/storage",ES="@firebase/storage-compat",SS="@firebase/firestore",CS="@firebase/vertexai-preview",IS="@firebase/firestore-compat",kS="firebase",TS="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="[DEFAULT]",NS={[Tu]:"fire-core",[eS]:"fire-core-compat",[nS]:"fire-analytics",[tS]:"fire-analytics-compat",[iS]:"fire-app-check",[rS]:"fire-app-check-compat",[sS]:"fire-auth",[oS]:"fire-auth-compat",[lS]:"fire-rtdb",[aS]:"fire-data-connect",[uS]:"fire-rtdb-compat",[cS]:"fire-fn",[dS]:"fire-fn-compat",[hS]:"fire-iid",[fS]:"fire-iid-compat",[pS]:"fire-fcm",[mS]:"fire-fcm-compat",[gS]:"fire-perf",[_S]:"fire-perf-compat",[vS]:"fire-rc",[yS]:"fire-rc-compat",[wS]:"fire-gcs",[ES]:"fire-gcs-compat",[SS]:"fire-fst",[IS]:"fire-fst-compat",[CS]:"fire-vertex","fire-js":"fire-js",[kS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=new Map,RS=new Map,Ru=new Map;function Qh(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Br(t){const e=t.name;if(Ru.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;Ru.set(e,t);for(const n of Bo.values())Qh(n,t);for(const n of RS.values())Qh(n,t);return!0}function $c(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ct(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wn=new ys("app","Firebase",PS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=TS;function kg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw wn.create("bad-app-name",{appName:String(i)});if(n||(n=yg()),!n)throw wn.create("no-options");const s=Bo.get(i);if(s){if(Vo(n,s.options)&&Vo(r,s.config))return s;throw wn.create("duplicate-app",{appName:i})}const o=new bE(i);for(const a of Ru.values())o.addComponent(a);const l=new xS(n,r,o);return Bo.set(i,l),l}function Tg(t=Nu){const e=Bo.get(t);if(!e&&t===Nu&&yg())return kg();if(!e)throw wn.create("no-app",{appName:t});return e}function En(t,e,n){var r;let i=(r=NS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(l.join(" "));return}Br(new Xn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="firebase-heartbeat-database",OS=1,es="firebase-heartbeat-store";let ga=null;function Ng(){return ga||(ga=YE(AS,OS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(es)}catch(n){console.warn(n)}}}}).catch(t=>{throw wn.create("idb-open",{originalErrorMessage:t.message})})),ga}async function LS(t){try{const n=(await Ng()).transaction(es),r=await n.objectStore(es).get(Rg(t));return await n.done,r}catch(e){if(e instanceof On)Gt.warn(e.message);else{const n=wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(n.message)}}}async function Yh(t,e){try{const r=(await Ng()).transaction(es,"readwrite");await r.objectStore(es).put(e,Rg(t)),await r.done}catch(n){if(n instanceof On)Gt.warn(n.message);else{const r=wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gt.warn(r.message)}}}function Rg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=1024,MS=30*24*60*60*1e3;class bS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=MS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Gt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qh(),{heartbeatsToSend:r,unsentEntries:i}=jS(this._heartbeatsCache.heartbeats),s=Uo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Gt.warn(n),""}}}function qh(){return new Date().toISOString().substring(0,10)}function jS(t,e=DS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return EE()?SE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await LS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jh(t){return Uo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(t){Br(new Xn("platform-logger",e=>new XE(e),"PRIVATE")),Br(new Xn("heartbeat",e=>new bS(e),"PRIVATE")),En(Tu,Kh,t),En(Tu,Kh,"esm2017"),En("fire-js","")}US("");var Xh={};const Zh="@firebase/database",ef="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pg="";function WS(t){Pg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Zi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return qt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zS(e)}}catch{}return new VS},Bn=xg("localStorage"),BS=xg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Bc("@firebase/database"),HS=function(){let t=1;return function(){return t++}}(),Ag=function(t){const e=OE(t),n=new RE;n.update(e);const r=n.digest();return Uc.encodeByteArray(r)},ws=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ws.apply(null,r):typeof r=="object"?e+=fe(r):e+=r,e+=" "}return e};let xi=null,tf=!0;const $S=function(t,e){R(!0,"Can't turn on custom loggers persistently."),xr.logLevel=Q.VERBOSE,xi=xr.log.bind(xr)},Re=function(...t){if(tf===!0&&(tf=!1,xi===null&&BS.get("logging_enabled")===!0&&$S()),xi){const e=ws.apply(null,t);xi(e)}},Es=function(t){return function(...e){Re(t,...e)}},Pu=function(...t){const e="FIREBASE INTERNAL ERROR: "+ws(...t);xr.error(e)},Kt=function(...t){const e=`FIREBASE FATAL ERROR: ${ws(...t)}`;throw xr.error(e),new Error(e)},Be=function(...t){const e="FIREBASE WARNING: "+ws(...t);xr.warn(e)},GS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Og=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},KS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hr="[MIN_NAME]",Zn="[MAX_NAME]",Zr=function(t,e){if(t===e)return 0;if(t===Hr||e===Zn)return-1;if(e===Hr||t===Zn)return 1;{const n=nf(t),r=nf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},QS=function(t,e){return t===e?0:t<e?-1:1},di=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+fe(e))},Gc=function(t){if(typeof t!="object"||t===null)return fe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=fe(e[r]),n+=":",n+=Gc(t[e[r]]);return n+="}",n},Lg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function He(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Dg=function(t){R(!Og(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},YS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},qS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function JS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const XS=new RegExp("^-?(0*)\\d{1,10}$"),ZS=-2147483648,e0=2147483647,nf=function(t){if(XS.test(t)){const e=Number(t);if(e>=ZS&&e<=e0)return e}return null},ei=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Be("Exception was thrown by user callback.",n),e},Math.floor(0))}},t0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ai=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Re("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Be(e)}}class uo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}uo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="5",Mg="v",bg="s",jg="r",Fg="f",Ug=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Wg="ls",zg="p",xu="ac",Vg="websocket",Bg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function i0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function $g(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===Vg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Bg)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);i0(t)&&(n.ns=t.namespace);const i=[];return He(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(){this.counters_={}}incrementCounter(e,n=1){qt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return uE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a={},va={};function Qc(t){const e=t.toString();return _a[e]||(_a[e]=new s0),_a[e]}function o0(t,e){const n=t.toString();return va[n]||(va[n]=e()),va[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ei(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="start",a0="close",u0="pLPCommand",c0="pRTLPCB",Gg="id",Kg="pw",Qg="ser",d0="cb",h0="seg",f0="ts",p0="d",m0="dframe",Yg=1870,qg=30,g0=Yg-qg,_0=25e3,v0=3e4;class Sr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Es(e),this.stats_=Qc(n),this.urlFn=a=>(this.appCheckToken&&(a[xu]=this.appCheckToken),$g(n,Bg,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new l0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(v0)),KS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yc((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===rf)this.id=l,this.password=a;else if(o===a0)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[rf]="t",r[Qg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[d0]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Mg]=Kc,this.transportSessionId&&(r[bg]=this.transportSessionId),this.lastSessionId&&(r[Wg]=this.lastSessionId),this.applicationId&&(r[zg]=this.applicationId),this.appCheckToken&&(r[xu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ug.test(location.hostname)&&(r[jg]=Fg);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Sr.forceAllow_=!0}static forceDisallow(){Sr.forceDisallow_=!0}static isAvailable(){return Sr.forceAllow_?!0:!Sr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!YS()&&!qS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=gg(n),i=Lg(r,g0);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[m0]="t",r[Gg]=e,r[Kg]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Yc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=HS(),window[u0+this.uniqueCallbackIdentifier]=e,window[c0+this.uniqueCallbackIdentifier]=n,this.myIFrame=Yc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Re("frame writing exception"),l.stack&&Re(l.stack),Re(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Re("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Gg]=this.myID,e[Kg]=this.myPW,e[Qg]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qg+r.length<=Yg;){const o=this.pendingSegs.shift();r=r+"&"+h0+i+"="+o.seg+"&"+f0+i+"="+o.ts+"&"+p0+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(_0)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Re("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=16384,w0=45e3;let Ho=null;typeof MozWebSocket<"u"?Ho=MozWebSocket:typeof WebSocket<"u"&&(Ho=WebSocket);class dt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Es(this.connId),this.stats_=Qc(n),this.connURL=dt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Mg]=Kc,typeof location<"u"&&location.hostname&&Ug.test(location.hostname)&&(o[jg]=Fg),n&&(o[bg]=n),r&&(o[Wg]=r),i&&(o[xu]=i),s&&(o[zg]=s),$g(e,Vg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bn.set("previous_websocket_failure",!0);try{let r;wE(),this.mySock=new Ho(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ho!==null&&!dt.forceDisallow_}static previouslyFailed(){return Bn.isInMemoryStorage||Bn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Zi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Lg(n,y0);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(w0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dt.responsesRequiredToBeHealthy=2;dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Sr,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dt&&dt.isAvailable();let r=n&&!dt.previouslyFailed();if(e.webSocketOnly&&(n||Be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[dt];else{const i=this.transports_=[];for(const s of ts.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ts.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ts.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=6e4,S0=5e3,C0=10*1024,I0=100*1024,ya="t",sf="d",k0="s",of="r",T0="e",lf="o",af="a",uf="n",cf="p",N0="h";class R0{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Es("c:"+this.id+":"),this.transportManager_=new ts(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ai(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>I0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>C0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ya in e){const n=e[ya];n===af?this.upgradeIfSecondaryHealthy_():n===of?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===lf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=di("t",e),r=di("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:cf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:af,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:uf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=di("t",e),r=di("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=di(ya,e);if(sf in e){const r=e[sf];if(n===N0){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===uf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===k0?this.onConnectionShutdown_(r):n===of?this.onReset_(r):n===T0?Pu("Server Error: "+r):n===lf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Pu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Kc!==r&&Be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ai(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(E0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ai(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(S0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:cf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends Xg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!zc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $o}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=32,hf=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new q("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Tn(t){return t.pieces_.length-t.pieceNum_}function X(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function Zg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function P0(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function e_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function t_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function pe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new q(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function Oe(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return Oe(X(t),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function qc(t,e){if(Tn(t)!==Tn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ht(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Tn(t)>Tn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class x0{constructor(e,n){this.errorPrefix_=n,this.parts_=e_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=kl(this.parts_[r]);n_(this)}}function A0(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=kl(e),n_(t)}function O0(t){const e=t.parts_.pop();t.byteLength_-=kl(e),t.parts_.length>0&&(t.byteLength_-=1)}function n_(t){if(t.byteLength_>hf)throw new Error(t.errorPrefix_+"has a key path longer than "+hf+" bytes ("+t.byteLength_+").");if(t.parts_.length>df)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+df+") or object contains a cycle "+Un(t))}function Un(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc extends Xg{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Jc}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=1e3,L0=60*5*1e3,ff=30*1e3,D0=1.3,M0=3e4,b0="server_kill",pf=3;class Wt extends Jg{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Wt.nextPersistentConnectionId_++,this.log_=Es("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hi,this.maxReconnectDelay_=L0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Jc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$o.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(fe(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Il,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Wt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&qt(e,"w")){const r=Vr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||NE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ff)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=TE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+fe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Pu("Unrecognized action received from server: "+fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=hi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>M0&&(this.reconnectDelay_=hi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*D0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Wt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){R(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Re("getToken() completed but was canceled"):(Re("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new R0(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{Be(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(b0)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Be(c),a())}}}interrupt(e){Re("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Re("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Cu(this.interruptReasons_)&&(this.reconnectDelay_=hi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Gc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Re("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=pf&&(this.reconnectDelay_=ff,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Re("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=pf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Pg.replace(/\./g,"-")]=1,zc()?e["framework.cordova"]=1:Eg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$o.getInstance().currentlyOnline();return Cu(this.interruptReasons_)&&e}}Wt.nextPersistentConnectionId_=0;Wt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new U(Hr,e),i=new U(Hr,n);return this.compare(r,i)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs;class r_ extends Tl{static get __EMPTY_NODE(){return Qs}static set __EMPTY_NODE(e){Qs=e}compare(e,n){return Zr(e.name,n.name)}isDefinedOn(e){throw qr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(Zn,Qs)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,Qs)}toString(){return".key"}}const Ar=new r_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ve.RED,this.left=i??Ue.EMPTY_NODE,this.right=s??Ue.EMPTY_NODE}copy(e,n,r,i,s){return new ve(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ue.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class j0{copy(e,n,r,i,s){return this}insert(e,n,r){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ys(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ys(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ys(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ys(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new j0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t,e){return Zr(t.name,e.name)}function Xc(t,e){return Zr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Au;function U0(t){Au=t}const i_=function(t){return typeof t=="number"?"number:"+Dg(t):"string:"+t},s_=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&qt(e,".sv"),"Priority must be a string or number.")}else R(t===Au||t.isEmpty(),"priority of unexpected type.");R(t===Au||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mf;class ge{constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),s_(this.priorityNode_)}static set __childrenNodeConstructor(e){mf=e}static get __childrenNodeConstructor(){return mf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:F(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||Tn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+i_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Dg(this.value_):e+=this.value_,this.lazyHash_=Ag(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),s=ge.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o_,l_;function W0(t){o_=t}function z0(t){l_=t}class V0 extends Tl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Zr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(Zn,new ge("[PRIORITY-POST]",l_))}makePost(e,n){const r=o_(e);return new U(n,new ge("[PRIORITY-POST]",r))}toString(){return".priority"}}const ue=new V0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=Math.log(2);class H0{constructor(e){const n=s=>parseInt(Math.log(s)/B0,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Go=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new ve(h,c.node,ve.BLACK,null,null);{const v=parseInt(d/2,10)+a,_=i(a,v),y=i(v+1,u);return c=t[v],h=n?n(c):c,new ve(h,c.node,ve.BLACK,_,y)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,y){const T=c-_,g=c;c-=_;const p=i(T+1,g),m=t[T],w=n?n(m):m;v(new ve(w,m.node,y,null,p))},v=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),T=Math.pow(2,a.count-(_+1));y?h(T,ve.BLACK):(h(T,ve.BLACK),h(T,ve.RED))}return d},o=new H0(t.length),l=s(o);return new Ue(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa;const ur={};class Mt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(ur&&ue,"ChildrenNode.ts has not been loaded"),wa=wa||new Mt({".priority":ur},{".priority":ue}),wa}get(e){const n=Vr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return qt(this.indexSet_,e.toString())}addIndex(e,n){R(e!==Ar,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(U.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Go(r,e.getCompare()):l=ur;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Mt(d,u)}addToIndexes(e,n){const r=zo(this.indexes_,(i,s)=>{const o=Vr(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===ur)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(U.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Go(l,o.getCompare())}else return ur;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new U(e.name,l))),a.insert(e,e.node)}});return new Mt(r,this.indexSet_)}removeFromIndexes(e,n){const r=zo(this.indexes_,i=>{if(i===ur)return i;{const s=n.get(e.name);return s?i.remove(new U(e.name,s)):i}});return new Mt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi;class b{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&s_(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fi||(fi=new b(new Ue(Xc),null,Mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fi}updatePriority(e){return this.children_.isEmpty()?this:new b(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fi:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new U(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?fi:this.priorityNode_;return new b(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{R(F(e)!==".priority"||Tn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(X(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ue,(o,l)=>{n[o]=l.val(e),r++,s&&b.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+i_(this.getPriority().val())+":"),this.forEachChild(ue,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ag(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new U(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ss?-1:0}withIndex(e){if(e===Ar||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new b(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ar||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ue),i=n.getIterator(ue);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ar?null:this.indexMap_.get(e.toString())}}b.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $0 extends b{constructor(){super(new Ue(Xc),b.EMPTY_NODE,Mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return b.EMPTY_NODE}isEmpty(){return!1}}const Ss=new $0;Object.defineProperties(U,{MIN:{value:new U(Hr,b.EMPTY_NODE)},MAX:{value:new U(Zn,Ss)}});r_.__EMPTY_NODE=b.EMPTY_NODE;ge.__childrenNodeConstructor=b;U0(Ss);z0(Ss);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=!0;function ye(t,e=null){if(t===null)return b.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,ye(e))}if(!(t instanceof Array)&&G0){const n=[];let r=!1;if(He(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ye(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new U(o,a)))}}),n.length===0)return b.EMPTY_NODE;const s=Go(n,F0,o=>o.name,Xc);if(r){const o=Go(n,ue.getCompare());return new b(s,ye(e),new Mt({".priority":o},{".priority":ue}))}else return new b(s,ye(e),Mt.Default)}else{let n=b.EMPTY_NODE;return He(t,(r,i)=>{if(qt(t,r)&&r.substring(0,1)!=="."){const s=ye(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ye(e))}}W0(ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0 extends Tl{constructor(e){super(),this.indexPath_=e,R(!W(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Zr(e.name,n.name):s}makePost(e,n){const r=ye(e),i=b.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(n,i)}maxPost(){const e=b.EMPTY_NODE.updateChild(this.indexPath_,Ss);return new U(Zn,e)}toString(){return e_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0 extends Tl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Zr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const r=ye(e);return new U(n,r)}toString(){return".value"}}const Y0=new Q0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(t){return{type:"value",snapshotNode:t}}function $r(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ns(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function rs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function q0(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ns(n,l)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange($r(n,r)):o.trackChildChange(rs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ue,(i,s)=>{n.hasChild(i)||r.trackChildChange(ns(i,s))}),n.isLeafNode()||n.forEachChild(ue,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(rs(i,s,o))}else r.trackChildChange($r(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?b.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.indexedFilter_=new Zc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=is.getStartPost_(e),this.endPost_=is.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new U(n,r))||(r=b.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=b.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(b.EMPTY_NODE);const s=this;return n.forEachChild(ue,(o,l)=>{s.matches(new U(o,l))||(i=i.updateImmediateChild(o,b.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new is(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new U(n,r))||(r=b.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=b.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=b.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(b.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,b.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,v)=>c(v,h)}else o=this.index_.getCompare();const l=e;R(l.numChildren()===this.limit_,"");const a=new U(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const v=h==null?1:o(h,a);if(d&&!r.isEmpty()&&v>=0)return s!=null&&s.trackChildChange(rs(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ns(n,c));const y=l.updateImmediateChild(n,b.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange($r(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(ns(u.name,u.node)),s.trackChildChange($r(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,b.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hr}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new ed;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function X0(t){return t.loadsAllData()?new Zc(t.getIndex()):t.hasLimit()?new J0(t):new is(t)}function gf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ue?n="$priority":t.index_===Y0?n="$value":t.index_===Ar?n="$key":(R(t.index_ instanceof K0,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=fe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=fe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+fe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=fe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function _f(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ue&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends Jg{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Es("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ko.getListenId_(e,r),l={};this.listens_[o]=l;const a=gf(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Vr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Ko.getListenId_(e,n);delete this.listens_[r]}get(e){const n=gf(e._queryParams),r=e._path.toString(),i=new Il;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Jr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Zi(l.responseText)}catch{Be("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Be("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(){this.rootNode_=b.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(){return{value:null,children:new Map}}function u_(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,Qo());const i=t.children.get(r);e=X(e),u_(i,e,n)}}function Ou(t,e,n){t.value!==null?n(e,t.value):eC(t,(r,i)=>{const s=new q(e.toString()+"/"+r);Ou(i,s,n)})}function eC(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&He(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=10*1e3,nC=30*1e3,rC=5*60*1e3;class iC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new tC(e);const r=vf+(nC-vf)*Math.random();Ai(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;He(e,(i,s)=>{s>0&&qt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ai(this.reportStats_.bind(this),Math.floor(Math.random()*2*rC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ft||(ft={}));function c_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function td(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ft.ACK_USER_WRITE,this.source=c_()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new Yo($(),n,this.revert)}}else return R(F(this.path)===e,"operationForChild called for unrelated child."),new Yo(X(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){this.source=e,this.path=n,this.type=ft.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new ss(this.source,$()):new ss(this.source,X(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ft.OVERWRITE}operationForChild(e){return W(this.path)?new er(this.source,$(),this.snap.getImmediateChild(e)):new er(this.source,X(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ft.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new er(this.source,$(),n.value):new os(this.source,$(),n)}else return R(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new os(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function oC(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(q0(o.childName,o.snapshotNode))}),pi(t,i,"child_removed",e,r,n),pi(t,i,"child_added",e,r,n),pi(t,i,"child_moved",s,r,n),pi(t,i,"child_changed",e,r,n),pi(t,i,"value",e,r,n),i}function pi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>aC(t,l,a)),o.forEach(l=>{const a=lC(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function lC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function aC(t,e,n){if(e.childName==null||n.childName==null)throw qr("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t,e){return{eventCache:t,serverCache:e}}function Oi(t,e,n,r){return Nl(new Nn(e,n,r),t.serverCache)}function d_(t,e,n,r){return Nl(t.eventCache,new Nn(e,n,r))}function qo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function tr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea;const uC=()=>(Ea||(Ea=new Ue(QS)),Ea);class ne{constructor(e,n=uC()){this.value=e,this.children=n}static fromObject(e){let n=new ne(null);return He(e,(r,i)=>{n=n.set(new q(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(W(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(X(e),n);return s!=null?{path:pe(new q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(X(e)):new ne(null)}}set(e,n){if(W(e))return new ne(n,this.children);{const r=F(e),s=(this.children.get(r)||new ne(null)).set(X(e),n),o=this.children.insert(r,s);return new ne(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new ne(null):new ne(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(X(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ne(null):new ne(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(X(e)):null}}setTree(e,n){if(W(e))return n;{const r=F(e),s=(this.children.get(r)||new ne(null)).setTree(X(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ne(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(pe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(W(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(X(e),pe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,r){if(W(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(X(e),pe(n,i),r):new ne(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(pe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.writeTree_=e}static empty(){return new gt(new ne(null))}}function Li(t,e,n){if(W(e))return new gt(new ne(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Oe(i,e);return s=s.updateChild(o,n),new gt(t.writeTree_.set(i,s))}else{const i=new ne(n),s=t.writeTree_.setTree(e,i);return new gt(s)}}}function yf(t,e,n){let r=t;return He(n,(i,s)=>{r=Li(r,pe(e,i),s)}),r}function wf(t,e){if(W(e))return gt.empty();{const n=t.writeTree_.setTree(e,new ne(null));return new gt(n)}}function Lu(t,e){return or(t,e)!=null}function or(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Oe(n.path,e)):null}function Ef(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ue,(r,i)=>{e.push(new U(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new U(r,i.value))}),e}function Sn(t,e){if(W(e))return t;{const n=or(t,e);return n!=null?new gt(new ne(n)):new gt(t.writeTree_.subtree(e))}}function Du(t){return t.writeTree_.isEmpty()}function Gr(t,e){return h_($(),t.writeTree_,e)}function h_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=h_(pe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(pe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t,e){return g_(e,t)}function cC(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Li(t.visibleWrites,e,n)),t.lastWriteId=r}function dC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function hC(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&fC(l,r.path)?i=!1:ht(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return pC(t),!0;if(r.snap)t.visibleWrites=wf(t.visibleWrites,r.path);else{const l=r.children;He(l,a=>{t.visibleWrites=wf(t.visibleWrites,pe(r.path,a))})}return!0}else return!1}function fC(t,e){if(t.snap)return ht(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ht(pe(t.path,n),e))return!0;return!1}function pC(t){t.visibleWrites=f_(t.allWrites,mC,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function mC(t){return t.visible}function f_(t,e,n){let r=gt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ht(n,o)?(l=Oe(n,o),r=Li(r,l,s.snap)):ht(o,n)&&(l=Oe(o,n),r=Li(r,$(),s.snap.getChild(l)));else if(s.children){if(ht(n,o))l=Oe(n,o),r=yf(r,l,s.children);else if(ht(o,n))if(l=Oe(o,n),W(l))r=yf(r,$(),s.children);else{const a=Vr(s.children,F(l));if(a){const u=a.getChild(X(l));r=Li(r,$(),u)}}}else throw qr("WriteRecord should have .snap or .children")}}return r}function p_(t,e,n,r,i){if(!r&&!i){const s=or(t.visibleWrites,e);if(s!=null)return s;{const o=Sn(t.visibleWrites,e);if(Du(o))return n;if(n==null&&!Lu(o,$()))return null;{const l=n||b.EMPTY_NODE;return Gr(o,l)}}}else{const s=Sn(t.visibleWrites,e);if(!i&&Du(s))return n;if(!i&&n==null&&!Lu(s,$()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ht(u.path,e)||ht(e,u.path))},l=f_(t.allWrites,o,e),a=n||b.EMPTY_NODE;return Gr(l,a)}}}function gC(t,e,n){let r=b.EMPTY_NODE;const i=or(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ue,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Sn(t.visibleWrites,e);return n.forEachChild(ue,(o,l)=>{const a=Gr(Sn(s,new q(o)),l);r=r.updateImmediateChild(o,a)}),Ef(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Sn(t.visibleWrites,e);return Ef(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function _C(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=pe(e,n);if(Lu(t.visibleWrites,s))return null;{const o=Sn(t.visibleWrites,s);return Du(o)?i.getChild(n):Gr(o,i.getChild(n))}}function vC(t,e,n,r){const i=pe(e,n),s=or(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Sn(t.visibleWrites,i);return Gr(o,r.getNode().getImmediateChild(n))}else return null}function yC(t,e){return or(t.visibleWrites,e)}function wC(t,e,n,r,i,s,o){let l;const a=Sn(t.visibleWrites,e),u=or(a,$());if(u!=null)l=u;else if(n!=null)l=Gr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let v=h.getNext();for(;v&&d.length<i;)c(v,r)!==0&&d.push(v),v=h.getNext();return d}else return[]}function EC(){return{visibleWrites:gt.empty(),allWrites:[],lastWriteId:-1}}function Jo(t,e,n,r){return p_(t.writeTree,t.treePath,e,n,r)}function rd(t,e){return gC(t.writeTree,t.treePath,e)}function Sf(t,e,n,r){return _C(t.writeTree,t.treePath,e,n,r)}function Xo(t,e){return yC(t.writeTree,pe(t.treePath,e))}function SC(t,e,n,r,i,s){return wC(t.writeTree,t.treePath,e,n,r,i,s)}function id(t,e,n){return vC(t.writeTree,t.treePath,e,n)}function m_(t,e){return g_(pe(t.treePath,e),t.writeTree)}function g_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,rs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ns(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,$r(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,rs(r,e.snapshotNode,i.oldSnap));else throw qr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const __=new IC;class sd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Nn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return id(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tr(this.viewCache_),s=SC(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(t){return{filter:t}}function TC(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function NC(t,e,n,r,i){const s=new CC;let o,l;if(n.type===ft.OVERWRITE){const u=n;u.source.fromUser?o=Mu(t,e,u.path,u.snap,r,i,s):(R(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!W(u.path),o=Zo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ft.MERGE){const u=n;u.source.fromUser?o=PC(t,e,u.path,u.children,r,i,s):(R(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=bu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ft.ACK_USER_WRITE){const u=n;u.revert?o=OC(t,e,u.path,r,i,s):o=xC(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ft.LISTEN_COMPLETE)o=AC(t,e,n.path,r,s);else throw qr("Unknown operation type: "+n.type);const a=s.getChanges();return RC(e,o,a),{viewCache:o,changes:a}}function RC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=qo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(a_(qo(e)))}}function v_(t,e,n,r,i,s){const o=e.eventCache;if(Xo(r,n)!=null)return e;{let l,a;if(W(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=tr(e),d=u instanceof b?u:b.EMPTY_NODE,c=rd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Jo(r,tr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=F(n);if(u===".priority"){R(Tn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Sf(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=X(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Sf(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=id(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Oi(e,l,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Zo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(W(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const v=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),v,null)}else{const v=F(n);if(!a.isCompleteForPath(n)&&Tn(n)>1)return e;const _=X(n),T=a.getNode().getImmediateChild(v).updateChild(_,r);v===".priority"?u=d.updatePriority(a.getNode(),T):u=d.updateChild(a.getNode(),v,T,_,__,null)}const c=d_(e,u,a.isFullyInitialized()||W(n),d.filtersNodes()),h=new sd(i,c,s);return v_(t,c,n,i,h,l)}function Mu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new sd(i,e,s);if(W(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Oi(e,u,!0,t.filter.filtersNodes());else{const c=F(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Oi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=X(n),v=l.getNode().getImmediateChild(c);let _;if(W(h))_=r;else{const y=d.getCompleteChild(c);y!=null?Zg(h)===".priority"&&y.getChild(t_(h)).isEmpty()?_=y:_=y.updateChild(h,r):_=b.EMPTY_NODE}if(v.equals(_))a=e;else{const y=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=Oi(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Cf(t,e){return t.eventCache.isCompleteForChild(e)}function PC(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=pe(n,a);Cf(e,F(d))&&(l=Mu(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=pe(n,a);Cf(e,F(d))||(l=Mu(t,l,d,u,i,s,o))}),l}function If(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function bu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;W(n)?u=r:u=new ne(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const v=e.serverCache.getNode().getImmediateChild(c),_=If(t,v,h);a=Zo(t,a,new q(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const v=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!v){const _=e.serverCache.getNode().getImmediateChild(c),y=If(t,_,h);a=Zo(t,a,new q(c),y,i,s,o,l)}}),a}function xC(t,e,n,r,i,s,o){if(Xo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(W(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Zo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(W(n)){let u=new ne(null);return a.getNode().forEachChild(Ar,(d,c)=>{u=u.set(new q(d),c)}),bu(t,e,n,u,i,s,l,o)}else return e}else{let u=new ne(null);return r.foreach((d,c)=>{const h=pe(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),bu(t,e,n,u,i,s,l,o)}}function AC(t,e,n,r,i){const s=e.serverCache,o=d_(e,s.getNode(),s.isFullyInitialized()||W(n),s.isFiltered());return v_(t,o,n,r,__,i)}function OC(t,e,n,r,i,s){let o;if(Xo(r,n)!=null)return e;{const l=new sd(r,e,i),a=e.eventCache.getNode();let u;if(W(n)||F(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Jo(r,tr(e));else{const c=e.serverCache.getNode();R(c instanceof b,"serverChildren would be complete if leaf node"),d=rd(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=F(n);let c=id(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,X(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,b.EMPTY_NODE,X(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Jo(r,tr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Xo(r,$())!=null,Oi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Zc(r.getIndex()),s=X0(r);this.processor_=kC(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(b.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(b.EMPTY_NODE,l.getNode(),null),d=new Nn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Nn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Nl(c,d),this.eventGenerator_=new sC(this.query_)}get query(){return this.query_}}function DC(t){return t.viewCache_.serverCache.getNode()}function MC(t){return qo(t.viewCache_)}function bC(t,e){const n=tr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function kf(t){return t.eventRegistrations_.length===0}function jC(t,e){t.eventRegistrations_.push(e)}function Tf(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Nf(t,e,n,r){e.type===ft.MERGE&&e.source.queryId!==null&&(R(tr(t.viewCache_),"We should always have a full cache before handling merges"),R(qo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=NC(t.processor_,i,e,n,r);return TC(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,y_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function FC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ue,(s,o)=>{r.push($r(s,o))}),n.isFullyInitialized()&&r.push(a_(n.getNode())),y_(t,r,n.getNode(),e)}function y_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return oC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el;class w_{constructor(){this.views=new Map}}function UC(t){R(!el,"__referenceConstructor has already been defined"),el=t}function WC(){return R(el,"Reference.ts has not been loaded"),el}function zC(t){return t.views.size===0}function od(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),Nf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Nf(o,e,n,r));return s}}function E_(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Jo(n,i?r:null),a=!1;l?a=!0:r instanceof b?(l=rd(n,r),a=!1):(l=b.EMPTY_NODE,a=!1);const u=Nl(new Nn(l,a,!1),new Nn(r,i,!1));return new LC(e,u)}return o}function VC(t,e,n,r,i,s){const o=E_(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),jC(o,n),FC(o,n)}function BC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Rn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Tf(u,n,r)),kf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Tf(a,n,r)),kf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Rn(t)&&s.push(new(WC())(e._repo,e._path)),{removed:s,events:o}}function S_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Cn(t,e){let n=null;for(const r of t.views.values())n=n||bC(r,e);return n}function C_(t,e){if(e._queryParams.loadsAllData())return Pl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function I_(t,e){return C_(t,e)!=null}function Rn(t){return Pl(t)!=null}function Pl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl;function HC(t){R(!tl,"__referenceConstructor has already been defined"),tl=t}function $C(){return R(tl,"Reference.ts has not been loaded"),tl}let GC=1;class Rf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ne(null),this.pendingWriteTree_=EC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function k_(t,e,n,r,i){return cC(t.pendingWriteTree_,e,n,r,i),i?Is(t,new er(c_(),e,n)):[]}function Hn(t,e,n=!1){const r=dC(t.pendingWriteTree_,e);if(hC(t.pendingWriteTree_,e)){let s=new ne(null);return r.snap!=null?s=s.set($(),!0):He(r.children,o=>{s=s.set(new q(o),!0)}),Is(t,new Yo(r.path,s,n))}else return[]}function Cs(t,e,n){return Is(t,new er(td(),e,n))}function KC(t,e,n){const r=ne.fromObject(n);return Is(t,new os(td(),e,r))}function QC(t,e){return Is(t,new ss(td(),e))}function YC(t,e,n){const r=ad(t,n);if(r){const i=ud(r),s=i.path,o=i.queryId,l=Oe(s,e),a=new ss(nd(o),l);return cd(t,s,a)}else return[]}function nl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||I_(o,e))){const a=BC(o,e,n,r);zC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,v)=>Rn(v));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const v=XC(h);for(let _=0;_<v.length;++_){const y=v[_],T=y.query,g=P_(t,y);t.listenProvider_.startListening(Di(T),ls(t,T),g.hashFn,g.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Di(e),null):u.forEach(h=>{const v=t.queryToTagMap.get(xl(h));t.listenProvider_.stopListening(Di(h),v)}))}ZC(t,u)}return l}function T_(t,e,n,r){const i=ad(t,r);if(i!=null){const s=ud(i),o=s.path,l=s.queryId,a=Oe(o,e),u=new er(nd(l),a,n);return cd(t,o,u)}else return[]}function qC(t,e,n,r){const i=ad(t,r);if(i){const s=ud(i),o=s.path,l=s.queryId,a=Oe(o,e),u=ne.fromObject(n),d=new os(nd(l),a,u);return cd(t,o,d)}else return[]}function ju(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,v)=>{const _=Oe(h,i);s=s||Cn(v,_),o=o||Rn(v)});let l=t.syncPointTree_.get(i);l?(o=o||Rn(l),s=s||Cn(l,$())):(l=new w_,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=b.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,_)=>{const y=Cn(_,$());y&&(s=s.updateImmediateChild(v,y))}));const u=I_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=xl(e);R(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const v=eI();t.queryToTagMap.set(h,v),t.tagToQueryMap.set(v,h)}const d=Rl(t.pendingWriteTree_,i);let c=VC(l,e,n,d,s,a);if(!u&&!o&&!r){const h=C_(l,e);c=c.concat(tI(t,e,h))}return c}function ld(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Oe(o,e),u=Cn(l,a);if(u)return u});return p_(i,e,s,n,!0)}function JC(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Oe(u,n);r=r||Cn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||Cn(i,$()):(i=new w_,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Nn(r,!0,!1):null,l=Rl(t.pendingWriteTree_,e._path),a=E_(i,e,l,s?o.getNode():b.EMPTY_NODE,s);return MC(a)}function Is(t,e){return N_(e,t.syncPointTree_,null,Rl(t.pendingWriteTree_,$()))}function N_(t,e,n,r){if(W(t.path))return R_(t,e,n,r);{const i=e.get($());n==null&&i!=null&&(n=Cn(i,$()));let s=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=m_(r,o);s=s.concat(N_(l,a,u,d))}return i&&(s=s.concat(od(i,t,r,n))),s}}function R_(t,e,n,r){const i=e.get($());n==null&&i!=null&&(n=Cn(i,$()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=m_(r,o),d=t.operationForChild(o);d&&(s=s.concat(R_(d,l,a,u)))}),i&&(s=s.concat(od(i,t,r,n))),s}function P_(t,e){const n=e.query,r=ls(t,n);return{hashFn:()=>(DC(e)||b.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?YC(t,n._path,r):QC(t,n._path);{const s=JS(i,n);return nl(t,n,null,s)}}}}function ls(t,e){const n=xl(e);return t.queryToTagMap.get(n)}function xl(t){return t._path.toString()+"$"+t._queryIdentifier}function ad(t,e){return t.tagToQueryMap.get(e)}function ud(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function cd(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=Rl(t.pendingWriteTree_,e);return od(r,n,i,null)}function XC(t){return t.fold((e,n,r)=>{if(n&&Rn(n))return[Pl(n)];{let i=[];return n&&(i=S_(n)),He(r,(s,o)=>{i=i.concat(o)}),i}})}function Di(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new($C())(t._repo,t._path):t}function ZC(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=xl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function eI(){return GC++}function tI(t,e,n){const r=e._path,i=ls(t,e),s=P_(t,n),o=t.listenProvider_.startListening(Di(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)R(!Rn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!W(u)&&d&&Rn(d))return[Pl(d).query];{let h=[];return d&&(h=h.concat(S_(d).map(v=>v.query))),He(c,(v,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Di(d),ls(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new dd(n)}node(){return this.node_}}class hd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new hd(this.syncTree_,n)}node(){return ld(this.syncTree_,this.path_)}}const nI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Pf=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return rI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return iI(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},rI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},iI=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},sI=function(t,e,n,r){return fd(e,new hd(n,t),r)},x_=function(t,e,n){return fd(t,new dd(e),n)};function fd(t,e,n){const r=t.getPriority().val(),i=Pf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Pf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ge(l,ye(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ge(i))),o.forEachChild(ue,(l,a)=>{const u=fd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function md(t,e){let n=e instanceof q?e:new q(e),r=t,i=F(n);for(;i!==null;){const s=Vr(r.node.children,i)||{children:{},childCount:0};r=new pd(i,r,s),n=X(n),i=F(n)}return r}function ti(t){return t.node.value}function A_(t,e){t.node.value=e,Fu(t)}function O_(t){return t.node.childCount>0}function oI(t){return ti(t)===void 0&&!O_(t)}function Al(t,e){He(t.node.children,(n,r)=>{e(new pd(n,t,r))})}function L_(t,e,n,r){n&&e(t),Al(t,i=>{L_(i,e,!0)})}function lI(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ks(t){return new q(t.parent===null?t.name:ks(t.parent)+"/"+t.name)}function Fu(t){t.parent!==null&&aI(t.parent,t.name,t)}function aI(t,e,n){const r=oI(n),i=qt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Fu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Fu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=/[\[\].#$\/\u0000-\u001F\u007F]/,cI=/[\[\].#$\u0000-\u001F\u007F]/,Sa=10*1024*1024,D_=function(t){return typeof t=="string"&&t.length!==0&&!uI.test(t)},M_=function(t){return typeof t=="string"&&t.length!==0&&!cI.test(t)},dI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),M_(t)},b_=function(t,e,n,r){r&&e===void 0||gd(Vc(t,"value"),e,n)},gd=function(t,e,n){const r=n instanceof q?new x0(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Un(r));if(typeof e=="function")throw new Error(t+"contains a function "+Un(r)+" with contents = "+e.toString());if(Og(e))throw new Error(t+"contains "+e.toString()+" "+Un(r));if(typeof e=="string"&&e.length>Sa/3&&kl(e)>Sa)throw new Error(t+"contains a string greater than "+Sa+" utf8 bytes "+Un(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(He(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!D_(o)))throw new Error(t+" contains an invalid key ("+o+") "+Un(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);A0(r,o),gd(t,l,r),O0(r)}),i&&s)throw new Error(t+' contains ".value" child '+Un(r)+" in addition to actual children.")}},j_=function(t,e,n,r){if(!M_(n))throw new Error(Vc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hI=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),j_(t,e,n)},_d=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},fI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!D_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!dI(n))throw new Error(Vc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function vd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!qc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function F_(t,e,n){vd(t,n),U_(t,r=>qc(r,e))}function Pt(t,e,n){vd(t,n),U_(t,r=>ht(r,e)||ht(e,r))}function U_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(mI(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function mI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();xi&&Re("event: "+n.toString()),ei(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="repo_interrupt",_I=25;class vI{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qo(),this.transactionQueueTree_=new pd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function yI(t,e,n){if(t.stats_=Qc(t.repoInfo_),t.forceRestClient_||t0())t.server_=new Ko(t.repoInfo_,(r,i,s,o)=>{xf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Af(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Wt(t.repoInfo_,e,(r,i,s,o)=>{xf(t,r,i,s,o)},r=>{Af(t,r)},r=>{wI(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=o0(t.repoInfo_,()=>new iC(t.stats_,t.server_)),t.infoData_=new Z0,t.infoSyncTree_=new Rf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Cs(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),wd(t,"connected",!1),t.serverSyncTree_=new Rf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Pt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function W_(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function yd(t){return nI({timestamp:W_(t)})}function xf(t,e,n,r,i){t.dataUpdateCount++;const s=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=zo(n,u=>ye(u));o=qC(t.serverSyncTree_,s,a,i)}else{const a=ye(n);o=T_(t.serverSyncTree_,s,a,i)}else if(r){const a=zo(n,u=>ye(u));o=KC(t.serverSyncTree_,s,a)}else{const a=ye(n);o=Cs(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Ll(t,s)),Pt(t.eventQueue_,l,o)}function Af(t,e){wd(t,"connected",e),e===!1&&CI(t)}function wI(t,e){He(e,(n,r)=>{wd(t,n,r)})}function wd(t,e,n){const r=new q("/.info/"+e),i=ye(n);t.infoData_.updateSnapshot(r,i);const s=Cs(t.infoSyncTree_,r,i);Pt(t.eventQueue_,r,s)}function z_(t){return t.nextWriteId_++}function EI(t,e,n){const r=JC(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ye(i).withIndex(e._queryParams.getIndex());ju(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Cs(t.serverSyncTree_,e._path,s);else{const l=ls(t.serverSyncTree_,e);o=T_(t.serverSyncTree_,e._path,s,l)}return Pt(t.eventQueue_,e._path,o),nl(t.serverSyncTree_,e,n,null,!0),s},i=>(Ol(t,"get for query "+fe(e)+" failed: "+i),Promise.reject(new Error(i))))}function SI(t,e,n,r,i){Ol(t,"set",{path:e.toString(),value:n,priority:r});const s=yd(t),o=ye(n,r),l=ld(t.serverSyncTree_,e),a=x_(o,l,s),u=z_(t),d=k_(t.serverSyncTree_,e,a,u,!0);vd(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,v)=>{const _=h==="ok";_||Be("set at "+e+" failed: "+h);const y=Hn(t.serverSyncTree_,u,!_);Pt(t.eventQueue_,e,y),TI(t,i,h,v)});const c=G_(t,e);Ll(t,c),Pt(t.eventQueue_,c,[])}function CI(t){Ol(t,"onDisconnectEvents");const e=yd(t),n=Qo();Ou(t.onDisconnect_,$(),(i,s)=>{const o=sI(i,s,t.serverSyncTree_,e);u_(n,i,o)});let r=[];Ou(n,$(),(i,s)=>{r=r.concat(Cs(t.serverSyncTree_,i,s));const o=G_(t,i);Ll(t,o)}),t.onDisconnect_=Qo(),Pt(t.eventQueue_,$(),r)}function II(t,e,n){let r;F(e._path)===".info"?r=ju(t.infoSyncTree_,e,n):r=ju(t.serverSyncTree_,e,n),F_(t.eventQueue_,e._path,r)}function Uu(t,e,n){let r;F(e._path)===".info"?r=nl(t.infoSyncTree_,e,n):r=nl(t.serverSyncTree_,e,n),F_(t.eventQueue_,e._path,r)}function kI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(gI)}function Ol(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Re(n,...e)}function TI(t,e,n,r){e&&ei(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function V_(t,e,n){return ld(t.serverSyncTree_,e,n)||b.EMPTY_NODE}function Ed(t,e=t.transactionQueueTree_){if(e||Dl(t,e),ti(e)){const n=H_(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&NI(t,ks(e),n)}else O_(e)&&Al(e,n=>{Ed(t,n)})}function NI(t,e,n){const r=n.map(u=>u.currentWriteId),i=V_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];R(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Oe(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Ol(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Hn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Dl(t,md(t.transactionQueueTree_,e)),Ed(t,t.transactionQueueTree_),Pt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)ei(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Be("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Ll(t,e)}},o)}function Ll(t,e){const n=B_(t,e),r=ks(n),i=H_(t,n);return RI(t,i,r),r}function RI(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Oe(n,a.path);let d=!1,c;if(R(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Hn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=_I)d=!0,c="maxretry",i=i.concat(Hn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=V_(t,a.path,o);a.currentInputSnapshot=h;const v=e[l].update(h.val());if(v!==void 0){gd("transaction failed: Data returned ",v,a.path);let _=ye(v);typeof v=="object"&&v!=null&&qt(v,".priority")||(_=_.updatePriority(h.getPriority()));const T=a.currentWriteId,g=yd(t),p=x_(_,h,g);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=p,a.currentWriteId=z_(t),o.splice(o.indexOf(T),1),i=i.concat(k_(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(Hn(t.serverSyncTree_,T,!0))}else d=!0,c="nodata",i=i.concat(Hn(t.serverSyncTree_,a.currentWriteId,!0))}Pt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Dl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ei(r[l]);Ed(t,t.transactionQueueTree_)}function B_(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&ti(r)===void 0;)r=md(r,n),e=X(e),n=F(e);return r}function H_(t,e){const n=[];return $_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function $_(t,e,n){const r=ti(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Al(e,i=>{$_(t,i,n)})}function Dl(t,e){const n=ti(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,A_(e,n.length>0?n:void 0)}Al(e,r=>{Dl(t,r)})}function G_(t,e){const n=ks(B_(t,e)),r=md(t.transactionQueueTree_,e);return lI(r,i=>{Ca(t,i)}),Ca(t,r),L_(r,i=>{Ca(t,i)}),n}function Ca(t,e){const n=ti(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Hn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?A_(e,void 0):n.length=s+1,Pt(t.eventQueue_,ks(e),i);for(let o=0;o<r.length;o++)ei(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function xI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Of=function(t,e){const n=AI(t),r=n.namespace;n.domain==="firebase.com"&&Kt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||GS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Hg(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new q(n.pathString)}},AI=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=PI(t.substring(d,c)));const h=xI(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const v=e.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",OI=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Lf.charAt(n%64),n=Math.floor(n/64);R(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Lf.charAt(e[i]);return R(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+fe(this.snapshot.exportVal())}}class DI{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return W(this._path)?null:Zg(this._path)}get ref(){return new Jt(this._repo,this._path)}get _queryIdentifier(){const e=_f(this._queryParams),n=Gc(e);return n==="{}"?"default":n}get _queryObject(){return _f(this._queryParams)}isEqual(e){if(e=xe(e),!(e instanceof Sd))return!1;const n=this._repo===e._repo,r=qc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+P0(this._path)}}class Jt extends Sd{constructor(e,n){super(e,n,new ed,!1)}get parent(){const e=t_(this._path);return e===null?null:new Jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class as{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),r=us(this.ref,e);return new as(this._node.getChild(n),r,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new as(i,us(this.ref,r),ue)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function nt(t,e){return t=xe(t),t._checkNotDeleted("ref"),e!==void 0?us(t._root,e):t._root}function us(t,e){return t=xe(t),F(t._path)===null?hI("child","path",e):j_("child","path",e),new Jt(t._repo,pe(t._path,e))}function MI(t,e){t=xe(t),_d("push",t._path),b_("push",e,t._path,!0);const n=W_(t._repo),r=OI(n),i=us(t,r),s=us(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function bI(t){return _d("remove",t._path),cs(t,null)}function cs(t,e){t=xe(t),_d("set",t._path),b_("set",e,t._path,!1);const n=new Il;return SI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Df(t){t=xe(t);const e=new K_(()=>{}),n=new Ml(e);return EI(t._repo,t,n).then(r=>new as(r,new Jt(t._repo,t._path),t._queryParams.getIndex()))}class Ml{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new LI("value",this,new as(e.snapshotNode,new Jt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new DI(this,e,n):null}matches(e){return e instanceof Ml?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function jI(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{Uu(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new K_(n,s||void 0),l=new Ml(o);return II(t._repo,t,l),()=>Uu(t._repo,t,l)}function ds(t,e,n,r){return jI(t,"value",e,n,r)}function Q_(t,e,n){Uu(t._repo,t,null)}UC(Jt);HC(Jt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="FIREBASE_DATABASE_EMULATOR_HOST",Wu={};let UI=!1;function WI(t,e,n,r){t.repoInfo_=new Hg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function zI(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Re("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Of(s,i),l=o.repoInfo,a;typeof process<"u"&&Xh&&(a=Xh[FI]),a?(s=`http://${a}?ns=${l.namespace}`,o=Of(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new r0(t.name,t.options,e);fI("Invalid Firebase Database URL",o),W(o.path)||Kt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=BI(l,t,u,new n0(t.name,n));return new HI(d,t)}function VI(t,e){const n=Wu[e];(!n||n[t.key]!==t)&&Kt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),kI(t),delete n[t.key]}function BI(t,e,n,r){let i=Wu[e.name];i||(i={},Wu[e.name]=i);let s=i[t.toURLString()];return s&&Kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new vI(t,UI,n,r),i[t.toURLString()]=s,s}class HI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(yI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jt(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(VI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Kt("Cannot call "+e+" on a deleted database.")}}function $I(t=Tg(),e){const n=$c(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=mE("database");r&&GI(n,...r)}return n}function GI(t,e,n,r={}){t=xe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Kt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Kt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new uo(uo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:gE(r.mockUserToken,t.app.options.projectId);s=new uo(o)}WI(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t){WS(Xr),Br(new Xn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return zI(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),En(Zh,ef,t),En(Zh,ef,"esm2017")}Wt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};KI();var QI="firebase",YI="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En(QI,YI,"app");function Cd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Y_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qI=Y_,q_=new ys("auth","Firebase",Y_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=new Bc("@firebase/auth");function JI(t,...e){rl.logLevel<=Q.WARN&&rl.warn(`Auth (${Xr}): ${t}`,...e)}function co(t,...e){rl.logLevel<=Q.ERROR&&rl.error(`Auth (${Xr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,...e){throw Id(t,...e)}function Nt(t,...e){return Id(t,...e)}function J_(t,e,n){const r=Object.assign(Object.assign({},qI()),{[e]:n});return new ys("auth","Firebase",r).create(e,{appName:t.name})}function zt(t){return J_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Id(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return q_.create(t,...e)}function j(t,e,...n){if(!t)throw Id(e,...n)}function bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw co(e),new Error(e)}function Qt(t,e){t||bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function XI(){return Mf()==="http:"||Mf()==="https:"}function Mf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XI()||vE()||"connection"in navigator)?navigator.onLine:!0}function ek(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=zc()||Eg()}get(){return ZI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=new Ts(3e4,6e4);function Ln(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dn(t,e,n,r,i={}){return Z_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Jr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return _E()||(u.referrerPolicy="no-referrer"),X_.fetch()(ev(t,t.config.apiHost,n,l),u)})}async function Z_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tk),e);try{const i=new ik(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw qs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw qs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw qs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw qs(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw J_(t,d,u);vt(t,d)}}catch(i){if(i instanceof On)throw i;vt(t,"network-request-failed",{message:String(i)})}}async function Ns(t,e,n,r,i={}){const s=await Dn(t,e,n,r,i);return"mfaPendingCredential"in s&&vt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ev(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?kd(t.config,i):`${t.config.apiScheme}://${i}`}function rk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ik{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"network-request-failed")),nk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nt(t,e,r);return i.customData._tokenResponse=n,i}function bf(t){return t!==void 0&&t.enterprise!==void 0}class sk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ok(t,e){return Dn(t,"GET","/v2/recaptchaConfig",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lk(t,e){return Dn(t,"POST","/v1/accounts:delete",e)}async function tv(t,e){return Dn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ak(t,e=!1){const n=xe(t),r=await n.getIdToken(e),i=Td(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Mi(Ia(i.auth_time)),issuedAtTime:Mi(Ia(i.iat)),expirationTime:Mi(Ia(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ia(t){return Number(t)*1e3}function Td(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return co("JWT malformed, contained fewer than 3 sections"),null;try{const i=Wo(n);return i?JSON.parse(i):(co("Failed to decode base64 JWT payload"),null)}catch(i){return co("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jf(t){const e=Td(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&uk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t){var e;const n=t.auth,r=await t.getIdToken(),i=await hs(t,tv(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?nv(s.providerUserInfo):[],l=hk(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Vu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function dk(t){const e=xe(t);await il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function nv(t){return t.map(e=>{var{providerId:n}=e,r=Cd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fk(t,e){const n=await Z_(t,{},async()=>{const r=Jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ev(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",X_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pk(t,e){return Dn(t,"POST","/v2/accounts:revokeToken",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){j(e.length!==0,"internal-error");const n=jf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Or;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Or,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Cd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ck(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await hs(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ak(this,e)}reload(){return dk(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(zt(this.auth));const e=await this.getIdToken();return await hs(this,lk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,T=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:w,isAnonymous:E,providerData:C,stsTokenManager:N}=n;j(m&&N,e,"internal-error");const x=Or.fromJSON(this.name,N);j(typeof m=="string",e,"internal-error"),Zt(c,e.name),Zt(h,e.name),j(typeof w=="boolean",e,"internal-error"),j(typeof E=="boolean",e,"internal-error"),Zt(v,e.name),Zt(_,e.name),Zt(y,e.name),Zt(T,e.name),Zt(g,e.name),Zt(p,e.name);const P=new jt({uid:m,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:E,photoURL:_,phoneNumber:v,tenantId:y,stsTokenManager:x,createdAt:g,lastLoginAt:p});return C&&Array.isArray(C)&&(P.providerData=C.map(I=>Object.assign({},I))),T&&(P._redirectEventId=T),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new Or;i.updateFromServerResponse(n);const s=new jt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await il(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];j(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?nv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Or;l.updateFromIdToken(r);const a=new jt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Vu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=new Map;function Ft(t){Qt(t instanceof Function,"Expected a class definition");let e=Ff.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ff.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rv.type="NONE";const Uf=rv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t,e,n){return`firebase:${t}:${e}:${n}`}class Lr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ho(this.userKey,i.apiKey,s),this.fullPersistenceKey=ho("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Lr(Ft(Uf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ft(Uf);const o=ho(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=jt._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Lr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Lr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uv(e))return"Blackberry";if(cv(e))return"Webos";if(sv(e))return"Safari";if((e.includes("chrome/")||ov(e))&&!e.includes("edge/"))return"Chrome";if(av(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iv(t=De()){return/firefox\//i.test(t)}function sv(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ov(t=De()){return/crios\//i.test(t)}function lv(t=De()){return/iemobile/i.test(t)}function av(t=De()){return/android/i.test(t)}function uv(t=De()){return/blackberry/i.test(t)}function cv(t=De()){return/webos/i.test(t)}function Nd(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mk(t=De()){var e;return Nd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gk(){return yE()&&document.documentMode===10}function dv(t=De()){return Nd(t)||av(t)||cv(t)||uv(t)||/windows phone/i.test(t)||lv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t,e=[]){let n;switch(t){case"Browser":n=Wf(De());break;case"Worker":n=`${Wf(De())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vk(t,e={}){return Dn(t,"GET","/v2/passwordPolicy",Ln(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=6;class wk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zf(this),this.idTokenSubscription=new zf(this),this.beforeStateQueue=new _k(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Lr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await tv(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ek()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(zt(this));const n=e?xe(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vk(this),n=new wk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ys("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ft(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Lr.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&JI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function lr(t){return xe(t)}class zf{constructor(e){this.auth=e,this.observer=null,this.addObserver=PE(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sk(t){bl=t}function fv(t){return bl.loadJS(t)}function Ck(){return bl.recaptchaEnterpriseScript}function Ik(){return bl.gapiScript}function kk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Tk="recaptcha-enterprise",Nk="NO_RECAPTCHA";class Rk{constructor(e){this.type=Tk,this.auth=lr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{ok(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new sk(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;bf(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Nk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&bf(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Ck();a.length!==0&&(a+=l),fv(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Vf(t,e,n,r=!1){const i=new Rk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Bu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Vf(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Vf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t,e){const n=$c(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vo(s,e??{}))return i;vt(i,"already-initialized")}return n.initialize({options:e})}function xk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ak(t,e,n){const r=lr(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=pv(e),{host:o,port:l}=Ok(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Lk()}function pv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ok(t){const e=pv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Bf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Bf(o)}}}function Bf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Lk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,n){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}async function Dk(t,e){return Dn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mk(t,e){return Ns(t,"POST","/v1/accounts:signInWithPassword",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(t,e){return Ns(t,"POST","/v1/accounts:signInWithEmailLink",Ln(t,e))}async function jk(t,e){return Ns(t,"POST","/v1/accounts:signInWithEmailLink",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends Rd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new fs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bu(e,n,"signInWithPassword",Mk);case"emailLink":return bk(e,{email:this._email,oobCode:this._password});default:vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bu(e,r,"signUpPassword",Dk);case"emailLink":return jk(e,{idToken:n,email:this._email,oobCode:this._password});default:vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(t,e){return Ns(t,"POST","/v1/accounts:signInWithIdp",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk="http://localhost";class nr extends Rd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Cd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new nr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Dr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Dr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dr(e,n)}buildRequest(){const e={requestUri:Fk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Wk(t){const e=yi(wi(t)).link,n=e?yi(wi(e)).deep_link_id:null,r=yi(wi(t)).deep_link_id;return(r?yi(wi(r)).link:null)||r||n||e||t}class Pd{constructor(e){var n,r,i,s,o,l;const a=yi(wi(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,c=Uk((i=a.mode)!==null&&i!==void 0?i:null);j(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Wk(e);try{return new Pd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.providerId=ni.PROVIDER_ID}static credential(e,n){return fs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Pd.parseLink(n);return j(r,"argument-error"),fs._fromEmailAndCode(e,r.code,r.tenantId)}}ni.PROVIDER_ID="password";ni.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ni.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends mv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Rs{constructor(){super("facebook.com")}static credential(e){return nr._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Rs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return nr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return on.credential(n,r)}catch{return null}}}on.GOOGLE_SIGN_IN_METHOD="google.com";on.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Rs{constructor(){super("github.com")}static credential(e){return nr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.GITHUB_SIGN_IN_METHOD="github.com";ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Rs{constructor(){super("twitter.com")}static credential(e,n){return nr._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return an.credential(n,r)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zk(t,e){return Ns(t,"POST","/v1/accounts:signUp",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jt._fromIdTokenResponse(e,r,i),o=Hf(r);return new rr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Hf(r);return new rr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Hf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends On{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,sl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new sl(e,n,r,i)}}function gv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?sl._fromErrorAndOperation(t,s,e,r):s})}async function Vk(t,e,n=!1){const r=await hs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(t,e,n=!1){const{auth:r}=t;if(Ct(r.app))return Promise.reject(zt(r));const i="reauthenticate";try{const s=await hs(t,gv(r,i,e,t),n);j(s.idToken,r,"internal-error");const o=Td(s.idToken);j(o,r,"internal-error");const{sub:l}=o;return j(t.uid===l,r,"user-mismatch"),rr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _v(t,e,n=!1){if(Ct(t.app))return Promise.reject(zt(t));const r="signIn",i=await gv(t,r,e),s=await rr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Hk(t,e){return _v(lr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vv(t){const e=lr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yv(t,e,n){if(Ct(t.app))return Promise.reject(zt(t));const r=lr(t),o=await Bu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",zk).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&vv(t),a}),l=await rr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function $k(t,e,n){return Ct(t.app)?Promise.reject(zt(t)):Hk(xe(t),ni.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vv(t),r})}function Gk(t,e,n,r){return xe(t).onIdTokenChanged(e,n,r)}function Kk(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function Qk(t,e,n,r){return xe(t).onAuthStateChanged(e,n,r)}function xd(t){return xe(t).signOut()}const ol="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ol,"1"),this.storage.removeItem(ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=1e3,qk=10;class Ev extends wv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Yk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ev.type="LOCAL";const Jk=Ev;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv extends wv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Sv.type="SESSION";const Cv=Sv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await Xk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Ad("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function eT(t){Rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function tT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rT(){return Iv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="firebaseLocalStorageDb",iT=1,ll="firebaseLocalStorage",Tv="fbase_key";class Ps{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fl(t,e){return t.transaction([ll],e?"readwrite":"readonly").objectStore(ll)}function sT(){const t=indexedDB.deleteDatabase(kv);return new Ps(t).toPromise()}function Hu(){const t=indexedDB.open(kv,iT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ll,{keyPath:Tv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ll)?e(r):(r.close(),await sT(),e(await Hu()))})})}async function $f(t,e,n){const r=Fl(t,!0).put({[Tv]:e,value:n});return new Ps(r).toPromise()}async function oT(t,e){const n=Fl(t,!1).get(e),r=await new Ps(n).toPromise();return r===void 0?null:r.value}function Gf(t,e){const n=Fl(t,!0).delete(e);return new Ps(n).toPromise()}const lT=800,aT=3;class Nv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>aT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Iv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jl._getInstance(rT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tT(),!this.activeServiceWorker)return;this.sender=new Zk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hu();return await $f(e,ol,"1"),await Gf(e,ol),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$f(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Fl(i,!1).getAll();return new Ps(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nv.type="LOCAL";const uT=Nv;new Ts(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(t,e){return e?Ft(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od extends Rd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Dr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dT(t){return _v(t.auth,new Od(t),t.bypassAuthState)}function hT(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Bk(n,new Od(t),t.bypassAuthState)}async function fT(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Vk(n,new Od(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dT;case"linkViaPopup":case"linkViaRedirect":return fT;case"reauthViaPopup":case"reauthViaRedirect":return hT;default:vt(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=new Ts(2e3,1e4);class Cr extends Rv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Cr.currentPopupAction&&Cr.currentPopupAction.cancel(),Cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=Ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pT.get())};e()}}Cr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="pendingRedirect",fo=new Map;class gT extends Rv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fo.get(this.auth._key());if(!e){try{const r=await _T(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fo.set(this.auth._key(),e)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _T(t,e){const n=wT(e),r=yT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vT(t,e){fo.set(t._key(),e)}function yT(t){return Ft(t._redirectPersistence)}function wT(t){return ho(mT,t.config.apiKey,t.name)}async function ET(t,e,n=!1){if(Ct(t.app))return Promise.reject(zt(t));const r=lr(t),i=cT(r,e),o=await new gT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=10*60*1e3;class CT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ST&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kf(e))}saveEventToCache(e){this.cachedEventUids.add(Kf(e)),this.lastProcessedEventTime=Date.now()}}function Kf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kT(t,e={}){return Dn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NT=/^https?/;async function RT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kT(t);for(const n of e)try{if(PT(n))return}catch{}vt(t,"unauthorized-domain")}function PT(t){const e=zu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NT.test(n))return!1;if(TT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=new Ts(3e4,6e4);function Qf(){const t=Rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AT(t){return new Promise((e,n)=>{var r,i,s;function o(){Qf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qf(),n(Nt(t,"network-request-failed"))},timeout:xT.get()})}if(!((i=(r=Rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Rt().gapi)===null||s===void 0)&&s.load)o();else{const l=kk("iframefcb");return Rt()[l]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},fv(`${Ik()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw po=null,e})}let po=null;function OT(t){return po=po||AT(t),po}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=new Ts(5e3,15e3),DT="__/auth/iframe",MT="emulator/auth/iframe",bT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FT(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kd(e,MT):`https://${t.config.authDomain}/${DT}`,r={apiKey:e.apiKey,appName:t.name,v:Xr},i=jT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Jr(r).slice(1)}`}async function UT(t){const e=await OT(t),n=Rt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:FT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),l=Rt().setTimeout(()=>{s(o)},LT.get());function a(){Rt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zT=500,VT=600,BT="_blank",HT="http://localhost";class Yf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $T(t,e,n,r=zT,i=VT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},WT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=De().toLowerCase();n&&(l=ov(u)?BT:n),iv(u)&&(e=e||HT,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[v,_])=>`${h}${v}=${_},`,"");if(mk(u)&&l!=="_self")return GT(e||"",l),new Yf(null);const c=window.open(e||"",l,d);j(c,t,"popup-blocked");try{c.focus()}catch{}return new Yf(c)}function GT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="__/auth/handler",QT="emulator/auth/handler",YT=encodeURIComponent("fac");async function qf(t,e,n,r,i,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xr,eventId:i};if(e instanceof mv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Cu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof Rs){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${YT}=${encodeURIComponent(a)}`:"";return`${qT(t)}?${Jr(l).slice(1)}${u}`}function qT({config:t}){return t.emulator?kd(t,QT):`https://${t.authDomain}/${KT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="webStorageSupport";class JT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cv,this._completeRedirectFn=ET,this._overrideRedirectResult=vT}async _openPopup(e,n,r,i){var s;Qt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await qf(e,n,r,zu(),i);return $T(e,o,Ad())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await qf(e,n,r,zu(),i);return eT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UT(e),r=new CT(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ka,{type:ka},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ka];o!==void 0&&n(!!o),vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dv()||sv()||Nd()}}const XT=JT;var Jf="@firebase/auth",Xf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tN(t){Br(new Xn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hv(t)},u=new Ek(r,i,s,a);return xk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Br(new Xn("auth-internal",e=>{const n=lr(e.getProvider("auth").getImmediate());return(r=>new ZT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(Jf,Xf,eN(t)),En(Jf,Xf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=5*60,rN=wg("authIdTokenMaxAge")||nN;let Zf=null;const iN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rN)return;const i=n==null?void 0:n.token;Zf!==i&&(Zf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sN(t=Tg()){const e=$c(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Pk(t,{popupRedirectResolver:XT,persistence:[uT,Jk,Cv]}),r=wg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=iN(s.toString());Kk(n,o,()=>o(n.currentUser)),Gk(n,l=>o(l))}}const i=vg("auth");return i&&Ak(n,`http://${i}`),n}function oN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Sk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Nt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",oN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tN("Browser");const lN={apiKey:"AIzaSyAy55_y_kO6BEA2GgaSr7qgEW1DN3AnFz0",authDomain:"latvian-learn.firebaseapp.com",databaseURL:"https://latvian-learn-default-rtdb.europe-west1.firebasedatabase.app",projectId:"latvian-learn",storageBucket:"latvian-learn.appspot.com",messagingSenderId:"337514562639",appId:"1:337514562639:web:3ff5ed409a23c58c19d63a",measurementId:"G-9T2HD2YKLN"},xv=kg(lN),It=sN(xv),rt=$I(xv),aN="https://latvial-learn.latvial-learn.workers.dev",Av=async(t,e)=>{const n=await fetch(`${aN}${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok)throw new Error("Worker request failed");return await n.json()},uN=t=>Qk(It,async e=>{if(e!=null&&e.isAnonymous){await xd(It),t(null);return}t(e?e.uid:null)}),cN=async(t,e)=>(await $k(It,t,e)).user.uid,dN=async(t,e)=>(await yv(It,t,e)).user.uid,hN=async t=>(await Av("/auth/send-code",{email:t})).ticket,fN=async(t,e,n)=>(await Av("/auth/verify-code",{email:t,code:e,ticket:n})).ok===!0,pN=async t=>{try{const e=Math.random().toString(36).slice(-10);return await yv(It,t,e),It.currentUser&&(await It.currentUser.delete(),await xd(It)),!1}catch(e){return e.code==="auth/email-already-in-use"}},mN=async(t,e)=>{const n=nt(rt,`users/${t}/profile`);await cs(n,{email:e,createdAt:Date.now()})},gN=async()=>{await xd(It)},Ta=()=>{var t;return((t=It.currentUser)==null?void 0:t.email)||null},_N={ru:{title:"Тренировка слов",addWordTitle:"Добавить слово",translation:"Перевод",add:"Добавить",manage:"Управлять словами",listTitle:"Список слов",delete:"Удалить",check:"Проверить",noWords:"Слова не найдены",trainer:"Загрузка...",settings:"Настройки",settingsTitle:"Настройки",apply:"Применить",reset:"Сбросить",resetStats:"Сброс счёта",nouns:"Существительные",verbs:"Глаголы",adjectives:"Прилагательные",mode_ru2lv:"С русского на латышский",mode_lv2ru:"С латышского на русский",mode_both:"Все вместе",randomAll:"Случайные слова",skip:"Пропустить",trainerTab:"Слова",manageTab:"Склонения",settingsTab:"Спряжения",word:"Слово",decl1:"1 склонение",decl2:"2 склонение",decl3:"3 склонение",decl4:"4 склонение",decl5:"5 склонение",decl6:"6 склонение",duplicateTitle:"Дубликат слова",duplicateExists:"Уже есть в базе:",duplicateNew:"Вы пытаетесь добавить:",duplicateConfirm:"Всё равно добавить?",yes:"Да",no:"Нет",myWords:"Мои слова",wordAddedSuccess:"Слово успешно добавлено!",total:"Всего",search:"Поиск",searchWords:"Поиск слов",enterWord:"Введите слово",enterLatvianWord:"Введите слово...",searchHint:"Можно ввести слово на другом языке",wordNotFound:"Слово не найдено",emptyWordList:"Список слов",emptyDeclensions:"Склонения",declensionsLoading:"Склонения загружаются из базы данных",selectDeclension:"Выберите правильное склонение:",addWordsOrPreset:"Добавьте слова ниже или выберите пресет в настройках",selectPreset:"Выберите готовый набор слов для тренировки",noData:"Нет данных",deleteConfirm:"Удалить слово",level:"Уровень сложности",wordType:"Тип слов",translationMode:"Режимы",addWordButton:"Добавить слово",wordProgress:"Слово",settingsTip:'Совет: Используйте кнопку "Сбросить" чтобы вернуться к своим словам',listEmpty:"Список пуст",saving:"Сохранение...",save:"Сохранить",unsavedChanges:"Несохранённые изменения",unsavedWarning:"У вас есть несохранённые изменения. Что вы хотите сделать?",discard:"Не сохранять",selectConjugation:"Выберите правильное спряжение:",correctForm:"Правильная форма",emptyConjugations:"Спряжения",conjugationsLoading:"Спряжения загружаются из базы данных",authTitle:"Вход",authSubtitle:"Введите email и пароль",email:"Email",password:"Пароль",login:"Войти",noAccount:"Нет аккаунта?",register:"Зарегистрироваться",haveAccount:"Уже есть аккаунт?",sendCode:"Отправить код",code:"Код из письма",verifyCode:"Подтвердить",codeSent:"Код отправлен на почту",invalidCode:"Неверный код",invalidEmail:"Некорректный email",passwordShort:"Пароль должен быть не менее 6 символов",sendCodeError:"Не удалось отправить код. Проверьте настройки Google Apps.",authError:"Неверный логин или пароль",accountExists:"Аккаунт с этой почтой уже зарегистрирован",logout:"Выйти"},en:{title:"Word Trainer",addWordTitle:"Add word",translation:"Translation",add:"Add",manage:"Manage words",listTitle:"Word list",delete:"Delete",check:"Check",noWords:"Words not found",trainer:"Loading...",settings:"Settings",settingsTitle:"Settings",apply:"Apply",reset:"Reset",resetStats:"Reset Score",nouns:"Nouns",verbs:"Verbs",adjectives:"Adjectives",mode_ru2lv:"From Russian to Latvian",mode_lv2ru:"From Latvian to Russian",mode_both:"Mixed",randomAll:"Random words",skip:"Skip",trainerTab:"Words",manageTab:"Declensions",settingsTab:"Conjugations",word:"Word",decl1:"1st declension",decl2:"2nd declension",decl3:"3rd declension",decl4:"4th declension",decl5:"5th declension",decl6:"6th declension",duplicateTitle:"Duplicate word",duplicateExists:"Already in database:",duplicateNew:"You are trying to add:",duplicateConfirm:"Add anyway?",yes:"Yes",no:"No",myWords:"My words",wordAddedSuccess:"Word added successfully!",total:"Total",search:"Search",searchWords:"Search Words",enterWord:"Enter a word",enterLatvianWord:"Enter word...",searchHint:"You can enter a word in another language",wordNotFound:"Word not found",emptyWordList:"Word list",emptyDeclensions:"Declensions",declensionsLoading:"Declensions are loading from the database",selectDeclension:"Select the correct declension:",addWordsOrPreset:"Add words below or select a preset in settings",selectPreset:"Select a ready-made set of words for training",noData:"No data",deleteConfirm:"Delete word",level:"Difficulty level",wordType:"Word type",translationMode:"Translation mode",addWordButton:"Add word",wordProgress:"Word",settingsTip:'Tip: Use the "Reset" button to return to your personal words',listEmpty:"List is empty",saving:"Saving...",save:"Save",unsavedChanges:"Unsaved changes",unsavedWarning:"You have unsaved changes. What would you like to do?",discard:"Don't save",selectConjugation:"Select the correct conjugation:",correctForm:"Correct form",emptyConjugations:"Conjugations",conjugationsLoading:"Conjugations are loading from the database",authTitle:"Sign in",authSubtitle:"Enter email and password",email:"Email",password:"Password",login:"Log in",noAccount:"No account?",register:"Register",haveAccount:"Already have an account?",sendCode:"Send code",code:"Email code",verifyCode:"Verify",codeSent:"Code sent to your email",invalidCode:"Invalid code",invalidEmail:"Invalid email",passwordShort:"Password must be at least 6 characters",sendCodeError:"Could not send the code. Check Google Apps settings.",authError:"Invalid login or password",accountExists:"Account with this email is already registered",logout:"Log out"},lv:{title:"Vārdu treniņš",addWordTitle:"Pievienot vārdu",translation:"Tulkojums",add:"Pievienot",manage:"Pārvaldīt vārdus",listTitle:"Vārdu saraksts",delete:"Dzēst",check:"Pārbaudīt",noWords:"Vārdi nav atrasti",trainer:"Ielāde...",settings:"Iestatījumi",settingsTitle:"Iestatījumi",apply:"Apstiprināt",reset:"Atiestatīt",resetStats:"Nullēt rezultātu",nouns:"Lietvārdi",verbs:"Darbības vārdi",adjectives:"Īpašības vārdi",mode_ru2lv:"No krievu uz latviešu",mode_lv2ru:"No latviešu uz krievu",mode_both:"Abi kopā",randomAll:"Nejauši vārdi",skip:"Izlaist",trainerTab:"Vārdi",manageTab:"Locījumi",settingsTab:"Konjugācijas",word:"Vārds",decl1:"1. deklinācija",decl2:"2. deklinācija",decl3:"3. deklinācija",decl4:"4. deklinācija",decl5:"5. deklinācija",decl6:"6. deklinācija",duplicateTitle:"Vārda dublikāts",duplicateExists:"Jau ir datubāzē:",duplicateNew:"Mēģini pievienot:",duplicateConfirm:"Vai tiešām pievienot?",yes:"Jā",no:"Nē",myWords:"Mani vārdi",wordAddedSuccess:"Vārds veiksmīgi pievienots!",total:"Kopā",search:"Meklēt",searchWords:"Meklēt vārdus",enterWord:"Ievadiet vārdu",enterLatvianWord:"Ievadiet vārdu...",searchHint:"Varat ievadīt vārdu citā valodā",wordNotFound:"Vārds nav atrasts",emptyWordList:"Vārdu saraksts",emptyDeclensions:"Locījumi",declensionsLoading:"Locījumi tiek ielādēti no datubāzes",selectDeclension:"Izvēlieties pareizo locījumu:",addWordsOrPreset:"Pievienojiet vārdus zemāk vai izvēlieties priekšuzstādījumu iestatījumos",selectPreset:"Izvēlieties gatavu vārdu komplektu apmācībai",noData:"Nav datu",deleteConfirm:"Dzēst vārdu",level:"Grūtības pakāpe",wordType:"Vārda tips",translationMode:"Tulkošanas režīms",addWordButton:"Pievienot vārdu",wordProgress:"Vārds",settingsTip:'Padoms: Izmantojiet pogu "Atiestatīt", lai atgrieztos pie saviem vārdiem',listEmpty:"Saraksts ir tukšs",saving:"Saglabā...",save:"Saglabāt",unsavedChanges:"Nesaglabātas izmaiņas",unsavedWarning:"Jums ir nesaglabātas izmaiņas. Ko jūs vēlaties darīt?",discard:"Nesaglabāt",selectConjugation:"Izvēlieties pareizo konjugāciju:",correctForm:"Pareizā forma",emptyConjugations:"Konjugācijas",conjugationsLoading:"Konjugācijas tiek ielādētas no datubāzes",authTitle:"Pieslēgties",authSubtitle:"Ievadiet e-pastu un paroli",email:"E-pasts",password:"Parole",login:"Ienākt",noAccount:"Nav konta?",register:"Reģistrēties",haveAccount:"Jau ir konts?",sendCode:"Nosūtīt kodu",code:"Kods no e-pasta",verifyCode:"Apstiprināt",codeSent:"Kods nosūtīts uz e-pastu",invalidCode:"Nederīgs kods",invalidEmail:"Nederīgs e-pasts",passwordShort:"Parolei jābūt vismaz 6 simboli",sendCodeError:"Neizdevās nosūtīt kodu. Pārbaudiet Google Apps iestatījumus.",authError:"Nepareizs lietotājvārds vai parole",accountExists:"Konts ar šo e-pastu jau ir reģistrēts",logout:"Iziet"}},Ov=A.createContext(void 0),xt=()=>{const t=A.useContext(Ov);if(!t)throw new Error("useLanguage must be used within LanguageProvider");return t},vN=({children:t})=>{const[e,n]=A.useState(()=>localStorage.getItem("lang")||"en"),r=s=>{n(s),localStorage.setItem("lang",s)},i=s=>_N[e][s]||s;return f.jsx(Ov.Provider,{value:{language:e,setLanguage:r,t:i},children:t})},yN=()=>{try{const t=localStorage.getItem("trainerStats");return t?JSON.parse(t):{}}catch{return{}}},wN=t=>{localStorage.setItem("trainerStats",JSON.stringify(t))},EN=(t,e,n)=>{const r={...t};return r[e]||(r[e]={correct:0,wrong:0}),n?r[e].correct++:r[e].wrong++,wN(r),r},Na=t=>t.replace(/\(.*?\)/g,"").trim().toLowerCase(),ep=t=>{const e=[...t];for(let n=e.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e},SN=(t,e,n,r=[])=>{if(t.length===0||t.length===1)return 0;const i=new Set([n,...r]),s=Array.from({length:t.length}).map((c,h)=>h).filter(c=>!i.has(c)),o=s.length>0?s:[n],l=o.map(c=>{const h=t[c],v=h.word+"|"+h.translation,_=e[v]||{correct:0,wrong:0},y=Math.pow(2.5,Math.min(_.wrong,5))/Math.max(1,_.correct+1),T=_.correct>5?.6:1,g=.8+Math.random()*.4;return y*T*g}),a=l.reduce((c,h)=>c+h,0);if(a===0)return o[0];let u=Math.random()*a,d=0;for(let c=0;c<l.length;c++)if(d+=l[c],u<=d)return o[c];return o[0]},CN=({words:t,trainingMode:e,sessionStats:n,onSessionStatsChange:r})=>{const{t:i}=xt(),[s,o]=A.useState(0),[l,a]=A.useState(""),[u,d]=A.useState(!1),[c,h]=A.useState(!1),[v,_]=A.useState(!1),[y,T]=A.useState(yN()),[g,p]=A.useState([]);A.useEffect(()=>{t.length>0&&m()},[t]);const m=()=>{if(t.length===0)return;const I=SN(t,y,s,g);o(I),p(V=>[I,...V].slice(0,Math.min(4,t.length-1))),a(""),d(!1),h(!1);const M=e==="ru2lv"?!1:e==="lv2ru"?!0:Math.random()<.5;_(M)},w=()=>{if(t.length===0||!l.trim())return;const I=t[s],M=Na(l),V=Na(v?I.word:I.translation),K=I.word+"|"+I.translation,ee=M===V;h(ee),d(!0);const Y=EN(y,K,ee);T(Y),r({correct:n.correct+(ee?1:0),wrong:n.wrong+(ee?0:1)}),ee&&setTimeout(()=>m(),1e3)},E=()=>{setTimeout(()=>m(),100)},C=I=>{I.key==="Enter"&&!u?w():I.key==="Enter"&&u&&!c&&m()};if(t.length===0)return f.jsxs("div",{className:"trainer-ui empty-state",children:[f.jsx("p",{className:"empty-message",children:i("noWords")}),f.jsx("p",{className:"empty-hint",children:i("addWordsOrPreset")})]});const N=t[s];if(!N)return f.jsxs("div",{className:"trainer-ui empty-state",children:[f.jsx("p",{className:"empty-message",children:i("noWords")}),f.jsx("p",{className:"empty-hint",children:i("addWordsOrPreset")})]});const x=v?N.translation:N.word,P=v?N.word:N.translation;return f.jsxs("div",{className:"trainer-ui",children:[f.jsx("div",{className:"trainer-header",children:f.jsxs("div",{className:"session-stats",children:[f.jsxs("span",{className:"stat-correct",children:["✓ ",n.correct]}),f.jsxs("span",{className:"stat-wrong",children:["✗ ",n.wrong]})]})}),f.jsx("b",{children:x}),f.jsx("input",{type:"text",value:l,onChange:I=>a(I.target.value),onKeyPress:C,placeholder:i("translation"),className:u?c?"correct":"wrong":"",disabled:u&&c,autoFocus:!0}),u&&!c&&f.jsxs("div",{className:"correct-answer",children:["Правильный ответ: ",f.jsx("strong",{children:P})]}),f.jsxs("div",{className:"trainer-actions",children:[!u||c?f.jsxs(f.Fragment,{children:[f.jsx("button",{onClick:w,disabled:!l.trim()||u&&c,children:i("check")}),f.jsx("button",{onClick:E,className:"skip-btn",disabled:u&&c,children:i("skip")})]}):null,u&&!c&&f.jsx("button",{onClick:m,className:"next-btn",children:"Далее →"})]})]})},IN=({uid:t,userWords:e,usePreset:n,isOpen:r,onClose:i})=>{const{t:s}=xt(),[o,l]=A.useState(""),[a,u]=A.useState(""),[d,c]=A.useState(null),[h,v]=A.useState(!1),_=(m,w)=>e.find(E=>E.word.toLowerCase()===m.toLowerCase()||E.translation.toLowerCase()===w.toLowerCase()||E.word.toLowerCase()===w.toLowerCase()&&E.translation.toLowerCase()===m.toLowerCase())||null,y=()=>{if(n||!t)return;const m=o.trim(),w=a.trim();if(!m||!w)return;const E=_(m,w);if(E){c({existing:E,new:{word:m,translation:w}});return}T(m,w)},T=(m,w)=>{if(!t)return;const E=MI(nt(rt,`users/${t}/words`));cs(E,{word:m,translation:w}),l(""),u(""),v(!0),setTimeout(()=>{v(!1)},1500)},g=()=>{d&&(T(d.new.word,d.new.translation),c(null))},p=()=>{c(null)};return n||!r?null:f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"modal",style:{display:"flex"},children:f.jsxs("div",{className:"modal-content add-word-modal",children:[f.jsx("span",{className:"close",onClick:i,children:"×"}),f.jsx("div",{className:"card-header",children:f.jsx("h3",{children:s("addWordTitle")})}),f.jsxs("div",{className:"inputs",children:[f.jsx("input",{type:"text",value:o,onChange:m=>l(m.target.value),placeholder:s("word"),onKeyPress:m=>m.key==="Enter"&&y(),autoFocus:!0}),f.jsx("input",{type:"text",value:a,onChange:m=>u(m.target.value),placeholder:s("translation"),onKeyPress:m=>m.key==="Enter"&&y()}),f.jsx("button",{onClick:y,disabled:!o.trim()||!a.trim(),children:s("add")})]}),h&&f.jsx("div",{className:"success-message",children:s("wordAddedSuccess")})]})}),d&&f.jsx("div",{className:"modal",style:{display:"flex"},children:f.jsxs("div",{className:"modal-content duplicate-box",children:[f.jsx("h3",{children:s("duplicateTitle")}),f.jsx("p",{children:s("duplicateExists")}),f.jsxs("div",{className:"duplicate-info",children:[d.existing.word," → ",d.existing.translation]}),f.jsx("p",{children:s("duplicateNew")}),f.jsxs("div",{className:"duplicate-info",children:[d.new.word," → ",d.new.translation]}),f.jsx("p",{children:s("duplicateConfirm")}),f.jsxs("div",{className:"duplicate-actions",children:[f.jsx("button",{onClick:g,children:s("yes")}),f.jsx("button",{onClick:p,children:s("no")})]})]})})]})},kN=({uid:t,onClose:e})=>{const{t:n}=xt(),[r,i]=A.useState([]),[s,o]=A.useState([]),[l,a]=A.useState(""),[u,d]=A.useState(!1),[c,h]=A.useState(!1),[v,_]=A.useState(!1);A.useEffect(()=>{if(!t)return;const E=nt(rt,`users/${t}/words`);let C=null;return(()=>{C=ds(E,x=>{try{const P=x.val();if(P){const I=Object.entries(P).map(([M,V])=>({key:M,word:V.word,translation:V.translation}));i(I),o(I),d(!1)}else i([]),o([]),d(!1)}catch(P){console.error("Error processing words data:",P)}},x=>{console.error("Firebase listener error:",x)})})(),()=>{C&&C()}},[t]);const y=(E,C,N)=>{o(x=>x.map(P=>P.key===E?{...P,[C]:N}:P)),d(!0)},T=async()=>{if(!(!t||!u)){h(!0);try{const E=[];s.forEach(C=>{const N=r.find(x=>x.key===C.key);if(N){if(N.word!==C.word){const x=nt(rt,`users/${t}/words/${C.key}/word`);E.push(cs(x,C.word))}if(N.translation!==C.translation){const x=nt(rt,`users/${t}/words/${C.key}/translation`);E.push(cs(x,C.translation))}}}),r.forEach(C=>{if(!s.find(x=>x.key===C.key)){const x=nt(rt,`users/${t}/words/${C.key}`);E.push(bI(x))}}),await Promise.all(E),d(!1)}catch(E){console.error("Error saving changes:",E),alert("Ошибка при сохранении изменений")}finally{h(!1)}}},g=E=>{t&&(o(C=>C.filter(N=>N.key!==E)),d(!0))},p=s.filter(E=>{const C=l.toLowerCase();return E.word.toLowerCase().includes(C)||E.translation.toLowerCase().includes(C)}),m=()=>{u?_(!0):e()},w=E=>{_(!1),E?T().then(()=>e()):(o(r),d(!1),e())};return f.jsx("div",{className:"modal",style:{display:"flex"},children:f.jsxs("div",{className:"modal-content",children:[f.jsx("span",{className:"close",onClick:m,children:"×"}),f.jsx("h3",{className:"wordlist-title",children:n("listTitle")}),f.jsxs("div",{className:"wordlist-top-row",children:[f.jsxs("div",{className:"words-count",children:[n("total"),": ",f.jsx("strong",{children:s.length})]}),f.jsx("input",{className:"wordlist-search",placeholder:n("search"),value:l,onChange:E=>a(E.target.value)})]}),f.jsx("div",{className:"word-list",children:p.length===0?f.jsx("div",{className:"empty-state-list",children:f.jsx("p",{children:n("listEmpty")})}):p.map(E=>f.jsxs("div",{className:"word-item",children:[f.jsx("input",{value:E.word,onChange:C=>y(E.key,"word",C.target.value),placeholder:n("word")}),f.jsx("input",{value:E.translation,onChange:C=>y(E.key,"translation",C.target.value),placeholder:n("translation")}),f.jsx("button",{className:"delete-btn",onClick:()=>g(E.key),title:n("delete"),children:"✕"})]},E.key))}),f.jsx("div",{className:"wordlist-actions",children:f.jsx("button",{className:`apply-btn ${u?"":"disabled"}`,onClick:T,disabled:!u||c,children:c?n("saving")||"Сохранение...":n("save")||"Сохранить"})}),v&&f.jsx("div",{className:"confirm-dialog-overlay",children:f.jsxs("div",{className:"confirm-dialog",children:[f.jsx("h4",{children:n("unsavedChanges")||"Несохранённые изменения"}),f.jsx("p",{children:n("unsavedWarning")||"У вас есть несохраненные изменения"}),f.jsxs("div",{className:"confirm-dialog-buttons",children:[f.jsx("button",{className:"confirm-save-btn",onClick:()=>w(!0),children:n("save")||"Сохранить"}),f.jsx("button",{className:"confirm-discard-btn",onClick:()=>w(!1),children:n("discard")||"Не сохранять"})]})]})})]})})},TN=({onClose:t,onApply:e,onReset:n,onResetStats:r})=>{const{t:i}=xt(),[s,o]=A.useState("a1"),[l,a]=A.useState("nouns"),[u,d]=A.useState("both"),[c,h]=A.useState(!1),[v,_]=A.useState(!1),[y,T]=A.useState(!1),g=p=>p==="randomAll"?i("randomAll"):p.toUpperCase();return f.jsx("div",{className:"modal",style:{display:"flex"},children:f.jsxs("div",{className:"modal-content settings-modal",children:[f.jsx("span",{className:"close",onClick:t,children:"×"}),f.jsx("h3",{children:i("settingsTitle")}),f.jsx("p",{className:"settings-description",children:i("selectPreset")}),f.jsxs("div",{className:"setting-group",children:[f.jsx("label",{className:"setting-label",children:i("level")}),f.jsxs("div",{className:`custom-select ${c?"open":""}`,children:[f.jsx("div",{className:"selected",onClick:()=>{h(!c),_(!1),T(!1)},children:g(s)}),c&&f.jsxs("div",{className:"options",children:[f.jsx("div",{onClick:()=>{o("randomAll"),h(!1)},children:i("randomAll")}),f.jsx("div",{onClick:()=>{o("a1"),h(!1)},children:"A1"}),f.jsx("div",{onClick:()=>{o("a2"),h(!1)},children:"A2"}),f.jsx("div",{onClick:()=>{o("b1"),h(!1)},children:"B1"}),f.jsx("div",{onClick:()=>{o("b2"),h(!1)},children:"B2"}),f.jsx("div",{onClick:()=>{o("c1"),h(!1)},children:"C1"})]})]})]}),f.jsxs("div",{className:"setting-group",children:[f.jsx("label",{className:"setting-label",children:i("wordType")}),f.jsxs("div",{className:`custom-select ${v?"open":""}`,children:[f.jsx("div",{className:"selected",onClick:()=>{_(!v),h(!1),T(!1)},children:i(l)}),v&&f.jsxs("div",{className:"options",children:[f.jsx("div",{onClick:()=>{a("nouns"),_(!1)},children:i("nouns")}),f.jsx("div",{onClick:()=>{a("verbs"),_(!1)},children:i("verbs")}),f.jsx("div",{onClick:()=>{a("adjectives"),_(!1)},children:i("adjectives")})]})]})]}),f.jsxs("div",{className:"setting-group",children:[f.jsx("label",{className:"setting-label",children:i("translationMode")}),f.jsxs("div",{className:`custom-select ${y?"open":""}`,children:[f.jsx("div",{className:"selected",onClick:()=>{T(!y),h(!1),_(!1)},children:i(`mode_${u}`)}),y&&f.jsxs("div",{className:"options",children:[f.jsx("div",{onClick:()=>{d("ru2lv"),T(!1)},children:i("mode_ru2lv")}),f.jsx("div",{onClick:()=>{d("lv2ru"),T(!1)},children:i("mode_lv2ru")}),f.jsx("div",{onClick:()=>{d("both"),T(!1)},children:i("mode_both")})]})]})]}),f.jsx("div",{className:"settings-info",children:i("settingsTip")})]})})},NN=({sessionStats:t,onSessionStatsChange:e})=>{const{t:n}=xt(),[r,i]=A.useState(null),[s,o]=A.useState({}),[l,a]=A.useState(null),[u,d]=A.useState(null);A.useEffect(()=>{c()},[]);const c=()=>{const _=nt(rt,"declension");return ds(_,y=>{const T=y.val();if(!T){i(null);return}const g={};Object.values(T).forEach(p=>{Object.values(p).forEach(m=>{g[m.group]||(g[m.group]=[]),g[m.group].push(m)})}),o(g),h(g)}),()=>Q_(_)},h=_=>{const y=Object.keys(_).filter(m=>_[m].length>0);if(y.length===0){i(null);return}const T=y[Math.floor(Math.random()*y.length)],g=_[T],p=Math.floor(Math.random()*g.length);i(g[p]),a(null),d(null)},v=_=>{if(!r)return;a(_),_===r.group?(d("correct"),e({...t,correct:t.correct+1}),setTimeout(()=>h(s),800)):(d("wrong"),e({...t,wrong:t.wrong+1}),setTimeout(()=>h(s),1200))};return f.jsx("div",{className:"trainer-ui",children:r?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"trainer-header",children:f.jsxs("div",{className:"session-stats",children:[f.jsxs("span",{className:"stat-correct",children:["✓ ",t.correct]}),f.jsxs("span",{className:"stat-wrong",children:["✗ ",t.wrong]})]})}),f.jsxs("div",{className:"word-container",children:[f.jsx("b",{children:r.word}),f.jsx("p",{className:"declension-translation",children:r.translation})]}),f.jsx("div",{className:"declension-header",children:f.jsx("span",{className:"declension-hint",children:n("selectDeclension")})}),f.jsx("div",{className:"declension-actions",children:[1,2,3,4,5,6].map(_=>f.jsx("button",{onClick:()=>v(String(_)),className:l===String(_)?u==="correct"?"correct":"wrong":u==="wrong"&&r.group===String(_)?"correct":"",disabled:l!==null,children:_},_))})]}):f.jsxs("div",{className:"empty-state",children:[f.jsx("div",{className:"empty-icon",children:n("emptyDeclensions")}),f.jsx("b",{children:n("noData")}),f.jsx("p",{style:{margin:"6px 0",fontSize:"0.9rem",color:"var(--text-secondary)"},children:n("declensionsLoading")})]})})},RN=({sessionStats:t,onSessionStatsChange:e})=>{const{t:n}=xt(),[r,i]=A.useState(null),[s,o]=A.useState([]),[l,a]=A.useState({}),[u,d]=A.useState(null),[c,h]=A.useState(null),[v,_]=A.useState(null),[y,T]=A.useState(!0),[g,p]=A.useState(null);A.useEffect(()=>{C()},[]);const m=(P,I,M)=>{const V=I.filter(D=>D.correctPatternId===P.correctPatternId&&D.infinitive!==P.infinitive),K=Object.keys(M).filter(D=>D!==P.correctPatternId);if(V.length===0)return console.warn(`⚠️ Нет других глаголов с паттерном ${P.correctPatternId}`),w(P,I,M);const ee=D=>D.length<3?D:D.replace(/tīt$|t$|ēt$|it$|ies$/,"").substring(0,4),Y=ee(P.infinitive),$e=V[Math.floor(Math.random()*V.length)],Ee=M[P.correctPatternId],S=[];S.push({patternId:P.correctPatternId,present1st:Ee.present1st,present3rd:Ee.present3rd,fromVerb:$e.infinitive});const L=new Set([P.correctPatternId]);for(;S.length<3&&K.length>0;){const D=K[Math.floor(Math.random()*K.length)];if(L.has(D))continue;const B=M[D],J=ee(B.present1st),Xe=ee(B.present3rd);J!==Y&&Xe!==Y&&(S.push({patternId:D,present1st:B.present1st,present3rd:B.present3rd,fromVerb:void 0}),L.add(D))}return S.length<3&&console.warn(`⚠️ Недостаточно валидных вариантов (${S.length}/3)`),S.sort(()=>Math.random()-.5)},w=(P,I,M)=>{const V=S=>S.replace(/tīt$|t$|ēt$|it$|ies$/,"").substring(0,4),K=V(P.infinitive),ee=Object.keys(M).filter(S=>{const L=M[S],D=V(L.present1st),B=V(L.present3rd);return D!==K&&B!==K}),Y=[],$e=new Set,Ee=M[P.correctPatternId];for(Y.push({patternId:P.correctPatternId,present1st:Ee.present1st,present3rd:Ee.present3rd}),$e.add(P.correctPatternId);Y.length<3&&ee.length>0;){const S=ee[Math.floor(Math.random()*ee.length)];$e.has(S)||(Y.push({patternId:S,present1st:M[S].present1st,present3rd:M[S].present3rd}),$e.add(S))}return Y.sort(()=>Math.random()-.5)},E=(P,I)=>{if(P.length===0){i(null);return}const M=P[Math.floor(Math.random()*P.length)],V=m(M,P,I);i({infinitive:M.infinitive,translation:M.translation,correctPatternId:M.correctPatternId,options:V}),d(null),h(null),_(null)},C=()=>{try{const P=nt(rt,"conjugationPatterns");ds(P,I=>{const M=I.val();if(!M){p("Нет данных о паттернах"),T(!1);return}a(M);const V=nt(rt,"verbs");ds(V,K=>{const ee=K.val();if(!ee){p("Нет данных о глаголах"),i(null),o([]),T(!1);return}try{const Y=[];if(Object.entries(ee).forEach(([$e,Ee])=>{Ee&&typeof Ee=="object"&&Object.entries(Ee).forEach(([S,L])=>{L&&L.infinitive&&L.correctPatternId&&Y.push({infinitive:L.infinitive,translation:L.translation||"",correctPatternId:L.correctPatternId})})}),Y.length===0){p("Глаголы не найдены в базе данных"),T(!1);return}o(Y),p(null),E(Y,M),T(!1)}catch(Y){p("Ошибка при обработке данных"),console.error("Ошибка обработки:",Y),T(!1)}},K=>{p(`Ошибка Firebase (verbs): ${K.message}`),T(!1),console.error("Firebase ошибка:",K)})},I=>{p(`Ошибка Firebase (patterns): ${I.message}`),T(!1),console.error("Firebase ошибка:",I)})}catch(P){p("Ошибка при подключении к базе данных"),console.error("Ошибка подключения:",P),T(!1)}},N=(P,I)=>{let M=0;const V=Math.min(P.length,I.length);for(let Y=0;Y<V&&P[Y]===I[Y];Y++)M++;const K=P.substring(0,M),ee=P.substring(M);return f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"base-form",children:K}),f.jsx("span",{className:"ending-highlight",children:ee})]})},x=P=>{if(!r||u!==null)return;if(d(P),r.options[P].patternId===r.correctPatternId)h("correct"),e({...t,correct:t.correct+1}),setTimeout(()=>E(s,l),800);else{h("wrong"),e({...t,wrong:t.wrong+1});const V=r.options.findIndex(K=>K.patternId===r.correctPatternId);_(V),setTimeout(()=>E(s,l),1500)}};return y?f.jsx("div",{className:"trainer-ui",children:f.jsxs("div",{className:"empty-state",children:[f.jsx("div",{className:"empty-icon",children:"⏳"}),f.jsx("b",{children:"Загрузка..."}),f.jsx("p",{children:n("conjugationsLoading")})]})}):g||s.length===0?f.jsx("div",{className:"trainer-ui",children:f.jsxs("div",{className:"empty-state",children:[f.jsx("div",{className:"empty-icon",children:"⚠️"}),f.jsx("b",{children:g||n("emptyConjugations")}),f.jsx("p",{children:g?"Проверьте консоль для деталей":n("conjugationsLoading")}),g&&f.jsx("p",{style:{margin:"12px 0",fontSize:"0.85rem",color:"#ef4444",fontFamily:"monospace"},children:g})]})}):f.jsx("div",{className:"trainer-ui",children:r?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"trainer-header",children:f.jsxs("div",{className:"session-stats",children:[f.jsxs("span",{className:"stat-correct",children:["✓ ",t.correct]}),f.jsxs("span",{className:"stat-wrong",children:["✗ ",t.wrong]})]})}),f.jsxs("div",{className:"word-container",children:[f.jsx("b",{className:"infinitive",children:r.infinitive}),f.jsx("p",{className:"conjugation-translation",children:r.translation})]}),f.jsx("div",{className:"conjugation-header",children:f.jsx("span",{className:"conjugation-hint",children:n("selectConjugation")})}),f.jsx("div",{className:"conjugation-options",children:r.options.map((P,I)=>{const M=u===I,V=v===I,K=M&&c==="correct",ee=M&&c==="wrong",Y=V&&c==="wrong";return f.jsx("button",{onClick:()=>x(I),className:`conjugation-option ${K?"correct":ee?"wrong":Y?"correct":""}`,disabled:u!==null,"aria-label":`Вариант ${I+1}: ${P.present1st} / ${P.present3rd}`,children:f.jsxs("div",{className:"conjugation-forms",children:[f.jsx("span",{className:"form-example",children:N(P.present1st,P.present3rd)}),f.jsx("span",{className:"form-separator",children:"/"}),f.jsx("span",{className:"form-example",children:N(P.present3rd,P.present1st)})]})},I)})})]}):f.jsxs("div",{className:"empty-state",children:[f.jsx("div",{className:"empty-icon",children:"📚"}),f.jsx("b",{children:n("emptyConjugations")}),f.jsx("p",{children:n("conjugationsLoading")})]})})},PN=({onClose:t})=>{const{t:e}=xt(),[n,r]=A.useState(""),[i,s]=A.useState(null),[o,l]=A.useState([]),[a,u]=A.useState(null),[d,c]=A.useState(!1),h=async()=>{var y;if(!n.trim()){u(e("enterWord")||"Ievadiet vārdu"),l([]),s(null);return}c(!0),u(null),s(null),l([]);try{const g=await fetch(`https://latvial-learn.latvial-learn.workers.dev/search?word=${encodeURIComponent(n)}`);if(g.ok){const p=await g.json();if(p.similarWords&&p.similarWords.length>0){s(null),l(p.similarWords.map(C=>({word:C.word,verbalization:C.note||"",translation:"",href:C.href}))),u(null),c(!1);return}const m=n.trim().toLowerCase(),w=((y=p.word)==null?void 0:y.toLowerCase())===m,E=!p.verbalization&&!p.translation;w&&E?(s(null),l([]),u(e("wordNotFound")||"Vārds nav atrasts")):(s(p),l([]),u(null)),c(!1);return}s(null),l([]),u(e("wordNotFound")||"Vārds nav atrasts"),c(!1);return}catch{s(null),l([]),u(e("wordNotFound")||"Vārds nav atrasts"),c(!1);return}},v=async y=>{var g;const T=y.word;r(T),l([]),u(null),c(!0),s(null);try{const m=await fetch(`https://latvial-learn.latvial-learn.workers.dev/search?word=${encodeURIComponent(T)}`);if(m.ok){const w=await m.json();if(w.similarWords&&w.similarWords.length>0)l(w.similarWords.map(E=>({word:E.word,verbalization:E.note||"",translation:"",href:E.href})));else{const E=T.trim().toLowerCase(),C=((g=w.word)==null?void 0:g.toLowerCase())===E,N=!w.verbalization&&!w.translation;C&&N?u(e("wordNotFound")||"Vārds nav atrasts"):s(w)}}else u(e("wordNotFound")||"Vārds nav atrasts")}catch{u(e("wordNotFound")||"Vārds nav atrasts")}c(!1)},_=y=>{y.key==="Enter"&&h()};return f.jsx("div",{className:"modal",style:{display:"flex"},children:f.jsxs("div",{className:"modal-content search-words-modal",children:[f.jsx("span",{className:"close",onClick:t,children:"×"}),f.jsx("h3",{children:e("searchWords")||"Meklēt vārdus"}),f.jsxs("div",{className:"search-words-input-group",children:[f.jsx("input",{type:"text",className:"search-words-input",placeholder:e("enterLatvianWord")||"Ievadiet vārdu...",value:n,onChange:y=>r(y.target.value),onKeyPress:_,autoFocus:!0}),f.jsx("button",{className:"search-words-btn",onClick:h,children:e("search")||"Мeklēt"})]}),!n&&f.jsx("div",{style:{fontSize:"12px",color:"#666",marginTop:"4px",marginBottom:"8px"},children:e("searchHint")||"Varat ievadīt vārdu citā valodā"}),a&&f.jsx("div",{className:"search-words-error",children:a}),d&&f.jsx("div",{className:"search-words-loading",children:"Meklē..."}),o.length>0&&f.jsxs("div",{className:"search-words-suggestions",children:[f.jsx("div",{className:"suggestions-title",children:"Līdzīgi vārdi:"}),o.map((y,T)=>f.jsxs("div",{className:"suggestion-item",onClick:()=>v(y),children:[f.jsx("strong",{children:y.word}),f.jsx("span",{className:"suggestion-info",children:y.verbalization})]},T))]}),i&&f.jsx("div",{className:"search-words-result",children:f.jsxs("div",{className:"result-item",children:[f.jsx("strong",{children:i.word}),f.jsx("p",{className:"result-verbalization",children:i.verbalization}),i.translation&&f.jsx("p",{className:"result-translation",children:i.translation})]})})]})})},xN=({activeTab:t,onTabChange:e,labels:n})=>f.jsx("div",{className:"tabs",children:Object.entries(n).map(([r,i])=>f.jsx("button",{className:`tab-btn ${t===r?"active":""}`,onClick:()=>e(r),children:i},r))}),tp=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,AN=({onAuthenticated:t})=>{const{t:e}=xt(),[n,r]=A.useState("login"),[i,s]=A.useState("form"),[o,l]=A.useState(""),[a,u]=A.useState(""),[d,c]=A.useState(""),[h,v]=A.useState(null),[_,y]=A.useState(!1),[T,g]=A.useState(""),[p,m]=A.useState(""),w=()=>{g(""),m("")},E=I=>{r(I),s("form"),v(null),c(""),w()},C=async()=>{if(w(),!tp.test(o)){m(e("invalidEmail"));return}y(!0);try{const I=await cN(o.trim(),a);t(I)}catch{m(e("authError"))}finally{y(!1)}},N=async()=>{if(w(),!tp.test(o)){m(e("invalidEmail"));return}if(a.length<6){m(e("passwordShort"));return}y(!0);try{if(await pN(o.trim())){m(e("accountExists")),y(!1);return}const M=await hN(o.trim());v(M),g(e("codeSent")),s("code")}catch{m(e("sendCodeError"))}finally{y(!1)}},x=async()=>{if(w(),!h){m(e("invalidCode"));return}const I=d.trim();if(!I){m(e("invalidCode"));return}y(!0);try{if(!await fN(o.trim(),I,h)){m(e("invalidCode"));return}const V=await dN(o.trim(),a);await mN(V,o.trim()),t(V)}catch{m(e("authError"))}finally{y(!1)}},P=()=>n==="login"?f.jsx("button",{className:"auth-button",onClick:C,disabled:_,children:_?"...":e("login")}):i==="form"?f.jsx("button",{className:"auth-button",onClick:N,disabled:_,children:_?"...":e("sendCode")}):f.jsx("button",{className:"auth-button",onClick:x,disabled:_,children:_?"...":e("verifyCode")});return f.jsx("div",{className:"auth-wrapper",children:f.jsxs("div",{className:"auth-card",children:[f.jsx("h2",{children:e("authTitle")}),f.jsx("p",{className:"auth-subtitle",children:e("authSubtitle")}),f.jsxs("div",{className:"inputs",children:[f.jsx("input",{type:"email",placeholder:e("email"),value:o,onChange:I=>l(I.target.value)}),f.jsx("input",{type:"password",placeholder:e("password"),value:a,onChange:I=>u(I.target.value)}),n==="register"&&i==="code"&&f.jsx("input",{type:"text",placeholder:e("code"),value:d,onChange:I=>c(I.target.value)})]}),T&&f.jsx("div",{className:"auth-message success",children:T}),p&&f.jsx("div",{className:"auth-message error",children:p}),P(),f.jsx("div",{className:"auth-toggle",children:n==="login"?f.jsxs("span",{children:[e("noAccount")," ",f.jsx("button",{type:"button",className:"link-btn",onClick:()=>E("register"),children:e("register")})]}):f.jsxs("span",{children:[e("haveAccount")," ",f.jsx("button",{type:"button",className:"link-btn",onClick:()=>E("login"),children:e("login")})]})})]})})},Ra=({isOpen:t,onClose:e,userEmail:n,onLogout:r,onResetStats:i})=>{const{language:s,setLanguage:o,t:l}=xt(),[a,u]=A.useState(!1);if(!t)return null;const d=_=>{o(_),u(!1)},c=[{code:"ru",flag:"RU",name:"Русский"},{code:"en",flag:"EN",name:"English"},{code:"lv",flag:"LV",name:"Latviešu"}],h=c.find(_=>_.code===s)||c[0],v=_=>{_.target===_.currentTarget&&e()};return f.jsx("div",{className:"settings-menu-overlay",onClick:v,children:f.jsxs("div",{className:"settings-menu-card",children:[f.jsxs("div",{className:"settings-menu-header",children:[f.jsx("h2",{children:l("settings")}),f.jsx("button",{className:"close-btn",onClick:e,children:"✕"})]}),f.jsxs("div",{className:"settings-menu-content",children:[f.jsx("div",{className:"settings-item",children:f.jsxs("div",{className:"custom-dropdown",children:[f.jsxs("button",{className:"dropdown-trigger",onClick:()=>u(!a),children:[f.jsx("span",{className:"dropdown-flag",children:h.name}),f.jsx("span",{className:`dropdown-arrow ${a?"open":""}`,children:"▼"})]}),a&&f.jsx("div",{className:"dropdown-menu",children:c.map(_=>f.jsxs("button",{className:`dropdown-item ${s===_.code?"active":""}`,onClick:()=>d(_.code),children:[f.jsx("span",{className:"dropdown-name",children:_.name}),s===_.code&&f.jsx("span",{className:"checkmark",children:"✓"})]},_.code))})]})}),n&&f.jsxs("div",{className:"profile-block",children:[f.jsxs("div",{className:"profile-info",children:[f.jsx("span",{className:"profile-label",children:"Email:"}),f.jsx("span",{className:"profile-email",children:n})]}),f.jsx("button",{className:"logout-btn",onClick:r,children:l("logout")})]}),i&&f.jsxs("button",{onClick:i,className:"reset-stats-btn",children:["⊘ ",l("resetStats")]})]})]})})},Pa="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23e3e3e3'%3e%3cpath%20d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z'/%3e%3c/svg%3e";function ON(){const{t}=xt(),[e,n]=A.useState(null),[r,i]=A.useState(!1),[s,o]=A.useState([]),[l,a]=A.useState("both"),[u,d]=A.useState(!1),[c,h]=A.useState(!1),[v,_]=A.useState(!1),[y,T]=A.useState(!1),[g,p]=A.useState(!1),[m,w]=A.useState(!1),[E,C]=A.useState("trainer"),[N,x]=A.useState(()=>{try{const S=localStorage.getItem("sessionStats_trainer");return S?JSON.parse(S):{correct:0,wrong:0}}catch{return{correct:0,wrong:0}}}),[P,I]=A.useState(()=>{try{const S=localStorage.getItem("sessionStats_declension");return S?JSON.parse(S):{correct:0,wrong:0}}catch{return{correct:0,wrong:0}}}),[M,V]=A.useState(()=>{try{const S=localStorage.getItem("sessionStats_conjugation");return S?JSON.parse(S):{correct:0,wrong:0}}catch{return{correct:0,wrong:0}}});A.useEffect(()=>{try{localStorage.setItem("sessionStats_trainer",JSON.stringify(N))}catch{}},[N]),A.useEffect(()=>{try{localStorage.setItem("sessionStats_declension",JSON.stringify(P))}catch{}},[P]),A.useEffect(()=>{try{localStorage.setItem("sessionStats_conjugation",JSON.stringify(M))}catch{}},[M]),A.useEffect(()=>uN(L=>{n(L),i(!0)}),[]),A.useEffect(()=>{if(!e||u)return;const S=nt(rt,`users/${e}/words`);return ds(S,L=>{const D=L.val(),B=D?Object.values(D):[];o(B)}),()=>Q_(S)},[e,u]);const K=async(S,L)=>{if(S==="randomAll"){const D=nt(rt,"presets"),J=(await Df(D)).val();let Xe=[];J&&Object.values(J).forEach(yt=>{yt[L]&&(Xe=Xe.concat(Object.values(yt[L])))}),o(ep(Xe))}else{const D=nt(rt,`presets/${S}/${L}`),J=(await Df(D)).val(),Xe=J?ep(Object.values(J)):[];o(Xe)}},ee=(S,L,D)=>{a(D),d(!0),K(S,L)},Y=()=>{d(!1),a("both")},$e=()=>{x({correct:0,wrong:0}),I({correct:0,wrong:0}),V({correct:0,wrong:0})},Ee=async()=>{await gN(),w(!1)};return r?e?f.jsxs("div",{className:"App",children:[f.jsxs("div",{className:"app-header",children:[f.jsx("h1",{className:"app-title",children:t("title")}),f.jsx("button",{className:"settings-icon-btn",onClick:()=>w(!0),children:f.jsx("img",{src:Pa,alt:"Menu",className:"menu-icon"})})]}),f.jsx(xN,{activeTab:E,onTabChange:C,labels:{trainer:t("trainerTab"),manage:t("manageTab"),settings:t("settingsTab")}}),f.jsxs("div",{className:"tab-content-wrapper",children:[E==="trainer"&&f.jsxs("div",{className:"tab-content active",children:[f.jsx(CN,{words:s,trainingMode:l,sessionStats:N,onSessionStatsChange:x}),f.jsxs("div",{className:"action-buttons",children:[!u&&f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"icon-button",onClick:()=>p(!0),title:t("searchWords")||"Поиск слов",children:t("searchWords")||"Поиск"}),f.jsx("button",{className:"icon-button",onClick:()=>T(!0),title:t("addWordButton"),children:t("addWordButton")}),f.jsx("button",{className:"icon-button",onClick:()=>h(!0),title:t("manage"),children:t("myWords")})]}),f.jsx("button",{className:"icon-button",onClick:()=>_(!0),title:t("settings"),children:t("translationMode")})]})]}),E==="manage"&&f.jsx("div",{className:"tab-content active",children:f.jsx(NN,{sessionStats:P,onSessionStatsChange:I})}),E==="settings"&&f.jsx("div",{className:"tab-content active",children:f.jsx(RN,{sessionStats:M,onSessionStatsChange:V})})]}),f.jsx(IN,{uid:e,userWords:s,usePreset:u,isOpen:y,onClose:()=>T(!1)}),f.jsx("div",{style:{display:c?"flex":"none"},children:f.jsx(kN,{uid:e,onClose:()=>h(!1)})}),v&&f.jsx(TN,{onClose:()=>_(!1),onApply:ee,onReset:Y,onResetStats:$e}),g&&f.jsx(PN,{onClose:()=>p(!1)}),f.jsx(Ra,{isOpen:m,onClose:()=>w(!1),userEmail:Ta(),onLogout:Ee,onResetStats:$e}),f.jsx("footer",{className:"version",children:"v3.0.0"})]}):f.jsxs("div",{className:"App",children:[f.jsxs("div",{className:"app-header",children:[f.jsx("h1",{className:"app-title",children:t("title")}),f.jsx("button",{className:"settings-icon-btn",onClick:()=>w(!0),children:f.jsx("img",{src:Pa,alt:"Menu",className:"menu-icon"})})]}),f.jsx(AN,{onAuthenticated:n}),f.jsx(Ra,{isOpen:m,onClose:()=>w(!1),userEmail:Ta(),onLogout:Ee})]}):f.jsxs("div",{className:"App",children:[f.jsxs("div",{className:"app-header",children:[f.jsx("h1",{className:"app-title",children:t("title")}),f.jsx("button",{className:"settings-icon-btn",onClick:()=>w(!0),children:f.jsx("img",{src:Pa,alt:"Menu",className:"menu-icon"})})]}),f.jsx("div",{className:"tab-content-wrapper",children:f.jsx("div",{className:"tab-content active",children:t("trainer")})}),f.jsx(Ra,{isOpen:m,onClose:()=>w(!1),userEmail:Ta(),onLogout:Ee})]})}function LN(){return f.jsx(vN,{children:f.jsx(ON,{})})}xa.createRoot(document.getElementById("root")).render(f.jsx(Yv.StrictMode,{children:f.jsx(LN,{})}));
