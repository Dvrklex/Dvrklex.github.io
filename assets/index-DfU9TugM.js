(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const gt={},Pr=[],Wn=()=>{},vm=()=>!1,oo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),$c=n=>n.startsWith("onUpdate:"),Ot=Object.assign,Xc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},_m=Object.prototype.hasOwnProperty,ct=(n,e)=>_m.call(n,e),We=Array.isArray,Ir=n=>lo(n)==="[object Map]",$d=n=>lo(n)==="[object Set]",je=n=>typeof n=="function",Mt=n=>typeof n=="string",vi=n=>typeof n=="symbol",St=n=>n!==null&&typeof n=="object",Xd=n=>(St(n)||je(n))&&je(n.then)&&je(n.catch),jd=Object.prototype.toString,lo=n=>jd.call(n),xm=n=>lo(n).slice(8,-1),qd=n=>lo(n)==="[object Object]",jc=n=>Mt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ps=Wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),co=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},ym=/-(\w)/g,Mn=co(n=>n.replace(ym,(e,t)=>t?t.toUpperCase():"")),bm=/\B([A-Z])/g,cr=co(n=>n.replace(bm,"-$1").toLowerCase()),uo=co(n=>n.charAt(0).toUpperCase()+n.slice(1)),Co=co(n=>n?`on${uo(n)}`:""),Ni=(n,e)=>!Object.is(n,e),Ro=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Yd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Sm=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Mm=n=>{const e=Mt(n)?Number(n):NaN;return isNaN(e)?n:e};let Fu;const fo=()=>Fu||(Fu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ar(n){if(We(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Mt(i)?wm(i):ar(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Mt(n)||St(n))return n}const Em=/;(?![^(]*\))/g,Tm=/:([^]+)/,Am=/\/\*[^]*?\*\//g;function wm(n){const e={};return n.replace(Am,"").split(Em).forEach(t=>{if(t){const i=t.split(Tm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function vn(n){let e="";if(Mt(n))e=n;else if(We(n))for(let t=0;t<n.length;t++){const i=vn(n[t]);i&&(e+=i+" ")}else if(St(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function Cm(n){if(!n)return null;let{class:e,style:t}=n;return e&&!Mt(e)&&(n.class=vn(e)),t&&(n.style=ar(t)),n}const Rm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pm=Wc(Rm);function Kd(n){return!!n||n===""}const Zd=n=>!!(n&&n.__v_isRef===!0),yt=n=>Mt(n)?n:n==null?"":We(n)||St(n)&&(n.toString===jd||!je(n.toString))?Zd(n)?yt(n.value):JSON.stringify(n,Jd,2):String(n),Jd=(n,e)=>Zd(e)?Jd(n,e.value):Ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Po(i,s)+" =>"]=r,t),{})}:$d(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Po(t))}:vi(e)?Po(e):St(e)&&!We(e)&&!qd(e)?String(e):e,Po=(n,e="")=>{var t;return vi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sn;class Im{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=sn,!e&&sn&&(this.index=(sn.scopes||(sn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=sn;try{return sn=this,e()}finally{sn=t}}}on(){++this._on===1&&(this.prevScope=sn,sn=this)}off(){this._on>0&&--this._on===0&&(sn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Dm(){return sn}let xt;const Io=new WeakSet;class Qd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,sn&&sn.active&&sn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Io.has(this)&&(Io.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||th(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bu(this),nh(this);const e=xt,t=Pn;xt=this,Pn=!0;try{return this.fn()}finally{ih(this),xt=e,Pn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Kc(e);this.deps=this.depsTail=void 0,Bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Io.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cl(this)&&this.run()}get dirty(){return Cl(this)}}let eh=0,ms,gs;function th(n,e=!1){if(n.flags|=8,e){n.next=gs,gs=n;return}n.next=ms,ms=n}function qc(){eh++}function Yc(){if(--eh>0)return;if(gs){let e=gs;for(gs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ms;){let e=ms;for(ms=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function nh(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ih(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Kc(i),Lm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Cl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(rh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function rh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ts)||(n.globalVersion=Ts,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Cl(n))))return;n.flags|=2;const e=n.dep,t=xt,i=Pn;xt=n,Pn=!0;try{nh(n);const r=n.fn(n._value);(e.version===0||Ni(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{xt=t,Pn=i,ih(n),n.flags&=-3}}function Kc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Kc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Lm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Pn=!0;const sh=[];function hi(){sh.push(Pn),Pn=!1}function pi(){const n=sh.pop();Pn=n===void 0?!0:n}function Bu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=xt;xt=void 0;try{e()}finally{xt=t}}}let Ts=0;class Um{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!xt||!Pn||xt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==xt)t=this.activeLink=new Um(xt,this),xt.deps?(t.prevDep=xt.depsTail,xt.depsTail.nextDep=t,xt.depsTail=t):xt.deps=xt.depsTail=t,ah(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=xt.depsTail,t.nextDep=void 0,xt.depsTail.nextDep=t,xt.depsTail=t,xt.deps===t&&(xt.deps=i)}return t}trigger(e){this.version++,Ts++,this.notify(e)}notify(e){qc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Yc()}}}function ah(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ah(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Rl=new WeakMap,rr=Symbol(""),Pl=Symbol(""),As=Symbol("");function Xt(n,e,t){if(Pn&&xt){let i=Rl.get(n);i||Rl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Zc),r.map=i,r.key=t),r.track()}}function oi(n,e,t,i,r,s){const a=Rl.get(n);if(!a){Ts++;return}const o=l=>{l&&l.trigger()};if(qc(),e==="clear")a.forEach(o);else{const l=We(n),c=l&&jc(t);if(l&&t==="length"){const u=Number(i);a.forEach((d,f)=>{(f==="length"||f===As||!vi(f)&&f>=u)&&o(d)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(As)),e){case"add":l?c&&o(a.get("length")):(o(a.get(rr)),Ir(n)&&o(a.get(Pl)));break;case"delete":l||(o(a.get(rr)),Ir(n)&&o(a.get(Pl)));break;case"set":Ir(n)&&o(a.get(rr));break}}Yc()}function hr(n){const e=at(n);return e===n?e:(Xt(e,"iterate",As),Sn(n)?e:e.map(Bt))}function ho(n){return Xt(n=at(n),"iterate",As),n}const Nm={__proto__:null,[Symbol.iterator](){return Do(this,Symbol.iterator,Bt)},concat(...n){return hr(this).concat(...n.map(e=>We(e)?hr(e):e))},entries(){return Do(this,"entries",n=>(n[1]=Bt(n[1]),n))},every(n,e){return ei(this,"every",n,e,void 0,arguments)},filter(n,e){return ei(this,"filter",n,e,t=>t.map(Bt),arguments)},find(n,e){return ei(this,"find",n,e,Bt,arguments)},findIndex(n,e){return ei(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ei(this,"findLast",n,e,Bt,arguments)},findLastIndex(n,e){return ei(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ei(this,"forEach",n,e,void 0,arguments)},includes(...n){return Lo(this,"includes",n)},indexOf(...n){return Lo(this,"indexOf",n)},join(n){return hr(this).join(n)},lastIndexOf(...n){return Lo(this,"lastIndexOf",n)},map(n,e){return ei(this,"map",n,e,void 0,arguments)},pop(){return es(this,"pop")},push(...n){return es(this,"push",n)},reduce(n,...e){return Vu(this,"reduce",n,e)},reduceRight(n,...e){return Vu(this,"reduceRight",n,e)},shift(){return es(this,"shift")},some(n,e){return ei(this,"some",n,e,void 0,arguments)},splice(...n){return es(this,"splice",n)},toReversed(){return hr(this).toReversed()},toSorted(n){return hr(this).toSorted(n)},toSpliced(...n){return hr(this).toSpliced(...n)},unshift(...n){return es(this,"unshift",n)},values(){return Do(this,"values",Bt)}};function Do(n,e,t){const i=ho(n),r=i[e]();return i!==n&&!Sn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Om=Array.prototype;function ei(n,e,t,i,r,s){const a=ho(n),o=a!==n&&!Sn(n),l=a[e];if(l!==Om[e]){const d=l.apply(n,s);return o?Bt(d):d}let c=t;a!==n&&(o?c=function(d,f){return t.call(this,Bt(d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Vu(n,e,t,i){const r=ho(n);let s=t;return r!==n&&(Sn(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,Bt(o),l,n)}),r[e](s,...i)}function Lo(n,e,t){const i=at(n);Xt(i,"iterate",As);const r=i[e](...t);return(r===-1||r===!1)&&tu(t[0])?(t[0]=at(t[0]),i[e](...t)):r}function es(n,e,t=[]){hi(),qc();const i=at(n)[e].apply(n,t);return Yc(),pi(),i}const Fm=Wc("__proto__,__v_isRef,__isVue"),oh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(vi));function Bm(n){vi(n)||(n=String(n));const e=at(this);return Xt(e,"has",n),e.hasOwnProperty(n)}class lh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?qm:dh:s?fh:uh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=We(e);if(!r){let l;if(a&&(l=Nm[t]))return l;if(t==="hasOwnProperty")return Bm}const o=Reflect.get(e,t,Yt(e)?e:i);return(vi(t)?oh.has(t):Fm(t))||(r||Xt(e,"get",t),s)?o:Yt(o)?a&&jc(t)?o:o.value:St(o)?r?Qc(o):Xr(o):o}}class ch extends lh{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Oi(s);if(!Sn(i)&&!Oi(i)&&(s=at(s),i=at(i)),!We(e)&&Yt(s)&&!Yt(i))return l?!1:(s.value=i,!0)}const a=We(e)&&jc(t)?Number(t)<e.length:ct(e,t),o=Reflect.set(e,t,i,Yt(e)?e:r);return e===at(r)&&(a?Ni(i,s)&&oi(e,"set",t,i):oi(e,"add",t,i)),o}deleteProperty(e,t){const i=ct(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&oi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!vi(t)||!oh.has(t))&&Xt(e,"has",t),i}ownKeys(e){return Xt(e,"iterate",We(e)?"length":rr),Reflect.ownKeys(e)}}class Vm extends lh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const zm=new ch,km=new Vm,Hm=new ch(!0);const Il=n=>n,ra=n=>Reflect.getPrototypeOf(n);function Gm(n,e,t){return function(...i){const r=this.__v_raw,s=at(r),a=Ir(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Il:e?qa:Bt;return!e&&Xt(s,"iterate",l?Pl:rr),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:o?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function sa(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Wm(n,e){const t={get(r){const s=this.__v_raw,a=at(s),o=at(r);n||(Ni(r,o)&&Xt(a,"get",r),Xt(a,"get",o));const{has:l}=ra(a),c=e?Il:n?qa:Bt;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Xt(at(r),"iterate",rr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,a=at(s),o=at(r);return n||(Ni(r,o)&&Xt(a,"has",r),Xt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=at(o),c=e?Il:n?qa:Bt;return!n&&Xt(l,"iterate",rr),o.forEach((u,d)=>r.call(s,c(u),c(d),a))}};return Ot(t,n?{add:sa("add"),set:sa("set"),delete:sa("delete"),clear:sa("clear")}:{add(r){!e&&!Sn(r)&&!Oi(r)&&(r=at(r));const s=at(this);return ra(s).has.call(s,r)||(s.add(r),oi(s,"add",r,r)),this},set(r,s){!e&&!Sn(s)&&!Oi(s)&&(s=at(s));const a=at(this),{has:o,get:l}=ra(a);let c=o.call(a,r);c||(r=at(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Ni(s,u)&&oi(a,"set",r,s):oi(a,"add",r,s),this},delete(r){const s=at(this),{has:a,get:o}=ra(s);let l=a.call(s,r);l||(r=at(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&oi(s,"delete",r,void 0),c},clear(){const r=at(this),s=r.size!==0,a=r.clear();return s&&oi(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Gm(r,n,e)}),t}function Jc(n,e){const t=Wm(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ct(t,r)&&r in i?t:i,r,s)}const $m={get:Jc(!1,!1)},Xm={get:Jc(!1,!0)},jm={get:Jc(!0,!1)};const uh=new WeakMap,fh=new WeakMap,dh=new WeakMap,qm=new WeakMap;function Ym(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Km(n){return n.__v_skip||!Object.isExtensible(n)?0:Ym(xm(n))}function Xr(n){return Oi(n)?n:eu(n,!1,zm,$m,uh)}function Zm(n){return eu(n,!1,Hm,Xm,fh)}function Qc(n){return eu(n,!0,km,jm,dh)}function eu(n,e,t,i,r){if(!St(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Km(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function Dr(n){return Oi(n)?Dr(n.__v_raw):!!(n&&n.__v_isReactive)}function Oi(n){return!!(n&&n.__v_isReadonly)}function Sn(n){return!!(n&&n.__v_isShallow)}function tu(n){return n?!!n.__v_raw:!1}function at(n){const e=n&&n.__v_raw;return e?at(e):n}function Jm(n){return!ct(n,"__v_skip")&&Object.isExtensible(n)&&Yd(n,"__v_skip",!0),n}const Bt=n=>St(n)?Xr(n):n,qa=n=>St(n)?Qc(n):n;function Yt(n){return n?n.__v_isRef===!0:!1}function ln(n){return Qm(n,!1)}function Qm(n,e){return Yt(n)?n:new eg(n,e)}class eg{constructor(e,t){this.dep=new Zc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:at(e),this._value=t?e:Bt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Sn(e)||Oi(e);e=i?e:at(e),Ni(e,t)&&(this._rawValue=e,this._value=i?e:Bt(e),this.dep.trigger())}}function tg(n){return Yt(n)?n.value:n}const ng={get:(n,e,t)=>e==="__v_raw"?n:tg(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Yt(r)&&!Yt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function hh(n){return Dr(n)?n:new Proxy(n,ng)}class ig{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Zc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ts-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&xt!==this)return th(this,!0),!0}get value(){const e=this.dep.track();return rh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rg(n,e,t=!1){let i,r;return je(n)?i=n:(i=n.get,r=n.set),new ig(i,r,t)}const aa={},Ya=new WeakMap;let Ki;function sg(n,e=!1,t=Ki){if(t){let i=Ya.get(t);i||Ya.set(t,i=[]),i.push(n)}}function ag(n,e,t=gt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=E=>r?E:Sn(E)||r===!1||r===0?li(E,1):li(E);let u,d,f,h,g=!1,_=!1;if(Yt(n)?(d=()=>n.value,g=Sn(n)):Dr(n)?(d=()=>c(n),g=!0):We(n)?(_=!0,g=n.some(E=>Dr(E)||Sn(E)),d=()=>n.map(E=>{if(Yt(E))return E.value;if(Dr(E))return c(E);if(je(E))return l?l(E,2):E()})):je(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){hi();try{f()}finally{pi()}}const E=Ki;Ki=u;try{return l?l(n,3,[h]):n(h)}finally{Ki=E}}:d=Wn,e&&r){const E=d,D=r===!0?1/0:r;d=()=>li(E(),D)}const m=Dm(),p=()=>{u.stop(),m&&m.active&&Xc(m.effects,u)};if(s&&e){const E=e;e=(...D)=>{E(...D),p()}}let y=_?new Array(n.length).fill(aa):aa;const T=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const D=u.run();if(r||g||(_?D.some((R,U)=>Ni(R,y[U])):Ni(D,y))){f&&f();const R=Ki;Ki=u;try{const U=[D,y===aa?void 0:_&&y[0]===aa?[]:y,h];y=D,l?l(e,3,U):e(...U)}finally{Ki=R}}}else u.run()};return o&&o(T),u=new Qd(d),u.scheduler=a?()=>a(T,!1):T,h=E=>sg(E,!1,u),f=u.onStop=()=>{const E=Ya.get(u);if(E){if(l)l(E,4);else for(const D of E)D();Ya.delete(u)}},e?i?T(!0):y=u.run():a?a(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function li(n,e=1/0,t){if(e<=0||!St(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Yt(n))li(n.value,e,t);else if(We(n))for(let i=0;i<n.length;i++)li(n[i],e,t);else if($d(n)||Ir(n))n.forEach(i=>{li(i,e,t)});else if(qd(n)){for(const i in n)li(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&li(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zs(n,e,t,i){try{return i?n(...i):n()}catch(r){po(r,e,t)}}function Dn(n,e,t,i){if(je(n)){const r=Zs(n,e,t,i);return r&&Xd(r)&&r.catch(s=>{po(s,e,t)}),r}if(We(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Dn(n[s],e,t,i));return r}}function po(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||gt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}o=o.parent}if(s){hi(),Zs(s,null,10,[n,l,c]),pi();return}}og(n,t,r,i,a)}function og(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const en=[];let Bn=-1;const Lr=[];let Pi=null,Rr=0;const ph=Promise.resolve();let Ka=null;function nu(n){const e=Ka||ph;return n?e.then(this?n.bind(this):n):e}function lg(n){let e=Bn+1,t=en.length;for(;e<t;){const i=e+t>>>1,r=en[i],s=ws(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function iu(n){if(!(n.flags&1)){const e=ws(n),t=en[en.length-1];!t||!(n.flags&2)&&e>=ws(t)?en.push(n):en.splice(lg(e),0,n),n.flags|=1,mh()}}function mh(){Ka||(Ka=ph.then(vh))}function cg(n){We(n)?Lr.push(...n):Pi&&n.id===-1?Pi.splice(Rr+1,0,n):n.flags&1||(Lr.push(n),n.flags|=1),mh()}function zu(n,e,t=Bn+1){for(;t<en.length;t++){const i=en[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;en.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function gh(n){if(Lr.length){const e=[...new Set(Lr)].sort((t,i)=>ws(t)-ws(i));if(Lr.length=0,Pi){Pi.push(...e);return}for(Pi=e,Rr=0;Rr<Pi.length;Rr++){const t=Pi[Rr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Pi=null,Rr=0}}const ws=n=>n.id==null?n.flags&2?-1:1/0:n.id;function vh(n){try{for(Bn=0;Bn<en.length;Bn++){const e=en[Bn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bn<en.length;Bn++){const e=en[Bn];e&&(e.flags&=-2)}Bn=-1,en.length=0,gh(),Ka=null,(en.length||Lr.length)&&vh()}}let Nt=null,_h=null;function Za(n){const e=Nt;return Nt=n,_h=n&&n.type.__scopeId||null,e}function Ja(n,e=Nt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&ef(-1);const s=Za(e);let a;try{a=n(...r)}finally{Za(s),i._d&&ef(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function xh(n,e){if(Nt===null)return n;const t=yo(Nt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=gt]=e[r];s&&(je(s)&&(s={mounted:s,updated:s}),s.deep&&li(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function ki(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(hi(),Dn(l,t,8,[n.el,o,n,e]),pi())}}const yh=Symbol("_vte"),bh=n=>n.__isTeleport,vs=n=>n&&(n.disabled||n.disabled===""),ku=n=>n&&(n.defer||n.defer===""),Hu=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Gu=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Dl=(n,e)=>{const t=n&&n.to;return Mt(t)?e?e(t):null:t},Sh={name:"Teleport",__isTeleport:!0,process(n,e,t,i,r,s,a,o,l,c){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:g,createText:_,createComment:m}}=c,p=vs(e.props);let{shapeFlag:y,children:T,dynamicChildren:E}=e;if(n==null){const D=e.el=_(""),R=e.anchor=_("");h(D,t,i),h(R,t,i);const U=(M,G)=>{y&16&&(r&&r.isCE&&(r.ce._teleportTarget=M),u(T,M,G,r,s,a,o,l))},x=()=>{const M=e.target=Dl(e.props,g),G=Mh(M,e,_,h);M&&(a!=="svg"&&Hu(M)?a="svg":a!=="mathml"&&Gu(M)&&(a="mathml"),p||(U(M,G),Oa(e,!1)))};p&&(U(t,R),Oa(e,!0)),ku(e.props)?(e.el.__isMounted=!1,Qt(()=>{x(),delete e.el.__isMounted},s)):x()}else{if(ku(e.props)&&n.el.__isMounted===!1){Qt(()=>{Sh.process(n,e,t,i,r,s,a,o,l,c)},s);return}e.el=n.el,e.targetStart=n.targetStart;const D=e.anchor=n.anchor,R=e.target=n.target,U=e.targetAnchor=n.targetAnchor,x=vs(n.props),M=x?t:R,G=x?D:U;if(a==="svg"||Hu(R)?a="svg":(a==="mathml"||Gu(R))&&(a="mathml"),E?(f(n.dynamicChildren,E,M,r,s,a,o),cu(n,e,!0)):l||d(n,e,M,G,r,s,a,o,!1),p)x?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):oa(e,t,D,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const A=e.target=Dl(e.props,g);A&&oa(e,A,null,c,0)}else x&&oa(e,R,U,c,1);Oa(e,p)}},remove(n,e,t,{um:i,o:{remove:r}},s){const{shapeFlag:a,children:o,anchor:l,targetStart:c,targetAnchor:u,target:d,props:f}=n;if(d&&(r(c),r(u)),s&&r(l),a&16){const h=s||!vs(f);for(let g=0;g<o.length;g++){const _=o[g];i(_,e,t,h,!!_.dynamicChildren)}}},move:oa,hydrate:ug};function oa(n,e,t,{o:{insert:i},m:r},s=2){s===0&&i(n.targetAnchor,e,t);const{el:a,anchor:o,shapeFlag:l,children:c,props:u}=n,d=s===2;if(d&&i(a,e,t),(!d||vs(u))&&l&16)for(let f=0;f<c.length;f++)r(c[f],e,t,2);d&&i(o,e,t)}function ug(n,e,t,i,r,s,{o:{nextSibling:a,parentNode:o,querySelector:l,insert:c,createText:u}},d){const f=e.target=Dl(e.props,l);if(f){const h=vs(e.props),g=f._lpa||f.firstChild;if(e.shapeFlag&16)if(h)e.anchor=d(a(n),e,o(n),t,i,r,s),e.targetStart=g,e.targetAnchor=g&&a(g);else{e.anchor=a(n);let _=g;for(;_;){if(_&&_.nodeType===8){if(_.data==="teleport start anchor")e.targetStart=_;else if(_.data==="teleport anchor"){e.targetAnchor=_,f._lpa=e.targetAnchor&&a(e.targetAnchor);break}}_=a(_)}e.targetAnchor||Mh(f,e,u,c),d(g&&a(g),e,f,t,i,r,s)}Oa(e,h)}return e.anchor&&a(e.anchor)}const fg=Sh;function Oa(n,e){const t=n.ctx;if(t&&t.ut){let i,r;for(e?(i=n.el,r=n.anchor):(i=n.targetStart,r=n.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function Mh(n,e,t,i){const r=e.targetStart=t(""),s=e.targetAnchor=t("");return r[yh]=s,n&&(i(r,n),i(s,n)),s}const Ii=Symbol("_leaveCb"),la=Symbol("_enterCb");function Eh(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ur(()=>{n.isMounted=!0}),vo(()=>{n.isUnmounting=!0}),n}const _n=[Function,Array],Th={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_n,onEnter:_n,onAfterEnter:_n,onEnterCancelled:_n,onBeforeLeave:_n,onLeave:_n,onAfterLeave:_n,onLeaveCancelled:_n,onBeforeAppear:_n,onAppear:_n,onAfterAppear:_n,onAppearCancelled:_n},Ah=n=>{const e=n.subTree;return e.component?Ah(e.component):e},dg={name:"BaseTransition",props:Th,setup(n,{slots:e}){const t=fu(),i=Eh();return()=>{const r=e.default&&ru(e.default(),!0);if(!r||!r.length)return;const s=wh(r),a=at(n),{mode:o}=a;if(i.isLeaving)return Uo(s);const l=Wu(s);if(!l)return Uo(s);let c=Cs(l,a,i,t,d=>c=d);l.type!==jt&&or(l,c);let u=t.subTree&&Wu(t.subTree);if(u&&u.type!==jt&&!Ji(l,u)&&Ah(t).type!==jt){let d=Cs(u,a,i,t);if(or(u,d),o==="out-in"&&l.type!==jt)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},Uo(s);o==="in-out"&&l.type!==jt?d.delayLeave=(f,h,g)=>{const _=Ch(i,u);_[String(u.key)]=u,f[Ii]=()=>{h(),f[Ii]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function wh(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==jt){e=t;break}}return e}const hg=dg;function Ch(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Cs(n,e,t,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:y,onAppearCancelled:T}=e,E=String(n.key),D=Ch(t,n),R=(M,G)=>{M&&Dn(M,i,9,G)},U=(M,G)=>{const A=G[1];R(M,G),We(M)?M.every(C=>C.length<=1)&&A():M.length<=1&&A()},x={mode:a,persisted:o,beforeEnter(M){let G=l;if(!t.isMounted)if(s)G=m||l;else return;M[Ii]&&M[Ii](!0);const A=D[E];A&&Ji(n,A)&&A.el[Ii]&&A.el[Ii](),R(G,[M])},enter(M){let G=c,A=u,C=d;if(!t.isMounted)if(s)G=p||c,A=y||u,C=T||d;else return;let N=!1;const B=M[la]=z=>{N||(N=!0,z?R(C,[M]):R(A,[M]),x.delayedLeave&&x.delayedLeave(),M[la]=void 0)};G?U(G,[M,B]):B()},leave(M,G){const A=String(n.key);if(M[la]&&M[la](!0),t.isUnmounting)return G();R(f,[M]);let C=!1;const N=M[Ii]=B=>{C||(C=!0,G(),B?R(_,[M]):R(g,[M]),M[Ii]=void 0,D[A]===n&&delete D[A])};D[A]=n,h?U(h,[M,N]):N()},clone(M){const G=Cs(M,e,t,i,r);return r&&r(G),G}};return x}function Uo(n){if(mo(n))return n=Fi(n),n.children=null,n}function Wu(n){if(!mo(n))return bh(n.type)&&n.children?wh(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&je(t.default))return t.default()}}function or(n,e){n.shapeFlag&6&&n.component?(n.transition=e,or(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ru(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===vt?(a.patchFlag&128&&r++,i=i.concat(ru(a.children,e,o))):(e||a.type!==jt)&&i.push(o!=null?Fi(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Rh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Qa(n,e,t,i,r=!1){if(We(n)){n.forEach((g,_)=>Qa(g,e&&(We(e)?e[_]:e),t,i,r));return}if(Ur(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Qa(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?yo(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===gt?o.refs={}:o.refs,d=o.setupState,f=at(d),h=d===gt?()=>!1:g=>ct(f,g);if(c!=null&&c!==l&&(Mt(c)?(u[c]=null,h(c)&&(d[c]=null)):Yt(c)&&(c.value=null)),je(l))Zs(l,o,12,[a,u]);else{const g=Mt(l),_=Yt(l);if(g||_){const m=()=>{if(n.f){const p=g?h(l)?d[l]:u[l]:l.value;r?We(p)&&Xc(p,s):We(p)?p.includes(s)||p.push(s):g?(u[l]=[s],h(l)&&(d[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=a,h(l)&&(d[l]=a)):_&&(l.value=a,n.k&&(u[n.k]=a))};a?(m.id=-1,Qt(m,t)):m()}}}fo().requestIdleCallback;fo().cancelIdleCallback;const Ur=n=>!!n.type.__asyncLoader,mo=n=>n.type.__isKeepAlive;function pg(n,e){Ph(n,"a",e)}function mg(n,e){Ph(n,"da",e)}function Ph(n,e,t=Vt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(go(e,i,t),t){let r=t.parent;for(;r&&r.parent;)mo(r.parent.vnode)&&gg(i,e,t,r),r=r.parent}}function gg(n,e,t,i){const r=go(e,n,i,!0);Dh(()=>{Xc(i[e],r)},t)}function go(n,e,t=Vt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{hi();const o=Js(t),l=Dn(e,t,n,a);return o(),pi(),l});return i?r.unshift(s):r.push(s),s}}const _i=n=>(e,t=Vt)=>{(!Ds||n==="sp")&&go(n,(...i)=>e(...i),t)},vg=_i("bm"),ur=_i("m"),_g=_i("bu"),Ih=_i("u"),vo=_i("bum"),Dh=_i("um"),xg=_i("sp"),yg=_i("rtg"),bg=_i("rtc");function Sg(n,e=Vt){go("ec",n,e)}const su="components",Mg="directives";function Br(n,e){return au(su,n,!0,e)||n}const Lh=Symbol.for("v-ndc");function ca(n){return Mt(n)?au(su,n,!1)||n:n||Lh}function Uh(n){return au(Mg,n)}function au(n,e,t=!0,i=!1){const r=Nt||Vt;if(r){const s=r.type;if(n===su){const o=c0(s,!1);if(o&&(o===e||o===Mn(e)||o===uo(Mn(e))))return s}const a=$u(r[n]||s[n],e)||$u(r.appContext[n],e);return!a&&i?s:a}}function $u(n,e){return n&&(n[e]||n[Mn(e)]||n[uo(Mn(e))])}function kn(n,e,t,i){let r;const s=t,a=We(n);if(a||Mt(n)){const o=a&&Dr(n);let l=!1,c=!1;o&&(l=!Sn(n),c=Oi(n),n=ho(n)),r=new Array(n.length);for(let u=0,d=n.length;u<d;u++)r[u]=e(l?c?qa(Bt(n[u])):Bt(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(St(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function sr(n,e,t={},i,r){if(Nt.ce||Nt.parent&&Ur(Nt.parent)&&Nt.parent.ce)return e!=="default"&&(t.name=e),Ue(),mn(vt,null,[dt("slot",t,i&&i())],64);let s=n[e];s&&s._c&&(s._d=!1),Ue();const a=s&&Nh(s(t)),o=t.key||a&&a.key,l=mn(vt,{key:(o&&!vi(o)?o:`_${e}`)+(!a&&i?"_fb":"")},a||(i?i():[]),a&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Nh(n){return n.some(e=>Ps(e)?!(e.type===jt||e.type===vt&&!Nh(e.children)):!0)?n:null}const Ll=n=>n?ep(n)?yo(n):Ll(n.parent):null,_s=Ot(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ll(n.parent),$root:n=>Ll(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Fh(n),$forceUpdate:n=>n.f||(n.f=()=>{iu(n.update)}),$nextTick:n=>n.n||(n.n=nu.bind(n.proxy)),$watch:n=>$g.bind(n)}),No=(n,e)=>n!==gt&&!n.__isScriptSetup&&ct(n,e),Eg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(No(i,e))return a[e]=1,i[e];if(r!==gt&&ct(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&ct(c,e))return a[e]=3,s[e];if(t!==gt&&ct(t,e))return a[e]=4,t[e];Ul&&(a[e]=0)}}const u=_s[e];let d,f;if(u)return e==="$attrs"&&Xt(n.attrs,"get",""),u(n);if((d=o.__cssModules)&&(d=d[e]))return d;if(t!==gt&&ct(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,ct(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return No(r,e)?(r[e]=t,!0):i!==gt&&ct(i,e)?(i[e]=t,!0):ct(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==gt&&ct(n,a)||No(e,a)||(o=s[0])&&ct(o,a)||ct(i,a)||ct(_s,a)||ct(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ct(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Xu(n){return We(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ul=!0;function Tg(n){const e=Fh(n),t=n.proxy,i=n.ctx;Ul=!1,e.beforeCreate&&ju(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:T,unmounted:E,render:D,renderTracked:R,renderTriggered:U,errorCaptured:x,serverPrefetch:M,expose:G,inheritAttrs:A,components:C,directives:N,filters:B}=e;if(c&&Ag(c,i,null),a)for(const O in a){const ne=a[O];je(ne)&&(i[O]=ne.bind(t))}if(r){const O=r.call(t,t);St(O)&&(n.data=Xr(O))}if(Ul=!0,s)for(const O in s){const ne=s[O],le=je(ne)?ne.bind(t,t):je(ne.get)?ne.get.bind(t,t):Wn,de=!je(ne)&&je(ne.set)?ne.set.bind(t):Wn,fe=Ls({get:le,set:de});Object.defineProperty(i,O,{enumerable:!0,configurable:!0,get:()=>fe.value,set:se=>fe.value=se})}if(o)for(const O in o)Oh(o[O],i,t,O);if(l){const O=je(l)?l.call(t):l;Reflect.ownKeys(O).forEach(ne=>{Dg(ne,O[ne])})}u&&ju(u,n,"c");function H(O,ne){We(ne)?ne.forEach(le=>O(le.bind(t))):ne&&O(ne.bind(t))}if(H(vg,d),H(ur,f),H(_g,h),H(Ih,g),H(pg,_),H(mg,m),H(Sg,x),H(bg,R),H(yg,U),H(vo,y),H(Dh,E),H(xg,M),We(G))if(G.length){const O=n.exposed||(n.exposed={});G.forEach(ne=>{Object.defineProperty(O,ne,{get:()=>t[ne],set:le=>t[ne]=le})})}else n.exposed||(n.exposed={});D&&n.render===Wn&&(n.render=D),A!=null&&(n.inheritAttrs=A),C&&(n.components=C),N&&(n.directives=N),M&&Rh(n)}function Ag(n,e,t=Wn){We(n)&&(n=Nl(n));for(const i in n){const r=n[i];let s;St(r)?"default"in r?s=xs(r.from||i,r.default,!0):s=xs(r.from||i):s=xs(r),Yt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function ju(n,e,t){Dn(We(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Oh(n,e,t,i){let r=i.includes(".")?Yh(t,i):()=>t[i];if(Mt(n)){const s=e[n];je(s)&&ys(r,s)}else if(je(n))ys(r,n.bind(t));else if(St(n))if(We(n))n.forEach(s=>Oh(s,e,t,i));else{const s=je(n.handler)?n.handler.bind(t):e[n.handler];je(s)&&ys(r,s,n)}}function Fh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>eo(l,c,a,!0)),eo(l,e,a)),St(e)&&s.set(e,l),l}function eo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&eo(n,s,t,!0),r&&r.forEach(a=>eo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=wg[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const wg={data:qu,props:Yu,emits:Yu,methods:us,computed:us,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:us,directives:us,watch:Rg,provide:qu,inject:Cg};function qu(n,e){return e?n?function(){return Ot(je(n)?n.call(this,this):n,je(e)?e.call(this,this):e)}:e:n}function Cg(n,e){return us(Nl(n),Nl(e))}function Nl(n){if(We(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Zt(n,e){return n?[...new Set([].concat(n,e))]:e}function us(n,e){return n?Ot(Object.create(null),n,e):e}function Yu(n,e){return n?We(n)&&We(e)?[...new Set([...n,...e])]:Ot(Object.create(null),Xu(n),Xu(e??{})):e}function Rg(n,e){if(!n)return e;if(!e)return n;const t=Ot(Object.create(null),n);for(const i in e)t[i]=Zt(n[i],e[i]);return t}function Bh(){return{app:null,config:{isNativeTag:vm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pg=0;function Ig(n,e){return function(i,r=null){je(i)||(i=Ot({},i)),r!=null&&!St(r)&&(r=null);const s=Bh(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:Pg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:d0,get config(){return s.config},set config(u){},use(u,...d){return a.has(u)||(u&&je(u.install)?(a.add(u),u.install(c,...d)):je(u)&&(a.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||dt(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,yo(h.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Dn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=Nr;Nr=c;try{return u()}finally{Nr=d}}};return c}}let Nr=null;function Dg(n,e){if(Vt){let t=Vt.provides;const i=Vt.parent&&Vt.parent.provides;i===t&&(t=Vt.provides=Object.create(i)),t[n]=e}}function xs(n,e,t=!1){const i=Vt||Nt;if(i||Nr){let r=Nr?Nr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&je(e)?e.call(i&&i.proxy):e}}const Vh={},zh=()=>Object.create(Vh),kh=n=>Object.getPrototypeOf(n)===Vh;function Lg(n,e,t,i=!1){const r={},s=zh();n.propsDefaults=Object.create(null),Hh(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Zm(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Ug(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=at(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(_o(n.emitsOptions,f))continue;const h=e[f];if(l)if(ct(s,f))h!==s[f]&&(s[f]=h,c=!0);else{const g=Mn(f);r[g]=Ol(l,o,g,h,n,!1)}else h!==s[f]&&(s[f]=h,c=!0)}}}else{Hh(n,e,r,s)&&(c=!0);let u;for(const d in o)(!e||!ct(e,d)&&((u=cr(d))===d||!ct(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=Ol(l,o,d,void 0,n,!0)):delete r[d]);if(s!==o)for(const d in s)(!e||!ct(e,d))&&(delete s[d],c=!0)}c&&oi(n.attrs,"set","")}function Hh(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(ps(l))continue;const c=e[l];let u;r&&ct(r,u=Mn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:_o(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=at(t),c=o||gt;for(let u=0;u<s.length;u++){const d=s[u];t[d]=Ol(r,l,d,c[d],n,!ct(c,d))}}return a}function Ol(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=ct(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&je(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Js(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===cr(t))&&(i=!0))}return i}const Ng=new WeakMap;function Gh(n,e,t=!1){const i=t?Ng:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!je(n)){const u=d=>{l=!0;const[f,h]=Gh(d,e,!0);Ot(a,f),h&&o.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return St(n)&&i.set(n,Pr),Pr;if(We(s))for(let u=0;u<s.length;u++){const d=Mn(s[u]);Ku(d)&&(a[d]=gt)}else if(s)for(const u in s){const d=Mn(u);if(Ku(d)){const f=s[u],h=a[d]=We(f)||je(f)?{type:f}:Ot({},f),g=h.type;let _=!1,m=!0;if(We(g))for(let p=0;p<g.length;++p){const y=g[p],T=je(y)&&y.name;if(T==="Boolean"){_=!0;break}else T==="String"&&(m=!1)}else _=je(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||ct(h,"default"))&&o.push(d)}}const c=[a,o];return St(n)&&i.set(n,c),c}function Ku(n){return n[0]!=="$"&&!ps(n)}const ou=n=>n[0]==="_"||n==="$stable",lu=n=>We(n)?n.map(Vn):[Vn(n)],Og=(n,e,t)=>{if(e._n)return e;const i=Ja((...r)=>lu(e(...r)),t);return i._c=!1,i},Wh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(ou(r))continue;const s=n[r];if(je(s))e[r]=Og(r,s,i);else if(s!=null){const a=lu(s);e[r]=()=>a}}},$h=(n,e)=>{const t=lu(e);n.slots.default=()=>t},Xh=(n,e,t)=>{for(const i in e)(t||!ou(i))&&(n[i]=e[i])},Fg=(n,e,t)=>{const i=n.slots=zh();if(n.vnode.shapeFlag&32){const r=e._;r?(Xh(i,e,t),t&&Yd(i,"_",r,!0)):Wh(e,i)}else e&&$h(n,e)},Bg=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=gt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Xh(r,e,t):(s=!e.$stable,Wh(e,r)),a=e}else e&&($h(n,e),a={default:1});if(s)for(const o in r)!ou(o)&&a[o]==null&&delete r[o]},Qt=Jg;function Vg(n){return zg(n)}function zg(n,e){const t=fo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Wn,insertStaticContent:g}=n,_=(I,P,V,Q=null,Z=null,ie=null,w=void 0,he=null,ce=!!P.dynamicChildren)=>{if(I===P)return;I&&!Ji(I,P)&&(Q=ae(I),se(I,Z,ie,!0),I=null),P.patchFlag===-2&&(ce=!1,P.dynamicChildren=null);const{type:re,ref:oe,shapeFlag:b}=P;switch(re){case xo:m(I,P,V,Q);break;case jt:p(I,P,V,Q);break;case Fa:I==null&&y(P,V,Q,w);break;case vt:C(I,P,V,Q,Z,ie,w,he,ce);break;default:b&1?D(I,P,V,Q,Z,ie,w,he,ce):b&6?N(I,P,V,Q,Z,ie,w,he,ce):(b&64||b&128)&&re.process(I,P,V,Q,Z,ie,w,he,ce,Te)}oe!=null&&Z&&Qa(oe,I&&I.ref,ie,P||I,!P)},m=(I,P,V,Q)=>{if(I==null)i(P.el=o(P.children),V,Q);else{const Z=P.el=I.el;P.children!==I.children&&c(Z,P.children)}},p=(I,P,V,Q)=>{I==null?i(P.el=l(P.children||""),V,Q):P.el=I.el},y=(I,P,V,Q)=>{[I.el,I.anchor]=g(I.children,P,V,Q,I.el,I.anchor)},T=({el:I,anchor:P},V,Q)=>{let Z;for(;I&&I!==P;)Z=f(I),i(I,V,Q),I=Z;i(P,V,Q)},E=({el:I,anchor:P})=>{let V;for(;I&&I!==P;)V=f(I),r(I),I=V;r(P)},D=(I,P,V,Q,Z,ie,w,he,ce)=>{P.type==="svg"?w="svg":P.type==="math"&&(w="mathml"),I==null?R(P,V,Q,Z,ie,w,he,ce):M(I,P,Z,ie,w,he,ce)},R=(I,P,V,Q,Z,ie,w,he)=>{let ce,re;const{props:oe,shapeFlag:b,transition:v,dirs:L}=I;if(ce=I.el=a(I.type,ie,oe&&oe.is,oe),b&8?u(ce,I.children):b&16&&x(I.children,ce,null,Q,Z,Oo(I,ie),w,he),L&&ki(I,null,Q,"created"),U(ce,I,I.scopeId,w,Q),oe){for(const ee in oe)ee!=="value"&&!ps(ee)&&s(ce,ee,null,oe[ee],ie,Q);"value"in oe&&s(ce,"value",null,oe.value,ie),(re=oe.onVnodeBeforeMount)&&Un(re,Q,I)}L&&ki(I,null,Q,"beforeMount");const $=kg(Z,v);$&&v.beforeEnter(ce),i(ce,P,V),((re=oe&&oe.onVnodeMounted)||$||L)&&Qt(()=>{re&&Un(re,Q,I),$&&v.enter(ce),L&&ki(I,null,Q,"mounted")},Z)},U=(I,P,V,Q,Z)=>{if(V&&h(I,V),Q)for(let ie=0;ie<Q.length;ie++)h(I,Q[ie]);if(Z){let ie=Z.subTree;if(P===ie||Zh(ie.type)&&(ie.ssContent===P||ie.ssFallback===P)){const w=Z.vnode;U(I,w,w.scopeId,w.slotScopeIds,Z.parent)}}},x=(I,P,V,Q,Z,ie,w,he,ce=0)=>{for(let re=ce;re<I.length;re++){const oe=I[re]=he?Di(I[re]):Vn(I[re]);_(null,oe,P,V,Q,Z,ie,w,he)}},M=(I,P,V,Q,Z,ie,w)=>{const he=P.el=I.el;let{patchFlag:ce,dynamicChildren:re,dirs:oe}=P;ce|=I.patchFlag&16;const b=I.props||gt,v=P.props||gt;let L;if(V&&Hi(V,!1),(L=v.onVnodeBeforeUpdate)&&Un(L,V,P,I),oe&&ki(P,I,V,"beforeUpdate"),V&&Hi(V,!0),(b.innerHTML&&v.innerHTML==null||b.textContent&&v.textContent==null)&&u(he,""),re?G(I.dynamicChildren,re,he,V,Q,Oo(P,Z),ie):w||ne(I,P,he,null,V,Q,Oo(P,Z),ie,!1),ce>0){if(ce&16)A(he,b,v,V,Z);else if(ce&2&&b.class!==v.class&&s(he,"class",null,v.class,Z),ce&4&&s(he,"style",b.style,v.style,Z),ce&8){const $=P.dynamicProps;for(let ee=0;ee<$.length;ee++){const X=$[ee],ye=b[X],me=v[X];(me!==ye||X==="value")&&s(he,X,ye,me,Z,V)}}ce&1&&I.children!==P.children&&u(he,P.children)}else!w&&re==null&&A(he,b,v,V,Z);((L=v.onVnodeUpdated)||oe)&&Qt(()=>{L&&Un(L,V,P,I),oe&&ki(P,I,V,"updated")},Q)},G=(I,P,V,Q,Z,ie,w)=>{for(let he=0;he<P.length;he++){const ce=I[he],re=P[he],oe=ce.el&&(ce.type===vt||!Ji(ce,re)||ce.shapeFlag&198)?d(ce.el):V;_(ce,re,oe,null,Q,Z,ie,w,!0)}},A=(I,P,V,Q,Z)=>{if(P!==V){if(P!==gt)for(const ie in P)!ps(ie)&&!(ie in V)&&s(I,ie,P[ie],null,Z,Q);for(const ie in V){if(ps(ie))continue;const w=V[ie],he=P[ie];w!==he&&ie!=="value"&&s(I,ie,he,w,Z,Q)}"value"in V&&s(I,"value",P.value,V.value,Z)}},C=(I,P,V,Q,Z,ie,w,he,ce)=>{const re=P.el=I?I.el:o(""),oe=P.anchor=I?I.anchor:o("");let{patchFlag:b,dynamicChildren:v,slotScopeIds:L}=P;L&&(he=he?he.concat(L):L),I==null?(i(re,V,Q),i(oe,V,Q),x(P.children||[],V,oe,Z,ie,w,he,ce)):b>0&&b&64&&v&&I.dynamicChildren?(G(I.dynamicChildren,v,V,Z,ie,w,he),(P.key!=null||Z&&P===Z.subTree)&&cu(I,P,!0)):ne(I,P,V,oe,Z,ie,w,he,ce)},N=(I,P,V,Q,Z,ie,w,he,ce)=>{P.slotScopeIds=he,I==null?P.shapeFlag&512?Z.ctx.activate(P,V,Q,w,ce):B(P,V,Q,Z,ie,w,ce):z(I,P,ce)},B=(I,P,V,Q,Z,ie,w)=>{const he=I.component=r0(I,Q,Z);if(mo(I)&&(he.ctx.renderer=Te),s0(he,!1,w),he.asyncDep){if(Z&&Z.registerDep(he,H,w),!I.el){const ce=he.subTree=dt(jt);p(null,ce,P,V)}}else H(he,I,P,V,Z,ie,w)},z=(I,P,V)=>{const Q=P.component=I.component;if(Kg(I,P,V))if(Q.asyncDep&&!Q.asyncResolved){O(Q,P,V);return}else Q.next=P,Q.update();else P.el=I.el,Q.vnode=P},H=(I,P,V,Q,Z,ie,w)=>{const he=()=>{if(I.isMounted){let{next:b,bu:v,u:L,parent:$,vnode:ee}=I;{const Ve=jh(I);if(Ve){b&&(b.el=ee.el,O(I,b,w)),Ve.asyncDep.then(()=>{I.isUnmounted||he()});return}}let X=b,ye;Hi(I,!1),b?(b.el=ee.el,O(I,b,w)):b=ee,v&&Ro(v),(ye=b.props&&b.props.onVnodeBeforeUpdate)&&Un(ye,$,b,ee),Hi(I,!0);const me=Ju(I),De=I.subTree;I.subTree=me,_(De,me,d(De.el),ae(De),I,Z,ie),b.el=me.el,X===null&&Zg(I,me.el),L&&Qt(L,Z),(ye=b.props&&b.props.onVnodeUpdated)&&Qt(()=>Un(ye,$,b,ee),Z)}else{let b;const{el:v,props:L}=P,{bm:$,m:ee,parent:X,root:ye,type:me}=I,De=Ur(P);Hi(I,!1),$&&Ro($),!De&&(b=L&&L.onVnodeBeforeMount)&&Un(b,X,P),Hi(I,!0);{ye.ce&&ye.ce._injectChildStyle(me);const Ve=I.subTree=Ju(I);_(null,Ve,V,Q,I,Z,ie),P.el=Ve.el}if(ee&&Qt(ee,Z),!De&&(b=L&&L.onVnodeMounted)){const Ve=P;Qt(()=>Un(b,X,Ve),Z)}(P.shapeFlag&256||X&&Ur(X.vnode)&&X.vnode.shapeFlag&256)&&I.a&&Qt(I.a,Z),I.isMounted=!0,P=V=Q=null}};I.scope.on();const ce=I.effect=new Qd(he);I.scope.off();const re=I.update=ce.run.bind(ce),oe=I.job=ce.runIfDirty.bind(ce);oe.i=I,oe.id=I.uid,ce.scheduler=()=>iu(oe),Hi(I,!0),re()},O=(I,P,V)=>{P.component=I;const Q=I.vnode.props;I.vnode=P,I.next=null,Ug(I,P.props,Q,V),Bg(I,P.children,V),hi(),zu(I),pi()},ne=(I,P,V,Q,Z,ie,w,he,ce=!1)=>{const re=I&&I.children,oe=I?I.shapeFlag:0,b=P.children,{patchFlag:v,shapeFlag:L}=P;if(v>0){if(v&128){de(re,b,V,Q,Z,ie,w,he,ce);return}else if(v&256){le(re,b,V,Q,Z,ie,w,he,ce);return}}L&8?(oe&16&&K(re,Z,ie),b!==re&&u(V,b)):oe&16?L&16?de(re,b,V,Q,Z,ie,w,he,ce):K(re,Z,ie,!0):(oe&8&&u(V,""),L&16&&x(b,V,Q,Z,ie,w,he,ce))},le=(I,P,V,Q,Z,ie,w,he,ce)=>{I=I||Pr,P=P||Pr;const re=I.length,oe=P.length,b=Math.min(re,oe);let v;for(v=0;v<b;v++){const L=P[v]=ce?Di(P[v]):Vn(P[v]);_(I[v],L,V,null,Z,ie,w,he,ce)}re>oe?K(I,Z,ie,!0,!1,b):x(P,V,Q,Z,ie,w,he,ce,b)},de=(I,P,V,Q,Z,ie,w,he,ce)=>{let re=0;const oe=P.length;let b=I.length-1,v=oe-1;for(;re<=b&&re<=v;){const L=I[re],$=P[re]=ce?Di(P[re]):Vn(P[re]);if(Ji(L,$))_(L,$,V,null,Z,ie,w,he,ce);else break;re++}for(;re<=b&&re<=v;){const L=I[b],$=P[v]=ce?Di(P[v]):Vn(P[v]);if(Ji(L,$))_(L,$,V,null,Z,ie,w,he,ce);else break;b--,v--}if(re>b){if(re<=v){const L=v+1,$=L<oe?P[L].el:Q;for(;re<=v;)_(null,P[re]=ce?Di(P[re]):Vn(P[re]),V,$,Z,ie,w,he,ce),re++}}else if(re>v)for(;re<=b;)se(I[re],Z,ie,!0),re++;else{const L=re,$=re,ee=new Map;for(re=$;re<=v;re++){const be=P[re]=ce?Di(P[re]):Vn(P[re]);be.key!=null&&ee.set(be.key,re)}let X,ye=0;const me=v-$+1;let De=!1,Ve=0;const pe=new Array(me);for(re=0;re<me;re++)pe[re]=0;for(re=L;re<=b;re++){const be=I[re];if(ye>=me){se(be,Z,ie,!0);continue}let Ae;if(be.key!=null)Ae=ee.get(be.key);else for(X=$;X<=v;X++)if(pe[X-$]===0&&Ji(be,P[X])){Ae=X;break}Ae===void 0?se(be,Z,ie,!0):(pe[Ae-$]=re+1,Ae>=Ve?Ve=Ae:De=!0,_(be,P[Ae],V,null,Z,ie,w,he,ce),ye++)}const ve=De?Hg(pe):Pr;for(X=ve.length-1,re=me-1;re>=0;re--){const be=$+re,Ae=P[be],we=be+1<oe?P[be+1].el:Q;pe[re]===0?_(null,Ae,V,we,Z,ie,w,he,ce):De&&(X<0||re!==ve[X]?fe(Ae,V,we,2):X--)}}},fe=(I,P,V,Q,Z=null)=>{const{el:ie,type:w,transition:he,children:ce,shapeFlag:re}=I;if(re&6){fe(I.component.subTree,P,V,Q);return}if(re&128){I.suspense.move(P,V,Q);return}if(re&64){w.move(I,P,V,Te);return}if(w===vt){i(ie,P,V);for(let b=0;b<ce.length;b++)fe(ce[b],P,V,Q);i(I.anchor,P,V);return}if(w===Fa){T(I,P,V);return}if(Q!==2&&re&1&&he)if(Q===0)he.beforeEnter(ie),i(ie,P,V),Qt(()=>he.enter(ie),Z);else{const{leave:b,delayLeave:v,afterLeave:L}=he,$=()=>{I.ctx.isUnmounted?r(ie):i(ie,P,V)},ee=()=>{b(ie,()=>{$(),L&&L()})};v?v(ie,$,ee):ee()}else i(ie,P,V)},se=(I,P,V,Q=!1,Z=!1)=>{const{type:ie,props:w,ref:he,children:ce,dynamicChildren:re,shapeFlag:oe,patchFlag:b,dirs:v,cacheIndex:L}=I;if(b===-2&&(Z=!1),he!=null&&(hi(),Qa(he,null,V,I,!0),pi()),L!=null&&(P.renderCache[L]=void 0),oe&256){P.ctx.deactivate(I);return}const $=oe&1&&v,ee=!Ur(I);let X;if(ee&&(X=w&&w.onVnodeBeforeUnmount)&&Un(X,P,I),oe&6)Oe(I.component,V,Q);else{if(oe&128){I.suspense.unmount(V,Q);return}$&&ki(I,null,P,"beforeUnmount"),oe&64?I.type.remove(I,P,V,Te,Q):re&&!re.hasOnce&&(ie!==vt||b>0&&b&64)?K(re,P,V,!1,!0):(ie===vt&&b&384||!Z&&oe&16)&&K(ce,P,V),Q&&Ce(I)}(ee&&(X=w&&w.onVnodeUnmounted)||$)&&Qt(()=>{X&&Un(X,P,I),$&&ki(I,null,P,"unmounted")},V)},Ce=I=>{const{type:P,el:V,anchor:Q,transition:Z}=I;if(P===vt){Pe(V,Q);return}if(P===Fa){E(I);return}const ie=()=>{r(V),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(I.shapeFlag&1&&Z&&!Z.persisted){const{leave:w,delayLeave:he}=Z,ce=()=>w(V,ie);he?he(I.el,ie,ce):ce()}else ie()},Pe=(I,P)=>{let V;for(;I!==P;)V=f(I),r(I),I=V;r(P)},Oe=(I,P,V)=>{const{bum:Q,scope:Z,job:ie,subTree:w,um:he,m:ce,a:re,parent:oe,slots:{__:b}}=I;Zu(ce),Zu(re),Q&&Ro(Q),oe&&We(b)&&b.forEach(v=>{oe.renderCache[v]=void 0}),Z.stop(),ie&&(ie.flags|=8,se(w,I,P,V)),he&&Qt(he,P),Qt(()=>{I.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},K=(I,P,V,Q=!1,Z=!1,ie=0)=>{for(let w=ie;w<I.length;w++)se(I[w],P,V,Q,Z)},ae=I=>{if(I.shapeFlag&6)return ae(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const P=f(I.anchor||I.el),V=P&&P[yh];return V?f(V):P};let ue=!1;const Ie=(I,P,V)=>{I==null?P._vnode&&se(P._vnode,null,null,!0):_(P._vnode||null,I,P,null,null,null,V),P._vnode=I,ue||(ue=!0,zu(),gh(),ue=!1)},Te={p:_,um:se,m:fe,r:Ce,mt:B,mc:x,pc:ne,pbc:G,n:ae,o:n};return{render:Ie,hydrate:void 0,createApp:Ig(Ie)}}function Oo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Hi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function kg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function cu(n,e,t=!1){const i=n.children,r=e.children;if(We(i)&&We(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Di(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&cu(a,o)),o.type===xo&&(o.el=a.el),o.type===jt&&!o.el&&(o.el=a.el)}}function Hg(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function jh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jh(e)}function Zu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Gg=Symbol.for("v-scx"),Wg=()=>xs(Gg);function ys(n,e,t){return qh(n,e,t)}function qh(n,e,t=gt){const{immediate:i,deep:r,flush:s,once:a}=t,o=Ot({},t),l=e&&i||!e&&s!=="post";let c;if(Ds){if(s==="sync"){const h=Wg();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Wn,h.resume=Wn,h.pause=Wn,h}}const u=Vt;o.call=(h,g,_)=>Dn(h,u,g,_);let d=!1;s==="post"?o.scheduler=h=>{Qt(h,u&&u.suspense)}:s!=="sync"&&(d=!0,o.scheduler=(h,g)=>{g?h():iu(h)}),o.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=ag(n,e,o);return Ds&&(c?c.push(f):l&&f()),f}function $g(n,e,t){const i=this.proxy,r=Mt(n)?n.includes(".")?Yh(i,n):()=>i[n]:n.bind(i,i);let s;je(e)?s=e:(s=e.handler,t=e);const a=Js(this),o=qh(r,s.bind(i),t);return a(),o}function Yh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Xg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Mn(e)}Modifiers`]||n[`${cr(e)}Modifiers`];function jg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||gt;let r=t;const s=e.startsWith("update:"),a=s&&Xg(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Mt(u)?u.trim():u)),a.number&&(r=t.map(Sm)));let o,l=i[o=Co(e)]||i[o=Co(Mn(e))];!l&&s&&(l=i[o=Co(cr(e))]),l&&Dn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Dn(c,n,6,r)}}function Kh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!je(n)){const l=c=>{const u=Kh(c,e,!0);u&&(o=!0,Ot(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(St(n)&&i.set(n,null),null):(We(s)?s.forEach(l=>a[l]=null):Ot(a,s),St(n)&&i.set(n,a),a)}function _o(n,e){return!n||!oo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ct(n,e[0].toLowerCase()+e.slice(1))||ct(n,cr(e))||ct(n,e))}function Ju(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:_}=n,m=Za(n);let p,y;try{if(t.shapeFlag&4){const E=r||i,D=E;p=Vn(c.call(D,E,u,d,h,f,g)),y=o}else{const E=e;p=Vn(E.length>1?E(d,{attrs:o,slots:a,emit:l}):E(d,null)),y=e.props?o:qg(o)}}catch(E){bs.length=0,po(E,n,1),p=dt(jt)}let T=p;if(y&&_!==!1){const E=Object.keys(y),{shapeFlag:D}=T;E.length&&D&7&&(s&&E.some($c)&&(y=Yg(y,s)),T=Fi(T,y,!1,!0))}return t.dirs&&(T=Fi(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&or(T,t.transition),p=T,Za(m),p}const qg=n=>{let e;for(const t in n)(t==="class"||t==="style"||oo(t))&&((e||(e={}))[t]=n[t]);return e},Yg=(n,e)=>{const t={};for(const i in n)(!$c(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Kg(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Qu(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(a[f]!==i[f]&&!_o(c,f))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Qu(i,a,c):!0:!!a;return!1}function Qu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!_o(t,s))return!0}return!1}function Zg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Zh=n=>n.__isSuspense;function Jg(n,e){e&&e.pendingBranch?We(n)?e.effects.push(...n):e.effects.push(n):cg(n)}const vt=Symbol.for("v-fgt"),xo=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),Fa=Symbol.for("v-stc"),bs=[];let pn=null;function Ue(n=!1){bs.push(pn=n?null:[])}function Qg(){bs.pop(),pn=bs[bs.length-1]||null}let Rs=1;function ef(n,e=!1){Rs+=n,n<0&&pn&&e&&(pn.hasOnce=!0)}function Jh(n){return n.dynamicChildren=Rs>0?pn||Pr:null,Qg(),Rs>0&&pn&&pn.push(n),n}function Ge(n,e,t,i,r,s){return Jh(W(n,e,t,i,r,s,!0))}function mn(n,e,t,i,r){return Jh(dt(n,e,t,i,r,!0))}function Ps(n){return n?n.__v_isVNode===!0:!1}function Ji(n,e){return n.type===e.type&&n.key===e.key}const Qh=({key:n})=>n??null,Ba=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Mt(n)||Yt(n)||je(n)?{i:Nt,r:n,k:e,f:!!t}:n:null);function W(n,e=null,t=null,i=0,r=null,s=n===vt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Qh(e),ref:e&&Ba(e),scopeId:_h,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Nt};return o?(uu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Mt(t)?8:16),Rs>0&&!a&&pn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&pn.push(l),l}const dt=e0;function e0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Lh)&&(n=jt),Ps(n)){const o=Fi(n,e,!0);return t&&uu(o,t),Rs>0&&!s&&pn&&(o.shapeFlag&6?pn[pn.indexOf(n)]=o:pn.push(o)),o.patchFlag=-2,o}if(u0(n)&&(n=n.__vccOpts),e){e=t0(e);let{class:o,style:l}=e;o&&!Mt(o)&&(e.class=vn(o)),St(l)&&(tu(l)&&!We(l)&&(l=Ot({},l)),e.style=ar(l))}const a=Mt(n)?1:Zh(n)?128:bh(n)?64:St(n)?4:je(n)?2:0;return W(n,e,t,i,r,a,s,!0)}function t0(n){return n?tu(n)||kh(n)?Ot({},n):n:null}function Fi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?nt(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Qh(c),ref:e&&e.ref?t&&s?We(s)?s.concat(Ba(e)):[s,Ba(e)]:Ba(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==vt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Fi(n.ssContent),ssFallback:n.ssFallback&&Fi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&or(u,l.clone(u)),u}function Is(n=" ",e=0){return dt(xo,null,n,e)}function Vr(n,e){const t=dt(Fa,null,n);return t.staticCount=e,t}function bn(n="",e=!1){return e?(Ue(),mn(jt,null,n)):dt(jt,null,n)}function Vn(n){return n==null||typeof n=="boolean"?dt(jt):We(n)?dt(vt,null,n.slice()):Ps(n)?Di(n):dt(xo,null,String(n))}function Di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Fi(n)}function uu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),uu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!kh(e)?e._ctx=Nt:r===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:Nt},t=32):(e=String(e),i&64?(t=16,e=[Is(e)]):t=8);n.children=e,n.shapeFlag|=t}function nt(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=vn([e.class,i.class]));else if(r==="style")e.style=ar([e.style,i.style]);else if(oo(r)){const s=e[r],a=i[r];a&&s!==a&&!(We(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Un(n,e,t,i=null){Dn(n,e,7,[t,i])}const n0=Bh();let i0=0;function r0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||n0,s={uid:i0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Im(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gh(i,r),emitsOptions:Kh(i,r),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=jg.bind(null,s),n.ce&&n.ce(s),s}let Vt=null;const fu=()=>Vt||Nt;let to,Fl;{const n=fo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};to=e("__VUE_INSTANCE_SETTERS__",t=>Vt=t),Fl=e("__VUE_SSR_SETTERS__",t=>Ds=t)}const Js=n=>{const e=Vt;return to(n),n.scope.on(),()=>{n.scope.off(),to(e)}},tf=()=>{Vt&&Vt.scope.off(),to(null)};function ep(n){return n.vnode.shapeFlag&4}let Ds=!1;function s0(n,e=!1,t=!1){e&&Fl(e);const{props:i,children:r}=n.vnode,s=ep(n);Lg(n,i,s,e),Fg(n,r,t||e);const a=s?a0(n,e):void 0;return e&&Fl(!1),a}function a0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Eg);const{setup:i}=t;if(i){hi();const r=n.setupContext=i.length>1?l0(n):null,s=Js(n),a=Zs(i,n,0,[n.props,r]),o=Xd(a);if(pi(),s(),(o||n.sp)&&!Ur(n)&&Rh(n),o){if(a.then(tf,tf),e)return a.then(l=>{nf(n,l)}).catch(l=>{po(l,n,0)});n.asyncDep=a}else nf(n,a)}else tp(n)}function nf(n,e,t){je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:St(e)&&(n.setupState=hh(e)),tp(n)}function tp(n,e,t){const i=n.type;n.render||(n.render=i.render||Wn);{const r=Js(n);hi();try{Tg(n)}finally{pi(),r()}}}const o0={get(n,e){return Xt(n,"get",""),n[e]}};function l0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,o0),slots:n.slots,emit:n.emit,expose:e}}function yo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(hh(Jm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in _s)return _s[t](n)},has(e,t){return t in e||t in _s}})):n.proxy}function c0(n,e=!0){return je(n)?n.displayName||n.name:n.name||e&&n.__name}function u0(n){return je(n)&&"__vccOpts"in n}const Ls=(n,e)=>rg(n,e,Ds);function f0(n,e,t){const i=arguments.length;return i===2?St(e)&&!We(e)?Ps(e)?dt(n,null,[e]):dt(n,e):dt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ps(t)&&(t=[t]),dt(n,e,t))}const d0="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bl;const rf=typeof window<"u"&&window.trustedTypes;if(rf)try{Bl=rf.createPolicy("vue",{createHTML:n=>n})}catch{}const np=Bl?n=>Bl.createHTML(n):n=>n,h0="http://www.w3.org/2000/svg",p0="http://www.w3.org/1998/Math/MathML",ai=typeof document<"u"?document:null,sf=ai&&ai.createElement("template"),m0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ai.createElementNS(h0,n):e==="mathml"?ai.createElementNS(p0,n):t?ai.createElement(n,{is:t}):ai.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ai.createTextNode(n),createComment:n=>ai.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ai.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{sf.innerHTML=np(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=sf.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},bi="transition",ts="animation",zr=Symbol("_vtc"),ip={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},rp=Ot({},Th,ip),g0=n=>(n.displayName="Transition",n.props=rp,n),v0=g0((n,{slots:e})=>f0(hg,sp(n),e)),Gi=(n,e=[])=>{We(n)?n.forEach(t=>t(...e)):n&&n(...e)},af=n=>n?We(n)?n.some(e=>e.length>1):n.length>1:!1;function sp(n){const e={};for(const C in n)C in ip||(e[C]=n[C]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,g=_0(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:y,onEnterCancelled:T,onLeave:E,onLeaveCancelled:D,onBeforeAppear:R=p,onAppear:U=y,onAppearCancelled:x=T}=e,M=(C,N,B,z)=>{C._enterCancelled=z,Ri(C,N?u:o),Ri(C,N?c:a),B&&B()},G=(C,N)=>{C._isLeaving=!1,Ri(C,d),Ri(C,h),Ri(C,f),N&&N()},A=C=>(N,B)=>{const z=C?U:y,H=()=>M(N,C,B);Gi(z,[N,H]),of(()=>{Ri(N,C?l:s),Fn(N,C?u:o),af(z)||lf(N,i,_,H)})};return Ot(e,{onBeforeEnter(C){Gi(p,[C]),Fn(C,s),Fn(C,a)},onBeforeAppear(C){Gi(R,[C]),Fn(C,l),Fn(C,c)},onEnter:A(!1),onAppear:A(!0),onLeave(C,N){C._isLeaving=!0;const B=()=>G(C,N);Fn(C,d),C._enterCancelled?(Fn(C,f),Vl()):(Vl(),Fn(C,f)),of(()=>{C._isLeaving&&(Ri(C,d),Fn(C,h),af(E)||lf(C,i,m,B))}),Gi(E,[C,B])},onEnterCancelled(C){M(C,!1,void 0,!0),Gi(T,[C])},onAppearCancelled(C){M(C,!0,void 0,!0),Gi(x,[C])},onLeaveCancelled(C){G(C),Gi(D,[C])}})}function _0(n){if(n==null)return null;if(St(n))return[Fo(n.enter),Fo(n.leave)];{const e=Fo(n);return[e,e]}}function Fo(n){return Mm(n)}function Fn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[zr]||(n[zr]=new Set)).add(e)}function Ri(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[zr];t&&(t.delete(e),t.size||(n[zr]=void 0))}function of(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let x0=0;function lf(n,e,t,i){const r=n._endId=++x0,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=ap(n,e);if(!a)return i();const c=a+"end";let u=0;const d=()=>{n.removeEventListener(c,f),s()},f=h=>{h.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},o+1),n.addEventListener(c,f)}function ap(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${bi}Delay`),s=i(`${bi}Duration`),a=cf(r,s),o=i(`${ts}Delay`),l=i(`${ts}Duration`),c=cf(o,l);let u=null,d=0,f=0;e===bi?a>0&&(u=bi,d=a,f=s.length):e===ts?c>0&&(u=ts,d=c,f=l.length):(d=Math.max(a,c),u=d>0?a>c?bi:ts:null,f=u?u===bi?s.length:l.length:0);const h=u===bi&&/\b(transform|all)(,|$)/.test(i(`${bi}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function cf(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>uf(t)+uf(n[i])))}function uf(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Vl(){return document.body.offsetHeight}function y0(n,e,t){const i=n[zr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ff=Symbol("_vod"),b0=Symbol("_vsh"),S0=Symbol(""),M0=/(^|;)\s*display\s*:/;function E0(n,e,t){const i=n.style,r=Mt(t);let s=!1;if(t&&!r){if(e)if(Mt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Va(i,o,"")}else for(const a in e)t[a]==null&&Va(i,a,"");for(const a in t)a==="display"&&(s=!0),Va(i,a,t[a])}else if(r){if(e!==t){const a=i[S0];a&&(t+=";"+a),i.cssText=t,s=M0.test(t)}}else e&&n.removeAttribute("style");ff in n&&(n[ff]=s?i.display:"",n[b0]&&(i.display="none"))}const df=/\s*!important$/;function Va(n,e,t){if(We(t))t.forEach(i=>Va(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=T0(n,e);df.test(t)?n.setProperty(cr(i),t.replace(df,""),"important"):n[i]=t}}const hf=["Webkit","Moz","ms"],Bo={};function T0(n,e){const t=Bo[e];if(t)return t;let i=Mn(e);if(i!=="filter"&&i in n)return Bo[e]=i;i=uo(i);for(let r=0;r<hf.length;r++){const s=hf[r]+i;if(s in n)return Bo[e]=s}return e}const pf="http://www.w3.org/1999/xlink";function mf(n,e,t,i,r,s=Pm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(pf,e.slice(6,e.length)):n.setAttributeNS(pf,e,t):t==null||s&&!Kd(t)?n.removeAttribute(e):n.setAttribute(e,s?"":vi(t)?String(t):t)}function gf(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?np(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Kd(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function A0(n,e,t,i){n.addEventListener(e,t,i)}function w0(n,e,t,i){n.removeEventListener(e,t,i)}const vf=Symbol("_vei");function C0(n,e,t,i,r=null){const s=n[vf]||(n[vf]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=R0(e);if(i){const c=s[e]=D0(i,r);A0(n,o,c,l)}else a&&(w0(n,o,a,l),s[e]=void 0)}}const _f=/(?:Once|Passive|Capture)$/;function R0(n){let e;if(_f.test(n)){e={};let i;for(;i=n.match(_f);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):cr(n.slice(2)),e]}let Vo=0;const P0=Promise.resolve(),I0=()=>Vo||(P0.then(()=>Vo=0),Vo=Date.now());function D0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Dn(L0(i,t.value),e,5,[i])};return t.value=n,t.attached=I0(),t}function L0(n,e){if(We(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const xf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,U0=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?y0(n,i,a):e==="style"?E0(n,t,i):oo(e)?$c(e)||C0(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):N0(n,e,i,a))?(gf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&mf(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Mt(i))?gf(n,Mn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),mf(n,e,i,a))};function N0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&xf(e)&&je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return xf(e)&&Mt(t)?!1:e in n}const op=new WeakMap,lp=new WeakMap,no=Symbol("_moveCb"),yf=Symbol("_enterCb"),O0=n=>(delete n.props.mode,n),F0=O0({name:"TransitionGroup",props:Ot({},rp,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=fu(),i=Eh();let r,s;return Ih(()=>{if(!r.length)return;const a=n.moveClass||`${n.name||"v"}-move`;if(!H0(r[0].el,t.vnode.el,a)){r=[];return}r.forEach(V0),r.forEach(z0);const o=r.filter(k0);Vl(),o.forEach(l=>{const c=l.el,u=c.style;Fn(c,a),u.transform=u.webkitTransform=u.transitionDuration="";const d=c[no]=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",d),c[no]=null,Ri(c,a))};c.addEventListener("transitionend",d)}),r=[]}),()=>{const a=at(n),o=sp(a);let l=a.tag||vt;if(r=[],s)for(let c=0;c<s.length;c++){const u=s[c];u.el&&u.el instanceof Element&&(r.push(u),or(u,Cs(u,o,i,t)),op.set(u,u.el.getBoundingClientRect()))}s=e.default?ru(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&or(u,Cs(u,o,i,t))}return dt(l,null,s)}}}),B0=F0;function V0(n){const e=n.el;e[no]&&e[no](),e[yf]&&e[yf]()}function z0(n){lp.set(n,n.el.getBoundingClientRect())}function k0(n){const e=op.get(n),t=lp.get(n),i=e.left-t.left,r=e.top-t.top;if(i||r){const s=n.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",n}}function H0(n,e,t){const i=n.cloneNode(),r=n[zr];r&&r.forEach(o=>{o.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),t.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:a}=ap(i);return s.removeChild(i),a}const G0=["ctrl","shift","alt","meta"],W0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>G0.some(t=>n[`${t}Key`]&&!e.includes(t))},$0=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=W0[e[a]];if(o&&o(r,e))return}return n(r,...s)})},X0=Ot({patchProp:U0},m0);let bf;function j0(){return bf||(bf=Vg(X0))}const q0=(...n)=>{const e=j0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=K0(i);if(!r)return;const s=e._component;!je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Y0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Y0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function K0(n){return Mt(n)?document.querySelector(n):n}var cp=Symbol();function up(){var n=xs(cp);if(!n)throw new Error("No PrimeVue Toast provided!");return n}const Zn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Z0={__name:"NavBar",setup(n){const e=up(),t=async()=>{const i="/AlexisRosales-CV-FullStack.pdf";try{if(!(await fetch(i,{method:"HEAD"})).ok)throw new Error("Archivo no encontrado");const s=document.createElement("a");s.href=i,s.download="AlexisRosales-CV-FullStack.pdf",document.body.appendChild(s),s.click(),s.remove(),e.add({severity:"success",summary:"Curriculum se descargado correctamente",life:3e3,group:"cv"})}catch{e.add({severity:"error",summary:"No se encontró el archivo",detail:"Verificá que el CV esté subido correctamente.",life:3500,group:"cv"})}};return(i,r)=>{const s=Br("Toast");return Ue(),Ge(vt,null,[W("nav",{class:"navbar-container"},[W("div",{class:"nav-content"},[r[4]||(r[4]=W("span",{class:"logo","data-text":"DVRKLEX"},"DVRKLEX",-1)),W("ul",{class:"nav-links"},[r[1]||(r[1]=W("li",null,[W("a",{href:"#",class:"nav-item"},"Inicio")],-1)),r[2]||(r[2]=W("li",null,[W("a",{href:"#projects",class:"nav-item"},"Proyectos")],-1)),r[3]||(r[3]=W("li",null,[W("a",{href:"#contact",class:"nav-item"},"Contacto")],-1)),W("li",null,[W("button",{class:"cv-button elite",onClick:t,"aria-label":"Descargar Curriculum"},r[0]||(r[0]=[W("div",{class:"btn-content"},[W("i",{class:"fa-solid fa-download"}),W("span",null," CV")],-1),W("div",{class:"btn-shimmer"},null,-1)]))])])])]),dt(s,{position:"top-right",group:"cv"})],64)}}},J0=Zn(Z0,[["__scopeId","data-v-2eadd07c"]]),Q0="/assets/Yo-Coe_s58p.png";function zl(){return zl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},zl.apply(this,arguments)}var ev={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(n){},onComplete:function(n){},preStringTyped:function(n,e){},onStringTyped:function(n,e){},onLastStringBackspaced:function(n){},onTypingPaused:function(n,e){},onTypingResumed:function(n,e){},onReset:function(n){},onStop:function(n,e){},onStart:function(n,e){},onDestroy:function(n){}},tv=new(function(){function n(){}var e=n.prototype;return e.load=function(t,i,r){if(t.el=typeof r=="string"?document.querySelector(r):r,t.options=zl({},ev,i),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(c){return c.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(t.stringsElement.children),a=s.length;if(a)for(var o=0;o<a;o+=1)t.strings.push(s[o].innerHTML.trim())}for(var l in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[l]=l;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var i="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+i+"]")){var r=document.createElement("style");r.setAttribute(i,"true"),r.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(r)}},e.appendFadeOutAnimationCss=function(t){var i="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+i+"]")){var r=document.createElement("style");r.setAttribute(i,"true"),r.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(r)}},n}()),Sf=new(function(){function n(){}var e=n.prototype;return e.typeHtmlChars=function(t,i,r){if(r.contentType!=="html")return i;var s=t.substring(i).charAt(0);if(s==="<"||s==="&"){var a;for(a=s==="<"?">":";";t.substring(i+1).charAt(0)!==a&&!(1+ ++i>t.length););i++}return i},e.backSpaceHtmlChars=function(t,i,r){if(r.contentType!=="html")return i;var s=t.substring(i).charAt(0);if(s===">"||s===";"){var a;for(a=s===">"?"<":"&";t.substring(i-1).charAt(0)!==a&&!(--i<0););i--}return i},n}()),nv=function(){function n(t,i){tv.load(this,i,t),this.begin()}var e=n.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,i){var r=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),a=1;this.pause.status!==!0?this.timeout=setTimeout(function(){i=Sf.typeHtmlChars(t,i,r);var o=0,l=t.substring(i);if(l.charAt(0)==="^"&&/^\^\d+/.test(l)){var c=1;c+=(l=/\d+/.exec(l)[0]).length,o=parseInt(l),r.temporaryPause=!0,r.options.onTypingPaused(r.arrayPos,r),t=t.substring(0,i)+t.substring(i+c),r.toggleBlinking(!0)}if(l.charAt(0)==="`"){for(;t.substring(i+a).charAt(0)!=="`"&&(a++,!(i+a>t.length)););var u=t.substring(0,i),d=t.substring(u.length+1,i+a),f=t.substring(i+a+1);t=u+d+f,a--}r.timeout=setTimeout(function(){r.toggleBlinking(!1),i>=t.length?r.doneTyping(t,i):r.keepTyping(t,i,a),r.temporaryPause&&(r.temporaryPause=!1,r.options.onTypingResumed(r.arrayPos,r))},o)},s):this.setPauseStatus(t,i,!0)},e.keepTyping=function(t,i,r){i===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=t.substring(0,i+=r);this.replaceText(s),this.typewrite(t,i)},e.doneTyping=function(t,i){var r=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){r.backspace(t,i)},this.backDelay))},e.backspace=function(t,i){var r=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){i=Sf.backSpaceHtmlChars(t,i,r);var a=t.substring(0,i);if(r.replaceText(a),r.smartBackspace){var o=r.strings[r.arrayPos+1];r.stopNum=o&&a===o.substring(0,i)?i:0}i>r.stopNum?(i--,r.backspace(t,i)):i<=r.stopNum&&(r.arrayPos++,r.arrayPos===r.strings.length?(r.arrayPos=0,r.options.onLastStringBackspaced(),r.shuffleStringsIfNeeded(),r.begin()):r.typewrite(r.strings[r.sequence[r.arrayPos]],i))},s)}else this.setPauseStatus(t,i,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,i,r){this.pause.typewrite=r,this.pause.curString=t,this.pause.curStrPos=i},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(i){t.stop()}),this.el.addEventListener("blur",function(i){t.el.value&&t.el.value.length!==0||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},n}();const iv={class:"portfolio-wrapper"},rv={class:"profile-grid","data-aos":"fade-up"},sv={class:"main-content"},av={class:"intro"},ov={class:"typed-container"},lv={__name:"Header",setup(n){const e=ln(null);return ur(()=>{nu(()=>{e.value&&new nv(e.value,{strings:["Arquitectura Backend","Ingeniería Fullstack","Sistemas en Tiempo Real"],typeSpeed:60,backSpeed:40,loop:!0,backDelay:2e3})})}),(t,i)=>(Ue(),Ge("section",iv,[W("main",rv,[i[4]||(i[4]=Vr('<aside class="sidebar" data-v-d2398458><div class="image-wrapper" data-v-d2398458><div class="profile-glow" data-v-d2398458></div><img src="'+Q0+'" alt="Alexis Rosales" class="profile-img" data-v-d2398458><div class="image-fader" data-v-d2398458></div><div class="status-badge" data-v-d2398458><span class="dot" data-v-d2398458></span> Status: Open to work </div></div><div class="sidebar-connector" data-v-d2398458><div class="flow-container" data-v-d2398458><div class="node" data-v-d2398458></div><div class="main-pipeline" data-v-d2398458><div class="bit-stream" data-v-d2398458></div></div><div class="node" data-v-d2398458></div><div class="main-pipeline" data-v-d2398458><div class="bit-stream delay" data-v-d2398458></div></div><div class="node" data-v-d2398458></div></div></div><div class="social-stack" data-v-d2398458><a href="https://www.linkedin.com/in/dvrklex" target="_blank" aria-label="LinkedIn" data-v-d2398458><i class="fa-brands fa-linkedin-in" data-v-d2398458></i></a><a href="https://github.com/Dvrklex" target="_blank" aria-label="GitHub" data-v-d2398458><i class="fa-brands fa-github" data-v-d2398458></i></a><a href="https://www.instagram.com/dvrklex" target="_blank" aria-label="Instagram" data-v-d2398458><i class="fa-brands fa-instagram" data-v-d2398458></i></a><a href="mailto:alexis.rosales.dev@gmail.com" aria-label="Email" data-v-d2398458><i class="fa-solid fa-envelope" data-v-d2398458></i></a><a href="tel:+5493583439544" aria-label="Phone" data-v-d2398458><i class="fa-solid fa-phone" data-v-d2398458></i></a></div></aside>',1)),W("section",sv,[W("header",av,[i[1]||(i[1]=W("span",{class:"greeting"},"HOLA, MI NOMBRE ES",-1)),i[2]||(i[2]=W("h1",{class:"profile-name"},"ALEXIS ROSALES",-1)),W("div",ov,[i[0]||(i[0]=W("span",{class:"role-prefix"},"Especialista en",-1)),W("span",{ref_key:"typedTarget",ref:e,class:"typed-text"},null,512)])]),i[3]||(i[3]=Vr('<div class="description" data-v-d2398458><p data-v-d2398458> Desarrollador <strong data-v-d2398458>Backend</strong> enfocado en crear el motor que impulsa experiencias digitales. Diseño arquitecturas escalables y sistemas que no solo funcionan, sino que perduran. Mi visión <strong data-v-d2398458>Fullstack</strong> integra esta solidez técnica con interfaces modernas y eficientes. </p></div><div class="impact-stat" data-v-d2398458><div class="stat-item" data-v-d2398458><span class="stat-value" data-v-d2398458>Backend</span><span class="stat-label" data-v-d2398458>Rol Principal</span></div><div class="stat-divider" data-v-d2398458></div><div class="stat-item" data-v-d2398458><span class="stat-value" data-v-d2398458>Frontend</span><span class="stat-label" data-v-d2398458>Integración &amp; Desarrollo</span></div></div>',2))])])]))}},cv=Zn(lv,[["__scopeId","data-v-d2398458"]]),uv={class:"freelance-section",id:"freelance","data-aos":"fade-up"},fv={__name:"Services",setup(n){const e=()=>{const t=document.getElementById("contact");t?t.scrollIntoView({behavior:"smooth"}):window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})};return(t,i)=>(Ue(),Ge("section",uv,[W("div",{class:"container"},[i[1]||(i[1]=Vr('<div class="section-header" data-v-d1fff83c><div class="availability-wrapper" data-aos="zoom-in" data-aos-delay="200" data-v-d1fff83c><span class="dot" data-v-d1fff83c></span><span class="tag" data-v-d1fff83c>Disponibilidad Actual</span></div><h2 class="glitch-title" data-aos="fade-up" data-aos-delay="300" data-v-d1fff83c> Abierto a Proyectos Freelance </h2><p class="section-desc" data-aos="fade-up" data-aos-delay="400" data-v-d1fff83c> Acompaño a profesionales y empresas en su crecimiento digital, desarrollando experiencias web modernas y sistemas funcionales que convierten visitas en oportunidades. </p></div><div class="services-grid" data-v-d1fff83c><div class="service-card" data-aos="fade-up" data-aos-delay="500" data-v-d1fff83c><div class="card-icon" data-v-d1fff83c><i class="fa-solid fa-laptop-code" data-v-d1fff83c></i></div><h3 data-v-d1fff83c>Experiencia Web &amp; Landing</h3><p data-v-d1fff83c> Diseño interfaces modernas, claras y orientadas a conversión. Cada sección está pensada para transmitir profesionalismo y generar confianza desde el primer impacto. </p><ul class="features" data-v-d1fff83c><li data-v-d1fff83c><i class="fa-solid fa-check" data-v-d1fff83c></i> Diseño visual estratégico</li><li data-v-d1fff83c><i class="fa-solid fa-check" data-v-d1fff83c></i> Formularios funcionales con envío directo</li><li data-v-d1fff83c><i class="fa-solid fa-check" data-v-d1fff83c></i> Pago único y transparente</li></ul><div class="card-glow" data-v-d1fff83c></div></div><div class="service-card featured" data-aos="fade-up" data-aos-delay="600" data-v-d1fff83c><div class="card-icon" data-v-d1fff83c><i class="fa-solid fa-code-branch" data-v-d1fff83c></i></div><h3 data-v-d1fff83c>Colaboración Estratégica</h3><p data-v-d1fff83c>Soporte técnico para agencias de marketing que buscan delegar el desarrollo de alta complejidad.</p><ul class="features" data-v-d1fff83c><li data-v-d1fff83c><i class="fa-solid fa-check" data-v-d1fff83c></i> Escalabilidad garantizada</li><li data-v-d1fff83c><i class="fa-solid fa-check" data-v-d1fff83c></i> Integración fluida en equipos</li><li data-v-d1fff83c><i class="fa-solid fa-check" data-v-d1fff83c></i> Escalabilidad futura</li><li data-v-d1fff83c><i class="fa-solid fa-check" data-v-d1fff83c></i> Enfoque a largo plazo</li></ul><div class="card-glow" data-v-d1fff83c></div></div><div class="service-card" data-aos="fade-up" data-aos-delay="700" data-v-d1fff83c><div class="card-icon" data-v-d1fff83c><i class="fa-solid fa-gears" data-v-d1fff83c></i></div><h3 data-v-d1fff83c>Sistemas a Medida</h3><p data-v-d1fff83c> Desarrollo soluciones personalizadas que optimizan procesos, automatizan tareas y permiten escalar digitalmente sin límites. </p><ul class="features" data-v-d1fff83c><li data-v-d1fff83c><i class="fa-solid fa-check" data-v-d1fff83c></i> Automatización de procesos clave</li><li data-v-d1fff83c><i class="fa-solid fa-check" data-v-d1fff83c></i> Paneles internos y gestión centralizada</li><li data-v-d1fff83c><i class="fa-solid fa-check" data-v-d1fff83c></i> Escalabilidad y evolución futura</li></ul><div class="card-glow" data-v-d1fff83c></div></div></div>',2)),W("div",{class:"cta-wrapper","data-aos":"zoom-up","data-aos-delay":"800"},[W("button",{onClick:e,class:"cta-button"},i[0]||(i[0]=[W("span",null,"Iniciar Colaboración",-1),W("i",{class:"fa-solid fa-arrow-right"},null,-1)]))])])]))}},dv=Zn(fv,[["__scopeId","data-v-d1fff83c"]]),hv={class:"timeline","data-aos":"fade-up"},pv={class:"timeline-container"},mv={class:"timeline-icon"},gv={class:"timeline-content"},vv={class:"content-header"},_v={class:"date-badge"},xv={__name:"Experiencie",setup(n){const e=[{id:1,role:"Desarrollador Backend",icon:"fas fa-code",date:"Septiembre 2023 - Actualidad",items:["Diseño e implementación de APIs RESTful en Flask/PostgreSQL garantizando alta disponibilidad.","Automatización de flujos complejos con Celery y tareas programadas.","Sistemas en tiempo real mediante WebSockets para módulos interactivos.","Optimización avanzada de consultas SQL y monitoreo de performance.","Integración de LLMs y arquitecturas de microservicios con autenticación JWT."]},{id:2,role:"Técnico en Computación",icon:"fas fa-tools",date:"Febrero 2018 - Julio 2024",items:["Mantenimiento crítico y diagnóstico de hardware de alto rendimiento.","Resolución de problemas complejos de software y optimización de sistemas.","Gestión técnica de presupuestos y asesoramiento especializado."]}];return(t,i)=>(Ue(),Ge("main",null,[W("section",hv,[i[1]||(i[1]=W("div",{class:"timeline-header"},[W("span",{class:"pre-title"},"MI TRAYECTORIA"),W("h2",null,"Experiencia"),W("div",{class:"header-line"})],-1)),W("div",pv,[i[0]||(i[0]=W("div",{class:"vertical-line"},null,-1)),(Ue(),Ge(vt,null,kn(e,r=>W("div",{key:r.id,class:"timeline-item"},[W("div",mv,[W("i",{class:vn(r.icon)},null,2)]),W("div",gv,[W("div",vv,[W("h3",null,yt(r.role),1),W("span",_v,yt(r.date),1)]),W("ul",null,[(Ue(!0),Ge(vt,null,kn(r.items,(s,a)=>(Ue(),Ge("li",{key:a},yt(s),1))),128))])])])),64))])])]))}},yv=Zn(xv,[["__scopeId","data-v-40caf162"]]),bv={"data-aos":"fade-up"},Sv={class:"education-section"},Mv={class:"education-grid"},Ev={class:"card-content"},Tv={class:"icon-box"},Av={class:"text-group"},wv={class:"description"},Cv={__name:"Education",setup(n){const e=[{name:"Técnico Superior en Desarrollo de Software",description:"Marzo 2021 - Noviembre 2023 - Instituto Tecnológico de Río Cuarto (iTec)",icon:"fas fa-graduation-cap"},{name:"Certificación en Django",description:"Julio 2023 - Openbootcamp",icon:"fas fa-certificate"},{name:"Certificación en Python",description:"Junio 2023 - Openbootcamp",icon:"fas fa-certificate"},{name:"Certificación Argentina Programa",description:"Octubre 2021 - Junio 2022 - Plan Argentina Programa",icon:"fas fa-laptop-code"},{name:"Comunicación",description:"Febrero 2014 - Diciembre 2019 - Especialidad Comunicación - Instituto Secundario Juan Pascual Pringles",icon:"fas fa-comments"},{name:"Técnico en Armado, Mantenimiento y Reparaciones de PC",description:"Finalizado en 2017 - CIECLO",icon:"fas fa-wrench"}];return(t,i)=>(Ue(),Ge("main",bv,[W("section",Sv,[i[2]||(i[2]=W("div",{class:"education-header"},[W("span",{class:"pre-title"},"FORMACIÓN ACADÉMICA"),W("h2",null,"Educación & Certificados"),W("div",{class:"header-line"})],-1)),W("div",Mv,[(Ue(),Ge(vt,null,kn(e,(r,s)=>W("div",{class:"education-card",key:s},[i[0]||(i[0]=W("div",{class:"card-glow"},null,-1)),W("div",Ev,[W("div",Tv,[W("i",{class:vn(r.icon)},null,2)]),W("div",Av,[W("h3",null,yt(r.name),1),W("p",wv,yt(r.description),1)])]),i[1]||(i[1]=W("div",{class:"card-border"},null,-1))])),64))])])]))}},Rv=Zn(Cv,[["__scopeId","data-v-07fe2f96"]]),Pv={"data-aos":"fade-up"},Iv={style:{display:"none"}},Dv={class:"skills-dashboard"},Lv=["onClick"],Uv={class:"label-left"},Nv={class:"expandable-content"},Ov={class:"skills-grid"},Fv={class:"card-inner"},Bv={__name:"Skills",setup(n){const e=ln(0),t=s=>{e.value=e.value===s?null:s},i=Ls(()=>r.flatMap(s=>s.data.map(a=>a.name)).join(", ")),r=[{label:"Lenguajes",icon:"fas fa-code",data:[{name:"Python",icon:"fab fa-python"},{name:"JavaScript",icon:"fab fa-js"},{name:"HTML5",icon:"fab fa-html5"},{name:"CSS3",icon:"fab fa-css3-alt"},{name:"Bash",icon:"fas fa-terminal"}]},{label:"Backend & APIs",icon:"fas fa-server",data:[{name:"Django",icon:"fab fa-python"},{name:"Django REST",icon:"fas fa-exchange-alt"},{name:"Flask",icon:"fab fa-python"},{name:"FastAPI",icon:"fab fa-python"},{name:"Express.js",icon:"fab fa-node-js"},{name:"Sequelize",icon:"fas fa-database"},{name:"Celery",icon:"fas fa-clock"},{name:"WebSockets",icon:"fas fa-bolt"},{name:"Socket.IO",icon:"fas fa-plug"},{name:"Análisis de Datos",icon:"fas fa-chart-line"}]},{label:"Frontend",icon:"fas fa-palette",data:[{name:"Vue.js",icon:"fab fa-vuejs"},{name:"PrimeVue",icon:"fas fa-layer-group"},{name:"Bootstrap",icon:"fab fa-bootstrap"}]},{label:"Base de Datos & Infra",icon:"fas fa-database",data:[{name:"PostgreSQL",icon:"fas fa-database"},{name:"MySQL",icon:"fas fa-database"},{name:"Redis",icon:"fas fa-bolt"},{name:"AWS S3",icon:"fab fa-aws"},{name:"Docker",icon:"fab fa-docker"},{name:"CI/CD Pipelines",icon:"fas fa-code-branch"}]},{label:"Herramientas & Workflow",icon:"fas fa-tools",data:[{name:"Git",icon:"fab fa-git-alt"},{name:"Jira",icon:"fab fa-jira"},{name:"Postman",icon:"fas fa-paper-plane"},{name:"Swagger",icon:"fas fa-file-code"},{name:"VS Code",icon:"fas fa-keyboard"},{name:"DBeaver",icon:"fas fa-database"},{name:"Adobe XD",icon:"fa fa-image"},{name:"Figma",icon:"fa fa-window-maximize"}]}];return(s,a)=>(Ue(),Ge("main",Pv,[W("div",Iv,[W("p",null,"Alexis Rosales, desarrollador Fullstack experto en "+yt(i.value)+". Especializado en Python, Django, Vue.js y arquitectura de bases de datos en Argentina.",1)]),W("section",Dv,[a[1]||(a[1]=W("div",{class:"skills-header"},[W("span",{class:"pre-title"},"TECH STACK"),W("h2",null,"Habilidades Técnicas"),W("div",{class:"header-line"})],-1)),(Ue(),Ge(vt,null,kn(r,(o,l)=>W("div",{key:l,class:vn(["skill-group",{"is-active":e.value===l}])},[W("button",{class:"group-label",onClick:c=>t(l)},[W("div",Uv,[W("i",{class:vn(o.icon)},null,2),W("span",null,yt(o.label),1)]),a[0]||(a[0]=W("i",{class:"fas fa-chevron-down chevron"},null,-1))],8,Lv),W("div",Nv,[W("div",Ov,[(Ue(!0),Ge(vt,null,kn(o.data,(c,u)=>(Ue(),Ge("div",{class:"skill-card",key:u},[W("div",Fv,[W("i",{class:vn(c.icon)},null,2),W("span",null,yt(c.name),1)])]))),128))])])],2)),64))])]))}},Vv=Zn(Bv,[["__scopeId","data-v-a426adf6"]]),Us={_origin:"https://api.emailjs.com"},zv=(n,e="https://api.emailjs.com")=>{Us._userID=n,Us._origin=e},fp=(n,e,t)=>{if(!n)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Mf{constructor(e){this.status=e.status,this.text=e.responseText}}const dp=(n,e,t={})=>new Promise((i,r)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:a})=>{const o=new Mf(a);o.status===200||o.text==="OK"?i(o):r(o)}),s.addEventListener("error",({target:a})=>{r(new Mf(a))}),s.open("POST",Us._origin+n,!0),Object.keys(t).forEach(a=>{s.setRequestHeader(a,t[a])}),s.send(e)}),kv=(n,e,t,i)=>{const r=i||Us._userID;return fp(r,n,e),dp("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"})},Hv=n=>{let e;if(typeof n=="string"?e=document.querySelector(n):e=n,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},Gv=(n,e,t,i)=>{const r=i||Us._userID,s=Hv(t);fp(r,n,e);const a=new FormData(s);return a.append("lib_version","3.2.0"),a.append("service_id",n),a.append("template_id",e),a.append("user_id",r),dp("/api/v1.0/email/send-form",a)},Wv={init:zv,send:kv,sendForm:Gv},$v={"data-aos":"fade-up"},Xv={class:"contact-container",id:"contact"},jv={class:"contact-grid"},qv={class:"form-wrapper"},Yv={__name:"Contact",setup(n){const e=up(),t=ln();ln(!1),ln(!1);const i=()=>{Wv.sendForm("service_zr90q5c","template_cjoyzl5",t.value,"ANDNz9EJzKwL-TXan").then(()=>{e.add({severity:"success",summary:"Enviado correctamente",detail:"Tu mensaje fue enviado con éxito.",life:4e3,group:"bl"}),t.value.reset()}).catch(()=>{e.add({severity:"error",summary:"Error al enviar",detail:"Ocurrió un problema. Intenta nuevamente.",life:4e3,group:"bl"})})};return(r,s)=>{const a=Br("Toast");return Ue(),Ge("main",$v,[W("section",Xv,[W("div",jv,[s[1]||(s[1]=Vr('<div class="contact-info" data-v-ffd0090f><span class="pre-title" data-v-ffd0090f>CONTACTO</span><h2 data-v-ffd0090f>¿Hablamos?</h2><p data-v-ffd0090f>Estoy abierto a nuevas propuestas, colaboraciones o consultas técnicas para brindarte la mejor solución.</p><div class="direct-links" data-v-ffd0090f><div class="contact-item" data-v-ffd0090f><i class="fas fa-location-dot" data-v-ffd0090f></i><span data-v-ffd0090f>Disponible remoto / Global</span></div></div></div>',1)),W("div",qv,[W("form",{onSubmit:$0(i,["prevent"]),ref_key:"form",ref:t},s[0]||(s[0]=[Vr('<div class="input-group" data-v-ffd0090f><input type="text" id="name" name="user_name" required placeholder=" " data-v-ffd0090f><label for="name" data-v-ffd0090f>Nombre y apellido</label></div><div class="input-group" data-v-ffd0090f><input type="email" id="email" name="user_email" required placeholder=" " data-v-ffd0090f><label for="email" data-v-ffd0090f>Tu Email</label></div><div class="input-group" data-v-ffd0090f><textarea id="message" name="message" required placeholder=" " data-v-ffd0090f></textarea><label for="message" data-v-ffd0090f>Mensaje</label></div><button type="submit" class="submit-btn" data-v-ffd0090f><span data-v-ffd0090f>Enviar Mensaje</span><i class="fas fa-paper-plane" data-v-ffd0090f></i></button>',4)]),544)])]),dt(a,{position:"bottom-right",group:"bl"})])])}}},Kv=Zn(Yv,[["__scopeId","data-v-ffd0090f"]]),Zv={"data-aos":"fade-up"},Jv={class:"projects-section","aria-labelledby":"projects-title",id:"projects"},Qv={class:"projects-container"},e_={class:"image-section"},t_=["src","alt"],n_=["aria-label"],i_={class:"info-section"},r_={class:"top-meta"},s_={class:"date-label",itemprop:"datePublished"},a_={class:"links-group"},o_=["href","title"],l_=["href","title"],c_={class:"title",itemprop:"name"},u_={class:"description",itemprop:"description"},f_={class:"footer-meta"},d_={class:"tech-tags"},h_=["title"],p_={class:"projects-container"},m_={class:"image-section"},g_=["src","alt"],v_=["aria-label"],__={class:"info-section"},x_={class:"top-meta"},y_={class:"date-label",itemprop:"datePublished"},b_={class:"links-group"},S_=["href","title"],M_=["href","title"],E_={class:"title",itemprop:"name"},T_={class:"description",itemprop:"description"},A_={class:"footer-meta"},w_={class:"tech-tags"},C_=["title"],R_={__name:"Projects",setup(n){const e=[{title:"HoyQuiero",description:"Sistema integral de gestión para locales gastronómicos. Incluye administración de stock con filtros avanzados, gestión de personal por roles y configuración de identidad corporativa. Arquitectura basada en micro-interacciones y un diseño moderno.",technologies:["Vue.js 3","Django","Postgres","WebSockets"],image:"/projects/hoy-quiero-preview.png",demo:null,repo:null,date:"2026",status:"In Progress",type:"personal"},{title:"Portfolio",description:"SPA responsiva desarrollada con Vue.js 3, enfocada en la optimización de componentes, animaciones fluidas con AOS y despliegue automatizado mediante GitHub Pages.",technologies:["Vue.js","JavaScript","Github"],image:"/projects/dvrklex-project.png",demo:"https://dvrklex.github.io/",repo:"https://github.com/Dvrklex/Dvrklex.github.io",date:"2025",status:"Finished",type:"personal"},{title:"Interactive Wallpapers",description:"Colección de wallpapers interactivos para Wallpaper Engine. Incluye relojes dinámicos y visualizadores de audio personalizados con HTML/JS.",technologies:["HTML","CSS","JavaScript","Wallpaper Engine"],image:"/projects/wallpaper-engine-project.png",demo:"https://steamcommunity.com/id/Jackotes/myworkshopfiles/",repo:null,date:"2025",status:"Ongoing",type:"personal"},{title:"RedPhone - Rio Cuarto",description:"Sitio web para cliente (tienda/local) orientado a convertir visitas en consultas por WhatsApp. Incluye catálogo actualizado desde Google Sheets, diseño mobile-first y configuración completa de dominio y DNS. Deploy en Vercel con flujo de trabajo en GitHub.",technologies:["Vue.js 3","Vite","Vercel","GitHub","Google Sheets"],image:"/projects/redphone-logo.png",demo:"https://redphonerc.com/",repo:null,date:"2026",status:"Finished",type:"client"}],t=Ls(()=>e.filter(r=>r.type==="client")),i=Ls(()=>e.filter(r=>r.type==="personal"));return(r,s)=>(Ue(),Ge("main",Zv,[s[6]||(s[6]=W("div",{style:{display:"none"}},[W("h3",null,"Portafolio de Proyectos de Alexis Rosales"),W("p",null,"Desarrollo de sistemas gastronómicos, landing pages interactivas y software a medida usando Django, Vue.js y PostgreSQL.")],-1)),W("section",Jv,[s[4]||(s[4]=Vr('<div class="projects-header" data-v-c4a99a0a><div class="header-content" data-v-c4a99a0a><span class="pre-title" data-v-c4a99a0a>Proyectos</span><h2 id="projects-title" data-v-c4a99a0a>Selección Destacada</h2></div><div class="header-line" data-v-c4a99a0a></div></div><h3 class="group-title" data-v-c4a99a0a>Proyectos para clientes</h3>',2)),W("div",Qv,[(Ue(!0),Ge(vt,null,kn(t.value,(a,o)=>(Ue(),Ge("article",{key:a.title,class:"project-glass-card",itemscope:"",itemtype:"https://schema.org/CreativeWork"},[W("div",e_,[W("img",{src:a.image,alt:"Captura de pantalla del proyecto "+a.title+" desarrollado por Alexis Rosales",class:"project-img",itemprop:"image"},null,8,t_),W("div",{class:"project-status","aria-label":"Estado: "+(a.status||"Finalizado")},[W("span",{class:vn(["status-dot",{"is-wip":a.status==="In Progress","is-ongoing":a.status==="Ongoing"}])},null,2),Is(" "+yt(a.status||"Finished"),1)],8,n_)]),W("div",i_,[W("div",r_,[W("span",s_,yt(a.date),1),W("div",a_,[a.demo?(Ue(),Ge("a",{key:0,href:a.demo,target:"_blank",class:"icon-btn",title:"Ver Demo en vivo de "+a.title},s[0]||(s[0]=[W("i",{class:"fas fa-external-link-alt","aria-hidden":"true"},null,-1)]),8,o_)):bn("",!0),a.repo?(Ue(),Ge("a",{key:1,href:a.repo,target:"_blank",class:"icon-btn",title:"Ver Código Fuente de "+a.title+" en GitHub"},s[1]||(s[1]=[W("i",{class:"fab fa-github","aria-hidden":"true"},null,-1)]),8,l_)):bn("",!0)])]),W("h3",c_,yt(a.title),1),W("p",u_,yt(a.description),1),W("div",f_,[W("div",d_,[(Ue(!0),Ge(vt,null,kn(a.technologies,l=>(Ue(),Ge("span",{key:l,class:"tech-tag",title:"Desarrollado con "+l},yt(l),9,h_))),128))])])])]))),128))]),s[5]||(s[5]=W("h3",{class:"group-title"},"Proyectos personales",-1)),W("div",p_,[(Ue(!0),Ge(vt,null,kn(i.value,(a,o)=>(Ue(),Ge("article",{key:a.title,class:"project-glass-card",itemscope:"",itemtype:"https://schema.org/CreativeWork"},[W("div",m_,[W("img",{src:a.image,alt:"Captura de pantalla del proyecto "+a.title+" desarrollado por Alexis Rosales",class:"project-img",itemprop:"image"},null,8,g_),W("div",{class:"project-status","aria-label":"Estado: "+(a.status||"Finalizado")},[W("span",{class:vn(["status-dot",{"is-wip":a.status==="In Progress","is-ongoing":a.status==="Ongoing"}])},null,2),Is(" "+yt(a.status||"Finished"),1)],8,v_)]),W("div",__,[W("div",x_,[W("span",y_,yt(a.date),1),W("div",b_,[a.demo?(Ue(),Ge("a",{key:0,href:a.demo,target:"_blank",class:"icon-btn",title:"Ver Demo en vivo de "+a.title},s[2]||(s[2]=[W("i",{class:"fas fa-external-link-alt","aria-hidden":"true"},null,-1)]),8,S_)):bn("",!0),a.repo?(Ue(),Ge("a",{key:1,href:a.repo,target:"_blank",class:"icon-btn",title:"Ver Código Fuente de "+a.title+" en GitHub"},s[3]||(s[3]=[W("i",{class:"fab fa-github","aria-hidden":"true"},null,-1)]),8,M_)):bn("",!0)])]),W("h3",E_,yt(a.title),1),W("p",T_,yt(a.description),1),W("div",A_,[W("div",w_,[(Ue(!0),Ge(vt,null,kn(a.technologies,l=>(Ue(),Ge("span",{key:l,class:"tech-tag",title:"Desarrollado con "+l},yt(l),9,C_))),128))])])])]))),128))])])]))}},P_=Zn(R_,[["__scopeId","data-v-c4a99a0a"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const du="183",I_=0,Ef=1,D_=2,za=1,L_=2,fs=3,Bi=0,tn=1,ci=2,fi=0,Or=1,tr=2,Tf=3,Af=4,U_=5,Qi=100,N_=101,O_=102,F_=103,B_=104,V_=200,z_=201,k_=202,H_=203,kl=204,Hl=205,G_=206,W_=207,$_=208,X_=209,j_=210,q_=211,Y_=212,K_=213,Z_=214,Gl=0,Wl=1,$l=2,kr=3,Xl=4,jl=5,ql=6,Yl=7,hp=0,J_=1,Q_=2,$n=0,pp=1,mp=2,gp=3,hu=4,vp=5,_p=6,xp=7,yp=300,lr=301,Hr=302,zo=303,ko=304,bo=306,Kl=1e3,ui=1001,Zl=1002,zt=1003,ex=1004,ua=1005,qt=1006,Ho=1007,nr=1008,hn=1009,bp=1010,Sp=1011,Ns=1012,pu=1013,jn=1014,Hn=1015,mi=1016,mu=1017,gu=1018,Os=1020,Mp=35902,Ep=35899,Tp=1021,Ap=1022,Rn=1023,gi=1026,ir=1027,wp=1028,vu=1029,Gr=1030,_u=1031,xu=1033,ka=33776,Ha=33777,Ga=33778,Wa=33779,Jl=35840,Ql=35841,ec=35842,tc=35843,nc=36196,ic=37492,rc=37496,sc=37488,ac=37489,oc=37490,lc=37491,cc=37808,uc=37809,fc=37810,dc=37811,hc=37812,pc=37813,mc=37814,gc=37815,vc=37816,_c=37817,xc=37818,yc=37819,bc=37820,Sc=37821,Mc=36492,Ec=36494,Tc=36495,Ac=36283,wc=36284,Cc=36285,Rc=36286,tx=3200,Cp=0,nx=1,Li="",an="srgb",Wr="srgb-linear",io="linear",ft="srgb",pr=7680,wf=519,ix=512,rx=513,sx=514,yu=515,ax=516,ox=517,bu=518,lx=519,Cf=35044,Rf="300 es",Gn=2e3,Fs=2001;function cx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Bs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ux(){const n=Bs("canvas");return n.style.display="block",n}const Pf={};function If(...n){const e="THREE."+n.shift();console.log(e,...n)}function Rp(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $e(...n){n=Rp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ot(...n){n=Rp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ro(...n){const e=n.join(" ");e in Pf||(Pf[e]=!0,$e(...n))}function fx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const dx={[Gl]:Wl,[$l]:ql,[Xl]:Yl,[kr]:jl,[Wl]:Gl,[ql]:$l,[Yl]:Xl,[jl]:kr};class jr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Go=Math.PI/180,Pc=180/Math.PI;function Qs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function tt(n,e,t){return Math.max(e,Math.min(t,n))}function hx(n,e){return(n%e+e)%e}function Wo(n,e,t){return(1-t)*n+t*e}function ns(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||l!==f||c!==h||u!==g){let m=l*f+c*h+u*g+d*_;m<0&&(f=-f,h=-h,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),T=Math.sin(y);p=Math.sin(p*y)/T,o=Math.sin(o*y)/T,l=l*p+f*o,c=c*p+h*o,u=u*p+g*o,d=d*p+_*o}else{l=l*p+f*o,c=c*p+h*o,u=u*p+g*o,d=d*p+_*o;const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*h-c*f,e[t+1]=l*g+u*f+c*d-o*h,e[t+2]=c*g+u*h+o*f-l*d,e[t+3]=u*g-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Df.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Df.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $o=new q,Df=new qr;class Ke{constructor(e,t,i,r,s,a,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],T=r[4],E=r[7],D=r[2],R=r[5],U=r[8];return s[0]=a*_+o*y+l*D,s[3]=a*m+o*T+l*R,s[6]=a*p+o*E+l*U,s[1]=c*_+u*y+d*D,s[4]=c*m+u*T+d*R,s[7]=c*p+u*E+d*U,s[2]=f*_+h*y+g*D,s[5]=f*m+h*T+g*R,s[8]=f*p+h*E+g*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=h*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new Ke,Lf=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uf=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function px(){const n={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(r.r=di(r.r),r.g=di(r.g),r.b=di(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(r.r=Fr(r.r),r.g=Fr(r.g),r.b=Fr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Li?io:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ro("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ro("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Wr]:{primaries:e,whitePoint:i,transfer:io,toXYZ:Lf,fromXYZ:Uf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Lf,fromXYZ:Uf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),n}const it=px();function di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let mr;class mx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{mr===void 0&&(mr=Bs("canvas")),mr.width=e.width,mr.height=e.height;const r=mr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=mr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=di(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(di(t[i]/255)*255):t[i]=di(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gx=0;class Su{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Qs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(jo(r[a].image)):s.push(jo(r[a]))}else s=jo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let vx=0;const qo=new q;class kt extends jr{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=ui,r=ui,s=qt,a=nr,o=Rn,l=hn,c=kt.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=Qs(),this.name="",this.source=new Su(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qo).x}get height(){return this.source.getSize(qo).y}get depth(){return this.source.getSize(qo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kl:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kl:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=yp;kt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,E=(h+1)/2,D=(p+1)/2,R=(u+f)/4,U=(d+_)/4,x=(g+m)/4;return T>E&&T>D?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=U/i):E>D?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=x/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=U/s,r=x/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _x extends jr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new kt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Su(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends _x{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pp extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xx extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tt{constructor(e,t,i,r,s,a,o,l,c,u,d,f,h,g,_,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,f,h,g,_,m)}set(e,t,i,r,s,a,o,l,c,u,d,f,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/gr.setFromMatrixColumn(e,0).length(),s=1/gr.setFromMatrixColumn(e,1).length(),a=1/gr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f+_*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-h,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=a*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=o*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yx,e,bx)}lookAt(e,t,i){const r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Si.crossVectors(i,fn),Si.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Si.crossVectors(i,fn)),Si.normalize(),fa.crossVectors(fn,Si),r[0]=Si.x,r[4]=fa.x,r[8]=fn.x,r[1]=Si.y,r[5]=fa.y,r[9]=fn.y,r[2]=Si.z,r[6]=fa.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],T=i[7],E=i[11],D=i[15],R=r[0],U=r[4],x=r[8],M=r[12],G=r[1],A=r[5],C=r[9],N=r[13],B=r[2],z=r[6],H=r[10],O=r[14],ne=r[3],le=r[7],de=r[11],fe=r[15];return s[0]=a*R+o*G+l*B+c*ne,s[4]=a*U+o*A+l*z+c*le,s[8]=a*x+o*C+l*H+c*de,s[12]=a*M+o*N+l*O+c*fe,s[1]=u*R+d*G+f*B+h*ne,s[5]=u*U+d*A+f*z+h*le,s[9]=u*x+d*C+f*H+h*de,s[13]=u*M+d*N+f*O+h*fe,s[2]=g*R+_*G+m*B+p*ne,s[6]=g*U+_*A+m*z+p*le,s[10]=g*x+_*C+m*H+p*de,s[14]=g*M+_*N+m*O+p*fe,s[3]=y*R+T*G+E*B+D*ne,s[7]=y*U+T*A+E*z+D*le,s[11]=y*x+T*C+E*H+D*de,s[15]=y*M+T*N+E*O+D*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15],y=l*h-c*f,T=o*h-c*d,E=o*f-l*d,D=a*h-c*u,R=a*f-l*u,U=a*d-o*u;return t*(_*y-m*T+p*E)-i*(g*y-m*D+p*R)+r*(g*T-_*D+p*U)-s*(g*E-_*R+m*U)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=t*o-i*a,T=t*l-r*a,E=t*c-s*a,D=i*l-r*o,R=i*c-s*o,U=r*c-s*l,x=u*_-d*g,M=u*m-f*g,G=u*p-h*g,A=d*m-f*_,C=d*p-h*_,N=f*p-h*m,B=y*N-T*C+E*A+D*G-R*M+U*x;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return e[0]=(o*N-l*C+c*A)*z,e[1]=(r*C-i*N-s*A)*z,e[2]=(_*U-m*R+p*D)*z,e[3]=(f*R-d*U-h*D)*z,e[4]=(l*G-a*N-c*M)*z,e[5]=(t*N-r*G+s*M)*z,e[6]=(m*E-g*U-p*T)*z,e[7]=(u*U-f*E+h*T)*z,e[8]=(a*C-o*G+c*x)*z,e[9]=(i*G-t*C-s*x)*z,e[10]=(g*R-_*E+p*y)*z,e[11]=(d*E-u*R-h*y)*z,e[12]=(o*M-a*A-l*x)*z,e[13]=(t*A-i*M+r*x)*z,e[14]=(_*T-g*D-m*y)*z,e[15]=(u*D-d*T+f*y)*z,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,g=s*d,_=a*u,m=a*d,p=o*d,y=l*c,T=l*u,E=l*d,D=i.x,R=i.y,U=i.z;return r[0]=(1-(_+p))*D,r[1]=(h+E)*D,r[2]=(g-T)*D,r[3]=0,r[4]=(h-E)*R,r[5]=(1-(f+p))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(g+T)*U,r[9]=(m-y)*U,r[10]=(1-(f+_))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=gr.set(r[0],r[1],r[2]).length();const o=gr.set(r[4],r[5],r[6]).length(),l=gr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Tn.copy(this);const c=1/a,u=1/o,d=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,t.setFromRotationMatrix(Tn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Gn,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Gn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Fs)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Gn,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Gn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Fs)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const gr=new q,Tn=new Tt,yx=new q(0,0,0),bx=new q(1,1,1),Si=new q,fa=new q,fn=new q,Nf=new Tt,Of=new qr;class qn{constructor(e=0,t=0,i=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Of.setFromEuler(this),this.setFromQuaternion(Of,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Ip{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sx=0;const Ff=new q,vr=new qr,ti=new Tt,da=new q,is=new q,Mx=new q,Ex=new qr,Bf=new q(1,0,0),Vf=new q(0,1,0),zf=new q(0,0,1),kf={type:"added"},Tx={type:"removed"},_r={type:"childadded",child:null},Yo={type:"childremoved",child:null};class nn extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new q,t=new qn,i=new qr,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ke}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(Bf,e)}rotateY(e){return this.rotateOnAxis(Vf,e)}rotateZ(e){return this.rotateOnAxis(zf,e)}translateOnAxis(e,t){return Ff.copy(e).applyQuaternion(this.quaternion),this.position.add(Ff.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bf,e)}translateY(e){return this.translateOnAxis(Vf,e)}translateZ(e){return this.translateOnAxis(zf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?da.copy(e):da.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(is,da,this.up):ti.lookAt(da,is,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),vr.setFromRotationMatrix(ti),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kf),_r.child=e,this.dispatchEvent(_r),_r.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tx),Yo.child=e,this.dispatchEvent(Yo),Yo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kf),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,Mx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Ex,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new q(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ds extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ax={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ax)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Zo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=hx(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Zo(a,s,e+1/3),this.g=Zo(a,s,e),this.b=Zo(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=an){function i(s){s!==void 0&&parseFloat(s)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const i=Dp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return it.workingToColorSpace(Wt.copy(this),e),Math.round(tt(Wt.r*255,0,255))*65536+Math.round(tt(Wt.g*255,0,255))*256+Math.round(tt(Wt.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Wt.copy(this),t);const i=Wt.r,r=Wt.g,s=Wt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=an){it.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,r=Wt.b;return e!==an?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(ha);const i=Wo(Mi.h,ha.h,t),r=Wo(Mi.s,ha.s,t),s=Wo(Mi.l,ha.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new et;et.NAMES=Dp;class Lp extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const An=new q,ni=new q,Jo=new q,ii=new q,xr=new q,yr=new q,Hf=new q,Qo=new q,el=new q,tl=new q,nl=new wt,il=new wt,rl=new wt;class Cn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),An.subVectors(e,t),r.cross(An);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){An.subVectors(r,t),ni.subVectors(i,t),Jo.subVectors(e,t);const a=An.dot(An),o=An.dot(ni),l=An.dot(Jo),c=ni.dot(ni),u=ni.dot(Jo),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return nl.setScalar(0),il.setScalar(0),rl.setScalar(0),nl.fromBufferAttribute(e,t),il.fromBufferAttribute(e,i),rl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(nl,s.x),a.addScaledVector(il,s.y),a.addScaledVector(rl,s.z),a}static isFrontFacing(e,t,i,r){return An.subVectors(i,t),ni.subVectors(e,t),An.cross(ni).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),An.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Cn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;xr.subVectors(r,i),yr.subVectors(s,i),Qo.subVectors(e,i);const l=xr.dot(Qo),c=yr.dot(Qo);if(l<=0&&c<=0)return t.copy(i);el.subVectors(e,r);const u=xr.dot(el),d=yr.dot(el);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(xr,a);tl.subVectors(e,s);const h=xr.dot(tl),g=yr.dot(tl);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(yr,o);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return Hf.subVectors(s,r),o=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(Hf,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(i).addScaledVector(xr,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ea{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(s,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pa.copy(i.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),ma.subVectors(this.max,rs),br.subVectors(e.a,rs),Sr.subVectors(e.b,rs),Mr.subVectors(e.c,rs),Ei.subVectors(Sr,br),Ti.subVectors(Mr,Sr),Wi.subVectors(br,Mr);let t=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-Wi.z,Wi.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,Wi.z,0,-Wi.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-Wi.y,Wi.x,0];return!sl(t,br,Sr,Mr,ma)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,br,Sr,Mr,ma))?!1:(ga.crossVectors(Ei,Ti),t=[ga.x,ga.y,ga.z],sl(t,br,Sr,Mr,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ri=[new q,new q,new q,new q,new q,new q,new q,new q],wn=new q,pa=new ea,br=new q,Sr=new q,Mr=new q,Ei=new q,Ti=new q,Wi=new q,rs=new q,ma=new q,ga=new q,$i=new q;function sl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){$i.fromArray(n,s);const o=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),c=t.dot($i),u=i.dot($i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Rt=new q,va=new lt;let wx=0;class In{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cf,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ns(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cf&&(e.usage=this.usage),e}}class Up extends In{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Np extends In{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Kt extends In{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Cx=new ea,ss=new q,al=new q;class So{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);const t=ss.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ss,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add(al)),this.expandByPoint(ss.copy(e.center).sub(al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Rx=0;const xn=new Tt,ol=new nn,Er=new q,dn=new ea,as=new ea,Ut=new q;class cn extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cx(e)?Np:Up)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];as.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(dn.min,as.min),dn.expandByPoint(Ut),Ut.addVectors(dn.max,as.max),dn.expandByPoint(Ut)):(dn.expandByPoint(as.min),dn.expandByPoint(as.max))}dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ut.fromBufferAttribute(o,c),l&&(Er.fromBufferAttribute(e,c),Ut.add(Er)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new q,l[x]=new q;const c=new q,u=new q,d=new q,f=new lt,h=new lt,g=new lt,_=new q,m=new q;function p(x,M,G){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,G),f.fromBufferAttribute(s,x),h.fromBufferAttribute(s,M),g.fromBufferAttribute(s,G),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const A=1/(h.x*g.y-g.x*h.y);isFinite(A)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(A),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(A),o[x].add(_),o[M].add(_),o[G].add(_),l[x].add(m),l[M].add(m),l[G].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,M=y.length;x<M;++x){const G=y[x],A=G.start,C=G.count;for(let N=A,B=A+C;N<B;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const T=new q,E=new q,D=new q,R=new q;function U(x){D.fromBufferAttribute(r,x),R.copy(D);const M=o[x];T.copy(M),T.sub(D.multiplyScalar(D.dot(M))).normalize(),E.crossVectors(R,M);const A=E.dot(l[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,A)}for(let x=0,M=y.length;x<M;++x){const G=y[x],A=G.start,C=G.count;for(let N=A,B=A+C;N<B;N+=3)U(e.getX(N+0)),U(e.getX(N+1)),U(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new q,s=new q,a=new q,o=new q,l=new q,c=new q,u=new q,d=new q;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new In(f,u,d)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Px=0;class Yr extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=Or,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Hl,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kl&&(i.blendSrc=this.blendSrc),this.blendDst!==Hl&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const si=new q,ll=new q,_a=new q,Ai=new q,cl=new q,xa=new q,ul=new q;class Op{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ll.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(ll);const s=e.distanceTo(t)*.5,a=-this.direction.dot(_a),o=Ai.dot(this.direction),l=-Ai.dot(_a),c=Ai.lengthSq(),u=Math.abs(1-a*a);let d,f,h,g;if(u>0)if(d=a*l-o,f=a*o-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ll).addScaledVector(_a,f),h}intersectSphere(e,t){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,i,r,s){cl.subVectors(t,e),xa.subVectors(i,e),ul.crossVectors(cl,xa);let a=this.direction.dot(ul),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ai.subVectors(this.origin,e);const l=o*this.direction.dot(xa.crossVectors(Ai,xa));if(l<0)return null;const c=o*this.direction.dot(cl.cross(Ai));if(c<0||l+c>a)return null;const u=-o*Ai.dot(ul);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ss extends Yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gf=new Tt,Xi=new Op,ya=new So,Wf=new q,ba=new q,Sa=new q,Ma=new q,fl=new q,Ea=new q,$f=new q,Ta=new q;class gn extends nn{constructor(e=new cn,t=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ea.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(fl.fromBufferAttribute(d,e),a?Ea.addScaledVector(fl,u):Ea.addScaledVector(fl.sub(t),u))}t.add(Ea)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),Xi.copy(e.ray).recast(e.near),!(ya.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(ya,Wf)===null||Xi.origin.distanceToSquared(Wf)>(e.far-e.near)**2))&&(Gf.copy(s).invert(),Xi.copy(e.ray).applyMatrix4(Gf),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,h.start),T=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let E=y,D=T;E<D;E+=3){const R=o.getX(E),U=o.getX(E+1),x=o.getX(E+2);r=Aa(this,p,e,i,c,u,d,R,U,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),T=o.getX(m+1),E=o.getX(m+2);r=Aa(this,a,e,i,c,u,d,y,T,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,h.start),T=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let E=y,D=T;E<D;E+=3){const R=E,U=E+1,x=E+2;r=Aa(this,p,e,i,c,u,d,R,U,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=m,T=m+1,E=m+2;r=Aa(this,a,e,i,c,u,d,y,T,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ix(n,e,t,i,r,s,a,o){let l;if(e.side===tn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Bi,o),l===null)return null;Ta.copy(o),Ta.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ta);return c<t.near||c>t.far?null:{distance:c,point:Ta.clone(),object:n}}function Aa(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ba),n.getVertexPosition(l,Sa),n.getVertexPosition(c,Ma);const u=Ix(n,e,t,i,ba,Sa,Ma,$f);if(u){const d=new q;Cn.getBarycoord($f,ba,Sa,Ma,d),r&&(u.uv=Cn.getInterpolatedAttribute(r,o,l,c,d,new lt)),s&&(u.uv1=Cn.getInterpolatedAttribute(s,o,l,c,d,new lt)),a&&(u.normal=Cn.getInterpolatedAttribute(a,o,l,c,d,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new q,materialIndex:0};Cn.getNormal(ba,Sa,Ma,f.normal),u.face=f,u.barycoord=d}return u}class Dx extends kt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=zt,u=zt,d,f){super(null,a,o,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dl=new q,Lx=new q,Ux=new Ke;class Zi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=dl.subVectors(i,t).cross(Lx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(dl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ux.getNormalMatrix(e),r=this.coplanarPoint(dl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new So,Nx=new lt(.5,.5),wa=new q;class Mu{constructor(e=new Zi,t=new Zi,i=new Zi,r=new Zi,s=new Zi,a=new Zi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],y=s[12],T=s[13],E=s[14],D=s[15];if(r[0].setComponents(c-a,h-u,p-g,D-y).normalize(),r[1].setComponents(c+a,h+u,p+g,D+y).normalize(),r[2].setComponents(c+o,h+d,p+_,D+T).normalize(),r[3].setComponents(c-o,h-d,p-_,D-T).normalize(),i)r[4].setComponents(l,f,m,E).normalize(),r[5].setComponents(c-l,h-f,p-m,D-E).normalize();else if(r[4].setComponents(c-l,h-f,p-m,D-E).normalize(),t===Gn)r[5].setComponents(c+l,h+f,p+m,D+E).normalize();else if(t===Fs)r[5].setComponents(l,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);const t=Nx.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(wa.x=r.normal.x>0?e.max.x:e.min.x,wa.y=r.normal.y>0?e.max.y:e.min.y,wa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Eu extends Yr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xf=new Tt,Ic=new Op,Ca=new So,Ra=new q;class Fp extends nn{constructor(e=new cn,t=new Eu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(r),Ca.radius+=s,e.ray.intersectsSphere(Ca)===!1)return;Xf.copy(r).invert(),Ic.copy(e.ray).applyMatrix4(Xf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let g=f,_=h;g<_;g++){const m=c.getX(g);Ra.fromBufferAttribute(d,m),jf(Ra,m,l,r,e,t,this)}}else{const f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let g=f,_=h;g<_;g++)Ra.fromBufferAttribute(d,g),jf(Ra,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jf(n,e,t,i,r,s,a){const o=Ic.distanceSqToPoint(n);if(o<t){const l=new q;Ic.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Bp extends kt{constructor(e=[],t=lr,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ox extends kt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vs extends kt{constructor(e,t,i=jn,r,s,a,o=zt,l=zt,c,u=gi,d=1){if(u!==gi&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Su(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fx extends Vs{constructor(e,t=jn,i=lr,r,s,a=zt,o=zt,l,c=gi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vp extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ta extends cn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(d,2));function g(_,m,p,y,T,E,D,R,U,x,M){const G=E/U,A=D/x,C=E/2,N=D/2,B=R/2,z=U+1,H=x+1;let O=0,ne=0;const le=new q;for(let de=0;de<H;de++){const fe=de*A-N;for(let se=0;se<z;se++){const Ce=se*G-C;le[_]=Ce*y,le[m]=fe*T,le[p]=B,c.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[p]=R>0?1:-1,u.push(le.x,le.y,le.z),d.push(se/U),d.push(1-de/x),O+=1}}for(let de=0;de<x;de++)for(let fe=0;fe<U;fe++){const se=f+fe+z*de,Ce=f+fe+z*(de+1),Pe=f+(fe+1)+z*(de+1),Oe=f+(fe+1)+z*de;l.push(se,Ce,Oe),l.push(Ce,Pe,Oe),ne+=6}o.addGroup(h,ne,M),h+=ne,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mo extends cn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*f-a;for(let T=0;T<c;T++){const E=T*d-s;g.push(E,-y,0),_.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const T=y+c*p,E=y+c*(p+1),D=y+1+c*(p+1),R=y+1+c*p;h.push(T,E,R),h.push(E,D,R)}this.setIndex(h),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.widthSegments,e.heightSegments)}}class so extends cn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new q,f=new q,h=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const y=[],T=p/i;let E=0;p===0&&a===0?E=.5/t:p===i&&l===Math.PI&&(E=-.5/t);for(let D=0;D<=t;D++){const R=D/t;d.x=-e*Math.cos(r+R*s)*Math.sin(a+T*o),d.y=e*Math.cos(a+T*o),d.z=e*Math.sin(r+R*s)*Math.sin(a+T*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(R+E,1-T),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const T=u[p][y+1],E=u[p][y],D=u[p+1][y],R=u[p+1][y+1];(p!==0||a>0)&&h.push(T,E,R),(p!==i-1||l<Math.PI)&&h.push(E,D,R)}this.setIndex(h),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ao extends cn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],u=[],d=[],f=new q,h=new q,g=new q;for(let _=0;_<=i;_++){const m=a+_/i*o;for(let p=0;p<=r;p++){const y=p/r*s;h.x=(e+t*Math.cos(m))*Math.cos(y),h.y=(e+t*Math.cos(m))*Math.sin(y),h.z=t*Math.sin(m),c.push(h.x,h.y,h.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),g.subVectors(h,f).normalize(),u.push(g.x,g.y,g.z),d.push(p/r),d.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=r;m++){const p=(r+1)*_+m-1,y=(r+1)*(_-1)+m-1,T=(r+1)*(_-1)+m,E=(r+1)*_+m;l.push(p,y,E),l.push(y,T,E)}this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function $r(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=$r(n[t]);for(const r in i)e[r]=i[r]}return e}function Bx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Vx={clone:$r,merge:Jt};var zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends Yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zx,this.fragmentShader=kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=Bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Hx extends Yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gx extends Yr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cp,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wx extends Gx{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class $x extends Yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xx extends Yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(qf(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!qf(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function qf(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class jx{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],g=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const qx=new jx;class Tu{constructor(e){this.manager=e!==void 0?e:qx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Tu.DEFAULT_MATERIAL_NAME="__DEFAULT";const Tr=new WeakMap;class Yx extends Tu{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=hl.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Tr.get(a);d===void 0&&(d=[],Tr.set(a,d)),d.push({onLoad:t,onError:r})}return a}const o=Bs("img");function l(){u(),t&&t(this);const d=Tr.get(this)||[];for(let f=0;f<d.length;f++){const h=d[f];h.onLoad&&h.onLoad(this)}Tr.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),hl.remove(`image:${e}`);const f=Tr.get(this)||[];for(let h=0;h<f.length;h++){const g=f[h];g.onError&&g.onError(d)}Tr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),hl.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Kx extends Tu{constructor(e){super(e)}load(e,t,i,r){const s=new kt,a=new Yx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class kp extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const pl=new Tt,Yf=new q,Kf=new q;class Zx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mu,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yf),Kf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kf),t.updateMatrixWorld(),pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Fs||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pa=new q,Ia=new qr,Nn=new q;class Hp extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pa,Ia,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,Ia,Nn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Pa,Ia,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,Ia,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wi=new q,Zf=new lt,Jf=new lt;class on extends Hp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pc*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Zf,Jf),t.subVectors(Jf,Zf)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Go*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Jx extends Zx{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}}class Qf extends kp{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Jx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Gp extends Hp{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qx extends kp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ar=-90,wr=1;class ey extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(Ar,wr,e,t);r.layers=this.layers,this.add(r);const s=new on(Ar,wr,e,t);s.layers=this.layers,this.add(s);const a=new on(Ar,wr,e,t);a.layers=this.layers,this.add(a);const o=new on(Ar,wr,e,t);o.layers=this.layers,this.add(o);const l=new on(Ar,wr,e,t);l.layers=this.layers,this.add(l);const c=new on(Ar,wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ty extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ny{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,$e("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ed(n,e,t,i){const r=iy(i);switch(t){case Tp:return n*e;case wp:return n*e/r.components*r.byteLength;case vu:return n*e/r.components*r.byteLength;case Gr:return n*e*2/r.components*r.byteLength;case _u:return n*e*2/r.components*r.byteLength;case Ap:return n*e*3/r.components*r.byteLength;case Rn:return n*e*4/r.components*r.byteLength;case xu:return n*e*4/r.components*r.byteLength;case ka:case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ql:case tc:return Math.max(n,16)*Math.max(e,8)/4;case Jl:case ec:return Math.max(n,8)*Math.max(e,8)/2;case nc:case ic:case sc:case ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rc:case oc:case lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case fc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Mc:case Ec:case Tc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ac:case wc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Cc:case Rc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iy(n){switch(n){case hn:case bp:return{byteLength:1,components:1};case Ns:case Sp:case mi:return{byteLength:2,components:1};case mu:case gu:return{byteLength:2,components:4};case jn:case pu:case Hn:return{byteLength:4,components:1};case Mp:case Ep:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:du}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=du);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wp(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ry(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const _=d[h];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ay=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,my=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_y=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Cy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ry=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Py=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,By=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ky=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ib=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ab=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ob=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_b=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Db=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ub=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$b=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_S=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,US=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:sy,alphahash_pars_fragment:ay,alphamap_fragment:oy,alphamap_pars_fragment:ly,alphatest_fragment:cy,alphatest_pars_fragment:uy,aomap_fragment:fy,aomap_pars_fragment:dy,batching_pars_vertex:hy,batching_vertex:py,begin_vertex:my,beginnormal_vertex:gy,bsdfs:vy,iridescence_fragment:_y,bumpmap_pars_fragment:xy,clipping_planes_fragment:yy,clipping_planes_pars_fragment:by,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:My,color_fragment:Ey,color_pars_fragment:Ty,color_pars_vertex:Ay,color_vertex:wy,common:Cy,cube_uv_reflection_fragment:Ry,defaultnormal_vertex:Py,displacementmap_pars_vertex:Iy,displacementmap_vertex:Dy,emissivemap_fragment:Ly,emissivemap_pars_fragment:Uy,colorspace_fragment:Ny,colorspace_pars_fragment:Oy,envmap_fragment:Fy,envmap_common_pars_fragment:By,envmap_pars_fragment:Vy,envmap_pars_vertex:zy,envmap_physical_pars_fragment:Zy,envmap_vertex:ky,fog_vertex:Hy,fog_pars_vertex:Gy,fog_fragment:Wy,fog_pars_fragment:$y,gradientmap_pars_fragment:Xy,lightmap_pars_fragment:jy,lights_lambert_fragment:qy,lights_lambert_pars_fragment:Yy,lights_pars_begin:Ky,lights_toon_fragment:Jy,lights_toon_pars_fragment:Qy,lights_phong_fragment:eb,lights_phong_pars_fragment:tb,lights_physical_fragment:nb,lights_physical_pars_fragment:ib,lights_fragment_begin:rb,lights_fragment_maps:sb,lights_fragment_end:ab,logdepthbuf_fragment:ob,logdepthbuf_pars_fragment:lb,logdepthbuf_pars_vertex:cb,logdepthbuf_vertex:ub,map_fragment:fb,map_pars_fragment:db,map_particle_fragment:hb,map_particle_pars_fragment:pb,metalnessmap_fragment:mb,metalnessmap_pars_fragment:gb,morphinstance_vertex:vb,morphcolor_vertex:_b,morphnormal_vertex:xb,morphtarget_pars_vertex:yb,morphtarget_vertex:bb,normal_fragment_begin:Sb,normal_fragment_maps:Mb,normal_pars_fragment:Eb,normal_pars_vertex:Tb,normal_vertex:Ab,normalmap_pars_fragment:wb,clearcoat_normal_fragment_begin:Cb,clearcoat_normal_fragment_maps:Rb,clearcoat_pars_fragment:Pb,iridescence_pars_fragment:Ib,opaque_fragment:Db,packing:Lb,premultiplied_alpha_fragment:Ub,project_vertex:Nb,dithering_fragment:Ob,dithering_pars_fragment:Fb,roughnessmap_fragment:Bb,roughnessmap_pars_fragment:Vb,shadowmap_pars_fragment:zb,shadowmap_pars_vertex:kb,shadowmap_vertex:Hb,shadowmask_pars_fragment:Gb,skinbase_vertex:Wb,skinning_pars_vertex:$b,skinning_vertex:Xb,skinnormal_vertex:jb,specularmap_fragment:qb,specularmap_pars_fragment:Yb,tonemapping_fragment:Kb,tonemapping_pars_fragment:Zb,transmission_fragment:Jb,transmission_pars_fragment:Qb,uv_pars_fragment:eS,uv_pars_vertex:tS,uv_vertex:nS,worldpos_vertex:iS,background_vert:rS,background_frag:sS,backgroundCube_vert:aS,backgroundCube_frag:oS,cube_vert:lS,cube_frag:cS,depth_vert:uS,depth_frag:fS,distance_vert:dS,distance_frag:hS,equirect_vert:pS,equirect_frag:mS,linedashed_vert:gS,linedashed_frag:vS,meshbasic_vert:_S,meshbasic_frag:xS,meshlambert_vert:yS,meshlambert_frag:bS,meshmatcap_vert:SS,meshmatcap_frag:MS,meshnormal_vert:ES,meshnormal_frag:TS,meshphong_vert:AS,meshphong_frag:wS,meshphysical_vert:CS,meshphysical_frag:RS,meshtoon_vert:PS,meshtoon_frag:IS,points_vert:DS,points_frag:LS,shadow_vert:US,shadow_frag:NS,sprite_vert:OS,sprite_frag:FS},Se={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},zn={basic:{uniforms:Jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Jt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Jt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new et(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Jt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Jt([Se.points,Se.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Jt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Jt([Se.common,Se.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Jt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Jt([Se.sprite,Se.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Jt([Se.common,Se.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Jt([Se.lights,Se.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};zn.physical={uniforms:Jt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Da={r:0,b:0,g:0},qi=new qn,BS=new Tt;function VS(n,e,t,i,r,s){const a=new et(0);let o=r===!0?0:1,l,c,u=null,d=0,f=null;function h(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const E=y.backgroundBlurriness>0;T=e.get(T,E)}return T}function g(y){let T=!1;const E=h(y);E===null?m(a,o):E&&E.isColor&&(m(E,1),T=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,s):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(y,T){const E=h(T);E&&(E.isCubeTexture||E.mapping===bo)?(c===void 0&&(c=new gn(new ta(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:$r(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),qi.copy(T.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(BS.makeRotationFromEuler(qi)),c.material.toneMapped=it.getTransfer(E.colorSpace)!==ft,(u!==E||d!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new gn(new Mo(2,2),new Yn({name:"BackgroundMaterial",uniforms:$r(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=it.getTransfer(E.colorSpace)!==ft,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,T){y.getRGB(Da,zp(n)),t.buffers.color.setClear(Da.r,Da.g,Da.b,T,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:_,dispose:p}}function zS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(A,C,N,B,z){let H=!1;const O=d(A,B,N,C);s!==O&&(s=O,c(s.object)),H=h(A,B,N,z),H&&g(A,B,N,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,E(A,C,N,B),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function u(A){return n.deleteVertexArray(A)}function d(A,C,N,B){const z=B.wireframe===!0;let H=i[C.id];H===void 0&&(H={},i[C.id]=H);const O=A.isInstancedMesh===!0?A.id:0;let ne=H[O];ne===void 0&&(ne={},H[O]=ne);let le=ne[N.id];le===void 0&&(le={},ne[N.id]=le);let de=le[z];return de===void 0&&(de=f(l()),le[z]=de),de}function f(A){const C=[],N=[],B=[];for(let z=0;z<t;z++)C[z]=0,N[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:B,object:A,attributes:{},index:null}}function h(A,C,N,B){const z=s.attributes,H=C.attributes;let O=0;const ne=N.getAttributes();for(const le in ne)if(ne[le].location>=0){const fe=z[le];let se=H[le];if(se===void 0&&(le==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),le==="instanceColor"&&A.instanceColor&&(se=A.instanceColor)),fe===void 0||fe.attribute!==se||se&&fe.data!==se.data)return!0;O++}return s.attributesNum!==O||s.index!==B}function g(A,C,N,B){const z={},H=C.attributes;let O=0;const ne=N.getAttributes();for(const le in ne)if(ne[le].location>=0){let fe=H[le];fe===void 0&&(le==="instanceMatrix"&&A.instanceMatrix&&(fe=A.instanceMatrix),le==="instanceColor"&&A.instanceColor&&(fe=A.instanceColor));const se={};se.attribute=fe,fe&&fe.data&&(se.data=fe.data),z[le]=se,O++}s.attributes=z,s.attributesNum=O,s.index=B}function _(){const A=s.newAttributes;for(let C=0,N=A.length;C<N;C++)A[C]=0}function m(A){p(A,0)}function p(A,C){const N=s.newAttributes,B=s.enabledAttributes,z=s.attributeDivisors;N[A]=1,B[A]===0&&(n.enableVertexAttribArray(A),B[A]=1),z[A]!==C&&(n.vertexAttribDivisor(A,C),z[A]=C)}function y(){const A=s.newAttributes,C=s.enabledAttributes;for(let N=0,B=C.length;N<B;N++)C[N]!==A[N]&&(n.disableVertexAttribArray(N),C[N]=0)}function T(A,C,N,B,z,H,O){O===!0?n.vertexAttribIPointer(A,C,N,z,H):n.vertexAttribPointer(A,C,N,B,z,H)}function E(A,C,N,B){_();const z=B.attributes,H=N.getAttributes(),O=C.defaultAttributeValues;for(const ne in H){const le=H[ne];if(le.location>=0){let de=z[ne];if(de===void 0&&(ne==="instanceMatrix"&&A.instanceMatrix&&(de=A.instanceMatrix),ne==="instanceColor"&&A.instanceColor&&(de=A.instanceColor)),de!==void 0){const fe=de.normalized,se=de.itemSize,Ce=e.get(de);if(Ce===void 0)continue;const Pe=Ce.buffer,Oe=Ce.type,K=Ce.bytesPerElement,ae=Oe===n.INT||Oe===n.UNSIGNED_INT||de.gpuType===pu;if(de.isInterleavedBufferAttribute){const ue=de.data,Ie=ue.stride,Te=de.offset;if(ue.isInstancedInterleavedBuffer){for(let Fe=0;Fe<le.locationSize;Fe++)p(le.location+Fe,ue.meshPerAttribute);A.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Fe=0;Fe<le.locationSize;Fe++)m(le.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let Fe=0;Fe<le.locationSize;Fe++)T(le.location+Fe,se/le.locationSize,Oe,fe,Ie*K,(Te+se/le.locationSize*Fe)*K,ae)}else{if(de.isInstancedBufferAttribute){for(let ue=0;ue<le.locationSize;ue++)p(le.location+ue,de.meshPerAttribute);A.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ue=0;ue<le.locationSize;ue++)m(le.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let ue=0;ue<le.locationSize;ue++)T(le.location+ue,se/le.locationSize,Oe,fe,se*K,se/le.locationSize*ue*K,ae)}}else if(O!==void 0){const fe=O[ne];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(le.location,fe);break;case 3:n.vertexAttrib3fv(le.location,fe);break;case 4:n.vertexAttrib4fv(le.location,fe);break;default:n.vertexAttrib1fv(le.location,fe)}}}}y()}function D(){M();for(const A in i){const C=i[A];for(const N in C){const B=C[N];for(const z in B){const H=B[z];for(const O in H)u(H[O].object),delete H[O];delete B[z]}}delete i[A]}}function R(A){if(i[A.id]===void 0)return;const C=i[A.id];for(const N in C){const B=C[N];for(const z in B){const H=B[z];for(const O in H)u(H[O].object),delete H[O];delete B[z]}}delete i[A.id]}function U(A){for(const C in i){const N=i[C];for(const B in N){const z=N[B];if(z[A.id]===void 0)continue;const H=z[A.id];for(const O in H)u(H[O].object),delete H[O];delete z[A.id]}}}function x(A){for(const C in i){const N=i[C],B=A.isInstancedMesh===!0?A.id:0,z=N[B];if(z!==void 0){for(const H in z){const O=z[H];for(const ne in O)u(O[ne].object),delete O[ne];delete z[H]}delete N[B],Object.keys(N).length===0&&delete i[C]}}}function M(){G(),a=!0,s!==r&&(s=r,c(s.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:G,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfObject:x,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function kS(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function HS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(U){return!(U!==Rn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const x=U===mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==hn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Hn&&!x)}function l(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&($e("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:E,maxSamples:D,samples:R}}function GS(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Zi,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,T=y*4;let E=p.clippingState||null;l.value=E,E=u(g,f,T,h);for(let D=0;D!==T;++D)E[D]=t[D];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,E=h;T!==_;++T,E+=4)a.copy(d[T]).applyMatrix4(y,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Ui=4,td=[.125,.215,.35,.446,.526,.582],er=20,WS=256,os=new Gp,nd=new et;let ml=null,gl=0,vl=0,_l=!1;const $S=new q;class id{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=$S}=s;ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ml,gl,vl),this._renderer.xr.enabled=_l,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:mi,format:Rn,colorSpace:Wr,depthBuffer:!1},r=rd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XS(s)),this._blurMaterial=qS(s,e,t),this._ggxMaterial=jS(s,e,t)}return r}_compileMaterial(e){const t=new gn(new cn,e);this._renderer.compile(t,os)}_sceneToCubeUV(e,t,i,r,s){const l=new on(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(nd),d.toneMapping=$n,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gn(new ta,new Ss({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(nd),p=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):E===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const D=this._cubeSize;Cr(r,E*D,T>2?D:0,D,D),d.setRenderTarget(r),p&&d.render(_,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===lr||e.mapping===Hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Cr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,os)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Ui?i-g+Ui:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-t,Cr(s,m,p,3*_,2*_),r.setRenderTarget(s),r.render(o,os),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Cr(e,m,p,3*_,2*_),r.setRenderTarget(e),r.render(o,os)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*er-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):er;m>er&&$e(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${er}`);const p=[];let y=0;for(let U=0;U<er;++U){const x=U/_,M=Math.exp(-x*x/2);p.push(M),U===0?y+=M:U<m&&(y+=2*M)}for(let U=0;U<p.length;U++)p[U]=p[U]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-i;const E=this._sizeLods[r],D=3*E*(r>T-Ui?r-T+Ui:0),R=4*(this._cubeSize-E);Cr(t,D,R,3*E,2*E),l.setRenderTarget(t),l.render(d,os)}}function XS(n){const e=[],t=[],i=[];let r=n;const s=n-Ui+1+td.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Ui?l=td[a-n+Ui-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*h),T=new Float32Array(m*g*h),E=new Float32Array(p*g*h);for(let R=0;R<h;R++){const U=R%3*2/3-1,x=R>2?0:-1,M=[U,x,0,U+2/3,x,0,U+2/3,x+1,0,U,x,0,U+2/3,x+1,0,U,x+1,0];y.set(M,_*g*R),T.set(f,m*g*R);const G=[R,R,R,R,R,R];E.set(G,p*g*R)}const D=new cn;D.setAttribute("position",new In(y,_)),D.setAttribute("uv",new In(T,m)),D.setAttribute("faceIndex",new In(E,p)),i.push(new gn(D,null)),r>Ui&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function rd(n,e,t){const i=new Xn(n,e,t);return i.texture.mapping=bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function jS(n,e,t){return new Yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Eo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function qS(n,e,t){const i=new Float32Array(er),r=new q(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function sd(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function ad(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Eo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class $p extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Bp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ta(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:$r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:fi});s.uniforms.tEquirect.value=t;const a=new gn(r,s),o=t.minFilter;return t.minFilter===nr&&(t.minFilter=qt),new ey(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function YS(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===zo||h===ko)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const _=new $p(g.height);return _.fromEquirectangularTexture(n,f),e.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const h=f.mapping,g=h===zo||h===ko,_=h===lr||h===Hr;if(g||_){let m=t.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new id(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const y=f.image;return g&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new id(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,h){return h===zo?f.mapping=lr:h===ko&&(f.mapping=Hr),f}function l(f){let h=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&h++;return h===g}function c(f){const h=f.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function KS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ro("WebGLRenderer: "+i+" extension not supported."),r}}}function ZS(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(h!==null){const y=h.array;_=h.version;for(let T=0,E=y.length;T<E;T+=3){const D=y[T+0],R=y[T+1],U=y[T+2];f.push(D,R,R,U,U,D)}}else{const y=g.array;_=g.version;for(let T=0,E=y.length/3-1;T<E;T+=3){const D=T+0,R=T+1,U=T+2;f.push(D,R,R,U,U,D)}}const m=new(g.count>=65535?Np:Up)(f,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function JS(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*a),t.update(h,i,1)}function c(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*a,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=h[y]*_[y];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function QS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function e1(n,e,t){const i=new WeakMap,r=new wt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let G=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",G)};var h=G;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),m===!0&&(E=3);let D=o.attributes.position.count*E,R=1;D>e.maxTextureSize&&(R=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const U=new Float32Array(D*R*4*d),x=new Pp(U,D,R,d);x.type=Hn,x.needsUpdate=!0;const M=E*4;for(let A=0;A<d;A++){const C=p[A],N=y[A],B=T[A],z=D*R*4*A;for(let H=0;H<C.count;H++){const O=H*M;g===!0&&(r.fromBufferAttribute(C,H),U[z+O+0]=r.x,U[z+O+1]=r.y,U[z+O+2]=r.z,U[z+O+3]=0),_===!0&&(r.fromBufferAttribute(N,H),U[z+O+4]=r.x,U[z+O+5]=r.y,U[z+O+6]=r.z,U[z+O+7]=0),m===!0&&(r.fromBufferAttribute(B,H),U[z+O+8]=r.x,U[z+O+9]=r.y,U[z+O+10]=r.z,U[z+O+11]=B.itemSize===4?r.w:1)}}f={count:d,texture:x,size:new lt(D,R)},i.set(o,f),o.addEventListener("dispose",G)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function t1(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const n1={[pp]:"LINEAR_TONE_MAPPING",[mp]:"REINHARD_TONE_MAPPING",[gp]:"CINEON_TONE_MAPPING",[hu]:"ACES_FILMIC_TONE_MAPPING",[_p]:"AGX_TONE_MAPPING",[xp]:"NEUTRAL_TONE_MAPPING",[vp]:"CUSTOM_TONE_MAPPING"};function i1(n,e,t,i,r){const s=new Xn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Xn(e,t,{type:mi,depthBuffer:!1,stencilBuffer:!1}),o=new cn;o.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Kt([0,2,0,0,2,0],2));const l=new Hx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new gn(o,l),u=new Gp(-1,1,1,-1,0,1);let d=null,f=null,h=!1,g,_=null,m=[],p=!1;this.setSize=function(y,T){s.setSize(y,T),a.setSize(y,T);for(let E=0;E<m.length;E++){const D=m[E];D.setSize&&D.setSize(y,T)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;const T=s.width,E=s.height;for(let D=0;D<m.length;D++){const R=m[D];R.setSize&&R.setSize(T,E)}},this.begin=function(y,T){if(h||y.toneMapping===$n&&m.length===0)return!1;if(_=T,T!==null){const E=T.width,D=T.height;(s.width!==E||s.height!==D)&&this.setSize(E,D)}return p===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=$n,!0},this.hasRenderPass=function(){return p},this.end=function(y,T){y.toneMapping=g,h=!0;let E=s,D=a;for(let R=0;R<m.length;R++){const U=m[R];if(U.enabled!==!1&&(U.render(y,D,E,T),U.needsSwap!==!1)){const x=E;E=D,D=x}}if(d!==y.outputColorSpace||f!==y.toneMapping){d=y.outputColorSpace,f=y.toneMapping,l.defines={},it.getTransfer(d)===ft&&(l.defines.SRGB_TRANSFER="");const R=n1[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(_),y.render(c,u),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Xp=new kt,Dc=new Vs(1,1),jp=new Pp,qp=new xx,Yp=new Bp,od=[],ld=[],cd=new Float32Array(16),ud=new Float32Array(9),fd=new Float32Array(4);function Kr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=od[r];if(s===void 0&&(s=new Float32Array(r),od[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function To(n,e){let t=ld[e];t===void 0&&(t=new Int32Array(e),ld[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function r1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function s1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function a1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function o1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function l1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,i))return;fd.set(i),n.uniformMatrix2fv(this.addr,!1,fd),Dt(t,i)}}function c1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,i))return;ud.set(i),n.uniformMatrix3fv(this.addr,!1,ud),Dt(t,i)}}function u1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,i))return;cd.set(i),n.uniformMatrix4fv(this.addr,!1,cd),Dt(t,i)}}function f1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function d1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function h1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function p1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function m1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function g1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function v1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function _1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function x1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Dc.compareFunction=t.isReversedDepthBuffer()?bu:yu,s=Dc):s=Xp,t.setTexture2D(e||s,r)}function y1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||qp,r)}function b1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Yp,r)}function S1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||jp,r)}function M1(n){switch(n){case 5126:return r1;case 35664:return s1;case 35665:return a1;case 35666:return o1;case 35674:return l1;case 35675:return c1;case 35676:return u1;case 5124:case 35670:return f1;case 35667:case 35671:return d1;case 35668:case 35672:return h1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return v1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return S1}}function E1(n,e){n.uniform1fv(this.addr,e)}function T1(n,e){const t=Kr(e,this.size,2);n.uniform2fv(this.addr,t)}function A1(n,e){const t=Kr(e,this.size,3);n.uniform3fv(this.addr,t)}function w1(n,e){const t=Kr(e,this.size,4);n.uniform4fv(this.addr,t)}function C1(n,e){const t=Kr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function R1(n,e){const t=Kr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function P1(n,e){const t=Kr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function I1(n,e){n.uniform1iv(this.addr,e)}function D1(n,e){n.uniform2iv(this.addr,e)}function L1(n,e){n.uniform3iv(this.addr,e)}function U1(n,e){n.uniform4iv(this.addr,e)}function N1(n,e){n.uniform1uiv(this.addr,e)}function O1(n,e){n.uniform2uiv(this.addr,e)}function F1(n,e){n.uniform3uiv(this.addr,e)}function B1(n,e){n.uniform4uiv(this.addr,e)}function V1(n,e,t){const i=this.cache,r=e.length,s=To(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Dc:a=Xp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function z1(n,e,t){const i=this.cache,r=e.length,s=To(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||qp,s[a])}function k1(n,e,t){const i=this.cache,r=e.length,s=To(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Yp,s[a])}function H1(n,e,t){const i=this.cache,r=e.length,s=To(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||jp,s[a])}function G1(n){switch(n){case 5126:return E1;case 35664:return T1;case 35665:return A1;case 35666:return w1;case 35674:return C1;case 35675:return R1;case 35676:return P1;case 5124:case 35670:return I1;case 35667:case 35671:return D1;case 35668:case 35672:return L1;case 35669:case 35673:return U1;case 5125:return N1;case 36294:return O1;case 36295:return F1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return H1}}class W1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=M1(t.type)}}class $1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=G1(t.type)}}class X1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const xl=/(\w+)(\])?(\[|\.)?/g;function dd(n,e){n.seq.push(e),n.map[e.id]=e}function j1(n,e,t){const i=n.name,r=i.length;for(xl.lastIndex=0;;){const s=xl.exec(i),a=xl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){dd(t,c===void 0?new W1(o,n,e):new $1(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new X1(o),dd(t,d)),t=d}}}class $a{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);j1(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function hd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const q1=37297;let Y1=0;function K1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const pd=new Ke;function Z1(n){it._getMatrix(pd,it.workingColorSpace,n);const e=`mat3( ${pd.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case io:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function md(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+K1(n.getShaderSource(e),o)}else return s}function J1(n,e){const t=Z1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Q1={[pp]:"Linear",[mp]:"Reinhard",[gp]:"Cineon",[hu]:"ACESFilmic",[_p]:"AgX",[xp]:"Neutral",[vp]:"Custom"};function eM(n,e){const t=Q1[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const La=new q;function tM(){it.getLuminanceCoefficients(La);const n=La.x.toFixed(4),e=La.y.toFixed(4),t=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function iM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function hs(n){return n!==""}function gd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(n){return n.replace(sM,oM)}const aM=new Map;function oM(n,e){let t=Ze[e];if(t===void 0){const i=aM.get(e);if(i!==void 0)t=Ze[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lc(t)}const lM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(n){return n.replace(lM,cM)}function cM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const uM={[za]:"SHADOWMAP_TYPE_PCF",[fs]:"SHADOWMAP_TYPE_VSM"};function fM(n){return uM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dM={[lr]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE_UV"};function hM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":dM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const pM={[Hr]:"ENVMAP_MODE_REFRACTION"};function mM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":pM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gM={[hp]:"ENVMAP_BLENDING_MULTIPLY",[J_]:"ENVMAP_BLENDING_MIX",[Q_]:"ENVMAP_BLENDING_ADD"};function vM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":gM[n.combine]||"ENVMAP_BLENDING_NONE"}function _M(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=fM(t),c=hM(t),u=mM(t),d=vM(t),f=_M(t),h=nM(t),g=iM(s),_=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),p.length>0&&(p+=`
`)):(m=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),p=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?Ze.tonemapping_pars_fragment:"",t.toneMapping!==$n?eM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,J1("linearToOutputTexel",t.outputColorSpace),tM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),a=Lc(a),a=gd(a,t),a=vd(a,t),o=Lc(o),o=gd(o,t),o=vd(o,t),a=_d(a),o=_d(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=y+m+a,E=y+p+o,D=hd(r,r.VERTEX_SHADER,T),R=hd(r,r.FRAGMENT_SHADER,E);r.attachShader(_,D),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function U(A){if(n.debug.checkShaderErrors){const C=r.getProgramInfoLog(_)||"",N=r.getShaderInfoLog(D)||"",B=r.getShaderInfoLog(R)||"",z=C.trim(),H=N.trim(),O=B.trim();let ne=!0,le=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,D,R);else{const de=md(r,D,"vertex"),fe=md(r,R,"fragment");ot("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+de+`
`+fe)}else z!==""?$e("WebGLProgram: Program Info Log:",z):(H===""||O==="")&&(le=!1);le&&(A.diagnostics={runnable:ne,programLog:z,vertexShader:{log:H,prefix:m},fragmentShader:{log:O,prefix:p}})}r.deleteShader(D),r.deleteShader(R),x=new $a(r,_),M=rM(r,_)}let x;this.getUniforms=function(){return x===void 0&&U(this),x};let M;this.getAttributes=function(){return M===void 0&&U(this),M};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(_,q1)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=R,this}let yM=0;class bM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new SM(e),t.set(e,i)),i}}class SM{constructor(e){this.id=yM++,this.code=e,this.usedTimes=0}}function MM(n,e,t,i,r,s){const a=new Ip,o=new bM,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,M,G,A,C){const N=A.fog,B=C.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||z,H),ne=O&&O.mapping===bo?O.image.height:null,le=h[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&$e("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const de=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,fe=de!==void 0?de.length:0;let se=0;B.morphAttributes.position!==void 0&&(se=1),B.morphAttributes.normal!==void 0&&(se=2),B.morphAttributes.color!==void 0&&(se=3);let Ce,Pe,Oe,K;if(le){const ut=zn[le];Ce=ut.vertexShader,Pe=ut.fragmentShader}else Ce=x.vertexShader,Pe=x.fragmentShader,o.update(x),Oe=o.getVertexShaderID(x),K=o.getFragmentShaderID(x);const ae=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),Ie=C.isInstancedMesh===!0,Te=C.isBatchedMesh===!0,Fe=!!x.map,I=!!x.matcap,P=!!O,V=!!x.aoMap,Q=!!x.lightMap,Z=!!x.bumpMap,ie=!!x.normalMap,w=!!x.displacementMap,he=!!x.emissiveMap,ce=!!x.metalnessMap,re=!!x.roughnessMap,oe=x.anisotropy>0,b=x.clearcoat>0,v=x.dispersion>0,L=x.iridescence>0,$=x.sheen>0,ee=x.transmission>0,X=oe&&!!x.anisotropyMap,ye=b&&!!x.clearcoatMap,me=b&&!!x.clearcoatNormalMap,De=b&&!!x.clearcoatRoughnessMap,Ve=L&&!!x.iridescenceMap,pe=L&&!!x.iridescenceThicknessMap,ve=$&&!!x.sheenColorMap,be=$&&!!x.sheenRoughnessMap,Ae=!!x.specularMap,we=!!x.specularColorMap,Je=!!x.specularIntensityMap,F=ee&&!!x.transmissionMap,xe=ee&&!!x.thicknessMap,_e=!!x.gradientMap,Le=!!x.alphaMap,ge=x.alphaTest>0,te=!!x.alphaHash,Ne=!!x.extensions;let Xe=$n;x.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Xe=n.toneMapping);const _t={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:Ce,fragmentShader:Pe,defines:x.defines,customVertexShaderID:Oe,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Te,batchingColor:Te&&C._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&C.instanceColor!==null,instancingMorph:Ie&&C.morphTexture!==null,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Wr,alphaToCoverage:!!x.alphaToCoverage,map:Fe,matcap:I,envMap:P,envMapMode:P&&O.mapping,envMapCubeUVHeight:ne,aoMap:V,lightMap:Q,bumpMap:Z,normalMap:ie,displacementMap:w,emissiveMap:he,normalMapObjectSpace:ie&&x.normalMapType===nx,normalMapTangentSpace:ie&&x.normalMapType===Cp,metalnessMap:ce,roughnessMap:re,anisotropy:oe,anisotropyMap:X,clearcoat:b,clearcoatMap:ye,clearcoatNormalMap:me,clearcoatRoughnessMap:De,dispersion:v,iridescence:L,iridescenceMap:Ve,iridescenceThicknessMap:pe,sheen:$,sheenColorMap:ve,sheenRoughnessMap:be,specularMap:Ae,specularColorMap:we,specularIntensityMap:Je,transmission:ee,transmissionMap:F,thicknessMap:xe,gradientMap:_e,opaque:x.transparent===!1&&x.blending===Or&&x.alphaToCoverage===!1,alphaMap:Le,alphaTest:ge,alphaHash:te,combine:x.combine,mapUv:Fe&&g(x.map.channel),aoMapUv:V&&g(x.aoMap.channel),lightMapUv:Q&&g(x.lightMap.channel),bumpMapUv:Z&&g(x.bumpMap.channel),normalMapUv:ie&&g(x.normalMap.channel),displacementMapUv:w&&g(x.displacementMap.channel),emissiveMapUv:he&&g(x.emissiveMap.channel),metalnessMapUv:ce&&g(x.metalnessMap.channel),roughnessMapUv:re&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:ye&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(x.sheenRoughnessMap.channel),specularMapUv:Ae&&g(x.specularMap.channel),specularColorMapUv:we&&g(x.specularColorMap.channel),specularIntensityMapUv:Je&&g(x.specularIntensityMap.channel),transmissionMapUv:F&&g(x.transmissionMap.channel),thicknessMapUv:xe&&g(x.thicknessMap.channel),alphaMapUv:Le&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ie||oe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!B.attributes.uv&&(Fe||Le),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&ie===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:C.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Fe&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===ft,decodeVideoTextureEmissive:he&&x.emissiveMap.isVideoTexture===!0&&it.getTransfer(x.emissiveMap.colorSpace)===ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ci,flipSided:x.side===tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ne&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&x.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function m(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const G in x.defines)M.push(G),M.push(x.defines[G]);return x.isRawShaderMaterial===!1&&(p(M,x),y(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function y(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),x.push(a.mask)}function T(x){const M=h[x.type];let G;if(M){const A=zn[M];G=Vx.clone(A.uniforms)}else G=x.uniforms;return G}function E(x,M){let G=u.get(M);return G!==void 0?++G.usedTimes:(G=new xM(n,M,x,r),c.push(G),u.set(M,G)),G}function D(x){if(--x.usedTimes===0){const M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){o.remove(x)}function U(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:T,acquireProgram:E,releaseProgram:D,releaseShaderCache:R,programs:c,dispose:U}}function EM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function TM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function yd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,g,_,m,p){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:h,material:g,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:p},n[e]=y):(y.id=f.id,y.object=f,y.geometry=h,y.material=g,y.materialVariant=a(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=m,y.group=p),e++,y}function l(f,h,g,_,m,p){const y=o(f,h,g,_,m,p);g.transmission>0?i.push(y):g.transparent===!0?r.push(y):t.push(y)}function c(f,h,g,_,m,p){const y=o(f,h,g,_,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?r.unshift(y):t.unshift(y)}function u(f,h){t.length>1&&t.sort(f||TM),i.length>1&&i.sort(h||yd),r.length>1&&r.sort(h||yd)}function d(){for(let f=e,h=n.length;f<h;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function AM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new bd,n.set(i,[a])):r>=s.length?(a=new bd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function wM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new et};break;case"SpotLight":t={position:new q,direction:new q,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function CM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let RM=0;function PM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IM(n){const e=new wM,t=CM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new Tt,a=new Tt;function o(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,y=0,T=0,E=0,D=0,R=0,U=0;c.sort(PM);for(let M=0,G=c.length;M<G;M++){const A=c[M],C=A.color,N=A.intensity,B=A.distance;let z=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Gr?z=A.shadow.map.texture:z=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=C.r*N,d+=C.g*N,f+=C.b*N;else if(A.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(A.sh.coefficients[H],N);U++}else if(A.isDirectionalLight){const H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const O=A.shadow,ne=t.get(A);ne.shadowIntensity=O.intensity,ne.shadowBias=O.bias,ne.shadowNormalBias=O.normalBias,ne.shadowRadius=O.radius,ne.shadowMapSize=O.mapSize,i.directionalShadow[h]=ne,i.directionalShadowMap[h]=z,i.directionalShadowMatrix[h]=A.shadow.matrix,y++}i.directional[h]=H,h++}else if(A.isSpotLight){const H=e.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(C).multiplyScalar(N),H.distance=B,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,i.spot[_]=H;const O=A.shadow;if(A.map&&(i.spotLightMap[D]=A.map,D++,O.updateMatrices(A),A.castShadow&&R++),i.spotLightMatrix[_]=O.matrix,A.castShadow){const ne=t.get(A);ne.shadowIntensity=O.intensity,ne.shadowBias=O.bias,ne.shadowNormalBias=O.normalBias,ne.shadowRadius=O.radius,ne.shadowMapSize=O.mapSize,i.spotShadow[_]=ne,i.spotShadowMap[_]=z,E++}_++}else if(A.isRectAreaLight){const H=e.get(A);H.color.copy(C).multiplyScalar(N),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=H,m++}else if(A.isPointLight){const H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const O=A.shadow,ne=t.get(A);ne.shadowIntensity=O.intensity,ne.shadowBias=O.bias,ne.shadowNormalBias=O.normalBias,ne.shadowRadius=O.radius,ne.shadowMapSize=O.mapSize,ne.shadowCameraNear=O.camera.near,ne.shadowCameraFar=O.camera.far,i.pointShadow[g]=ne,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=A.shadow.matrix,T++}i.point[g]=H,g++}else if(A.isHemisphereLight){const H=e.get(A);H.skyColor.copy(A.color).multiplyScalar(N),H.groundColor.copy(A.groundColor).multiplyScalar(N),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==h||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==T||x.numSpotShadows!==E||x.numSpotMaps!==D||x.numLightProbes!==U)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=U,x.directionalLength=h,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=T,x.numSpotShadows=E,x.numSpotMaps=D,x.numLightProbes=U,i.version=RM++)}function l(c,u){let d=0,f=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const T=c[p];if(T.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(T.isSpotLight){const E=i.spot[h];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(T.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Sd(n){const e=new IM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function DM(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Sd(n),e.set(r,[o])):s>=a.length?(o=new Sd(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const LM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,NM=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],OM=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Md=new Tt,ls=new q,yl=new q;function FM(n,e,t){let i=new Mu;const r=new lt,s=new lt,a=new wt,o=new $x,l=new Xx,c={},u=t.maxTextureSize,d={[Bi]:tn,[tn]:Bi,[ci]:ci},f=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:LM,fragmentShader:UM}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new cn;g.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=za;let p=this.type;this.render=function(R,U,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===L_&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=za);const M=n.getRenderTarget(),G=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),C=n.state;C.setBlending(fi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const N=p!==this.type;N&&U.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(z=>z.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,z=R.length;B<z;B++){const H=R[B],O=H.shadow;if(O===void 0){$e("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const ne=O.getFrameExtents();r.multiply(ne),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,O.mapSize.y=s.y));const le=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=le,O.map===null||N===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===fs){if(H.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Xn(r.x,r.y,{format:Gr,type:mi,minFilter:qt,magFilter:qt,generateMipmaps:!1}),O.map.texture.name=H.name+".shadowMap",O.map.depthTexture=new Vs(r.x,r.y,Hn),O.map.depthTexture.name=H.name+".shadowMapDepth",O.map.depthTexture.format=gi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=zt,O.map.depthTexture.magFilter=zt}else H.isPointLight?(O.map=new $p(r.x),O.map.depthTexture=new Fx(r.x,jn)):(O.map=new Xn(r.x,r.y),O.map.depthTexture=new Vs(r.x,r.y,jn)),O.map.depthTexture.name=H.name+".shadowMap",O.map.depthTexture.format=gi,this.type===za?(O.map.depthTexture.compareFunction=le?bu:yu,O.map.depthTexture.minFilter=qt,O.map.depthTexture.magFilter=qt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=zt,O.map.depthTexture.magFilter=zt);O.camera.updateProjectionMatrix()}const de=O.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<de;fe++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,fe),n.clear();else{fe===0&&(n.setRenderTarget(O.map),n.clear());const se=O.getViewport(fe);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),C.viewport(a)}if(H.isPointLight){const se=O.camera,Ce=O.matrix,Pe=H.distance||se.far;Pe!==se.far&&(se.far=Pe,se.updateProjectionMatrix()),ls.setFromMatrixPosition(H.matrixWorld),se.position.copy(ls),yl.copy(se.position),yl.add(NM[fe]),se.up.copy(OM[fe]),se.lookAt(yl),se.updateMatrixWorld(),Ce.makeTranslation(-ls.x,-ls.y,-ls.z),Md.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Md,se.coordinateSystem,se.reversedDepth)}else O.updateMatrices(H);i=O.getFrustum(),E(U,x,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===fs&&y(O,x),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,G,A)};function y(R,U){const x=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Xn(r.x,r.y,{format:Gr,type:mi})),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(U,null,x,f,_,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(U,null,x,h,_,null)}function T(R,U,x,M){let G=null;const A=x.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)G=A;else if(G=x.isPointLight===!0?l:o,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const C=G.uuid,N=U.uuid;let B=c[C];B===void 0&&(B={},c[C]=B);let z=B[N];z===void 0&&(z=G.clone(),B[N]=z,U.addEventListener("dispose",D)),G=z}if(G.visible=U.visible,G.wireframe=U.wireframe,M===fs?G.side=U.shadowSide!==null?U.shadowSide:U.side:G.side=U.shadowSide!==null?U.shadowSide:d[U.side],G.alphaMap=U.alphaMap,G.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,G.map=U.map,G.clipShadows=U.clipShadows,G.clippingPlanes=U.clippingPlanes,G.clipIntersection=U.clipIntersection,G.displacementMap=U.displacementMap,G.displacementScale=U.displacementScale,G.displacementBias=U.displacementBias,G.wireframeLinewidth=U.wireframeLinewidth,G.linewidth=U.linewidth,x.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const C=n.properties.get(G);C.light=x}return G}function E(R,U,x,M,G){if(R.visible===!1)return;if(R.layers.test(U.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&G===fs)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,R.matrixWorld);const N=e.update(R),B=R.material;if(Array.isArray(B)){const z=N.groups;for(let H=0,O=z.length;H<O;H++){const ne=z[H],le=B[ne.materialIndex];if(le&&le.visible){const de=T(R,le,M,G);R.onBeforeShadow(n,R,U,x,N,de,ne),n.renderBufferDirect(x,null,N,de,R,ne),R.onAfterShadow(n,R,U,x,N,de,ne)}}}else if(B.visible){const z=T(R,B,M,G);R.onBeforeShadow(n,R,U,x,N,z,null),n.renderBufferDirect(x,null,N,z,R,null),R.onAfterShadow(n,R,U,x,N,z,null)}}const C=R.children;for(let N=0,B=C.length;N<B;N++)E(C[N],U,x,M,G)}function D(R){R.target.removeEventListener("dispose",D);for(const x in c){const M=c[x],G=R.target.uuid;G in M&&(M[G].dispose(),delete M[G])}}}function BM(n,e){function t(){let F=!1;const xe=new wt;let _e=null;const Le=new wt(0,0,0,0);return{setMask:function(ge){_e!==ge&&!F&&(n.colorMask(ge,ge,ge,ge),_e=ge)},setLocked:function(ge){F=ge},setClear:function(ge,te,Ne,Xe,_t){_t===!0&&(ge*=Xe,te*=Xe,Ne*=Xe),xe.set(ge,te,Ne,Xe),Le.equals(xe)===!1&&(n.clearColor(ge,te,Ne,Xe),Le.copy(xe))},reset:function(){F=!1,_e=null,Le.set(-1,0,0,0)}}}function i(){let F=!1,xe=!1,_e=null,Le=null,ge=null;return{setReversed:function(te){if(xe!==te){const Ne=e.get("EXT_clip_control");te?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),xe=te;const Xe=ge;ge=null,this.setClear(Xe)}},getReversed:function(){return xe},setTest:function(te){te?ae(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(te){_e!==te&&!F&&(n.depthMask(te),_e=te)},setFunc:function(te){if(xe&&(te=dx[te]),Le!==te){switch(te){case Gl:n.depthFunc(n.NEVER);break;case Wl:n.depthFunc(n.ALWAYS);break;case $l:n.depthFunc(n.LESS);break;case kr:n.depthFunc(n.LEQUAL);break;case Xl:n.depthFunc(n.EQUAL);break;case jl:n.depthFunc(n.GEQUAL);break;case ql:n.depthFunc(n.GREATER);break;case Yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Le=te}},setLocked:function(te){F=te},setClear:function(te){ge!==te&&(ge=te,xe&&(te=1-te),n.clearDepth(te))},reset:function(){F=!1,_e=null,Le=null,ge=null,xe=!1}}}function r(){let F=!1,xe=null,_e=null,Le=null,ge=null,te=null,Ne=null,Xe=null,_t=null;return{setTest:function(ut){F||(ut?ae(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(ut){xe!==ut&&!F&&(n.stencilMask(ut),xe=ut)},setFunc:function(ut,Jn,Qn){(_e!==ut||Le!==Jn||ge!==Qn)&&(n.stencilFunc(ut,Jn,Qn),_e=ut,Le=Jn,ge=Qn)},setOp:function(ut,Jn,Qn){(te!==ut||Ne!==Jn||Xe!==Qn)&&(n.stencilOp(ut,Jn,Qn),te=ut,Ne=Jn,Xe=Qn)},setLocked:function(ut){F=ut},setClear:function(ut){_t!==ut&&(n.clearStencil(ut),_t=ut)},reset:function(){F=!1,xe=null,_e=null,Le=null,ge=null,te=null,Ne=null,Xe=null,_t=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,T=null,E=null,D=null,R=null,U=new et(0,0,0),x=0,M=!1,G=null,A=null,C=null,N=null,B=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,O=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(ne)[1]),H=O>=1):ne.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),H=O>=2);let le=null,de={};const fe=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),Ce=new wt().fromArray(fe),Pe=new wt().fromArray(se);function Oe(F,xe,_e,Le){const ge=new Uint8Array(4),te=n.createTexture();n.bindTexture(F,te),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<_e;Ne++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(xe+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return te}const K={};K[n.TEXTURE_2D]=Oe(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=Oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=Oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=Oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(n.DEPTH_TEST),a.setFunc(kr),Z(!1),ie(Ef),ae(n.CULL_FACE),V(fi);function ae(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ue(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Ie(F,xe){return d[F]!==xe?(n.bindFramebuffer(F,xe),d[F]=xe,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=xe),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function Te(F,xe){let _e=h,Le=!1;if(F){_e=f.get(xe),_e===void 0&&(_e=[],f.set(xe,_e));const ge=F.textures;if(_e.length!==ge.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Ne=ge.length;te<Ne;te++)_e[te]=n.COLOR_ATTACHMENT0+te;_e.length=ge.length,Le=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,Le=!0);Le&&n.drawBuffers(_e)}function Fe(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const I={[Qi]:n.FUNC_ADD,[N_]:n.FUNC_SUBTRACT,[O_]:n.FUNC_REVERSE_SUBTRACT};I[F_]=n.MIN,I[B_]=n.MAX;const P={[V_]:n.ZERO,[z_]:n.ONE,[k_]:n.SRC_COLOR,[kl]:n.SRC_ALPHA,[j_]:n.SRC_ALPHA_SATURATE,[$_]:n.DST_COLOR,[G_]:n.DST_ALPHA,[H_]:n.ONE_MINUS_SRC_COLOR,[Hl]:n.ONE_MINUS_SRC_ALPHA,[X_]:n.ONE_MINUS_DST_COLOR,[W_]:n.ONE_MINUS_DST_ALPHA,[q_]:n.CONSTANT_COLOR,[Y_]:n.ONE_MINUS_CONSTANT_COLOR,[K_]:n.CONSTANT_ALPHA,[Z_]:n.ONE_MINUS_CONSTANT_ALPHA};function V(F,xe,_e,Le,ge,te,Ne,Xe,_t,ut){if(F===fi){_===!0&&(ue(n.BLEND),_=!1);return}if(_===!1&&(ae(n.BLEND),_=!0),F!==U_){if(F!==m||ut!==M){if((p!==Qi||E!==Qi)&&(n.blendEquation(n.FUNC_ADD),p=Qi,E=Qi),ut)switch(F){case Or:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tr:n.blendFunc(n.ONE,n.ONE);break;case Tf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Af:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ot("WebGLState: Invalid blending: ",F);break}else switch(F){case Or:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Tf:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Af:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",F);break}y=null,T=null,D=null,R=null,U.set(0,0,0),x=0,m=F,M=ut}return}ge=ge||xe,te=te||_e,Ne=Ne||Le,(xe!==p||ge!==E)&&(n.blendEquationSeparate(I[xe],I[ge]),p=xe,E=ge),(_e!==y||Le!==T||te!==D||Ne!==R)&&(n.blendFuncSeparate(P[_e],P[Le],P[te],P[Ne]),y=_e,T=Le,D=te,R=Ne),(Xe.equals(U)===!1||_t!==x)&&(n.blendColor(Xe.r,Xe.g,Xe.b,_t),U.copy(Xe),x=_t),m=F,M=!1}function Q(F,xe){F.side===ci?ue(n.CULL_FACE):ae(n.CULL_FACE);let _e=F.side===tn;xe&&(_e=!_e),Z(_e),F.blending===Or&&F.transparent===!1?V(fi):V(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const Le=F.stencilWrite;o.setTest(Le),Le&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),he(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(F){G!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),G=F)}function ie(F){F!==I_?(ae(n.CULL_FACE),F!==A&&(F===Ef?n.cullFace(n.BACK):F===D_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),A=F}function w(F){F!==C&&(H&&n.lineWidth(F),C=F)}function he(F,xe,_e){F?(ae(n.POLYGON_OFFSET_FILL),(N!==xe||B!==_e)&&(N=xe,B=_e,a.getReversed()&&(xe=-xe),n.polygonOffset(xe,_e))):ue(n.POLYGON_OFFSET_FILL)}function ce(F){F?ae(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function re(F){F===void 0&&(F=n.TEXTURE0+z-1),le!==F&&(n.activeTexture(F),le=F)}function oe(F,xe,_e){_e===void 0&&(le===null?_e=n.TEXTURE0+z-1:_e=le);let Le=de[_e];Le===void 0&&(Le={type:void 0,texture:void 0},de[_e]=Le),(Le.type!==F||Le.texture!==xe)&&(le!==_e&&(n.activeTexture(_e),le=_e),n.bindTexture(F,xe||K[F]),Le.type=F,Le.texture=xe)}function b(){const F=de[le];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function $(){try{n.texSubImage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function ee(){try{n.texSubImage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function me(){try{n.texStorage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function De(){try{n.texStorage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function Ve(){try{n.texImage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function pe(){try{n.texImage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function ve(F){Ce.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ce.copy(F))}function be(F){Pe.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Pe.copy(F))}function Ae(F,xe){let _e=c.get(xe);_e===void 0&&(_e=new WeakMap,c.set(xe,_e));let Le=_e.get(F);Le===void 0&&(Le=n.getUniformBlockIndex(xe,F.name),_e.set(F,Le))}function we(F,xe){const Le=c.get(xe).get(F);l.get(xe)!==Le&&(n.uniformBlockBinding(xe,Le,F.__bindingPointIndex),l.set(xe,Le))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},le=null,de={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,T=null,E=null,D=null,R=null,U=new et(0,0,0),x=0,M=!1,G=null,A=null,C=null,N=null,B=null,Ce.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:ue,bindFramebuffer:Ie,drawBuffers:Te,useProgram:Fe,setBlending:V,setMaterial:Q,setFlipSided:Z,setCullFace:ie,setLineWidth:w,setPolygonOffset:he,setScissorTest:ce,activeTexture:re,bindTexture:oe,unbindTexture:b,compressedTexImage2D:v,compressedTexImage3D:L,texImage2D:Ve,texImage3D:pe,updateUBOMapping:Ae,uniformBlockBinding:we,texStorage2D:me,texStorage3D:De,texSubImage2D:$,texSubImage3D:ee,compressedTexSubImage2D:X,compressedTexSubImage3D:ye,scissor:ve,viewport:be,reset:Je}}function VM(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return h?new OffscreenCanvas(b,v):Bs("canvas")}function _(b,v,L){let $=1;const ee=oe(b);if((ee.width>L||ee.height>L)&&($=L/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const X=Math.floor($*ee.width),ye=Math.floor($*ee.height);d===void 0&&(d=g(X,ye));const me=v?g(X,ye):d;return me.width=X,me.height=ye,me.getContext("2d").drawImage(b,0,0,X,ye),$e("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+X+"x"+ye+")."),me}else return"data"in b&&$e("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(b,v,L,$,ee=!1){if(b!==null){if(n[b]!==void 0)return n[b];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=v;if(v===n.RED&&(L===n.FLOAT&&(X=n.R32F),L===n.HALF_FLOAT&&(X=n.R16F),L===n.UNSIGNED_BYTE&&(X=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.R8UI),L===n.UNSIGNED_SHORT&&(X=n.R16UI),L===n.UNSIGNED_INT&&(X=n.R32UI),L===n.BYTE&&(X=n.R8I),L===n.SHORT&&(X=n.R16I),L===n.INT&&(X=n.R32I)),v===n.RG&&(L===n.FLOAT&&(X=n.RG32F),L===n.HALF_FLOAT&&(X=n.RG16F),L===n.UNSIGNED_BYTE&&(X=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.RG8UI),L===n.UNSIGNED_SHORT&&(X=n.RG16UI),L===n.UNSIGNED_INT&&(X=n.RG32UI),L===n.BYTE&&(X=n.RG8I),L===n.SHORT&&(X=n.RG16I),L===n.INT&&(X=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.RGB8UI),L===n.UNSIGNED_SHORT&&(X=n.RGB16UI),L===n.UNSIGNED_INT&&(X=n.RGB32UI),L===n.BYTE&&(X=n.RGB8I),L===n.SHORT&&(X=n.RGB16I),L===n.INT&&(X=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),L===n.UNSIGNED_INT&&(X=n.RGBA32UI),L===n.BYTE&&(X=n.RGBA8I),L===n.SHORT&&(X=n.RGBA16I),L===n.INT&&(X=n.RGBA32I)),v===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),v===n.RGBA){const ye=ee?io:it.getTransfer($);L===n.FLOAT&&(X=n.RGBA32F),L===n.HALF_FLOAT&&(X=n.RGBA16F),L===n.UNSIGNED_BYTE&&(X=ye===ft?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function E(b,v){let L;return b?v===null||v===jn||v===Os?L=n.DEPTH24_STENCIL8:v===Hn?L=n.DEPTH32F_STENCIL8:v===Ns&&(L=n.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===jn||v===Os?L=n.DEPTH_COMPONENT24:v===Hn?L=n.DEPTH_COMPONENT32F:v===Ns&&(L=n.DEPTH_COMPONENT16),L}function D(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==zt&&b.minFilter!==qt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function R(b){const v=b.target;v.removeEventListener("dispose",R),x(v),v.isVideoTexture&&u.delete(v)}function U(b){const v=b.target;v.removeEventListener("dispose",U),G(v)}function x(b){const v=i.get(b);if(v.__webglInit===void 0)return;const L=b.source,$=f.get(L);if($){const ee=$[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(b),Object.keys($).length===0&&f.delete(L)}i.remove(b)}function M(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const L=b.source,$=f.get(L);delete $[v.__cacheKey],a.memory.textures--}function G(b){const v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let ee=0;ee<v.__webglFramebuffer[$].length;ee++)n.deleteFramebuffer(v.__webglFramebuffer[$][ee]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const L=b.textures;for(let $=0,ee=L.length;$<ee;$++){const X=i.get(L[$]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(L[$])}i.remove(b)}let A=0;function C(){A=0}function N(){const b=A;return b>=r.maxTextures&&$e("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),A+=1,b}function B(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function z(b,v){const L=i.get(b);if(b.isVideoTexture&&ce(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&L.__version!==b.version){const $=b.image;if($===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{K(L,b,v);return}}else b.isExternalTexture&&(L.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function H(b,v){const L=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){K(L,b,v);return}else b.isExternalTexture&&(L.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function O(b,v){const L=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){K(L,b,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function ne(b,v){const L=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&L.__version!==b.version){ae(L,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}const le={[Kl]:n.REPEAT,[ui]:n.CLAMP_TO_EDGE,[Zl]:n.MIRRORED_REPEAT},de={[zt]:n.NEAREST,[ex]:n.NEAREST_MIPMAP_NEAREST,[ua]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[Ho]:n.LINEAR_MIPMAP_NEAREST,[nr]:n.LINEAR_MIPMAP_LINEAR},fe={[ix]:n.NEVER,[lx]:n.ALWAYS,[rx]:n.LESS,[yu]:n.LEQUAL,[sx]:n.EQUAL,[bu]:n.GEQUAL,[ax]:n.GREATER,[ox]:n.NOTEQUAL};function se(b,v){if(v.type===Hn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===qt||v.magFilter===Ho||v.magFilter===ua||v.magFilter===nr||v.minFilter===qt||v.minFilter===Ho||v.minFilter===ua||v.minFilter===nr)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,le[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,le[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,le[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,de[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,fe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===zt||v.minFilter!==ua&&v.minFilter!==nr||v.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ce(b,v){let L=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",R));const $=v.source;let ee=f.get($);ee===void 0&&(ee={},f.set($,ee));const X=B(v);if(X!==b.__cacheKey){ee[X]===void 0&&(ee[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),ee[X].usedTimes++;const ye=ee[b.__cacheKey];ye!==void 0&&(ee[b.__cacheKey].usedTimes--,ye.usedTimes===0&&M(v)),b.__cacheKey=X,b.__webglTexture=ee[X].texture}return L}function Pe(b,v,L){return Math.floor(Math.floor(b/L)/v)}function Oe(b,v,L,$){const X=b.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,L,$,v.data);else{X.sort((pe,ve)=>pe.start-ve.start);let ye=0;for(let pe=1;pe<X.length;pe++){const ve=X[ye],be=X[pe],Ae=ve.start+ve.count,we=Pe(be.start,v.width,4),Je=Pe(ve.start,v.width,4);be.start<=Ae+1&&we===Je&&Pe(be.start+be.count-1,v.width,4)===we?ve.count=Math.max(ve.count,be.start+be.count-ve.start):(++ye,X[ye]=be)}X.length=ye+1;const me=n.getParameter(n.UNPACK_ROW_LENGTH),De=n.getParameter(n.UNPACK_SKIP_PIXELS),Ve=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let pe=0,ve=X.length;pe<ve;pe++){const be=X[pe],Ae=Math.floor(be.start/4),we=Math.ceil(be.count/4),Je=Ae%v.width,F=Math.floor(Ae/v.width),xe=we,_e=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Je,F,xe,_e,L,$,v.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,De),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ve)}}function K(b,v,L){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);const ee=Ce(b,v),X=v.source;t.bindTexture($,b.__webglTexture,n.TEXTURE0+L);const ye=i.get(X);if(X.version!==ye.__version||ee===!0){t.activeTexture(n.TEXTURE0+L);const me=it.getPrimaries(it.workingColorSpace),De=v.colorSpace===Li?null:it.getPrimaries(v.colorSpace),Ve=v.colorSpace===Li||me===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let pe=_(v.image,!1,r.maxTextureSize);pe=re(v,pe);const ve=s.convert(v.format,v.colorSpace),be=s.convert(v.type);let Ae=T(v.internalFormat,ve,be,v.colorSpace,v.isVideoTexture);se($,v);let we;const Je=v.mipmaps,F=v.isVideoTexture!==!0,xe=ye.__version===void 0||ee===!0,_e=X.dataReady,Le=D(v,pe);if(v.isDepthTexture)Ae=E(v.format===ir,v.type),xe&&(F?t.texStorage2D(n.TEXTURE_2D,1,Ae,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Ae,pe.width,pe.height,0,ve,be,null));else if(v.isDataTexture)if(Je.length>0){F&&xe&&t.texStorage2D(n.TEXTURE_2D,Le,Ae,Je[0].width,Je[0].height);for(let ge=0,te=Je.length;ge<te;ge++)we=Je[ge],F?_e&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,we.width,we.height,ve,be,we.data):t.texImage2D(n.TEXTURE_2D,ge,Ae,we.width,we.height,0,ve,be,we.data);v.generateMipmaps=!1}else F?(xe&&t.texStorage2D(n.TEXTURE_2D,Le,Ae,pe.width,pe.height),_e&&Oe(v,pe,ve,be)):t.texImage2D(n.TEXTURE_2D,0,Ae,pe.width,pe.height,0,ve,be,pe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){F&&xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ae,Je[0].width,Je[0].height,pe.depth);for(let ge=0,te=Je.length;ge<te;ge++)if(we=Je[ge],v.format!==Rn)if(ve!==null)if(F){if(_e)if(v.layerUpdates.size>0){const Ne=ed(we.width,we.height,v.format,v.type);for(const Xe of v.layerUpdates){const _t=we.data.subarray(Xe*Ne/we.data.BYTES_PER_ELEMENT,(Xe+1)*Ne/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,Xe,we.width,we.height,1,ve,_t)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,we.width,we.height,pe.depth,ve,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Ae,we.width,we.height,pe.depth,0,we.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?_e&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,we.width,we.height,pe.depth,ve,be,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Ae,we.width,we.height,pe.depth,0,ve,be,we.data)}else{F&&xe&&t.texStorage2D(n.TEXTURE_2D,Le,Ae,Je[0].width,Je[0].height);for(let ge=0,te=Je.length;ge<te;ge++)we=Je[ge],v.format!==Rn?ve!==null?F?_e&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,we.width,we.height,ve,we.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Ae,we.width,we.height,0,we.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?_e&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,we.width,we.height,ve,be,we.data):t.texImage2D(n.TEXTURE_2D,ge,Ae,we.width,we.height,0,ve,be,we.data)}else if(v.isDataArrayTexture)if(F){if(xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ae,pe.width,pe.height,pe.depth),_e)if(v.layerUpdates.size>0){const ge=ed(pe.width,pe.height,v.format,v.type);for(const te of v.layerUpdates){const Ne=pe.data.subarray(te*ge/pe.data.BYTES_PER_ELEMENT,(te+1)*ge/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,pe.width,pe.height,1,ve,be,Ne)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,ve,be,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,pe.width,pe.height,pe.depth,0,ve,be,pe.data);else if(v.isData3DTexture)F?(xe&&t.texStorage3D(n.TEXTURE_3D,Le,Ae,pe.width,pe.height,pe.depth),_e&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,ve,be,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,pe.width,pe.height,pe.depth,0,ve,be,pe.data);else if(v.isFramebufferTexture){if(xe)if(F)t.texStorage2D(n.TEXTURE_2D,Le,Ae,pe.width,pe.height);else{let ge=pe.width,te=pe.height;for(let Ne=0;Ne<Le;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Ae,ge,te,0,ve,be,null),ge>>=1,te>>=1}}else if(Je.length>0){if(F&&xe){const ge=oe(Je[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ae,ge.width,ge.height)}for(let ge=0,te=Je.length;ge<te;ge++)we=Je[ge],F?_e&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,ve,be,we):t.texImage2D(n.TEXTURE_2D,ge,Ae,ve,be,we);v.generateMipmaps=!1}else if(F){if(xe){const ge=oe(pe);t.texStorage2D(n.TEXTURE_2D,Le,Ae,ge.width,ge.height)}_e&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,be,pe)}else t.texImage2D(n.TEXTURE_2D,0,Ae,ve,be,pe);m(v)&&p($),ye.__version=X.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ae(b,v,L){if(v.image.length!==6)return;const $=Ce(b,v),ee=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+L);const X=i.get(ee);if(ee.version!==X.__version||$===!0){t.activeTexture(n.TEXTURE0+L);const ye=it.getPrimaries(it.workingColorSpace),me=v.colorSpace===Li?null:it.getPrimaries(v.colorSpace),De=v.colorSpace===Li||ye===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ve=v.isCompressedTexture||v.image[0].isCompressedTexture,pe=v.image[0]&&v.image[0].isDataTexture,ve=[];for(let te=0;te<6;te++)!Ve&&!pe?ve[te]=_(v.image[te],!0,r.maxCubemapSize):ve[te]=pe?v.image[te].image:v.image[te],ve[te]=re(v,ve[te]);const be=ve[0],Ae=s.convert(v.format,v.colorSpace),we=s.convert(v.type),Je=T(v.internalFormat,Ae,we,v.colorSpace),F=v.isVideoTexture!==!0,xe=X.__version===void 0||$===!0,_e=ee.dataReady;let Le=D(v,be);se(n.TEXTURE_CUBE_MAP,v);let ge;if(Ve){F&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,Je,be.width,be.height);for(let te=0;te<6;te++){ge=ve[te].mipmaps;for(let Ne=0;Ne<ge.length;Ne++){const Xe=ge[Ne];v.format!==Rn?Ae!==null?F?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne,0,0,Xe.width,Xe.height,Ae,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne,Je,Xe.width,Xe.height,0,Xe.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne,0,0,Xe.width,Xe.height,Ae,we,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne,Je,Xe.width,Xe.height,0,Ae,we,Xe.data)}}}else{if(ge=v.mipmaps,F&&xe){ge.length>0&&Le++;const te=oe(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,Je,te.width,te.height)}for(let te=0;te<6;te++)if(pe){F?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ve[te].width,ve[te].height,Ae,we,ve[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,ve[te].width,ve[te].height,0,Ae,we,ve[te].data);for(let Ne=0;Ne<ge.length;Ne++){const _t=ge[Ne].image[te].image;F?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne+1,0,0,_t.width,_t.height,Ae,we,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne+1,Je,_t.width,_t.height,0,Ae,we,_t.data)}}else{F?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ae,we,ve[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,Ae,we,ve[te]);for(let Ne=0;Ne<ge.length;Ne++){const Xe=ge[Ne];F?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne+1,0,0,Ae,we,Xe.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne+1,Je,Ae,we,Xe.image[te])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),X.__version=ee.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ue(b,v,L,$,ee,X){const ye=s.convert(L.format,L.colorSpace),me=s.convert(L.type),De=T(L.internalFormat,ye,me,L.colorSpace),Ve=i.get(v),pe=i.get(L);if(pe.__renderTarget=v,!Ve.__hasExternalTextures){const ve=Math.max(1,v.width>>X),be=Math.max(1,v.height>>X);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,X,De,ve,be,v.depth,0,ye,me,null):t.texImage2D(ee,X,De,ve,be,0,ye,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),he(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,ee,pe.__webglTexture,0,w(v)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,ee,pe.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(b,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){const $=v.depthTexture,ee=$&&$.isDepthTexture?$.type:null,X=E(v.stencilBuffer,ee),ye=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;he(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,w(v),X,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,w(v),X,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,X,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,b)}else{const $=v.textures;for(let ee=0;ee<$.length;ee++){const X=$[ee],ye=s.convert(X.format,X.colorSpace),me=s.convert(X.type),De=T(X.internalFormat,ye,me,X.colorSpace);he(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,w(v),De,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,w(v),De,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,De,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(b,v,L){const $=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(v.depthTexture);if(ee.__renderTarget=v,(!ee.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),ee.__webglTexture===void 0){ee.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),se(n.TEXTURE_CUBE_MAP,v.depthTexture);const Ve=s.convert(v.depthTexture.format),pe=s.convert(v.depthTexture.type);let ve;v.depthTexture.format===gi?ve=n.DEPTH_COMPONENT24:v.depthTexture.format===ir&&(ve=n.DEPTH24_STENCIL8);for(let be=0;be<6;be++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ve,v.width,v.height,0,Ve,pe,null)}}else z(v.depthTexture,0);const X=ee.__webglTexture,ye=w(v),me=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,De=v.depthTexture.format===ir?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===gi)he(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,De,me,X,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,De,me,X,0);else if(v.depthTexture.format===ir)he(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,De,me,X,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,De,me,X,0);else throw new Error("Unknown depthTexture format")}function Fe(b){const v=i.get(b),L=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=$}if(b.depthTexture&&!v.__autoAllocateDepthBuffer)if(L)for(let $=0;$<6;$++)Te(v.__webglFramebuffer[$],b,$);else{const $=b.texture.mipmaps;$&&$.length>0?Te(v.__webglFramebuffer[0],b,0):Te(v.__webglFramebuffer,b,0)}else if(L){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),Ie(v.__webglDepthbuffer[$],b,!1);else{const ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,X)}}else{const $=b.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ie(v.__webglDepthbuffer,b,!1);else{const ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(b,v,L){const $=i.get(b);v!==void 0&&ue($.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Fe(b)}function P(b){const v=b.texture,L=i.get(b),$=i.get(v);b.addEventListener("dispose",U);const ee=b.textures,X=b.isWebGLCubeRenderTarget===!0,ye=ee.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,a.memory.textures++),X){L.__webglFramebuffer=[];for(let me=0;me<6;me++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[me]=[];for(let De=0;De<v.mipmaps.length;De++)L.__webglFramebuffer[me][De]=n.createFramebuffer()}else L.__webglFramebuffer[me]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let me=0;me<v.mipmaps.length;me++)L.__webglFramebuffer[me]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ye)for(let me=0,De=ee.length;me<De;me++){const Ve=i.get(ee[me]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&he(b)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let me=0;me<ee.length;me++){const De=ee[me];L.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[me]);const Ve=s.convert(De.format,De.colorSpace),pe=s.convert(De.type),ve=T(De.internalFormat,Ve,pe,De.colorSpace,b.isXRRenderTarget===!0),be=w(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,ve,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,L.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(L.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),se(n.TEXTURE_CUBE_MAP,v);for(let me=0;me<6;me++)if(v.mipmaps&&v.mipmaps.length>0)for(let De=0;De<v.mipmaps.length;De++)ue(L.__webglFramebuffer[me][De],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,De);else ue(L.__webglFramebuffer[me],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let me=0,De=ee.length;me<De;me++){const Ve=ee[me],pe=i.get(Ve);let ve=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ve=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,pe.__webglTexture),se(ve,Ve),ue(L.__webglFramebuffer,b,Ve,n.COLOR_ATTACHMENT0+me,ve,0),m(Ve)&&p(ve)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(me=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,$.__webglTexture),se(me,v),v.mipmaps&&v.mipmaps.length>0)for(let De=0;De<v.mipmaps.length;De++)ue(L.__webglFramebuffer[De],b,v,n.COLOR_ATTACHMENT0,me,De);else ue(L.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,me,0);m(v)&&p(me),t.unbindTexture()}b.depthBuffer&&Fe(b)}function V(b){const v=b.textures;for(let L=0,$=v.length;L<$;L++){const ee=v[L];if(m(ee)){const X=y(b),ye=i.get(ee).__webglTexture;t.bindTexture(X,ye),p(X),t.unbindTexture()}}}const Q=[],Z=[];function ie(b){if(b.samples>0){if(he(b)===!1){const v=b.textures,L=b.width,$=b.height;let ee=n.COLOR_BUFFER_BIT;const X=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(b),me=v.length>1;if(me)for(let Ve=0;Ve<v.length;Ve++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const De=b.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ve=0;Ve<v.length;Ve++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ve]);const pe=i.get(v[Ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pe,0)}n.blitFramebuffer(0,0,L,$,0,0,L,$,ee,n.NEAREST),l===!0&&(Q.length=0,Z.length=0,Q.push(n.COLOR_ATTACHMENT0+Ve),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Q.push(X),Z.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Ve=0;Ve<v.length;Ve++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ve]);const pe=i.get(v[Ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function w(b){return Math.min(r.maxSamples,b.samples)}function he(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ce(b){const v=a.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function re(b,v){const L=b.colorSpace,$=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||L!==Wr&&L!==Li&&(it.getTransfer(L)===ft?($!==Rn||ee!==hn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",L)),v}function oe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=C,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=O,this.setTextureCube=ne,this.rebindTextures=I,this.setupRenderTarget=P,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function zM(n,e){function t(i,r=Li){let s;const a=it.getTransfer(r);if(i===hn)return n.UNSIGNED_BYTE;if(i===mu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ep)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===bp)return n.BYTE;if(i===Sp)return n.SHORT;if(i===Ns)return n.UNSIGNED_SHORT;if(i===pu)return n.INT;if(i===jn)return n.UNSIGNED_INT;if(i===Hn)return n.FLOAT;if(i===mi)return n.HALF_FLOAT;if(i===Tp)return n.ALPHA;if(i===Ap)return n.RGB;if(i===Rn)return n.RGBA;if(i===gi)return n.DEPTH_COMPONENT;if(i===ir)return n.DEPTH_STENCIL;if(i===wp)return n.RED;if(i===vu)return n.RED_INTEGER;if(i===Gr)return n.RG;if(i===_u)return n.RG_INTEGER;if(i===xu)return n.RGBA_INTEGER;if(i===ka||i===Ha||i===Ga||i===Wa)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ka)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ka)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jl||i===Ql||i===ec||i===tc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ql)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ec)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nc||i===ic||i===rc||i===sc||i===ac||i===oc||i===lc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nc||i===ic)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===sc)return s.COMPRESSED_R11_EAC;if(i===ac)return s.COMPRESSED_SIGNED_R11_EAC;if(i===oc)return s.COMPRESSED_RG11_EAC;if(i===lc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cc||i===uc||i===fc||i===dc||i===hc||i===pc||i===mc||i===gc||i===vc||i===_c||i===xc||i===yc||i===bc||i===Sc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_c)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mc||i===Ec||i===Tc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Mc)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ac||i===wc||i===Cc||i===Rc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ac)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const kM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Vp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yn({vertexShader:kM,fragmentShader:HM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gn(new Mo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WM extends jr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new GM,p={},y=t.getContextAttributes();let T=null,E=null;const D=[],R=[],U=new lt;let x=null;const M=new on;M.viewport=new wt;const G=new on;G.viewport=new wt;const A=[M,G],C=new ty;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=D[K];return ae===void 0&&(ae=new Ko,D[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=D[K];return ae===void 0&&(ae=new Ko,D[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=D[K];return ae===void 0&&(ae=new Ko,D[K]=ae),ae.getHandSpace()};function z(K){const ae=R.indexOf(K.inputSource);if(ae===-1)return;const ue=D[ae];ue!==void 0&&(ue.update(K.inputSource,K.frame,c||a),ue.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",O);for(let K=0;K<D.length;K++){const ae=R[K];ae!==null&&(R[K]=null,D[K].disconnect(ae))}N=null,B=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(T),h=null,f=null,d=null,r=null,E=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",H),r.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(U),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Ie=null,Te=null;y.depth&&(Te=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=y.stencil?ir:gi,Ie=y.stencil?Os:jn);const Fe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Xn(f.textureWidth,f.textureHeight,{format:Rn,type:hn,depthTexture:new Vs(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ue={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new Xn(h.framebufferWidth,h.framebufferHeight,{format:Rn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(K){for(let ae=0;ae<K.removed.length;ae++){const ue=K.removed[ae],Ie=R.indexOf(ue);Ie>=0&&(R[Ie]=null,D[Ie].disconnect(ue))}for(let ae=0;ae<K.added.length;ae++){const ue=K.added[ae];let Ie=R.indexOf(ue);if(Ie===-1){for(let Fe=0;Fe<D.length;Fe++)if(Fe>=R.length){R.push(ue),Ie=Fe;break}else if(R[Fe]===null){R[Fe]=ue,Ie=Fe;break}if(Ie===-1)break}const Te=D[Ie];Te&&Te.connect(ue)}}const ne=new q,le=new q;function de(K,ae,ue){ne.setFromMatrixPosition(ae.matrixWorld),le.setFromMatrixPosition(ue.matrixWorld);const Ie=ne.distanceTo(le),Te=ae.projectionMatrix.elements,Fe=ue.projectionMatrix.elements,I=Te[14]/(Te[10]-1),P=Te[14]/(Te[10]+1),V=(Te[9]+1)/Te[5],Q=(Te[9]-1)/Te[5],Z=(Te[8]-1)/Te[0],ie=(Fe[8]+1)/Fe[0],w=I*Z,he=I*ie,ce=Ie/(-Z+ie),re=ce*-Z;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(re),K.translateZ(ce),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const oe=I+ce,b=P+ce,v=w-re,L=he+(Ie-re),$=V*P/b*oe,ee=Q*P/b*oe;K.projectionMatrix.makePerspective(v,L,$,ee,oe,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function fe(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ae=K.near,ue=K.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),C.near=G.near=M.near=ae,C.far=G.far=M.far=ue,(N!==C.near||B!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),N=C.near,B=C.far),C.layers.mask=K.layers.mask|6,M.layers.mask=C.layers.mask&-5,G.layers.mask=C.layers.mask&-3;const Ie=K.parent,Te=C.cameras;fe(C,Ie);for(let Fe=0;Fe<Te.length;Fe++)fe(Te[Fe],Ie);Te.length===2?de(C,M,G):C.projectionMatrix.copy(M.projectionMatrix),se(K,C,Ie)};function se(K,ae,ue){ue===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(ue.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Pc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(K){return p[K]};let Ce=null;function Pe(K,ae){if(u=ae.getViewerPose(c||a),g=ae,u!==null){const ue=u.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let Ie=!1;ue.length!==C.cameras.length&&(C.cameras.length=0,Ie=!0);for(let P=0;P<ue.length;P++){const V=ue[P];let Q=null;if(h!==null)Q=h.getViewport(V);else{const ie=d.getViewSubImage(f,V);Q=ie.viewport,P===0&&(e.setRenderTargetTextures(E,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(E))}let Z=A[P];Z===void 0&&(Z=new on,Z.layers.enable(P),Z.viewport=new wt,A[P]=Z),Z.matrix.fromArray(V.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(V.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Q.x,Q.y,Q.width,Q.height),P===0&&(C.matrix.copy(Z.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ie===!0&&C.cameras.push(Z)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const P=d.getDepthInformation(ue[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let P=0;P<ue.length;P++){const V=ue[P].camera;if(V){let Q=p[V];Q||(Q=new Vp,p[V]=Q);const Z=d.getCameraImage(V);Q.sourceTexture=Z}}}}for(let ue=0;ue<D.length;ue++){const Ie=R[ue],Te=D[ue];Ie!==null&&Te!==void 0&&Te.update(Ie,ae,c||a)}Ce&&Ce(K,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const Oe=new Wp;Oe.setAnimationLoop(Pe),this.setAnimationLoop=function(K){Ce=K},this.dispose=function(){}}}const Yi=new qn,$M=new Tt;function XM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,zp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,T,E){p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),T=y.envMap,E=y.envMapRotation;T&&(m.envMap.value=T,Yi.copy(E),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4($M.makeRotationFromEuler(Yi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jM(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const E=T.program;i.uniformBlockBinding(y,E)}function c(y,T){let E=r[y.id];E===void 0&&(g(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",m));const D=T.program;i.updateUBOMapping(y,D);const R=e.render.frame;s[y.id]!==R&&(f(y),s[y.id]=R)}function u(y){const T=d();y.__bindingPointIndex=T;const E=n.createBuffer(),D=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const T=r[y.id],E=y.uniforms,D=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let R=0,U=E.length;R<U;R++){const x=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,G=x.length;M<G;M++){const A=x[M];if(h(A,R,M,D)===!0){const C=A.__offset,N=Array.isArray(A.value)?A.value:[A.value];let B=0;for(let z=0;z<N.length;z++){const H=N[z],O=_(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,C+B,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,B),B+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,C,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,T,E,D){const R=y.value,U=T+"_"+E;if(D[U]===void 0)return typeof R=="number"||typeof R=="boolean"?D[U]=R:D[U]=R.clone(),!0;{const x=D[U];if(typeof R=="number"||typeof R=="boolean"){if(x!==R)return D[U]=R,!0}else if(x.equals(R)===!1)return x.copy(R),!0}return!1}function g(y){const T=y.uniforms;let E=0;const D=16;for(let U=0,x=T.length;U<x;U++){const M=Array.isArray(T[U])?T[U]:[T[U]];for(let G=0,A=M.length;G<A;G++){const C=M[G],N=Array.isArray(C.value)?C.value:[C.value];for(let B=0,z=N.length;B<z;B++){const H=N[B],O=_(H),ne=E%D,le=ne%O.boundary,de=ne+le;E+=le,de!==0&&D-de<O.storage&&(E+=D-de),C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=E,E+=O.storage}}}const R=E%D;return R>0&&(E+=D-R),y.__size=E,y.__cache={},this}function _(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$e("WebGLRenderer: Unsupported uniform value type.",y),T}function m(y){const T=y.target;T.removeEventListener("dispose",m);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}const qM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let On=null;function YM(){return On===null&&(On=new Dx(qM,16,16,Gr,mi),On.name="DFG_LUT",On.minFilter=qt,On.magFilter=qt,On.wrapS=ui,On.wrapT=ui,On.generateMipmaps=!1,On.needsUpdate=!0),On}class Kp{constructor(e={}){const{canvas:t=ux(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=hn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=h,m=new Set([xu,_u,vu]),p=new Set([hn,jn,Ns,Os,mu,gu]),y=new Uint32Array(4),T=new Int32Array(4);let E=null,D=null;const R=[],U=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let G=!1;this._outputColorSpace=an;let A=0,C=0,N=null,B=-1,z=null;const H=new wt,O=new wt;let ne=null;const le=new et(0);let de=0,fe=t.width,se=t.height,Ce=1,Pe=null,Oe=null;const K=new wt(0,0,fe,se),ae=new wt(0,0,fe,se);let ue=!1;const Ie=new Mu;let Te=!1,Fe=!1;const I=new Tt,P=new q,V=new wt,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function ie(){return N===null?Ce:1}let w=i;function he(S,k){return t.getContext(S,k)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${du}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",_t,!1),w===null){const k="webgl2";if(w=he(k,S),w===null)throw he(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw ot("WebGLRenderer: "+S.message),S}let ce,re,oe,b,v,L,$,ee,X,ye,me,De,Ve,pe,ve,be,Ae,we,Je,F,xe,_e,Le;function ge(){ce=new KS(w),ce.init(),xe=new zM(w,ce),re=new HS(w,ce,e,xe),oe=new BM(w,ce),re.reversedDepthBuffer&&f&&oe.buffers.depth.setReversed(!0),b=new QS(w),v=new EM,L=new VM(w,ce,oe,v,re,xe,b),$=new YS(M),ee=new ry(w),_e=new zS(w,ee),X=new ZS(w,ee,b,_e),ye=new t1(w,X,ee,_e,b),we=new e1(w,re,L),ve=new GS(v),me=new MM(M,$,ce,re,_e,ve),De=new XM(M,v),Ve=new AM,pe=new DM(ce),Ae=new VS(M,$,oe,ye,g,l),be=new FM(M,ye,re),Le=new jM(w,b,re,oe),Je=new kS(w,ce,b),F=new JS(w,ce,b),b.programs=me.programs,M.capabilities=re,M.extensions=ce,M.properties=v,M.renderLists=Ve,M.shadowMap=be,M.state=oe,M.info=b}ge(),_!==hn&&(x=new i1(_,t.width,t.height,r,s));const te=new WM(M,w);this.xr=te,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const S=ce.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ce.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(S){S!==void 0&&(Ce=S,this.setSize(fe,se,!1))},this.getSize=function(S){return S.set(fe,se)},this.setSize=function(S,k,J=!0){if(te.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=S,se=k,t.width=Math.floor(S*Ce),t.height=Math.floor(k*Ce),J===!0&&(t.style.width=S+"px",t.style.height=k+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(fe*Ce,se*Ce).floor()},this.setDrawingBufferSize=function(S,k,J){fe=S,se=k,Ce=J,t.width=Math.floor(S*J),t.height=Math.floor(k*J),this.setViewport(0,0,S,k)},this.setEffects=function(S){if(_===hn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let k=0;k<S.length;k++)if(S[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(H)},this.getViewport=function(S){return S.copy(K)},this.setViewport=function(S,k,J,Y){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,k,J,Y),oe.viewport(H.copy(K).multiplyScalar(Ce).round())},this.getScissor=function(S){return S.copy(ae)},this.setScissor=function(S,k,J,Y){S.isVector4?ae.set(S.x,S.y,S.z,S.w):ae.set(S,k,J,Y),oe.scissor(O.copy(ae).multiplyScalar(Ce).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(S){oe.setScissorTest(ue=S)},this.setOpaqueSort=function(S){Pe=S},this.setTransparentSort=function(S){Oe=S},this.getClearColor=function(S){return S.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,J=!0){let Y=0;if(S){let j=!1;if(N!==null){const Me=N.texture.format;j=m.has(Me)}if(j){const Me=N.texture.type,Re=p.has(Me),Ee=Ae.getClearColor(),Be=Ae.getClearAlpha(),ke=Ee.r,qe=Ee.g,Qe=Ee.b;Re?(y[0]=ke,y[1]=qe,y[2]=Qe,y[3]=Be,w.clearBufferuiv(w.COLOR,0,y)):(T[0]=ke,T[1]=qe,T[2]=Qe,T[3]=Be,w.clearBufferiv(w.COLOR,0,T))}else Y|=w.COLOR_BUFFER_BIT}k&&(Y|=w.DEPTH_BUFFER_BIT),J&&(Y|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&w.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",_t,!1),Ae.dispose(),Ve.dispose(),pe.dispose(),v.dispose(),$.dispose(),ye.dispose(),_e.dispose(),Le.dispose(),me.dispose(),te.dispose(),te.removeEventListener("sessionstart",Ru),te.removeEventListener("sessionend",Pu),Vi.stop()};function Ne(S){S.preventDefault(),If("WebGLRenderer: Context Lost."),G=!0}function Xe(){If("WebGLRenderer: Context Restored."),G=!1;const S=b.autoReset,k=be.enabled,J=be.autoUpdate,Y=be.needsUpdate,j=be.type;ge(),b.autoReset=S,be.enabled=k,be.autoUpdate=J,be.needsUpdate=Y,be.type=j}function _t(S){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ut(S){const k=S.target;k.removeEventListener("dispose",ut),Jn(k)}function Jn(S){Qn(S),v.remove(S)}function Qn(S){const k=v.get(S).programs;k!==void 0&&(k.forEach(function(J){me.releaseProgram(J)}),S.isShaderMaterial&&me.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,J,Y,j,Me){k===null&&(k=Q);const Re=j.isMesh&&j.matrixWorld.determinant()<0,Ee=fm(S,k,J,Y,j);oe.setMaterial(Y,Re);let Be=J.index,ke=1;if(Y.wireframe===!0){if(Be=X.getWireframeAttribute(J),Be===void 0)return;ke=2}const qe=J.drawRange,Qe=J.attributes.position;let He=qe.start*ke,ht=(qe.start+qe.count)*ke;Me!==null&&(He=Math.max(He,Me.start*ke),ht=Math.min(ht,(Me.start+Me.count)*ke)),Be!==null?(He=Math.max(He,0),ht=Math.min(ht,Be.count)):Qe!=null&&(He=Math.max(He,0),ht=Math.min(ht,Qe.count));const Ct=ht-He;if(Ct<0||Ct===1/0)return;_e.setup(j,Y,Ee,J,Be);let At,pt=Je;if(Be!==null&&(At=ee.get(Be),pt=F,pt.setIndex(At)),j.isMesh)Y.wireframe===!0?(oe.setLineWidth(Y.wireframeLinewidth*ie()),pt.setMode(w.LINES)):pt.setMode(w.TRIANGLES);else if(j.isLine){let Ht=Y.linewidth;Ht===void 0&&(Ht=1),oe.setLineWidth(Ht*ie()),j.isLineSegments?pt.setMode(w.LINES):j.isLineLoop?pt.setMode(w.LINE_LOOP):pt.setMode(w.LINE_STRIP)}else j.isPoints?pt.setMode(w.POINTS):j.isSprite&&pt.setMode(w.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ro("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))pt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ht=j._multiDrawStarts,ze=j._multiDrawCounts,un=j._multiDrawCount,rt=Be?ee.get(Be).bytesPerElement:1,En=v.get(Y).currentProgram.getUniforms();for(let Ln=0;Ln<un;Ln++)En.setValue(w,"_gl_DrawID",Ln),pt.render(Ht[Ln]/rt,ze[Ln])}else if(j.isInstancedMesh)pt.renderInstances(He,Ct,j.count);else if(J.isInstancedBufferGeometry){const Ht=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ze=Math.min(J.instanceCount,Ht);pt.renderInstances(He,Ct,ze)}else pt.render(He,Ct)};function Cu(S,k,J){S.transparent===!0&&S.side===ci&&S.forceSinglePass===!1?(S.side=tn,S.needsUpdate=!0,ia(S,k,J),S.side=Bi,S.needsUpdate=!0,ia(S,k,J),S.side=ci):ia(S,k,J)}this.compile=function(S,k,J=null){J===null&&(J=S),D=pe.get(J),D.init(k),U.push(D),J.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(D.pushLight(j),j.castShadow&&D.pushShadow(j))}),S!==J&&S.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(D.pushLight(j),j.castShadow&&D.pushShadow(j))}),D.setupLights();const Y=new Set;return S.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Me=j.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){const Ee=Me[Re];Cu(Ee,J,j),Y.add(Ee)}else Cu(Me,J,j),Y.add(Me)}),D=U.pop(),Y},this.compileAsync=function(S,k,J=null){const Y=this.compile(S,k,J);return new Promise(j=>{function Me(){if(Y.forEach(function(Re){v.get(Re).currentProgram.isReady()&&Y.delete(Re)}),Y.size===0){j(S);return}setTimeout(Me,10)}ce.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ao=null;function um(S){Ao&&Ao(S)}function Ru(){Vi.stop()}function Pu(){Vi.start()}const Vi=new Wp;Vi.setAnimationLoop(um),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(S){Ao=S,te.setAnimationLoop(S),S===null?Vi.stop():Vi.start()},te.addEventListener("sessionstart",Ru),te.addEventListener("sessionend",Pu),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;const J=te.enabled===!0&&te.isPresenting===!0,Y=x!==null&&(N===null||J)&&x.begin(M,N);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(k),k=te.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,k,N),D=pe.get(S,U.length),D.init(k),U.push(D),I.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ie.setFromProjectionMatrix(I,Gn,k.reversedDepth),Fe=this.localClippingEnabled,Te=ve.init(this.clippingPlanes,Fe),E=Ve.get(S,R.length),E.init(),R.push(E),te.enabled===!0&&te.isPresenting===!0){const Re=M.xr.getDepthSensingMesh();Re!==null&&wo(Re,k,-1/0,M.sortObjects)}wo(S,k,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(Pe,Oe),Z=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Z&&Ae.addToRenderList(E,S),this.info.render.frame++,Te===!0&&ve.beginShadows();const j=D.state.shadowsArray;if(be.render(j,S,k),Te===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&x.hasRenderPass())===!1){const Re=E.opaque,Ee=E.transmissive;if(D.setupLights(),k.isArrayCamera){const Be=k.cameras;if(Ee.length>0)for(let ke=0,qe=Be.length;ke<qe;ke++){const Qe=Be[ke];Du(Re,Ee,S,Qe)}Z&&Ae.render(S);for(let ke=0,qe=Be.length;ke<qe;ke++){const Qe=Be[ke];Iu(E,S,Qe,Qe.viewport)}}else Ee.length>0&&Du(Re,Ee,S,k),Z&&Ae.render(S),Iu(E,S,k)}N!==null&&C===0&&(L.updateMultisampleRenderTarget(N),L.updateRenderTargetMipmap(N)),Y&&x.end(M),S.isScene===!0&&S.onAfterRender(M,S,k),_e.resetDefaultState(),B=-1,z=null,U.pop(),U.length>0?(D=U[U.length-1],Te===!0&&ve.setGlobalState(M.clippingPlanes,D.state.camera)):D=null,R.pop(),R.length>0?E=R[R.length-1]:E=null};function wo(S,k,J,Y){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)J=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)D.pushLight(S),S.castShadow&&D.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ie.intersectsSprite(S)){Y&&V.setFromMatrixPosition(S.matrixWorld).applyMatrix4(I);const Re=ye.update(S),Ee=S.material;Ee.visible&&E.push(S,Re,Ee,J,V.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ie.intersectsObject(S))){const Re=ye.update(S),Ee=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),V.copy(S.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),V.copy(Re.boundingSphere.center)),V.applyMatrix4(S.matrixWorld).applyMatrix4(I)),Array.isArray(Ee)){const Be=Re.groups;for(let ke=0,qe=Be.length;ke<qe;ke++){const Qe=Be[ke],He=Ee[Qe.materialIndex];He&&He.visible&&E.push(S,Re,He,J,V.z,Qe)}}else Ee.visible&&E.push(S,Re,Ee,J,V.z,null)}}const Me=S.children;for(let Re=0,Ee=Me.length;Re<Ee;Re++)wo(Me[Re],k,J,Y)}function Iu(S,k,J,Y){const{opaque:j,transmissive:Me,transparent:Re}=S;D.setupLightsView(J),Te===!0&&ve.setGlobalState(M.clippingPlanes,J),Y&&oe.viewport(H.copy(Y)),j.length>0&&na(j,k,J),Me.length>0&&na(Me,k,J),Re.length>0&&na(Re,k,J),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Du(S,k,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[Y.id]===void 0){const He=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[Y.id]=new Xn(1,1,{generateMipmaps:!0,type:He?mi:hn,minFilter:nr,samples:Math.max(4,re.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const Me=D.state.transmissionRenderTarget[Y.id],Re=Y.viewport||H;Me.setSize(Re.z*M.transmissionResolutionScale,Re.w*M.transmissionResolutionScale);const Ee=M.getRenderTarget(),Be=M.getActiveCubeFace(),ke=M.getActiveMipmapLevel();M.setRenderTarget(Me),M.getClearColor(le),de=M.getClearAlpha(),de<1&&M.setClearColor(16777215,.5),M.clear(),Z&&Ae.render(J);const qe=M.toneMapping;M.toneMapping=$n;const Qe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),D.setupLightsView(Y),Te===!0&&ve.setGlobalState(M.clippingPlanes,Y),na(S,J,Y),L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me),ce.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let ht=0,Ct=k.length;ht<Ct;ht++){const At=k[ht],{object:pt,geometry:Ht,material:ze,group:un}=At;if(ze.side===ci&&pt.layers.test(Y.layers)){const rt=ze.side;ze.side=tn,ze.needsUpdate=!0,Lu(pt,J,Y,Ht,ze,un),ze.side=rt,ze.needsUpdate=!0,He=!0}}He===!0&&(L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me))}M.setRenderTarget(Ee,Be,ke),M.setClearColor(le,de),Qe!==void 0&&(Y.viewport=Qe),M.toneMapping=qe}function na(S,k,J){const Y=k.isScene===!0?k.overrideMaterial:null;for(let j=0,Me=S.length;j<Me;j++){const Re=S[j],{object:Ee,geometry:Be,group:ke}=Re;let qe=Re.material;qe.allowOverride===!0&&Y!==null&&(qe=Y),Ee.layers.test(J.layers)&&Lu(Ee,k,J,Be,qe,ke)}}function Lu(S,k,J,Y,j,Me){S.onBeforeRender(M,k,J,Y,j,Me),S.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),j.onBeforeRender(M,k,J,Y,S,Me),j.transparent===!0&&j.side===ci&&j.forceSinglePass===!1?(j.side=tn,j.needsUpdate=!0,M.renderBufferDirect(J,k,Y,j,S,Me),j.side=Bi,j.needsUpdate=!0,M.renderBufferDirect(J,k,Y,j,S,Me),j.side=ci):M.renderBufferDirect(J,k,Y,j,S,Me),S.onAfterRender(M,k,J,Y,j,Me)}function ia(S,k,J){k.isScene!==!0&&(k=Q);const Y=v.get(S),j=D.state.lights,Me=D.state.shadowsArray,Re=j.state.version,Ee=me.getParameters(S,j.state,Me,k,J),Be=me.getProgramCacheKey(Ee);let ke=Y.programs;Y.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;const qe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;Y.envMap=$.get(S.envMap||Y.environment,qe),Y.envMapRotation=Y.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,ke===void 0&&(S.addEventListener("dispose",ut),ke=new Map,Y.programs=ke);let Qe=ke.get(Be);if(Qe!==void 0){if(Y.currentProgram===Qe&&Y.lightsStateVersion===Re)return Nu(S,Ee),Qe}else Ee.uniforms=me.getUniforms(S),S.onBeforeCompile(Ee,M),Qe=me.acquireProgram(Ee,Be),ke.set(Be,Qe),Y.uniforms=Ee.uniforms;const He=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=ve.uniform),Nu(S,Ee),Y.needsLights=hm(S),Y.lightsStateVersion=Re,Y.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),Y.currentProgram=Qe,Y.uniformsList=null,Qe}function Uu(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=$a.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function Nu(S,k){const J=v.get(S);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function fm(S,k,J,Y,j){k.isScene!==!0&&(k=Q),L.resetTextureUnits();const Me=k.fog,Re=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,Ee=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Wr,Be=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,ke=$.get(Y.envMap||Re,Be),qe=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),He=!!J.morphAttributes.position,ht=!!J.morphAttributes.normal,Ct=!!J.morphAttributes.color;let At=$n;Y.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(At=M.toneMapping);const pt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ht=pt!==void 0?pt.length:0,ze=v.get(Y),un=D.state.lights;if(Te===!0&&(Fe===!0||S!==z)){const Lt=S===z&&Y.id===B;ve.setState(Y,S,Lt)}let rt=!1;Y.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==un.state.version||ze.outputColorSpace!==Ee||j.isBatchedMesh&&ze.batching===!1||!j.isBatchedMesh&&ze.batching===!0||j.isBatchedMesh&&ze.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ze.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ze.instancing===!1||!j.isInstancedMesh&&ze.instancing===!0||j.isSkinnedMesh&&ze.skinning===!1||!j.isSkinnedMesh&&ze.skinning===!0||j.isInstancedMesh&&ze.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ze.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ze.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ze.instancingMorph===!1&&j.morphTexture!==null||ze.envMap!==ke||Y.fog===!0&&ze.fog!==Me||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ve.numPlanes||ze.numIntersection!==ve.numIntersection)||ze.vertexAlphas!==qe||ze.vertexTangents!==Qe||ze.morphTargets!==He||ze.morphNormals!==ht||ze.morphColors!==Ct||ze.toneMapping!==At||ze.morphTargetsCount!==Ht)&&(rt=!0):(rt=!0,ze.__version=Y.version);let En=ze.currentProgram;rt===!0&&(En=ia(Y,k,j));let Ln=!1,zi=!1,fr=!1;const mt=En.getUniforms(),Ft=ze.uniforms;if(oe.useProgram(En.program)&&(Ln=!0,zi=!0,fr=!0),Y.id!==B&&(B=Y.id,zi=!0),Ln||z!==S){oe.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),mt.setValue(w,"projectionMatrix",S.projectionMatrix),mt.setValue(w,"viewMatrix",S.matrixWorldInverse);const yi=mt.map.cameraPosition;yi!==void 0&&yi.setValue(w,P.setFromMatrixPosition(S.matrixWorld)),re.logarithmicDepthBuffer&&mt.setValue(w,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&mt.setValue(w,"isOrthographic",S.isOrthographicCamera===!0),z!==S&&(z=S,zi=!0,fr=!0)}if(ze.needsLights&&(un.state.directionalShadowMap.length>0&&mt.setValue(w,"directionalShadowMap",un.state.directionalShadowMap,L),un.state.spotShadowMap.length>0&&mt.setValue(w,"spotShadowMap",un.state.spotShadowMap,L),un.state.pointShadowMap.length>0&&mt.setValue(w,"pointShadowMap",un.state.pointShadowMap,L)),j.isSkinnedMesh){mt.setOptional(w,j,"bindMatrix"),mt.setOptional(w,j,"bindMatrixInverse");const Lt=j.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),mt.setValue(w,"boneTexture",Lt.boneTexture,L))}j.isBatchedMesh&&(mt.setOptional(w,j,"batchingTexture"),mt.setValue(w,"batchingTexture",j._matricesTexture,L),mt.setOptional(w,j,"batchingIdTexture"),mt.setValue(w,"batchingIdTexture",j._indirectTexture,L),mt.setOptional(w,j,"batchingColorTexture"),j._colorsTexture!==null&&mt.setValue(w,"batchingColorTexture",j._colorsTexture,L));const xi=J.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&we.update(j,J,En),(zi||ze.receiveShadow!==j.receiveShadow)&&(ze.receiveShadow=j.receiveShadow,mt.setValue(w,"receiveShadow",j.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(Ft.envMapIntensity.value=k.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=YM()),zi&&(mt.setValue(w,"toneMappingExposure",M.toneMappingExposure),ze.needsLights&&dm(Ft,fr),Me&&Y.fog===!0&&De.refreshFogUniforms(Ft,Me),De.refreshMaterialUniforms(Ft,Y,Ce,se,D.state.transmissionRenderTarget[S.id]),$a.upload(w,Uu(ze),Ft,L)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&($a.upload(w,Uu(ze),Ft,L),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&mt.setValue(w,"center",j.center),mt.setValue(w,"modelViewMatrix",j.modelViewMatrix),mt.setValue(w,"normalMatrix",j.normalMatrix),mt.setValue(w,"modelMatrix",j.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Lt=Y.uniformsGroups;for(let yi=0,dr=Lt.length;yi<dr;yi++){const Ou=Lt[yi];Le.update(Ou,En),Le.bind(Ou,En)}}return En}function dm(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function hm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(S,k,J){const Y=v.get(S);Y.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),v.get(S.texture).__webglTexture=k,v.get(S.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:J,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,k){const J=v.get(S);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0};const pm=w.createFramebuffer();this.setRenderTarget=function(S,k=0,J=0){N=S,A=k,C=J;let Y=null,j=!1,Me=!1;if(S){const Ee=v.get(S);if(Ee.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(w.FRAMEBUFFER,Ee.__webglFramebuffer),H.copy(S.viewport),O.copy(S.scissor),ne=S.scissorTest,oe.viewport(H),oe.scissor(O),oe.setScissorTest(ne),B=-1;return}else if(Ee.__webglFramebuffer===void 0)L.setupRenderTarget(S);else if(Ee.__hasExternalTextures)L.rebindTextures(S,v.get(S.texture).__webglTexture,v.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const qe=S.depthTexture;if(Ee.__boundDepthTexture!==qe){if(qe!==null&&v.has(qe)&&(S.width!==qe.image.width||S.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(S)}}const Be=S.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Me=!0);const ke=v.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[k])?Y=ke[k][J]:Y=ke[k],j=!0):S.samples>0&&L.useMultisampledRTT(S)===!1?Y=v.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?Y=ke[J]:Y=ke,H.copy(S.viewport),O.copy(S.scissor),ne=S.scissorTest}else H.copy(K).multiplyScalar(Ce).floor(),O.copy(ae).multiplyScalar(Ce).floor(),ne=ue;if(J!==0&&(Y=pm),oe.bindFramebuffer(w.FRAMEBUFFER,Y)&&oe.drawBuffers(S,Y),oe.viewport(H),oe.scissor(O),oe.setScissorTest(ne),j){const Ee=v.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ee.__webglTexture,J)}else if(Me){const Ee=k;for(let Be=0;Be<S.textures.length;Be++){const ke=v.get(S.textures[Be]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Be,ke.__webglTexture,J,Ee)}}else if(S!==null&&J!==0){const Ee=v.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ee.__webglTexture,J)}B=-1},this.readRenderTargetPixels=function(S,k,J,Y,j,Me,Re,Ee=0){if(!(S&&S.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=v.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(Be=Be[Re]),Be){oe.bindFramebuffer(w.FRAMEBUFFER,Be);try{const ke=S.textures[Ee],qe=ke.format,Qe=ke.type;if(S.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Ee),!re.textureFormatReadable(qe)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Qe)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-Y&&J>=0&&J<=S.height-j&&w.readPixels(k,J,Y,j,xe.convert(qe),xe.convert(Qe),Me)}finally{const ke=N!==null?v.get(N).__webglFramebuffer:null;oe.bindFramebuffer(w.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(S,k,J,Y,j,Me,Re,Ee=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=v.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(Be=Be[Re]),Be)if(k>=0&&k<=S.width-Y&&J>=0&&J<=S.height-j){oe.bindFramebuffer(w.FRAMEBUFFER,Be);const ke=S.textures[Ee],qe=ke.format,Qe=ke.type;if(S.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Ee),!re.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,He),w.bufferData(w.PIXEL_PACK_BUFFER,Me.byteLength,w.STREAM_READ),w.readPixels(k,J,Y,j,xe.convert(qe),xe.convert(Qe),0);const ht=N!==null?v.get(N).__webglFramebuffer:null;oe.bindFramebuffer(w.FRAMEBUFFER,ht);const Ct=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await fx(w,Ct,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,He),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Me),w.deleteBuffer(He),w.deleteSync(Ct),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,k=null,J=0){const Y=Math.pow(2,-J),j=Math.floor(S.image.width*Y),Me=Math.floor(S.image.height*Y),Re=k!==null?k.x:0,Ee=k!==null?k.y:0;L.setTexture2D(S,0),w.copyTexSubImage2D(w.TEXTURE_2D,J,0,0,Re,Ee,j,Me),oe.unbindTexture()};const mm=w.createFramebuffer(),gm=w.createFramebuffer();this.copyTextureToTexture=function(S,k,J=null,Y=null,j=0,Me=0){let Re,Ee,Be,ke,qe,Qe,He,ht,Ct;const At=S.isCompressedTexture?S.mipmaps[Me]:S.image;if(J!==null)Re=J.max.x-J.min.x,Ee=J.max.y-J.min.y,Be=J.isBox3?J.max.z-J.min.z:1,ke=J.min.x,qe=J.min.y,Qe=J.isBox3?J.min.z:0;else{const Ft=Math.pow(2,-j);Re=Math.floor(At.width*Ft),Ee=Math.floor(At.height*Ft),S.isDataArrayTexture?Be=At.depth:S.isData3DTexture?Be=Math.floor(At.depth*Ft):Be=1,ke=0,qe=0,Qe=0}Y!==null?(He=Y.x,ht=Y.y,Ct=Y.z):(He=0,ht=0,Ct=0);const pt=xe.convert(k.format),Ht=xe.convert(k.type);let ze;k.isData3DTexture?(L.setTexture3D(k,0),ze=w.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(L.setTexture2DArray(k,0),ze=w.TEXTURE_2D_ARRAY):(L.setTexture2D(k,0),ze=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,k.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,k.unpackAlignment);const un=w.getParameter(w.UNPACK_ROW_LENGTH),rt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),En=w.getParameter(w.UNPACK_SKIP_PIXELS),Ln=w.getParameter(w.UNPACK_SKIP_ROWS),zi=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,At.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,At.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ke),w.pixelStorei(w.UNPACK_SKIP_ROWS,qe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Qe);const fr=S.isDataArrayTexture||S.isData3DTexture,mt=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){const Ft=v.get(S),xi=v.get(k),Lt=v.get(Ft.__renderTarget),yi=v.get(xi.__renderTarget);oe.bindFramebuffer(w.READ_FRAMEBUFFER,Lt.__webglFramebuffer),oe.bindFramebuffer(w.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let dr=0;dr<Be;dr++)fr&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,v.get(S).__webglTexture,j,Qe+dr),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,v.get(k).__webglTexture,Me,Ct+dr)),w.blitFramebuffer(ke,qe,Re,Ee,He,ht,Re,Ee,w.DEPTH_BUFFER_BIT,w.NEAREST);oe.bindFramebuffer(w.READ_FRAMEBUFFER,null),oe.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(j!==0||S.isRenderTargetTexture||v.has(S)){const Ft=v.get(S),xi=v.get(k);oe.bindFramebuffer(w.READ_FRAMEBUFFER,mm),oe.bindFramebuffer(w.DRAW_FRAMEBUFFER,gm);for(let Lt=0;Lt<Be;Lt++)fr?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ft.__webglTexture,j,Qe+Lt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ft.__webglTexture,j),mt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,xi.__webglTexture,Me,Ct+Lt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,xi.__webglTexture,Me),j!==0?w.blitFramebuffer(ke,qe,Re,Ee,He,ht,Re,Ee,w.COLOR_BUFFER_BIT,w.NEAREST):mt?w.copyTexSubImage3D(ze,Me,He,ht,Ct+Lt,ke,qe,Re,Ee):w.copyTexSubImage2D(ze,Me,He,ht,ke,qe,Re,Ee);oe.bindFramebuffer(w.READ_FRAMEBUFFER,null),oe.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else mt?S.isDataTexture||S.isData3DTexture?w.texSubImage3D(ze,Me,He,ht,Ct,Re,Ee,Be,pt,Ht,At.data):k.isCompressedArrayTexture?w.compressedTexSubImage3D(ze,Me,He,ht,Ct,Re,Ee,Be,pt,At.data):w.texSubImage3D(ze,Me,He,ht,Ct,Re,Ee,Be,pt,Ht,At):S.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Me,He,ht,Re,Ee,pt,Ht,At.data):S.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Me,He,ht,At.width,At.height,pt,At.data):w.texSubImage2D(w.TEXTURE_2D,Me,He,ht,Re,Ee,pt,Ht,At);w.pixelStorei(w.UNPACK_ROW_LENGTH,un),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,rt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,En),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ln),w.pixelStorei(w.UNPACK_SKIP_IMAGES,zi),Me===0&&k.generateMipmaps&&w.generateMipmap(ze),oe.unbindTexture()},this.initRenderTarget=function(S){v.get(S).__webglFramebuffer===void 0&&L.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?L.setTextureCube(S,0):S.isData3DTexture?L.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?L.setTexture2DArray(S,0):L.setTexture2D(S,0),oe.unbindTexture()},this.resetState=function(){A=0,C=0,N=null,oe.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const KM={class:"experience-container"},ZM={__name:"NeuralBackground",setup(n){const e=ln(null),t=ln(null),i=Xr({x:0,y:0,targetX:0,targetY:0});let r,s,a,o,l,c;const u=()=>{r=new Lp,s=new on(60,window.innerWidth/window.innerHeight,1,1e3),s.position.z=1,s.rotation.x=Math.PI/2,a=new Kp({antialias:!0,alpha:!0}),a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.value.appendChild(a.domElement),l=new cn;const g=[];for(let p=0;p<6e3;p++)g.push(Math.random()*600-300,Math.random()*600-300,Math.random()*600-300);l.setAttribute("position",new Kt(g,3));let _=new Kx().load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/sprites/disc.png"),m=new Eu({color:16111426,size:.9,map:_,transparent:!0,blending:tr,depthWrite:!1});o=new Fp(l,m),r.add(o),d()},d=()=>{c=requestAnimationFrame(d),o.rotation.y+=.001;const g=(i.y/window.innerHeight-.5)*.2,_=(i.x/window.innerWidth-.5)*.2;r.rotation.x+=(g-r.rotation.x)*.05,r.rotation.y+=(_-r.rotation.y)*.05;const m=l.attributes.position.array;for(let p=1;p<m.length;p+=3)m[p]-=.2,m[p]<-200&&(m[p]=200);l.attributes.position.needsUpdate=!0,a.render(r,s)},f=g=>{i.x=g.clientX,i.y=g.clientY},h=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)};return ur(()=>{u(),window.addEventListener("mousemove",f),window.addEventListener("resize",h)}),vo(()=>{cancelAnimationFrame(c),window.removeEventListener("mousemove",f),window.removeEventListener("resize",h),window.removeEventListener("mousedown",playInteractionSound),a&&a.dispose()}),(g,_)=>(Ue(),Ge("div",KM,[_[1]||(_[1]=W("div",{class:"vignette"},null,-1)),W("div",{ref_key:"container3d",ref:e,class:"canvas-3d"},null,512),W("div",{ref_key:"cursor",ref:t,class:"custom-cursor",style:ar({transform:`translate3d(${i.x}px, ${i.y}px, 0)`})},_[0]||(_[0]=[W("div",{class:"cursor-inner"},null,-1)]),4)]))}},JM=Zn(ZM,[["__scopeId","data-v-b48a370a"]]),QM={key:0,class:"planet-loader"},eE={class:"loader-ui"},tE={class:"progress-shell"},nE={class:"progress-track"},iE={class:"progress-meta"},rE={class:"loading-text"},sE={__name:"LoaderBg",props:{duration:{type:Number,default:2600},autoStart:{type:Boolean,default:!0}},emits:["complete"],setup(n,{emit:e}){const t=n,i=e,r=ln(null),s=ln(!0),a=ln(0),o=Xr({x:window.innerWidth*.5,y:window.innerHeight*.5,tx:window.innerWidth*.5,ty:window.innerHeight*.5,nx:0,ny:0});let l,c,u,d,f=0,h=0,g=0,_,m,p,y,T,E,D,R,U;const x=["Initializing visual system","Warming up shaders","Synchronizing experience","Entering portfolio"],M=Ls(()=>a.value<28?x[0]:a.value<56?x[1]:a.value<82?x[2]:x[3]),G=(de,fe,se)=>de+(fe-de)*se,A=de=>1-Math.pow(1-de,3),C=()=>{const fe=document.createElement("canvas");fe.width=1024,fe.height=1024;const se=fe.getContext("2d"),Ce=se.createRadialGradient(1024*.35,1024*.3,1024*.08,1024*.5,1024*.5,1024*.55);Ce.addColorStop(0,"#fff2a8"),Ce.addColorStop(.2,"#f8d66d"),Ce.addColorStop(.45,"#f5d742"),Ce.addColorStop(.72,"#d4af37"),Ce.addColorStop(1,"#533707"),se.fillStyle=Ce,se.fillRect(0,0,1024,1024);for(let Oe=0;Oe<90;Oe++){const K=Math.random()*1024,ae=Math.random()*1024,ue=30+Math.random()*140,Ie=.03+Math.random()*.06,Te=se.createRadialGradient(K,ae,0,K,ae,ue);Te.addColorStop(0,`rgba(255,223,0,${Ie})`),Te.addColorStop(.45,`rgba(231,154,11,${Ie*.9})`),Te.addColorStop(1,"rgba(0,0,0,0)"),se.fillStyle=Te,se.beginPath(),se.arc(K,ae,ue,0,Math.PI*2),se.fill()}for(let Oe=0;Oe<22;Oe++)se.save(),se.translate(1024*.5,1024*.5),se.rotate(Math.PI*2*Oe/22+Math.random()*.15),se.fillStyle=`rgba(255, 250, 210, ${.022+Math.random()*.03})`,se.fillRect(-1024*.5,-18+Math.random()*36,1024,18+Math.random()*44),se.restore();const Pe=new Ox(fe);return Pe.colorSpace=an,Pe},N=()=>{var P;l=new Lp,d=new ny,c=new on(42,window.innerWidth/window.innerHeight,.1,100),c.position.set(0,0,8.5),u=new Kp({antialias:!0,alpha:!0,powerPreference:"high-performance"}),u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),u.outputColorSpace=an,u.toneMapping=hu,u.toneMappingExposure=1.1,(P=r.value)==null||P.appendChild(u.domElement),U=new Qx("#fff1cc",.8),l.add(U),D=new Qf("#f5d742",20,40,1.8),D.position.set(2.4,1.2,6),l.add(D),R=new Qf("#ffffff",7,50,2),R.position.set(-7,-2,8),l.add(R),_=new ds;const de=new so(1.8,128,128),fe=C(),se=new Wx({map:fe,roughness:.5,metalness:.25,clearcoat:.35,clearcoatRoughness:.2,emissive:new et("#e79a0b"),emissiveIntensity:.15,sheen:.4,sheenColor:new et("#fff2a8")});m=new gn(de,se),_.add(m);const Ce=new so(2.08,64,64),Pe=new Ss({color:"#ffdf00",transparent:!0,opacity:.08,blending:tr,side:tn});p=new gn(Ce,Pe),_.add(p);const Oe=new ao(2.65,.07,20,220),K=new Ss({color:"#f8d66d",transparent:!0,opacity:.78,blending:tr});y=new gn(Oe,K),y.rotation.x=1.15,y.rotation.y=.38,_.add(y);const ae=new ao(3.12,.016,10,220),ue=new Ss({color:"#ffffff",transparent:!0,opacity:.22,blending:tr}),Ie=new gn(ae,ue);Ie.rotation.x=1.15,Ie.rotation.y=.38,_.add(Ie),l.add(_);const Te=1800;E=new cn;const Fe=new Float32Array(Te*3);for(let V=0;V<Te;V++){const Q=V*3;Fe[Q]=(Math.random()-.5)*28,Fe[Q+1]=(Math.random()-.5)*18,Fe[Q+2]=(Math.random()-.5)*18}E.setAttribute("position",new In(Fe,3));const I=new Eu({color:"#f5d742",size:.026,transparent:!0,opacity:.85,depthWrite:!1,blending:tr});T=new Fp(E,I),l.add(T)},B=de=>{const fe=E.attributes.position.array;for(let se=0;se<fe.length;se+=3)fe[se+1]+=Math.sin(de*.4+se)*.0012,fe[se]+=Math.cos(de*.25+se)*7e-4,fe[se+1]>9&&(fe[se+1]=-9);E.attributes.position.needsUpdate=!0},z=()=>{f=requestAnimationFrame(z);const de=d.getElapsedTime(),fe=performance.now()-h,se=Math.min(fe/t.duration,1);a.value=A(se)*100,o.tx=G(o.tx,o.x,.06),o.ty=G(o.ty,o.y,.06),o.nx=o.tx/window.innerWidth*2-1,o.ny=-(o.ty/window.innerHeight*2-1),_&&(_.rotation.y+=.0032,_.rotation.x=G(_.rotation.x,o.ny*.18,.04),_.rotation.z=G(_.rotation.z,-o.nx*.12,.04),_.position.x=G(_.position.x,o.nx*.45,.04),_.position.y=G(_.position.y,o.ny*.28,.04),_.scale.setScalar(1+Math.sin(de*1.8)*.015)),m&&(m.rotation.y+=.0016),p&&(p.scale.setScalar(1.02+Math.sin(de*1.5)*.015),p.material.opacity=.07+Math.sin(de*2.4)*.015),y&&(y.rotation.z+=.0045),T&&(T.rotation.y+=8e-4,T.rotation.x=G(T.rotation.x,o.ny*.05,.03)),D.intensity=18+Math.sin(de*2.2)*3,D.position.x=2.2+Math.sin(de*.7)*.6,D.position.y=1+Math.cos(de*.9)*.5,c.position.x=G(c.position.x,o.nx*.18,.03),c.position.y=G(c.position.y,o.ny*.12,.03),c.lookAt(0,0,0),B(de),u.render(l,c),se>=1&&!g&&(g=window.setTimeout(()=>{s.value=!1,window.setTimeout(()=>i("complete"),700)},280))},H=()=>{!c||!u||(c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,1.8)))},O=de=>{o.x=de.clientX,o.y=de.clientY},ne=()=>{var fe,se,Ce;f&&cancelAnimationFrame(f),g&&window.clearTimeout(g),E&&E.dispose();const de=Pe=>{var Oe;if(Pe){if(Array.isArray(Pe)){Pe.forEach(K=>{var ae;return(ae=K==null?void 0:K.dispose)==null?void 0:ae.call(K)});return}(Oe=Pe.dispose)==null||Oe.call(Pe)}};[m,p,y].forEach(Pe=>{var Oe,K;(K=(Oe=Pe==null?void 0:Pe.geometry)==null?void 0:Oe.dispose)==null||K.call(Oe),de(Pe==null?void 0:Pe.material)}),(fe=_==null?void 0:_.children)==null||fe.forEach(Pe=>{var Oe,K;(K=(Oe=Pe==null?void 0:Pe.geometry)==null?void 0:Oe.dispose)==null||K.call(Oe),de(Pe==null?void 0:Pe.material)}),u&&(u.dispose(),(se=u.forceContextLoss)==null||se.call(u),(Ce=u.domElement)!=null&&Ce.parentNode&&u.domElement.parentNode.removeChild(u.domElement))},le=()=>{h=performance.now(),N(),z()};return ys(()=>t.autoStart,de=>{de&&s.value&&!u&&le()},{immediate:!0}),ur(()=>{window.addEventListener("resize",H),window.addEventListener("pointermove",O,{passive:!0})}),vo(()=>{window.removeEventListener("resize",H),window.removeEventListener("pointermove",O),ne()}),(de,fe)=>(Ue(),mn(v0,{name:"loader-fade"},{default:Ja(()=>[s.value?(Ue(),Ge("div",QM,[W("div",{ref_key:"canvasWrap",ref:r,class:"planet-canvas"},null,512),fe[3]||(fe[3]=W("div",{class:"loader-overlay"},null,-1)),fe[4]||(fe[4]=W("div",{class:"scanlines"},null,-1)),fe[5]||(fe[5]=W("div",{class:"noise"},null,-1)),W("div",eE,[fe[1]||(fe[1]=W("div",{class:"brand-wrap"},[W("div",{class:"brand-line"}),W("h1",{class:"brand"},"DVRKLEX"),W("div",{class:"brand-line"})],-1)),fe[2]||(fe[2]=W("p",{class:"subtitle"},"Creative Developer · Building immersive experiences",-1)),W("div",tE,[W("div",nE,[W("div",{class:"progress-fill",style:ar({width:`${a.value}%`})},null,4),W("div",{class:"progress-glow",style:ar({width:`${a.value}%`})},null,4)]),W("div",iE,[fe[0]||(fe[0]=W("span",null,"Loading interface",-1)),W("span",null,yt(Math.round(a.value))+"%",1)])]),W("p",rE,yt(M.value),1)])])):bn("",!0)]),_:1}))}},aE=Zn(sE,[["__scopeId","data-v-8239ce57"]]),oE={key:0,class:"loader-screen"},lE={key:1,id:"app app-content"},cE={__name:"App",setup(n){const e=ln(!0);return ur(()=>{setTimeout(()=>{e.value=!1},2600)}),(t,i)=>(Ue(),Ge(vt,null,[dt(JM),W("div",null,[e.value?(Ue(),Ge("div",oE,[dt(aE)])):(Ue(),Ge("div",lE,[dt(J0),dt(cv),W("main",null,[dt(dv),dt(yv),dt(Rv),dt(Vv),dt(P_),dt(Kv)])]))])],64))}};function bl(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=Au(n))||e){t&&(n=t);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,a=!1,o;return{s:function(){t=t.call(n)},n:function(){var c=t.next();return s=c.done,c},e:function(c){a=!0,o=c},f:function(){try{!s&&t.return!=null&&t.return()}finally{if(a)throw o}}}}function uE(n){return hE(n)||dE(n)||Au(n)||fE()}function fE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dE(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function hE(n){if(Array.isArray(n))return Uc(n)}function Ms(n){"@babel/helpers - typeof";return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ms(n)}function Sl(n,e){return gE(n)||mE(n,e)||Au(n,e)||pE()}function pE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Au(n,e){if(n){if(typeof n=="string")return Uc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Uc(n,e)}}function Uc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function mE(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,a,o=[],l=!0,c=!1;try{if(s=(t=t.call(n)).next,e!==0)for(;!(l=(i=s.call(t)).done)&&(o.push(i.value),o.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return o}}function gE(n){if(Array.isArray(n))return n}var Pt={innerWidth:function(e){if(e){var t=e.offsetWidth,i=getComputedStyle(e);return t+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}return 0},width:function(e){if(e){var t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}return 0},getWindowScrollTop:function(){var e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)},getWindowScrollLeft:function(){var e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)},getOuterWidth:function(e,t){if(e){var i=e.offsetWidth;if(t){var r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}return 0},getOuterHeight:function(e,t){if(e){var i=e.offsetHeight;if(t){var r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}return 0},getClientHeight:function(e,t){if(e){var i=e.clientHeight;if(t){var r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}return 0},getViewport:function(){var e=window,t=document,i=t.documentElement,r=t.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,a=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:a}},getOffset:function(e){if(e){var t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}},index:function(e){if(e)for(var t,i=(t=this.getParentNode(e))===null||t===void 0?void 0:t.childNodes,r=0,s=0;s<i.length;s++){if(i[s]===e)return r;i[s].nodeType===1&&r++}return-1},addMultipleClasses:function(e,t){var i=this;e&&t&&[t].flat().filter(Boolean).forEach(function(r){return r.split(" ").forEach(function(s){return i.addClass(e,s)})})},removeMultipleClasses:function(e,t){var i=this;e&&t&&[t].flat().filter(Boolean).forEach(function(r){return r.split(" ").forEach(function(s){return i.removeClass(e,s)})})},addClass:function(e,t){e&&t&&!this.hasClass(e,t)&&(e.classList?e.classList.add(t):e.className+=" "+t)},removeClass:function(e,t){e&&t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function(e,t){return e?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1},addStyles:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e&&Object.entries(t).forEach(function(i){var r=Sl(i,2),s=r[0],a=r[1];return e.style[s]=a})},find:function(e,t){return this.isElement(e)?e.querySelectorAll(t):[]},findSingle:function(e,t){return this.isElement(e)?e.querySelector(t):null},createElement:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e){var i=document.createElement(e);this.setAttributes(i,t);for(var r=arguments.length,s=new Array(r>2?r-2:0),a=2;a<r;a++)s[a-2]=arguments[a];return i.append.apply(i,s),i}},setAttribute:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0;this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(t,i)},setAttributes:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.isElement(e)){var r=function s(a,o){var l,c,u=e!=null&&(l=e.$attrs)!==null&&l!==void 0&&l[a]?[e==null||(c=e.$attrs)===null||c===void 0?void 0:c[a]]:[];return[o].flat().reduce(function(d,f){if(f!=null){var h=Ms(f);if(h==="string"||h==="number")d.push(f);else if(h==="object"){var g=Array.isArray(f)?s(a,f):Object.entries(f).map(function(_){var m=Sl(_,2),p=m[0],y=m[1];return a==="style"&&(y||y===0)?"".concat(p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(y):y?p:void 0});d=g.length?d.concat(g.filter(function(_){return!!_})):d}}return d},u)};Object.entries(i).forEach(function(s){var a=Sl(s,2),o=a[0],l=a[1];if(l!=null){var c=o.match(/^on(.+)/);c?e.addEventListener(c[1].toLowerCase(),l):o==="p-bind"?t.setAttributes(e,l):(l=o==="class"?uE(new Set(r("class",l))).join(" ").trim():o==="style"?r("style",l).join(";").trim():l,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=l),e.setAttribute(o,l))}})}},getAttribute:function(e,t){if(this.isElement(e)){var i=e.getAttribute(t);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}},isAttributeEquals:function(e,t,i){return this.isElement(e)?this.getAttribute(e,t)===i:!1},isAttributeNotEquals:function(e,t,i){return!this.isAttributeEquals(e,t,i)},getHeight:function(e){if(e){var t=e.offsetHeight,i=getComputedStyle(e);return t-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),t}return 0},getWidth:function(e){if(e){var t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),t}return 0},absolutePosition:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(e){var r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,o=t.offsetHeight,l=t.offsetWidth,c=t.getBoundingClientRect(),u=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),f=this.getViewport(),h,g,_="top";c.top+o+s>f.height?(h=c.top+u-s,_="bottom",h<0&&(h=u)):h=o+c.top+u,c.left+a>f.width?g=Math.max(0,c.left+d+l-a):g=c.left+d,e.style.top=h+"px",e.style.left=g+"px",e.style.transformOrigin=_,i&&(e.style.marginTop=_==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}},relativePosition:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(e){var r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=t.offsetHeight,a=t.getBoundingClientRect(),o=this.getViewport(),l,c,u="top";a.top+s+r.height>o.height?(l=-1*r.height,u="bottom",a.top+l<0&&(l=-1*a.top)):l=s,r.width>o.width?c=a.left*-1:a.left+r.width>o.width?c=(a.left+r.width-o.width)*-1:c=0,e.style.top=l+"px",e.style.left=c+"px",e.style.transformOrigin=u,i&&(e.style.marginTop=u==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}},nestedPosition:function(e,t){if(e){var i=e.parentElement,r=this.getOffset(i),s=this.getViewport(),a=e.offsetParent?e.offsetWidth:this.getHiddenElementOuterWidth(e),o=this.getOuterWidth(i.children[0]),l;parseInt(r.left,10)+o+a>s.width-this.calculateScrollbarWidth()?parseInt(r.left,10)<a?t%2===1?l=parseInt(r.left,10)?"-"+parseInt(r.left,10)+"px":"100%":t%2===0&&(l=s.width-a-this.calculateScrollbarWidth()+"px"):l="-100%":l="100%",e.style.top="0px",e.style.left=l}},getParentNode:function(e){var t=e==null?void 0:e.parentNode;return t&&t instanceof ShadowRoot&&t.host&&(t=t.host),t},getParents:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],i=this.getParentNode(e);return i===null?t:this.getParents(i,t.concat([i]))},getScrollableParents:function(e){var t=[];if(e){var i=this.getParents(e),r=/(auto|scroll)/,s=function(m){try{var p=window.getComputedStyle(m,null);return r.test(p.getPropertyValue("overflow"))||r.test(p.getPropertyValue("overflowX"))||r.test(p.getPropertyValue("overflowY"))}catch{return!1}},a=bl(i),o;try{for(a.s();!(o=a.n()).done;){var l=o.value,c=l.nodeType===1&&l.dataset.scrollselectors;if(c){var u=c.split(","),d=bl(u),f;try{for(d.s();!(f=d.n()).done;){var h=f.value,g=this.findSingle(l,h);g&&s(g)&&t.push(g)}}catch(_){d.e(_)}finally{d.f()}}l.nodeType!==9&&s(l)&&t.push(l)}}catch(_){a.e(_)}finally{a.f()}}return t},getHiddenElementOuterHeight:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t}return 0},getHiddenElementOuterWidth:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t}return 0},getHiddenElementDimensions:function(e){if(e){var t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t}return 0},fadeIn:function(e,t){if(e){e.style.opacity=0;var i=+new Date,r=0,s=function a(){r=+e.style.opacity+(new Date().getTime()-i)/t,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16))};s()}},fadeOut:function(e,t){if(e)var i=1,r=50,s=t,a=r/s,o=setInterval(function(){i-=a,i<=0&&(i=0,clearInterval(o)),e.style.opacity=i},r)},getUserAgent:function(){return navigator.userAgent},appendChild:function(e,t){if(this.isElement(t))t.appendChild(e);else if(t.el&&t.elElement)t.elElement.appendChild(e);else throw new Error("Cannot append "+t+" to "+e)},isElement:function(e){return(typeof HTMLElement>"u"?"undefined":Ms(HTMLElement))==="object"?e instanceof HTMLElement:e&&Ms(e)==="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"},scrollInView:function(e,t){var i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,o=e.getBoundingClientRect(),l=t.getBoundingClientRect(),c=l.top+document.body.scrollTop-(o.top+document.body.scrollTop)-r-a,u=e.scrollTop,d=e.clientHeight,f=this.getOuterHeight(t);c<0?e.scrollTop=u+c:c+f>d&&(e.scrollTop=u+c-d+f)},clearSelection:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},getSelection:function(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null},calculateScrollbarWidth:function(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var e=document.createElement("div");this.addStyles(e,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t},calculateBodyScrollbarWidth:function(){return window.innerWidth-document.documentElement.offsetWidth},getBrowser:function(){if(!this.browser){var e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent:function(){var e=navigator.userAgent.toLowerCase(),t=/(chrome)[ ]([\w.]+)/.exec(e)||/(webkit)[ ]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},isVisible:function(e){return e&&e.offsetParent!=null},invokeElementMethod:function(e,t,i){e[t].apply(e,i)},isExist:function(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&this.getParentNode(e))},isClient:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},focus:function(e,t){e&&document.activeElement!==e&&e.focus(t)},isFocusableElement:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.isElement(e)?e.matches('button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(t,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t)):!1},getFocusableElements:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=this.find(e,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(t,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t)),r=[],s=bl(i),a;try{for(s.s();!(a=s.n()).done;){var o=a.value;getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&r.push(o)}}catch(l){s.e(l)}finally{s.f()}return r},getFirstFocusableElement:function(e,t){var i=this.getFocusableElements(e,t);return i.length>0?i[0]:null},getLastFocusableElement:function(e,t){var i=this.getFocusableElements(e,t);return i.length>0?i[i.length-1]:null},getNextFocusableElement:function(e,t,i){var r=this.getFocusableElements(e,i),s=r.length>0?r.findIndex(function(o){return o===t}):-1,a=s>-1&&r.length>=s+1?s+1:-1;return a>-1?r[a]:null},getPreviousElementSibling:function(e,t){for(var i=e.previousElementSibling;i;){if(i.matches(t))return i;i=i.previousElementSibling}return null},getNextElementSibling:function(e,t){for(var i=e.nextElementSibling;i;){if(i.matches(t))return i;i=i.nextElementSibling}return null},isClickable:function(e){if(e){var t=e.nodeName,i=e.parentElement&&e.parentElement.nodeName;return t==="INPUT"||t==="TEXTAREA"||t==="BUTTON"||t==="A"||i==="INPUT"||i==="TEXTAREA"||i==="BUTTON"||i==="A"||!!e.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1},applyStyle:function(e,t){if(typeof t=="string")e.style.cssText=t;else for(var i in t)e.style[i]=t[i]},isIOS:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid:function(){return/(android)/i.test(navigator.userAgent)},isTouchDevice:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},hasCSSAnimation:function(e){if(e){var t=getComputedStyle(e),i=parseFloat(t.getPropertyValue("animation-duration")||"0");return i>0}return!1},hasCSSTransition:function(e){if(e){var t=getComputedStyle(e),i=parseFloat(t.getPropertyValue("transition-duration")||"0");return i>0}return!1},exportCSV:function(e,t){var i=new Blob([e],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(i,t+".csv");else{var r=document.createElement("a");r.download!==void 0?(r.setAttribute("href",URL.createObjectURL(i)),r.setAttribute("download",t+".csv"),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)):(e="data:text/csv;charset=utf-8,"+e,window.open(encodeURI(e)))}},blockBodyScroll:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)},unblockBodyScroll:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}};function vE(){var n=new Map;return{on:function(t,i){var r=n.get(t);r?r.push(i):r=[i],n.set(t,r)},off:function(t,i){var r=n.get(t);r&&r.splice(r.indexOf(i)>>>0,1)},emit:function(t,i){var r=n.get(t);r&&r.slice().map(function(s){s(i)})}}}function Ed(n,e){return yE(n)||xE(n,e)||wu(n,e)||_E()}function _E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xE(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,a,o=[],l=!0,c=!1;try{if(s=(t=t.call(n)).next,e!==0)for(;!(l=(i=s.call(t)).done)&&(o.push(i.value),o.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return o}}function yE(n){if(Array.isArray(n))return n}function Td(n){return ME(n)||SE(n)||wu(n)||bE()}function bE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function SE(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ME(n){if(Array.isArray(n))return Nc(n)}function Ml(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=wu(n))||e){t&&(n=t);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,a=!1,o;return{s:function(){t=t.call(n)},n:function(){var c=t.next();return s=c.done,c},e:function(c){a=!0,o=c},f:function(){try{!s&&t.return!=null&&t.return()}finally{if(a)throw o}}}}function wu(n,e){if(n){if(typeof n=="string")return Nc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Nc(n,e)}}function Nc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Es(n){"@babel/helpers - typeof";return Es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Es(n)}var Ye={equals:function(e,t,i){return i?this.resolveFieldData(e,i)===this.resolveFieldData(t,i):this.deepEquals(e,t)},deepEquals:function(e,t){if(e===t)return!0;if(e&&t&&Es(e)=="object"&&Es(t)=="object"){var i=Array.isArray(e),r=Array.isArray(t),s,a,o;if(i&&r){if(a=e.length,a!=t.length)return!1;for(s=a;s--!==0;)if(!this.deepEquals(e[s],t[s]))return!1;return!0}if(i!=r)return!1;var l=e instanceof Date,c=t instanceof Date;if(l!=c)return!1;if(l&&c)return e.getTime()==t.getTime();var u=e instanceof RegExp,d=t instanceof RegExp;if(u!=d)return!1;if(u&&d)return e.toString()==t.toString();var f=Object.keys(e);if(a=f.length,a!==Object.keys(t).length)return!1;for(s=a;s--!==0;)if(!Object.prototype.hasOwnProperty.call(t,f[s]))return!1;for(s=a;s--!==0;)if(o=f[s],!this.deepEquals(e[o],t[o]))return!1;return!0}return e!==e&&t!==t},resolveFieldData:function(e,t){if(!e||!t)return null;try{var i=e[t];if(this.isNotEmpty(i))return i}catch{}if(Object.keys(e).length){if(this.isFunction(t))return t(e);if(t.indexOf(".")===-1)return e[t];for(var r=t.split("."),s=e,a=0,o=r.length;a<o;++a){if(s==null)return null;s=s[r[a]]}return s}return null},getItemValue:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return this.isFunction(e)?e.apply(void 0,i):e},filter:function(e,t,i){var r=[];if(e){var s=Ml(e),a;try{for(s.s();!(a=s.n()).done;){var o=a.value,l=Ml(t),c;try{for(l.s();!(c=l.n()).done;){var u=c.value;if(String(this.resolveFieldData(o,u)).toLowerCase().indexOf(i.toLowerCase())>-1){r.push(o);break}}}catch(d){l.e(d)}finally{l.f()}}}catch(d){s.e(d)}finally{s.f()}}return r},reorderArray:function(e,t,i){e&&t!==i&&(i>=e.length&&(i%=e.length,t%=e.length),e.splice(i,0,e.splice(t,1)[0]))},findIndexInList:function(e,t){var i=-1;if(t){for(var r=0;r<t.length;r++)if(t[r]===e){i=r;break}}return i},contains:function(e,t){if(e!=null&&t&&t.length){var i=Ml(t),r;try{for(i.s();!(r=i.n()).done;){var s=r.value;if(this.equals(e,s))return!0}}catch(a){i.e(a)}finally{i.f()}}return!1},insertIntoOrderedArray:function(e,t,i,r){if(i.length>0){for(var s=!1,a=0;a<i.length;a++){var o=this.findIndexInList(i[a],r);if(o>t){i.splice(a,0,e),s=!0;break}}s||i.push(e)}else i.push(e)},removeAccents:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e},getVNodeProp:function(e,t){if(e){var i=e.props;if(i){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),s=Object.prototype.hasOwnProperty.call(i,r)?r:t;return e.type.extends.props[t].type===Boolean&&i[s]===""?!0:i[s]}}return null},toFlatCase:function(e){return this.isString(e)?e.replace(/(-|_)/g,"").toLowerCase():e},toKebabCase:function(e){return this.isString(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,function(t,i){return i===0?t:"-"+t.toLowerCase()}).toLowerCase():e},toCapitalCase:function(e){return this.isString(e,{empty:!1})?e[0].toUpperCase()+e.slice(1):e},isEmpty:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&Es(e)==="object"&&Object.keys(e).length===0},isNotEmpty:function(e){return!this.isEmpty(e)},isFunction:function(e){return!!(e&&e.constructor&&e.call&&e.apply)},isObject:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e instanceof Object&&e.constructor===Object&&(t||Object.keys(e).length!==0)},isDate:function(e){return e instanceof Date&&e.constructor===Date},isArray:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Array.isArray(e)&&(t||e.length!==0)},isString:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return typeof e=="string"&&(t||e!=="")},isPrintableCharacter:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(e)&&e.length===1&&e.match(/\S| /)},findLast:function(e,t){var i;if(this.isNotEmpty(e))try{i=e.findLast(t)}catch{i=Td(e).reverse().find(t)}return i},findLastIndex:function(e,t){var i=-1;if(this.isNotEmpty(e))try{i=e.findLastIndex(t)}catch{i=e.lastIndexOf(Td(e).reverse().find(t))}return i},sort:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,a=this.compare(e,t,r,i),o=i;return(this.isEmpty(e)||this.isEmpty(t))&&(o=s===1?i:s),o*a},compare:function(e,t,i){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,s=-1,a=this.isEmpty(e),o=this.isEmpty(t);return a&&o?s=0:a?s=r:o?s=-r:typeof e=="string"&&typeof t=="string"?s=i(e,t):s=e<t?-1:e>t?1:0,s},localeComparator:function(){return new Intl.Collator(void 0,{numeric:!0}).compare},nestedKeys:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return Object.entries(t).reduce(function(r,s){var a=Ed(s,2),o=a[0],l=a[1],c=i?"".concat(i,".").concat(o):o;return e.isObject(l)?r=r.concat(e.nestedKeys(l,c)):r.push(c),r},[])},stringify:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,s=" ".repeat(r),a=" ".repeat(r+i);return this.isArray(e)?"["+e.map(function(o){return t.stringify(o,i,r+i)}).join(", ")+"]":this.isDate(e)?e.toISOString():this.isFunction(e)?e.toString():this.isObject(e)?`{
`+Object.entries(e).map(function(o){var l=Ed(o,2),c=l[0],u=l[1];return"".concat(a).concat(c,": ").concat(t.stringify(u,i,r+i))}).join(`,
`)+`
`.concat(s)+"}":JSON.stringify(e)}},Ad=0;function EE(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return Ad++,"".concat(n).concat(Ad)}function TE(n){return RE(n)||CE(n)||wE(n)||AE()}function AE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wE(n,e){if(n){if(typeof n=="string")return Oc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Oc(n,e)}}function CE(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function RE(n){if(Array.isArray(n))return Oc(n)}function Oc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function PE(){var n=[],e=function(o,l){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:999,u=r(o,l,c),d=u.value+(u.key===o?0:c)+1;return n.push({key:o,value:d}),d},t=function(o){n=n.filter(function(l){return l.value!==o})},i=function(o,l){return r(o,l).value},r=function(o,l){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return TE(n).reverse().find(function(u){return!0})||{key:o,value:c}},s=function(o){return o&&parseInt(o.style.zIndex,10)||0};return{get:s,set:function(o,l,c){l&&(l.style.zIndex=String(e(o,!0,c)))},clear:function(o){o&&(t(s(o)),o.style.zIndex="")},getCurrent:function(o){return i(o,!0)}}}var El=PE(),$t={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function zs(n){"@babel/helpers - typeof";return zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zs(n)}function wd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Tl(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?wd(Object(t),!0).forEach(function(i){IE(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):wd(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function IE(n,e,t){return e=DE(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function DE(n){var e=LE(n,"string");return zs(e)=="symbol"?e:String(e)}function LE(n,e){if(zs(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(zs(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Cd={ripple:!1,inputStyle:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[$t.STARTS_WITH,$t.CONTAINS,$t.NOT_CONTAINS,$t.ENDS_WITH,$t.EQUALS,$t.NOT_EQUALS],numeric:[$t.EQUALS,$t.NOT_EQUALS,$t.LESS_THAN,$t.LESS_THAN_OR_EQUAL_TO,$t.GREATER_THAN,$t.GREATER_THAN_OR_EQUAL_TO],date:[$t.DATE_IS,$t.DATE_IS_NOT,$t.DATE_BEFORE,$t.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},unstyled:!1,csp:{nonce:void 0}},UE=Symbol();function NE(n,e,t,i){if(n!==e){var r=document.getElementById(t),s=r.cloneNode(!0),a=r.getAttribute("href").replace(n,e);s.setAttribute("id",t+"-clone"),s.setAttribute("href",a),s.addEventListener("load",function(){r.remove(),s.setAttribute("id",t),i&&i()}),r.parentNode&&r.parentNode.insertBefore(s,r.nextSibling)}}var OE={install:function(e,t){var i=t?Tl(Tl({},Cd),t):Tl({},Cd),r={config:Xr(i),changeTheme:NE};e.config.globalProperties.$primevue=r,e.provide(UE,r)}},yn=vE(),FE={install:function(e){var t={add:function(r){yn.emit("add",r)},remove:function(r){yn.emit("remove",r)},removeGroup:function(r){yn.emit("remove-group",r)},removeAllGroups:function(){yn.emit("remove-all-groups")}};e.config.globalProperties.$toast=t,e.provide(cp,t)}},Zp={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=Pt.isClient()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function BE(n,e,t,i,r,s){return s.inline?sr(n.$slots,"default",{key:0}):r.mounted?(Ue(),mn(fg,{key:1,to:t.appendTo},[sr(n.$slots,"default")],8,["to"])):bn("",!0)}Zp.render=BE;function ks(n){"@babel/helpers - typeof";return ks=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ks(n)}function Rd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Pd(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Rd(Object(t),!0).forEach(function(i){VE(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Rd(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function VE(n,e,t){return e=zE(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function zE(n){var e=kE(n,"string");return ks(e)=="symbol"?e:String(e)}function kE(n,e){if(ks(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(ks(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function HE(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;fu()?ur(n):e?n():nu(n)}var GE=0;function Jp(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=ln(!1),i=ln(n),r=ln(null),s=Pt.isClient()?window.document:void 0,a=e.document,o=a===void 0?s:a,l=e.immediate,c=l===void 0?!0:l,u=e.manual,d=u===void 0?!1:u,f=e.name,h=f===void 0?"style_".concat(++GE):f,g=e.id,_=g===void 0?void 0:g,m=e.media,p=m===void 0?void 0:m,y=e.nonce,T=y===void 0?void 0:y,E=e.props,D=E===void 0?{}:E,R=function(){},U=function(G){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(o){var C=Pd(Pd({},D),A),N=C.name||h,B=C.id||_,z=C.nonce||T;r.value=o.querySelector('style[data-primevue-style-id="'.concat(N,'"]'))||o.getElementById(B)||o.createElement("style"),r.value.isConnected||(i.value=G||n,Pt.setAttributes(r.value,{type:"text/css",id:B,media:p,nonce:z}),o.head.appendChild(r.value),Pt.setAttribute(r.value,"data-primevue-style-id",h),Pt.setAttributes(r.value,C)),!t.value&&(R=ys(i,function(H){r.value.textContent=H},{immediate:!0}),t.value=!0)}},x=function(){!o||!t.value||(R(),Pt.isExist(r.value)&&o.head.removeChild(r.value),t.value=!1)};return c&&!d&&HE(U),{id:_,name:h,css:i,unload:x,load:U,isLoaded:Qc(t)}}function Hs(n){"@babel/helpers - typeof";return Hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hs(n)}function WE(n,e){return qE(n)||jE(n,e)||XE(n,e)||$E()}function $E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XE(n,e){if(n){if(typeof n=="string")return Id(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Id(n,e)}}function Id(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function jE(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,a,o=[],l=!0,c=!1;try{if(s=(t=t.call(n)).next,e!==0)for(;!(l=(i=s.call(t)).done)&&(o.push(i.value),o.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return o}}function qE(n){if(Array.isArray(n))return n}function Dd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Al(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Dd(Object(t),!0).forEach(function(i){YE(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Dd(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function YE(n,e,t){return e=KE(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function KE(n){var e=ZE(n,"string");return Hs(e)=="symbol"?e:String(e)}function ZE(n,e){if(Hs(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(Hs(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var JE=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`,QE={},eT={},Kn={name:"base",css:JE,classes:QE,inlineStyles:eT,loadStyle:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.css?Jp(this.css,Al({name:this.name},e)):{}},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var i=Object.entries(t).reduce(function(r,s){var a=WE(s,2),o=a[0],l=a[1];return r.push("".concat(o,'="').concat(l,'"'))&&r},[]).join(" ");return'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(i,">").concat(this.css).concat(e,"</style>")}return""},extend:function(e){return Al(Al({},this),{},{css:void 0},e)}};function Gs(n){"@babel/helpers - typeof";return Gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gs(n)}function Ld(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function tT(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ld(Object(t),!0).forEach(function(i){nT(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ld(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function nT(n,e,t){return e=iT(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function iT(n){var e=rT(n,"string");return Gs(e)=="symbol"?e:String(e)}function rT(n,e){if(Gs(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(Gs(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var wl=Kn.extend({name:"common",loadGlobalStyle:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Jp(e,tT({name:"global"},t))}});function Ws(n){"@babel/helpers - typeof";return Ws=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ws(n)}function sT(n){return tm(n)||aT(n)||em(n)||Qp()}function aT(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Ua(n,e){return tm(n)||oT(n,e)||em(n,e)||Qp()}function Qp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function em(n,e){if(n){if(typeof n=="string")return Ud(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ud(n,e)}}function Ud(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function oT(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,a,o=[],l=!0,c=!1;try{if(s=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=s.call(t)).done)&&(o.push(i.value),o.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return o}}function tm(n){if(Array.isArray(n))return n}function Nd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function bt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Nd(Object(t),!0).forEach(function(i){Xa(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Nd(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Xa(n,e,t){return e=lT(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function lT(n){var e=cT(n,"string");return Ws(e)=="symbol"?e:String(e)}function cT(n,e){if(Ws(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(Ws(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Zr={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){if(!e){var t,i;wl.loadStyle({nonce:(t=this.$primevueConfig)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce}),this.$options.style&&this.$style.loadStyle({nonce:(i=this.$primevueConfig)===null||i===void 0||(i=i.csp)===null||i===void 0?void 0:i.nonce})}}}},beforeCreate:function(){var e,t,i,r,s,a,o,l,c,u,d,f=(e=this.pt)===null||e===void 0?void 0:e._usept,h=f?(t=this.pt)===null||t===void 0||(t=t.originalValue)===null||t===void 0?void 0:t[this.$.type.name]:void 0,g=f?(i=this.pt)===null||i===void 0||(i=i.value)===null||i===void 0?void 0:i[this.$.type.name]:this.pt;(r=g||h)===null||r===void 0||(r=r.hooks)===null||r===void 0||(s=r.onBeforeCreate)===null||s===void 0||s.call(r);var _=(a=this.$primevueConfig)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a._usept,m=_?(o=this.$primevue)===null||o===void 0||(o=o.config)===null||o===void 0||(o=o.pt)===null||o===void 0?void 0:o.originalValue:void 0,p=_?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(u=p||m)===null||u===void 0||(u=u[this.$.type.name])===null||u===void 0||(u=u.hooks)===null||u===void 0||(d=u.onBeforeCreate)===null||d===void 0||d.call(u)},created:function(){this._hook("onCreated")},beforeMount:function(){var e;Kn.loadStyle({nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}),this._loadGlobalStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var t=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),i=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));t==null||t(),i==null||i()}},_mergeProps:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return Ye.isFunction(e)?e.apply(void 0,i):nt.apply(void 0,i)},_loadGlobalStyles:function(){var e,t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Ye.isNotEmpty(t)&&wl.loadGlobalStyle(t,{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var t;return this[e]||((t=this._getHostInstance(this))===null||t===void 0?void 0:t[e])},_getOptionValue:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=Ye.toFlatCase(t).split("."),s=r.shift();return s?Ye.isObject(e)?this._getOptionValue(Ye.getItemValue(e[Object.keys(e).find(function(a){return Ye.toFlatCase(a)===s})||""],i),r.join("."),i):void 0:Ye.getItemValue(e,i)},_getPTValue:function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,a=/./g.test(i)&&!!r[i.split(".")[0]],o=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},l=o.mergeSections,c=l===void 0?!0:l,u=o.mergeProps,d=u===void 0?!1:u,f=s?a?this._useGlobalPT(this._getPTClassValue,i,r):this._useDefaultPT(this._getPTClassValue,i,r):void 0,h=a?void 0:this._getPTSelf(t,this._getPTClassValue,i,bt(bt({},r),{},{global:f||{}})),g=this._getPTDatasets(i);return c||!c&&h?d?this._mergeProps(d,f,h,g):bt(bt(bt({},f),h),g):bt(bt({},h),g)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return nt(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(i)),this._usePT.apply(this,[this.$_attrsPT].concat(i)))},_getPTDatasets:function(){var e,t,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r="data-pc-",s=i==="root"&&Ye.isNotEmpty((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return i!=="transition"&&bt(bt({},i==="root"&&bt(Xa({},"".concat(r,"name"),Ye.toFlatCase(s?(t=this.pt)===null||t===void 0?void 0:t["data-pc-section"]:this.$.type.name)),s&&Xa({},"".concat(r,"extend"),Ye.toFlatCase(this.$.type.name)))),{},Xa({},"".concat(r,"section"),Ye.toFlatCase(i)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return Ye.isString(e)||Ye.isArray(e)?{class:e}:e},_getPT:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,s=function(o){var l,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=r?r(o):o,d=Ye.toFlatCase(i),f=Ye.toFlatCase(t.$name);return(l=c?d!==f?u==null?void 0:u[d]:void 0:u==null?void 0:u[d])!==null&&l!==void 0?l:u};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:s(e.originalValue),value:s(e.value)}:s(e,!0)},_usePT:function(e,t,i,r){var s=function(_){return t(_,i,r)};if(e!=null&&e.hasOwnProperty("_usept")){var a,o=e._usept||((a=this.$primevueConfig)===null||a===void 0?void 0:a.ptOptions)||{},l=o.mergeSections,c=l===void 0?!0:l,u=o.mergeProps,d=u===void 0?!1:u,f=s(e.originalValue),h=s(e.value);return f===void 0&&h===void 0?void 0:Ye.isString(h)?h:Ye.isString(f)?f:c||!c&&h?d?this._mergeProps(d,f,h):bt(bt({},f),h):h}return s(e)},_useGlobalPT:function(e,t,i){return this._usePT(this.globalPT,e,t,i)},_useDefaultPT:function(e,t,i){return this._usePT(this.defaultPT,e,t,i)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,bt(bt({},this.$params),t))},ptmi:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return nt(this.$_attrsNoPT,this.ptm(e,t))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,t,bt({instance:this},i),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,bt(bt({},this.$params),t))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(t){var r=this._getOptionValue(this.$style.inlineStyles,e,bt(bt({},this.$params),i)),s=this._getOptionValue(wl.inlineStyles,e,bt(bt({},this.$params),i));return[s,r]}}},computed:{globalPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(i){return Ye.getItemValue(i,{instance:t})})},defaultPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(i){return t._getOptionValue(i,t.$name,bt({},t.$params))||Ye.getItemValue(i,bt({},t.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs},parentInstance:e}},$style:function(){return bt(bt({classes:void 0,inlineStyles:void 0,loadStyle:function(){},loadCustomStyle:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=Ua(e,1),i=t[0];return i==null?void 0:i.startsWith("pt:")}).reduce(function(e,t){var i=Ua(t,2),r=i[0],s=i[1],a=r.split(":"),o=sT(a),l=o.slice(1);return l==null||l.reduce(function(c,u,d,f){return!c[u]&&(c[u]=d===f.length-1?s:{}),c[u]},e),e},{})},$_attrsNoPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=Ua(e,1),i=t[0];return!(i!=null&&i.startsWith("pt:"))}).reduce(function(e,t){var i=Ua(t,2),r=i[0],s=i[1];return e[r]=s,e},{})}}};function $s(n){"@babel/helpers - typeof";return $s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$s(n)}function Na(n,e,t){return e=uT(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function uT(n){var e=fT(n,"string");return $s(e)=="symbol"?e:String(e)}function fT(n,e){if($s(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if($s(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var dT={root:function(e){var t=e.position;return{position:"fixed",top:t==="top-right"||t==="top-left"||t==="top-center"?"20px":t==="center"?"50%":null,right:(t==="top-right"||t==="bottom-right")&&"20px",bottom:(t==="bottom-left"||t==="bottom-right"||t==="bottom-center")&&"20px",left:t==="top-left"||t==="bottom-left"?"20px":t==="center"||t==="top-center"||t==="bottom-center"?"50%":null}}},hT={root:function(e){var t=e.props,i=e.instance;return["p-toast p-component p-toast-"+t.position,{"p-ripple-disabled":i.$primevue.config.ripple===!1}]},container:function(e){var t=e.props;return["p-toast-message",{"p-toast-message-info":t.message.severity==="info"||t.message.severity===void 0,"p-toast-message-warn":t.message.severity==="warn","p-toast-message-error":t.message.severity==="error","p-toast-message-success":t.message.severity==="success","p-toast-message-secondary":t.message.severity==="secondary","p-toast-message-contrast":t.message.severity==="contrast"}]},content:"p-toast-message-content",icon:function(e){var t=e.props;return["p-toast-message-icon",Na(Na(Na(Na({},t.infoIcon,t.message.severity==="info"),t.warnIcon,t.message.severity==="warn"),t.errorIcon,t.message.severity==="error"),t.successIcon,t.message.severity==="success")]},text:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-icon-close p-link",closeIcon:"p-toast-icon-close-icon"},pT=Kn.extend({name:"toast",classes:hT,inlineStyles:dT}),mT=`
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,gT=Kn.extend({name:"baseicon",css:mT});function Xs(n){"@babel/helpers - typeof";return Xs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xs(n)}function Od(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Fd(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Od(Object(t),!0).forEach(function(i){vT(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Od(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function vT(n,e,t){return e=_T(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function _T(n){var e=xT(n,"string");return Xs(e)=="symbol"?e:String(e)}function xT(n,e){if(Xs(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(Xs(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Jr={name:"BaseIcon",extends:Zr,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:gT,methods:{pti:function(){var e=Ye.isEmpty(this.label);return Fd(Fd({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}},Fc={name:"CheckIcon",extends:Jr},yT=W("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"},null,-1),bT=[yT];function ST(n,e,t,i,r,s){return Ue(),Ge("svg",nt({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),bT,16)}Fc.render=ST;var Bc={name:"ExclamationTriangleIcon",extends:Jr},MT=W("path",{d:"M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",fill:"currentColor"},null,-1),ET=W("path",{d:"M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",fill:"currentColor"},null,-1),TT=W("path",{d:"M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",fill:"currentColor"},null,-1),AT=[MT,ET,TT];function wT(n,e,t,i,r,s){return Ue(),Ge("svg",nt({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),AT,16)}Bc.render=wT;var Vc={name:"InfoCircleIcon",extends:Jr},CT=W("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",fill:"currentColor"},null,-1),RT=[CT];function PT(n,e,t,i,r,s){return Ue(),Ge("svg",nt({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),RT,16)}Vc.render=PT;var nm={name:"TimesIcon",extends:Jr},IT=W("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1),DT=[IT];function LT(n,e,t,i,r,s){return Ue(),Ge("svg",nt({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),DT,16)}nm.render=LT;var zc={name:"TimesCircleIcon",extends:Jr},UT=W("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"},null,-1),NT=[UT];function OT(n,e,t,i,r,s){return Ue(),Ge("svg",nt({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),NT,16)}zc.render=OT;function js(n){"@babel/helpers - typeof";return js=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},js(n)}function Bd(n,e){return zT(n)||VT(n,e)||BT(n,e)||FT()}function FT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function BT(n,e){if(n){if(typeof n=="string")return Vd(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Vd(n,e)}}function Vd(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function VT(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,a,o=[],l=!0,c=!1;try{if(s=(t=t.call(n)).next,e!==0)for(;!(l=(i=s.call(t)).done)&&(o.push(i.value),o.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return o}}function zT(n){if(Array.isArray(n))return n}function zd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Et(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?zd(Object(t),!0).forEach(function(i){kc(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):zd(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function kc(n,e,t){return e=kT(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function kT(n){var e=HT(n,"string");return js(e)=="symbol"?e:String(e)}function HT(n,e){if(js(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(js(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var st={_getMeta:function(){return[Ye.isObject(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],Ye.getItemValue(Ye.isObject(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,t){var i,r,s;return(i=(e==null||(r=e.instance)===null||r===void 0?void 0:r.$primevue)||(t==null||(s=t.ctx)===null||s===void 0||(s=s.appContext)===null||s===void 0||(s=s.config)===null||s===void 0||(s=s.globalProperties)===null||s===void 0?void 0:s.$primevue))===null||i===void 0?void 0:i.config},_getOptionValue:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=Ye.toFlatCase(t).split("."),s=r.shift();return s?Ye.isObject(e)?st._getOptionValue(Ye.getItemValue(e[Object.keys(e).find(function(a){return Ye.toFlatCase(a)===s})||""],i),r.join("."),i):void 0:Ye.getItemValue(e,i)},_getPTValue:function(){var e,t,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=function(){var y=st._getOptionValue.apply(st,arguments);return Ye.isString(y)||Ye.isArray(y)?{class:y}:y},c=((e=i.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((t=i.$primevueConfig)===null||t===void 0?void 0:t.ptOptions)||{},u=c.mergeSections,d=u===void 0?!0:u,f=c.mergeProps,h=f===void 0?!1:f,g=o?st._useDefaultPT(i,i.defaultPT(),l,s,a):void 0,_=st._usePT(i,st._getPT(r,i.$name),l,s,Et(Et({},a),{},{global:g||{}})),m=st._getPTDatasets(i,s);return d||!d&&_?h?st._mergeProps(i,h,g,_,m):Et(Et(Et({},g),_),m):Et(Et({},_),m)},_getPTDatasets:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i="data-pc-";return Et(Et({},t==="root"&&kc({},"".concat(i,"name"),Ye.toFlatCase(e.$name))),{},kc({},"".concat(i,"section"),Ye.toFlatCase(t)))},_getPT:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,r=function(a){var o,l=i?i(a):a,c=Ye.toFlatCase(t);return(o=l==null?void 0:l[c])!==null&&o!==void 0?o:l};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:r(e.originalValue),value:r(e.value)}:r(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0,a=function(m){return i(m,r,s)};if(t!=null&&t.hasOwnProperty("_usept")){var o,l=t._usept||((o=e.$primevueConfig)===null||o===void 0?void 0:o.ptOptions)||{},c=l.mergeSections,u=c===void 0?!0:c,d=l.mergeProps,f=d===void 0?!1:d,h=a(t.originalValue),g=a(t.value);return h===void 0&&g===void 0?void 0:Ye.isString(g)?g:Ye.isString(h)?h:u||!u&&g?f?st._mergeProps(e,f,h,g):Et(Et({},h),g):g}return a(t)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0;return st._usePT(e,t,i,r,s)},_hook:function(e,t,i,r,s,a){var o,l,c="on".concat(Ye.toCapitalCase(t)),u=st._getConfig(r,s),d=i==null?void 0:i.$instance,f=st._usePT(d,st._getPT(r==null||(o=r.value)===null||o===void 0?void 0:o.pt,e),st._getOptionValue,"hooks.".concat(c)),h=st._useDefaultPT(d,u==null||(l=u.pt)===null||l===void 0||(l=l.directives)===null||l===void 0?void 0:l[e],st._getOptionValue,"hooks.".concat(c)),g={el:i,binding:r,vnode:s,prevVnode:a};f==null||f(d,g),h==null||h(d,g)},_mergeProps:function(){for(var e=arguments.length>1?arguments[1]:void 0,t=arguments.length,i=new Array(t>2?t-2:0),r=2;r<t;r++)i[r-2]=arguments[r];return Ye.isFunction(e)?e.apply(void 0,i):nt.apply(void 0,i)},_extend:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=function(s,a,o,l,c){var u,d;a._$instances=a._$instances||{};var f=st._getConfig(o,l),h=a._$instances[e]||{},g=Ye.isEmpty(h)?Et(Et({},t),t==null?void 0:t.methods):{};a._$instances[e]=Et(Et({},h),{},{$name:e,$host:a,$binding:o,$modifiers:o==null?void 0:o.modifiers,$value:o==null?void 0:o.value,$el:h.$el||a||void 0,$style:Et({classes:void 0,inlineStyles:void 0,loadStyle:function(){}},t==null?void 0:t.style),$primevueConfig:f,defaultPT:function(){return st._getPT(f==null?void 0:f.pt,void 0,function(m){var p;return m==null||(p=m.directives)===null||p===void 0?void 0:p[e]})},isUnstyled:function(){var m,p;return((m=a.$instance)===null||m===void 0||(m=m.$binding)===null||m===void 0||(m=m.value)===null||m===void 0?void 0:m.unstyled)!==void 0?(p=a.$instance)===null||p===void 0||(p=p.$binding)===null||p===void 0||(p=p.value)===null||p===void 0?void 0:p.unstyled:f==null?void 0:f.unstyled},ptm:function(){var m,p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return st._getPTValue(a.$instance,(m=a.$instance)===null||m===void 0||(m=m.$binding)===null||m===void 0||(m=m.value)===null||m===void 0?void 0:m.pt,p,Et({},y))},ptmo:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return st._getPTValue(a.$instance,m,p,y,!1)},cx:function(){var m,p,y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(m=a.$instance)!==null&&m!==void 0&&m.isUnstyled()?void 0:st._getOptionValue((p=a.$instance)===null||p===void 0||(p=p.$style)===null||p===void 0?void 0:p.classes,y,Et({},T))},sx:function(){var m,p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return y?st._getOptionValue((m=a.$instance)===null||m===void 0||(m=m.$style)===null||m===void 0?void 0:m.inlineStyles,p,Et({},T)):void 0}},g),a.$instance=a._$instances[e],(u=(d=a.$instance)[s])===null||u===void 0||u.call(d,a,o,l,c),a["$".concat(e)]=a.$instance,st._hook(e,s,a,o,l,c)};return{created:function(s,a,o,l){i("created",s,a,o,l)},beforeMount:function(s,a,o,l){var c,u,d,f,h=st._getConfig(a,o);Kn.loadStyle({nonce:h==null||(c=h.csp)===null||c===void 0?void 0:c.nonce}),!((u=s.$instance)!==null&&u!==void 0&&u.isUnstyled())&&((d=s.$instance)===null||d===void 0||(d=d.$style)===null||d===void 0||d.loadStyle({nonce:h==null||(f=h.csp)===null||f===void 0?void 0:f.nonce})),i("beforeMount",s,a,o,l)},mounted:function(s,a,o,l){var c,u,d,f,h=st._getConfig(a,o);Kn.loadStyle({nonce:h==null||(c=h.csp)===null||c===void 0?void 0:c.nonce}),!((u=s.$instance)!==null&&u!==void 0&&u.isUnstyled())&&((d=s.$instance)===null||d===void 0||(d=d.$style)===null||d===void 0||d.loadStyle({nonce:h==null||(f=h.csp)===null||f===void 0?void 0:f.nonce})),i("mounted",s,a,o,l)},beforeUpdate:function(s,a,o,l){i("beforeUpdate",s,a,o,l)},updated:function(s,a,o,l){i("updated",s,a,o,l)},beforeUnmount:function(s,a,o,l){i("beforeUnmount",s,a,o,l)},unmounted:function(s,a,o,l){i("unmounted",s,a,o,l)}}},extend:function(){var e=st._getMeta.apply(st,arguments),t=Bd(e,2),i=t[0],r=t[1];return Et({extend:function(){var a=st._getMeta.apply(st,arguments),o=Bd(a,2),l=o[0],c=o[1];return st.extend(l,Et(Et(Et({},r),r==null?void 0:r.methods),c))}},st._extend(i,r))}},GT={root:"p-ink"},WT=Kn.extend({name:"ripple",classes:GT}),$T=st.extend({style:WT});function XT(n){return KT(n)||YT(n)||qT(n)||jT()}function jT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qT(n,e){if(n){if(typeof n=="string")return Hc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Hc(n,e)}}function YT(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function KT(n){if(Array.isArray(n))return Hc(n)}function Hc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var im=$T.extend("ripple",{mounted:function(e){var t,i=e==null||(t=e.$instance)===null||t===void 0?void 0:t.$primevueConfig;i&&i.ripple&&(this.create(e),this.bindEvents(e),e.setAttribute("data-pd-ripple",!0))},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},create:function(e){var t=Pt.createElement("span",{role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this),"p-bind":this.ptm("root")});e.appendChild(t),this.$el=t},remove:function(e){var t=this.getInk(e);t&&(this.unbindEvents(e),t.removeEventListener("animationend",this.onAnimationEnd),t.remove())},onMouseDown:function(e){var t=this,i=e.currentTarget,r=this.getInk(i);if(!(!r||getComputedStyle(r,null).display==="none")){if(!this.isUnstyled()&&Pt.removeClass(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"),!Pt.getHeight(r)&&!Pt.getWidth(r)){var s=Math.max(Pt.getOuterWidth(i),Pt.getOuterHeight(i));r.style.height=s+"px",r.style.width=s+"px"}var a=Pt.getOffset(i),o=e.pageX-a.left+document.body.scrollTop-Pt.getWidth(r)/2,l=e.pageY-a.top+document.body.scrollLeft-Pt.getHeight(r)/2;r.style.top=l+"px",r.style.left=o+"px",!this.isUnstyled()&&Pt.addClass(r,"p-ink-active"),r.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){r&&(!t.isUnstyled()&&Pt.removeClass(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&Pt.removeClass(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?XT(e.children).find(function(t){return Pt.getAttribute(t,"data-pc-name")==="ripple"}):void 0}}}),ZT={name:"BaseToast",extends:Zr,props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0},infoIcon:{type:String,default:void 0},warnIcon:{type:String,default:void 0},errorIcon:{type:String,default:void 0},successIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:pT,provide:function(){return{$parentInstance:this}}},rm={name:"ToastMessage",hostName:"Toast",extends:Zr,emits:["close"],closeTimeout:null,props:{message:{type:null,default:null},templates:{type:Object,default:null},closeIcon:{type:String,default:null},infoIcon:{type:String,default:null},warnIcon:{type:String,default:null},errorIcon:{type:String,default:null},successIcon:{type:String,default:null},closeButtonProps:{type:null,default:null}},mounted:function(){var e=this;this.message.life&&(this.closeTimeout=setTimeout(function(){e.close({message:e.message,type:"life-end"})},this.message.life))},beforeUnmount:function(){this.clearCloseTimeout()},methods:{close:function(e){this.$emit("close",e)},onCloseClick:function(){this.clearCloseTimeout(),this.close({message:this.message,type:"close"})},clearCloseTimeout:function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{iconComponent:function(){return{info:!this.infoIcon&&Vc,success:!this.successIcon&&Fc,warn:!this.warnIcon&&Bc,error:!this.errorIcon&&zc}[this.message.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{TimesIcon:nm,InfoCircleIcon:Vc,CheckIcon:Fc,ExclamationTriangleIcon:Bc,TimesCircleIcon:zc},directives:{ripple:im}};function qs(n){"@babel/helpers - typeof";return qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qs(n)}function kd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function cs(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?kd(Object(t),!0).forEach(function(i){JT(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):kd(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function JT(n,e,t){return e=QT(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function QT(n){var e=eA(n,"string");return qs(e)=="symbol"?e:String(e)}function eA(n,e){if(qs(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(qs(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var tA=["aria-label"];function nA(n,e,t,i,r,s){var a=Uh("ripple");return Ue(),Ge("div",nt({class:[n.cx("container"),t.message.styleClass],role:"alert","aria-live":"assertive","aria-atomic":"true"},n.ptm("container")),[t.templates.container?(Ue(),mn(ca(t.templates.container),{key:0,message:t.message,onClose:s.onCloseClick,closeCallback:s.onCloseClick},null,40,["message","onClose","closeCallback"])):(Ue(),Ge("div",nt({key:1,class:[n.cx("content"),t.message.contentStyleClass]},n.ptm("content")),[t.templates.message?(Ue(),mn(ca(t.templates.message),{key:1,message:t.message},null,8,["message"])):(Ue(),Ge(vt,{key:0},[(Ue(),mn(ca(t.templates.icon?t.templates.icon:s.iconComponent&&s.iconComponent.name?s.iconComponent:"span"),nt({class:n.cx("icon")},n.ptm("icon")),null,16,["class"])),W("div",nt({class:n.cx("text")},n.ptm("text")),[W("span",nt({class:n.cx("summary")},n.ptm("summary")),yt(t.message.summary),17),W("div",nt({class:n.cx("detail")},n.ptm("detail")),yt(t.message.detail),17)],16)],64)),t.message.closable!==!1?(Ue(),Ge("div",Cm(nt({key:2},n.ptm("buttonContainer"))),[xh((Ue(),Ge("button",nt({class:n.cx("closeButton"),type:"button","aria-label":s.closeAriaLabel,onClick:e[0]||(e[0]=function(){return s.onCloseClick&&s.onCloseClick.apply(s,arguments)}),autofocus:""},cs(cs(cs({},t.closeButtonProps),n.ptm("button")),n.ptm("closeButton"))),[(Ue(),mn(ca(t.templates.closeicon||"TimesIcon"),nt({class:[n.cx("closeIcon"),t.closeIcon]},cs(cs({},n.ptm("buttonIcon")),n.ptm("closeIcon"))),null,16,["class"]))],16,tA)),[[a]])],16)):bn("",!0)],16))],16)}rm.render=nA;function iA(n){return oA(n)||aA(n)||sA(n)||rA()}function rA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sA(n,e){if(n){if(typeof n=="string")return Gc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Gc(n,e)}}function aA(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function oA(n){if(Array.isArray(n))return Gc(n)}function Gc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var lA=0,sm={name:"Toast",extends:ZT,inheritAttrs:!1,emits:["close","life-end"],data:function(){return{messages:[]}},styleElement:null,mounted:function(){yn.on("add",this.onAdd),yn.on("remove",this.onRemove),yn.on("remove-group",this.onRemoveGroup),yn.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount:function(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&El.clear(this.$refs.container),yn.off("add",this.onAdd),yn.off("remove",this.onRemove),yn.off("remove-group",this.onRemoveGroup),yn.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add:function(e){e.id==null&&(e.id=lA++),this.messages=[].concat(iA(this.messages),[e])},remove:function(e){var t=this.messages.findIndex(function(i){return i.id===e.message.id});t!==-1&&(this.messages.splice(t,1),this.$emit(e.type,{message:e.message}))},onAdd:function(e){this.group==e.group&&this.add(e)},onRemove:function(e){this.remove({message:e,type:"close"})},onRemoveGroup:function(e){this.group===e&&(this.messages=[])},onRemoveAllGroups:function(){this.messages=[]},onEnter:function(){this.$refs.container.setAttribute(this.attributeSelector,""),this.autoZIndex&&El.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave:function(){var e=this;this.$refs.container&&this.autoZIndex&&Ye.isEmpty(this.messages)&&setTimeout(function(){El.clear(e.$refs.container)},200)},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",Pt.setAttribute(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var t="";for(var i in this.breakpoints){var r="";for(var s in this.breakpoints[i])r+=s+":"+this.breakpoints[i][s]+"!important;";t+=`
                        @media screen and (max-width: `.concat(i,`) {
                            .p-toast[`).concat(this.attributeSelector,`] {
                                `).concat(r,`
                            }
                        }
                    `)}this.styleElement.innerHTML=t}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},computed:{attributeSelector:function(){return EE()}},components:{ToastMessage:rm,Portal:Zp}};function Ys(n){"@babel/helpers - typeof";return Ys=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ys(n)}function Hd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Gd(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Hd(Object(t),!0).forEach(function(i){cA(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Hd(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function cA(n,e,t){return e=uA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function uA(n){var e=fA(n,"string");return Ys(e)=="symbol"?e:String(e)}function fA(n,e){if(Ys(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(Ys(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function dA(n,e,t,i,r,s){var a=Br("ToastMessage"),o=Br("Portal");return Ue(),mn(o,null,{default:Ja(function(){return[W("div",nt({ref:"container",class:n.cx("root"),style:n.sx("root",!0,{position:n.position})},n.ptmi("root")),[dt(B0,nt({name:"p-toast-message",tag:"div",onEnter:s.onEnter,onLeave:s.onLeave},Gd(Gd({},n.ptm("message")),n.ptm("transition"))),{default:Ja(function(){return[(Ue(!0),Ge(vt,null,kn(r.messages,function(l){return Ue(),mn(a,{key:l.id,message:l,templates:n.$slots,closeIcon:n.closeIcon,infoIcon:n.infoIcon,warnIcon:n.warnIcon,errorIcon:n.errorIcon,successIcon:n.successIcon,closeButtonProps:n.closeButtonProps,onClose:e[0]||(e[0]=function(c){return s.remove(c)}),pt:n.pt},null,8,["message","templates","closeIcon","infoIcon","warnIcon","errorIcon","successIcon","closeButtonProps","pt"])}),128))]}),_:1},16,["onEnter","onLeave"])],16)]}),_:1})}sm.render=dA;var hA={root:function(e){var t=e.props,i=e.instance;return["p-badge p-component",{"p-badge-no-gutter":Ye.isNotEmpty(t.value)&&String(t.value).length===1,"p-badge-dot":Ye.isEmpty(t.value)&&!i.$slots.default,"p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warning":t.severity==="warning","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]}},pA=Kn.extend({name:"badge",classes:hA}),mA={name:"BaseBadge",extends:Zr,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:pA,provide:function(){return{$parentInstance:this}}},am={name:"Badge",extends:mA,inheritAttrs:!1};function gA(n,e,t,i,r,s){return Ue(),Ge("span",nt({class:n.cx("root")},n.ptmi("root")),[sr(n.$slots,"default",{},function(){return[Is(yt(n.value),1)]})],16)}am.render=gA;var om={name:"SpinnerIcon",extends:Jr},vA=W("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1),_A=[vA];function xA(n,e,t,i,r,s){return Ue(),Ge("svg",nt({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),_A,16)}om.render=xA;function Ks(n){"@babel/helpers - typeof";return Ks=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ks(n)}function Ci(n,e,t){return e=yA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function yA(n){var e=bA(n,"string");return Ks(e)=="symbol"?e:String(e)}function bA(n,e){if(Ks(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(Ks(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var SA={root:function(e){var t=e.instance,i=e.props;return["p-button p-component",Ci(Ci(Ci(Ci(Ci(Ci(Ci(Ci({"p-button-icon-only":t.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-disabled":t.$attrs.disabled||t.$attrs.disabled===""||i.loading,"p-button-loading":i.loading,"p-button-loading-label-only":i.loading&&!t.hasIcon&&i.label,"p-button-link":i.link},"p-button-".concat(i.severity),i.severity),"p-button-raised",i.raised),"p-button-rounded",i.rounded),"p-button-text",i.text),"p-button-outlined",i.outlined),"p-button-sm",i.size==="small"),"p-button-lg",i.size==="large"),"p-button-plain",i.plain)]},loadingIcon:"p-button-loading-icon pi-spin",icon:function(e){var t=e.props;return["p-button-icon",{"p-button-icon-left":t.iconPos==="left"&&t.label,"p-button-icon-right":t.iconPos==="right"&&t.label,"p-button-icon-top":t.iconPos==="top"&&t.label,"p-button-icon-bottom":t.iconPos==="bottom"&&t.label}]},label:"p-button-label"},MA=Kn.extend({name:"button",classes:SA}),EA={name:"BaseButton",extends:Zr,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},badgeSeverity:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:MA,provide:function(){return{$parentInstance:this}}},lm={name:"Button",extends:EA,inheritAttrs:!1,methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon}},components:{SpinnerIcon:om,Badge:am},directives:{ripple:im}},TA=["aria-label","disabled","data-p-severity"];function AA(n,e,t,i,r,s){var a=Br("SpinnerIcon"),o=Br("Badge"),l=Uh("ripple");return xh((Ue(),Ge("button",nt({class:n.cx("root"),type:"button","aria-label":s.defaultAriaLabel,disabled:s.disabled},s.getPTOptions("root"),{"data-p-severity":n.severity}),[sr(n.$slots,"default",{},function(){return[n.loading?sr(n.$slots,"loadingicon",{key:0,class:vn([n.cx("loadingIcon"),n.cx("icon")])},function(){return[n.loadingIcon?(Ue(),Ge("span",nt({key:0,class:[n.cx("loadingIcon"),n.cx("icon"),n.loadingIcon]},n.ptm("loadingIcon")),null,16)):(Ue(),mn(a,nt({key:1,class:[n.cx("loadingIcon"),n.cx("icon")],spin:""},n.ptm("loadingIcon")),null,16,["class"]))]}):sr(n.$slots,"icon",{key:1,class:vn([n.cx("icon")])},function(){return[n.icon?(Ue(),Ge("span",nt({key:0,class:[n.cx("icon"),n.icon,n.iconClass]},n.ptm("icon")),null,16)):bn("",!0)]}),W("span",nt({class:n.cx("label")},n.ptm("label")),yt(n.label||" "),17),n.badge?(Ue(),mn(o,nt({key:2,value:n.badge,class:n.badgeClass,severity:n.badgeSeverity,unstyled:n.unstyled},n.ptm("badge")),null,16,["value","class","severity","unstyled"])):bn("",!0)]})],16,TA)),[[l]])}lm.render=AA;var wA={root:function(e){var t=e.instance;return["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}]},container:"p-progressbar-indeterminate-container",value:"p-progressbar-value p-progressbar-value-animate",label:"p-progressbar-label"},CA=Kn.extend({name:"progressbar",classes:wA}),RA={name:"BaseProgressBar",extends:Zr,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:CA,provide:function(){return{$parentInstance:this}}},cm={name:"ProgressBar",extends:RA,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},PA=["aria-valuenow"];function IA(n,e,t,i,r,s){return Ue(),Ge("div",nt({role:"progressbar",class:n.cx("root"),"aria-valuemin":"0","aria-valuenow":n.value,"aria-valuemax":"100"},n.ptmi("root")),[s.determinate?(Ue(),Ge("div",nt({key:0,class:n.cx("value"),style:s.progressStyle},n.ptm("value")),[n.value!=null&&n.value!==0&&n.showValue?(Ue(),Ge("div",nt({key:0,class:n.cx("label")},n.ptm("label")),[sr(n.$slots,"default",{},function(){return[Is(yt(n.value+"%"),1)]})],16)):bn("",!0)],16)):bn("",!0),s.indeterminate?(Ue(),Ge("div",nt({key:1,class:n.cx("container")},n.ptm("container")),[W("div",nt({class:n.cx("value")},n.ptm("value")),null,16)],16)):bn("",!0)],16,PA)}cm.render=IA;function DA(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ja={exports:{}},LA=ja.exports,Wd;function UA(){return Wd||(Wd=1,function(n,e){(function(t,i){n.exports=i()})(LA,function(){return function(t){function i(s){if(r[s])return r[s].exports;var a=r[s]={exports:{},id:s,loaded:!1};return t[s].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}var r={};return i.m=t,i.c=r,i.p="dist/",i(0)}([function(t,i,r){function s(B){return B&&B.__esModule?B:{default:B}}var a=Object.assign||function(B){for(var z=1;z<arguments.length;z++){var H=arguments[z];for(var O in H)Object.prototype.hasOwnProperty.call(H,O)&&(B[O]=H[O])}return B},o=r(1),l=(s(o),r(6)),c=s(l),u=r(7),d=s(u),f=r(8),h=s(f),g=r(9),_=s(g),m=r(10),p=s(m),y=r(11),T=s(y),E=r(14),D=s(E),R=[],U=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},M=function(){var B=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(B&&(U=!0),U)return R=(0,T.default)(R,x),(0,p.default)(R,x.once),R},G=function(){R=(0,D.default)(),M()},A=function(){R.forEach(function(B,z){B.node.removeAttribute("data-aos"),B.node.removeAttribute("data-aos-easing"),B.node.removeAttribute("data-aos-duration"),B.node.removeAttribute("data-aos-delay")})},C=function(B){return B===!0||B==="mobile"&&_.default.mobile()||B==="phone"&&_.default.phone()||B==="tablet"&&_.default.tablet()||typeof B=="function"&&B()===!0},N=function(B){x=a(x,B),R=(0,D.default)();var z=document.all&&!window.atob;return C(x.disable)||z?A():(x.disableMutationObserver||h.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),x.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?M(!0):x.startEvent==="load"?window.addEventListener(x.startEvent,function(){M(!0)}):document.addEventListener(x.startEvent,function(){M(!0)}),window.addEventListener("resize",(0,d.default)(M,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,d.default)(M,x.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,p.default)(R,x.once)},x.throttleDelay)),x.disableMutationObserver||h.default.ready("[data-aos]",G),R)};t.exports={init:N,refresh:M,refreshHard:G}},function(t,i){},,,,,function(t,i){(function(r){function s(C,N,B){function z(V){var Q=Pe,Z=Oe;return Pe=Oe=void 0,Te=V,ae=C.apply(Z,Q)}function H(V){return Te=V,ue=setTimeout(le,N),Fe?z(V):ae}function O(V){var Q=V-Ie,Z=V-Te,ie=N-Q;return I?G(ie,K-Z):ie}function ne(V){var Q=V-Ie,Z=V-Te;return Ie===void 0||Q>=N||Q<0||I&&Z>=K}function le(){var V=A();return ne(V)?de(V):void(ue=setTimeout(le,O(V)))}function de(V){return ue=void 0,P&&Pe?z(V):(Pe=Oe=void 0,ae)}function fe(){ue!==void 0&&clearTimeout(ue),Te=0,Pe=Ie=Oe=ue=void 0}function se(){return ue===void 0?ae:de(A())}function Ce(){var V=A(),Q=ne(V);if(Pe=arguments,Oe=this,Ie=V,Q){if(ue===void 0)return H(Ie);if(I)return ue=setTimeout(le,N),z(Ie)}return ue===void 0&&(ue=setTimeout(le,N)),ae}var Pe,Oe,K,ae,ue,Ie,Te=0,Fe=!1,I=!1,P=!0;if(typeof C!="function")throw new TypeError(f);return N=u(N)||0,o(B)&&(Fe=!!B.leading,I="maxWait"in B,K=I?M(u(B.maxWait)||0,N):K,P="trailing"in B?!!B.trailing:P),Ce.cancel=fe,Ce.flush=se,Ce}function a(C,N,B){var z=!0,H=!0;if(typeof C!="function")throw new TypeError(f);return o(B)&&(z="leading"in B?!!B.leading:z,H="trailing"in B?!!B.trailing:H),s(C,N,{leading:z,maxWait:N,trailing:H})}function o(C){var N=typeof C>"u"?"undefined":d(C);return!!C&&(N=="object"||N=="function")}function l(C){return!!C&&(typeof C>"u"?"undefined":d(C))=="object"}function c(C){return(typeof C>"u"?"undefined":d(C))=="symbol"||l(C)&&x.call(C)==g}function u(C){if(typeof C=="number")return C;if(c(C))return h;if(o(C)){var N=typeof C.valueOf=="function"?C.valueOf():C;C=o(N)?N+"":N}if(typeof C!="string")return C===0?C:+C;C=C.replace(_,"");var B=p.test(C);return B||y.test(C)?T(C.slice(2),B?2:8):m.test(C)?h:+C}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},f="Expected a function",h=NaN,g="[object Symbol]",_=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,y=/^0o[0-7]+$/i,T=parseInt,E=(typeof r>"u"?"undefined":d(r))=="object"&&r&&r.Object===Object&&r,D=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,R=E||D||Function("return this")(),U=Object.prototype,x=U.toString,M=Math.max,G=Math.min,A=function(){return R.Date.now()};t.exports=a}).call(i,function(){return this}())},function(t,i){(function(r){function s(A,C,N){function B(P){var V=Ce,Q=Pe;return Ce=Pe=void 0,Ie=P,K=A.apply(Q,V)}function z(P){return Ie=P,ae=setTimeout(ne,C),Te?B(P):K}function H(P){var V=P-ue,Q=P-Ie,Z=C-V;return Fe?M(Z,Oe-Q):Z}function O(P){var V=P-ue,Q=P-Ie;return ue===void 0||V>=C||V<0||Fe&&Q>=Oe}function ne(){var P=G();return O(P)?le(P):void(ae=setTimeout(ne,H(P)))}function le(P){return ae=void 0,I&&Ce?B(P):(Ce=Pe=void 0,K)}function de(){ae!==void 0&&clearTimeout(ae),Ie=0,Ce=ue=Pe=ae=void 0}function fe(){return ae===void 0?K:le(G())}function se(){var P=G(),V=O(P);if(Ce=arguments,Pe=this,ue=P,V){if(ae===void 0)return z(ue);if(Fe)return ae=setTimeout(ne,C),B(ue)}return ae===void 0&&(ae=setTimeout(ne,C)),K}var Ce,Pe,Oe,K,ae,ue,Ie=0,Te=!1,Fe=!1,I=!0;if(typeof A!="function")throw new TypeError(d);return C=c(C)||0,a(N)&&(Te=!!N.leading,Fe="maxWait"in N,Oe=Fe?x(c(N.maxWait)||0,C):Oe,I="trailing"in N?!!N.trailing:I),se.cancel=de,se.flush=fe,se}function a(A){var C=typeof A>"u"?"undefined":u(A);return!!A&&(C=="object"||C=="function")}function o(A){return!!A&&(typeof A>"u"?"undefined":u(A))=="object"}function l(A){return(typeof A>"u"?"undefined":u(A))=="symbol"||o(A)&&U.call(A)==h}function c(A){if(typeof A=="number")return A;if(l(A))return f;if(a(A)){var C=typeof A.valueOf=="function"?A.valueOf():A;A=a(C)?C+"":C}if(typeof A!="string")return A===0?A:+A;A=A.replace(g,"");var N=m.test(A);return N||p.test(A)?y(A.slice(2),N?2:8):_.test(A)?f:+A}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},d="Expected a function",f=NaN,h="[object Symbol]",g=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,p=/^0o[0-7]+$/i,y=parseInt,T=(typeof r>"u"?"undefined":u(r))=="object"&&r&&r.Object===Object&&r,E=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,D=T||E||Function("return this")(),R=Object.prototype,U=R.toString,x=Math.max,M=Math.min,G=function(){return D.Date.now()};t.exports=s}).call(i,function(){return this}())},function(t,i){function r(u){var d=void 0,f=void 0;for(d=0;d<u.length;d+=1)if(f=u[d],f.dataset&&f.dataset.aos||f.children&&r(f.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!s()}function o(u,d){var f=window.document,h=s(),g=new h(l);c=d,g.observe(f.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(u){u&&u.forEach(function(d){var f=Array.prototype.slice.call(d.addedNodes),h=Array.prototype.slice.call(d.removedNodes),g=f.concat(h);if(r(g))return c()})}Object.defineProperty(i,"__esModule",{value:!0});var c=function(){};i.default={isSupported:a,ready:o}},function(t,i){function r(f,h){if(!(f instanceof h))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function f(h,g){for(var _=0;_<g.length;_++){var m=g[_];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(h,m.key,m)}}return function(h,g,_){return g&&f(h.prototype,g),_&&f(h,_),h}}(),o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=function(){function f(){r(this,f)}return a(f,[{key:"phone",value:function(){var h=s();return!(!o.test(h)&&!l.test(h.substr(0,4)))}},{key:"mobile",value:function(){var h=s();return!(!c.test(h)&&!u.test(h.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),f}();i.default=new d},function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(a,o,l){var c=a.node.getAttribute("data-aos-once");o>a.position?a.node.classList.add("aos-animate"):typeof c<"u"&&(c==="false"||!l&&c!=="true")&&a.node.classList.remove("aos-animate")},s=function(a,o){var l=window.pageYOffset,c=window.innerHeight;a.forEach(function(u,d){r(u,c+l,o)})};i.default=s},function(t,i,r){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(i,"__esModule",{value:!0});var a=r(12),o=s(a),l=function(c,u){return c.forEach(function(d,f){d.node.classList.add("aos-init"),d.position=(0,o.default)(d.node,u.offset)}),c};i.default=l},function(t,i,r){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(i,"__esModule",{value:!0});var a=r(13),o=s(a),l=function(c,u){var d=0,f=0,h=window.innerHeight,g={offset:c.getAttribute("data-aos-offset"),anchor:c.getAttribute("data-aos-anchor"),anchorPlacement:c.getAttribute("data-aos-anchor-placement")};switch(g.offset&&!isNaN(g.offset)&&(f=parseInt(g.offset)),g.anchor&&document.querySelectorAll(g.anchor)&&(c=document.querySelectorAll(g.anchor)[0]),d=(0,o.default)(c).top,g.anchorPlacement){case"top-bottom":break;case"center-bottom":d+=c.offsetHeight/2;break;case"bottom-bottom":d+=c.offsetHeight;break;case"top-center":d+=h/2;break;case"bottom-center":d+=h/2+c.offsetHeight;break;case"center-center":d+=h/2+c.offsetHeight/2;break;case"top-top":d+=h;break;case"bottom-top":d+=c.offsetHeight+h;break;case"center-top":d+=c.offsetHeight/2+h}return g.anchorPlacement||g.offset||isNaN(u)||(f=u),d+f};i.default=l},function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){for(var a=0,o=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)a+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),o+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:o,left:a}};i.default=r},function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(a){return{node:a}})};i.default=r}])})}(ja)),ja.exports}var NA=UA();const OA=DA(NA);OA.init();const Qr=q0(cE);Qr.use(OE);Qr.use(FE);Qr.component("Toast",sm);Qr.component("Button",lm);Qr.component("ProgressBar",cm);Qr.mount("#app");
