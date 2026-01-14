(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function $v(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cp={exports:{}},gl={},dp={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ci=Symbol.for("react.element"),Gv=Symbol.for("react.portal"),Kv=Symbol.for("react.fragment"),Qv=Symbol.for("react.strict_mode"),Yv=Symbol.for("react.profiler"),qv=Symbol.for("react.provider"),Jv=Symbol.for("react.context"),Xv=Symbol.for("react.forward_ref"),Zv=Symbol.for("react.suspense"),ey=Symbol.for("react.memo"),ty=Symbol.for("react.lazy"),zd=Symbol.iterator;function ny(t){return t===null||typeof t!="object"?null:(t=zd&&t[zd]||t["@@iterator"],typeof t=="function"?t:null)}var hp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fp=Object.assign,pp={};function Zr(t,e,n){this.props=t,this.context=e,this.refs=pp,this.updater=n||hp}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mp(){}mp.prototype=Zr.prototype;function Xu(t,e,n){this.props=t,this.context=e,this.refs=pp,this.updater=n||hp}var Zu=Xu.prototype=new mp;Zu.constructor=Xu;fp(Zu,Zr.prototype);Zu.isPureReactComponent=!0;var Vd=Array.isArray,gp=Object.prototype.hasOwnProperty,ec={current:null},_p={key:!0,ref:!0,__self:!0,__source:!0};function vp(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)gp.call(e,r)&&!_p.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];s.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Ci,type:t,key:i,ref:o,props:s,_owner:ec.current}}function ry(t,e){return{$$typeof:Ci,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ci}function sy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bd=/\/+/g;function Kl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sy(""+t.key):e.toString(36)}function io(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ci:case Gv:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Kl(o,0):r,Vd(s)?(n="",t!=null&&(n=t.replace(Bd,"$&/")+"/"),io(s,e,n,"",function(u){return u})):s!=null&&(tc(s)&&(s=ry(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Bd,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Vd(t))for(var l=0;l<t.length;l++){i=t[l];var a=r+Kl(i,l);o+=io(i,e,n,a,s)}else if(a=ny(t),typeof a=="function")for(t=a.call(t),l=0;!(i=t.next()).done;)i=i.value,a=r+Kl(i,l++),o+=io(i,e,n,a,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ui(t,e,n){if(t==null)return t;var r=[],s=0;return io(t,r,"","",function(i){return e.call(n,i,s++)}),r}function iy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var je={current:null},oo={transition:null},oy={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:oo,ReactCurrentOwner:ec};function yp(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Ui,forEach:function(t,e,n){Ui(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ui(t,function(){e++}),e},toArray:function(t){return Ui(t,function(e){return e})||[]},only:function(t){if(!tc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=Zr;H.Fragment=Kv;H.Profiler=Yv;H.PureComponent=Xu;H.StrictMode=Qv;H.Suspense=Zv;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oy;H.act=yp;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=fp({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=ec.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)gp.call(e,a)&&!_p.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ci,type:t.type,key:s,ref:i,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:Jv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qv,_context:t},t.Consumer=t};H.createElement=vp;H.createFactory=function(t){var e=vp.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:Xv,render:t}};H.isValidElement=tc;H.lazy=function(t){return{$$typeof:ty,_payload:{_status:-1,_result:t},_init:iy}};H.memo=function(t,e){return{$$typeof:ey,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=oo.transition;oo.transition={};try{t()}finally{oo.transition=e}};H.unstable_act=yp;H.useCallback=function(t,e){return je.current.useCallback(t,e)};H.useContext=function(t){return je.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return je.current.useDeferredValue(t)};H.useEffect=function(t,e){return je.current.useEffect(t,e)};H.useId=function(){return je.current.useId()};H.useImperativeHandle=function(t,e,n){return je.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return je.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return je.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return je.current.useMemo(t,e)};H.useReducer=function(t,e,n){return je.current.useReducer(t,e,n)};H.useRef=function(t){return je.current.useRef(t)};H.useState=function(t){return je.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return je.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return je.current.useTransition()};H.version="18.3.1";dp.exports=H;var T=dp.exports;const wp=$v(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly=T,ay=Symbol.for("react.element"),uy=Symbol.for("react.fragment"),cy=Object.prototype.hasOwnProperty,dy=ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hy={key:!0,ref:!0,__self:!0,__source:!0};function Sp(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)cy.call(e,r)&&!hy.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:ay,type:t,key:i,ref:o,props:s,_owner:dy.current}}gl.Fragment=uy;gl.jsx=Sp;gl.jsxs=Sp;cp.exports=gl;var f=cp.exports,ba={},Ep={exports:{}},et={},Cp={exports:{}},Ip={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,M){var b=A.length;A.push(M);e:for(;0<b;){var Q=b-1>>>1,se=A[Q];if(0<s(se,M))A[Q]=M,A[b]=se,b=Q;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var M=A[0],b=A.pop();if(b!==M){A[0]=b;e:for(var Q=0,se=A.length,Lt=se>>>1;Q<Lt;){var at=2*(Q+1)-1,dr=A[at],Dt=at+1,hr=A[Dt];if(0>s(dr,b))Dt<se&&0>s(hr,dr)?(A[Q]=hr,A[Dt]=b,Q=Dt):(A[Q]=dr,A[at]=b,Q=at);else if(Dt<se&&0>s(hr,b))A[Q]=hr,A[Dt]=b,Q=Dt;else break e}}return M}function s(A,M){var b=A.sortIndex-M.sortIndex;return b!==0?b:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,v=!1,_=!1,y=!1,N=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=A)r(u),M.sortIndex=M.expirationTime,e(a,M);else break;M=n(u)}}function w(A){if(y=!1,g(A),!_)if(n(a)!==null)_=!0,Ke(S);else{var M=n(u);M!==null&&Ee(w,M.startTime-A)}}function S(A,M){_=!1,y&&(y=!1,m(k),k=-1),v=!0;var b=h;try{for(g(M),c=n(a);c!==null&&(!(c.expirationTime>M)||A&&!O());){var Q=c.callback;if(typeof Q=="function"){c.callback=null,h=c.priorityLevel;var se=Q(c.expirationTime<=M);M=t.unstable_now(),typeof se=="function"?c.callback=se:c===n(a)&&r(a),g(M)}else r(a);c=n(a)}if(c!==null)var Lt=!0;else{var at=n(u);at!==null&&Ee(w,at.startTime-M),Lt=!1}return Lt}finally{c=null,h=b,v=!1}}var I=!1,P=null,k=-1,C=5,E=-1;function O(){return!(t.unstable_now()-E<C)}function D(){if(P!==null){var A=t.unstable_now();E=A;var M=!0;try{M=P(!0,A)}finally{M?V():(I=!1,P=null)}}else I=!1}var V;if(typeof p=="function")V=function(){p(D)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,$=G.port2;G.port1.onmessage=D,V=function(){$.postMessage(null)}}else V=function(){N(D,0)};function Ke(A){P=A,I||(I=!0,V())}function Ee(A,M){k=N(function(){A(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,Ke(S))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(A){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var b=h;h=M;try{return A()}finally{h=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var b=h;h=A;try{return M()}finally{h=b}},t.unstable_scheduleCallback=function(A,M,b){var Q=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?Q+b:Q):b=Q,A){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=b+se,A={id:d++,callback:M,priorityLevel:A,startTime:b,expirationTime:se,sortIndex:-1},b>Q?(A.sortIndex=b,e(u,A),n(a)===null&&A===n(u)&&(y?(m(k),k=-1):y=!0,Ee(w,b-Q))):(A.sortIndex=se,e(a,A),_||v||(_=!0,Ke(S))),A},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(A){var M=h;return function(){var b=h;h=M;try{return A.apply(this,arguments)}finally{h=b}}}})(Ip);Cp.exports=Ip;var fy=Cp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py=T,Ze=fy;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kp=new Set,$s={};function lr(t,e){Wr(t,e),Wr(t+"Capture",e)}function Wr(t,e){for($s[t]=e,t=0;t<e.length;t++)kp.add(e[t])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,my=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hd={},$d={};function gy(t){return ja.call($d,t)?!0:ja.call(Hd,t)?!1:my.test(t)?$d[t]=!0:(Hd[t]=!0,!1)}function _y(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vy(t,e,n,r){if(e===null||typeof e>"u"||_y(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Fe(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ke[t]=new Fe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ke[e]=new Fe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ke[t]=new Fe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ke[t]=new Fe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ke[t]=new Fe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ke[t]=new Fe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ke[t]=new Fe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ke[t]=new Fe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ke[t]=new Fe(t,5,!1,t.toLowerCase(),null,!1,!1)});var nc=/[\-:]([a-z])/g;function rc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nc,rc);ke[e]=new Fe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nc,rc);ke[e]=new Fe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nc,rc);ke[e]=new Fe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ke[t]=new Fe(t,1,!1,t.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ke[t]=new Fe(t,1,!1,t.toLowerCase(),null,!0,!0)});function sc(t,e,n,r){var s=ke.hasOwnProperty(e)?ke[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vy(e,n,s,r)&&(n=null),r||s===null?gy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Zt=py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wi=Symbol.for("react.element"),mr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),Fa=Symbol.for("react.profiler"),Tp=Symbol.for("react.provider"),Np=Symbol.for("react.context"),oc=Symbol.for("react.forward_ref"),Ua=Symbol.for("react.suspense"),Wa=Symbol.for("react.suspense_list"),lc=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),Rp=Symbol.for("react.offscreen"),Gd=Symbol.iterator;function hs(t){return t===null||typeof t!="object"?null:(t=Gd&&t[Gd]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,Ql;function Is(t){if(Ql===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ql=e&&e[1]||""}return`
`+Ql+t}var Yl=!1;function ql(t,e){if(!t||Yl)return"";Yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var a=`
`+s[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Yl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Is(t):""}function yy(t){switch(t.tag){case 5:return Is(t.type);case 16:return Is("Lazy");case 13:return Is("Suspense");case 19:return Is("SuspenseList");case 0:case 2:case 15:return t=ql(t.type,!1),t;case 11:return t=ql(t.type.render,!1),t;case 1:return t=ql(t.type,!0),t;default:return""}}function za(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gr:return"Fragment";case mr:return"Portal";case Fa:return"Profiler";case ic:return"StrictMode";case Ua:return"Suspense";case Wa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Np:return(t.displayName||"Context")+".Consumer";case Tp:return(t._context.displayName||"Context")+".Provider";case oc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lc:return e=t.displayName||null,e!==null?e:za(t.type)||"Memo";case sn:e=t._payload,t=t._init;try{return za(t(e))}catch{}}return null}function wy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return za(e);case 8:return e===ic?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Sy(t){var e=Pp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zi(t){t._valueTracker||(t._valueTracker=Sy(t))}function xp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Pp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Co(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Va(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Rn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ap(t,e){e=e.checked,e!=null&&sc(t,"checked",e,!1)}function Ba(t,e){Ap(t,e);var n=Rn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ha(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ha(t,e.type,Rn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ha(t,e,n){(e!=="number"||Co(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ks=Array.isArray;function Pr(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Rn(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function $a(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(ks(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rn(n)}}function Op(t,e){var n=Rn(e.value),r=Rn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Lp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ga(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Lp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vi,Dp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vi=Vi||document.createElement("div"),Vi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Gs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ey=["Webkit","ms","Moz","O"];Object.keys(xs).forEach(function(t){Ey.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xs[e]=xs[t]})});function Mp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xs.hasOwnProperty(t)&&xs[t]?(""+e).trim():e+"px"}function bp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Mp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var Cy=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ka(t,e){if(e){if(Cy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Qa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ya=null;function ac(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qa=null,xr=null,Ar=null;function Jd(t){if(t=Ti(t)){if(typeof qa!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Sl(e),qa(t.stateNode,t.type,e))}}function jp(t){xr?Ar?Ar.push(t):Ar=[t]:xr=t}function Fp(){if(xr){var t=xr,e=Ar;if(Ar=xr=null,Jd(t),e)for(t=0;t<e.length;t++)Jd(e[t])}}function Up(t,e){return t(e)}function Wp(){}var Jl=!1;function zp(t,e,n){if(Jl)return t(e,n);Jl=!0;try{return Up(t,e,n)}finally{Jl=!1,(xr!==null||Ar!==null)&&(Wp(),Fp())}}function Ks(t,e){var n=t.stateNode;if(n===null)return null;var r=Sl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var Ja=!1;if(Gt)try{var fs={};Object.defineProperty(fs,"passive",{get:function(){Ja=!0}}),window.addEventListener("test",fs,fs),window.removeEventListener("test",fs,fs)}catch{Ja=!1}function Iy(t,e,n,r,s,i,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var As=!1,Io=null,ko=!1,Xa=null,ky={onError:function(t){As=!0,Io=t}};function Ty(t,e,n,r,s,i,o,l,a){As=!1,Io=null,Iy.apply(ky,arguments)}function Ny(t,e,n,r,s,i,o,l,a){if(Ty.apply(this,arguments),As){if(As){var u=Io;As=!1,Io=null}else throw Error(R(198));ko||(ko=!0,Xa=u)}}function ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Vp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xd(t){if(ar(t)!==t)throw Error(R(188))}function Ry(t){var e=t.alternate;if(!e){if(e=ar(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Xd(s),t;if(i===r)return Xd(s),e;i=i.sibling}throw Error(R(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function Bp(t){return t=Ry(t),t!==null?Hp(t):null}function Hp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hp(t);if(e!==null)return e;t=t.sibling}return null}var $p=Ze.unstable_scheduleCallback,Zd=Ze.unstable_cancelCallback,Py=Ze.unstable_shouldYield,xy=Ze.unstable_requestPaint,de=Ze.unstable_now,Ay=Ze.unstable_getCurrentPriorityLevel,uc=Ze.unstable_ImmediatePriority,Gp=Ze.unstable_UserBlockingPriority,To=Ze.unstable_NormalPriority,Oy=Ze.unstable_LowPriority,Kp=Ze.unstable_IdlePriority,_l=null,Rt=null;function Ly(t){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(_l,t,void 0,(t.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:by,Dy=Math.log,My=Math.LN2;function by(t){return t>>>=0,t===0?32:31-(Dy(t)/My|0)|0}var Bi=64,Hi=4194304;function Ts(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function No(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Ts(l):(i&=o,i!==0&&(r=Ts(i)))}else o=n&~s,o!==0?r=Ts(o):i!==0&&(r=Ts(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-gt(e),s=1<<n,r|=t[n],e&=~s;return r}function jy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-gt(i),l=1<<o,a=s[o];a===-1?(!(l&n)||l&r)&&(s[o]=jy(l,e)):a<=e&&(t.expiredLanes|=l),i&=~l}}function Za(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qp(){var t=Bi;return Bi<<=1,!(Bi&4194240)&&(Bi=64),t}function Xl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ii(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gt(e),t[e]=n}function Uy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-gt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function cc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-gt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var q=0;function Yp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var qp,dc,Jp,Xp,Zp,eu=!1,$i=[],mn=null,gn=null,_n=null,Qs=new Map,Ys=new Map,ln=[],Wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eh(t,e){switch(t){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":Qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ys.delete(e.pointerId)}}function ps(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ti(e),e!==null&&dc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function zy(t,e,n,r,s){switch(e){case"focusin":return mn=ps(mn,t,e,n,r,s),!0;case"dragenter":return gn=ps(gn,t,e,n,r,s),!0;case"mouseover":return _n=ps(_n,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Qs.set(i,ps(Qs.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Ys.set(i,ps(Ys.get(i)||null,t,e,n,r,s)),!0}return!1}function em(t){var e=Bn(t.target);if(e!==null){var n=ar(e);if(n!==null){if(e=n.tag,e===13){if(e=Vp(n),e!==null){t.blockedOn=e,Zp(t.priority,function(){Jp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ya=r,n.target.dispatchEvent(r),Ya=null}else return e=Ti(n),e!==null&&dc(e),t.blockedOn=n,!1;e.shift()}return!0}function th(t,e,n){lo(t)&&n.delete(e)}function Vy(){eu=!1,mn!==null&&lo(mn)&&(mn=null),gn!==null&&lo(gn)&&(gn=null),_n!==null&&lo(_n)&&(_n=null),Qs.forEach(th),Ys.forEach(th)}function ms(t,e){t.blockedOn===e&&(t.blockedOn=null,eu||(eu=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,Vy)))}function qs(t){function e(s){return ms(s,t)}if(0<$i.length){ms($i[0],t);for(var n=1;n<$i.length;n++){var r=$i[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mn!==null&&ms(mn,t),gn!==null&&ms(gn,t),_n!==null&&ms(_n,t),Qs.forEach(e),Ys.forEach(e),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)em(n),n.blockedOn===null&&ln.shift()}var Or=Zt.ReactCurrentBatchConfig,Ro=!0;function By(t,e,n,r){var s=q,i=Or.transition;Or.transition=null;try{q=1,hc(t,e,n,r)}finally{q=s,Or.transition=i}}function Hy(t,e,n,r){var s=q,i=Or.transition;Or.transition=null;try{q=4,hc(t,e,n,r)}finally{q=s,Or.transition=i}}function hc(t,e,n,r){if(Ro){var s=tu(t,e,n,r);if(s===null)aa(t,e,r,Po,n),eh(t,r);else if(zy(s,t,e,n,r))r.stopPropagation();else if(eh(t,r),e&4&&-1<Wy.indexOf(t)){for(;s!==null;){var i=Ti(s);if(i!==null&&qp(i),i=tu(t,e,n,r),i===null&&aa(t,e,r,Po,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else aa(t,e,r,null,n)}}var Po=null;function tu(t,e,n,r){if(Po=null,t=ac(r),t=Bn(t),t!==null)if(e=ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Vp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Po=t,null}function tm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ay()){case uc:return 1;case Gp:return 4;case To:case Oy:return 16;case Kp:return 536870912;default:return 16}default:return 16}}var fn=null,fc=null,ao=null;function nm(){if(ao)return ao;var t,e=fc,n=e.length,r,s="value"in fn?fn.value:fn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return ao=s.slice(t,1<r?1-r:void 0)}function uo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gi(){return!0}function nh(){return!1}function tt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Gi:nh,this.isPropagationStopped=nh,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),e}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=tt(es),ki=ae({},es,{view:0,detail:0}),$y=tt(ki),Zl,ea,gs,vl=ae({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gs&&(gs&&t.type==="mousemove"?(Zl=t.screenX-gs.screenX,ea=t.screenY-gs.screenY):ea=Zl=0,gs=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:ea}}),rh=tt(vl),Gy=ae({},vl,{dataTransfer:0}),Ky=tt(Gy),Qy=ae({},ki,{relatedTarget:0}),ta=tt(Qy),Yy=ae({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),qy=tt(Yy),Jy=ae({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xy=tt(Jy),Zy=ae({},es,{data:0}),sh=tt(Zy),ew={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nw[t])?!!e[t]:!1}function mc(){return rw}var sw=ae({},ki,{key:function(t){if(t.key){var e=ew[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(t){return t.type==="keypress"?uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iw=tt(sw),ow=ae({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ih=tt(ow),lw=ae({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),aw=tt(lw),uw=ae({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),cw=tt(uw),dw=ae({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hw=tt(dw),fw=[9,13,27,32],gc=Gt&&"CompositionEvent"in window,Os=null;Gt&&"documentMode"in document&&(Os=document.documentMode);var pw=Gt&&"TextEvent"in window&&!Os,rm=Gt&&(!gc||Os&&8<Os&&11>=Os),oh=" ",lh=!1;function sm(t,e){switch(t){case"keyup":return fw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _r=!1;function mw(t,e){switch(t){case"compositionend":return im(e);case"keypress":return e.which!==32?null:(lh=!0,oh);case"textInput":return t=e.data,t===oh&&lh?null:t;default:return null}}function gw(t,e){if(_r)return t==="compositionend"||!gc&&sm(t,e)?(t=nm(),ao=fc=fn=null,_r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rm&&e.locale!=="ko"?null:e.data;default:return null}}var _w={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_w[t.type]:e==="textarea"}function om(t,e,n,r){jp(r),e=xo(e,"onChange"),0<e.length&&(n=new pc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ls=null,Js=null;function vw(t){_m(t,0)}function yl(t){var e=wr(t);if(xp(e))return t}function yw(t,e){if(t==="change")return e}var lm=!1;if(Gt){var na;if(Gt){var ra="oninput"in document;if(!ra){var uh=document.createElement("div");uh.setAttribute("oninput","return;"),ra=typeof uh.oninput=="function"}na=ra}else na=!1;lm=na&&(!document.documentMode||9<document.documentMode)}function ch(){Ls&&(Ls.detachEvent("onpropertychange",am),Js=Ls=null)}function am(t){if(t.propertyName==="value"&&yl(Js)){var e=[];om(e,Js,t,ac(t)),zp(vw,e)}}function ww(t,e,n){t==="focusin"?(ch(),Ls=e,Js=n,Ls.attachEvent("onpropertychange",am)):t==="focusout"&&ch()}function Sw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(Js)}function Ew(t,e){if(t==="click")return yl(e)}function Cw(t,e){if(t==="input"||t==="change")return yl(e)}function Iw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yt=typeof Object.is=="function"?Object.is:Iw;function Xs(t,e){if(yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!ja.call(e,s)||!yt(t[s],e[s]))return!1}return!0}function dh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hh(t,e){var n=dh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dh(n)}}function um(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?um(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cm(){for(var t=window,e=Co();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Co(t.document)}return e}function _c(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kw(t){var e=cm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&um(n.ownerDocument.documentElement,n)){if(r!==null&&_c(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=hh(n,i);var o=hh(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Tw=Gt&&"documentMode"in document&&11>=document.documentMode,vr=null,nu=null,Ds=null,ru=!1;function fh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ru||vr==null||vr!==Co(r)||(r=vr,"selectionStart"in r&&_c(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ds&&Xs(Ds,r)||(Ds=r,r=xo(nu,"onSelect"),0<r.length&&(e=new pc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vr)))}function Ki(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var yr={animationend:Ki("Animation","AnimationEnd"),animationiteration:Ki("Animation","AnimationIteration"),animationstart:Ki("Animation","AnimationStart"),transitionend:Ki("Transition","TransitionEnd")},sa={},dm={};Gt&&(dm=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function wl(t){if(sa[t])return sa[t];if(!yr[t])return t;var e=yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dm)return sa[t]=e[n];return t}var hm=wl("animationend"),fm=wl("animationiteration"),pm=wl("animationstart"),mm=wl("transitionend"),gm=new Map,ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(t,e){gm.set(t,e),lr(e,[t])}for(var ia=0;ia<ph.length;ia++){var oa=ph[ia],Nw=oa.toLowerCase(),Rw=oa[0].toUpperCase()+oa.slice(1);Ln(Nw,"on"+Rw)}Ln(hm,"onAnimationEnd");Ln(fm,"onAnimationIteration");Ln(pm,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(mm,"onTransitionEnd");Wr("onMouseEnter",["mouseout","mouseover"]);Wr("onMouseLeave",["mouseout","mouseover"]);Wr("onPointerEnter",["pointerout","pointerover"]);Wr("onPointerLeave",["pointerout","pointerover"]);lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ns));function mh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ny(r,e,void 0,t),t.currentTarget=null}function _m(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==i&&s.isPropagationStopped())break e;mh(s,l,u),i=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==i&&s.isPropagationStopped())break e;mh(s,l,u),i=a}}}if(ko)throw t=Xa,ko=!1,Xa=null,t}function te(t,e){var n=e[au];n===void 0&&(n=e[au]=new Set);var r=t+"__bubble";n.has(r)||(vm(e,t,2,!1),n.add(r))}function la(t,e,n){var r=0;e&&(r|=4),vm(n,t,r,e)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function Zs(t){if(!t[Qi]){t[Qi]=!0,kp.forEach(function(n){n!=="selectionchange"&&(Pw.has(n)||la(n,!1,t),la(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qi]||(e[Qi]=!0,la("selectionchange",!1,e))}}function vm(t,e,n,r){switch(tm(e)){case 1:var s=By;break;case 4:s=Hy;break;default:s=hc}n=s.bind(null,e,n,t),s=void 0,!Ja||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function aa(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===s||a.nodeType===8&&a.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Bn(l),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}l=l.parentNode}}r=r.return}zp(function(){var u=i,d=ac(n),c=[];e:{var h=gm.get(t);if(h!==void 0){var v=pc,_=t;switch(t){case"keypress":if(uo(n)===0)break e;case"keydown":case"keyup":v=iw;break;case"focusin":_="focus",v=ta;break;case"focusout":_="blur",v=ta;break;case"beforeblur":case"afterblur":v=ta;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Ky;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=aw;break;case hm:case fm:case pm:v=qy;break;case mm:v=cw;break;case"scroll":v=$y;break;case"wheel":v=hw;break;case"copy":case"cut":case"paste":v=Xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ih}var y=(e&4)!==0,N=!y&&t==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var p=u,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Ks(p,m),w!=null&&y.push(ei(p,w,g)))),N)break;p=p.return}0<y.length&&(h=new v(h,_,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==Ya&&(_=n.relatedTarget||n.fromElement)&&(Bn(_)||_[Kt]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=u,_=_?Bn(_):null,_!==null&&(N=ar(_),_!==N||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(y=rh,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=ih,w="onPointerLeave",m="onPointerEnter",p="pointer"),N=v==null?h:wr(v),g=_==null?h:wr(_),h=new y(w,p+"leave",v,n,d),h.target=N,h.relatedTarget=g,w=null,Bn(d)===u&&(y=new y(m,p+"enter",_,n,d),y.target=g,y.relatedTarget=N,w=y),N=w,v&&_)t:{for(y=v,m=_,p=0,g=y;g;g=fr(g))p++;for(g=0,w=m;w;w=fr(w))g++;for(;0<p-g;)y=fr(y),p--;for(;0<g-p;)m=fr(m),g--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=fr(y),m=fr(m)}y=null}else y=null;v!==null&&gh(c,h,v,y,!1),_!==null&&N!==null&&gh(c,N,_,y,!0)}}e:{if(h=u?wr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var S=yw;else if(ah(h))if(lm)S=Cw;else{S=Sw;var I=ww}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Ew);if(S&&(S=S(t,u))){om(c,S,n,d);break e}I&&I(t,h,u),t==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&Ha(h,"number",h.value)}switch(I=u?wr(u):window,t){case"focusin":(ah(I)||I.contentEditable==="true")&&(vr=I,nu=u,Ds=null);break;case"focusout":Ds=nu=vr=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,fh(c,n,d);break;case"selectionchange":if(Tw)break;case"keydown":case"keyup":fh(c,n,d)}var P;if(gc)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else _r?sm(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(rm&&n.locale!=="ko"&&(_r||k!=="onCompositionStart"?k==="onCompositionEnd"&&_r&&(P=nm()):(fn=d,fc="value"in fn?fn.value:fn.textContent,_r=!0)),I=xo(u,k),0<I.length&&(k=new sh(k,t,null,n,d),c.push({event:k,listeners:I}),P?k.data=P:(P=im(n),P!==null&&(k.data=P)))),(P=pw?mw(t,n):gw(t,n))&&(u=xo(u,"onBeforeInput"),0<u.length&&(d=new sh("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=P))}_m(c,e)})}function ei(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xo(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Ks(t,n),i!=null&&r.unshift(ei(t,i,s)),i=Ks(t,e),i!=null&&r.push(ei(t,i,s))),t=t.return}return r}function fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gh(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,s?(a=Ks(n,i),a!=null&&o.unshift(ei(n,a,l))):s||(a=Ks(n,i),a!=null&&o.push(ei(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xw=/\r\n?/g,Aw=/\u0000|\uFFFD/g;function _h(t){return(typeof t=="string"?t:""+t).replace(xw,`
`).replace(Aw,"")}function Yi(t,e,n){if(e=_h(e),_h(t)!==e&&n)throw Error(R(425))}function Ao(){}var su=null,iu=null;function ou(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lu=typeof setTimeout=="function"?setTimeout:void 0,Ow=typeof clearTimeout=="function"?clearTimeout:void 0,vh=typeof Promise=="function"?Promise:void 0,Lw=typeof queueMicrotask=="function"?queueMicrotask:typeof vh<"u"?function(t){return vh.resolve(null).then(t).catch(Dw)}:lu;function Dw(t){setTimeout(function(){throw t})}function ua(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),qs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);qs(e)}function vn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),Tt="__reactFiber$"+ts,ti="__reactProps$"+ts,Kt="__reactContainer$"+ts,au="__reactEvents$"+ts,Mw="__reactListeners$"+ts,bw="__reactHandles$"+ts;function Bn(t){var e=t[Tt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Kt]||n[Tt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yh(t);t!==null;){if(n=t[Tt])return n;t=yh(t)}return e}t=n,n=t.parentNode}return null}function Ti(t){return t=t[Tt]||t[Kt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Sl(t){return t[ti]||null}var uu=[],Sr=-1;function Dn(t){return{current:t}}function re(t){0>Sr||(t.current=uu[Sr],uu[Sr]=null,Sr--)}function ee(t,e){Sr++,uu[Sr]=t.current,t.current=e}var Pn={},xe=Dn(Pn),Ve=Dn(!1),qn=Pn;function zr(t,e){var n=t.type.contextTypes;if(!n)return Pn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Be(t){return t=t.childContextTypes,t!=null}function Oo(){re(Ve),re(xe)}function wh(t,e,n){if(xe.current!==Pn)throw Error(R(168));ee(xe,e),ee(Ve,n)}function ym(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(R(108,wy(t)||"Unknown",s));return ae({},n,r)}function Lo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pn,qn=xe.current,ee(xe,t),ee(Ve,Ve.current),!0}function Sh(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=ym(t,e,qn),r.__reactInternalMemoizedMergedChildContext=t,re(Ve),re(xe),ee(xe,t)):re(Ve),ee(Ve,n)}var bt=null,El=!1,ca=!1;function wm(t){bt===null?bt=[t]:bt.push(t)}function jw(t){El=!0,wm(t)}function Mn(){if(!ca&&bt!==null){ca=!0;var t=0,e=q;try{var n=bt;for(q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bt=null,El=!1}catch(s){throw bt!==null&&(bt=bt.slice(t+1)),$p(uc,Mn),s}finally{q=e,ca=!1}}return null}var Er=[],Cr=0,Do=null,Mo=0,nt=[],rt=0,Jn=null,jt=1,Ft="";function Un(t,e){Er[Cr++]=Mo,Er[Cr++]=Do,Do=t,Mo=e}function Sm(t,e,n){nt[rt++]=jt,nt[rt++]=Ft,nt[rt++]=Jn,Jn=t;var r=jt;t=Ft;var s=32-gt(r)-1;r&=~(1<<s),n+=1;var i=32-gt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,jt=1<<32-gt(e)+s|n<<s|r,Ft=i+t}else jt=1<<i|n<<s|r,Ft=t}function vc(t){t.return!==null&&(Un(t,1),Sm(t,1,0))}function yc(t){for(;t===Do;)Do=Er[--Cr],Er[Cr]=null,Mo=Er[--Cr],Er[Cr]=null;for(;t===Jn;)Jn=nt[--rt],nt[rt]=null,Ft=nt[--rt],nt[rt]=null,jt=nt[--rt],nt[rt]=null}var Xe=null,Ye=null,ie=!1,ht=null;function Em(t,e){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Eh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xe=t,Ye=vn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xe=t,Ye=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jn!==null?{id:jt,overflow:Ft}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xe=t,Ye=null,!0):!1;default:return!1}}function cu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function du(t){if(ie){var e=Ye;if(e){var n=e;if(!Eh(t,e)){if(cu(t))throw Error(R(418));e=vn(n.nextSibling);var r=Xe;e&&Eh(t,e)?Em(r,n):(t.flags=t.flags&-4097|2,ie=!1,Xe=t)}}else{if(cu(t))throw Error(R(418));t.flags=t.flags&-4097|2,ie=!1,Xe=t}}}function Ch(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xe=t}function qi(t){if(t!==Xe)return!1;if(!ie)return Ch(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ou(t.type,t.memoizedProps)),e&&(e=Ye)){if(cu(t))throw Cm(),Error(R(418));for(;e;)Em(t,e),e=vn(e.nextSibling)}if(Ch(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ye=vn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ye=null}}else Ye=Xe?vn(t.stateNode.nextSibling):null;return!0}function Cm(){for(var t=Ye;t;)t=vn(t.nextSibling)}function Vr(){Ye=Xe=null,ie=!1}function wc(t){ht===null?ht=[t]:ht.push(t)}var Fw=Zt.ReactCurrentBatchConfig;function _s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function Ji(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ih(t){var e=t._init;return e(t._payload)}function Im(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function s(m,p){return m=En(m,p),m.index=0,m.sibling=null,m}function i(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,w){return p===null||p.tag!==6?(p=_a(g,m.mode,w),p.return=m,p):(p=s(p,g),p.return=m,p)}function a(m,p,g,w){var S=g.type;return S===gr?d(m,p,g.props.children,w,g.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===sn&&Ih(S)===p.type)?(w=s(p,g.props),w.ref=_s(m,p,g),w.return=m,w):(w=_o(g.type,g.key,g.props,null,m.mode,w),w.ref=_s(m,p,g),w.return=m,w)}function u(m,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=va(g,m.mode,w),p.return=m,p):(p=s(p,g.children||[]),p.return=m,p)}function d(m,p,g,w,S){return p===null||p.tag!==7?(p=Yn(g,m.mode,w,S),p.return=m,p):(p=s(p,g),p.return=m,p)}function c(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=_a(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Wi:return g=_o(p.type,p.key,p.props,null,m.mode,g),g.ref=_s(m,null,p),g.return=m,g;case mr:return p=va(p,m.mode,g),p.return=m,p;case sn:var w=p._init;return c(m,w(p._payload),g)}if(ks(p)||hs(p))return p=Yn(p,m.mode,g,null),p.return=m,p;Ji(m,p)}return null}function h(m,p,g,w){var S=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:l(m,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wi:return g.key===S?a(m,p,g,w):null;case mr:return g.key===S?u(m,p,g,w):null;case sn:return S=g._init,h(m,p,S(g._payload),w)}if(ks(g)||hs(g))return S!==null?null:d(m,p,g,w,null);Ji(m,g)}return null}function v(m,p,g,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,l(p,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Wi:return m=m.get(w.key===null?g:w.key)||null,a(p,m,w,S);case mr:return m=m.get(w.key===null?g:w.key)||null,u(p,m,w,S);case sn:var I=w._init;return v(m,p,g,I(w._payload),S)}if(ks(w)||hs(w))return m=m.get(g)||null,d(p,m,w,S,null);Ji(p,w)}return null}function _(m,p,g,w){for(var S=null,I=null,P=p,k=p=0,C=null;P!==null&&k<g.length;k++){P.index>k?(C=P,P=null):C=P.sibling;var E=h(m,P,g[k],w);if(E===null){P===null&&(P=C);break}t&&P&&E.alternate===null&&e(m,P),p=i(E,p,k),I===null?S=E:I.sibling=E,I=E,P=C}if(k===g.length)return n(m,P),ie&&Un(m,k),S;if(P===null){for(;k<g.length;k++)P=c(m,g[k],w),P!==null&&(p=i(P,p,k),I===null?S=P:I.sibling=P,I=P);return ie&&Un(m,k),S}for(P=r(m,P);k<g.length;k++)C=v(P,m,k,g[k],w),C!==null&&(t&&C.alternate!==null&&P.delete(C.key===null?k:C.key),p=i(C,p,k),I===null?S=C:I.sibling=C,I=C);return t&&P.forEach(function(O){return e(m,O)}),ie&&Un(m,k),S}function y(m,p,g,w){var S=hs(g);if(typeof S!="function")throw Error(R(150));if(g=S.call(g),g==null)throw Error(R(151));for(var I=S=null,P=p,k=p=0,C=null,E=g.next();P!==null&&!E.done;k++,E=g.next()){P.index>k?(C=P,P=null):C=P.sibling;var O=h(m,P,E.value,w);if(O===null){P===null&&(P=C);break}t&&P&&O.alternate===null&&e(m,P),p=i(O,p,k),I===null?S=O:I.sibling=O,I=O,P=C}if(E.done)return n(m,P),ie&&Un(m,k),S;if(P===null){for(;!E.done;k++,E=g.next())E=c(m,E.value,w),E!==null&&(p=i(E,p,k),I===null?S=E:I.sibling=E,I=E);return ie&&Un(m,k),S}for(P=r(m,P);!E.done;k++,E=g.next())E=v(P,m,k,E.value,w),E!==null&&(t&&E.alternate!==null&&P.delete(E.key===null?k:E.key),p=i(E,p,k),I===null?S=E:I.sibling=E,I=E);return t&&P.forEach(function(D){return e(m,D)}),ie&&Un(m,k),S}function N(m,p,g,w){if(typeof g=="object"&&g!==null&&g.type===gr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Wi:e:{for(var S=g.key,I=p;I!==null;){if(I.key===S){if(S=g.type,S===gr){if(I.tag===7){n(m,I.sibling),p=s(I,g.props.children),p.return=m,m=p;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===sn&&Ih(S)===I.type){n(m,I.sibling),p=s(I,g.props),p.ref=_s(m,I,g),p.return=m,m=p;break e}n(m,I);break}else e(m,I);I=I.sibling}g.type===gr?(p=Yn(g.props.children,m.mode,w,g.key),p.return=m,m=p):(w=_o(g.type,g.key,g.props,null,m.mode,w),w.ref=_s(m,p,g),w.return=m,m=w)}return o(m);case mr:e:{for(I=g.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=s(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=va(g,m.mode,w),p.return=m,m=p}return o(m);case sn:return I=g._init,N(m,p,I(g._payload),w)}if(ks(g))return _(m,p,g,w);if(hs(g))return y(m,p,g,w);Ji(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=s(p,g),p.return=m,m=p):(n(m,p),p=_a(g,m.mode,w),p.return=m,m=p),o(m)):n(m,p)}return N}var Br=Im(!0),km=Im(!1),bo=Dn(null),jo=null,Ir=null,Sc=null;function Ec(){Sc=Ir=jo=null}function Cc(t){var e=bo.current;re(bo),t._currentValue=e}function hu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Lr(t,e){jo=t,Sc=Ir=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(We=!0),t.firstContext=null)}function ot(t){var e=t._currentValue;if(Sc!==t)if(t={context:t,memoizedValue:e,next:null},Ir===null){if(jo===null)throw Error(R(308));Ir=t,jo.dependencies={lanes:0,firstContext:t}}else Ir=Ir.next=t;return e}var Hn=null;function Ic(t){Hn===null?Hn=[t]:Hn.push(t)}function Tm(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Ic(e)):(n.next=s.next,s.next=n),e.interleaved=n,Qt(t,r)}function Qt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var on=!1;function kc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Qt(t,n)}return s=r.interleaved,s===null?(e.next=e,Ic(r)):(e.next=s.next,s.next=e),r.interleaved=e,Qt(t,n)}function co(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cc(t,n)}}function kh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fo(t,e,n,r){var s=t.updateQueue;on=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?i=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(i!==null){var c=s.baseState;o=0,d=u=a=null,l=i;do{var h=l.lane,v=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,y=l;switch(h=e,v=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){c=_.call(v,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(v,c,h):_,h==null)break e;c=ae({},c,h);break e;case 2:on=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=s.effects,h===null?s.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,a=c):d=d.next=v,o|=h;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;h=l,l=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(!0);if(d===null&&(a=c),s.baseState=a,s.firstBaseUpdate=u,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Zn|=o,t.lanes=o,t.memoizedState=c}}function Th(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(R(191,s));s.call(r)}}}var Ni={},Pt=Dn(Ni),ni=Dn(Ni),ri=Dn(Ni);function $n(t){if(t===Ni)throw Error(R(174));return t}function Tc(t,e){switch(ee(ri,e),ee(ni,t),ee(Pt,Ni),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ga(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ga(e,t)}re(Pt),ee(Pt,e)}function Hr(){re(Pt),re(ni),re(ri)}function Rm(t){$n(ri.current);var e=$n(Pt.current),n=Ga(e,t.type);e!==n&&(ee(ni,t),ee(Pt,n))}function Nc(t){ni.current===t&&(re(Pt),re(ni))}var oe=Dn(0);function Uo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var da=[];function Rc(){for(var t=0;t<da.length;t++)da[t]._workInProgressVersionPrimary=null;da.length=0}var ho=Zt.ReactCurrentDispatcher,ha=Zt.ReactCurrentBatchConfig,Xn=0,le=null,fe=null,ve=null,Wo=!1,Ms=!1,si=0,Uw=0;function Te(){throw Error(R(321))}function Pc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yt(t[n],e[n]))return!1;return!0}function xc(t,e,n,r,s,i){if(Xn=i,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ho.current=t===null||t.memoizedState===null?Bw:Hw,t=n(r,s),Ms){i=0;do{if(Ms=!1,si=0,25<=i)throw Error(R(301));i+=1,ve=fe=null,e.updateQueue=null,ho.current=$w,t=n(r,s)}while(Ms)}if(ho.current=zo,e=fe!==null&&fe.next!==null,Xn=0,ve=fe=le=null,Wo=!1,e)throw Error(R(300));return t}function Ac(){var t=si!==0;return si=0,t}function It(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?le.memoizedState=ve=t:ve=ve.next=t,ve}function lt(){if(fe===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=fe.next;var e=ve===null?le.memoizedState:ve.next;if(e!==null)ve=e,fe=t;else{if(t===null)throw Error(R(310));fe=t,t={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ve===null?le.memoizedState=ve=t:ve=ve.next=t}return ve}function ii(t,e){return typeof e=="function"?e(t):e}function fa(t){var e=lt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=fe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,a=null,u=i;do{var d=u.lane;if((Xn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,le.lanes|=d,Zn|=d}u=u.next}while(u!==null&&u!==i);a===null?o=r:a.next=l,yt(r,e.memoizedState)||(We=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,le.lanes|=i,Zn|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pa(t){var e=lt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);yt(i,e.memoizedState)||(We=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Pm(){}function xm(t,e){var n=le,r=lt(),s=e(),i=!yt(r.memoizedState,s);if(i&&(r.memoizedState=s,We=!0),r=r.queue,Oc(Lm.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,oi(9,Om.bind(null,n,r,s,e),void 0,null),Se===null)throw Error(R(349));Xn&30||Am(n,e,s)}return s}function Am(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Om(t,e,n,r){e.value=n,e.getSnapshot=r,Dm(e)&&Mm(t)}function Lm(t,e,n){return n(function(){Dm(e)&&Mm(t)})}function Dm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yt(t,n)}catch{return!0}}function Mm(t){var e=Qt(t,1);e!==null&&_t(e,t,1,-1)}function Nh(t){var e=It();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:t},e.queue=t,t=t.dispatch=Vw.bind(null,le,t),[e.memoizedState,t]}function oi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bm(){return lt().memoizedState}function fo(t,e,n,r){var s=It();le.flags|=t,s.memoizedState=oi(1|e,n,void 0,r===void 0?null:r)}function Cl(t,e,n,r){var s=lt();r=r===void 0?null:r;var i=void 0;if(fe!==null){var o=fe.memoizedState;if(i=o.destroy,r!==null&&Pc(r,o.deps)){s.memoizedState=oi(e,n,i,r);return}}le.flags|=t,s.memoizedState=oi(1|e,n,i,r)}function Rh(t,e){return fo(8390656,8,t,e)}function Oc(t,e){return Cl(2048,8,t,e)}function jm(t,e){return Cl(4,2,t,e)}function Fm(t,e){return Cl(4,4,t,e)}function Um(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wm(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4,4,Um.bind(null,e,t),n)}function Lc(){}function zm(t,e){var n=lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Vm(t,e){var n=lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Bm(t,e,n){return Xn&21?(yt(n,e)||(n=Qp(),le.lanes|=n,Zn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,We=!0),t.memoizedState=n)}function Ww(t,e){var n=q;q=n!==0&&4>n?n:4,t(!0);var r=ha.transition;ha.transition={};try{t(!1),e()}finally{q=n,ha.transition=r}}function Hm(){return lt().memoizedState}function zw(t,e,n){var r=Sn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$m(t))Gm(e,n);else if(n=Tm(t,e,n,r),n!==null){var s=Me();_t(n,t,r,s),Km(n,e,r)}}function Vw(t,e,n){var r=Sn(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($m(t))Gm(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,yt(l,o)){var a=e.interleaved;a===null?(s.next=s,Ic(e)):(s.next=a.next,a.next=s),e.interleaved=s;return}}catch{}finally{}n=Tm(t,e,s,r),n!==null&&(s=Me(),_t(n,t,r,s),Km(n,e,r))}}function $m(t){var e=t.alternate;return t===le||e!==null&&e===le}function Gm(t,e){Ms=Wo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Km(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cc(t,n)}}var zo={readContext:ot,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},Bw={readContext:ot,useCallback:function(t,e){return It().memoizedState=[t,e===void 0?null:e],t},useContext:ot,useEffect:Rh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fo(4194308,4,Um.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fo(4194308,4,t,e)},useInsertionEffect:function(t,e){return fo(4,2,t,e)},useMemo:function(t,e){var n=It();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=It();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=zw.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=It();return t={current:t},e.memoizedState=t},useState:Nh,useDebugValue:Lc,useDeferredValue:function(t){return It().memoizedState=t},useTransition:function(){var t=Nh(!1),e=t[0];return t=Ww.bind(null,t[1]),It().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=le,s=It();if(ie){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),Se===null)throw Error(R(349));Xn&30||Am(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Rh(Lm.bind(null,r,i,t),[t]),r.flags|=2048,oi(9,Om.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=It(),e=Se.identifierPrefix;if(ie){var n=Ft,r=jt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=si++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Uw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Hw={readContext:ot,useCallback:zm,useContext:ot,useEffect:Oc,useImperativeHandle:Wm,useInsertionEffect:jm,useLayoutEffect:Fm,useMemo:Vm,useReducer:fa,useRef:bm,useState:function(){return fa(ii)},useDebugValue:Lc,useDeferredValue:function(t){var e=lt();return Bm(e,fe.memoizedState,t)},useTransition:function(){var t=fa(ii)[0],e=lt().memoizedState;return[t,e]},useMutableSource:Pm,useSyncExternalStore:xm,useId:Hm,unstable_isNewReconciler:!1},$w={readContext:ot,useCallback:zm,useContext:ot,useEffect:Oc,useImperativeHandle:Wm,useInsertionEffect:jm,useLayoutEffect:Fm,useMemo:Vm,useReducer:pa,useRef:bm,useState:function(){return pa(ii)},useDebugValue:Lc,useDeferredValue:function(t){var e=lt();return fe===null?e.memoizedState=t:Bm(e,fe.memoizedState,t)},useTransition:function(){var t=pa(ii)[0],e=lt().memoizedState;return[t,e]},useMutableSource:Pm,useSyncExternalStore:xm,useId:Hm,unstable_isNewReconciler:!1};function ct(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Il={isMounted:function(t){return(t=t._reactInternals)?ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Me(),s=Sn(t),i=Bt(r,s);i.payload=e,n!=null&&(i.callback=n),e=yn(t,i,s),e!==null&&(_t(e,t,s,r),co(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Me(),s=Sn(t),i=Bt(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=yn(t,i,s),e!==null&&(_t(e,t,s,r),co(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Me(),r=Sn(t),s=Bt(n,r);s.tag=2,e!=null&&(s.callback=e),e=yn(t,s,r),e!==null&&(_t(e,t,r,n),co(e,t,r))}};function Ph(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Xs(n,r)||!Xs(s,i):!0}function Qm(t,e,n){var r=!1,s=Pn,i=e.contextType;return typeof i=="object"&&i!==null?i=ot(i):(s=Be(e)?qn:xe.current,r=e.contextTypes,i=(r=r!=null)?zr(t,s):Pn),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Il,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function xh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Il.enqueueReplaceState(e,e.state,null)}function pu(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},kc(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=ot(i):(i=Be(e)?qn:xe.current,s.context=zr(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(fu(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Il.enqueueReplaceState(s,s.state,null),Fo(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function $r(t,e){try{var n="",r=e;do n+=yy(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function ma(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Gw=typeof WeakMap=="function"?WeakMap:Map;function Ym(t,e,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bo||(Bo=!0,ku=r),mu(t,e)},n}function qm(t,e,n){n=Bt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){mu(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){mu(t,e),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ah(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Gw;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=oS.bind(null,t,e,n),e.then(t,t))}function Oh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lh(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bt(-1,1),e.tag=2,yn(n,e,1))),n.lanes|=1),t)}var Kw=Zt.ReactCurrentOwner,We=!1;function Le(t,e,n,r){e.child=t===null?km(e,null,n,r):Br(e,t.child,n,r)}function Dh(t,e,n,r,s){n=n.render;var i=e.ref;return Lr(e,s),r=xc(t,e,n,r,i,s),n=Ac(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Yt(t,e,s)):(ie&&n&&vc(e),e.flags|=1,Le(t,e,r,s),e.child)}function Mh(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!zc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Jm(t,e,i,r,s)):(t=_o(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Xs,n(o,r)&&t.ref===e.ref)return Yt(t,e,s)}return e.flags|=1,t=En(i,r),t.ref=e.ref,t.return=e,e.child=t}function Jm(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Xs(i,r)&&t.ref===e.ref)if(We=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(We=!0);else return e.lanes=t.lanes,Yt(t,e,s)}return gu(t,e,n,r,s)}function Xm(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Tr,Qe),Qe|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(Tr,Qe),Qe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ee(Tr,Qe),Qe|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ee(Tr,Qe),Qe|=r;return Le(t,e,s,n),e.child}function Zm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gu(t,e,n,r,s){var i=Be(n)?qn:xe.current;return i=zr(e,i),Lr(e,s),n=xc(t,e,n,r,i,s),r=Ac(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Yt(t,e,s)):(ie&&r&&vc(e),e.flags|=1,Le(t,e,n,s),e.child)}function bh(t,e,n,r,s){if(Be(n)){var i=!0;Lo(e)}else i=!1;if(Lr(e,s),e.stateNode===null)po(t,e),Qm(e,n,r),pu(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ot(u):(u=Be(n)?qn:xe.current,u=zr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&xh(e,o,r,u),on=!1;var h=e.memoizedState;o.state=h,Fo(e,r,o,s),a=e.memoizedState,l!==r||h!==a||Ve.current||on?(typeof d=="function"&&(fu(e,n,d,r),a=e.memoizedState),(l=on||Ph(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Nm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:ct(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=ot(a):(a=Be(n)?qn:xe.current,a=zr(e,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&xh(e,o,r,a),on=!1,h=e.memoizedState,o.state=h,Fo(e,r,o,s);var _=e.memoizedState;l!==c||h!==_||Ve.current||on?(typeof v=="function"&&(fu(e,n,v,r),_=e.memoizedState),(u=on||Ph(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return _u(t,e,n,r,i,s)}function _u(t,e,n,r,s,i){Zm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Sh(e,n,!1),Yt(t,e,i);r=e.stateNode,Kw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Br(e,t.child,null,i),e.child=Br(e,null,l,i)):Le(t,e,l,i),e.memoizedState=r.state,s&&Sh(e,n,!0),e.child}function eg(t){var e=t.stateNode;e.pendingContext?wh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wh(t,e.context,!1),Tc(t,e.containerInfo)}function jh(t,e,n,r,s){return Vr(),wc(s),e.flags|=256,Le(t,e,n,r),e.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function tg(t,e,n){var r=e.pendingProps,s=oe.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ee(oe,s&1),t===null)return du(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Nl(o,r,0,null),t=Yn(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=yu(n),e.memoizedState=vu,t):Dc(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Qw(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=En(s,a),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=En(l,i):(i=Yn(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?yu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=vu,r}return i=t.child,t=i.sibling,r=En(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dc(t,e){return e=Nl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xi(t,e,n,r){return r!==null&&wc(r),Br(e,t.child,null,n),t=Dc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qw(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=ma(Error(R(422))),Xi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Nl({mode:"visible",children:r.children},s,0,null),i=Yn(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Br(e,t.child,null,o),e.child.memoizedState=yu(o),e.memoizedState=vu,i);if(!(e.mode&1))return Xi(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(R(419)),r=ma(i,r,void 0),Xi(t,e,o,r)}if(l=(o&t.childLanes)!==0,We||l){if(r=Se,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Qt(t,s),_t(r,t,s,-1))}return Wc(),r=ma(Error(R(421))),Xi(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=lS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ye=vn(s.nextSibling),Xe=e,ie=!0,ht=null,t!==null&&(nt[rt++]=jt,nt[rt++]=Ft,nt[rt++]=Jn,jt=t.id,Ft=t.overflow,Jn=e),e=Dc(e,r.children),e.flags|=4096,e)}function Fh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hu(t.return,e,n)}function ga(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function ng(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Le(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fh(t,n,e);else if(t.tag===19)Fh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(oe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Uo(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),ga(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Uo(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}ga(e,!0,n,null,i);break;case"together":ga(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function po(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=En(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=En(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Yw(t,e,n){switch(e.tag){case 3:eg(e),Vr();break;case 5:Rm(e);break;case 1:Be(e.type)&&Lo(e);break;case 4:Tc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ee(bo,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?tg(t,e,n):(ee(oe,oe.current&1),t=Yt(t,e,n),t!==null?t.sibling:null);ee(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ng(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ee(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,Xm(t,e,n)}return Yt(t,e,n)}var rg,wu,sg,ig;rg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wu=function(){};sg=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,$n(Pt.current);var i=null;switch(n){case"input":s=Va(t,s),r=Va(t,r),i=[];break;case"select":s=ae({},s,{value:void 0}),r=ae({},r,{value:void 0}),i=[];break;case"textarea":s=$a(t,s),r=$a(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ao)}Ka(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($s.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($s.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&te("scroll",t),i||l===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};ig=function(t,e,n,r){n!==r&&(e.flags|=4)};function vs(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ne(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function qw(t,e,n){var r=e.pendingProps;switch(yc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(e),null;case 1:return Be(e.type)&&Oo(),Ne(e),null;case 3:return r=e.stateNode,Hr(),re(Ve),re(xe),Rc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ht!==null&&(Ru(ht),ht=null))),wu(t,e),Ne(e),null;case 5:Nc(e);var s=$n(ri.current);if(n=e.type,t!==null&&e.stateNode!=null)sg(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return Ne(e),null}if(t=$n(Pt.current),qi(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Tt]=e,r[ti]=i,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(s=0;s<Ns.length;s++)te(Ns[s],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Kd(r,i),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},te("invalid",r);break;case"textarea":Yd(r,i),te("invalid",r)}Ka(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Yi(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Yi(r.textContent,l,t),s=["children",""+l]):$s.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":zi(r),Qd(r,i,!0);break;case"textarea":zi(r),qd(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ao)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Lp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tt]=e,t[ti]=r,rg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qa(n,r),n){case"dialog":te("cancel",t),te("close",t),s=r;break;case"iframe":case"object":case"embed":te("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ns.length;s++)te(Ns[s],t);s=r;break;case"source":te("error",t),s=r;break;case"img":case"image":case"link":te("error",t),te("load",t),s=r;break;case"details":te("toggle",t),s=r;break;case"input":Kd(t,r),s=Va(t,r),te("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ae({},r,{value:void 0}),te("invalid",t);break;case"textarea":Yd(t,r),s=$a(t,r),te("invalid",t);break;default:s=r}Ka(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?bp(t,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Dp(t,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Gs(t,a):typeof a=="number"&&Gs(t,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&($s.hasOwnProperty(i)?a!=null&&i==="onScroll"&&te("scroll",t):a!=null&&sc(t,i,a,o))}switch(n){case"input":zi(t),Qd(t,r,!1);break;case"textarea":zi(t),qd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Rn(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Pr(t,!!r.multiple,i,!1):r.defaultValue!=null&&Pr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ne(e),null;case 6:if(t&&e.stateNode!=null)ig(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=$n(ri.current),$n(Pt.current),qi(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tt]=e,(i=r.nodeValue!==n)&&(t=Xe,t!==null))switch(t.tag){case 3:Yi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yi(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=e,e.stateNode=r}return Ne(e),null;case 13:if(re(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&Ye!==null&&e.mode&1&&!(e.flags&128))Cm(),Vr(),e.flags|=98560,i=!1;else if(i=qi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(R(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[Tt]=e}else Vr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ne(e),i=!1}else ht!==null&&(Ru(ht),ht=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?ge===0&&(ge=3):Wc())),e.updateQueue!==null&&(e.flags|=4),Ne(e),null);case 4:return Hr(),wu(t,e),t===null&&Zs(e.stateNode.containerInfo),Ne(e),null;case 10:return Cc(e.type._context),Ne(e),null;case 17:return Be(e.type)&&Oo(),Ne(e),null;case 19:if(re(oe),i=e.memoizedState,i===null)return Ne(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)vs(i,!1);else{if(ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Uo(t),o!==null){for(e.flags|=128,vs(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(oe,oe.current&1|2),e.child}t=t.sibling}i.tail!==null&&de()>Gr&&(e.flags|=128,r=!0,vs(i,!1),e.lanes=4194304)}else{if(!r)if(t=Uo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ie)return Ne(e),null}else 2*de()-i.renderingStartTime>Gr&&n!==1073741824&&(e.flags|=128,r=!0,vs(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=de(),e.sibling=null,n=oe.current,ee(oe,r?n&1|2:n&1),e):(Ne(e),null);case 22:case 23:return Uc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Qe&1073741824&&(Ne(e),e.subtreeFlags&6&&(e.flags|=8192)):Ne(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function Jw(t,e){switch(yc(e),e.tag){case 1:return Be(e.type)&&Oo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hr(),re(Ve),re(xe),Rc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nc(e),null;case 13:if(re(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));Vr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(oe),null;case 4:return Hr(),null;case 10:return Cc(e.type._context),null;case 22:case 23:return Uc(),null;case 24:return null;default:return null}}var Zi=!1,Re=!1,Xw=typeof WeakSet=="function"?WeakSet:Set,L=null;function kr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(t,e,r)}else n.current=null}function Su(t,e,n){try{n()}catch(r){ue(t,e,r)}}var Uh=!1;function Zw(t,e){if(su=Ro,t=cm(),_c(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var v;c!==n||s!==0&&c.nodeType!==3||(l=o+s),c!==i||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(v=c.firstChild)!==null;)h=c,c=v;for(;;){if(c===t)break t;if(h===n&&++u===s&&(l=o),h===i&&++d===r&&(a=o),(v=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=v}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(iu={focusedElem:t,selectionRange:n},Ro=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,N=_.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:ct(e.type,y),N);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){ue(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return _=Uh,Uh=!1,_}function bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Su(e,n,i)}s=s.next}while(s!==r)}}function kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Eu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function og(t){var e=t.alternate;e!==null&&(t.alternate=null,og(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tt],delete e[ti],delete e[au],delete e[Mw],delete e[bw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lg(t){return t.tag===5||t.tag===3||t.tag===4}function Wh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ao));else if(r!==4&&(t=t.child,t!==null))for(Cu(t,e,n),t=t.sibling;t!==null;)Cu(t,e,n),t=t.sibling}function Iu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Iu(t,e,n),t=t.sibling;t!==null;)Iu(t,e,n),t=t.sibling}var Ce=null,dt=!1;function nn(t,e,n){for(n=n.child;n!==null;)ag(t,e,n),n=n.sibling}function ag(t,e,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(_l,n)}catch{}switch(n.tag){case 5:Re||kr(n,e);case 6:var r=Ce,s=dt;Ce=null,nn(t,e,n),Ce=r,dt=s,Ce!==null&&(dt?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(dt?(t=Ce,n=n.stateNode,t.nodeType===8?ua(t.parentNode,n):t.nodeType===1&&ua(t,n),qs(t)):ua(Ce,n.stateNode));break;case 4:r=Ce,s=dt,Ce=n.stateNode.containerInfo,dt=!0,nn(t,e,n),Ce=r,dt=s;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Su(n,e,o),s=s.next}while(s!==r)}nn(t,e,n);break;case 1:if(!Re&&(kr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ue(n,e,l)}nn(t,e,n);break;case 21:nn(t,e,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,nn(t,e,n),Re=r):nn(t,e,n);break;default:nn(t,e,n)}}function zh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Xw),e.forEach(function(r){var s=aS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function ut(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ce=l.stateNode,dt=!1;break e;case 3:Ce=l.stateNode.containerInfo,dt=!0;break e;case 4:Ce=l.stateNode.containerInfo,dt=!0;break e}l=l.return}if(Ce===null)throw Error(R(160));ag(i,o,s),Ce=null,dt=!1;var a=s.alternate;a!==null&&(a.return=null),s.return=null}catch(u){ue(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ug(e,t),e=e.sibling}function ug(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ut(e,t),Ct(t),r&4){try{bs(3,t,t.return),kl(3,t)}catch(y){ue(t,t.return,y)}try{bs(5,t,t.return)}catch(y){ue(t,t.return,y)}}break;case 1:ut(e,t),Ct(t),r&512&&n!==null&&kr(n,n.return);break;case 5:if(ut(e,t),Ct(t),r&512&&n!==null&&kr(n,n.return),t.flags&32){var s=t.stateNode;try{Gs(s,"")}catch(y){ue(t,t.return,y)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ap(s,i),Qa(l,o);var u=Qa(l,i);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?bp(s,c):d==="dangerouslySetInnerHTML"?Dp(s,c):d==="children"?Gs(s,c):sc(s,d,c,u)}switch(l){case"input":Ba(s,i);break;case"textarea":Op(s,i);break;case"select":var h=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Pr(s,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?Pr(s,!!i.multiple,i.defaultValue,!0):Pr(s,!!i.multiple,i.multiple?[]:"",!1))}s[ti]=i}catch(y){ue(t,t.return,y)}}break;case 6:if(ut(e,t),Ct(t),r&4){if(t.stateNode===null)throw Error(R(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(y){ue(t,t.return,y)}}break;case 3:if(ut(e,t),Ct(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qs(e.containerInfo)}catch(y){ue(t,t.return,y)}break;case 4:ut(e,t),Ct(t);break;case 13:ut(e,t),Ct(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(jc=de())),r&4&&zh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Re=(u=Re)||d,ut(e,t),Re=u):ut(e,t),Ct(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(L=t,d=t.child;d!==null;){for(c=L=d;L!==null;){switch(h=L,v=h.child,h.tag){case 0:case 11:case 14:case 15:bs(4,h,h.return);break;case 1:kr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ue(r,n,y)}}break;case 5:kr(h,h.return);break;case 22:if(h.memoizedState!==null){Bh(c);continue}}v!==null?(v.return=h,L=v):Bh(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{s=c.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Mp("display",o))}catch(y){ue(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){ue(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:ut(e,t),Ct(t),r&4&&zh(t);break;case 21:break;default:ut(e,t),Ct(t)}}function Ct(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(lg(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Gs(s,""),r.flags&=-33);var i=Wh(t);Iu(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Wh(t);Cu(t,l,o);break;default:throw Error(R(161))}}catch(a){ue(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function eS(t,e,n){L=t,cg(t)}function cg(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var s=L,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Zi;if(!o){var l=s.alternate,a=l!==null&&l.memoizedState!==null||Re;l=Zi;var u=Re;if(Zi=o,(Re=a)&&!u)for(L=s;L!==null;)o=L,a=o.child,o.tag===22&&o.memoizedState!==null?Hh(s):a!==null?(a.return=o,L=a):Hh(s);for(;i!==null;)L=i,cg(i),i=i.sibling;L=s,Zi=l,Re=u}Vh(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,L=i):Vh(t)}}function Vh(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Re||kl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Re)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:ct(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Th(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Th(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&qs(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Re||e.flags&512&&Eu(e)}catch(h){ue(e,e.return,h)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function Bh(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function Hh(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kl(4,e)}catch(a){ue(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(a){ue(e,s,a)}}var i=e.return;try{Eu(e)}catch(a){ue(e,i,a)}break;case 5:var o=e.return;try{Eu(e)}catch(a){ue(e,o,a)}}}catch(a){ue(e,e.return,a)}if(e===t){L=null;break}var l=e.sibling;if(l!==null){l.return=e.return,L=l;break}L=e.return}}var tS=Math.ceil,Vo=Zt.ReactCurrentDispatcher,Mc=Zt.ReactCurrentOwner,it=Zt.ReactCurrentBatchConfig,K=0,Se=null,he=null,Ie=0,Qe=0,Tr=Dn(0),ge=0,li=null,Zn=0,Tl=0,bc=0,js=null,Ue=null,jc=0,Gr=1/0,Mt=null,Bo=!1,ku=null,wn=null,eo=!1,pn=null,Ho=0,Fs=0,Tu=null,mo=-1,go=0;function Me(){return K&6?de():mo!==-1?mo:mo=de()}function Sn(t){return t.mode&1?K&2&&Ie!==0?Ie&-Ie:Fw.transition!==null?(go===0&&(go=Qp()),go):(t=q,t!==0||(t=window.event,t=t===void 0?16:tm(t.type)),t):1}function _t(t,e,n,r){if(50<Fs)throw Fs=0,Tu=null,Error(R(185));Ii(t,n,r),(!(K&2)||t!==Se)&&(t===Se&&(!(K&2)&&(Tl|=n),ge===4&&an(t,Ie)),He(t,r),n===1&&K===0&&!(e.mode&1)&&(Gr=de()+500,El&&Mn()))}function He(t,e){var n=t.callbackNode;Fy(t,e);var r=No(t,t===Se?Ie:0);if(r===0)n!==null&&Zd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zd(n),e===1)t.tag===0?jw($h.bind(null,t)):wm($h.bind(null,t)),Lw(function(){!(K&6)&&Mn()}),n=null;else{switch(Yp(r)){case 1:n=uc;break;case 4:n=Gp;break;case 16:n=To;break;case 536870912:n=Kp;break;default:n=To}n=vg(n,dg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dg(t,e){if(mo=-1,go=0,K&6)throw Error(R(327));var n=t.callbackNode;if(Dr()&&t.callbackNode!==n)return null;var r=No(t,t===Se?Ie:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$o(t,r);else{e=r;var s=K;K|=2;var i=fg();(Se!==t||Ie!==e)&&(Mt=null,Gr=de()+500,Qn(t,e));do try{sS();break}catch(l){hg(t,l)}while(!0);Ec(),Vo.current=i,K=s,he!==null?e=0:(Se=null,Ie=0,e=ge)}if(e!==0){if(e===2&&(s=Za(t),s!==0&&(r=s,e=Nu(t,s))),e===1)throw n=li,Qn(t,0),an(t,r),He(t,de()),n;if(e===6)an(t,r);else{if(s=t.current.alternate,!(r&30)&&!nS(s)&&(e=$o(t,r),e===2&&(i=Za(t),i!==0&&(r=i,e=Nu(t,i))),e===1))throw n=li,Qn(t,0),an(t,r),He(t,de()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:Wn(t,Ue,Mt);break;case 3:if(an(t,r),(r&130023424)===r&&(e=jc+500-de(),10<e)){if(No(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Me(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=lu(Wn.bind(null,t,Ue,Mt),e);break}Wn(t,Ue,Mt);break;case 4:if(an(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-gt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tS(r/1960))-r,10<r){t.timeoutHandle=lu(Wn.bind(null,t,Ue,Mt),r);break}Wn(t,Ue,Mt);break;case 5:Wn(t,Ue,Mt);break;default:throw Error(R(329))}}}return He(t,de()),t.callbackNode===n?dg.bind(null,t):null}function Nu(t,e){var n=js;return t.current.memoizedState.isDehydrated&&(Qn(t,e).flags|=256),t=$o(t,e),t!==2&&(e=Ue,Ue=n,e!==null&&Ru(e)),t}function Ru(t){Ue===null?Ue=t:Ue.push.apply(Ue,t)}function nS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!yt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function an(t,e){for(e&=~bc,e&=~Tl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gt(e),r=1<<n;t[n]=-1,e&=~r}}function $h(t){if(K&6)throw Error(R(327));Dr();var e=No(t,0);if(!(e&1))return He(t,de()),null;var n=$o(t,e);if(t.tag!==0&&n===2){var r=Za(t);r!==0&&(e=r,n=Nu(t,r))}if(n===1)throw n=li,Qn(t,0),an(t,e),He(t,de()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wn(t,Ue,Mt),He(t,de()),null}function Fc(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(Gr=de()+500,El&&Mn())}}function er(t){pn!==null&&pn.tag===0&&!(K&6)&&Dr();var e=K;K|=1;var n=it.transition,r=q;try{if(it.transition=null,q=1,t)return t()}finally{q=r,it.transition=n,K=e,!(K&6)&&Mn()}}function Uc(){Qe=Tr.current,re(Tr)}function Qn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ow(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(yc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oo();break;case 3:Hr(),re(Ve),re(xe),Rc();break;case 5:Nc(r);break;case 4:Hr();break;case 13:re(oe);break;case 19:re(oe);break;case 10:Cc(r.type._context);break;case 22:case 23:Uc()}n=n.return}if(Se=t,he=t=En(t.current,null),Ie=Qe=e,ge=0,li=null,bc=Tl=Zn=0,Ue=js=null,Hn!==null){for(e=0;e<Hn.length;e++)if(n=Hn[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Hn=null}return t}function hg(t,e){do{var n=he;try{if(Ec(),ho.current=zo,Wo){for(var r=le.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Wo=!1}if(Xn=0,ve=fe=le=null,Ms=!1,si=0,Mc.current=null,n===null||n.return===null){ge=1,li=e,he=null;break}e:{var i=t,o=n.return,l=n,a=e;if(e=Ie,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Oh(o);if(v!==null){v.flags&=-257,Lh(v,o,l,i,e),v.mode&1&&Ah(i,u,e),e=v,a=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(a),e.updateQueue=y}else _.add(a);break e}else{if(!(e&1)){Ah(i,u,e),Wc();break e}a=Error(R(426))}}else if(ie&&l.mode&1){var N=Oh(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Lh(N,o,l,i,e),wc($r(a,l));break e}}i=a=$r(a,l),ge!==4&&(ge=2),js===null?js=[i]:js.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var m=Ym(i,a,e);kh(i,m);break e;case 1:l=a;var p=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(wn===null||!wn.has(g)))){i.flags|=65536,e&=-e,i.lanes|=e;var w=qm(i,l,e);kh(i,w);break e}}i=i.return}while(i!==null)}mg(n)}catch(S){e=S,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function fg(){var t=Vo.current;return Vo.current=zo,t===null?zo:t}function Wc(){(ge===0||ge===3||ge===2)&&(ge=4),Se===null||!(Zn&268435455)&&!(Tl&268435455)||an(Se,Ie)}function $o(t,e){var n=K;K|=2;var r=fg();(Se!==t||Ie!==e)&&(Mt=null,Qn(t,e));do try{rS();break}catch(s){hg(t,s)}while(!0);if(Ec(),K=n,Vo.current=r,he!==null)throw Error(R(261));return Se=null,Ie=0,ge}function rS(){for(;he!==null;)pg(he)}function sS(){for(;he!==null&&!Py();)pg(he)}function pg(t){var e=_g(t.alternate,t,Qe);t.memoizedProps=t.pendingProps,e===null?mg(t):he=e,Mc.current=null}function mg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Jw(n,e),n!==null){n.flags&=32767,he=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ge=6,he=null;return}}else if(n=qw(n,e,Qe),n!==null){he=n;return}if(e=e.sibling,e!==null){he=e;return}he=e=t}while(e!==null);ge===0&&(ge=5)}function Wn(t,e,n){var r=q,s=it.transition;try{it.transition=null,q=1,iS(t,e,n,r)}finally{it.transition=s,q=r}return null}function iS(t,e,n,r){do Dr();while(pn!==null);if(K&6)throw Error(R(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(Uy(t,i),t===Se&&(he=Se=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eo||(eo=!0,vg(To,function(){return Dr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=it.transition,it.transition=null;var o=q;q=1;var l=K;K|=4,Mc.current=null,Zw(t,n),ug(n,t),kw(iu),Ro=!!su,iu=su=null,t.current=n,eS(n),xy(),K=l,q=o,it.transition=i}else t.current=n;if(eo&&(eo=!1,pn=t,Ho=s),i=t.pendingLanes,i===0&&(wn=null),Ly(n.stateNode),He(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Bo)throw Bo=!1,t=ku,ku=null,t;return Ho&1&&t.tag!==0&&Dr(),i=t.pendingLanes,i&1?t===Tu?Fs++:(Fs=0,Tu=t):Fs=0,Mn(),null}function Dr(){if(pn!==null){var t=Yp(Ho),e=it.transition,n=q;try{if(it.transition=null,q=16>t?16:t,pn===null)var r=!1;else{if(t=pn,pn=null,Ho=0,K&6)throw Error(R(331));var s=K;for(K|=4,L=t.current;L!==null;){var i=L,o=i.child;if(L.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(L=u;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:bs(8,d,i)}var c=d.child;if(c!==null)c.return=d,L=c;else for(;L!==null;){d=L;var h=d.sibling,v=d.return;if(og(d),d===u){L=null;break}if(h!==null){h.return=v,L=h;break}L=v}}}var _=i.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var N=y.sibling;y.sibling=null,y=N}while(y!==null)}}L=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,L=o;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:bs(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,L=m;break e}L=i.return}}var p=t.current;for(L=p;L!==null;){o=L;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,L=g;else e:for(o=p;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:kl(9,l)}}catch(S){ue(l,l.return,S)}if(l===o){L=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,L=w;break e}L=l.return}}if(K=s,Mn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(_l,t)}catch{}r=!0}return r}finally{q=n,it.transition=e}}return!1}function Gh(t,e,n){e=$r(n,e),e=Ym(t,e,1),t=yn(t,e,1),e=Me(),t!==null&&(Ii(t,1,e),He(t,e))}function ue(t,e,n){if(t.tag===3)Gh(t,t,n);else for(;e!==null;){if(e.tag===3){Gh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){t=$r(n,t),t=qm(e,t,1),e=yn(e,t,1),t=Me(),e!==null&&(Ii(e,1,t),He(e,t));break}}e=e.return}}function oS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Me(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(Ie&n)===n&&(ge===4||ge===3&&(Ie&130023424)===Ie&&500>de()-jc?Qn(t,0):bc|=n),He(t,e)}function gg(t,e){e===0&&(t.mode&1?(e=Hi,Hi<<=1,!(Hi&130023424)&&(Hi=4194304)):e=1);var n=Me();t=Qt(t,e),t!==null&&(Ii(t,e,n),He(t,n))}function lS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gg(t,n)}function aS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),gg(t,n)}var _g;_g=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ve.current)We=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return We=!1,Yw(t,e,n);We=!!(t.flags&131072)}else We=!1,ie&&e.flags&1048576&&Sm(e,Mo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;po(t,e),t=e.pendingProps;var s=zr(e,xe.current);Lr(e,n),s=xc(null,e,r,t,s,n);var i=Ac();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Be(r)?(i=!0,Lo(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,kc(e),s.updater=Il,e.stateNode=s,s._reactInternals=e,pu(e,r,t,n),e=_u(null,e,r,!0,i,n)):(e.tag=0,ie&&i&&vc(e),Le(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(po(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=cS(r),t=ct(r,t),s){case 0:e=gu(null,e,r,t,n);break e;case 1:e=bh(null,e,r,t,n);break e;case 11:e=Dh(null,e,r,t,n);break e;case 14:e=Mh(null,e,r,ct(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ct(r,s),gu(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ct(r,s),bh(t,e,r,s,n);case 3:e:{if(eg(e),t===null)throw Error(R(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Nm(t,e),Fo(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=$r(Error(R(423)),e),e=jh(t,e,r,n,s);break e}else if(r!==s){s=$r(Error(R(424)),e),e=jh(t,e,r,n,s);break e}else for(Ye=vn(e.stateNode.containerInfo.firstChild),Xe=e,ie=!0,ht=null,n=km(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vr(),r===s){e=Yt(t,e,n);break e}Le(t,e,r,n)}e=e.child}return e;case 5:return Rm(e),t===null&&du(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,ou(r,s)?o=null:i!==null&&ou(r,i)&&(e.flags|=32),Zm(t,e),Le(t,e,o,n),e.child;case 6:return t===null&&du(e),null;case 13:return tg(t,e,n);case 4:return Tc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Br(e,null,r,n):Le(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ct(r,s),Dh(t,e,r,s,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ee(bo,r._currentValue),r._currentValue=o,i!==null)if(yt(i.value,o)){if(i.children===s.children&&!Ve.current){e=Yt(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Bt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),hu(i.return,n,e),l.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(R(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),hu(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Le(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Lr(e,n),s=ot(s),r=r(s),e.flags|=1,Le(t,e,r,n),e.child;case 14:return r=e.type,s=ct(r,e.pendingProps),s=ct(r.type,s),Mh(t,e,r,s,n);case 15:return Jm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ct(r,s),po(t,e),e.tag=1,Be(r)?(t=!0,Lo(e)):t=!1,Lr(e,n),Qm(e,r,s),pu(e,r,s,n),_u(null,e,r,!0,t,n);case 19:return ng(t,e,n);case 22:return Xm(t,e,n)}throw Error(R(156,e.tag))};function vg(t,e){return $p(t,e)}function uS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(t,e,n,r){return new uS(t,e,n,r)}function zc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cS(t){if(typeof t=="function")return zc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oc)return 11;if(t===lc)return 14}return 2}function En(t,e){var n=t.alternate;return n===null?(n=st(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _o(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")zc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gr:return Yn(n.children,s,i,e);case ic:o=8,s|=8;break;case Fa:return t=st(12,n,e,s|2),t.elementType=Fa,t.lanes=i,t;case Ua:return t=st(13,n,e,s),t.elementType=Ua,t.lanes=i,t;case Wa:return t=st(19,n,e,s),t.elementType=Wa,t.lanes=i,t;case Rp:return Nl(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tp:o=10;break e;case Np:o=9;break e;case oc:o=11;break e;case lc:o=14;break e;case sn:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=st(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Yn(t,e,n,r){return t=st(7,t,r,e),t.lanes=n,t}function Nl(t,e,n,r){return t=st(22,t,r,e),t.elementType=Rp,t.lanes=n,t.stateNode={isHidden:!1},t}function _a(t,e,n){return t=st(6,t,null,e),t.lanes=n,t}function va(t,e,n){return e=st(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Vc(t,e,n,r,s,i,o,l,a){return t=new dS(t,e,n,l,a),e===1?(e=1,i===!0&&(e|=8)):e=0,i=st(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(i),t}function hS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function yg(t){if(!t)return Pn;t=t._reactInternals;e:{if(ar(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(Be(n))return ym(t,n,e)}return e}function wg(t,e,n,r,s,i,o,l,a){return t=Vc(n,r,!0,t,s,i,o,l,a),t.context=yg(null),n=t.current,r=Me(),s=Sn(n),i=Bt(r,s),i.callback=e??null,yn(n,i,s),t.current.lanes=s,Ii(t,s,r),He(t,r),t}function Rl(t,e,n,r){var s=e.current,i=Me(),o=Sn(s);return n=yg(n),e.context===null?e.context=n:e.pendingContext=n,e=Bt(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=yn(s,e,o),t!==null&&(_t(t,s,o,i),co(t,s,o)),o}function Go(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bc(t,e){Kh(t,e),(t=t.alternate)&&Kh(t,e)}function fS(){return null}var Sg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hc(t){this._internalRoot=t}Pl.prototype.render=Hc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Rl(t,e,null,null)};Pl.prototype.unmount=Hc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;er(function(){Rl(null,t,null,null)}),e[Kt]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ln.length&&e!==0&&e<ln[n].priority;n++);ln.splice(n,0,t),n===0&&em(t)}};function $c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qh(){}function pS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=Go(o);i.call(u)}}var o=wg(e,r,t,0,null,!1,!1,"",Qh);return t._reactRootContainer=o,t[Kt]=o.current,Zs(t.nodeType===8?t.parentNode:t),er(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=Go(a);l.call(u)}}var a=Vc(t,0,!1,null,null,!1,!1,"",Qh);return t._reactRootContainer=a,t[Kt]=a.current,Zs(t.nodeType===8?t.parentNode:t),er(function(){Rl(e,a,n,r)}),a}function Al(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var a=Go(o);l.call(a)}}Rl(e,o,t,s)}else o=pS(n,e,t,s,r);return Go(o)}qp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ts(e.pendingLanes);n!==0&&(cc(e,n|1),He(e,de()),!(K&6)&&(Gr=de()+500,Mn()))}break;case 13:er(function(){var r=Qt(t,1);if(r!==null){var s=Me();_t(r,t,1,s)}}),Bc(t,1)}};dc=function(t){if(t.tag===13){var e=Qt(t,134217728);if(e!==null){var n=Me();_t(e,t,134217728,n)}Bc(t,134217728)}};Jp=function(t){if(t.tag===13){var e=Sn(t),n=Qt(t,e);if(n!==null){var r=Me();_t(n,t,e,r)}Bc(t,e)}};Xp=function(){return q};Zp=function(t,e){var n=q;try{return q=t,e()}finally{q=n}};qa=function(t,e,n){switch(e){case"input":if(Ba(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Sl(r);if(!s)throw Error(R(90));xp(r),Ba(r,s)}}}break;case"textarea":Op(t,n);break;case"select":e=n.value,e!=null&&Pr(t,!!n.multiple,e,!1)}};Up=Fc;Wp=er;var mS={usingClientEntryPoint:!1,Events:[Ti,wr,Sl,jp,Fp,Fc]},ys={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gS={bundleType:ys.bundleType,version:ys.version,rendererPackageName:ys.rendererPackageName,rendererConfig:ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bp(t),t===null?null:t.stateNode},findFiberByHostInstance:ys.findFiberByHostInstance||fS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{_l=to.inject(gS),Rt=to}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mS;et.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$c(e))throw Error(R(200));return hS(t,e,null,n)};et.createRoot=function(t,e){if(!$c(t))throw Error(R(299));var n=!1,r="",s=Sg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Vc(t,1,!1,null,null,n,!1,r,s),t[Kt]=e.current,Zs(t.nodeType===8?t.parentNode:t),new Hc(e)};et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=Bp(e),t=t===null?null:t.stateNode,t};et.flushSync=function(t){return er(t)};et.hydrate=function(t,e,n){if(!xl(e))throw Error(R(200));return Al(null,t,e,!0,n)};et.hydrateRoot=function(t,e,n){if(!$c(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Sg;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=wg(e,null,t,1,n??null,s,!1,i,o),t[Kt]=e.current,Zs(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Pl(e)};et.render=function(t,e,n){if(!xl(e))throw Error(R(200));return Al(null,t,e,!1,n)};et.unmountComponentAtNode=function(t){if(!xl(t))throw Error(R(40));return t._reactRootContainer?(er(function(){Al(null,null,t,!1,function(){t._reactRootContainer=null,t[Kt]=null})}),!0):!1};et.unstable_batchedUpdates=Fc;et.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!xl(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return Al(t,e,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function Eg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Eg)}catch(t){console.error(t)}}Eg(),Ep.exports=et;var _S=Ep.exports,Yh=_S;ba.createRoot=Yh.createRoot,ba.hydrateRoot=Yh.hydrateRoot;var qh={};/**
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
 */const Cg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw ns(e)},ns=function(t){return new Error("Firebase Database ("+Cg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ig=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,u=a?t[s+2]:0,d=i>>2,c=(i&3)<<4|l>>4;let h=(l&15)<<2|u>>6,v=u&63;a||(v=64,o||(h=64)),r.push(n[d],n[c],n[h],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ig(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const c=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||c==null)throw new yS;const h=i<<2|l>>4;if(r.push(h),u!==64){const v=l<<4&240|u>>2;if(r.push(v),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kg=function(t){const e=Ig(t);return Gc.encodeByteArray(e,!0)},Ko=function(t){return kg(t).replace(/\./g,"")},Qo=function(t){try{return Gc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wS(t){return Tg(void 0,t)}function Tg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!SS(n)||(t[n]=Tg(t[n],e[n]));return t}function SS(t){return t!=="__proto__"}/**
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
 */function ES(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const CS=()=>ES().__FIREBASE_DEFAULTS__,IS=()=>{if(typeof process>"u"||typeof qh>"u")return;const t=qh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qo(t[1]);return e&&JSON.parse(e)},Kc=()=>{try{return CS()||IS()||kS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ng=t=>{var e,n;return(n=(e=Kc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},TS=t=>{const e=Ng(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rg=()=>{var t;return(t=Kc())===null||t===void 0?void 0:t.config},Pg=t=>{var e;return(e=Kc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ol{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function NS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ko(JSON.stringify(n)),Ko(JSON.stringify(o)),""].join(".")}/**
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
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function RS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function PS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xS(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function AS(){return Cg.NODE_ADMIN===!0}function OS(){try{return typeof indexedDB=="object"}catch{return!1}}function LS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const DS="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DS,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?MS(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new bn(s,l,r)}}function MS(t,e){return t.replace(bS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bS=/\{\$([^}]+)}/g;/**
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
 */function ai(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
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
 */const Ag=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=ai(Qo(i[0])||""),n=ai(Qo(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},jS=function(t){const e=Ag(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},FS=function(t){const e=Ag(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function en(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Kr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Pu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yo(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function qo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Jh(i)&&Jh(o)){if(!qo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Jh(t){return t!==null&&typeof t=="object"}/**
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
 */function rs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ps(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class US{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^i&(o^l),d=1518500249):(u=i^o^l,d=1859775393):c<60?(u=i&o|l&(i|o),d=2400959708):(u=i^o^l,d=3395469782);const h=(s<<5|s>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(i<<30|i>>>2)&4294967295,i=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function WS(t,e){const n=new zS(t,e);return n.subscribe.bind(n)}class zS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");VS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ya),s.error===void 0&&(s.error=ya),s.complete===void 0&&(s.complete=ya);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ya(){}function Yc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const BS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ll=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ae(t){return t&&t._delegate?t._delegate:t}class tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zn="[DEFAULT]";/**
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
 */class HS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ol;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GS(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$S(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $S(t){return t===zn?void 0:t}function GS(t){return t.instantiationMode==="EAGER"}/**
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
 */class KS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const QS={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},YS=J.INFO,qS={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},JS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=qS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qc{constructor(e){this.name=e,this._logLevel=YS,this._logHandler=JS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const XS=(t,e)=>e.some(n=>t instanceof n);let Xh,Zh;function ZS(){return Xh||(Xh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eE(){return Zh||(Zh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Og=new WeakMap,xu=new WeakMap,Lg=new WeakMap,wa=new WeakMap,Jc=new WeakMap;function tE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Cn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Og.set(n,t)}).catch(()=>{}),Jc.set(e,t),e}function nE(t){if(xu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});xu.set(t,e)}let Au={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rE(t){Au=t(Au)}function sE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sa(this),e,...n);return Lg.set(r,e.sort?e.sort():[e]),Cn(r)}:eE().includes(t)?function(...e){return t.apply(Sa(this),e),Cn(Og.get(this))}:function(...e){return Cn(t.apply(Sa(this),e))}}function iE(t){return typeof t=="function"?sE(t):(t instanceof IDBTransaction&&nE(t),XS(t,ZS())?new Proxy(t,Au):t)}function Cn(t){if(t instanceof IDBRequest)return tE(t);if(wa.has(t))return wa.get(t);const e=iE(t);return e!==t&&(wa.set(t,e),Jc.set(e,t)),e}const Sa=t=>Jc.get(t);function oE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Cn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Cn(o.result),a.oldVersion,a.newVersion,Cn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const lE=["get","getKey","getAll","getAllKeys","count"],aE=["put","add","delete","clear"],Ea=new Map;function ef(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ea.get(e))return Ea.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=aE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lE.includes(n)))return;const i=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&a.done]))[0]};return Ea.set(e,i),i}rE(t=>({...t,get:(e,n,r)=>ef(e,n)||t.get(e,n,r),has:(e,n)=>!!ef(e,n)||t.has(e,n)}));/**
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
 */class uE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ou="@firebase/app",tf="0.10.13";/**
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
 */const qt=new qc("@firebase/app"),dE="@firebase/app-compat",hE="@firebase/analytics-compat",fE="@firebase/analytics",pE="@firebase/app-check-compat",mE="@firebase/app-check",gE="@firebase/auth",_E="@firebase/auth-compat",vE="@firebase/database",yE="@firebase/data-connect",wE="@firebase/database-compat",SE="@firebase/functions",EE="@firebase/functions-compat",CE="@firebase/installations",IE="@firebase/installations-compat",kE="@firebase/messaging",TE="@firebase/messaging-compat",NE="@firebase/performance",RE="@firebase/performance-compat",PE="@firebase/remote-config",xE="@firebase/remote-config-compat",AE="@firebase/storage",OE="@firebase/storage-compat",LE="@firebase/firestore",DE="@firebase/vertexai-preview",ME="@firebase/firestore-compat",bE="firebase",jE="10.14.1";/**
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
 */const Lu="[DEFAULT]",FE={[Ou]:"fire-core",[dE]:"fire-core-compat",[fE]:"fire-analytics",[hE]:"fire-analytics-compat",[mE]:"fire-app-check",[pE]:"fire-app-check-compat",[gE]:"fire-auth",[_E]:"fire-auth-compat",[vE]:"fire-rtdb",[yE]:"fire-data-connect",[wE]:"fire-rtdb-compat",[SE]:"fire-fn",[EE]:"fire-fn-compat",[CE]:"fire-iid",[IE]:"fire-iid-compat",[kE]:"fire-fcm",[TE]:"fire-fcm-compat",[NE]:"fire-perf",[RE]:"fire-perf-compat",[PE]:"fire-rc",[xE]:"fire-rc-compat",[AE]:"fire-gcs",[OE]:"fire-gcs-compat",[LE]:"fire-fst",[ME]:"fire-fst-compat",[DE]:"fire-vertex","fire-js":"fire-js",[bE]:"fire-js-all"};/**
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
 */const Jo=new Map,UE=new Map,Du=new Map;function nf(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qr(t){const e=t.name;if(Du.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;Du.set(e,t);for(const n of Jo.values())nf(n,t);for(const n of UE.values())nf(n,t);return!0}function Xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Nt(t){return t.settings!==void 0}/**
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
 */const WE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},In=new Ri("app","Firebase",WE);/**
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
 */class zE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
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
 */const ss=jE;function Dg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Lu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw In.create("bad-app-name",{appName:String(s)});if(n||(n=Rg()),!n)throw In.create("no-options");const i=Jo.get(s);if(i){if(qo(n,i.options)&&qo(r,i.config))return i;throw In.create("duplicate-app",{appName:s})}const o=new KS(s);for(const a of Du.values())o.addComponent(a);const l=new zE(n,r,o);return Jo.set(s,l),l}function Mg(t=Lu){const e=Jo.get(t);if(!e&&t===Lu&&Rg())return Dg();if(!e)throw In.create("no-app",{appName:t});return e}function kn(t,e,n){var r;let s=(r=FE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(l.join(" "));return}Qr(new tr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const VE="firebase-heartbeat-database",BE=1,ui="firebase-heartbeat-store";let Ca=null;function bg(){return Ca||(Ca=oE(VE,BE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ui)}catch(n){console.warn(n)}}}}).catch(t=>{throw In.create("idb-open",{originalErrorMessage:t.message})})),Ca}async function HE(t){try{const n=(await bg()).transaction(ui),r=await n.objectStore(ui).get(jg(t));return await n.done,r}catch(e){if(e instanceof bn)qt.warn(e.message);else{const n=In.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(n.message)}}}async function rf(t,e){try{const r=(await bg()).transaction(ui,"readwrite");await r.objectStore(ui).put(e,jg(t)),await r.done}catch(n){if(n instanceof bn)qt.warn(n.message);else{const r=In.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(r.message)}}}function jg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const $E=1024,GE=30*24*60*60*1e3;class KE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=GE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){qt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sf(),{heartbeatsToSend:r,unsentEntries:s}=QE(this._heartbeatsCache.heartbeats),i=Ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return qt.warn(n),""}}}function sf(){return new Date().toISOString().substring(0,10)}function QE(t,e=$E){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),of(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),of(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OS()?LS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await HE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function of(t){return Ko(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function qE(t){Qr(new tr("platform-logger",e=>new uE(e),"PRIVATE")),Qr(new tr("heartbeat",e=>new KE(e),"PRIVATE")),kn(Ou,tf,t),kn(Ou,tf,"esm2017"),kn("fire-js","")}qE("");var lf={};const af="@firebase/database",uf="1.0.8";/**
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
 */let Fg="";function JE(t){Fg=t}/**
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
 */class XE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ai(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ZE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return en(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ug=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new XE(e)}}catch{}return new ZE},Gn=Ug("localStorage"),eC=Ug("sessionStorage");/**
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
 */const Mr=new qc("@firebase/database"),tC=function(){let t=1;return function(){return t++}}(),Wg=function(t){const e=BS(t),n=new US;n.update(e);const r=n.digest();return Gc.encodeByteArray(r)},Pi=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Pi.apply(null,r):typeof r=="object"?e+=pe(r):e+=r,e+=" "}return e};let Us=null,cf=!0;const nC=function(t,e){x(!0,"Can't turn on custom loggers persistently."),Mr.logLevel=J.VERBOSE,Us=Mr.log.bind(Mr)},Pe=function(...t){if(cf===!0&&(cf=!1,Us===null&&eC.get("logging_enabled")===!0&&nC()),Us){const e=Pi.apply(null,t);Us(e)}},xi=function(t){return function(...e){Pe(t,...e)}},Mu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Pi(...t);Mr.error(e)},Jt=function(...t){const e=`FIREBASE FATAL ERROR: ${Pi(...t)}`;throw Mr.error(e),new Error(e)},$e=function(...t){const e="FIREBASE WARNING: "+Pi(...t);Mr.warn(e)},rC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$e("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Yr="[MIN_NAME]",nr="[MAX_NAME]",is=function(t,e){if(t===e)return 0;if(t===Yr||e===nr)return-1;if(e===Yr||t===nr)return 1;{const n=df(t),r=df(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},iC=function(t,e){return t===e?0:t<e?-1:1},ws=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},Zc=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=pe(e[r]),n+=":",n+=Zc(t[e[r]]);return n+="}",n},Vg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Ge(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Bg=function(t){x(!zg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,l,a;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},oC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function aC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const uC=new RegExp("^-?(0*)\\d{1,10}$"),cC=-2147483648,dC=2147483647,df=function(t){if(uC.test(t)){const e=Number(t);if(e>=cC&&e<=dC)return e}return null},os=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw $e("Exception was thrown by user callback.",n),e},Math.floor(0))}},hC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ws=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class fC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){$e(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class pC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$e(e)}}class vo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vo.OWNER="owner";/**
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
 */const ed="5",Hg="v",$g="s",Gg="r",Kg="f",Qg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yg="ls",qg="p",bu="ac",Jg="websocket",Xg="long_polling";/**
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
 */class Zg{constructor(e,n,r,s,i=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function mC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function e_(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===Jg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Xg)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mC(t)&&(n.ns=t.namespace);const s=[];return Ge(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class gC{constructor(){this.counters_={}}incrementCounter(e,n=1){en(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return wS(this.counters_)}}/**
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
 */const Ia={},ka={};function td(t){const e=t.toString();return Ia[e]||(Ia[e]=new gC),Ia[e]}function _C(t,e){const n=t.toString();return ka[n]||(ka[n]=e()),ka[n]}/**
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
 */class vC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&os(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hf="start",yC="close",wC="pLPCommand",SC="pRTLPCB",t_="id",n_="pw",r_="ser",EC="cb",CC="seg",IC="ts",kC="d",TC="dframe",s_=1870,i_=30,NC=s_-i_,RC=25e3,PC=3e4;class Nr{constructor(e,n,r,s,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xi(e),this.stats_=td(n),this.urlFn=a=>(this.appCheckToken&&(a[bu]=this.appCheckToken),e_(n,Xg,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new vC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(PC)),sC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nd((...i)=>{const[o,l,a,u,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hf)this.id=l,this.password=a;else if(o===yC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[hf]="t",r[r_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[EC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Hg]=ed,this.transportSessionId&&(r[$g]=this.transportSessionId),this.lastSessionId&&(r[Yg]=this.lastSessionId),this.applicationId&&(r[qg]=this.applicationId),this.appCheckToken&&(r[bu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qg.test(location.hostname)&&(r[Gg]=Kg);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Nr.forceAllow_=!0}static forceDisallow(){Nr.forceDisallow_=!0}static isAvailable(){return Nr.forceAllow_?!0:!Nr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!oC()&&!lC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=kg(n),s=Vg(r,NC);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[TC]="t",r[t_]=e,r[n_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class nd{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tC(),window[wC+this.uniqueCallbackIdentifier]=e,window[SC+this.uniqueCallbackIdentifier]=n,this.myIFrame=nd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Pe("frame writing exception"),l.stack&&Pe(l.stack),Pe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Pe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[t_]=this.myID,e[n_]=this.myPW,e[r_]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+i_+r.length<=s_;){const o=this.pendingSegs.shift();r=r+"&"+CC+s+"="+o.seg+"&"+IC+s+"="+o.ts+"&"+kC+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(RC)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Pe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const xC=16384,AC=45e3;let Xo=null;typeof MozWebSocket<"u"?Xo=MozWebSocket:typeof WebSocket<"u"&&(Xo=WebSocket);class ft{constructor(e,n,r,s,i,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xi(this.connId),this.stats_=td(n),this.connURL=ft.connectionURL_(n,o,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[Hg]=ed,typeof location<"u"&&location.hostname&&Qg.test(location.hostname)&&(o[Gg]=Kg),n&&(o[$g]=n),r&&(o[Yg]=r),s&&(o[bu]=s),i&&(o[qg]=i),e_(e,Jg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gn.set("previous_websocket_failure",!0);try{let r;AS(),this.mySock=new Xo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Xo!==null&&!ft.forceDisallow_}static previouslyFailed(){return Gn.isInMemoryStorage||Gn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ai(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Vg(n,xC);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(AC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ft.responsesRequiredToBeHealthy=2;ft.healthyTimeout=3e4;/**
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
 */class ci{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Nr,ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ft&&ft.isAvailable();let r=n&&!ft.previouslyFailed();if(e.webSocketOnly&&(n||$e("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ft];else{const s=this.transports_=[];for(const i of ci.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);ci.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ci.globalTransportInitialized_=!1;/**
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
 */const OC=6e4,LC=5e3,DC=10*1024,MC=100*1024,Ta="t",ff="d",bC="s",pf="r",jC="e",mf="o",gf="a",_f="n",vf="p",FC="h";class UC{constructor(e,n,r,s,i,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xi("c:"+this.id+":"),this.transportManager_=new ci(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ws(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>MC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>DC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ta in e){const n=e[Ta];n===gf?this.upgradeIfSecondaryHealthy_():n===pf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===mf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ws("t",e),r=ws("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_f,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ws("t",e),r=ws("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ws(Ta,e);if(ff in e){const r=e[ff];if(n===FC){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===_f){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bC?this.onConnectionShutdown_(r):n===pf?this.onReset_(r):n===jC?Mu("Server Error: "+r):n===mf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ed!==r&&$e("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ws(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(OC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ws(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(LC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class o_{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class l_{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Zo extends l_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Zo}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const yf=32,wf=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Y(){return new X("")}function W(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function xn(t){return t.pieces_.length-t.pieceNum_}function Z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function a_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function WC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function u_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function c_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function me(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof X)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new X(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function De(t,e){const n=W(t),r=W(e);if(n===null)return e;if(n===r)return De(Z(t),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function rd(t,e){if(xn(t)!==xn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function pt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(xn(t)>xn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class zC{constructor(e,n){this.errorPrefix_=n,this.parts_=u_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ll(this.parts_[r]);d_(this)}}function VC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ll(e),d_(t)}function BC(t){const e=t.parts_.pop();t.byteLength_-=Ll(e),t.parts_.length>0&&(t.byteLength_-=1)}function d_(t){if(t.byteLength_>wf)throw new Error(t.errorPrefix_+"has a key path longer than "+wf+" bytes ("+t.byteLength_+").");if(t.parts_.length>yf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yf+") or object contains a cycle "+Vn(t))}function Vn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class sd extends l_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new sd}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ss=1e3,HC=60*5*1e3,Sf=30*1e3,$C=1.3,GC=3e4,KC="server_kill",Ef=3;class Ht extends o_{constructor(e,n,r,s,i,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ht.nextPersistentConnectionId_++,this.log_=xi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ss,this.maxReconnectDelay_=HC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(pe(i)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Ol,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const a=l.d,u=l.s;Ht.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&en(e,"w")){const r=Kr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();$e(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||FS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=jS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Mu("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ss,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ss,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>GC&&(this.reconnectDelay_=Ss),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$C)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ht.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){x(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Pe("getToken() completed but was canceled"):(Pe("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new UC(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{$e(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(KC)},i))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&$e(c),a())}}}interrupt(e){Pe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Pe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pu(this.interruptReasons_)&&(this.reconnectDelay_=Ss,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Zc(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new X(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Pe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ef&&(this.reconnectDelay_=Sf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Pe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ef&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fg.replace(/\./g,"-")]=1,Qc()?e["framework.cordova"]=1:xg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zo.getInstance().currentlyOnline();return Pu(this.interruptReasons_)&&e}}Ht.nextPersistentConnectionId_=0;Ht.nextConnectionId_=0;/**
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
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
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
 */class Dl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(Yr,e),s=new z(Yr,n);return this.compare(r,s)!==0}minPost(){return z.MIN}}/**
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
 */let no;class h_ extends Dl{static get __EMPTY_NODE(){return no}static set __EMPTY_NODE(e){no=e}compare(e,n){return is(e.name,n.name)}isDefinedOn(e){throw ns("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(nr,no)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,no)}toString(){return".key"}}const br=new h_;/**
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
 */class ro{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ye.RED,this.left=s??ze.EMPTY_NODE,this.right=i??ze.EMPTY_NODE}copy(e,n,r,s,i){return new ye(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ze.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ye.RED=!0;ye.BLACK=!1;class QC{copy(e,n,r,s,i){return this}insert(e,n,r){return new ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ze{constructor(e,n=ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ye.BLACK,null,null))}remove(e){return new ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ye.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ro(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ro(this.root_,null,this.comparator_,!0,e)}}ze.EMPTY_NODE=new QC;/**
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
 */function YC(t,e){return is(t.name,e.name)}function id(t,e){return is(t,e)}/**
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
 */let ju;function qC(t){ju=t}const f_=function(t){return typeof t=="number"?"number:"+Bg(t):"string:"+t},p_=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&en(e,".sv"),"Priority must be a string or number.")}else x(t===ju||t.isEmpty(),"priority of unexpected type.");x(t===ju||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Cf;class _e{constructor(e,n=_e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),p_(this.priorityNode_)}static set __childrenNodeConstructor(e){Cf=e}static get __childrenNodeConstructor(){return Cf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:W(e)===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=W(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||xn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,_e.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+f_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Bg(this.value_):e+=this.value_,this.lazyHash_=Wg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _e.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=_e.VALUE_TYPE_ORDER.indexOf(n),i=_e.VALUE_TYPE_ORDER.indexOf(r);return x(s>=0,"Unknown leaf type: "+n),x(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let m_,g_;function JC(t){m_=t}function XC(t){g_=t}class ZC extends Dl{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?is(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(nr,new _e("[PRIORITY-POST]",g_))}makePost(e,n){const r=m_(e);return new z(n,new _e("[PRIORITY-POST]",r))}toString(){return".priority"}}const ce=new ZC;/**
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
 */const e0=Math.log(2);class t0{constructor(e){const n=i=>parseInt(Math.log(i)/e0,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const el=function(t,e,n,r){t.sort(e);const s=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new ye(h,c.node,ye.BLACK,null,null);{const v=parseInt(d/2,10)+a,_=s(a,v),y=s(v+1,u);return c=t[v],h=n?n(c):c,new ye(h,c.node,ye.BLACK,_,y)}},i=function(a){let u=null,d=null,c=t.length;const h=function(_,y){const N=c-_,m=c;c-=_;const p=s(N+1,m),g=t[N],w=n?n(g):g;v(new ye(w,g.node,y,null,p))},v=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),N=Math.pow(2,a.count-(_+1));y?h(N,ye.BLACK):(h(N,ye.BLACK),h(N,ye.RED))}return d},o=new t0(t.length),l=i(o);return new ze(r||e,l)};/**
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
 */let Na;const pr={};class Ut{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(pr&&ce,"ChildrenNode.ts has not been loaded"),Na=Na||new Ut({".priority":pr},{".priority":ce}),Na}get(e){const n=Kr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ze?n:null}hasIndex(e){return en(this.indexSet_,e.toString())}addIndex(e,n){x(e!==br,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(z.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let l;s?l=el(r,e.getCompare()):l=pr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Ut(d,u)}addToIndexes(e,n){const r=Yo(this.indexes_,(s,i)=>{const o=Kr(this.indexSet_,i);if(x(o,"Missing index implementation for "+i),s===pr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(z.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),el(l,o.getCompare())}else return pr;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new z(e.name,l))),a.insert(e,e.node)}});return new Ut(r,this.indexSet_)}removeFromIndexes(e,n){const r=Yo(this.indexes_,s=>{if(s===pr)return s;{const i=n.get(e.name);return i?s.remove(new z(e.name,i)):s}});return new Ut(r,this.indexSet_)}}/**
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
 */let Es;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&p_(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Es||(Es=new j(new ze(id),null,Ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Es}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Es:n}}getChild(e){const n=W(e);return n===null?this:this.getImmediateChild(n).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Es:this.priorityNode_;return new j(s,o,i)}}updateChild(e,n){const r=W(e);if(r===null)return n;{x(W(e)!==".priority"||xn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Z(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(ce,(o,l)=>{n[o]=l.val(e),r++,i&&j.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+f_(this.getPriority().val())+":"),this.forEachChild(ce,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Wg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new z(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,z.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ai?-1:0}withIndex(e){if(e===br||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===br||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ce),s=n.getIterator(ce);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===br?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class n0 extends j{constructor(){super(new ze(id),j.EMPTY_NODE,Ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Ai=new n0;Object.defineProperties(z,{MIN:{value:new z(Yr,j.EMPTY_NODE)},MAX:{value:new z(nr,Ai)}});h_.__EMPTY_NODE=j.EMPTY_NODE;_e.__childrenNodeConstructor=j;qC(Ai);XC(Ai);/**
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
 */const r0=!0;function we(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _e(n,we(e))}if(!(t instanceof Array)&&r0){const n=[];let r=!1;if(Ge(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=we(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new z(o,a)))}}),n.length===0)return j.EMPTY_NODE;const i=el(n,YC,o=>o.name,id);if(r){const o=el(n,ce.getCompare());return new j(i,we(e),new Ut({".priority":o},{".priority":ce}))}else return new j(i,we(e),Ut.Default)}else{let n=j.EMPTY_NODE;return Ge(t,(r,s)=>{if(en(t,r)&&r.substring(0,1)!=="."){const i=we(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(we(e))}}JC(we);/**
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
 */class s0 extends Dl{constructor(e){super(),this.indexPath_=e,x(!B(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?is(e.name,n.name):i}makePost(e,n){const r=we(e),s=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,s)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Ai);return new z(nr,e)}toString(){return u_(this.indexPath_,0).join("/")}}/**
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
 */class i0 extends Dl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?is(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=we(e);return new z(n,r)}toString(){return".value"}}const o0=new i0;/**
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
 */function __(t){return{type:"value",snapshotNode:t}}function qr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function di(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function hi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function l0(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class od{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(di(n,l)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(qr(n,r)):o.trackChildChange(hi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ce,(s,i)=>{n.hasChild(s)||r.trackChildChange(di(s,i))}),n.isLeafNode()||n.forEachChild(ce,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(hi(s,i,o))}else r.trackChildChange(qr(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class fi{constructor(e){this.indexedFilter_=new od(e.getIndex()),this.index_=e.getIndex(),this.startPost_=fi.getStartPost_(e),this.endPost_=fi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new z(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(j.EMPTY_NODE);const i=this;return n.forEachChild(ce,(o,l)=>{i.matches(new z(o,l))||(s=s.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class a0{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new fi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new z(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=j.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(j.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,v)=>c(v,h)}else o=this.index_.getCompare();const l=e;x(l.numChildren()===this.limit_,"");const a=new z(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=s.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const v=h==null?1:o(h,a);if(d&&!r.isEmpty()&&v>=0)return i!=null&&i.trackChildChange(hi(n,r,c)),l.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(di(n,c));const y=l.updateImmediateChild(n,j.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(i!=null&&i.trackChildChange(qr(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,a)>=0?(i!=null&&(i.trackChildChange(di(u.name,u.node)),i.trackChildChange(qr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
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
 */class ld{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yr}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ce}copy(){const e=new ld;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function u0(t){return t.loadsAllData()?new od(t.getIndex()):t.hasLimit()?new a0(t):new fi(t)}function If(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ce?n="$priority":t.index_===o0?n="$value":t.index_===br?n="$key":(x(t.index_ instanceof s0,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function kf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ce&&(e.i=t.index_.toString()),e}/**
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
 */class tl extends o_{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=xi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=tl.getListenId_(e,r),l={};this.listens_[o]=l;const a=If(e._queryParams);this.restRequest_(i+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(i,c,!1,r),Kr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",s(h,null)}})}unlisten(e,n){const r=tl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=If(e._queryParams),r=e._path.toString(),s=new Ol;return this.restRequest_(r+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+rs(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ai(l.responseText)}catch{$e("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&$e("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class c0{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function nl(){return{value:null,children:new Map}}function v_(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=W(e);t.children.has(r)||t.children.set(r,nl());const s=t.children.get(r);e=Z(e),v_(s,e,n)}}function Fu(t,e,n){t.value!==null?n(e,t.value):d0(t,(r,s)=>{const i=new X(e.toString()+"/"+r);Fu(s,i,n)})}function d0(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class h0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ge(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const Tf=10*1e3,f0=30*1e3,p0=5*60*1e3;class m0{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new h0(e);const r=Tf+(f0-Tf)*Math.random();Ws(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ge(e,(s,i)=>{i>0&&en(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Ws(this.reportStats_.bind(this),Math.floor(Math.random()*2*p0))}}/**
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
 */var mt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mt||(mt={}));function y_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ad(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ud(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class rl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=mt.ACK_USER_WRITE,this.source=y_()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new rl(Y(),n,this.revert)}}else return x(W(this.path)===e,"operationForChild called for unrelated child."),new rl(Z(this.path),this.affectedTree,this.revert)}}/**
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
 */class pi{constructor(e,n){this.source=e,this.path=n,this.type=mt.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new pi(this.source,Y()):new pi(this.source,Z(this.path))}}/**
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
 */class rr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=mt.OVERWRITE}operationForChild(e){return B(this.path)?new rr(this.source,Y(),this.snap.getImmediateChild(e)):new rr(this.source,Z(this.path),this.snap)}}/**
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
 */class mi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=mt.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new rr(this.source,Y(),n.value):new mi(this.source,Y(),n)}else return x(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mi(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class An{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=W(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class g0{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _0(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(l0(o.childName,o.snapshotNode))}),Cs(t,s,"child_removed",e,r,n),Cs(t,s,"child_added",e,r,n),Cs(t,s,"child_moved",i,r,n),Cs(t,s,"child_changed",e,r,n),Cs(t,s,"value",e,r,n),s}function Cs(t,e,n,r,s,i){const o=r.filter(l=>l.type===n);o.sort((l,a)=>y0(t,l,a)),o.forEach(l=>{const a=v0(t,l,i);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function v0(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function y0(t,e,n){if(e.childName==null||n.childName==null)throw ns("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),s=new z(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function Ml(t,e){return{eventCache:t,serverCache:e}}function zs(t,e,n,r){return Ml(new An(e,n,r),t.serverCache)}function w_(t,e,n,r){return Ml(t.eventCache,new An(e,n,r))}function sl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function sr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ra;const w0=()=>(Ra||(Ra=new ze(iC)),Ra);class ne{constructor(e,n=w0()){this.value=e,this.children=n}static fromObject(e){let n=new ne(null);return Ge(e,(r,s)=>{n=n.set(new X(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Y(),value:this.value};if(B(e))return null;{const r=W(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Z(e),n);return i!=null?{path:me(new X(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=W(e),r=this.children.get(n);return r!==null?r.subtree(Z(e)):new ne(null)}}set(e,n){if(B(e))return new ne(n,this.children);{const r=W(e),i=(this.children.get(r)||new ne(null)).set(Z(e),n),o=this.children.insert(r,i);return new ne(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new ne(null):new ne(null,this.children);{const n=W(e),r=this.children.get(n);if(r){const s=r.remove(Z(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new ne(null):new ne(this.value,i)}else return this}}get(e){if(B(e))return this.value;{const n=W(e),r=this.children.get(n);return r?r.get(Z(e)):null}}setTree(e,n){if(B(e))return n;{const r=W(e),i=(this.children.get(r)||new ne(null)).setTree(Z(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new ne(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(me(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Y(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(B(e))return null;{const i=W(e),o=this.children.get(i);return o?o.findOnPath_(Z(e),me(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Y(),n)}foreachOnPath_(e,n,r){if(B(e))return this;{this.value&&r(n,this.value);const s=W(e),i=this.children.get(s);return i?i.foreachOnPath_(Z(e),me(n,s),r):new ne(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(me(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class vt{constructor(e){this.writeTree_=e}static empty(){return new vt(new ne(null))}}function Vs(t,e,n){if(B(e))return new vt(new ne(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=De(s,e);return i=i.updateChild(o,n),new vt(t.writeTree_.set(s,i))}else{const s=new ne(n),i=t.writeTree_.setTree(e,s);return new vt(i)}}}function Nf(t,e,n){let r=t;return Ge(n,(s,i)=>{r=Vs(r,me(e,s),i)}),r}function Rf(t,e){if(B(e))return vt.empty();{const n=t.writeTree_.setTree(e,new ne(null));return new vt(n)}}function Uu(t,e){return ur(t,e)!=null}function ur(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(De(n.path,e)):null}function Pf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ce,(r,s)=>{e.push(new z(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new z(r,s.value))}),e}function Tn(t,e){if(B(e))return t;{const n=ur(t,e);return n!=null?new vt(new ne(n)):new vt(t.writeTree_.subtree(e))}}function Wu(t){return t.writeTree_.isEmpty()}function Jr(t,e){return S_(Y(),t.writeTree_,e)}function S_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(x(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=S_(me(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(me(t,".priority"),r)),n}}/**
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
 */function bl(t,e){return k_(e,t)}function S0(t,e,n,r,s){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Vs(t.visibleWrites,e,n)),t.lastWriteId=r}function E0(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function C0(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&I0(l,r.path)?s=!1:pt(r.path,l.path)&&(i=!0)),o--}if(s){if(i)return k0(t),!0;if(r.snap)t.visibleWrites=Rf(t.visibleWrites,r.path);else{const l=r.children;Ge(l,a=>{t.visibleWrites=Rf(t.visibleWrites,me(r.path,a))})}return!0}else return!1}function I0(t,e){if(t.snap)return pt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&pt(me(t.path,n),e))return!0;return!1}function k0(t){t.visibleWrites=E_(t.allWrites,T0,Y()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function T0(t){return t.visible}function E_(t,e,n){let r=vt.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let l;if(i.snap)pt(n,o)?(l=De(n,o),r=Vs(r,l,i.snap)):pt(o,n)&&(l=De(o,n),r=Vs(r,Y(),i.snap.getChild(l)));else if(i.children){if(pt(n,o))l=De(n,o),r=Nf(r,l,i.children);else if(pt(o,n))if(l=De(o,n),B(l))r=Nf(r,Y(),i.children);else{const a=Kr(i.children,W(l));if(a){const u=a.getChild(Z(l));r=Vs(r,Y(),u)}}}else throw ns("WriteRecord should have .snap or .children")}}return r}function C_(t,e,n,r,s){if(!r&&!s){const i=ur(t.visibleWrites,e);if(i!=null)return i;{const o=Tn(t.visibleWrites,e);if(Wu(o))return n;if(n==null&&!Uu(o,Y()))return null;{const l=n||j.EMPTY_NODE;return Jr(o,l)}}}else{const i=Tn(t.visibleWrites,e);if(!s&&Wu(i))return n;if(!s&&n==null&&!Uu(i,Y()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(pt(u.path,e)||pt(e,u.path))},l=E_(t.allWrites,o,e),a=n||j.EMPTY_NODE;return Jr(l,a)}}}function N0(t,e,n){let r=j.EMPTY_NODE;const s=ur(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ce,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Tn(t.visibleWrites,e);return n.forEachChild(ce,(o,l)=>{const a=Jr(Tn(i,new X(o)),l);r=r.updateImmediateChild(o,a)}),Pf(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Tn(t.visibleWrites,e);return Pf(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function R0(t,e,n,r,s){x(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=me(e,n);if(Uu(t.visibleWrites,i))return null;{const o=Tn(t.visibleWrites,i);return Wu(o)?s.getChild(n):Jr(o,s.getChild(n))}}function P0(t,e,n,r){const s=me(e,n),i=ur(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Tn(t.visibleWrites,s);return Jr(o,r.getNode().getImmediateChild(n))}else return null}function x0(t,e){return ur(t.visibleWrites,e)}function A0(t,e,n,r,s,i,o){let l;const a=Tn(t.visibleWrites,e),u=ur(a,Y());if(u!=null)l=u;else if(n!=null)l=Jr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=i?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let v=h.getNext();for(;v&&d.length<s;)c(v,r)!==0&&d.push(v),v=h.getNext();return d}else return[]}function O0(){return{visibleWrites:vt.empty(),allWrites:[],lastWriteId:-1}}function il(t,e,n,r){return C_(t.writeTree,t.treePath,e,n,r)}function cd(t,e){return N0(t.writeTree,t.treePath,e)}function xf(t,e,n,r){return R0(t.writeTree,t.treePath,e,n,r)}function ol(t,e){return x0(t.writeTree,me(t.treePath,e))}function L0(t,e,n,r,s,i){return A0(t.writeTree,t.treePath,e,n,r,s,i)}function dd(t,e,n){return P0(t.writeTree,t.treePath,e,n)}function I_(t,e){return k_(me(t.treePath,e),t.writeTree)}function k_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class D0{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,hi(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,di(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,qr(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,hi(r,e.snapshotNode,s.oldSnap));else throw ns("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class M0{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const T_=new M0;class hd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new An(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:sr(this.viewCache_),i=L0(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
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
 */function b0(t){return{filter:t}}function j0(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function F0(t,e,n,r,s){const i=new D0;let o,l;if(n.type===mt.OVERWRITE){const u=n;u.source.fromUser?o=zu(t,e,u.path,u.snap,r,s,i):(x(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!B(u.path),o=ll(t,e,u.path,u.snap,r,s,l,i))}else if(n.type===mt.MERGE){const u=n;u.source.fromUser?o=W0(t,e,u.path,u.children,r,s,i):(x(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Vu(t,e,u.path,u.children,r,s,l,i))}else if(n.type===mt.ACK_USER_WRITE){const u=n;u.revert?o=B0(t,e,u.path,r,s,i):o=z0(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===mt.LISTEN_COMPLETE)o=V0(t,e,n.path,r,i);else throw ns("Unknown operation type: "+n.type);const a=i.getChanges();return U0(e,o,a),{viewCache:o,changes:a}}function U0(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=sl(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(__(sl(e)))}}function N_(t,e,n,r,s,i){const o=e.eventCache;if(ol(r,n)!=null)return e;{let l,a;if(B(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=sr(e),d=u instanceof j?u:j.EMPTY_NODE,c=cd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const u=il(r,sr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=W(n);if(u===".priority"){x(xn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=xf(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=Z(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=xf(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=dd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,s,i):l=o.getNode()}}return zs(e,l,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function ll(t,e,n,r,s,i,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(B(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const v=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),v,null)}else{const v=W(n);if(!a.isCompleteForPath(n)&&xn(n)>1)return e;const _=Z(n),N=a.getNode().getImmediateChild(v).updateChild(_,r);v===".priority"?u=d.updatePriority(a.getNode(),N):u=d.updateChild(a.getNode(),v,N,_,T_,null)}const c=w_(e,u,a.isFullyInitialized()||B(n),d.filtersNodes()),h=new hd(s,c,i);return N_(t,c,n,s,h,l)}function zu(t,e,n,r,s,i,o){const l=e.eventCache;let a,u;const d=new hd(s,e,i);if(B(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=zs(e,u,!0,t.filter.filtersNodes());else{const c=W(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=zs(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=Z(n),v=l.getNode().getImmediateChild(c);let _;if(B(h))_=r;else{const y=d.getCompleteChild(c);y!=null?a_(h)===".priority"&&y.getChild(c_(h)).isEmpty()?_=y:_=y.updateChild(h,r):_=j.EMPTY_NODE}if(v.equals(_))a=e;else{const y=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=zs(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Af(t,e){return t.eventCache.isCompleteForChild(e)}function W0(t,e,n,r,s,i,o){let l=e;return r.foreach((a,u)=>{const d=me(n,a);Af(e,W(d))&&(l=zu(t,l,d,u,s,i,o))}),r.foreach((a,u)=>{const d=me(n,a);Af(e,W(d))||(l=zu(t,l,d,u,s,i,o))}),l}function Of(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Vu(t,e,n,r,s,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;B(n)?u=r:u=new ne(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const v=e.serverCache.getNode().getImmediateChild(c),_=Of(t,v,h);a=ll(t,a,new X(c),_,s,i,o,l)}}),u.children.inorderTraversal((c,h)=>{const v=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!v){const _=e.serverCache.getNode().getImmediateChild(c),y=Of(t,_,h);a=ll(t,a,new X(c),y,s,i,o,l)}}),a}function z0(t,e,n,r,s,i,o){if(ol(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ll(t,e,n,a.getNode().getChild(n),s,i,l,o);if(B(n)){let u=new ne(null);return a.getNode().forEachChild(br,(d,c)=>{u=u.set(new X(d),c)}),Vu(t,e,n,u,s,i,l,o)}else return e}else{let u=new ne(null);return r.foreach((d,c)=>{const h=me(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Vu(t,e,n,u,s,i,l,o)}}function V0(t,e,n,r,s){const i=e.serverCache,o=w_(e,i.getNode(),i.isFullyInitialized()||B(n),i.isFiltered());return N_(t,o,n,r,T_,s)}function B0(t,e,n,r,s,i){let o;if(ol(r,n)!=null)return e;{const l=new hd(r,e,s),a=e.eventCache.getNode();let u;if(B(n)||W(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=il(r,sr(e));else{const c=e.serverCache.getNode();x(c instanceof j,"serverChildren would be complete if leaf node"),d=cd(r,c)}d=d,u=t.filter.updateFullNode(a,d,i)}else{const d=W(n);let c=dd(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,Z(n),l,i):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,j.EMPTY_NODE,Z(n),l,i):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=il(r,sr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||ol(r,Y())!=null,zs(e,u,o,t.filter.filtersNodes())}}/**
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
 */class H0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new od(r.getIndex()),i=u0(r);this.processor_=b0(i);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(j.EMPTY_NODE,l.getNode(),null),d=new An(a,o.isFullyInitialized(),s.filtersNodes()),c=new An(u,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=Ml(c,d),this.eventGenerator_=new g0(this.query_)}get query(){return this.query_}}function $0(t){return t.viewCache_.serverCache.getNode()}function G0(t){return sl(t.viewCache_)}function K0(t,e){const n=sr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(W(e)).isEmpty())?n.getChild(e):null}function Lf(t){return t.eventRegistrations_.length===0}function Q0(t,e){t.eventRegistrations_.push(e)}function Df(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function Mf(t,e,n,r){e.type===mt.MERGE&&e.source.queryId!==null&&(x(sr(t.viewCache_),"We should always have a full cache before handling merges"),x(sl(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=F0(t.processor_,s,e,n,r);return j0(t.processor_,i.viewCache),x(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,R_(t,i.changes,i.viewCache.eventCache.getNode(),null)}function Y0(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ce,(i,o)=>{r.push(qr(i,o))}),n.isFullyInitialized()&&r.push(__(n.getNode())),R_(t,r,n.getNode(),e)}function R_(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return _0(t.eventGenerator_,e,n,s)}/**
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
 */let al;class P_{constructor(){this.views=new Map}}function q0(t){x(!al,"__referenceConstructor has already been defined"),al=t}function J0(){return x(al,"Reference.ts has not been loaded"),al}function X0(t){return t.views.size===0}function fd(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return x(i!=null,"SyncTree gave us an op for an invalid query."),Mf(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Mf(o,e,n,r));return i}}function x_(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let l=il(n,s?r:null),a=!1;l?a=!0:r instanceof j?(l=cd(n,r),a=!1):(l=j.EMPTY_NODE,a=!1);const u=Ml(new An(l,a,!1),new An(r,s,!1));return new H0(e,u)}return o}function Z0(t,e,n,r,s,i){const o=x_(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Q0(o,n),Y0(o,n)}function eI(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const l=On(t);if(s==="default")for(const[a,u]of t.views.entries())o=o.concat(Df(u,n,r)),Lf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||i.push(u.query));else{const a=t.views.get(s);a&&(o=o.concat(Df(a,n,r)),Lf(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||i.push(a.query)))}return l&&!On(t)&&i.push(new(J0())(e._repo,e._path)),{removed:i,events:o}}function A_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Nn(t,e){let n=null;for(const r of t.views.values())n=n||K0(r,e);return n}function O_(t,e){if(e._queryParams.loadsAllData())return jl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function L_(t,e){return O_(t,e)!=null}function On(t){return jl(t)!=null}function jl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ul;function tI(t){x(!ul,"__referenceConstructor has already been defined"),ul=t}function nI(){return x(ul,"Reference.ts has not been loaded"),ul}let rI=1;class bf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ne(null),this.pendingWriteTree_=O0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function D_(t,e,n,r,s){return S0(t.pendingWriteTree_,e,n,r,s),s?Li(t,new rr(y_(),e,n)):[]}function Kn(t,e,n=!1){const r=E0(t.pendingWriteTree_,e);if(C0(t.pendingWriteTree_,e)){let i=new ne(null);return r.snap!=null?i=i.set(Y(),!0):Ge(r.children,o=>{i=i.set(new X(o),!0)}),Li(t,new rl(r.path,i,n))}else return[]}function Oi(t,e,n){return Li(t,new rr(ad(),e,n))}function sI(t,e,n){const r=ne.fromObject(n);return Li(t,new mi(ad(),e,r))}function iI(t,e){return Li(t,new pi(ad(),e))}function oI(t,e,n){const r=md(t,n);if(r){const s=gd(r),i=s.path,o=s.queryId,l=De(i,e),a=new pi(ud(o),l);return _d(t,i,a)}else return[]}function cl(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||L_(o,e))){const a=eI(o,e,n,r);X0(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=a.removed;if(l=a.events,!s){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(i,(h,v)=>On(v));if(d&&!c){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const v=uI(h);for(let _=0;_<v.length;++_){const y=v[_],N=y.query,m=F_(t,y);t.listenProvider_.startListening(Bs(N),gi(t,N),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Bs(e),null):u.forEach(h=>{const v=t.queryToTagMap.get(Fl(h));t.listenProvider_.stopListening(Bs(h),v)}))}cI(t,u)}return l}function M_(t,e,n,r){const s=md(t,r);if(s!=null){const i=gd(s),o=i.path,l=i.queryId,a=De(o,e),u=new rr(ud(l),a,n);return _d(t,o,u)}else return[]}function lI(t,e,n,r){const s=md(t,r);if(s){const i=gd(s),o=i.path,l=i.queryId,a=De(o,e),u=ne.fromObject(n),d=new mi(ud(l),a,u);return _d(t,o,d)}else return[]}function Bu(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(h,v)=>{const _=De(h,s);i=i||Nn(v,_),o=o||On(v)});let l=t.syncPointTree_.get(s);l?(o=o||On(l),i=i||Nn(l,Y())):(l=new P_,t.syncPointTree_=t.syncPointTree_.set(s,l));let a;i!=null?a=!0:(a=!1,i=j.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((v,_)=>{const y=Nn(_,Y());y&&(i=i.updateImmediateChild(v,y))}));const u=L_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Fl(e);x(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const v=dI();t.queryToTagMap.set(h,v),t.tagToQueryMap.set(v,h)}const d=bl(t.pendingWriteTree_,s);let c=Z0(l,e,n,d,i,a);if(!u&&!o&&!r){const h=O_(l,e);c=c.concat(hI(t,e,h))}return c}function pd(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=De(o,e),u=Nn(l,a);if(u)return u});return C_(s,e,i,n,!0)}function aI(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=De(u,n);r=r||Nn(d,c)});let s=t.syncPointTree_.get(n);s?r=r||Nn(s,Y()):(s=new P_,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new An(r,!0,!1):null,l=bl(t.pendingWriteTree_,e._path),a=x_(s,e,l,i?o.getNode():j.EMPTY_NODE,i);return G0(a)}function Li(t,e){return b_(e,t.syncPointTree_,null,bl(t.pendingWriteTree_,Y()))}function b_(t,e,n,r){if(B(t.path))return j_(t,e,n,r);{const s=e.get(Y());n==null&&s!=null&&(n=Nn(s,Y()));let i=[];const o=W(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=I_(r,o);i=i.concat(b_(l,a,u,d))}return s&&(i=i.concat(fd(s,t,r,n))),i}}function j_(t,e,n,r){const s=e.get(Y());n==null&&s!=null&&(n=Nn(s,Y()));let i=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=I_(r,o),d=t.operationForChild(o);d&&(i=i.concat(j_(d,l,a,u)))}),s&&(i=i.concat(fd(s,t,r,n))),i}function F_(t,e){const n=e.query,r=gi(t,n);return{hashFn:()=>($0(e)||j.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?oI(t,n._path,r):iI(t,n._path);{const i=aC(s,n);return cl(t,n,null,i)}}}}function gi(t,e){const n=Fl(e);return t.queryToTagMap.get(n)}function Fl(t){return t._path.toString()+"$"+t._queryIdentifier}function md(t,e){return t.tagToQueryMap.get(e)}function gd(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function _d(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const s=bl(t.pendingWriteTree_,e);return fd(r,n,s,null)}function uI(t){return t.fold((e,n,r)=>{if(n&&On(n))return[jl(n)];{let s=[];return n&&(s=A_(n)),Ge(r,(i,o)=>{s=s.concat(o)}),s}})}function Bs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(nI())(t._repo,t._path):t}function cI(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Fl(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function dI(){return rI++}function hI(t,e,n){const r=e._path,s=gi(t,e),i=F_(t,n),o=t.listenProvider_.startListening(Bs(e),s,i.hashFn,i.onComplete),l=t.syncPointTree_.subtree(r);if(s)x(!On(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!B(u)&&d&&On(d))return[jl(d).query];{let h=[];return d&&(h=h.concat(A_(d).map(v=>v.query))),Ge(c,(v,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Bs(d),gi(t,d))}}return o}/**
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
 */class vd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vd(n)}node(){return this.node_}}class yd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=me(this.path_,e);return new yd(this.syncTree_,n)}node(){return pd(this.syncTree_,this.path_)}}const fI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jf=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return pI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return mI(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},pI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},mI=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const s=e.node();if(x(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},gI=function(t,e,n,r){return wd(e,new yd(n,t),r)},U_=function(t,e,n){return wd(t,new vd(e),n)};function wd(t,e,n){const r=t.getPriority().val(),s=jf(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=jf(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new _e(l,we(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new _e(s))),o.forEachChild(ce,(l,a)=>{const u=wd(a,e.getImmediateChild(l),n);u!==a&&(i=i.updateImmediateChild(l,u))}),i}}/**
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
 */class Sd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ed(t,e){let n=e instanceof X?e:new X(e),r=t,s=W(n);for(;s!==null;){const i=Kr(r.node.children,s)||{children:{},childCount:0};r=new Sd(s,r,i),n=Z(n),s=W(n)}return r}function ls(t){return t.node.value}function W_(t,e){t.node.value=e,Hu(t)}function z_(t){return t.node.childCount>0}function _I(t){return ls(t)===void 0&&!z_(t)}function Ul(t,e){Ge(t.node.children,(n,r)=>{e(new Sd(n,t,r))})}function V_(t,e,n,r){n&&e(t),Ul(t,s=>{V_(s,e,!0)})}function vI(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Di(t){return new X(t.parent===null?t.name:Di(t.parent)+"/"+t.name)}function Hu(t){t.parent!==null&&yI(t.parent,t.name,t)}function yI(t,e,n){const r=_I(n),s=en(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Hu(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Hu(t))}/**
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
 */const wI=/[\[\].#$\/\u0000-\u001F\u007F]/,SI=/[\[\].#$\u0000-\u001F\u007F]/,Pa=10*1024*1024,B_=function(t){return typeof t=="string"&&t.length!==0&&!wI.test(t)},H_=function(t){return typeof t=="string"&&t.length!==0&&!SI.test(t)},EI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),H_(t)},$_=function(t,e,n,r){r&&e===void 0||Cd(Yc(t,"value"),e,n)},Cd=function(t,e,n){const r=n instanceof X?new zC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Vn(r)+" with contents = "+e.toString());if(zg(e))throw new Error(t+"contains "+e.toString()+" "+Vn(r));if(typeof e=="string"&&e.length>Pa/3&&Ll(e)>Pa)throw new Error(t+"contains a string greater than "+Pa+" utf8 bytes "+Vn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Ge(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!B_(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);VC(r,o),Cd(t,l,r),BC(r)}),s&&i)throw new Error(t+' contains ".value" child '+Vn(r)+" in addition to actual children.")}},G_=function(t,e,n,r){if(!H_(n))throw new Error(Yc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},CI=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),G_(t,e,n)},Id=function(t,e){if(W(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},II=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!B_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!EI(n))throw new Error(Yc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class kI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kd(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!rd(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function K_(t,e,n){kd(t,n),Q_(t,r=>rd(r,e))}function Ot(t,e,n){kd(t,n),Q_(t,r=>pt(r,e)||pt(e,r))}function Q_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(TI(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function TI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Us&&Pe("event: "+n.toString()),os(r)}}}/**
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
 */const NI="repo_interrupt",RI=25;class PI{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nl(),this.transactionQueueTree_=new Sd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xI(t,e,n){if(t.stats_=td(t.repoInfo_),t.forceRestClient_||hC())t.server_=new tl(t.repoInfo_,(r,s,i,o)=>{Ff(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Uf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ht(t.repoInfo_,e,(r,s,i,o)=>{Ff(t,r,s,i,o)},r=>{Uf(t,r)},r=>{AI(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=_C(t.repoInfo_,()=>new m0(t.stats_,t.server_)),t.infoData_=new c0,t.infoSyncTree_=new bf({startListening:(r,s,i,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Oi(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Nd(t,"connected",!1),t.serverSyncTree_=new bf({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(l,a)=>{const u=o(l,a);Ot(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function Y_(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Td(t){return fI({timestamp:Y_(t)})}function Ff(t,e,n,r,s){t.dataUpdateCount++;const i=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const a=Yo(n,u=>we(u));o=lI(t.serverSyncTree_,i,a,s)}else{const a=we(n);o=M_(t.serverSyncTree_,i,a,s)}else if(r){const a=Yo(n,u=>we(u));o=sI(t.serverSyncTree_,i,a)}else{const a=we(n);o=Oi(t.serverSyncTree_,i,a)}let l=i;o.length>0&&(l=zl(t,i)),Ot(t.eventQueue_,l,o)}function Uf(t,e){Nd(t,"connected",e),e===!1&&DI(t)}function AI(t,e){Ge(e,(n,r)=>{Nd(t,n,r)})}function Nd(t,e,n){const r=new X("/.info/"+e),s=we(n);t.infoData_.updateSnapshot(r,s);const i=Oi(t.infoSyncTree_,r,s);Ot(t.eventQueue_,r,i)}function q_(t){return t.nextWriteId_++}function OI(t,e,n){const r=aI(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=we(s).withIndex(e._queryParams.getIndex());Bu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Oi(t.serverSyncTree_,e._path,i);else{const l=gi(t.serverSyncTree_,e);o=M_(t.serverSyncTree_,e._path,i,l)}return Ot(t.eventQueue_,e._path,o),cl(t.serverSyncTree_,e,n,null,!0),i},s=>(Wl(t,"get for query "+pe(e)+" failed: "+s),Promise.reject(new Error(s))))}function LI(t,e,n,r,s){Wl(t,"set",{path:e.toString(),value:n,priority:r});const i=Td(t),o=we(n,r),l=pd(t.serverSyncTree_,e),a=U_(o,l,i),u=q_(t),d=D_(t.serverSyncTree_,e,a,u,!0);kd(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,v)=>{const _=h==="ok";_||$e("set at "+e+" failed: "+h);const y=Kn(t.serverSyncTree_,u,!_);Ot(t.eventQueue_,e,y),jI(t,s,h,v)});const c=tv(t,e);zl(t,c),Ot(t.eventQueue_,c,[])}function DI(t){Wl(t,"onDisconnectEvents");const e=Td(t),n=nl();Fu(t.onDisconnect_,Y(),(s,i)=>{const o=gI(s,i,t.serverSyncTree_,e);v_(n,s,o)});let r=[];Fu(n,Y(),(s,i)=>{r=r.concat(Oi(t.serverSyncTree_,s,i));const o=tv(t,s);zl(t,o)}),t.onDisconnect_=nl(),Ot(t.eventQueue_,Y(),r)}function MI(t,e,n){let r;W(e._path)===".info"?r=Bu(t.infoSyncTree_,e,n):r=Bu(t.serverSyncTree_,e,n),K_(t.eventQueue_,e._path,r)}function $u(t,e,n){let r;W(e._path)===".info"?r=cl(t.infoSyncTree_,e,n):r=cl(t.serverSyncTree_,e,n),K_(t.eventQueue_,e._path,r)}function bI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(NI)}function Wl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Pe(n,...e)}function jI(t,e,n,r){e&&os(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function J_(t,e,n){return pd(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function Rd(t,e=t.transactionQueueTree_){if(e||Vl(t,e),ls(e)){const n=Z_(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&FI(t,Di(e),n)}else z_(e)&&Ul(e,n=>{Rd(t,n)})}function FI(t,e,n){const r=n.map(u=>u.currentWriteId),s=J_(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const d=n[u];x(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=De(e,d.path);i=i.updateChild(c,d.currentOutputSnapshotRaw)}const l=i.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Wl(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Kn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Vl(t,Ed(t.transactionQueueTree_,e)),Rd(t,t.transactionQueueTree_),Ot(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)os(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{$e("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}zl(t,e)}},o)}function zl(t,e){const n=X_(t,e),r=Di(n),s=Z_(t,n);return UI(t,s,r),r}function UI(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=De(n,a.path);let d=!1,c;if(x(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,s=s.concat(Kn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=RI)d=!0,c="maxretry",s=s.concat(Kn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=J_(t,a.path,o);a.currentInputSnapshot=h;const v=e[l].update(h.val());if(v!==void 0){Cd("transaction failed: Data returned ",v,a.path);let _=we(v);typeof v=="object"&&v!=null&&en(v,".priority")||(_=_.updatePriority(h.getPriority()));const N=a.currentWriteId,m=Td(t),p=U_(_,h,m);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=p,a.currentWriteId=q_(t),o.splice(o.indexOf(N),1),s=s.concat(D_(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),s=s.concat(Kn(t.serverSyncTree_,N,!0))}else d=!0,c="nodata",s=s.concat(Kn(t.serverSyncTree_,a.currentWriteId,!0))}Ot(t.eventQueue_,n,s),s=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Vl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)os(r[l]);Rd(t,t.transactionQueueTree_)}function X_(t,e){let n,r=t.transactionQueueTree_;for(n=W(e);n!==null&&ls(r)===void 0;)r=Ed(r,n),e=Z(e),n=W(e);return r}function Z_(t,e){const n=[];return ev(t,e,n),n.sort((r,s)=>r.order-s.order),n}function ev(t,e,n){const r=ls(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Ul(e,s=>{ev(t,s,n)})}function Vl(t,e){const n=ls(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,W_(e,n.length>0?n:void 0)}Ul(e,r=>{Vl(t,r)})}function tv(t,e){const n=Di(X_(t,e)),r=Ed(t.transactionQueueTree_,e);return vI(r,s=>{xa(t,s)}),xa(t,r),V_(r,s=>{xa(t,s)}),n}function xa(t,e){const n=ls(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Kn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?W_(e,void 0):n.length=i+1,Ot(t.eventQueue_,Di(e),s);for(let o=0;o<r.length;o++)os(r[o])}}/**
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
 */function WI(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function zI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):$e(`Invalid query segment '${n}' in query '${t}'`)}return e}const Wf=function(t,e){const n=VI(t),r=n.namespace;n.domain==="firebase.com"&&Jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||rC();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Zg(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new X(n.pathString)}},VI=function(t){let e="",n="",r="",s="",i="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(s=WI(t.substring(d,c)));const h=zI(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const v=e.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),i=r}"ns"in h&&(i=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:s,namespace:i}};/**
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
 */const zf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",BI=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=zf.charAt(n%64),n=Math.floor(n/64);x(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=zf.charAt(e[s]);return x(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class HI{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class $I{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class nv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Pd{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return B(this._path)?null:a_(this._path)}get ref(){return new tn(this._repo,this._path)}get _queryIdentifier(){const e=kf(this._queryParams),n=Zc(e);return n==="{}"?"default":n}get _queryObject(){return kf(this._queryParams)}isEqual(e){if(e=Ae(e),!(e instanceof Pd))return!1;const n=this._repo===e._repo,r=rd(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+WC(this._path)}}class tn extends Pd{constructor(e,n){super(e,n,new ld,!1)}get parent(){const e=c_(this._path);return e===null?null:new tn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _i{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new X(e),r=vi(this.ref,e);return new _i(this._node.getChild(n),r,ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new _i(s,vi(this.ref,r),ce)))}hasChild(e){const n=new X(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function qe(t,e){return t=Ae(t),t._checkNotDeleted("ref"),e!==void 0?vi(t._root,e):t._root}function vi(t,e){return t=Ae(t),W(t._path)===null?CI("child","path",e):G_("child","path",e),new tn(t._repo,me(t._path,e))}function GI(t,e){t=Ae(t),Id("push",t._path),$_("push",e,t._path,!0);const n=Y_(t._repo),r=BI(n),s=vi(t,r),i=vi(t,r);let o;return o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function KI(t){return Id("remove",t._path),yi(t,null)}function yi(t,e){t=Ae(t),Id("set",t._path),$_("set",e,t._path,!1);const n=new Ol;return LI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Gu(t){t=Ae(t);const e=new nv(()=>{}),n=new Bl(e);return OI(t._repo,t,n).then(r=>new _i(r,new tn(t._repo,t._path),t._queryParams.getIndex()))}class Bl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new HI("value",this,new _i(e.snapshotNode,new tn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new $I(this,e,n):null}matches(e){return e instanceof Bl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function QI(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const a=n,u=(d,c)=>{$u(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new nv(n,i||void 0),l=new Bl(o);return MI(t._repo,t,l),()=>$u(t._repo,t,l)}function wi(t,e,n,r){return QI(t,"value",e,n,r)}function rv(t,e,n){$u(t._repo,t,null)}q0(tn);tI(tn);/**
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
 */const YI="FIREBASE_DATABASE_EMULATOR_HOST",Ku={};let qI=!1;function JI(t,e,n,r){t.repoInfo_=new Zg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function XI(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Pe("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Wf(i,s),l=o.repoInfo,a;typeof process<"u"&&lf&&(a=lf[YI]),a?(i=`http://${a}?ns=${l.namespace}`,o=Wf(i,s),l=o.repoInfo):o.repoInfo.secure;const u=new pC(t.name,t.options,e);II("Invalid Firebase Database URL",o),B(o.path)||Jt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=ek(l,t,u,new fC(t.name,n));return new tk(d,t)}function ZI(t,e){const n=Ku[e];(!n||n[t.key]!==t)&&Jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),bI(t),delete n[t.key]}function ek(t,e,n,r){let s=Ku[e.name];s||(s={},Ku[e.name]=s);let i=s[t.toURLString()];return i&&Jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new PI(t,qI,n,r),s[t.toURLString()]=i,i}class tk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new tn(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ZI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Jt("Cannot call "+e+" on a deleted database.")}}function nk(t=Mg(),e){const n=Xc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=TS("database");r&&rk(n,...r)}return n}function rk(t,e,n,r={}){t=Ae(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Jt("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Jt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new vo(vo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:NS(r.mockUserToken,t.app.options.projectId);i=new vo(o)}JI(s,e,n,i)}/**
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
 */function sk(t){JE(ss),Qr(new tr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return XI(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),kn(af,uf,t),kn(af,uf,"esm2017")}Ht.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ht.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};sk();var ik="firebase",ok="10.14.1";/**
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
 */kn(ik,ok,"app");function xd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function sv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lk=sv,iv=new Ri("auth","Firebase",sv());/**
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
 */const dl=new qc("@firebase/auth");function ak(t,...e){dl.logLevel<=J.WARN&&dl.warn(`Auth (${ss}): ${t}`,...e)}function yo(t,...e){dl.logLevel<=J.ERROR&&dl.error(`Auth (${ss}): ${t}`,...e)}/**
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
 */function wt(t,...e){throw Ad(t,...e)}function xt(t,...e){return Ad(t,...e)}function ov(t,e,n){const r=Object.assign(Object.assign({},lk()),{[e]:n});return new Ri("auth","Firebase",r).create(e,{appName:t.name})}function $t(t){return ov(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ad(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iv.create(t,...e)}function F(t,e,...n){if(!t)throw Ad(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yo(e),new Error(e)}function Xt(t,e){t||Wt(e)}/**
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
 */function Qu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uk(){return Vf()==="http:"||Vf()==="https:"}function Vf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ck(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uk()||PS()||"connection"in navigator)?navigator.onLine:!0}function dk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Mi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xt(n>e,"Short delay should be less than long delay!"),this.isMobile=Qc()||xg()}get(){return ck()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Od(t,e){Xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class lv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fk=new Mi(3e4,6e4);function jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fn(t,e,n,r,s={}){return av(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=rs(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},i);return RS()||(u.referrerPolicy="no-referrer"),lv.fetch()(uv(t,t.config.apiHost,n,l),u)})}async function av(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hk),e);try{const s=new mk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw so(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw so(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw so(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw so(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ov(t,d,u);wt(t,d)}}catch(s){if(s instanceof bn)throw s;wt(t,"network-request-failed",{message:String(s)})}}async function bi(t,e,n,r,s={}){const i=await Fn(t,e,n,r,s);return"mfaPendingCredential"in i&&wt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function uv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Od(t.config,s):`${t.config.apiScheme}://${s}`}function pk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),fk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function so(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=xt(t,e,r);return s.customData._tokenResponse=n,s}function Bf(t){return t!==void 0&&t.enterprise!==void 0}class gk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _k(t,e){return Fn(t,"GET","/v2/recaptchaConfig",jn(t,e))}/**
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
 */async function vk(t,e){return Fn(t,"POST","/v1/accounts:delete",e)}async function cv(t,e){return Fn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yk(t,e=!1){const n=Ae(t),r=await n.getIdToken(e),s=Ld(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Hs(Aa(s.auth_time)),issuedAtTime:Hs(Aa(s.iat)),expirationTime:Hs(Aa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Aa(t){return Number(t)*1e3}function Ld(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qo(n);return s?JSON.parse(s):(yo("Failed to decode base64 JWT payload"),null)}catch(s){return yo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hf(t){const e=Ld(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Si(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&wk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Sk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Si(t,cv(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?dv(i.providerUserInfo):[],l=Ck(t.providerData,o),a=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Yu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function Ek(t){const e=Ae(t);await hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ck(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function dv(t){return t.map(e=>{var{providerId:n}=e,r=xd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ik(t,e){const n=await av(t,{},async()=>{const r=rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=uv(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",lv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kk(t,e){return Fn(t,"POST","/v2/accounts:revokeToken",jn(t,e))}/**
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
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){F(e.length!==0,"internal-error");const n=Hf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ik(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new jr;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
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
 */function rn(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Si(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yk(this,e)}reload(){return Ek(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject($t(this.auth));const e=await this.getIdToken();return await Si(this,vk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:w,isAnonymous:S,providerData:I,stsTokenManager:P}=n;F(g&&P,e,"internal-error");const k=jr.fromJSON(this.name,P);F(typeof g=="string",e,"internal-error"),rn(c,e.name),rn(h,e.name),F(typeof w=="boolean",e,"internal-error"),F(typeof S=="boolean",e,"internal-error"),rn(v,e.name),rn(_,e.name),rn(y,e.name),rn(N,e.name),rn(m,e.name),rn(p,e.name);const C=new zt({uid:g,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:S,photoURL:_,phoneNumber:v,tenantId:y,stsTokenManager:k,createdAt:m,lastLoginAt:p});return I&&Array.isArray(I)&&(C.providerData=I.map(E=>Object.assign({},E))),N&&(C._redirectEventId=N),C}static async _fromIdTokenResponse(e,n,r=!1){const s=new jr;s.updateFromServerResponse(n);const i=new zt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await hl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];F(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?dv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new jr;l.updateFromIdToken(r);const a=new zt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Yu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,u),a}}/**
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
 */const $f=new Map;function Vt(t){Xt(t instanceof Function,"Expected a class definition");let e=$f.get(t);return e?(Xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$f.set(t,e),e)}/**
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
 */class hv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hv.type="NONE";const Gf=hv;/**
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
 */function wo(t,e,n){return`firebase:${t}:${e}:${n}`}class Fr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=wo(this.userKey,s.apiKey,i),this.fullPersistenceKey=wo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fr(Vt(Gf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Vt(Gf);const o=wo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=zt._fromJSON(e,d);u!==i&&(l=c),i=u;break}}catch{}const a=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Fr(i,e,r):(i=a[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Fr(i,e,r))}}/**
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
 */function Kf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vv(e))return"Blackberry";if(yv(e))return"Webos";if(pv(e))return"Safari";if((e.includes("chrome/")||mv(e))&&!e.includes("edge/"))return"Chrome";if(_v(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fv(t=be()){return/firefox\//i.test(t)}function pv(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mv(t=be()){return/crios\//i.test(t)}function gv(t=be()){return/iemobile/i.test(t)}function _v(t=be()){return/android/i.test(t)}function vv(t=be()){return/blackberry/i.test(t)}function yv(t=be()){return/webos/i.test(t)}function Dd(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Tk(t=be()){var e;return Dd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Nk(){return xS()&&document.documentMode===10}function wv(t=be()){return Dd(t)||_v(t)||yv(t)||vv(t)||/windows phone/i.test(t)||gv(t)}/**
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
 */function Sv(t,e=[]){let n;switch(t){case"Browser":n=Kf(be());break;case"Worker":n=`${Kf(be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ss}/${r}`}/**
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
 */class Rk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const a=e(i);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Pk(t,e={}){return Fn(t,"GET","/v2/passwordPolicy",jn(t,e))}/**
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
 */const xk=6;class Ak{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:xk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Ok{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qf(this),this.idTokenSubscription=new Qf(this),this.beforeStateQueue=new Rk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await cv(this,{idToken:e}),r=await zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nt(this.app))return Promise.reject($t(this));const n=e?Ae(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject($t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nt(this.app)?Promise.reject($t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Pk(this),n=new Ak(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ri("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ak(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cr(t){return Ae(t)}class Qf{constructor(e){this.auth=e,this.observer=null,this.addObserver=WS(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lk(t){Hl=t}function Ev(t){return Hl.loadJS(t)}function Dk(){return Hl.recaptchaEnterpriseScript}function Mk(){return Hl.gapiScript}function bk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const jk="recaptcha-enterprise",Fk="NO_RECAPTCHA";class Uk{constructor(e){this.type=jk,this.auth=cr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{_k(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new gk(a);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function s(i,o,l){const a=window.grecaptcha;Bf(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Fk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Bf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Dk();a.length!==0&&(a+=l),Ev(a).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Yf(t,e,n,r=!1){const s=new Uk(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function qu(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Yf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Yf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function Wk(t,e){const n=Xc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(qo(i,e??{}))return s;wt(s,"already-initialized")}return n.initialize({options:e})}function zk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Vk(t,e,n){const r=cr(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Cv(e),{host:o,port:l}=Bk(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Hk()}function Cv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bk(t){const e=Cv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:qf(o)}}}function qf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Hk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Md{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function $k(t,e){return Fn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Gk(t,e){return bi(t,"POST","/v1/accounts:signInWithPassword",jn(t,e))}/**
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
 */async function Kk(t,e){return bi(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}async function Qk(t,e){return bi(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}/**
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
 */class Ei extends Md{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ei(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ei(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qu(e,n,"signInWithPassword",Gk);case"emailLink":return Kk(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qu(e,r,"signUpPassword",$k);case"emailLink":return Qk(e,{idToken:n,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ur(t,e){return bi(t,"POST","/v1/accounts:signInWithIdp",jn(t,e))}/**
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
 */const Yk="http://localhost";class ir extends Md{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ir(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ur(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ur(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ur(e,n)}buildRequest(){const e={requestUri:Yk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=rs(n)}return e}}/**
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
 */function qk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jk(t){const e=Rs(Ps(t)).link,n=e?Rs(Ps(e)).deep_link_id:null,r=Rs(Ps(t)).deep_link_id;return(r?Rs(Ps(r)).link:null)||r||n||e||t}class bd{constructor(e){var n,r,s,i,o,l;const a=Rs(Ps(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,c=qk((s=a.mode)!==null&&s!==void 0?s:null);F(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Jk(e);try{return new bd(n)}catch{return null}}}/**
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
 */class as{constructor(){this.providerId=as.PROVIDER_ID}static credential(e,n){return Ei._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bd.parseLink(n);return F(r,"argument-error"),Ei._fromEmailAndCode(e,r.code,r.tenantId)}}as.PROVIDER_ID="password";as.EMAIL_PASSWORD_SIGN_IN_METHOD="password";as.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Iv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ji extends Iv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class un extends ji{constructor(){super("facebook.com")}static credential(e){return ir._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
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
 */class cn extends ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ir._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
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
 */class dn extends ji{constructor(){super("github.com")}static credential(e){return ir._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
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
 */class hn extends ji{constructor(){super("twitter.com")}static credential(e,n){return ir._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
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
 */async function Xk(t,e){return bi(t,"POST","/v1/accounts:signUp",jn(t,e))}/**
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
 */class or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await zt._fromIdTokenResponse(e,r,s),o=Jf(r);return new or({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Jf(r);return new or({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Jf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fl extends bn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,fl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new fl(e,n,r,s)}}function kv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?fl._fromErrorAndOperation(t,i,e,r):i})}async function Zk(t,e,n=!1){const r=await Si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return or._forOperation(t,"link",r)}/**
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
 */async function eT(t,e,n=!1){const{auth:r}=t;if(Nt(r.app))return Promise.reject($t(r));const s="reauthenticate";try{const i=await Si(t,kv(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=Ld(i.idToken);F(o,r,"internal-error");const{sub:l}=o;return F(t.uid===l,r,"user-mismatch"),or._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wt(r,"user-mismatch"),i}}/**
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
 */async function Tv(t,e,n=!1){if(Nt(t.app))return Promise.reject($t(t));const r="signIn",s=await kv(t,r,e),i=await or._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function tT(t,e){return Tv(cr(t),e)}/**
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
 */async function Nv(t){const e=cr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nT(t,e,n){if(Nt(t.app))return Promise.reject($t(t));const r=cr(t),o=await qu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Xk).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Nv(t),a}),l=await or._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function rT(t,e,n){return Nt(t.app)?Promise.reject($t(t)):tT(Ae(t),as.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Nv(t),r})}function sT(t,e,n,r){return Ae(t).onIdTokenChanged(e,n,r)}function iT(t,e,n){return Ae(t).beforeAuthStateChanged(e,n)}function oT(t,e,n,r){return Ae(t).onAuthStateChanged(e,n,r)}function Rv(t){return Ae(t).signOut()}const pl="__sak";/**
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
 */class Pv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pl,"1"),this.storage.removeItem(pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const lT=1e3,aT=10;class xv extends Pv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Nk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,aT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xv.type="LOCAL";const uT=xv;/**
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
 */class Av extends Pv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Av.type="SESSION";const Ov=Av;/**
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
 */function cT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $l{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new $l(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),a=await cT(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$l.receivers=[];/**
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
 */function jd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,a)=>{const u=jd("",20);s.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(h.data.response);break;default:clearTimeout(d),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function At(){return window}function hT(t){At().location.href=t}/**
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
 */function Lv(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function fT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mT(){return Lv()?self:null}/**
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
 */const Dv="firebaseLocalStorageDb",gT=1,ml="firebaseLocalStorage",Mv="fbase_key";class Fi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gl(t,e){return t.transaction([ml],e?"readwrite":"readonly").objectStore(ml)}function _T(){const t=indexedDB.deleteDatabase(Dv);return new Fi(t).toPromise()}function Ju(){const t=indexedDB.open(Dv,gT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ml,{keyPath:Mv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ml)?e(r):(r.close(),await _T(),e(await Ju()))})})}async function Xf(t,e,n){const r=Gl(t,!0).put({[Mv]:e,value:n});return new Fi(r).toPromise()}async function vT(t,e){const n=Gl(t,!1).get(e),r=await new Fi(n).toPromise();return r===void 0?null:r.value}function Zf(t,e){const n=Gl(t,!0).delete(e);return new Fi(n).toPromise()}const yT=800,wT=3;class bv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ju(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$l._getInstance(mT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fT(),!this.activeServiceWorker)return;this.sender=new dT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ju();return await Xf(e,pl,"1"),await Zf(e,pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Gl(s,!1).getAll();return new Fi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bv.type="LOCAL";const ST=bv;new Mi(3e4,6e4);/**
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
 */function ET(t,e){return e?Vt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fd extends Md{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ur(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ur(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CT(t){return Tv(t.auth,new Fd(t),t.bypassAuthState)}function IT(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),eT(n,new Fd(t),t.bypassAuthState)}async function kT(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Zk(n,new Fd(t),t.bypassAuthState)}/**
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
 */class jv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CT;case"linkViaPopup":case"linkViaRedirect":return kT;case"reauthViaPopup":case"reauthViaRedirect":return IT;default:wt(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TT=new Mi(2e3,1e4);class Rr extends jv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rr.currentPopupAction&&Rr.currentPopupAction.cancel(),Rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TT.get())};e()}}Rr.currentPopupAction=null;/**
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
 */const NT="pendingRedirect",So=new Map;class RT extends jv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=So.get(this.auth._key());if(!e){try{const r=await PT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}So.set(this.auth._key(),e)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PT(t,e){const n=OT(e),r=AT(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function xT(t,e){So.set(t._key(),e)}function AT(t){return Vt(t._redirectPersistence)}function OT(t){return wo(NT,t.config.apiKey,t.name)}async function LT(t,e,n=!1){if(Nt(t.app))return Promise.reject($t(t));const r=cr(t),s=ET(r,e),o=await new RT(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const DT=10*60*1e3;class MT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Fv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DT&&this.cachedEventUids.clear(),this.cachedEventUids.has(ep(e))}saveEventToCache(e){this.cachedEventUids.add(ep(e)),this.lastProcessedEventTime=Date.now()}}function ep(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fv(t);default:return!1}}/**
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
 */async function jT(t,e={}){return Fn(t,"GET","/v1/projects",e)}/**
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
 */const FT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UT=/^https?/;async function WT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jT(t);for(const n of e)try{if(zT(n))return}catch{}wt(t,"unauthorized-domain")}function zT(t){const e=Qu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!UT.test(n))return!1;if(FT.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const VT=new Mi(3e4,6e4);function tp(){const t=At().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BT(t){return new Promise((e,n)=>{var r,s,i;function o(){tp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tp(),n(xt(t,"network-request-failed"))},timeout:VT.get()})}if(!((s=(r=At().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=At().gapi)===null||i===void 0)&&i.load)o();else{const l=bk("iframefcb");return At()[l]=()=>{gapi.load?o():n(xt(t,"network-request-failed"))},Ev(`${Mk()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function HT(t){return Eo=Eo||BT(t),Eo}/**
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
 */const $T=new Mi(5e3,15e3),GT="__/auth/iframe",KT="emulator/auth/iframe",QT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qT(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Od(e,KT):`https://${t.config.authDomain}/${GT}`,r={apiKey:e.apiKey,appName:t.name,v:ss},s=YT.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${rs(r).slice(1)}`}async function JT(t){const e=await HT(t),n=At().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:qT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=xt(t,"network-request-failed"),l=At().setTimeout(()=>{i(o)},$T.get());function a(){At().clearTimeout(l),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const XT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZT=500,eN=600,tN="_blank",nN="http://localhost";class np{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rN(t,e,n,r=ZT,s=eN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},XT),{width:r.toString(),height:s.toString(),top:i,left:o}),u=be().toLowerCase();n&&(l=mv(u)?tN:n),fv(u)&&(e=e||nN,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[v,_])=>`${h}${v}=${_},`,"");if(Tk(u)&&l!=="_self")return sN(e||"",l),new np(null);const c=window.open(e||"",l,d);F(c,t,"popup-blocked");try{c.focus()}catch{}return new np(c)}function sN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const iN="__/auth/handler",oN="emulator/auth/handler",lN=encodeURIComponent("fac");async function rp(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ss,eventId:s};if(e instanceof Iv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof ji){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${lN}=${encodeURIComponent(a)}`:"";return`${aN(t)}?${rs(l).slice(1)}${u}`}function aN({config:t}){return t.emulator?Od(t,oN):`https://${t.authDomain}/${iN}`}/**
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
 */const Oa="webStorageSupport";class uN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ov,this._completeRedirectFn=LT,this._overrideRedirectResult=xT}async _openPopup(e,n,r,s){var i;Xt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await rp(e,n,r,Qu(),s);return rN(e,o,jd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await rp(e,n,r,Qu(),s);return hT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Xt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JT(e),r=new MT(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oa,{type:Oa},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Oa];o!==void 0&&n(!!o),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return wv()||pv()||Dd()}}const cN=uN;var sp="@firebase/auth",ip="1.7.9";/**
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
 */class dN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fN(t){Qr(new tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sv(t)},u=new Ok(r,s,i,a);return zk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qr(new tr("auth-internal",e=>{const n=cr(e.getProvider("auth").getImmediate());return(r=>new dN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(sp,ip,hN(t)),kn(sp,ip,"esm2017")}/**
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
 */const pN=5*60,mN=Pg("authIdTokenMaxAge")||pN;let op=null;const gN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mN)return;const s=n==null?void 0:n.token;op!==s&&(op=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _N(t=Mg()){const e=Xc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wk(t,{popupRedirectResolver:cN,persistence:[ST,uT,Ov]}),r=Pg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=gN(i.toString());iT(n,o,()=>o(n.currentUser)),sT(n,l=>o(l))}}const s=Ng("auth");return s&&Vk(n,`http://${s}`),n}function vN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Lk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=xt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",vN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fN("Browser");const yN={apiKey:"AIzaSyAy55_y_kO6BEA2GgaSr7qgEW1DN3AnFz0",authDomain:"latvian-learn.firebaseapp.com",databaseURL:"https://latvian-learn-default-rtdb.europe-west1.firebasedatabase.app",projectId:"latvian-learn",storageBucket:"latvian-learn.appspot.com",messagingSenderId:"337514562639",appId:"1:337514562639:web:3ff5ed409a23c58c19d63a",measurementId:"G-9T2HD2YKLN"},Uv=Dg(yN),Xr=_N(Uv),Je=nk(Uv),wN="https://latvial-learn.latvial-learn.workers.dev",Wv=async(t,e)=>{const n=await fetch(`${wN}${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok)throw new Error("Worker request failed");return await n.json()},SN=t=>oT(Xr,async e=>{if(e!=null&&e.isAnonymous){await Rv(Xr),t(null);return}t(e?e.uid:null)}),EN=async(t,e)=>(await rT(Xr,t,e)).user.uid,CN=async(t,e)=>(await nT(Xr,t,e)).user.uid,IN=async t=>(await Wv("/auth/send-code",{email:t})).ticket,kN=async(t,e,n)=>(await Wv("/auth/verify-code",{email:t,code:e,ticket:n})).ok===!0,TN=async(t,e)=>{const n=qe(Je,`users/${t}/profile`);await yi(n,{email:e,createdAt:Date.now()})},NN=async()=>{await Rv(Xr)},RN=()=>{var t;return((t=Xr.currentUser)==null?void 0:t.email)||null},PN={ru:{title:"Тренировка слов",addWordTitle:"Добавить слово",translation:"Перевод",add:"Добавить",manage:"Управлять словами",listTitle:"Список слов",delete:"Удалить",check:"Проверить",noWords:"Слова не найдены",trainer:"Загрузка...",settings:"Настройки",settingsTitle:"Настройки",apply:"Применить",reset:"Сбросить",resetStats:"Сброс прогрессии",installApp:"Установить приложение",installAppAlready:"Приложение уже установлено или добавлено на главный экран.",nouns:"Существительные",verbs:"Глаголы",adjectives:"Прилагательные",mode_ru2lv:"С русского на латышский",mode_lv2ru:"С латышского на русский",mode_both:"Все вместе",randomAll:"Случайные слова",skip:"Пропустить",trainerTab:"Слова",manageTab:"Склонения",settingsTab:"Спряжения",word:"Слово",decl1:"1 склонение",decl2:"2 склонение",decl3:"3 склонение",decl4:"4 склонение",decl5:"5 склонение",decl6:"6 склонение",duplicateTitle:"Дубликат слова",duplicateExists:"Уже есть в базе:",duplicateNew:"Вы пытаетесь добавить:",duplicateConfirm:"Всё равно добавить?",yes:"Да",no:"Нет",myWords:"Мои слова",wordAddedSuccess:"Слово успешно добавлено!",total:"Всего",search:"Поиск",searchWords:"Поиск слов",enterWord:"Введите слово",enterLatvianWord:"Введите слово...",searchHint:"Можно ввести слово на другом языке",wordNotFound:"Слово не найдено",emptyWordList:"Список слов",emptyDeclensions:"Склонения",declensionsLoading:"Склонения загружаются из базы данных",selectDeclension:"Выберите правильное склонение:",addWordsOrPreset:"Добавьте слова ниже или выберите пресет в настройках",selectPreset:"Выберите готовый набор слов для тренировки",noData:"Нет данных",deleteConfirm:"Удалить слово",level:"Уровень сложности",wordType:"Тип слов",translationMode:"Режимы",addWordButton:"Добавить слово",wordProgress:"Слово",settingsTip:'Совет: Используйте кнопку "Сбросить" чтобы вернуться к своим словам',listEmpty:"Список пуст",saving:"Сохранение...",save:"Сохранить",unsavedChanges:"Несохранённые изменения",unsavedWarning:"У вас есть несохранённые изменения. Что вы хотите сделать?",discard:"Не сохранять",selectConjugation:"Выберите правильное спряжение:",correctForm:"Правильная форма",emptyConjugations:"Спряжения",conjugationsLoading:"Спряжения загружаются из базы данных",authTitle:"Вход",authSubtitle:"Введите email и пароль",email:"Email",password:"Пароль",login:"Войти",noAccount:"Нет аккаунта?",register:"Зарегистрироваться",haveAccount:"Уже есть аккаунт?",sendCode:"Отправить код",code:"Код из письма",verifyCode:"Подтвердить",codeSent:"Код отправлен на почту",invalidCode:"Неверный код",invalidEmail:"Некорректный email",passwordShort:"Пароль должен быть не менее 6 символов",sendCodeError:"Не удалось отправить код. Проверьте настройки Google Apps.",authError:"Неверный логин или пароль",accountExists:"Аккаунт с этой почтой уже зарегистрирован",back:"Назад",logout:"Выйти",wordleTab:"Wordle",wordleInstruction:"Угадайте латышское слово из 5 букв за 6 попыток.",wordleWin:"Отлично! Слово угадано.",wordleLose:"Попытки закончились. Слово было",wordleNewGame:"Новая игра",wordleShortGuess:"Введите 5 букв, чтобы проверить"},en:{title:"Word Trainer",addWordTitle:"Add word",translation:"Translation",add:"Add",manage:"Manage words",listTitle:"Word list",delete:"Delete",check:"Check",noWords:"Words not found",trainer:"Loading...",settings:"Settings",settingsTitle:"Settings",apply:"Apply",reset:"Reset",resetStats:"Reset Score",installApp:"Install app",installAppAlready:"App is already installed or added to your home screen.",nouns:"Nouns",verbs:"Verbs",adjectives:"Adjectives",mode_ru2lv:"From Russian to Latvian",mode_lv2ru:"From Latvian to Russian",mode_both:"Mixed",randomAll:"Random words",skip:"Skip",trainerTab:"Words",manageTab:"Declensions",settingsTab:"Conjugations",word:"Word",decl1:"1st declension",decl2:"2nd declension",decl3:"3rd declension",decl4:"4th declension",decl5:"5th declension",decl6:"6th declension",duplicateTitle:"Duplicate word",duplicateExists:"Already in database:",duplicateNew:"You are trying to add:",duplicateConfirm:"Add anyway?",yes:"Yes",no:"No",myWords:"My words",wordAddedSuccess:"Word added successfully!",total:"Total",search:"Search",searchWords:"Search Words",enterWord:"Enter a word",enterLatvianWord:"Enter word...",searchHint:"You can enter a word in another language",wordNotFound:"Word not found",emptyWordList:"Word list",emptyDeclensions:"Declensions",declensionsLoading:"Declensions are loading from the database",selectDeclension:"Select the correct declension:",addWordsOrPreset:"Add words below or select a preset in settings",selectPreset:"Select a ready-made set of words for training",noData:"No data",deleteConfirm:"Delete word",level:"Difficulty level",wordType:"Word type",translationMode:"Translation mode",addWordButton:"Add word",wordProgress:"Word",settingsTip:'Tip: Use the "Reset" button to return to your personal words',listEmpty:"List is empty",saving:"Saving...",save:"Save",unsavedChanges:"Unsaved changes",unsavedWarning:"You have unsaved changes. What would you like to do?",discard:"Don't save",selectConjugation:"Select the correct conjugation:",correctForm:"Correct form",emptyConjugations:"Conjugations",conjugationsLoading:"Conjugations are loading from the database",authTitle:"Sign in",authSubtitle:"Enter email and password",email:"Email",password:"Password",login:"Log in",noAccount:"No account?",register:"Register",haveAccount:"Already have an account?",sendCode:"Send code",code:"Email code",verifyCode:"Verify",codeSent:"Code sent to your email",invalidCode:"Invalid code",invalidEmail:"Invalid email",passwordShort:"Password must be at least 6 characters",sendCodeError:"Could not send the code. Check Google Apps settings.",authError:"Invalid login or password",accountExists:"Account with this email is already registered",back:"Back",logout:"Log out",wordleTab:"Wordle",wordleInstruction:"Guess the 5-letter Latvian word in 6 tries.",wordleWin:"Great! You found the word.",wordleLose:"No tries left. The word was",wordleNewGame:"New game",wordleShortGuess:"Type 5 letters to check"},lv:{title:"Vārdu treniņš",addWordTitle:"Pievienot vārdu",translation:"Tulkojums",add:"Pievienot",manage:"Pārvaldīt vārdus",listTitle:"Vārdu saraksts",delete:"Dzēst",check:"Pārbaudīt",noWords:"Vārdi nav atrasti",trainer:"Ielāde...",settings:"Iestatījumi",settingsTitle:"Iestatījumi",apply:"Apstiprināt",reset:"Atiestatīt",resetStats:"Nullēt rezultātu",installApp:"Instalēt lietotni",installAppAlready:"Lietotne jau ir instalēta vai pievienota jūsu sāumekrānam.",nouns:"Lietvārdi",verbs:"Darbības vārdi",adjectives:"Īpašības vārdi",mode_ru2lv:"No krievu uz latviešu",mode_lv2ru:"No latviešu uz krievu",mode_both:"Abi kopā",randomAll:"Nejauši vārdi",skip:"Izlaist",trainerTab:"Vārdi",manageTab:"Locījumi",settingsTab:"Konjugācijas",word:"Vārds",decl1:"1. deklinācija",decl2:"2. deklinācija",decl3:"3. deklinācija",decl4:"4. deklinācija",decl5:"5. deklinācija",decl6:"6. deklinācija",duplicateTitle:"Vārda dublikāts",duplicateExists:"Jau ir datubāzē:",duplicateNew:"Mēģini pievienot:",duplicateConfirm:"Vai tiešām pievienot?",yes:"Jā",no:"Nē",myWords:"Mani vārdi",wordAddedSuccess:"Vārds veiksmīgi pievienots!",total:"Kopā",search:"Meklēt",searchWords:"Meklēt vārdus",enterWord:"Ievadiet vārdu",enterLatvianWord:"Ievadiet vārdu...",searchHint:"Varat ievadīt vārdu citā valodā",wordNotFound:"Vārds nav atrasts",emptyWordList:"Vārdu saraksts",emptyDeclensions:"Locījumi",declensionsLoading:"Locījumi tiek ielādēti no datubāzes",selectDeclension:"Izvēlieties pareizo locījumu:",addWordsOrPreset:"Pievienojiet vārdus zemāk vai izvēlieties priekšuzstādījumu iestatījumos",selectPreset:"Izvēlieties gatavu vārdu komplektu apmācībai",noData:"Nav datu",deleteConfirm:"Dzēst vārdu",level:"Grūtības pakāpe",wordType:"Vārda tips",translationMode:"Tulkošanas režīms",addWordButton:"Pievienot vārdu",wordProgress:"Vārds",settingsTip:'Padoms: Izmantojiet pogu "Atiestatīt", lai atgrieztos pie saviem vārdiem',listEmpty:"Saraksts ir tukšs",saving:"Saglabā...",save:"Saglabāt",unsavedChanges:"Nesaglabātas izmaiņas",unsavedWarning:"Jums ir nesaglabātas izmaiņas. Ko jūs vēlaties darīt?",discard:"Nesaglabāt",selectConjugation:"Izvēlieties pareizo konjugāciju:",correctForm:"Pareizā forma",emptyConjugations:"Konjugācijas",conjugationsLoading:"Konjugācijas tiek ielādētas no datubāzes",authTitle:"Pieslēgties",authSubtitle:"Ievadiet e-pastu un paroli",email:"E-pasts",password:"Parole",login:"Ienākt",noAccount:"Nav konta?",register:"Reģistrēties",haveAccount:"Jau ir konts?",sendCode:"Nosūtīt kodu",code:"Kods no e-pasta",verifyCode:"Apstiprināt",codeSent:"Kods nosūtīts uz e-pastu",invalidCode:"Nederīgs kods",invalidEmail:"Nederīgs e-pasts",passwordShort:"Parolei jābūt vismaz 6 simboli",sendCodeError:"Neizdevās nosūtīt kodu. Pārbaudiet Google Apps iestatījumus.",authError:"Nepareizs lietotājvārds vai parole",accountExists:"Konts ar šo e-pastu jau ir reģistrēts",back:"Atpakaļ",logout:"Iziet",wordleTab:"Wordle",wordleInstruction:"Uzminiet 5 burtu latviešu vārdu 6 mēģinājumos.",wordleWin:"Lieliski! Vārds ir uzminēts.",wordleLose:"Mēģinājumi beigušies. Vārds bija",wordleNewGame:"Jauna spēle",wordleShortGuess:"Ievadiet 5 burtus, lai pārbaudītu"}},zv=T.createContext(void 0),St=()=>{const t=T.useContext(zv);if(!t)throw new Error("useLanguage must be used within LanguageProvider");return t},xN=({children:t})=>{const[e,n]=T.useState(()=>localStorage.getItem("lang")||"lv"),r=i=>{n(i),localStorage.setItem("lang",i)},s=i=>PN[e][i]||i;return f.jsx(zv.Provider,{value:{language:e,setLanguage:r,t:s},children:t})},AN=()=>{try{const t=localStorage.getItem("trainerStats");return t?JSON.parse(t):{}}catch{return{}}},ON=t=>{localStorage.setItem("trainerStats",JSON.stringify(t))},LN=(t,e,n)=>{const r={...t};return r[e]||(r[e]={correct:0,wrong:0}),n?r[e].correct++:r[e].wrong++,ON(r),r},La=t=>t.replace(/\(.*?\)/g,"").trim().toLowerCase(),lp=t=>{const e=[...t];for(let n=e.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e},DN=(t,e,n,r=[])=>{if(t.length===0||t.length===1)return 0;const s=new Set([n,...r]),i=Array.from({length:t.length}).map((c,h)=>h).filter(c=>!s.has(c)),o=i.length>0?i:[n],l=o.map(c=>{const h=t[c],v=h.word+"|"+h.translation,_=e[v]||{correct:0,wrong:0},y=Math.pow(2.5,Math.min(_.wrong,5))/Math.max(1,_.correct+1),N=_.correct>5?.6:1,m=.8+Math.random()*.4;return y*N*m}),a=l.reduce((c,h)=>c+h,0);if(a===0)return o[0];let u=Math.random()*a,d=0;for(let c=0;c<l.length;c++)if(d+=l[c],u<=d)return o[c];return o[0]},MN=({words:t,trainingMode:e,sessionStats:n,onSessionStatsChange:r})=>{const{t:s}=St(),[i,o]=T.useState(0),[l,a]=T.useState(""),[u,d]=T.useState(!1),[c,h]=T.useState(!1),[v,_]=T.useState(!1),[y,N]=T.useState(AN()),[m,p]=T.useState([]);T.useEffect(()=>{t.length>0&&g()},[t]);const g=()=>{if(t.length===0)return;const E=DN(t,y,i,m);o(E),p(D=>[E,...D].slice(0,Math.min(4,t.length-1))),a(""),d(!1),h(!1);const O=e==="ru2lv"?!1:e==="lv2ru"?!0:Math.random()<.5;_(O)},w=()=>{if(t.length===0||!l.trim())return;const E=t[i],O=La(l),D=La(v?E.word:E.translation),V=E.word+"|"+E.translation,G=O===D;h(G),d(!0);const $=LN(y,V,G);N($),r({correct:n.correct+(G?1:0),wrong:n.wrong+(G?0:1)}),G&&setTimeout(()=>g(),1e3)},S=()=>{setTimeout(()=>g(),100)},I=E=>{E.key==="Enter"&&!u?w():E.key==="Enter"&&u&&!c&&g()};if(t.length===0)return f.jsxs("div",{className:"trainer-ui empty-state",children:[f.jsx("p",{className:"empty-message",children:s("noWords")}),f.jsx("p",{className:"empty-hint",children:s("addWordsOrPreset")})]});const P=t[i];if(!P)return f.jsxs("div",{className:"trainer-ui empty-state",children:[f.jsx("p",{className:"empty-message",children:s("noWords")}),f.jsx("p",{className:"empty-hint",children:s("addWordsOrPreset")})]});const k=v?P.translation:P.word,C=v?P.word:P.translation;return f.jsxs("div",{className:"trainer-ui",children:[f.jsx("div",{className:"trainer-header",children:f.jsxs("div",{className:"session-stats",children:[f.jsxs("span",{className:"stat-correct",children:["✓ ",n.correct]}),f.jsxs("span",{className:"stat-wrong",children:["✗ ",n.wrong]})]})}),f.jsx("b",{children:k}),f.jsx("input",{type:"text",value:l,onChange:E=>a(E.target.value),onKeyPress:I,placeholder:s("translation"),className:u?c?"correct":"wrong":"",disabled:u&&c,autoFocus:!0}),u&&!c&&f.jsxs("div",{className:"correct-answer",children:["Правильный ответ: ",f.jsx("strong",{children:C})]}),f.jsxs("div",{className:"trainer-actions",children:[!u||c?f.jsxs(f.Fragment,{children:[f.jsx("button",{onClick:w,disabled:!l.trim()||u&&c,children:s("check")}),f.jsx("button",{onClick:S,className:"skip-btn",disabled:u&&c,children:s("skip")})]}):null,u&&!c&&f.jsx("button",{onClick:g,className:"next-btn",children:"Далее →"})]})]})},bN=({uid:t,userWords:e,usePreset:n,isOpen:r,onClose:s})=>{const{t:i}=St(),[o,l]=T.useState(""),[a,u]=T.useState(""),[d,c]=T.useState(null),[h,v]=T.useState(!1),_=(g,w)=>e.find(S=>S.word.toLowerCase()===g.toLowerCase()||S.translation.toLowerCase()===w.toLowerCase()||S.word.toLowerCase()===w.toLowerCase()&&S.translation.toLowerCase()===g.toLowerCase())||null,y=()=>{if(n||!t)return;const g=o.trim(),w=a.trim();if(!g||!w)return;const S=_(g,w);if(S){c({existing:S,new:{word:g,translation:w}});return}N(g,w)},N=(g,w)=>{if(!t)return;const S=GI(qe(Je,`users/${t}/words`));yi(S,{word:g,translation:w}),l(""),u(""),v(!0),setTimeout(()=>{v(!1)},1500)},m=()=>{d&&(N(d.new.word,d.new.translation),c(null))},p=()=>{c(null)};return n||!r?null:f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"modal",style:{display:"flex"},children:f.jsxs("div",{className:"modal-content add-word-modal",children:[f.jsx("span",{className:"close",onClick:s,children:"×"}),f.jsx("div",{className:"card-header",children:f.jsx("h3",{children:i("addWordTitle")})}),f.jsxs("div",{className:"inputs",children:[f.jsx("input",{type:"text",value:o,onChange:g=>l(g.target.value),placeholder:i("word"),onKeyPress:g=>g.key==="Enter"&&y(),autoFocus:!0}),f.jsx("input",{type:"text",value:a,onChange:g=>u(g.target.value),placeholder:i("translation"),onKeyPress:g=>g.key==="Enter"&&y()}),f.jsx("button",{onClick:y,disabled:!o.trim()||!a.trim(),children:i("add")})]}),h&&f.jsx("div",{className:"success-message",children:i("wordAddedSuccess")})]})}),d&&f.jsx("div",{className:"modal",style:{display:"flex"},children:f.jsxs("div",{className:"modal-content duplicate-box",children:[f.jsx("h3",{children:i("duplicateTitle")}),f.jsx("p",{children:i("duplicateExists")}),f.jsxs("div",{className:"duplicate-info",children:[d.existing.word," → ",d.existing.translation]}),f.jsx("p",{children:i("duplicateNew")}),f.jsxs("div",{className:"duplicate-info",children:[d.new.word," → ",d.new.translation]}),f.jsx("p",{children:i("duplicateConfirm")}),f.jsxs("div",{className:"duplicate-actions",children:[f.jsx("button",{onClick:m,children:i("yes")}),f.jsx("button",{onClick:p,children:i("no")})]})]})})]})},jN=({uid:t,onClose:e})=>{const{t:n}=St(),[r,s]=T.useState([]),[i,o]=T.useState([]),[l,a]=T.useState(""),[u,d]=T.useState(!1),[c,h]=T.useState(!1),[v,_]=T.useState(!1);T.useEffect(()=>{if(!t)return;const S=qe(Je,`users/${t}/words`);let I=null;return(()=>{I=wi(S,k=>{try{const C=k.val();if(C){const E=Object.entries(C).map(([O,D])=>({key:O,word:D.word,translation:D.translation}));s(E),o(E),d(!1)}else s([]),o([]),d(!1)}catch(C){console.error("Error processing words data:",C)}},k=>{console.error("Firebase listener error:",k)})})(),()=>{I&&I()}},[t]);const y=(S,I,P)=>{o(k=>k.map(C=>C.key===S?{...C,[I]:P}:C)),d(!0)},N=async()=>{if(!(!t||!u)){h(!0);try{const S=[];i.forEach(I=>{const P=r.find(k=>k.key===I.key);if(P){if(P.word!==I.word){const k=qe(Je,`users/${t}/words/${I.key}/word`);S.push(yi(k,I.word))}if(P.translation!==I.translation){const k=qe(Je,`users/${t}/words/${I.key}/translation`);S.push(yi(k,I.translation))}}}),r.forEach(I=>{if(!i.find(k=>k.key===I.key)){const k=qe(Je,`users/${t}/words/${I.key}`);S.push(KI(k))}}),await Promise.all(S),d(!1)}catch(S){console.error("Error saving changes:",S),alert("Ошибка при сохранении изменений")}finally{h(!1)}}},m=S=>{t&&(o(I=>I.filter(P=>P.key!==S)),d(!0))},p=i.filter(S=>{const I=l.toLowerCase();return S.word.toLowerCase().includes(I)||S.translation.toLowerCase().includes(I)}),g=()=>{u?_(!0):e()},w=S=>{_(!1),S?N().then(()=>e()):(o(r),d(!1),e())};return f.jsx("div",{className:"modal",style:{display:"flex"},children:f.jsxs("div",{className:"modal-content",children:[f.jsx("span",{className:"close",onClick:g,children:"×"}),f.jsx("h3",{className:"wordlist-title",children:n("listTitle")}),f.jsxs("div",{className:"wordlist-top-row",children:[f.jsxs("div",{className:"words-count",children:[n("total"),": ",f.jsx("strong",{children:i.length})]}),f.jsx("input",{className:"wordlist-search",placeholder:n("search"),value:l,onChange:S=>a(S.target.value)})]}),f.jsx("div",{className:"word-list",children:p.length===0?f.jsx("div",{className:"empty-state-list",children:f.jsx("p",{children:n("listEmpty")})}):p.map(S=>f.jsxs("div",{className:"word-item",children:[f.jsx("input",{value:S.word,onChange:I=>y(S.key,"word",I.target.value),placeholder:n("word")}),f.jsx("input",{value:S.translation,onChange:I=>y(S.key,"translation",I.target.value),placeholder:n("translation")}),f.jsx("button",{className:"delete-btn",onClick:()=>m(S.key),title:n("delete"),children:"✕"})]},S.key))}),f.jsx("div",{className:"wordlist-actions",children:f.jsx("button",{className:`apply-btn ${u?"":"disabled"}`,onClick:N,disabled:!u||c,children:c?n("saving")||"Сохранение...":n("save")||"Сохранить"})}),v&&f.jsx("div",{className:"confirm-dialog-overlay",children:f.jsxs("div",{className:"confirm-dialog",children:[f.jsx("h4",{children:n("unsavedChanges")||"Несохранённые изменения"}),f.jsx("p",{children:n("unsavedWarning")||"У вас есть несохраненные изменения"}),f.jsxs("div",{className:"confirm-dialog-buttons",children:[f.jsx("button",{className:"confirm-save-btn",onClick:()=>w(!0),children:n("save")||"Сохранить"}),f.jsx("button",{className:"confirm-discard-btn",onClick:()=>w(!1),children:n("discard")||"Не сохранять"})]})]})})]})})},FN=({onClose:t,onApply:e,onReset:n,onResetStats:r})=>{const{t:s}=St(),[i,o]=T.useState("a1"),[l,a]=T.useState("nouns"),[u,d]=T.useState("both"),[c,h]=T.useState(!1),[v,_]=T.useState(!1),[y,N]=T.useState(!1),m=p=>p==="randomAll"?s("randomAll"):p.toUpperCase();return f.jsx("div",{className:"modal",style:{display:"flex"},children:f.jsxs("div",{className:"modal-content settings-modal",children:[f.jsx("span",{className:"close",onClick:t,children:"×"}),f.jsx("h3",{children:s("settingsTitle")}),f.jsx("p",{className:"settings-description",children:s("selectPreset")}),f.jsxs("div",{className:"setting-group",children:[f.jsx("label",{className:"setting-label",children:s("level")}),f.jsxs("div",{className:`custom-select ${c?"open":""}`,children:[f.jsx("div",{className:"selected",onClick:()=>{h(!c),_(!1),N(!1)},children:m(i)}),c&&f.jsxs("div",{className:"options",children:[f.jsx("div",{onClick:()=>{o("randomAll"),h(!1)},children:s("randomAll")}),f.jsx("div",{onClick:()=>{o("a1"),h(!1)},children:"A1"}),f.jsx("div",{onClick:()=>{o("a2"),h(!1)},children:"A2"}),f.jsx("div",{onClick:()=>{o("b1"),h(!1)},children:"B1"}),f.jsx("div",{onClick:()=>{o("b2"),h(!1)},children:"B2"}),f.jsx("div",{onClick:()=>{o("c1"),h(!1)},children:"C1"})]})]})]}),f.jsxs("div",{className:"setting-group",children:[f.jsx("label",{className:"setting-label",children:s("wordType")}),f.jsxs("div",{className:`custom-select ${v?"open":""}`,children:[f.jsx("div",{className:"selected",onClick:()=>{_(!v),h(!1),N(!1)},children:s(l)}),v&&f.jsxs("div",{className:"options",children:[f.jsx("div",{onClick:()=>{a("nouns"),_(!1)},children:s("nouns")}),f.jsx("div",{onClick:()=>{a("verbs"),_(!1)},children:s("verbs")}),f.jsx("div",{onClick:()=>{a("adjectives"),_(!1)},children:s("adjectives")})]})]})]}),f.jsxs("div",{className:"setting-group",children:[f.jsx("label",{className:"setting-label",children:s("translationMode")}),f.jsxs("div",{className:`custom-select ${y?"open":""}`,children:[f.jsx("div",{className:"selected",onClick:()=>{N(!y),h(!1),_(!1)},children:s(`mode_${u}`)}),y&&f.jsxs("div",{className:"options",children:[f.jsx("div",{onClick:()=>{d("ru2lv"),N(!1)},children:s("mode_ru2lv")}),f.jsx("div",{onClick:()=>{d("lv2ru"),N(!1)},children:s("mode_lv2ru")}),f.jsx("div",{onClick:()=>{d("both"),N(!1)},children:s("mode_both")})]})]})]}),f.jsx("div",{className:"settings-info",children:s("settingsTip")})]})})},UN=({sessionStats:t,onSessionStatsChange:e})=>{const{t:n}=St(),[r,s]=T.useState(null),[i,o]=T.useState({}),[l,a]=T.useState(null),[u,d]=T.useState(null);T.useEffect(()=>{c()},[]);const c=()=>{const _=qe(Je,"declension");return wi(_,y=>{const N=y.val();if(!N){s(null);return}const m={};Object.values(N).forEach(p=>{Object.values(p).forEach(g=>{m[g.group]||(m[g.group]=[]),m[g.group].push(g)})}),o(m),h(m)}),()=>rv(_)},h=_=>{const y=Object.keys(_).filter(g=>_[g].length>0);if(y.length===0){s(null);return}const N=y[Math.floor(Math.random()*y.length)],m=_[N],p=Math.floor(Math.random()*m.length);s(m[p]),a(null),d(null)},v=_=>{if(!r)return;a(_),_===r.group?(d("correct"),e({...t,correct:t.correct+1}),setTimeout(()=>h(i),800)):(d("wrong"),e({...t,wrong:t.wrong+1}),setTimeout(()=>h(i),1200))};return f.jsx("div",{className:"trainer-ui",children:r?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"trainer-header",children:f.jsxs("div",{className:"session-stats",children:[f.jsxs("span",{className:"stat-correct",children:["✓ ",t.correct]}),f.jsxs("span",{className:"stat-wrong",children:["✗ ",t.wrong]})]})}),f.jsxs("div",{className:"word-container",children:[f.jsx("b",{children:r.word}),f.jsx("p",{className:"declension-translation",children:r.translation})]}),f.jsx("div",{className:"declension-header",children:f.jsx("span",{className:"declension-hint",children:n("selectDeclension")})}),f.jsx("div",{className:"declension-actions",children:[1,2,3,4,5,6].map(_=>f.jsx("button",{onClick:()=>v(String(_)),className:l===String(_)?u==="correct"?"correct":"wrong":u==="wrong"&&r.group===String(_)?"correct":"",disabled:l!==null,children:_},_))})]}):f.jsxs("div",{className:"empty-state",children:[f.jsx("div",{className:"empty-icon",children:n("emptyDeclensions")}),f.jsx("b",{children:n("noData")}),f.jsx("p",{style:{margin:"6px 0",fontSize:"0.9rem",color:"var(--text-secondary)"},children:n("declensionsLoading")})]})})},WN=({sessionStats:t,onSessionStatsChange:e})=>{const{t:n}=St(),[r,s]=T.useState(null),[i,o]=T.useState([]),[l,a]=T.useState({}),[u,d]=T.useState(null),[c,h]=T.useState(null),[v,_]=T.useState(null),[y,N]=T.useState(!0),[m,p]=T.useState(null);T.useEffect(()=>{I()},[]);const g=(C,E,O)=>{const D=E.filter(b=>b.correctPatternId===C.correctPatternId&&b.infinitive!==C.infinitive),V=Object.keys(O).filter(b=>b!==C.correctPatternId);if(D.length===0)return console.warn(`⚠️ Нет других глаголов с паттерном ${C.correctPatternId}`),w(C,E,O);const G=b=>b.length<3?b:b.replace(/tīt$|t$|ēt$|it$|ies$/,"").substring(0,4),$=G(C.infinitive),Ke=D[Math.floor(Math.random()*D.length)],Ee=O[C.correctPatternId],A=[];A.push({patternId:C.correctPatternId,present1st:Ee.present1st,present3rd:Ee.present3rd,fromVerb:Ke.infinitive});const M=new Set([C.correctPatternId]);for(;A.length<3&&V.length>0;){const b=V[Math.floor(Math.random()*V.length)];if(M.has(b))continue;const Q=O[b],se=G(Q.present1st),Lt=G(Q.present3rd);se!==$&&Lt!==$&&(A.push({patternId:b,present1st:Q.present1st,present3rd:Q.present3rd,fromVerb:void 0}),M.add(b))}return A.length<3&&console.warn(`⚠️ Недостаточно валидных вариантов (${A.length}/3)`),A.sort(()=>Math.random()-.5)},w=(C,E,O)=>{const D=A=>A.replace(/tīt$|t$|ēt$|it$|ies$/,"").substring(0,4),V=D(C.infinitive),G=Object.keys(O).filter(A=>{const M=O[A],b=D(M.present1st),Q=D(M.present3rd);return b!==V&&Q!==V}),$=[],Ke=new Set,Ee=O[C.correctPatternId];for($.push({patternId:C.correctPatternId,present1st:Ee.present1st,present3rd:Ee.present3rd}),Ke.add(C.correctPatternId);$.length<3&&G.length>0;){const A=G[Math.floor(Math.random()*G.length)];Ke.has(A)||($.push({patternId:A,present1st:O[A].present1st,present3rd:O[A].present3rd}),Ke.add(A))}return $.sort(()=>Math.random()-.5)},S=(C,E)=>{if(C.length===0){s(null);return}const O=C[Math.floor(Math.random()*C.length)],D=g(O,C,E);s({infinitive:O.infinitive,translation:O.translation,correctPatternId:O.correctPatternId,options:D}),d(null),h(null),_(null)},I=()=>{try{const C=qe(Je,"conjugationPatterns");wi(C,E=>{const O=E.val();if(!O){p("Нет данных о паттернах"),N(!1);return}a(O);const D=qe(Je,"verbs");wi(D,V=>{const G=V.val();if(!G){p("Нет данных о глаголах"),s(null),o([]),N(!1);return}try{const $=[];if(Object.entries(G).forEach(([Ke,Ee])=>{Ee&&typeof Ee=="object"&&Object.entries(Ee).forEach(([A,M])=>{M&&M.infinitive&&M.correctPatternId&&$.push({infinitive:M.infinitive,translation:M.translation||"",correctPatternId:M.correctPatternId})})}),$.length===0){p("Глаголы не найдены в базе данных"),N(!1);return}o($),p(null),S($,O),N(!1)}catch($){p("Ошибка при обработке данных"),console.error("Ошибка обработки:",$),N(!1)}},V=>{p(`Ошибка Firebase (verbs): ${V.message}`),N(!1),console.error("Firebase ошибка:",V)})},E=>{p(`Ошибка Firebase (patterns): ${E.message}`),N(!1),console.error("Firebase ошибка:",E)})}catch(C){p("Ошибка при подключении к базе данных"),console.error("Ошибка подключения:",C),N(!1)}},P=(C,E)=>{let O=0;const D=Math.min(C.length,E.length);for(let $=0;$<D&&C[$]===E[$];$++)O++;const V=C.substring(0,O),G=C.substring(O);return f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"base-form",children:V}),f.jsx("span",{className:"ending-highlight",children:G})]})},k=C=>{if(!r||u!==null)return;if(d(C),r.options[C].patternId===r.correctPatternId)h("correct"),e({...t,correct:t.correct+1}),setTimeout(()=>S(i,l),800);else{h("wrong"),e({...t,wrong:t.wrong+1});const D=r.options.findIndex(V=>V.patternId===r.correctPatternId);_(D),setTimeout(()=>S(i,l),1500)}};return y?f.jsx("div",{className:"trainer-ui",children:f.jsxs("div",{className:"empty-state",children:[f.jsx("div",{className:"empty-icon",children:"⏳"}),f.jsx("b",{children:"Загрузка..."}),f.jsx("p",{children:n("conjugationsLoading")})]})}):m||i.length===0?f.jsx("div",{className:"trainer-ui",children:f.jsxs("div",{className:"empty-state",children:[f.jsx("div",{className:"empty-icon",children:"⚠️"}),f.jsx("b",{children:m||n("emptyConjugations")}),f.jsx("p",{children:m?"Проверьте консоль для деталей":n("conjugationsLoading")}),m&&f.jsx("p",{style:{margin:"12px 0",fontSize:"0.85rem",color:"#ef4444",fontFamily:"monospace"},children:m})]})}):f.jsx("div",{className:"trainer-ui",children:r?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"trainer-header",children:f.jsxs("div",{className:"session-stats",children:[f.jsxs("span",{className:"stat-correct",children:["✓ ",t.correct]}),f.jsxs("span",{className:"stat-wrong",children:["✗ ",t.wrong]})]})}),f.jsxs("div",{className:"word-container",children:[f.jsx("b",{className:"infinitive",children:r.infinitive}),f.jsx("p",{className:"conjugation-translation",children:r.translation})]}),f.jsx("div",{className:"conjugation-header",children:f.jsx("span",{className:"conjugation-hint",children:n("selectConjugation")})}),f.jsx("div",{className:"conjugation-options",children:r.options.map((C,E)=>{const O=u===E,D=v===E,V=O&&c==="correct",G=O&&c==="wrong",$=D&&c==="wrong";return f.jsx("button",{onClick:()=>k(E),className:`conjugation-option ${V?"correct":G?"wrong":$?"correct":""}`,disabled:u!==null,"aria-label":`Вариант ${E+1}: ${C.present1st} / ${C.present3rd}`,children:f.jsxs("div",{className:"conjugation-forms",children:[f.jsx("span",{className:"form-example",children:P(C.present1st,C.present3rd)}),f.jsx("span",{className:"form-separator",children:"/"}),f.jsx("span",{className:"form-example",children:P(C.present3rd,C.present1st)})]})},E)})})]}):f.jsxs("div",{className:"empty-state",children:[f.jsx("div",{className:"empty-icon",children:"📚"}),f.jsx("b",{children:n("emptyConjugations")}),f.jsx("p",{children:n("conjugationsLoading")})]})})},zN=({onClose:t,initialQuery:e,autoSearch:n})=>{const{t:r}=St(),[s,i]=T.useState(""),[o,l]=T.useState(null),[a,u]=T.useState([]),[d,c]=T.useState(null),[h,v]=T.useState(!1),[_,y]=T.useState(!1),N=async w=>{try{const I=await fetch(`https://latvial-learn.latvial-learn.workers.dev/translate?text=${encodeURIComponent(w.toLowerCase())}`);if(I.ok)return(await I.json()).translation||null}catch(S){console.warn("Translation failed:",S)}return null},m=async w=>{var P;const S=w??s,I=(typeof S=="string"?S:String(S??"")).trim();if(!I){c(r("enterWord")||"Ievadiet vārdu"),u([]),l(null);return}w&&i(I),v(!0),c(null),l(null),u([]);try{const k="https://latvial-learn.latvial-learn.workers.dev",C=await fetch(`${k}/search?word=${encodeURIComponent(I.toLowerCase())}`);if(C.ok){const O=await C.json();if(O.similarWords&&O.similarWords.length>0){l(null),u(O.similarWords.map($=>({word:$.word,verbalization:$.note||"",translation:"",href:$.href}))),c(null),v(!1);return}const D=I.trim().toLowerCase(),V=((P=O.word)==null?void 0:P.toLowerCase())===D,G=!O.verbalization&&!O.translation;V&&G?(l(null),u([]),c(r("wordNotFound")||"Vārds nav atrasts")):(l(O),u([]),c(null)),v(!1);return}const E=await N(I);if(E&&E.toLowerCase()!==I.toLowerCase()){const O=await fetch(`${k}/search?word=${encodeURIComponent(E.toLowerCase())}`);if(O.ok){const D=await O.json();if(D.word||D.verbalization||D.translation){l(D),u([]),c(null),v(!1);return}}}l(null),u([]),c(r("wordNotFound")||"Vārds nav atrasts"),v(!1);return}catch{try{const C=await N(I);if(C&&C.toLowerCase()!==I.toLowerCase()){const O=await fetch(`https://latvial-learn.latvial-learn.workers.dev/search?word=${encodeURIComponent(C.toLowerCase())}`);if(O.ok){const D=await O.json();if(D.word||D.verbalization||D.translation){l(D),u([]),c(null),v(!1);return}}}}catch(C){console.warn("Fallback translation failed:",C)}l(null),u([]),c(r("wordNotFound")||"Vārds nav atrasts"),v(!1);return}},p=async w=>{var I;const S=w.word;i(S),u([]),c(null),v(!0),l(null);try{const k=await fetch(`https://latvial-learn.latvial-learn.workers.dev/search?word=${encodeURIComponent(S)}`);if(k.ok){const C=await k.json();if(C.similarWords&&C.similarWords.length>0)u(C.similarWords.map(E=>({word:E.word,verbalization:E.note||"",translation:"",href:E.href})));else{const E=S.trim().toLowerCase(),O=((I=C.word)==null?void 0:I.toLowerCase())===E,D=!C.verbalization&&!C.translation;O&&D?c(r("wordNotFound")||"Vārds nav atrasts"):l(C)}}else c(r("wordNotFound")||"Vārds nav atrasts")}catch{c(r("wordNotFound")||"Vārds nav atrasts")}v(!1)},g=w=>{w.key==="Enter"&&m()};return wp.useEffect(()=>{n&&e&&!_&&(y(!0),m(e))},[n,e,_]),f.jsx("div",{className:"modal",style:{display:"flex"},children:f.jsxs("div",{className:"modal-content search-words-modal",children:[f.jsx("span",{className:"close",onClick:t,children:"×"}),f.jsx("h3",{children:r("searchWords")||"Meklēt vārdus"}),f.jsxs("div",{className:"search-words-input-group",children:[f.jsx("input",{type:"text",className:"search-words-input",placeholder:r("enterLatvianWord")||"Ievadiet vārdu...",value:s,onChange:w=>i(w.target.value),onKeyPress:g,autoFocus:!0}),f.jsx("button",{className:"search-words-btn",onClick:()=>m(),children:r("search")||"Мeklēt"})]}),!s&&f.jsx("div",{style:{fontSize:"12px",color:"#666",marginTop:"4px",marginBottom:"8px"},children:r("searchHint")||"Varat ievadīt vārdu citā valodā"}),d&&f.jsx("div",{className:"search-words-error",children:d}),h&&f.jsx("div",{className:"search-words-loading",children:"Meklē..."}),a.length>0&&f.jsxs("div",{className:"search-words-suggestions",children:[f.jsx("div",{className:"suggestions-title",children:"Līdzīgi vārdi:"}),a.map((w,S)=>f.jsxs("div",{className:"suggestion-item",onClick:()=>p(w),children:[f.jsx("strong",{children:w.word}),f.jsx("span",{className:"suggestion-info",children:w.verbalization})]},S))]}),o&&f.jsx("div",{className:"search-words-result",children:f.jsxs("div",{className:"result-item",children:[f.jsx("strong",{children:o.word}),f.jsx("p",{className:"result-verbalization",children:o.verbalization}),o.translation&&f.jsx("p",{className:"result-translation",children:o.translation})]})})]})})},VN=({activeTab:t,onTabChange:e,labels:n})=>f.jsx("div",{className:"tabs",children:Object.entries(n).map(([r,s])=>f.jsx("button",{className:`tab-btn ${t===r?"active":""} ${r==="wordle"?"tab-btn-wordle":""}`,onClick:()=>e(r),children:s},r))}),ap=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,BN=({onAuthenticated:t})=>{const{t:e}=St(),[n,r]=T.useState("login"),[s,i]=T.useState("form"),[o,l]=T.useState(""),[a,u]=T.useState(""),[d,c]=T.useState(""),[h,v]=T.useState(null),[_,y]=T.useState(!1),[N,m]=T.useState(""),[p,g]=T.useState(""),w=()=>{m(""),g("")},S=E=>{r(E),i("form"),v(null),c(""),w()},I=async()=>{if(w(),!ap.test(o)){g(e("invalidEmail"));return}y(!0);try{const E=await EN(o.trim(),a);t(E)}catch{g(e("authError"))}finally{y(!1)}},P=async()=>{if(w(),!ap.test(o)){g(e("invalidEmail"));return}if(a.length<6){g(e("passwordShort"));return}y(!0);try{const E=await IN(o.trim());v(E),m(e("codeSent")),i("code")}catch{g(e("sendCodeError"))}finally{y(!1)}},k=async()=>{if(w(),!h){g(e("invalidCode"));return}const E=d.trim();if(!E){g(e("invalidCode"));return}y(!0);try{if(!await kN(o.trim(),E,h)){g(e("invalidCode"));return}const D=await CN(o.trim(),a);await TN(D,o.trim()),t(D)}catch(O){O.code==="auth/email-already-in-use"?g(e("accountExists")):g(e("authError"))}finally{y(!1)}},C=()=>n==="login"?f.jsx("button",{className:"auth-button",onClick:I,disabled:_,children:_?"...":e("login")}):s==="form"?f.jsx("button",{className:"auth-button",onClick:P,disabled:_,children:_?"...":e("sendCode")}):f.jsxs("div",{className:"auth-buttons-group",children:[f.jsx("button",{className:"auth-button",onClick:k,disabled:_,children:_?"...":e("verifyCode")}),f.jsx("button",{type:"button",className:"auth-button-secondary",onClick:()=>{i("form"),c(""),v(null),w()},children:e("back")||"Назад"})]});return f.jsx("div",{className:"auth-wrapper",children:f.jsxs("div",{className:"auth-card",children:[f.jsx("h2",{children:e(n==="login"?"login":"register")}),f.jsx("p",{className:"auth-subtitle",children:e("authSubtitle")}),f.jsxs("div",{className:"inputs",children:[f.jsx("input",{type:"email",placeholder:e("email"),value:o,onChange:E=>l(E.target.value)}),f.jsx("input",{type:"password",placeholder:e("password"),value:a,onChange:E=>u(E.target.value)}),n==="register"&&s==="code"&&f.jsx("input",{type:"text",placeholder:e("code"),value:d,onChange:E=>c(E.target.value)})]}),N&&f.jsx("div",{className:"auth-message success",children:N}),p&&f.jsx("div",{className:"auth-message error",children:p}),C(),f.jsx("div",{className:"auth-toggle",children:n==="login"?f.jsxs("span",{children:[e("noAccount")," ",f.jsx("button",{type:"button",className:"link-btn",onClick:()=>S("register"),children:e("register")})]}):f.jsxs("span",{children:[e("haveAccount")," ",f.jsx("button",{type:"button",className:"link-btn",onClick:()=>S("login"),children:e("login")})]})})]})})},HN=({isOpen:t,onClose:e,userEmail:n,onLogout:r,onResetStats:s,onInstallApp:i,showInstallButton:o,version:l})=>{const{language:a,setLanguage:u,t:d}=St(),[c,h]=T.useState(!1);if(!t)return null;const v=m=>{u(m),h(!1)},_=[{code:"ru",flag:"RU",name:"Русский"},{code:"en",flag:"EN",name:"English"},{code:"lv",flag:"LV",name:"Latviešu"}],y=_.find(m=>m.code===a)||_[0],N=m=>{m.target===m.currentTarget&&e()};return f.jsx("div",{className:"settings-menu-overlay",onClick:N,children:f.jsxs("div",{className:"settings-menu-card",children:[f.jsxs("div",{className:"settings-menu-header",children:[f.jsx("h2",{children:d("settings")}),f.jsx("button",{className:"close-btn",onClick:e,children:"✕"})]}),f.jsxs("div",{className:"settings-menu-content",children:[f.jsx("div",{className:"settings-item",children:f.jsxs("div",{className:"custom-dropdown",children:[f.jsxs("button",{className:"dropdown-trigger",onClick:()=>h(!c),children:[f.jsx("span",{className:"dropdown-flag",children:y.name}),f.jsx("span",{className:`dropdown-arrow ${c?"open":""}`,children:"▼"})]}),c&&f.jsx("div",{className:"dropdown-menu",children:_.map(m=>f.jsxs("button",{className:`dropdown-item ${a===m.code?"active":""}`,onClick:()=>v(m.code),children:[f.jsx("span",{className:"dropdown-name",children:m.name}),a===m.code&&f.jsx("span",{className:"checkmark",children:"✓"})]},m.code))})]})}),n&&f.jsxs("div",{className:"profile-block",children:[f.jsxs("div",{className:"profile-info",children:[f.jsx("span",{className:"profile-label",children:"Email:"}),f.jsx("span",{className:"profile-email",children:n})]}),f.jsx("button",{className:"logout-btn",onClick:r,children:d("logout")})]}),o&&i&&f.jsx("button",{onClick:i,className:"install-app-btn",children:d("installApp")}),s&&f.jsx("button",{onClick:s,className:"reset-stats-btn",children:d("resetStats")}),l&&f.jsx("div",{className:"settings-version",children:l})]})]})})},Da=["SAULE","SKOLA","LAPSA","PUTNS","MAIZE","PIENS","SVECE","KARTE","LAIME","LAIVA","LAMPA","KAKIS","RUDZI","OZOLS","LACIS","TELPA","BERNS","MEITA","KLASE","ZVANS","MAJAS","VEJAS","SIRDS","MAMMA","TETIS","BILDE","KRASA","GATVE","KAUSS","PILIS","LIETA","STIGA","VILKS","SUNIS","ZUPAS","BALLE","ZIVIS","ZEMES","SOMAS","STOPS","GRIDA","GRUPA","SEGAS","SKATS","RITMS","PLAVA","TAKAS","BAKAS","MILTS","BALVA","SIERS","BURKA","DESAS","KASTE","DURVS","PIRKS","TELTS","PUIKA","SENIS","LAPAS","MIERS","TIRGS","BIRZE","GALDS","VARDI","ZIEMA","ZIRGS","TAURE","GAILS","SAIME","DARZS","KROGS","BARKA","SLAVA","EGLES","VARTI","MALKA","SALAS","SALNA","LUKAS","SOLIS","SUMMA","KOLNS","DEGUN","RUDEN","RIEPA","BRUVE"],kt=5,up=6,$N=/^[A-ZĀČĒĢĪĶĻŅŠŪŽ]$/,GN="wordle/nouns5",KN=t=>t.trim().toUpperCase().replace(/[^A-ZĀČĒĢĪĶĻŅŠŪŽ]/g,"").slice(0,kt),Ma=t=>t[Math.floor(Math.random()*t.length)],QN=(t,e)=>{const n=Array(kt).fill("absent"),r={};e.split("").forEach(s=>{r[s]=(r[s]||0)+1});for(let s=0;s<kt;s++)t[s]===e[s]&&(n[s]="correct",r[t[s]]-=1);for(let s=0;s<kt;s++){if(n[s]==="correct")continue;const i=t[s];r[i]>0&&(n[s]="present",r[i]-=1)}return n},YN=({onSearchWord:t})=>{const{t:e,language:n}=St(),[r,s]=T.useState(""),[i,o]=T.useState([]),[l,a]=T.useState([]),[u,d]=T.useState([]),[c,h]=T.useState(""),[v,_]=T.useState(null),[y,N]=T.useState("playing"),[m,p]=T.useState(!0),g=T.useRef(null);T.useEffect(()=>{(async()=>{try{const E=(await Gu(qe(Je,GN))).val(),D=(Array.isArray(E)?E:E?Object.values(E):[]).map($=>KN(String($))).filter($=>$.length===kt),V=D.length?D:Da,G=V.length>0?V:["SAULE"];o(G),s(Ma(G)),a([]),d([]),_(null),N("playing"),p(!1)}catch{const E=Da.length?Da:["SAULE"];o(E),s(Ma(E)),a([]),d([]),_(null),N("playing"),p(!1)}})()},[]),T.useEffect(()=>{_(null)},[n,e,r]);const w=T.useCallback(()=>{var k;i.length&&(s(Ma(i)),a([]),d([]),h(""),N("playing"),_(null),(k=g.current)==null||k.focus())},[e,i]),S=T.useCallback(()=>{if(y!=="playing"||!r)return;const k=c.toUpperCase();if(k.length<kt){_(e("wordleShortGuess"));return}const C=QN(k,r),E=[...l,k],O=[...u,C];if(a(E),d(O),h(""),k===r){N("won"),_(e("wordleWin"));return}if(E.length>=up){N("lost"),_(e("wordleLose"));return}_(null)},[c,u,y,l,e,r]),I=(k,C,E,O)=>{const D=["wordle-tile"];return k&&D.push("filled"),C&&D.push(C),f.jsx("div",{className:D.join(" "),children:k},`tile-${E??0}-${O??0}`)},P=l.length;return m||!r?f.jsx("div",{className:"wordle-card",children:f.jsx("div",{className:"wordle-header","aria-live":"polite",children:f.jsx("div",{className:"wordle-message",children:e("trainer")})})}):f.jsxs("div",{className:"wordle-card",children:[f.jsx("div",{className:"wordle-header","aria-live":"polite",children:v&&f.jsx("div",{className:`wordle-message ${y!=="playing"?"final":""}`,children:y==="lost"?f.jsxs(f.Fragment,{children:[v," ",f.jsx("button",{type:"button",className:"wordle-answer-link",onClick:()=>t==null?void 0:t(r),children:r})]}):v})}),f.jsx("div",{className:"wordle-grid",children:Array.from({length:up}).map((k,C)=>{const E=l[C]||(C===P?c.toUpperCase():""),O=u[C],D=E.padEnd(kt," ").split("").slice(0,kt);return f.jsx("div",{className:"wordle-row",children:D.map((V,G)=>I(V.trim(),O==null?void 0:O[G],C,G))},`row-${C}`)})}),f.jsxs("div",{className:"wordle-input-row",children:[f.jsx("input",{ref:g,className:"wordle-input",value:c,maxLength:kt,onChange:k=>{if(y!=="playing")return;const C=k.target.value.split("").filter(O=>$N.test(O.toUpperCase())).join("").toLowerCase().slice(0,kt),E=C.charAt(0).toUpperCase()+C.slice(1);h(E),_(null)},onKeyDown:k=>{k.key==="Enter"&&(k.preventDefault(),S())},placeholder:"","aria-label":"Wordle guess"}),y==="playing"?f.jsx("button",{className:"wordle-check-btn",onClick:S,disabled:y!=="playing",children:e("check")}):f.jsx("button",{className:"wordle-check-btn",onClick:w,children:e("wordleNewGame")})]}),f.jsx("div",{className:"wordle-actions"})]})},qN="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23e3e3e3'%3e%3cpath%20d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z'/%3e%3c/svg%3e",JN="v4.0.0";function XN(){const{t,language:e,setLanguage:n}=St(),[r,s]=T.useState(null),[i,o]=T.useState(!1),[l,a]=T.useState([]),[u,d]=T.useState("both"),[c,h]=T.useState(!1),[v,_]=T.useState(!1),[y,N]=T.useState(!1),[m,p]=T.useState(!1),[g,w]=T.useState(!1),[S,I]=T.useState(""),[P,k]=T.useState(!1),[C,E]=T.useState("trainer"),[O,D]=T.useState(!1),[V,G]=T.useState(null),[$,Ke]=T.useState(!1),Ee=[{code:"lv",label:"Latviešu",short:"LV"},{code:"ru",label:"Русский",short:"RU"},{code:"en",label:"English",short:"EN"}],A=Ee.find(U=>U.code===e)||Ee[0],M=()=>f.jsxs("div",{className:"language-dropdown",onMouseLeave:()=>D(!1),children:[f.jsxs("button",{type:"button",className:`language-toggle ${O?"open":""}`,onClick:()=>D(!O),children:[f.jsx("span",{children:A.short}),f.jsx("span",{className:"language-caret",children:"▾"})]}),O&&f.jsx("div",{className:"language-menu",children:Ee.map(U=>f.jsxs("button",{type:"button",className:`language-menu-item ${e===U.code?"active":""}`,onClick:()=>{n(U.code),D(!1)},children:[U.short,e===U.code&&f.jsx("span",{className:"language-check",children:"✓"})]},U.code))})]}),[b,Q]=T.useState(()=>{try{const U=localStorage.getItem("sessionStats_trainer");return U?JSON.parse(U):{correct:0,wrong:0}}catch{return{correct:0,wrong:0}}}),[se,Lt]=T.useState(()=>{try{const U=localStorage.getItem("sessionStats_declension");return U?JSON.parse(U):{correct:0,wrong:0}}catch{return{correct:0,wrong:0}}}),[at,dr]=T.useState(()=>{try{const U=localStorage.getItem("sessionStats_conjugation");return U?JSON.parse(U):{correct:0,wrong:0}}catch{return{correct:0,wrong:0}}});T.useEffect(()=>{try{localStorage.setItem("sessionStats_trainer",JSON.stringify(b))}catch{}},[b]),T.useEffect(()=>{try{localStorage.setItem("sessionStats_declension",JSON.stringify(se))}catch{}},[se]),T.useEffect(()=>{try{localStorage.setItem("sessionStats_conjugation",JSON.stringify(at))}catch{}},[at]),T.useEffect(()=>SN(Oe=>{s(Oe),o(!0)}),[]),T.useEffect(()=>{const U=Oe=>{Oe.preventDefault(),G(Oe)};return window.addEventListener("beforeinstallprompt",U),()=>{window.removeEventListener("beforeinstallprompt",U)}},[]),T.useEffect(()=>{const U=()=>{const Et=window.matchMedia("(display-mode: standalone)").matches,us=window.navigator.standalone===!0;Ke(Et||us)};U();const Oe=window.matchMedia("(display-mode: standalone)");return Oe.addEventListener("change",U),window.addEventListener("appinstalled",U),()=>{Oe.removeEventListener("change",U),window.removeEventListener("appinstalled",U)}},[]);const Dt=async()=>{if(!V){window.alert(t("installAppAlready")),window.open("https://support.google.com/chrome/answer/9658361","_blank");return}V.prompt();const U=await V.userChoice;(U==null?void 0:U.outcome)==="accepted"&&Ke(!0),G(null)};T.useEffect(()=>{if(!r||c)return;const U=qe(Je,`users/${r}/words`);return wi(U,Oe=>{const Et=Oe.val(),us=Et?Object.values(Et):[];a(us)}),()=>rv(U)},[r,c]);const hr=async(U,Oe)=>{if(U==="randomAll"){const Et=qe(Je,"presets"),cs=(await Gu(Et)).val();let ds=[];cs&&Object.values(cs).forEach(Wd=>{Wd[Oe]&&(ds=ds.concat(Object.values(Wd[Oe])))}),a(lp(ds))}else{const Et=qe(Je,`presets/${U}/${Oe}`),cs=(await Gu(Et)).val(),ds=cs?lp(Object.values(cs)):[];a(ds)}},Vv=(U,Oe,Et)=>{d(Et),h(!0),hr(U,Oe)},Bv=()=>{h(!1),d("both")},Ud=()=>{Q({correct:0,wrong:0}),Lt({correct:0,wrong:0}),dr({correct:0,wrong:0})},Hv=async()=>{await NN(),k(!1)};return i?r?f.jsxs("div",{className:"App",children:[f.jsxs("div",{className:"app-header",children:[f.jsx("h1",{className:"app-title",children:t("title")}),f.jsx("button",{className:"settings-icon-btn",onClick:()=>k(!0),children:f.jsx("img",{src:qN,alt:"Menu",className:"menu-icon"})})]}),f.jsx(VN,{activeTab:C,onTabChange:E,labels:{trainer:t("trainerTab"),manage:t("manageTab"),settings:t("settingsTab"),wordle:t("wordleTab")}}),f.jsxs("div",{className:"tab-content-wrapper",children:[C==="trainer"&&f.jsxs("div",{className:"tab-content active",children:[f.jsx(MN,{words:l,trainingMode:u,sessionStats:b,onSessionStatsChange:Q}),f.jsxs("div",{className:"action-buttons",children:[!c&&f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"icon-button",onClick:()=>w(!0),title:t("searchWords")||"Поиск слов",children:t("searchWords")||"Поиск"}),f.jsx("button",{className:"icon-button",onClick:()=>p(!0),title:t("addWordButton"),children:t("addWordButton")}),f.jsx("button",{className:"icon-button",onClick:()=>_(!0),title:t("manage"),children:t("myWords")})]}),f.jsx("button",{className:"icon-button",onClick:()=>N(!0),title:t("settings"),children:t("translationMode")})]})]}),C==="manage"&&f.jsx("div",{className:"tab-content active",children:f.jsx(UN,{sessionStats:se,onSessionStatsChange:Lt})}),C==="settings"&&f.jsx("div",{className:"tab-content active",children:f.jsx(WN,{sessionStats:at,onSessionStatsChange:dr})}),C==="wordle"&&f.jsx("div",{className:"tab-content active",children:f.jsx(YN,{onSearchWord:U=>{I(U),w(!0)}})})]}),f.jsx(bN,{uid:r,userWords:l,usePreset:c,isOpen:m,onClose:()=>p(!1)}),f.jsx("div",{style:{display:v?"flex":"none"},children:f.jsx(jN,{uid:r,onClose:()=>_(!1)})}),y&&f.jsx(FN,{onClose:()=>N(!1),onApply:Vv,onReset:Bv,onResetStats:Ud}),g&&f.jsx(zN,{onClose:()=>{w(!1),I("")},initialQuery:S,autoSearch:!!S}),f.jsx(HN,{isOpen:P,onClose:()=>k(!1),userEmail:RN(),onLogout:Hv,onResetStats:Ud,onInstallApp:Dt,showInstallButton:!$,version:JN})]}):f.jsxs("div",{className:"App auth-mode",children:[f.jsxs("div",{className:"app-header auth-header",children:[f.jsx("h1",{className:"app-title",children:t("title")}),f.jsx("div",{className:"auth-lang",children:f.jsx(M,{})})]}),f.jsx(BN,{onAuthenticated:s})]}):f.jsxs("div",{className:"App auth-mode",children:[f.jsxs("div",{className:"app-header auth-header",children:[f.jsx("h1",{className:"app-title",children:t("title")}),f.jsx("div",{className:"auth-lang",children:f.jsx(M,{})})]}),f.jsx("div",{className:"auth-placeholder",children:t("trainer")})]})}function ZN(){return f.jsx(xN,{children:f.jsx(XN,{})})}ba.createRoot(document.getElementById("root")).render(f.jsx(wp.StrictMode,{children:f.jsx(ZN,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/Learn-Latvian-App-2/sw.js").catch(()=>{})});
