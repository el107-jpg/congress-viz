function u$(n,t){for(var e=0;e<t.length;e++){const s=t[e];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in n)){const o=Object.getOwnPropertyDescriptor(s,r);o&&Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();function gl(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function h$(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function Gx(n){let t,e,s;n.length!==2?(t=gl,e=(a,l)=>gl(n(a),l),s=(a,l)=>n(a)-l):(t=n===gl||n===h$?n:d$,e=n,s=n);function r(a,l,c=0,u=a.length){if(c<u){if(t(l,l)!==0)return u;do{const h=c+u>>>1;e(a[h],l)<0?c=h+1:u=h}while(c<u)}return c}function o(a,l,c=0,u=a.length){if(c<u){if(t(l,l)!==0)return u;do{const h=c+u>>>1;e(a[h],l)<=0?c=h+1:u=h}while(c<u)}return c}function i(a,l,c=0,u=a.length){const h=r(a,l,c,u-1);return h>c&&s(a[h-1],l)>-s(a[h],l)?h-1:h}return{left:r,center:i,right:o}}function d$(){return 0}function f$(n){return n===null?NaN:+n}const p$=Gx(gl),m$=p$.right;Gx(f$).center;function $m(n,t){let e,s;if(t===void 0)for(const r of n)r!=null&&(e===void 0?r>=r&&(e=s=r):(e>r&&(e=r),s<r&&(s=r)));else{let r=-1;for(let o of n)(o=t(o,++r,n))!=null&&(e===void 0?o>=o&&(e=s=o):(e>o&&(e=o),s<o&&(s=o)))}return[e,s]}class km extends Map{constructor(t,e=b$){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),t!=null)for(const[s,r]of t)this.set(s,r)}get(t){return super.get(Im(this,t))}has(t){return super.has(Im(this,t))}set(t,e){return super.set(g$(this,t),e)}delete(t){return super.delete(x$(this,t))}}function Im({_intern:n,_key:t},e){const s=t(e);return n.has(s)?n.get(s):e}function g$({_intern:n,_key:t},e){const s=t(e);return n.has(s)?n.get(s):(n.set(s,e),e)}function x$({_intern:n,_key:t},e){const s=t(e);return n.has(s)&&(e=n.get(s),n.delete(s)),e}function b$(n){return n!==null&&typeof n=="object"?n.valueOf():n}const y$=Math.sqrt(50),w$=Math.sqrt(10),v$=Math.sqrt(2);function Rl(n,t,e){const s=(t-n)/Math.max(0,e),r=Math.floor(Math.log10(s)),o=s/Math.pow(10,r),i=o>=y$?10:o>=w$?5:o>=v$?2:1;let a,l,c;return r<0?(c=Math.pow(10,-r)/i,a=Math.round(n*c),l=Math.round(t*c),a/c<n&&++a,l/c>t&&--l,c=-c):(c=Math.pow(10,r)*i,a=Math.round(n/c),l=Math.round(t/c),a*c<n&&++a,l*c>t&&--l),l<a&&.5<=e&&e<2?Rl(n,t,e*2):[a,l,c]}function C$(n,t,e){if(t=+t,n=+n,e=+e,!(e>0))return[];if(n===t)return[n];const s=t<n,[r,o,i]=s?Rl(t,n,e):Rl(n,t,e);if(!(o>=r))return[];const a=o-r+1,l=new Array(a);if(s)if(i<0)for(let c=0;c<a;++c)l[c]=(o-c)/-i;else for(let c=0;c<a;++c)l[c]=(o-c)*i;else if(i<0)for(let c=0;c<a;++c)l[c]=(r+c)/-i;else for(let c=0;c<a;++c)l[c]=(r+c)*i;return l}function kh(n,t,e){return t=+t,n=+n,e=+e,Rl(n,t,e)[2]}function $$(n,t,e){t=+t,n=+n,e=+e;const s=t<n,r=s?kh(t,n,e):kh(n,t,e);return(s?-1:1)*(r<0?1/-r:r)}var k$={value:()=>{}};function Id(){for(var n=0,t=arguments.length,e={},s;n<t;++n){if(!(s=arguments[n]+"")||s in e||/[\s.]/.test(s))throw new Error("illegal type: "+s);e[s]=[]}return new xl(e)}function xl(n){this._=n}function I$(n,t){return n.trim().split(/^|\s+/).map(function(e){var s="",r=e.indexOf(".");if(r>=0&&(s=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:s}})}xl.prototype=Id.prototype={constructor:xl,on:function(n,t){var e=this._,s=I$(n+"",e),r,o=-1,i=s.length;if(arguments.length<2){for(;++o<i;)if((r=(n=s[o]).type)&&(r=S$(e[r],n.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<i;)if(r=(n=s[o]).type)e[r]=Sm(e[r],n.name,t);else if(t==null)for(r in e)e[r]=Sm(e[r],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new xl(n)},call:function(n,t){if((r=arguments.length-2)>0)for(var e=new Array(r),s=0,r,o;s<r;++s)e[s]=arguments[s+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(o=this._[n],s=0,r=o.length;s<r;++s)o[s].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var s=this._[n],r=0,o=s.length;r<o;++r)s[r].value.apply(t,e)}};function S$(n,t){for(var e=0,s=n.length,r;e<s;++e)if((r=n[e]).name===t)return r.value}function Sm(n,t,e){for(var s=0,r=n.length;s<r;++s)if(n[s].name===t){n[s]=k$,n=n.slice(0,s).concat(n.slice(s+1));break}return e!=null&&n.push({name:t,value:e}),n}var Ih="http://www.w3.org/1999/xhtml";const Nm={svg:"http://www.w3.org/2000/svg",xhtml:Ih,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function gc(n){var t=n+="",e=t.indexOf(":");return e>=0&&(t=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),Nm.hasOwnProperty(t)?{space:Nm[t],local:n}:n}function N$(n){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===Ih&&t.documentElement.namespaceURI===Ih?t.createElement(n):t.createElementNS(e,n)}}function T$(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function Hx(n){var t=gc(n);return(t.local?T$:N$)(t)}function E$(){}function Sd(n){return n==null?E$:function(){return this.querySelector(n)}}function R$(n){typeof n!="function"&&(n=Sd(n));for(var t=this._groups,e=t.length,s=new Array(e),r=0;r<e;++r)for(var o=t[r],i=o.length,a=s[r]=new Array(i),l,c,u=0;u<i;++u)(l=o[u])&&(c=n.call(l,l.__data__,u,o))&&("__data__"in l&&(c.__data__=l.__data__),a[u]=c);return new Cn(s,this._parents)}function A$(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function D$(){return[]}function qx(n){return n==null?D$:function(){return this.querySelectorAll(n)}}function _$(n){return function(){return A$(n.apply(this,arguments))}}function F$(n){typeof n=="function"?n=_$(n):n=qx(n);for(var t=this._groups,e=t.length,s=[],r=[],o=0;o<e;++o)for(var i=t[o],a=i.length,l,c=0;c<a;++c)(l=i[c])&&(s.push(n.call(l,l.__data__,c,i)),r.push(l));return new Cn(s,r)}function Xx(n){return function(){return this.matches(n)}}function Kx(n){return function(t){return t.matches(n)}}var O$=Array.prototype.find;function M$(n){return function(){return O$.call(this.children,n)}}function L$(){return this.firstElementChild}function P$(n){return this.select(n==null?L$:M$(typeof n=="function"?n:Kx(n)))}var z$=Array.prototype.filter;function B$(){return Array.from(this.children)}function V$(n){return function(){return z$.call(this.children,n)}}function W$(n){return this.selectAll(n==null?B$:V$(typeof n=="function"?n:Kx(n)))}function U$(n){typeof n!="function"&&(n=Xx(n));for(var t=this._groups,e=t.length,s=new Array(e),r=0;r<e;++r)for(var o=t[r],i=o.length,a=s[r]=[],l,c=0;c<i;++c)(l=o[c])&&n.call(l,l.__data__,c,o)&&a.push(l);return new Cn(s,this._parents)}function jx(n){return new Array(n.length)}function G$(){return new Cn(this._enter||this._groups.map(jx),this._parents)}function Al(n,t){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=t}Al.prototype={constructor:Al,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,t){return this._parent.insertBefore(n,t)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function H$(n){return function(){return n}}function q$(n,t,e,s,r,o){for(var i=0,a,l=t.length,c=o.length;i<c;++i)(a=t[i])?(a.__data__=o[i],s[i]=a):e[i]=new Al(n,o[i]);for(;i<l;++i)(a=t[i])&&(r[i]=a)}function X$(n,t,e,s,r,o,i){var a,l,c=new Map,u=t.length,h=o.length,d=new Array(u),f;for(a=0;a<u;++a)(l=t[a])&&(d[a]=f=i.call(l,l.__data__,a,t)+"",c.has(f)?r[a]=l:c.set(f,l));for(a=0;a<h;++a)f=i.call(n,o[a],a,o)+"",(l=c.get(f))?(s[a]=l,l.__data__=o[a],c.delete(f)):e[a]=new Al(n,o[a]);for(a=0;a<u;++a)(l=t[a])&&c.get(d[a])===l&&(r[a]=l)}function K$(n){return n.__data__}function j$(n,t){if(!arguments.length)return Array.from(this,K$);var e=t?X$:q$,s=this._parents,r=this._groups;typeof n!="function"&&(n=H$(n));for(var o=r.length,i=new Array(o),a=new Array(o),l=new Array(o),c=0;c<o;++c){var u=s[c],h=r[c],d=h.length,f=Y$(n.call(u,u&&u.__data__,c,s)),p=f.length,m=a[c]=new Array(p),g=i[c]=new Array(p),x=l[c]=new Array(d);e(u,h,m,g,x,f,t);for(var b=0,w=0,y,v;b<p;++b)if(y=m[b]){for(b>=w&&(w=b+1);!(v=g[w])&&++w<p;);y._next=v||null}}return i=new Cn(i,s),i._enter=a,i._exit=l,i}function Y$(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function Z$(){return new Cn(this._exit||this._groups.map(jx),this._parents)}function J$(n,t,e){var s=this.enter(),r=this,o=this.exit();return typeof n=="function"?(s=n(s),s&&(s=s.selection())):s=s.append(n+""),t!=null&&(r=t(r),r&&(r=r.selection())),e==null?o.remove():e(o),s&&r?s.merge(r).order():r}function Q$(n){for(var t=n.selection?n.selection():n,e=this._groups,s=t._groups,r=e.length,o=s.length,i=Math.min(r,o),a=new Array(r),l=0;l<i;++l)for(var c=e[l],u=s[l],h=c.length,d=a[l]=new Array(h),f,p=0;p<h;++p)(f=c[p]||u[p])&&(d[p]=f);for(;l<r;++l)a[l]=e[l];return new Cn(a,this._parents)}function tk(){for(var n=this._groups,t=-1,e=n.length;++t<e;)for(var s=n[t],r=s.length-1,o=s[r],i;--r>=0;)(i=s[r])&&(o&&i.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(i,o),o=i);return this}function ek(n){n||(n=nk);function t(h,d){return h&&d?n(h.__data__,d.__data__):!h-!d}for(var e=this._groups,s=e.length,r=new Array(s),o=0;o<s;++o){for(var i=e[o],a=i.length,l=r[o]=new Array(a),c,u=0;u<a;++u)(c=i[u])&&(l[u]=c);l.sort(t)}return new Cn(r,this._parents).order()}function nk(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function sk(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function rk(){return Array.from(this)}function ok(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var s=n[t],r=0,o=s.length;r<o;++r){var i=s[r];if(i)return i}return null}function ik(){let n=0;for(const t of this)++n;return n}function ak(){return!this.node()}function lk(n){for(var t=this._groups,e=0,s=t.length;e<s;++e)for(var r=t[e],o=0,i=r.length,a;o<i;++o)(a=r[o])&&n.call(a,a.__data__,o,r);return this}function ck(n){return function(){this.removeAttribute(n)}}function uk(n){return function(){this.removeAttributeNS(n.space,n.local)}}function hk(n,t){return function(){this.setAttribute(n,t)}}function dk(n,t){return function(){this.setAttributeNS(n.space,n.local,t)}}function fk(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function pk(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function mk(n,t){var e=gc(n);if(arguments.length<2){var s=this.node();return e.local?s.getAttributeNS(e.space,e.local):s.getAttribute(e)}return this.each((t==null?e.local?uk:ck:typeof t=="function"?e.local?pk:fk:e.local?dk:hk)(e,t))}function Yx(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function gk(n){return function(){this.style.removeProperty(n)}}function xk(n,t,e){return function(){this.style.setProperty(n,t,e)}}function bk(n,t,e){return function(){var s=t.apply(this,arguments);s==null?this.style.removeProperty(n):this.style.setProperty(n,s,e)}}function yk(n,t,e){return arguments.length>1?this.each((t==null?gk:typeof t=="function"?bk:xk)(n,t,e??"")):mo(this.node(),n)}function mo(n,t){return n.style.getPropertyValue(t)||Yx(n).getComputedStyle(n,null).getPropertyValue(t)}function wk(n){return function(){delete this[n]}}function vk(n,t){return function(){this[n]=t}}function Ck(n,t){return function(){var e=t.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function $k(n,t){return arguments.length>1?this.each((t==null?wk:typeof t=="function"?Ck:vk)(n,t)):this.node()[n]}function Zx(n){return n.trim().split(/^|\s+/)}function Nd(n){return n.classList||new Jx(n)}function Jx(n){this._node=n,this._names=Zx(n.getAttribute("class")||"")}Jx.prototype={add:function(n){var t=this._names.indexOf(n);t<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var t=this._names.indexOf(n);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function Qx(n,t){for(var e=Nd(n),s=-1,r=t.length;++s<r;)e.add(t[s])}function t0(n,t){for(var e=Nd(n),s=-1,r=t.length;++s<r;)e.remove(t[s])}function kk(n){return function(){Qx(this,n)}}function Ik(n){return function(){t0(this,n)}}function Sk(n,t){return function(){(t.apply(this,arguments)?Qx:t0)(this,n)}}function Nk(n,t){var e=Zx(n+"");if(arguments.length<2){for(var s=Nd(this.node()),r=-1,o=e.length;++r<o;)if(!s.contains(e[r]))return!1;return!0}return this.each((typeof t=="function"?Sk:t?kk:Ik)(e,t))}function Tk(){this.textContent=""}function Ek(n){return function(){this.textContent=n}}function Rk(n){return function(){var t=n.apply(this,arguments);this.textContent=t??""}}function Ak(n){return arguments.length?this.each(n==null?Tk:(typeof n=="function"?Rk:Ek)(n)):this.node().textContent}function Dk(){this.innerHTML=""}function _k(n){return function(){this.innerHTML=n}}function Fk(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t??""}}function Ok(n){return arguments.length?this.each(n==null?Dk:(typeof n=="function"?Fk:_k)(n)):this.node().innerHTML}function Mk(){this.nextSibling&&this.parentNode.appendChild(this)}function Lk(){return this.each(Mk)}function Pk(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function zk(){return this.each(Pk)}function Bk(n){var t=typeof n=="function"?n:Hx(n);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Vk(){return null}function Wk(n,t){var e=typeof n=="function"?n:Hx(n),s=t==null?Vk:typeof t=="function"?t:Sd(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),s.apply(this,arguments)||null)})}function Uk(){var n=this.parentNode;n&&n.removeChild(this)}function Gk(){return this.each(Uk)}function Hk(){var n=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function qk(){var n=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function Xk(n){return this.select(n?qk:Hk)}function Kk(n){return arguments.length?this.property("__data__",n):this.node().__data__}function jk(n){return function(t){n.call(this,t,this.__data__)}}function Yk(n){return n.trim().split(/^|\s+/).map(function(t){var e="",s=t.indexOf(".");return s>=0&&(e=t.slice(s+1),t=t.slice(0,s)),{type:t,name:e}})}function Zk(n){return function(){var t=this.__on;if(t){for(var e=0,s=-1,r=t.length,o;e<r;++e)o=t[e],(!n.type||o.type===n.type)&&o.name===n.name?this.removeEventListener(o.type,o.listener,o.options):t[++s]=o;++s?t.length=s:delete this.__on}}}function Jk(n,t,e){return function(){var s=this.__on,r,o=jk(t);if(s){for(var i=0,a=s.length;i<a;++i)if((r=s[i]).type===n.type&&r.name===n.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),r.value=t;return}}this.addEventListener(n.type,o,e),r={type:n.type,name:n.name,value:t,listener:o,options:e},s?s.push(r):this.__on=[r]}}function Qk(n,t,e){var s=Yk(n+""),r,o=s.length,i;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,u;l<c;++l)for(r=0,u=a[l];r<o;++r)if((i=s[r]).type===u.type&&i.name===u.name)return u.value}return}for(a=t?Jk:Zk,r=0;r<o;++r)this.each(a(s[r],t,e));return this}function e0(n,t,e){var s=Yx(n),r=s.CustomEvent;typeof r=="function"?r=new r(t,e):(r=s.document.createEvent("Event"),e?(r.initEvent(t,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(t,!1,!1)),n.dispatchEvent(r)}function tI(n,t){return function(){return e0(this,n,t)}}function eI(n,t){return function(){return e0(this,n,t.apply(this,arguments))}}function nI(n,t){return this.each((typeof t=="function"?eI:tI)(n,t))}function*sI(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var s=n[t],r=0,o=s.length,i;r<o;++r)(i=s[r])&&(yield i)}var n0=[null];function Cn(n,t){this._groups=n,this._parents=t}function Ei(){return new Cn([[document.documentElement]],n0)}function rI(){return this}Cn.prototype=Ei.prototype={constructor:Cn,select:R$,selectAll:F$,selectChild:P$,selectChildren:W$,filter:U$,data:j$,enter:G$,exit:Z$,join:J$,merge:Q$,selection:rI,order:tk,sort:ek,call:sk,nodes:rk,node:ok,size:ik,empty:ak,each:lk,attr:mk,style:yk,property:$k,classed:Nk,text:Ak,html:Ok,raise:Lk,lower:zk,append:Bk,insert:Wk,remove:Gk,clone:Xk,datum:Kk,on:Qk,dispatch:nI,[Symbol.iterator]:sI};function ce(n){return typeof n=="string"?new Cn([[document.querySelector(n)]],[document.documentElement]):new Cn([[n]],n0)}function oI(n){let t;for(;t=n.sourceEvent;)n=t;return n}function Tm(n,t){if(n=oI(n),t===void 0&&(t=n.currentTarget),t){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var s=e.createSVGPoint();return s.x=n.clientX,s.y=n.clientY,s=s.matrixTransform(t.getScreenCTM().inverse()),[s.x,s.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[n.clientX-r.left-t.clientLeft,n.clientY-r.top-t.clientTop]}}return[n.pageX,n.pageY]}const iI={passive:!1},ui={capture:!0,passive:!1};function eh(n){n.stopImmediatePropagation()}function ao(n){n.preventDefault(),n.stopImmediatePropagation()}function aI(n){var t=n.document.documentElement,e=ce(n).on("dragstart.drag",ao,ui);"onselectstart"in t?e.on("selectstart.drag",ao,ui):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function lI(n,t){var e=n.document.documentElement,s=ce(n).on("dragstart.drag",null);t&&(s.on("click.drag",ao,ui),setTimeout(function(){s.on("click.drag",null)},0)),"onselectstart"in e?s.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}const Za=n=>()=>n;function Sh(n,{sourceEvent:t,subject:e,target:s,identifier:r,active:o,x:i,y:a,dx:l,dy:c,dispatch:u}){Object.defineProperties(this,{type:{value:n,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:e,enumerable:!0,configurable:!0},target:{value:s,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:i,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:c,enumerable:!0,configurable:!0},_:{value:u}})}Sh.prototype.on=function(){var n=this._.on.apply(this._,arguments);return n===this._?this:n};function cI(n){return!n.ctrlKey&&!n.button}function uI(){return this.parentNode}function hI(n,t){return t??{x:n.x,y:n.y}}function dI(){return navigator.maxTouchPoints||"ontouchstart"in this}function fI(){var n=cI,t=uI,e=hI,s=dI,r={},o=Id("start","drag","end"),i=0,a,l,c,u,h=0;function d(y){y.on("mousedown.drag",f).filter(s).on("touchstart.drag",g).on("touchmove.drag",x,iI).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function f(y,v){if(!(u||!n.call(this,y,v))){var $=w(this,t.call(this,y,v),y,v,"mouse");$&&(ce(y.view).on("mousemove.drag",p,ui).on("mouseup.drag",m,ui),aI(y.view),eh(y),c=!1,a=y.clientX,l=y.clientY,$("start",y))}}function p(y){if(ao(y),!c){var v=y.clientX-a,$=y.clientY-l;c=v*v+$*$>h}r.mouse("drag",y)}function m(y){ce(y.view).on("mousemove.drag mouseup.drag",null),lI(y.view,c),ao(y),r.mouse("end",y)}function g(y,v){if(n.call(this,y,v)){var $=y.changedTouches,N=t.call(this,y,v),S=$.length,I,k;for(I=0;I<S;++I)(k=w(this,N,y,v,$[I].identifier,$[I]))&&(eh(y),k("start",y,$[I]))}}function x(y){var v=y.changedTouches,$=v.length,N,S;for(N=0;N<$;++N)(S=r[v[N].identifier])&&(ao(y),S("drag",y,v[N]))}function b(y){var v=y.changedTouches,$=v.length,N,S;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),N=0;N<$;++N)(S=r[v[N].identifier])&&(eh(y),S("end",y,v[N]))}function w(y,v,$,N,S,I){var k=o.copy(),C=Tm(I||$,v),E,_,R;if((R=e.call(y,new Sh("beforestart",{sourceEvent:$,target:d,identifier:S,active:i,x:C[0],y:C[1],dx:0,dy:0,dispatch:k}),N))!=null)return E=R.x-C[0]||0,_=R.y-C[1]||0,function M(z,P,U){var q=C,j;switch(z){case"start":r[S]=M,j=i++;break;case"end":delete r[S],--i;case"drag":C=Tm(U||P,v),j=i;break}k.call(z,y,new Sh(z,{sourceEvent:P,subject:R,target:d,identifier:S,active:j,x:C[0]+E,y:C[1]+_,dx:C[0]-q[0],dy:C[1]-q[1],dispatch:k}),N)}}return d.filter=function(y){return arguments.length?(n=typeof y=="function"?y:Za(!!y),d):n},d.container=function(y){return arguments.length?(t=typeof y=="function"?y:Za(y),d):t},d.subject=function(y){return arguments.length?(e=typeof y=="function"?y:Za(y),d):e},d.touchable=function(y){return arguments.length?(s=typeof y=="function"?y:Za(!!y),d):s},d.on=function(){var y=o.on.apply(o,arguments);return y===o?d:y},d.clickDistance=function(y){return arguments.length?(h=(y=+y)*y,d):Math.sqrt(h)},d}function Td(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function s0(n,t){var e=Object.create(n.prototype);for(var s in t)e[s]=t[s];return e}function Ri(){}var hi=.7,Dl=1/hi,lo="\\s*([+-]?\\d+)\\s*",di="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",hs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",pI=/^#([0-9a-f]{3,8})$/,mI=new RegExp(`^rgb\\(${lo},${lo},${lo}\\)$`),gI=new RegExp(`^rgb\\(${hs},${hs},${hs}\\)$`),xI=new RegExp(`^rgba\\(${lo},${lo},${lo},${di}\\)$`),bI=new RegExp(`^rgba\\(${hs},${hs},${hs},${di}\\)$`),yI=new RegExp(`^hsl\\(${di},${hs},${hs}\\)$`),wI=new RegExp(`^hsla\\(${di},${hs},${hs},${di}\\)$`),Em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Td(Ri,Tr,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Rm,formatHex:Rm,formatHex8:vI,formatHsl:CI,formatRgb:Am,toString:Am});function Rm(){return this.rgb().formatHex()}function vI(){return this.rgb().formatHex8()}function CI(){return r0(this).formatHsl()}function Am(){return this.rgb().formatRgb()}function Tr(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=pI.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?Dm(t):e===3?new fn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?Ja(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?Ja(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=mI.exec(n))?new fn(t[1],t[2],t[3],1):(t=gI.exec(n))?new fn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=xI.exec(n))?Ja(t[1],t[2],t[3],t[4]):(t=bI.exec(n))?Ja(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=yI.exec(n))?Om(t[1],t[2]/100,t[3]/100,1):(t=wI.exec(n))?Om(t[1],t[2]/100,t[3]/100,t[4]):Em.hasOwnProperty(n)?Dm(Em[n]):n==="transparent"?new fn(NaN,NaN,NaN,0):null}function Dm(n){return new fn(n>>16&255,n>>8&255,n&255,1)}function Ja(n,t,e,s){return s<=0&&(n=t=e=NaN),new fn(n,t,e,s)}function $I(n){return n instanceof Ri||(n=Tr(n)),n?(n=n.rgb(),new fn(n.r,n.g,n.b,n.opacity)):new fn}function Nh(n,t,e,s){return arguments.length===1?$I(n):new fn(n,t,e,s??1)}function fn(n,t,e,s){this.r=+n,this.g=+t,this.b=+e,this.opacity=+s}Td(fn,Nh,s0(Ri,{brighter(n){return n=n==null?Dl:Math.pow(Dl,n),new fn(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?hi:Math.pow(hi,n),new fn(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new fn(kr(this.r),kr(this.g),kr(this.b),_l(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:_m,formatHex:_m,formatHex8:kI,formatRgb:Fm,toString:Fm}));function _m(){return`#${vr(this.r)}${vr(this.g)}${vr(this.b)}`}function kI(){return`#${vr(this.r)}${vr(this.g)}${vr(this.b)}${vr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Fm(){const n=_l(this.opacity);return`${n===1?"rgb(":"rgba("}${kr(this.r)}, ${kr(this.g)}, ${kr(this.b)}${n===1?")":`, ${n})`}`}function _l(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function kr(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function vr(n){return n=kr(n),(n<16?"0":"")+n.toString(16)}function Om(n,t,e,s){return s<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new qn(n,t,e,s)}function r0(n){if(n instanceof qn)return new qn(n.h,n.s,n.l,n.opacity);if(n instanceof Ri||(n=Tr(n)),!n)return new qn;if(n instanceof qn)return n;n=n.rgb();var t=n.r/255,e=n.g/255,s=n.b/255,r=Math.min(t,e,s),o=Math.max(t,e,s),i=NaN,a=o-r,l=(o+r)/2;return a?(t===o?i=(e-s)/a+(e<s)*6:e===o?i=(s-t)/a+2:i=(t-e)/a+4,a/=l<.5?o+r:2-o-r,i*=60):a=l>0&&l<1?0:i,new qn(i,a,l,n.opacity)}function II(n,t,e,s){return arguments.length===1?r0(n):new qn(n,t,e,s??1)}function qn(n,t,e,s){this.h=+n,this.s=+t,this.l=+e,this.opacity=+s}Td(qn,II,s0(Ri,{brighter(n){return n=n==null?Dl:Math.pow(Dl,n),new qn(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?hi:Math.pow(hi,n),new qn(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,s=e+(e<.5?e:1-e)*t,r=2*e-s;return new fn(nh(n>=240?n-240:n+120,r,s),nh(n,r,s),nh(n<120?n+240:n-120,r,s),this.opacity)},clamp(){return new qn(Mm(this.h),Qa(this.s),Qa(this.l),_l(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=_l(this.opacity);return`${n===1?"hsl(":"hsla("}${Mm(this.h)}, ${Qa(this.s)*100}%, ${Qa(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Mm(n){return n=(n||0)%360,n<0?n+360:n}function Qa(n){return Math.max(0,Math.min(1,n||0))}function nh(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}const Ed=n=>()=>n;function SI(n,t){return function(e){return n+e*t}}function NI(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(s){return Math.pow(n+s*t,e)}}function TI(n){return(n=+n)==1?o0:function(t,e){return e-t?NI(t,e,n):Ed(isNaN(t)?e:t)}}function o0(n,t){var e=t-n;return e?SI(n,e):Ed(isNaN(n)?t:n)}const Fl=(function n(t){var e=TI(t);function s(r,o){var i=e((r=Nh(r)).r,(o=Nh(o)).r),a=e(r.g,o.g),l=e(r.b,o.b),c=o0(r.opacity,o.opacity);return function(u){return r.r=i(u),r.g=a(u),r.b=l(u),r.opacity=c(u),r+""}}return s.gamma=n,s})(1);function EI(n,t){t||(t=[]);var e=n?Math.min(t.length,n.length):0,s=t.slice(),r;return function(o){for(r=0;r<e;++r)s[r]=n[r]*(1-o)+t[r]*o;return s}}function RI(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function AI(n,t){var e=t?t.length:0,s=n?Math.min(e,n.length):0,r=new Array(s),o=new Array(e),i;for(i=0;i<s;++i)r[i]=Rd(n[i],t[i]);for(;i<e;++i)o[i]=t[i];return function(a){for(i=0;i<s;++i)o[i]=r[i](a);return o}}function DI(n,t){var e=new Date;return n=+n,t=+t,function(s){return e.setTime(n*(1-s)+t*s),e}}function Un(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function _I(n,t){var e={},s={},r;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in n?e[r]=Rd(n[r],t[r]):s[r]=t[r];return function(o){for(r in e)s[r]=e[r](o);return s}}var Th=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,sh=new RegExp(Th.source,"g");function FI(n){return function(){return n}}function OI(n){return function(t){return n(t)+""}}function i0(n,t){var e=Th.lastIndex=sh.lastIndex=0,s,r,o,i=-1,a=[],l=[];for(n=n+"",t=t+"";(s=Th.exec(n))&&(r=sh.exec(t));)(o=r.index)>e&&(o=t.slice(e,o),a[i]?a[i]+=o:a[++i]=o),(s=s[0])===(r=r[0])?a[i]?a[i]+=r:a[++i]=r:(a[++i]=null,l.push({i,x:Un(s,r)})),e=sh.lastIndex;return e<t.length&&(o=t.slice(e),a[i]?a[i]+=o:a[++i]=o),a.length<2?l[0]?OI(l[0].x):FI(t):(t=l.length,function(c){for(var u=0,h;u<t;++u)a[(h=l[u]).i]=h.x(c);return a.join("")})}function Rd(n,t){var e=typeof t,s;return t==null||e==="boolean"?Ed(t):(e==="number"?Un:e==="string"?(s=Tr(t))?(t=s,Fl):i0:t instanceof Tr?Fl:t instanceof Date?DI:RI(t)?EI:Array.isArray(t)?AI:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?_I:Un)(n,t)}function MI(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}var Lm=180/Math.PI,Eh={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function a0(n,t,e,s,r,o){var i,a,l;return(i=Math.sqrt(n*n+t*t))&&(n/=i,t/=i),(l=n*e+t*s)&&(e-=n*l,s-=t*l),(a=Math.sqrt(e*e+s*s))&&(e/=a,s/=a,l/=a),n*s<t*e&&(n=-n,t=-t,l=-l,i=-i),{translateX:r,translateY:o,rotate:Math.atan2(t,n)*Lm,skewX:Math.atan(l)*Lm,scaleX:i,scaleY:a}}var tl;function LI(n){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return t.isIdentity?Eh:a0(t.a,t.b,t.c,t.d,t.e,t.f)}function PI(n){return n==null||(tl||(tl=document.createElementNS("http://www.w3.org/2000/svg","g")),tl.setAttribute("transform",n),!(n=tl.transform.baseVal.consolidate()))?Eh:(n=n.matrix,a0(n.a,n.b,n.c,n.d,n.e,n.f))}function l0(n,t,e,s){function r(c){return c.length?c.pop()+" ":""}function o(c,u,h,d,f,p){if(c!==h||u!==d){var m=f.push("translate(",null,t,null,e);p.push({i:m-4,x:Un(c,h)},{i:m-2,x:Un(u,d)})}else(h||d)&&f.push("translate("+h+t+d+e)}function i(c,u,h,d){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),d.push({i:h.push(r(h)+"rotate(",null,s)-2,x:Un(c,u)})):u&&h.push(r(h)+"rotate("+u+s)}function a(c,u,h,d){c!==u?d.push({i:h.push(r(h)+"skewX(",null,s)-2,x:Un(c,u)}):u&&h.push(r(h)+"skewX("+u+s)}function l(c,u,h,d,f,p){if(c!==h||u!==d){var m=f.push(r(f)+"scale(",null,",",null,")");p.push({i:m-4,x:Un(c,h)},{i:m-2,x:Un(u,d)})}else(h!==1||d!==1)&&f.push(r(f)+"scale("+h+","+d+")")}return function(c,u){var h=[],d=[];return c=n(c),u=n(u),o(c.translateX,c.translateY,u.translateX,u.translateY,h,d),i(c.rotate,u.rotate,h,d),a(c.skewX,u.skewX,h,d),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,h,d),c=u=null,function(f){for(var p=-1,m=d.length,g;++p<m;)h[(g=d[p]).i]=g.x(f);return h.join("")}}}var zI=l0(LI,"px, ","px)","deg)"),BI=l0(PI,", ",")",")"),go=0,Jo=0,qo=0,c0=1e3,Ol,Qo,Ml=0,Er=0,xc=0,fi=typeof performance=="object"&&performance.now?performance:Date,u0=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Ad(){return Er||(u0(VI),Er=fi.now()+xc)}function VI(){Er=0}function Ll(){this._call=this._time=this._next=null}Ll.prototype=h0.prototype={constructor:Ll,restart:function(n,t,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?Ad():+e)+(t==null?0:+t),!this._next&&Qo!==this&&(Qo?Qo._next=this:Ol=this,Qo=this),this._call=n,this._time=e,Rh()},stop:function(){this._call&&(this._call=null,this._time=1/0,Rh())}};function h0(n,t,e){var s=new Ll;return s.restart(n,t,e),s}function WI(){Ad(),++go;for(var n=Ol,t;n;)(t=Er-n._time)>=0&&n._call.call(void 0,t),n=n._next;--go}function Pm(){Er=(Ml=fi.now())+xc,go=Jo=0;try{WI()}finally{go=0,GI(),Er=0}}function UI(){var n=fi.now(),t=n-Ml;t>c0&&(xc-=t,Ml=n)}function GI(){for(var n,t=Ol,e,s=1/0;t;)t._call?(s>t._time&&(s=t._time),n=t,t=t._next):(e=t._next,t._next=null,t=n?n._next=e:Ol=e);Qo=n,Rh(s)}function Rh(n){if(!go){Jo&&(Jo=clearTimeout(Jo));var t=n-Er;t>24?(n<1/0&&(Jo=setTimeout(Pm,n-fi.now()-xc)),qo&&(qo=clearInterval(qo))):(qo||(Ml=fi.now(),qo=setInterval(UI,c0)),go=1,u0(Pm))}}function zm(n,t,e){var s=new Ll;return t=t==null?0:+t,s.restart(r=>{s.stop(),n(r+t)},t,e),s}var HI=Id("start","end","cancel","interrupt"),qI=[],d0=0,Bm=1,Ah=2,bl=3,Vm=4,Dh=5,yl=6;function bc(n,t,e,s,r,o){var i=n.__transition;if(!i)n.__transition={};else if(e in i)return;XI(n,e,{name:t,index:s,group:r,on:HI,tween:qI,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:d0})}function Dd(n,t){var e=es(n,t);if(e.state>d0)throw new Error("too late; already scheduled");return e}function Cs(n,t){var e=es(n,t);if(e.state>bl)throw new Error("too late; already running");return e}function es(n,t){var e=n.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function XI(n,t,e){var s=n.__transition,r;s[t]=e,e.timer=h0(o,0,e.time);function o(c){e.state=Bm,e.timer.restart(i,e.delay,e.time),e.delay<=c&&i(c-e.delay)}function i(c){var u,h,d,f;if(e.state!==Bm)return l();for(u in s)if(f=s[u],f.name===e.name){if(f.state===bl)return zm(i);f.state===Vm?(f.state=yl,f.timer.stop(),f.on.call("interrupt",n,n.__data__,f.index,f.group),delete s[u]):+u<t&&(f.state=yl,f.timer.stop(),f.on.call("cancel",n,n.__data__,f.index,f.group),delete s[u])}if(zm(function(){e.state===bl&&(e.state=Vm,e.timer.restart(a,e.delay,e.time),a(c))}),e.state=Ah,e.on.call("start",n,n.__data__,e.index,e.group),e.state===Ah){for(e.state=bl,r=new Array(d=e.tween.length),u=0,h=-1;u<d;++u)(f=e.tween[u].value.call(n,n.__data__,e.index,e.group))&&(r[++h]=f);r.length=h+1}}function a(c){for(var u=c<e.duration?e.ease.call(null,c/e.duration):(e.timer.restart(l),e.state=Dh,1),h=-1,d=r.length;++h<d;)r[h].call(n,u);e.state===Dh&&(e.on.call("end",n,n.__data__,e.index,e.group),l())}function l(){e.state=yl,e.timer.stop(),delete s[t];for(var c in s)return;delete n.__transition}}function KI(n,t){var e=n.__transition,s,r,o=!0,i;if(e){t=t==null?null:t+"";for(i in e){if((s=e[i]).name!==t){o=!1;continue}r=s.state>Ah&&s.state<Dh,s.state=yl,s.timer.stop(),s.on.call(r?"interrupt":"cancel",n,n.__data__,s.index,s.group),delete e[i]}o&&delete n.__transition}}function jI(n){return this.each(function(){KI(this,n)})}function YI(n,t){var e,s;return function(){var r=Cs(this,n),o=r.tween;if(o!==e){s=e=o;for(var i=0,a=s.length;i<a;++i)if(s[i].name===t){s=s.slice(),s.splice(i,1);break}}r.tween=s}}function ZI(n,t,e){var s,r;if(typeof e!="function")throw new Error;return function(){var o=Cs(this,n),i=o.tween;if(i!==s){r=(s=i).slice();for(var a={name:t,value:e},l=0,c=r.length;l<c;++l)if(r[l].name===t){r[l]=a;break}l===c&&r.push(a)}o.tween=r}}function JI(n,t){var e=this._id;if(n+="",arguments.length<2){for(var s=es(this.node(),e).tween,r=0,o=s.length,i;r<o;++r)if((i=s[r]).name===n)return i.value;return null}return this.each((t==null?YI:ZI)(e,n,t))}function _d(n,t,e){var s=n._id;return n.each(function(){var r=Cs(this,s);(r.value||(r.value={}))[t]=e.apply(this,arguments)}),function(r){return es(r,s).value[t]}}function f0(n,t){var e;return(typeof t=="number"?Un:t instanceof Tr?Fl:(e=Tr(t))?(t=e,Fl):i0)(n,t)}function QI(n){return function(){this.removeAttribute(n)}}function tS(n){return function(){this.removeAttributeNS(n.space,n.local)}}function eS(n,t,e){var s,r=e+"",o;return function(){var i=this.getAttribute(n);return i===r?null:i===s?o:o=t(s=i,e)}}function nS(n,t,e){var s,r=e+"",o;return function(){var i=this.getAttributeNS(n.space,n.local);return i===r?null:i===s?o:o=t(s=i,e)}}function sS(n,t,e){var s,r,o;return function(){var i,a=e(this),l;return a==null?void this.removeAttribute(n):(i=this.getAttribute(n),l=a+"",i===l?null:i===s&&l===r?o:(r=l,o=t(s=i,a)))}}function rS(n,t,e){var s,r,o;return function(){var i,a=e(this),l;return a==null?void this.removeAttributeNS(n.space,n.local):(i=this.getAttributeNS(n.space,n.local),l=a+"",i===l?null:i===s&&l===r?o:(r=l,o=t(s=i,a)))}}function oS(n,t){var e=gc(n),s=e==="transform"?BI:f0;return this.attrTween(n,typeof t=="function"?(e.local?rS:sS)(e,s,_d(this,"attr."+n,t)):t==null?(e.local?tS:QI)(e):(e.local?nS:eS)(e,s,t))}function iS(n,t){return function(e){this.setAttribute(n,t.call(this,e))}}function aS(n,t){return function(e){this.setAttributeNS(n.space,n.local,t.call(this,e))}}function lS(n,t){var e,s;function r(){var o=t.apply(this,arguments);return o!==s&&(e=(s=o)&&aS(n,o)),e}return r._value=t,r}function cS(n,t){var e,s;function r(){var o=t.apply(this,arguments);return o!==s&&(e=(s=o)&&iS(n,o)),e}return r._value=t,r}function uS(n,t){var e="attr."+n;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var s=gc(n);return this.tween(e,(s.local?lS:cS)(s,t))}function hS(n,t){return function(){Dd(this,n).delay=+t.apply(this,arguments)}}function dS(n,t){return t=+t,function(){Dd(this,n).delay=t}}function fS(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?hS:dS)(t,n)):es(this.node(),t).delay}function pS(n,t){return function(){Cs(this,n).duration=+t.apply(this,arguments)}}function mS(n,t){return t=+t,function(){Cs(this,n).duration=t}}function gS(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?pS:mS)(t,n)):es(this.node(),t).duration}function xS(n,t){if(typeof t!="function")throw new Error;return function(){Cs(this,n).ease=t}}function bS(n){var t=this._id;return arguments.length?this.each(xS(t,n)):es(this.node(),t).ease}function yS(n,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;Cs(this,n).ease=e}}function wS(n){if(typeof n!="function")throw new Error;return this.each(yS(this._id,n))}function vS(n){typeof n!="function"&&(n=Xx(n));for(var t=this._groups,e=t.length,s=new Array(e),r=0;r<e;++r)for(var o=t[r],i=o.length,a=s[r]=[],l,c=0;c<i;++c)(l=o[c])&&n.call(l,l.__data__,c,o)&&a.push(l);return new Ds(s,this._parents,this._name,this._id)}function CS(n){if(n._id!==this._id)throw new Error;for(var t=this._groups,e=n._groups,s=t.length,r=e.length,o=Math.min(s,r),i=new Array(s),a=0;a<o;++a)for(var l=t[a],c=e[a],u=l.length,h=i[a]=new Array(u),d,f=0;f<u;++f)(d=l[f]||c[f])&&(h[f]=d);for(;a<s;++a)i[a]=t[a];return new Ds(i,this._parents,this._name,this._id)}function $S(n){return(n+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function kS(n,t,e){var s,r,o=$S(t)?Dd:Cs;return function(){var i=o(this,n),a=i.on;a!==s&&(r=(s=a).copy()).on(t,e),i.on=r}}function IS(n,t){var e=this._id;return arguments.length<2?es(this.node(),e).on.on(n):this.each(kS(e,n,t))}function SS(n){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==n)return;t&&t.removeChild(this)}}function NS(){return this.on("end.remove",SS(this._id))}function TS(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Sd(n));for(var s=this._groups,r=s.length,o=new Array(r),i=0;i<r;++i)for(var a=s[i],l=a.length,c=o[i]=new Array(l),u,h,d=0;d<l;++d)(u=a[d])&&(h=n.call(u,u.__data__,d,a))&&("__data__"in u&&(h.__data__=u.__data__),c[d]=h,bc(c[d],t,e,d,c,es(u,e)));return new Ds(o,this._parents,t,e)}function ES(n){var t=this._name,e=this._id;typeof n!="function"&&(n=qx(n));for(var s=this._groups,r=s.length,o=[],i=[],a=0;a<r;++a)for(var l=s[a],c=l.length,u,h=0;h<c;++h)if(u=l[h]){for(var d=n.call(u,u.__data__,h,l),f,p=es(u,e),m=0,g=d.length;m<g;++m)(f=d[m])&&bc(f,t,e,m,d,p);o.push(d),i.push(u)}return new Ds(o,i,t,e)}var RS=Ei.prototype.constructor;function AS(){return new RS(this._groups,this._parents)}function DS(n,t){var e,s,r;return function(){var o=mo(this,n),i=(this.style.removeProperty(n),mo(this,n));return o===i?null:o===e&&i===s?r:r=t(e=o,s=i)}}function p0(n){return function(){this.style.removeProperty(n)}}function _S(n,t,e){var s,r=e+"",o;return function(){var i=mo(this,n);return i===r?null:i===s?o:o=t(s=i,e)}}function FS(n,t,e){var s,r,o;return function(){var i=mo(this,n),a=e(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(n),mo(this,n))),i===l?null:i===s&&l===r?o:(r=l,o=t(s=i,a))}}function OS(n,t){var e,s,r,o="style."+t,i="end."+o,a;return function(){var l=Cs(this,n),c=l.on,u=l.value[o]==null?a||(a=p0(t)):void 0;(c!==e||r!==u)&&(s=(e=c).copy()).on(i,r=u),l.on=s}}function MS(n,t,e){var s=(n+="")=="transform"?zI:f0;return t==null?this.styleTween(n,DS(n,s)).on("end.style."+n,p0(n)):typeof t=="function"?this.styleTween(n,FS(n,s,_d(this,"style."+n,t))).each(OS(this._id,n)):this.styleTween(n,_S(n,s,t),e).on("end.style."+n,null)}function LS(n,t,e){return function(s){this.style.setProperty(n,t.call(this,s),e)}}function PS(n,t,e){var s,r;function o(){var i=t.apply(this,arguments);return i!==r&&(s=(r=i)&&LS(n,i,e)),s}return o._value=t,o}function zS(n,t,e){var s="style."+(n+="");if(arguments.length<2)return(s=this.tween(s))&&s._value;if(t==null)return this.tween(s,null);if(typeof t!="function")throw new Error;return this.tween(s,PS(n,t,e??""))}function BS(n){return function(){this.textContent=n}}function VS(n){return function(){var t=n(this);this.textContent=t??""}}function WS(n){return this.tween("text",typeof n=="function"?VS(_d(this,"text",n)):BS(n==null?"":n+""))}function US(n){return function(t){this.textContent=n.call(this,t)}}function GS(n){var t,e;function s(){var r=n.apply(this,arguments);return r!==e&&(t=(e=r)&&US(r)),t}return s._value=n,s}function HS(n){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;return this.tween(t,GS(n))}function qS(){for(var n=this._name,t=this._id,e=m0(),s=this._groups,r=s.length,o=0;o<r;++o)for(var i=s[o],a=i.length,l,c=0;c<a;++c)if(l=i[c]){var u=es(l,t);bc(l,n,e,c,i,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Ds(s,this._parents,n,e)}function XS(){var n,t,e=this,s=e._id,r=e.size();return new Promise(function(o,i){var a={value:i},l={value:function(){--r===0&&o()}};e.each(function(){var c=Cs(this,s),u=c.on;u!==n&&(t=(n=u).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(l)),c.on=t}),r===0&&o()})}var KS=0;function Ds(n,t,e,s){this._groups=n,this._parents=t,this._name=e,this._id=s}function m0(){return++KS}var Ns=Ei.prototype;Ds.prototype={constructor:Ds,select:TS,selectAll:ES,selectChild:Ns.selectChild,selectChildren:Ns.selectChildren,filter:vS,merge:CS,selection:AS,transition:qS,call:Ns.call,nodes:Ns.nodes,node:Ns.node,size:Ns.size,empty:Ns.empty,each:Ns.each,on:IS,attr:oS,attrTween:uS,style:MS,styleTween:zS,text:WS,textTween:HS,remove:NS,tween:JI,delay:fS,duration:gS,ease:bS,easeVarying:wS,end:XS,[Symbol.iterator]:Ns[Symbol.iterator]};function jS(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var YS={time:null,delay:0,duration:250,ease:jS};function ZS(n,t){for(var e;!(e=n.__transition)||!(e=e[t]);)if(!(n=n.parentNode))throw new Error(`transition ${t} not found`);return e}function JS(n){var t,e;n instanceof Ds?(t=n._id,n=n._name):(t=m0(),(e=YS).time=Ad(),n=n==null?null:n+"");for(var s=this._groups,r=s.length,o=0;o<r;++o)for(var i=s[o],a=i.length,l,c=0;c<a;++c)(l=i[c])&&bc(l,n,t,c,i,e||ZS(l,t));return new Ds(s,this._parents,n,t)}Ei.prototype.interrupt=jI;Ei.prototype.transition=JS;function QS(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function Pl(n,t){if(!isFinite(n)||n===0)return null;var e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"),s=n.slice(0,e);return[s.length>1?s[0]+s.slice(2):s,+n.slice(e+1)]}function xo(n){return n=Pl(Math.abs(n)),n?n[1]:NaN}function t2(n,t){return function(e,s){for(var r=e.length,o=[],i=0,a=n[0],l=0;r>0&&a>0&&(l+a+1>s&&(a=Math.max(1,s-l)),o.push(e.substring(r-=a,r+a)),!((l+=a+1)>s));)a=n[i=(i+1)%n.length];return o.reverse().join(t)}}function e2(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var n2=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function zl(n){if(!(t=n2.exec(n)))throw new Error("invalid format: "+n);var t;return new Fd({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}zl.prototype=Fd.prototype;function Fd(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}Fd.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function s2(n){t:for(var t=n.length,e=1,s=-1,r;e<t;++e)switch(n[e]){case".":s=r=e;break;case"0":s===0&&(s=e),r=e;break;default:if(!+n[e])break t;s>0&&(s=0);break}return s>0?n.slice(0,s)+n.slice(r+1):n}var Bl;function r2(n,t){var e=Pl(n,t);if(!e)return Bl=void 0,n.toPrecision(t);var s=e[0],r=e[1],o=r-(Bl=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,i=s.length;return o===i?s:o>i?s+new Array(o-i+1).join("0"):o>0?s.slice(0,o)+"."+s.slice(o):"0."+new Array(1-o).join("0")+Pl(n,Math.max(0,t+o-1))[0]}function Wm(n,t){var e=Pl(n,t);if(!e)return n+"";var s=e[0],r=e[1];return r<0?"0."+new Array(-r).join("0")+s:s.length>r+1?s.slice(0,r+1)+"."+s.slice(r+1):s+new Array(r-s.length+2).join("0")}const Um={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:QS,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>Wm(n*100,t),r:Wm,s:r2,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function Gm(n){return n}var Hm=Array.prototype.map,qm=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function o2(n){var t=n.grouping===void 0||n.thousands===void 0?Gm:t2(Hm.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",s=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",o=n.numerals===void 0?Gm:e2(Hm.call(n.numerals,String)),i=n.percent===void 0?"%":n.percent+"",a=n.minus===void 0?"−":n.minus+"",l=n.nan===void 0?"NaN":n.nan+"";function c(h,d){h=zl(h);var f=h.fill,p=h.align,m=h.sign,g=h.symbol,x=h.zero,b=h.width,w=h.comma,y=h.precision,v=h.trim,$=h.type;$==="n"?(w=!0,$="g"):Um[$]||(y===void 0&&(y=12),v=!0,$="g"),(x||f==="0"&&p==="=")&&(x=!0,f="0",p="=");var N=(d&&d.prefix!==void 0?d.prefix:"")+(g==="$"?e:g==="#"&&/[boxX]/.test($)?"0"+$.toLowerCase():""),S=(g==="$"?s:/[%p]/.test($)?i:"")+(d&&d.suffix!==void 0?d.suffix:""),I=Um[$],k=/[defgprs%]/.test($);y=y===void 0?6:/[gprs]/.test($)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y));function C(E){var _=N,R=S,M,z,P;if($==="c")R=I(E)+R,E="";else{E=+E;var U=E<0||1/E<0;if(E=isNaN(E)?l:I(Math.abs(E),y),v&&(E=s2(E)),U&&+E==0&&m!=="+"&&(U=!1),_=(U?m==="("?m:a:m==="-"||m==="("?"":m)+_,R=($==="s"&&!isNaN(E)&&Bl!==void 0?qm[8+Bl/3]:"")+R+(U&&m==="("?")":""),k){for(M=-1,z=E.length;++M<z;)if(P=E.charCodeAt(M),48>P||P>57){R=(P===46?r+E.slice(M+1):E.slice(M))+R,E=E.slice(0,M);break}}}w&&!x&&(E=t(E,1/0));var q=_.length+E.length+R.length,j=q<b?new Array(b-q+1).join(f):"";switch(w&&x&&(E=t(j+E,j.length?b-R.length:1/0),j=""),p){case"<":E=_+E+R+j;break;case"=":E=_+j+E+R;break;case"^":E=j.slice(0,q=j.length>>1)+_+E+R+j.slice(q);break;default:E=j+_+E+R;break}return o(E)}return C.toString=function(){return h+""},C}function u(h,d){var f=Math.max(-8,Math.min(8,Math.floor(xo(d)/3)))*3,p=Math.pow(10,-f),m=c((h=zl(h),h.type="f",h),{suffix:qm[8+f/3]});return function(g){return m(p*g)}}return{format:c,formatPrefix:u}}var el,g0,x0;i2({thousands:",",grouping:[3],currency:["$",""]});function i2(n){return el=o2(n),g0=el.format,x0=el.formatPrefix,el}function a2(n){return Math.max(0,-xo(Math.abs(n)))}function l2(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(xo(t)/3)))*3-xo(Math.abs(n)))}function c2(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,xo(t)-xo(n))+1}function b0(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}const Xm=Symbol("implicit");function y0(){var n=new km,t=[],e=[],s=Xm;function r(o){let i=n.get(o);if(i===void 0){if(s!==Xm)return s;n.set(o,i=t.push(o)-1)}return e[i%e.length]}return r.domain=function(o){if(!arguments.length)return t.slice();t=[],n=new km;for(const i of o)n.has(i)||n.set(i,t.push(i)-1);return r},r.range=function(o){return arguments.length?(e=Array.from(o),r):e.slice()},r.unknown=function(o){return arguments.length?(s=o,r):s},r.copy=function(){return y0(t,e).unknown(s)},b0.apply(r,arguments),r}function u2(n){return function(){return n}}function h2(n){return+n}var Km=[0,1];function oo(n){return n}function _h(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:u2(isNaN(t)?NaN:.5)}function d2(n,t){var e;return n>t&&(e=n,n=t,t=e),function(s){return Math.max(n,Math.min(t,s))}}function f2(n,t,e){var s=n[0],r=n[1],o=t[0],i=t[1];return r<s?(s=_h(r,s),o=e(i,o)):(s=_h(s,r),o=e(o,i)),function(a){return o(s(a))}}function p2(n,t,e){var s=Math.min(n.length,t.length)-1,r=new Array(s),o=new Array(s),i=-1;for(n[s]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++i<s;)r[i]=_h(n[i],n[i+1]),o[i]=e(t[i],t[i+1]);return function(a){var l=m$(n,a,1,s)-1;return o[l](r[l](a))}}function m2(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function g2(){var n=Km,t=Km,e=Rd,s,r,o,i=oo,a,l,c;function u(){var d=Math.min(n.length,t.length);return i!==oo&&(i=d2(n[0],n[d-1])),a=d>2?p2:f2,l=c=null,h}function h(d){return d==null||isNaN(d=+d)?o:(l||(l=a(n.map(s),t,e)))(s(i(d)))}return h.invert=function(d){return i(r((c||(c=a(t,n.map(s),Un)))(d)))},h.domain=function(d){return arguments.length?(n=Array.from(d,h2),u()):n.slice()},h.range=function(d){return arguments.length?(t=Array.from(d),u()):t.slice()},h.rangeRound=function(d){return t=Array.from(d),e=MI,u()},h.clamp=function(d){return arguments.length?(i=d?!0:oo,u()):i!==oo},h.interpolate=function(d){return arguments.length?(e=d,u()):e},h.unknown=function(d){return arguments.length?(o=d,h):o},function(d,f){return s=d,r=f,u()}}function x2(){return g2()(oo,oo)}function b2(n,t,e,s){var r=$$(n,t,e),o;switch(s=zl(s??",f"),s.type){case"s":{var i=Math.max(Math.abs(n),Math.abs(t));return s.precision==null&&!isNaN(o=l2(r,i))&&(s.precision=o),x0(s,i)}case"":case"e":case"g":case"p":case"r":{s.precision==null&&!isNaN(o=c2(r,Math.max(Math.abs(n),Math.abs(t))))&&(s.precision=o-(s.type==="e"));break}case"f":case"%":{s.precision==null&&!isNaN(o=a2(r))&&(s.precision=o-(s.type==="%")*2);break}}return g0(s)}function y2(n){var t=n.domain;return n.ticks=function(e){var s=t();return C$(s[0],s[s.length-1],e??10)},n.tickFormat=function(e,s){var r=t();return b2(r[0],r[r.length-1],e??10,s)},n.nice=function(e){e==null&&(e=10);var s=t(),r=0,o=s.length-1,i=s[r],a=s[o],l,c,u=10;for(a<i&&(c=i,i=a,a=c,c=r,r=o,o=c);u-- >0;){if(c=kh(i,a,e),c===l)return s[r]=i,s[o]=a,t(s);if(c>0)i=Math.floor(i/c)*c,a=Math.ceil(a/c)*c;else if(c<0)i=Math.ceil(i*c)/c,a=Math.floor(a*c)/c;else break;l=c}return n},n}function Fh(){var n=x2();return n.copy=function(){return m2(n,Fh())},b0.apply(n,arguments),y2(n)}function ti(n,t,e){this.k=n,this.x=t,this.y=e}ti.prototype={constructor:ti,scale:function(n){return n===1?this:new ti(this.k*n,this.x,this.y)},translate:function(n,t){return n===0&t===0?this:new ti(this.k,this.x+this.k*n,this.y+this.k*t)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};ti.prototype;var Us;(function(n){n.Range="range",n.Steps="steps",n.Positions="positions",n.Count="count",n.Values="values"})(Us||(Us={}));var nn;(function(n){n[n.None=-1]="None",n[n.NoValue=0]="NoValue",n[n.LargeValue=1]="LargeValue",n[n.SmallValue=2]="SmallValue"})(nn||(nn={}));function w2(n){return Vl(n)&&typeof n.from=="function"}function Vl(n){return typeof n=="object"&&typeof n.to=="function"}function jm(n){n.parentElement.removeChild(n)}function Oh(n){return n!=null}function Ym(n){n.preventDefault()}function v2(n){return n.filter(function(t){return this[t]?!1:this[t]=!0},{})}function C2(n,t){return Math.round(n/t)*t}function $2(n,t){var e=n.getBoundingClientRect(),s=n.ownerDocument,r=s.documentElement,o=w0(s);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(o.x=0),t?e.top+o.y-r.clientTop:e.left+o.x-r.clientLeft}function Kn(n){return typeof n=="number"&&!isNaN(n)&&isFinite(n)}function Zm(n,t,e){e>0&&(Ke(n,t),setTimeout(function(){wl(n,t)},e))}function Jm(n){return Math.max(Math.min(n,100),0)}function yc(n){return Array.isArray(n)?n:[n]}function k2(n){n=String(n);var t=n.split(".");return t.length>1?t[1].length:0}function Ke(n,t){n.classList&&!/\s/.test(t)?n.classList.add(t):n.className+=" "+t}function wl(n,t){n.classList&&!/\s/.test(t)?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}function I2(n,t){return n.classList?n.classList.contains(t):new RegExp("\\b"+t+"\\b").test(n.className)}function w0(n){var t=window.pageXOffset!==void 0,e=(n.compatMode||"")==="CSS1Compat",s=t?window.pageXOffset:e?n.documentElement.scrollLeft:n.body.scrollLeft,r=t?window.pageYOffset:e?n.documentElement.scrollTop:n.body.scrollTop;return{x:s,y:r}}function S2(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function N2(){var n=!1;try{var t=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("test",null,t)}catch{}return n}function T2(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function Od(n,t){return 100/(t-n)}function Mh(n,t,e){return t*100/(n[e+1]-n[e])}function E2(n,t){return Mh(n,n[0]<0?t+Math.abs(n[0]):t-n[0],0)}function R2(n,t){return t*(n[1]-n[0])/100+n[0]}function pi(n,t){for(var e=1;n>=t[e];)e+=1;return e}function A2(n,t,e){if(e>=n.slice(-1)[0])return 100;var s=pi(e,n),r=n[s-1],o=n[s],i=t[s-1],a=t[s];return i+E2([r,o],e)/Od(i,a)}function D2(n,t,e){if(e>=100)return n.slice(-1)[0];var s=pi(e,t),r=n[s-1],o=n[s],i=t[s-1],a=t[s];return R2([r,o],(e-i)*Od(i,a))}function _2(n,t,e,s){if(s===100)return s;var r=pi(s,n),o=n[r-1],i=n[r];return e?s-o>(i-o)/2?i:o:t[r-1]?n[r-1]+C2(s-n[r-1],t[r-1]):s}var v0=(function(){function n(t,e,s){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[s||!1],this.xNumSteps=[!1],this.snap=e;var r,o=[];for(Object.keys(t).forEach(function(i){o.push([yc(t[i]),i])}),o.sort(function(i,a){return i[0][0]-a[0][0]}),r=0;r<o.length;r++)this.handleEntryPoint(o[r][1],o[r][0]);for(this.xNumSteps=this.xSteps.slice(0),r=0;r<this.xNumSteps.length;r++)this.handleStepPoint(r,this.xNumSteps[r])}return n.prototype.getDistance=function(t){for(var e=[],s=0;s<this.xNumSteps.length-1;s++)e[s]=Mh(this.xVal,t,s);return e},n.prototype.getAbsoluteDistance=function(t,e,s){var r=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[r+1];)r++;else t===this.xPct[this.xPct.length-1]&&(r=this.xPct.length-2);!s&&t===this.xPct[r+1]&&r++,e===null&&(e=[]);var o,i=1,a=e[r],l=0,c=0,u=0,h=0;for(s?o=(t-this.xPct[r])/(this.xPct[r+1]-this.xPct[r]):o=(this.xPct[r+1]-t)/(this.xPct[r+1]-this.xPct[r]);a>0;)l=this.xPct[r+1+h]-this.xPct[r+h],e[r+h]*i+100-o*100>100?(c=l*o,i=(a-100*o)/e[r+h],o=1):(c=e[r+h]*l/100*i,i=0),s?(u=u-c,this.xPct.length+h>=1&&h--):(u=u+c,this.xPct.length-h>=1&&h++),a=e[r+h]*i;return t+u},n.prototype.toStepping=function(t){return t=A2(this.xVal,this.xPct,t),t},n.prototype.fromStepping=function(t){return D2(this.xVal,this.xPct,t)},n.prototype.getStep=function(t){return t=_2(this.xPct,this.xSteps,this.snap,t),t},n.prototype.getDefaultStep=function(t,e,s){var r=pi(t,this.xPct);return(t===100||e&&t===this.xPct[r-1])&&(r=Math.max(r-1,1)),(this.xVal[r]-this.xVal[r-1])/s},n.prototype.getNearbySteps=function(t){var e=pi(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},n.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(k2);return Math.max.apply(null,t)},n.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},n.prototype.convert=function(t){return this.getStep(this.toStepping(t))},n.prototype.handleEntryPoint=function(t,e){var s;if(t==="min"?s=0:t==="max"?s=100:s=parseFloat(t),!Kn(s)||!Kn(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(s),this.xVal.push(e[0]);var r=Number(e[1]);s?this.xSteps.push(isNaN(r)?!1:r):isNaN(r)||(this.xSteps[0]=r),this.xHighestCompleteStep.push(0)},n.prototype.handleStepPoint=function(t,e){if(e){if(this.xVal[t]===this.xVal[t+1]){this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t];return}this.xSteps[t]=Mh([this.xVal[t],this.xVal[t+1]],e,0)/Od(this.xPct[t],this.xPct[t+1]);var s=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],r=Math.ceil(Number(s.toFixed(3))-1),o=this.xVal[t]+this.xNumSteps[t]*r;this.xHighestCompleteStep[t]=o}},n})(),Qm={to:function(n){return n===void 0?"":n.toFixed(2)},from:Number},C0={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},Ws={tooltips:".__tooltips",aria:".__aria"};function F2(n,t){if(!Kn(t))throw new Error("noUiSlider: 'step' is not numeric.");n.singleStep=t}function O2(n,t){if(!Kn(t))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");n.keyboardPageMultiplier=t}function M2(n,t){if(!Kn(t))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");n.keyboardMultiplier=t}function L2(n,t){if(!Kn(t))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");n.keyboardDefaultStep=t}function P2(n,t){if(typeof t!="object"||Array.isArray(t))throw new Error("noUiSlider: 'range' is not an object.");if(t.min===void 0||t.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");n.spectrum=new v0(t,n.snap||!1,n.singleStep)}function z2(n,t){if(t=yc(t),!Array.isArray(t)||!t.length)throw new Error("noUiSlider: 'start' option is incorrect.");n.handles=t.length,n.start=t}function B2(n,t){if(typeof t!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");n.snap=t}function V2(n,t){if(typeof t!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");n.animate=t}function W2(n,t){if(typeof t!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");n.animationDuration=t}function $0(n,t){var e=[!1],s;if(t==="lower"?t=[!0,!1]:t==="upper"&&(t=[!1,!0]),t===!0||t===!1){for(s=1;s<n.handles;s++)e.push(t);e.push(!1)}else{if(!Array.isArray(t)||!t.length||t.length!==n.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");e=t}n.connect=e}function U2(n,t){switch(t){case"horizontal":n.ort=0;break;case"vertical":n.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function k0(n,t){if(!Kn(t))throw new Error("noUiSlider: 'margin' option must be numeric.");t!==0&&(n.margin=n.spectrum.getDistance(t))}function G2(n,t){if(!Kn(t))throw new Error("noUiSlider: 'limit' option must be numeric.");if(n.limit=n.spectrum.getDistance(t),!n.limit||n.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function H2(n,t){var e;if(!Kn(t)&&!Array.isArray(t))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(t)&&!(t.length===2||Kn(t[0])||Kn(t[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(t!==0){for(Array.isArray(t)||(t=[t,t]),n.padding=[n.spectrum.getDistance(t[0]),n.spectrum.getDistance(t[1])],e=0;e<n.spectrum.xNumSteps.length-1;e++)if(n.padding[0][e]<0||n.padding[1][e]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var s=t[0]+t[1],r=n.spectrum.xVal[0],o=n.spectrum.xVal[n.spectrum.xVal.length-1];if(s/(o-r)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function q2(n,t){switch(t){case"ltr":n.dir=0;break;case"rtl":n.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function X2(n,t){if(typeof t!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var e=t.indexOf("tap")>=0,s=t.indexOf("drag")>=0,r=t.indexOf("fixed")>=0,o=t.indexOf("snap")>=0,i=t.indexOf("hover")>=0,a=t.indexOf("unconstrained")>=0,l=t.indexOf("invert-connects")>=0,c=t.indexOf("drag-all")>=0,u=t.indexOf("smooth-steps")>=0;if(r){if(n.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");k0(n,n.start[1]-n.start[0])}if(l&&n.handles!==2)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(a&&(n.margin||n.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");n.events={tap:e||o,drag:s,dragAll:c,smoothSteps:u,fixed:r,snap:o,hover:i,unconstrained:a,invertConnects:l}}function K2(n,t){if(t!==!1)if(t===!0||Vl(t)){n.tooltips=[];for(var e=0;e<n.handles;e++)n.tooltips.push(t)}else{if(t=yc(t),t.length!==n.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");t.forEach(function(s){if(typeof s!="boolean"&&!Vl(s))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),n.tooltips=t}}function j2(n,t){if(t.length!==n.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");n.handleAttributes=t}function Y2(n,t){if(!Vl(t))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");n.ariaFormat=t}function Z2(n,t){if(!w2(t))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");n.format=t}function J2(n,t){if(typeof t!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");n.keyboardSupport=t}function Q2(n,t){n.documentElement=t}function tN(n,t){if(typeof t!="string"&&t!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");n.cssPrefix=t}function eN(n,t){if(typeof t!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof n.cssPrefix=="string"?(n.cssClasses={},Object.keys(t).forEach(function(e){n.cssClasses[e]=n.cssPrefix+t[e]})):n.cssClasses=t}function I0(n){var t={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Qm,format:Qm},e={step:{r:!1,t:F2},keyboardPageMultiplier:{r:!1,t:O2},keyboardMultiplier:{r:!1,t:M2},keyboardDefaultStep:{r:!1,t:L2},start:{r:!0,t:z2},connect:{r:!0,t:$0},direction:{r:!0,t:q2},snap:{r:!1,t:B2},animate:{r:!1,t:V2},animationDuration:{r:!1,t:W2},range:{r:!0,t:P2},orientation:{r:!1,t:U2},margin:{r:!1,t:k0},limit:{r:!1,t:G2},padding:{r:!1,t:H2},behaviour:{r:!0,t:X2},ariaFormat:{r:!1,t:Y2},format:{r:!1,t:Z2},tooltips:{r:!1,t:K2},keyboardSupport:{r:!0,t:J2},documentElement:{r:!1,t:Q2},cssPrefix:{r:!0,t:tN},cssClasses:{r:!0,t:eN},handleAttributes:{r:!1,t:j2}},s={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:C0,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};n.format&&!n.ariaFormat&&(n.ariaFormat=n.format),Object.keys(e).forEach(function(l){if(!Oh(n[l])&&s[l]===void 0){if(e[l].r)throw new Error("noUiSlider: '"+l+"' is required.");return}e[l].t(t,Oh(n[l])?n[l]:s[l])}),t.pips=n.pips;var r=document.createElement("div"),o=r.style.msTransform!==void 0,i=r.style.transform!==void 0;t.transformRule=i?"transform":o?"msTransform":"webkitTransform";var a=[["left","top"],["right","bottom"]];return t.style=a[t.dir][t.ort],t}function nN(n,t,e){var s=S2(),r=T2(),o=r&&N2(),i=n,a,l,c,u,h,d,f=t.spectrum,p=[],m=[],g=[],x=0,b={},w=!1,y=n.ownerDocument,v=t.documentElement||y.documentElement,$=y.body,N=y.dir==="rtl"||t.ort===1?0:100;function S(A,B){var H=y.createElement("div");return B&&Ke(H,B),A.appendChild(H),H}function I(A,B){var H=S(A,t.cssClasses.origin),nt=S(H,t.cssClasses.handle);if(S(nt,t.cssClasses.touchArea),nt.setAttribute("data-handle",String(B)),t.keyboardSupport&&(nt.setAttribute("tabindex","0"),nt.addEventListener("keydown",function(at){return jt(at,B)})),t.handleAttributes!==void 0){var it=t.handleAttributes[B];Object.keys(it).forEach(function(at){nt.setAttribute(at,it[at])})}return nt.setAttribute("role","slider"),nt.setAttribute("aria-orientation",t.ort?"vertical":"horizontal"),B===0?Ke(nt,t.cssClasses.handleLower):B===t.handles-1&&Ke(nt,t.cssClasses.handleUpper),H.handle=nt,H}function k(A,B){return B?S(A,t.cssClasses.connect):!1}function C(A,B){l=S(B,t.cssClasses.connects),c=[],u=[],u.push(k(l,A[0]));for(var H=0;H<t.handles;H++)c.push(I(B,H)),g[H]=H,u.push(k(l,A[H+1]))}function E(A){Ke(A,t.cssClasses.target),t.dir===0?Ke(A,t.cssClasses.ltr):Ke(A,t.cssClasses.rtl),t.ort===0?Ke(A,t.cssClasses.horizontal):Ke(A,t.cssClasses.vertical);var B=getComputedStyle(A).direction;return B==="rtl"?Ke(A,t.cssClasses.textDirectionRtl):Ke(A,t.cssClasses.textDirectionLtr),S(A,t.cssClasses.base)}function _(A,B){return!t.tooltips||!t.tooltips[B]?!1:S(A.firstChild,t.cssClasses.tooltip)}function R(){return i.hasAttribute("disabled")}function M(A){var B=c[A];return B.hasAttribute("disabled")}function z(A){A!=null?(c[A].setAttribute("disabled",""),c[A].handle.removeAttribute("tabindex")):(i.setAttribute("disabled",""),c.forEach(function(B){B.handle.removeAttribute("tabindex")}))}function P(A){A!=null?(c[A].removeAttribute("disabled"),c[A].handle.setAttribute("tabindex","0")):(i.removeAttribute("disabled"),c.forEach(function(B){B.removeAttribute("disabled"),B.handle.setAttribute("tabindex","0")}))}function U(){d&&(Te("update"+Ws.tooltips),d.forEach(function(A){A&&jm(A)}),d=null)}function q(){U(),d=c.map(_),ue("update"+Ws.tooltips,function(A,B,H){if(!(!d||!t.tooltips)&&d[B]!==!1){var nt=A[B];t.tooltips[B]!==!0&&(nt=t.tooltips[B].to(H[B])),d[B].innerHTML=nt}})}function j(){Te("update"+Ws.aria),ue("update"+Ws.aria,function(A,B,H,nt,it){g.forEach(function(at){var vt=c[at],ht=qe(m,at,0,!0,!0,!0),Yt=qe(m,at,100,!0,!0,!0),Zt=it[at],ae=String(t.ariaFormat.to(H[at]));ht=f.fromStepping(ht).toFixed(1),Yt=f.fromStepping(Yt).toFixed(1),Zt=f.fromStepping(Zt).toFixed(1),vt.children[0].setAttribute("aria-valuemin",ht),vt.children[0].setAttribute("aria-valuemax",Yt),vt.children[0].setAttribute("aria-valuenow",Zt),vt.children[0].setAttribute("aria-valuetext",ae)})})}function Z(A){if(A.mode===Us.Range||A.mode===Us.Steps)return f.xVal;if(A.mode===Us.Count){if(A.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var B=A.values-1,H=100/B,nt=[];B--;)nt[B]=B*H;return nt.push(100),J(nt,A.stepped)}return A.mode===Us.Positions?J(A.values,A.stepped):A.mode===Us.Values?A.stepped?A.values.map(function(it){return f.fromStepping(f.getStep(f.toStepping(it)))}):A.values:[]}function J(A,B){return A.map(function(H){return f.fromStepping(B?f.getStep(H):H)})}function Q(A){function B(Zt,ae){return Number((Zt+ae).toFixed(7))}var H=Z(A),nt={},it=f.xVal[0],at=f.xVal[f.xVal.length-1],vt=!1,ht=!1,Yt=0;return H=v2(H.slice().sort(function(Zt,ae){return Zt-ae})),H[0]!==it&&(H.unshift(it),vt=!0),H[H.length-1]!==at&&(H.push(at),ht=!0),H.forEach(function(Zt,ae){var le,Vt,we,Xe=Zt,_e=H[ae+1],ze,Zu,Ju,Qu,wm,th,vm,Cm=A.mode===Us.Steps;for(Cm&&(le=f.xNumSteps[ae]),le||(le=_e-Xe),_e===void 0&&(_e=Xe),le=Math.max(le,1e-7),Vt=Xe;Vt<=_e;Vt=B(Vt,le)){for(ze=f.toStepping(Vt),Zu=ze-Yt,wm=Zu/(A.density||1),th=Math.round(wm),vm=Zu/th,we=1;we<=th;we+=1)Ju=Yt+we*vm,nt[Ju.toFixed(5)]=[f.fromStepping(Ju),0];Qu=H.indexOf(Vt)>-1?nn.LargeValue:Cm?nn.SmallValue:nn.NoValue,!ae&&vt&&Vt!==_e&&(Qu=0),Vt===_e&&ht||(nt[ze.toFixed(5)]=[Vt,Qu]),Yt=ze}}),nt}function rt(A,B,H){var nt,it,at=y.createElement("div"),vt=(nt={},nt[nn.None]="",nt[nn.NoValue]=t.cssClasses.valueNormal,nt[nn.LargeValue]=t.cssClasses.valueLarge,nt[nn.SmallValue]=t.cssClasses.valueSub,nt),ht=(it={},it[nn.None]="",it[nn.NoValue]=t.cssClasses.markerNormal,it[nn.LargeValue]=t.cssClasses.markerLarge,it[nn.SmallValue]=t.cssClasses.markerSub,it),Yt=[t.cssClasses.valueHorizontal,t.cssClasses.valueVertical],Zt=[t.cssClasses.markerHorizontal,t.cssClasses.markerVertical];Ke(at,t.cssClasses.pips),Ke(at,t.ort===0?t.cssClasses.pipsHorizontal:t.cssClasses.pipsVertical);function ae(Vt,we){var Xe=we===t.cssClasses.value,_e=Xe?Yt:Zt,ze=Xe?vt:ht;return we+" "+_e[t.ort]+" "+ze[Vt]}function le(Vt,we,Xe){if(Xe=B?B(we,Xe):Xe,Xe!==nn.None){var _e=S(at,!1);_e.className=ae(Xe,t.cssClasses.marker),_e.style[t.style]=Vt+"%",Xe>nn.NoValue&&(_e=S(at,!1),_e.className=ae(Xe,t.cssClasses.value),_e.setAttribute("data-value",String(we)),_e.style[t.style]=Vt+"%",_e.innerHTML=String(H.to(we)))}}return Object.keys(A).forEach(function(Vt){le(Vt,A[Vt][0],A[Vt][1])}),at}function st(){h&&(jm(h),h=null)}function lt(A){st();var B=Q(A),H=A.filter,nt=A.format||{to:function(it){return String(Math.round(it))}};return h=i.appendChild(rt(B,H,nt)),h}function pt(){var A=a.getBoundingClientRect(),B="offset"+["Width","Height"][t.ort];return t.ort===0?A.width||a[B]:A.height||a[B]}function mt(A,B,H,nt){var it=function(vt){var ht=yt(vt,nt.pageOffset,nt.target||B);if(!ht||R()&&!nt.doNotReject||I2(i,t.cssClasses.tap)&&!nt.doNotReject||A===s.start&&ht.buttons!==void 0&&ht.buttons>1||nt.hover&&ht.buttons)return!1;o||ht.preventDefault(),ht.calcPoint=ht.points[t.ort],H(ht,nt)},at=[];return A.split(" ").forEach(function(vt){B.addEventListener(vt,it,o?{passive:!0}:!1),at.push([vt,it])}),at}function yt(A,B,H){var nt=A.type.indexOf("touch")===0,it=A.type.indexOf("mouse")===0,at=A.type.indexOf("pointer")===0,vt=0,ht=0;if(A.type.indexOf("MSPointer")===0&&(at=!0),A.type==="mousedown"&&!A.buttons&&!A.touches)return!1;if(nt){var Yt=function(le){var Vt=le.target;return Vt===H||H.contains(Vt)||A.composed&&A.composedPath().shift()===H};if(A.type==="touchstart"){var Zt=Array.prototype.filter.call(A.touches,Yt);if(Zt.length>1)return!1;vt=Zt[0].pageX,ht=Zt[0].pageY}else{var ae=Array.prototype.find.call(A.changedTouches,Yt);if(!ae)return!1;vt=ae.pageX,ht=ae.pageY}}return B=B||w0(y),(it||at)&&(vt=A.clientX+B.x,ht=A.clientY+B.y),A.pageOffset=B,A.points=[vt,ht],A.cursor=it||at,A}function $t(A){var B=A-$2(a,t.ort),H=B*100/pt();return H=Jm(H),t.dir?100-H:H}function It(A){var B=100,H=!1;return c.forEach(function(nt,it){if(!M(it)){var at=m[it],vt=Math.abs(at-A),ht=vt===100&&B===100,Yt=vt<B,Zt=vt<=B&&A>at;(Yt||Zt||ht)&&(H=it,B=vt)}}),H}function Mt(A,B){A.type==="mouseout"&&A.target.nodeName==="HTML"&&A.relatedTarget===null&&Kt(A,B)}function Gt(A,B){if(navigator.appVersion.indexOf("MSIE 9")===-1&&A.buttons===0&&B.buttonsProperty!==0)return Kt(A,B);var H=(t.dir?-1:1)*(A.calcPoint-B.startCalcPoint),nt=H*100/B.baseSize;Pn(H>0,nt,B.locations,B.handleNumbers,B.connect)}function Kt(A,B){B.handle&&(wl(B.handle,t.cssClasses.active),x-=1),B.listeners.forEach(function(H){v.removeEventListener(H[0],H[1])}),x===0&&(wl(i,t.cssClasses.drag),ks(),A.cursor&&($.style.cursor="",$.removeEventListener("selectstart",Ym))),t.events.smoothSteps&&(B.handleNumbers.forEach(function(H){Bn(H,m[H],!0,!0,!1,!1)}),B.handleNumbers.forEach(function(H){Ht("update",H)})),B.handleNumbers.forEach(function(H){Ht("change",H),Ht("set",H),Ht("end",H)})}function zt(A,B){if(!B.handleNumbers.some(M)){var H;if(B.handleNumbers.length===1){var nt=c[B.handleNumbers[0]];H=nt.children[0],x+=1,Ke(H,t.cssClasses.active)}A.stopPropagation();var it=[],at=mt(s.move,v,Gt,{target:A.target,handle:H,connect:B.connect,listeners:it,startCalcPoint:A.calcPoint,baseSize:pt(),pageOffset:A.pageOffset,handleNumbers:B.handleNumbers,buttonsProperty:A.buttons,locations:m.slice()}),vt=mt(s.end,v,Kt,{target:A.target,handle:H,listeners:it,doNotReject:!0,handleNumbers:B.handleNumbers}),ht=mt("mouseout",v,Mt,{target:A.target,handle:H,listeners:it,doNotReject:!0,handleNumbers:B.handleNumbers});it.push.apply(it,at.concat(vt,ht)),A.cursor&&($.style.cursor=getComputedStyle(A.target).cursor,c.length>1&&Ke(i,t.cssClasses.drag),$.addEventListener("selectstart",Ym,!1)),B.handleNumbers.forEach(function(Yt){Ht("start",Yt)})}}function Bt(A){A.stopPropagation();var B=$t(A.calcPoint),H=It(B);H!==!1&&(t.events.snap||Zm(i,t.cssClasses.tap,t.animationDuration),Bn(H,B,!0,!0),ks(),Ht("slide",H,!0),Ht("update",H,!0),t.events.snap?zt(A,{handleNumbers:[H]}):(Ht("change",H,!0),Ht("set",H,!0)))}function ne(A){var B=$t(A.calcPoint),H=f.getStep(B),nt=f.fromStepping(H);Object.keys(b).forEach(function(it){it.split(".")[0]==="hover"&&b[it].forEach(function(at){at.call(Ya,nt)})})}function jt(A,B){if(R()||M(B))return!1;var H=["Left","Right"],nt=["Down","Up"],it=["PageDown","PageUp"],at=["Home","End"];t.dir&&!t.ort?H.reverse():t.ort&&!t.dir&&(nt.reverse(),it.reverse());var vt=A.key.replace("Arrow",""),ht=vt===it[0],Yt=vt===it[1],Zt=vt===nt[0]||vt===H[0]||ht,ae=vt===nt[1]||vt===H[1]||Yt,le=vt===at[0],Vt=vt===at[1];if(!Zt&&!ae&&!le&&!Vt)return!0;A.preventDefault();var we;if(ae||Zt){var Xe=Zt?0:1,_e=bm(B),ze=_e[Xe];if(ze===null)return!1;ze===!1&&(ze=f.getDefaultStep(m[B],Zt,t.keyboardDefaultStep)),Yt||ht?ze*=t.keyboardPageMultiplier:ze*=t.keyboardMultiplier,ze=Math.max(ze,1e-7),ze=(Zt?-1:1)*ze,we=p[B]+ze}else Vt?we=t.spectrum.xVal[t.spectrum.xVal.length-1]:we=t.spectrum.xVal[0];return Bn(B,f.toStepping(we),!0,!0),Ht("slide",B),Ht("update",B),Ht("change",B),Ht("set",B),!1}function Sn(A){A.fixed||c.forEach(function(B,H){mt(s.start,B.children[0],zt,{handleNumbers:[H]})}),A.tap&&mt(s.start,a,Bt,{}),A.hover&&mt(s.move,a,ne,{hover:!0}),A.drag&&u.forEach(function(B,H){if(!(B===!1||H===0||H===u.length-1)){var nt=c[H-1],it=c[H],at=[B],vt=[nt,it],ht=[H-1,H];Ke(B,t.cssClasses.draggable),A.fixed&&(at.push(nt.children[0]),at.push(it.children[0])),A.dragAll&&(vt=c,ht=g),at.forEach(function(Yt){mt(s.start,Yt,zt,{handles:vt,handleNumbers:ht,connect:B})})}})}function ue(A,B){b[A]=b[A]||[],b[A].push(B),A.split(".")[0]==="update"&&c.forEach(function(H,nt){Ht("update",nt)})}function ss(A){return A===Ws.aria||A===Ws.tooltips}function Te(A){var B=A&&A.split(".")[0],H=B?A.substring(B.length):A;Object.keys(b).forEach(function(nt){var it=nt.split(".")[0],at=nt.substring(it.length);(!B||B===it)&&(!H||H===at)&&(!ss(at)||H===at)&&delete b[nt]})}function Ht(A,B,H){Object.keys(b).forEach(function(nt){var it=nt.split(".")[0];A===it&&b[nt].forEach(function(at){at.call(Ya,p.map(t.format.to),B,p.slice(),H||!1,m.slice(),Ya)})})}function qe(A,B,H,nt,it,at,vt){var ht;return c.length>1&&!t.events.unconstrained&&(nt&&B>0&&(ht=f.getAbsoluteDistance(A[B-1],t.margin,!1),H=Math.max(H,ht)),it&&B<c.length-1&&(ht=f.getAbsoluteDistance(A[B+1],t.margin,!0),H=Math.min(H,ht))),c.length>1&&t.limit&&(nt&&B>0&&(ht=f.getAbsoluteDistance(A[B-1],t.limit,!1),H=Math.min(H,ht)),it&&B<c.length-1&&(ht=f.getAbsoluteDistance(A[B+1],t.limit,!0),H=Math.max(H,ht))),t.padding&&(B===0&&(ht=f.getAbsoluteDistance(0,t.padding[0],!1),H=Math.max(H,ht)),B===c.length-1&&(ht=f.getAbsoluteDistance(100,t.padding[1],!0),H=Math.min(H,ht))),vt||(H=f.getStep(H)),H=Jm(H),H===A[B]&&!at?!1:H}function bn(A,B){var H=t.ort;return(H?B:A)+", "+(H?A:B)}function Pn(A,B,H,nt,it){var at=H.slice(),vt=nt[0],ht=t.events.smoothSteps,Yt=[!A,A],Zt=[A,!A];nt=nt.slice(),A&&nt.reverse(),nt.length>1?nt.forEach(function(le,Vt){var we=qe(at,le,at[le]+B,Yt[Vt],Zt[Vt],!1,ht);we===!1?B=0:(B=we-at[le],at[le]=we)}):Yt=Zt=[!0];var ae=!1;nt.forEach(function(le,Vt){ae=Bn(le,H[le]+B,Yt[Vt],Zt[Vt],!1,ht)||ae}),ae&&(nt.forEach(function(le){Ht("update",le),Ht("slide",le)}),it!=null&&Ht("drag",vt))}function zn(A,B){return t.dir?100-A-B:A}function rs(A,B){m[A]=B,p[A]=f.fromStepping(B);var H=zn(B,0)-N,nt="translate("+bn(H+"%","0")+")";if(c[A].style[t.transformRule]=nt,t.events.invertConnects&&m.length>1){var it=m.every(function(at,vt,ht){return vt===0||at>=ht[vt-1]});if(w!==!it){l$();return}}Is(A),Is(A+1),w&&(Is(A-1),Is(A+2))}function ks(){g.forEach(function(A){var B=m[A]>50?-1:1,H=3+(c.length+B*A);c[A].style.zIndex=String(H)})}function Bn(A,B,H,nt,it,at){return it||(B=qe(m,A,B,H,nt,!1,at)),B===!1?!1:(rs(A,B),!0)}function Is(A){if(u[A]){var B=m.slice();w&&B.sort(function(ht,Yt){return ht-Yt});var H=0,nt=100;A!==0&&(H=B[A-1]),A!==u.length-1&&(nt=B[A]);var it=nt-H,at="translate("+bn(zn(H,it)+"%","0")+")",vt="scale("+bn(it/100,"1")+")";u[A].style[t.transformRule]=at+" "+vt}}function ja(A,B){return A===null||A===!1||A===void 0||(typeof A=="number"&&(A=String(A)),A=t.format.from(A),A!==!1&&(A=f.toStepping(A)),A===!1||isNaN(A))?m[B]:A}function Ss(A,B,H){var nt=yc(A),it=m[0]===void 0;B=B===void 0?!0:B,t.animate&&!it&&Zm(i,t.cssClasses.tap,t.animationDuration),g.forEach(function(ht){Bn(ht,ja(nt[ht],ht),!0,!1,H)});var at=g.length===1?0:1;if(it&&f.hasNoSize()&&(H=!0,m[0]=0,g.length>1)){var vt=100/(g.length-1);g.forEach(function(ht){m[ht]=ht*vt})}for(;at<g.length;++at)g.forEach(function(ht){Bn(ht,m[ht],!0,!0,H)});ks(),g.forEach(function(ht){Ht("update",ht),nt[ht]!==null&&B&&Ht("set",ht)})}function ju(A){Ss(t.start,A)}function Yu(A,B,H,nt){if(A=Number(A),!(A>=0&&A<g.length))throw new Error("noUiSlider: invalid handle number, got: "+A);Bn(A,ja(B,A),!0,!0,nt),Ht("update",A),H&&Ht("set",A)}function xm(A){if(A===void 0&&(A=!1),A)return p.length===1?p[0]:p.slice(0);var B=p.map(t.format.to);return B.length===1?B[0]:B}function o$(){for(Te(Ws.aria),Te(Ws.tooltips),Object.keys(t.cssClasses).forEach(function(A){wl(i,t.cssClasses[A])});i.firstChild;)i.removeChild(i.firstChild);delete i.noUiSlider}function bm(A){var B=m[A],H=f.getNearbySteps(B),nt=p[A],it=H.thisStep.step,at=null;if(t.snap)return[nt-H.stepBefore.startValue||null,H.stepAfter.startValue-nt||null];it!==!1&&nt+it>H.stepAfter.startValue&&(it=H.stepAfter.startValue-nt),nt>H.thisStep.startValue?at=H.thisStep.step:H.stepBefore.step===!1?at=!1:at=nt-H.stepBefore.highestStep,B===100?it=null:B===0&&(at=null);var vt=f.countStepDecimals();return it!==null&&it!==!1&&(it=Number(it.toFixed(vt))),at!==null&&at!==!1&&(at=Number(at.toFixed(vt))),[at,it]}function i$(){return g.map(bm)}function a$(A,B){var H=xm(),nt=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];nt.forEach(function(at){A[at]!==void 0&&(e[at]=A[at])});var it=I0(e);nt.forEach(function(at){A[at]!==void 0&&(t[at]=it[at])}),f=it.spectrum,t.margin=it.margin,t.limit=it.limit,t.padding=it.padding,t.pips?lt(t.pips):st(),t.tooltips?q():U(),m=[],Ss(Oh(A.start)?A.start:H,B),A.connect&&ym()}function ym(){for(;l.firstChild;)l.removeChild(l.firstChild);for(var A=0;A<=t.handles;A++)u[A]=k(l,t.connect[A]),Is(A);Sn({drag:t.events.drag,fixed:!0})}function l$(){w=!w,$0(t,t.connect.map(function(A){return!A})),ym()}function c$(){a=E(i),C(t.connect,a),Sn(t.events),Ss(t.start),t.pips&&lt(t.pips),t.tooltips&&q(),j()}c$();var Ya={destroy:o$,steps:i$,on:ue,off:Te,get:xm,set:Ss,setHandle:Yu,reset:ju,disable:z,enable:P,__moveHandles:function(A,B,H){Pn(A,B,m,H)},options:e,updateOptions:a$,target:i,removePips:st,removeTooltips:U,getPositions:function(){return m.slice()},getTooltips:function(){return d},getOrigins:function(){return c},pips:lt};return Ya}function sN(n,t){if(!n||!n.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+n);if(n.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var e=I0(t),s=nN(n,e,t);return n.noUiSlider=s,s}const rN={__spectrum:v0,cssClasses:C0,create:sN};const oN=1e-7,iN=1e-4;class S0{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class Md{refCount(t){return hn("refCount")}incRef(t){return hn("incRef")}timerAvailable(){return!0}time(t){return hn("time")}read(t){return hn("read")}readSync(t){return hn("readSync")}readToGPU(t,e){return hn("readToGPU")}numDataIds(){return hn("numDataIds")}disposeData(t,e){return hn("disposeData")}write(t,e,s){return hn("write")}move(t,e,s,r,o){return hn("move")}createTensorFromGPUData(t,e,s){return hn("createTensorFromGPUData")}memory(){return hn("memory")}floatPrecision(){return hn("floatPrecision")}epsilon(){return this.floatPrecision()===32?oN:iN}dispose(){return hn("dispose")}}function hn(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function aN(n){let t=n.length,e=0;for(;t>0;)e=Math.random()*t|0,t--,no(n,t,e)}function Ld(n,t,e){return Math.max(n,Math.min(t,e))}function Pd(n){return n%2===0?n:n+1}function no(n,t,e){const s=n[t];n[t]=n[e],n[e]=s}function lN(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t}function T(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function zd(n,t,e=""){T(Pt(n,t),()=>e+` Shapes ${n} and ${t} must match`)}function N0(n){T(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Y(n){if(n.length===0)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function Pt(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function bo(n){return n%1===0}function Lh(n){const t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function co(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function tg(n,t=r=>0,e,s){return new Promise((r,o)=>{let i=0;const a=()=>{if(n()){r();return}i++;const l=t(i);if(e!=null&&i>=e){o();return}s!=null?s(a,l):setTimeout(a,l)};a()})}function T0(n,t){let e=1,s=-1;for(let o=0;o<n.length;++o)if(n[o]>=0)e*=n[o];else if(n[o]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${o}`);s=o}else if(n[o]<0)throw Error(`Shapes can not be < 0. Found ${n[o]} at dim ${o}`);if(s===-1){if(t>0&&t!==e)throw Error(`Size(${t}) must match the product of shape ${n}`);return n}if(e===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(t%e!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);const r=n.slice();return r[s]=t/e,r}function Tt(n,t){const e=t.length;return n=n==null?t.map((s,r)=>r):[].concat(n),T(n.every(s=>s>=-e&&s<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`),T(n.every(s=>bo(s)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(s=>s<0?e+s:s)}function ir(n,t){const e=[],s=[],r=t!=null&&Array.isArray(t)&&t.length===0,o=t==null||r?null:Tt(t,n).sort();let i=0;for(let a=0;a<n.length;++a){if(o!=null){if(o[i]===a&&n[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${n[a]}' is not 1`);(o[i]==null||o[i]>a)&&n[a]===1&&(e.push(n[a]),s.push(a)),o[i]<=a&&i++}n[a]!==1&&(e.push(n[a]),s.push(a))}return{newShape:e,keptDims:s}}function Be(n,t){return he(n,t)}function he(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else if(n==="string")e=new Array(t);else throw new Error(`Unknown data type ${n}`);return e}function cN(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${t} being uploaded contains ${s}.`)}}function uN(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function E0(n,t){return!(t==="complex64"||t==="float32"&&n!=="complex64"||t==="int32"&&n!=="float32"&&n!=="complex64"||t==="bool"&&n==="bool")}function Wl(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function hN(n){if(n==null)return 0;let t=0;return n.forEach(e=>t+=e.length),t}function Ai(n){return typeof n=="string"||n instanceof String}function dN(n){return typeof n=="boolean"}function Ph(n){return typeof n=="number"}function Eo(n){return Array.isArray(n)?Eo(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":Ph(n)?"float32":Ai(n)?"string":dN(n)?"bool":"float32"}function zh(n){return!!(n&&n.constructor&&n.call&&n.apply)}function Bh(n,t){for(let e=t;e<n;++e)if(n%e===0)return e;return n}function xt(n){const t=n.length;if(t<2)return[];const e=new Array(t-1);e[t-2]=n[t-1];for(let s=t-3;s>=0;--s)e[s]=e[s+1]*n[s+1];return e}function R0(n,t,e,s=!1){const r=new Array;if(t.length===1){const o=t[0]*(s?2:1);for(let i=0;i<o;i++)r[i]=e[n+i]}else{const o=t[0],i=t.slice(1),a=i.reduce((l,c)=>l*c)*(s?2:1);for(let l=0;l<o;l++)r[l]=R0(n+l*a,i,e,s)}return r}function jn(n,t,e=!1){if(n.length===0)return t[0];const s=n.reduce((r,o)=>r*o)*(e?2:1);if(s===0)return[];if(s!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return R0(0,n,t,e)}function fN(n,t){if(Array.isArray(n))return n;if(t==="float32")return n instanceof Float32Array?n:new Float32Array(n);if(t==="int32")return n instanceof Int32Array?n:new Int32Array(n);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(n));throw new Error(`Unknown dtype ${t}`)}function Bd(n,t){const e=Ve(n,t);for(let s=0;s<e.length;s++)e[s]=1;return e}function Ve(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function A0(n,t){const e=n.reduce((s,r)=>s*r,1);if(t==null||t==="float32")return jn(n,new Float32Array(e));if(t==="int32")return jn(n,new Int32Array(e));if(t==="bool")return jn(n,new Uint8Array(e));throw new Error(`Unknown data type ${t}`)}function Ls(n){n.forEach(t=>{T(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function ds(n,t,e){if(t===0)return 0;if(t===1)return n[0];let s=n[n.length-1];for(let r=0;r<n.length-1;++r)s+=e[r]*n[r];return s}function Ro(n,t,e){if(t===0)return[];if(t===1)return[n];const s=new Array(t);for(let r=0;r<s.length-1;++r)s[r]=Math.floor(n/e[r]),n-=s[r]*e[r];return s[s.length-1]=n,s}function Vd(n){return n&&n.then&&typeof n.then=="function"}const eg="tfjsflags";class pN{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=mN,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(X().getBool("IS_TEST")||X().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,s){if(this.flagRegistry[t]={evaluationFn:e,setHook:s},this.urlFlags[t]!=null){const r=this.urlFlags[t];X().getBool("IS_TEST")||X().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${r}.`),this.set(t,r)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(Vd(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);eg in t&&t[eg].split(",").forEach(s=>{const[r,o]=s.split(":");this.urlFlags[r]=xN(r,o)})}}function mN(n){const t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...s)=>(gN(t,s[0],s[1]),s.join("="))),t}function gN(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function xN(n,t){const e=t.toLowerCase();return e==="true"||e==="false"?e==="true":`${+e}`===e?+e:t}function X(){return D0}let D0=null;function bN(n){D0=n}let rh;function _0(){if(rh==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");rh=n}return rh}function yN(){const n=_0();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function Wd(n,t){const e=yN();if(e.has(n))return e.get(n);{const s=t();return e.set(n,s),e.get(n)}}const wc="Abs",Di="Acos",_i="Acosh",Ao="Add",Ud="AddN",Gd="All",Hd="Any",vc="ArgMax",Cc="ArgMin",Fi="Asin",Oi="Asinh",Mi="Atan",Li="Atanh",Pi="Atan2",$c="AvgPool",qd="AvgPoolGrad",kc="AvgPool3D",Xd="AvgPool3DGrad",Ic="BatchMatMul",Sc="BatchToSpaceND",Kd="Bincount",jd="BitwiseAnd",wN="BroadcastTo",F0="BroadcastArgs",zi="Cast",Bi="Ceil",Vi="ClipByValue",Yd="Complex",Nc="ComplexAbs",Tc="Concat",Ec="Conv2D",Zd="Conv2DBackpropFilter",Rc="Conv2DBackpropInput",Ac="Conv3D",Jd="Conv3DBackpropFilterV2",Qd="Conv3DBackpropInputV2",Wi="Cos",Ui="Cosh",tf="Cumprod",Dc="Cumsum",ef="CropAndResize",nf="DenseBincount",sf="DepthToSpace",_c="DepthwiseConv2dNative",rf="DepthwiseConv2dNativeBackpropFilter",of="DepthwiseConv2dNativeBackpropInput",af="Diag",Fc="Dilation2D",Vh="Dilation2DBackpropInput",Wh="Dilation2DBackpropFilter",vN="Draw",Gi="RealDiv",lf="Einsum",Hi="Elu",cf="EluGrad",qi="Erf",Oc="Equal",Xi="Exp",Mc="ExpandDims",Ki="Expm1",uf="FFT",hf="Fill",df="FlipLeftRight",ji="Floor",Yi="FloorDiv",Lc="FusedBatchNorm",Pc="GatherV2",O0="GatherNd",zc="Greater",Zi="GreaterEqual",Ji="Identity",ff="IFFT",pf="Imag",Qi="IsFinite",ta="IsInf",ea="IsNan",Bc="LeakyRelu",Vc="Less",Wc="LessEqual",M0="LinSpace",na="Log",sa="Log1p",Uc="LogicalAnd",Gc="LogicalNot",Hc="LogicalOr",CN="LogSoftmax",qc="LRN",mf="LRNGrad",Xc="Max",ra="Maximum",Kc="MaxPool",gf="MaxPoolGrad",jc="MaxPool3D",xf="MaxPool3DGrad",L0="MaxPoolWithArgmax",Yc="Mean",Zc="Min",oa="Minimum",Jc="MirrorPad",ia="Mod",P0="Multinomial",aa="Multiply",Qc="Neg",tu="NotEqual",bf="NonMaxSuppressionV3",yf="NonMaxSuppressionV4",wf="NonMaxSuppressionV5",eu="OnesLike",nu="OneHot",su="Pack",ru="PadV2",la="Pow",ou="Prelu",iu="Prod",z0="RaggedGather",B0="RaggedRange",V0="RaggedTensorToTensor",vf="Range",Cf="Real",ca="Reciprocal",ua="Relu",au="Reshape",lu="ResizeNearestNeighbor",$f="ResizeNearestNeighborGrad",cu="ResizeBilinear",kf="ResizeBilinearGrad",ha="Relu6",uu="Reverse",da="Round",fa="Rsqrt",W0="ScatterNd",U0="TensorScatterUpdate",G0="SearchSorted",hu="Select",pa="Selu",du="Slice",ma="Sin",ga="Sinh",xa="Sign",ba="Sigmoid",ya="Softplus",wa="Sqrt",fu="Sum",pu="SpaceToBatchND",mu="SplitV",gu="Softmax",H0="SparseFillEmptyRows",q0="SparseReshape",X0="SparseSegmentMean",K0="SparseSegmentSum",j0="SparseToDense",va="SquaredDifference",If="Square",Sf="StaticRegexReplace",Nf="StridedSlice",Y0="StringNGrams",Z0="StringSplit",J0="StringToHashBucketFast",Ca="Sub",$a="Tan",ka="Tanh",Ia="Tile",Tf="TopK",Ef="Transform",uo="Transpose",Rf="Unique",xu="Unpack",bu="UnsortedSegmentSum",yu="ZerosLike",Sa="Step",$N="FromPixels",Af="RotateWithOffset",Ul="_FusedMatMul",Gl="FusedConv2D",Q0="FusedDepthwiseConv2D";function yn(...n){X().getBool("IS_TEST")||X().getBool("PROD")||console.warn(...n)}const Hl=Wd("kernelRegistry",()=>new Map),Uh=Wd("gradRegistry",()=>new Map);function ng(n,t){const e=eb(n,t);return Hl.get(e)}function sg(n){return Uh.get(n)}function rg(n){const t=Hl.entries(),e=[];for(;;){const{done:s,value:r}=t.next();if(s)break;const[o,i]=r,[a]=o.split("_");a===n&&e.push(i)}return e}function tb(n){const{kernelName:t,backendName:e}=n,s=eb(t,e);Hl.has(s)&&yn(`The kernel '${t}' for backend '${e}' is already registered`),Hl.set(s,n)}function kN(n){const{kernelName:t}=n;Uh.has(t)&&X().getBool("DEBUG")&&yn(`Overriding the gradient for '${t}'`),Uh.set(t,n)}function eb(n,t){return`${t}_${n}`}function nb(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}function IN(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function SN(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var t=n.default;if(typeof t=="function"){var e=function s(){var r=!1;try{r=this instanceof s}catch{}return r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var r=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(e,s,r.get?r:{enumerable:!0,get:function(){return n[s]}})}),e}var oh,og;function NN(){if(og)return oh;og=1,oh=t;var n=null;try{n=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function t(k,C,E){this.low=k|0,this.high=C|0,this.unsigned=!!E}t.prototype.__isLong__,Object.defineProperty(t.prototype,"__isLong__",{value:!0});function e(k){return(k&&k.__isLong__)===!0}t.isLong=e;var s={},r={};function o(k,C){var E,_,R;return C?(k>>>=0,(R=0<=k&&k<256)&&(_=r[k],_)?_:(E=a(k,(k|0)<0?-1:0,!0),R&&(r[k]=E),E)):(k|=0,(R=-128<=k&&k<128)&&(_=s[k],_)?_:(E=a(k,k<0?-1:0,!1),R&&(s[k]=E),E))}t.fromInt=o;function i(k,C){if(isNaN(k))return C?b:x;if(C){if(k<0)return b;if(k>=p)return N}else{if(k<=-m)return S;if(k+1>=m)return $}return k<0?i(-k,C).neg():a(k%f|0,k/f|0,C)}t.fromNumber=i;function a(k,C,E){return new t(k,C,E)}t.fromBits=a;var l=Math.pow;function c(k,C,E){if(k.length===0)throw Error("empty string");if(k==="NaN"||k==="Infinity"||k==="+Infinity"||k==="-Infinity")return x;if(typeof C=="number"?(E=C,C=!1):C=!!C,E=E||10,E<2||36<E)throw RangeError("radix");var _;if((_=k.indexOf("-"))>0)throw Error("interior hyphen");if(_===0)return c(k.substring(1),C,E).neg();for(var R=i(l(E,8)),M=x,z=0;z<k.length;z+=8){var P=Math.min(8,k.length-z),U=parseInt(k.substring(z,z+P),E);if(P<8){var q=i(l(E,P));M=M.mul(q).add(i(U))}else M=M.mul(R),M=M.add(i(U))}return M.unsigned=C,M}t.fromString=c;function u(k,C){return typeof k=="number"?i(k,C):typeof k=="string"?c(k,C):a(k.low,k.high,typeof C=="boolean"?C:k.unsigned)}t.fromValue=u;var h=65536,d=1<<24,f=h*h,p=f*f,m=p/2,g=o(d),x=o(0);t.ZERO=x;var b=o(0,!0);t.UZERO=b;var w=o(1);t.ONE=w;var y=o(1,!0);t.UONE=y;var v=o(-1);t.NEG_ONE=v;var $=a(-1,2147483647,!1);t.MAX_VALUE=$;var N=a(-1,-1,!0);t.MAX_UNSIGNED_VALUE=N;var S=a(0,-2147483648,!1);t.MIN_VALUE=S;var I=t.prototype;return I.toInt=function(){return this.unsigned?this.low>>>0:this.low},I.toNumber=function(){return this.unsigned?(this.high>>>0)*f+(this.low>>>0):this.high*f+(this.low>>>0)},I.toString=function(C){if(C=C||10,C<2||36<C)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(S)){var E=i(C),_=this.div(E),R=_.mul(E).sub(this);return _.toString(C)+R.toInt().toString(C)}else return"-"+this.neg().toString(C);for(var M=i(l(C,6),this.unsigned),z=this,P="";;){var U=z.div(M),q=z.sub(U.mul(M)).toInt()>>>0,j=q.toString(C);if(z=U,z.isZero())return j+P;for(;j.length<6;)j="0"+j;P=""+j+P}},I.getHighBits=function(){return this.high},I.getHighBitsUnsigned=function(){return this.high>>>0},I.getLowBits=function(){return this.low},I.getLowBitsUnsigned=function(){return this.low>>>0},I.getNumBitsAbs=function(){if(this.isNegative())return this.eq(S)?64:this.neg().getNumBitsAbs();for(var C=this.high!=0?this.high:this.low,E=31;E>0&&(C&1<<E)==0;E--);return this.high!=0?E+33:E+1},I.isZero=function(){return this.high===0&&this.low===0},I.eqz=I.isZero,I.isNegative=function(){return!this.unsigned&&this.high<0},I.isPositive=function(){return this.unsigned||this.high>=0},I.isOdd=function(){return(this.low&1)===1},I.isEven=function(){return(this.low&1)===0},I.equals=function(C){return e(C)||(C=u(C)),this.unsigned!==C.unsigned&&this.high>>>31===1&&C.high>>>31===1?!1:this.high===C.high&&this.low===C.low},I.eq=I.equals,I.notEquals=function(C){return!this.eq(C)},I.neq=I.notEquals,I.ne=I.notEquals,I.lessThan=function(C){return this.comp(C)<0},I.lt=I.lessThan,I.lessThanOrEqual=function(C){return this.comp(C)<=0},I.lte=I.lessThanOrEqual,I.le=I.lessThanOrEqual,I.greaterThan=function(C){return this.comp(C)>0},I.gt=I.greaterThan,I.greaterThanOrEqual=function(C){return this.comp(C)>=0},I.gte=I.greaterThanOrEqual,I.ge=I.greaterThanOrEqual,I.compare=function(C){if(e(C)||(C=u(C)),this.eq(C))return 0;var E=this.isNegative(),_=C.isNegative();return E&&!_?-1:!E&&_?1:this.unsigned?C.high>>>0>this.high>>>0||C.high===this.high&&C.low>>>0>this.low>>>0?-1:1:this.sub(C).isNegative()?-1:1},I.comp=I.compare,I.negate=function(){return!this.unsigned&&this.eq(S)?S:this.not().add(w)},I.neg=I.negate,I.add=function(C){e(C)||(C=u(C));var E=this.high>>>16,_=this.high&65535,R=this.low>>>16,M=this.low&65535,z=C.high>>>16,P=C.high&65535,U=C.low>>>16,q=C.low&65535,j=0,Z=0,J=0,Q=0;return Q+=M+q,J+=Q>>>16,Q&=65535,J+=R+U,Z+=J>>>16,J&=65535,Z+=_+P,j+=Z>>>16,Z&=65535,j+=E+z,j&=65535,a(J<<16|Q,j<<16|Z,this.unsigned)},I.subtract=function(C){return e(C)||(C=u(C)),this.add(C.neg())},I.sub=I.subtract,I.multiply=function(C){if(this.isZero())return x;if(e(C)||(C=u(C)),n){var E=n.mul(this.low,this.high,C.low,C.high);return a(E,n.get_high(),this.unsigned)}if(C.isZero())return x;if(this.eq(S))return C.isOdd()?S:x;if(C.eq(S))return this.isOdd()?S:x;if(this.isNegative())return C.isNegative()?this.neg().mul(C.neg()):this.neg().mul(C).neg();if(C.isNegative())return this.mul(C.neg()).neg();if(this.lt(g)&&C.lt(g))return i(this.toNumber()*C.toNumber(),this.unsigned);var _=this.high>>>16,R=this.high&65535,M=this.low>>>16,z=this.low&65535,P=C.high>>>16,U=C.high&65535,q=C.low>>>16,j=C.low&65535,Z=0,J=0,Q=0,rt=0;return rt+=z*j,Q+=rt>>>16,rt&=65535,Q+=M*j,J+=Q>>>16,Q&=65535,Q+=z*q,J+=Q>>>16,Q&=65535,J+=R*j,Z+=J>>>16,J&=65535,J+=M*q,Z+=J>>>16,J&=65535,J+=z*U,Z+=J>>>16,J&=65535,Z+=_*j+R*q+M*U+z*P,Z&=65535,a(Q<<16|rt,Z<<16|J,this.unsigned)},I.mul=I.multiply,I.divide=function(C){if(e(C)||(C=u(C)),C.isZero())throw Error("division by zero");if(n){if(!this.unsigned&&this.high===-2147483648&&C.low===-1&&C.high===-1)return this;var E=(this.unsigned?n.div_u:n.div_s)(this.low,this.high,C.low,C.high);return a(E,n.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?b:x;var _,R,M;if(this.unsigned){if(C.unsigned||(C=C.toUnsigned()),C.gt(this))return b;if(C.gt(this.shru(1)))return y;M=b}else{if(this.eq(S)){if(C.eq(w)||C.eq(v))return S;if(C.eq(S))return w;var z=this.shr(1);return _=z.div(C).shl(1),_.eq(x)?C.isNegative()?w:v:(R=this.sub(C.mul(_)),M=_.add(R.div(C)),M)}else if(C.eq(S))return this.unsigned?b:x;if(this.isNegative())return C.isNegative()?this.neg().div(C.neg()):this.neg().div(C).neg();if(C.isNegative())return this.div(C.neg()).neg();M=x}for(R=this;R.gte(C);){_=Math.max(1,Math.floor(R.toNumber()/C.toNumber()));for(var P=Math.ceil(Math.log(_)/Math.LN2),U=P<=48?1:l(2,P-48),q=i(_),j=q.mul(C);j.isNegative()||j.gt(R);)_-=U,q=i(_,this.unsigned),j=q.mul(C);q.isZero()&&(q=w),M=M.add(q),R=R.sub(j)}return M},I.div=I.divide,I.modulo=function(C){if(e(C)||(C=u(C)),n){var E=(this.unsigned?n.rem_u:n.rem_s)(this.low,this.high,C.low,C.high);return a(E,n.get_high(),this.unsigned)}return this.sub(this.div(C).mul(C))},I.mod=I.modulo,I.rem=I.modulo,I.not=function(){return a(~this.low,~this.high,this.unsigned)},I.and=function(C){return e(C)||(C=u(C)),a(this.low&C.low,this.high&C.high,this.unsigned)},I.or=function(C){return e(C)||(C=u(C)),a(this.low|C.low,this.high|C.high,this.unsigned)},I.xor=function(C){return e(C)||(C=u(C)),a(this.low^C.low,this.high^C.high,this.unsigned)},I.shiftLeft=function(C){return e(C)&&(C=C.toInt()),(C&=63)===0?this:C<32?a(this.low<<C,this.high<<C|this.low>>>32-C,this.unsigned):a(0,this.low<<C-32,this.unsigned)},I.shl=I.shiftLeft,I.shiftRight=function(C){return e(C)&&(C=C.toInt()),(C&=63)===0?this:C<32?a(this.low>>>C|this.high<<32-C,this.high>>C,this.unsigned):a(this.high>>C-32,this.high>=0?0:-1,this.unsigned)},I.shr=I.shiftRight,I.shiftRightUnsigned=function(C){if(e(C)&&(C=C.toInt()),C&=63,C===0)return this;var E=this.high;if(C<32){var _=this.low;return a(_>>>C|E<<32-C,E>>>C,this.unsigned)}else return C===32?a(E,0,this.unsigned):a(E>>>C-32,0,this.unsigned)},I.shru=I.shiftRightUnsigned,I.shr_u=I.shiftRightUnsigned,I.toSigned=function(){return this.unsigned?a(this.low,this.high,!1):this},I.toUnsigned=function(){return this.unsigned?this:a(this.low,this.high,!0)},I.toBytes=function(C){return C?this.toBytesLE():this.toBytesBE()},I.toBytesLE=function(){var C=this.high,E=this.low;return[E&255,E>>>8&255,E>>>16&255,E>>>24,C&255,C>>>8&255,C>>>16&255,C>>>24]},I.toBytesBE=function(){var C=this.high,E=this.low;return[C>>>24,C>>>16&255,C>>>8&255,C&255,E>>>24,E>>>16&255,E>>>8&255,E&255]},t.fromBytes=function(C,E,_){return _?t.fromBytesLE(C,E):t.fromBytesBE(C,E)},t.fromBytesLE=function(C,E){return new t(C[0]|C[1]<<8|C[2]<<16|C[3]<<24,C[4]|C[5]<<8|C[6]<<16|C[7]<<24,E)},t.fromBytesBE=function(C,E){return new t(C[4]<<24|C[5]<<16|C[6]<<8|C[7],C[0]<<24|C[1]<<16|C[2]<<8|C[3],E)},oh}var sb=NN();const rb=IN(sb),TN=u$({__proto__:null,default:rb},[sb]);const br=rb||TN;function wu(n){return br.fromString(n,!0,16)}const ob=wu("c3a5c85c97cb3127"),xr=wu("b492b66fbe98f273"),Ze=wu("9ae16a3b2f90404f");function Gh(n){return n.xor(n.shru(47))}function ib(n,t,e){const s=n.slice(t,t+e);return br.fromBytes(Array.from(s),!0,!0)}function Jt(n,t){return ib(n,t,8)}function ig(n,t){return ib(n,t,4)}function Ee(n,t){return t===0?n:n.shru(t).or(n.shl(64-t))}function js(n,t,e=wu("9ddfea08eb382d69")){let s=n.xor(t).mul(e);s=s.xor(s.shru(47));let r=t.xor(s).mul(e);return r=r.xor(r.shru(47)),r=r.mul(e),r}function EN(n,t,e,s,r,o){r=r.add(n),o=Ee(o.add(r).add(s),21);const i=r;return r=r.add(t),r=r.add(e),o=o.add(Ee(r,44)),[r.add(s),o.add(i)]}function nl(n,t,e,s){return EN(Jt(n,t),Jt(n,t+8),Jt(n,t+16),Jt(n,t+24),e,s)}function RN(n,t=n.length){if(t>=8){const e=Ze.add(t*2),s=Jt(n,0).add(Ze),r=Jt(n,t-8),o=Ee(r,37).mul(e).add(s),i=Ee(s,25).add(r).mul(e);return js(o,i,e)}if(t>=4){const e=Ze.add(t*2),s=ig(n,0);return js(s.shl(3).add(t),ig(n,t-4),e)}if(t>0){const e=n[0],s=n[t>>1],r=n[t-1],o=e+(s<<8),i=t+(r<<2);return Gh(Ze.mul(o).xor(ob.mul(i))).mul(Ze)}return Ze}function AN(n,t=n.length){const e=Ze.add(t*2),s=Jt(n,0).mul(xr),r=Jt(n,8),o=Jt(n,t-8).mul(e),i=Jt(n,t-16).mul(Ze);return js(Ee(s.add(r),43).add(Ee(o,30)).add(i),s.add(Ee(r.add(Ze),18)).add(o),e)}function DN(n,t=n.length){const e=Ze.add(t*2),s=Jt(n,0).mul(Ze),r=Jt(n,8),o=Jt(n,t-8).mul(e),i=Jt(n,t-16).mul(Ze),a=Ee(s.add(r),43).add(Ee(o,30)).add(i),l=js(a,s.add(Ee(r.add(Ze),18)).add(o),e),c=Jt(n,16).mul(e),u=Jt(n,24),h=a.add(Jt(n,t-32)).mul(e),d=l.add(Jt(n,t-24)).mul(e);return js(Ee(c.add(u),43).add(Ee(h,30)).add(d),c.add(Ee(u.add(s),18)).add(h),e)}function _N(n,t=n.length){const e=br.fromNumber(81,!0);if(t<=32)return t<=16?RN(n,t):AN(n,t);if(t<=64)return DN(n,t);let s=e,r=e.mul(xr).add(113),o=Gh(r.mul(Ze).add(113)).mul(Ze),i=[br.UZERO,br.UZERO],a=[br.UZERO,br.UZERO];s=s.mul(Ze).add(Jt(n,0));let l=0;const c=(t-1>>6)*64,u=c+(t-1&63)-63;do s=Ee(s.add(r).add(i[0]).add(Jt(n,l+8)),37).mul(xr),r=Ee(r.add(i[1]).add(Jt(n,l+48)),42).mul(xr),s=s.xor(a[1]),r=r.add(i[0]).add(Jt(n,l+40)),o=Ee(o.add(a[0]),33).mul(xr),i=nl(n,l,i[1].mul(xr),s.add(a[0])),a=nl(n,l+32,o.add(a[1]),r.add(Jt(n,l+16))),[o,s]=[s,o],l+=64;while(l!==c);const h=xr.add(o.and(255).shl(1));return l=u,a[0]=a[0].add(t-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),s=Ee(s.add(r).add(i[0]).add(Jt(n,l+8)),37).mul(h),r=Ee(r.add(i[1]).add(Jt(n,l+48)),42).mul(h),s=s.xor(a[1].mul(9)),r=r.add(i[0].mul(9).add(Jt(n,l+40))),o=Ee(o.add(a[0]),33).mul(h),i=nl(n,l,i[1].mul(h),s.add(a[0])),a=nl(n,l+32,o.add(a[1]),r.add(Jt(n,l+16))),[o,s]=[s,o],js(js(i[0],a[0],h).add(Gh(r).mul(ob)).add(o),js(i[1],a[1],h).add(s),h)}function ar(n,t){return t==="string"?Ys(n):Ur([n],t)}function FN(n,t){return n instanceof Float32Array&&t==="float32"||n instanceof Int32Array&&t==="int32"||n instanceof Uint8Array&&t==="bool"}function Ur(n,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=Rr(n)),X().getBool("DEBUG")&&cN(n,t),FN(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){const e=new Uint8Array(n.length);for(let s=0;s<e.length;++s)Math.round(n[s])!==0&&(e[s]=1);return e}else throw new Error(`Unknown data type ${t}`)}function sn(){return X().platform.now()}function Ys(n,t="utf-8"){return t=t||"utf-8",X().platform.encode(n,t)}function tr(n,t="utf-8"){return t=t||"utf-8",X().platform.decode(n,t)}function _n(n){return X().platform.isTypedArray!=null?X().platform.isTypedArray(n):nb(n)}function Rr(n,t=[],e=!1){if(t==null&&(t=[]),typeof n=="boolean"||typeof n=="number"||typeof n=="string"||Vd(n)||n==null||_n(n)&&e)t.push(n);else if(Array.isArray(n)||_n(n))for(let s=0;s<n.length;++s)Rr(n[s],t,e);else{let s=-1;for(const r of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(r)&&(s=Math.max(s,Number(r)));for(let r=0;r<=s;r++)Rr(n[r],t,e)}return t}class ON{constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new LN)}profileKernel(t,e,s){let r;const o=()=>{r=s()};let i;const a=sn();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(o);else{o();for(const c of r)c.dataSync();i=Promise.resolve({kernelMs:sn()-a})}if(X().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<r.length;c++){const u=r[c];u.data().then(h=>{MN(h,u.dtype,t)})}return{kernelName:t,outputs:r,inputs:e,timeMs:i.then(c=>c.kernelMs),extraInfo:i.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:e,outputs:s,timeMs:r,inputs:o,extraInfo:i}=t;s.forEach(a=>{Promise.all([a.data(),r,i]).then(l=>{this.logger.logKernelProfile(e,a,l[0],l[1],o,l[2])})})}}function MN(n,t,e){if(t!=="float32")return!1;for(let s=0;s<n.length;s++){const r=n[s];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${e}'`),!0}return!1}class LN{logKernelProfile(t,e,s,r,o,i){const a=typeof r=="number"?co(`${r}ms`,9):r.error,l=co(t,25),c=e.rank,u=e.size,h=co(e.shape.toString(),14);let d="";for(const f in o){const p=o[f];if(p!=null){const m=p.shape||e.shape,g=m.length;d+=`${f}: ${g}D ${g>0?m:""} `}}console.log(`%c${l}	%c${a}	%c${c}D ${h}	%c${u}	%c${d}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}function PN(n,t,e){const s={},r={};for(let l=0;l<t.length;l++)s[t[l].id]=!0;for(let l=0;l<n.length;l++){const c=n[l],u=c.inputs;for(const h in u){const d=u[h];let f=!1;for(let p=0;p<t.length;p++)if(s[d.id]){c.outputs.forEach(m=>s[m.id]=!0),f=!0,r[c.id]=!0;break}if(f)break}}const o={};o[e.id]=!0;const i={};for(let l=n.length-1;l>=0;l--){const c=n[l],u=c.inputs;for(let h=0;h<c.outputs.length;h++)if(o[c.outputs[h].id]){for(const d in u)o[u[d].id]=!0,i[c.id]=!0;break}}const a=[];for(let l=0;l<n.length;l++){const c=n[l];if(r[c.id]&&i[c.id]){const u={};for(const d in c.inputs){const f=c.inputs[d];s[f.id]&&(u[d]=f)}const h=Object.assign({},c);h.inputs=u,h.outputs=c.outputs,a.push(h)}}return a}function zN(n,t,e,s){for(let r=t.length-1;r>=0;r--){const o=t[r],i=[];if(o.outputs.forEach(l=>{const c=n[l.id];c!=null?i.push(c):i.push(null)}),o.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);const a=o.gradient(i);for(const l in o.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);const c=e(()=>a[l]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${c.dtype}'`);const u=o.inputs[l];if(!Pt(c.shape,u.shape))throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${l}' has shape '${c.shape}', which does not match the shape of the input '${u.shape}'`);if(n[u.id]==null)n[u.id]=c;else{const h=n[u.id];n[u.id]=s(h,c),h.dispose()}}}}const ag=20,Xo=3,ih=7;function BN(n,t,e,s){const r=xt(t),o=VN(n,t,e,r),i=t.length,a=vl(n,t,e,r,o),l=["Tensor"];return s&&(l.push(`  dtype: ${e}`),l.push(`  rank: ${i}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(a.map(c=>"    "+c).join(`
`)),l.join(`
`)}function VN(n,t,e,s){const r=Y(t),o=s[s.length-1],i=new Array(o).fill(0),a=t.length,l=e==="complex64"?ni(n):n;if(a>1)for(let c=0;c<r/o;c++){const u=c*o;for(let h=0;h<o;h++)i[h]=Math.max(i[h],ei(l[u+h],0,e).length)}return i}function ei(n,t,e){let s;return Array.isArray(n)?s=`${parseFloat(n[0].toFixed(ih))} + ${parseFloat(n[1].toFixed(ih))}j`:Ai(n)?s=`'${n}'`:e==="bool"?s=ab(n):s=parseFloat(n.toFixed(ih)).toString(),co(s,t)}function ab(n){return n===0?"false":"true"}function vl(n,t,e,s,r,o=!0){const i=e==="complex64"?2:1,a=t[0],l=t.length;if(l===0){if(e==="complex64"){const m=ni(n);return[ei(m[0],0,e)]}return e==="bool"?[ab(n[0])]:[n[0].toString()]}if(l===1){if(a>ag){const g=Xo*i;let x=Array.from(n.slice(0,g)),b=Array.from(n.slice((a-Xo)*i,a*i));return e==="complex64"&&(x=ni(x),b=ni(b)),["["+x.map((w,y)=>ei(w,r[y],e)).join(", ")+", ..., "+b.map((w,y)=>ei(w,r[a-Xo+y],e)).join(", ")+"]"]}return["["+(e==="complex64"?ni(n):Array.from(n)).map((g,x)=>ei(g,r[x],e)).join(", ")+"]"]}const c=t.slice(1),u=s.slice(1),h=s[0]*i,d=[];if(a>ag){for(let m=0;m<Xo;m++){const g=m*h,x=g+h;d.push(...vl(n.slice(g,x),c,e,u,r,!1))}d.push("...");for(let m=a-Xo;m<a;m++){const g=m*h,x=g+h;d.push(...vl(n.slice(g,x),c,e,u,r,m===a-1))}}else for(let m=0;m<a;m++){const g=m*h,x=g+h;d.push(...vl(n.slice(g,x),c,e,u,r,m===a-1))}const f=l===2?",":"";d[0]="["+(a>0?d[0]+f:"");for(let m=1;m<d.length-1;m++)d[m]=" "+d[m]+f;let p=`,
`;for(let m=2;m<l;m++)p+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(o?"":p),d}function ni(n){const t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}class Oe{constructor(t,e,s){if(this.dtype=e,this.shape=t.slice(),this.size=Y(t),s!=null){const r=s.length;T(r===this.size,()=>`Length of values '${r}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||he(e,this.size),this.strides=xt(t)}set(t,...e){e.length===0&&(e=[0]),T(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const s=this.locToIndex(e);this.values[s]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(const r of t){if(r<0||r>=this.shape[e]){const o=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(o)}e++}let s=t[t.length-1];for(let r=0;r<t.length-1;++r)s+=this.strides[r]*t[r];return this.values[s]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let s=0;s<t.length-1;++s)e+=this.strides[s]*t[s];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const e=new Array(this.shape.length);for(let s=0;s<e.length-1;++s)e[s]=Math.floor(t/this.strides[s]),t-=e[s]*this.strides[s];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return Gn().makeTensor(this.values,this.shape,this.dtype)}}let Gn=null,so=null;function WN(n){Gn=n}function UN(n){so=n}class ve{constructor(t,e,s,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=Y(t),this.strides=xt(t),this.dataId=s,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return so.buffer(this.shape,this.dtype,t)}bufferSync(){return so.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return jn(this.shape,t,this.dtype==="complex64")}arraySync(){return jn(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=Gn().read(this.dataId);if(this.dtype==="string"){const e=await t;try{return e.map(s=>tr(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),Gn().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=Gn().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>tr(e))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await Gn().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),Gn().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return so.print(this,t)}clone(){return this.throwIfDisposed(),so.clone(this)}toString(t=!1){const e=this.dataSync();return BN(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),so.cast(this,t)}variable(t=!0,e,s){return this.throwIfDisposed(),Gn().makeVariable(this,t,e,s)}}Object.defineProperty(ve,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function K(){return Wd("Tensor",()=>ve)}K();class ql extends ve{constructor(t,e,s,r){super(t.shape,t.dtype,t.dataId,r),this.trainable=e,this.name=s}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Pt(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);Gn().disposeTensor(this),this.dataId=t.dataId,Gn().incRef(this,null)}dispose(){Gn().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(ql,Symbol.hasInstance,{value:n=>n instanceof ve&&n.assign!=null&&n.assign instanceof Function});var lg;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(lg||(lg={}));var Hh;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(Hh||(Hh={}));var qh;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(qh||(qh={}));var Xh;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(Xh||(Xh={}));var Kh;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(Kh||(Kh={}));const GN={float32:Xh,int32:Hh,bool:qh,complex64:Kh};function mn(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return GN[n][t]}function Df(n){return mn(n,"int32")}function lb(n){return n!=null&&typeof n=="object"&&"texture"in n&&n.texture instanceof WebGLTexture}function cb(n){return typeof GPUBuffer<"u"&&n!=null&&typeof n=="object"&&"buffer"in n&&n.buffer instanceof GPUBuffer}function fe(n,t){if(n.dtype===t.dtype)return[n,t];const e=mn(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function ub(n){const t=[];return hb(n,t,new Set),t}function hb(n,t,e){if(n==null)return;if(n instanceof ve){t.push(n);return}if(!HN(n))return;const s=n;for(const r in s){const o=s[r];e.has(o)||(e.add(o),hb(o,t,e))}}function HN(n){return Array.isArray(n)||typeof n=="object"}function ah(n){return n.kernelName!=null}class cg{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class yo{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new cg}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,s=1){return t in this.registryFactory?(yn(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:s},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:e,asyncInit:s}=this.initializeBackend(t);if(!(s?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new ON(this.backendInstance),!0}setupRegisteredKernels(){rg(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){rg(t).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[t])})}initializeBackend(t){const e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const s=e.factory();if(s&&!(s instanceof Md)&&typeof s.then=="function"){const r=++this.pendingBackendInitId,o=s.then(i=>r<this.pendingBackendInitId?!1:(this.registry[t]=i,this.pendingBackendInit=null,!0)).catch(i=>(r<this.pendingBackendInitId||(this.pendingBackendInit=null,yn(`Initialization of backend ${t} failed`),yn(i.stack||i.message)),!1));return this.pendingBackendInit=o,{success:o,asyncInit:!0}}else return this.registry[t]=s,{success:!0,asyncInit:!1}}catch(s){return yn(`Initialization of backend ${t} failed`),yn(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e],{success:r,asyncInit:o}=this.initializeBackend(s);if(o||r)return{name:s,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const s=this.state.tensorInfo.get(e),r=s.backend,o=this.readSync(e),i=r.refCount(e);r.disposeData(e,!0),s.backend=t,t.move(e,o,s.shape,s.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let s=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=t}let r;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(r),()=>(r=e(),r instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r))}scopedRun(t,e,s){t();try{const r=s();return e(),r}catch(r){throw e(),r}}nextTensorId(){return yo.nextTensorId++}nextVariableId(){return yo.nextVariableId++}clone(t){const e=L.runKernel(Ji,{x:t}),s={x:t},r=i=>({x:()=>{const a="float32",l={x:i},c={dtype:a};return L.runKernel(zi,l,c)}}),o=[];return this.addTapeNode(this.state.activeScope.name,s,[e],r,o,{}),e}runKernel(t,e,s){if(this.backendName==null&&this.backend,!(ng(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,s){const r=this.backend.numDataIds();let o=0;s.forEach(l=>{o+=l.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=r-e-o-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let e,s=[];const r=this.isTapeOn(),o=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l;const c=ah(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(ah(t)){const{kernelName:p,inputs:m,attrs:g}=t;this.backendName==null&&this.backend;const x=ng(p,this.backendName);T(x!=null,()=>`Cannot find registered kernel '${p}' for backend '${this.backendName}'`),a=()=>{const b=this.backend.numDataIds();l=x.kernelFunc({inputs:m,attrs:g,backend:this.backend});const w=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(p,b,w);const y=w.map(v=>v.rank!=null?v:this.makeTensorFromTensorInfo(v));if(r){const v=this.getTensorsForGradient(p,m,y);s=this.saveTensorsForBackwardMode(v)}return y}}else{const{forwardFunc:p}=t,m=g=>{r&&(s=g.map(x=>this.keep(this.clone(x))))};a=()=>{const g=this.backend.numDataIds();l=this.tidy(()=>p(this.backend,m));const x=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,g,x),x}}const{inputs:u,attrs:h}=t,d=ah(t)?null:t.backwardsFunc;let f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=a():(f=this.profiler.profileKernel(c,u,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(f),e=f.outputs)}),r&&this.addTapeNode(c,u,e,d,s,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(p=>u[p]!=null?u[p].shape:null),outputShapes:e.map(p=>p.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(l)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(t,e,s){const r=sg(t);if(r!=null){const o=r.inputsToSave||[],i=r.outputsToSave||[];let a;r.saveAllInputs?(T(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(e).map(c=>e[c])):a=o.map(c=>e[c]);const l=s.filter((c,u)=>i[u]);return a.concat(l)}return[]}makeTensor(t,e,s,r){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",r=r||this.backend;let o=t;s==="string"&&Ai(t[0])&&(o=t.map(l=>Ys(l)));const i=r.write(o,e,s),a=new ve(e,s,i,this.nextTensorId());if(this.trackTensor(a,r),s==="string"){const l=this.state.tensorInfo.get(i),c=hN(o);this.state.numBytes+=c-l.bytes,l.bytes=c}return a}makeTensorFromDataId(t,e,s,r){s=s||"float32";const o={dataId:t,shape:e,dtype:s};return this.makeTensorFromTensorInfo(o,r)}makeTensorFromTensorInfo(t,e){const{dataId:s,shape:r,dtype:o}=t,i=new ve(r,o,s,this.nextTensorId());return this.trackTensor(i,e),i}makeVariable(t,e=!0,s,r){s=s||this.nextVariableId().toString(),r!=null&&r!==t.dtype&&(t=t.cast(r));const o=new ql(t,e,s,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let s=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(s=t.size*Wl(t.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:s})),t instanceof ql||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const s=t.size*Wl(t.dtype);this.state.numBytes-=s}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const e=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(r=>r.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const r of this.state.activeProfile.kernels)r.kernelTimeMs=await r.kernelTimeMs,r.extraInfo=await r.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,s,r,o,i){const a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:s,saved:o},l=sg(t);l!=null&&(r=l.gradFunc),r!=null&&(a.gradient=c=>(c=c.map((u,h)=>{if(u==null){const d=s[h],f=Ve(d.size,d.dtype);return this.makeTensor(f,d.shape,d.dtype)}return u}),r(c.length>1?c:c[0],o,i))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=ub(t),s=new Set(e.map(o=>o.id));for(let o=0;o<this.state.activeScope.track.length;o++){const i=this.state.activeScope.track[o];!i.kept&&!s.has(i.id)&&i.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(o=>{!o.kept&&o.scopeId===r.id&&this.track(o)})}gradients(t,e,s,r=!1){if(T(e.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const o=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));T(o instanceof ve,()=>"The result y returned by f() must be a tensor.");const i=PN(this.state.activeTape,e,o);if(!r&&i.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[o.id]=s??qN(o.shape),zN(a,i,c=>this.tidy(c),XN);const l=e.map(c=>a[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(const u of c.saved)u.dispose()}),this.state.activeTape=null),{value:o,grads:l}})}customGrad(t){return T(zh(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{T(e.every(a=>a instanceof ve),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const r={};e.forEach((a,l)=>{r[l]=a});const o=(a,l)=>(s=t(...e,l),T(s.value instanceof ve,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),T(zh(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),i=(a,l)=>{const c=s.gradFunc(a,l),u=Array.isArray(c)?c:[c];T(u.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),T(u.every(d=>d instanceof ve),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const h={};return u.forEach((d,f)=>{h[f]=()=>d}),h};return this.runKernelFunc({forwardFunc:o,backwardsFunc:i,inputs:r})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){const e=sn(),s=await this.backend.time(t);return s.wallMs=sn()-e,s}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new cg;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}yo.nextTensorId=0;yo.nextVariableId=0;function qN(n){const t=Bd(Y(n),"float32");return L.makeTensor(t,n,"float32")}function db(){const n=_0();if(n._tfengine==null){const t=new pN(n);n._tfengine=new yo(t)}return bN(n._tfengine.ENV),WN(()=>n._tfengine),n._tfengine}const L=db();function XN(n,t){const e={a:n,b:t};return L.runKernel(Ao,e)}function KN(){return typeof navigator<"u"&&navigator!=null}function fb(n){if(n||KN()){if(n||(n=navigator),n.product==="ReactNative")return!0;const t=n.userAgent||n.vendor||(typeof window<"u"?window.opera:"");if(!t){const e=n;return e.userAgentData&&e.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function pb(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const ln=X();ln.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});ln.registerFlag("IS_BROWSER",()=>pb());ln.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");ln.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));ln.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));ln.registerFlag("PROD",()=>!1);ln.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>ln.getBool("DEBUG"));ln.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);ln.registerFlag("IS_TEST",()=>!1);ln.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>ln.getBool("DEBUG"));ln.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);ln.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);ln.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function vu(n,t){let e=n;if(_n(n))return t==="string"?[]:[n.length];if(lb(n)){const r=n.channels||"RGBA";return[n.height,n.width*r.length]}else if(cb(n))return[n.buffer.size/(t==null?4:Wl(t))];if(!Array.isArray(n))return[];const s=[];for(;Array.isArray(e)||_n(e)&&t!=="string";)s.push(e.length),e=e[0];return Array.isArray(n)&&X().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&mb(n,s,[]),s}function mb(n,t,e){if(e=e||[],!Array.isArray(n)&&!_n(n)){T(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}T(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`),T(n.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`);const s=t.slice(1);for(let r=0;r<n.length;++r)mb(n[r],s,e.concat(r))}function ug(n,t,e,s){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==t||n==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${s}' must be ${n} tensor, but got ${t} tensor`)}}function D(n,t,e,s="numeric"){if(n instanceof K())return ug(s,n.dtype,t,e),n;let r=Eo(n);if(r!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(r=s),ug(s,r,t,e),n==null||!_n(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const l=n==null?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${l}'`)}const o=vu(n,r);!_n(n)&&!Array.isArray(n)&&(n=[n]);const a=r!=="string"?Ur(n,r):Rr(n,[],!0);return L.makeTensor(a,o,r)}function gb(n,t,e,s="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((o,i)=>D(o,`${t}[${i}]`,e,s))}const jN="__op";function W(n){const t=Object.keys(n);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0];const s=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+jN;const r=(...o)=>{L.startScope(e);try{const i=s(...o);return Vd(i)&&console.error("Cannot return a Promise inside of tidy."),L.endScope(i),i}catch(i){throw L.endScope(null),i}};return Object.defineProperty(r,"name",{value:e,configurable:!0}),r}function YN(n,t){const e=D(n,"real","complex"),s=D(t,"imag","complex");zd(e.shape,s.shape,`real and imag shapes, ${e.shape} and ${s.shape}, must match in call to tf.complex().`);const r={real:e,imag:s};return L.runKernel(Yd,r)}const wo=W({complex_:YN});function Cu(n,t,e,s){if(s==null)s=Eo(n);else if(s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(cb(n)||lb(n)){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return L.backend.createTensorFromGPUData(n,t||e,s)}if(!_n(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Ls(t);const r=Y(t),o=Y(e);T(r===o,()=>`Based on the provided shape, [${t}], the tensor should have ${r} values but has ${o}`);for(let i=0;i<e.length;++i){const a=e[i],l=i===e.length-1?a!==Y(t.slice(i)):!0;T(e[i]===t[i]||!l,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!_n(n)&&!Array.isArray(n)&&(n=[n]),t=t||e,n=s!=="string"?Ur(n,s):Rr(n,[],!0),L.makeTensor(n,t,s)}function xb(n,t,e){const s=vu(n,e);return Cu(n,t,s,e)}class Do{static join(t){return new Do(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(s=>_n(s)?s.buffer:s),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let e=0;for(let s=0;s<t.length;s++){const r=t[s];s!==t.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const o=e+r.byteLength;this.shards.push({buffer:r,start:e,end:o}),e=o}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,e=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,e=isNaN(Number(e))?0:e,t=Math.max(0,t),e=Math.min(this.byteLength,e),e<=t)return new ArrayBuffer(0);const s=this.findShardForByte(t);if(s===-1)throw new Error(`Could not find start shard for byte ${t}`);const r=e-t,o=new ArrayBuffer(r),i=new Uint8Array(o);let a=0;for(let l=s;l<this.shards.length;l++){const c=this.shards[l],h=t+a-c.start,d=a,p=Math.min(e,c.end)-c.start,m=new Uint8Array(c.buffer,h,p-h);if(i.set(m,d),a+=m.length,e<c.end)break}return o}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function e(r){return t<r.start?-1:t>=r.end?1:0}if(e(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const s=ZN(this.shards,e);return s===-1?-1:(this.previousShardIndex=s,this.previousShardIndex)}}function ZN(n,t){let e=0,s=n.length;for(;e<=s;){const r=Math.floor((s-e)/2)+e,o=t(n[r]);if(o===0)return r;o<0?s=r:e=r+1}return-1}function os(){return L}function hg(){return L.memory()}function G(n,t){return L.tidy(n,t)}function Rt(n){ub(n).forEach(e=>e.dispose())}function fs(n){return L.keep(n)}function bb(n,t,e=1){return L.registerBackend(n,t,e)}function JN(){return L.backend}const dg=4;async function fg(n,t){const e=[],s=[],r=Array.isArray(n)?n.map(i=>i.name):Object.keys(n);for(let i=0;i<r.length;++i){const a=r[i],l=Array.isArray(n)?n[i].tensor:n[a];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${l.dtype}`);const c={name:a,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const u=new Promise(async h=>{const d=await l.bytes(),f=d.reduce((g,x)=>g+x.length,0)+dg*d.length,p=new Uint8Array(f);let m=0;for(let g=0;g<d.length;g++){const x=d[g],b=new Uint8Array(new Uint32Array([x.length]).buffer);p.set(b,m),m+=dg,p.set(x,m),m+=x.length}h(p)});s.push(u)}else s.push(l.data());t!=null&&(c.group=t),e.push(c)}const o=await Promise.all(s);return{data:QN(o),specs:e}}function QN(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let t=0;const e=[];n.forEach(o=>{if(t+=o.byteLength,e.push(o.byteLength===o.buffer.byteLength?o:new o.constructor(o)),!(o instanceof Float32Array||o instanceof Int32Array||o instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${o.constructor.name}`)});const s=new Uint8Array(t);let r=0;return e.forEach(o=>{s.set(new Uint8Array(o.buffer),r),r+=o.byteLength}),s.buffer}const _f=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function pg(n){return _f?Buffer.byteLength(n,"utf8"):new Blob([n]).size}function tT(n){if(_f)return Buffer.from(n).toString("base64");const t=new Uint8Array(n);let e="";for(let s=0,r=t.length;s<r;s++)e+=String.fromCharCode(t[s]);return btoa(e)}function eT(n){if(_f){const s=Buffer.from(n,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const t=atob(n),e=new Uint8Array(t.length);for(let s=0;s<t.length;++s)e.set([t.charCodeAt(s)],s);return e.buffer}function nT(n){return Do.join(n)}function yb(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:pg(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:pg(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:new Do(n.weightData).byteLength}}class je{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return je.instance==null&&(je.instance=new je),je.instance}static registerSaveRouter(t){je.getInstance().saveRouters.push(t)}static registerLoadRouter(t){je.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return je.getHandlers(t,"save")}static getLoadHandlers(t,e){return je.getHandlers(t,"load",e)}static getHandlers(t,e,s){const r=[];return(e==="load"?je.getInstance().loadRouters:je.getInstance().saveRouters).forEach(i=>{const a=i(t,s);a!==null&&r.push(a)}),r}}const sT=n=>je.getSaveHandlers(n);const jh="tensorflowjs",Yh=1,Cr="models_store",qs="model_info_store";function wb(){if(!X().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Zh(n){const t=n.result;t.createObjectStore(Cr,{keyPath:"modelPath"}),t.createObjectStore(qs,{keyPath:"modelPath"})}class Ar{constructor(t){if(this.indexedDB=wb(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((s,r)=>{const o=this.indexedDB.open(jh,Yh);o.onupgradeneeded=()=>Zh(o),o.onsuccess=()=>{const i=o.result;if(e==null){const a=i.transaction(Cr,"readonly"),c=a.objectStore(Cr).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return i.close(),r(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(c.result.modelArtifacts)},c.onerror=u=>(i.close(),r(c.error)),a.oncomplete=()=>i.close()}else{e.weightData=Do.join(e.weightData);const a=yb(e),l=i.transaction(qs,"readwrite");let c=l.objectStore(qs),u;try{u=c.put({modelPath:this.modelPath,modelArtifactsInfo:a})}catch(d){return r(d)}let h;u.onsuccess=()=>{h=i.transaction(Cr,"readwrite");const d=h.objectStore(Cr);let f;try{f=d.put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:a})}catch(p){return r(p)}f.onsuccess=()=>s({modelArtifactsInfo:a}),f.onerror=p=>{c=l.objectStore(qs);const m=c.delete(this.modelPath);m.onsuccess=()=>(i.close(),r(f.error)),m.onerror=g=>(i.close(),r(f.error))}},u.onerror=d=>(i.close(),r(u.error)),l.oncomplete=()=>{h==null?i.close():h.oncomplete=()=>i.close()}}},o.onerror=i=>r(o.error)})}}Ar.URL_SCHEME="indexeddb://";const vb=n=>X().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Ar.URL_SCHEME)?rT(n.slice(Ar.URL_SCHEME.length)):null;je.registerSaveRouter(vb);je.registerLoadRouter(vb);function rT(n){return new Ar(n)}function oT(n){return n.startsWith(Ar.URL_SCHEME)?n.slice(Ar.URL_SCHEME.length):n}class iT{constructor(){this.indexedDB=wb()}async listModels(){return new Promise((t,e)=>{const s=this.indexedDB.open(jh,Yh);s.onupgradeneeded=()=>Zh(s),s.onsuccess=()=>{const r=s.result,o=r.transaction(qs,"readonly"),a=o.objectStore(qs).getAll();a.onsuccess=()=>{const l={};for(const c of a.result)l[c.modelPath]=c.modelArtifactsInfo;t(l)},a.onerror=l=>(r.close(),e(a.error)),o.oncomplete=()=>r.close()},s.onerror=r=>e(s.error)})}async removeModel(t){return t=oT(t),new Promise((e,s)=>{const r=this.indexedDB.open(jh,Yh);r.onupgradeneeded=()=>Zh(r),r.onsuccess=()=>{const o=r.result,i=o.transaction(qs,"readwrite"),a=i.objectStore(qs),l=a.get(t);let c;l.onsuccess=()=>{if(l.result==null)return o.close(),s(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const u=a.delete(t),h=()=>{c=o.transaction(Cr,"readwrite");const f=c.objectStore(Cr).delete(t);f.onsuccess=()=>e(l.result.modelArtifactsInfo),f.onerror=p=>s(l.error)};u.onsuccess=h,u.onerror=d=>(h(),o.close(),s(l.error))}},l.onerror=u=>(o.close(),s(l.error)),i.oncomplete=()=>{c==null?o.close():c.oncomplete=()=>o.close()}},r.onerror=o=>s(r.error)})}}const Es="/",ro="tensorflowjs_models",Cb="info",aT="model_topology",lT="weight_specs",cT="weight_data",uT="model_metadata";function $b(n){return{info:[ro,n,Cb].join(Es),topology:[ro,n,aT].join(Es),weightSpecs:[ro,n,lT].join(Es),weightData:[ro,n,cT].join(Es),modelMetadata:[ro,n,uT].join(Es)}}function kb(n){for(const t of Object.values(n))window.localStorage.removeItem(t)}function hT(n){const t=n.split(Es);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(Es)}function dT(n){return n.startsWith(Dr.URL_SCHEME)?n.slice(Dr.URL_SCHEME.length):n}class Dr{constructor(t){if(!X().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=$b(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),s=JSON.stringify(t.weightSpecs),r=yb(t),o=Do.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,tT(o));const i={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:r}}catch{throw kb(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=s;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=r;const o=this.LS.getItem(this.keys.modelMetadata);if(o!=null){const a=JSON.parse(o);e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,a.signature!=null&&(e.signature=a.signature),a.userDefinedMetadata!=null&&(e.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(e.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(e.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(e.trainingConfig=a.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=eT(i),e}}Dr.URL_SCHEME="localstorage://";const Ib=n=>X().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Dr.URL_SCHEME)?fT(n.slice(Dr.URL_SCHEME.length)):null;je.registerSaveRouter(Ib);je.registerLoadRouter(Ib);function fT(n){return new Dr(n)}class pT{constructor(){T(X().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),T(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},e=ro+Es,s=Es+Cb;for(let r=0;r<this.LS.length;++r){const o=this.LS.key(r);if(o.startsWith(e)&&o.endsWith(s)){const i=hT(o);t[i]=JSON.parse(this.LS.getItem(o))}}return t}async removeModel(t){t=dT(t);const e=$b(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);const s=JSON.parse(this.LS.getItem(e.info));return kb(e),s}}const mg="://";class is{constructor(){this.managers={}}static getInstance(){return is.instance==null&&(is.instance=new is),is.instance}static registerManager(t,e){T(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(mg)&&(t=t.slice(0,t.indexOf(mg))),T(t.length>0,()=>"scheme must not be an empty string.");const s=is.getInstance();T(s.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),s.managers[t]=e}static getManager(t){const e=is.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(is.getInstance().managers)}}class mT{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){if(typeof window>"u"||!X().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,e);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const r=this.functionRefs[s.data.index];r(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return nb(t)}}if(X().get("IS_BROWSER")){X().setPlatform("browser",new mT);try{is.registerManager(Dr.URL_SCHEME,new pT)}catch{}try{is.registerManager(Ar.URL_SCHEME,new iT)}catch{}}const gT={importFetch:()=>require("node-fetch")};let lh;class xT{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return X().global.fetch!=null?X().global.fetch(t,e):(lh==null&&(lh=gT.importFetch()),lh(t,e))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}X().get("IS_NODE")&&!X().get("IS_BROWSER")&&X().setPlatform("node",new xT);function Nt(n,t="float32",e){return t=t||"float32",Ls(n),new Oe(n,t,e)}function bT(n,t){const e=D(n,"x","cast");if(!uN(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:e},r={dtype:t};return L.runKernel(zi,s,r)}const ut=W({cast_:bT});function yT(n){const e={x:D(n,"x","clone","string_or_numeric")};return L.runKernel(Ji,e)}const Ir=W({clone_:yT});function wT(n,t=!1){console.log(n.toString(t))}db();const vT={buffer:Nt,cast:ut,clone:Ir,print:wT};UN(vT);function CT(n,t){let e=D(n,"a","add"),s=D(t,"b","add");[e,s]=fe(e,s);const r={a:e,b:s};return L.runKernel(Ao,r)}const et=W({add_:CT});function $T(n,t){let e=D(n,"a","floorDiv"),s=D(t,"b","floorDiv");[e,s]=fe(e,s);const r={a:e,b:s};return L.runKernel(Yi,r)}const Sb=W({floorDiv_:$T});function kT(n,t){let e=D(n,"a","div"),s=D(t,"b","div");if([e,s]=fe(e,s),e.dtype==="int32"&&s.dtype==="int32")return Sb(e,s);const r={a:e,b:s},o={};return L.runKernel(Gi,r,o)}const bt=W({div_:kT});function IT(n,t){let e=D(n,"a","mul"),s=D(t,"b","mul");[e,s]=fe(e,s);const r={a:e,b:s};return L.runKernel(aa,r)}const O=W({mul_:IT});function ST(n){const t=D(n,"x","abs");if(t.dtype==="complex64"){const e={x:t};return L.runKernel(Nc,e)}else{const e={x:t};return L.runKernel(wc,e)}}const Ye=W({abs_:ST});function NT(n){const e={x:D(n,"x","acos")};return L.runKernel(Di,e)}const TT=W({acos_:NT});function ET(n){const e={x:D(n,"x","acosh")};return L.runKernel(_i,e)}const RT=W({acosh_:ET});function AT(n,t=null,e=!1){const r={x:D(n,"x","all","bool")},o={axis:t,keepDims:e};return L.runKernel(Gd,r,o)}const Nb=W({all_:AT});function DT(n,t=null,e=!1){const r={x:D(n,"x","any","bool")},o={axis:t,keepDims:e};return L.runKernel(Hd,r,o)}const Jh=W({any_:DT});function _T(n,t=0){const s={x:D(n,"x","argMax")},r={axis:t};return L.runKernel(vc,s,r)}const mi=W({argMax_:_T});function FT(n,t=0){const s={x:D(n,"x","argMin")},r={axis:t};return L.runKernel(Cc,s,r)}const OT=W({argMin_:FT});function MT(n){const e={x:D(n,"x","asin")};return L.runKernel(Fi,e)}const LT=W({asin_:MT});function PT(n){const e={x:D(n,"x","asinh")};return L.runKernel(Oi,e)}const zT=W({asinh_:PT});function BT(n){const e={x:D(n,"x","atan")};return L.runKernel(Mi,e)}const VT=W({atan_:BT});function WT(n,t){let e=D(n,"a","atan2"),s=D(t,"b","atan2");[e,s]=fe(e,s);const r={a:e,b:s};return L.runKernel(Pi,r)}const UT=W({atan2_:WT});function GT(n){const e={x:D(n,"x","atanh")};return L.runKernel(Li,e)}const HT=W({atanh_:GT});function Na(n,t,e,s,r="NHWC",o){const i=n[3],a=[...t,i],l=zs(r);return Me(n,a,e,o,s,null,null,l)}function On(n,t,e,s,r,o,i="channelsLast"){const[a,l]=gi(t);let c;if(i==="channelsLast")c=[a,l,n[3],n[3]];else if(i==="channelsFirst")c=[a,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return Me(n,c,e,s,r,o,!1,i)}function Ps(n,t,e,s,r,o,i="NDHWC"){const[a,l,c]=Qh(t);let u,h;if(i==="NDHWC")h="channelsLast",u=[a,l,c,n[4],n[4]];else if(i==="NCDHW")h="channelsFirst",u=[a,l,c,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return lr(n,u,e,s,r,!1,h,o)}function Me(n,t,e,s,r,o,i=!1,a="channelsLast"){let[l,c,u,h]=[-1,-1,-1,-1];if(a==="channelsLast")[l,c,u,h]=n;else if(a==="channelsFirst")[l,h,c,u]=n;else throw new Error(`Unknown dataFormat ${a}`);const[d,f,,p]=t,[m,g]=gi(e),[x,b]=gi(s),w=ho(d,x),y=ho(f,b),{padInfo:v,outHeight:$,outWidth:N}=KT(r,c,u,m,g,w,y,o,a),S=i?p*h:p;let I;return a==="channelsFirst"?I=[l,S,$,N]:a==="channelsLast"&&(I=[l,$,N,S]),{batchSize:l,dataFormat:a,inHeight:c,inWidth:u,inChannels:h,outHeight:$,outWidth:N,outChannels:S,padInfo:v,strideHeight:m,strideWidth:g,filterHeight:d,filterWidth:f,effectiveFilterHeight:w,effectiveFilterWidth:y,dilationHeight:x,dilationWidth:b,inShape:n,outShape:I,filterShape:t}}function lr(n,t,e,s,r,o=!1,i="channelsLast",a){let[l,c,u,h,d]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[l,c,u,h,d]=n;else if(i==="channelsFirst")[l,d,c,u,h]=n;else throw new Error(`Unknown dataFormat ${i}`);const[f,p,m,,g]=t,[x,b,w]=Qh(e),[y,v,$]=Qh(s),N=ho(f,y),S=ho(p,v),I=ho(m,$),{padInfo:k,outDepth:C,outHeight:E,outWidth:_}=jT(r,c,u,h,x,b,w,N,S,I,a),R=o?g*d:g;let M;return i==="channelsFirst"?M=[l,R,C,E,_]:i==="channelsLast"&&(M=[l,C,E,_,R]),{batchSize:l,dataFormat:i,inDepth:c,inHeight:u,inWidth:h,inChannels:d,outDepth:C,outHeight:E,outWidth:_,outChannels:R,padInfo:k,strideDepth:x,strideHeight:b,strideWidth:w,filterDepth:f,filterHeight:p,filterWidth:m,effectiveFilterDepth:N,effectiveFilterHeight:S,effectiveFilterWidth:I,dilationDepth:y,dilationHeight:v,dilationWidth:$,inShape:n,outShape:M,filterShape:t}}function qT(n,t,e,s,r){s==null&&(s=Ff(n,t,e));const o=n[0],i=n[1],a=xi((o-t+2*s)/e+1,r),l=xi((i-t+2*s)/e+1,r);return[a,l]}function XT(n,t,e,s,r,o){r==null&&(r=Ff(n,t[0],s[0]));const i=[0,0,0,e];for(let a=0;a<3;a++)n[a]+2*r>=t[a]&&(i[a]=xi((n[a]-t[a]+2*r)/s[a]+1,o));return i}function Ff(n,t,e,s=1){const r=ho(t,s);return Math.floor((n[0]*(e-1)-e+r)/2)}function gi(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function Qh(n){return typeof n=="number"?[n,n,n]:n}function ho(n,t){return t<=1?n:n+(n-1)*(t-1)}function KT(n,t,e,s,r,o,i,a,l){let c,u,h;if(typeof n=="number"){c={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const f=qT([t,e],o,s,n,a);u=f[0],h=f[1]}else if(n==="same"){u=Math.ceil(t/s),h=Math.ceil(e/r);const d=Math.max(0,(u-1)*s+o-t),f=Math.max(0,(h-1)*r+i-e),p=Math.floor(d/2),m=d-p,g=Math.floor(f/2),x=f-g;c={top:p,bottom:m,left:g,right:x,type:"SAME"}}else if(n==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((t-o+1)/s),h=Math.ceil((e-i+1)/r);else if(typeof n=="object"){const d=l==="channelsLast"?n[1][0]:n[2][0],f=l==="channelsLast"?n[1][1]:n[2][1],p=l==="channelsLast"?n[2][0]:n[3][0],m=l==="channelsLast"?n[2][1]:n[3][1];c={top:d,bottom:f,left:p,right:m,type:d===0&&f===0&&p===0&&m===0?"VALID":"EXPLICIT"},u=xi((t-o+d+f)/s+1,a),h=xi((e-i+p+m)/r+1,a)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:c,outHeight:u,outWidth:h}}function jT(n,t,e,s,r,o,i,a,l,c,u){let h,d,f,p;if(n==="valid"&&(n=0),typeof n=="number"){h={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const g=XT([t,e,s,1],[a,l,c],1,[r,o,i],n,u);d=g[0],f=g[1],p=g[2]}else if(n==="same"){d=Math.ceil(t/r),f=Math.ceil(e/o),p=Math.ceil(s/i);const m=(d-1)*r+a-t,g=(f-1)*o+l-e,x=(p-1)*i+c-s,b=Math.floor(m/2),w=m-b,y=Math.floor(g/2),v=g-y,$=Math.floor(x/2),N=x-$;h={top:y,bottom:v,left:$,right:N,front:b,back:w,type:"SAME"}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:h,outDepth:d,outHeight:f,outWidth:p}}function xi(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function _r(n){const[t,e,s]=gi(n);return t===1&&e===1&&s===1}function Ue(n,t){return _r(n)||_r(t)}function Fr(n){return gi(n).every(t=>t>0)}function zs(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function un(n,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")T(bo(t),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(s=>{s.forEach(r=>{T(bo(r),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${r}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${t}`)}}function YT(n,t){const s={x:D(n,"x","reshape","string_or_numeric")},r={shape:t};return L.runKernel(au,s,r)}const V=W({reshape_:YT});function ZT(n,t,e,s,r){const o=D(n,"x","avgPool","float32"),i=1;T(Ue(e,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`);let a=o,l=!1;o.rank===3&&(l=!0,a=V(o,[1,o.shape[0],o.shape[1],o.shape[2]])),T(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),un("avgPool",s,r);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:r};let h=L.runKernel($c,c,u);return h=ut(h,o.dtype),l?V(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Of=W({avgPool_:ZT});function JT(n,t,e,s,r,o="NDHWC"){const i=D(n,"x","avgPool3d","float32");let a=i,l=!1;i.rank===4&&(l=!0,a=V(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),T(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),T(o==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),T(typeof e=="number"&&e>0||Array.isArray(e)&&e[0]>0&&e[1]>0&&e[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${e}'`),un("avgPool3d",s,r);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:r,dataFormat:o};let h=L.runKernel(kc,c,u);return h=ut(h,a.dtype),l?V(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const QT=W({avgPool3d_:JT});function tE(n,t=0){T(n.length>=1,()=>"Pass at least one tensor to concat");const e=gb(n,"tensors","concat","string_or_numeric");if(e[0].dtype==="complex64"&&e.forEach(o=>{if(o.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${o.dtype}. `)}),e.length===1)return Ir(e[0]);const s=e,r={axis:t};return L.runKernel(Tc,s,r)}const an=W({concat_:tE});function eE(n,t,e=!1,s=!1){let r=D(n,"a","matMul"),o=D(t,"b","matMul");[r,o]=fe(r,o);const i={a:r,b:o},a={transposeA:e,transposeB:s};return L.runKernel(Ic,i,a)}const Ft=W({matMul_:eE});function nE(n){const e={x:D(n,"x","sigmoid","float32")};return L.runKernel(ba,e)}const _o=W({sigmoid_:nE});function sE(n,t,e){const s=D(n,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const r={x:s},o={begin:t,size:e};return L.runKernel(du,r,o)}const Qt=W({slice_:sE});function rE(n){const e={x:D(n,"x","tanh","float32")};return L.runKernel(ka,e)}const $u=W({tanh_:rE});function oE(n,t,e){const s=D(n,"x","batchToSpaceND"),r=t.reduce((a,l)=>a*l);T(s.rank>=1+t.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${t.length}`),T(e.length===t.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`),T(s.shape[0]%r===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${r}`);const o={x:s},i={blockShape:t,crops:e};return L.runKernel(Sc,o,i)}const Mf=W({batchToSpaceND_:oE});function iE(n){let t;return n.rank===0||n.rank===1?t=V(n,[1,1,1,n.size]):n.rank===2?t=V(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?t=V(n,[1,n.shape[0],n.shape[1],n.shape[2]]):t=n,t}function aE(n,t,e,s,r,o){o==null&&(o=.001);const i=D(n,"x","batchNorm"),a=D(t,"mean","batchNorm"),l=D(e,"variance","batchNorm");let c;r!=null&&(c=D(r,"scale","batchNorm"));let u;s!=null&&(u=D(s,"offset","batchNorm")),T(a.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),T(u==null||a.rank===u.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),T(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:iE(i),scale:c,offset:u,mean:a,variance:l},f={varianceEpsilon:o},p=L.runKernel(Lc,d,f);return V(p,i.shape)}const ku=W({batchNorm_:aE});function lE(n,t,e,s,r,o){const i=D(n,"x","batchNorm"),a=D(t,"mean","batchNorm"),l=D(e,"variance","batchNorm");let c;r!=null&&(c=D(r,"scale","batchNorm"));let u;return s!=null&&(u=D(s,"offset","batchNorm")),T(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),T(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),T(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),c!=null&&T(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),u!=null&&T(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${u.rank}.`),ku(i,a,l,u,c,o)}const cE=W({batchNorm2d_:lE});function uE(n,t,e,s,r,o){const i=D(n,"x","batchNorm"),a=D(t,"mean","batchNorm"),l=D(e,"variance","batchNorm");let c;r!=null&&(c=D(r,"scale","batchNorm"));let u;return s!=null&&(u=D(s,"offset","batchNorm")),T(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),T(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),T(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),c!=null&&T(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),u!=null&&T(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${u.rank}.`),ku(i,a,l,u,c,o)}const hE=W({batchNorm3d_:uE});function dE(n,t,e,s,r,o){const i=D(n,"x","batchNorm"),a=D(t,"mean","batchNorm"),l=D(e,"variance","batchNorm");let c;r!=null&&(c=D(r,"scale","batchNorm"));let u;return s!=null&&(u=D(s,"offset","batchNorm")),T(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),T(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),T(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),c!=null&&T(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),u!=null&&T(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${u.rank}.`),ku(i,a,l,u,c,o)}const fE=W({batchNorm4d_:dE});function pE(n,t,e){const s=D(n,"x","bincount"),r=D(t,"weights","bincount");T(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),T(e>=0,()=>`size must be non-negative, but got ${e}.`),T(r.size===s.size||r.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${r.shape}.`);const o={x:s,weights:r},i={size:e};return L.runKernel(Kd,o,i)}const mE=W({bincount_:pE});function gE(n,t){let e=D(n,"broadcastTo","x");const s=e.shape;if(Ls(t),t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){const c=e.shape.slice();for(;c.length<t.length;)c.unshift(1);e=V(e,c)}const r=e.shape,o=Array.from(t);for(let c=t.length-1;c>=0;c--)if(r[c]===t[c])o[c]=1;else if(e.shape[c]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);if(o.map((c,u)=>c>1?u:-1).filter(c=>c>=0).length===0)return Ir(e);const a={x:e},l={reps:o};return L.runKernel(Ia,a,l)}const li=W({broadcastTo_:gE});function xE(n){const e={x:D(n,"x","ceil","float32")};return L.runKernel(Bi,e)}const bE=W({ceil_:xE});function Iu(n,t,e){Ls(n),e=e||Eo(t);const s={shape:n,value:t,dtype:e};return L.runKernel(hf,{},s)}function yE(n,t,e){const s=D(n,"x","clipByValue");if(T(t<=e,()=>`Error in clip: min (${t}) must be less than or equal to max (${e}).`),t===e)return Iu(s.shape,t,s.dtype);const r={x:s},o={clipValueMin:t,clipValueMax:e};return L.runKernel(Vi,r,o)}const $n=W({clipByValue_:yE});function wE(n){return an(n,0)}const vE=W({concat1d_:wE});function CE(n,t){return an(n,t)}const $E=W({concat2d_:CE});function kE(n,t){return an(n,t)}const IE=W({concat3d_:kE});function SE(n,t){return an(n,t)}const NE=W({concat4d_:SE});function TE(n,t,e,s,r="NHWC",o=[1,1],i){const a=D(n,"x","conv2d","float32"),l=D(t,"filter","conv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=V(a,[1,a.shape[0],a.shape[1],a.shape[2]])),T(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),T(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),un("conv2d",s,i);const h=r==="NHWC"?c.shape[3]:c.shape[1];T(h===l.shape[2],()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${l.shape[2]}.`),T(Ue(e,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`),T(Fr(o),()=>"Error in conv2D: Dilated rates should be larger than 0."),T(Fr(e),()=>"Error in conv2D: Strides should be larger than 0.");const d={x:c,filter:l},f={strides:e,pad:s,dataFormat:r,dilations:o,dimRoundingMode:i},p=L.runKernel(Ec,d,f);return u?V(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const Or=W({conv2d_:TE});function EE(n,t,e,s,r="NWC",o=1,i){const a=D(n,"x","conv1d"),l=D(t,"filter","conv1d");let c=a,u=!1;a.rank===2&&(u=!0,c=V(a,[1,a.shape[0],a.shape[1]])),T(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),T(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),un("conv1d",s,i),T(c.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${l.shape[1]}.`),T(Ue(e,o),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${o}'`),T(Fr(o),()=>"Error in conv1D: Dilated rates should be larger than 0."),T(Fr(e),()=>"Error in conv1D: Stride should be larger than 0."),T(r==="NWC",()=>`Error in conv1d: got dataFormat of ${r} but only NWC is currently supported.`);const h=V(l,[1,l.shape[0],l.shape[1],l.shape[2]]),d=V(c,[c.shape[0],1,c.shape[1],c.shape[2]]),g=Or(d,h,[1,e],s,"NHWC",[1,o],i);return u?V(g,[g.shape[2],g.shape[3]]):V(g,[g.shape[0],g.shape[2],g.shape[3]])}const Tb=W({conv1d_:EE});function RE(n,t,e,s,r,o="NHWC",i){T(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let a=n,l=t,c=!1;t.rank===3&&(c=!0,l=V(t,[1,t.shape[0],t.shape[1],t.shape[2]]),a=[1,n[0],n[1],n[2]]),T(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),T(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),T(e.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`);const u=o==="NHWC"?a[3]:a[1],h=o==="NHWC"?l.shape[3]:l.shape[1];T(u===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${e.shape[2]}.`),T(h===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${e.shape[3]}.`),un("conv2dDerInput",r,i);const d={dy:l,filter:e},f={strides:s,pad:r,dataFormat:o,dimRoundingMode:i,inputShape:a},p=L.runKernel(Rc,d,f);return c?V(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const Lf=W({conv2DBackpropInput_:RE});function AE(n,t,e,s,r,o){const i=D(n,"x","conv2dTranspose"),a=D(t,"filter","conv2dTranspose");return Lf(e,i,a,s,r,"NHWC",o)}const Eb=W({conv2dTranspose_:AE});function DE(n,t,e,s,r="NDHWC",o=[1,1,1]){const i=D(n,"x","conv3d"),a=D(t,"filter","conv3d");let l=i,c=!1;i.rank===4&&(c=!0,l=V(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),T(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),T(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),T(l.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${a.shape[3]}.`),T(Ue(e,o),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`),T(r==="NDHWC",()=>`Error in conv3d: got dataFormat of ${r} but only NDHWC is currently supported.`),T(Fr(o),()=>"Error in conv3D: Dilated rates should be larger than 0."),T(Fr(e),()=>"Error in conv3D: Strides should be larger than 0.");const u={x:l,filter:a},h={strides:e,pad:s,dataFormat:r,dilations:o},d=L.runKernel(Ac,u,h);return c?V(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const _E=W({conv3d_:DE});function FE(n,t,e,s,r){T(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let o=n,i=t,a=!1;t.rank===4&&(a=!0,i=V(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),o=[1,n[0],n[1],n[2],n[3]]);const l=o[4],c=i.shape[4];T(o.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${o.length}.`),T(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),T(e.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`),T(l===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${e.shape[3]}.`),T(c===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${e.shape[4]}.`);const u={dy:i,filter:e},h={pad:r,strides:s,inputShape:o},d=L.runKernel(Qd,u,h);return a?V(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const Rb=W({conv3DBackpropInput_:FE});function OE(n,t,e,s,r){const o=D(n,"x","conv3dTranspose"),i=D(t,"filter","conv3dTranspose");return Rb(e,o,i,s,r)}const ME=W({conv3dTranspose_:OE});function LE(n){const e={x:D(n,"x","cos","float32")};return L.runKernel(Wi,e)}const Pf=W({cos_:LE});function PE(n){const e={x:D(n,"x","cosh","float32")};return L.runKernel(Ui,e)}const Ab=W({cosh_:PE});function zE(n,t=0,e=!1,s=!1){const o={x:D(n,"x","cumprod")},i={axis:t,exclusive:e,reverse:s};return L.runKernel(tf,o,i)}const td=W({cumprod_:zE});function BE(n,t=0,e=!1,s=!1){const o={x:D(n,"x","cumsum")},i={axis:t,exclusive:e,reverse:s};return L.runKernel(Dc,o,i)}const Db=W({cumsum_:BE});function VE(n,t,e,s=!1){const r=D(n,"x","denseBincount"),o=D(t,"weights","denseBincount");T(r.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${r.dtype}`),T(r.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${r.rank}.`),T(e>=0,()=>`size must be non-negative, but got ${e}.`),T(o.size===r.size||o.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${r.shape}, weights shape: ${o.shape}.`);const i={x:r,weights:o},a={size:e,binaryOutput:s};return L.runKernel(nf,i,a)}const gg=W({denseBincount_:VE});function WE(n,t,e="NHWC"){const s=D(n,"x","depthToSpace","float32"),r=e==="NHWC"?s.shape[1]:s.shape[2],o=e==="NHWC"?s.shape[2]:s.shape[3],i=e==="NHWC"?s.shape[3]:s.shape[1];T(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),T(r*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${r} and ${t}  for depthToSpace with input shape
    ${s.shape}`),T(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t} for depthToSpace with input shape
        ${s.shape}`),T(i%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${i} for depthToSpace with input shape ${s.shape}`);const a={x:s},l={blockSize:t,dataFormat:e};return L.runKernel(sf,a,l)}const UE=W({depthToSpace_:WE});function GE(n,t,e,s,r="NHWC",o=[1,1],i){const a=D(n,"x","depthwiseConv2d","float32"),l=D(t,"filter","depthwiseConv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=V(a,[1,a.shape[0],a.shape[1],a.shape[2]])),T(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),T(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const h=r==="NHWC"?c.shape[3]:c.shape[1];T(h===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${h}) must match the inChannels dimension in filter ${l.shape[2]}.`),un("depthwiseConv2d",s,i);const d={x:c,filter:l},f={strides:e,pad:s,dataFormat:r,dilations:o,dimRoundingMode:i},p=L.runKernel(_c,d,f);return u?V(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const zf=W({depthwiseConv2d_:GE});function HE(n){const e={x:D(n,"x","diag")};return L.runKernel(af,e)}const qE=W({diag_:HE});function XE(n,t,e,s,r=[1,1],o="NHWC"){const i=D(n,"x","dilation2d"),a=D(t,"filter","dilation2d");T(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),T(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),T(o==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${o}`);let l=i,c=!1;i.rank===3&&(l=V(i,[1,i.shape[0],i.shape[1],i.shape[2]]),c=!0),T(l.shape[3]===a.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${l.shape[3]} vs ${a.shape[2]}`);const u={x:l,filter:a},h={strides:e,pad:s,dilations:r},d=L.runKernel(Fc,u,h);return c?V(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const KE=W({dilation2d_:XE});function vo(n,t){const e=n.length,s=[];for(let r=0;r<e;r++){const o=e-1-r,i=n[o]||1;(t[t.length-1-r]||1)>1&&i===1&&s.unshift(o)}return s}function Se(n,t){const e=[];for(let s=0;s<t.length;s++){const r=n[n.length-s-1],o=t.length-s-1,i=t[o];(r==null||r===1&&i>1)&&e.unshift(o)}return e}function kt(n,t){const e=Math.max(n.length,t.length),s=new Array(e);for(let r=0;r<e;r++){let o=n[n.length-r-1];o==null&&(o=1);let i=t[t.length-r-1];if(i==null&&(i=1),o===1)s[e-r-1]=i;else if(i===1)s[e-r-1]=o;else if(o!==i){const a=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(a)}else s[e-r-1]=o}return s}function jE(n,t){let e=D(n,"a","equal","string_or_numeric"),s=D(t,"b","equal","string_or_numeric");[e,s]=fe(e,s),kt(e.shape,s.shape);const r={a:e,b:s};return L.runKernel(Oc,r)}const xs=W({equal_:jE});function YE(n,t,e){const s=D(t,"a","where"),r=D(e,"b","where"),o=D(n,"condition","where","bool"),i=kt(kt(o.shape,s.shape),r.shape),a=li(o,i),l=li(s,i),c=li(r,i),u={condition:a,t:l,e:c};return L.runKernel(hu,u)}const Qe=W({where_:YE});function ZE(n){const e={x:D(n,"x","zerosLike")};return L.runKernel(yu,e)}const Dt=W({zerosLike_:ZE});function JE(n,t){let e=D(n,"a","div"),s=D(t,"b","div");[e,s]=fe(e,s);const r=bt(e,s),o=Dt(r),i=xs(s,o);return Qe(i,o,r)}const QE=W({divNoNan_:JE});function tR(n,t){const e=D(n,"t1","dot"),s=D(t,"t2","dot");T((e.rank===1||e.rank===2)&&(s.rank===1||s.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${e.rank} and ${s.rank}.`);const r=e.rank===1?e.size:e.shape[1],o=s.rank===1?s.size:s.shape[0];if(T(r===o,()=>`Error in dot: inner dimensions of inputs must match, but got ${r} and ${o}.`),e.rank===1&&s.rank===1){const i=V(e,[1,-1]),a=V(s,[-1,1]),l=Ft(i,a);return V(l,[])}else if(e.rank===1&&s.rank===2){const i=V(e,[1,-1]),a=V(s,[s.shape[0],s.shape[1]]),l=Ft(i,a);return V(l,[l.size])}else if(e.rank===2&&s.rank===1){const i=V(s,[-1,1]),a=Ft(e,i);return V(a,[a.size])}else{const i=V(s,[s.shape[0],s.shape[1]]);return Ft(e,i)}}const eR=W({dot_:tR});function nR(n,...t){const e=t.map((r,o)=>D(r,`tensors${o}`,"einsum")),s={equation:n};return L.runKernel(lf,e,s)}const Ko=W({einsum_:nR});function sR(n){const e={x:D(n,"x","elu","float32")};return L.runKernel(Hi,e)}const Su=W({elu_:sR});function rR(n){let t=D(n,"x","erf");T(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=ut(t,"float32"));const e={x:t};return L.runKernel(qi,e)}const _b=W({erf_:rR});function Bf(n,t){for(let e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function Fb(n,t,e){const s=n.length+t.length,r=[];let o=0,i=0;for(let a=0;a<s;a++)e.indexOf(a)===-1?r.push(n[o++]):r.push(t[i++]);return r}function De(n,t){const e=[],s=n.length;for(let o=0;o<s;o++)t.indexOf(o)===-1&&e.push(n[o]);const r=t.map(o=>n[o]);return[e,r]}function ye(n,t){const e=t.map(s=>1);return Fb(n,e,t)}function Le(n,t,e){T(Bf(t,e),()=>`${n} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`)}function ie(n,t){if(Bf(n,t))return null;const e=[];for(let s=0;s<t;++s)n.indexOf(s)===-1&&e.push(s);return n.forEach(s=>e.push(s)),e}function cr(n){return n.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function pe(n,t){const e=[];for(let s=t-n;s<t;++s)e.push(s);return e}function oR(n,t=null,e=!1){const r={x:D(n,"x","max")},o={reductionIndices:t,keepDims:e};return L.runKernel(Xc,r,o)}const Yn=W({max_:oR});function iR(n,t=null,e=!1){const r={x:D(n,"x","min")},o={axis:t,keepDims:e};return L.runKernel(Zc,r,o)}const Xl=W({min_:iR});function aR(n,t){let e=D(n,"base","pow"),s=D(t,"exp","pow");[e,s]=fe(e,s);const r={a:e,b:s};return L.runKernel(la,r)}const Mr=W({pow_:aR});function Lt(n,t){if((_n(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&_n(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Cu(n,[],[],t)}function lR(n){const e={x:D(n,"x","sqrt","float32")};return L.runKernel(wa,e)}const We=W({sqrt_:lR});function cR(n){const t=D(n,"x","square"),e={};return L.runKernel("Square",{x:t},e)}const te=W({square_:cR});function uR(n,t=null,e=!1){let s=D(n,"x","sum");s.dtype==="bool"&&(s=ut(s,"int32"));const r={x:s},o={axis:t,keepDims:e};return L.runKernel(fu,r,o)}const gt=W({sum_:uR});function hR(n,t="euclidean",e=null,s=!1){n=D(n,"x","norm");const r=Ob(n,t,e);let o=r.shape;if(s){const i=Tt(e,n.shape);o=ye(r.shape,i)}return V(r,o)}function Ob(n,t,e=null){if(n.rank===0)return Ye(n);if(n.rank!==1&&e===null)return Ob(V(n,[-1]),t,e);if(n.rank===1||typeof e=="number"||Array.isArray(e)&&e.length===1){if(t===1)return gt(Ye(n),e);if(t===1/0)return Yn(Ye(n),e);if(t===-1/0)return Xl(Ye(n),e);if(t==="euclidean"||t===2)return We(gt(Mr(Ye(n),Lt(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(e)&&e.length===2){if(t===1)return Yn(gt(Ye(n),e[0]),e[1]-1);if(t===1/0)return Yn(gt(Ye(n),e[1]),e[0]);if(t===-1/0)return Xl(gt(Ye(n),e[1]),e[0]);if(t==="fro"||t==="euclidean")return We(gt(te(n),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}const Nu=W({norm_:hR});function dR(n,t=null,e=!1){return Nu(n,"euclidean",t,e)}const fR=W({euclideanNorm_:dR});function pR(n){const e={x:D(n,"x","exp")};return L.runKernel(Xi,e)}const bs=W({exp_:pR});function mR(n,t=0){const e=D(n,"x","expandDims","string_or_numeric");T(t<=e.rank,()=>"Axis must be <= rank of the tensor");const s={input:e},r={dim:t};return L.runKernel(Mc,s,r)}const rn=W({expandDims_:mR});function gR(n){const e={x:D(n,"x","expm1")};return L.runKernel(Ki,e)}const xR=W({expm1_:gR});function bR(n,t){const e=D(n,"x","tile","string_or_numeric");T(e.rank===t.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`);const s={x:e},r={reps:t};return L.runKernel(Ia,s,r)}const Xn=W({tile_:bR});function yR(n,t,e,s="float32"){t==null&&(t=n);const r=Nt([n,t],s),o=n<=t?n:t;for(let a=0;a<o;++a)r.set(1,a,a);const i=V(r.toTensor(),[n,t]);if(e==null)return i;if(e.length===1)return Xn(rn(i,0),[e[0],1,1]);if(e.length===2)return Xn(rn(rn(i,0),0),[e[0],e[1],1,1]);if(e.length===3)return Xn(rn(rn(rn(i,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}const Vf=W({eye_:yR});function wR(n){const e={x:D(n,"x","floor","float32")};return L.runKernel(ji,e)}const Tu=W({floor_:wR});function vR(n,t,e=0,s=0){const r=D(n,"x","gather"),o=D(t,"indices","gather","int32"),i={x:r,indices:o},a={axis:e,batchDims:s};return L.runKernel(Pc,i,a)}const Wf=W({gather_:vR});function CR(n,t){let e=D(n,"a","greater","string_or_numeric"),s=D(t,"b","greater","string_or_numeric");[e,s]=fe(e,s),kt(e.shape,s.shape);const r={a:e,b:s};return L.runKernel(zc,r)}const kn=W({greater_:CR});function $R(n,t){let e=D(n,"a","greaterEqual","string_or_numeric"),s=D(t,"b","greaterEqual","string_or_numeric");[e,s]=fe(e,s),kt(e.shape,s.shape);const r={a:e,b:s};return L.runKernel(Zi,r)}const Gr=W({greaterEqual_:$R});function kR(n){const e={input:D(n,"input","imag")};return L.runKernel(pf,e)}const Uf=W({imag_:kR});function IR(n){const e={x:D(n,"x","isFinite")};return L.runKernel(Qi,e)}const SR=W({isFinite_:IR});function NR(n){const e={x:D(n,"x","isInf")};return L.runKernel(ta,e)}const TR=W({isInf_:NR});function ER(n){const e={x:D(n,"x","isNaN")};return L.runKernel(ea,e)}const RR=W({isNaN_:ER});function AR(n,t=.2){const s={x:D(n,"x","leakyRelu")},r={alpha:t};return L.runKernel(Bc,s,r)}const Gf=W({leakyRelu_:AR});function DR(n,t){let e=D(n,"a","less","string_or_numeric"),s=D(t,"b","less","string_or_numeric");[e,s]=fe(e,s),kt(e.shape,s.shape);const r={a:e,b:s};return L.runKernel(Vc,r)}const Kl=W({less_:DR});function _R(n,t){let e=D(n,"a","lessEqual","string_or_numeric"),s=D(t,"b","lessEqual","string_or_numeric");[e,s]=fe(e,s),kt(e.shape,s.shape);const r={a:e,b:s};return L.runKernel(Wc,r)}const Fo=W({lessEqual_:_R});function FR(n,t=5,e=1,s=1,r=.5){const o=D(n,"x","localResponseNormalization");T(o.rank===4||o.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${o.rank}.`),T(bo(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let i=o,a=!1;o.rank===3&&(a=!0,i=V(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const l={x:i},c={depthRadius:t,bias:e,alpha:s,beta:r},u=L.runKernel(qc,l,c);return a?V(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const OR=W({localResponseNormalization_:FR});function MR(n){const e={x:D(n,"x","log","float32")};return L.runKernel(na,e)}const ys=W({log_:MR});function LR(n){const e={x:D(n,"x","log1p")};return L.runKernel(sa,e)}const Mb=W({log1p_:LR});function PR(n,t){T(zh(n),()=>"The f passed in variableGrads(f) must be a function"),T(t==null||Array.isArray(t)&&t.every(c=>c instanceof ql),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const e=t!=null;if(!e){t=[];for(const c in L.registeredVariables)t.push(L.registeredVariables[c])}const s=e?t.filter(c=>!c.trainable):null,r=t.length;t=t.filter(c=>c.trainable),T(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${r} variables is trainable.`);const o=!0,{value:i,grads:a}=L.gradients(n,t,null,o);T(a.some(c=>c!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),T(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const l={};return t.forEach((c,u)=>{a[u]!=null&&(l[c.name]=a[u])}),s?.forEach(c=>l[c.name]=null),{value:i,grads:l}}function Co(n){return L.customGrad(n)}function zR(n){const e={x:D(n,"x","neg")};return L.runKernel(Qc,e)}const de=W({neg_:zR});function BR(n){const e={x:D(n,"x","softplus")};return L.runKernel(ya,e)}const Ta=W({softplus_:BR});function VR(n){const t=D(n,"x","logSigmoid");return Co(s=>({value:de(Ta(de(s))),gradFunc:i=>O(i,_o(de(s)))}))(t)}const WR=W({logSigmoid_:VR});function UR(n,t){let e=D(n,"a","sub"),s=D(t,"b","sub");[e,s]=fe(e,s);const r={a:e,b:s};return L.runKernel(Ca,r)}const wt=W({sub_:UR});function GR(n,t=-1){const e=D(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${t}`);return Co((r,o)=>{const a=Yn(r,t,!0),l=wt(r,a),c=wt(ut(l,"float32"),ys(gt(bs(l),t,!0)));return o([c]),{value:c,gradFunc:(h,d)=>{const[f]=d,p=!0,m=bs(f);return wt(h,O(gt(h,t,p),m))}}})(e)}const Lb=W({logSoftmax_:GR});function HR(n,t=null,e=!1){const s=D(n,"x","logSumExp"),r=Tt(t,s.shape),o=Yn(s,r,!0),i=wt(s,o),a=bs(i),l=gt(a,r),c=ys(l),u=et(V(o,c.shape),c);if(e){const h=ye(u.shape,r);return V(u,h)}return u}const Pb=W({logSumExp_:HR});function qR(n,t){const e=D(n,"a","logicalAnd","bool"),s=D(t,"b","logicalAnd","bool");kt(e.shape,s.shape);const r={a:e,b:s};return L.runKernel(Uc,r)}const _s=W({logicalAnd_:qR});function XR(n){const e={x:D(n,"x","logicalNot","bool")};return L.runKernel(Gc,e)}const Hf=W({logicalNot_:XR});function KR(n,t){const e=D(n,"a","logicalOr","bool"),s=D(t,"b","logicalOr","bool");kt(e.shape,s.shape);const r={a:e,b:s};return L.runKernel(Hc,r)}const zb=W({logicalOr_:KR});function jR(n,t){const e=D(n,"a","logicalXor","bool"),s=D(t,"b","logicalXor","bool");return kt(e.shape,s.shape),_s(zb(n,t),Hf(_s(n,t)))}const YR=W({logicalXor_:jR});function ZR(n,t,e,s,r){const o=D(n,"x","maxPool"),i=1;let a=o,l=!1;o.rank===3&&(l=!0,a=V(o,[1,o.shape[0],o.shape[1],o.shape[2]])),T(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),T(Ue(e,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`),un("maxPool",s,r);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:r},h=L.runKernel(Kc,c,u);return l?V(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const qf=W({maxPool_:ZR});function JR(n,t=[1,1,1],e,s,r,o="NDHWC"){const i=D(n,"x","maxPool3d");let a=i,l=!1;i.rank===4&&(l=!0,a=V(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),T(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),T(o==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),un("maxPool3d",s,r);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:r,dataFormat:o},h=L.runKernel(jc,c,u);return l?V(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const QR=W({maxPool3d_:JR});function tA(n,t){let e=D(n,"a","maximum"),s=D(t,"b","maximum");[e,s]=fe(e,s),e.dtype==="bool"&&(e=ut(e,"int32"),s=ut(s,"int32")),kt(e.shape,s.shape);const r={a:e,b:s};return L.runKernel(ra,r)}const ur=W({maximum_:tA});function eA(n,t=null,e=!1){const r={x:D(n,"x","mean")},o={axis:t,keepDims:e};return L.runKernel(Yc,r,o)}const be=W({mean_:eA});function Re(n,t="float32"){if(Ls(n),t==="complex64"){const s=Re(n,"float32"),r=Re(n,"float32");return wo(s,r)}const e=Ve(Y(n),t);return L.makeTensor(e,n,t)}function Bs(n,t="float32"){if(Ls(n),t==="complex64"){const s=Bs(n,"float32"),r=Re(n,"float32");return wo(s,r)}const e=Bd(Y(n),t);return L.makeTensor(e,n,t)}function nA(n,t){let e=D(n,"a","minimum"),s=D(t,"b","minimum");[e,s]=fe(e,s),e.dtype==="bool"&&(e=ut(e,"int32"),s=ut(s,"int32")),kt(e.shape,s.shape);const r={a:e,b:s};return L.runKernel(oa,r)}const bi=W({minimum_:nA});function sA(n,t,e){T(e==="reflect"||e==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${e}.`);const s=D(n,"x","mirrorPad");if(s.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");T(t.length===s.rank,()=>`Padding doesn't match input. Must be ${s.rank}. Got ${t.length}.`);const r=e==="reflect"?1:0;for(let a=0;a<s.rank;a++)T(t[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),T(t[a][0]>=0&&t[a][0]<=s.shape[a]-r&&t[a][1]>=0&&t[a][1]<=s.shape[a]-r,()=>`Padding in dimension ${a} cannot be greater than or equal to ${s.shape[a]-r} or less than 0 for input of shape ${s.shape}`);const o={paddings:t,mode:e},i={x:s};return L.runKernel(Jc,i,o)}const rA=W({mirrorPad_:sA});function oA(n,t){let e=D(n,"a","mod"),s=D(t,"b","mod");[e,s]=fe(e,s);const r={a:e,b:s};return L.runKernel(ia,r)}const iA=W({mod_:oA});function aA(n,t=null,e=!1){n=D(n,"x","moments");const s=Tt(t,n.shape),r=be(n,s,e);let o=r.shape;e||(o=ye(r.shape,s));const i=te(wt(ut(n,"float32"),V(r,o))),a=be(i,s,e);return{mean:r,variance:a}}const Xf=W({moments_:aA});function lA(n,t){let e=D(n,"a","notEqual","string_or_numeric"),s=D(t,"b","notEqual","string_or_numeric");[e,s]=fe(e,s),kt(e.shape,s.shape);const r={a:e,b:s};return L.runKernel(tu,r)}const jl=W({notEqual_:lA});function cA(n,t,e=1,s=0,r="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const i={indices:D(n,"indices","oneHot","int32")},a={dtype:r,depth:t,onValue:e,offValue:s};return L.runKernel(nu,i,a)}const Bb=W({oneHot_:cA});function uA(n){const e={x:D(n,"x","onesLike")};return L.runKernel(eu,e)}const Fn=W({onesLike_:uA});function hA(n,t,e=0){const s=D(n,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const r={paddings:t,constantValue:e},o={x:s};return L.runKernel(ru,o,r)}const Kf=W({pad_:hA});function dA(n,t,e){const s=D(n,"x","spaceToBatchND");T(s.rank>=1+t.length,()=>`input rank ${s.rank} should be > than [blockShape] ${t.length}`),T(e.length===t.length,()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`),T(s.shape.reduce((i,a,l)=>l>0&&l<=t.length?i&&(a+e[l-1][0]+e[l-1][1])%t[l-1]===0:i,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`);const r={x:s},o={blockShape:t,paddings:e};return L.runKernel(pu,r,o)}const jf=W({spaceToBatchND_:dA});function fA(n,t,e,s,r,o,i){r==null&&(r=[1,1]),o==null&&(o=1),s===0&&(s="valid");const a=D(n,"x","maxPool");let l=a,c=!1;a.rank===3&&(c=!0,l=V(a,[1,a.shape[0],a.shape[1],a.shape[2]])),T(Ue(o,r),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${o} and dilations '${r}'`);const u=On(l.shape,t,o,r,s),h=[u.dilationHeight,u.dilationWidth];let d;s==="same"?d=mA([u.filterHeight,u.filterWidth],h):d=[[0,0],[0,0]];const f=h[0]===1&&h[1]===1,[p,m]=pA([u.inHeight,u.inWidth],h,d),g=f?s:"valid",x=f?l:jf(l,h,p),w=(e==="avg"?()=>Of(x,t,o,g,i):()=>qf(x,t,o,g,i))(),y=f?w:Mf(w,h,m);return c?V(y,[y.shape[1],y.shape[2],y.shape[3]]):y}function pA(n,t,e){const s=e.map(u=>u[0]),r=e.map(u=>u[1]),o=n.concat(s,r),i=t.map((u,h)=>(u-o[h]%u)%u),a=r.map((u,h)=>u+i[h]),l=t.map((u,h)=>[s[h],a[h]]),c=t.map((u,h)=>[0,i[h]]);return[l,c]}function mA(n,t){const s=n.map((i,a)=>i+(i-1)*(t[a]-1)).map(i=>i-1),r=s.map(i=>Math.floor(i/2)),o=s.map((i,a)=>i-r[a]);return s.map((i,a)=>[r[a],o[a]])}const gA=W({pool_:fA});function xA(n,t){const e=D(n,"x","prelu"),s=D(t,"alpha","prelu"),r={x:e,alpha:s};return L.runKernel(ou,r)}const Yf=W({prelu_:xA});function bA(n,t=null,e=!1){let s=D(n,"x","prod");s.dtype==="bool"&&(s=ut(s,"int32"));const r={x:s},o={axis:t,keepDims:e};return L.runKernel(iu,r,o)}const yA=W({prod_:bA});var Cl={exports:{}},wA=Cl.exports,xg;function vA(){return xg||(xg=1,(function(n){(function(t,e,s){function r(l){var c=this,u=a();c.next=function(){var h=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=h|0)},c.c=1,c.s0=u(" "),c.s1=u(" "),c.s2=u(" "),c.s0-=u(l),c.s0<0&&(c.s0+=1),c.s1-=u(l),c.s1<0&&(c.s1+=1),c.s2-=u(l),c.s2<0&&(c.s2+=1),u=null}function o(l,c){return c.c=l.c,c.s0=l.s0,c.s1=l.s1,c.s2=l.s2,c}function i(l,c){var u=new r(l),h=c&&c.state,d=u.next;return d.int32=function(){return u.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,h&&(typeof h=="object"&&o(h,u),d.state=function(){return o(u,{})}),d}function a(){var l=4022871197,c=function(u){u=String(u);for(var h=0;h<u.length;h++){l+=u.charCodeAt(h);var d=.02519603282416938*l;l=d>>>0,d-=l,d*=l,l=d>>>0,d-=l,l+=d*4294967296}return(l>>>0)*23283064365386963e-26};return c}e&&e.exports?e.exports=i:this.alea=i})(wA,n)})(Cl)),Cl.exports}var $l={exports:{}},CA=$l.exports,bg;function $A(){return bg||(bg=1,(function(n){(function(t,e,s){function r(a){var l=this,c="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var h=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^h^h>>>8},a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,l.next()}function o(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l}function i(a,l){var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(d+f)/(1<<21);while(p===0);return p},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&o(u,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:this.xor128=i})(CA,n)})($l)),$l.exports}var kl={exports:{}},kA=kl.exports,yg;function IA(){return yg||(yg=1,(function(n){(function(t,e,s){function r(a){var l=this,c="";l.next=function(){var h=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(h^h<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,u==c.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function o(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l.v=a.v,l.d=a.d,l}function i(a,l){var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(d+f)/(1<<21);while(p===0);return p},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&o(u,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:this.xorwow=i})(kA,n)})(kl)),kl.exports}var Il={exports:{}},SA=Il.exports,wg;function NA(){return wg||(wg=1,(function(n){(function(t,e,s){function r(a){var l=this;l.next=function(){var u=l.x,h=l.i,d,f;return d=u[h],d^=d>>>7,f=d^d<<24,d=u[h+1&7],f^=d^d>>>10,d=u[h+3&7],f^=d^d>>>3,d=u[h+4&7],f^=d^d<<7,d=u[h+7&7],d=d^d<<13,f^=d^d<<9,u[h]=f,l.i=h+1&7,f};function c(u,h){var d,f=[];if(h===(h|0))f[0]=h;else for(h=""+h,d=0;d<h.length;++d)f[d&7]=f[d&7]<<15^h.charCodeAt(d)+f[d+1&7]<<13;for(;f.length<8;)f.push(0);for(d=0;d<8&&f[d]===0;++d);for(d==8?f[7]=-1:f[d],u.x=f,u.i=0,d=256;d>0;--d)u.next()}c(l,a)}function o(a,l){return l.x=a.x.slice(),l.i=a.i,l}function i(a,l){a==null&&(a=+new Date);var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(d+f)/(1<<21);while(p===0);return p},h.int32=c.next,h.quick=h,u&&(u.x&&o(u,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:this.xorshift7=i})(SA,n)})(Il)),Il.exports}var Sl={exports:{}},TA=Sl.exports,vg;function EA(){return vg||(vg=1,(function(n){(function(t,e,s){function r(a){var l=this;l.next=function(){var u=l.w,h=l.X,d=l.i,f,p;return l.w=u=u+1640531527|0,p=h[d+34&127],f=h[d=d+1&127],p^=p<<13,f^=f<<17,p^=p>>>15,f^=f>>>12,p=h[d]=p^f,l.i=d,p+(u^u>>>16)|0};function c(u,h){var d,f,p,m,g,x=[],b=128;for(h===(h|0)?(f=h,h=null):(h=h+"\0",f=0,b=Math.max(b,h.length)),p=0,m=-32;m<b;++m)h&&(f^=h.charCodeAt((m+32)%h.length)),m===0&&(g=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,m>=0&&(g=g+1640531527|0,d=x[m&127]^=f+g,p=d==0?p+1:0);for(p>=128&&(x[(h&&h.length||0)&127]=-1),p=127,m=512;m>0;--m)f=x[p+34&127],d=x[p=p+1&127],f^=f<<13,d^=d<<17,f^=f>>>15,d^=d>>>12,x[p]=f^d;u.w=g,u.X=x,u.i=p}c(l,a)}function o(a,l){return l.i=a.i,l.w=a.w,l.X=a.X.slice(),l}function i(a,l){a==null&&(a=+new Date);var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(d+f)/(1<<21);while(p===0);return p},h.int32=c.next,h.quick=h,u&&(u.X&&o(u,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:this.xor4096=i})(TA,n)})(Sl)),Sl.exports}var Nl={exports:{}},RA=Nl.exports,Cg;function AA(){return Cg||(Cg=1,(function(n){(function(t,e,s){function r(a){var l=this,c="";l.next=function(){var h=l.b,d=l.c,f=l.d,p=l.a;return h=h<<25^h>>>7^d,d=d-f|0,f=f<<24^f>>>8^p,p=p-h|0,l.b=h=h<<20^h>>>12^d,l.c=d=d-f|0,l.d=f<<16^d>>>16^p,l.a=p-h|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,a===Math.floor(a)?(l.a=a/4294967296|0,l.b=a|0):c+=a;for(var u=0;u<c.length+20;u++)l.b^=c.charCodeAt(u)|0,l.next()}function o(a,l){return l.a=a.a,l.b=a.b,l.c=a.c,l.d=a.d,l}function i(a,l){var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(d+f)/(1<<21);while(p===0);return p},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&o(u,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:this.tychei=i})(RA,n)})(Nl)),Nl.exports}var Tl={exports:{}};const DA={},_A=Object.freeze(Object.defineProperty({__proto__:null,default:DA},Symbol.toStringTag,{value:"Module"})),FA=SN(_A);var OA=Tl.exports,$g;function MA(){return $g||($g=1,(function(n){(function(t,e,s){var r=256,o=6,i=52,a="random",l=s.pow(r,o),c=s.pow(2,i),u=c*2,h=r-1,d;function f(y,v,$){var N=[];v=v==!0?{entropy:!0}:v||{};var S=x(g(v.entropy?[y,w(e)]:y??b(),3),N),I=new p(N),k=function(){for(var C=I.g(o),E=l,_=0;C<c;)C=(C+_)*r,E*=r,_=I.g(1);for(;C>=u;)C/=2,E/=2,_>>>=1;return(C+_)/E};return k.int32=function(){return I.g(4)|0},k.quick=function(){return I.g(4)/4294967296},k.double=k,x(w(I.S),e),(v.pass||$||function(C,E,_,R){return R&&(R.S&&m(R,I),C.state=function(){return m(I,{})}),_?(s[a]=C,E):C})(k,S,"global"in v?v.global:this==s,v.state)}function p(y){var v,$=y.length,N=this,S=0,I=N.i=N.j=0,k=N.S=[];for($||(y=[$++]);S<r;)k[S]=S++;for(S=0;S<r;S++)k[S]=k[I=h&I+y[S%$]+(v=k[S])],k[I]=v;(N.g=function(C){for(var E,_=0,R=N.i,M=N.j,z=N.S;C--;)E=z[R=h&R+1],_=_*r+z[h&(z[R]=z[M=h&M+E])+(z[M]=E)];return N.i=R,N.j=M,_})(r)}function m(y,v){return v.i=y.i,v.j=y.j,v.S=y.S.slice(),v}function g(y,v){var $=[],N=typeof y,S;if(v&&N=="object")for(S in y)try{$.push(g(y[S],v-1))}catch{}return $.length?$:N=="string"?y:y+"\0"}function x(y,v){for(var $=y+"",N,S=0;S<$.length;)v[h&S]=h&(N^=v[h&S]*19)+$.charCodeAt(S++);return w(v)}function b(){try{var y;return d&&(y=d.randomBytes)?y=y(r):(y=new Uint8Array(r),(t.crypto||t.msCrypto).getRandomValues(y)),w(y)}catch{var v=t.navigator,$=v&&v.plugins;return[+new Date,t,$,t.screen,w(e)]}}function w(y){return String.fromCharCode.apply(0,y)}if(x(s.random(),e),n.exports){n.exports=f;try{d=FA}catch{}}else s["seed"+a]=f})(typeof self<"u"?self:OA,[],Math)})(Tl)),Tl.exports}var ch,kg;function LA(){if(kg)return ch;kg=1;var n=vA(),t=$A(),e=IA(),s=NA(),r=EA(),o=AA(),i=MA();return i.alea=n,i.xor128=t,i.xorwow=e,i.xorshift7=s,i.xor4096=r,i.tychei=o,ch=i,ch}var Zf=LA();class Vb{constructor(t,e,s,r,o){this.mean=t,this.stdDev=e,this.dtype=s,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const i=o||Math.random();this.random=Zf.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){const r=this.nextVal;return this.nextVal=NaN,r}let t,e,s=!1;for(;!s;){let r,o,i;do r=2*this.random()-1,o=2*this.random()-1,i=r*r+o*o;while(i>=1||i===0);const a=Math.sqrt(-2*Math.log(i)/i);t=this.mean+this.stdDev*r*a,e=this.mean+this.stdDev*o*a,(!this.truncated||this.isValidTruncated(t))&&(s=!0)}return(!this.truncated||this.isValidTruncated(e))&&(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class PA{constructor(t=0,e=1,s,r){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=e-t,this.dtype=s,r==null&&(r=Math.random()),typeof r=="number"&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=Zf.alea(r)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}function zA(n,t=0,e=1,s,r){if(Ls(n),s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const o=new Vb(t,e,s,!1,r),i=Nt(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=o.nextValue();return i.toTensor()}const BA=W({randomNormal_:zA});function VA(n,t=0,e=1,s="float32",r){Ls(n);const o=Nt(n,s),i=new PA(t,e,null,r);for(let a=0;a<o.values.length;a++)o.values[a]=i.nextValue();return o.toTensor()}const Ea=W({randomUniform_:VA});function yi(n,t,e=1,s="float32"){if(e===0)throw new Error("Cannot have a step of zero");const r={start:n,stop:t,step:e,dtype:s};return L.runKernel(vf,{},r)}function WA(n){const e={input:D(n,"input","real")};return L.runKernel(Cf,e)}const Yl=W({real_:WA});function UA(n){const e={x:D(n,"x","reciprocal")};return L.runKernel(ca,e)}const GA=W({reciprocal_:UA});function HA(n){const e={x:D(n,"x","relu")};return L.runKernel(ua,e)}const Hr=W({relu_:HA});function qA(n){const e={x:D(n,"x","relu6")};return L.runKernel(ha,e)}const Wb=W({relu6_:qA});function XA(n,t){const s={x:D(n,"x","reverse")},r={dims:t};return L.runKernel(uu,s,r)}const Lr=W({reverse_:XA});function KA(n){const e={x:D(n,"x","round")};return L.runKernel(da,e)}const Ub=W({round_:KA});function jA(n){const e={x:D(n,"x","rsqrt","float32")};return L.runKernel(fa,e)}const Gb=W({rsqrt_:jA});function YA(n){const e={x:D(n,"x","selu")};return L.runKernel(pa,e)}const Hb=W({selu_:YA});function ZA(n,t,e,s,r,o=[1,1],i="NHWC"){const a=D(n,"x","separableConv2d"),l=D(t,"depthwiseFilter","separableConv2d"),c=D(e,"pointwiseFilter","separableConv2d");let u=a,h=!1;if(a.rank===3&&(h=!0,u=V(a,[1,a.shape[0],a.shape[1],a.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");T(u.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${u.rank}.`),T(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),T(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),T(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),T(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);const d=l.shape[2],f=l.shape[3];T(c.shape[2]===d*f,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*f}, but got ${c.shape[2]}.`);const p=zf(u,l,s,r,i,o),g=Or(p,c,1,"valid",i);return h?V(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const qb=W({separableConv2d_:ZA});function JA(n){const e={x:D(n,"x","sign")};return L.runKernel(xa,e)}const QA=W({sign_:JA});function tD(n){const e={x:D(n,"x","sin","float32")};return L.runKernel(ma,e)}const Xb=W({sin_:tD});function eD(n){const e={x:D(n,"x","sinh")};return L.runKernel(ga,e)}const Kb=W({sinh_:eD});function nD(n,t,e){const s=D(n,"x","slice1d");return T(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),Qt(s,[t],[e])}const Jf=W({slice1d_:nD});function sD(n,t,e){const s=D(n,"x","slice2d");return T(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),Qt(s,t,e)}const jb=W({slice2d_:sD});function rD(n,t,e){const s=D(n,"x","slice3d");return T(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),Qt(s,t,e)}const Qf=W({slice3d_:rD});function oD(n,t,e){const s=D(n,"x","slice4d");return T(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),Qt(s,t,e)}const Zl=W({slice4d_:oD});function iD(n,t=-1){const e=D(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);const s={logits:e},r={dim:t};return L.runKernel(gu,s,r)}const tp=W({softmax_:iD});function aD(n){T(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const t={input:n};return L.runKernel(uf,t)}const Yb=W({fft_:aD});function lD(n){T(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const t={input:n};return L.runKernel(ff,t)}const ed=W({ifft_:lD});function cD(n){const t=n.shape[n.shape.length-1],e=n.size/t;let s;if(t<=2){const r=V(n,[e,t]);s=ed(r)}else{const r=[e,2*(t-1)],o=V(Yl(n),[e,t]),i=V(Uf(n),[e,t]),a=Lr(Qt(o,[0,1],[e,t-2]),1),l=O(Lr(Qt(i,[0,1],[e,t-2]),1),Lt(-1)),c=an([o,a],1),u=an([i,l],1),h=V(wo(c,u),[r[0],r[1]]);s=ed(h)}if(s=Yl(s),n.rank===3&&n.shape[0]!==0){const r=s,o=n.shape[0];s=V(s,[o,s.shape[0]/o,s.shape[1]]),r.dispose()}return s}const uD=W({irfft_:cD});function hD(n,t,e=0){const r={x:D(n,"x","split")},o={numOrSizeSplits:t,axis:e};return L.runKernel(mu,r,o)}const vn=W({split_:hD});function dD(n,t){T(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let e=n.shape[n.shape.length-1];const s=n.size/e;let r;if(t!=null&&t<e){const p=n.shape.map(g=>0),m=n.shape.map(g=>g);m[n.shape.length-1]=t,r=Qt(n,p,m),e=t}else if(t!=null&&t>e){const p=n.shape.map(m=>m);p[n.shape.length-1]=t-e,r=an([n,Re(p)],n.shape.length-1),e=t}else r=n;const o=Dt(r),i=V(wo(r,o),[s,e]),a=Yb(i),l=Math.floor(e/2)+1,c=Yl(a),u=Uf(a),h=vn(c,[l,e-l],c.shape.length-1),d=vn(u,[l,e-l],u.shape.length-1),f=r.shape.slice();return f[r.shape.length-1]=l,V(wo(h[0],d[0]),f)}const fD=W({rfft_:dD});function pD(n,t){let e=D(n,"a","squaredDifference"),s=D(t,"b","squaredDifference");[e,s]=fe(e,s),kt(e.shape,s.shape);const r={a:e,b:s},o={};return L.runKernel(va,r,o)}const mD=W({squaredDifference_:pD});function gD(n,t){const e=D(n,"x","squeeze","string_or_numeric");return V(e,ir(e.shape,t).newShape)}const Ra=W({squeeze_:gD});function xD(n,t=0){const e=gb(n,"tensors","stack","string_or_numeric");T(e.length>=1,()=>"Pass at least one tensor to tf.stack"),e.length>0&&T(t<=e[0].rank,()=>"Axis must be <= rank of the tensor");const s=e,r={axis:t};return L.runKernel(su,s,r)}const Fs=W({stack_:xD});function bD(n,t=0){const s={x:D(n,"x","step")},r={alpha:t};return L.runKernel(Sa,s,r)}const Aa=W({step_:bD});function yD(n,t,e,s,r=0,o=0,i=0,a=0,l=0){const u={x:D(n,"x","stridedSlice","string_or_numeric")},h={begin:t,end:e,strides:s,beginMask:r,endMask:o,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};return L.runKernel(Nf,u,h)}const wD=W({stridedSlice_:yD});function vD(n){const e={x:D(n,"x","tan","float32")};return L.runKernel($a,e)}const CD=W({tan_:vD});function pn(n,t){N0(n);const e=vu(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Cu(n,null,e,t)}function Zs(n,t,e){if(N0(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=vu(n,e);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Cu(n,t,s,e)}function qr(n,t,e){const s=t.shape.length,r=s>1?t.shape[s-1]:1,o=e.length;let i=1;for(let h=r;h<o;++h)i*=e[h];const a=r<1?1:r,l=Y(t.shape)/a,c=[...xt(e.slice(0,r)),1],u=Y(e);return{sliceRank:r,numUpdates:l,sliceSize:i,strides:c,outputSize:u}}function $D(n,t=1,e=!0){const s=D(n,"x","topk");if(s.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const r=s.shape[s.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>r)throw new Error(`'k' passed to topk() must be <= the last dimension (${r}) but got ${t}`);const o={x:s},i={k:t,sorted:e},[a,l]=L.runKernel(Tf,o,i);return{values:a,indices:l}}const kD=W({topk_:$D});function ID(n,t=0,e=1,s,r){if(Ls(n),s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const o=new Vb(t,e,s,!0,r),i=Nt(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=o.nextValue();return i.toTensor()}const Zb=W({truncatedNormal_:ID});function SD(n,t=0){const e=D(n,"x","unique","string_or_numeric");T(e.rank>0,()=>"The input tensor must be at least 1D");const s={x:e},r={axis:t},[o,i]=L.runKernel(Rf,s,r);return{values:o,indices:i}}const ND=W({unique_:SD});function TD(n,t,e){const s=D(n,"x","unsortedSegmentSum"),r=D(t,"segmentIds","unsortedSegmentSum","int32");T(bo(e),()=>"numSegments must be of dtype int");const o={x:s,segmentIds:r},i={numSegments:e};return L.runKernel(bu,o,i)}const Jb=W({unsortedSegmentSum_:TD});function ED(n,t=0){const e=D(n,"x","unstack","string_or_numeric");T(t>=-e.shape.length&&t<e.shape.length,()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`);const s={value:e},r={axis:t};return L.runKernel(xu,s,r)}const Pr=W({unstack_:ED});function RD(n,t=!0,e,s){return L.makeVariable(n,t,e,s)}function Qb(n,t){const e=[];for(let o=0;o<t.length;o++)t[o]&&e.push(o);const s=Nt(n,"int32"),r=Nt([e.length,n.length],"int32");for(let o=0;o<e.length;o++){const i=s.indexToLoc(e[o]),a=o*n.length;r.values.set(i,a)}return r.toTensor()}function AD(n,t,e){const s=D(n,"x","transpose");if(t==null&&(t=s.shape.map((i,a)=>a).reverse()),T(s.rank===t.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${t}.`),t.forEach(i=>{T(i>=0&&i<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${t}`)}),s.rank<=1)return s.clone();const r={x:s},o={perm:t};return s.dtype==="complex64"?G(()=>{let i=Yl(s),a=Uf(s);return i=L.runKernel(uo,{x:i},o),a=L.runKernel(uo,{x:a},o),e&&(a=de(a)),wo(i,a)}):L.runKernel(uo,r,o)}const At=W({transpose_:AD});function DD(n,t){if(t==null)return n.shape.slice();if(Pt(n.shape,t))return t;if(n.shape.length===t.length){const e=[];for(let s=0;s<n.shape.length;s++)t[s]==null&&n.shape[s]!=null?e.push(n.shape[s]):e.push(t[s]);return e}return t}function _D(n,t,e,s){const r=D(n,"x","dropout");if(T(r.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${r.dtype} tensor instead.`),T(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return n instanceof ve?r.clone():r;const o=DD(r,e),i=1-t,a=bt(Tu(et(Ea(o,0,1,"float32",s),i)),i);return O(r,a)}const FD=W({dropout_:_D});function OD(n,t,e,s,r,o="NHWC",i){let a=n;n.rank===3&&(a=V(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=V(t,[1,t.shape[0],t.shape[1],t.shape[2]])),T(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),T(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),T(e.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`);const c=o==="NHWC"?a.shape[3]:a.shape[1],u=o==="NHWC"?l.shape[3]:l.shape[1];T(c===e[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${e[2]}.`),T(u===e[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${e[3]}).`),un("conv2dDerFilter",r,i);const h={x:a,dy:l},d={strides:s,pad:r,dataFormat:o,dimRoundingMode:i,filterShape:e};return L.runKernel(Zd,h,d)}const ep=W({conv2DBackpropFilter_:OD});function np(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return O(n,Aa(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function sp(n,t){let e=t;const s=Se(n.shape,t.shape);return s.length>0&&(e=gt(e,s)),V(e,n.shape)}function rp(n,t,e,s){if(t==="linear")return n;if(t==="relu")return Hr(n);if(t==="elu")return Su(n);if(t==="relu6")return Wb(n);if(t==="prelu")return Yf(n,e);if(t==="leakyrelu")return Gf(n,s);if(t==="sigmoid")return _o(n);throw new Error(`Unknown fused activation ${t}.`)}const op=(n,t)=>!(n>0)||t==="linear";function MD({x:n,filter:t,strides:e,pad:s,dataFormat:r="NHWC",dilations:o=[1,1],dimRoundingMode:i,bias:a,activation:l="linear",preluActivationWeights:c,leakyreluAlpha:u}){if(l=l||"linear",op(L.state.gradientDepth,l)===!1){T(r==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${r} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let $=Or(n,t,e,s,r,o,i);return a!=null&&($=et($,a)),rp($,l,c,u)}const h=D(n,"x","conv2d","float32"),d=D(t,"filter","conv2d","float32");let f=h,p=!1;h.rank===3&&(p=!0,f=V(h,[1,h.shape[0],h.shape[1],h.shape[2]])),T(f.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${f.rank}.`),T(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),un("fused conv2d",s,i);const m=r==="NHWC"?f.shape[3]:f.shape[1];T(d.shape[2]===m,()=>`Error in conv2d: depth of input (${m}) must match input depth for filter ${d.shape[2]}.`),T(Ue(e,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`);const g=Me(f.shape,d.shape,e,o,s,i);let x;a!=null&&(x=D(a,"bias","fused conv2d"),[x]=fe(x,h),r==="NHWC"?kt(g.outShape,x.shape):(T(x.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${x.shape.length}.`),T(x.shape.length===0||x.shape[0]===g.outChannels||x.shape[0]===1,()=>`Error in fused conv2d: bias shape (${x.shape}) is not compatible with the number of output channels (${g.outChannels})`)));let b;if(c!=null){const $=c.shape;if(T($.length<=1||$.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${$.length}.`),$.length===1)T($[0]===1||$[0]===g.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the number of output channels (${g.outChannels}).`);else if($.length===3)try{kt($,g.outShape)}catch{const S=`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the output shape of the conv2d (${g.outShape}).`;throw Error(S)}b=D(c,"prelu weights","fused conv2d")}const w=($,N)=>{T(r==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${r} but only NHWC is currently supported.`);const[S,I,k,C]=N,E=np($,k,l);T(_r(o),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`);const _=Lf(I.shape,E,S,e,s),R=ep(I,E,S.shape,e,s),M=[_,R];if(C!=null){const z=sp(C,E);M.push(z)}return M},y={x:f,filter:d,bias:x,preluActivationWeights:b},v={strides:e,pad:s,dataFormat:r,dilations:o,dimRoundingMode:i,activation:l,leakyreluAlpha:u};return a==null?Co((N,S,I)=>{let k=L.runKernel(Gl,y,v);return I([S,N,k]),p&&(k=V(k,[k.shape[1],k.shape[2],k.shape[3]])),{value:k,gradFunc:w}})(f,d):Co((N,S,I,k)=>{let C=L.runKernel(Gl,y,v);return k([S,N,C,I]),p&&(C=V(C,[C.shape[1],C.shape[2],C.shape[3]])),{value:C,gradFunc:w}})(f,d,x)}const LD=W({fusedConv2d_:MD});function PD(n,t,e,s,r,o=[1,1],i){let a=n;n.rank===3&&(a=V(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=V(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={x:a,dy:l},u={strides:s,pad:r,dimRoundingMode:i,dilations:o,filterShape:e};return L.runKernel(rf,c,u)}const zD=W({depthwiseConv2dNativeBackpropFilter_:PD});function BD(n,t,e,s,r,o=[1,1],i){let a=t,l=!1;t.rank===3&&(l=!0,a=V(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={dy:a,filter:e},u={strides:s,pad:r,dimRoundingMode:i,dilations:o,inputShape:n},h=L.runKernel(of,c,u);return l?V(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const VD=W({depthwiseConv2dNativeBackpropInput_:BD});function WD({a:n,b:t,transposeA:e=!1,transposeB:s=!1,bias:r,activation:o="linear",preluActivationWeights:i,leakyreluAlpha:a=.2}){if(op(L.state.gradientDepth,o)===!1){let C=Ft(n,t,e,s);return r!=null&&(C=et(C,r)),rp(C,o,i,a)}let l=D(n,"a","fused matMul"),c=D(t,"b","fused matMul");[l,c]=fe(l,c);const u=e?l.shape[l.rank-2]:l.shape[l.rank-1],h=s?c.shape[c.rank-1]:c.shape[c.rank-2],d=e?l.shape[l.rank-1]:l.shape[l.rank-2],f=s?c.shape[c.rank-2]:c.shape[c.rank-1],p=l.shape.slice(0,-2),m=c.shape.slice(0,-2),g=Y(p),x=Y(m);T(u===h,()=>`Error in fused matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${l.shape} and ${c.shape} and transposeA=${e} and transposeB=${s} must match.`);const w=kt(l.shape.slice(0,-2),c.shape.slice(0,-2)).concat([d,f]),y=e?V(l,[g,u,d]):V(l,[g,d,u]),v=s?V(c,[x,f,h]):V(c,[x,h,f]);let $;r!=null&&($=D(r,"bias","fused matMul"),[$]=fe($,l),kt(w,$.shape));let N;i!=null&&(N=D(i,"prelu weights","fused matMul"));const S=(C,E)=>{const[_,R,M,z]=E,P=np(V(C,M.shape),M,o);let U,q;if(!e&&!s?(U=Ft(P,R,!1,!0),q=Ft(_,P,!0,!1)):!e&&s?(U=Ft(P,R,!1,!1),q=Ft(P,_,!0,!1)):e&&!s?(U=Ft(R,P,!1,!0),q=Ft(_,P,!1,!1)):(U=Ft(R,P,!0,!0),q=Ft(P,_,!0,!0)),r!=null){const j=sp(z,P);return[U,q,j]}else return[U,q]},I={a:y,b:v,bias:$,preluActivationWeights:N},k={transposeA:e,transposeB:s,activation:o,leakyreluAlpha:a};return r==null?Co((E,_,R)=>{const M=L.runKernel(Ul,I,k);return R([E,_,M]),{value:V(M,w),gradFunc:S}})(y,v):Co((E,_,R,M)=>{const z=L.runKernel(Ul,I,k);return M([E,_,z,R]),{value:V(z,w),gradFunc:S}})(y,v,$)}const Ig=W({fusedMatMul_:WD});function UD(n,t,e,s,r="bilinear",o=0){const i=D(n,"image","cropAndResize"),a=D(t,"boxes","cropAndResize","float32"),l=D(e,"boxInd","cropAndResize","int32"),c=a.shape[0];T(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),T(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${a.shape}.`),T(l.rank===1&&l.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${a.shape}.`),T(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),T(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),T(r==="bilinear"||r==="nearest",()=>`method must be bilinear or nearest, but was ${r}`);const u={image:i,boxes:a,boxInd:l},h={method:r,extrapolationValue:o,cropSize:s};return L.runKernel(ef,u,h)}const GD=W({cropAndResize_:UD});function HD(n){const t=D(n,"image","flipLeftRight","float32");T(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const e={image:t};return L.runKernel(df,e,{})}const qD=W({flipLeftRight_:HD});function XD(n){const t=D(n,"image","grayscaleToRGB"),e=t.rank-1,s=t.shape[e];T(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),T(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const r=new Array(t.rank);return r.fill(1,0,e),r[e]=3,Xn(t,r)}const KD=W({grayscaleToRGB_:XD});function jD(n){const t=D(n,"image","RGBToGrayscale"),e=t.rank-1,s=t.shape[e];T(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),T(s===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${s}.`);const r=t.dtype,o=ut(t,"float32"),i=pn([.2989,.587,.114]);let a;switch(t.rank){case 2:a=Ko("ij,j->i",o,i);break;case 3:a=Ko("ijk,k->ij",o,i);break;case 4:a=Ko("ijkl,l->ijk",o,i);break;case 5:a=Ko("ijklm,m->ijkl",o,i);break;case 6:a=Ko("ijklmn,n->ijklm",o,i);break;default:throw new Error("Not a valid tensor rank.")}return a=rn(a,-1),ut(a,r)}const YD=W({rgbToGrayscale_:jD});function ZD(n,t,e=0,s=.5){const r=D(n,"image","rotateWithOffset","float32");T(r.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${r.rank}.`);const o={image:r},i={radians:t,fillValue:e,center:s};return L.runKernel(Af,o,i)}const JD=W({rotateWithOffset_:ZD});function Oo(n,t,e,s,r,o){s==null&&(s=.5),r==null&&(r=Number.NEGATIVE_INFINITY),o==null&&(o=0);const i=n.shape[0];return e=Math.min(e,i),T(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),T(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),T(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),T(t.rank===1,()=>"scores must be a 1D tensor"),T(t.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${t.shape[0]}`),T(0<=o&&o<=1,()=>`softNmsSigma must be in [0, 1], but was '${o}'`),{maxOutputSize:e,iouThreshold:s,scoreThreshold:r,softNmsSigma:o}}function QD(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY){const o=D(n,"boxes","nonMaxSuppression","float32"),i=D(t,"scores","nonMaxSuppression","float32"),a=Oo(o,i,e,s,r);e=a.maxOutputSize,s=a.iouThreshold,r=a.scoreThreshold;const l={maxOutputSize:e,iouThreshold:s,scoreThreshold:r};return L.runKernel(bf,{boxes:o,scores:i},l)}const t_=W({nonMaxSuppression_:QD});function e_(n,t,e){const s=n_(n,t,e),r=s<0?-(s+1):s;n.splice(r,0,t)}function n_(n,t,e){return r_(n,t,e||s_)}function s_(n,t){return n>t?1:n<t?-1:0}function r_(n,t,e){let s=0,r=n.length,o=0,i=!1;for(;s<r;){o=s+(r-s>>>1);const a=e(t,n[o]);a>0?s=o+1:(r=o,i=!a)}return i?s:-s-1}function ip(n,t,e,s,r){return cp(n,t,e,s,r,0)}function ap(n,t,e,s,r,o){return cp(n,t,e,s,r,0,!1,o,!0)}function lp(n,t,e,s,r,o){return cp(n,t,e,s,r,o,!0)}function cp(n,t,e,s,r,o,i=!1,a=!1,l=!1){const c=[];for(let g=0;g<t.length;g++)t[g]>r&&c.push({score:t[g],boxIndex:g,suppressBeginIndex:0});c.sort(Sg);const u=o>0?-.5/o:0,h=[],d=[];for(;h.length<e&&c.length>0;){const g=c.pop(),{score:x,boxIndex:b,suppressBeginIndex:w}=g;if(x<r)break;let y=!1;for(let v=h.length-1;v>=w;--v){const $=o_(n,b,h[v]);if($>=s){y=!0;break}if(g.score=g.score*i_(s,u,$),g.score<=r)break}g.suppressBeginIndex=h.length,y||(g.score===x?(h.push(b),d.push(g.score)):g.score>r&&e_(c,g,Sg))}const f=h.length,p=e-f;a&&p>0&&(h.push(...new Array(p).fill(0)),d.push(...new Array(p).fill(0)));const m={selectedIndices:h};return i&&(m.selectedScores=d),l&&(m.validOutputs=f),m}function o_(n,t,e){const s=n.subarray(t*4,t*4+4),r=n.subarray(e*4,e*4+4),o=Math.min(s[0],s[2]),i=Math.min(s[1],s[3]),a=Math.max(s[0],s[2]),l=Math.max(s[1],s[3]),c=Math.min(r[0],r[2]),u=Math.min(r[1],r[3]),h=Math.max(r[0],r[2]),d=Math.max(r[1],r[3]),f=(a-o)*(l-i),p=(h-c)*(d-u);if(f<=0||p<=0)return 0;const m=Math.max(o,c),g=Math.max(i,u),x=Math.min(a,h),b=Math.min(l,d),w=Math.max(x-m,0)*Math.max(b-g,0);return w/(f+p-w)}function i_(n,t,e){const s=Math.exp(t*e*e);return e<=n?s:0}function Sg(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}async function a_(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY){const o=D(n,"boxes","nonMaxSuppressionAsync"),i=D(t,"scores","nonMaxSuppressionAsync"),a=Oo(o,i,e,s,r);e=a.maxOutputSize,s=a.iouThreshold,r=a.scoreThreshold;const l=await Promise.all([o.data(),i.data()]),c=l[0],u=l[1],{selectedIndices:h}=ip(c,u,e,s,r);return o!==n&&o.dispose(),i!==t&&i.dispose(),pn(h,"int32")}const l_=a_;function c_(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,o=0){const i=D(n,"boxes","nonMaxSuppression"),a=D(t,"scores","nonMaxSuppression"),l=Oo(i,a,e,s,r,o);e=l.maxOutputSize,s=l.iouThreshold,r=l.scoreThreshold,o=l.softNmsSigma;const c={boxes:i,scores:a},u={maxOutputSize:e,iouThreshold:s,scoreThreshold:r,softNmsSigma:o},h=L.runKernel(wf,c,u);return{selectedIndices:h[0],selectedScores:h[1]}}const u_=W({nonMaxSuppressionWithScore_:c_});async function h_(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,o=0){const i=D(n,"boxes","nonMaxSuppressionAsync"),a=D(t,"scores","nonMaxSuppressionAsync"),l=Oo(i,a,e,s,r,o);e=l.maxOutputSize,s=l.iouThreshold,r=l.scoreThreshold,o=l.softNmsSigma;const c=await Promise.all([i.data(),a.data()]),u=c[0],h=c[1],{selectedIndices:d,selectedScores:f}=lp(u,h,e,s,r,o);return i!==n&&i.dispose(),a!==t&&a.dispose(),{selectedIndices:pn(d,"int32"),selectedScores:pn(f)}}const d_=h_;function f_(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,o=!1){const i=D(n,"boxes","nonMaxSuppression"),a=D(t,"scores","nonMaxSuppression"),l=Oo(i,a,e,s,r,null),c=l.maxOutputSize,u=l.iouThreshold,h=l.scoreThreshold,d={boxes:i,scores:a},f={maxOutputSize:c,iouThreshold:u,scoreThreshold:h,padToMaxOutputSize:o},p=L.runKernel(yf,d,f);return{selectedIndices:p[0],validOutputs:p[1]}}const p_=W({nonMaxSuppressionPadded_:f_});async function m_(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,o=!1){const i=D(n,"boxes","nonMaxSuppressionAsync"),a=D(t,"scores","nonMaxSuppressionAsync"),l=Oo(i,a,e,s,r,null),c=l.maxOutputSize,u=l.iouThreshold,h=l.scoreThreshold,[d,f]=await Promise.all([i.data(),a.data()]),{selectedIndices:p,validOutputs:m}=ap(d,f,c,u,h,o);return i!==n&&i.dispose(),a!==t&&a.dispose(),{selectedIndices:pn(p,"int32"),validOutputs:Lt(m,"int32")}}const g_=m_;function x_(n,t,e=!1,s=!1){const r=D(n,"images","resizeBilinear");T(r.rank===3||r.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${r.rank}.`),T(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),T(s===!1||e===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let o=r,i=!1;r.rank===3&&(i=!0,o=V(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const a={images:o},l={alignCorners:e,halfPixelCenters:s,size:t},c=L.runKernel(cu,a,l);return i?V(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const ty=W({resizeBilinear_:x_});function b_(n,t,e=!1,s=!1){const r=D(n,"images","resizeNearestNeighbor");T(r.rank===3||r.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${r.rank}.`),T(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),T(r.dtype==="float32"||r.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),T(s===!1||e===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let o=r,i=!1;r.rank===3&&(i=!0,o=V(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const a={images:o},l={alignCorners:e,halfPixelCenters:s,size:t},c=L.runKernel(lu,a,l);return i?V(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const ey=W({resizeNearestNeighbor_:b_});function y_(n,t="binary",e=!1,s=.5){const r=D(n,"image","threshold"),o=.2989,i=.587,a=.114,l=r.shape[0]*r.shape[1];let c=O(pn([s]),255),u,h,d,f;if(T(r.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${r.rank}.`),T(r.shape[2]===3||r.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${r.shape[2]}.`),T(r.dtype==="int32"||r.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${r.dtype}.`),T(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),r.shape[2]===3){[u,h,d]=vn(r,[1,1,1],-1);const g=O(u,o),x=O(h,i),b=O(d,a);f=et(et(g,x),b)}else f=n;if(t==="otsu"){const g=mE(ut(Ub(f),"int32"),xb([]),256);c=w_(g,l)}const p=e?Fo(f,c):kn(f,c);return ut(O(p,255),"int32")}function w_(n,t){let e=pn([-1]),s=pn([0]),r=pn([0]),o,i,a,l,c,u;for(let h=0;h<n.size-1;h++){o=Qt(n,0,h+1),i=Qt(n,h+1),c=bt(gt(o),t),u=bt(gt(i),t);const d=gt(O(o,yi(0,o.size)));a=bt(d,gt(o));const f=Iu(i.shape,o.size),p=et(yi(0,i.size),f),m=O(i,p);l=bt(gt(m),gt(i));const g=wt(a,l),x=wt(a,l),b=O(c,u);r=O(O(b,g),x);const w=kn(r,s);s=Qe(w,r,s),e=Qe(w,pn([h]),e)}return e}const v_=W({threshold_:y_});function C_(n,t,e="nearest",s="constant",r=0,o){const i=D(n,"image","transform","float32"),a=D(t,"transforms","transform","float32");T(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),T(a.rank===2&&(a.shape[0]===i.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),T(o==null||o.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${o}.`);const l={image:i,transforms:a},c={interpolation:e,fillMode:s,fillValue:r,outputShape:o};return L.runKernel(Ef,l,c)}const $_=W({transform_:C_});function k_(n,t,e){const s=D(n,"a","bandPart");T(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const r=s.shape,[o,i]=s.shape.slice(-2);let a,l;typeof t=="number"?(T(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),T(t<=o,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${o}).`),a=D(t<0?o:t,"numLower","bandPart")):(T(t.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),a=Qe(Kl(t,0),o,bi(t,o))),typeof e=="number"?(T(e%1===0,()=>`bandPart(): numUpper must be an integer, got ${e}.`),T(e<=i,()=>`bandPart(): numUpper (${e}) must not be greater than the number of columns (${i}).`),l=D(e<0?i:e,"numUpper","bandPart")):(T(e.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),l=Qe(Kl(e,0),i,bi(e,i)));const c=V(yi(0,o,1,"int32"),[-1,1]),u=yi(0,i,1,"int32"),h=wt(c,u),d=_s(Fo(h,a),Gr(h,de(l))),f=Re([o,i],s.dtype);return V(Fs(Pr(V(s,[-1,o,i])).map(p=>Qe(d,p,f))),r)}const I_=W({bandPart_:k_});function S_(n){let t;if(Array.isArray(n)){t=!1,T(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const r=n[0].shape[0];for(let o=1;o<n.length;++o)T(n[o].shape[0]===r,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[o].shape[0]} vs. ${r})`)}else t=!0,n=vn(n,n.shape[0],0).map(r=>Ra(r,[0]));T(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const e=[],s=n;for(let r=0;r<n.length;++r)e.push(L.tidy(()=>{let o=s[r];if(r>0)for(let i=0;i<r;++i){const a=O(gt(O(e[i],o)),e[i]);o=wt(o,a)}return bt(o,Nu(o,"euclidean"))}));return t?Fs(e,0):e}const N_=W({gramSchmidt_:S_});function T_(n,t=!1){if(T(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return Ng(n,t);{const e=n.shape.slice(0,n.shape.length-2).reduce((l,c)=>l*c),s=Pr(V(n,[e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),r=[],o=[];s.forEach(l=>{const[c,u]=Ng(l,t);r.push(c),o.push(u)});const i=V(Fs(r,0),n.shape),a=V(Fs(o,0),n.shape);return[i,a]}}function Ng(n,t=!1){return L.tidy(()=>{T(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const e=n.shape[0],s=n.shape[1];let r=Vf(e),o=Ir(n);const i=Zs([[1]],[1,1]);let a=Ir(i);const l=e>=s?s:e;for(let c=0;c<l;++c){const u=o,h=a,d=r;[a,o,r]=L.tidy(()=>{const f=Qt(o,[c,c],[e-c,1]),p=Nu(f),m=Qt(o,[c,c],[1,1]),g=Qe(kn(m,0),Zs([[-1]]),Zs([[1]])),x=wt(m,O(g,p)),b=bt(f,x);b.shape[0]===1?a=Ir(i):a=an([i,Qt(b,[1,0],[b.shape[0]-1,b.shape[1]])],0);const w=de(bt(Ft(g,x),p)),y=Qt(o,[c,0],[e-c,s]),v=O(w,a),$=At(a);if(c===0)o=wt(y,Ft(v,Ft($,y)));else{const I=wt(y,Ft(v,Ft($,y)));o=an([Qt(o,[0,0],[c,s]),I],0)}const N=At(v),S=Qt(r,[0,c],[e,r.shape[1]-c]);if(c===0)r=wt(S,Ft(Ft(S,a),N));else{const I=wt(S,Ft(Ft(S,a),N));r=an([Qt(r,[0,0],[e,c]),I],1)}return[a,o,r]}),Rt([u,h,d])}return!t&&e>s&&(r=Qt(r,[0,0],[e,s]),o=Qt(o,[0,0],[s,s])),[r,o]})}const E_=W({qr_:T_});const Rs={flipLeftRight:qD,grayscaleToRGB:KD,resizeNearestNeighbor:ey,resizeBilinear:ty,rgbToGrayscale:YD,rotateWithOffset:JD,cropAndResize:GD,nonMaxSuppression:t_,nonMaxSuppressionAsync:l_,nonMaxSuppressionWithScore:u_,nonMaxSuppressionWithScoreAsync:d_,nonMaxSuppressionPadded:p_,nonMaxSuppressionPaddedAsync:g_,threshold:v_,transform:$_},R_={bandPart:I_,gramSchmidt:N_,qr:E_};const A_=new Map,D_=new Map;class Mo{getClassName(){return this.constructor.className}static fromConfig(t,e){return new t(e)}}class Rn{constructor(){this.classNameMap={}}static getMap(){return Rn.instance==null&&(Rn.instance=new Rn),Rn.instance}static register(t){Rn.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function tt(n,t,e){T(n.className!=null,()=>"Class being registered does not have the static className property defined."),T(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),T(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t>"u"&&(t="Custom"),typeof e>"u"&&(e=n.className);const s=e,r=t+">"+s;return Rn.register(n),A_.set(r,n),D_.set(n,r),n}class hr extends Mo{minimize(t,e=!1,s){const{value:r,grads:o}=this.computeGradients(t,s);if(s!=null){const i=s.map(a=>({name:a.name,tensor:o[a.name]}));this.applyGradients(i)}else this.applyGradients(o);return Rt(o),e?r:(r.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,e){return PR(t,e)}dispose(){this.iterations_!=null&&Rt(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:Lt(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(hr,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});class ny extends hr{static get className(){return"Adadelta"}constructor(t,e,s=null){super(),this.learningRate=t,this.rho=e,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=L.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=L.registeredVariables[s],i=!1;this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accum_grad`,variable:G(()=>Dt(o).variable(i))}),this.accumulatedUpdates[r]==null&&(this.accumulatedUpdates[r]={originalName:`${s}/accum_var`,variable:G(()=>Dt(o).variable(i))});const a=Array.isArray(t)?t[r].tensor:t[s];if(a==null)return;const l=this.accumulatedGrads[r].variable,c=this.accumulatedUpdates[r].variable;G(()=>{const u=et(O(l,this.rho),O(te(a),1-this.rho)),h=O(bt(We(et(c,this.epsilon)),We(et(l,this.epsilon))),a),d=et(O(c,this.rho),O(te(h),1-this.rho));l.assign(u),c.assign(d);const f=et(O(h,-this.learningRate),o);o.assign(f)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Rt(this.accumulatedGrads.map(t=>t.variable)),Rt(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=t.length/2,s=!1;this.accumulatedGrads=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedUpdates=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.rho,e.epsilon)}}class sy extends hr{static get className(){return"Adagrad"}constructor(t,e=.1){super(),this.learningRate=t,this.initialAccumulatorValue=e,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=L.registeredVariables[s];this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accumulator`,variable:G(()=>Iu(o.shape,this.initialAccumulatorValue).variable(!1))});const i=Array.isArray(t)?t[r].tensor:t[s];if(i==null)return;const a=this.accumulatedGrads[r].variable;G(()=>{const l=et(a,te(i));a.assign(l);const c=et(O(bt(i,We(et(l,L.backend.epsilon()))),-this.learningRate),o);o.assign(c)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Rt(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulatedGrads=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,e){return new t(e.learningRate,e.initialAccumulatorValue)}}class ry extends hr{static get className(){return"Adam"}constructor(t,e,s,r=null){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],G(()=>{this.accBeta1=Lt(e).variable(),this.accBeta2=Lt(s).variable()}),r==null&&(this.epsilon=L.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);G(()=>{const s=wt(1,this.accBeta1),r=wt(1,this.accBeta2);e.forEach((o,i)=>{const a=L.registeredVariables[o],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${o}/m`,variable:G(()=>Dt(a).variable(l))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${o}/v`,variable:G(()=>Dt(a).variable(l))});const c=Array.isArray(t)?t[i].tensor:t[o];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedSecondMoment[i].variable,d=et(O(u,this.beta1),O(c,1-this.beta1)),f=et(O(h,this.beta2),O(te(c),1-this.beta2)),p=bt(d,s),m=bt(f,r);u.assign(d),h.assign(f);const g=et(O(bt(p,et(We(m),this.epsilon)),-this.learningRate),a);a.assign(g)}),this.accBeta1.assign(O(this.accBeta1,this.beta1)),this.accBeta2.assign(O(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Rt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&Rt(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t),G(()=>{this.accBeta1.assign(Mr(this.beta1,this.iterations_+1)),this.accBeta2.assign(Mr(this.beta2,this.iterations_+1))});const e=t.length/2,s=!1;this.accumulatedFirstMoment=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedSecondMoment=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)}}class oy extends hr{static get className(){return"Adamax"}constructor(t,e,s,r=null,o=0){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=r,this.decay=o,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],G(()=>{this.iteration=Lt(0).variable(),this.accBeta1=Lt(e).variable()}),r==null&&(this.epsilon=L.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);G(()=>{const s=wt(1,this.accBeta1),r=bt(-this.learningRate,et(O(this.iteration,this.decay),1));e.forEach((o,i)=>{const a=L.registeredVariables[o],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${o}/m`,variable:Dt(a).variable(l)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${o}/v`,variable:Dt(a).variable(l)});const c=Array.isArray(t)?t[i].tensor:t[o];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedWeightedInfNorm[i].variable,d=et(O(u,this.beta1),O(c,1-this.beta1)),f=O(h,this.beta2),p=Ye(c),m=ur(f,p);u.assign(d),h.assign(m);const g=et(O(bt(r,s),bt(d,et(m,this.epsilon))),a);a.assign(g)}),this.iteration.assign(et(this.iteration,1)),this.accBeta1.assign(O(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Rt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&Rt(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)}}class up extends hr{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=Array.isArray(t)?t[r].tensor:t[s];if(o==null)return;const i=L.registeredVariables[s];G(()=>{const a=et(O(this.c,o),i);i.assign(a)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=fs(Lt(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,e){return new t(e.learningRate)}}class iy extends up{static get className(){return"Momentum"}constructor(t,e,s=!1){super(t),this.learningRate=t,this.momentum=e,this.useNesterov=s,this.accumulations=[],this.m=Lt(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=L.registeredVariables[s];this.accumulations[r]==null&&(this.accumulations[r]={originalName:`${s}/momentum`,variable:G(()=>Dt(o).variable(!1))});const i=this.accumulations[r].variable,a=Array.isArray(t)?t[r].tensor:t[s];a!=null&&G(()=>{let l;const c=et(O(this.m,i),a);this.useNesterov?l=et(O(this.c,et(a,O(c,this.m))),o):l=et(O(this.c,c),o),i.assign(c),o.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Rt(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulations=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)}}class ay extends hr{static get className(){return"RMSProp"}constructor(t,e=.9,s=0,r=null,o=!1){if(super(),this.learningRate=t,this.decay=e,this.momentum=s,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=o,r==null&&(this.epsilon=L.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=L.registeredVariables[s],i=!1;this.accumulatedMeanSquares[r]==null&&(this.accumulatedMeanSquares[r]={originalName:`${s}/rms`,variable:G(()=>Dt(o).variable(i))}),this.accumulatedMoments[r]==null&&(this.accumulatedMoments[r]={originalName:`${s}/momentum`,variable:G(()=>Dt(o).variable(i))}),this.accumulatedMeanGrads[r]==null&&this.centered&&(this.accumulatedMeanGrads[r]={originalName:`${s}/mg`,variable:G(()=>Dt(o).variable(i))});const a=Array.isArray(t)?t[r].tensor:t[s];if(a==null)return;const l=this.accumulatedMeanSquares[r].variable,c=this.accumulatedMoments[r].variable;G(()=>{const u=et(O(l,this.decay),O(te(a),1-this.decay));if(this.centered){const h=this.accumulatedMeanGrads[r].variable,d=et(O(h,this.decay),O(a,1-this.decay)),f=bt(O(a,this.learningRate),We(wt(u,et(te(d),this.epsilon)))),p=et(O(c,this.momentum),f);l.assign(u),h.assign(d),c.assign(p);const m=wt(o,p);o.assign(m)}else{const h=et(O(l,this.decay),O(te(a),1-this.decay)),d=et(O(c,this.momentum),bt(O(a,this.learningRate),We(et(h,this.epsilon))));l.assign(h),c.assign(d);const f=wt(o,d);o.assign(f)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Rt(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Rt(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&Rt(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=this.centered?t.length/3:t.length/2,s=!1;this.accumulatedMeanSquares=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedMoments=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=t.slice(e*2,e*3).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)}}const __=[ny,sy,ry,oy,iy,ay,up];function F_(){for(const n of __)tt(n)}function hp(n,t){const e=n.shape.length,s=t.shape.length;if(e<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${e}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[s-1]>e)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[s-1]} vs. ${e}`);if(Y(n.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);const r=t.shape,o=r[r.length-1];let i=1;for(let h=0;h<r.length-1;++h)i*=r[h];const a=n.shape,l=r.slice();l.pop();let c=1;for(let h=o;h<e;++h)c*=a[h],l.push(a[h]);const u=[...xt(n.shape).map(h=>h/c),1].slice(0,o);return[l,i,c,u]}const nd=-2,O_=-1;function ly(n,t,e){const s=n.shape.length;T(s===t.length,()=>`Error in slice${s}D: Length of begin ${t} must match the rank of the array (${s}).`),T(s===e.length,()=>`Error in slice${s}D: Length of size ${e} must match the rank of the array (${s}).`);for(let r=0;r<s;++r)T(t[r]+e[r]<=n.shape[r],()=>`Error in slice${s}D: begin[${r}] + size[${r}] (${t[r]+e[r]}) would overflow input.shape[${r}] (${n.shape[r]})`)}function cy(n,t,e){const s=[];for(let r=0;r<n.length;r++)s[r]=Math.ceil((t[r]-n[r])/e[r]);return s}function uy(n,t,e){let s=e.length;for(let r=0;r<e.length;r++)if(e[r]>1){s=r;break}for(let r=s+1;r<e.length;r++)if(t[r]>0||e[r]!==n[r])return!1;return!0}function hy(n,t){let e=n.length>0?n[n.length-1]:1;for(let s=0;s<n.length-1;s++)e+=n[s]*t[s];return e}function dp(n,t,e){let s;const r=n.shape.length;typeof t=="number"?s=[t,...new Array(r-1).fill(0)]:t.length<r?s=t.concat(new Array(r-t.length).fill(0)):s=t.slice(),s.forEach(i=>{T(i!==-1,()=>"slice() does not support negative begin indexing.")});let o;return e==null?o=new Array(r).fill(-1):typeof e=="number"?o=[e,...new Array(r-1).fill(-1)]:e.length<r?o=e.concat(new Array(r-e.length).fill(-1)):o=e,o=o.map((i,a)=>i>=0?i:(T(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),n.shape[a]-s[a])),[s,o]}function dy(n,t,e,s,r,o,i,a,l){let c;if(s==null?(c=new Array(t.length),c.fill(1)):c=s,i!=null&&(i&i-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1;const h={dims:c.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:e.slice(),strides:c.slice(),beginMask:r,endMask:o,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};for(let w=0;w<h.dims;w++)u&&(1<<w&a)!==0&&h.numAddAxisAfterEllipsis++,1<<w&i&&(u=!0);u||(h.ellipsisMask|=1<<h.dims,h.dims++);const d={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};M_(h,d);let f=!0,p=!0,m=!0;const g=[],x=[];for(let w=0;w<n.length;++w){if(d.strides[w]===0)throw Error(`strides[${w}] must be non-zero`);const y=!!(d.shrinkAxisMask&1<<w),v=n[w];if(v===-1){g.push(y?1:-1);continue}const $=[d.beginMask&1<<w,d.endMask&1<<w],N=[d.strides[w]>0?0:-1,d.strides[w]>0?v:v-1];if(y&&d.strides[w]<=0)throw Error("only stride 1 allowed on non-range indexing.");m=m&&d.strides[w]===1;const S=!!(d.beginMask&1<<w&&d.endMask&1<<w);if(d.beginValid&&d.endValid){if(y){const E=d.begin[w]<0?v+d.begin[w]:d.begin[w];if(d.begin[w]=E,d.end[w]=d.begin[w]+1,E<0||E>=v)throw Error(`slice index ${d.begin[w]} of dimension ${w} out of bounds.`)}else d.begin[w]=Tg(d.begin[w],0,d.strides[w],v,$,N),d.end[w]=Tg(d.end[w],1,d.strides[w],v,$,N);const C=d.strides[w]===1&&d.begin[w]===0&&d.end[w]===v;f=f&&C,p=p&&(w===0&&d.strides[w]===1||C)}else f=f&&d.strides[w]===1&&S,p=p&&(w===0&&d.strides[w]===1||S);let I,k=!1;if(d.beginValid&&d.endValid?(I=d.end[w]-d.begin[w],k=!0):y?(I=1,k=!0):S&&v>=0&&(d.strides[w]<0?I=-v:I=v,k=!0),k){let C;I===0||I<0!=d.strides[w]<0?C=0:C=Math.trunc(I/d.strides[w])+(I%d.strides[w]!==0?1:0),g.push(C)}else g.push(-1)}for(let w=0;w<d.finalShapeGatherIndices.length;++w){const y=d.finalShapeGatherIndices[w];y>=0?x.push(g[y]):y===nd&&x.push(1)}return{finalShapeSparse:x.filter((w,y)=>d.finalShapeGatherIndices[y]!==nd),finalShape:x,isIdentity:f,sliceDim0:p,isSimpleSlice:m,begin:d.begin,end:d.end,strides:d.strides}}function M_(n,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let e=0;t.beginValid=n.begin!=null,t.endValid=n.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let s=0;s<n.dims;s++)if(1<<s&n.ellipsisMask){const r=Math.min(t.dims-(n.dims-s)+1+n.numAddAxisAfterEllipsis,t.dims);for(;e<r;e++)t.begin[e]=0,t.end[e]=0,t.strides[e]=1,t.beginMask|=1<<e,t.endMask|=1<<e,t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[e]=s}else if(1<<s&n.newAxisMask)t.finalShapeGatherIndices.push(nd),t.finalShapeGatherIndicesSparse.push(-1);else{if(e===t.begin.length)throw Error(`Index out of range using input dim ${e}; input has only ${t.dims} dims, ${t.begin.length}.`);n.begin!=null&&(t.begin[e]=n.begin[s]),n.end!=null&&(t.end[e]=n.end[s]),t.strides[e]=n.strides[s],n.beginMask&1<<s&&(t.beginMask|=1<<e),n.endMask&1<<s&&(t.endMask|=1<<e),n.shrinkAxisMask&1<<s?(t.finalShapeGatherIndices.push(O_),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<e):(t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(s)),t.inputShapeGatherIndicesSparse[e]=s,e++}}function Tg(n,t,e,s,r,o){if(r[t])return e>0?o[t]:o[t+1&1];{const i=n<0?s+n:n;return i<o[0]?o[0]:i>o[1]?o[1]:i}}class L_{static sgd(t){return new up(t)}static momentum(t,e,s=!1){return new iy(t,e,s)}static rmsprop(t,e=.9,s=0,r=null,o=!1){return new ay(t,e,s,r,o)}static adam(t=.001,e=.9,s=.999,r=null){return new ry(t,e,s,r)}static adadelta(t=.001,e=.95,s=null){return new ny(t,e,s)}static adamax(t=.002,e=.9,s=.999,r=null,o=0){return new oy(t,e,s,r,o)}static adagrad(t,e=.1){return new sy(t,e)}}const Qr=L_;const P_=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:n=>n();function fy(){return new Promise(n=>P_(()=>n()))}function fp(n,t){const e=n[0].length;n.forEach((r,o)=>{T(r.length===e,()=>`Error in concat${e}D: rank of tensors[${o}] must be the same as the rank of the rest (${e})`)}),T(t>=0&&t<e,()=>`Error in concat${e}D: axis must be between 0 and ${e-1}.`);const s=n[0];n.forEach((r,o)=>{for(let i=0;i<e;i++)T(i===t||r[i]===s[i],()=>`Error in concat${e}D: Shape of tensors[${o}] (${r}) does not match the shape of the rest (${s}) along the non-concatenated axis ${o}.`)})}function ps(n,t){const e=n[0].slice();for(let s=1;s<n.length;s++)e[t]+=n[s][t];return e}var Hn;(function(n){n[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"})(Hn||(Hn={}));function py(n,t,e){let s=new Array;if(e==null&&t==null)return s;if(t==null)for(;s.length<n+e.length;)s.push(-1);else s=t.slice();if(e==null)return s;if(n+e.length!==s.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${n+e.length}, but shape.rank = ${s.length}`);for(let r=1;r<e.length;++r){const o=e[r],i=s[s.length-e.length+r],a=s[i];if(o>=0)if(a>=0){if(a!==o)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${r+n}] = ${o} but shape[${r+n}] = ${a}`)}else s[i]=o}return s}function my(n){const t={FIRST_DIM_SIZE:Hn.FIRST_DIM_SIZE,VALUE_ROWIDS:Hn.VALUE_ROWIDS,ROW_LENGTHS:Hn.ROW_LENGTHS,ROW_SPLITS:Hn.ROW_SPLITS,ROW_LIMITS:Hn.ROW_LIMITS,ROW_STARTS:Hn.ROW_STARTS},e=[];for(const s of n)if(s in t)e.push(t[s]);else break;return e}function gy(n){return n.length===0?0:n[0]===Hn.FIRST_DIM_SIZE?n.length-1:n.length}function xy(n,t){if(n==null||t==null)return;const e=n.length,s=t.length;if(e>=s)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${e} must be less than ragged tensor input flatValues.rank = ${s})`);for(let r=0;r<Math.min(e,s-1);++r){const o=n[r],i=t[r+1];if(o>=0&&i>=0&&o!==1&&o!==i)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${r-n.length}] = ${o} but ragged tensor input.flatValues.shape[${r-n.length}] = ${i}`)}}const pp=30;function Eu(n){return n<=pp?n:Bh(n,Math.floor(Math.sqrt(n)))}function mp(n,t,e){const s=e*(typeof n=="number"?n:n[0]),r=t*(typeof n=="number"?n:n[1]);return[s,r]}function Da(n,t,e,s=!0){let r=[];if(s)r=r.concat(t.slice(0)),r.push(n[0]/e),r=r.concat(n.slice(1));else{r=r.concat(n[0]);const o=t.length;for(let i=0;i<o;++i)r=r.concat([n[i+1]/t[i],t[i]]);r=r.concat(n.slice(o+1))}return r}function _a(n,t,e=!0){const s=[];if(e){s.push(t);for(let r=t+1;r<n;++r)r<=2*t?(s.push(r),s.push(r-(t+1))):s.push(r)}else{const r=[],o=[];for(let i=1;i<n;++i)i>=t*2+1||i%2===1?o.push(i):r.push(i);s.push(...r),s.push(0),s.push(...o)}return s}function Fa(n,t,e,s=!0){const r=[];s?r.push(n[0]/e):r.push(n[0]*e);for(let o=1;o<n.length;++o)o<=t.length?s?r.push(t[o-1]*n[o]):r.push(n[o]/t[o-1]):r.push(n[o]);return r}function gp(n,t){const e=[0];for(let s=0;s<t;++s)e.push(n[s][0]);return e}function xp(n,t,e){const s=n.slice(0,1);for(let r=0;r<e;++r)s.push(n[r+1]-t[r][0]-t[r][1]);return s}const Ru=1.7580993408473768,Au=1.0507009873554805;const bp=.3275911,yp=.254829592,wp=-.284496736,vp=1.421413741,Cp=-1.453152027,$p=1.061405429;function Os(n,t){if(n.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${n.length}, imag: ${t.length}.`);const e=new Float32Array(n.length*2);for(let s=0;s<e.length;s+=2)e[s]=n[s/2],e[s+1]=t[s/2];return e}function by(n){const t=new Float32Array(n.length/2),e=new Float32Array(n.length/2);for(let s=0;s<n.length;s+=2)t[s/2]=n[s],e[s/2]=n[s+1];return{real:t,imag:e}}function yy(n){const t=Math.ceil(n.length/4),e=new Float32Array(t),s=new Float32Array(t);for(let r=0;r<n.length;r+=4)e[Math.floor(r/4)]=n[r],s[Math.floor(r/4)]=n[r+1];return{real:e,imag:s}}function wy(n){const t=Math.floor(n.length/4),e=new Float32Array(t),s=new Float32Array(t);for(let r=2;r<n.length;r+=4)e[Math.floor(r/4)]=n[r],s[Math.floor(r/4)]=n[r+1];return{real:e,imag:s}}function kp(n,t){const e=n[t*2],s=n[t*2+1];return{real:e,imag:s}}function vy(n,t,e,s){n[s*2]=t,n[s*2+1]=e}function Cy(n,t){const e=new Float32Array(n/2),s=new Float32Array(n/2);for(let r=0;r<Math.ceil(n/2);r++){const o=(t?2:-2)*Math.PI*(r/n);e[r]=Math.cos(o),s[r]=Math.sin(o)}return{real:e,imag:s}}function $y(n,t,e){const s=(e?2:-2)*Math.PI*(n/t),r=Math.cos(s),o=Math.sin(s);return{real:r,imag:o}}const uh="->",z_=/->/g,Eg=",",Rg="...";function Ip(n,t){n=n.replace(/\s/g,"");const e=(n.length-n.replace(z_,"").length)/uh.length;if(e<1)throw new Error("Equations without an arrow are not supported.");if(e>1)throw new Error(`Equation must contain exactly one arrow ("${uh}").`);const[s,r]=n.split(uh);T(s.indexOf(Rg)===-1,()=>`The ellipsis notation ("${Rg}") is not supported yet.`);const o=s.split(Eg),i=o.length;if(t!==i)throw new Error(`Expected ${i} input tensors, received ${t}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const a=[];for(let d=0;d<r.length;++d){const f=r[d];if(!o.some(p=>p.indexOf(f)!==-1))throw new Error(`Output subscripts contain the label ${f} not present in the input subscripts.`);a.indexOf(f)===-1&&a.push(f)}for(let d=0;d<s.length;++d){const f=s[d];a.indexOf(f)===-1&&f!==Eg&&a.push(f)}const l=new Array(o.length);for(let d=0;d<i;++d){if(new Set(o[d].split("")).size!==o[d].length)throw new Error(`Found duplicate axes in input component ${o[d]}. Support for duplicate axes in input is not implemented yet.`);l[d]=[];for(let f=0;f<o[d].length;++f)l[d].push(a.indexOf(o[d][f]))}const c=a.length,u=r.length,h=[];for(let d=u;d<c;++d)h.push(d);return{allDims:a,summedDims:h,idDims:l}}function Sp(n,t){let e=new Array(n);e.fill(-1);for(let r=0;r<t.length;++r)e[t[r]]=r;const s=[];for(let r=0;r<n;++r)e[r]===-1&&s.push(r);return e=e.filter(r=>r!==-1),{permutationIndices:e,expandDims:s}}function Np(n,t,e){const s=new Array(n);for(let r=0;r<e.length;++r){const o=e[r].shape;for(let i=0;i<t[r].length;++i)s[t[r][i]]===void 0?s[t[r][i]]=o[i]:T(s[t[r][i]]===o[i],()=>`Expected dimension ${s[t[r][i]]} at axis ${i} of input shaped ${JSON.stringify(o)}, but got dimension ${o[i]}`)}}function Tp(n,t){const e=n,s=[];let r=0;n.length===0&&e.push(-1),r=n.length+1;for(let i=0;i<r;++i)s.push([]);const o=[];for(let i=0;i<e.length;++i){const a=e[i],l=B_(t,a);for(const c of l)o.indexOf(c)===-1&&(s[i].push(c),o.push(c))}return{path:e,steps:s}}function Ep(n){return n.every((t,e)=>t===e)}function B_(n,t){const e=[];for(let s=0;s<n.length;++s)(n[s].length===0||n[s].indexOf(t)!==-1||t===-1)&&e.push(s);return e}function Rp(n,t,e=0){let s=[];if(typeof t=="number")T(n.shape[e]%t===0,()=>"Number of splits must evenly divide the axis."),s=new Array(t).fill(n.shape[e]/t);else{const r=t.reduce((i,a)=>(a===-1&&(i+=1),i),0);T(r<=1,()=>"There should be only one negative value in split array.");const o=t.indexOf(-1);if(o!==-1){const i=t.reduce((a,l)=>l>0?a+l:a);t[o]=n.shape[e]-i}T(n.shape[e]===t.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),s=t}return s}function ky(n){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${n}`}function Iy(n,t){return`indices(${n}, 0) is invalid: ${t} < 0`}function Sy(n,t,e){return`indices(${n}, 0) is invalid: ${t} >= ${e}`}function Ny(n,t){return`only one output dimension may be -1, not both ${n} and ${t}`}function Ty(n,t){return`size ${n} must be non-negative, not ${t}`}function Ey(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function Ry(n,t){const e=Y(n),s=Y(t);return`Input to reshape is a SparseTensor with ${e}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${n} outputShape= ${t}`}function Ay(n,t){const e=Y(n),s=Y(t);return`Input to reshape is a tensor with ${e} dense values, but the requested shape has ${s}. inputShape=${n} outputShape=${t}`}function sd(){return"segment ids must be >= 0"}function Dy(){return"segment ids are not increasing"}function _y(n,t){return`Segment id ${n} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function Fy(n,t,e){return`Bad: indices[${n}] == ${t} out of range [0, ${e})`}function V_(n,t){let e=!1,s;for(n<=pp?(s=n,e=!0):s=Bh(n,Math.floor(Math.sqrt(n)));!e;)s>t||s===n?e=!0:s=Bh(n,s+1);return s}function W_(n,t,e){const s=[],r=n.length;for(let o=0;o<r;o++)o!==t?s.push(n[o]):s.push(e);return s}function Oy(n,t,e,s){const r=t.shape.length,o=n.shape.length;if(s!==0&&(s<-r||s>r))throw new Error(`Expect batchDims in the range of [-${r}, ${r}], but got ${s}`);if(s<0&&(s+=r),s>o)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${o}).`);if(e<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${e}).`);for(let h=0;h<s;++h)if(n.shape[h]!==t.shape[h])throw new Error(`x.shape[${h}]: ${n.shape[h]} should be equal to indices.shape[${h}]: ${t.shape[h]}.`);const i=n.shape[e],a=[];let l=1,c=1,u=1;for(let h=0;h<s;++h)a.push(n.shape[h]),l*=n.shape[h];for(let h=s;h<e;h++)a.push(n.shape[h]),c*=n.shape[h];for(let h=s;h<r;h++)a.push(t.shape[h]);for(let h=e+1;h<o;h++)a.push(n.shape[h]),u*=n.shape[h];return{batchSize:l,sliceSize:u,outerSize:c,dimSize:i,outputShape:a}}function Ms(n){try{return n.map(t=>tr(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function My(n){return n.map(t=>Ys(t))}const U_=Object.freeze(Object.defineProperty({__proto__:null,ERF_A1:yp,ERF_A2:wp,ERF_A3:vp,ERF_A4:Cp,ERF_A5:$p,ERF_P:bp,PARALLELIZE_THRESHOLD:pp,get RowPartitionType(){return Hn},SELU_SCALE:Au,SELU_SCALEALPHA:Ru,applyActivation:rp,assertAndGetBroadcastShape:kt,assertAxesAreInnerMostDims:Le,assertParamsConsistent:fp,assignToTypedArray:vy,axesAreInnerMostDims:Bf,calculateShapes:qr,checkEinsumDimSizes:Np,checkPadOnDimRoundingMode:un,combineLocations:Fb,combineRaggedTensorToTensorShapes:py,complexWithEvenIndex:yy,complexWithOddIndex:wy,computeConv2DInfo:Me,computeConv3DInfo:lr,computeDefaultPad:Ff,computeDilation2DInfo:Na,computeOptimalWindowSize:Eu,computeOutAndReduceShapes:De,computeOutShape:ps,computePool2DInfo:On,computePool3DInfo:Ps,convertConv2DDataFormat:zs,decodeEinsumEquation:Ip,eitherStridesOrDilationsAreOne:Ue,expandShapeToKeepDim:ye,exponent:$y,exponents:Cy,fromStringArrayToUint8:My,fromUint8ToStringArray:Ms,getAxesPermutation:ie,getBroadcastDims:vo,getComplexWithIndex:kp,getEinsumComputePath:Tp,getEinsumPermutation:Sp,getFusedBiasGradient:sp,getFusedDyActivation:np,getImageCenter:mp,getInnerMostAxes:pe,getPermuted:_a,getRaggedRank:gy,getReductionAxes:Se,getReshaped:Da,getReshapedPermuted:Fa,getRowPartitionTypesHelper:my,getSliceBeginCoords:gp,getSliceSize:xp,getSparseFillEmptyRowsIndicesDenseShapeMismatch:ky,getSparseFillEmptyRowsNegativeIndexErrorMessage:Iy,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:Sy,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:Ey,getSparseReshapeInputOutputMismatchErrorMessage:Ay,getSparseReshapeInputOutputMultipleErrorMessage:Ry,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:Ny,getSparseReshapeNegativeOutputDimErrorMessage:Ty,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:Fy,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:sd,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:Dy,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:_y,getUndoAxesPermutation:cr,isIdentityPermutation:Ep,mergeRealAndImagArrays:Os,prepareAndValidate:hp,prepareSplitSize:Rp,shouldFuse:op,splitRealAndImagArrays:by,stridesOrDilationsArePositive:Fr,tupleValuesAreOne:_r,upcastType:mn,validateDefaultValueShape:xy,warn:yn},Symbol.toStringTag,{value:"Module"}));F_();const Ly={kernelName:wc,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>O(n,Aa(ut(e,"float32"),-1))}}};const G_={kernelName:Di,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=te(ut(e,"float32")),r=We(wt(Lt(1),s));return de(bt(n,r))}}}};const H_={kernelName:_i,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=We(wt(te(ut(e,"float32")),1));return bt(n,s)}}}};const q_={kernelName:Ao,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=kt(e.shape,s.shape);return{a:()=>{let a=n;const l=Se(e.shape,r);return l.length>0&&(a=gt(a,l)),V(a,e.shape)},b:()=>{let a=n;const l=Se(s.shape,r);return l.length>0&&(a=gt(a,l)),V(a,s.shape)}}}};const X_={kernelName:Ud,saveAllInputs:!0,gradFunc:(n,t)=>{const e={};return t.forEach((s,r)=>{e[r]=()=>n.clone()}),e}};const K_={kernelName:vc,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>Dt(e)}}};const j_={kernelName:Cc,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>Dt(e)}}};const Y_={kernelName:Fi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>bt(n,We(wt(Lt(1),te(ut(e,"float32")))))}}};const Z_={kernelName:Oi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=We(et(Lt(1),te(ut(e,"float32"))));return bt(n,s)}}}};const J_={kernelName:Pi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=kt(e.shape,s.shape);return{a:()=>{const a=et(te(e),te(s));let l=O(n,bt(s,a));const c=Se(e.shape,r);return c.length>0&&(l=gt(l,c)),V(l,e.shape)},b:()=>{const a=et(te(e),te(s));let l=de(O(n,bt(e,a)));const c=Se(s.shape,r);return c.length>0&&(l=gt(l,c)),V(l,s.shape)}}}};const Q_={kernelName:Mi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>bt(n,et(te(ut(e,"float32")),1))}}};const tF={kernelName:Li,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>bt(n,wt(Lt(1),te(ut(e,"float32"))))}}};function eF(n,t,e,s,r,o){const i=D(n,"dy","avgPool3dGrad"),a=D(t,"input","avgPool3dGrad");let l=i,c=a,u=!1;a.rank===4&&(u=!0,l=V(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]]),c=V(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),T(l.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${l.rank}.`),T(c.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${c.rank}.`),un("avgPool3dGrad",r,o);const h={dy:l,input:c},d={filterSize:e,strides:s,pad:r,dimRoundingMode:o},f=L.runKernel(Xd,h,d);return u?V(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const nF=W({avgPool3dGrad_:eF});const sF={kernelName:kc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:r,strides:o,pad:i,dimRoundingMode:a}=e;return{x:()=>nF(n,s,r,o,i,a)}}};function rF(n,t,e,s,r){const o=D(n,"dy","avgPoolGrad"),i=D(t,"input","avgPoolGrad");T(i.rank===o.rank,()=>`Rank of input (${i.rank}) does not match rank of dy (${o.rank})`);let a=i,l=o,c=!1;i.rank===3&&(c=!0,a=V(i,[1,i.shape[0],i.shape[1],i.shape[2]]),l=V(o,[1,o.shape[0],o.shape[1],o.shape[2]])),T(l.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${l.rank}.`),T(a.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${a.rank}.`);const u={dy:l,input:a},h={filterSize:e,strides:s,pad:r},d=L.runKernel(qd,u,h);return c?V(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const oF=W({avgPoolGrad_:rF});const iF={kernelName:$c,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:r,strides:o,pad:i}=e;return{x:()=>oF(n,s,r,o,i)}}};const aF={kernelName:Ic,inputsToSave:["a","b"],gradFunc:(n,t,e)=>{const[s,r]=t,{transposeA:o,transposeB:i}=e;return!o&&!i?{a:()=>Ft(n,r,!1,!0),b:()=>Ft(s,n,!0,!1)}:!o&&i?{a:()=>Ft(n,r,!1,!1),b:()=>Ft(n,s,!0,!1)}:o&&!i?{a:()=>Ft(r,n,!1,!0),b:()=>Ft(s,n,!1,!1)}:{a:()=>Ft(r,n,!0,!0),b:()=>Ft(n,s,!0,!0)}}};const lF={kernelName:Sc,gradFunc:(n,t,e)=>{const{blockShape:s,crops:r}=e;return{x:()=>jf(n,s,r)}}};const cF={kernelName:wN,gradFunc:(n,t,e)=>{const s=e,r=s.inputShape,o=s.shape,i=Array.from(o);for(let l=r.length-1;l>=0;l--)if(r[l]===o[l])i[l]=1;else if(r[l]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${o}].`);const a=[];for(let l=0;l<i.length;l++)i[l]>1&&a.push(l);return{x:()=>gt(n,a,!0)}}};const uF={kernelName:zi,gradFunc:n=>({x:()=>n.clone()})};const hF={kernelName:Bi,gradFunc:n=>({x:()=>Dt(n)})};const dF={kernelName:Vi,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{clipValueMin:r,clipValueMax:o}=e;return{x:()=>Qe(_s(Gr(s,r),Fo(s,o)),n,Dt(n))}}};const fF={kernelName:Nc,inputsToSave:["x"],gradFunc:Ly.gradFunc};const pF={kernelName:Tc,saveAllInputs:!0,gradFunc:(n,t,e)=>{const s=t.map(l=>l.shape),{axis:r}=e,o=Tt(r,t[0].shape)[0],i=s.map(l=>l[o]);return vn(n,i,o).map(l=>()=>l)}};const mF={kernelName:Ec,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,r]=t,{dilations:o,strides:i,pad:a,dataFormat:l}=e;return T(_r(o),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`),{x:()=>Lf(s.shape,n,r,i,a,l),filter:()=>ep(s,n,r.shape,i,a,l)}}};const gF={kernelName:Rc,inputsToSave:["dy","filter"],gradFunc:(n,t,e)=>{const[s,r]=t,{strides:o,pad:i,dataFormat:a,dimRoundingMode:l}=e;return{dy:()=>Or(n,r,o,i,a,1,l),filter:()=>ep(n,s,r.shape,o,i,a,l)}}};function xF(n,t,e,s,r){let o=n;n.rank===4&&(o=V(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]]));let i=t;i.rank===4&&(i=V(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),T(o.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${o.shape}.`),T(i.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${i.shape}.`),T(e.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${e}.`),T(o.shape[4]===e[3],()=>`Error in conv3dDerFilter: depth of input ${o.shape[4]}) must match input depth in filter (${e[3]}.`),T(i.shape[4]===e[4],()=>`Error in conv3dDerFilter: depth of dy (${i.shape[4]}) must match output depth for filter (${e[4]}).`);const a={x:o,dy:i},l={strides:s,pad:r,filterShape:e};return L.runKernel(Jd,a,l)}const bF=W({conv3DBackpropFilter_:xF});const yF={kernelName:Ac,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:r,pad:o}=e;T(_r(s),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);const[i,a]=t;return{x:()=>Rb(i.shape,n,a,r,o),filter:()=>bF(i,n,a.shape,r,o)}}};const wF={kernelName:Wi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>O(de(Xb(ut(e,"float32"))),n)}}};const vF={kernelName:Ui,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>O(Kb(ut(e,"float32")),n)}}};const CF={kernelName:Dc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:r,exclusive:o,reverse:i}=e;return{x:()=>{const a=ie([r],s.rank);let l=Db(n,r,o,!i);return a!=null&&(l=At(l,a)),l}}}};const $F={kernelName:_c,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:r,pad:o,dimRoundingMode:i}=e,a=s??[1,1];T(_r(a),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[l,c]=t;return T(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${l.rank}.`),T(c.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${c.rank}.`),T(l.shape[3]===c.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${l.shape[3]}) must match the inChannels dimension in filter ${c.shape[2]}.`),T(Ue(r,a),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${r} and dilations '${a}'.`),un("depthwiseConv2d",o,i),{x:()=>VD(l.shape,n,c,r,o,a,i),filter:()=>zD(l,n,c.shape,r,o,a,i)}}};const kF={kernelName:Fc,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,r]=t,o={x:s,filter:r,dy:n},i={x:s,filter:r,dy:n};return{x:()=>L.runKernel(Vh,o,e),filter:()=>L.runKernel(Wh,i,e)}}};const IF={kernelName:Hi,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t,s={dy:n,y:e};return{x:()=>L.runKernel(cf,s)}}};const SF={kernelName:qi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=O(bs(de(te(e))),2/Math.sqrt(Math.PI));return{x:()=>O(n,s)}}};const NF={kernelName:Xi,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>O(n,e)}}};const TF={kernelName:Mc,inputsToSave:["input"],gradFunc:(n,t)=>{const[e]=t;return{input:()=>V(n,e.shape)}}};const EF={kernelName:Ki,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>O(n,bs(e))}}};const RF={kernelName:ji,gradFunc:n=>({x:()=>Dt(n)})};const AF={kernelName:Yi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=kt(e.shape,s.shape);return{a:()=>{const a=bt(n,ut(s,"float32")),l=Se(e.shape,r);return l.length>0?V(gt(a,l),e.shape):a},b:()=>{let a=O(n,ut(e,"float32"));const l=Se(s.shape,r);l.length>0&&(a=V(gt(a,l),s.shape));const c=te(s);return de(bt(a,ut(c,"float32")))}}}};const DF={kernelName:Lc,inputsToSave:["x","mean","variance","scale"],gradFunc:(n,t,e)=>{const{varianceEpsilon:s}=e,[r,o,i,a]=t,l=a??Lt(1),c=Se(o.shape,r.shape),u=[];if(o.rank===1){for(let y=0;y<r.shape.length-1;++y)u.push(r.shape[y]);u.push(1)}const h=wt(r,o),d=O(n,l),f=Gb(et(i,Lt(s))),p=O(O(O(f,f),f),Lt(-.5));return{x:()=>o.rank===1?V(O(O(n,Xn(V(f,[1,1,1,o.shape[0]]),u)),l),r.shape):V(O(O(n,f),l),r.shape),mean:()=>{let y=O(O(f,Lt(-1)),d);return o.rank===1&&(y=gt(y,c)),V(y,o.shape)},variance:()=>{let y=O(O(p,h),d);return o.rank===1&&(y=gt(y,c)),V(y,o.shape)},scale:()=>{const y=O(h,f);let v=O(n,y);return o.rank===1&&(v=gt(v,c)),V(v,o.shape)},offset:()=>{let y=n;return o.rank===1&&(y=gt(y,c)),V(y,o.shape)}}}};const _F={kernelName:Pc,inputsToSave:["x","indices"],gradFunc:(n,t,e)=>{const[s,r]=t,{axis:o,batchDims:i}=e,a=Tt(o,s.shape)[0],l=(c,u,h)=>()=>{const d=c.shape,f=u.size,p=d.slice(0,a),m=p.length,g=d.slice(o,d.length).slice(1),x=g.length,b=Ag(0,m),w=Ag(m+1,m+1+x),y=Dg([p,[f],g]),v=V(h,y),$=V(u,[f]),N=Dg([[m],b,w]),S=At(v,N);let I=Jb(S,$,c.shape[a]);const k=cr(N);return I=At(I,k),I};if(i===1){const c=s.shape[0],u=s.split(c,0);return{x:()=>Fs(u.map((f,p)=>l(f,r.slice(p,1),n.slice(p,1))())).reshape(s.shape),indices:()=>r}}else return{x:l(s,r,n),indices:()=>r}}};function Ag(n,t){const e=[];for(let s=n;s<t;++s)e.push(s);return e}function Dg(n){const t=[];for(let e=0;e<n.length;++e)for(let s=0;s<n[e].length;++s)t.push(n[e][s]);return t}const FF={kernelName:Zi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>Dt(e),b:()=>Dt(s)}}};const OF={kernelName:Ji,gradFunc:n=>({x:()=>ut(n,"float32")})};const MF={kernelName:Qi,gradFunc:n=>({x:()=>Dt(n)})};const LF={kernelName:ta,gradFunc:n=>({x:()=>Dt(n)})};const PF={kernelName:ea,gradFunc:n=>({x:()=>Dt(n)})};const zF={kernelName:Bc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{alpha:r}=e,o=kn(s,0);return{x:()=>Qe(o,n,O(n,r))}}};const BF={kernelName:sa,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>bt(n,et(e,1))}}};const VF={kernelName:na,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>bt(n,ut(e,"float32"))}}};const WF={kernelName:CN,inputsToSave:[],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{axis:r}=e;return{logits:()=>{const i=bs(s);return wt(n,O(gt(n,r,!0),i))}}}};function UF(n,t,e,s=5,r=1,o=1,i=.5){const a={x:n,y:t,dy:e},l={depthRadius:s,bias:r,alpha:o,beta:i};return L.runKernel(mf,a,l)}const GF=W({localResponseNormalizationBackprop_:UF});const HF={kernelName:qc,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,r]=t,{depthRadius:o,bias:i,alpha:a,beta:l}=e;return{x:()=>GF(s,r,n,o,i,a,l)}}};function Py(n,t,e,s){return t.rank<e.rank&&(t=V(t,ye(t.shape,s))),n.rank<e.rank&&(n=V(n,ye(n.shape,s))),{x:()=>O(n,ut(xs(e,t),n.dtype))}}const _g={kernelName:Xc,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{reductionIndices:r}=s,o=t[0],i=t[1],a=Tt(r,o.shape),l=Py(n,i,o,a);return{x:()=>l.x()}}};const qF={kernelName:ra,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>O(n,ut(Gr(e,s),"float32")),b:()=>O(n,ut(Kl(e,s),"float32"))}}};function XF(n,t,e,s,r,o,i){const a=D(n,"dy","maxPool3dGrad"),l=D(t,"input","maxPool3dGrad"),c=D(e,"output","maxPool3dGrad");let u=a,h=l,d=c,f=!1;l.rank===4&&(f=!0,u=V(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),h=V(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),d=V(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),T(u.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${u.rank}.`),T(h.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${h.rank}.`),T(d.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${d.rank}.`),un("maxPool3dGrad",o,i);const p={dy:u,input:h,output:d},m={filterSize:s,strides:r,pad:o,dimRoundingMode:i},g=L.runKernel(xf,p,m);return f?V(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}const KF=W({maxPool3dGrad_:XF});const jF={kernelName:jc,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,r]=t,{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=e;return{x:()=>KF(n,s,r,o,i,a,l)}}};function YF(n,t,e,s,r,o,i){const a=D(n,"dy","maxPoolGrad"),l=D(t,"input","maxPoolGrad"),c=D(e,"output","maxPoolGrad");T(l.rank===a.rank,()=>`Rank of input (${l.rank}) does not match rank of dy (${a.rank})`),T(a.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${a.rank}.`),T(l.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${l.rank}.`),un("maxPoolGrad",o,i);const u={dy:a,input:l,output:c},h={filterSize:s,strides:r,pad:o,dimRoundingMode:i};return L.runKernel(gf,u,h)}const ZF=W({maxPoolGrad_:YF});const JF={kernelName:Kc,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,r]=t,{filterSize:o,strides:i,pad:a}=e;return{x:()=>ZF(n,s,r,o,i,a)}}};const QF={kernelName:Yc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:r}=e,o=Tt(r,s.shape),a=De(s.shape,o)[1],l=Y(a);return{x:()=>{const u=s.shape.slice();o.forEach(f=>{u[f]=1});const h=V(n,u);return bt(O(h,Bs(s.shape,"float32")),l)}}}};const tO={kernelName:Zc,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{axis:r}=s,[o,i]=t,a=Tt(r,o.shape),l=Py(n,i,o,a);return{x:()=>l.x()}}};const eO={kernelName:oa,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>O(n,ut(Fo(e,s),"float32")),b:()=>O(n,ut(kn(e,s),"float32"))}}};const nO={kernelName:Jc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:r}=e,o=r.map(i=>i[0]);return{x:()=>Qt(n,o,s.shape)}}};const sO={kernelName:ia,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=kt(e.shape,s.shape);return{a:()=>{const a=Se(e.shape,r);return a.length>0?V(gt(n,a),e.shape):n},b:()=>{const a=O(n,de(Tu(bt(e,s)))),l=Se(s.shape,r);return l.length>0?V(gt(a,l),s.shape):a}}}};const rO={kernelName:aa,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=kt(e.shape,s.shape);return{a:()=>{const a=O(n,ut(s,"float32")),l=Se(e.shape,r);return l.length>0?V(gt(a,l),e.shape):a},b:()=>{const a=O(n,ut(e,"float32")),l=Se(s.shape,r);return l.length>0?V(gt(a,l),s.shape):a}}}};const oO={kernelName:Qc,gradFunc:n=>({x:()=>de(n)})};const iO={kernelName:nu,inputsToSave:["indices"],gradFunc:(n,t)=>{const e=t[0];return{indices:()=>Re(e.shape,"float32")}}};const aO={kernelName:eu,gradFunc:n=>({x:()=>Dt(n)})};const lO={kernelName:su,saveAllInputs:!0,gradFunc:(n,t,e)=>{const{axis:s}=e;return Pr(n,s).map(o=>()=>o)}};const Fg={kernelName:ru,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:r}=e,o=r.map(i=>i[0]);return{x:()=>Qt(n,o,s.shape)}}};const cO={kernelName:la,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(n,t)=>{const[e,s,r]=t,o=e,i=s,a=kt(o.shape,i.shape);return{a:()=>{const u=ut(i,"float32");let h=O(n,O(u,Mr(o,wt(u,Lt(1)))));const d=Se(o.shape,a);return d.length>0&&(h=gt(h,d)),V(h,o.shape)},b:()=>{const u=kn(o,0),h=Qe(u,ys(o),Dt(o));let d=O(n,O(r,h));const f=Se(i.shape,a);return f.length>0&&(d=gt(d,f)),V(d,i.shape)}}}};const uO={kernelName:ou,inputsToSave:["x","alpha"],gradFunc:(n,t)=>{const[e,s]=t,r=kn(e,0);return{x:()=>Qe(r,n,O(n,s)),alpha:()=>{let o=Qe(r,Dt(n),O(n,e));const i=Se(s.shape,n.shape);return i.length>0&&(o=gt(o,i)),V(o,s.shape)}}}};function hO(n,t,e){const s=n.shape.slice();s[e]=1;const r=V(t,s),o=td(n,e,!0,!1),i=td(n,e,!0,!0),a=O(o,i);return O(r,a)}function dO(n,t,e){const s=n.shape.length,r=s-e.length,o=ie(e,s);let i=n;o!=null&&(i=At(n,o));const a=i.shape.slice(),c=a.splice(s-e.length,e.length).reduce((d,f)=>d*f,1);a.push(c);const u=i.reshape(a);let h=hO(u,t,r);if(h=h.reshape(i.shape),o!=null){const d=cr(o);h=At(h,d)}return h}const fO={kernelName:iu,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:r}=e;let o=[];return r==null?o=s.shape.map((i,a)=>a):typeof r=="number"?o=[r]:o=r,{x:()=>dO(s,n,o)}}};const pO={kernelName:Gi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=kt(e.shape,s.shape);return{a:()=>{const a=bt(n,ut(s,"float32")),l=Se(e.shape,r);return l.length>0?V(gt(a,l),e.shape):a},b:()=>{let a=O(n,ut(e,"float32"));const l=Se(s.shape,r);l.length>0&&(a=V(gt(a,l),s.shape));const c=te(s);return de(bt(a,ut(c,"float32")))}}}};const mO={kernelName:ca,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>bt(n,de(te(e)))}}};const gO={kernelName:ha,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=O(Fo(e,6),Aa(e));return{x:()=>O(n,ut(s,"float32"))}}};const xO={kernelName:ua,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>O(n,ut(Aa(e),"float32"))}}};const bO={kernelName:au,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>V(n,e.shape)}}};const yO={kernelName:cu,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,r={dy:n,images:s};return{images:()=>L.runKernel(kf,r,e)}}};const wO={kernelName:lu,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,r={dy:n,images:s};return{images:()=>L.runKernel($f,r,e)}}};const vO={kernelName:uu,gradFunc:(n,t,e)=>{const{dims:s}=e,r=Tt(s,n.shape);return{x:()=>Lr(n,r)}}};const CO={kernelName:da,gradFunc:n=>({x:()=>Dt(n)})};const $O={kernelName:fa,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>de(bt(n,O(Mr(e,1.5),2)))}}};const kO={kernelName:hu,inputsToSave:["condition"],gradFunc:(n,t)=>{const[e]=t;return{condition:()=>ut(Dt(e),"float32"),t:()=>O(n,ut(e,n.dtype)),e:()=>O(n,ut(Hf(e),n.dtype))}}};const IO={kernelName:pa,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=kn(e,Lt(0)),r=Lt(Ru),o=Lt(Au),i=O(n,o),a=O(O(n,r),bs(ut(e,"float32")));return Qe(s,i,a)}}}};const SO={kernelName:ba,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>O(n,O(e,wt(Lt(1),e)))}}};const NO={kernelName:xa,gradFunc:n=>({x:()=>Dt(n)})};const TO={kernelName:ma,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>O(Pf(ut(e,"float32")),n)}}};const EO={kernelName:ga,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>O(Ab(ut(e,"float32")),n)}}};const RO={kernelName:du,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{begin:r,size:o}=e,i=s.shape,[a,l]=dp(s,r,o),c=[];for(let u=0;u<n.rank;u++)c.push([a[u],i[u]-a[u]-l[u]]);return{x:()=>Kf(n,c)}}};const AO={kernelName:gu,outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{dim:r}=e,o=!0,i=O(n,s);return{logits:()=>wt(i,O(gt(i,[r],o),s))}}};const DO={kernelName:ya,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>O(n,_o(e))}}};const Og={kernelName:pu,gradFunc:(n,t,e)=>{const{blockShape:s,paddings:r}=e;return{x:()=>Mf(n,s,r)}}};const Mg={kernelName:mu,gradFunc:(n,t,e)=>{const{axis:s}=e;return{x:()=>an(n,s)}}};const _O={kernelName:wa,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>bt(n,O(We(ut(e,"float32")),2))}}};const FO={kernelName:If,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>O(n,O(ut(e,"float32"),2))}}};const OO={kernelName:va,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=Lt(2);return{a:()=>O(n,O(r,wt(e,s))),b:()=>O(n,O(r,wt(s,e)))}}};const MO={kernelName:Sa,gradFunc:n=>({x:()=>Dt(n)})};const LO={kernelName:Ca,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=kt(e.shape,s.shape);return{a:()=>{let a=n;const l=Se(e.shape,r);return l.length>0&&(a=gt(a,l)),V(a,e.shape)},b:()=>{let a=n;const l=Se(s.shape,r);return l.length>0&&(a=gt(a,l)),V(de(a),s.shape)}}}};const PO={kernelName:fu,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,r=s.shape.slice(),{axis:o}=e;Tt(o,s.shape).forEach(c=>{r[c]=1});const a=V(n,r),l=O(a,Bs(s.shape,"float32"));return{x:()=>l}}};const zO={kernelName:$a,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>bt(n,te(Pf(e)))}}};const BO={kernelName:ka,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>O(wt(Lt(1),te(e)),n)}}};const VO={kernelName:Ia,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{reps:r}=e;return{x:()=>{let i=Dt(s);if(s.rank===1)for(let a=0;a<r[0];++a)i=et(i,Qt(n,[a*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)i=et(i,Qt(n,[a*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)for(let c=0;c<r[2];++c)i=et(i,Qt(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else if(s.rank===4)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)for(let c=0;c<r[2];++c)for(let u=0;u<r[3];++u)i=et(i,Qt(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2],u*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${s.rank} tensors yet.`);return i}}}};const WO={kernelName:uo,gradFunc:(n,t,e)=>{const s=e,{perm:r}=s,o=cr(r);return{x:()=>At(n,o)}}};const UO={kernelName:xu,gradFunc:(n,t,e)=>{const s=e,{axis:r}=s;return{value:()=>Fs(n,r)}}};const GO={kernelName:bu,inputsToSave:["segmentIds"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>HO(n,e)}}};function HO(n,t){const e=ur(t,Dt(t)),s=Wf(n,e);let r=Gr(t,Lt(0,"int32"));const o=s.rank-r.rank;for(let a=0;a<o;++a)r=rn(r,a+1);r=_s(r,Bs(s.shape,"bool"));const i=Dt(s);return Qe(r,s,i)}const qO={kernelName:yu,gradFunc:n=>({x:()=>Dt(n)})};const XO=[Ly,G_,H_,q_,X_,K_,j_,Y_,Z_,J_,Q_,tF,sF,iF,aF,lF,cF,uF,hF,dF,fF,pF,gF,mF,yF,wF,vF,CF,$F,kF,pO,IF,SF,NF,TF,EF,AF,RF,DF,_F,FF,OF,MF,LF,PF,zF,BF,VF,WF,HF,_g,_g,qF,jF,JF,QF,tO,eO,nO,sO,rO,oO,iO,aO,lO,Fg,Fg,cO,uO,fO,mO,gO,xO,bO,yO,wO,vO,CO,$O,kO,IO,SO,NO,TO,EO,RO,AO,DO,Og,Og,Mg,Mg,_O,OO,FO,MO,LO,PO,zO,BO,VO,WO,UO,GO,qO];for(const n of XO)kN(n);K().prototype.abs=function(){return this.throwIfDisposed(),Ye(this)};K().prototype.acos=function(){return this.throwIfDisposed(),TT(this)};K().prototype.acosh=function(){return this.throwIfDisposed(),RT(this)};K().prototype.add=function(n){return this.throwIfDisposed(),et(this,n)};K().prototype.all=function(n,t){return this.throwIfDisposed(),Nb(this,n,t)};K().prototype.any=function(n,t){return this.throwIfDisposed(),Jh(this,n,t)};K().prototype.argMax=function(n){return this.throwIfDisposed(),mi(this,n)};K().prototype.argMin=function(n){return this.throwIfDisposed(),OT(this,n)};K().prototype.asScalar=function(){return this.throwIfDisposed(),T(this.size===1,()=>"The array must have only 1 element."),V(this,[])};K().prototype.asType=function(n){return this.throwIfDisposed(),ut(this,n)};K().prototype.as1D=function(){return this.throwIfDisposed(),V(this,[this.size])};K().prototype.as2D=function(n,t){return this.throwIfDisposed(),V(this,[n,t])};K().prototype.as3D=function(n,t,e){return this.throwIfDisposed(),V(this,[n,t,e])};K().prototype.as4D=function(n,t,e,s){return this.throwIfDisposed(),V(this,[n,t,e,s])};K().prototype.as5D=function(n,t,e,s,r){return this.throwIfDisposed(),V(this,[n,t,e,s,r])};K().prototype.asin=function(){return this.throwIfDisposed(),LT(this)};K().prototype.asinh=function(){return this.throwIfDisposed(),zT(this)};K().prototype.atan=function(){return this.throwIfDisposed(),VT(this)};K().prototype.atan2=function(n){return this.throwIfDisposed(),UT(this,n)};K().prototype.atanh=function(){return this.throwIfDisposed(),HT(this)};K().prototype.avgPool=function(n,t,e,s){return this.throwIfDisposed(),Of(this,n,t,e,s)};K().prototype.batchToSpaceND=function(n,t){return this.throwIfDisposed(),Mf(this,n,t)};K().prototype.batchNorm=function(n,t,e,s,r){return this.throwIfDisposed(),ku(this,n,t,e,s,r)};K().prototype.broadcastTo=function(n){return this.throwIfDisposed(),li(this,n)};K().prototype.cast=function(n){return this.throwIfDisposed(),ut(this,n)};K().prototype.ceil=function(){return this.throwIfDisposed(),bE(this)};K().prototype.clipByValue=function(n,t){return this.throwIfDisposed(),$n(this,n,t)};K().prototype.concat=function(n,t){return this.throwIfDisposed(),n instanceof ve&&(n=[n]),an([this,...n],t)};K().prototype.conv1d=function(n,t,e,s,r,o){return this.throwIfDisposed(),Tb(this,n,t,e,s,r,o)};K().prototype.conv2dTranspose=function(n,t,e,s,r){return this.throwIfDisposed(),Eb(this,n,t,e,s,r)};K().prototype.conv2d=function(n,t,e,s,r,o){return this.throwIfDisposed(),Or(this,n,t,e,s,r,o)};K().prototype.cos=function(){return this.throwIfDisposed(),Pf(this)};K().prototype.cosh=function(){return this.throwIfDisposed(),Ab(this)};K().prototype.cumprod=function(n,t,e){return this.throwIfDisposed(),td(this,n,t,e)};K().prototype.cumsum=function(n,t,e){return this.throwIfDisposed(),Db(this,n,t,e)};K().prototype.depthToSpace=function(n,t){return this.throwIfDisposed(),UE(this,n,t)};K().prototype.depthwiseConv2d=function(n,t,e,s,r,o){return this.throwIfDisposed(),zf(this,n,t,e,s,r,o)};K().prototype.dilation2d=function(n,t,e,s,r){return this.throwIfDisposed(),KE(this,n,t,e,s,r)};K().prototype.divNoNan=function(n){return this.throwIfDisposed(),QE(this,n)};K().prototype.div=function(n){return this.throwIfDisposed(),bt(this,n)};K().prototype.dot=function(n){return this.throwIfDisposed(),eR(this,n)};K().prototype.elu=function(){return this.throwIfDisposed(),Su(this)};K().prototype.equal=function(n){return this.throwIfDisposed(),xs(this,n)};K().prototype.erf=function(){return this.throwIfDisposed(),_b(this)};K().prototype.euclideanNorm=function(n,t){return this.throwIfDisposed(),fR(this,n,t)};K().prototype.exp=function(){return this.throwIfDisposed(),bs(this)};K().prototype.expandDims=function(n){return this.throwIfDisposed(),rn(this,n)};K().prototype.expm1=function(){return this.throwIfDisposed(),xR(this)};K().prototype.fft=function(){return this.throwIfDisposed(),Yb(this)};K().prototype.flatten=function(){return this.throwIfDisposed(),V(this,[this.size])};K().prototype.floor=function(){return this.throwIfDisposed(),Tu(this)};K().prototype.floorDiv=function(n){return this.throwIfDisposed(),Sb(this,n)};K().prototype.gather=function(n,t,e){return this.throwIfDisposed(),Wf(this,n,t,e)};K().prototype.greaterEqual=function(n){return this.throwIfDisposed(),Gr(this,n)};K().prototype.greater=function(n){return this.throwIfDisposed(),kn(this,n)};K().prototype.ifft=function(){return this.throwIfDisposed(),ed(this)};K().prototype.irfft=function(){return this.throwIfDisposed(),uD(this)};K().prototype.isFinite=function(){return this.throwIfDisposed(),SR(this)};K().prototype.isInf=function(){return this.throwIfDisposed(),TR(this)};K().prototype.isNaN=function(){return this.throwIfDisposed(),RR(this)};K().prototype.leakyRelu=function(n){return this.throwIfDisposed(),Gf(this,n)};K().prototype.lessEqual=function(n){return this.throwIfDisposed(),Fo(this,n)};K().prototype.less=function(n){return this.throwIfDisposed(),Kl(this,n)};K().prototype.localResponseNormalization=function(n,t,e,s){return this.throwIfDisposed(),OR(this,n,t,e,s)};K().prototype.logSigmoid=function(){return this.throwIfDisposed(),WR(this)};K().prototype.logSoftmax=function(n){return this.throwIfDisposed(),Lb(this,n)};K().prototype.logSumExp=function(n,t){return this.throwIfDisposed(),Pb(this,n,t)};K().prototype.log=function(){return this.throwIfDisposed(),ys(this)};K().prototype.log1p=function(){return this.throwIfDisposed(),Mb(this)};K().prototype.logicalAnd=function(n){return this.throwIfDisposed(),_s(this,n)};K().prototype.logicalNot=function(){return this.throwIfDisposed(),Hf(this)};K().prototype.logicalOr=function(n){return this.throwIfDisposed(),zb(this,n)};K().prototype.logicalXor=function(n){return this.throwIfDisposed(),YR(this,n)};K().prototype.matMul=function(n,t,e){return this.throwIfDisposed(),Ft(this,n,t,e)};K().prototype.maxPool=function(n,t,e,s){return this.throwIfDisposed(),qf(this,n,t,e,s)};K().prototype.max=function(n,t){return this.throwIfDisposed(),Yn(this,n,t)};K().prototype.maximum=function(n){return this.throwIfDisposed(),ur(this,n)};K().prototype.mean=function(n,t){return this.throwIfDisposed(),be(this,n,t)};K().prototype.min=function(n,t){return this.throwIfDisposed(),Xl(this,n,t)};K().prototype.minimum=function(n){return this.throwIfDisposed(),bi(this,n)};K().prototype.mirrorPad=function(n,t){return this.throwIfDisposed(),rA(this,n,t)};K().prototype.mod=function(n){return this.throwIfDisposed(),iA(this,n)};K().prototype.mul=function(n){return this.throwIfDisposed(),O(this,n)};K().prototype.neg=function(){return this.throwIfDisposed(),de(this)};K().prototype.norm=function(n,t,e){return this.throwIfDisposed(),Nu(this,n,t,e)};K().prototype.notEqual=function(n){return this.throwIfDisposed(),jl(this,n)};K().prototype.oneHot=function(n,t=1,e=0){return this.throwIfDisposed(),Bb(this,n,t,e)};K().prototype.onesLike=function(){return this.throwIfDisposed(),Fn(this)};K().prototype.pad=function(n,t){return this.throwIfDisposed(),Kf(this,n,t)};K().prototype.pool=function(n,t,e,s,r,o){return this.throwIfDisposed(),gA(this,n,t,e,s,r,o)};K().prototype.pow=function(n){return this.throwIfDisposed(),Mr(this,n)};K().prototype.prelu=function(n){return this.throwIfDisposed(),Yf(this,n)};K().prototype.prod=function(n,t){return this.throwIfDisposed(),yA(this,n,t)};K().prototype.reciprocal=function(){return this.throwIfDisposed(),GA(this)};K().prototype.relu=function(){return this.throwIfDisposed(),Hr(this)};K().prototype.relu6=function(){return this.throwIfDisposed(),Wb(this)};K().prototype.reshapeAs=function(n){return this.throwIfDisposed(),V(this,n.shape)};K().prototype.reshape=function(n){return this.throwIfDisposed(),V(this,n)};K().prototype.resizeBilinear=function(n,t,e){return this.throwIfDisposed(),ty(this,n,t,e)};K().prototype.resizeNearestNeighbor=function(n,t,e){return this.throwIfDisposed(),ey(this,n,t,e)};K().prototype.reverse=function(n){return this.throwIfDisposed(),Lr(this,n)};K().prototype.rfft=function(){return this.throwIfDisposed(),fD(this)};K().prototype.round=function(){return this.throwIfDisposed(),Ub(this)};K().prototype.rsqrt=function(){return this.throwIfDisposed(),Gb(this)};K().prototype.selu=function(){return this.throwIfDisposed(),Hb(this)};K().prototype.separableConv2d=function(n,t,e,s,r,o){return this.throwIfDisposed(),qb(this,n,t,e,s,r,o)};K().prototype.sigmoid=function(){return this.throwIfDisposed(),_o(this)};K().prototype.sign=function(){return this.throwIfDisposed(),QA(this)};K().prototype.sin=function(){return this.throwIfDisposed(),Xb(this)};K().prototype.sinh=function(){return this.throwIfDisposed(),Kb(this)};K().prototype.slice=function(n,t){return this.throwIfDisposed(),Qt(this,n,t)};K().prototype.softmax=function(n){return this.throwIfDisposed(),tp(this,n)};K().prototype.softplus=function(){return this.throwIfDisposed(),Ta(this)};K().prototype.spaceToBatchND=function(n,t){return this.throwIfDisposed(),jf(this,n,t)};K().prototype.split=function(n,t){return this.throwIfDisposed(),vn(this,n,t)};K().prototype.sqrt=function(){return this.throwIfDisposed(),We(this)};K().prototype.square=function(){return this.throwIfDisposed(),te(this)};K().prototype.squaredDifference=function(n){return this.throwIfDisposed(),mD(this,n)};K().prototype.squeeze=function(n){return this.throwIfDisposed(),Ra(this,n)};K().prototype.stack=function(n,t){this.throwIfDisposed();const e=n instanceof ve?[this,n]:[this,...n];return Fs(e,t)};K().prototype.step=function(n){return this.throwIfDisposed(),Aa(this,n)};K().prototype.stridedSlice=function(n,t,e,s,r,o,i,a){return this.throwIfDisposed(),wD(this,n,t,e,s,r,o,i,a)};K().prototype.sub=function(n){return this.throwIfDisposed(),wt(this,n)};K().prototype.sum=function(n,t){return this.throwIfDisposed(),gt(this,n,t)};K().prototype.tan=function(){return this.throwIfDisposed(),CD(this)};K().prototype.tanh=function(){return this.throwIfDisposed(),$u(this)};K().prototype.tile=function(n){return this.throwIfDisposed(),Xn(this,n)};K().prototype.toBool=function(){return this.throwIfDisposed(),ut(this,"bool")};K().prototype.toFloat=function(){return this.throwIfDisposed(),ut(this,"float32")};K().prototype.toInt=function(){return this.throwIfDisposed(),ut(this,"int32")};K().prototype.topk=function(n,t){return this.throwIfDisposed(),kD(this,n,t)};K().prototype.transpose=function(n){return this.throwIfDisposed(),At(this,n)};K().prototype.unique=function(n){return this.throwIfDisposed(),ND(this,n)};K().prototype.unsortedSegmentSum=function(n,t){return this.throwIfDisposed(),Jb(this,n,t)};K().prototype.unstack=function(n){return this.throwIfDisposed(),Pr(this,n)};K().prototype.where=function(n,t){return this.throwIfDisposed(),Qe(n,this,t)};K().prototype.zerosLike=function(){return this.throwIfDisposed(),Dt(this)};class as extends Error{constructor(t){super(t),Object.setPrototypeOf(this,as.prototype)}}class An extends Error{constructor(t){super(t),Object.setPrototypeOf(this,An.prototype)}}class F extends Error{constructor(t){super(t),Object.setPrototypeOf(this,F.prototype)}}class St extends Error{constructor(t){super(t),Object.setPrototypeOf(this,St.prototype)}}class Ap extends Error{constructor(t){super(t),Object.setPrototypeOf(this,Ap.prototype)}}class zy{constructor(t){this.maxEntries=t||100,this.cache=new Map}get(t){let e;return this.cache.has(t)&&(e=this.cache.get(t),this.cache.delete(t),this.cache.set(t,e)),e}put(t,e){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxEntries){const s=this.cache.keys().next().value;this.cache.delete(s)}this.cache.set(t,e)}getMaxEntries(){return this.maxEntries}setMaxEntries(t){if(t<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${t}.`);if(this.maxEntries>t)for(let e=0;e<this.maxEntries-t;e++){const s=this.cache.keys().next().value;this.cache.delete(s)}this.maxEntries=t}}function zr(n,t){if(Array.isArray(n)){let e=[];for(let s=0;s<t;s++)e=e.concat(n);return e}else{const e=new Array(t);return e.fill(n),e}}function ls(n,t){if(!n)throw new Ap(t)}function Lg(n,t){let e=0;for(const s of n)s===t&&e++;return e}function on(n){return n.length===1?n[0]:n}function Wt(n){return Array.isArray(n)?n:[n]}function Ts(n){const e=n.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return e[0]!=="_"?e:"private"+e}function yr(n){return n.length<=1||n.indexOf("_")===-1?n:n.replace(/[_]+(\w|$)/g,(t,e)=>e.toUpperCase())}let Nn={};function Dp(n){if(n==null)return null;const t={};return t.className=n.getClassName(),t.config=n.getConfig(),t}function rd(n){if(!(n==null||typeof n!="object"))if(Array.isArray(n))n.forEach(t=>rd(t));else{const t=Object.keys(n);for(const e of t){const s=n[e];s!=null&&typeof s=="object"&&(!Array.isArray(s)&&s.type==="ndarray"&&typeof s.value=="number"?n[e]=s.value:rd(s))}}}function Oa(n,t={},e={},s="object",r=!1){if(typeof n=="string"){const o=n;let i;if(o in e)i=e[o];else if(o in Nn)i=Nn[o];else if(i=t[o],i==null)throw new F(`Unknown ${s}: ${n}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return i}else{const o=n;if(o.className==null||o.config==null)throw new F(`${s}: Improper config format: ${JSON.stringify(o)}.
'className' and 'config' must set.`);const i=o.className;let a,l;if(i in e?[a,l]=e[i]:i in Nn?[a,l]=Nn.className:i in t&&([a,l]=t[i]),a==null)throw new F(`Unknown ${s}: ${i}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(l!=null){const c={};for(const f of Object.keys(Nn))c[f]=Nn[f];for(const f of Object.keys(e))c[f]=e[f];const u=o.config;u.customObjects=c;const h=Object.assign({},Nn);for(const f of Object.keys(e))Nn[f]=e[f];rd(o.config);const d=l(a,o.config,e,r);return Nn=Object.assign({},h),d}else{const c=Object.assign({},Nn);for(const h of Object.keys(e))Nn[h]=e[h];const u=new a(o.config);return Nn=Object.assign({},c),u}}}function KO(n,t){return n<t?-1:n>t?1:0}function sl(n,t){return-1*KO(n,t)}function Js(n){if(n==null)return n;const t=[];for(const e of n)t.indexOf(e)===-1&&t.push(e);return t}function jO(n){if(n==null)throw new F(`Invalid value in obj: ${JSON.stringify(n)}`);for(const t in n)if(n.hasOwnProperty(t))return!1;return!0}function Xr(n,t,e){if(e!=null&&n.indexOf(e)<0)throw new F(`${e} is not a valid ${t}.  Valid values are ${n} or null/undefined.`)}function _p(n,t,e=0,s=1/0){return ls(e>=0),ls(s>=e),Array.isArray(n)&&n.length>=e&&n.length<=s&&n.every(r=>typeof r===t)}function Ae(n,t){Array.isArray(n)?(T(n.length>0,()=>`${t} is unexpectedly an empty array.`),n.forEach((e,s)=>Ae(e,`element ${s+1} of ${t}`))):T(Number.isInteger(n)&&n>0,()=>`Expected ${t} to be a positive integer, but got ${By(n)}.`)}function By(n){return n===null?"null":Array.isArray(n)?"["+n.map(t=>By(t)).join(",")+"]":typeof n=="string"?`"${n}"`:`${n}`}function YO(n,t,e){let s=e!=null?e():sn(),r;return(...i)=>{const a=e!=null?e():sn();return a-s<t||(s=a,r=n(...i)),r}}function Vy(n){return n==="relu"?"relu":n==="linear"?"linear":n==="elu"?"elu":null}let ZO=0;function Wy(){return ZO++}const rl={};function Du(n=""){return n in rl||(rl[n]=0),rl[n]+=1,n+rl[n].toString()}const JO=["channelsFirst","channelsLast"],QO=["nearest","bilinear"],tM=["valid","same","causal"],eM=["max","avg"],nM=["sum","mul","concat","ave"];const to=new Map;function me(n){Xr(JO,"DataFormat",n)}function sM(n){Xr(QO,"InterpolationFormat",n)}function In(n){Xr(tM,"PaddingMode",n)}function Uy(n){Xr(eM,"PoolMode",n)}const ci=[],Pg="/";function Sr(n,t){ci.push(n);try{const e=t();return ci.pop(),e}catch(e){throw ci.pop(),e}}function rM(){return ci.length===0?"":ci.join(Pg)+Pg}function Gy(n){if(!qy(n))throw new Error("Not a valid tensor name: '"+n+"'");return rM()+n}function Hy(n){if(!qy(n))throw new Error("Not a valid tensor name: '"+n+"'");to.has(n)||to.set(n,0);const t=to.get(n);if(to.set(n,to.get(n)+1),t>0){const e=`${n}_${t}`;return to.set(e,1),e}else return n}const oM=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function qy(n){return!!n.match(oM)}function iM(n){return n===parseInt(n.toString(),10)}function Qs(n,t,e){t==null&&(t=0),e==null&&(e=n.length);let s=1;for(let r=t;r<e;++r)s*=n[r];return s}function $o(n){if(n.length===0)return Number.NaN;let t=Number.POSITIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s<t&&(t=s)}return t}function er(n){if(n.length===0)return Number.NaN;let t=Number.NEGATIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s>t&&(t=s)}return t}function Jn(n,t){if(t<n)throw new F(`end (${t}) < begin (${n}) is forbidden.`);const e=[];for(let s=n;s<t;++s)e.push(s);return e}let hh;function Ce(){return hh==null&&(hh=JN().epsilon()),hh}function Qn(){return"channelsLast"}function ms(n,t){return ut(n,t)}function Ma(n,t=-1){const e=n.shape.slice();return t<0&&(t=e.length+t+1),e.splice(t,0,1),V(n,e)}function aM(n,t){return G(()=>{if(n.shape.length!==2)throw new F(`repeat() expects a rank-2 tensor, but received a rank-${n.shape.length} tensor.`);const e=Ma(n,1);return od(e,[1,t,1])})}function lM(n){const t=[Qs(n.shape)];return V(n,t)}function cM(n){if(n.rank<=1)throw new F(`batchFlatten requires a minimum rank of 2. Got rank: ${n.rank}.`);const t=[n.shape[0],Qs(n.shape,1)];return V(n,t)}function Nr(n,t,e){return G(()=>{switch(n.rank){case 1:return Jf(n,t,e);case 2:return jb(n,[t,0],[e,n.shape[1]]);case 3:return Qf(n,[t,0,0],[e,n.shape[1],n.shape[2]]);case 4:return Zl(n,[t,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3]]);case 5:return Qt(n,[t,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4]]);case 6:return Qt(n,[t,0,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4],n.shape[5]]);default:throw new F(`sliceAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}})}function dh(n,t,e){return G(()=>{switch(n.rank){case 1:return Jf(n,t,e);case 2:return jb(n,[0,t],[n.shape[0],e]);case 3:return Qf(n,[0,0,t],[n.shape[0],n.shape[1],e]);case 4:return Zl(n,[0,0,0,t],[n.shape[0],n.shape[1],n.shape[2],e]);default:throw new F(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function ol(n,t,e,s){return G(()=>{switch(n.rank){case 1:return Jf(n,t,e);case 2:switch(s){case 1:return Nr(n,t,e);case 2:return dh(n,t,e);default:throw new F(`The axis is not within the rank of the tensor ${s}`)}case 3:switch(s){case 1:return Nr(n,t,e);case 2:return Qf(n,[0,t,0],[n.shape[0],e,n.shape[2]]);case 3:return dh(n,t,e);default:throw new F(`The axis is not within the rank of the tensor ${s}`)}case 4:switch(s){case 1:return Nr(n,t,e);case 2:return Zl(n,[0,t,0,0],[n.shape[0],e,n.shape[2],n.shape[3]]);case 3:return Zl(n,[0,0,t,0],[n.shape[0],n.shape[1],e,n.shape[3]]);case 4:return dh(n,t,e);default:throw new F(`The axis is not within the rank of the tensor ${s}`)}default:throw new F(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Fp(n,t=-1){let e;return t<0&&(e=n[0].rank,e!==0?t=e:t=0),t===n[0].rank&&(t=-1),an(n,t)}function zg(n,t){switch(n.rank){case 1:return vE([n,t]);case 2:return $E([n,t],0);case 3:return IE([n,t],0);case 4:return NE([n,t],0);default:throw new F(`concatAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}}function od(n,t){if(Array.isArray(t)||(t=[t]),n.rank!==t.length)throw new F(`The length of input n (${t.length}) does not match the number of dimensions in input x (${n.rank})`);return Xn(n,t)}function _u(n,t=0,e=1,s,r){return BA(n,t,e,s,r)}function gs(n,t,e,s){if(n.rank<2||t.rank<2)throw new St(`dot requires both inputs to be rank >= 2 but got x shape = ${n.shape} and y shape = ${t.shape}`);if(t.rank>=3){const r=n.shape.slice(-1)[0],o=t.shape.slice(-2)[0];if(r!==o)throw new St(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${n.shape} and  y shape = ${t.shape}`)}if(n.rank===2&&t.rank===2)return Ig({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?id(n.rank,s,Qn()):null,activation:e});{const r=n.shape.slice(),o=r.pop();n=V(n,[-1,o]);const i=t.shape.slice(),a=i.pop(),l=i.pop(),c=[...i,a],u=Array.from({length:t.rank},(p,m)=>m===0?t.rank-2:m<=t.rank-2?m-1:m);t=V(At(t,u),[l,-1]);const h=[...r,...c];return V(Ig({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?id(n.rank,s,Qn()):null,activation:e}),h)}}function Xy(n,t,e){return G(()=>(Array.isArray(t)?t=pn(t,"int32"):t=ut(t,"int32"),Wf(n,t,e)))}function La(n){return O(n,n)}function id(n,t,e){const s=t.shape;if(t.rank!==1&&t.rank!==n)throw new F(`Unexpected bias dimensions: ${t.rank}; expected it to be 1 or ${n}`);if(n===5){if(e==="channelsFirst")return s.length===1?V(t,[1,s[0],1,1,1]):V(t,[1,s[3],s[0],s[1],s[2]]);if(e==="channelsLast")return s.length===1?V(t,[1,1,1,1,s[0]]):V(t,[1].concat(s))}else if(n===4){if(e==="channelsFirst")return s.length===1?V(t,[1,s[0],1,1]):V(t,[1,s[2],s[0],s[1]]);if(e==="channelsLast")return s.length===1?V(t,[1,1,1,s[0]]):V(t,[1].concat(s))}else if(n===3){if(e==="channelsFirst")return s.length===1?V(t,[1,s[0],1]):V(t,[1,s[1],s[0]]);if(e==="channelsLast")return s.length===1?V(t,[1,1,s[0]]):V(t,[1].concat(s))}else if(n<3)return t;throw new F(`Unsupported input rank by biasAdd: ${t.rank}`)}function ns(n,t,e){return G(()=>(e==null&&(e=Qn()),me(e),et(n,id(n.rank,t,e))))}function uM(n,t=1){if(t!==1)throw new St(`Support for alpha values other than 1 (${t}) is not implemented yet.`);return Su(n)}function hM(n){return G(()=>bt(n,et(Ye(n),1)))}function Ky(n,t,e,s){return G(()=>FD(n,t,e,s))}function dM(n){return G(()=>{const t=et(.5,O(.2,n));return $n(t,0,1)})}function Pa(n,t,e=!1){return e?n():t()}const fM=["fanIn","fanOut","fanAvg"],pM=["normal","uniform","truncatedNormal"];function mM(n){Xr(fM,"FanMode",n)}function gM(n){Xr(pM,"Distribution",n)}class Mn extends Mo{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}}class jy extends Mn{apply(t,e){return Re(t,e)}}jy.className="Zeros";tt(jy);class Op extends Mn{apply(t,e){return Bs(t,e)}}Op.className="Ones";tt(Op);class Yy extends Mn{constructor(t){if(super(),typeof t!="object")throw new F(`Expected argument of type ConstantConfig but got ${t}`);if(t.value===void 0)throw new F(`config must have value set but got ${t}`);this.value=t.value}apply(t,e){return G(()=>O(Lt(this.value),Bs(t,e)))}getConfig(){return{value:this.value}}}Yy.className="Constant";tt(Yy);class Zy extends Mn{constructor(t){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=t.minval||this.DEFAULT_MINVAL,this.maxval=t.maxval||this.DEFAULT_MAXVAL,this.seed=t.seed}apply(t,e){return Ea(t,this.minval,this.maxval,e,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}Zy.className="RandomUniform";tt(Zy);class Jy extends Mn{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new St(`randomNormal does not support dType ${e}.`);return _u(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}Jy.className="RandomNormal";tt(Jy);class Qy extends Mn{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new St(`truncatedNormal does not support dType ${e}.`);return Zb(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}Qy.className="TruncatedNormal";tt(Qy);class t1 extends Mn{constructor(t){super(),this.gain=t.gain!=null?t.gain:1}apply(t,e){return G(()=>{if(t.length!==2||t[0]!==t[1])throw new F("Identity matrix initializer can only be used for 2D square matrices.");return O(this.gain,Vf(t[0]))})}getConfig(){return{gain:this.gain}}}t1.className="Identity";tt(t1);function xM(n,t="channelsLast"){let e,s;if(me(t),n.length===2)e=n[0],s=n[1];else if([3,4,5].indexOf(n.length)!==-1){if(t==="channelsFirst"){const r=Qs(n,2);e=n[1]*r,s=n[0]*r}else if(t==="channelsLast"){const r=Qs(n,0,n.length-2);e=n[n.length-2]*r,s=n[n.length-1]*r}}else{const r=Qs(n);e=Math.sqrt(r),s=Math.sqrt(r)}return[e,s]}class gn extends Mn{constructor(t){if(super(),t.scale<0)throw new F(`scale must be a positive float. Got: ${t.scale}`);this.scale=t.scale==null?1:t.scale,this.mode=t.mode==null?"fanIn":t.mode,mM(this.mode),this.distribution=t.distribution==null?"normal":t.distribution,gM(this.distribution),this.seed=t.seed}apply(t,e){const s=xM(t),r=s[0],o=s[1];let i=this.scale;if(this.mode==="fanIn"?i/=Math.max(1,r):this.mode==="fanOut"?i/=Math.max(1,o):i/=Math.max(1,(r+o)/2),this.distribution==="normal"){const a=Math.sqrt(i);if(e=e||"float32",e!=="float32"&&e!=="int32")throw new St(`${this.getClassName()} does not support dType ${e}.`);return Zb(t,0,a,e,this.seed)}else{const a=Math.sqrt(3*i);return Ea(t,-a,a,e,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}gn.className="VarianceScaling";tt(gn);class Mp extends gn{constructor(t){super({scale:1,mode:"fanAvg",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return gn.className}}Mp.className="GlorotUniform";tt(Mp);class Lp extends gn{constructor(t){super({scale:1,mode:"fanAvg",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return gn.className}}Lp.className="GlorotNormal";tt(Lp);class Pp extends gn{constructor(t){super({scale:2,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return gn.className}}Pp.className="HeNormal";tt(Pp);class zp extends gn{constructor(t){super({scale:2,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return gn.className}}zp.className="HeUniform";tt(zp);class Bp extends gn{constructor(t){super({scale:1,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return gn.className}}Bp.className="LeCunNormal";tt(Bp);class Vp extends gn{constructor(t){super({scale:1,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return gn.className}}Vp.className="LeCunUniform";tt(Vp);class e1 extends Mn{constructor(t){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=t.gain==null?this.DEFAULT_GAIN:t.gain,this.seed=t.seed}apply(t,e){return G(()=>{if(t.length<2)throw new St("Shape must be at least 2D.");if(e!=="int32"&&e!=="float32"&&e!==void 0)throw new TypeError(`Unsupported data type ${e}.`);e=e;const s=Y(t.slice(0,-1)),r=t[t.length-1],o=s*r;o>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${o}) elements: Slowness may result.`);const i=[Math.max(r,s),Math.min(r,s)],a=_u(i,0,1,e,this.seed),l=R_.qr(a,!1);let c=l[0];const h=l[1].flatten().stridedSlice([0],[Math.min(r,s)*Math.min(r,s)],[Math.min(r,s)+1]);return c=O(c,h.sign()),s<r&&(c=c.transpose()),O(Lt(this.gain),c.reshape(t))})}getConfig(){return{gain:this.gain,seed:this.seed}}}e1.className="Orthogonal";tt(e1);const Bg={constant:"Constant",glorotNormal:"GlorotNormal",glorotUniform:"GlorotUniform",heNormal:"HeNormal",heUniform:"HeUniform",identity:"Identity",leCunNormal:"LeCunNormal",leCunUniform:"LeCunUniform",ones:"Ones",orthogonal:"Orthogonal",randomNormal:"RandomNormal",randomUniform:"RandomUniform",truncatedNormal:"TruncatedNormal",varianceScaling:"VarianceScaling",zeros:"Zeros"};function Vg(n,t={}){return Oa(n,Rn.getMap().classNameMap,t,"initializer")}function oe(n){return Dp(n)}function se(n){if(typeof n=="string"){const t=n in Bg?Bg[n]:n;if(t==="GlorotNormal")return new Lp;if(t==="GlorotUniform")return new Mp;if(t==="HeNormal")return new Pp;if(t==="HeUniform")return new zp;if(t==="LeCunNormal")return new Bp;if(t==="LeCunUniform")return new Vp;{const e={};return e.className=t,e.config={},Vg(e)}}else return n instanceof Mn?n:Vg(n)}function ad(n){return Array.isArray(n)&&Array.isArray(n[0])}function Jl(n){return n.length===0?[]:Array.isArray(n[0])?n:[n]}function Ct(n){let t;if(Array.isArray(n)){if(n.length!==1)throw new F(`Expected Tensor length to be 1; got ${n.length}`);t=n[0]}else t=n;return t}function Ot(n){if(Array.isArray(n)&&Array.isArray(n[0])){if(n.length===1)return n=n,n[0];throw new F(`Expected exactly 1 Shape; got ${n.length}`)}else return n}function Ql(n){let t=0;for(const e of n)e.shape.length===0?t+=1:t+=e.shape.reduce((s,r)=>s*r);return t}const Wg="Variable";class bM{constructor(t,e="float32",s=Wg,r=!0,o=null){this.dtype=e??"float32",this.shape=t.shape,this.id=Wy(),s=s??Wg,this.originalName=Gy(s),this.name=Hy(this.originalName),this.trainable_=r,this.constraint=o,this.val=RD(t,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(t){return this.assertNotDisposed(),yM(this.val,t),this.val.id!==t.id&&(this.val.assign(t),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(t){this.trainable_=t,this.val.trainable=t}}function yM(n,t){if(n.shape.toString()!==t.shape.toString())throw new Error("Shape mismatch: "+JSON.stringify(n.shape)+" vs. "+JSON.stringify(t.shape))}function ld(n){return n.map(t=>t.read())}function Wp(n){n.forEach(t=>{t[0].write(t[1])})}class $e{constructor(t){this.dtype=t.dtype,this.shape=t.shape,t.shape!=null?this.ndim=t.shape.length:this.ndim=t.ndim,this.maxNDim=t.maxNDim,this.minNDim=t.minNDim,this.axes=t.axes||{}}}class ws{constructor(t,e,s,r,o,i,a){this.dtype=t,this.shape=e,this.sourceLayer=s,this.inputs=r,this.callArgs=o,this.outputTensorIndex=a,this.id=Wy(),i!=null&&(this.originalName=Gy(i),this.name=Hy(this.originalName)),this.rank=e.length}}let wM=0;class Fu{constructor(t,e){this.callArgs=e,this.id=wM++,this.outboundLayer=t.outboundLayer,this.inboundLayers=t.inboundLayers,this.nodeIndices=t.nodeIndices,this.tensorIndices=t.tensorIndices,this.inputTensors=t.inputTensors,this.outputTensors=t.outputTensors,this.inputMasks=t.inputMasks,this.outputMasks=t.outputMasks,this.inputShapes=t.inputShapes,this.outputShapes=t.outputShapes;for(const s of t.inboundLayers)s?.outboundNodes.push(this);t.outboundLayer.inboundNodes.push(this)}getConfig(){const t=[];for(const e of this.inboundLayers)e!=null?t.push(e.name):t.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:t,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}}let vM=0;class Et extends Mo{constructor(t={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=vM++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let e=t.name;if(!e){const s=this.getClassName();e=Ts(s)+"_"+Du(s)}if(this.name=e,this.trainable_=t.trainable==null?!0:t.trainable,t.inputShape!=null||t.batchInputShape!=null){let s;if(t.batchInputShape!=null)s=t.batchInputShape;else if(t.inputShape!=null){let o=null;t.batchSize!=null&&(o=t.batchSize),s=[o].concat(t.inputShape)}this.batchInputShape=s;let r=t.dtype;r==null&&(r=t.inputDType),r==null&&(r="float32"),this.dtype=r}t.weights!=null?this.initialWeights=t.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(t,e){return t.name+"_ib-"+e.toString()}getNodeAtIndex(t,e){if(this.inboundNodes.length===0)throw new An(`The layer has never been called and thus has no defined ${e}.`);if(this.inboundNodes.length<=t)throw new F(`Asked to get ${e} at node ${t}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[t]}getInputAt(t){return on(this.getNodeAtIndex(t,"input").inputTensors)}getOutputAt(t){return on(this.getNodeAtIndex(t,"output").outputTensors)}get input(){if(this.inboundNodes.length>1)throw new as(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new as(`Layer ${this.name} is not connected, no input to return.`);return on(this.getNodeAtIndex(0,"input").inputTensors)}get output(){if(this.inboundNodes.length===0)throw new as(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new as(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return on(this.getNodeAtIndex(0,"output").outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(t=>t())}get updates(){return this._updates}get built(){return this._built}set built(t){this._built=t}get trainable(){return this.trainable_}set trainable(t){this._trainableWeights.forEach(e=>e.trainable=t),this.trainable_=t}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(t=>t.trainable):[]}set trainableWeights(t){this._trainableWeights=t}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(t=>!t.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(t){this._nonTrainableWeights=t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(t){const e=Wt(t);if(this.inputSpec==null||this.inputSpec.length===0)return;const s=Wt(this.inputSpec);if(e.length!==s.length)throw new F(`Layer ${this.name} expects ${s.length} inputs, but it received ${e.length} input tensors. Input received: ${t}`);for(let r=0;r<e.length;r++){const o=e[r],i=s[r];if(i==null)continue;const a=o.rank;if(i.ndim!=null&&a!==i.ndim)throw new F(`Input ${r} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${a}`);if(i.maxNDim!=null&&a>i.maxNDim)throw new F(`Input ${r} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${a}`);if(i.minNDim!=null&&a<i.minNDim)throw new F(`Input ${r} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${a}.`);if(i.dtype!=null&&o.dtype!==i.dtype)throw new F(`Input ${r} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${o.dtype}.`);if(i.axes){const l=o.shape;for(const c in i.axes){const u=Number(c),h=i.axes[c],d=u>=0?l[u]:l[l.length+u];if(h!=null&&[h,null].indexOf(d)===-1)throw new F(`Input ${r} is incompatible with layer ${this.name}: expected axis ${u} of input shape to have value ${h} but got shape ${l}.`)}}if(i.shape!=null)for(let l=0;l<i.shape.length;++l){const c=i.shape[l],u=o.shape[l];if(c!=null&&u!=null&&c!==u)throw new F(`Input ${r} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${o.shape}.`)}}}call(t,e){return t}invokeCallHook(t,e){this._callHook!=null&&this._callHook(t,e)}setCallHook(t){this._callHook=t}clearCallHook(){this._callHook=null}apply(t,e){e=e||{},this.assertNotDisposed();const s=Wt(t),r=kM(t),o=IM(t);if(r===o)throw new F("Arguments to apply() must be all SymbolicTensors or all Tensors");return Sr(this.name,()=>{if(!this.built){this.assertInputCompatibility(t);const i=[];for(const a of Wt(t))i.push(a.shape);this.build(on(i)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&o&&(this._refCount=1)}if(this.assertInputCompatibility(t),o){let i=this.call(t,e);this.supportsMasking&&this.setMaskMetadata(t,i);const a=Wt(i),l=[];for(let c of a)s.indexOf(c)!==-1&&(c=c.clone()),l.push(c);if(i=on(l),this.activityRegularizer!=null)throw new St("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return i}else{const i=CM(t),a=this.computeOutputShape(i);let l;const c=$M(t);if(this.warnOnIncompatibleInputShape(Array.isArray(t)?i[0]:i),a!=null&&a.length>0&&Array.isArray(a[0])?l=a.map((u,h)=>new ws(c,u,this,Wt(t),e,this.name,h)):l=new ws(c,a,this,Wt(t),e,this.name),this.addInboundNode(t,l,null,null,i,a,e),this._refCount++,this.activityRegularizer!=null)throw new St("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return l}})}warnOnIncompatibleInputShape(t){if(this.batchInputShape!=null)if(t.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(t)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let e=!1;this.batchInputShape.forEach((s,r)=>{s!=null&&t[r]!=null&&t[r]!==s&&(e=!0)}),e&&console.warn(`The shape of the input tensor (${JSON.stringify(t)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new as(`The layer ${this.name} has never been called and thus has no defined output shape.`);const t=[];for(const e of this.inboundNodes){const s=JSON.stringify(e.outputShapes);t.indexOf(s)===-1&&t.push(s)}if(t.length===1){const e=this.inboundNodes[0].outputShapes;return Array.isArray(e)&&Array.isArray(e[0])&&e.length===1?e[0]:e}else throw new as(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new An(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return Ql(this.weights)}build(t){this.built=!0}getWeights(t=!1){return ld(t?this.trainableWeights:this.weights)}setWeights(t){G(()=>{const e=this.weights;if(e.length!==t.length)throw new F(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${t.length}, but the layer was expecting ${e.length} weights. Provided weights: ${t}...`);if(e.length===0)return;const s=[],r=ld(e);for(let o=0;o<r.length;++o){const i=r[o],a=e[o],l=t[o];if(!Pt(i.shape,l.shape))throw new F(`Layer weight shape ${i.shape} not compatible with provided weight shape ${l.shape}`);s.push([a,l])}Wp(s)})}addWeight(t,e,s,r,o,i,a,l){if(this._addedWeightNames.indexOf(t)!==-1)throw new F(`Duplicate weight name ${t} for layer ${this.name}`);this._addedWeightNames.push(t),s==null&&(s="float32"),this.fastWeightInitDuringBuild&&(r=l!=null?l():se("zeros"));const c=r.apply(e,s),u=new bM(c,s,t,i,a);return c.dispose(),o!=null&&this.addLoss(()=>o.apply(u.read())),i==null&&(i=!0),i?this._trainableWeights.push(u):this._nonTrainableWeights.push(u),u}setFastWeightInitDuringBuild(t){this.fastWeightInitDuringBuild=t}addLoss(t){t==null||Array.isArray(t)&&t.length===0||(t=Wt(t),this._losses!==void 0&&this._losses!==null&&this.losses.push(...t))}computeOutputShape(t){return t}computeMask(t,e){if(!this.supportsMasking){if(e!=null)if(Array.isArray(e))e.forEach(s=>{if(s!=null)throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return e}setMaskMetadata(t,e,s){if(!this.supportsMasking)return;const r=this.computeMask(t,s),o=Wt(e),i=Wt(r);if(o.length!==i.length)throw new Error(`${this.name} outputs ${o.length} tensors but ${o.length} masks for those tensors`);for(let a=0;a<o.length;a++)o[a].kerasMask=i[a]}addInboundNode(t,e,s,r,o,i,a=null){const l=Wt(t);e=Wt(e),s=Wt(s),r=Wt(r),o=Jl(o),i=Jl(i);const c=[],u=[],h=[];for(const d of l)c.push(d.sourceLayer),u.push(d.nodeIndex),h.push(d.tensorIndex);new Fu({outboundLayer:this,inboundLayers:c,nodeIndices:u,tensorIndices:h,inputTensors:l,outputTensors:e,inputMasks:s,outputMasks:r,inputShapes:o,outputShapes:i},a);for(let d=0;d<e.length;d++)e[d].sourceLayer=this,e[d].nodeIndex=this.inboundNodes.length-1,e[d].tensorIndex=d}getConfig(){const t={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(t.batchInputShape=this.batchInputShape),this.dtype!=null&&(t.dtype=this.dtype),t}disposeWeights(){return this.weights.forEach(t=>t.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw new Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw new Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw new Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let t=0;return--this._refCount===0&&(t=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:t}}}function CM(n){n=Wt(n);const t=[];for(const e of n)t.push(e.shape);return on(t)}function $M(n){return"float32"}function n1(n,t,e){if((t==null||e!=null&&e>0)&&(t=n.sourceLayer,e=n.nodeIndex),t.inboundNodes.length===0)return[n];{const s=t.inboundNodes[e];if(s.inboundLayers.length===0)return s.inputTensors;{const r=[];for(let o=0;o<s.inboundLayers.length;o++){const i=s.inputTensors[o],a=s.inboundLayers[o],l=s.nodeIndices[o],c=n1(i,a,l);for(const u of c)r.indexOf(u)===-1&&r.push(u)}return r}}}function kM(n){let t=!0;for(const e of Wt(n))if(!(e instanceof ws)){t=!1;break}return t}function IM(n){let t=!0;for(const e of Wt(n))if(e instanceof ws){t=!1;break}return t}class za extends Et{constructor(t){if(super({dtype:t.dtype,name:t.name!=null?t.name:Du("input").toString()}),t.batchSize==null&&(t.batchSize=null),t.sparse==null&&(t.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=t.sparse,t.inputShape!=null&&t.batchInputShape!=null)throw new F("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let e=t.batchInputShape;if(e==null){if(t.inputShape==null)throw new F("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");e=[t.batchSize].concat(t.inputShape)}else if(t.batchSize!=null)throw new F("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");const s=t.dtype||"float32";this.batchInputShape=e,this.dtype=s,this.inputSpec=[{shape:e}];const r=new ws(this.dtype,this.batchInputShape,this,[],{},this.name);r.nodeIndex=0,r.tensorIndex=0,new Fu({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[r],outputTensors:[r],inputMasks:[null],outputMasks:[null],inputShapes:[e],outputShapes:[e]})}apply(t,e){throw new F(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}za.className="InputLayer";tt(za);function SM(n){if(n.batchShape==null&&n.shape==null)throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(n.batchShape!=null&&n.shape!=null)throw new F("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let t=n.batchShape;n.shape!=null&&t==null&&(t=[null].concat(n.shape));let e=n.dtype;return e==null&&(e="float32"),new za({batchInputShape:t,name:n.name,dtype:e,sparse:n.sparse}).inboundNodes[0].outputTensors[0]}function NM(n,t){if(n.dtype==null||n.dtype===t.dtype)return t;try{return ut(t,n.dtype)}catch{throw new F(`The dtype of the feed (${t.dtype}) can not be cast to the dtype of the key '${n.name}' (${n.dtype}).`)}}class Xs{constructor(t){if(this.id2Value={},this.id2Mask={},this.name2Id={},t instanceof Xs)for(const e in t.id2Value)this.id2Value[e]=t.id2Value[e],e in t.id2Mask&&(this.id2Mask[e]=t.id2Mask[e]);else{if(t==null)return;for(const e of t)this.add(e.key,e.value)}}add(t,e,s){if(this.id2Value[t.id]==null)this.id2Value[t.id]=NM(t,e),this.name2Id[t.name]=t.id,s!=null&&(this.id2Mask[t.id]=s);else throw new F(`Duplicate key: name=${t.name}, id=${t.id}`);return this}addFeed(t){this.add(t.key,t.value)}hasKey(t){return this.id2Value[t.id]!=null}names(){return Object.keys(this.name2Id)}getValue(t){if(t instanceof ws){if(this.id2Value[t.id]==null)throw new F(`Nonexistent key: ${t.name}`);return this.id2Value[t.id]}else{const e=this.name2Id[t];if(e==null)throw new F(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Value[e]}}getMask(t){if(t instanceof ws){if(this.id2Value[t.id]==null)throw new F(`Nonexistent key: ${t.name}`);return this.id2Mask[t.id]}else{const e=this.name2Id[t];if(e==null)throw new F(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Mask[e]}}disposeMasks(){this.id2Mask!=null&&Rt(this.id2Mask)}}const tc=new zy,ec=new zy;function TM(n){tc?.setMaxEntries(n),ec?.setMaxEntries(n)}function si(n,t,e,s){const r=e==null?!1:e.training,o=Array.isArray(n),i=o?n:[n],a=i.map(p=>p.name),l=[],c=t.names();for(const p of a)c.indexOf(p)!==-1?l.push(t.getValue(p)):l.push(null);const u=a.join(",")+"|"+t.names().sort().join(",");let h=tc.get(u),d;if(h==null){const p=EM(i,t);h=p.sorted,d=p.recipientCounts,tc.put(u,h),ec.put(u,d)}d={},r||Object.assign(d,ec.get(u));const f=new Xs(t);for(let p=0;p<h.length;++p){const m=h[p],g=m.sourceLayer;if(g instanceof za)continue;const x=[],b=[],w=[];let y=!1;for(const I of m.inputs){const k=f.getValue(I),C=f.getMask(I);x.push(k),b.push(C),C!=null&&(y=!0),r||(d[I.name]--,d[I.name]===0&&!t.hasKey(I)&&a.indexOf(I.name)===-1&&!k.isDisposed&&I.sourceLayer.stateful!==!0&&w.push(k))}y&&(e=e||{},e.mask=b[0]);const v=Wt(g.apply(x,e));let $=null;g.supportsMasking&&($=g.computeMask(x,b));const N=AM(m),S=Array.isArray(N)?N:[N];for(let I=0;I<S.length;++I){f.hasKey(S[I])||f.add(S[I],v[I],Array.isArray($)?$[0]:$);const k=a.indexOf(S[I].name);k!==-1&&(l[k]=v[I])}r||Rt(w)}return f.disposeMasks(),o?l:l[0]}function EM(n,t){T(n!=null&&n.length>0,()=>"Expected at least one fetch, got none");let e=[],s={};if(n.length===1){const r=Ug(n[0],t);e=r.sorted,s=r.recipientMap}else{const r=new Set;for(const o of n){const{sorted:i,recipientMap:a}=Ug(o,t);for(const l of i)r.has(l.name)||(e.push(l),r.add(l.name));for(const l in a)s[l]==null&&(s[l]=new Set),a[l].forEach(c=>s[l].add(c))}}return{sorted:e,recipientCounts:RM(s)}}function RM(n){const t={};for(const e in n)t[e]=n[e].size;return t}function Ug(n,t){const e=new Set,s=[],r={};for(const a of t.names())e.add(a);const o=[],i=[];for(o.push(n);o.length>0;){const a=o[o.length-1];if(e.has(a.name)){o.pop();continue}const l=i[i.length-1]===o.length-1;if(a.inputs.length===0||l)o.pop(),s.push(a),e.add(a.name),l&&i.pop();else{i.push(o.length-1);for(const c of a.inputs)r[c.name]==null&&(r[c.name]=new Set),r[c.name].add(a.name),!e.has(c.name)&&o.push(c)}}return{sorted:s,recipientMap:r}}function AM(n){let t;if(n.sourceLayer.inboundNodes.length===1)t=n.sourceLayer.output;else{let e=null;for(let s=0;s<n.sourceLayer.inboundNodes.length;++s)for(const r of n.sourceLayer.inboundNodes[s].outputTensors)if(r.id===n.id){e=s;break}t=n.sourceLayer.getOutputAt(e)}return t}const DM=X();DM.registerFlag("TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",()=>100,TM);function Up(n,t){return G(()=>We(gt(O(n,n),t,!0)))}class Ba extends Mo{getConfig(){return{}}}class s1 extends Ba{constructor(t){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return G(()=>{const e=Up(t,this.axis),s=$n(e,0,this.maxValue);return O(t,bt(s,et(Ce(),e)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}s1.className="MaxNorm";tt(s1);class r1 extends Ba{constructor(t){super(),this.defaultAxis=0,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return G(()=>bt(t,et(Ce(),Up(t,this.axis))))}getConfig(){return{axis:this.axis}}}r1.className="UnitNorm";tt(r1);class o1 extends Ba{apply(t){return Hr(t)}}o1.className="NonNeg";tt(o1);class i1 extends Ba{constructor(t){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=t.minValue!=null?t.minValue:this.defaultMinValue,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.rate=t.rate!=null?t.rate:this.defaultRate,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return G(()=>{const e=Up(t,this.axis),s=et(O(this.rate,$n(e,this.minValue,this.maxValue)),O(1-this.rate,e));return O(t,bt(s,et(Ce(),e)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}i1.className="MinMaxNorm";tt(i1);const Gg={maxNorm:"MaxNorm",minMaxNorm:"MinMaxNorm",nonNeg:"NonNeg",unitNorm:"UnitNorm"};function ke(n){return Dp(n)}function Hg(n,t={}){return Oa(n,Rn.getMap().classNameMap,t,"constraint")}function Ie(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in Gg?Gg[n]:n,config:{}};return Hg(e)}else return n instanceof Ba?n:Hg(n)}async function mr(n){if(n==null)return;const t=[],e=[],s=[];for(const r in n){const o=n[r];if(typeof o!="number"){const i=o;t.push(i.data()),e.push(r),s.push(i)}}if(t.length>0){const r=await Promise.all(t);for(let o=0;o<r.length;++o)n[e[o]]=r[o][0];Rt(s)}}function a1(n){if(n!=null)for(const t in n){const e=n[t];typeof e!="number"&&e.dispose()}}var qg;(function(n){n[n.SILENT=0]="SILENT",n[n.VERBOSE=1]="VERBOSE"})(qg||(qg={}));const _M=125;class wi{constructor(){this.validationData=null}setParams(t){this.params=t}async onEpochBegin(t,e){}async onEpochEnd(t,e){}async onBatchBegin(t,e){}async onBatchEnd(t,e){}async onTrainBegin(t){}async onTrainEnd(t){}setModel(t){}}class FM{constructor(t,e=10){t==null&&(t=[]),this.callbacks=t,this.queueLength=e}append(t){this.callbacks.push(t)}setParams(t){for(const e of this.callbacks)e.setParams(t)}setModel(t){for(const e of this.callbacks)e.setModel(t)}async onEpochBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochBegin(t,e)}async onEpochEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochEnd(t,e)}async onBatchBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchBegin(t,e)}async onBatchEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchEnd(t,e)}async onTrainBegin(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainBegin(t)}async onTrainEnd(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainEnd(t)}}class OM extends wi{constructor(){super()}async onEpochBegin(t){this.seen=0,this.totals={}}async onBatchEnd(t,e){e==null&&(e={});const s=e.size==null?0:e.size;this.seen+=s;for(const r in e){const o=e[r];if(typeof o=="number")this.totals.hasOwnProperty(r)||(this.totals[r]=0),this.totals[r]=this.totals[r]+o*s;else{let i;r in this.totals?i=this.totals[r]:this.totals[r]=0;const a=G(()=>et(this.totals[r],O(o,s)));this.totals[r]=a,i?.dispose()}}}async onEpochEnd(t,e){if(e!=null)for(const s of this.params.metrics)this.totals[s]!=null&&(typeof this.totals[s]=="number"?e[s]=this.totals[s]/this.seen:G(()=>{const r=O(bt(1,this.seen),this.totals[s]);e[s]=r,this.totals[s].dispose(),fs(e[s])}))}}class MM extends wi{async onTrainBegin(t){this.epoch=[],this.history={}}async onEpochEnd(t,e){e==null&&(e={}),this.epoch.push(t);for(const s in e)this.history[s]==null&&(this.history[s]=[]),this.history[s].push(e[s])}async syncData(){const t=[],e=[],s=[];for(const o in this.history){const i=this.history[o];for(let a=0;a<i.length;++a)if(typeof i[a]!="number"){const l=i[a];t.push(l.data()),e.push(o),s.push(a)}}const r=await Promise.all(t);for(let o=0;o<r.length;++o)this.history[e[o]][s[o]].dispose(),this.history[e[o]][s[o]]=r[o][0]}}class LM extends wi{constructor(t,e){if(super(),this.currentEpoch=0,this.nowFunc=t.nowFunc,this.nextFrameFunc=t.nextFrameFunc||fy,this.yieldEvery=e||"auto",this.yieldEvery==="auto"&&(this.yieldEvery=_M),this.yieldEvery==="never"&&t.onYield!=null)throw new Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");Ph(this.yieldEvery)&&(this.maybeWait=YO(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=t.onTrainBegin,this.trainEnd=t.onTrainEnd,this.epochBegin=t.onEpochBegin,this.epochEnd=t.onEpochEnd,this.batchBegin=t.onBatchBegin,this.batchEnd=t.onBatchEnd,this.yield=t.onYield}async maybeWait(t,e,s){const r=[];this.yield!=null&&(await mr(s),r.push(this.yield(t,e,s))),r.push(this.nextFrameFunc()),await Promise.all(r)}async onEpochBegin(t,e){this.currentEpoch=t,this.epochBegin!=null&&(await mr(e),await this.epochBegin(t,e))}async onEpochEnd(t,e){const s=[];this.epochEnd!=null&&(await mr(e),s.push(this.epochEnd(t,e))),this.yieldEvery==="epoch"&&s.push(this.nextFrameFunc()),await Promise.all(s)}async onBatchBegin(t,e){this.batchBegin!=null&&(await mr(e),await this.batchBegin(t,e))}async onBatchEnd(t,e){const s=[];this.batchEnd!=null&&(await mr(e),s.push(this.batchEnd(t,e))),this.yieldEvery==="batch"?s.push(this.nextFrameFunc()):Ph(this.yieldEvery)&&s.push(this.maybeWait(this.currentEpoch,t,e)),await Promise.all(s)}async onTrainBegin(t){this.trainBegin!=null&&(await mr(t),await this.trainBegin(t))}async onTrainEnd(t){this.trainEnd!=null&&(await mr(t),await this.trainEnd(t))}}function l1(n,t){return n==null&&(n={}),n instanceof wi?[n]:Array.isArray(n)&&n[0]instanceof wi?n:Wt(n).map(s=>new LM(s,t))}class En{constructor(){}static registerCallbackConstructor(t,e){T(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),En.checkForDuplicate(e),En.constructors[t]==null&&(En.constructors[t]=[]),En.constructors[t].push(e)}static checkForDuplicate(t){for(const e in En.constructors)En.constructors[+e].forEach(r=>{if(r===t)throw new F("Duplicate callback constructor.")})}static clear(){En.constructors={}}static createCallbacks(t){const e=[];for(const s in En.constructors){const r=+s;t>=r&&e.push(...En.constructors[r])}return e.map(s=>new s)}}En.constructors={};function c1(n,t,e,s,r,o,i,a,l){const c=new MM,u=[new OM,...En.createCallbacks(t)];n!=null&&u.push(...n),u.push(c);const h=new FM(u);return h.setParams({epochs:e,initialEpoch:s,samples:r,steps:o,batchSize:i,verbose:t,doValidation:a,metrics:l}),{callbackList:h,history:c}}function As(n,t={},e=!1){return Oa(n,Rn.getMap().classNameMap,t,"layer",e)}function nc(n,t){return G(()=>{n.dtype!=="float32"&&(n=ut(n,"float32"));const e=gt(La(n),t,!0),s=Iu(e.shape,Ce()),r=We(ur(e,s));return bt(n,r)})}function Ou(n,t){return G(()=>be(La(wt(t,n)),-1))}function Gp(n,t){return G(()=>be(Ye(wt(t,n)),-1))}function Hp(n,t){return G(()=>{const e=wt(n,t),s=$n(Ye(n),Ce(),Number.MAX_VALUE),r=Ye(bt(e,s));return O(100,be(r,-1))})}function PM(n,t){return G(()=>{const e=$n(t,Ce(),Number.MAX_VALUE),s=ys(et(1,e)),r=$n(n,Ce(),Number.MAX_VALUE),o=ys(et(1,r));return be(La(wt(s,o)),-1)})}function zM(n,t){return G(()=>{const e=ur(0,wt(1,O(n,t)));return be(La(e),-1)})}function BM(n,t){return G(()=>{const e=ur(0,wt(1,O(n,t)));return be(e,-1)})}function VM(n,t){return G(()=>{const e=gt(O(n,t),-1),s=Yn(O(wt(1,n),t),-1);return ur(0,et(1,wt(s,e)))})}function WM(n,t){return G(()=>{const e=Math.log(2),s=wt(t,n),r=wt(et(s,Ta(O(-2,s))),e);return be(r,-1)})}function vi(n,t,e=!1){return G(()=>{if(e)t=tp(t);else{const s=gt(t,t.shape.length-1,!0);t=bt(t,s)}return t=$n(t,Ce(),1-Ce()),de(gt(O(ut(n,"float32"),ys(t)),t.shape.length-1))})}function sc(n,t,e=!1){return G(()=>{const s=ut(Tu(lM(n)),"int32");t=$n(t,Ce(),1-Ce());const r=t.shape,o=V(Bb(s,r[r.length-1]),r);return vi(o,t,e)})}function UM(n,t){if(!Pt(n.shape,t.shape))throw new F(`logits and labels must have the same shape, but got shapes ${JSON.stringify(n.shape)} and ${JSON.stringify(t.shape)}`);return G(()=>{const e=Hr(t),s=de(Ye(t));return et(wt(e,O(t,n)),Mb(bs(s)))})}function Mu(n,t){return G(()=>{let e;return e=$n(t,Ce(),1-Ce()),e=ys(bt(e,wt(1,e))),be(UM(n,e),-1)})}function GM(n,t){return G(()=>{const e=$n(n,Ce(),1),s=$n(t,Ce(),1);return gt(O(n,ys(bt(e,s))),-1)})}function HM(n,t){return G(()=>{const e=ys(et(Ce(),t));return be(wt(t,O(n,e)),-1)})}function u1(n,t){return G(()=>{const e=nc(n,-1),s=nc(t,-1),r=O(e,s);return de(gt(r,-1))})}const rc={meanSquaredError:Ou,meanAbsoluteError:Gp,meanAbsolutePercentageError:Hp,meanSquaredLogarithmicError:PM,squaredHinge:zM,hinge:BM,categoricalHinge:VM,logcosh:WM,categoricalCrossentropy:vi,sparseCategoricalCrossentropy:sc,binaryCrossentropy:Mu,kullbackLeiblerDivergence:GM,poisson:HM,cosineProximity:u1};function fh(n){if(typeof n=="string"){if(n in rc)return rc[n];let t=`Unknown loss ${n}`;throw n.toLowerCase().includes("softmaxcrossentropy")&&(t=`Unknown loss ${n}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new F(t)}else return n}function h1(n,t){return G(()=>{const e=O(.5,Fn(t)),s=ms(kn(t,e),n.dtype);return be(xs(n,s),-1)})}function d1(n,t){return G(()=>ms(xs(mi(n,-1),mi(t,-1)),"float32"))}function qM(n,t){return G(()=>ut(gt(_s(xs(n,1),xs(t,1))),"float32"))}function XM(n,t){return G(()=>ut(gt(_s(xs(n,0),xs(t,1))),"float32"))}function KM(n,t){return G(()=>{const e=qM(n,t),s=XM(n,t),r=et(e,s);return ut(Qe(kn(r,0),bt(e,r),0),"float32")})}function jM(n,t){return Mu(n,t)}function YM(n,t){return n.rank===t.rank&&(n=Ra(n,[n.rank-1])),t=mi(t,-1),t.dtype!==n.dtype&&(t=ut(t,n.dtype)),ut(xs(n,t),"float32")}const ZM=Ou,JM=Ou,QM=Gp,tL=Gp,eL=Hp,nL=Hp,f1=vi,sL=u1,p1=sc,oc={binaryAccuracy:h1,categoricalAccuracy:d1,precision:KM,categoricalCrossentropy:f1,sparseCategoricalCrossentropy:p1,mse:ZM,MSE:JM,mae:QM,MAE:tL,mape:eL,MAPE:nL,cosine:sL};function rL(n){if(typeof n=="string"&&n in oc)return oc[n];if(typeof n!="string"&&n!=null)return n;throw new F(`Unknown metric ${n}`)}function il(n){if(ls(n!==null,`Unknown LossOrMetricFn ${n}`),typeof n=="string")return n;{let t;for(const e of Object.keys(rc))if(rc[e]===n){t=e;break}if(t!==void 0)return t;for(const e of Object.keys(oc))if(oc[e]===n){t=e;break}return t!==void 0?t:n.name}}function oL(n){const t={Adagrad:()=>Qr.adagrad(.01),Adadelta:()=>Qr.adadelta(1,.95,Ce()),Adam:()=>Qr.adam(.001,.9,.999,Ce()),Adamax:()=>Qr.adamax(.002,.9,.999,Ce(),0),RMSProp:()=>Qr.rmsprop(.001,.9,0,Ce()),SGD:()=>Qr.sgd(.01)};if(t.adagrad=t.Adagrad,t.adadelta=t.Adadelta,t.adam=t.Adam,t.adamax=t.Adamax,t.rmsprop=t.RMSProp,t.sgd=t.SGD,n in t)return t[n]();throw new F(`Unknown Optimizer ${n}`)}const Xg=1*1024*1024;function Kg(n,t,e=!1){if(n==null||typeof n!="object"||Object.getPrototypeOf(n)!==Object.prototype||!cd(n))throw new Error("User-defined metadata is expected to be a JSON object, but is not.");if(e){const s=JSON.stringify(n);s.length>Xg&&console.warn(`User-defined metadata of model "${t}" is too large in size (length=${s.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${Xg}.`)}}function cd(n){if(n===null)return!0;if(typeof n=="object")if(Object.getPrototypeOf(n)===Object.prototype){const t=Object.keys(n);for(const e of t)if(typeof e!="string"||!cd(n[e]))return!1;return!0}else if(Array.isArray(n)){for(const t of n)if(!cd(t))return!1;return!0}else return!1;else{const t=typeof n;return t==="string"||t==="number"||t==="boolean"}}function iL(n,t,e,s=console.log){const r=lL(n),o=["Layer (type)","Input Shape","Output shape","Param #"];r?(t=t||90,e=e||[.32,.61,.89,1]):(t=t||115,e=e||[.24,.48,.7,.8,1]),e[e.length-1]<=1&&(e=e.map(u=>Math.floor(t*u)));let i;if(!r){o.push("Receives inputs"),i=[];for(const u in n.nodesByDepth)i.push(...n.nodesByDepth[u])}s("_".repeat(t)),ic(o,e,s),s("=".repeat(t));const a=n.layers;for(let u=0;u<a.length;++u)r?cL(a[u],e,s):uL(a[u],e,i,s),s((u===a.length-1?"=":"_").repeat(t));n.checkTrainableWeightsConsistency();const l=aL(n),c=Ql(n.nonTrainableWeights);s(`Total params: ${l+c}`),s(`Trainable params: ${l}`),s(`Non-trainable params: ${c}`),s("_".repeat(t))}function aL(n){let t;return n.collectedTrainableWeights!=null?t=Ql(n.collectedTrainableWeights):t=Ql(n.trainableWeights),t}function lL(n){let t=!0;const e=[],s=[];for(const r in n.nodesByDepth)e.push(n.nodesByDepth[r]);for(const r of e){if(r.length>1||r.length===1&&r[0].inboundLayers.length>1){t=!1;break}s.push(...r)}if(t)for(const r of n.layers){let o=!1;for(const i of r.inboundNodes)if(s.indexOf(i)!==-1)if(o){t=!1;break}else o=!0;if(!t)break}return t}function ic(n,t,e=console.log){let s="";for(let r=0;r<n.length;++r)r>0&&(s=s.slice(0,s.length-1)+" "),s+=n[r],s=s.slice(0,t[r]),s+=" ".repeat(t[r]-s.length);e(s)}function cL(n,t,e){let s,r;try{r=n.inboundNodes.map(l=>JSON.stringify(l.inputShapes)).join(",")}catch{r="multiple"}try{s=JSON.stringify(n.outputShape)}catch{s="multiple"}const o=n.name,i=n.getClassName(),a=[`${o} (${i})`,r,s,n.countParams().toString()];ic(a,t,e)}function uL(n,t,e,s){let r,o;try{o=n.inboundNodes.map(h=>JSON.stringify(h.inputShapes)).join(",")}catch{o="multiple"}try{r=JSON.stringify(n.outputShape)}catch{r="multiple"}const i=[];for(const h of n.inboundNodes)if(!(e!=null&&e.length>0&&e.indexOf(h)===-1))for(let d=0;d<h.inboundLayers.length;++d){const f=h.inboundLayers[d].name,p=h.nodeIndices[d],m=h.tensorIndices[d];i.push(`${f}[${p}][${m}]`)}const a=n.name,l=n.getClassName(),c=i.length===0?"":i[0],u=[`${a} (${l})`,o,r,n.countParams().toString(),c];ic(u,t,s);for(let h=1;h<i.length;++h)ic(["","","","",i[h]],t,s)}function m1(n,t,e){return(n==="inboundNodes"||n==="outputLayers"||n==="inputLayers")&&t===0&&typeof e=="string"}function ud(n,t){if(n===null)return null;if(typeof n=="string")return yr(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let r=0;r<s;++r){const o=n[r];m1(t,r,o)?e.push(o):e.push(ud(o,t))}return e}else{const e={};for(const s of Object.keys(n)){const r=n[s];if(s==="name"&&typeof r=="string")e[s]=r;else{const o=yr(s);e[o]=ud(r,o)}}return e}}function hd(n,t){if(n==null)return null;if(typeof n=="string")return Ts(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let r=0;r<s;++r){const o=n[r];m1(t,r,o)?e.push(o):e.push(hd(o,t))}return e}else{const e={};for(const s of Object.keys(n)){const r=n[s],o=Ts(s);(s==="name"||s==="className")&&typeof r=="string"?e[o]=r:e[o]=hd(r,s)}return e}}const g1="4.22.0";const hL=n=>{const t=Object.keys(n);if(t.length===0)return!1;const e=t[0].split("/");return!isNaN(parseInt(e[e.length-1],10))};class Wn extends Et{constructor(t){if(super({}),this.containerNodes=new Set,this.name=t.name,this.name==null){const b=this.getClassName().toLowerCase();this.name=Du(b)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(t.inputs)?this.inputs=t.inputs.slice():this.inputs=[t.inputs],Array.isArray(t.outputs)?this.outputs=t.outputs.slice():this.outputs=[t.outputs],Js(this.inputs).length!==this.inputs.length)throw new F(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(b=>b.name)}`);Js(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(b=>b.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(const b of this.outputs){const w=b.sourceLayer,y=b.nodeIndex,v=b.tensorIndex;this.outputLayers.push(w),this.outputLayersNodeIndices.push(y),this.outputLayersTensorIndices.push(v)}for(const b of this.inputs){const w=b.sourceLayer,y=b.nodeIndex,v=b.tensorIndex;ls(y===0,"input layer has >1 nodes"),ls(v===0,"input layer has >1 tensors"),this.inputLayers.push(w),this.inputLayersNodeIndices.push(y),this.inputLayersTensorIndices.push(v)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let b=0;b<this.inputLayers.length;b++){const w=this.inputLayers[b];if(!(w instanceof za))throw new TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${t.inputs}. Input ${b} (0-based) originates from layer type ${w.getClassName()}.`);this.inputNames.push(w.name),this.feedInputShapes.push(w.batchInputShape),this.feedInputNames.push(w.name)}for(const b of this.outputLayers)this.outputNames.push(b.name);this.internalInputShapes=this.inputs.map(b=>b.shape),this.internalOutputShapes=this.outputs.map(b=>b.shape);const e={},s={},r={},o={},i={},a=[],l=(b,w,y,v,$,N)=>{(v==null||$==null||N==null)&&(v=b.sourceLayer,$=b.nodeIndex,N=b.tensorIndex);const S=v.inboundNodes[$];if(y.indexOf(S)!==-1)throw new An(`The tensor ${b.name} at layer "${v.name}" is part of a cycle.`);if(w.indexOf(S)!==-1)return;this.containerNodes.add(Wn.nodeKey(v,$)),v.id in i||(i[v.id]=Object.keys(i).length),y.indexOf(S)===-1&&y.push(S);const I=S.inboundLayers.length;for(let k=0;k<I;k++){const C=S.inputTensors[k],E=S.inboundLayers[k],_=S.nodeIndices[k],R=S.tensorIndices[k];l(C,w,y,E,_,R)}for(w.push(S);y.indexOf(S)>=0;)y.splice(y.indexOf(S),1);a.push(S)},c=[],u=[];for(const b of this.outputs)l(b,c,u);const h=a.slice().reverse();for(const b of h){s[b.id]=b,b.id in e||(e[b.id]=0);let w=e[b.id];const y=r[b.outboundLayer.id]==null?0:r[b.outboundLayer.id];w=Math.max(w,y),r[b.outboundLayer.id]=w,o[b.outboundLayer.id]=b.outboundLayer,e[b.id]=w;for(let v=0;v<b.inboundLayers.length;v++){const $=b.inboundLayers[v],N=b.nodeIndices[v],S=$.inboundNodes[N],I=e[S.id]==null?0:e[S.id];e[S.id]=Math.max(w+1,I),s[S.id]=S}}const d={};for(const b in e){const w=e[b];w in d||(d[w]=[]),d[w].push(s[b])}const f={};for(const b in r){const w=r[b];w in f||(f[w]=[]),f[w].push(o[b])}let p=Object.keys(f).map(b=>parseInt(b,10)).sort(sl);this.layers=[];for(const b of p){const w=f[b];w.sort((y,v)=>{const $=i[y.id],N=i[v.id];return $<N?-1:$>N?1:0});for(const y of w)y instanceof Wn&&this.internalContainerRefs.push(y),this.layers.push(y)}this.layersByDepth=f,p=Object.keys(d).map(b=>parseInt(b,10)).sort(sl);const m=this.inputs.slice(),g=[];for(const b of p)for(const w of d[b]){const y=w.outboundLayer;if(y!=null){for(const v of w.inputTensors)if(m.indexOf(v)===-1)throw new An(`Graph disconnected: cannot obtain value for tensor ${v} at layer "${y.name}". The following previous layers were accessed without issue: ${g}`);for(const v of w.outputTensors)m.push(v);g.push(y.name)}}this.nodesByDepth=d;const x=this.layers.map(b=>b.name);for(const b of x){const w=x.filter(y=>y===b).length;if(w!==1)throw new An(`The name "${b}" is used ${w} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(x))}this.outboundNodes=[],this.inboundNodes=[],new Fu({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(b=>null),outputMasks:this.outputs.map(b=>null),inputShapes:this.inputs.map(b=>b.shape),outputShapes:this.outputs.map(b=>b.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw new Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();const t={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(const e of this.layers)t.numDisposedVariables+=e.dispose().numDisposedVariables;for(const e of this.internalContainerRefs)t.numDisposedVariables+=e.dispose().numDisposedVariables}return t.refCountAfterDispose=this._refCount,t}get trainable(){return this.trainable_}set trainable(t){this.layers.forEach(e=>{e._trainableWeights.forEach(s=>s.trainable=t)}),this.trainable_=t}get trainableWeights(){if(this._trainableWeights.length>0)throw new F("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");if(!this.trainable)return[];let t=[];for(const e of this.layers)t=t.concat(e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.layers)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.layers)e.push(...s.trainableWeights);return e.concat(t)}return t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(t,e=!0){const s={};let r=0;const o=hL(t);o&&this.parseWeights(t);for(const a of this.layers)for(const[l,c]of a.weights.entries()){const u=o?`${c.name.split("/").slice(0,-1).join("/")+"/"}${l}`:c.originalName;if(s[u]!=null)throw new F(`Duplicate weight name: ${u}`);s[u]=c,r++}const i=[];for(const a in t){let l=a;if(s[a]==null){const c=a.split("/");l=c.slice(0,-2).concat([c[c.length-1]]).join("/")}if(s[l]!=null)i.push([s[l],t[a]]);else if(e)throw new F(`Provided weight data has no target variable: ${a}`);delete s[l]}if(e){const a=[];for(const l in s)a.push(l);if(a.length>0)throw new F(`${a.length} of ${r} weights are not set: ${a}`)}Wp(i)}parseWeights(t){for(const e in Object.keys(t)){const s=e.split("/"),r=["vars","layer_checkpoint_dependencies"],o=s.map(i=>i.startsWith("_")?i.slice(1):i).filter(i=>!r.includes(i)).join("/");o!==e&&(t[o]=t[e],delete t[e])}}updatedConfig(){const t=this.getConfig(),e={};return e.className=this.getClassName(),e.config=t,e.kerasVersion=`tfjs-layers ${g1}`,e.backend="TensorFlow.js",e}toJSON(t,e=!0){const s=hd(this.updatedConfig());return e?JSON.stringify(s):s}call(t,e){return G(()=>{t=Wt(t);const s=new Xs;for(let r=0;r<this.inputs.length;++r)s.add(this.inputs[r],t[r]);return si(this.outputs,s,e)})}computeMask(t,e){return G(()=>{t=Wt(t);let s;return e==null?s=zr(null,t.length):s=Wt(e),this.runInternalGraph(t,s)[1]})}computeOutputShape(t){const e=Jl(t);if(e.length!==this.inputLayers.length)throw new F(`Invalid inputShape argument ${t}: model has ${this.inputLayers.length} tensor inputs.`);const s={};for(let a=0;a<e.length;a++){const l=this.inputLayers[a],c=e[a],u=l.name+"_0_0";s[u]=c}const r=Object.keys(this.nodesByDepth).map(a=>parseInt(a,10)).sort(sl);if(r.length>1)for(const a of r){const l=this.nodesByDepth[a];for(const c of l){const u=c.outboundLayer;if(this.inputLayers.map(m=>m.id).indexOf(u.id)!==-1)continue;const h=[];for(let m=0;m<c.inboundLayers.length;m++){const g=c.inboundLayers[m],x=c.nodeIndices[m],b=c.tensorIndices[m],w=`${g.name}_${x}_${b}`,y=s[w];h.push(y)}const d=u.computeOutputShape(on(h)),f=Jl(d),p=u.inboundNodes.indexOf(c);for(let m=0;m<f.length;m++){const g=`${u.name}_${p}_${m}`;s[g]=f[m]}}}const o=[],i=[];for(let a=0;a<this.outputLayers.length;a++){const l=this.outputLayers[a],c=this.outputLayersNodeIndices[a],u=this.outputLayersTensorIndices[a],h=`${l.name}_${c}_${u}`;i.push(h)}for(let a=0;a<i.length;a++){const l=i[a];ls(l in s),o.push(s[l])}return on(o)}runInternalGraph(t,e){e==null&&(e=zr(null,t.length));const s={};for(let l=0;l<this.inputs.length;++l){const c=this.inputs[l],u=t[l],h=e[l];s[c.id]=[u,h]}const r=Object.keys(this.nodesByDepth).map(l=>parseInt(l,10)).sort(sl);for(const l of r){const c=this.nodesByDepth[l];for(const u of c){const h=u.outboundLayer,d=u.inputTensors,f=u.outputTensors,p=new Array;for(const m of d)m.id in s&&p.push(s[m.id]);if(p.length===d.length){let m={},g,x,b,w;if(u.callArgs!=null&&(m=u.callArgs),p.length===1){const[y,v]=p[0];m.mask==null&&(m.mask=v),b=Wt(h.call(y,m)),w=Wt(h.computeMask(y,v)),g=[y],x=[v]}else g=p.map(y=>y[0]),x=p.map(y=>y[1]),m.mask==null&&(m.mask=x),b=Wt(h.call(g,m)),w=Wt(h.computeMask(g,x));if(h.activityRegularizer)throw new St("LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");for(let y=0;y<f.length;++y){const v=f[y],$=b[y],N=w[y];s[v.id]=[$,N]}}}}const o=[],i=[],a=[];for(const l of this.outputs){ls(l.id in s,`Could not compute output ${l.name} : ${l.id}`);const[c,u]=s[l.id];a.push(c.shape),o.push(c),i.push(u)}return[o,i,a]}buildNodeConversionMap(t){const e={};let s;for(const r of this.layers){s=r instanceof Wn?1:0;for(let o=0;o<r.inboundNodes.length;o++){const i=Wn.nodeKey(r,o);this.containerNodes.has(i)&&(e[i]=s,s+=1)}}return e}getLayer(t,e){if(e!=null)return this.findLayer(e);if(t==null)throw new F("Provide either a layer name or layer index");if(typeof t=="number")return this.findLayer(t);for(const s of this.layers)if(s.name===t)return s;throw new F(`No such layer: ${t}`)}findLayer(t){if(this.layers.length<=t)throw new F(`Was asked to retrieve layer at index ${t}, but model only has ${this.layers.length} layer(s).`);return this.layers[t]}calculateLosses(){return G(()=>{const t=[];for(const e of this.layers)for(let s=0;s<e.inboundNodes.length;++s){const r=Wn.nodeKey(e,s);this.containerNodes.has(r)&&t.push(...e.calculateLosses())}return t})}getConfig(){const t={name:this.name},e=this.buildNodeConversionMap(this.layers),s=[];for(const i of this.layers){const a=i.getClassName(),l=i.getConfig(),c=[];for(let h=0;h<i.inboundNodes.length;h++){const d=i.inboundNodes[h],f=Wn.nodeKey(i,h);let p={};if(this.containerNodes.has(f)){if(d.callArgs)try{JSON.stringify(d.callArgs),p=d.callArgs}catch{console.warn(`Layer ${i.name} was passed non-serializable keyword arguments: ${d.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),p={}}if(d.inboundLayers.length>0){const m=[];for(let g=0;g<d.inboundLayers.length;g++){const x=d.inboundLayers[g],b=d.nodeIndices[g],w=d.tensorIndices[g],y=Wn.nodeKey(x,b);let v=e[y];v==null&&(v=0),m.push([x.name,v,w,p])}c.push(m)}}}const u={};u.name=i.name,u.className=a,u.config=l,u.inboundNodes=c,s.push(u)}t.layers=s;const r=[];for(let i=0;i<this.inputLayers.length;i++){const a=this.inputLayers[i],l=this.inputLayersNodeIndices[i],c=Wn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=e[c];u==null&&(u=0);const h=this.inputLayersTensorIndices[i];r.push([a.name,u,h])}t.inputLayers=r;const o=[];for(let i=0;i<this.outputLayers.length;i++){const a=this.outputLayers[i],l=this.outputLayersNodeIndices[i],c=Wn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=e[c];u==null&&(u=0);const h=this.outputLayersTensorIndices[i];o.push([a.name,u,h])}return t.outputLayers=o,t}static fromConfig(t,e,s={},r=!1){const o={},i={};function a(g,x){g.name in i?i[g.name].push(x):i[g.name]=[x]}function l(g,x){const b=[];let w;for(const y of x){const v=y[0],$=y[1],N=y[2];if(w=y[3]==null?{}:y[3],!(v in o)){a(g,x);return}const S=o[v];if(S.inboundNodes.length<=$){a(g,x);return}const I=S.inboundNodes[$];b.push(I.outputTensors[N])}b.length>0&&g.apply(on(b),w)}function c(g){const x=g.name,b=As(g,e.customObjects!=null?e.customObjects:{});b.setFastWeightInitDuringBuild(r),o[x]=b,g.inboundNodes.forEach(y=>{if(!(y instanceof Array))throw new F(`Corrupted configuration, expected array for nodeData: ${y}`);a(b,y)})}const u=e.name,h=e.layers;for(const g of h)c(g);for(;!jO(i);)for(const g of h){const x=o[g.name];if(x.name in i){const b=i[x.name];delete i[x.name];for(const w of b)l(x,w)}}const d=[],f=[],p=e.inputLayers;for(const g of p){const x=g[0],b=g[1],w=g[2];ls(x in o);const v=o[x].inboundNodes[b].outputTensors;d.push(v[w])}const m=e.outputLayers;for(const g of m){const x=g[0],b=g[1],w=g[2];ls(x in o);const v=o[x].inboundNodes[b].outputTensors;f.push(v[w])}return new t({inputs:d,outputs:f,name:u})}get stateful(){if(this._stateful)throw new F("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");for(const t of this.layers)if(t.stateful)return!0;return!1}resetStates(){G(()=>{this.layers.forEach(t=>{t.stateful&&t.resetStates()})})}}function dL(n,t,e){const s=t.length;if(n==null||Array.isArray(n)&&n.length===0)return t.map(r=>null);if(s===1)return Array.isArray(n)&&n.length===1?n:typeof n=="object"&&t[0]in n?[n[t[0]]]:[n];if(Array.isArray(n)){if(n.length!==s)throw new Error(`Provided ${e} is an array of ${n.length} element(s), but the model has ${s} outputs. Make sure a set of weights is provided for each model output.`);return n}else if(typeof n=="object"&&Object.keys(n).length>0&&typeof n[Object.keys(n)[0]]=="object"){const r=[];return t.forEach(o=>{o in n?r.push(n[o]):r.push(null)}),r}else throw new Error(`The model has multiple (${s}) outputs, so ${e} must be either an array with ${s} elements or an object with ${t} keys. Provided ${e} not understood: ${JSON.stringify(n)}`)}function x1(n,t){return dL(n,t,"classWeight")}async function b1(n,t,e,s){if(e!=null){const r=G(()=>{if(n.shape.length===1)return Ir(n);if(n.shape.length===2){if(n.shape[1]>1)return mi(n,1);if(n.shape[1]===1)return V(n,[n.shape[0]]);throw new Error(`Encountered unexpected last-dimension size (${n.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw new Error(`Unexpected rank of target (y) tensor (${n.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),o=Array.from(await r.data());Rt(r);const i=[];return o.forEach(a=>{if(e[a]==null)throw new Error(`classWeight must contain all classes in the training data. The class ${a} exists in the data but not in classWeight`);i.push(e[a])}),pn(i,"float32")}else return null}function fL(n,t){return O(n,t)}const pL=32;function y1(n,t){let e,s;const r=t;e=r.xs,s=r.ys,T(e!=null&&s!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${t}`);const o=jg("input",n.inputNames,e),i=jg("output",n.outputNames,s),a=o[0].shape[0];T(o.length===n.inputs.length,()=>`LayersModel has ${n.inputs.length} inputs, but the dataset provides ${o.length} inputs.  (Expected input keys: ${JSON.stringify(n.inputNames)})`),T(i.length===n.outputs.length,()=>`LayersModel has ${n.outputs.length} outputs, but the dataset provides ${i.length} outputs.  (Expected output keys: ${JSON.stringify(n.outputNames)})`);for(let l=0;l<o.length;l++)T(o[l].shape[0]===a,()=>`Batch size mismatch: input ${n.inputNames[l]} has ${o[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);for(let l=0;l<i.length;l++)T(i[l].shape[0]===a,()=>`Batch size mismatch: output ${n.outputNames[l]} has ${i[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);return{xs:o,ys:i}}function jg(n,t,e){if(e instanceof ve)return[e];if(Array.isArray(e))return T(e.length===t.length,()=>`Received an array of ${e.length} Tensors, but expected ${t.length} to match the ${n} keys ${t}.`),e;{const s=[];for(const r of t){if(e[r]==null)throw new F(`The feature data generated by the dataset lacks the required ${n} key '${r}'.`);s.push(e[r])}return s}}function mL(n){if(n.length===3)throw new St("Validation with sample weights is not implemented yet.");return{xs:n[0],ys:n[1]}}async function gL(n,t,e){const s=e.batchesPerEpoch!=null;if(T(n.optimizer!=null,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),T(e!=null,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),T(e.epochs!=null&&e.epochs>0&&Number.isInteger(e.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${e.epochs}`),T(!s||e.batchesPerEpoch>0&&Number.isInteger(e.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${e.batchesPerEpoch}`),T(e.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),n.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");n.isTraining=!0;try{const r=e.validationData!=null;let o,i;if(r)if(Yg(e.validationData))T(e.validationBatches==null||e.validationBatches>0&&Number.isInteger(e.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${e.validationBatches}`);else{const g=mL(e.validationData);o=g.xs,i=g.ys}const a=n.makeTrainFunction(),l=n.getDedupedMetricsNames();let c;r?c=l.slice().concat(l.map(g=>"val_"+g)):c=l.slice();const u=l1(e.callbacks,e.yieldEvery),h=e.verbose==null?1:e.verbose,{callbackList:d,history:f}=c1(u,h,e.epochs,null,null,xL(t,e),null,r,c);d.setModel(n),n.history=f,await d.onTrainBegin(),n.stopTraining_=!1;let p=e.initialEpoch==null?0:e.initialEpoch,m=await t.iterator();for(;p<e.epochs;){const g={};await d.onEpochBegin(p);let x=0,b=0;for(s||(m=await t.iterator());!s||x<e.batchesPerEpoch;){const w=await m.next();if(s&&w.done){console.warn(`You provided \`batchesPerEpoch\` as ${e.batchesPerEpoch}, but your dataset iterator ran out of data after ${x} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${e.batchesPerEpoch*e.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(w.value!=null){const{xs:y,ys:v}=y1(n,w.value),$={};$.batch=b,$.size=y[0].shape[0],await d.onBatchBegin(b,$);const N=[];if(e.classWeight!=null){const k=x1(e.classWeight,n.outputNames);for(let C=0;C<k.length;++C)N.push(await b1(v[C],null,k[C]))}const S=y.concat(v).concat(N),I=a(S);Rt(S);for(let k=0;k<l.length;++k){const C=l[k],E=I[k];$[C]=E,fs(E)}await d.onBatchEnd(b,$),a1($),b++,x++}if(s?x>=e.batchesPerEpoch:w.done){if(r){let y;Yg(e.validationData)?y=Wt(await n.evaluateDataset(e.validationData,{batches:e.validationBatches})):y=Wt(n.evaluate(o,i,{batchSize:e.validationBatchSize==null?pL:e.validationBatchSize,verbose:0}));for(let v=0;v<n.metricsNames.length;++v)g[`val_${n.metricsNames[v]}`]=y[v]}break}if(n.stopTraining_)break}if(await d.onEpochEnd(p,g),p++,n.stopTraining_)break}return await d.onTrainEnd(),await n.history.syncData(),n.history}finally{n.isTraining=!1}}function xL(n,t){let e=null;return t.batchesPerEpoch!=null?e=t.batchesPerEpoch:Number.isFinite(n.size)&&(e=n.size),e}function Yg(n){return typeof n.iterator=="function"}function bL(n){return typeof n.next=="function"}async function yL(n,t,e){e=e||{};const s=e.batches!=null,r=n.testFunction;let o=[];if(e.verbose>0)throw new St("Verbose mode is not implemented yet.");T(!s||e.batches>0&&Number.isInteger(e.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(e.batches)}`);const i=bL(t)?t:await t.iterator();let a=0,l=0;for(;!s||l<e.batches;){const c=await i.next();if(o=G(()=>{if(c.value){const{xs:u,ys:h}=y1(n,c.value),d=u.concat(h),f=G(()=>r(d));if(Rt(d),l===0)for(let m=0;m<f.length;++m)o.push(Lt(0));const p=d[0].shape[0];for(let m=0;m<f.length;++m){const g=f[m],x=o[m];o[m]=G(()=>et(o[m],O(p,g))),l>0&&Rt(x)}Rt(f),a+=p,++l}return o}),c.done){s&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${e.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let c=0;c<o.length;++c){const u=o[c];o[c]=bt(o[c],a),Rt(u)}return on(o)}function ph(n){T(n>0&&Number.isInteger(n),()=>`batchSize is required to be a positive integer, but got ${n}`)}function jo(n,t,e){return n==null?[null]:Array.isArray(n)?n.map(s=>Nr(s,t,e-t)):Nr(n,t,e-t)}function dd(n,t){return G(()=>n==null?null:Array.isArray(n)?n.map(e=>dd(e,t)):Xy(n,t.dtype==="int32"?t:ut(t,"int32")))}function mh(n,t){const e=[];let s=0,r=null;for(;s<n;)r=s+t,r>=n&&(r=n),e.push([s,r]),s=r;return e}function w1(n){const t=[];n instanceof ve&&(n=[n]);for(let e=0;e<n.length;++e){const s=n[e];if(s.rank===1)t.push(Ma(s,1));else{if(s.rank===0)throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");t.push(s)}}return t}function Vn(n,t){if(n==null)return;const e=[];if(t instanceof ve)e.push(t.id);else if(Array.isArray(t))t.forEach(r=>e.push(r.id));else if(t!=null)for(const r in t){const o=t[r];e.push(o.id)}const s=[];if(n instanceof ve)e.indexOf(n.id)===-1&&s.push(n);else if(Array.isArray(n))n.forEach(r=>{e.indexOf(r.id)===-1&&s.push(r)});else if(n!=null)for(const r in n){const o=n[r];e.indexOf(o.id)===-1&&s.push(o)}s.forEach(r=>{r.isDisposed||r.dispose()})}function wL(n){return n instanceof ve}function fd(n){return Array.isArray(n)}function Zg(n){return!wL(n)&&!fd(n)}function Jg(n,t,e,s=!0,r=""){if(t==null||t.length===0){if(n!=null){let i=!1;if(fd(n)&&n.length>0)i=!0;else if(Zg(n)){for(const a in n)if(n.hasOwnProperty(a)){i=!0;break}}else i=!0;if(i)throw new F(`Error when checking model ${r} expected no data, but got ${n}`)}return[]}if(n==null)return t.map(i=>null);let o;if(Zg(n)){n=n,o=[];for(const i of t){if(n[i]==null)throw new F(`No data provided for "${i}". Need data for each key in: ${t}`);o.push(n[i])}}else if(fd(n)){if(n=n,n.length!==t.length)throw new F(`Error when checking model ${r}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${n}`);o=n}else{if(n=n,t.length>1)throw new F(`The model ${r} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${n.shape}`);o=[n]}if(o=w1(o),e!=null)for(let i=0;i<t.length;++i){if(e[i]==null)continue;const a=o[i];if(a.shape.length!==e[i].length)throw new F(`Error when checking ${r}: expected ${t[i]} to have ${e[i].length} dimension(s). but got array with shape ${a.shape}`);for(let l=0;l<e[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=e[i][l];if(u!=null&&u>=0&&c!==u)throw new F(`${r} expected a batch of elements where each example has shape [${e[i].slice(1,e[i].length)}] (i.e.,tensor shape [*,${e[i].slice(1,e[i].length)}]) but the ${r} received an input with ${a.shape[0]} examples, each with shape [${a.shape.slice(1,a.shape.length)}] (tensor shape [${a.shape}])`)}}return o}function vL(n,t,e){const s=Js(n.map(o=>o.shape[0]));s.sort();const r=Js(t.map(o=>o.shape[0]));if(r.sort(),s.length>1)throw new F(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(n.map(o=>o.shape))}`);if(r.length>1)throw new F(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(o=>o.shape))}`);if(s.length>0&&r.length>0&&!Pt(s,r))throw new F(`Input Tensors should have the same number of samples as target Tensors. Found ${s[0]} input sample(s) and ${r[0]} target sample(s).`)}function CL(n,t,e){const s=[Ou,Mu,vi];for(let r=0;r<n.length;++r){const o=n[r],i=t[r],a=e[r];if(i!=null){if(i===vi&&o.shape[o.shape.length-1]===1)throw new F(`You are passing a target array of shape ${o.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(s.indexOf(i)!==-1){const l=o.shape.slice(1),c=a.slice(1);for(let u=0;u<l.length;++u){const h=l[u],d=c[u];if(d!=null&&h!==d)throw new F(`A target Tensor with shape ${o.shape} was passed for an output of shape ${a}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function Qg(n,t,e,s=!0,r=""){let o;if(Array.isArray(n)){if(n.length!==t.length)throw new F(`Error when checking model ${r}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${n.length} Tensors(s).`);o=n}else{if(t.length>1)throw new F(`The model expects ${t.length} ${r} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(n.shape)}.`);o=[n]}if(e!=null)for(let i=0;i<t.length;++i){if(e[i]==null)continue;const a=o[i];if(a.shape.length!==e[i].length)throw new F(`Error when checking ${r}: expected ${t[i]} to have ${e[i].length} dimension(s), but got array with shape ${JSON.stringify(a.shape)}`);for(let l=0;l<e[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=e[i][l];if(u!=null&&u!==c)throw new F(`Error when checking ${r}: expected ${t[i]} to have shape ${JSON.stringify(e[i])} but got array with shape ${JSON.stringify(a.shape)}.`)}}}function $L(n,t){if(n==null||Array.isArray(n)&&n.length===0)return t.map(s=>[]);let e;if(typeof n=="string"||typeof n=="function")e=[n];else if(Array.isArray(n)||typeof n=="object")e=n;else throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${n}`);if(Array.isArray(e))return t.map(s=>e);{const s=[];for(const r of t){let o=e.hasOwnProperty(r)?e[r]:[];Array.isArray(o)||(o=[o]),s.push(o)}return s}}const kL="layers-model";class fo extends Wn{constructor(t){super(t),this.isTraining=!1}summary(t,e,s=console.log){if(!this.built)throw new F("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");iL(this,t,e,s)}compile(t){if(t.loss==null&&(t.loss=[]),this.loss=t.loss,typeof t.optimizer=="string")this.optimizer_=oL(t.optimizer),this.isOptimizerOwned=!0;else{if(!(t.optimizer instanceof hr))throw new F("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=t.optimizer,this.isOptimizerOwned=!1}let e=[];if(!Array.isArray(t.loss)&&typeof t.loss!="string"&&typeof t.loss!="function"){t.loss=t.loss;for(const i in t.loss)if(this.outputNames.indexOf(i)===-1)throw new F(`Unknown entry in loss dictionary: "${i}". Only expected the following keys: ${this.outputNames}`);for(const i of this.outputNames)t.loss[i]==null&&console.warn(`Output "${i}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${i} during training`),e.push(fh(t.loss[i]))}else if(Array.isArray(t.loss)){if(t.loss.length!==this.outputs.length)throw new F(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${t.loss}.`);e=t.loss.map(a=>fh(a))}else{const i=fh(t.loss);this.outputs.forEach(a=>{e.push(i)})}this.lossFunctions=e,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let i=0;i<this.outputs.length;++i){const a=this.internalOutputShapes[i],l=this.outputNames[i];this.feedOutputNames.push(l),this.feedOutputShapes.push(a),this.feedLossFns.push(this.lossFunctions[i])}const s=[];this.metrics=t.metrics,this.metricsNames=["loss"],this.metricsTensors=[],Sr("loss",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=this.lossFunctions[i];this.outputs.length>1&&(this.metricsTensors.push([a,i]),this.metricsNames.push(this.outputNames[i]+"_loss"))}});const r=$L(t.metrics,this.outputNames),o=(i,a,l)=>{this.outputNames.length>1&&(a=this.outputNames[i]+"_"+a),this.metricsNames.push(a),this.metricsTensors.push([l,i])};Sr("metric",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=r[i];(c=>{let h,d,f;for(const p of c){if(typeof p=="string"&&["accuracy","acc","crossentropy","ce"].indexOf(p)!==-1){const g=this.internalOutputShapes[i];g[g.length-1]===1||this.lossFunctions[i]===Mu?["accuracy","acc"].indexOf(p)!==-1?d=h1:["crossentropy","ce"].indexOf(p)!==-1&&(d=jM):this.lossFunctions[i]===sc?["accuracy","acc"].indexOf(p)!==-1?d=YM:["crossentropy","ce"].indexOf(p)!==-1&&(d=p1):["accuracy","acc"].indexOf(p)!==-1?d=d1:["crossentropy","ce"].indexOf(p)!==-1&&(d=f1);let x;["accuracy","acc"].indexOf(p)!==-1?x="acc":["crossentropy","ce"].indexOf(p)!==-1&&(x="ce"),f=d,h=""+x}else f=rL(p),h=""+il(p);let m;Sr(h,()=>{m=f}),o(i,h,m)}})(a)}}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(t,e,s={}){const r=s.batchSize==null?32:s.batchSize;ph(r);const i=this.standardizeUserDataXY(t,e,!0,r);try{const a=i[0].concat(i[1]);this.makeTestFunction();const l=this.testFunction,c=this.testLoop(l,a,r,s.verbose,s.steps);return on(c)}finally{Vn(i[0],t),Vn(i[1],e)}}async evaluateDataset(t,e){return this.makeTestFunction(),yL(this,t,e)}checkNumSamples(t,e,s,r="steps"){let o;if(s!=null){if(o=null,e!=null)throw new F(`If ${r} is set, batchSize must be null or undefined.Got batchSize = ${e}`)}else if(t!=null)Array.isArray(t)?o=t[0].shape[0]:o=t.shape[0];else throw new F(`Either the input data should have a defined shape, or ${r} shoud be specified.`);return o}execute(t,e){if(Array.isArray(e)&&e.length===0)throw new F("`outputs` is an empty Array, which is not allowed.");const s=Array.isArray(e),r=s?e:[e],o=this.retrieveSymbolicTensors(r),i=new Xs;if(t instanceof ve&&(t=[t]),Array.isArray(t)){if(t.length!==this.inputs.length)throw new F(`The number of inputs provided (${t.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let l=0;l<this.inputs.length;++l)i.add(this.inputs[l],t[l])}else for(const l of this.inputs){const c=t[l.name];if(c==null)throw new F(`No value is provided for the model's input ${l.name}`);i.add(l,c)}const a=si(o,i);return s?a:a[0]}retrieveSymbolicTensors(t){const e=zr(null,t.length);let s=t.length;for(const r of this.layers){const o=Array.isArray(r.output)?r.output:[r.output],i=o.map(a=>a.name);for(let a=0;a<t.length;++a){const l=i.indexOf(t[a]);if(l!==-1&&(e[a]=o[l],s--),s===0)break}if(s===0)break}if(s>0){const r=[];throw e.forEach((o,i)=>{o==null&&r.push(t[i])}),new F(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(r)}`)}return e}predictLoop(t,e=32,s=!1){return G(()=>{const r=this.checkNumSamples(t);if(s)throw new St("Verbose predictLoop() is not implemented yet.");const o=mh(r,e),i=this.outputs.map(a=>[]);for(let a=0;a<o.length;++a)G(()=>{const c=o[a][0],u=o[a][1],h=jo(t,c,u),d=[];if(Array.isArray(h))for(let p=0;p<h.length;++p)d.push({key:this.inputs[p],value:h[p]});else d.push({key:this.inputs[0],value:h});const f=new Xs(d);return si(this.outputs,f)}).forEach((c,u)=>i[u].push(c));return on(i.map(a=>an(a,0)))})}predict(t,e={}){const s=w1(t);Qg(s,this.inputNames,this.feedInputShapes,!1);try{const r=e.batchSize==null?32:e.batchSize;return ph(r),this.predictLoop(s,r)}finally{Vn(s,t)}}predictOnBatch(t){Qg(t,this.inputNames,this.feedInputShapes,!0);const e=(Array.isArray(t)?t[0]:t).shape[0];return this.predictLoop(t,e)}standardizeUserDataXY(t,e,s=!0,r){if(this.optimizer_==null)throw new An("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");const o=[];for(let i=0;i<this.feedOutputShapes.length;++i){const a=this.feedOutputShapes[i];this.feedLossFns[i]===sc?o.push(a.slice(0,a.length-1).concat([1])):o.push(a)}if(t=Jg(t,this.feedInputNames,this.feedInputShapes,!1,"input"),e=Jg(e,this.feedOutputNames,o,!1,"target"),vL(t,e),CL(e,this.feedLossFns,this.feedOutputShapes),this.stateful&&r!=null&&r>0&&t[0].shape[0]%r!==0)throw new F(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${r}. Found: ${t[0].shape[0]} sample(s).`);return[t,e]}async standardizeUserData(t,e,s,r,o=!0,i){const[a,l]=this.standardizeUserDataXY(t,e,o,i);if(s!=null)throw new Error("sample weight is not supported yet.");let c=null;if(r!=null){const u=x1(r,this.outputNames);c=[];for(let h=0;h<u.length;++h)c.push(await b1(l[h],null,u[h]))}return[a,l,c]}testLoop(t,e,s,r=0,o){return G(()=>{const i=this.checkNumSamples(e,s,o,"steps"),a=[];if(r>0)throw new St("Verbose mode is not implemented yet.");if(o!=null)throw new St("steps mode in testLoop() is not implemented yet");{const l=mh(i,s),c=pn(Jn(0,i));for(let u=0;u<l.length;++u){const h=l[u][0],d=l[u][1],f=Nr(c,h,d-h),p=dd(e,f),m=t(p);if(u===0)for(let g=0;g<m.length;++g)a.push(Lt(0));for(let g=0;g<m.length;++g){const x=m[g];a[g]=et(a[g],O(d-h,x))}}for(let u=0;u<a.length;++u)a[u]=bt(a[u],i)}return a})}getDedupedMetricsNames(){const t=this.metricsNames,e=[];for(let s=0;s<t.length;++s){const r=t[s];let o=r;if(Lg(t,r)>1){const i=Lg(t.slice(0,s),r);o+=`_${i}`}e.push(o)}return e}makeTrainFunction(){return t=>{const e=[],s=t.slice(0,this.inputs.length),r=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),o=t.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),i=[],a=()=>{const h=[];for(let m=0;m<this.inputs.length;++m)h.push({key:this.inputs[m],value:s[m]});const d=new Xs(h),f=si(this.outputs,d,{training:!0});let p;for(let m=0;m<this.lossFunctions.length;++m){const g=this.lossFunctions[m];let x=g(r[m],f[m]);o[m]!=null&&(x=fL(x,o[m]));const b=be(x);e.push(b),m===0?p=x:p=et(p,x)}for(let m=0;m<this.metricsTensors.length;++m){let g;if(this.outputs.length>1&&m<this.outputs.length)g=e[m];else{const x=this.metricsTensors[m][0],b=this.metricsTensors[m][1];g=be(x(r[b],f[b]))}fs(g),i.push(g)}return p=be(p),this.calculateLosses().forEach(m=>{p=et(p,m)}),p},l=this.collectedTrainableWeights.map(h=>h.read());return[this.optimizer_.minimize(a,!0,l)].concat(i)}}makeTestFunction(){this.testFunction=t=>G(()=>{const e=[];let s;const r=t.slice(0,this.inputs.length),o=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=[];for(let c=0;c<this.inputs.length;++c)i.push({key:this.inputs[c],value:r[c]});const a=new Xs(i),l=si(this.outputs,a);for(let c=0;c<this.lossFunctions.length;++c){const u=this.lossFunctions[c],h=be(u(o[c],l[c]));c===0?s=h:s=et(s,h),e.push(s)}for(let c=0;c<this.metricsTensors.length;++c){const u=this.metricsTensors[c][0],h=this.metricsTensors[c][1],d=be(u(o[h],l[h]));e.push(d)}return e})}async fit(t,e,s={}){if(this.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");this.isTraining=!0;let r,o,i,a,l,c,u,h,d;try{const f=s.batchSize==null?32:s.batchSize;ph(f);const m=await this.standardizeUserData(t,e,s.sampleWeight,s.classWeight,!1,f);r=m[0],o=m[1],d=m[2];let g=!1,x;if(s.validationData!=null&&s.validationData.length>0){if(g=!0,s.validationData.length===2)l=s.validationData[0],c=s.validationData[1];else throw s.validationData.length===3?new St("validationData including sample weights is not supported yet."):new F(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${s.validationData} is invalid.`);const k=await this.standardizeUserData(l,c,null,null,!0,f);u=k[0],h=k[1],x=u.concat(h)}else if(s.validationSplit!=null&&s.validationSplit>0&&s.validationSplit<1){g=!0;const I=Math.floor(r[0].shape[0]*(1-s.validationSplit)),k=r[0].shape[0];u=jo(r,I,k),i=r,r=jo(r,0,I),h=jo(o,I,k),a=o,o=jo(o,0,I),x=u.concat(h)}else s.validationSteps!=null&&(g=!0);const b=r.concat(o).concat(d);this.checkTrainableWeightsConsistency();const w=this.makeTrainFunction(),y=this.getDedupedMetricsNames();let v,$;g?(this.makeTestFunction(),v=this.testFunction,$=y.slice().concat(y.map(I=>"val_"+I))):(v=null,x=[],$=y.slice());const N=l1(s.callbacks,s.yieldEvery);return await this.fitLoop(w,b,y,f,s.epochs,s.verbose,N,v,x,s.shuffle,$,s.initialEpoch,null,null)}finally{this.isTraining=!1,Vn(r,t),Vn(o,e),Vn(i,t),Vn(a,e),Vn(u,l),Vn(h,c),d!=null&&Rt(d)}}async fitLoop(t,e,s,r,o,i,a,l,c,u,h,d,f,p){r==null&&(r=32),o==null&&(o=1),u==null&&(u=!0),d==null&&(d=0);let m=!1;if(l!=null&&c!=null&&(m=!0),p!=null&&(m=!0,f==null))throw new F("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");const g=this.checkNumSamples(e,r,f,"steps_per_epoch");let x;g!=null&&(x=Jn(0,g)),i==null&&(i=1);const{callbackList:b,history:w}=c1(a,i,o,d,g,f,r,m,h);b.setModel(this),this.history=w,await b.onTrainBegin(),this.stopTraining_=!1;for(let y=d;y<o;++y){await b.onEpochBegin(y);const v={};if(f!=null)throw new St("stepsPerEpoch mode is not implemented yet.");{if(u==="batch")throw new St("batch shuffling is not implemneted yet");u&&aN(x);const $=pn(x),N=mh(g,r);for(let S=0;S<N.length;++S){const I={};if(await b.onBatchBegin(S,I),G(()=>{const k=N[S][0],C=N[S][1],E=Nr($,k,C-k);I.batch=S,I.size=C-k;const _=dd(e,E),R=t(_);for(let M=0;M<s.length;++M){const z=s[M],P=R[M];I[z]=P,fs(P)}if(S===N.length-1&&m){const M=this.testLoop(l,c,r);for(let z=0;z<s.length;++z){const P=s[z],U=M[z];fs(U),v["val_"+P]=U}}}),await b.onBatchEnd(S,I),a1(I),this.stopTraining_)break}$.dispose()}if(await b.onEpochEnd(y,v),this.stopTraining_)break}return await b.onTrainEnd(),await this.history.syncData(),this.history}async fitDataset(t,e){return gL(this,t,e)}async trainOnBatch(t,e){const s=await this.standardizeUserData(t,e),r=s[0],o=s[1],a=this.makeTrainFunction()(r.concat(o)),l=[];for(const c of a){const u=await c.data();l.push(u[0])}return Rt(a),Vn(s[0],t),Vn(s[1],e),on(l)}getNamedWeights(t){const e=[],s=t!=null&&t.trainableOnly,r=s?this.trainableWeights:this.weights,o=this.getWeights(s);for(let i=0;i<r.length;++i)s&&!r[i].trainable||e.push({name:r[i].originalName,tensor:o[i]});return e}set stopTraining(t){this.stopTraining_=t}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(t){this.optimizer_!==t&&(this.optimizer_=t,this.isOptimizerOwned=!1)}dispose(){const t=super.dispose();if(t.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){const e=hg().numTensors;this.optimizer_.dispose(),t.numDisposedVariables+=e-hg().numTensors}return t}getLossIdentifiers(){let t;if(typeof this.loss=="string")t=Ts(this.loss);else if(Array.isArray(this.loss)){for(const e of this.loss)if(typeof e!="string")throw new Error("Serialization of non-string loss is not supported.");t=this.loss.map(e=>Ts(e))}else{const e=Object.keys(this.loss);t={};const s=this.loss;for(const r of e)if(typeof s[r]=="string")t[r]=Ts(s[r]);else throw new Error("Serialization of non-string loss is not supported.")}return t}getMetricIdentifiers(){if(typeof this.metrics=="string"||typeof this.metrics=="function")return[Ts(il(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(t=>Ts(il(t)));{const t={};for(const e in this.metrics)t[e]=Ts(il(this.metrics[e]));return t}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(t){if(t.weighted_metrics!=null)throw new Error("Loading weight_metrics is not supported yet.");if(t.loss_weights!=null)throw new Error("Loading loss_weights is not supported yet.");if(t.sample_weight_mode!=null)throw new Error("Loading sample_weight_mode is not supported yet.");const e=ud(t.optimizer_config),s=As(e);let r;if(typeof t.loss=="string")r=yr(t.loss);else if(Array.isArray(t.loss))r=t.loss.map(i=>yr(i));else if(t.loss!=null){r={};for(const i in t.loss)r[i]=yr(t.loss[i])}let o;if(Array.isArray(t.metrics))o=t.metrics.map(i=>yr(i));else if(t.metrics!=null){o={};for(const i in t.metrics)o[i]=yr(t.metrics[i])}this.compile({loss:r,metrics:o,optimizer:s})}async save(t,e){if(typeof t=="string"){const c=sT(t);if(c.length===0)throw new F(`Cannot find any save handlers for URL '${t}'`);if(c.length>1)throw new F(`Found more than one (${c.length}) save handlers for URL '${t}'`);t=c[0]}if(t.save==null)throw new F("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");const s=await fg(this.getNamedWeights(e)),a={modelTopology:this.toJSON(null,!1),format:kL,generatedBy:`TensorFlow.js tfjs-layers v${g1}`,convertedBy:null};if((e==null?!1:e.includeOptimizer)&&this.optimizer!=null){a.trainingConfig=this.getTrainingConfig();const c="optimizer",{data:u,specs:h}=await fg(await this.optimizer.getWeights(),c);s.specs.push(...h),s.data=nT([s.data,u])}return this.userDefinedMetadata!=null&&(Kg(this.userDefinedMetadata,this.name,!0),a.userDefinedMetadata=this.userDefinedMetadata),a.weightData=s.data,a.weightSpecs=s.specs,t.save(a)}setUserDefinedMetadata(t){Kg(t,this.name),this.userDefinedMetadata=t}getUserDefinedMetadata(){return this.userDefinedMetadata}}fo.className="Model";tt(fo);class v1 extends fo{}v1.className="Functional";tt(v1);class Ci extends fo{constructor(t){if(super({inputs:[],outputs:[]}),t=t||{},this.trainable=!0,this.built=!1,this.name=t.name!=null?t.name:Du("sequential_"),t.layers!=null)for(const e of t.layers)this.add(e)}checkShape(t){if(t.inboundNodes[0].outputTensors[0].shape.some(s=>s<0))throw new F(`Negative dimension size caused by adding layer ${t.name} with input shape [${t.inboundNodes[0].inputTensors[0].shape}]`)}add(t){const e=t instanceof Ci||t instanceof fo;let s;if(e){if(s=t,s.outputs.length!==1)throw new F("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(s.inputs.length!==1)throw new F("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new F("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");const r=SM({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+"_input"});t.apply(r)}if(e)this.outputs=s.outputs,this.inputs=s.inputs;else{if(t.inboundNodes.length!==1)throw new F(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new F("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=n1(this.outputs[0])}this.inboundNodes=[],new Fu({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:zr(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(r=>r.shape),outputShapes:this.outputs[0].shape})}else{const r=t.apply(this.outputs[0]);if(Array.isArray(r))throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[r],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw new TypeError("There are no layers in the model.");if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{const t=this.layers.length-1;this.layers[t].outboundNodes=[],this.outputs=[this.layers[t].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(t,e){return this.model==null&&this.build(),this.model.call(t,e)}build(t){if(Ot(t),this.inputs.length===0||this.outputs.length===0)throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new fo({inputs:this.inputs,outputs:this.outputs[0],name:this.name+"_model"}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(t,e,s=console.log){this.built||this.build(),super.summary(t,e,s)}setWeights(t){this.model==null&&this.build(),this.model.setWeights(t)}evaluate(t,e,s={}){if(!this.built)throw new An("The model needs to be compiled before being used.");return this.model.evaluate(t,e,s)}async evaluateDataset(t,e){if(!this.built)throw new An("The model needs to be compiled before being used.");return this.model.evaluateDataset(t,e)}predict(t,e={}){return this.model==null&&this.build(),this.model.predict(t,e)}predictOnBatch(t){return this.model==null&&this.build(),this.model.predictOnBatch(t)}compile(t){this.build(),this.model.compile(t),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(t){this.model.optimizer=t}async fit(t,e,s={}){if(!this.built)throw new An("The model needs to be compiled before being used.");return this.model.fit(t,e,s)}async fitDataset(t,e){if(!this.built)throw new An("The model needs to be compiled before being used.");return this.model.fitDataset(t,e)}async trainOnBatch(t,e){return this.model.trainOnBatch(t,e)}static fromConfig(t,e,s={},r=!1){let o,i={};if(e instanceof Array){if(e[0].className==null||e[0].className==="Merge")throw new F("Legacy serialization format not supported yet.");o=e}else T(e.layers!=null,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),o=e.layers,delete e.layers,i=e;const a=new t(i);if(!(a instanceof Ci))throw new St(`Sequential.fromConfig called on non-Sequential input: ${a}`);for(const l of o){const u=As(l,void 0,r);r&&u.setFastWeightInitDuringBuild(!0),a.add(u)}return a}set stopTraining(t){if(this.model==null)throw new F("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=t}get stopTraining(){if(this.model==null)throw new F("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){const t=[];for(const e of this.layers){const s={};s.className=e.getClassName(),s.config=e.getConfig(),t.push(s)}return{name:this.name,layers:t}}}Ci.className="Sequential";tt(Ci);let Ge=class extends Mo{getConfig(){return{}}};class C1 extends Ge{apply(t,e=1){return uM(t,e)}}C1.className="elu";tt(C1);class $1 extends Ge{apply(t){return Hb(t)}}$1.className="selu";tt($1);class k1 extends Ge{apply(t){return Hr(t)}}k1.className="relu";tt(k1);class I1 extends Ge{apply(t){return G(()=>bi(6,Hr(t)))}}I1.className="relu6";tt(I1);class S1 extends Ge{apply(t){return t}}S1.className="linear";tt(S1);class N1 extends Ge{apply(t){return _o(t)}}N1.className="sigmoid";tt(N1);class T1 extends Ge{apply(t){return dM(t)}}T1.className="hardSigmoid";tt(T1);class E1 extends Ge{apply(t){return Ta(t)}}E1.className="softplus";tt(E1);class R1 extends Ge{apply(t){return hM(t)}}R1.className="softsign";tt(R1);class A1 extends Ge{apply(t){return $u(t)}}A1.className="tanh";tt(A1);let qp=class extends Ge{apply(t,e=-1){return tp(t,e)}};qp.className="softmax";tt(qp);class D1 extends Ge{apply(t,e=-1){return Lb(t,e)}}D1.className="logSoftmax";tt(D1);class _1 extends Ge{apply(t){return G(()=>G(()=>{const e=Math.sqrt(2),s=O(.5,et(1,_b(bt(t,e))));return O(t,s)}))}}_1.className="gelu";tt(_1);class F1 extends Ge{apply(t){return G(()=>O(.5,O(t,et(1,$u(O(We(bt(2,Math.PI)),et(t,O(.044715,Mr(t,3)))))))))}}F1.className="gelu_new";tt(F1);class O1 extends Ge{apply(t){return G(()=>O(t,$u(Ta(t))))}}O1.className="mish";tt(O1);class M1 extends Ge{apply(t,e=1){return G(()=>O(_o(O(t,e)),t))}}M1.className="swish";tt(M1);function nr(n){return n.getClassName()}function gh(n,t={}){return Oa(n,Rn.getMap().classNameMap,t,"activation")}function sr(n){if(n==null){const t={};return t.className="linear",t.config={},gh(t)}if(typeof n=="string"){const t={};return t.className=n,t.config={},gh(t)}else return n instanceof Ge?n:gh(n)}function IL(n){if(n!=null&&typeof n!="object")throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${n}`)}class L1 extends Mo{}class P1 extends L1{constructor(t){super(),IL(t),this.l1=t==null||t.l1==null?.01:t.l1,this.l2=t==null||t.l2==null?.01:t.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(t){return G(()=>{let e=Re([1]);return this.hasL1&&(e=et(e,gt(O(this.l1,Ye(t))))),this.hasL2&&(e=et(e,gt(O(this.l2,La(t))))),V(e,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(t,e){return new t({l1:e.l1,l2:e.l2})}}P1.className="L1L2";tt(P1);const tx={l1l2:"L1L2"};function Xt(n){return Dp(n)}function ex(n,t={}){return Oa(n,Rn.getMap().classNameMap,t,"regularizer")}function re(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in tx?tx[n]:n,config:{}};return ex(e)}else return n instanceof L1?n:ex(n)}class z1 extends Et{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null&&(this.maxValue=t.maxValue)}call(t,e){t=Ct(t);let s=Hr(t);return this.maxValue!=null&&(s=$n(s,0,this.maxValue)),s}computeOutputShape(t){return t}getConfig(){const t={maxValue:this.maxValue},e=super.getConfig();return Object.assign(t,e),t}}z1.className="ReLU";tt(z1);class B1 extends Et{constructor(t){super(t??{}),this.DEFAULT_ALPHA=.3,t==null&&(t={}),this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=Ct(t);return Gf(s,this.alpha)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}}B1.className="LeakyReLU";tt(B1);class V1 extends Et{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA_INITIALIZER="zeros",t==null&&(t={}),this.supportsMasking=!0,this.alphaInitializer=se(t.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=re(t.alphaRegularizer),this.alphaConstraint=Ie(t.alphaConstraint),t.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(t.sharedAxes))this.sharedAxes=t.sharedAxes;else if(typeof t.sharedAxes=="number")this.sharedAxes=[t.sharedAxes];else throw new F(`Expected sharedAxes to be a number or an array of numbers, but got ${t.sharedAxes}`)}build(t){t=Ot(t);const e=t.slice(1);if(this.sharedAxes!=null)for(const r of this.sharedAxes)e[r-1]=1;this.alpha=this.addWeight("alpha",e,"float32",this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);const s={};if(this.sharedAxes!=null)for(let r=1;r<t.length;++r)s[r]=t[r];this.inputSpec=[new $e({ndim:t.length,axes:s})],this.built=!0}call(t,e){return t=Ct(t),Yf(t,this.alpha.read())}getConfig(){const t={alphaInitializer:oe(this.alphaInitializer),alphaRegularizer:Xt(this.alphaRegularizer),alphaConstraint:ke(this.alphaConstraint),sharedAxes:this.sharedAxes},e=super.getConfig();return Object.assign(t,e),t}}V1.className="PReLU";tt(V1);let W1=class extends Et{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA=1,t==null&&(t={}),t.alpha!=null&&t.alpha!==this.DEFAULT_ALPHA)throw new St(`Non-default alpha value (${t.alpha}) is not supported by the ELU layer yet.`);this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=Ct(t);return Su(s)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}};W1.className="ELU";tt(W1);class U1 extends Et{constructor(t){super(t??{}),this.DEFAULT_THETA=1,t==null&&(t={}),this.theta=t.theta==null?this.DEFAULT_THETA:t.theta}call(t,e){const s=Ct(t);return O(s,ut(kn(s,this.theta),"float32"))}computeOutputShape(t){return t}getConfig(){const t={theta:this.theta},e=super.getConfig();return Object.assign(t,e),t}}U1.className="ThresholdedReLU";tt(U1);class G1 extends Et{constructor(t){super(t??{}),this.DEFAULT_AXIS=1,t==null&&(t={}),this.softmax=new qp().apply,this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis}call(t,e){return G(()=>{let s=Ct(t);const r=e.mask;if(r!=null){const o=O(wt(Bs(s.shape),ut(r,s.dtype)),Lt(-1e9));s=et(s,o)}return this.axis instanceof Array?this.axis.length>1?bs(wt(s,Pb(s,this.axis,!0))):this.softmax(s,this.axis[0]):this.softmax(s,this.axis)})}computeOutputShape(t){return t}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}G1.className="Softmax";tt(G1);function po(n,t,e){if(typeof n=="number")return zr(n,t);if(n.length!==t)throw new F(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${n.length} elements.`);for(let s=0;s<t;++s){const r=n[s];if(!iM(r))throw new F(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${JSON.stringify(n)} including a non-integer number ${r}`)}return n}function Zn(n,t,e,s,r=1){if(n==null)return n;const o=t+(t-1)*(r-1);let i;return e==="same"?i=n:i=n-o+1,Math.floor((i+s-1)/s)}function cs(n,t,e,s){if(n==null)return null;if(s==="valid")n=n*t+er([e-t,0]);else if(s==="same")n=n*t;else throw new F(`Unsupport padding mode: ${s}.`);return n}function Xp(n,t){return G(()=>(me(t),t==="channelsFirst"?At(n,[0,2,3,1]):n))}function H1(n,t){return G(()=>(me(t),t==="channelsFirst"?At(n,[0,2,3,4,1]):n))}function SL(n,t,e,s=1,r="valid",o,i=1){return G(()=>{if(o==null&&(o=Qn()),me(o),n.shape.length!==3)throw new F(`The input of a conv1dWithBias operation should be 3, but is ${n.shape.length} instead.`);if(t.shape.length!==3)throw new F(`The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`);if(e!=null&&e.shape.length!==1)throw new F(`The bias for a conv1dWithBias operation should be 1, but is ${e.shape.length} instead`);if(o==="channelsFirst"&&(n=At(n,[0,2,1])),r==="causal")throw new St("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");let a=Tb(n,t,s,r==="same"?"same":"valid","NWC",i);return e!=null&&(a=ns(a,e)),a})}function nx(n,t,e,s=[1,1],r="valid",o,i,a=null){return G(()=>{if(o==null&&(o=Qn()),me(o),n.rank!==3&&n.rank!==4)throw new F(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${n.rank}.`);if(t.rank!==3&&t.rank!==4)throw new F(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${n.rank}.`);let l=Xp(n,o);if(r==="causal")throw new St("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");return l=LD({x:l,filter:t,strides:s,pad:r==="same"?"same":"valid",dilations:i,dataFormat:"NHWC",bias:e,activation:a}),o==="channelsFirst"&&(l=At(l,[0,3,1,2])),l})}function NL(n,t,e,s=[1,1,1],r="valid",o,i){return G(()=>{if(o==null&&(o=Qn()),me(o),n.rank!==4&&n.rank!==5)throw new F(`conv3dWithBias expects input to be of rank 4 or 5, but received ${n.rank}.`);if(t.rank!==4&&t.rank!==5)throw new F(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${n.rank}.`);let a=H1(n,o);if(r==="causal")throw new St("The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.");return a=_E(a,t,s,r==="same"?"same":"valid","NDHWC",i),e!=null&&(a=ns(a,e)),o==="channelsFirst"&&(a=At(a,[0,4,1,2,3])),a})}class Lu extends Et{constructor(t,e){if(super(e),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",Lu.verifyArgs(e),this.rank=t,Ae(this.rank,"rank"),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new St(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=po(e.kernelSize,t,"kernelSize"),this.strides=po(e.strides==null?1:e.strides,t,"strides"),this.padding=e.padding==null?"valid":e.padding,In(this.padding),this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,me(this.dataFormat),this.activation=sr(e.activation),this.useBias=e.useBias==null?!0:e.useBias,this.biasInitializer=se(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=Ie(e.biasConstraint),this.biasRegularizer=re(e.biasRegularizer),this.activityRegularizer=re(e.activityRegularizer),this.dilationRate=po(e.dilationRate==null?1:e.dilationRate,t,"dilationRate"),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new F(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new F(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new F(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(t){if(ls("kernelSize"in t,"required key 'kernelSize' not in config"),typeof t.kernelSize!="number"&&!_p(t.kernelSize,"number",1,3))throw new F(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(t.kernelSize)}.`)}getConfig(){const t={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:nr(this.activation),useBias:this.useBias,biasInitializer:oe(this.biasInitializer),biasRegularizer:Xt(this.biasRegularizer),activityRegularizer:Xt(this.activityRegularizer),biasConstraint:ke(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}class Lo extends Lu{constructor(t,e){super(t,e),this.kernel=null,Lo.verifyArgs(e),this.filters=e.filters,Ae(this.filters,"filters"),this.kernelInitializer=se(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=Ie(e.kernelConstraint),this.kernelRegularizer=re(e.kernelRegularizer)}build(t){t=Ot(t);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new F(`The channel dimension of the input should be defined. Found ${t[e]}`);const s=t[e],r=this.kernelSize.concat([s,this.filters]);this.kernel=this.addWeight("kernel",r,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[e]:s}}],this.built=!0}call(t,e){return G(()=>{t=Ct(t);let s;const r=this.bias==null?null:this.bias.read(),o=Vy(this.activation.getClassName());if(o!=null&&this.rank===2)s=nx(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate,o);else{if(this.rank===1)s=SL(t,this.kernel.read(),r,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)s=nx(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)s=NL(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new St("convolutions greater than 3D are not implemented yet.");this.activation!=null&&(s=this.activation.apply(s))}return s})}computeOutputShape(t){t=Ot(t);const e=[],s=this.dataFormat==="channelsLast"?t.slice(1,t.length-1):t.slice(2);for(let o=0;o<s.length;++o){const i=Zn(s[o],this.kernelSize[o],this.padding,this.strides[o],typeof this.dilationRate=="number"?this.dilationRate:this.dilationRate[o]);e.push(i)}let r=[t[0]];return this.dataFormat==="channelsLast"?(r=r.concat(e),r.push(this.filters)):(r.push(this.filters),r=r.concat(e)),r}getConfig(){const t={filters:this.filters,kernelInitializer:oe(this.kernelInitializer),kernelRegularizer:Xt(this.kernelRegularizer),kernelConstraint:ke(this.kernelConstraint)},e=super.getConfig();return Object.assign(t,e),t}static verifyArgs(t){if(!("filters"in t)||typeof t.filters!="number"||t.filters<1)throw new F(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(t.filters)}`)}}class Va extends Lo{constructor(t){super(2,t),Va.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!_p(t.kernelSize,"number",1,2))throw new F(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(t.kernelSize)}.`)}}Va.className="Conv2D";tt(Va);class Wa extends Lo{constructor(t){super(3,t),Wa.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!(Array.isArray(t.kernelSize)&&(t.kernelSize.length===1||t.kernelSize.length===3)))throw new F(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(t.kernelSize)}.`)}}Wa.className="Conv3D";tt(Wa);class q1 extends Va{constructor(t){if(super(t),this.inputSpec=[new $e({ndim:4})],this.padding!=="same"&&this.padding!=="valid")throw new F(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=Ot(t),t.length!==4)throw new F("Input should have rank 4; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new F("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],r=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",r,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new $e({ndim:4,axes:{[e]:s}})],this.built=!0}call(t,e){return G(()=>{let s=Ct(t);if(s.shape.length!==4)throw new F(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const r=s.shape,o=r[0];let i,a;this.dataFormat==="channelsFirst"?(i=2,a=3):(i=1,a=2);const l=r[i],c=r[a],u=this.kernelSize[0],h=this.kernelSize[1],d=this.strides[0],f=this.strides[1],p=cs(l,d,u,this.padding),m=cs(c,f,h,this.padding),g=[o,p,m,this.filters];this.dataFormat!=="channelsLast"&&(s=At(s,[0,2,3,1]));let x=Eb(s,this.kernel.read(),g,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(x=At(x,[0,3,1,2])),this.bias!=null&&(x=ns(x,this.bias.read(),this.dataFormat)),this.activation!=null&&(x=this.activation.apply(x)),x})}computeOutputShape(t){t=Ot(t);const e=t.slice();let s,r,o;this.dataFormat==="channelsFirst"?(s=1,r=2,o=3):(s=3,r=1,o=2);const i=this.kernelSize[0],a=this.kernelSize[1],l=this.strides[0],c=this.strides[1];return e[s]=this.filters,e[r]=cs(e[r],l,i,this.padding),e[o]=cs(e[o],c,a,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}q1.className="Conv2DTranspose";tt(q1);class X1 extends Wa{constructor(t){if(super(t),this.inputSpec=[new $e({ndim:5})],this.padding!=="same"&&this.padding!=="valid")throw new F(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=Ot(t),t.length!==5)throw new F("Input should have rank 5; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new F("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],r=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",r,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new $e({ndim:5,axes:{[e]:s}})],this.built=!0}call(t,e){return G(()=>{let s=Ct(t);if(s.shape.length!==5)throw new F(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const r=s.shape,o=r[0];let i,a,l;this.dataFormat==="channelsFirst"?(l=2,i=3,a=4):(l=1,i=2,a=3);const c=r[l],u=r[i],h=r[a],d=this.kernelSize[0],f=this.kernelSize[1],p=this.kernelSize[2],m=this.strides[0],g=this.strides[1],x=this.strides[2],b=cs(c,m,d,this.padding),w=cs(u,g,f,this.padding),y=cs(h,x,p,this.padding),v=[o,b,w,y,this.filters];this.dataFormat!=="channelsLast"&&(s=At(s,[0,2,3,4,1]));let $=ME(s,this.kernel.read(),v,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&($=At($,[0,4,1,2,3])),this.bias!==null&&($=ns($,this.bias.read(),this.dataFormat)),this.activation!==null&&($=this.activation.apply($)),$})}computeOutputShape(t){t=Ot(t);const e=t.slice();let s,r,o,i;this.dataFormat==="channelsFirst"?(s=1,r=2,o=3,i=4):(s=4,r=1,o=2,i=3);const a=this.kernelSize[0],l=this.kernelSize[1],c=this.kernelSize[2],u=this.strides[0],h=this.strides[1],d=this.strides[2];return e[s]=this.filters,e[r]=cs(e[r],u,a,this.padding),e[o]=cs(e[o],h,l,this.padding),e[i]=cs(e[i],d,c,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}X1.className="Conv3DTranspose";tt(X1);class K1 extends Lo{constructor(t,e){if(super(t,e),this.DEFAULT_DEPTHWISE_INITIALIZER="glorotUniform",this.DEFAULT_POINTWISE_INITIALIZER="glorotUniform",this.depthwiseKernel=null,this.pointwiseKernel=null,e.filters==null)throw new F("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(e.kernelInitializer!=null||e.kernelRegularizer!=null||e.kernelConstraint!=null)throw new F("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");if(e.padding!=null&&e.padding!=="same"&&e.padding!=="valid")throw new F(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(e.padding)}`);this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=se(e.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=re(e.depthwiseRegularizer),this.depthwiseConstraint=Ie(e.depthwiseConstraint),this.pointwiseInitializer=se(e.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=re(e.pointwiseRegularizer),this.pointwiseConstraint=Ie(e.pointwiseConstraint)}build(t){if(t=Ot(t),t.length<this.rank+2)throw new F(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(t)}`);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null||t[e]<0)throw new F(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(t[e])}`);const s=t[e],r=this.kernelSize.concat([s,this.depthMultiplier]),o=[];for(let a=0;a<this.rank;++a)o.push(1);o.push(s*this.depthMultiplier,this.filters);const i=!0;this.depthwiseKernel=this.addWeight("depthwise_kernel",r,"float32",this.depthwiseInitializer,this.depthwiseRegularizer,i,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight("pointwise_kernel",o,"float32",this.pointwiseInitializer,this.pointwiseRegularizer,i,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,i,this.biasConstraint):this.bias=null,this.inputSpec=[new $e({ndim:this.rank+2,axes:{[e]:s}})],this.built=!0}call(t,e){return G(()=>{t=Ct(t);let s;if(this.rank===1)throw new St("1D separable convolution is not implemented yet.");return this.rank===2&&(this.dataFormat==="channelsFirst"&&(t=At(t,[0,2,3,1])),s=qb(t,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,"NHWC")),this.useBias&&(s=ns(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),this.dataFormat==="channelsFirst"&&(s=At(s,[0,3,1,2])),s})}getConfig(){const t=super.getConfig();return delete t.rank,delete t.kernelInitializer,delete t.kernelRegularizer,delete t.kernelConstraint,t.depthwiseInitializer=oe(this.depthwiseInitializer),t.pointwiseInitializer=oe(this.pointwiseInitializer),t.depthwiseRegularizer=Xt(this.depthwiseRegularizer),t.pointwiseRegularizer=Xt(this.pointwiseRegularizer),t.depthwiseConstraint=ke(this.depthwiseConstraint),t.pointwiseConstraint=ke(this.pointwiseConstraint),t}}K1.className="SeparableConv";class j1 extends K1{constructor(t){super(2,t)}}j1.className="SeparableConv2D";tt(j1);class Pu extends Lo{constructor(t){super(1,t),Pu.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){const t=super.getConfig();return delete t.rank,delete t.dataFormat,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!_p(t.kernelSize,"number",1,1))throw new F(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(t.kernelSize)}.`)}}Pu.className="Conv1D";tt(Pu);class Y1 extends Et{constructor(t){super(t),typeof t.cropping=="number"?this.cropping=[[t.cropping,t.cropping],[t.cropping,t.cropping]]:typeof t.cropping[0]=="number"?this.cropping=[[t.cropping[0],t.cropping[0]],[t.cropping[1],t.cropping[1]]]:this.cropping=t.cropping,this.dataFormat=t.dataFormat===void 0?"channelsLast":t.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(t){return this.dataFormat==="channelsFirst"?[t[0],t[1],t[2]-this.cropping[0][0]-this.cropping[0][1],t[3]-this.cropping[1][0]-this.cropping[1][1]]:[t[0],t[1]-this.cropping[0][0]-this.cropping[0][1],t[2]-this.cropping[1][0]-this.cropping[1][1],t[3]]}call(t,e){return G(()=>{if(t=Ct(t),this.dataFormat==="channelsLast"){const s=ol(t,this.cropping[0][0],t.shape[1]-this.cropping[0][0]-this.cropping[0][1],2);return ol(s,this.cropping[1][0],t.shape[2]-this.cropping[1][1]-this.cropping[1][0],3)}else{const s=ol(t,this.cropping[0][0],t.shape[2]-this.cropping[0][0]-this.cropping[0][1],3);return ol(s,this.cropping[1][0],t.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)}})}getConfig(){const t={cropping:this.cropping,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}Y1.className="Cropping2D";tt(Y1);class Z1 extends Et{constructor(t){super(t),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=t.size==null?this.DEFAULT_SIZE:t.size,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,me(this.dataFormat),this.interpolation=t.interpolation==null?"nearest":t.interpolation,sM(this.interpolation)}computeOutputShape(t){if(this.dataFormat==="channelsFirst"){const e=t[2]==null?null:this.size[0]*t[2],s=t[3]==null?null:this.size[1]*t[3];return[t[0],t[1],e,s]}else{const e=t[1]==null?null:this.size[0]*t[1],s=t[2]==null?null:this.size[1]*t[2];return[t[0],e,s,t[3]]}}call(t,e){return G(()=>{let s=Ct(t);const r=s.shape;if(this.dataFormat==="channelsFirst"){s=At(s,[0,2,3,1]);const o=this.size[0]*r[2],i=this.size[1]*r[3],a=this.interpolation==="nearest"?Rs.resizeNearestNeighbor(s,[o,i]):Rs.resizeBilinear(s,[o,i]);return At(a,[0,3,1,2])}else{const o=this.size[0]*r[1],i=this.size[1]*r[2];return this.interpolation==="nearest"?Rs.resizeNearestNeighbor(s,[o,i]):Rs.resizeBilinear(s,[o,i])}})}getConfig(){const t={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}}Z1.className="UpSampling2D";tt(Z1);function TL(n,t,e=[1,1],s="valid",r,o){return G(()=>{r==null&&(r=Qn()),me(r);let i=Xp(n,r);if(n.rank!==4)throw new F(`Input for depthwiseConv2d is required to be 4-D, but is instead ${n.rank}-D`);if(t.rank!==4)throw new F(`depthwiseKernel is required to be 4-D, but is instead ${t.rank}-D`);return i=zf(i,t,e,s==="same"?"same":"valid","NHWC",o),r==="channelsFirst"&&(i=At(i,[0,3,1,2])),i})}class J1 extends Lu{constructor(t){super(2,t),this.depthwiseKernel=null,this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=se(t.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=Ie(t.depthwiseConstraint),this.depthwiseRegularizer=re(t.depthwiseRegularizer)}build(t){if(t=Ot(t),t.length<4)throw new F(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(t)}.`);const e=this.dataFormat==="channelsFirst"?1:3;if(t[e]==null||t[e]<0)throw new F(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${t[e]}).`);const s=t[e],r=[this.kernelSize[0],this.kernelSize[1],s,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",r,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[s*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return G(()=>{t=Ct(t);let s=TL(t,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(s=ns(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),s})}computeOutputShape(t){t=Ot(t);const e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],r=this.dataFormat==="channelsFirst"?t[1]*this.depthMultiplier:t[3]*this.depthMultiplier,o=Zn(e,this.kernelSize[0],this.padding,this.strides[0]),i=Zn(s,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat==="channelsFirst"?[t[0],r,o,i]:[t[0],o,i,r]}getConfig(){const t=super.getConfig();return t.depthMultiplier=this.depthMultiplier,t.depthwiseInitializer=oe(this.depthwiseInitializer),t.depthwiseRegularizer=Xt(this.depthwiseRegularizer),t.depthwiseConstraint=ke(this.depthwiseRegularizer),t}}J1.className="DepthwiseConv2D";tt(J1);function Q1(n,t,e,s){if(Array.isArray(n)){if(t!=null||e!=null)throw new F("When inputs is an array, neither initialState or constants should be provided");s!=null&&(e=n.slice(n.length-s,n.length),n=n.slice(0,n.length-s)),n.length>1&&(t=n.slice(1,n.length)),n=n[0]}function r(o){return o==null||Array.isArray(o)?o:[o]}return t=r(t),e=r(e),{inputs:n,initialState:t,constants:e}}function tw(n,t,e,s=!1,r,o,i=!1,a=!1){return G(()=>{const l=t.shape.length;if(l<3)throw new F(`Input should be at least 3D, but is ${l}D.`);const c=[1,0].concat(Jn(2,l));t=At(t,c),i&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),r!=null&&(r=ut(ut(r,"bool"),"float32"),r.rank===l-1&&(r=rn(r,-1)),r=At(r,c)),s&&(t=Lr(t,0),r!=null&&(r=Lr(r,0)));const u=[];let h,d=e;const f=t.shape[0],p=Pr(t);let m;r!=null&&(m=Pr(r));for(let x=0;x<f;++x){const b=p[x],w=G(()=>n(b,d));if(r==null)h=w[0],d=w[1];else{const y=G(()=>{const v=m[x],$=wt(Fn(v),v),N=et(O(w[0],v),O(d[0],$)),S=d.map((I,k)=>et(O(w[1][k],v),O(I,$)));return{output:N,newStates:S}});h=y.output,d=y.newStates}a&&u.push(h)}let g;return a&&(g=Fs(u,1)),[h,g,d]})}class dr extends Et{constructor(t){super(t);let e;if(t.cell==null)throw new F("cell property is missing for the constructor of RNN.");if(Array.isArray(t.cell)?e=new Yp({cells:t.cell}):e=t.cell,e.stateSize==null)throw new F("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=e,this.returnSequences=t.returnSequences==null?!1:t.returnSequences,this.returnState=t.returnState==null?!1:t.returnState,this.goBackwards=t.goBackwards==null?!1:t.goBackwards,this._stateful=t.stateful==null?!1:t.stateful,this.unroll=t.unroll==null?!1:t.unroll,this.supportsMasking=!0,this.inputSpec=[new $e({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return Jn(0,t).map(e=>null)}else return this.states_}setStates(t){this.states_=t}computeOutputShape(t){ad(t)&&(t=t[0]),t=t;let e=this.cell.stateSize;Array.isArray(e)||(e=[e]);const s=e[0];let r;if(this.returnSequences?r=[t[0],t[1],s]:r=[t[0],s],this.returnState){const o=[];for(const i of e)o.push([t[0],i]);return[r].concat(o)}else return r}computeMask(t,e){return G(()=>{Array.isArray(e)&&(e=e[0]);const s=this.returnSequences?e:null;if(this.returnState){const r=this.states.map(o=>null);return[s].concat(r)}else return s})}get states(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,e=[];for(let s=0;s<t;++s)e.push(null);return e}else return this.states_}set states(t){this.states_=t}build(t){if(this.numConstants!=null)throw new St("Constants support is not implemented in RNN yet.");ad(t)&&(t=t[0]),t=t;const e=this.stateful?t[0]:null,s=t.slice(2);this.inputSpec[0]=new $e({shape:[e,null,...s]});const r=[t[0]].concat(t.slice(2));this.cell.build(r);let o;if(Array.isArray(this.cell.stateSize)?o=this.cell.stateSize:o=[this.cell.stateSize],this.stateSpec!=null){if(!Pt(this.stateSpec.map(i=>i.shape[i.shape.length-1]),o))throw new F(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=o.map(i=>new $e({shape:[null,i]}));this.stateful&&this.resetStates()}resetStates(t,e=!1){G(()=>{if(!this.stateful)throw new as("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape[0];if(s==null)throw new F("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(r=>Re([s,r])):this.states_=[Re([s,this.cell.stateSize])];else if(t==null)Rt(this.states_),this.keptStates!=null&&(Rt(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(r=>Re([s,r])):this.states_[0]=Re([s,this.cell.stateSize]);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new F(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e===!0?this.keptStates.push(this.states_.slice()):Rt(this.states_);for(let r=0;r<this.states_.length;++r){const o=t[r],i=Array.isArray(this.cell.stateSize)?this.cell.stateSize[r]:this.cell.stateSize,a=[s,i];if(!Pt(o.shape,a))throw new F(`State ${r} is incompatible with layer ${this.name}: expected shape=${a}, received shape=${o.shape}`);this.states_[r]=o}}this.states_=this.states_.map(r=>fs(r.clone()))})}apply(t,e){let s=e==null?null:e.initialState,r=e==null?null:e.constants;e==null&&(e={});const o=Q1(t,s,r,this.numConstants);t=o.inputs,s=o.initialState,r=o.constants;let i=[],a=[];if(s!=null){e.initialState=s,i=i.concat(s),this.stateSpec=[];for(const c of s)this.stateSpec.push(new $e({shape:c.shape}));a=a.concat(this.stateSpec)}if(r!=null&&(e.constants=r,i=i.concat(r),this.numConstants=r.length),i[0]instanceof ws){const c=[t].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return G(()=>{const s=e==null?null:e.mask,r=e==null?null:e.training;let o=e==null?null:e.initialState;t=Ct(t),o==null&&(this.stateful?o=this.states_:o=this.getInitialState(t));const i=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(o.length!==i)throw new F(`RNN Layer has ${i} state(s) but was passed ${o.length} initial state(s).`);this.unroll&&console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");const a={training:r},c=tw((p,m)=>{const g=this.cell.call([p].concat(m),a);return[g[0],g.slice(1)]},t,o,this.goBackwards,s,null,this.unroll,this.returnSequences),u=c[0],h=c[1],d=c[2];this.stateful&&this.resetStates(d,r);const f=this.returnSequences?h:u;return this.returnState?[f].concat(d):f})}getInitialState(t){return G(()=>{let e=Re(t.shape);return e=gt(e,[1,2]),e=Ma(e),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(s=>s>1?od(e,[1,s]):e):this.cell.stateSize>1?[od(e,[1,this.cell.stateSize])]:[e]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(t)}getConfig(){const t=super.getConfig(),e={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(e.numConstants=this.numConstants);const s=this.cell.getConfig();return this.getClassName()===dr.className&&(e.cell={className:this.cell.getClassName(),config:s}),Object.assign(Object.assign(Object.assign({},s),t),e)}static fromConfig(t,e,s={}){const r=e.cell,o=As(r,s);return new t(Object.assign(e,{cell:o}))}}dr.className="RNN";tt(dr);class zu extends Et{}class Kp extends zu{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,Ae(this.units,"units"),this.activation=sr(t.activation==null?this.DEFAULT_ACTIVATION:t.activation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=se(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=se(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=se(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=re(t.kernelRegularizer),this.recurrentRegularizer=re(t.recurrentRegularizer),this.biasRegularizer=re(t.biasRegularizer),this.kernelConstraint=Ie(t.kernelConstraint),this.recurrentConstraint=Ie(t.recurrentConstraint),this.biasConstraint=Ie(t.biasConstraint),this.dropout=$o([1,er([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=$o([1,er([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=Ot(t),this.kernel=this.addWeight("kernel",[t[t.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return G(()=>{if(t=t,t.length!==2)throw new F(`SimpleRNNCell expects 2 input Tensors, got ${t.length}.`);let s=t[1];t=t[0];const r=e.training==null?!1:e.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=rr({ones:()=>Fn(t),rate:this.dropout,training:r,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=rr({ones:()=>Fn(s),rate:this.recurrentDropout,training:r,dropoutFunc:this.dropoutFunc}));let o;const i=this.dropoutMask,a=this.recurrentDropoutMask;i!=null?o=gs(O(t,i),this.kernel.read()):o=gs(t,this.kernel.read()),this.bias!=null&&(o=ns(o,this.bias.read())),a!=null&&(s=O(s,a));let l=et(o,gs(s,this.recurrentKernel.read()));return this.activation!=null&&(l=this.activation.apply(l)),[l,l]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:nr(this.activation),useBias:this.useBias,kernelInitializer:oe(this.kernelInitializer),recurrentInitializer:oe(this.recurrentInitializer),biasInitializer:oe(this.biasInitializer),kernelRegularizer:Xt(this.kernelRegularizer),recurrentRegularizer:Xt(this.recurrentRegularizer),biasRegularizer:Xt(this.biasRegularizer),activityRegularizer:Xt(this.activityRegularizer),kernelConstraint:ke(this.kernelConstraint),recurrentConstraint:ke(this.recurrentConstraint),biasConstraint:ke(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},t),e)}}Kp.className="SimpleRNNCell";tt(Kp);class ew extends dr{constructor(t){t.cell=new Kp(t),super(t)}call(t,e){return G(()=>{this.cell.dropoutMask!=null&&(Rt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Rt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,o=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:o})})}static fromConfig(t,e){return new t(e)}}ew.className="SimpleRNN";tt(ew);class jp extends zu{constructor(t){if(super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.resetAfter)throw new F("GRUCell does not support reset_after parameter set to true.");this.units=t.units,Ae(this.units,"units"),this.activation=sr(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=sr(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=se(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=se(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=se(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=re(t.kernelRegularizer),this.recurrentRegularizer=re(t.recurrentRegularizer),this.biasRegularizer=re(t.biasRegularizer),this.kernelConstraint=Ie(t.kernelConstraint),this.recurrentConstraint=Ie(t.recurrentConstraint),this.biasConstraint=Ie(t.biasConstraint),this.dropout=$o([1,er([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=$o([1,er([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=Ot(t);const e=t[t.length-1];this.kernel=this.addWeight("kernel",[e,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return G(()=>{if(t=t,t.length!==2)throw new F(`GRUCell expects 2 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training==null?!1:e.training;let r=t[1];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=rr({ones:()=>Fn(t),rate:this.dropout,training:s,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=rr({ones:()=>Fn(r),rate:this.recurrentDropout,training:s,count:3,dropoutFunc:this.dropoutFunc}));const o=this.dropoutMask,i=this.recurrentDropoutMask;let a,l,c;0<this.dropout&&this.dropout<1&&(t=O(t,o[0]));let u=gs(t,this.kernel.read());this.useBias&&(u=ns(u,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(r=O(r,i[0]));const h=this.recurrentKernel.read(),[d,f]=vn(h,[2*this.units,this.units],h.rank-1),p=gs(r,d),[m,g,x]=vn(u,3,u.rank-1),[b,w]=vn(p,2,p.rank-1);a=this.recurrentActivation.apply(et(m,b)),l=this.recurrentActivation.apply(et(g,w));const y=gs(O(l,r),f);c=this.activation.apply(et(x,y));const v=et(O(a,r),O(et(1,de(a)),c));return[v,v]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:nr(this.activation),recurrentActivation:nr(this.recurrentActivation),useBias:this.useBias,kernelInitializer:oe(this.kernelInitializer),recurrentInitializer:oe(this.recurrentInitializer),biasInitializer:oe(this.biasInitializer),kernelRegularizer:Xt(this.kernelRegularizer),recurrentRegularizer:Xt(this.recurrentRegularizer),biasRegularizer:Xt(this.biasRegularizer),activityRegularizer:Xt(this.activityRegularizer),kernelConstraint:ke(this.kernelConstraint),recurrentConstraint:ke(this.recurrentConstraint),biasConstraint:ke(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},t),e)}}jp.className="GRUCell";tt(jp);class nw extends dr{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new jp(t),super(t)}call(t,e){return G(()=>{this.cell.dropoutMask!=null&&(Rt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Rt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,o=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:o})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}nw.className="GRU";tt(nw);class Bu extends zu{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,Ae(this.units,"units"),this.activation=sr(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=sr(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=se(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=se(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=se(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=t.unitForgetBias,this.kernelRegularizer=re(t.kernelRegularizer),this.recurrentRegularizer=re(t.recurrentRegularizer),this.biasRegularizer=re(t.biasRegularizer),this.kernelConstraint=Ie(t.kernelConstraint),this.recurrentConstraint=Ie(t.recurrentConstraint),this.biasConstraint=Ie(t.biasConstraint),this.dropout=$o([1,er([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=$o([1,er([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){var e;t=Ot(t);const s=t[t.length-1];this.kernel=this.addWeight("kernel",[s,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let r;if(this.useBias){if(this.unitForgetBias){const o=this.biasInitializer,i=this.units;r=new(e=class extends Mn{apply(l,c){const u=o.apply([i]),h=new Op().apply([i]),d=o.apply([i*2]);return zg(zg(u,h),d)}},e.className="CustomInit",e)}else r=this.biasInitializer;this.bias=this.addWeight("bias",[this.units*4],null,r,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(t,e){return G(()=>{const s=e.training==null?!1:e.training;if(t=t,t.length!==3)throw new F(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);let r=t[1];const o=t[2];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=rr({ones:()=>Fn(t),rate:this.dropout,training:s,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=rr({ones:()=>Fn(r),rate:this.recurrentDropout,training:s,count:4,dropoutFunc:this.dropoutFunc}));const i=this.dropoutMask,a=this.recurrentDropoutMask;let l,c,u,h;0<this.dropout&&this.dropout<1&&(t=O(t,i[0]));let d=gs(t,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(r=O(r,a[0])),d=et(d,gs(r,this.recurrentKernel.read())),this.useBias&&(d=ns(d,this.bias.read()));const[f,p,m,g]=vn(d,4,d.rank-1);l=this.recurrentActivation.apply(f),c=this.recurrentActivation.apply(p),u=et(O(c,o),O(l,this.activation.apply(m))),h=this.recurrentActivation.apply(g);const x=O(h,this.activation.apply(u));return[x,x,u]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:nr(this.activation),recurrentActivation:nr(this.recurrentActivation),useBias:this.useBias,kernelInitializer:oe(this.kernelInitializer),recurrentInitializer:oe(this.recurrentInitializer),biasInitializer:oe(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:Xt(this.kernelRegularizer),recurrentRegularizer:Xt(this.recurrentRegularizer),biasRegularizer:Xt(this.biasRegularizer),activityRegularizer:Xt(this.activityRegularizer),kernelConstraint:ke(this.kernelConstraint),recurrentConstraint:ke(this.recurrentConstraint),biasConstraint:ke(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},t),e)}}Bu.className="LSTMCell";tt(Bu);class sw extends dr{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new Bu(t),super(t)}call(t,e){return G(()=>{this.cell.dropoutMask!=null&&(Rt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Rt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,o=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:o})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}sw.className="LSTM";tt(sw);class Yp extends zu{constructor(t){super(t),this.cells=t.cells}get stateSize(){const t=[];for(const e of this.cells.slice().reverse())Array.isArray(e.stateSize)?t.push(...e.stateSize):t.push(e.stateSize);return t}call(t,e){return G(()=>{t=t;let s=t.slice(1);const r=[];for(const a of this.cells.slice().reverse())Array.isArray(a.stateSize)?r.push(s.splice(0,a.stateSize.length)):r.push(s.splice(0,1));r.reverse();const o=[];let i;for(let a=0;a<this.cells.length;++a){const l=this.cells[a];s=r[a],a===0?i=[t[0]].concat(s):i=[i[0]].concat(s),i=l.call(i,e),o.push(i.slice(1))}s=[];for(const a of o.slice().reverse())s.push(...a);return[i[0]].concat(s)})}build(t){ad(t)&&(t=t[0]),t=t;let e;this.cells.forEach((s,r)=>{Sr(`RNNCell_${r}`,()=>{s.build(t),Array.isArray(s.stateSize)?e=s.stateSize[0]:e=s.stateSize,t=[t[0],e]})}),this.built=!0}getConfig(){const t=super.getConfig(),e=o=>({className:o.getClassName(),config:o.getConfig()}),r={cells:this.cells.map(e)};return Object.assign(Object.assign({},t),r)}static fromConfig(t,e,s={}){const r=[];for(const o of e.cells)r.push(As(o,s));return new t({cells:r})}get trainableWeights(){if(!this.trainable)return[];const t=[];for(const e of this.cells)t.push(...e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.cells)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.cells)e.push(...s.trainableWeights);return e.concat(t)}return t}getWeights(){const t=[];for(const e of this.cells)t.push(...e.weights);return ld(t)}setWeights(t){const e=[];for(const s of this.cells){const r=s.weights.length,o=t.splice(r);for(let i=0;i<s.weights.length;++i)e.push([s.weights[i],o[i]])}Wp(e)}}Yp.className="StackedRNNCells";tt(Yp);function rr(n){const{ones:t,rate:e,training:s=!1,count:r=1,dropoutFunc:o}=n,i=()=>o!=null?o(t(),e):Ky(t(),e),a=()=>Pa(i,t,s);return!r||r<=1?fs(a().clone()):Array(r).fill(void 0).map(a).map(c=>fs(c.clone()))}var EL=function(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(e[s[r]]=n[s[r]]);return e};class rw extends dr{constructor(t){if(t.unroll)throw new St("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(t.cell))throw new St("It is not possible at the moment to stack convolutional cells.");super(t),this.inputSpec=[new $e({ndim:5})]}call(t,e){return G(()=>{if(this.cell.dropoutMask!=null&&(Rt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Rt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),e&&e.constants)throw new F("ConvRNN2D cell does not support constants");const s=e==null?null:e.mask,r=e==null?null:e.training,o=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:o})})}computeOutputShape(t){let e=this.computeSingleOutputShape(t);return this.returnSequences||(e=[e[0],...e.slice(2)]),this.returnState&&(e=[e,...Array(2).fill([t[0],...e.slice(-3)])]),e}getInitialState(t){return G(()=>{const{stateSize:e}=this.cell,s=t.shape,r=this.computeSingleOutputShape(s),o=[r[0],...r.slice(2)],i=Re(o);return Array.isArray(e)?Array(e.length).fill(i):[i]})}resetStates(t,e=!1){G(()=>{if(!this.stateful)throw new as("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape,r=this.computeSingleOutputShape(s),o=[r[0],...r.slice(2)];if(s[0]==null)throw new F("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>Re(o)):this.states_=[Re(o)];else if(t==null)Rt(this.states_),this.keptStates!=null&&(Rt(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>Re(o)):this.states_[0]=Re(o);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new F(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e?this.keptStates.push(this.states_.slice()):Rt(this.states_);for(let a=0;a<this.states_.length;++a){const l=t[a],c=o;if(!Pt(l.shape,c))throw new F(`State ${a} is incompatible with layer ${this.name}: expected shape=${c}, received shape=${l.shape}`);this.states_[a]=l}}this.states_=this.states_.map(a=>fs(a.clone()))})}computeSingleOutputShape(t){const{dataFormat:e,filters:s,kernelSize:r,padding:o,strides:i,dilationRate:a}=this.cell,l=e==="channelsFirst",c=t[l?3:2],u=t[l?4:3],h=Zn(c,r[0],o,i[0],a[0]),d=Zn(u,r[1],o,i[1],a[1]);return[...t.slice(0,2),...l?[s,h,d]:[h,d,s]]}}rw.className="ConvRNN2D";class Zp extends Bu{constructor(t){const{filters:e,kernelSize:s,strides:r,padding:o,dataFormat:i,dilationRate:a}=t;super(Object.assign(Object.assign({},t),{units:e})),this.filters=e,Ae(this.filters,"filters"),this.kernelSize=po(s,2,"kernelSize"),this.kernelSize.forEach(l=>Ae(l,"kernelSize")),this.strides=po(r||1,2,"strides"),this.strides.forEach(l=>Ae(l,"strides")),this.padding=o||"valid",In(this.padding),this.dataFormat=i||"channelsLast",me(this.dataFormat),this.dilationRate=po(a||1,2,"dilationRate"),this.dilationRate.forEach(l=>Ae(l,"dilationRate"))}build(t){var e;t=Ot(t);const s=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[s]==null)throw new F(`The channel dimension of the input should be defined. Found ${t[s]}`);const r=t[s],o=4,i=this.kernelSize.concat([r,this.filters*o]);this.kernel=this.addWeight("kernel",i,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);const a=this.kernelSize.concat([this.filters,this.filters*o]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let l;if(this.unitForgetBias){const c=this.biasInitializer,u=this.filters;l=new(e=class extends Mn{apply(d,f){const p=c.apply([u]),m=Bs([u]),g=c.apply([u*2]);return Fp([p,m,g])}},e.className="CustomInit",e)}else l=this.biasInitializer;this.bias=this.addWeight("bias",[this.filters*o],null,l,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(t,e){return G(()=>{if(t.length!==3)throw new F(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training||!1,r=t[0],o=t[1],i=t[2],a=4;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=rr({ones:()=>Fn(r),rate:this.dropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const l=this.dropoutMask,c=(j,Z,J)=>!Z||!Z[J]?j:O(Z[J],j);let u=c(r,l,0),h=c(r,l,1),d=c(r,l,2),f=c(r,l,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=rr({ones:()=>Fn(o),rate:this.recurrentDropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const p=this.recurrentDropoutMask;let m=c(o,p,0),g=c(o,p,1),x=c(o,p,2),b=c(o,p,3);const w=3,[y,v,$,N]=vn(this.kernel.read(),a,w),[S,I,k,C]=this.useBias?vn(this.bias.read(),a):[null,null,null,null];u=this.inputConv(u,y,S,this.padding),h=this.inputConv(h,v,I,this.padding),d=this.inputConv(d,$,k,this.padding),f=this.inputConv(f,N,C,this.padding);const[E,_,R,M]=vn(this.recurrentKernel.read(),a,w);m=this.recurrentConv(m,E),g=this.recurrentConv(g,_),x=this.recurrentConv(x,R),b=this.recurrentConv(b,M);const z=this.recurrentActivation.apply(et(u,m)),P=this.recurrentActivation.apply(et(h,g)),U=et(O(P,i),O(z,this.activation.apply(et(d,x)))),q=O(this.recurrentActivation.apply(et(f,b)),this.activation.apply(U));return[q,q,U]})}getConfig(){const t=super.getConfig(),{units:e}=t,s=EL(t,["units"]),r={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},s),r)}inputConv(t,e,s,r){const o=Or(t,e,this.strides,r||"valid",this.dataFormat==="channelsFirst"?"NCHW":"NHWC",this.dilationRate);return s?ns(o,s,this.dataFormat):o}recurrentConv(t,e){return Or(t,e,1,"same",this.dataFormat==="channelsFirst"?"NCHW":"NHWC")}}Zp.className="ConvLSTM2DCell";tt(Zp);class ow extends rw{constructor(t){const e=new Zp(t);super(Object.assign(Object.assign({},t),{cell:e}))}static fromConfig(t,e){return new t(e)}}ow.className="ConvLSTM2D";tt(ow);class Jp extends Et{constructor(t){super(t),this.rate=Math.max(Math.min(t.rate,1),0),this.noiseShape=t.noiseShape,this.seed=t.seed,this.supportsMasking=!0}getNoiseShape(t){if(this.noiseShape==null)return this.noiseShape;const e=t.shape,s=[];for(let r=0;r<this.noiseShape.length;++r)s.push(this.noiseShape[r]==null?e[r]:this.noiseShape[r]);return s}call(t,e){return G(()=>{this.invokeCallHook(t,e);const s=Ct(t);if(0<this.rate&&this.rate<1){const r=e.training==null?!1:e.training,o=this.getNoiseShape(s);return Pa(()=>Ky(s,this.rate,o,this.seed),()=>s,r)}return t})}getConfig(){const t={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},e=super.getConfig();return Object.assign(t,e),t}dispose(){return super.dispose()}}Jp.className="Dropout";tt(Jp);class iw extends Jp{constructor(t){super(t),this.inputSpec=[{ndim:3}]}getNoiseShape(t){const e=t.shape;return[e[0],1,e[2]]}}iw.className="SpatialDropout1D";tt(iw);class aw extends Et{constructor(t){if(super(t),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.batchInputShape==null&&t.inputShape==null&&t.inputDim!=null){let e=null;t.batchSize!=null&&(e=t.batchSize),this.batchInputShape=[e,t.inputDim]}this.units=t.units,Ae(this.units,"units"),this.activation=sr(t.activation),t.useBias!=null&&(this.useBias=t.useBias),this.kernelInitializer=se(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=se(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=Ie(t.kernelConstraint),this.biasConstraint=Ie(t.biasConstraint),this.kernelRegularizer=re(t.kernelRegularizer),this.biasRegularizer=re(t.biasRegularizer),this.activityRegularizer=re(t.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(t){t=Ot(t);const e=t[t.length-1];this.kernel==null&&(this.kernel=this.addWeight("kernel",[e,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:e}}],this.built=!0}computeOutputShape(t){t=Ot(t);const e=t.slice();return e[e.length-1]=this.units,e}call(t,e){return G(()=>{this.invokeCallHook(t,e);const s=Ct(t),r=Vy(this.activation.getClassName());let o;return r!=null?o=gs(s,this.kernel.read(),r,this.bias?this.bias.read():null):(o=gs(s,this.kernel.read()),this.bias!=null&&(o=ns(o,this.bias.read())),this.activation!=null&&(o=this.activation.apply(o))),o})}getConfig(){const t={units:this.units,activation:nr(this.activation),useBias:this.useBias,kernelInitializer:oe(this.kernelInitializer),biasInitializer:oe(this.biasInitializer),kernelRegularizer:Xt(this.kernelRegularizer),biasRegularizer:Xt(this.biasRegularizer),activityRegularizer:Xt(this.activityRegularizer),kernelConstraint:ke(this.kernelConstraint),biasConstraint:ke(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}aw.className="Dense";tt(aw);class lw extends Et{constructor(t){t=t||{},super(t),this.inputSpec=[{minNDim:3}],this.dataFormat=t.dataFormat}computeOutputShape(t){t=Ot(t);for(const e of t.slice(1))if(e==null)throw new F(`The shape of the input to "Flatten" is not fully defined (got ${t.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[t[0],Qs(t,1)]}call(t,e){return G(()=>{this.invokeCallHook(t,e);let s=Ct(t);if(this.dataFormat==="channelsFirst"&&s.rank>1){const r=[0];for(let o=2;o<s.rank;++o)r.push(o);r.push(1),s=At(s,r)}return cM(s)})}getConfig(){const t={};this.dataFormat!=null&&(t.dataFormat=this.dataFormat);const e=super.getConfig();return Object.assign(t,e),t}}lw.className="Flatten";tt(lw);class cw extends Et{constructor(t){super(t),this.supportsMasking=!0,this.activation=sr(t.activation)}call(t,e){return G(()=>{this.invokeCallHook(t,e);const s=Ct(t);return this.activation.apply(s)})}getConfig(){const t={activation:nr(this.activation)},e=super.getConfig();return Object.assign(t,e),t}}cw.className="Activation";tt(cw);class uw extends Et{constructor(t){super(t),this.n=t.n,this.inputSpec=[{ndim:2}]}computeOutputShape(t){return[t[0],this.n,t[1]]}call(t,e){return G(()=>(t=Ct(t),aM(t,this.n)))}getConfig(){const t={n:this.n},e=super.getConfig();return Object.assign(t,e),t}}uw.className="RepeatVector";tt(uw);class hw extends Et{constructor(t){super(t),this.targetShape=t.targetShape;for(let e=0;e<this.targetShape.length;++e)this.isUnknown(this.targetShape[e])&&(this.targetShape[e]=null)}isUnknown(t){return t<0||t==null}fixUnknownDimension(t,e){const s="Total size of new array must be unchanged.",r=e.slice();let o=1,i=null;for(let l=0;l<r.length;++l){const c=r[l];if(this.isUnknown(c))if(i===null)i=l;else throw new F("Can only specifiy one unknown dimension.");else o*=c}const a=Qs(t);if(i!==null){if(o===0||a%o!==0)throw new F(s);r[i]=a/o}else if(a!==o)throw new F(s);return r}computeOutputShape(t){let e=!1;for(let s=0;s<t.length;++s)if(this.isUnknown(t[s])){e=!0;break}return e?t.slice(0,1).concat(this.targetShape):t.slice(0,1).concat(this.fixUnknownDimension(t.slice(1),this.targetShape))}call(t,e){return G(()=>{this.invokeCallHook(t,e);const s=Ct(t),r=s.shape,o=r.slice(0,1).concat(this.fixUnknownDimension(r.slice(1),this.targetShape));return V(s,o)})}getConfig(){const t={targetShape:this.targetShape},e=super.getConfig();return Object.assign(t,e),t}}hw.className="Reshape";tt(hw);class dw extends Et{constructor(t){if(super(t),t.dims==null)throw new Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(t.dims))throw new Error(`Permute constructor requires \`dims\` to be an Array, but received ${t.dims} instead.`);const e=Jn(1,t.dims.length+1);if(!Pt(t.dims.slice().sort(),e))throw new Error("Invalid permutation `dims`: "+JSON.stringify(t.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=t.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new $e({ndim:this.dims.length+1})]}computeOutputShape(t){t=Ot(t);const e=t.slice();return this.dims.forEach((s,r)=>{e[r+1]=t[s]}),e}call(t,e){return At(Ct(t),this.dimsIncludingBatch)}getConfig(){const t={dims:this.dims},e=super.getConfig();return Object.assign(t,e),t}}dw.className="Permute";tt(dw);class fw extends Et{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null?this.maskValue=t.maskValue==null?0:t.maskValue:this.maskValue=0}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={maskValue:this.maskValue};return Object.assign(e,t),e}computeMask(t,e){const s=Ct(t);return Jh(jl(s,this.maskValue),-1)}call(t,e){return G(()=>{this.invokeCallHook(t,e);const s=Ct(t),i=Jh(jl(s,this.maskValue),-1,!0);return O(s,ut(i,s.dtype))})}}fw.className="Masking";tt(fw);class pw extends Et{constructor(t){if(super(t),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER="randomUniform",t.batchInputShape==null&&t.inputShape==null){let e=null;t.batchSize!=null&&(e=t.batchSize),t.inputLength==null?this.batchInputShape=[e,null]:this.batchInputShape=[e].concat(Wt(t.inputLength))}this.inputDim=t.inputDim,Ae(this.inputDim,"inputDim"),this.outputDim=t.outputDim,Ae(this.outputDim,"outputDim"),this.embeddingsInitializer=se(t.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=re(t.embeddingsRegularizer),this.activityRegularizer=re(t.activityRegularizer),this.embeddingsConstraint=Ie(t.embeddingsConstraint),this.maskZero=t.maskZero,this.supportsMasking=t.maskZero,this.inputLength=t.inputLength}build(t){this.embeddings=this.addWeight("embeddings",[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(t){}computeMask(t,e){return G(()=>this.maskZero?(t=Ct(t),jl(t,Dt(t))):null)}computeOutputShape(t){if(t=Ot(t),this.inputLength==null)return[...t,this.outputDim];const e=Wt(this.inputLength);if(e.length!==t.length-1)throw new F(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);{let s=0;for(let r=0;r<e.length;++r){const o=e[r],i=t[r+1];if(o!=null&&i!=null&&o!==i)throw new F(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);o==null&&(e[s]=i),s++}}return[t[0],...e,this.outputDim]}call(t,e){return G(()=>{this.invokeCallHook(t,e);let s=Ct(t);s.dtype!=="int32"&&(s=ms(s,"int32"));const r=Xy(this.embeddings.read(),V(s,[s.size]));return V(r,Ot(this.computeOutputShape(s.shape)))})}getConfig(){const t={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:oe(this.embeddingsInitializer),embeddingsRegularizer:Xt(this.embeddingsRegularizer),activityRegularizer:Xt(this.activityRegularizer),embeddingsConstraint:ke(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},e=super.getConfig();return Object.assign(t,e),t}}pw.className="Embedding";tt(pw);class Kr extends Et{constructor(t){super(t||{}),this.supportsMasking=!0}mergeFunction(t){throw new St}computeElementwiseOpOutputShape(t,e){if(t==null||e==null)return null;if(t.length<e.length)return this.computeElementwiseOpOutputShape(e,t);if(e.length===0)return t;const s=t.slice(0,t.length-e.length);for(let r=0;r<e.length;++r){const o=t[t.length-e.length+r],i=e[r];if(o==null||i==null||o<0||i<0)s.push(null);else if(o===1)s.push(i);else if(i===1)s.push(o);else{if(o!==i)throw new F("Operands could not be broadcast together with shapes "+JSON.stringify(t)+" "+JSON.stringify(e));s.push(o)}}return s}build(t){if(Array.isArray(t)&&!Array.isArray(t[0])&&(t=[Ot(t)]),t=t,t.length<2)throw new F(`A merge layer should be called on an Array of at least 2 inputs. Got ${t.length} input(s).`);let e=[];for(const o of t)o!=null&&o[0]!==null&&e.push(o[0]);if(e=Js(e),e.length>1)throw new F(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(t)}.`);let s=t[0]==null?null:t[0].slice(1);for(let o=1;o<t.length;++o){const i=t[o]==null?null:t[o].slice(1);s=this.computeElementwiseOpOutputShape(s,i)}const r=t.map(o=>o.length);t.indexOf(null)===-1&&Js(r).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(t,e){return G(()=>{if(t=t,this.reshapeRequired){const s=[],r=t.map(o=>o.rank);if(r.indexOf(null)===-1){const o=er(r);for(let i of t){const a=i.rank;for(let l=0;l<o-a;++l)i=Ma(i,1);s.push(i)}return this.mergeFunction(s)}else{let o=!1;for(const l of t){const c=l.rank;if(c==null){const u=l.shape,h=u[0],d=u.slice(1).concat([h]);let f=V(l,[h].concat(Qs(u.slice(1))));f=At(f,[1,0]),f=V(f,d),s.push(f),o=!0}else if(c>1){const u=Jn(1,c).concat([0]);s.push(At(l,u)),o=!0}else s.push(l)}let i=this.mergeFunction(s);const a=i.rank;if(o){if(a==null){const l=i.shape,c=l.length,u=l[c-1],h=[u].concat(l.slice(0,l.length-1));i=V(At(V(i,[-1,u]),[1,0]),h)}else if(a>1){const l=[a-1].concat(Jn(0,a-1));i=At(i,l)}}return i}}else return this.mergeFunction(t)})}computeOutputShape(t){t=t;let e;t[0]==null?e=null:e=t[0].slice(1);for(let r=1;r<t.length;++r){const o=t[r]==null?null:t[r].slice(1);e=this.computeElementwiseOpOutputShape(e,o)}let s=[];for(const r of t)r!=null&&r[0]!==null&&s.push(r[0]);return s=Js(s),s.length===1?e=s.concat(e):e=[null].concat(e),e}computeMask(t,e){return G(()=>{if(e==null)return null;if(!Array.isArray(e))throw new F("`mask` should be an Array");if(!Array.isArray(t))throw new F("`inputs` should be an Array");if(e.length!==t.length)throw new F(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${t.length} vs ${e.length})`);if(e.every(r=>r==null))return null;e=e.map(r=>r==null?r:rn(r,0));let s=e[0];for(let r=1;r<e.length-1;++r)s=_s(s,e[r]);return s})}}class mw extends Kr{constructor(t){super(t)}mergeFunction(t){return G(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=et(e,t[s]);return e})}}mw.className="Add";tt(mw);class gw extends Kr{constructor(t){super(t)}mergeFunction(t){return G(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=O(e,t[s]);return e})}}gw.className="Multiply";tt(gw);class xw extends Kr{constructor(t){super(t)}mergeFunction(t){return G(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=et(e,t[s]);return O(1/t.length,e)})}}xw.className="Average";tt(xw);class bw extends Kr{constructor(t){super(t)}mergeFunction(t){return G(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=ur(e,t[s]);return e})}}bw.className="Maximum";tt(bw);class yw extends Kr{constructor(t){super(t)}mergeFunction(t){return G(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=bi(e,t[s]);return e})}}yw.className="Minimum";tt(yw);class ww extends Kr{constructor(t){super(t),this.DEFAULT_AXIS=-1,t==null&&(t={}),this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){if(!(Array.isArray(t)&&Array.isArray(t[0]))||t.length===1)throw new F("A `Concatenate` layer should be called on a list of at least 2 inputs");t=t;let e=!0;for(const r of t)if(r!=null){e=!1;break}if(e)return;const s=[];for(let r=0;r<t.length;++r){const o=t[r].slice();o.splice(this.axis,1);let i=!1;for(const a of s)if(Pt(a,o)){i=!0;break}i||s.push(o)}if(s.length>1)throw new F("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(t))}mergeFunction(t){return G(()=>Fp(t,this.axis))}computeOutputShape(t){if(!(Array.isArray(t)&&Array.isArray(t[0])))throw new F("A `Concatenate` layer should be called on a list of inputs.");const e=t,s=e[0].slice(),r=this.axis<0?s.length+this.axis:this.axis;for(const o of e.slice(1)){if(s[r]==null||o[r]==null){s[r]=null;break}s[r]+=o[r]}return s}computeMask(t,e){if(e==null)return null;if(!Array.isArray(e))throw new F("`mask` should be an array for Concatenate");if(!Array.isArray(t))throw new F("`inputs` should be an array for Concatenate");if(e.length!==t.length)throw new F(`Mismatch in the length of mask (${e.length}) and the legnth of inputs (${t.length})`);return G(()=>{let s=!0;if(e.forEach(i=>{if(i!=null){s=!1;return}}),s)return null;const r=[];for(let i=0;i<t.length;++i)e[i]==null?r.push(ut(Fn(t[i]),"bool")):e[i].rank<t[i].rank?r.push(rn(e[i],-1)):r.push(e[i]);const o=an(r,this.axis);return Nb(o,-1,!1)})}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}ww.className="Concatenate";tt(ww);function Yo(n,t){for(;n<0;)n+=t;return n}function RL(n,t,e){if(n.shape.length>3||t.shape.length>3)throw new St("batchDot is not implemented for tensors of 4D or higher rank yet");if(T(n.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${n.shape.length}`),T(n.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${t.shape.length}`),typeof e=="number"&&(e=[e,e]),n.dtype==="complex64"||t.dtype==="complex64")throw new St("batchDot is not implemented for complex64-type Tensors yet.");const s=n.shape.length,r=t.shape.length;e==null&&(e=[s-1,r-2]);const o=e;return G(()=>{let i;if(s>r){i=s-r;const l=[];for(let c=0;c<i;++c)l.push(1);t=V(t,t.shape.concat(l))}else if(r>s){i=r-s;const l=[];for(let c=0;c<i;++c)l.push(1);n=V(n,n.shape.concat(l))}else i=0;let a;if(n.shape.length===2&&t.shape.length===2)o[0]===o[1]?a=gt(O(n,t),o[0]):a=gt(O(At(n,[1,0]),t),o[1]);else{const l=o[0]!==n.shape.length-1,c=o[1]===t.shape.length-1;a=Ft(n,t,l,c)}if(i>0){let l;s>r?l=s+r-3:l=s-1;const c=[];for(let u=l;u<l+i;++u)c.push(u);a=Ra(a,c)}return a.shape.length===1&&(a=rn(a,1)),a})}class vw extends Kr{constructor(t){super(t),this.axes=t.axes,this.normalize=t.normalize==null?!1:t.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){T(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0],s=t[1];if(e.length>3||s.length>3)throw new St("Dot layer does not support tensors of 4D or higher rank yet.");const r=this.interpretAxes(e,s);if(e[r[0]]!==s[r[1]])throw new F(`Dimension incompatibility: ${e[r[0]]} !== ${s[r[1]]}`)}mergeFunction(t){if(t.length!==2)throw new F(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${t.length} input(s).`);let e=t[0],s=t[1],r;return Array.isArray(this.axes)?r=this.axes.map((o,i)=>Yo(o,t[i].shape.length)):r=[Yo(this.axes,e.shape.length),Yo(this.axes,s.shape.length)],this.normalize&&(e=nc(e,r[0]),s=nc(s,r[1])),RL(e,s,r)}interpretAxes(t,e){let s;return Array.isArray(this.axes)?s=this.axes:s=[Yo(this.axes,t.length),Yo(this.axes,e.length)],s}computeOutputShape(t){T(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0].slice(),s=t[1].slice();if(e.length>3||s.length>3)throw new St("Dot layer does not support tensors of 4D or higher rank yet.");const r=this.interpretAxes(e,s);e.splice(r[0],1),s.splice(r[1],1),s.splice(0,1);const o=e.concat(s);return o.length===1&&o.push(1),o}computeMask(t,e){return null}getConfig(){const t={axes:this.axes,normalize:this.normalize},e=super.getConfig();return Object.assign(t,e),t}}vw.className="Dot";tt(vw);class Cw extends Et{constructor(t){super(t),this.supportsMasking=!0,this.stddev=t.stddev}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={stddev:this.stddev};return Object.assign(e,t),e}call(t,e){return G(()=>{this.invokeCallHook(t,e);const s=Ct(t);return Pa(()=>et(_u(s.shape,0,this.stddev),s),()=>s,e.training||!1)})}}Cw.className="GaussianNoise";tt(Cw);class $w extends Et{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return G(()=>{this.invokeCallHook(t,e);const s=Ct(t);return this.rate>0&&this.rate<1?Pa(()=>{const o=Math.sqrt(this.rate/(1-this.rate));return O(s,_u(s.shape,1,o))},()=>s,e.training||!1):s})}}$w.className="GaussianDropout";tt($w);class kw extends Et{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate,this.noiseShape=t.noiseShape}_getNoiseShape(t){return this.noiseShape||Ct(t).shape}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return G(()=>{if(this.rate<1&&this.rate>0){const s=this._getNoiseShape(t);return Pa(()=>{const o=Ct(t),a=-1.6732632423543772*1.0507009873554805;let l=Gr(Ea(s),this.rate);l=ms(l,"float32");const c=((1-this.rate)*(1+this.rate*a**2))**-.5,u=-c*a*this.rate,h=et(O(o,l),O(et(l,-1),a));return et(O(h,c),u)},()=>Ct(t),e.training||!1)}return t})}}kw.className="AlphaDropout";tt(kw);function $i(n,t,e,s,r,o=.001){let i;if(n.rank===2)i=cE(n,t,e,s,r,o);else if(n.rank===3)i=hE(n,t,e,s,r,o);else if(n.rank===4)i=fE(n,t,e,s,r,o);else throw new St(`batchNormalization is not implemented for array of rank ${n.rank} yet`);return i}function AL(n,t,e,s,r=.001){return G(()=>{const o=Xf(n,s),i=o.mean,a=o.variance;return[$i(n,i,a,e,t,r),i,a]})}function DL(n,t,e,s,r=.001){return G(()=>{const o=Xf(n,s),i=o.mean,a=o.variance,l=[];for(const p of Jn(0,n.rank))s.indexOf(p)!==-1?l.push(1):l.push(n.shape[p]);const c=V(i,l),u=V(a,l),h=t==null?null:V(t,l),d=e==null?null:V(e,l);return[$i(n,c,u,d,h,r),i,a]})}function _L(n,t,e,s,r=.001){return Pt(s.slice().sort(),Jn(0,n.rank-1))?AL(n,t,e,s,r):DL(n,t,e,s,r)}class Iw extends Et{constructor(t){t==null&&(t={}),super(t),this.supportsMasking=!0,this.axis=t.axis==null?-1:t.axis,this.momentum=t.momentum==null?.99:t.momentum,this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=se(t.betaInitializer||"zeros"),this.gammaInitializer=se(t.gammaInitializer||"ones"),this.movingMeanInitializer=se(t.movingMeanInitializer||"zeros"),this.movingVarianceInitializer=se(t.movingVarianceInitializer||"ones"),this.betaConstraint=Ie(t.betaConstraint),this.gammaConstraint=Ie(t.gammaConstraint),this.betaRegularizer=re(t.betaRegularizer),this.gammaRegularizer=re(t.gammaRegularizer)}build(t){t=Ot(t);const e=this.axis>=0?this.axis:this.axis+t.length,s=t[e];if(s==null)throw new F(`Axis ${e} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(t)}.`);this.inputSpec=[new $e({ndim:t.length,axes:{[e]:s}})];const r=[s];this.scale&&(this.gamma=this.addWeight("gamma",r,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight("beta",r,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight("moving_mean",r,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight("moving_variance",r,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(t,e){return G(()=>{const s=e.training==null?!1:e.training,r=Ct(t),o=r.shape,i=o.length,a=Jn(0,i),l=this.axis>=0?this.axis:this.axis+i;a.splice(l,1);const c=zr(1,i);c[l]=o[l];const u=a.slice();u.sort();const h=!Pt(u,Jn(0,i).slice(0,i-1)),d=()=>{if(h){const b=V(this.movingMean.read(),c),w=V(this.movingVariance.read(),c),y=this.center?V(this.beta.read(),c):null,v=this.scale?V(this.gamma.read(),c):null;return $i(r,b,w,y,v,this.epsilon)}else return $i(r,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!s)return d();const[f,p,m]=_L(r,this.gamma.read(),this.beta.read(),a,this.epsilon),g=(b,w,y)=>{G(()=>{const v=1-y,$=b.read(),N=O(wt($,w),v);b.write(wt($,N))})};return g(this.movingMean,p,this.momentum),g(this.movingVariance,m,this.momentum),f})}getConfig(){const t={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:oe(this.betaInitializer),gammaInitializer:oe(this.gammaInitializer),movingMeanInitializer:oe(this.movingMeanInitializer),movingVarianceInitializer:oe(this.movingVarianceInitializer),betaRegularizer:Xt(this.betaRegularizer),gammaRegularizer:Xt(this.gammaRegularizer),betaConstraint:ke(this.betaConstraint),gammaConstraint:ke(this.gammaConstraint)},e=super.getConfig();return Object.assign(t,e),t}}Iw.className="BatchNormalization";tt(Iw);class Sw extends Et{constructor(t){if(t==null&&(t={}),super(t),this.axis=t.axis==null?-1:t.axis,typeof this.axis=="number"){if(!Number.isInteger(this.axis))throw new Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(const e of this.axis)if(!Number.isInteger(e))throw new Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw new Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=se(t.betaInitializer||"zeros"),this.gammaInitializer=se(t.gammaInitializer||"ones"),this.betaRegularizer=re(t.betaRegularizer),this.gammaRegularizer=re(t.gammaRegularizer),this.supportsMasking=!0}build(t){t=Ot(t);const e=t.length;typeof this.axis=="number"&&(this.axis=[this.axis]);for(let o=0;o<this.axis.length;++o)this.axis[o]<0&&(this.axis[o]+=e);for(const o of this.axis)if(o<0||o>=e)throw new Error(`Invalid axis: ${o}`);if(this.axis.length!==Js(this.axis).length)throw new Error(`Found duplicate axes in: ${this.axis}`);const s=this.axis.map(o=>t[o]),r=!0;this.scale?this.gamma=this.addWeight("gamma",s,"float32",this.gammaInitializer,this.gammaRegularizer,r):this.gamma=null,this.center?this.beta=this.addWeight("beta",s,"float32",this.betaInitializer,this.betaRegularizer,r):this.beta=null,this.built=!0}call(t,e){const s=Ct(t),r=s.shape,o=r.length;return G(()=>{let{mean:a,variance:l}=Xf(s,this.axis,!0);const c=zr(1,o);for(const m of this.axis)c[m]=r[m];const u=m=>m!=null&&m.shape.length!==o?V(m,c):m;let h=this.scale?u(this.gamma.read()):null,d=this.center?u(this.beta.read()):null;const f=[],p=[];for(let m=0;m<o;++m)this.axis.indexOf(m)!==-1?(f.push(r[m]),p.push(1)):(f.push(1),p.push(r[m]));return a=Xn(a,f),l=Xn(l,f),h!=null&&(h=Xn(h,p)),d!=null&&(d=Xn(d,p)),$i(s,a,l,d,h,this.epsilon)})}getConfig(){const t={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:oe(this.betaInitializer),gammaInitializer:oe(this.gammaInitializer),betaRegularizer:Xt(this.betaRegularizer),gammaRegularizer:Xt(this.gammaRegularizer)},e=super.getConfig();return Object.assign(t,e),t}}Sw.className="LayerNormalization";tt(Sw);function FL(n,t,e){return G(()=>{if(n.rank!==4)throw new F(`temporalPadding expects input tensor to be 4-D, but received a ${n.rank}-D tensor.`);if(t==null&&(t=[[1,1],[1,1]]),t.length!==2||t[0].length!==2||t[1].length!==2)throw new F("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(e==null&&(e=Qn()),e!=="channelsLast"&&e!=="channelsFirst")throw new F(`Unknown data format: ${e}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let s;return e==="channelsFirst"?s=[[0,0],[0,0],t[0],t[1]]:s=[[0,0],t[0],t[1],[0,0]],Kf(n,s)})}class Nw extends Et{constructor(t){if(t==null&&(t={}),super(t),this.dataFormat=t.dataFormat==null?Qn():t.dataFormat,t.padding==null)this.padding=[[1,1],[1,1]];else if(typeof t.padding=="number")this.padding=[[t.padding,t.padding],[t.padding,t.padding]];else{if(t.padding=t.padding,t.padding.length!==2)throw new F(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${t.padding.length} array.`);let e,s;if(typeof t.padding[0]=="number")e=[t.padding[0],t.padding[0]],s=[t.padding[1],t.padding[1]];else{if(t.padding=t.padding,t.padding[0].length!==2)throw new F(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${t.padding[0].length} array.`);if(e=t.padding[0],t.padding[1].length!==2)throw new F(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${t.padding[1].length} array.`);s=t.padding[1]}this.padding=[e,s]}this.inputSpec=[new $e({ndim:4})]}computeOutputShape(t){t=Ot(t);let e,s;return this.dataFormat==="channelsFirst"?(t[2]!=null&&t[2]>=0?e=t[2]+this.padding[0][0]+this.padding[0][1]:e=null,t[3]!=null&&t[3]>=0?s=t[3]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],t[1],e,s]):(t[1]!=null&&t[1]>=0?e=t[1]+this.padding[0][0]+this.padding[0][1]:e=null,t[2]!=null&&t[2]>=0?s=t[2]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],e,s,t[3]])}call(t,e){return G(()=>FL(Ct(t),this.padding,this.dataFormat))}getConfig(){const t={padding:this.padding,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}Nw.className="ZeroPadding2D";tt(Nw);function Vu(n,t,e,s,r,o){return G(()=>{me(r),Uy(o),In(s),e==null&&(e=[1,1]),s==null&&(s="valid"),r==null&&(r=Qn()),o==null&&(o="max"),n=Xp(n,r);let i;const a=s==="same"?"same":"valid";return o==="max"?i=qf(n,t,e,a):i=Of(n,t,e,a),r==="channelsFirst"&&(i=At(i,[0,3,1,2])),i})}function Tw(n,t,e,s,r,o){return G(()=>{me(r),Uy(o),In(s),e==null&&(e=[1,1,1]),s==null&&(s="valid"),r==null&&(r=Qn()),o==null&&(o="max"),n=H1(n,r);let i;const a=s==="same"?"same":"valid";return o==="max"?i=QR(n,t,e,a):i=QT(n,t,e,a),r==="channelsFirst"&&(i=At(i,[0,4,1,2,3])),i})}class Ew extends Et{constructor(t){if(t.poolSize==null&&(t.poolSize=2),super(t),typeof t.poolSize=="number")this.poolSize=[t.poolSize];else if(Array.isArray(t.poolSize)&&t.poolSize.length===1&&typeof t.poolSize[0]=="number")this.poolSize=t.poolSize;else throw new F(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.poolSize)}`);if(Ae(this.poolSize,"poolSize"),t.strides==null)this.strides=this.poolSize;else if(typeof t.strides=="number")this.strides=[t.strides];else if(Array.isArray(t.strides)&&t.strides.length===1&&typeof t.strides[0]=="number")this.strides=t.strides;else throw new F(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.strides)}`);Ae(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,In(this.padding),this.inputSpec=[new $e({ndim:3})]}computeOutputShape(t){t=Ot(t);const e=Zn(t[1],this.poolSize[0],this.padding,this.strides[0]);return[t[0],e,t[2]]}call(t,e){return G(()=>{this.invokeCallHook(t,e),t=Ma(Ct(t),2);const s=this.poolingFunction(Ct(t),[this.poolSize[0],1],[this.strides[0],1],this.padding,"channelsLast");return Ra(s,[2])})}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides},e=super.getConfig();return Object.assign(t,e),t}}class Rw extends Ew{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return me(o),In(r),Vu(t,e,s,r,o,"max")}}Rw.className="MaxPooling1D";tt(Rw);class Aw extends Ew{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return me(o),In(r),Vu(t,e,s,r,o,"avg")}}Aw.className="AveragePooling1D";tt(Aw);class Dw extends Et{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==2)throw new F(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides];Ae(this.poolSize,"poolSize"),Ae(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,me(this.dataFormat),In(this.padding),this.inputSpec=[new $e({ndim:4})]}computeOutputShape(t){t=Ot(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2];return e=Zn(e,this.poolSize[0],this.padding,this.strides[0]),s=Zn(s,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s]:[t[0],e,s,t[3]]}call(t,e){return G(()=>(this.invokeCallHook(t,e),this.poolingFunction(Ct(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class _w extends Dw{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return me(o),In(r),Vu(t,e,s,r,o,"max")}}_w.className="MaxPooling2D";tt(_w);class Fw extends Dw{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return me(o),In(r),Vu(t,e,s,r,o,"avg")}}Fw.className="AveragePooling2D";tt(Fw);class Ow extends Et{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==3)throw new F(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides,t.strides];Ae(this.poolSize,"poolSize"),Ae(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,me(this.dataFormat),In(this.padding),this.inputSpec=[new $e({ndim:5})]}computeOutputShape(t){t=Ot(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],r=this.dataFormat==="channelsFirst"?t[4]:t[3];return e=Zn(e,this.poolSize[0],this.padding,this.strides[0]),s=Zn(s,this.poolSize[1],this.padding,this.strides[1]),r=Zn(r,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s,r]:[t[0],e,s,r,t[4]]}call(t,e){return G(()=>(this.invokeCallHook(t,e),this.poolingFunction(Ct(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class Mw extends Ow{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return me(o),In(r),Tw(t,e,s,r,o,"max")}}Mw.className="MaxPooling3D";tt(Mw);class Lw extends Ow{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return me(o),In(r),Tw(t,e,s,r,o,"avg")}}Lw.className="AveragePooling3D";tt(Lw);class Pw extends Et{constructor(t){super(t),this.inputSpec=[new $e({ndim:3})]}computeOutputShape(t){return[t[0],t[2]]}call(t,e){throw new St}}class zw extends Pw{constructor(t){super(t||{})}call(t,e){return G(()=>{const s=Ct(t);return be(s,1)})}}zw.className="GlobalAveragePooling1D";tt(zw);class Bw extends Pw{constructor(t){super(t||{})}call(t,e){return G(()=>{const s=Ct(t);return Yn(s,1)})}}Bw.className="GlobalMaxPooling1D";tt(Bw);class Vw extends Et{constructor(t){super(t),this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,me(this.dataFormat),this.inputSpec=[new $e({ndim:4})]}computeOutputShape(t){return t=t,this.dataFormat==="channelsLast"?[t[0],t[3]]:[t[0],t[1]]}call(t,e){throw new St}getConfig(){const t={dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class Ww extends Vw{call(t,e){return G(()=>{const s=Ct(t);return this.dataFormat==="channelsLast"?be(s,[1,2]):be(s,[2,3])})}}Ww.className="GlobalAveragePooling2D";tt(Ww);class Uw extends Vw{call(t,e){return G(()=>{const s=Ct(t);return this.dataFormat==="channelsLast"?Yn(s,[1,2]):Yn(s,[2,3])})}}Uw.className="GlobalMaxPooling2D";tt(Uw);class Gw extends Et{constructor(t){super(t),this.layer=t.layer}build(t){this.built=!0}get trainable(){return this.layer!=null?this.layer.trainable:!1}set trainable(t){this.layer!=null&&(this.layer.trainable=t)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(t){this.layer.setWeights(t)}getConfig(){const t={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},e=super.getConfig();return Object.assign(t,e),t}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(t)}static fromConfig(t,e,s={}){const r=e.layer,o=As(r,s);delete e.layer;const i={layer:o};return Object.assign(i,e),new t(i)}}class Hw extends Gw{constructor(t){super(t),this.supportsMasking=!0}build(t){if(t=Ot(t),t.length<3)throw new F(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(t)}`);this.inputSpec=[{shape:t}];const e=[t[0]].concat(t.slice(2));this.layer.built||(this.layer.build(e),this.layer.built=!0),super.build(t)}computeOutputShape(t){t=Ot(t);const e=[t[0]].concat(t.slice(2)),s=this.layer.computeOutputShape(e),r=t[1];return[s[0],r].concat(s.slice(1))}call(t,e){return G(()=>(t=Ct(t),tw((i,a)=>[Ct(this.layer.call(i,e)),[]],t,[],!1,null,null,!1,!0)[1]))}}Hw.className="TimeDistributed";tt(Hw);function OL(n){Xr(nM,"BidirectionalMergeMode",n)}const ML="concat";class qw extends Gw{constructor(t){super(t);const e=t.layer.getConfig(),s={};s.className=t.layer.getClassName(),s.config=e,this.forwardLayer=As(s),e.goBackwards=e.goBackwards!==!0;const r={};if(r.className=t.layer.getClassName(),r.config=e,this.backwardLayer=As(r),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=t.mergeMode===void 0?ML:t.mergeMode,OL(this.mergeMode),t.weights)throw new St("weights support is not implemented for Bidirectional layer yet.");this._stateful=t.layer.stateful,this.returnSequences=t.layer.returnSequences,this.returnState=t.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=t.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(t){this._trainable=t,this.forwardLayer!=null&&(this.forwardLayer.trainable=t),this.backwardLayer!=null&&(this.backwardLayer.trainable=t)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(t){const e=t.length,s=Math.floor(e/2);this.forwardLayer.setWeights(t.slice(0,s)),this.backwardLayer.setWeights(t.slice(s))}computeOutputShape(t){let e=this.forwardLayer.computeOutputShape(t);Array.isArray(e)&&Array.isArray(e[0])||(e=[e]),e=e;let s,r,o;return this.returnState&&(o=e.slice(1)),s=e[0],s=s,this.mergeMode==="concat"?(s[s.length-1]*=2,r=[s]):this.mergeMode==null?r=[s,s.slice()]:r=[s],this.returnState?this.mergeMode==null?r.concat(o).concat(o.slice()):[s].concat(o).concat(o.slice()):on(r)}apply(t,e){let s=e==null?null:e.initialState,r=e==null?null:e.constants;e==null&&(e={});const o=Q1(t,s,r,this.numConstants);if(t=o.inputs,s=o.initialState,r=o.constants,Array.isArray(t)&&(s=t.slice(1),t=t[0]),(s==null||s.length===0)&&r==null)return super.apply(t,e);const i=[],a=[];if(s!=null){const c=s.length;if(c%2>0)throw new F("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");e.initialState=s,i.push(...s);const u=s.map(h=>new $e({shape:h.shape}));this.forwardLayer.stateSpec=u.slice(0,c/2),this.backwardLayer.stateSpec=u.slice(c/2),a.push(...u)}if(r!=null)throw new St("Support for constants in Bidirectional layers is not implemented yet.");const l=i[0]instanceof ws;for(const c of i)if(c instanceof ws!==l)throw new F("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(l){const c=[t].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return G(()=>{const s=e.initialState;let r,o;if(s==null)r=this.forwardLayer.call(t,e),o=this.backwardLayer.call(t,e);else{const l=s.slice(0,s.length/2),c=s.slice(s.length/2);r=this.forwardLayer.call(t,Object.assign(e,{initialState:l})),o=this.backwardLayer.call(t,Object.assign(e,{initialState:c}))}let i;this.returnState&&(Array.isArray(r)&&(i=r.slice(1).concat(o.slice(1))),r=r[0],o=o[0]),this.returnSequences&&(o=Lr(o,1));let a;return this.mergeMode==="concat"?a=Fp([r,o]):this.mergeMode==="sum"?a=et(r,o):this.mergeMode==="ave"?a=O(.5,et(r,o)):this.mergeMode==="mul"?a=O(r,o):this.mergeMode==null&&(a=[r,o]),this.returnState?this.mergeMode==null?a.concat(i):[a].concat(i):a})}resetStates(t){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(t){Sr(this.forwardLayer.name,()=>{this.forwardLayer.build(t)}),Sr(this.backwardLayer.name,()=>{this.backwardLayer.build(t)}),this.built=!0}computeMask(t,e){Array.isArray(e)&&(e=e[0]);let s;if(this.returnSequences?this.mergeMode==null?s=[e,e]:s=e:this.mergeMode==null?s=[null,null]:s=null,this.returnState){const o=this.forwardLayer.states.map(i=>null);return Array.isArray(s)?s.concat(o).concat(o):[s].concat(o).concat(o)}else return s}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(t),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(t)}getConfig(){const t={mergeMode:this.mergeMode},e=super.getConfig();return Object.assign(t,e),t}static fromConfig(t,e){const s=As(e.layer);if(delete e.layer,e.numConstants!=null)throw new St("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");const r=e;return r.layer=s,new t(r)}}qw.className="Bidirectional";tt(qw);class Xw extends Et{constructor(t){super(t),this.scale=t.scale,t.offset?this.offset=t.offset:this.offset=0}getConfig(){const t={scale:this.scale,offset:this.offset},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return G(()=>(t=Ct(t),t.dtype!=="float32"&&(t=ms(t,"float32")),et(O(t,this.scale),this.offset)))}}Xw.className="Rescaling";tt(Xw);const{resizeBilinear:LL,cropAndResize:PL}=Rs;class Kw extends Et{constructor(t){super(t),this.height=t.height,this.width=t.width}centerCrop(t,e,s,r,o,i,a,l){return G(()=>{let c,u=!1;const h=e/i,d=s/a,f=(r+e)/i,p=(o+s)/a,m=[h,d,f,p],g=[];t.rank===3?(u=!0,c=Fs([t])):c=t;for(let v=0;v<c.shape[0];v++)g.push(m);const x=xb(g,[g.length,4]),b=yi(0,g.length,1,"int32"),y=PL(c,x,b,[r,o],"nearest");return ms(u?Ct(Pr(y)):y,l)})}upsize(t,e,s,r){return G(()=>{const o=LL(t,[e,s]);return ms(o,r)})}call(t,e){return G(()=>{const s=Ct(t),r=s.dtype,o=s.shape,i=o[o.length-3],a=o[o.length-2];let l=0;i!==this.height&&(l=Math.floor((i-this.height)/2));let c=0;return a!==this.width&&(c=Math.floor((a-this.width)/2),c===0&&(c=1)),l>=0&&c>=0?this.centerCrop(s,l,c,this.height,this.width,i,a,r):this.upsize(t,this.height,this.width,r)})}getConfig(){const t={height:this.height,width:this.width},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){t=Ot(t);const e=t.length-3,s=t.length-2;return t[e]=this.height,t[s]=this.width,t}}Kw.className="CenterCrop";tt(Kw);function zL(n,t,e,s){let r=Ct(n);if(r.dtype!=="int32"&&(r=ms(r,"int32")),t==="int")return r;const o=r.shape;if(r.rank===0&&(r=rn(r,-1)),t==="oneHot"&&r.shape[r.shape.length-1]!==1&&(r=rn(r,-1)),r.rank>2)throw new F(`When outputMode is not int, maximum output rank is 2 Received outputMode ${t} and input shape ${o} which would result in output rank ${r.rank}.`);const i=["multiHot","oneHot"].includes(t),a=r;let l;if(typeof s<"u"&&t==="count"?l=gg(a,s,e,i):l=gg(a,[],e,i),t!=="tfIdf")return l;if(s)return O(l,s);throw new F("When outputMode is 'tfIdf', weights must be provided.")}class jw extends Et{constructor(t){super(t),this.numTokens=t.numTokens,t.outputMode?this.outputMode=t.outputMode:this.outputMode="multiHot"}getConfig(){const t={numTokens:this.numTokens,outputMode:this.outputMode},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){return t=Ot(t),t==null?[this.numTokens]:this.outputMode==="oneHot"&&t[t.length-1]!==1?(t.push(this.numTokens),t):(t[t.length-1]=this.numTokens,t)}call(t,e){return G(()=>{t=Ct(t),t.dtype!=="int32"&&(t=ms(t,"int32"));let s;if(typeof e.countWeights<"u"){if(this.outputMode!=="count")throw new F(`countWeights is not used when outputMode !== count.
              Received countWeights=${e.countWeights}`);s=Ct(e.countWeights)}const r=Yn(t),o=Xl(t),i=kn(this.numTokens,r).bufferSync().get(0),a=Gr(o,0).bufferSync().get(0);if(!(i&&a))throw new F(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return zL(t,this.outputMode,this.numTokens,s)})}}jw.className="CategoryEncoding";tt(jw);const BL=["bilinear","nearest"],sx=new Set(BL);class Yw extends Et{constructor(t){if(super(t),this.height=t.height,this.width=t.width,t.interpolation)if(sx.has(t.interpolation))this.interpolation=t.interpolation;else throw new F(`Invalid interpolation parameter: ${t.interpolation} is not implemented`);else this.interpolation="bilinear";this.cropToAspectRatio=!!t.cropToAspectRatio}computeOutputShape(t){t=Ot(t);const e=t[2];return[this.height,this.width,e]}getConfig(){const t={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return G(()=>{const s=[this.height,this.width];if(this.interpolation==="bilinear")return Rs.resizeBilinear(t,s,!this.cropToAspectRatio);if(this.interpolation==="nearest")return Rs.resizeNearestNeighbor(t,s,!this.cropToAspectRatio);throw new Error(`Interpolation is ${this.interpolation} but only ${[...sx]} are supported`)})}}Yw.className="Resizing";tt(Yw);class Zw{constructor(t){this.seed=t}next(){if(this.seed!==void 0)return this.seed++}}Zw.className="RandomSeed";class Jw extends Et{constructor(t){super(t),this.randomGenerator=new Zw(t.seed)}getConfig(){const t={seed:this.randomGenerator.seed},e=super.getConfig();return Object.assign(t,e),t}}Jw.className="BaseRandomLayer";const VL=["bilinear","nearest"],rx=new Set(VL);class Qw extends Jw{constructor(t){super(t);const{factor:e,interpolation:s="bilinear"}=t;if(this.factor=e,Array.isArray(this.factor)&&this.factor.length===2)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else if(!Array.isArray(this.factor)&&this.factor>0)this.widthLower=-this.factor,this.widthUpper=this.factor;else throw new F(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);if(this.widthLower<-1||this.widthUpper<-1)throw new F(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new F(`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);if(s)if(rx.has(s))this.interpolation=s;else throw new F(`Invalid interpolation parameter: ${s} is not implemented`)}getConfig(){const t={factor:this.factor,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){t=Ot(t);const e=t[2];return[this.imgHeight,-1,e]}call(t,e){return G(()=>{const s=Ct(t);this.imgHeight=s.shape[s.shape.length-3];const r=s.shape[s.shape.length-2];this.widthFactor=Ea([1],1+this.widthLower,1+this.widthUpper,"float32",this.randomGenerator.next());let o=this.widthFactor.dataSync()[0]*r;o=Math.round(o);const i=[this.imgHeight,o];switch(this.interpolation){case"bilinear":return Rs.resizeBilinear(t,i);case"nearest":return Rs.resizeNearestNeighbor(t,i);default:throw new Error(`Interpolation is ${this.interpolation}
          but only ${[...rx]} are supported`)}})}}Qw.className="RandomWidth";tt(Qw);const WL=X();WL.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var ox;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(ox||(ox={}));var ix;(function(n){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(ix||(ix={}));var ax;(function(n){n[n.FAIL=0]="FAIL",n[n.SHORTEST=1]="SHORTEST",n[n.LONGEST=2]="LONGEST"})(ax||(ax={}));function dt(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&T(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the CPU backend.`)})}const UL=Qb;class Wu extends Md{nextDataId(){return Wu.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new S0(this,os())}write(t,e,s){this.firstUse&&(this.firstUse=!1,X().get("IS_NODE")&&yn(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));const r={id:this.nextDataId()};return this.data.set(r,{values:t,dtype:s,refCount:1}),r}makeTensorInfo(t,e,s){let r;if(e==="string"&&s!=null&&s.length>0&&Ai(s[0])){const o=s.map(i=>Ys(i));r=this.write(o,t,e)}else r=this.write(s,t,e);return{dataId:r,shape:t,dtype:e}}refCount(t){return this.data.has(t)?this.data.get(t).refCount:0}incRef(t){const e=this.data.get(t);e.refCount++}decRef(t){if(this.data.has(t)){const e=this.data.get(t);e.refCount--}}move(t,e,s,r,o){this.data.set(t,{values:e,dtype:r,refCount:o})}numDataIds(){return this.data.numDataIds()}async read(t){return this.readSync(t)}readSync(t){const{dtype:e,complexTensorInfos:s}=this.data.get(t);if(e==="complex64"){const r=this.readSync(s.real.dataId),o=this.readSync(s.imag.dataId);return Os(r,o)}return fN(this.data.get(t).values,e)}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const s=e.map(r=>tr(r));return Nt(t.shape,t.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return Nt(t.shape,t.dtype,e)}makeOutput(t,e,s){return os().makeTensorFromTensorInfo(this.makeTensorInfo(e,s,t),this)}disposeData(t,e=!1){if(this.data.has(t)){if(this.data.get(t).refCount--,!e&&this.data.get(t).refCount>0)return!1;const{complexTensorInfos:s}=this.data.get(t);s!=null&&(this.disposeData(s.real.dataId,!0),this.disposeData(s.imag.dataId,!0)),this.data.delete(t)}return!0}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}async time(t){const e=sn();return t(),{kernelMs:sn()-e}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(t){dt([t],"where");const e=this.readSync(t.dataId);return UL(t.shape,e)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}Wu.nextDataId=0;function tv(n){const t=new Float32Array(n.length);for(let e=0;e<n.length;++e)t[e]=Math.abs(n[e]);return t}const GL=n=>{const{x:t}=n.inputs,e=n.backend;dt(t,"abs");let s=new Float32Array(Y(t.shape));const r=e.data.get(t.dataId).values;return s=tv(r),e.makeOutput(s,t.shape,t.dtype)},HL={kernelName:wc,backendName:"cpu",kernelFunc:GL};function ge(n){return(t,e,s,r,o)=>{const i=kt(t,e),a=i.length,l=xt(i),c=Y(i),u=Be(o,c),h=t.length,d=e.length,f=xt(t),p=xt(e),m=vo(t,i),g=vo(e,i);if(m.length+g.length===0)for(let x=0;x<u.length;++x)u[x]=n(s[x%s.length],r[x%r.length]);else for(let x=0;x<u.length;++x){const b=Ro(x,a,l),w=b.slice(-h);m.forEach(N=>w[N]=0);const y=ds(w,h,f),v=b.slice(-d);g.forEach(N=>v[N]=0);const $=ds(v,d,p);u[x]=n(s[y],r[$])}return[u,i]}}function dn(n){const{inputs:t,backend:e}=n,{real:s,imag:r}=t,o=e.data.get(s.dataId).values,i=e.data.get(r.dataId).values,a=e.makeTensorInfo(s.shape,"complex64"),l=e.data.get(a.dataId);return l.complexTensorInfos={real:e.makeTensorInfo(s.shape,"float32",o),imag:e.makeTensorInfo(r.shape,"float32",i)},a}const qL={kernelName:Yd,backendName:"cpu",kernelFunc:dn};function ac(n,t,e="float32"){if(e==="complex64"){const r=ac(n,t,"float32"),o=ac(n,t,"float32");return dn({inputs:{real:r,imag:o},backend:n})}const s=Ve(Y(t),e);return n.makeTensorInfo(t,e,s)}function vs(n){const{inputs:t,backend:e}=n,{x:s}=t;return e.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const XL={kernelName:Ji,backendName:"cpu",kernelFunc:vs};function Br(n){const{inputs:t,backend:e}=n,{input:s}=t,r=e.data.get(s.dataId).complexTensorInfos.real,o=e.data.get(r.dataId).values;return e.makeTensorInfo(r.shape,r.dtype,o)}const KL={kernelName:Cf,backendName:"cpu",kernelFunc:Br};function ev(n,t,e,s){if(s==="int32"){const r=Int32Array.from(n);return[t,"int32",r]}if(s==="bool"){const r=Ur([0],e),[o,i]=ge((a,l)=>a!==l?1:0)(t,[],n,r,"bool");return[i,"bool",o]}throw new Error(`Error in Cast: failed to cast ${e} to ${s}`)}function or(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{dtype:o}=s;if(o==="complex64"){if(r.dtype==="complex64")return vs({inputs:{x:r},backend:e});const u=ac(e,r.shape,r.dtype),h=or({inputs:{x:r},backend:e,attrs:{dtype:"float32"}}),d=dn({inputs:{real:h,imag:u},backend:e});return e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),d}if(r.dtype==="complex64"){const u=Br({inputs:{input:r},backend:e}),h=or({inputs:{x:u},backend:e,attrs:{dtype:o}});return e.disposeIntermediateTensorInfo(u),h}if(!E0(r.dtype,o)){const u=vs({inputs:{x:r},backend:e});return{dataId:u.dataId,shape:u.shape,dtype:o}}const i=e.data.get(r.dataId).values,[a,l,c]=ev(i,r.shape,r.dtype,o);return e.makeTensorInfo(a,l,c)}const jL={kernelName:zi,backendName:"cpu",kernelFunc:or};function Ne(n,t,e,s){return e==null?({inputs:r,backend:o})=>{const{a:i,b:a}=r,l=o;dt([i,a],n);const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=i.dtype==="string"?Ms(c):c,d=i.dtype==="string"?Ms(u):u,f=s||i.dtype,[p,m]=t(i.shape,a.shape,h,d,f);return l.makeTensorInfo(m,f,p)}:({inputs:r,backend:o})=>{const{a:i,b:a}=r,l=o;if(i.dtype==="complex64"||a.dtype==="complex64"){const c=or({inputs:{x:i},backend:l,attrs:{dtype:"complex64"}}),u=l.data.get(c.dataId),h=u.complexTensorInfos.real,d=u.complexTensorInfos.imag,f=l.data.get(h.dataId).values,p=l.data.get(d.dataId).values,m=or({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),g=l.data.get(m.dataId),x=g.complexTensorInfos.real,b=g.complexTensorInfos.imag,w=l.data.get(x.dataId).values,y=l.data.get(b.dataId).values,[v,$,N]=e(i.shape,a.shape,f,p,w,y),S=l.makeTensorInfo(N,"float32",v),I=l.makeTensorInfo(N,"float32",$),k=dn({inputs:{real:S,imag:I},backend:l});return l.disposeIntermediateTensorInfo(c),l.disposeIntermediateTensorInfo(m),l.disposeIntermediateTensorInfo(S),l.disposeIntermediateTensorInfo(I),k}else{const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=s||i.dtype,[d,f]=t(i.shape,a.shape,c,u,h);return l.makeTensorInfo(f,h,d)}}}function Qp(n){return(t,e,s,r,o,i)=>{const a=kt(t,e),l=Y(a),c=a.length,u=xt(a),h=Be("float32",l),d=Be("float32",l),f=vo(t,a),p=vo(e,a),m=Os(s,r),g=Os(o,i),x=t.length,b=xt(t),w=e.length,y=xt(e);if(f.length+p.length===0)for(let v=0;v<h.length;v++){const $=v%m.length,N=v%g.length,S=n(m[$*2],m[$*2+1],g[N*2],g[N*2+1]);h[v]=S.real,d[v]=S.imag}else for(let v=0;v<h.length;v++){const $=Ro(v,c,u),N=$.slice(-x);f.forEach(E=>N[E]=0);const S=ds(N,x,b),I=$.slice(-w);p.forEach(E=>I[E]=0);const k=ds(I,w,y),C=n(m[S*2],m[S*2+1],g[k*2],g[k*2+1]);h[v]=C.real,d[v]=C.imag}return[h,d,a]}}const nv=ge(((n,t)=>n+t)),YL=Qp(((n,t,e,s)=>({real:n+e,imag:t+s}))),ko=Ne(Ao,nv,YL),ZL={kernelName:Ao,backendName:"cpu",kernelFunc:ko};function tm(n,t,e,s,r){const o=Y(s),i=Ve(r,e);for(let a=0;a<n.length;a++){const l=n[a];if(l<0)throw new Error("Input x must be non-negative!");l>=r||(o>0?i[l]+=t[a]:i[l]+=1)}return i}function sv(n,t,e,s=!1){const r=n.shape[0],o=n.shape[1],i=Nt([r,e],t.dtype);for(let a=0;a<r;a++)for(let l=0;l<o;l++){const c=n.get(a,l);if(c<0)throw new Error("Input x must be non-negative!");c>=e||(s?i.set(1,a,c):t.size>0?i.set(i.get(a,c)+t.get(a,l),a,c):i.set(i.get(a,c)+1,a,c))}return i}const rv=ge(((n,t)=>n&t)),JL=Ne(jd,rv),QL={kernelName:jd,backendName:"cpu",kernelFunc:JL};function $s(n){return(t,e,s)=>{const r=he(e,t.length);for(let o=0;o<t.length;++o)r[o]=n(t[o],s);return r}}function Ut(n,t,e){const s=$s(t);return fr(n,s,e)}function fr(n,t,e){return({inputs:s,attrs:r,backend:o})=>{const{x:i}=s;dt(i,n);const a=o,l=a.data.get(i.dataId).values;let c;if(i.dtype==="string"){if(!Array.isArray(l))throw new Error("String tensor's value was not an instance of Array");c=Ms(l)}else c=l;const u=e||i.dtype,h=t(c,u,r);return a.makeTensorInfo(i.shape,u,h)}}const ov=$s(n=>Math.ceil(n)),tP=fr(Bi,ov),eP={kernelName:Bi,backendName:"cpu",kernelFunc:tP};function iv(n,t,e,s){const r=he(e,Y(t));if(s&&e!=="string"){let o=0;n.forEach(i=>{const a=Y(i.shape);r.set(i.vals,o),o+=a})}else{let o=0;n.forEach(i=>{const a=e==="string"?Ms(i.vals):i.vals;let l=0;for(let c=0;c<i.shape[0];++c){const u=c*t[1]+o;for(let h=0;h<i.shape[1];++h)r[u+h]=a[l++]}o+=i.shape[1]})}return r}const av=ge((n,t)=>n===t?1:0),lv=Ne(Oc,av,null,"bool"),nP={kernelName:Oc,backendName:"cpu",kernelFunc:lv};const cv=$s(n=>Math.exp(n)),uv=fr(Xi,cv,"float32"),sP={kernelName:Xi,backendName:"cpu",kernelFunc:uv};const hv=$s(n=>Math.expm1(n)),rP=fr(Ki,hv),oP={kernelName:Ki,backendName:"cpu",kernelFunc:rP};const dv=$s(n=>Math.floor(n)),iP=fr(ji,dv),aP={kernelName:ji,backendName:"cpu",kernelFunc:iP};const fv=ge((n,t)=>Math.floor(n/t)),lP=Ne(Yi,fv,null,"int32"),cP={kernelName:Yi,backendName:"cpu",kernelFunc:lP};function pv(n,t,e,s,r,o,i,a,l){const c=Nt([s,o],e);for(let u=0;u<s;u++){const h=[];let d=0;for(let f=0;f<r;f++){const p=n[u*r+f];d+=p*i[f],h.push(p)}if(d<0||d>=l/o)throw new Error(`Invalid indices: ${h} does not index into ${a}`);for(let f=0;f<o;f++)c.values[u*o+f]=t.get(...t.indexToLoc(d*o+f))}return c}function mv(n,t,e){const s=Nt(e,n.dtype);for(let r=0;r<s.size;++r){const i=s.indexToLoc(r).slice(),a=i[0],l=i[2],c=t.locToIndex([a,l]);i[2]=t.values[c];const u=n.locToIndex(i);0<=u&&u<n.values.length&&(s.values[r]=n.values[u])}return s}const gv=ge((n,t)=>n>t?1:0),uP=Ne(zc,gv,null,"bool"),hP={kernelName:zc,backendName:"cpu",kernelFunc:uP};const xv=ge((n,t)=>n>=t?1:0),dP=Ne(Zi,xv,null,"bool"),fP={kernelName:Zi,backendName:"cpu",kernelFunc:dP};const bv=ge((n,t)=>n<t?1:0),pP=Ne(Vc,bv,null,"bool"),mP={kernelName:Vc,backendName:"cpu",kernelFunc:pP};const yv=ge((n,t)=>n<=t?1:0),gP=Ne(Wc,yv,null,"bool"),xP={kernelName:Wc,backendName:"cpu",kernelFunc:gP};function wv(n,t,e){const s=(t-n)/(e-1),r=Ve(e,"float32");r[0]=n;for(let o=1;o<r.length;o++)r[o]=r[o-1]+s;return r}const vv=$s(n=>Math.log(n)),bP=fr(na,vv),yP={kernelName:na,backendName:"cpu",kernelFunc:bP};function Cv(n,t,e,s){const r=Be(s,Y(e));for(let o=0;o<r.length;++o){const i=o*t;let a=n[i];for(let l=0;l<t;++l){const c=n[i+l];(Number.isNaN(c)||c>a)&&(a=c)}r[o]=a}return r}const $v=ge(((n,t)=>Math.max(n,t))),wP=Ne(ra,$v),vP={kernelName:ra,backendName:"cpu",kernelFunc:wP};const kv=ge(((n,t)=>Math.min(n,t))),CP=Ne(oa,kv),$P={kernelName:oa,backendName:"cpu",kernelFunc:CP};const em=ge(((n,t)=>n*t)),kP=Qp(((n,t,e,s)=>({real:n*e-t*s,imag:n*s+t*e}))),Uu=Ne(aa,em,kP),IP={kernelName:aa,backendName:"cpu",kernelFunc:Uu};function Iv(n,t,e){const s=ar(-1,e);return em([],t,s,n,e)}function SP(n){const{inputs:t,backend:e}=n,{x:s}=t;dt(s,"neg");const r=e.data.get(s.dataId).values,[o,i]=Iv(r,s.shape,s.dtype);return e.makeTensorInfo(i,s.dtype,o)}const NP={kernelName:Qc,backendName:"cpu",kernelFunc:SP};const Sv=ge(((n,t)=>n!==t?1:0)),TP=Ne(tu,Sv,null,"bool"),EP={kernelName:tu,backendName:"cpu",kernelFunc:TP};function nm(n,t,e,s,r){const o=t.length,i=Y(t),a=xt(t),l=xt(r),c=Be(e,Y(r));for(let u=0;u<i;++u){const h=Ro(u,o,a),d=new Array(h.length);for(let p=0;p<d.length;p++)d[p]=h[s[p]];const f=ds(d,o,l);c[f]=n[u]}return c}function cn(n){const{inputs:t,attrs:e,backend:s}=n,{x:r}=t,{perm:o}=e;dt(r,"transpose");const i=r.shape.length,a=new Array(i);for(let h=0;h<a.length;h++)a[h]=r.shape[o[h]];const l=s.data.get(r.dataId).values,c=nm(l,r.shape,r.dtype,o,a);return{dataId:s.write(c,a,r.dtype),shape:a,dtype:r.dtype}}const RP={kernelName:uo,backendName:"cpu",kernelFunc:cn};function Nv(n,t,e,s){const[r,o]=De(n,s),i=mn(t,"int32"),a=Ve(Y(r),i),l=Y(o);for(let c=0;c<a.length;++c){const u=c*l;let h=1;for(let d=0;d<l;++d)h*=e[u+d];a[c]=h}return{outVals:a,outShape:r,outDtype:i}}function AP(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;dt(r,"prod");const a=r.shape.length,l=Tt(o,r.shape),c=ie(l,a);let u=l,h=r;const d=[];c!=null&&(h=cn({inputs:{x:r},backend:e,attrs:{perm:c}}),d.push(h),u=pe(u.length,a));const f=e.data.get(h.dataId).values,{outVals:p,outShape:m,outDtype:g}=Nv(h.shape,h.dtype,f,u);let x=m;return i&&(x=ye(m,l)),d.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.makeTensorInfo(x,g,p)}const DP={kernelName:iu,backendName:"cpu",kernelFunc:AP};function _P(n,t,e){n.forEach((s,r)=>{if(s<0||s>=e){const o=Ro(r,t.length,xt(t)).join(",");throw new Error(`indices[${o}] = ${s} is not in [0, ${e})`)}})}function FP(n,t){for(let e=0;e<n.length;++e){const s=n[e],r=e===n.length-1?t:n[e+1].length;if(s.length===0)throw new Error("Ragged splits may not be empty");if(s[0]<0)throw new Error("Ragged splits must be non-negative");if(s[s.length-1]>r)throw new Error("Ragged splits must not point past values");for(let o=1;o<s.length;++o)if(s[o-1]>s[o])throw new Error("Ragged splits must be sorted in ascending order")}}function OP(n,t,e,s){const r=[];let o=0;const i=t.length-1+e.length,a=new Array(i).fill(null).map(()=>[0]);FP(e,s);let l=1;for(let c=0;c<t.length-1;++c){l*=t[c];const u=t[c+1];for(let h=1;h<l+1;++h)a[c].push(h*u)}for(let c=0;c<n.length;++c){let u=n[c],h=n[c]+1;for(let d=0;d<e.length;++d){const f=e[d],p=d+t.length-1;if(p>=0){const m=a[p],g=m[m.length-1]-f[u];for(let x=u;x<h;++x)a[p].push(f[x+1]+g)}u=f[u],h=f[h]}h!==u&&(r.push([u,h]),o+=h-u)}return{outSplits:a,valueSlices:r,numValues:o}}function MP(n){const t=[];for(let e=0;e<n.length;++e){const s=n[e].length,r=he("int32",s);t.push(r),n[e].forEach((o,i)=>r[i]=o)}return t}function lx(n,t){const e=n.slice(0,t);for(;e.length<t;)e.push(1);for(let s=t;s<n.length;s++)e[t-1]*=n[s];return e}function LP(n,t,e,s,r,o){const i=lx(t,2)[1],a=lx(o,2)[1];let l=0;for(const c of e)for(let u=c[0];u<c[1];++u){for(let h=0;h<s;++h)r[l*a+h]=n[u*i+h];++l}}function PP(n,t,e,s,r){const o=t.slice();o[0]=r;const i=he(e,Y(o)),a=n.length,l=a===0?0:a/t[0];return LP(n,t,s,l,i,o),[i,o]}function Tv(n,t,e,s,r,o,i,a){if(n.length===0)throw new Error("paramsNestedSplits must be non empty");if(t[0].length===0)throw new Error("Split tensors must not be scalars");const l=t[0][0]-1;if(_P(o,i,l),s.length===0)throw new Error("params.rank must be nonzero");const c=s[0],{outSplits:u,valueSlices:h,numValues:d}=OP(o,i,n,c),f=MP(u),p=PP(e,s,r,h,d);return[f,p[0],p[1]]}const cx=2147483647;function Ev(n,t,e,s,r,o,i){if(t.length>1)throw new Error("starts must be a scalar or vector");if(r.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");const a=t.length===0,l=r.length===0,c=i.length===0,u=[];a||u.push(t[0]),l||u.push(r[0]),c||u.push(i[0]);for(let g=1;g<u.length;++g)if(u[g]!==u[g-1])throw new Error("starts, limits, and deltas must have the same shape");const h=u.length===0?1:u[0],d=he("int32",h+1);d[0]=0;for(let g=0;g<h;++g){const x=a?n[0]:n[g],b=l?s[0]:s[g],w=c?o[0]:o[g];if(w===0)throw new Error("Requires delta != 0");let y;if(w>0&&b<x||w<0&&b>x)y=0;else if(y=Math.ceil(Math.abs((b-x)/w)),y>cx)throw new Error(`Requires ((limit - start) / delta) <= ${cx}`);d[g+1]=d[g]+y}const f=d[h],p=he(e,f);let m=0;for(let g=0;g<h;++g){const x=d[g+1]-d[g];let b=a?n[0]:n[g];const w=c?o[0]:o[g];for(let y=0;y<x;++y)p[m++]=b,b+=w}return[d,p]}var Tn=Hn;class lc{constructor(t,e,s,r,o,i,a,l,c,u){this.shape=t,this.shapeShape=e,this.values=s,this.valuesShape=r,this.valuesDType=o,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=l,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=my(u),this.raggedRank=gy(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===Tn.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===Tn.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){const e=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case Tn.VALUE_ROWIDS:return lc.getMaxWidthValueRowID(e);case Tn.ROW_SPLITS:return lc.getMaxWidthRowSplit(e);default:throw new Error(`Cannot handle partition type ${Tn[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){const e=t.length;if(e===0||e===1)return 0;let s=0;for(let r=0;r<e-1;++r){const o=t[r+1]-t[r];o>s&&(s=o)}return s}static getMaxWidthValueRowID(t){const e=t.length;if(e===0)return 0;let s=0,r=t[0],o=0;for(let i=1;i<e;++i){const a=t[i];a!==r&&(r=a,o=Math.max(i-s,o),s=i)}return Math.max(e-s,o)}tensorShapeFromTensor(t,e,s=!0){if(e.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return hx(t,s)}calculateOutputSize(t){const e=this.valuesShape,s=this.defaultValueShape;xy(s,e);const r=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=py(this.raggedRank,r,e);i[0]<0&&(i[0]=t);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(t,e,s){const r=Math.min(t,s),o=[];let i=0;for(let a=0;a<r;++a,i+=e)o.push(i);for(let a=r;a<t;++a)o.push(-1);return T(o.length===t,()=>"Final length of result must be equal to firstDimension."),o}calculateOutputIndexRowSplit(t,e,s,r){const o=t.length,i=[];for(let a=0;a<o-1;++a){const l=t[a+1]-t[a];let c=Math.min(r,l),u=e[a];u===-1&&(c=0);for(let h=0;h<c;++h)i.push(u),u+=s;for(let h=0;h<l-c;++h)i.push(-1)}if(o>0&&i.length!==t[o-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(t,e,s,r){const o=t.length,i=[];if(o===0)return[];let a=0,l=t[0];if(l>=e.length)throw new Error(`Got currentValueRowId=${l}, which is not less than ${e.length}`);let c=e[l];i.push(c);for(let u=1;u<o;++u){const h=t[u];if(h===l)c>=0&&(++a,a<r?c+=s:c=-1);else{if(a=0,l=h,h>=e.length)throw new Error(`Got nextValueRowId=${h} which is not less than ${e.length}`);c=e[h]}i.push(c)}if(i.length!==t.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(t,e,s,r){const o=this.getRowPartitionTensor(t),i=this.getRowPartitionTypeByDimension(t);switch(i){case Tn.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(o,e,s,r);case Tn.ROW_SPLITS:if(o.length-1>e.length)throw new Error(`Row partition size is greater than output size: ${o.length-1} > ${e.length}`);return this.calculateOutputIndexRowSplit(o,e,s,r);default:throw new Error(`Unsupported partition type: ${Tn[i]}`)}}getFirstDimensionSize(){const t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const e=this.rowPartitionTypes[0];switch(e){case Tn.FIRST_DIM_SIZE:return t[0];case Tn.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case Tn.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${Tn[e]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const e=this.getFirstDimensionSize(),s=this.calculateOutputSize(e),r=new Array(this.raggedRank+1);r[r.length-1]=1;for(let l=r.length-2;l>=0;--l)r[l]=r[l+1]*s[l+1];const o=hx(s,!1),i=he(this.valuesDType,Y(o));if(r[0]*s[0]>0){let l=this.calculateFirstParentOutputIndex(e,r[0],s[0]);for(let c=1;c<=this.raggedRank;++c)l=this.calculateOutputIndex(c-1,l,r[c],s[c]);this.setOutput(this.raggedRank,l,i,o)}return[o,i]}setOutput(t,e,s,r){if(s.length===0)return;const o=this.values,i=s;let a=r.slice();a=a.slice(t+1);const l=Y(a),c=e.length;let u=this.defaultValue;if(u.length!==l&&u.length!==1){const p=this.defaultValueShape;G(()=>{const m=V(u,p);u=li(m,a).dataSync()})}let h=0,d=0,f=0;for(let p=0;p<=c;++p){let m=p<c?e[p]:-1;if(m===f){++f;continue}if(d<f){const g=o.subarray(h*l),x=i.subarray(d*l),b=(f-d)*l;ux(x,g,b)}if(p>=c){const g=s.length;m=Math.floor(g/l)}if(m>f)if(this.defaultValue.length===1)i.subarray(f*l,m*l).fill(this.defaultValue[0]),f=m;else for(;m>f;){const g=i.slice(f*l);ux(g,u,l),++f}m<0?(h=p+1,d=f):(h=p,d=f,f=d+1)}}}function ux(n,t,e){for(let s=0;s<e;s++)n[s]=t[s]}function hx(n,t){const e=[];for(let s of n){if(s<0){if(!t)throw new Error(`Dimension ${s} must be >= 0`);if(s<-1)throw new Error(`Dimension ${s} must be >= -1`);s=-1}e.push(s)}return e}function Rv(n,t,e,s,r,o,i,a,l,c){return new lc(n,t,e,s,r,o,i,a,l,c).compute()}function Av(n,t,e,s){const r=n===t,o=n<t&&e<0,i=t<n&&e>1;if(r||o||i)return Ve(0,s);const a=Math.abs(Math.ceil((t-n)/e)),l=Ve(a,s);t<n&&e===1&&(e=-1),l[0]=n;for(let c=1;c<l.length;c++)l[c]=l[c-1]+e;return l}const Dv=$s(n=>1/Math.sqrt(n)),zP=fr(fa,Dv),BP={kernelName:fa,backendName:"cpu",kernelFunc:zP};function $r(n,t,e,s,r,o,i,a,l,c){const u=[s/r,r],h=n.values,d=t.values;if(s===0)return Nt(e,t.dtype);const f=l instanceof Oe?l:Nt(u,t.dtype);typeof l=="string"||typeof l=="number"?f.values.fill(l):typeof l=="boolean"&&f.values.fill(+l);for(let p=0;p<o;p++){const m=[];let g=0;for(let x=0;x<i;x++){const b=h[p*i+x];m.push(b),g+=b*a[x]}if(g<0||g>=s/r)throw new Error(`Invalid indices: ${m} does not index into ${e}`);for(let x=0;x<r;x++)c?f.values[g*r+x]+=d[p*r+x]:f.values[g*r+x]=t.rank===0?d[0]:d[p*r+x]}return f}const VP=$s(n=>1/(1+Math.exp(-n))),_v=Ut(ba,n=>1/(1+Math.exp(-n))),WP={kernelName:ba,backendName:"cpu",kernelFunc:_v};function Fv(n,t,e,s,r){const o=uy(s,t,e),i=Y(e),a=xt(s);if(o){const h=hy(t,a);return r==="string"?n.slice(h,h+i):n.subarray(h,h+i)}const l=r==="string"?Ms(n):n,c=Nt(s,r,l),u=Nt(e,r);for(let h=0;h<u.size;++h){const d=u.indexToLoc(h),f=d.map((p,m)=>p+t[m]);u.set(c.get(...f),...d)}return r==="string"?My(u.values):u.values}function Vr(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{begin:o,size:i}=s;dt(r,"slice");const[a,l]=dp(r,o,i);ly(r,a,l);const c=e.data.get(r.dataId).values,u=Fv(c,a,l,r.shape,r.dtype);return e.makeTensorInfo(l,r.dtype,u)}const UP={kernelName:du,backendName:"cpu",kernelFunc:Vr};function Ov(n,t,e,s,r,o,i){const a=t[0],l=o[0],c=new Array(l),u=new Array(a),h=t[1];if(l===0){if(a!==0)throw new Error(ky(a));const g=he(e,0),x=he(r,0);return[g,[0,h],x,c,u]}let d=!0,f=0;const p=new Array(l).fill(0);for(let g=0;g<a;++g){const x=n[g*h];if(x<0)throw new Error(Iy(g,x));if(x>=l)throw new Error(Sy(g,x,l));++p[x],d=d&&x>=f,f=x}let m=!0;for(let g=0;g<l;++g){const x=p[g]===0;c[g]=x,m=m&&!x,p[g]=Math.max(p[g],1),g>0&&(p[g]+=p[g-1])}if(m&&d){const g=n,x=s;for(let b=0;b<a;++b)u[b]=b;return[g,[a,h],x,c,u]}else{const g=p[l-1],x=he(e,g*h),b=he(r,g),w=new Array(l).fill(0);for(let y=0;y<a;++y){const v=n[y*h],$=w[v],N=(v===0?0:p[v-1])+$;w[v]++;for(let S=0;S<h;++S)x[N*h+S]=n[y*h+S];b[N]=s[y],u[y]=N}for(let y=0;y<l;++y)if(w[y]===0){const $=y===0?0:p[y-1];x[$*h+0]=y;for(let N=1;N<h;++N)x[$*h+N]=0;b[$]=i}return[x,[g,h],b,c,u]}}function Mv(n,t,e,s,r){const o=Y(s),i=t[0],a=r.length,l=[];let c=1,u=-1;for(let g=0;g<a;++g){const x=r[g];if(x===-1){if(u!==-1)throw new Error(Ny(u,g));u=g,l.push(1)}else{if(x<0)throw new Error(Ty(g,x));c*=x,l.push(x)}}if(u!==-1){if(c<=0)throw new Error(Ey());const g=Math.trunc(o/c);if(c*g!==o)throw new Error(Ry(s,l));l[u]=g}if(Y(l)!==o)throw new Error(Ay(s,l));const d=s.length,f=[];if(d>0){f[d-1]=1;for(let g=d-2;g>=0;--g)f[g]=f[g+1]*s[g+1]}const p=[];if(a>0){p[a-1]=1;for(let g=a-2;g>=0;--g)p[g]=p[g+1]*l[g+1]}const m=he(e,i*a);for(let g=0;g<i;++g){let x=0;for(let b=0;b<d;++b)x+=n[g*d+b]*f[b];for(let b=0;b<a;++b)m[g*a+b]=Math.trunc(x/p[b]),x%=p[b]}return[m,[i,a],l]}function sm(n,t,e,s,r,o=!1,i=0){const a=s.length,l=[t[0],n.length/t[0]],c=l[1],h=a>0?r[a-1]+1:0;if(h<0)throw new Error(sd());const d=t.slice();d[0]=h;const f=d.reduce((w,y)=>w*y,1),p=he(e,f);if(a===0)return h>0&&p.fill(i),[p,d];if(h<=0)throw new Error(sd());let m=0,g=1,x=0,b=r[m];for(;;){let w=0;if(g<a){if(w=r[g],b===w){++g;continue}if(b>=w)throw new Error(Dy())}if(b<0||b>=h)throw new Error(_y(b,h));b>x&&p.fill(i,x*c,b*c);for(let y=m;y<g;++y){const v=s[y];if(v<0||v>=l[0])throw new Error(Fy(y,s[y],l[0]));for(let $=0;$<c;$++)p[b*c+$]+=n[v*c+$]}if(o)for(let y=0;y<c;y++)p[b*c+y]/=g-m;if(m=g,++g,x=b+1,b=w,g>a)break}return x<h&&p.fill(i,x*c,h*c),[p,d]}const GP=$s(n=>Math.sqrt(n)),HP=Ut(wa,n=>Math.sqrt(n)),qP={kernelName:wa,backendName:"cpu",kernelFunc:HP};const Lv=ge(((n,t)=>{const e=n-t;return e*e})),XP=Ne(va,Lv),KP={kernelName:va,backendName:"cpu",kernelFunc:XP};const Pv=$s((n,t)=>{const{pattern:e,replaceGlobal:s,rewrite:r}=t;return n.replace(new RegExp(e,s?"g":""),r)}),jP=fr(Sf,Pv),YP={kernelName:Sf,backendName:"cpu",kernelFunc:jP};function zv(n,t,e,s){const r=Nt(n,t.dtype);for(let o=0;o<r.size;o++){const i=r.indexToLoc(o),a=new Array(i.length);for(let l=0;l<a.length;l++)a[l]=i[l]*e[l]+s[l];r.set(t.get(...a),...i)}return r}class ZP{constructor(t,e,s,r,o,i){this.separator=Ys(t),this.nGramWidths=e,this.leftPad=Ys(s),this.rightPad=Ys(r),this.padWidth=o,this.preserveShort=i}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,e){const s=this.getPadWidth(e);return Math.max(0,t+2*s-e+1)}createNGrams(t,e,s,r,o,i){for(let a=0;a<o;++a){const l=this.getPadWidth(i),c=Math.max(0,l-a),u=Math.max(0,l-(o-(a+1))),h=i-(c+u),d=e+(c>0?0:a-l);let f=0;f+=c*this.leftPad.length;for(let b=0;b<h;++b)f+=t[d+b].length;f+=u*this.rightPad.length;const p=c+u+h-1;f+=p*this.separator.length,s[r+a]=new Uint8Array(f);const m=s[r+a];let g=0;const x=b=>b.forEach(w=>m[g++]=w);for(let b=0;b<c;++b)x(this.leftPad),x(this.separator);for(let b=0;b<h-1;++b)x(t[d+b]),x(this.separator);if(h>0){x(t[d+h-1]);for(let b=0;b<u;++b)x(this.separator),x(this.rightPad)}else{for(let b=0;b<u-1;++b)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(t,e){const s=t.length,r=e.length;if(r>0){let l=e[0];if(l!==0)throw new Error(`First split value must be 0, got ${l}`);for(let c=1;c<r;++c){let u=e[c]>=l;if(u=u&&e[c]<=s,!u)throw new Error(`Invalid split value ${e[c]}, must be in [${l}, ${s}]`);l=e[c]}if(l!==s)throw new Error(`Last split value must be data size. Expected ${s}, got ${l}`)}const o=r-1,i=he("int32",r);if(s===0||r===0){const l=new Array(s);for(let c=0;c<=o;++c)i[c]=0;return[l,i]}i[0]=0;for(let l=1;l<=o;++l){const c=e[l]-e[l-1];let u=0;this.nGramWidths.forEach(h=>{u+=this.getNumNGrams(c,h)}),this.preserveShort&&c>0&&u===0&&(u=1),i[l]=i[l-1]+u}const a=new Array(i[o]);for(let l=0;l<o;++l){const c=e[l];let u=i[l];if(this.nGramWidths.forEach(h=>{const d=e[l+1]-e[l],f=this.getNumNGrams(d,h);this.createNGrams(t,c,a,u,f,h),u+=f}),this.preserveShort&&u===i[l]){const h=e[l+1]-e[l];if(h===0)continue;const d=h+2*this.padWidth;this.createNGrams(t,c,a,u,1,d)}}return[a,i]}}function Bv(n,t,e,s,r,o,i,a){return new ZP(e,s,r,o,i,a).compute(n,t)}function JP(n,t,e,s){if(!n.length)return;if(t.length===0){for(let o=0;o<n.length;++o)s.push(n.subarray(o,o+1));return}if(t.length===1){const o=t[0];let i=n.indexOf(o);for(;i!==-1;){const a=n.subarray(0,i);(!e||a.length!==0)&&s.push(a),n=n.subarray(i+1),i=n.indexOf(o)}(!e||n.length!==0)&&s.push(n);return}let r=0;for(let o=0;o<n.length+1;o++)if(o===n.length||t.indexOf(n[o])!==-1){const i=n.subarray(r,o);(!e||i.length!==0)&&s.push(i),r=o+1}}function Vv(n,t,e){const s=n.length,r=[];let o=0,i=0;const a=new Array(s);for(let d=0;d<s;++d){const f=r.length;JP(n[d],t,e,r);const p=r.length-f;a[d]=p,o+=p,i=Math.max(i,p)}const l=he("int32",o*2),c=new Array(o),u=[s,i];let h=0;for(let d=0;d<s;++d)for(let f=0;f<a[d];++f)l[h*2]=d,l[h*2+1]=f,c[h]=r[h],++h;return[l,c,u]}function Wv(n,t){const e=he("int32",n.length);for(let s=0;s<n.length;++s)e[s]=_N(n[s]).modulo(t).getLowBitsUnsigned();return e}const Uv=ge(((n,t)=>n-t)),QP=Qp(((n,t,e,s)=>({real:n-e,imag:t-s}))),rm=Ne(Ca,Uv,QP),t3={kernelName:Ca,backendName:"cpu",kernelFunc:rm};function Gv(n,t){const e=new Array(n.rank);for(let r=0;r<e.length;r++)e[r]=n.shape[r]*t[r];const s=Nt(e,n.dtype);for(let r=0;r<s.values.length;++r){const o=s.indexToLoc(r),i=new Array(n.rank);for(let l=0;l<i.length;l++)i[l]=o[l]%n.shape[l];const a=n.locToIndex(i);s.values[r]=n.values[a]}return s}const ri=(n,t)=>{const e=t.value-n.value;return e===0?n.index-t.index:e};function Hv(n,t,e=0,s=n.length-1){for(;s>e;){if(s-e>600){const a=s-e+1,l=t-e+1,c=Math.log(a),u=.5*Math.exp(2*c/3),h=.5*Math.sqrt(c*u*(a-u)/a)*Math.sign(l-a/2),d=Math.max(e,Math.floor(t-l*u/a+h)),f=Math.min(s,Math.floor(t+(a-l)*u/a+h));Hv(n,t,d,f)}const r=n[t];let o=e,i=s;for(no(n,e,t),ri(n[s],r)>0&&no(n,e,s);o<i;){for(no(n,o,i),o++,i--;ri(n[o],r)<0;)o=o+1;for(;ri(n[i],r)>0;)i=i-1}ri(n[e],r)===0?no(n,e,i):(i=i+1,no(n,i,s)),i<=t&&(e=i+1),t<=i&&(s=i-1)}}function qv(n,t,e,s,r){const o=t[t.length-1],[i,a]=[n.length/o,o],l=Be(e,i*s),c=Be("int32",i*s);for(let h=0;h<i;h++){const d=h*a,f=n.subarray(d,d+a);let p=new Array(f.length);f.forEach((b,w)=>p[w]={value:b,index:w}),s<p.length&&(Hv(p,s),p=p.slice(0,s)),r&&p.sort(ri);const m=h*s,g=l.subarray(m,m+s),x=c.subarray(m,m+s);for(let b=0;b<s;b++)g[b]=p[b].value,x[b]=p[b].index}const u=t.slice();return u[u.length-1]=s,[Nt(u,e,l),Nt(u,"int32",c)]}function Xv(n,t,e,s){const r=Tt(t,e)[0],o=[1,e[0],1];for(let p=0;p<r;p++)o[0]*=e[p];o[1]=e[r];for(let p=r+1;p<e.length;p++)o[2]*=e[p];const i=new Map,a=new Int32Array(e[r]),l=new Oe(o,s,n),c=[],u=o[0]===1&&o[2]===1;for(let p=0;p<e[r];p++){let m;if(u)m=n[p].toString();else{const x=[];for(let b=0;b<o[0];b++)for(let w=0;w<o[2];w++)x.push(l.get(b,p,w));m=x.join(",")}const g=i.get(m);if(g!=null)a[p]=g;else{const x=i.size;i.set(m,x),a[p]=x,c.push(p)}}const h=o.slice();h[1]=i.size;const d=new Oe(h,s);c.forEach((p,m)=>{for(let g=0;g<o[0];g++)for(let x=0;x<o[2];x++)d.set(l.get(g,p,x),g,m,x)});const f=e.slice();return f[r]=h[1],{outputValues:d.values,outputShape:f,indices:a}}const e3=Object.freeze(Object.defineProperty({__proto__:null,addImpl:nv,bincountImpl:tm,bincountReduceImpl:sv,bitwiseAndImpl:rv,castImpl:ev,ceilImpl:ov,concatImpl:iv,equalImpl:av,expImpl:cv,expm1Impl:hv,floorDivImpl:fv,floorImpl:dv,gatherNdImpl:pv,gatherV2Impl:mv,greaterEqualImpl:xv,greaterImpl:gv,lessEqualImpl:yv,lessImpl:bv,linSpaceImpl:wv,logImpl:vv,maxImpl:Cv,maximumImpl:$v,minimumImpl:kv,multiplyImpl:em,negImpl:Iv,notEqualImpl:Sv,prodImpl:Nv,raggedGatherImpl:Tv,raggedRangeImpl:Ev,raggedTensorToTensorImpl:Rv,rangeImpl:Av,rsqrtImpl:Dv,scatterImpl:$r,sigmoidImpl:VP,simpleAbsImpl:tv,sliceImpl:Fv,sparseFillEmptyRowsImpl:Ov,sparseReshapeImpl:Mv,sparseSegmentReductionImpl:sm,sqrtImpl:GP,squaredDifferenceImpl:Lv,staticRegexReplaceImpl:Pv,stridedSliceImpl:zv,stringNGramsImpl:Bv,stringSplitImpl:Vv,stringToHashBucketFastImpl:Wv,subImpl:Uv,tileImpl:Gv,topKImpl:qv,transposeImpl:nm,uniqueImpl:Xv},Symbol.toStringTag,{value:"Module"}));bb("cpu",()=>new Wu,1);const Kv=Ut(Hi,n=>n>=0?n:Math.exp(n)-1),n3={kernelName:Hi,backendName:"cpu",kernelFunc:Kv};function jv(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{alpha:o}=s;dt([r],"leakyRelu");const i=Y(r.shape),a=e.data.get(r.dataId).values,l=Be("float32",i);for(let c=0;c<a.length;c++)l[c]=a[c]<0?o*a[c]:a[c];return e.makeTensorInfo(r.shape,"float32",l)}const s3={kernelName:Bc,backendName:"cpu",kernelFunc:jv};const r3=ge((n,t)=>n<0?t*n:n);function Yv(n){const{inputs:t,backend:e}=n,{x:s,alpha:r}=t;dt([s,r],"prelu");const o=e.data.get(s.dataId).values,i=e.data.get(r.dataId).values,[a,l]=r3(s.shape,r.shape,o,i,"float32");return e.makeTensorInfo(l,"float32",a)}const o3={kernelName:ou,backendName:"cpu",kernelFunc:Yv};const Zv=Ut(ua,n=>Math.max(0,n)),i3={kernelName:ua,backendName:"cpu",kernelFunc:Zv};const Jv=Ut(ha,n=>Math.min(Math.max(0,n),6)),a3={kernelName:ha,backendName:"cpu",kernelFunc:Jv};function cc(n,t,e,s,r){if(e==="linear")return vs({inputs:{x:t},backend:n});if(e==="relu")return Zv({inputs:{x:t},backend:n});if(e==="elu")return Kv({inputs:{x:t},backend:n});if(e==="relu6")return Jv({inputs:{x:t},backend:n});if(e==="prelu")return Yv({inputs:{x:t,alpha:s},backend:n});if(e==="leakyrelu")return jv({inputs:{x:t},backend:n,attrs:{alpha:r}});if(e==="sigmoid")return _v({inputs:{x:t},backend:n});throw new Error(`Activation ${e} has not been implemented for the CPU backend.`)}function ee(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{shape:o}=s,i=Y(r.shape),a=T0(o,i),l=Y(a);T(i===l,()=>`The new shape (${a}) has ${l} elements and the old shape (${r.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`),e.incRef(r.dataId);const c=e.data.get(r.dataId);if(c.complexTensorInfos!=null){const u=c.complexTensorInfos.real,h=c.complexTensorInfos.imag;u.shape=a,h.shape=a}return{dataId:r.dataId,shape:a,dtype:r.dtype}}const l3={kernelName:au,backendName:"cpu",kernelFunc:ee};function Qv(n){const{inputs:t,backend:e,attrs:s}=n,{a:r,b:o}=t,{transposeA:i,transposeB:a}=s;dt([r,o],"matMul");const l=r.shape.length,c=o.shape.length,u=i?r.shape[l-2]:r.shape[l-1],h=a?o.shape[c-1]:o.shape[c-2],d=i?r.shape[l-1]:r.shape[l-2],f=a?o.shape[c-2]:o.shape[c-1],p=r.shape.slice(0,-2),m=o.shape.slice(0,-2),g=Y(p),x=Y(m),w=kt(r.shape.slice(0,-2),o.shape.slice(0,-2)).concat([d,f]);T(u===h,()=>`Error in matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${r.shape} and ${o.shape} and transposeA=${i} and transposeB=${a} must match.`);const y=i?[g,u,d]:[g,d,u],v=a?[x,f,h]:[x,h,f],$=ee({inputs:{x:r},backend:e,attrs:{shape:y}}),N=ee({inputs:{x:o},backend:e,attrs:{shape:v}}),S=i?$.shape[1]:$.shape[2],I=i?$.shape[2]:$.shape[1],k=a?N.shape[1]:N.shape[2],C=Math.max(g,x),E=e.data.get($.dataId).values,_=e.data.get(N.dataId).values,R=xt($.shape),M=xt(N.shape),[z,P,U]=i?[R[0],1,R[1]]:[R[0],R[1],1],[q,j,Z]=a?[1,M[1],M[0]]:[M[1],1,M[0]],J=I*k,Q=Nt([C,I,k],$.dtype),rt=Q.values,st=e.blockSize;for(let lt=0;lt<C;lt++){const pt=lt%g,mt=lt%x;for(let yt=0;yt<I;yt+=st){const $t=Math.min(yt+st,I);for(let It=0;It<k;It+=st){const Mt=Math.min(It+st,k);for(let Gt=0;Gt<S;Gt+=st){const Kt=Math.min(Gt+st,S);for(let zt=yt;zt<$t;zt++)for(let Bt=It;Bt<Mt;Bt++){let ne=0;for(let jt=Gt;jt<Kt;jt++){const Sn=E[pt*z+zt*P+jt*U],ue=_[jt*q+Bt*j+mt*Z];ne+=Sn*ue}rt[lt*J+(zt*k+Bt)]+=ne}}}}}return e.disposeIntermediateTensorInfo($),e.disposeIntermediateTensorInfo(N),e.makeTensorInfo(w,Q.dtype,Q.values)}const c3={kernelName:Ic,backendName:"cpu",kernelFunc:Qv};function u3(n){const{inputs:t,backend:e,attrs:s}=n,{a:r,b:o,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;let d,f,p;const m=[];d=Qv({inputs:{a:r,b:o},attrs:{transposeA:l,transposeB:c},backend:e}),i&&(f=ko({inputs:{a:d,b:i},backend:e}),m.push(d),d=f),u&&(p=cc(e,d,u,a,h),m.push(d),d=p);for(const x of m)e.disposeIntermediateTensorInfo(x);return d}const h3={kernelName:Ul,backendName:"cpu",kernelFunc:u3};const d3=Ut(Di,n=>Math.acos(n)),f3={kernelName:Di,backendName:"cpu",kernelFunc:d3};const p3=Ut(_i,n=>Math.acosh(n)),m3={kernelName:_i,backendName:"cpu",kernelFunc:p3};function g3(n){const{inputs:t,backend:e}=n,s=t;dt(t,"addN");const r=s.map(a=>e.data.get(a.dataId).values),o=Nt(s[0].shape,s[0].dtype),i=o.values;for(let a=0;a<s.length;a++){const l=r[a];for(let c=0;c<i.length;c++)i[c]+=l[c]}return e.makeTensorInfo(o.shape,o.dtype,o.values)}const x3={kernelName:Ud,backendName:"cpu",kernelFunc:g3};function b3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;dt(r,"all");const a=Tt(o,r.shape);let l=a;const c=ie(l,r.shape.length);let u=r;c!=null&&(u=cn({inputs:{x:r},backend:e,attrs:{perm:c}}),l=pe(l.length,r.shape.length)),Le("all",l,u.shape.length);const[h,d]=De(u.shape,l),f=Y(d),p=Ve(Y(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<p.length;++x){const b=x*f;let w=m[b];for(let y=0;y<f;++y){const v=m[b+y];w=w&&v}p[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,p);if(i){const x=ye(h,a),b=ee({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const y3={kernelName:Gd,backendName:"cpu",kernelFunc:b3};function w3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;dt(r,"any");const a=Tt(o,r.shape);let l=a;const c=ie(l,r.shape.length);let u=r;c!=null&&(u=cn({inputs:{x:r},backend:e,attrs:{perm:c}}),l=pe(l.length,r.shape.length)),Le("any",l,u.shape.length);const[h,d]=De(u.shape,l),f=Y(d),p=Ve(Y(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<p.length;++x){const b=x*f;let w=m[b];for(let y=0;y<f;++y){const v=m[b+y];w=w||v}p[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,p);if(i){const x=ye(h,a),b=ee({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const v3={kernelName:Hd,backendName:"cpu",kernelFunc:w3};function C3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o}=s;dt(r,"argMax");let i=Tt(o,r.shape);const a=ie(i,r.shape.length);let l=r;const c=[];a!=null&&(l=cn({inputs:{x:r},backend:e,attrs:{perm:a}}),c.push(l),i=pe(i.length,l.shape.length)),i=[i[0]],Le("argMax",i,l.shape.length);const[u,h]=De(l.shape,i),d=Y(u),f=Ve(d,"int32"),p=Y(h),m=e.data.get(l.dataId).values;for(let g=0;g<f.length;++g){const x=g*p;let b=m[x],w=0;for(let y=0;y<p;++y){const v=m[x+y];v>b&&(b=v,w=y)}f[g]=w}return c.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",f)}const $3={kernelName:vc,backendName:"cpu",kernelFunc:C3};function k3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o}=s;dt(r,"argMin");let i=Tt(o,r.shape);const a=ie(i,r.shape.length);let l=r;const c=[];a!=null&&(l=cn({inputs:{x:r},backend:e,attrs:{perm:a}}),c.push(l),i=pe(i.length,l.shape.length)),i=[i[0]],Le("argMin",i,l.shape.length);const[u,h]=De(l.shape,i),d=Y(u),f=Ve(d,"int32"),p=Y(h),m=e.data.get(l.dataId).values;for(let g=0;g<f.length;++g){const x=g*p;let b=m[x],w=0;for(let y=0;y<p;++y){const v=m[x+y];v<b&&(b=v,w=y)}f[g]=w}return c.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",f)}const I3={kernelName:Cc,backendName:"cpu",kernelFunc:k3};const S3=Ut(Fi,n=>Math.asin(n)),N3={kernelName:Fi,backendName:"cpu",kernelFunc:S3};const T3=Ut(Oi,n=>Math.asinh(n)),E3={kernelName:Oi,backendName:"cpu",kernelFunc:T3};const R3=Ut(Mi,n=>Math.atan(n)),A3={kernelName:Mi,backendName:"cpu",kernelFunc:R3};const D3=ge((n,t)=>Math.atan2(n,t)),_3=Ne(Pi,D3),F3={kernelName:Pi,backendName:"cpu",kernelFunc:_3};const O3=Ut(Li,n=>Math.atanh(n)),M3={kernelName:Li,backendName:"cpu",kernelFunc:O3};function om(n,t,e,s,r,o){const i=r.strideHeight,a=r.strideWidth,l=r.dilationHeight,c=r.dilationWidth,u=r.effectiveFilterHeight,h=r.effectiveFilterWidth,d=r.padInfo.top,f=r.padInfo.left,p=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,m=Nt(r.outShape,e),g=m.values,x=r.outShape[1]*r.outShape[2]*r.outShape[3],b=r.outShape[2]*r.outShape[3],w=r.outShape[3];for(let y=0;y<r.batchSize;++y){const v=y*x,$=y*s[0];for(let N=0;N<r.inChannels;++N)for(let S=0;S<r.outHeight;++S){const I=S*i-d,k=Math.max(0,I),C=Math.min(r.inHeight,u+I),E=v+S*b;for(let _=0;_<r.outWidth;++_){const R=_*a-f,M=Math.max(0,R),z=Math.min(r.inWidth,h+R);let P=p,U=0,q=0;for(let Z=k;Z<C;Z+=l){const J=$+Z*s[1];for(let Q=M;Q<z;Q+=c){const rt=J+Q*s[2],st=n[rt+N];o==="max"&&st>P?P=st:o==="avg"&&(U+=st,q++)}if(isNaN(P))break}const j=E+_*w+N;g[j]=o==="avg"?U/q:P}}}return m}function tC(n,t,e,s,r=!1,o=!1){const i=Nt(s.outShape,"int32"),a=s.strideHeight,l=s.strideWidth,c=s.dilationHeight,u=s.dilationWidth,h=s.effectiveFilterHeight,d=s.effectiveFilterWidth,f=s.padInfo.top,p=s.padInfo.left,m=Nt(t,e,n);for(let g=0;g<s.batchSize;++g)for(let x=0;x<s.inChannels;++x)for(let b=0;b<s.outHeight;++b){const w=b*a-f;let y=w;for(;y<0;)y+=c;const v=Math.min(s.inHeight,h+w);for(let $=0;$<s.outWidth;++$){const N=$*l-p;let S=N;for(;S<0;)S+=u;const I=Math.min(s.inWidth,d+N);let k=Number.NEGATIVE_INFINITY,C=-1;for(let E=y;E<v;E+=c){const _=E-w;for(let R=S;R<I;R+=u){const M=R-N,z=m.get(g,E,R,x);z>k&&(k=z,r?C=o?((g*s.inHeight+E)*s.inWidth+R)*s.inChannels+x:(E*s.inWidth+R)*s.inChannels+x:C=_*d+M)}}i.set(C,g,b,$,x)}}return i}function eC(n,t,e,s,r,o){const i=r.strideDepth,a=r.strideHeight,l=r.strideWidth,c=r.dilationDepth,u=r.dilationHeight,h=r.dilationWidth,d=r.effectiveFilterDepth,f=r.effectiveFilterHeight,p=r.effectiveFilterWidth,m=r.padInfo.front,g=r.padInfo.top,x=r.padInfo.left,b=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,w=Nt(r.outShape,e),y=w.values,v=r.outShape[1]*r.outShape[2]*r.outShape[3]*r.outShape[4],$=r.outShape[2]*r.outShape[3]*r.outShape[4],N=r.outShape[3]*r.outShape[4],S=r.outShape[4];for(let I=0;I<r.batchSize;++I){const k=I*v,C=I*s[0];for(let E=0;E<r.inChannels;++E)for(let _=0;_<r.outDepth;++_){const R=_*i-m;let M=R;for(;M<0;)M+=c;const z=Math.min(r.inDepth,d+R),P=k+_*$;for(let U=0;U<r.outHeight;++U){const q=U*a-g;let j=q;for(;j<0;)j+=u;const Z=Math.min(r.inHeight,f+q),J=P+U*N;for(let Q=0;Q<r.outWidth;++Q){const rt=Q*l-x;let st=rt;for(;st<0;)st+=h;const lt=Math.min(r.inWidth,p+rt),pt=J+Q*S;let mt=b,yt=0,$t=0;for(let Mt=M;Mt<z;Mt+=c){const Gt=C+Mt*s[1];for(let Kt=j;Kt<Z;Kt+=u){const zt=Gt+Kt*s[2];for(let Bt=st;Bt<lt;Bt+=h){const ne=zt+Bt*s[3],jt=n[ne+E];if(o==="max"&&jt>mt?mt=jt:o==="avg"&&(yt+=jt,$t++),isNaN(mt))break}if(isNaN(mt))break}if(isNaN(mt))break}const It=pt+E;y[It]=o==="avg"?yt/Math.max($t,1):mt}}}}return w}function L3(n,t){const e=Nt(t.outShape,"int32"),s=t.strideDepth,r=t.strideHeight,o=t.strideWidth,i=t.dilationDepth,a=t.dilationHeight,l=t.dilationWidth,c=t.effectiveFilterDepth,u=t.effectiveFilterHeight,h=t.effectiveFilterWidth,d=t.padInfo.front,f=t.padInfo.top,p=t.padInfo.left;for(let m=0;m<t.batchSize;++m)for(let g=0;g<t.inChannels;++g)for(let x=0;x<t.outDepth;++x){const b=x*s-d;let w=b;for(;w<0;)w+=i;const y=Math.min(t.inDepth,c+b);for(let v=0;v<t.outHeight;++v){const $=v*r-f;let N=$;for(;N<0;)N+=a;const S=Math.min(t.inHeight,u+$);for(let I=0;I<t.outWidth;++I){const k=I*o-p;let C=k;for(;C<0;)C+=l;const E=Math.min(t.inWidth,h+k);let _=Number.NEGATIVE_INFINITY,R=-1;for(let M=w;M<y;M+=i){const z=M-b;for(let P=N;P<S;P+=a){const U=P-$;for(let q=C;q<E;q+=l){const j=q-k,Z=n.get(m,M,P,q,g);Z>=_&&(_=Z,R=z*u*h+U*u+j)}}}e.set(R,m,x,v,I,g)}}}return e}function P3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t;dt(r,"avgPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=s,c=1;T(Ue(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=On(r.shape,o,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Pt(u.inShape,u.outShape))h=vs({inputs:{x:r},backend:e});else{const d=e.data.get(r.dataId).values,f=xt(r.shape),p=om(d,r.shape,r.dtype,f,u,"avg");h=e.makeTensorInfo(u.outShape,r.dtype,p.values)}return h}const z3={kernelName:$c,backendName:"cpu",kernelFunc:P3};function B3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{filterSize:o,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;dt(r,"avgPool3d");const u=Ps(r.shape,o,i,1,a,l,c),h=e.data.get(r.dataId).values,d=eC(h,r.shape,r.dtype,xt(r.shape),u,"avg");return e.makeTensorInfo(d.shape,"float32",d.values)}const V3={kernelName:kc,backendName:"cpu",kernelFunc:B3};function W3(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;dt([r,o],"avgPool3DGrad");const u=Ps(o.shape,i,a,1,l,c),h=u.strideDepth,d=u.strideHeight,f=u.strideWidth,p=u.filterDepth,m=u.filterHeight,g=u.filterWidth,x=u.dilationDepth,b=u.dilationHeight,w=u.dilationWidth,y=u.effectiveFilterDepth,v=u.effectiveFilterHeight,$=u.effectiveFilterWidth,N=y-1-u.padInfo.front,S=$-1-u.padInfo.left,I=v-1-u.padInfo.top,k=Nt(o.shape,"float32"),C=1/(p*m*g),E=e.bufferSync(r);for(let _=0;_<u.batchSize;++_)for(let R=0;R<u.inChannels;++R)for(let M=0;M<u.inDepth;++M)for(let z=0;z<u.inHeight;++z)for(let P=0;P<u.inWidth;++P){const U=M-N,q=z-I,j=P-S;let Z=0;for(let J=0;J<y;J+=x){const Q=(U+J)/h;if(!(Q<0||Q>=u.outDepth||Math.floor(Q)!==Q))for(let rt=0;rt<v;rt+=b){const st=(q+rt)/d;if(!(st<0||st>=u.outHeight||Math.floor(st)!==st))for(let lt=0;lt<$;lt+=w){const pt=(j+lt)/f;if(pt<0||pt>=u.outWidth||Math.floor(pt)!==pt)continue;const mt=E.get(_,Q,st,pt,R);Z+=mt}}}k.set(Z*C,_,M,z,P,R)}return e.makeTensorInfo(k.shape,k.dtype,k.values)}const U3={kernelName:Xd,backendName:"cpu",kernelFunc:W3};function G3(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,i=o;dt([r,o],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=On(i.shape,a,l,1,c),h=u.strideHeight,d=u.strideWidth,f=u.filterHeight,p=u.filterWidth,m=u.dilationHeight,g=u.dilationWidth,x=u.effectiveFilterHeight,b=u.effectiveFilterWidth,w=b-1-u.padInfo.left,y=x-1-u.padInfo.top,v=Nt(i.shape,"float32"),$=1/(f*p),N=e.data.get(r.dataId).values,S=Nt(r.shape,"float32",N);for(let I=0;I<u.batchSize;++I)for(let k=0;k<u.inChannels;++k)for(let C=0;C<u.inHeight;++C)for(let E=0;E<u.inWidth;++E){const _=C-y,R=E-w;let M=0;for(let z=0;z<x;z+=m){const P=(_+z)/h;if(!(P<0||P>=u.outHeight||Math.floor(P)!==P))for(let U=0;U<b;U+=g){const q=(R+U)/d;if(q<0||q>=u.outWidth||Math.floor(q)!==q)continue;const j=S.get(I,P,q,k);M+=j}}v.set(M*$,I,C,E,k)}return e.makeTensorInfo(v.shape,v.dtype,v.values)}const H3={kernelName:qd,backendName:"cpu",kernelFunc:G3};function q3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,scale:o,offset:i,mean:a,variance:l}=t;T(a.shape.length===l.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),T(i==null||a.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),T(o==null||a.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),dt([r,a,l,o,i],"batchNorm");let{varianceEpsilon:c}=s;c==null&&(c=.001);const u=e.data.get(r.dataId).values,h=e.data.get(a.dataId).values,d=e.data.get(l.dataId).values,f=o?e.data.get(o.dataId).values:new Float32Array([1]),p=i?e.data.get(i.dataId).values:new Float32Array([0]),m=new Float32Array(u.length),g=p.length,x=f.length,b=d.length,w=h.length;let y=0,v=0,$=0,N=0;for(let S=0;S<u.length;++S)m[S]=p[y++]+(u[S]-h[v++])*f[$++]/Math.sqrt(d[N++]+c),y>=g&&(y=0),v>=w&&(v=0),$>=x&&($=0),N>=b&&(N=0);return e.makeTensorInfo(r.shape,r.dtype,m)}const X3={kernelName:Lc,backendName:"cpu",kernelFunc:q3};function K3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockShape:o,crops:i}=s;dt([r],"batchToSpaceND");const a=o.reduce((x,b)=>x*b),l=Da(r.shape,o,a),c=_a(l.length,o.length),u=Fa(r.shape,o,a),h=gp(i,o.length),d=xp(u,i,o.length),f=ee({inputs:{x:r},backend:e,attrs:{shape:l}}),p=cn({inputs:{x:f},backend:e,attrs:{perm:c}}),m=ee({inputs:{x:p},backend:e,attrs:{shape:u}}),g=Vr({inputs:{x:m},backend:e,attrs:{begin:h,size:d}});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),g}const j3={kernelName:Sc,backendName:"cpu",kernelFunc:K3};function Y3(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,weights:o}=t,{size:i}=s,a=e.data.get(r.dataId).values,l=e.data.get(o.dataId).values,c=tm(a,l,o.dtype,o.shape,i);return e.makeTensorInfo([i],o.dtype,c)}const Z3={kernelName:Kd,backendName:"cpu",kernelFunc:Y3};function J3(n){const{inputs:t,backend:e}=n,{s0:s,s1:r}=t,o=e.data.get(s.dataId).values,i=e.data.get(r.dataId).values,a=kt(Array.from(o),Array.from(i));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const Q3={kernelName:F0,backendName:"cpu",kernelFunc:J3};const tz=Ut(Vi,(n,t)=>{const e=t;return n>e.clipValueMax?e.clipValueMax:n<e.clipValueMin?e.clipValueMin:n}),ez={kernelName:Vi,backendName:"cpu",kernelFunc:tz};const nz=n=>{const{x:t}=n.inputs,e=n.backend,s=new Float32Array(Y(t.shape)),r=e.data.get(t.dataId),o=r.complexTensorInfos.real,i=r.complexTensorInfos.imag,a=e.data.get(o.dataId).values,l=e.data.get(i.dataId).values;for(let c=0;c<a.length;c++){const u=a[c],h=l[c];s[c]=Math.hypot(u,h)}return e.makeOutput(s,t.shape,"float32")},sz={kernelName:Nc,backendName:"cpu",kernelFunc:nz};function Io(n){const{inputs:t,backend:e}=n,{input:s}=t,r=e.data.get(s.dataId).complexTensorInfos.imag,o=e.data.get(r.dataId).values;return e.makeTensorInfo(r.shape,r.dtype,o)}const rz={kernelName:pf,backendName:"cpu",kernelFunc:Io};function So(n){const{inputs:t,backend:e,attrs:s}=n,{axis:r}=s,o=Tt(r,t[0].shape)[0],i=t.map(m=>m.shape);fp(i,o);let a=ps(t.map(m=>m.shape),o);if(Y(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);const l=t.filter(m=>Y(m.shape)>0);if(l.length===1)return vs({inputs:{x:l[0]},backend:e});if(l[0].dtype==="complex64"){const m=l.map(y=>Br({inputs:{input:y},backend:e})),g=l.map(y=>Io({inputs:{input:y},backend:e})),x=So({inputs:m,backend:e,attrs:{axis:o}}),b=So({inputs:g,backend:e,attrs:{axis:o}}),w=dn({inputs:{real:x,imag:b},backend:e});return m.forEach(y=>e.disposeIntermediateTensorInfo(y)),g.forEach(y=>e.disposeIntermediateTensorInfo(y)),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),w}const c=l.map(m=>{const x=[-1,Y(m.shape.slice(o))];return ee({inputs:{x:m},backend:e,attrs:{shape:x}})}),u=c.map(m=>({vals:e.data.get(m.dataId).values,shape:m.shape}));a=ps(c.map(m=>m.shape),1);const h=c[0].shape[0]===1,d=iv(u,a,t[0].dtype,h),f=ps(l.map(m=>m.shape),o),p=e.makeTensorInfo(f,t[0].dtype,d);return c.forEach(m=>e.disposeIntermediateTensorInfo(m)),p}const oz={kernelName:Tc,backendName:"cpu",kernelFunc:So};function nC(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s;dt([r,o],"conv2d");const h=zs(l),d=Me(r.shape,o.shape,i,c,a,u,!1,h),f=d.filterHeight,p=d.filterWidth,m=d.dilationHeight,g=d.dilationWidth,x=d.padInfo.left,b=d.padInfo.top,w=d.dataFormat==="channelsLast",y=new Oe(d.outShape,r.dtype),v=xt(r.shape),$=xt(o.shape),N=v[0],S=w?v[1]:v[2],I=w?v[2]:1,k=w?1:v[1],C=y.strides[0],E=w?y.strides[1]:y.strides[2],_=w?y.strides[2]:1,R=w?1:y.strides[1],M=e.data.get(r.dataId).values,z=e.data.get(o.dataId).values,P=y.values;for(let U=0;U<d.batchSize;++U){const q=U*N,j=U*C;for(let Z=0;Z<d.outHeight;++Z){const J=j+Z*E,Q=Z*d.strideHeight-b;for(let rt=0;rt<f;++rt){const st=Q+rt*m;if(st<0||st>=d.inHeight)continue;const lt=rt*$[0],pt=q+st*S;for(let mt=0;mt<d.outWidth;++mt){const yt=J+mt*_,$t=mt*d.strideWidth-x;for(let It=0;It<p;++It){const Mt=$t+It*g;if(Mt<0||Mt>=d.inWidth)continue;const Gt=lt+It*$[1],Kt=pt+Mt*I;let zt=Gt;for(let Bt=0;Bt<d.inChannels;++Bt){const ne=M[Kt+Bt*k];for(let jt=0;jt<d.outChannels;++jt)P[yt+jt*R]+=ne*z[zt+jt];zt+=d.outChannels}}}}}}return e.makeTensorInfo(y.shape,y.dtype,P)}const iz={kernelName:Ec,backendName:"cpu",kernelFunc:nC};function az(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s;dt([r,o],"conv2dBackpropFilter");const h=zs(l),d=Me(r.shape,u,i,1,a,c,!1,h),{strideHeight:f,strideWidth:p,filterHeight:m,filterWidth:g}=d,x=d.dataFormat==="channelsLast",b=new Oe(d.filterShape,"float32"),w=d.padInfo.left,y=d.padInfo.top,v=e.data.get(r.dataId).values,$=e.data.get(o.dataId).values,N=new Oe(r.shape,r.dtype,v),S=new Oe(o.shape,o.dtype,$);for(let I=0;I<m;++I){const k=Math.max(0,Math.ceil((y-I)/f)),C=Math.min(d.outHeight,(d.inHeight+y-I)/f);for(let E=0;E<g;++E){const _=Math.max(0,Math.ceil((w-E)/p)),R=Math.min(d.outWidth,(d.inWidth+w-E)/p);for(let M=0;M<d.inChannels;++M)for(let z=0;z<d.outChannels;++z){let P=0;for(let U=0;U<d.batchSize;++U)for(let q=k;q<C;++q){const j=I+q*f-y;for(let Z=_;Z<R;++Z){const J=E+Z*p-w;x?P+=N.get(U,j,J,M)*S.get(U,q,Z,z):P+=N.get(U,M,j,J)*S.get(U,z,q,Z)}}b.set(P,I,E,M,z)}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}const lz={kernelName:Zd,backendName:"cpu",kernelFunc:az};function cz(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s;dt([r,o],"conv2dBackpropInput");const h=xt(o.shape),d=xt(r.shape);let f=zs(c);const p=Me(i,o.shape,a,1,l,u,!1,f),m=new Oe(p.inShape,"float32"),g=m.values,x=e.data.get(r.dataId).values,b=e.data.get(o.dataId).values,[w,y,v]=h,{batchSize:$,filterHeight:N,filterWidth:S,inChannels:I,inHeight:k,inWidth:C,outChannels:E,outHeight:_,outWidth:R,strideHeight:M,strideWidth:z}=p;f=p.dataFormat;const P=N-1-p.padInfo.top,U=S-1-p.padInfo.left,q=f==="channelsLast",j=m.strides[0],Z=q?m.strides[1]:m.strides[2],J=q?m.strides[2]:1,Q=q?1:m.strides[1],rt=d[0],st=q?d[1]:d[2],lt=q?d[2]:1,pt=q?1:d[1];for(let mt=0;mt<$;++mt)for(let yt=0;yt<I;++yt)for(let $t=0;$t<k;++$t){const It=$t-P,Mt=Math.max(0,Math.ceil(It/M)),Gt=Math.min(_,(N+It)/M);for(let Kt=0;Kt<C;++Kt){const zt=Kt-U,Bt=Math.max(0,Math.ceil(zt/z)),ne=Math.min(R,(S+zt)/z);let jt=0;for(let ue=Mt;ue<Gt;++ue){const ss=ue*M-It;for(let Te=Bt;Te<ne;++Te){const Ht=Te*z-zt,qe=rt*mt+st*ue+lt*Te,bn=w*(N-1-ss)+y*(S-1-Ht)+v*yt;for(let Pn=0;Pn<E;++Pn){const zn=x[qe+pt*Pn],rs=b[bn+Pn];jt+=zn*rs}}}const Sn=j*mt+Z*$t+J*Kt+Q*yt;g[Sn]=jt}}return e.makeTensorInfo(m.shape,m.dtype,m.values)}const uz={kernelName:Rc,backendName:"cpu",kernelFunc:cz};function hz(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dilations:l}=s;dt([r,o],"conv3d");const c=lr(r.shape,o.shape,i,l,a),{filterDepth:u,filterHeight:h,filterWidth:d,dilationDepth:f,dilationHeight:p,dilationWidth:m,padInfo:g}=c,x=g.front,b=g.left,w=g.top,y=new Oe(c.outShape,r.dtype),v=e.data.get(r.dataId).values,$=e.data.get(o.dataId).values,N=y.values,S=xt(r.shape),I=xt(o.shape);for(let k=0;k<c.batchSize;++k){const C=k*S[0],E=k*y.strides[0];for(let _=0;_<c.outDepth;++_){const R=E+_*y.strides[1],M=_*c.strideDepth-x;for(let z=0;z<u;++z){const P=M+z*f;if(P<0||P>=c.inDepth)continue;const U=z*I[0],q=C+P*S[1];for(let j=0;j<c.outHeight;++j){const Z=R+j*y.strides[2],J=j*c.strideHeight-w;for(let Q=0;Q<h;++Q){const rt=J+Q*p;if(rt<0||rt>=c.inHeight)continue;const st=U+Q*I[1],lt=q+rt*S[2];for(let pt=0;pt<c.outWidth;++pt){const mt=Z+pt*c.outChannels,yt=pt*c.strideWidth-b;for(let $t=0;$t<d;++$t){const It=yt+$t*m;if(It<0||It>=c.inWidth)continue;const Mt=st+$t*I[2],Gt=lt+It*c.inChannels;let Kt=Mt;for(let zt=0;zt<c.inChannels;++zt){const Bt=v[Gt+zt];for(let ne=0;ne<c.outChannels;++ne)N[mt+ne]+=Bt*$[Kt+ne];Kt+=c.outChannels}}}}}}}}return e.makeTensorInfo(y.shape,y.dtype,y.values)}const dz={kernelName:Ac,backendName:"cpu",kernelFunc:hz};function fz(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,pad:a,filterShape:l}=s;dt([r,o],"conv3dBackpropFilterV2");const c=xt(r.shape),u=xt(o.shape),h=lr(r.shape,l,i,1,a),d=h.strideDepth,f=h.strideHeight,p=h.strideWidth,m=h.filterDepth,g=h.filterHeight,x=h.filterWidth,b=new Oe(h.filterShape,"float32"),w=b.values,[y,v,$,N]=b.strides,S=e.data.get(o.dataId).values,[I,k,C,E]=u,_=e.data.get(r.dataId).values,[R,M,z,P]=c,U=h.padInfo.front,q=h.padInfo.left,j=h.padInfo.top;for(let Z=0;Z<m;++Z){const J=Math.max(0,Math.ceil((U-Z)/d)),Q=Math.min(h.outDepth,(h.inDepth+U-Z)/d),rt=Z*y;for(let st=0;st<g;++st){const lt=Math.max(0,Math.ceil((j-st)/f)),pt=Math.min(h.outHeight,(h.inHeight+j-st)/f),mt=st*v+rt;for(let yt=0;yt<x;++yt){const $t=Math.max(0,Math.ceil((q-yt)/p)),It=Math.min(h.outWidth,(h.inWidth+q-yt)/p),Mt=yt*$+mt;for(let Gt=0;Gt<h.inChannels;++Gt){const Kt=Gt*N+Mt;for(let zt=0;zt<h.outChannels;++zt){let Bt=0;for(let ne=0;ne<h.batchSize;++ne){const jt=ne*R,Sn=ne*I;for(let ue=J;ue<Q;++ue){const Te=(Z+ue*d-U)*M+jt,Ht=ue*k+Sn;for(let qe=lt;qe<pt;++qe){const Pn=(st+qe*f-j)*z+Te,zn=qe*C+Ht;for(let rs=$t;rs<It;++rs){const Bn=(yt+rs*p-q)*P+Pn,Is=rs*E+zn;Bt+=_[Bn+Gt]*S[Is+zt]}}}}w[Kt+zt]=Bt}}}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}const pz={kernelName:Jd,backendName:"cpu",kernelFunc:fz};function mz(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{pad:i,strides:a,inputShape:l}=s;dt([r],"conv3dBackpropInputV2");const c=xt(r.shape),u=xt(o.shape),h=lr(l,o.shape,a,1,i),d=new Oe(h.inShape,"float32"),f=d.values,[p,m,g,x]=d.strides,b=e.data.get(r.dataId).values,[w,y,v,$]=c,N=e.data.get(o.dataId).values,[S,I,k,C]=u,{batchSize:E,filterDepth:_,filterHeight:R,filterWidth:M,inChannels:z,inDepth:P,inHeight:U,inWidth:q,outChannels:j,outDepth:Z,outHeight:J,outWidth:Q,strideDepth:rt,strideHeight:st,strideWidth:lt}=h,pt=_-1-h.padInfo.front,mt=R-1-h.padInfo.top,yt=M-1-h.padInfo.left;for(let $t=0;$t<E;++$t)for(let It=0;It<z;++It)for(let Mt=0;Mt<P;++Mt){const Gt=Mt-pt,Kt=Math.max(0,Math.ceil(Gt/rt)),zt=Math.min(Z,(_+Gt)/rt);for(let Bt=0;Bt<U;++Bt){const ne=Bt-mt,jt=Math.max(0,Math.ceil(ne/st)),Sn=Math.min(J,(R+ne)/st);for(let ue=0;ue<q;++ue){const ss=ue-yt,Te=Math.max(0,Math.ceil(ss/lt)),Ht=Math.min(Q,(M+ss)/lt);let qe=0;for(let bn=Kt;bn<zt;++bn){const Pn=bn*rt-Gt;for(let zn=jt;zn<Sn;++zn){const rs=zn*st-ne;for(let ks=Te;ks<Ht;++ks){const Bn=ks*lt-ss,Is=w*$t+y*bn+v*zn+$*ks,ja=S*(_-1-Pn)+I*(R-1-rs)+k*(M-1-Bn)+C*It;for(let Ss=0;Ss<j;++Ss){const ju=b[Is+Ss],Yu=N[ja+Ss];qe+=ju*Yu}}}}f[p*$t+m*Mt+g*Bt+x*ue+It]=qe}}}return e.makeTensorInfo(d.shape,d.dtype,d.values)}const gz={kernelName:Qd,backendName:"cpu",kernelFunc:mz};const xz=Ut(Wi,n=>Math.cos(n)),bz={kernelName:Wi,backendName:"cpu",kernelFunc:xz};const yz=Ut(Ui,n=>Math.cosh(n)),wz={kernelName:Ui,backendName:"cpu",kernelFunc:yz};function vz(n){const{inputs:t,backend:e,attrs:s}=n,{image:r,boxes:o,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:c}=s,[u,h,d,f]=r.shape,p=o.shape[0],[m,g]=a,x=Nt([p,m,g,f],"float32"),b=e.data.get(o.dataId).values,w=e.data.get(i.dataId).values,y=e.data.get(r.dataId).values,v=xt(r.shape),$=xt(x.shape);for(let N=0;N<p;N++){const S=N*4,I=b[S],k=b[S+1],C=b[S+2],E=b[S+3],_=w[N];if(_>=u)continue;const R=m>1?(C-I)*(h-1)/(m-1):0,M=g>1?(E-k)*(d-1)/(g-1):0;for(let z=0;z<m;z++){const P=m>1?I*(h-1)+z*R:.5*(I+C)*(h-1);if(P<0||P>h-1){for(let U=0;U<g;U++)for(let q=0;q<f;q++){const j=q+U*$[2]+z*$[1]+N*$[0];x.values[j]=c}continue}if(l==="bilinear"){const U=Math.floor(P),q=Math.ceil(P),j=P-U;for(let Z=0;Z<g;Z++){const J=g>1?k*(d-1)+Z*M:.5*(k+E)*(d-1);if(J<0||J>d-1){for(let lt=0;lt<f;lt++){const pt=lt+Z*$[2]+z*$[1]+N*$[0];x.values[pt]=c}continue}const Q=Math.floor(J),rt=Math.ceil(J),st=J-Q;for(let lt=0;lt<f;lt++){let pt=lt+Q*v[2]+U*v[1]+_*v[0];const mt=y[pt];pt=lt+rt*v[2]+U*v[1]+_*v[0];const yt=y[pt];pt=lt+Q*v[2]+q*v[1]+_*v[0];const $t=y[pt];pt=lt+rt*v[2]+q*v[1]+_*v[0];const It=y[pt],Mt=mt+(yt-mt)*st,Gt=$t+(It-$t)*st;pt=lt+Z*$[2]+z*$[1]+N*$[0],x.values[pt]=Mt+(Gt-Mt)*j}}}else for(let U=0;U<g;++U){const q=g>1?k*(d-1)+U*M:.5*(k+E)*(d-1);if(q<0||q>d-1){for(let J=0;J<f;J++){const Q=J+U*$[2]+z*$[1]+N*$[0];x.values[Q]=c}continue}const j=Math.round(q),Z=Math.round(P);for(let J=0;J<f;J++){const Q=J+j*v[2]+Z*v[1]+_*v[0],rt=J+U*$[2]+z*$[1]+N*$[0];x.values[rt]=y[Q]}}}}return e.makeTensorInfo(x.shape,x.dtype,x.values)}const Cz={kernelName:ef,backendName:"cpu",kernelFunc:vz};function $z(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,exclusive:i,reverse:a}=s;dt(r,"cumprod");const l=ie([o],r.shape.length);let c=r;l!=null&&(c=cn({inputs:{x:r},backend:e,attrs:{perm:l}}));const u=pe(1,r.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=mn(c.dtype,"int32"),d=Bd(Y(c.shape),h),f=e.data.get(c.dataId).values,p=c.shape[c.shape.length-1],m=a?(x,b)=>x+p-b-1:(x,b)=>x+b;for(let x=0;x<f.length;x+=p)for(let b=0;b<p;b++){const w=m(x,b);if(b===0)d[w]=i?1:f[w];else{const y=m(x,b-1);d[w]=i?f[y]*d[y]:f[w]*d[y]}}const g=e.makeTensorInfo(c.shape,h,d);if(l!=null){const x=cr(l),b=cn({inputs:{x:g},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(c),b}return g}const kz={kernelName:tf,backendName:"cpu",kernelFunc:$z};function Iz(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,exclusive:i,reverse:a}=s;dt(r,"cumsum");const l=ie([o],r.shape.length);let c=r;l!=null&&(c=cn({inputs:{x:r},backend:e,attrs:{perm:l}}));const u=pe(1,r.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=mn(c.dtype,"int32"),d=Ve(Y(c.shape),h),f=e.data.get(c.dataId).values,p=c.shape[c.shape.length-1],m=a?(x,b)=>x+p-b-1:(x,b)=>x+b;for(let x=0;x<f.length;x+=p)for(let b=0;b<p;b++){const w=m(x,b);if(b===0)d[w]=i?0:f[w];else{const y=m(x,b-1);d[w]=i?f[y]+d[y]:f[w]+d[y]}}const g=e.makeTensorInfo(c.shape,h,d);if(l!=null){const x=cr(l),b=cn({inputs:{x:g},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(c),b}return g}const Sz={kernelName:Dc,backendName:"cpu",kernelFunc:Iz};function Nz(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,weights:o}=t,{size:i,binaryOutput:a}=s;if(r.shape.length===1){const l=e.data.get(r.dataId).values,c=e.data.get(o.dataId).values,u=tm(l,c,o.dtype,o.shape,i);return e.makeTensorInfo([i],o.dtype,u)}else if(r.shape.length===2){const l=e.bufferSync(r),c=e.bufferSync(o),u=sv(l,c,i,a);return e.makeTensorInfo(u.shape,o.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${r.shape.length}.`)}const Tz={kernelName:nf,backendName:"cpu",kernelFunc:Nz};function Ez(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockSize:o,dataFormat:i}=s;T(i==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${i}`);const a=r.shape[0],l=r.shape[1],c=r.shape[2],u=r.shape[3],h=l*o,d=c*o,f=u/(o*o),p=e.data.get(r.dataId).values,m=new Float32Array(a*h*d*f);let g=0;for(let x=0;x<a;++x)for(let b=0;b<h;++b){const w=Math.floor(b/o),y=b%o;for(let v=0;v<d;++v){const $=Math.floor(v/o),N=v%o,S=(y*o+N)*f;for(let I=0;I<f;++I){const C=I+S+u*($+c*(w+l*x));m[g++]=p[C]}}}return e.makeTensorInfo([a,h,d,f],r.dtype,m)}const Rz={kernelName:sf,backendName:"cpu",kernelFunc:Ez};function sC(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;dt([r,o],"depthwiseConv2DNative");const u=xt(r.shape),h=xt(o.shape);let d=l;d==null&&(d=[1,1]),T(Ue(i,d),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${d}'`);const f=Me(r.shape,o.shape,i,d,a,c,!0),{filterHeight:p,filterWidth:m,dilationHeight:g,dilationWidth:x,padInfo:b}=f,w=b.left,y=b.top,v=f.outChannels/f.inChannels,$=new Oe(f.outShape,r.dtype),N=e.data.get(r.dataId).values,S=e.data.get(o.dataId).values,I=$.values;for(let k=0;k<f.batchSize;++k){const C=k*u[0],E=k*$.strides[0];for(let _=0;_<f.outHeight;++_){const R=E+_*$.strides[1],M=_*f.strideHeight-y;for(let z=0;z<p;++z){const P=M+z*g;if(P<0||P>=f.inHeight)continue;const U=z*h[0],q=C+P*u[1];for(let j=0;j<f.outWidth;++j){const Z=R+j*$.strides[2],J=j*f.strideWidth-w;for(let Q=0;Q<m;++Q){const rt=J+Q*x;if(rt<0||rt>=f.inWidth)continue;const st=U+Q*h[1],lt=q+rt*f.inChannels;let pt=Z,mt=st;for(let yt=0;yt<f.inChannels;++yt){const $t=N[lt+yt];for(let It=0;It<v;++It)I[pt+It]+=$t*S[mt+It];pt+=v,mt+=v}}}}}}return e.makeTensorInfo($.shape,$.dtype,$.values)}const Az={kernelName:_c,backendName:"cpu",kernelFunc:sC};function Dz(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s;dt([r,o],"depthwiseConv2dNativeBackpropFilter");const h=Me(r.shape,u,i,a,l,c,!0),{strideHeight:d,strideWidth:f,filterHeight:p,filterWidth:m}=h,g=new Oe(h.filterShape,"float32"),x=h.padInfo.left,b=h.padInfo.top,w=h.outChannels/h.inChannels,y=e.data.get(r.dataId).values,v=new Oe(r.shape,r.dtype,y),$=e.data.get(o.dataId).values,N=new Oe(o.shape,o.dtype,$);for(let S=0;S<p;++S){const I=Math.max(0,Math.ceil((b-S)/d)),k=Math.min(h.outHeight,(h.inHeight+b-S)/d);for(let C=0;C<m;++C){const E=Math.max(0,Math.ceil((x-C)/f)),_=Math.min(h.outWidth,(h.inWidth+x-C)/f);for(let R=0;R<h.outChannels;++R){const M=Math.trunc(R/w),z=R%w;let P=0;for(let U=0;U<h.batchSize;++U)for(let q=I;q<k;++q){const j=S+q*d-b;for(let Z=E;Z<_;++Z){const J=C+Z*f-x;P+=v.get(U,j,J,M)*N.get(U,q,Z,R)}}g.set(P,S,C,M,z)}}}return e.makeTensorInfo(g.shape,g.dtype,g.values)}const _z={kernelName:rf,backendName:"cpu",kernelFunc:Dz};function Fz(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s;dt([r,o],"depthwiseConv2DNativeBackpropInput");const h=xt(r.shape),d=xt(o.shape),f=Me(u,o.shape,i,a,l,c,!0),p=new Oe(f.inShape,"float32"),m=p.values,[g,x,b]=p.strides,w=e.data.get(r.dataId).values,[y,v,$]=h,N=e.data.get(o.dataId).values,[S,I,k]=d,{batchSize:C,filterHeight:E,filterWidth:_,inChannels:R,inHeight:M,inWidth:z,outChannels:P,outHeight:U,outWidth:q,strideHeight:j,strideWidth:Z}=f,J=E-1-f.padInfo.top,Q=_-1-f.padInfo.left,rt=P/R;for(let st=0;st<C;++st)for(let lt=0;lt<R;++lt)for(let pt=0;pt<M;++pt){const mt=pt-J,yt=Math.max(0,Math.ceil(mt/j)),$t=Math.min(U,(E+mt)/j);for(let It=0;It<z;++It){const Mt=It-Q,Gt=Math.max(0,Math.ceil(Mt/Z)),Kt=Math.min(q,(_+Mt)/Z);let zt=0;for(let Bt=yt;Bt<$t;++Bt){const ne=Bt*j-mt;for(let jt=Gt;jt<Kt;++jt){const Sn=jt*Z-Mt,ue=y*st+v*Bt+$*jt,ss=S*(E-1-ne)+I*(_-1-Sn)+k*lt;for(let Te=0;Te<rt;++Te){const Ht=lt*rt+Te,qe=w[ue+Ht],bn=N[ss+Te];zt+=qe*bn}}}m[g*st+x*pt+b*It+lt]=zt}}return e.makeTensorInfo(p.shape,p.dtype,p.values)}const Oz={kernelName:of,backendName:"cpu",kernelFunc:Fz};function Mz(n){const{inputs:t,backend:e}=n,{x:s}=t,r=Y(s.shape),o=e.data.get(s.dataId).values,i=Nt([r,r],s.dtype),a=i.values;for(let c=0;c<o.length;c++)a[c*r+c]=o[c];const l=[...s.shape,...s.shape];return e.makeTensorInfo(l,i.dtype,i.values)}const Lz={kernelName:af,backendName:"cpu",kernelFunc:Mz};const Pz={kernelName:Fc,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:r}=n,{strides:o,pad:i,dilations:a}=e,l=t,c=l.data.get(s.dataId).values,u=s.shape.length,h=l.data.get(r.dataId).values,d=r.shape.length,{batchSize:f,inHeight:p,inWidth:m,inChannels:g,outHeight:x,outWidth:b,padInfo:w,strideHeight:y,strideWidth:v,filterHeight:$,filterWidth:N,dilationHeight:S,dilationWidth:I,outShape:k}=Na(s.shape,r.shape,o,i,"NHWC",a),C=Y(k),E=k.length,_=he(s.dtype,C);for(let M=0;M<f;++M)for(let z=0;z<x;++z){const P=z*y-w.top;for(let U=0;U<b;++U){const q=U*v-w.left;for(let j=0;j<g;++j){let Z=Number.MIN_SAFE_INTEGER;for(let Q=0;Q<$;++Q){const rt=P+Q*S;if(rt>=0&&rt<p)for(let st=0;st<N;++st){const lt=q+st*I;if(lt>=0&&lt<m){const pt=ds([M,rt,lt,j],u,xt(s.shape)),mt=ds([Q,st,j],d,xt(r.shape)),yt=c[pt]+h[mt];yt>Z&&(Z=yt)}}}const J=ds([M,z,U,j],E,xt(k));_[J]=Z}}}return{dataId:l.write(Ur(_,s.dtype),k,s.dtype),shape:k,dtype:s.dtype}}};const zz={kernelName:Wh,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:r,dy:o}=n,{strides:i,pad:a,dilations:l}=e,c=t,u=jn(s.shape,c.data.get(s.dataId).values),h=jn(r.shape,c.data.get(r.dataId).values),{batchSize:d,inHeight:f,inWidth:p,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:w,strideWidth:y,filterHeight:v,filterWidth:$,dilationHeight:N,dilationWidth:S,outShape:I}=Na(s.shape,r.shape,i,a,"NHWC",l);T(o.rank===I.length,()=>`Error in ${Wh}, dy must have the same rank as output ${I.length}, but got ${o.rank}`);const k=jn(I,c.data.get(o.dataId).values),C=A0(r.shape,r.dtype);for(let _=0;_<d;++_)for(let R=0;R<g;++R){const M=R*w-b.top;for(let z=0;z<x;++z){const P=z*y-b.left;for(let U=0;U<m;++U){let q=Number.MIN_SAFE_INTEGER,j=0,Z=0;for(let J=0;J<v;++J){const Q=M+J*N;if(Q>=0&&Q<f)for(let rt=0;rt<$;++rt){const st=P+rt*S;if(st>=0&&st<p){const lt=u[_][Q][st][U]+h[J][rt][U];lt>q&&(q=lt,j=J,Z=rt)}}}C[j][Z][U]+=k[_][R][z][U]}}}return{dataId:c.write(Ur(C,s.dtype),r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};const Bz={kernelName:Vh,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:r,dy:o}=n,{strides:i,pad:a,dilations:l}=e,c=t,u=jn(s.shape,c.data.get(s.dataId).values),h=jn(r.shape,c.data.get(r.dataId).values),{batchSize:d,inHeight:f,inWidth:p,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:w,strideWidth:y,filterHeight:v,filterWidth:$,dilationHeight:N,dilationWidth:S,outShape:I}=Na(s.shape,r.shape,i,a,"NHWC",l);T(o.rank===I.length,()=>`Error in ${Vh}, dy must have the same rank as output ${I.length}, but got ${o.rank}`);const k=jn(I,c.data.get(o.dataId).values),C=A0(s.shape,s.dtype);for(let _=0;_<d;++_)for(let R=0;R<g;++R){const M=R*w-b.top;for(let z=0;z<x;++z){const P=z*y-b.left;for(let U=0;U<m;++U){let q=Number.MIN_SAFE_INTEGER,j=M<0?0:M,Z=P<0?0:P;for(let J=0;J<v;++J){const Q=M+J*N;if(Q>=0&&Q<f)for(let rt=0;rt<$;++rt){const st=P+rt*S;if(st>=0&&st<p){const lt=u[_][Q][st][U]+h[J][rt][U];lt>q&&(q=lt,j=Q,Z=st)}}}C[_][j][Z][U]+=k[_][R][z][U]}}}return{dataId:c.write(Ur(C,s.dtype),s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function Vz(n){const{inputs:t,backend:e,attrs:s}=n,{image:r}=t,{canvas:o,options:i}=s,{contextOptions:a,imageOptions:l}=i||{},c=l?.alpha||1,u=a?.contextType||"2d";if(u!=="2d")throw new Error(`Context type ${a.contextType} is not supported by the CPU backend.`);const h=o.getContext(u,a?.contextAttributes||{});if(h==null)throw new Error(`Could not get the context with ${u} type.`);const[d,f]=r.shape.slice(0,2),p=r.shape.length===2?1:r.shape[2],m=e.data.get(r.dataId).values,g=r.dtype==="float32"?255:1,x=new Uint8ClampedArray(f*d*4);for(let w=0;w<d*f;++w){const y=[0,0,0,255*c];for(let $=0;$<p;$++){const N=m[w*p+$];if(r.dtype==="float32"){if(N<0||N>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${N}.`)}else if(r.dtype==="int32"&&(N<0||N>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${N}.`);p===1?(y[0]=N*g,y[1]=N*g,y[2]=N*g):y[$]=N*g}const v=w*4;x[v+0]=Math.round(y[0]),x[v+1]=Math.round(y[1]),x[v+2]=Math.round(y[2]),x[v+3]=Math.round(y[3])}o.width=f,o.height=d;const b=new ImageData(x,f,d);return h.putImageData(b,0,0),r}const Wz={kernelName:vN,backendName:"cpu",kernelFunc:Vz};function Ua(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;dt(r,"sum");let a;r.dtype==="bool"?a=or({inputs:{x:r},backend:e,attrs:{dtype:"int32"}}):a=vs({inputs:{x:r},backend:e});const l=a.shape.length,c=Tt(o,a.shape),u=ie(c,l);let h=c,d=a;u!=null&&(d=cn({inputs:{x:a},backend:e,attrs:{perm:u}}),h=pe(h.length,l)),Le("sum",h,d.shape.length);const[f,p]=De(d.shape,h),m=mn(d.dtype,"int32");let g=ac(e,f,m);const x=Y(p),b=e.data.get(g.dataId).values,w=e.data.get(d.dataId).values;for(let y=0;y<b.length;++y){const v=y*x;let $=0;for(let N=0;N<x;++N)$+=w[v+N];b[y]=$}if(i){const y=ye(g.shape,c),v=g;g=ee({inputs:{x:g},backend:e,attrs:{shape:y}}),e.disposeIntermediateTensorInfo(v)}return e.disposeIntermediateTensorInfo(a),u!=null&&e.disposeIntermediateTensorInfo(d),g}const Uz={kernelName:fu,backendName:"cpu",kernelFunc:Ua};function Gz(n){const{inputs:t,backend:e,attrs:s}=n,{equation:r}=s,o=t,{allDims:i,summedDims:a,idDims:l}=Ip(r,o.length);Np(i.length,l,o);const{path:c,steps:u}=Tp(a,l),h=u.length;let d=null,f=i.length;const p=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=Sp(f,l[g]);let w;Ep(x)?w=o[g]:(w=cn({inputs:{x:o[g]},backend:e,attrs:{perm:x}}),p.push(w));const y=w.shape.slice();for(let v=0;v<b.length;++v)y.splice(b[v],0,1);Pt(w.shape,y)||(w=ee({inputs:{x:w},backend:e,attrs:{shape:y}}),p.push(w)),d===null?d=w:(d=Uu({inputs:{a:w,b:d},backend:e}),p.push(d))}m<h-1&&(c[m]>=0&&(d=Ua({inputs:{x:d},backend:e,attrs:{axis:c[m]-(i.length-f),keepDims:!1}}),p.push(d)),f--)}for(const m of p)m!==d&&e.disposeIntermediateTensorInfo(m);return d}const Hz={kernelName:lf,backendName:"cpu",kernelFunc:Gz};function qz(n){const{inputs:t,backend:e}=n,{dy:s,y:r}=t;dt([s,r],"eluGrad");const o=new Float32Array(Y(r.shape)),i=e.data.get(r.dataId).values,a=e.data.get(s.dataId).values;for(let l=0;l<i.length;++l){const c=i[l];c>=0?o[l]=a[l]:o[l]=a[l]*(c+1)}return e.makeTensorInfo(r.shape,"float32",o)}const Xz={kernelName:cf,backendName:"cpu",kernelFunc:qz};const Kz=bp,jz=yp,Yz=wp,Zz=vp,Jz=Cp,Qz=$p,tB=Ut(qi,n=>{const t=Math.sign(n),e=Math.abs(n),s=1/(1+Kz*e);return t*(1-((((Qz*s+Jz)*s+Zz)*s+Yz)*s+jz)*s*Math.exp(-e*e))}),eB={kernelName:qi,backendName:"cpu",kernelFunc:tB};function uc(n){const{inputs:t,backend:e,attrs:s}=n,{input:r}=t,{dim:o}=s,i=r.shape.length,a=r.shape.slice();let l=o;return o<0&&(T(-(i+1)<=o,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+o+1),a.splice(l,0,1),ee({inputs:{x:r},backend:e,attrs:{shape:a}})}const nB={kernelName:Mc,backendName:"cpu",kernelFunc:uc};const sB=ge((n,t)=>n/t),im=Ne(Gi,sB),pd={kernelName:Gi,backendName:"cpu",kernelFunc:im};function rC(n,t,e){const s=n.shape,r=s[0],o=s[1],i=e.data.get(n.dataId),a=i.complexTensorInfos.real,l=i.complexTensorInfos.imag,c=[r,o],u=Y(c),h=Be("float32",u),d=Be("float32",u);for(let g=0;g<r;g++){const x=Vr({inputs:{x:a},backend:e,attrs:{begin:[g,0],size:[1,o]}}),b=Vr({inputs:{x:l},backend:e,attrs:{begin:[g,0],size:[1,o]}}),w=dn({inputs:{real:x,imag:b},backend:e}),{real:y,imag:v}=rB(w,t,e),$=Os(y,v);for(let N=0;N<o;N++){const S=kp($,N);h[g*o+N]=S.real,d[g*o+N]=S.imag}e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),e.disposeIntermediateTensorInfo(w)}const f=e.makeTensorInfo(c,"float32",h),p=e.makeTensorInfo(c,"float32",d),m=dn({inputs:{real:f,imag:p},backend:e});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),m}function rB(n,t,e){const s=Y(n.shape),r=e.data.get(n.dataId),o=e.data.get(r.complexTensorInfos.real.dataId).values,i=e.data.get(r.complexTensorInfos.imag.dataId).values;if(oB(s)){const a=md(o,i,s,t,e),l=[n.shape[0],n.shape[1]];if(t){const c=e.makeTensorInfo(l,"float32",a.real),u=e.makeTensorInfo(l,"float32",a.imag),h=e.makeTensorInfo([],"float32",ar(s,"float32")),d=vs({inputs:{x:h},backend:e}),f=pd.kernelFunc({inputs:{a:c,b:h},backend:e}),p=pd.kernelFunc({inputs:{a:u,b:d},backend:e}),m=e.data.get(f.dataId).values,g=e.data.get(p.dataId).values;return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),{real:m,imag:g}}return a}else{const a=Os(o,i),l=iB(a,s,t);return by(l)}}function oB(n){return(n&n-1)===0}function md(n,t,e,s,r){if(e===1)return{real:n,imag:t};const o=Os(n,t),i=e/2,a=yy(o),l=a.real,c=a.imag,u=[l.length],h=r.makeTensorInfo(u,"float32",l),d=r.makeTensorInfo(u,"float32",c),f=dn({inputs:{real:h,imag:d},backend:r}),p=wy(o),m=p.real,g=p.imag,x=[m.length],b=r.makeTensorInfo(x,"float32",m),w=r.makeTensorInfo(x,"float32",g),y=dn({inputs:{real:b,imag:w},backend:r}),v=md(l,c,i,s,r),$=v.real,N=v.imag,S=[$.length],I=r.makeTensorInfo(S,"float32",$),k=r.makeTensorInfo(S,"float32",N),C=dn({inputs:{real:I,imag:k},backend:r}),E=md(m,g,i,s,r),_=E.real,R=E.imag,M=[_.length],z=r.makeTensorInfo(M,"float32",_),P=r.makeTensorInfo(M,"float32",R),U=dn({inputs:{real:z,imag:P},backend:r}),q=Cy(e,s),j=[q.real.length],Z=r.makeTensorInfo(j,"float32",q.real),J=r.makeTensorInfo(j,"float32",q.imag),Q=dn({inputs:{real:Z,imag:J},backend:r}),rt=Uu({inputs:{a:Q,b:U},backend:r}),st=ko({inputs:{a:C,b:rt},backend:r}),lt=rm({inputs:{a:C,b:rt},backend:r}),pt=Br({inputs:{input:st},backend:r}),mt=Br({inputs:{input:lt},backend:r}),yt=Io({inputs:{input:st},backend:r}),$t=Io({inputs:{input:lt},backend:r}),It=So({inputs:[pt,mt],backend:r,attrs:{axis:0}}),Mt=So({inputs:[yt,$t],backend:r,attrs:{axis:0}}),Gt=r.data.get(It.dataId).values,Kt=r.data.get(Mt.dataId).values;return r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(d),r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(b),r.disposeIntermediateTensorInfo(w),r.disposeIntermediateTensorInfo(y),r.disposeIntermediateTensorInfo(I),r.disposeIntermediateTensorInfo(k),r.disposeIntermediateTensorInfo(C),r.disposeIntermediateTensorInfo(z),r.disposeIntermediateTensorInfo(P),r.disposeIntermediateTensorInfo(U),r.disposeIntermediateTensorInfo(Z),r.disposeIntermediateTensorInfo(J),r.disposeIntermediateTensorInfo(Q),r.disposeIntermediateTensorInfo(rt),r.disposeIntermediateTensorInfo(st),r.disposeIntermediateTensorInfo(lt),r.disposeIntermediateTensorInfo(pt),r.disposeIntermediateTensorInfo(yt),r.disposeIntermediateTensorInfo(mt),r.disposeIntermediateTensorInfo($t),r.disposeIntermediateTensorInfo(It),r.disposeIntermediateTensorInfo(Mt),{real:Gt,imag:Kt}}function iB(n,t,e){const s=new Float32Array(t*2);for(let r=0;r<t;r++){let o=0,i=0;for(let a=0;a<t;a++){const l=$y(r*a,t,e),c=kp(n,a);o+=c.real*l.real-c.imag*l.imag,i+=c.real*l.imag+c.imag*l.real}e&&(o/=t,i/=t),vy(s,o,i,r)}return s}function aB(n){const{inputs:t,backend:e}=n,{input:s}=t,r=Y(s.shape),o=s.shape[s.shape.length-1],i=r/o,a=ee({inputs:{x:s},backend:e,attrs:{shape:[i,o]}}),l=rC(a,!1,e),c=ee({inputs:{x:l},backend:e,attrs:{shape:s.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}const lB={kernelName:uf,backendName:"cpu",kernelFunc:aB};function am(n){const{backend:t,attrs:e}=n,{shape:s,value:r,dtype:o}=e,i=o||Eo(r),a=he(i,Y(s));return uB(a,r,i),t.makeTensorInfo(s,i,a)}const cB={kernelName:hf,backendName:"cpu",kernelFunc:am};function uB(n,t,e){n.fill(t)}const hB={kernelName:df,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,r=e,o=Be(s.dtype,Y(s.shape)),[i,a,l,c]=s.shape,u=r.data.get(s.dataId).values;for(let d=0;d<i;d++){const f=d*l*a*c;for(let p=0;p<a;p++){const m=p*(l*c);for(let g=0;g<l;g++){const x=g*c;for(let b=0;b<c;b++){const w=Math.round(l-g-1),y=f+m+x+b;let v=u[y];if(w>=0&&w<l){const $=w*c,N=f+m+$+b;v=u[N]}o[y]=v}}}}return{dataId:r.write(o,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function dB(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:f,leakyreluAlpha:p}=s;let m=nC({inputs:{x:r,filter:o},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;if(u==="NCHW"&&i.shape.length===1&&i.shape[0]!==1){const x=ee({inputs:{x:i},backend:e,attrs:{shape:[i.shape[0],1,1]}});m=ko({inputs:{a:m,b:x},backend:e}),e.disposeIntermediateTensorInfo(x)}else m=ko({inputs:{a:m,b:i},backend:e});e.disposeIntermediateTensorInfo(g)}if(f){const g=m;if(u==="NCHW"&&f==="prelu"&&a.shape.length===1&&a.shape[0]!==1){const x=ee({inputs:{x:a},backend:e,attrs:{shape:[a.shape[0],1,1]}});m=cc(e,m,f,x,p),e.disposeIntermediateTensorInfo(x)}else m=cc(e,m,f,a,p);e.disposeIntermediateTensorInfo(g)}return m}const fB={kernelName:Gl,backendName:"cpu",kernelFunc:dB};function pB(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:f,leakyreluAlpha:p}=s;let m=sC({inputs:{x:r,filter:o},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;m=ko({inputs:{a:m,b:i},backend:e}),e.disposeIntermediateTensorInfo(g)}if(f){const g=m;m=cc(e,m,f,a,p),e.disposeIntermediateTensorInfo(g)}return m}const mB={kernelName:Q0,backendName:"cpu",kernelFunc:pB};function gB(n){const{inputs:t,backend:e}=n,{params:s,indices:r}=t,o=Y(s.shape),i=r.shape,a=i[i.length-1],[l,c,u,h]=hp(s,r);if(c===0)return e.makeTensorInfo(l,s.dtype,[]);const d=e.data.get(r.dataId).values,f=e.bufferSync(s),p=pv(d,f,s.dtype,c,a,u,h,s.shape,o);return e.makeTensorInfo(l,s.dtype,p.values)}const xB={kernelName:O0,backendName:"cpu",kernelFunc:gB};function bB(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,indices:o}=t,{axis:i,batchDims:a}=s;dt([r,o],"gatherV2");const l=Tt(i,r.shape)[0],c=e.data.get(o.dataId).values,u=r.shape[l];for(let y=0;y<c.length;++y){const v=c[y];T(v<=u-1&&v>=0,()=>`GatherV2: the index value ${v} is not in [0, ${u-1}]`)}let h=a;a==null&&(h=0);const d=Y(o.shape),f=Oy(r,o,l,h),p=ee({inputs:{x:r},backend:e,attrs:{shape:[f.batchSize,f.outerSize,f.dimSize,f.sliceSize]}}),m=ee({inputs:{x:o},backend:e,attrs:{shape:[f.batchSize,d/f.batchSize]}}),g=[f.batchSize,f.outerSize,d/f.batchSize,f.sliceSize],x=e.bufferSync(m),b=e.bufferSync(p),w=mv(b,x,g);return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),e.makeTensorInfo(f.outputShape,w.dtype,w.values)}const yB={kernelName:Pc,backendName:"cpu",kernelFunc:bB};function wB(n){const{inputs:t,backend:e}=n,{input:s}=t,r=Y(s.shape),o=s.shape[s.shape.length-1],i=r/o,a=ee({inputs:{x:s},backend:e,attrs:{shape:[i,o]}}),l=rC(a,!0,e),c=ee({inputs:{x:l},backend:e,attrs:{shape:s.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}const vB={kernelName:ff,backendName:"cpu",kernelFunc:wB};const CB=Ut(Qi,n=>Number.isFinite(n)?1:0,"bool"),$B={kernelName:Qi,backendName:"cpu",kernelFunc:CB};const kB=Ut(ta,n=>Math.abs(n)===1/0?1:0,"bool"),IB={kernelName:ta,backendName:"cpu",kernelFunc:kB};const SB=Ut(ea,n=>Number.isNaN(n)?1:0,"bool"),NB={kernelName:ea,backendName:"cpu",kernelFunc:SB};function TB(n){const{backend:t,attrs:e}=n,{start:s,stop:r,num:o}=e,i=wv(s,r,o);return t.makeTensorInfo([i.length],"float32",i)}const EB={kernelName:M0,backendName:"cpu",kernelFunc:TB};const RB=Ut(sa,n=>Math.log1p(n)),AB={kernelName:sa,backendName:"cpu",kernelFunc:RB};const DB=ge((n,t)=>n&&t),_B=Ne(Uc,DB,null,"bool"),FB={kernelName:Uc,backendName:"cpu",kernelFunc:_B};const OB=Ut(Gc,n=>n?0:1,"bool"),MB={kernelName:Gc,backendName:"cpu",kernelFunc:OB};const LB=ge((n,t)=>n||t),PB=Ne(Hc,LB,null,"bool"),zB={kernelName:Hc,backendName:"cpu",kernelFunc:PB};function BB(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{depthRadius:o,bias:i,alpha:a,beta:l}=s;dt(r,"LRN");const c=r.shape[3],u=c-1,h=e.data.get(r.dataId).values,d=Y(r.shape),f=new Float32Array(d);function p(m){const g=m%c;let x=m-g+Math.max(0,g-o);const b=m-g+Math.min(g+o,u);let w=0;for(;x<=b;x++){const y=h[x];w+=y*y}return w}for(let m=0;m<d;m++){const g=p(m),x=h[m]*Math.pow(i+a*g,-l);f[m]=x}return e.makeTensorInfo(r.shape,r.dtype,f)}const VB={kernelName:qc,backendName:"cpu",kernelFunc:BB};function WB(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,y:o,dy:i}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=s;dt(i,"LRNGrad");const h=Y(i.shape),d=i.shape[3],f=e.data.get(i.dataId).values,p=e.data.get(r.dataId).values,m=e.data.get(o.dataId).values,g=new Float32Array(h),x=h;for(let b=0;b<x;b++){const w=b%d,y=b-w+Math.max(0,w-a),v=b-w+Math.min(d,w+a+1);let $=0;for(let N=y;N<v;N++)$+=Math.pow(p[N],2);$=c*$+l;for(let N=y;N<v;N++){let S=-2*c*u*p[N]*m[b]/$;b===N&&(S+=Math.pow($,-u)),S*=f[b],g[N]+=S}}return e.makeTensorInfo(i.shape,r.dtype,g)}const UB={kernelName:mf,backendName:"cpu",kernelFunc:WB};function oC(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{reductionIndices:o,keepDims:i}=s,a=e;let l=r.shape;const c=l.length,u=Tt(o,l);let h=u;const d=ie(h,c);let f=a.data.get(r.dataId).values;if(d!=null){const y=new Array(c);for(let v=0;v<y.length;v++)y[v]=l[d[v]];f=nm(f,l,r.dtype,d,y),h=pe(h.length,c),l=y}dt(r,"max"),Le("max",h,c);const[p,m]=De(l,h),g=Y(m),x=Cv(f,g,p,r.dtype),b=a.write(x,p,r.dtype);let w=p;return i&&(w=ye(p,u)),{dataId:b,shape:w,dtype:r.dtype}}const GB={kernelName:Xc,backendName:"cpu",kernelFunc:oC};function HB(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t;dt(r,"maxPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=s,c=1;T(Ue(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=On(r.shape,o,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Pt(u.inShape,u.outShape))h=vs({inputs:{x:r},backend:e});else{const d=e.data.get(r.dataId).values,f=xt(r.shape),p=om(d,r.shape,r.dtype,f,u,"max");h=e.makeTensorInfo(u.outShape,r.dtype,p.values)}return h}const qB={kernelName:Kc,backendName:"cpu",kernelFunc:HB};function XB(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{filterSize:o,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;dt(r,"maxPool3d");const u=Ps(r.shape,o,i,1,a,l,c),h=e.data.get(r.dataId).values,d=eC(h,r.shape,r.dtype,xt(r.shape),u,"max");return e.makeTensorInfo(d.shape,"float32",d.values)}const KB={kernelName:jc,backendName:"cpu",kernelFunc:XB};function jB(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;dt([r,o],"maxPool3DGrad");const u=Ps(o.shape,i,a,1,l,c),h=e.bufferSync(o),d=L3(h,u),f=u.strideDepth,p=u.strideHeight,m=u.strideWidth,g=u.dilationDepth,x=u.dilationHeight,b=u.dilationWidth,w=u.effectiveFilterDepth,y=u.effectiveFilterHeight,v=u.effectiveFilterWidth,$=w-1-u.padInfo.front,N=v-1-u.padInfo.left,S=y-1-u.padInfo.top,I=Nt(o.shape,"float32"),k=e.bufferSync(r);for(let C=0;C<u.batchSize;++C)for(let E=0;E<u.inChannels;++E)for(let _=0;_<u.inDepth;++_)for(let R=0;R<u.inHeight;++R)for(let M=0;M<u.inWidth;++M){const z=_-$,P=R-S,U=M-N;let q=0;for(let j=0;j<w;j+=g){const Z=(z+j)/f;if(!(Z<0||Z>=u.outDepth||Math.floor(Z)!==Z))for(let J=0;J<y;J+=x){const Q=(P+J)/p;if(!(Q<0||Q>=u.outHeight||Math.floor(Q)!==Q))for(let rt=0;rt<v;rt+=b){const st=(U+rt)/m;if(st<0||st>=u.outWidth||Math.floor(st)!==st)continue;const lt=w*y*v-1-d.get(C,Z,Q,st,E),pt=j*y*v+J*v+rt,mt=lt===pt?1:0;if(mt===0)continue;const yt=k.get(C,Z,Q,st,E);q+=yt*mt}}}I.set(q,C,_,R,M,E)}return e.makeTensorInfo(I.shape,I.dtype,I.values)}const YB={kernelName:xf,backendName:"cpu",kernelFunc:jB};function ZB(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o,output:i}=t,a=o;dt([o,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=On(a.shape,l,c,1,u,h),f=e.data.get(a.dataId).values,p=Nt(d.outShape,a.dtype,tC(f,a.shape,a.dtype,d).values),m=d.strideHeight,g=d.strideWidth,x=d.dilationHeight,b=d.dilationWidth,w=d.effectiveFilterHeight,y=d.effectiveFilterWidth,v=y-1-d.padInfo.left,$=w-1-d.padInfo.top,N=Nt(a.shape,"float32"),S=e.data.get(r.dataId).values,I=Nt(r.shape,"float32",S);for(let k=0;k<d.batchSize;++k)for(let C=0;C<d.inChannels;++C)for(let E=0;E<d.inHeight;++E)for(let _=0;_<d.inWidth;++_){const R=E-$,M=_-v;let z=0;for(let P=0;P<w;P+=x){const U=(R+P)/m;if(!(U<0||U>=d.outHeight||Math.floor(U)!==U))for(let q=0;q<y;q+=b){const j=(M+q)/g;if(j<0||j>=d.outWidth||Math.floor(j)!==j)continue;const Z=w*y-1-p.get(k,U,j,C),J=P*y+q,Q=Z===J?1:0;if(Q===0)continue;const rt=I.get(k,U,j,C);z+=rt*Q}}N.set(z,k,E,_,C)}return e.makeTensorInfo(N.shape,N.dtype,N.values)}const JB={kernelName:gf,backendName:"cpu",kernelFunc:ZB};function QB(n,t,e,s,r){const o=xt(t),i=om(n,t,e,o,r,"max"),a=tC(n,t,e,r,!0,s);return[i.values,a.values]}const tV={kernelName:L0,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{filterSize:r,strides:o,pad:i,includeBatchInIndex:a}=t,l=e;dt(s,"MaxPoolWithArgmax");const c=l.data.get(s.dataId).values,u=On(s.shape,r,o,[1,1],i),[h,d]=QB(c,s.shape,s.dtype,a,u),f=l.write(h,u.outShape,s.dtype),p=l.write(d,u.outShape,s.dtype);return[{dataId:f,shape:u.outShape,dtype:s.dtype},{dataId:p,shape:u.outShape,dtype:"int32"}]}};function eV(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s,a=Tt(o,r.shape),c=De(r.shape,a)[1],u=Y(c),h=[],d=e.makeTensorInfo([],"float32",new Float32Array([u]));h.push(d);const f=or({inputs:{x:r},backend:e,attrs:{dtype:"float32"}});h.push(f);const p=im({inputs:{a:f,b:d},backend:e});h.push(p);const m=Ua({inputs:{x:p},backend:e,attrs:{axis:o,keepDims:i}});return h.forEach(g=>e.disposeIntermediateTensorInfo(g)),m}const nV={kernelName:Yc,backendName:"cpu",kernelFunc:eV};function sV(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;dt(r,"min");const a=Tt(o,r.shape);let l=a;const c=ie(l,r.shape.length);let u=r;c!=null&&(u=cn({inputs:{x:r},backend:e,attrs:{perm:c}}),l=pe(l.length,r.shape.length)),Le("min",l,u.shape.length);const[h,d]=De(u.shape,l),f=Y(d),p=Ve(Y(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<p.length;++x){const b=x*f;let w=m[b];for(let y=0;y<f;++y){const v=m[b+y];(Number.isNaN(v)||v<w)&&(w=v)}p[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,p);if(i){const x=ye(h,a),b=ee({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const rV={kernelName:Zc,backendName:"cpu",kernelFunc:sV};function oV(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{paddings:o,mode:i}=s;dt(r,"mirrorPad");const a=o.map((w,y)=>w[0]+r.shape[y]+w[1]),l=o.map(w=>w[0]),c=o.map((w,y)=>w[0]+r.shape[y]),u=i==="reflect"?0:1,h=e.data.get(r.dataId).values,d=r.shape.length,f=xt(r.shape),p=Y(a),m=a.length,g=xt(a),x=Be(r.dtype,p);for(let w=0;w<p;w++){let y=Ro(w,m,g);for(let $=0;$<m;$++)y[$]<l[$]?y[$]=l[$]*2-y[$]-u:y[$]>=c[$]&&(y[$]=(c[$]-1)*2-y[$]+u);y=y.map(($,N)=>$-l[N]);const v=ds(y,d,f);x[w]=h[v]}return{dataId:e.write(x,a,r.dtype),shape:a,dtype:r.dtype}}const iV={kernelName:Jc,backendName:"cpu",kernelFunc:oV};const aV=ge(((n,t)=>{const e=n%t;return n<0&&t<0||n>=0&&t>=0?e:(e+t)%t})),lV=Ne(ia,aV),cV={kernelName:ia,backendName:"cpu",kernelFunc:lV};function iC(n){const{inputs:t,backend:e,attrs:s}=n,{logits:r}=t,{dim:o}=s,i=r.shape.length;let a=o;if(a===-1&&(a=i-1),a!==i-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${i} and dim was ${a}`);const l=Tt([a],r.shape),c=oC({inputs:{x:r},backend:e,attrs:{reductionIndices:l,keepDims:!1}}),u=ye(c.shape,l),h=ee({inputs:{x:c},backend:e,attrs:{shape:u}}),d=rm({inputs:{a:r,b:h},backend:e}),f=uv({inputs:{x:d},backend:e}),p=Ua({inputs:{x:f},backend:e,attrs:{axis:l,keepDims:!1}}),m=ee({inputs:{x:p},backend:e,attrs:{shape:u}}),g=im({inputs:{a:f,b:m},backend:e});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),g}const uV={kernelName:gu,backendName:"cpu",kernelFunc:iC};function hV(n){const{inputs:t,backend:e,attrs:s}=n,{logits:r}=t,{numSamples:o,seed:i,normalized:a}=s;dt(r,"multinomial");const l=a?r:iC({inputs:{logits:r},backend:e,attrs:{dim:-1}}),c=l.shape[0],u=l.shape[1],h=e.data.get(l.dataId).values,d=[c,o],f=Ve(Y(d),"int32");for(let p=0;p<c;++p){const m=p*u,g=new Float32Array(u-1);g[0]=h[m];for(let w=1;w<g.length;++w)g[w]=g[w-1]+h[m+w];const x=Zf.alea(i.toString()),b=p*o;for(let w=0;w<o;++w){const y=x();f[b+w]=g.length;for(let v=0;v<g.length;v++)if(y<g[v]){f[b+w]=v;break}}}return a||e.disposeIntermediateTensorInfo(l),e.makeTensorInfo(d,"int32",f)}const dV={kernelName:P0,backendName:"cpu",kernelFunc:hV};const fV=ip;function pV(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s;dt(r,"NonMaxSuppression");const c=e.data.get(r.dataId).values,u=e.data.get(o.dataId).values,{selectedIndices:h}=fV(c,u,i,a,l);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}const mV={kernelName:bf,backendName:"cpu",kernelFunc:pV};const gV=ap;function xV(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s;dt(r,"NonMaxSuppressionPadded");const u=e.data.get(r.dataId).values,h=e.data.get(o.dataId).values,{selectedIndices:d,validOutputs:f}=gV(u,h,i,a,l,c);return[e.makeTensorInfo([d.length],"int32",new Int32Array(d)),e.makeTensorInfo([],"int32",new Int32Array([f]))]}const bV={kernelName:yf,backendName:"cpu",kernelFunc:xV};const yV=lp;function wV(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s;dt(r,"NonMaxSuppressionWithScore");const u=e.data.get(r.dataId).values,h=e.data.get(o.dataId).values,d=i,f=a,p=l,m=c,{selectedIndices:g,selectedScores:x}=yV(u,h,d,f,p,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const vV={kernelName:wf,backendName:"cpu",kernelFunc:wV};function CV(n){const{inputs:t,backend:e,attrs:s}=n,{indices:r}=t,{dtype:o,depth:i,onValue:a,offValue:l}=s;dt(r,"oneHot");const c=Y(r.shape),u=new Float32Array(c*i);u.fill(l);const h=e.data.get(r.dataId).values;for(let d=0;d<c;++d)h[d]>=0&&h[d]<i&&(u[d*i+h[d]]=a);return e.makeTensorInfo([...r.shape,i],o,u)}const $V={kernelName:nu,backendName:"cpu",kernelFunc:CV};function hc(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(s.dtype==="complex64"){const r=Br({inputs:{input:s},backend:e}),o=hc({inputs:{x:r},backend:e}),i=Io({inputs:{input:s},backend:e}),a=hc({inputs:{x:i},backend:e}),l=dn({inputs:{real:o,imag:a},backend:e});return e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return am({backend:e,attrs:{shape:s.shape,value:0,dtype:s.dtype}})}const kV={kernelName:yu,backendName:"cpu",kernelFunc:hc};function aC(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(s.dtype==="complex64"){const r=Br({inputs:{input:s},backend:e}),o=aC({inputs:{x:r},backend:e}),i=Io({inputs:{input:s},backend:e}),a=hc({inputs:{x:i},backend:e}),l=dn({inputs:{real:o,imag:a},backend:e});return e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return am({backend:e,attrs:{shape:s.shape,value:1,dtype:s.dtype}})}const IV={kernelName:eu,backendName:"cpu",kernelFunc:aC};function lC(n){const{inputs:t,backend:e,attrs:s}=n,{axis:r}=s;if(t.length===1)return uc({inputs:{input:t[0]},backend:e,attrs:{dim:r}});const o=t[0].shape,i=t[0].dtype;t.forEach(u=>{zd(o,u.shape,"All tensors passed to stack must have matching shapes"),T(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=t.map(u=>{const h=uc({inputs:{input:u},backend:e,attrs:{dim:r}});return a.push(h),h}),c=So({inputs:l,backend:e,attrs:{axis:r}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),c}const SV={kernelName:su,backendName:"cpu",kernelFunc:lC};function NV(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{paddings:o,constantValue:i}=s;dt(r,"pad");const a=o.map((b,w)=>b[0]+r.shape[w]+b[1]),l=o.map(b=>b[0]),c=e.data.get(r.dataId).values,u=Y(r.shape),h=r.shape.length,d=xt(r.shape),f=Y(a),p=a.length,m=xt(a),g=Be(r.dtype,f);i!==0&&g.fill(i);for(let b=0;b<u;b++){const y=Ro(b,h,d).map(($,N)=>$+l[N]),v=ds(y,p,m);g[v]=c[b]}return{dataId:e.write(g,a,r.dtype),shape:a,dtype:r.dtype}}const cC={kernelName:ru,backendName:"cpu",kernelFunc:NV};const TV=ge((n,t)=>Math.pow(n,t)),EV=Ne(la,TV),RV={kernelName:la,backendName:"cpu",kernelFunc:EV};function AV(n){const{inputs:t,backend:e,attrs:s}=n,{paramsNestedSplits:r,paramsDenseValues:o,indices:i}=t,{outputRaggedRank:a}=s,l=r.map(x=>e.data.get(x.dataId).values),c=r.map(x=>x.shape),u=e.data.get(o.dataId).values,h=e.data.get(i.dataId).values,[d,f,p]=Tv(l,c,u,o.shape,o.dtype,h,i.shape),m=d.map(x=>e.makeTensorInfo([x.length],"int32",x)),g=e.makeTensorInfo(p,o.dtype,f);return m.concat([g])}const DV={kernelName:z0,backendName:"cpu",kernelFunc:AV};function _V(n){const{inputs:t,backend:e}=n,{starts:s,limits:r,deltas:o}=t,i=e.data.get(s.dataId).values,a=e.data.get(r.dataId).values,l=e.data.get(o.dataId).values,[c,u]=Ev(i,s.shape,s.dtype,a,r.shape,l,o.shape),h=e.makeTensorInfo([c.length],"int32",c),d=e.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const FV={kernelName:B0,backendName:"cpu",kernelFunc:_V};function OV(n){const{inputs:t,backend:e,attrs:s}=n,{shape:r,values:o,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=s,c=e.data.get(r.dataId).values,u=e.data.get(o.dataId).values,h=e.data.get(i.dataId).values,d=a.map(g=>e.data.get(g.dataId).values),f=a.map(g=>g.shape),[p,m]=Rv(c,r.shape,u,o.shape,o.dtype,h,i.shape,d,f,l);return e.makeTensorInfo(p,o.dtype,m)}const MV={kernelName:V0,backendName:"cpu",kernelFunc:OV};function LV(n){const{backend:t,attrs:e}=n,{start:s,stop:r,dtype:o,step:i}=e,a=Av(s,r,i,o);return t.makeTensorInfo([a.length],o,a)}const PV={kernelName:vf,backendName:"cpu",kernelFunc:LV};const zV=Ut(ca,n=>1/n),BV={kernelName:ca,backendName:"cpu",kernelFunc:zV};function VV(n){const{inputs:t,backend:e,attrs:s}=n,{images:r}=t,{alignCorners:o,halfPixelCenters:i,size:a}=s;dt(r,"resizeBilinear");const l=xt(r.shape),[c,u]=a,[h,d,f,p]=r.shape,m=e.data.get(r.dataId).values,g=new Float32Array(Y([h,c,u,p])),x=[o&&c>1?d-1:d,o&&u>1?f-1:f],b=[o&&c>1?c-1:c,o&&u>1?u-1:u];let w=0;const y=x[0]/b[0],v=x[1]/b[1];for(let $=0;$<h;$++)for(let N=0;N<c;N++){let S;i?S=y*(N+.5)-.5:S=y*N;const I=Math.max(0,Math.floor(S)),k=S-I,C=Math.min(d-1,Math.ceil(S)),E=$*l[0]+I*l[1],_=$*l[0]+C*l[1];for(let R=0;R<u;R++){let M;i?M=v*(R+.5)-.5:M=v*R;const z=Math.max(0,Math.floor(M)),P=M-z,U=Math.min(f-1,Math.ceil(M)),q=E+z*l[2],j=_+z*l[2],Z=E+U*l[2],J=_+U*l[2];for(let Q=0;Q<p;Q++){const rt=m[q+Q],st=m[j+Q],lt=m[Z+Q],pt=m[J+Q],mt=rt+(lt-rt)*P,yt=st+(pt-st)*P,$t=mt+(yt-mt)*k;g[w++]=$t}}}return e.makeTensorInfo([h,c,u,p],"float32",g)}const WV={kernelName:cu,backendName:"cpu",kernelFunc:VV};function UV(n){const{inputs:t,backend:e,attrs:s}=n,{images:r,dy:o}=t,{alignCorners:i}=s;dt([o,r],"resizeBilinearGrad");const a=xt(r.shape),[l,c,u,h]=r.shape,[,d,f]=o.shape,p=new Float32Array(l*c*u*h),m=[i&&d>1?c-1:c,i&&f>1?u-1:u],g=[i&&d>1?d-1:d,i&&f>1?f-1:f],x=m[0]/g[0],b=m[1]/g[1],w=e.data.get(o.dataId).values;let y=0;for(let v=0;v<l;v++){const $=v*a[0];for(let N=0;N<d;N++){const S=N*x,I=Math.floor(S),k=Math.min(Math.ceil(S),c-1),C=$+I*a[1],E=$+k*a[1],_=S-I,R=1-_;for(let M=0;M<f;M++){const z=M*b,P=Math.floor(z),U=Math.min(Math.ceil(z),u-1),q=z-P,j=1-q,Z=C+P*a[2],J=C+U*a[2],Q=E+P*a[2],rt=E+U*a[2],st=R*j,lt=R*q,pt=_*j,mt=_*q;for(let yt=0;yt<h;yt++){const $t=w[y++];p[Z+yt]+=$t*st,p[J+yt]+=$t*lt,p[Q+yt]+=$t*pt,p[rt+yt]+=$t*mt}}}}return e.makeTensorInfo([l,u,c,h],"float32",p)}const GV={kernelName:kf,backendName:"cpu",kernelFunc:UV};function HV(n){const{inputs:t,backend:e,attrs:s}=n,{images:r}=t,{alignCorners:o,halfPixelCenters:i,size:a}=s;dt(r,"resizeNearestNeighbor");const l=xt(r.shape),[c,u]=a,[h,d,f,p]=r.shape,m=e.data.get(r.dataId).values,g=new Float32Array(h*c*u*p),x=[o&&c>1?d-1:d,o&&u>1?f-1:f],b=[o&&c>1?c-1:c,o&&u>1?u-1:u],w=x[0]/b[0],y=x[1]/b[1];let v=0;for(let $=0;$<h;$++){const N=$*l[0];for(let S=0;S<c;S++){const I=i?w*(S+.5):w*S;let k=Math.min(d-1,o?Math.round(I):Math.floor(I));i&&(k=Math.max(0,k));const C=N+k*l[1];for(let E=0;E<u;E++){const _=i?y*(E+.5):y*E;let R=Math.min(f-1,o?Math.round(_):Math.floor(_));i&&(R=Math.max(0,R));const M=C+R*l[2];for(let z=0;z<p;z++){const P=m[M+z];g[v++]=P}}}}return e.makeTensorInfo([h,c,u,p],r.dtype,g)}const qV={kernelName:lu,backendName:"cpu",kernelFunc:HV};function XV(n){const{inputs:t,backend:e,attrs:s}=n,{images:r,dy:o}=t,{alignCorners:i}=s;dt([o,r],"resizeNearestNeighborGrad");const a=xt(r.shape),l=xt(o.shape),[c,u,h,d]=r.shape,[,f,p]=o.shape,m=new Float32Array(c*u*h*d),g=e.data.get(o.dataId).values,x=[i&&f>1?u-1:u,i&&p>1?h-1:h],b=[i&&f>1?f-1:f,i&&p>1?p-1:p],w=x[0]/b[0],y=x[1]/b[1],v=1/w,$=1/y,N=Math.ceil(v)*2+2,S=Math.ceil($)*2+2;for(let I=0;I<c;I++){const k=I*a[0];for(let C=0;C<u;C++){const E=k+C*a[1],_=Math.floor(C*v),R=Math.floor(_-N/2);for(let M=0;M<h;M++){const z=E+M*a[2],P=Math.floor(M*$),U=Math.floor(P-S/2);for(let q=0;q<d;q++){let j=0;for(let Z=0;Z<N;Z++){const J=Z+R;if(J<0||J>=f)continue;const Q=k+J*l[1],rt=J*w,st=Math.min(u-1,i?Math.round(rt):Math.floor(rt));if(C===st)for(let lt=0;lt<S;lt++){const pt=lt+U;if(pt<0||pt>=p)continue;const mt=Q+pt*l[2],yt=pt*y,$t=Math.min(h-1,i?Math.round(yt):Math.floor(yt));M===$t&&(j+=g[mt+q])}}m[z+q]=j}}}}return e.makeTensorInfo(r.shape,r.dtype,m)}const KV={kernelName:$f,backendName:"cpu",kernelFunc:XV};function jV(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{dims:o}=s;dt(r,"reverse");const i=r.shape.length,a=Tt(o,r.shape);if(i===0)return vs({inputs:{x:r},backend:e});const l=new Oe(r.shape,r.dtype),c=e.bufferSync(r);for(let u=0;u<l.size;u++){const h=l.indexToLoc(u),d=h.slice();a.forEach(f=>d[f]=r.shape[f]-1-d[f]),l.set(c.get(...d),...h)}return e.makeTensorInfo(l.shape,l.dtype,l.values)}const YV={kernelName:uu,backendName:"cpu",kernelFunc:jV};const ZV={kernelName:Af,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,{radians:r,fillValue:o,center:i}=t,a=e,l=Be(s.dtype,Y(s.shape)),[c,u,h,d]=s.shape,[f,p]=mp(i,u,h),m=255,g=Math.sin(r),x=Math.cos(r),b=a.data.get(s.dataId).values;for(let y=0;y<c;y++){const v=y*h*u*d;for(let $=0;$<u;$++){const N=$*(h*d);for(let S=0;S<h;S++){const I=S*d;for(let k=0;k<d;k++){const C=[c,$,S,k],E=C[2],_=C[1];let R=(E-f)*x-(_-p)*g,M=(E-f)*g+(_-p)*x;R=Math.round(R+f),M=Math.round(M+p);let z=o;if(typeof o!="number"&&(k===3?z=m:z=o[k]),R>=0&&R<h&&M>=0&&M<u){const U=M*(h*d),q=R*d,j=v+U+q+k;z=b[j]}const P=v+N+I+k;l[P]=z}}}}return{dataId:a.write(l,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};const JV=Ut(da,n=>{const t=Math.floor(n);return n-t<.5?Math.floor(n):n-t>.5?Math.ceil(n):t%2===0?t:t+1}),QV={kernelName:da,backendName:"cpu",kernelFunc:JV};function t4(n){const{inputs:t,backend:e,attrs:s}=n,{indices:r,updates:o}=t,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=qr(o,r,i),d=!0,f=e.bufferSync(r),p=e.bufferSync(o),m=$r(f,p,i,h,c,l,a,u,0,d);return e.makeTensorInfo(i,m.dtype,m.values)}const e4={kernelName:W0,backendName:"cpu",kernelFunc:t4};function n4(n,t){let e=0,s=n.length,r=0;for(;e<s;)r=Math.floor((e+s)/2),n[r]<t?e=r+1:s=r;return s}function s4(n,t){let e=0,s=n.length,r=0;for(;e<s;)r=Math.floor((e+s)/2),n[r]<=t?e=r+1:s=r;return s}function r4(n,t,e,s,r,o){const i=he("int32",e*r);for(let a=0;a<e;++a){const l=n.slice(a*s,(a+1)*s),c=a*r;for(let u=0;u<r;++u)i[c+u]=o==="left"?n4(l,t[u+c]):s4(l,t[u+c])}return i}function o4(n){const{inputs:t,backend:e,attrs:s}=n,{sortedSequence:r,values:o}=t,{side:i}=s,a=e.data.get(r.dataId).values,l=e.data.get(o.dataId).values,c=r4(a,l,r.shape[0],r.shape[1],o.shape[1],i);return e.makeTensorInfo(o.shape,"int32",c)}const i4={kernelName:G0,backendName:"cpu",kernelFunc:o4};function a4(n){const{inputs:t,backend:e}=n,{condition:s,t:r,e:o}=t;dt([s,r,o],"select");const i=s.shape.length,a=e.data.get(s.dataId).values,l=e.data.get(r.dataId).values,c=e.data.get(o.dataId).values,u=mn(r.dtype,o.dtype),h=Ve(Y(r.shape),u);let d=0;const f=i===0||i>1||r.shape.length===1?1:Y(r.shape.slice(1));for(let p=0;p<a.length;p++)for(let m=0;m<f;m++)a[p]===1?h[d++]=l[p]:h[d++]=c[p];return e.makeTensorInfo(r.shape,u,h)}const l4={kernelName:hu,backendName:"cpu",kernelFunc:a4};const c4=Ru,u4=Au,h4=Ut(pa,n=>n>=0?u4*n:c4*(Math.exp(n)-1)),d4={kernelName:pa,backendName:"cpu",kernelFunc:h4};const f4=Ut(xa,n=>n<0?-1:n>0?1:0),p4={kernelName:xa,backendName:"cpu",kernelFunc:f4};const m4=Ut(ma,n=>Math.sin(n)),g4={kernelName:ma,backendName:"cpu",kernelFunc:m4};const x4=Ut(ga,n=>Math.sinh(n)),b4={kernelName:ga,backendName:"cpu",kernelFunc:x4};const y4=11920928955078125e-23,dx=Math.log(y4)+2,w4=Ut(ya,n=>{const t=n>-dx,e=n<dx,s=Math.exp(n);let r;return e?r=s:t?r=n:r=Math.log(1+s),r}),v4={kernelName:ya,backendName:"cpu",kernelFunc:w4};function C4(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockShape:o,paddings:i}=s;dt([r],"spaceToBatchND");const a=Y(o),l=[[0,0]];l.push(...i);for(let $=1+o.length;$<r.shape.length;++$)l.push([0,0]);const c=cC.kernelFunc({inputs:{x:r},backend:e,attrs:{paddings:l,constantValue:0}}),u=Da(c.shape,o,a,!1),h=_a(u.length,o.length,!1),d=Fa(c.shape,o,a,!1),m=ee({inputs:{x:c},backend:e,attrs:{shape:u}}),b=cn({inputs:{x:m},backend:e,attrs:{perm:h}}),v=ee({inputs:{x:b},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(b),v}const $4={kernelName:pu,backendName:"cpu",kernelFunc:C4};function k4(n){const{inputs:t,backend:e}=n,{indices:s,values:r,denseShape:o,defaultValue:i}=t;if(o.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${o.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${s.shape}`);if(r.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${r.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=e.data.get(s.dataId).values,l=e.data.get(r.dataId).values,c=e.data.get(o.dataId).values,u=e.data.get(i.dataId).values[0],[h,d,f,p,m]=Ov(a,s.shape,s.dtype,l,r.dtype,c,u);return[e.makeTensorInfo(d,s.dtype,h),e.makeTensorInfo([d[0]],r.dtype,f),e.makeTensorInfo([p.length],"bool",new Uint8Array(p.map(g=>Number(g)))),e.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const I4={kernelName:H0,backendName:"cpu",kernelFunc:k4};function S4(n){const{inputs:t,backend:e}=n,{inputIndices:s,inputShape:r,newShape:o}=t;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${s.shape}`);if(r.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${r.shape}`);if(o.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${o.shape}`);const i=Array.from(e.data.get(r.dataId).values),a=e.data.get(s.dataId).values,l=Array.from(e.data.get(o.dataId).values),[c,u,h]=Mv(a,s.shape,s.dtype,i,l);return[e.makeTensorInfo(u,s.dtype,c),e.makeTensorInfo([h.length],o.dtype,new Int32Array(h))]}const N4={kernelName:q0,backendName:"cpu",kernelFunc:S4};function T4(n){const{inputs:t,backend:e}=n,{data:s,indices:r,segmentIds:o}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${o.shape}`);if(r.shape[0]!==o.shape[0])throw new Error("segmentIds and indices should have same size.");const i=e.data.get(s.dataId).values,a=e.data.get(r.dataId).values,l=e.data.get(o.dataId).values,[c,u]=sm(i,s.shape,s.dtype,a,l,!0);return e.makeTensorInfo(u,s.dtype,c)}const E4={kernelName:X0,backendName:"cpu",kernelFunc:T4};function R4(n){const{inputs:t,backend:e}=n,{data:s,indices:r,segmentIds:o}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${o.shape}`);if(r.shape[0]!==o.shape[0])throw new Error("segmentIds and indices should have same size.");const i=e.data.get(s.dataId).values,a=e.data.get(r.dataId).values,l=e.data.get(o.dataId).values,[c,u]=sm(i,s.shape,s.dtype,a,l);return e.makeTensorInfo(u,s.dtype,c)}const A4={kernelName:K0,backendName:"cpu",kernelFunc:R4};function D4(n){const{inputs:t,backend:e,attrs:s}=n,{sparseIndices:r,sparseValues:o,defaultValue:i}=t,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=qr(o,r,a),f=!1,p=e.bufferSync(r);let m;switch(o.dtype){case"bool":{const g=e.bufferSync(o),x=!!e.data.get(i.dataId).values[0];m=$r(p,g,a,d,u,c,l,h,x,f);break}case"float32":{const g=e.bufferSync(o),x=e.data.get(i.dataId).values[0];m=$r(p,g,a,d,u,c,l,h,x,f);break}case"int32":{const g=e.bufferSync(o),x=e.data.get(i.dataId).values[0];m=$r(p,g,a,d,u,c,l,h,x,f);break}case"string":{const g=e.bufferSync(o),x=tr(e.data.get(i.dataId).values[0]);m=$r(p,g,a,d,u,c,l,h,x,f);break}default:throw new Error(`Unsupported type ${o.dtype}`)}return e.makeTensorInfo(a,m.dtype,m.values)}const _4={kernelName:j0,backendName:"cpu",kernelFunc:D4};function F4(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{numOrSizeSplits:o,axis:i}=s,a=Tt(i,r.shape)[0],l=Rp(r,o,a),c=new Array(r.shape.length).fill(0),u=r.shape.slice();return l.map(h=>{const d=[...u];d[a]=h;const f=Vr({inputs:{x:r},backend:e,attrs:{begin:c,size:d}});return c[a]+=h,f})}const O4={kernelName:mu,backendName:"cpu",kernelFunc:F4};const M4={kernelName:If,backendName:"cpu",kernelFunc:({inputs:n,backend:t})=>{const{x:e}=n,s=t;dt(e,"square");const r=s.data.get(e.dataId).values,o=new Float32Array(r.length);for(let a=0;a<r.length;++a){const l=r[a];o[a]=l*l}return{dataId:s.write(o,e.shape,e.dtype),shape:e.shape,dtype:e.dtype}}};const L4=Ut(Sa,(n,t)=>{const e=t;return isNaN(n)?NaN:n>0?1:e.alpha}),P4={kernelName:Sa,backendName:"cpu",kernelFunc:L4};function z4(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{begin:o,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s;dt(r,"stridedSlice");const{finalShapeSparse:f,finalShape:p,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:w,strides:y}=dy(r.shape,o,i,a,l,c,u,h,d);let v;if(m)v=ee({inputs:{x:r},backend:e,attrs:{shape:p}});else if(g||x){T(r.shape.length>=1,()=>`Input must have rank at least 1, got: ${r.shape.length}`);const $=cy(b,w,y),N=Vr({inputs:{x:r},backend:e,attrs:{begin:b,size:$}});v=ee({inputs:{x:N},backend:e,attrs:{shape:p}}),e.disposeIntermediateTensorInfo(N)}else{const $=e.bufferSync(r),N=zv(f,$,y,b);v=e.makeTensorInfo(p,N.dtype,N.values)}return v}const B4={kernelName:Nf,backendName:"cpu",kernelFunc:z4};function V4(n){const{inputs:t,backend:e,attrs:s}=n,{separator:r,nGramWidths:o,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=t,d=e.data.get(u.dataId).values,f=e.data.get(h.dataId).values,[p,m]=Bv(d,f,r,o,i,a,l,c);return[e.makeTensorInfo([p.length],"string",p),e.makeTensorInfo(h.shape,"int32",m)]}const W4={kernelName:Y0,backendName:"cpu",kernelFunc:V4};function U4(n){const{inputs:t,backend:e,attrs:s}=n,{skipEmpty:r}=s,{input:o,delimiter:i}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(o.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${o.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=e.data.get(o.dataId).values,l=e.data.get(i.dataId).values[0],[c,u,h]=Vv(a,l,r),d=u.length;return[e.makeTensorInfo([d,2],"int32",c),e.makeTensorInfo([d],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}const G4={kernelName:Z0,backendName:"cpu",kernelFunc:U4};function H4(n){const{inputs:t,backend:e,attrs:s}=n,{numBuckets:r}=s,{input:o}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(r<=0)throw new Error("Number of buckets must be at least 1");const i=e.data.get(o.dataId).values,a=Wv(i,r);return e.makeTensorInfo(o.shape,"int32",a)}const q4={kernelName:J0,backendName:"cpu",kernelFunc:H4};const X4=Ut($a,n=>Math.tan(n)),K4={kernelName:$a,backendName:"cpu",kernelFunc:X4};const j4=Ut(ka,n=>Math.tanh(n)),Y4={kernelName:ka,backendName:"cpu",kernelFunc:j4};function Z4(n){const{inputs:t,backend:e}=n,{tensor:s,indices:r,updates:o}=t,{sliceRank:i,numUpdates:a,sliceSize:l,strides:c,outputSize:u}=qr(o,r,s.shape),h=!1,d=e.bufferSync(r),f=e.bufferSync(o),p=e.bufferSync(s),m=$r(d,f,s.shape,u,l,a,i,c,p,h);return e.makeTensorInfo(s.shape,m.dtype,m.values)}const J4={kernelName:U0,backendName:"cpu",kernelFunc:Z4};function Q4(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{reps:o}=s;dt(r,"tile");const i=Gv(e.bufferSync(r),o);return e.makeTensorInfo(i.shape,i.dtype,i.values)}const tW={kernelName:Ia,backendName:"cpu",kernelFunc:Q4};function eW(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{k:o,sorted:i}=s;dt(r,"topk");const a=e.data.get(r.dataId).values,[l,c]=qv(a,r.shape,r.dtype,o,i);return[e.makeTensorInfo(l.shape,l.dtype,l.values),e.makeTensorInfo(c.shape,c.dtype,c.values)]}const nW={kernelName:Tf,backendName:"cpu",kernelFunc:eW};function sW(n){const{inputs:t,attrs:e,backend:s}=n,{image:r,transforms:o}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=e,[u,h,d,f]=r.shape,[p,m]=c??[h,d],g=[u,p,m,f],x=xt(r.shape),b=x[0],w=x[1],y=x[2],v=xt(g),$=v[0],N=v[1],S=v[2],I=Be(r.dtype,Y(g));I.fill(l);const k=s.data.get(r.dataId).values,C=s.data.get(o.dataId).values;for(let _=0;_<u;++_){const R=o.shape[0]===1?C:C.subarray(_*8,_*8+8);for(let M=0;M<p;++M)for(let z=0;z<m;++z)for(let P=0;P<f;++P){let U;const q=R[6]*z+R[7]*M+1;if(q===0)continue;const j=(R[0]*z+R[1]*M+R[2])/q,Z=(R[3]*z+R[4]*M+R[5])/q,J=fx(j,d,a),Q=fx(Z,h,a);switch(i){case"nearest":U=cW(k,h,d,b,w,y,_,Q,J,P,l);break;case"bilinear":U=uW(k,h,d,b,w,y,_,Q,J,P,l);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${i}`)}const rt=_*$+M*N+z*S+P;I[rt]=U}return s.makeTensorInfo(g,r.dtype,I)}return{dataId:s.write(I,g,r.dtype),shape:r.shape,dtype:r.dtype}}const rW={kernelName:Ef,backendName:"cpu",kernelFunc:sW};function fx(n,t,e){switch(e){case"reflect":return oW(n,t);case"wrap":return iW(n,t);case"nearest":return lW(n,t);default:return aW(n)}}function oW(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const s=2*t;e<s&&(e=s*Math.trunc(-e/s)+e),e=e<-t?e+s:-e-1}else if(e>t-1)if(t<=1)e=0;else{const s=2*t;e-=s*Math.trunc(e/s),e>=t&&(e=s-e-1)}return Ld(0,e,t-1)}function iW(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const s=t-1;e+=t*(Math.trunc(-e/s)+1)}else if(e>t-1)if(t<=1)e=0;else{const s=t-1;e-=t*Math.trunc(e/s)}return Ld(0,e,t-1)}function aW(n,t){return n}function lW(n,t){return Ld(0,n,t-1)}function oi(n,t,e,s,r,o,i,a,l,c,u){const h=i*s+a*r+l*o+c;return 0<=a&&a<t&&0<=l&&l<e?n[h]:u}function cW(n,t,e,s,r,o,i,a,l,c,u){const h=Math.round(a),d=Math.round(l);return oi(n,t,e,s,r,o,i,h,d,c,u)}function uW(n,t,e,s,r,o,i,a,l,c,u){const h=Math.floor(a),d=Math.floor(l),f=h+1,p=d+1,m=(p-l)*oi(n,t,e,s,r,o,i,h,d,c,u)+(l-d)*oi(n,t,e,s,r,o,i,h,p,c,u),g=(p-l)*oi(n,t,e,s,r,o,i,f,d,c,u)+(l-d)*oi(n,t,e,s,r,o,i,f,p,c,u);return(f-a)*m+(a-h)*g}function hW(n){const{inputs:t,attrs:e,backend:s}=n,{axis:r}=e,{x:o}=t;dt(o,"unique");const i=s.data.get(o.dataId).values,{outputValues:a,outputShape:l,indices:c}=Xv(i,r,o.shape,o.dtype);return[s.makeTensorInfo(l,o.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const dW={kernelName:Rf,backendName:"cpu",kernelFunc:hW};function fW(n){const{inputs:t,backend:e,attrs:s}=n,{value:r}=t;let{axis:o}=s;o<0&&(o+=r.shape.length);const i=r.shape.length,a=r.shape[o],l=new Array(i-1);let c=0;for(let f=0;f<i;f++)f!==o&&(l[c++]=r.shape[f]);const u=new Array(i).fill(0),h=r.shape.slice();h[o]=1;const d=new Array(a);for(let f=0;f<d.length;f++){u[o]=f;const p=Vr({inputs:{x:r},backend:e,attrs:{begin:u,size:h}});d[f]=ee({inputs:{x:p},backend:e,attrs:{shape:l}}),e.disposeIntermediateTensorInfo(p)}return d}const pW={kernelName:xu,backendName:"cpu",kernelFunc:fW};function mW(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,segmentIds:o}=t,{numSegments:i}=s;dt(r,"unsortedSegmentSum");const a=r.shape.length,l=o.shape.length,c=[],u=[],h=a-l;let d=o;for(let p=0;p<h;++p){const m=uc({inputs:{input:d},backend:e,attrs:{dim:p+1}});d=m,u.push(m)}for(let p=0;p<i;++p){const m=ar(p,"int32"),g=e.makeTensorInfo([],"int32",m),x=lv({inputs:{a:g,b:d},backend:e}),b=or({inputs:{x},backend:e,attrs:{dtype:"float32"}}),w=Uu({inputs:{a:b,b:r},backend:e}),y=Ua({inputs:{x:w},backend:e,attrs:{axis:0,keepDims:!1}});c.push(y),u.push(g),u.push(x),u.push(b),u.push(w),u.push(y)}const f=lC({inputs:c,backend:e,attrs:{axis:0}});return u.forEach(p=>e.disposeIntermediateTensorInfo(p)),f}const gW={kernelName:bu,backendName:"cpu",kernelFunc:mW};const xW=[h3,HL,f3,m3,ZL,x3,y3,v3,$3,I3,N3,E3,A3,F3,M3,z3,V3,U3,H3,c3,X3,j3,Z3,QL,Q3,jL,eP,ez,qL,sz,oz,iz,lz,uz,dz,pz,gz,bz,wz,Cz,kz,Sz,Tz,Rz,Az,_z,Oz,Lz,Pz,zz,Bz,Wz,Hz,n3,Xz,nP,eB,sP,nB,oP,lB,cB,hB,aP,cP,fB,mB,xB,yB,hP,fP,XL,vB,rz,$B,IB,NB,s3,mP,xP,EB,yP,AB,FB,MB,zB,VB,UB,GB,vP,qB,KB,YB,JB,tV,nV,rV,$P,iV,cV,dV,IP,NP,mV,bV,vV,EP,$V,IV,SV,cC,RV,o3,DP,DV,FV,MV,PV,KL,pd,BV,i3,a3,l3,WV,GV,qV,KV,YV,ZV,QV,BP,e4,i4,l4,d4,WP,p4,g4,b4,UP,uV,v4,$4,I4,N4,E4,A4,_4,O4,qP,M4,KP,YP,P4,B4,W4,G4,q4,t3,Uz,K4,Y4,J4,tW,nW,rW,RP,dW,pW,gW,kV];for(const n of xW)tb(n);const wr={},al={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function bW(n,t){wr[n]=t}function ts(n,t){if(!(n in wr)||t!=null){const s=wW(n,t);if(s!==null)wr[n]=s;else return console.log("Could not get context for WebGL version",n),null}const e=wr[n];return e==null||e.isContextLost()?(delete wr[n],ts(n)):(e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.disable(e.BLEND),e.disable(e.DITHER),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SAMPLE_COVERAGE),e.enable(e.SCISSOR_TEST),e.enable(e.CULL_FACE),e.cullFace(e.BACK),wr[n])}function yW(n){if(!X().getBool("IS_SAFARI")&&typeof OffscreenCanvas<"u"&&n===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function wW(n,t){if(n!==1&&n!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const e=t??yW(n);return e.addEventListener("webglcontextlost",s=>{s.preventDefault(),delete wr[n]},!1),X().getBool("SOFTWARE_WEBGL_ENABLED")&&(al.failIfMajorPerformanceCaveat=!1),n===1?e.getContext("webgl",al)||e.getContext("experimental-webgl",al):e.getContext("webgl2",al)}var ki;(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(ki||(ki={}));var wn;(function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"})(wn||(wn={}));var Fe;(function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(Fe||(Fe={}));function Ga(n,t){return[t,n]}function vW(n,t){return n*t}function ll(n){const t=Y(n),e=Math.ceil(t/4);return Lh(e)}function Po(n,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(n/2))]}function CW(n,t){const[e,s]=Po(n,t);return e*s*4}function lm(n,t){const e=n;let s,r,o,i,a,l,c,u,h,d;return X().getNumber("WEBGL_VERSION")===2?(s=e.R32F,r=e.R16F,o=e.RGBA16F,i=e.RGBA32F,a=e.RED,c=4,u=1,h=e.HALF_FLOAT,d=e.FLOAT,l=e.RGBA8):(s=n.RGBA,r=n.RGBA,o=n.RGBA,i=e.RGBA,a=n.RGBA,c=4,u=4,h=t!=null?t.HALF_FLOAT_OES:null,d=n.FLOAT,l=n.RGBA),{internalFormatFloat:s,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:l,downloadUnpackNumChannels:c,defaultNumChannels:u,textureTypeHalfFloat:h,textureTypeFloat:d}}function ct(n,t){const e=t();return X().getBool("DEBUG")&&$W(n),e}function $W(n){const t=n.getError();if(t!==n.NO_ERROR)throw new Error("WebGL Error: "+NW(n,t))}const kW=596e-10,IW=65504;function SW(n){return!!(X().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||kW<Math.abs(n)&&Math.abs(n)<IW)}function NW(n,t){switch(t){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function cl(n,t){return Vs(n,()=>n.getExtension(t),'Extension "'+t+'" not supported on this browser.')}function TW(n,t){const e=Vs(n,()=>n.createShader(n.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(ct(n,()=>n.shaderSource(e,t)),ct(n,()=>n.compileShader(e)),n.getShaderParameter(e,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(e)),new Error("Failed to compile vertex shader.");return e}function EW(n,t){const e=Vs(n,()=>n.createShader(n.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(ct(n,()=>n.shaderSource(e,t)),ct(n,()=>n.compileShader(e)),X().get("ENGINE_COMPILE_ONLY"))return e;if(n.getShaderParameter(e,n.COMPILE_STATUS)===!1)throw uC(t,n.getShaderInfoLog(e)),new Error("Failed to compile fragment shader.");return e}const RW=/ERROR: [0-9]+:([0-9]+):/g;function uC(n,t){const e=RW.exec(t);if(e==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(n);return}const s=+e[1],r=n.split(`
`),o=r.length.toString().length+2,i=r.map((h,d)=>co((d+1).toString(),o)+h);let a=0;for(let h=0;h<i.length;h++)a=Math.max(i[h].length,a);const l=i.slice(0,s-1),c=i.slice(s-1,s),u=i.slice(s);console.log(l.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${co(c[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(u.join(`
`))}function AW(n){return Vs(n,()=>n.createProgram(),"Unable to create WebGLProgram.")}function DW(n,t){if(ct(n,()=>n.linkProgram(t)),!X().get("ENGINE_COMPILE_ONLY")&&n.getProgramParameter(t,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function xh(n,t){if(ct(n,()=>n.validateProgram(t)),n.getProgramParameter(t,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function _W(n,t){const e=Vs(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return ct(n,()=>n.bindBuffer(n.ARRAY_BUFFER,e)),ct(n,()=>n.bufferData(n.ARRAY_BUFFER,t,n.STATIC_DRAW)),e}function FW(n,t){const e=Vs(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return ct(n,()=>n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e)),ct(n,()=>n.bufferData(n.ELEMENT_ARRAY_BUFFER,t,n.STATIC_DRAW)),e}function OW(n){return Vs(n,()=>n.createTexture(),"Unable to create WebGLTexture.")}function MW(n,t){const e=X().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||t<=0){const s=`[${n}x${t}]`;throw new Error("Requested texture size "+s+" is invalid.")}if(n>e||t>e){const s=`[${n}x${t}]`,r=`[${e}x${e}]`;throw new Error("Requested texture size "+s+" greater than WebGL maximum on this browser / GPU "+r+".")}}function LW(n){return Vs(n,()=>n.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function px(n,t,e,s,r,o,i){const a=n.getAttribLocation(t,e);return a===-1?!1:(ct(n,()=>n.bindBuffer(n.ARRAY_BUFFER,s)),ct(n,()=>n.vertexAttribPointer(a,r,n.FLOAT,!1,o,i)),ct(n,()=>n.enableVertexAttribArray(a)),!0)}function PW(n,t,e){UW(n,e),ct(n,()=>n.activeTexture(n.TEXTURE0+e)),ct(n,()=>n.bindTexture(n.TEXTURE_2D,t))}function zW(n,t,e){return Vs(n,()=>n.getUniformLocation(t,e),'uniform "'+e+'" not present in program.')}function BW(n,t,e){return n.getUniformLocation(t,e)}function VW(n,t,e,s){ct(n,()=>PW(n,t,s)),ct(n,()=>n.uniform1i(e,s))}function bh(n,t,e){ct(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,e)),ct(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t,0))}function mx(n,t){ct(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,t)),ct(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0))}function ul(n){const t=n.checkFramebufferStatus(n.FRAMEBUFFER);if(t!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+WW(n,t))}function WW(n,t){switch(t){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function Vs(n,t,e){const s=ct(n,()=>t());if(s==null)throw new Error(e);return s}function UW(n,t){const e=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,s=t+n.TEXTURE0;if(s<n.TEXTURE0||s>e){const r=`[gl.TEXTURE0, gl.TEXTURE${e}]`;throw new Error(`textureUnit must be in ${r}.`)}}function No(n,t=2){return Y(n.slice(0,n.length-t))}function To(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function hl(n){let t=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(t=[No(n),...To(n)]),t}function GW(n,t=!1){let e=X().getNumber("WEBGL_MAX_TEXTURE_SIZE"),s=X().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");s===1/0&&X().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(s=e/2),t&&(e=e*2,s=s*2,n=n.map((a,l)=>l>=n.length-2?Pd(n[l]):n[l]),n.length===1&&(n=[2,n[0]])),n.length!==2&&(n=ir(n).newShape);let r=Y(n),o=null;n.length<=1&&r<=e?o=[1,r]:n.length===2&&n[0]<=e&&n[1]<=e?o=n:n.length===3&&n[0]*n[1]<=e&&n[2]<=e?o=[n[0]*n[1],n[2]]:n.length===3&&n[0]<=e&&n[1]*n[2]<=e?o=[n[0],n[1]*n[2]]:n.length===4&&n[0]*n[1]*n[2]<=e&&n[3]<=e?o=[n[0]*n[1]*n[2],n[3]]:n.length===4&&n[0]<=e&&n[1]*n[2]*n[3]<=e&&(o=[n[0],n[1]*n[2]*n[3]]);const i=o!=null&&Math.max(...o)>s&&Math.min(...o)<=(t?2:1)&&Math.min(...o)>0;if(o==null||i)if(t){const a=No(n);let l=2,c=2;n.length&&([l,c]=To(n)),r=a*(l/2)*(c/2),o=Lh(r).map(u=>u*2)}else o=Lh(r);return o}function dl(n){return n%2===0}function dc(n,t){if(n=n.slice(-2),t=t.slice(-2),Pt(n,t)||!n.length||!t.length||n[0]===0||n[1]===0||t[0]===0||t[1]===0)return!0;if(n.length!==t.length){const e=n[n.length-1],s=t[t.length-1];if(e===s||dl(e)&&dl(s)&&(n[0]===1||t[0]===1))return!0}return n[1]===t[1]&&dl(n[0])&&dl(t[0])}let yh,wh;function HW(n){if(yh==null){const t=ts(n);yh=t.getParameter(t.MAX_TEXTURE_SIZE)}return yh}function qW(n){if(wh==null){const t=ts(n);wh=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,wh)}function XW(n){if(n===0)return 0;let t;const e=ts(n);return Dn(e,"EXT_disjoint_timer_query_webgl2")&&n===2?t=2:Dn(e,"EXT_disjoint_timer_query")?t=1:t=0,t}function Dn(n,t){return n.getExtension(t)!=null}function gx(n){try{if(ts(n)!=null)return!0}catch(t){return console.log("Error when getting WebGL context: ",t),!1}return!1}function KW(n){if(n===0)return!1;const t=ts(n);if(n===1){if(!Dn(t,"OES_texture_float"))return!1}else if(!Dn(t,"EXT_color_buffer_float"))return!1;return gd(t)}function jW(n){if(n===0)return!1;const t=ts(n);if(n===1){if(!Dn(t,"OES_texture_float")||!Dn(t,"WEBGL_color_buffer_float"))return!1}else{if(Dn(t,"EXT_color_buffer_float"))return gd(t);const s="EXT_color_buffer_half_float";if(Dn(t,s)){const r=t.getExtension(s);return YW(t,r)}return!1}return gd(t)}function gd(n){const t=lm(n),e=n.createTexture();n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);const o=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,o),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);const i=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(e),n.deleteFramebuffer(o),i}function YW(n,t){const e=lm(n,t),s=n.createTexture();n.bindTexture(n.TEXTURE_2D,s),n.texImage2D(n.TEXTURE_2D,0,e.internalFormatHalfFloat,1,1,0,e.textureFormatFloat,e.textureTypeHalfFloat,null);const i=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,i),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s,0);const a=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(s),n.deleteFramebuffer(i),a}function ZW(n){return n!==2?!1:ts(n).fenceSync!=null}function Ha(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&T(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}const ft=X();ft.registerFlag("HAS_WEBGL",()=>ft.getNumber("WEBGL_VERSION")>0);ft.registerFlag("WEBGL_VERSION",()=>gx(2)?2:gx(1)?1:0);ft.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);ft.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>ft.get("WEBGL_VERSION")===2);ft.registerFlag("WEBGL_CPU_FORWARD",()=>!0);ft.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);ft.registerFlag("WEBGL_PACK",()=>ft.getBool("HAS_WEBGL"));ft.registerFlag("WEBGL_PACK_NORMALIZATION",()=>ft.getBool("WEBGL_PACK"));ft.registerFlag("WEBGL_PACK_CLIP",()=>ft.getBool("WEBGL_PACK"));ft.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>ft.getBool("WEBGL_PACK"));ft.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>ft.getBool("WEBGL_PACK"));ft.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>ft.getBool("WEBGL_PACK"));ft.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>ft.getBool("WEBGL_PACK"));ft.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>ft.getBool("WEBGL_PACK"));ft.registerFlag("WEBGL_PACK_REDUCE",()=>ft.getBool("WEBGL_PACK"));ft.registerFlag("WEBGL_LAZILY_UNPACK",()=>ft.getBool("WEBGL_PACK"));ft.registerFlag("WEBGL_CONV_IM2COL",()=>ft.getBool("WEBGL_PACK"));ft.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>ft.getBool("WEBGL_PACK"));ft.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>HW(ft.getNumber("WEBGL_VERSION")));ft.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>qW(ft.getNumber("WEBGL_VERSION")));ft.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const n=ft.getNumber("WEBGL_VERSION");return n===0?0:XW(n)});ft.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>ft.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!fb());ft.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>KW(ft.getNumber("WEBGL_VERSION")));ft.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>ft.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:ft.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));ft.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>jW(ft.getNumber("WEBGL_VERSION")));ft.registerFlag("WEBGL_FENCE_API_ENABLED",()=>ZW(ft.getNumber("WEBGL_VERSION")));ft.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>ft.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);ft.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${n}.`)});ft.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>fb()?1:-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${n}.`)});ft.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);ft.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);ft.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);ft.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);ft.registerFlag("WEBGL_EXP_CONV",()=>!1);ft.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>ft.getBool("IS_TEST"));ft.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);ft.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);ft.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);ft.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function en(){let n,t,e,s,r,o,i,a,l,c;return X().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",t="in",e="out",s="in",r="texture",o="outputColor",i="out vec4 outputColor;",a=X().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",l="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(n="",t="attribute",e="varying",s="varying",r="texture2D",o="gl_FragColor",i="",a=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,l=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:n,attribute:t,varyingVs:e,varyingFs:s,texture2D:r,output:o,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:l,defineRound:c}}function jr(n,t,e="index"){const s=xt(t);return s.map((r,o)=>{const i=`int ${n[o]} = ${e} / ${r}`,a=o===s.length-1?`int ${n[o+1]} = ${e} - ${n[o]} * ${r}`:`index -= ${n[o]} * ${r}`;return`${i}; ${a};`}).join("")}function Gu(n,t,e="index"){const s=xt(t);return s.map((r,o)=>{const i=`int ${n[o]} = ${e} / outShapeStrides[${o}]`,a=o===s.length-1?`int ${n[o+1]} = ${e} - ${n[o]} * outShapeStrides[${o}]`:`index -= ${n[o]} * outShapeStrides[${o}]`;return`${i}; ${a};`}).join("")}function JW(n,t){const e=n.length,s=n.map(o=>`${t}[${o}]`),r=new Array(e-1);r[e-2]=s[e-1];for(let o=e-3;o>=0;--o)r[o]=`(${r[o+1]} * ${s[o+1]})`;return r}function QW(n,t,e="index"){const s=n.map((o,i)=>i),r=JW(s,t);return r.map((o,i)=>{const a=`int ${n[i]} = ${e} / ${r[i]}`,l=i===r.length-1?`int ${n[i+1]} = ${e} - ${n[i]} * ${r[i]}`:`index -= ${n[i]} * ${r[i]}`;return`${a}; ${l};`}).join("")}function cm(n){const t=xt(n).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function um(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const hC=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;const{getBroadcastDims:dC}=U_;function tU(n,t,e){const s=[];if(n.forEach(f=>{const p=Y(f.shapeInfo.logicalShape);if(f.shapeInfo.isUniform?s.push(`uniform float ${f.name}${p>1?`[${p}]`:""};`):(s.push(`uniform sampler2D ${f.name};`),s.push(`uniform int offset${f.name};`)),e.enableShapeUniforms){const{uniformShape:m}=hm(e.packedInputs,f.shapeInfo.logicalShape,f.shapeInfo.texShape);switch(m.length){case 1:s.push(`uniform int ${f.name}Shape;`);break;case 2:s.push(`uniform ivec2 ${f.name}Shape;`);break;case 3:s.push(`uniform ivec3 ${f.name}Shape;`);break;case 4:s.push(`uniform ivec4 ${f.name}Shape;`);break}s.push(`uniform ivec2 ${f.name}TexShape;`)}}),e.enableShapeUniforms){switch(t.logicalShape.length){case 1:s.push("uniform int outShape;");break;case 2:s.push("uniform ivec2 outShape;"),s.push("uniform int outShapeStrides;");break;case 3:s.push("uniform ivec3 outShape;"),s.push("uniform ivec2 outShapeStrides;");break;case 4:s.push("uniform ivec4 outShape;"),s.push("uniform ivec3 outShapeStrides;");break}s.push("uniform ivec2 outTexShape;")}e.customUniforms&&e.customUniforms.forEach(f=>{s.push(`uniform ${f.type} ${f.name}${f.arrayIndex?`[${f.arrayIndex}]`:""};`)});const r=s.join(`
`),o=n.map(f=>eU(f,t,e.packedInputs,e.enableShapeUniforms)).join(`
`),i=t.texShape,a=en(),l=rU(a);let c,u,h=aU(a);return t.isPacked?(c=nU(t.logicalShape,i,e.enableShapeUniforms),u=iU(a)):(c=sU(t.logicalShape,i,e.enableShapeUniforms),u=oU(a)),e.packedInputs&&(h+=hU),[h,l,u,r,c,o,e.userCode].join(`
`)}function zo(n,t=!1){const e=n.shapeInfo.logicalShape;switch(e.length){case 0:return $U(n,t);case 1:return IU(n,t);case 2:return NU(n,t);case 3:return EU(n,t);case 4:return AU(n,t);case 5:return DU(n);case 6:return _U(n);default:throw new Error(`${e.length}-D input sampling is not yet supported`)}}function fC(n,t){switch(n.shapeInfo.logicalShape.length){case 0:return CU(n);case 1:return kU(n,t);case 2:return SU(n,t);case 3:return TU(n,t);default:return RU(n,t)}}function eU(n,t,e=!1,s){let r="";e?r+=fC(n,s):r+=zo(n,s);const o=n.shapeInfo.logicalShape,i=t.logicalShape;return o.length<=i.length&&(e?r+=FU(n,t):r+=OU(n,t)),r}function nU(n,t,e){switch(n.length){case 0:return pC();case 1:return dU(n,t,e);case 2:return wU(n,t,e);case 3:return pU(n,t,e);default:return gU(n,t,e)}}function sU(n,t,e){switch(n.length){case 0:return pC();case 1:return fU(n,t,e);case 2:return vU(n,t,e);case 3:return mU(n,t,e);case 4:return xU(n,t,e);case 5:return bU(n,t);case 6:return yU(n,t);default:throw new Error(`${n.length}-D output sampling is not yet supported`)}}function rU(n){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${n.texture2D}(textureSampler, uv).r;
    }
  `}function oU(n){return`
    void setOutput(float val) {
      ${n.output} = vec4(val, 0, 0, 0);
    }
  `}function iU(n){return`
    void setOutput(vec4 val) {
      ${n.output} = val;
    }
  `}function aU(n){return`${n.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${n.varyingFs} vec2 resultUV;
    ${n.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${n.defineSpecialNaN}
    ${n.defineSpecialInf}
    ${n.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${lU}
    ${cU}
    ${uU}
  `}const lU=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,cU=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,uU=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,hU=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function pC(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function dU(n,t,e){const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return s[0]===1?e?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${s[1]}.0);
      }
    `:s[1]===1?e?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${s[0]}.0);
      }
    `:e?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      return 2 * (resTexRC.x * ${s[1]} + resTexRC.y);
    }
  `}function fU(n,t,e){return t[0]===1?e?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${t[1]}.0);
      }
    `:t[1]===1?e?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${t[0]}.0);
      }
    `:e?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      return resTexRC.x * ${t[1]} + resTexRC.y;
    }
  `}function pU(n,t,e){if(e)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],r=Math.ceil(n[2]/2),o=r*Math.ceil(n[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      int b = index / ${o};
      index -= b * ${o};

      int r = 2 * (index / ${r});
      int c = imod(index, ${r}) * 2;

      return ivec3(b, r, c);
    }
  `}function mU(n,t,e){if(e)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Gu(["r","c","d"],n)}
    return ivec3(r, c, d);
  }
`;const s=jr(["r","c","d"],n);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${s}
      return ivec3(r, c, d);
    }
  `}function gU(n,t,e){if(e)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],r=Math.ceil(n[n.length-1]/2),o=r*Math.ceil(n[n.length-2]/2);let i=o,a="",l="b, r, c";for(let c=2;c<n.length-1;c++)i*=n[n.length-c-1],a=`
      int b${c} = index / ${i};
      index -= b${c} * ${i};
    `+a,l=`b${c}, `+l;return`
    ivec${n.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      ${a}

      int b = index / ${o};
      index -= b * ${o};

      int r = 2 * (index / ${r});
      int c = imod(index, ${r}) * 2;

      return ivec${n.length}(${l});
    }
  `}function xU(n,t,e){if(e)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Gu(["r","c","d","d2"],n)}
      return ivec4(r, c, d, d2);
    }
  `;const s=jr(["r","c","d","d2"],n);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${s}
      return ivec4(r, c, d, d2);
    }
  `}function bU(n,t){const e=jr(["r","c","d","d2","d3"],n);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function yU(n,t){const e=jr(["r","c","d","d2","d3","d4"],n);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function wU(n,t,e){const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(Pt(n,t))return e?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${s[0]}, ${s[1]}));
      }
    `;const r=Math.ceil(n[1]/2);return e?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));

      int index = resTexRC.x * ${s[1]} + resTexRC.y;
      int r = 2 * (index / ${r});
      int c = imod(index, ${r}) * 2;

      return ivec2(r, c);
    }
  `}function vU(n,t,e){return Pt(n,t)?e?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));
      }
    `:n[1]===1?e?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:n[0]===1?e?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:e?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      int r = index / ${n[1]};
      int c = index - r * ${n[1]};
      return ivec2(r, c);
    }
  `}function Yr(n){return`offset${n}`}function CU(n){const t=n.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),s=en();return`
    vec4 ${e}() {
      return ${s.texture2D}(${t}, halfCR);
    }
  `}function $U(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return`float ${s}() {return ${e};}`;const[r,o]=n.shapeInfo.texShape;if(r===1&&o===1)return`
      float ${s}() {
        return sampleTexture(${e}, halfCR);
      }
    `;const i=Yr(e);if(t)return`
    float ${s}() {
      vec2 uv = uvFromFlat(${e}TexShape[0], ${e}TexShape[1], ${i});
      return sampleTexture(${e}, uv);
    }
  `;const[a,l]=n.shapeInfo.texShape;return`
    float ${s}() {
      vec2 uv = uvFromFlat(${a}, ${l}, ${i});
      return sampleTexture(${e}, uv);
    }
  `}function kU(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),r=n.shapeInfo.texShape,o=en();if(t)return`
    vec4 ${s}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${e}TexShape[0]) / 2.0), ceil(float(${e}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${o.texture2D}(${e}, uv);
    }
  `;const i=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)];return`
    vec4 ${s}(int index) {
      vec2 uv = packedUVfrom1D(
        ${i[0]}, ${i[1]}, index);
      return ${o.texture2D}(${e}, uv);
    }
  `}function IU(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return`
      float ${s}(int index) {
        ${Bo(n)}
      }
    `;const r=n.shapeInfo.texShape,o=r[0],i=r[1];if(i===1&&o===1)return`
      float ${s}(int index) {
        return sampleTexture(${e}, halfCR);
      }
    `;const a=Yr(e);return i===1?t?`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / float(${e}TexShape[0]));
        return sampleTexture(${e}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / ${o}.0);
        return sampleTexture(${e}, uv);
      }
    `:o===1?t?`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / float(${e}TexShape[1]), 0.5);
        return sampleTexture(${e}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / ${i}.0, 0.5);
        return sampleTexture(${e}, uv);
      }
    `:t?`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${e}TexShape[0], ${e}TexShape[1], index + ${a});
      return sampleTexture(${e}, uv);
    }
  `:`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${o}, ${i}, index + ${a});
      return sampleTexture(${e}, uv);
    }
  `}function SU(n,t){const e=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=n.shapeInfo.texShape,i=o[0],a=o[1],l=en();if(o!=null&&Pt(e,o))return t?`
      vec4 ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);

        return ${l.texture2D}(${s}, uv);
      }
    `:`
      vec4 ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}.0, ${i}.0);

        return ${l.texture2D}(${s}, uv);
      }
    `;if(t)return`
    vec4 ${r}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${l.texture2D}(${s}, uv);
    }
  `;const c=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)],u=Math.ceil(e[1]/2);return`
    vec4 ${r}(int row, int col) {
      vec2 uv = packedUVfrom2D(${u}, ${c[0]}, ${c[1]}, row, col);
      return ${l.texture2D}(${s}, uv);
    }
  `}function NU(n,t){const e=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=n.shapeInfo.texShape;if(o!=null&&Pt(e,o)){if(t)return`
      float ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `;const d=o[0],f=o[1];return`
    float ${r}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${f}.0, ${d}.0);
      return sampleTexture(${s}, uv);
    }
  `}const{newShape:i,keptDims:a}=ir(e),l=i;if(l.length<e.length){const d=Vo(n,l),f=["row","col"];return`
      ${zo(d,t)}
      float ${r}(int row, int col) {
        return ${r}(${Wo(f,a)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${r}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${e[1]}, 1)));
        ${Bo(n)}
      }
    `;const c=o[0],u=o[1],h=Yr(s);return u===1?t?`
      float ${r}(int row, int col) {
        float index = dot(vec3(row, col, ${h}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${s}TexShape[0]));
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${r}(int row, int col) {
      float index = dot(vec3(row, col, ${h}), vec3(${e[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${c}.0);
      return sampleTexture(${s}, uv);
    }
  `:c===1?t?`
      float ${r}(int row, int col) {
        float index = dot(vec3(row, col, ${h}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${s}TexShape[1]), 0.5);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${r}(int row, int col) {
      float index = dot(vec3(row, col, ${h}), vec3(${e[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${s}, uv);
    }
  `:t?`
      float ${r}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s}Shape[1] + col + ${h};
        vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
        return sampleTexture(${s}, uv);
      }
    `:`
  float ${r}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${e[1]} + col + ${h};
    vec2 uv = uvFromFlat(${c}, ${u}, index);
    return sampleTexture(${s}, uv);
  }
`}function TU(n,t){const e=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=n.shapeInfo.texShape,i=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];if(e[0]===1){const d=e.slice(1),f=[1,2],p=Vo(n,d),m=["b","row","col"];return`
        ${fC(p,t)}
        vec4 ${r}(int b, int row, int col) {
          return ${r}(${Wo(m,f)});
        }
      `}const a=en();if(t)return`
    vec4 ${r}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `;const l=i[0],c=i[1],u=Math.ceil(e[2]/2),h=u*Math.ceil(e[1]/2);return`
    vec4 ${r}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${l}, ${c}, ${h}, ${u}, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `}function EU(n,t){const e=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=e[1]*e[2],i=e[2],{newShape:a,keptDims:l}=ir(e),c=a;if(c.length<e.length){const m=Vo(n,c),g=["row","col","depth"];return`
        ${zo(m,t)}
        float ${r}(int row, int col, int depth) {
          return ${r}(${Wo(g,l)});
        }
      `}if(n.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${o}, ${i}, 1)));
        ${Bo(n)}
      }
    `;const u=n.shapeInfo.texShape,h=u[0],d=u[1],f=n.shapeInfo.flatOffset;if(d===o&&f==null)return t?`
      float ${r}(int row, int col, int depth) {
        int stride1 = ${s}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
        float ${r}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${i}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${d}.0, ${h}.0);
          return sampleTexture(${s}, uv);
        }
      `;if(d===i&&f==null)return t?`
      float ${r}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${s}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${e[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${d}.0, ${h}.0);
      return sampleTexture(${s}, uv);
    }
  `;const p=Yr(s);return t?`
    float ${r}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${s}Shape[1] * ${s}Shape[2];
      int stride1 = ${s}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${p};
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
      return sampleTexture(${s}, uv);
    }
    `:`
      float ${r}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${o} + col * ${i} + depth + ${p};
        vec2 uv = uvFromFlat(${h}, ${d}, index);
        return sampleTexture(${s}, uv);
      }
  `}function RU(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),r=en();if(t)return`
    vec4 ${s}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${e}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${e}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${e}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${e}TexShape[0]) / 2.0), ceil(float(${e}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${r.texture2D}(${e}, uv);
    }
  `;const o=n.shapeInfo.logicalShape,i=o.length,a=n.shapeInfo.texShape,l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],c=l[0],u=l[1],h=Math.ceil(o[i-1]/2);let d=h*Math.ceil(o[i-2]/2),f="int b, int row, int col",p=`b * ${d} + (row / 2) * ${h} + (col / 2)`;for(let m=2;m<i-1;m++)f=`int b${m}, `+f,d*=o[i-m-1],p=`b${m} * ${d} + `+p;return`
    vec4 ${s}(${f}) {
      int index = ${p};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${c});
      return ${r.texture2D}(${e}, uv);
    }
  `}function AU(n,t){const e=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=e[3],i=e[2]*o,a=e[1]*i,{newShape:l,keptDims:c}=ir(e);if(l.length<e.length){const b=Vo(n,l),w=["row","col","depth","depth2"];return`
      ${zo(b,t)}
      float ${r}(int row, int col, int depth, int depth2) {
        return ${r}(${Wo(w,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${o}, 1)));
        ${Bo(n)}
      }
    `;const u=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,d=h[0],f=h[1],p=`int stride2 = ${s}Shape[3];`,m=`int stride1 = ${s}Shape[2] * stride2;`,g=`int stride0 = ${s}Shape[1] * stride1;`;if(f===a&&u==null)return t?`
      float ${r}(int row, int col, int depth, int depth2) {
        ${p}
        ${m}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${r}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${i}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${d}.0);
        return sampleTexture(${s}, uv);
      }
    `;if(f===o&&u==null)return t?`
      float ${r}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${s}Shape[1] * ${s}Shape[2], ${s}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${r}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${e[1]*e[2]}, ${e[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${d}.0);
        return sampleTexture(${s}, uv);
      }
    `;const x=Yr(s);return t?`
    float ${r}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${p}
      ${m}
      ${g}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index + ${x});
      return sampleTexture(${s}, uv);
    }
  `:`
    float ${r}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} +
          depth * ${o} + depth2;
      vec2 uv = uvFromFlat(${d}, ${f}, index + ${x});
      return sampleTexture(${s}, uv);
    }
  `}function DU(n){const t=n.shapeInfo.logicalShape,e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),r=t[4],o=t[3]*r,i=t[2]*o,a=t[1]*i,{newShape:l,keptDims:c}=ir(t);if(l.length<t.length){const m=Vo(n,l),g=["row","col","depth","depth2","depth3"];return`
      ${zo(m)}
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        return ${s}(${Wo(g,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${o}, ${r})) +
          depth3;
        ${Bo(n)}
      }
    `;const u=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,d=h[0],f=h[1];if(f===a&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${o}, ${r}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${d}.0);
        return sampleTexture(${e}, uv);
      }
    `;if(f===r&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${d}.0);
        return sampleTexture(${e}, uv);
      }
    `;const p=Yr(e);return`
    float ${s}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${o} +
          depth2 * ${r} + depth3 + ${p};
      vec2 uv = uvFromFlat(${d}, ${f}, index);
      return sampleTexture(${e}, uv);
    }
  `}function _U(n){const t=n.shapeInfo.logicalShape,e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),{newShape:r,keptDims:o}=ir(t);if(r.length<t.length){const g=Vo(n,r),x=["row","col","depth","depth2","depth3","depth4"];return`
      ${zo(g)}
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${s}(${Wo(x,o)});
      }
    `}const i=t[5],a=t[4]*i,l=t[3]*a,c=t[2]*l,u=t[1]*c;if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${c}, ${l}, ${a})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${Bo(n)}
      }
    `;const h=n.shapeInfo.flatOffset,d=n.shapeInfo.texShape,f=d[0],p=d[1];if(p===u&&h==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${c}, ${l}, ${a}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${e}, uv);
      }
    `;if(p===i&&h==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${e}, uv);
      }
    `;const m=Yr(e);return`
    float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${c} + depth * ${l} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${m};
      vec2 uv = uvFromFlat(${f}, ${p}, index);
      return sampleTexture(${e}, uv);
    }
  `}function Bo(n){const t=n.name,e=Y(n.shapeInfo.logicalShape);return e<2?`return ${t};`:`
    for (int i = 0; i < ${e}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function FU(n,t){const e=n.name,s=e.charAt(0).toUpperCase()+e.slice(1),r="get"+s+"AtOutCoords",o=n.shapeInfo.logicalShape.length,i=t.logicalShape.length,a=dC(n.shapeInfo.logicalShape,t.logicalShape),l=qt(i),c=i-o;let u;const h=["x","y","z","w","u","v"];o===0?u="":i<2&&a.length>=1?u="coords = 0;":u=a.map(b=>`coords.${h[b+c]} = 0;`).join(`
`);let d="";i<2&&o>0?d="coords":d=n.shapeInfo.logicalShape.map((b,w)=>`coords.${h[w+c]}`).join(", ");let f="return outputValue;";const m=Y(n.shapeInfo.logicalShape)===1,x=Y(t.logicalShape)===1;if(o===1&&!m&&!x)f=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(m&&!x)i===1?f=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:f=`
        return vec4(outputValue.x);
      `;else if(a.length){const b=o-2,w=o-1;a.indexOf(b)>-1&&a.indexOf(w)>-1?f="return vec4(outputValue.x);":a.indexOf(b)>-1?f="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf(w)>-1&&(f="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${r}() {
      ${l} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${s}(${d});
      ${f}
    }
  `}function OU(n,t){const e=n.name,s=e.charAt(0).toUpperCase()+e.slice(1),r="get"+s+"AtOutCoords",o=t.texShape,i=n.shapeInfo.texShape,a=n.shapeInfo.logicalShape.length,l=t.logicalShape.length;if(!n.shapeInfo.isUniform&&a===l&&n.shapeInfo.flatOffset==null&&Pt(i,o))return`
      float ${r}() {
        return sampleTexture(${e}, resultUV);
      }
    `;const c=qt(l),u=dC(n.shapeInfo.logicalShape,t.logicalShape),h=l-a;let d;const f=["x","y","z","w","u","v"];a===0?d="":l<2&&u.length>=1?d="coords = 0;":d=u.map(m=>`coords.${f[m+h]} = 0;`).join(`
`);let p="";return l<2&&a>0?p="coords":p=n.shapeInfo.logicalShape.map((m,g)=>`coords.${f[g+h]}`).join(", "),`
    float ${r}() {
      ${c} coords = getOutputCoords();
      ${d}
      return get${s}(${p});
    }
  `}function qt(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error(`GPU for rank ${n} is not yet supported`)}function hm(n,t,e){const{newShape:s,keptDims:r}=ir(t),o=t.length,i=n&&o===3&&t[0]===1,a=i?t.slice(1):s,l=!n&&o>1&&!Pt(t,e)&&s.length<o||i;return{useSqueezeShape:l,uniformShape:l?a:t,keptDims:r}}function Vo(n,t){const e=JSON.parse(JSON.stringify(n));return e.shapeInfo.logicalShape=t,e}function Wo(n,t){return t.map(e=>n[e]).join(", ")}function MU(n,t,e,s){const r=e.map((u,h)=>{const d={logicalShape:u.shape,texShape:u.isUniform?null:u.texData.texShape,isUniform:u.isUniform,isPacked:u.isUniform?!1:u.texData.isPacked,flatOffset:null};return u.texData!=null&&u.texData.slice!=null&&u.texData.slice.flatOffset>0&&(d.flatOffset=u.texData.slice.flatOffset),{name:t.variableNames[h],shapeInfo:d}}),o=r.map(u=>u.shapeInfo),i={logicalShape:s.shape,texShape:s.texData.texShape,isUniform:!1,isPacked:s.texData.isPacked,flatOffset:null},a=tU(r,i,t),l=EW(n.gl,a),c=n.createProgram(l);return X().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:o,outShapeInfo:i,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(n.buildVao(c),Object.assign({program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:o,outShapeInfo:i},mC(n,t,c)))}function mC(n,t,e){const s=[],r=[];let o,i,a,l=null,c=null;c=n.getUniformLocation(e,"NAN",!1),X().getNumber("WEBGL_VERSION")===1&&(l=n.getUniformLocation(e,"INFINITY",!1));const u=!1;for(const h of t.variableNames){const d={name:h,uniform:n.getUniformLocation(e,h,u),offset:n.getUniformLocation(e,`offset${h}`,u)};t.enableShapeUniforms&&(d.shape=n.getUniformLocation(e,`${h}Shape`,u),d.texShape=n.getUniformLocation(e,`${h}TexShape`,u)),s.push(d)}if(t.enableShapeUniforms&&(o=n.getUniformLocation(e,"outShape",u),a=n.getUniformLocation(e,"outShapeStrides",u),i=n.getUniformLocation(e,"outTexShape",u)),t.customUniforms)for(const h of t.customUniforms)r.push(n.getUniformLocation(e,h.name,u));return{variablesLocations:s,customUniformLocations:r,infLoc:l,nanLoc:c,outShapeLocation:o,outShapeStridesLocation:a,outTexShapeLocation:i}}function xx(n,t){if(n.length!==t.length)throw Error(`Binary was compiled with ${n.length} inputs, but was executed with ${t.length} inputs`);n.forEach((e,s)=>{const r=e.logicalShape,o=t[s],i=o.shape;if(!Pt(r,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${i} must match`);if(e.isUniform&&o.isUniform)return;const a=e.texShape,l=o.isUniform?null:o.texData.texShape;if(!Pt(a,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${l} must match`)})}function LU(n,t,e,s,r){t.program.enableShapeUniforms||(xx(t.inShapeInfos,e),xx([t.outShapeInfo],[s]));const o=s.texData.texture,i=s.texData.texShape;s.texData.isPacked?n.setOutputPackedMatrixTexture(o.texture,i[0],i[1]):n.setOutputMatrixTexture(o.texture,i[0],i[1]),n.setProgram(t.webGLProgram),n.bindVertexArray(t.webGLProgram.vao),X().getNumber("WEBGL_VERSION")===1&&t.infLoc!==null&&n.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&n.gl.uniform1f(t.nanLoc,NaN);for(let l=0;l<e.length;++l){const c=e[l],{uniform:u,offset:h,shape:d,texShape:f}=t.variablesLocations[l];if(d){const{uniformShape:p}=hm(t.program.packedInputs,c.shape,c.texData.texShape);switch(p.length){case 1:n.gl.uniform1iv(d,new Int32Array(p));break;case 2:n.gl.uniform2iv(d,new Int32Array(p));break;case 3:n.gl.uniform3iv(d,new Int32Array(p));break;case 4:n.gl.uniform4iv(d,new Int32Array(p));break}}if(f&&n.gl.uniform2i(f,c.texData.texShape[0],c.texData.texShape[1]),u!=null){if(c.isUniform){if(Y(c.shape)<2)n.gl.uniform1f(u,c.uniformValues[0]);else{let p=c.uniformValues;p instanceof Float32Array||(p=new Float32Array(p)),n.gl.uniform1fv(u,p)}continue}c.texData.slice!=null&&h!=null&&n.gl.uniform1i(h,c.texData.slice.flatOffset),n.setInputMatrixTexture(c.texData.texture.texture,u,l)}}const a=t.outShapeLocation;if(a)switch(s.shape.length){case 1:n.gl.uniform1iv(a,new Int32Array(s.shape));break;case 2:n.gl.uniform2iv(a,new Int32Array(s.shape));break;case 3:n.gl.uniform3iv(a,new Int32Array(s.shape));break;case 4:n.gl.uniform4iv(a,new Int32Array(s.shape));break}if(t.outShapeStridesLocation){const l=xt(s.shape);switch(s.shape.length){case 2:n.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(l));break;case 3:n.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(l));break;case 4:n.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(l));break}}if(t.outTexShapeLocation&&n.gl.uniform2i(t.outTexShapeLocation,s.texData.texShape[0],s.texData.texShape[1]),t.program.customUniforms&&r)for(let l=0;l<t.program.customUniforms.length;++l){const c=t.program.customUniforms[l],u=t.customUniformLocations[l],h=r[l];if(c.type==="float")n.gl.uniform1fv(u,h);else if(c.type==="vec2")n.gl.uniform2fv(u,h);else if(c.type==="vec3")n.gl.uniform3fv(u,h);else if(c.type==="vec4")n.gl.uniform4fv(u,h);else if(c.type==="int")n.gl.uniform1iv(u,h);else if(c.type==="ivec2")n.gl.uniform2iv(u,h);else if(c.type==="ivec3")n.gl.uniform3iv(u,h);else if(c.type==="ivec4")n.gl.uniform4iv(u,h);else throw Error(`uniform type ${c.type} is not supported yet.`)}n.executeProgram()}function PU(n,t,e){let s="";t.concat(e).forEach(i=>{const a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(n.enableShapeUniforms&&!i.isUniform){const l=i.texData.texShape,{useSqueezeShape:c,uniformShape:u,keptDims:h}=hm(n.packedInputs,i.shape,l);let d="",f="",p="";if(u.length===1&&n.packedInputs){const v=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)];d=`${v[0]>1}_${v[1]>1}`}else if(u.length===2&&!n.packedInputs)f=`${u[0]>1}_${u[1]>1}`;else if(u.length>2&&!n.packedInputs){const v=xt(u);p=`${v[0]===l[1]}_${v[v.length-1]===l[1]}`}const m=i.shape.length,g=u.length===2&&Pt(i.shape,l),x=Y(i.shape)===1,b=vo(i.shape,e.shape),w=!n.packedInputs&&m===e.shape.length&&Pt(l,e.texData.texShape),y=n.packedInputs||u.length>2?"":`${l[0]>1}_${l[1]>1}`;s+=`${m}_${w}_${c?h:""}_${u.length}_${x}_${b}_${g}_${d}_${f}_${p}_${y}_${a}`}else{const l=i.isUniform?"uniform":i.texData.texShape;s+=`${i.shape}_${l}_${a}`}});const r=n.userCode;let o=n.constructor.name;return o+="_"+s+"_"+r+`${X().getNumber("WEBGL_VERSION")}`,o}function He(n){return X().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&n<=4}class zU{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=ki.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=en();this.outputShape=t,this.enableShapeUniforms=He(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Gu(["r","c","d"],t):jr(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${e.output} = result;
      }
    `}}class BU{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=ki.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=en();this.outputShape=t,this.enableShapeUniforms=He(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Gu(["r","c","d"],t):jr(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${e.output} = result;
      }
    `}}class VU{constructor(t){this.variableNames=["A"],this.outTexUsage=wn.DOWNLOAD;const e=en();this.outputShape=t,this.userCode=`
      ${hC}

      void main() {
        float x = getAAtOutCoords();
        ${e.output} = encode_float(x);
      }
    `}}class WU{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=wn.DOWNLOAD;const e=en();this.outputShape=t,this.userCode=`
      ${hC}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${e.output} = encode_float(x);
      }
    `}}const UU={R:0,G:1,B:2,A:3};class bx{constructor(t,e=!1,s="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const r=en();this.outputShape=t,this.enableShapeUniforms=He(this.outputShape.length);let o="result";e&&(o="floor(result * 255. + 0.5)");let i="";for(let a=0;a<s.length;a++){const l=s[a];i+=`
          if(offset == ${a}) {
            result = values[${UU[l]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?um():cm(t)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${s.length});

        flatIndex = idiv(flatIndex, ${s.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${r.texture2D}(A, uv);
          ${i}
        }
        ${r.output} = vec4(${o}, 0., 0., 0.);
      }
    `}}class GU{constructor(t,e=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=en();this.outputShape=t,this.enableShapeUniforms=He(this.outputShape.length);let r="",o="result";e&&(o="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){const l=i*2+a;r+=`
          localCoords = coords;
          if(localCoords[2] + ${a} < ${this.enableShapeUniforms?"outShape[2]":`${t[2]}`}) {
          localCoords[2] += ${a};
          if (localCoords[1] + ${i} < ${this.enableShapeUniforms?"outShape[1]":`${t[1]}`}) {
            localCoords[1] += ${i};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${s.texture2D}(A, uv);

            if (offset == 0) {
              result[${l}] = values[0];
            } else if (offset == 1) {
              result[${l}] = values[1];
            } else if (offset == 2) {
              result[${l}] = values[2];
            } else {
              result[${l}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?um():cm(t)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${r}

          ${s.output} = ${o};
        }
    `}}function HU(n){const t=en(),e=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return TW(n,e)}function qU(n){const t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return _W(n,t)}function XU(n){const t=new Uint16Array([0,1,2,2,1,3]);return FW(n,t)}function qa(n,t,e,s,r,o){MW(t,e);const i=OW(n),a=n.TEXTURE_2D;return ct(n,()=>n.bindTexture(a,i)),ct(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)),ct(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),ct(n,()=>n.texParameteri(a,n.TEXTURE_MIN_FILTER,n.NEAREST)),ct(n,()=>n.texParameteri(a,n.TEXTURE_MAG_FILTER,n.NEAREST)),X().getNumber("WEBGL_VERSION")===1?ct(n,()=>n.texImage2D(a,0,s,t,e,0,r,o,null)):ct(n,()=>n.texStorage2D(a,1,s,t,e)),ct(n,()=>n.bindTexture(n.TEXTURE_2D,null)),{texture:i,texShape:[e,t]}}function gC(n){return n.internalFormatFloat}function KU(n,t,e,s){const[r,o]=Ga(t,e);return qa(n,r,o,gC(s),s.textureFormatFloat,n.FLOAT)}function xC(n){return n.internalFormatHalfFloat}function jU(n,t,e,s){const[r,o]=Ga(t,e);return qa(n,r,o,xC(s),s.textureFormatFloat,s.textureTypeHalfFloat)}function bC(n){return n.downloadTextureFormat}function YU(n,t,e,s){const[r,o]=Ga(t,e);return qa(n,r,o,bC(s),n.RGBA,n.UNSIGNED_BYTE)}function yC(n){return n.internalFormatPackedFloat}function ZU(n,t,e,s){const[r,o]=Po(t,e);return qa(n,r,o,yC(s),n.RGBA,n.FLOAT)}function wC(n){return n.internalFormatPackedHalfFloat}function JU(n,t,e,s){const[r,o]=Po(t,e);return qa(n,r,o,wC(s),n.RGBA,s.textureTypeHalfFloat)}function QU(n,t,e){return ct(n,()=>n.bindBuffer(n.ARRAY_BUFFER,e)),px(n,t,"clipSpacePos",e,3,20,0)&&px(n,t,"uv",e,2,20,12)}function tG(n,t,e,s,r,o){ct(n,()=>n.bindTexture(n.TEXTURE_2D,t));let i,a,l;r instanceof Uint8Array?(i=new Uint8Array(e*s*4),a=n.UNSIGNED_BYTE,l=n.RGBA):(i=new Float32Array(e*s*4),a=n.FLOAT,l=o.internalFormatPackedFloat),i.set(r),X().getNumber("WEBGL_VERSION")===2?ct(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,e,s,n.RGBA,a,i)):ct(n,()=>n.texImage2D(n.TEXTURE_2D,0,l,e,s,0,n.RGBA,a,i)),ct(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function eG(n,t,e){ct(n,()=>n.bindTexture(n.TEXTURE_2D,t)),e.data instanceof Uint8Array?X().getNumber("WEBGL_VERSION")===2?ct(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,e.width,e.height,n.RGBA,n.UNSIGNED_BYTE,e.data)):ct(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,e.width,e.height,0,n.RGBA,n.UNSIGNED_BYTE,e.data)):X().getNumber("WEBGL_VERSION")===2?ct(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,e)):ct(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e)),ct(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function nG(n,t,e,s){const r=n.createBuffer();ct(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,r));const a=4*4*t*e;return ct(n,()=>n.bufferData(n.PIXEL_PACK_BUFFER,a,n.STREAM_READ)),ct(n,()=>n.readPixels(0,0,e,t,n.RGBA,n.FLOAT,0)),ct(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,null)),r}function sG(n,t,e){const s=n,r=new Float32Array(e);return s.bindBuffer(s.PIXEL_PACK_BUFFER,t),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,r),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),r}function rG(n,t,e,s){const[r,o]=Ga(t,e),i=4,a=new Uint8Array(vW(t*e,i));return ct(n,()=>n.readPixels(0,0,r,o,s.downloadTextureFormat,n.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function oG(n,t,e,s,r,o,i,a){const l=n,c=new Float32Array(CW(o,i));return l.bindBuffer(l.PIXEL_PACK_BUFFER,t),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,c),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),c}function iG(n,t,e){const s=new Float32Array(t*e*4);return ct(n,()=>n.readPixels(0,0,e,t,n.RGBA,n.FLOAT,s)),s}class vh{constructor(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];const e=X().getNumber("WEBGL_VERSION");if(t!=null?(this.gl=t,bW(e,t)):this.gl=ts(e),t=this.gl,X().getNumber("WEBGL_VERSION")===2){const o=t;this.createVertexArray=()=>ct(o,()=>o.createVertexArray()),this.bindVertexArray=i=>ct(o,()=>o.bindVertexArray(i)),this.deleteVertexArray=i=>ct(o,()=>o.deleteVertexArray(i)),this.getVertexArray=()=>ct(o,()=>o.getParameter(o.VERTEX_ARRAY_BINDING))}else if(t!=null){const o=t.getExtension("OES_vertex_array_object");if(o==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>ct(t,()=>o.createVertexArrayOES()),this.bindVertexArray=i=>ct(t,()=>o.bindVertexArrayOES(i)),this.deleteVertexArray=i=>ct(t,()=>o.deleteVertexArrayOES(i)),this.getVertexArray=()=>ct(t,()=>t.getParameter(o.VERTEX_ARRAY_BINDING_OES))}let s="WEBGL_color_buffer_float";const r="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),X().getNumber("WEBGL_VERSION")===1){const o="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=cl(this.gl,o),Dn(this.gl,i))this.textureHalfFloatExtension=cl(this.gl,i);else if(X().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(s),Dn(this.gl,r))this.colorBufferHalfFloatExtension=cl(this.gl,r);else if(X().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(s="EXT_color_buffer_float",Dn(this.gl,s))this.colorBufferFloatExtension=this.gl.getExtension(s);else if(Dn(this.gl,r))this.colorBufferHalfFloatExtension=this.gl.getExtension(r);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=qU(this.gl),this.indexBuffer=XU(this.gl),this.framebuffer=LW(this.gl),this.textureConfig=lm(this.gl,this.textureHalfFloatExtension)}get debug(){return X().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const t=this.gl;ct(t,()=>t.finish()),ct(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,null)),ct(t,()=>t.deleteFramebuffer(this.framebuffer)),ct(t,()=>t.bindBuffer(t.ARRAY_BUFFER,null)),ct(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)),ct(t,()=>t.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(t,e){return this.throwIfDisposed(),KU(this.gl,t,e,this.textureConfig)}createFloat16MatrixTexture(t,e){return this.throwIfDisposed(),jU(this.gl,t,e,this.textureConfig)}createUnsignedBytesMatrixTexture(t,e){return this.throwIfDisposed(),YU(this.gl,t,e,this.textureConfig)}uploadPixelDataToTexture(t,e){this.throwIfDisposed(),eG(this.gl,t,e)}uploadDenseMatrixToTexture(t,e,s,r){this.throwIfDisposed(),tG(this.gl,t,e,s,r,this.textureConfig)}createFloat16PackedMatrixTexture(t,e){return this.throwIfDisposed(),JU(this.gl,t,e,this.textureConfig)}createPackedMatrixTexture(t,e){return this.throwIfDisposed(),ZU(this.gl,t,e,this.textureConfig)}deleteMatrixTexture(t){this.throwIfDisposed(),this.outputTexture===t&&(mx(this.gl,this.framebuffer),this.outputTexture=null),ct(this.gl,()=>this.gl.deleteTexture(t))}downloadByteEncodedFloatMatrixFromOutputTexture(t,e,s){return this.downloadMatrixDriver(t,()=>rG(this.gl,e,s,this.textureConfig))}downloadPackedMatrixFromBuffer(t,e,s,r,o,i){return oG(this.gl,t,e,s,r,o,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(t,e){return sG(this.gl,t,e)}createBufferFromTexture(t,e,s){this.bindTextureToFrameBuffer(t);const r=nG(this.gl,e,s,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){const t=this.createFence(this.gl);return this.pollFence(t)}createFence(t){let e,s;if(X().getBool("WEBGL_FENCE_API_ENABLED")){const r=t,o=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),s=()=>{const i=r.clientWaitSync(o,0,0);return i===r.ALREADY_SIGNALED||i===r.CONDITION_SATISFIED},e=o}else X().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),s=()=>this.isQueryAvailable(e,X().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):s=()=>!0;return{query:e,isFencePassed:s}}downloadMatrixFromPackedTexture(t,e,s){return this.downloadMatrixDriver(t,()=>iG(this.gl,e,s))}createProgram(t){this.throwIfDisposed();const e=this.gl;this.vertexShader==null&&(this.vertexShader=HU(e));const s=AW(e);ct(e,()=>e.attachShader(s,this.vertexShader)),ct(e,()=>e.attachShader(s,t)),DW(e,s);const r=Object.assign(s,{vao:this.createVertexArray()});return this.debug&&xh(e,r),r}buildVao(t){this.setProgram(t),this.bindVertexArray(t.vao);const e=this.gl;ct(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),QU(e,t,this.vertexBuffer)}deleteProgram(t){this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&(ct(this.gl,()=>this.gl.deleteProgram(t)),this.deleteVertexArray(t.vao))}setProgram(t){this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&xh(this.gl,this.program),ct(this.gl,()=>this.gl.useProgram(t))}getUniformLocation(t,e,s=!0){return this.throwIfDisposed(),s?zW(this.gl,t,e):BW(this.gl,t,e)}getAttributeLocation(t,e){return this.throwIfDisposed(),ct(this.gl,()=>this.gl.getAttribLocation(t,e))}getUniformLocationNoThrow(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)}setInputMatrixTexture(t,e,s){this.throwIfDisposed(),this.throwIfNoProgram(),VW(this.gl,t,e,s)}setOutputMatrixTexture(t,e,s){this.setOutputMatrixTextureDriver(t,s,e)}setOutputPackedMatrixTexture(t,e,s){this.throwIfDisposed();const[r,o]=Po(e,s);this.setOutputMatrixTextureDriver(t,r,o)}setOutputMatrixWriteRegion(t,e,s,r){this.setOutputMatrixWriteRegionDriver(s,t,r,e)}setOutputPackedMatrixWriteRegion(t,e,s,r){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&xh(this.gl,this.program),ul(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const t=this.gl;if(this.debug){const e=this.getVertexArray();console.assert(e===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}ct(t,()=>t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),ct(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=cl(this.gl,X().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(X().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const s=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=s.createQuery();return s.beginQuery(r.TIME_ELAPSED_EXT,o),o}const t=this.getQueryTimerExtensionWebGL1(),e=t.createQueryEXT();return t.beginQueryEXT(t.TIME_ELAPSED_EXT,e),e}endQuery(){if(X().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const e=this.gl,s=this.getQueryTimerExtensionWebGL2();e.endQuery(s.TIME_ELAPSED_EXT);return}const t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(t){return await tg(()=>this.disposed||this.isQueryAvailable(t,X().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(t,X().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(t,e){if(e===0)return null;if(e===2){const s=this.gl;return s.getQueryParameter(t,s.QUERY_RESULT)/1e6}else{const s=this.getQueryTimerExtensionWebGL1();return s.getQueryObjectEXT(t,s.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(t,e){if(e===0)return!0;if(e===2){const s=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=s.getQueryParameter(t,s.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint}else{const s=this.getQueryTimerExtensionWebGL1(),r=s.getQueryObjectEXT(t,s.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(s.GPU_DISJOINT_EXT)),r&&!this.disjoint}}pollFence(t){return new Promise(e=>{this.addItemToPoll(()=>t.isFencePassed(),()=>e())})}pollItems(){const t=aG(this.itemsToPoll.map(e=>e.isDoneFn));for(let e=0;e<=t;++e){const{resolveFn:s}=this.itemsToPoll[e];s()}this.itemsToPoll=this.itemsToPoll.slice(t+1)}addItemToPoll(t,e){if(this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1)return;let s;"setTimeoutCustom"in X().platform&&(s=X().platform.setTimeoutCustom.bind(X().platform)),tg(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,s)}bindTextureToFrameBuffer(t){this.throwIfDisposed(),bh(this.gl,t,this.framebuffer),this.debug&&ul(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(bh(this.gl,this.outputTexture,this.framebuffer),this.debug&&ul(this.gl)):mx(this.gl,this.framebuffer)}downloadMatrixDriver(t,e){this.bindTextureToFrameBuffer(t);const s=e();return this.unbindTextureToFrameBuffer(),s}setOutputMatrixTextureDriver(t,e,s){this.throwIfDisposed();const r=this.gl;bh(r,t,this.framebuffer),this.debug&&ul(r),this.outputTexture=t,ct(r,()=>r.viewport(0,0,e,s)),ct(r,()=>r.scissor(0,0,e,s))}setOutputMatrixWriteRegionDriver(t,e,s,r){this.throwIfDisposed(),ct(this.gl,()=>this.gl.scissor(t,e,s,r))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function aG(n){let t=0;for(;t<n.length&&n[t]();++t);return t-1}const{addImpl:lG,bincountImpl:vC,bincountReduceImpl:cG,bitwiseAndImpl:uG,castImpl:hG,ceilImpl:dG,concatImpl:fG,equalImpl:pG,expImpl:mG,expm1Impl:gG,floorImpl:xG,gatherNdImpl:bG,gatherV2Impl:yG,greaterImpl:wG,greaterEqualImpl:vG,lessImpl:CG,lessEqualImpl:$G,linSpaceImpl:kG,logImpl:IG,maxImpl:SG,maximumImpl:NG,minimumImpl:TG,multiplyImpl:EG,negImpl:RG,notEqualImpl:AG,prodImpl:DG,raggedGatherImpl:_G,raggedRangeImpl:FG,raggedTensorToTensorImpl:OG,rangeImpl:MG,rsqrtImpl:LG,scatterImpl:PG,sigmoidImpl:zG,simpleAbsImpl:CC,sliceImpl:BG,sparseFillEmptyRowsImpl:VG,sparseReshapeImpl:WG,sparseSegmentReductionImpl:$C,sqrtImpl:UG,staticRegexReplaceImpl:GG,stridedSliceImpl:HG,stringNGramsImpl:qG,stringSplitImpl:XG,stringToHashBucketFastImpl:KG,subImpl:jG,tileImpl:YG,topKImpl:ZG,transposeImpl:dm,uniqueImpl:JG}=e3;function kC(n,t){return["x","y","z","w","u","v"].slice(0,t).map(e=>`${n}.${e}`)}function Je(n,t){return t===1?[n]:kC(n,t)}function QG(n,t){if(n===1)return"rc";let e="";for(let s=0;s<n;s++)e+=t[s],s<n-1&&(e+=",");return e}class tH{constructor(t){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.enableShapeUniforms=He(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const e=Je("rc",this.rank),s=qt(this.rank),r=this.getOutOfBoundsCondition(e),o=this.getSetup(e),i=this.getOutput(e);this.userCode=`
        void main() {
          ${s} rc = getOutputCoords();

          if(${r}) {
            setOutput(vec4(0));
          } else {
            ${o}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(t){const e=[];for(let s=0;s<=1;s++)for(let r=0;r<=1;r++){let o=`${s===0?"r":"rp1"}, ${r===0?"c":"cp1"}`;for(let i=2;i<this.rank;i++)o=`${t[t.length-1-i]},`+o;e.push(o)}return e}getOutOfBoundsCondition(t){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let e="";for(let s=this.rank-2;s<this.rank;s++)e+=`${t[s]} >= ${this.enableShapeUniforms?`outShape[${s}]`:this.outputShape[s]}`,s<this.rank-1&&(e+="||");return e}getSetup(t){if(this.rank===1)return"";const e=t.slice(-2),s=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],r=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${e[0]};
      int c = ${e[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${s};
      bool rEdge = rp1 >= ${r};
    `}getOutput(t){const e=this.getSourceCoordsArr(t);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${e[0]}),
            cEdge ? 0. : getA(${e[1]}),
            rEdge ? 0. : getA(${e[2]}),
            rEdge || cEdge ? 0. : getA(${e[3]})`}}class IC{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=t,this.enableShapeUniforms=He(this.outputShape.length);let s="";for(let r=0;r<4;r++){let o="thisRC = rc;";r%2===1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),s+=`
        ${o}
        ${r>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${r}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${r>0?"}":""}
      `}this.userCode=`
      ${eH(e,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?um():cm(t)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":t[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":t[2]};

        ${s}

        setOutput(result);
      }
    `}}function eH(n,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?QW(["r","c","d"],"inputShape"):jr(["r","c","d"],n)}
      return ivec3(r, c, d);
    }
  `}class nH{constructor(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(t,e,s){const r=wx(e,s),o=vx(t,r,s);o in this.freeTextures||(this.freeTextures[o]=[]),o in this.usedTextures||(this.usedTextures[o]=[]);const i=yx(t,r,this.gpgpu.gl,this.gpgpu.textureConfig,s);if(this.freeTextures[o].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();const l=this.freeTextures[o].pop();return this.usedTextures[o].push(l),l}let a;return r===Fe.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):r===Fe.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):r===Fe.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):r===Fe.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):r===Fe.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[o].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(t,e,s,r){if(this.freeTextures==null)return;const o=wx(s,r),i=vx(e,o,r);i in this.freeTextures||(this.freeTextures[i]=[]);const a=yx(e,o,this.gpgpu.gl,this.gpgpu.textureConfig,r),l=X().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");l!==-1&&this._numBytesAllocated>l?(this.gpgpu.deleteMatrixTexture(t.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(t),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;const c=this.usedTextures[i],u=c&&c.indexOf(t);if(u==null||u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");c[u]=c[c.length-1],c.pop(),this.log()}log(){if(!this.logEnabled)return;const t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${t})`);const e=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*e)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const t in this.freeTextures)this.freeTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(const t in this.usedTextures)this.usedTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function sH(n,t){const e=n;if(t===e.R32F)return 4;if(t===e.R16F)return 2;if(t===e.RGBA32F)return 16;if(t===n.RGBA)return 16;if(t===e.RGBA16F)return 8;if(t===e.RGBA8)return 4;throw new Error(`Unknown internal format ${t}`)}function yx(n,t,e,s,r){const o=rH(t,s);let i;if(r){const[l,c]=Po(n[0],n[1]);i=l*c}else{const[l,c]=Ga(n[0],n[1]);i=l*c}const a=sH(e,o);return i*a}function rH(n,t){switch(n){case Fe.PACKED_2X2_FLOAT32:return yC(t);case Fe.PACKED_2X2_FLOAT16:return wC(t);case Fe.UNPACKED_FLOAT32:return gC(t);case Fe.UNPACKED_FLOAT16:return xC(t);case Fe.PACKED_4X1_UNSIGNED_BYTE:return bC(t);default:throw new Error(`Unknown physical texture type ${n}`)}}function oH(n){return X().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?n?Fe.PACKED_2X2_FLOAT32:Fe.UNPACKED_FLOAT32:n?Fe.PACKED_2X2_FLOAT16:Fe.UNPACKED_FLOAT16}function wx(n,t){if(n===wn.UPLOAD)return Fe.PACKED_2X2_FLOAT32;if(n===wn.RENDER||n==null)return oH(t);if(n===wn.DOWNLOAD||n===wn.PIXELS)return Fe.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${n}`)}function vx(n,t,e){return`${n[0]}_${n[1]}_${t}_${e}`}class us{constructor(t,e){this.variableNames=["A"],this.outputShape=t,this.enableShapeUniforms=He(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${e}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const Ln="if (isnan(x)) return x;",iH="return x;",Cx="return abs(x);",aH="return (x >= 0.0) ? x : (exp(x) - 1.0);",lH=Ln+`
  return (x < 0.0) ? 0.0 : x;
`,cH=Ln+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Gs="return x;",uH="return 1.0 / (1.0 + exp(-1.0 * x));";const hH="return x;",dH=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,fH=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,pH=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,mH="return 1.0 / (1.0 + exp(-1.0 * x));";class Ks{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.enableShapeUniforms=He(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${e}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}class gH{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=t,this.enableShapeUniforms=He(this.outputShape.length);const e=t.length,s=Je("rc",e),r=qt(e),o=QG(e,s),i=s.slice(-2),a=e<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${r} rc = getOutputCoords();
        vec4 packedInput = getA(${o});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}}const xH=Qb,bH=1e-7,yH=1e-4,fl={};function wH(n){return n in fl||(fl[n]={}),fl[n]}const vH=X().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),CH=600;function $H(){return X().global.screen==null?1024:X().global.screen.height*X().global.screen.width*window.devicePixelRatio*CH/1024/1024}class Hu extends Md{nextDataId(){return Hu.nextDataId++}constructor(t){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!X().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let e;if(t!=null){if(t instanceof vh)e=t;else{const s=ts(X().getNumber("WEBGL_VERSION"),t);e=new vh(s)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const s=ts(X().getNumber("WEBGL_VERSION"));e=new vh(s),this.binaryCache=wH(X().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=e,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new nH(this.gpgpu),this.numMBBeforeWarning=$H(),this.texData=new S0(this,os())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(t,e,s,r,o,i){const a=this.makeTensorInfo(e,s),l=this.texData.get(a.dataId);l.isPacked=!1,l.texture={texture:t,texShape:[r,o]},l.texShape=[r,o];const c=hl(e),u=new bx(c,!1,i),h=this.runWebGLProgram(u,[a],s,[[r,o]]);return h.shape=e,l.texture=null,this.disposeIntermediateTensorInfo(a),h.dataId}write(t,e,s){if((X().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||X().getBool("DEBUG"))&&this.checkNumericalProblems(t),s==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const r={id:this.nextDataId()};return this.texData.set(r,{shape:e,dtype:s,values:t,usage:wn.UPLOAD,refCount:1}),r}refCount(t){return this.texData.has(t)?this.texData.get(t).refCount:0}incRef(t){const e=this.texData.get(t);e.refCount++}decRef(t){if(this.texData.has(t)){const e=this.texData.get(t);e.refCount--}}move(t,e,s,r,o){if(X().getBool("DEBUG")&&this.checkNumericalProblems(e),r==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:s,dtype:r,values:e,usage:wn.UPLOAD,refCount:o})}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}readSync(t){const e=this.texData.get(t),{values:s,dtype:r,complexTensorInfos:o,slice:i,shape:a,isPacked:l}=e;if(i!=null){let d;l?d=new Ks(a,Gs):d=new us(a,Gs);const f=this.runWebGLProgram(d,[{dataId:t,shape:a,dtype:r}],r),p=this.readSync(f.dataId);return this.disposeIntermediateTensorInfo(f),p}if(s!=null)return this.convertAndCacheOnCPU(t);if(r==="string")return s;const c=this.activeTimers!=null;let u;c&&(u=sn());let h;if(r==="complex64"){const d=this.readSync(o.real.dataId),f=this.readSync(o.imag.dataId);h=Os(d,f)}else h=this.getValuesFromTexture(t);return c&&(this.downloadWaitMs+=sn()-u),this.convertAndCacheOnCPU(t,h)}async read(t){if(this.pendingRead.has(t)){const p=this.pendingRead.get(t);return new Promise(m=>p.push(m))}const e=this.texData.get(t),{values:s,shape:r,slice:o,dtype:i,complexTensorInfos:a,isPacked:l}=e;if(o!=null){let p;l?p=new Ks(r,Gs):p=new us(r,Gs);const m=this.runWebGLProgram(p,[{dataId:t,shape:r,dtype:i}],i),g=this.read(m.dataId);return this.disposeIntermediateTensorInfo(m),g}if(s!=null)return this.convertAndCacheOnCPU(t);if(X().getBool("DEBUG")&&!X().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&X().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let c=null,u;if(i!=="complex64"&&X().get("WEBGL_BUFFER_SUPPORTED")){u=this.decode(t);const p=this.texData.get(u.dataId);c=this.gpgpu.createBufferFromTexture(p.texture.texture,...ll(r))}this.pendingRead.set(t,[]),i!=="complex64"&&await this.gpgpu.createAndWaitForFence();let h;if(i==="complex64"){const p=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),m=p[0],g=p[1];h=Os(m,g)}else if(c==null)h=this.getValuesFromTexture(t);else{const p=Y(r);h=this.gpgpu.downloadFloat32MatrixFromBuffer(c,p)}if(u!=null&&this.disposeIntermediateTensorInfo(u),c!=null){const p=this.gpgpu.gl;ct(p,()=>p.deleteBuffer(c))}const d=this.convertAndCacheOnCPU(t,h),f=this.pendingRead.get(t);return this.pendingRead.delete(t),f.forEach(p=>p(d)),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t)&&os().removeDataId(t,this),this.pendingDeletes--),d}readToGPU(t,e={}){const s=this.texData.get(t),{values:r,shape:o,slice:i,dtype:a,isPacked:l,texture:c}=s;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let f;l?f=new Ks(o,Gs):f=new us(o,Gs);const p=this.runWebGLProgram(f,[{dataId:t,shape:o,dtype:a}],a),m=this.readToGPU(p,e);return this.disposeIntermediateTensorInfo(p),m}if(c==null)throw r!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const u=this.decode(t,e.customTexShape),h=os().makeTensorFromTensorInfo(u),d=this.texData.get(u.dataId);return Object.assign({tensorRef:h},d.texture)}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const s=e.map(r=>tr(r));return Nt(t.shape,t.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return Nt(t.shape,t.dtype,e)}checkNumericalProblems(t){if(t!=null)for(let e=0;e<t.length;e++){const s=t[e];if(!SW(s))throw X().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${s} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${s} cannot be represented on this device.`)}}getValuesFromTexture(t){const{shape:e,dtype:s,isPacked:r}=this.texData.get(t),o=Y(e);if(X().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const d=this.decode(t),f=this.texData.get(d.dataId),p=this.gpgpu.downloadMatrixFromPackedTexture(f.texture.texture,...ll(e)).subarray(0,o);return this.disposeIntermediateTensorInfo(d),p}const i=X().getBool("WEBGL_PACK")&&r===!0,a=i?hl(e):e,l=i?new WU(a):new VU(a),c=this.runWebGLProgram(l,[{shape:a,dtype:s,dataId:t}],"float32"),u=this.texData.get(c.dataId),h=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,o);return this.disposeIntermediateTensorInfo(c),h}timerAvailable(){return X().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(t){const e=this.activeTimers,s=[];let r=!1;this.programTimersStack==null?(this.programTimersStack=s,r=!0):this.activeTimers.push(s),this.activeTimers=s,t();const o=Rr(this.activeTimers.map(l=>l.query)).filter(l=>l!=null),i=Rr(this.activeTimers.map(l=>l.name)).filter(l=>l!=null);this.activeTimers=e,r&&(this.programTimersStack=null);const a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(X().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const l=await Promise.all(o);a.kernelMs=lN(l),a.getExtraProfileInfo=()=>l.map((c,u)=>({name:i[u],ms:c})).map(c=>`${c.name}: ${c.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return X().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:sn(),endMs:null}}endTimer(t){return X().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=sn(),t)}async getQueryTime(t){if(X().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(t);const e=t;return e.endMs-e.startMs}disposeData(t,e=!1){if(this.pendingDisposal.has(t))return!1;if(!this.texData.has(t))return!0;if(e?this.texData.get(t).refCount=0:this.texData.get(t).refCount--,!e&&this.texData.get(t).refCount>0)return!1;if(this.pendingRead.has(t))return this.pendingDisposal.add(t),this.pendingDeletes++,!1;this.releaseGPUData(t);const{complexTensorInfos:s}=this.texData.get(t);return s!=null&&(this.disposeData(s.real.dataId,e),this.disposeData(s.imag.dataId,e)),this.texData.delete(t),!0}releaseGPUData(t){const{texture:e,dtype:s,texShape:r,usage:o,isPacked:i,slice:a}=this.texData.get(t),l=a&&a.origDataId||t,c=this.dataRefCount.get(l);c>1?this.dataRefCount.set(l,c-1):(this.dataRefCount.delete(l),e!=null&&(this.numBytesInGPU-=this.computeBytes(r,s),this.textureManager.releaseTexture(e,r,o,i)));const u=this.texData.get(t);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(t){return this.uploadToGPU(t),this.texData.get(t).texture.texture}getDataInfo(t){return this.texData.get(t)}shouldExecuteOnCPU(t,e=vH){return X().getBool("WEBGL_CPU_FORWARD")&&t.every(s=>this.texData.get(s.dataId).texture==null&&Y(s.shape)<e)}getGPGPUContext(){return this.gpgpu}where(t){yn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const e=t.dataSync();return xH(t.shape,e)}packedUnaryOp(t,e,s){const r=new Ks(t.shape,e),o=this.compileAndRun(r,[t],s);return os().makeTensorFromTensorInfo(o)}abs(t){if(this.shouldExecuteOnCPU([t])&&t.dtype!=="complex64"){const r=CC(this.texData.get(t.dataId).values);return this.makeOutput(t.shape,t.dtype,r)}if(X().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Cx,t.dtype);const e=new us(t.shape,Cx),s=this.compileAndRun(e,[t]);return os().makeTensorFromTensorInfo(s)}makeTensorInfo(t,e,s){let r;if(e==="string"&&s!=null&&s.length>0&&Ai(s[0])){const o=s.map(i=>Ys(i));r=this.write(o,t,e)}else r=this.write(s,t,e);return this.texData.get(r).usage=null,{dataId:r,shape:t,dtype:e}}makeOutput(t,e,s){return os().makeTensorFromTensorInfo(this.makeTensorInfo(t,e,s),this)}unpackTensor(t){const e=new gH(t.shape);return this.runWebGLProgram(e,[t],t.dtype)}packTensor(t){const e=new tH(t.shape);return this.runWebGLProgram(e,[t],t.dtype,null,!0)}packedReshape(t,e){const s=[No(t.shape),...To(t.shape)],r={dtype:t.dtype,shape:s,dataId:t.dataId},o=[No(e),...To(e)],i=new IC(o,s),a=!0,l=[s],c=this.runWebGLProgram(i,[r],t.dtype,l,a);return{dataId:c.dataId,shape:e,dtype:c.dtype}}decode(t,e){const s=this.texData.get(t),{isPacked:r,shape:o,dtype:i}=s;if(e!=null){const d=Y(o),f=e[0]*e[1]*4;T(d<=f,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const a=hl(o);let l;r?l=new BU(a):l=new zU(a);const c=!0,u=[e??ll(a)],h=this.runWebGLProgram(l,[{shape:a,dtype:i,dataId:t}],i,u,c,e);return{dtype:i,shape:o,dataId:h.dataId}}runWebGLProgram(t,e,s,r,o=!1,i){const a=this.makeTensorInfo(t.outputShape,s),l=this.texData.get(a.dataId);if(t.packedOutput&&(l.isPacked=!0),t.outPackingScheme===ki.DENSE){const x=i??ll(t.outputShape);l.texShape=x.map(b=>b*2)}if(t.outTexUsage!=null&&(l.usage=t.outTexUsage),Y(a.shape)===0)return l.values=Be(a.dtype,0),a;const c=[],u=e.map(x=>{if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let b=this.texData.get(x.dataId);if(b.texture==null){if(!t.packedInputs&&Y(x.shape)<=X().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:b.values};t.packedInputs&&(b.isPacked=!0,b.shape=x.shape)}if(this.uploadToGPU(x.dataId),!!b.isPacked!=!!t.packedInputs)x=b.isPacked?this.unpackTensor(x):this.packTensor(x),c.push(x),b=this.texData.get(x.dataId);else if(b.isPacked&&!dc(b.shape,x.shape)){const w=x,y=x.shape;x.shape=b.shape,x=this.packedReshape(x,y),c.push(x),b=this.texData.get(x.dataId),w.shape=y}return{shape:x.shape,texData:b,isUniform:!1}});this.uploadToGPU(a.dataId);const h={shape:a.shape,texData:l,isUniform:!1},d=PU(t,u,h),f=this.getAndSaveBinary(d,()=>MU(this.gpgpu,t,u,h)),p=this.activeTimers!=null;let m;p&&(m=this.startTimer()),X().get("ENGINE_COMPILE_ONLY")||LU(this.gpgpu,f,u,h,r),c.forEach(x=>this.disposeIntermediateTensorInfo(x)),p&&(m=this.endTimer(m),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(m)}));const g=X().getNumber("WEBGL_FLUSH_THRESHOLD");if(g>0){const x=sn();x-this.lastGlFlushTime>g&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=x)}if(!X().getBool("WEBGL_LAZILY_UNPACK")&&l.isPacked&&o===!1){const x=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),x}return a}compileAndRun(t,e,s,r,o=!1){return s=s||e[0].dtype,this.runWebGLProgram(t,e,s,r,o)}getAndSaveBinary(t,e){return t in this.binaryCache||(this.binaryCache[t]=e()),this.binaryCache[t]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(X().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=G(()=>{if(!X().get("WEBGL_RENDER_FLOAT32_ENABLED")){const t=X().getBool("DEBUG");X().set("DEBUG",!1);const e=this.abs(Lt(1e-8)).dataSync()[0];if(X().set("DEBUG",t),e>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?bH:yH}uploadToGPU(t){const e=this.texData.get(t),{shape:s,dtype:r,values:o,texture:i,usage:a,isPacked:l}=e;if(i!=null)return;const c=this.activeTimers!=null;let u;c&&(u=sn());let h=e.texShape;if(h==null&&(h=GW(s,l),e.texShape=h),o!=null){const d=hl(s);let f,p=h[1],m=h[0];const g=o instanceof Uint8Array||o instanceof Uint8ClampedArray;(l||!g)&&([p,m]=Po(h[0],h[1])),l?f=new GU(d,g):f=new bx(d,g);const x=g?[m,p]:h,b=this.makeTensorInfo(x,r),w=this.texData.get(b.dataId);g?w.usage=wn.PIXELS:w.usage=wn.UPLOAD,w.texShape=x,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),p,m,o);const y=[[m,p]],$=this.runWebGLProgram(f,[b],r,y,!0),N=this.texData.get($.dataId);e.texShape=N.texShape,e.isPacked=N.isPacked,e.usage=N.usage,X().get("ENGINE_COMPILE_ONLY")?this.disposeData($.dataId):(e.texture=N.texture,e.values=null,this.texData.delete($.dataId)),this.disposeIntermediateTensorInfo(b),c&&(this.uploadWaitMs+=sn()-u)}else{const d=this.acquireTexture(h,a,r,l);e.texture=d}}convertAndCacheOnCPU(t,e){const s=this.texData.get(t),{dtype:r}=s;return e!=null&&(s.values=kH(e,r)),s.values}acquireTexture(t,e,s,r){if(this.numBytesInGPU+=this.computeBytes(t,s),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const o=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${o} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(t,e,r)}computeBytes(t,e){return t[0]*t[1]*Wl(e)}checkCompileCompletion(){for(const[,t]of Object.entries(this.binaryCache))this.checkCompletion_(t)}async checkCompileCompletionAsync(){const t=[];if(this.gpgpu.parallelCompilationExtension){for(const[,e]of Object.entries(this.binaryCache))t.push(this.checkCompletionAsync_(e));return Promise.all(t)}else{for(const[,e]of Object.entries(this.binaryCache)){const s=new Promise(r=>{try{this.checkCompletion_(e),r(!0)}catch(o){throw o}});t.push(s)}return Promise.all(t)}}async checkCompletionAsync_(t){return this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(t):(await fy(),this.checkCompletionAsync_(t))}checkCompletion_(t){if(this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(t.webGLProgram)),this.gpgpu.gl.getShaderParameter(t.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(uC(t.source,this.gpgpu.gl.getShaderInfoLog(t.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const t of Object.values(this.binaryCache)){this.gpgpu.buildVao(t.webGLProgram);const{variablesLocations:e,customUniformLocations:s,infLoc:r,nanLoc:o,outShapeLocation:i,outShapeStridesLocation:a,outTexShapeLocation:l}=mC(this.gpgpu,t.program,t.webGLProgram);t.variablesLocations=e,t.customUniformLocations=s,t.infLoc=r,t.nanLoc=o,t.outShapeLocation=i,t.outShapeStridesLocation=a,t.outTexShapeLocation=l}}createTensorFromGPUData(t,e,s){t.channels=t.channels||"RGBA";const{texture:r,height:o,width:i,channels:a}=t,l=os().backend;if(!l.gpgpu.gl.isTexture(r))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");const c=l.writeTexture(r,e,s,o,i,a);return os().makeTensorFromDataId(c,e,s,l)}}Hu.nextDataId=0;function kH(n,t){if(t==="float32"||t==="complex64")return n;if(t==="int32"||t==="bool"){const e=t==="int32"?new Int32Array(n.length):new Uint8Array(n.length);for(let s=0;s<e.length;++s)e[s]=Math.round(n[s]);return e}else throw new Error(`Unknown dtype ${t}`)}pb()&&bb("webgl",()=>new Hu,2);const fm=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class Wr{constructor(t,e,s){this.variableNames=["A","B"],this.outputShape=kt(e,s),this.enableShapeUniforms=He(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${t}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}const Zr=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class Uo{constructor(t,e,s,r=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=kt(e,s);const o=this.outputShape.length;this.enableShapeUniforms=He(o);let i="";if(r)if(o===0||Y(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${qt(o)} coords = getOutputCoords();
        `,o===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const l=Je("coords",o);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${l[o-2]} + 1) >= outShape[${o} - 2];
            bool nextColOutOfBounds =
              (${l[o-1]} + 1) >= outShape[${o} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${l[o-2]} + 1) >= ${this.outputShape[o-2]};
            bool nextColOutOfBounds =
              (${l[o-1]} + 1) >= ${this.outputShape[o-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${t}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}}function xn(n){const{inputs:t,backend:e}=n,{x:s}=t;return e.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const IH={kernelName:Ji,backendName:"webgl",kernelFunc:xn};function pr(n){const{inputs:t,backend:e}=n,{real:s,imag:r}=t,o=e.makeTensorInfo(s.shape,"complex64"),i=e.texData.get(o.dataId),a=xn({inputs:{x:s},backend:e}),l=xn({inputs:{x:r},backend:e});return i.complexTensorInfos={real:a,imag:l},o}const SH={kernelName:Yd,backendName:"webgl",kernelFunc:pr};const SC="return (a < 0.) ? b * a : a;",NC=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function NH(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{alpha:o}=s,i=e.makeTensorInfo([],"float32",ar(o,"float32")),a=X().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Uo(NC,r.shape,i.shape):new Wr(SC,r.shape,i.shape),l=e.runWebGLProgram(a,[r,i],"float32");return e.disposeIntermediateTensorInfo(i),l}const TH={kernelName:Bc,backendName:"webgl",kernelFunc:NH};const TC="return (a < 0.) ? b * a : a;",EC=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function EH(n){const{inputs:t,backend:e}=n,{x:s,alpha:r}=t,o=X().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Uo(EC,s.shape,r.shape):new Wr(TC,s.shape,r.shape);return e.runWebGLProgram(o,[s,r],"float32")}const RH={kernelName:ou,backendName:"webgl",kernelFunc:EH};const Go="if (isnan(x)) return x;";function _t({opSnippet:n,packedOpSnippet:t,cpuKernelImpl:e,dtype:s}){return({inputs:r,backend:o})=>{const{x:i}=r,a=o,l=s||i.dtype;if(a.shouldExecuteOnCPU([i])&&e!=null){const h=a.texData.get(i.dataId),d=e(h.values,l);return a.makeTensorInfo(i.shape,l,d)}const c=X().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&t!=null;let u;return c?u=new Ks(i.shape,t):u=new us(i.shape,n),a.runWebGLProgram(u,[i],l)}}function Pe({opSnippet:n,packedOpSnippet:t,checkOutOfBounds:e=!1,supportsComplex:s=!1,cpuKernelImpl:r,dtype:o}){return({inputs:i,backend:a})=>{const{a:l,b:c}=i,u=a;if(s&&l.dtype==="complex64"){const p=u.texData.get(l.dataId),m=u.texData.get(c.dataId),[g,x]=[[p.complexTensorInfos.real,m.complexTensorInfos.real],[p.complexTensorInfos.imag,m.complexTensorInfos.imag]].map(w=>{const[y,v]=w,$={dataId:y.dataId,dtype:y.dtype,shape:l.shape},N={dataId:v.dataId,dtype:v.dtype,shape:c.shape},S=new Wr(n,l.shape,c.shape);return u.runWebGLProgram(S,[$,N],mn(y.dtype,v.dtype))}),b=pr({inputs:{real:g,imag:x},backend:u});return u.disposeIntermediateTensorInfo(g),u.disposeIntermediateTensorInfo(x),b}const h=o||mn(l.dtype,c.dtype);if((l.dtype==="string"||c.dtype==="string"||u.shouldExecuteOnCPU([l,c]))&&r!=null){const p=u.texData.get(l.dataId).values,m=u.texData.get(c.dataId).values,g=l.dtype==="string"?Ms(p):p,x=l.dtype==="string"?Ms(m):m,[b,w]=r(l.shape,c.shape,g,x,h),y=u.makeTensorInfo(w,h),v=u.texData.get(y.dataId);return v.values=b,y}const d=X().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&t!=null;let f;return d?f=new Uo(t,l.shape,c.shape,e):f=new Wr(n,l.shape,c.shape),u.runWebGLProgram(f,[l,c],h)}}function Ii(n,t=!1){if(n==="linear")return t?hH:iH;if(n==="relu")return t?fH:lH;if(n==="elu")return t?dH:aH;if(n==="relu6")return t?pH:cH;if(n==="prelu")return t?EC:TC;if(n==="leakyrelu")return t?NC:SC;if(n==="sigmoid")return t?mH:uH;throw new Error(`Activation ${n} has not been implemented for the WebGL backend.`)}class RC{constructor(t,e,s,r=!1,o=!1,i=!1,a=null,l=!1,c=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s,this.enableShapeUniforms=He(this.outputShape.length);const u=r?t[1]:t[2],h=Math.ceil(u/2),d=r?"i * 2, rc.y":"rc.y, i * 2",f=o?"rc.z, i * 2":"i * 2, rc.z",p=r?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],m=o?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let g="",x="";a&&(l?g=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:c?g=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:g=`vec4 activation(vec4 x) {
          ${a}
        }`,x="result = activation(result);");const b=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),l&&this.variableNames.push("preluActivationWeights"),c&&this.variableNames.push("leakyreluAlpha");let w="rc.x",y="rc.x";t[0]<e[0]?w=`imod(rc.x, ${t[0]})`:e[0]<t[0]&&(y=`imod(rc.x, ${e[0]})`),this.userCode=`
      ${g}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${h}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${w};
        int batchB = ${y};
        for (int i = 0; i < ${h}; i++) {
          vec4 a = getMatrixA(batchA, ${d});
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${p[0]} * ${m[0]});
          result += (${p[1]} * ${m[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${b}

        ${x}

        setOutput(result);
      }
    `}}const $x={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class kx{constructor(t,e,s){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=kt(e,s),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${t}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}const Ix="return a * b;";function pm(n){const{inputs:t,backend:e}=n,{a:s,b:r}=t,o=mn(s.dtype,r.dtype);if(s.dtype==="complex64"){const a=e.texData.get(s.dataId),l=e.texData.get(r.dataId),c=new kx($x.REAL,s.shape,r.shape),u=new kx($x.IMAG,s.shape,r.shape),h=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:s.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:s.shape},{dataId:l.complexTensorInfos.real.dataId,dtype:l.complexTensorInfos.real.dtype,shape:r.shape},{dataId:l.complexTensorInfos.imag.dataId,dtype:l.complexTensorInfos.imag.dtype,shape:r.shape}],d=e.runWebGLProgram(c,h,"float32"),f=e.runWebGLProgram(u,h,"float32"),p=pr({inputs:{real:d,imag:f},backend:e});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f),p}if(e.shouldExecuteOnCPU([s,r])){const a=e.texData.get(s.dataId),l=e.texData.get(r.dataId),[c,u]=EG(s.shape,r.shape,a.values,l.values,o),h=e.makeTensorInfo(u,o),d=e.texData.get(h.dataId);return d.values=c,h}let i;return X().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new Uo(Ix,s.shape,r.shape):i=new Wr(Ix,s.shape,r.shape),e.runWebGLProgram(i,[s,r],o)}const AH={kernelName:aa,backendName:"webgl",kernelFunc:pm};function DH(n,t,e){const s=[No(n.shape),...To(n.shape)],r={dtype:n.dtype,shape:s,dataId:n.dataId},o=[No(t),...To(t)],i=new IC(o,s),a=!0,l=[s],c=e.runWebGLProgram(i,[r],n.dtype,l,a);return{dataId:c.dataId,shape:t,dtype:c.dtype}}function ot(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{shape:o}=s,i=e,a=Y(r.shape),l=T0(o,a),c=Y(l);T(a===c,()=>`The new shape (${l}) has ${c} elements and the old shape (${r.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);const u=i.texData.get(r.dataId);return u.isPacked&&!dc(r.shape,l)&&!(u.texture!==null&&dc(u.shape,l))?DH(r,l,i):(i.incRef(r.dataId),{dataId:r.dataId,shape:l,dtype:r.dtype})}const _H={kernelName:au,backendName:"webgl",kernelFunc:ot};class Sx{constructor(t,e){this.variableNames=["x"];const{windowSize:s,batchSize:r,inSize:o,outSize:i}=t;this.outputShape=[r,i];const a=Math.floor(s/4)*4,l=s%4;let c="sumValue += dot(values, ones);";if(e!=null){const h=1/e;c=`sumValue += dot(values * ${bo(h)?h.toPrecision(2):h}, ones);`}let u="";o%s>0&&(u=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        float sumValue = 0.0;

        for (int i = 0; i < ${a}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${c}
        }

        int inIdx = inOffset + ${a};
        if (${l===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${c}
        } else if (${l===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${c}
        } else if (${l===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${c}
        }
        setOutput(sumValue);
      }
    `}}class FH{constructor(t,e){this.variableNames=["x"];const{windowSize:s,batchSize:r,inSize:o,outSize:i}=t;this.outputShape=[r,i];let a="0.0",l="";e==="prod"?a="1.0":e==="min"?(a="1.0 / 1e-20",l="min"):e==="max"&&(a="-1.0 / 1e-20",l="max");let c=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="sum"?c="sumValue":e==="prod"?c="prodValue":e==="all"?c="allValue":e==="any"&&(c="anyValue");const u=Math.floor(s/4)*4,h=s%4;let d=`
      if (${e==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${e==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${l}(values, minMaxValue);
        if (${e==="min"} || ${e==="max"}) {
          minMaxValue = ${l}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f="vec4";e==="all"?(a="1.0",d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):e==="any"&&(a="0.0",d=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");let p="";o%s>0&&(p=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${a};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        vec4 minMaxValue = vec4(${a});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${d}
        }

        int inIdx = inOffset + ${u};
        if (${h===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${h===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${h===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${d}
        }
        setOutput(${c});
      }
    `}}function OH(n){const t=[];for(;t.length===0||t[t.length-1].outSize!==1;){const e=t.length?t[t.length-1].outSize:n[1],s=Eu(e);t.push({inSize:e,windowSize:s,outSize:Math.ceil(e/s)})}return t}function Jr(n,t,e,s){const r=OH(n.shape);let o=n;for(let i=0;i<r.length;i++){const{inSize:a,windowSize:l,outSize:c}=r[i];let u,h;e==="mean"?u=i===0?new Sx({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},a):new Sx({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c}):u=new FH({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},e),h=o,o=s.runWebGLProgram(u,[o],t),h.dataId!==n.dataId&&s.disposeIntermediateTensorInfo(h)}return o}class MH{constructor(t,e){this.variableNames=["A"];const s=new Array(t.length);for(let i=0;i<s.length;i++)s[i]=t[e[i]];this.outputShape=s,this.rank=s.length;const r=qt(this.rank),o=LH(e);this.userCode=`
    void main() {
      ${r} resRC = getOutputCoords();
      setOutput(getA(${o}));
    }
    `}}function LH(n){const t=n.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);const e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],s=new Array(t);for(let r=0;r<n.length;r++)s[n[r]]=e[r];return s.join()}class PH{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const s=new Array(t.length);for(let u=0;u<s.length;u++)s[u]=t[e[u]];if(this.outputShape=s,this.rank=s.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const r=qt(this.rank),o=kC("rc",this.rank),i=new Array(this.rank);for(let u=0;u<e.length;u++)i[e[u]]=o[u];const a=`vec2(${i.slice(-2).join()})`,l=`++${o[this.rank-1]} < ${s[this.rank-1]}`,c=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
    void main() {
      ${r} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${c};
      if(${l}) {
        result[1] = ${c};
      }
      --${o[this.rank-1]};
      if(++${o[this.rank-2]} < ${s[this.rank-2]}) {
        result[2] = ${c};
        if(${l}) {
          result[3] = ${c};
        }
      }
      setOutput(result);
    }
    `}}function qu(n,t,e){const s=X().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new PH(n.shape,t):new MH(n.shape,t);return e.runWebGLProgram(s,[n],n.dtype)}function zH(n,t,e,s){const r=t,o=n.shape.length,i=Tt(r,n.shape);let a=i;const l=ie(a,o),c=l!=null;let u=n;c&&(u=qu(n,l,s),a=pe(a.length,o)),Le("sum",a,o);const[h,d]=De(u.shape,a);let f=h;e&&(f=ye(h,i));const p=Y(d),g=Y(n.shape)/p,x=ot({inputs:{x:u},attrs:{shape:[g,p]},backend:s}),b=Df(n.dtype),w=Jr(x,b,"sum",s),y=ot({inputs:{x:w},attrs:{shape:f},backend:s});return s.disposeIntermediateTensorInfo(x),s.disposeIntermediateTensorInfo(w),c&&s.disposeIntermediateTensorInfo(u),y}function Xu(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s;return zH(r,o,i,e)}const BH={kernelName:fu,backendName:"webgl",kernelFunc:Xu};function tn(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{perm:o}=s,i=e,a=r.shape.length,l=new Array(a);for(let u=0;u<l.length;u++)l[u]=r.shape[o[u]];let c;if(i.shouldExecuteOnCPU([r])){const h=i.texData.get(r.dataId).values,d=dm(h,r.shape,r.dtype,o,l);c=i.makeTensorInfo(l,r.dtype);const f=i.texData.get(c.dataId);f.values=d}else c=qu(r,o,i);return c}const VH={kernelName:uo,backendName:"webgl",kernelFunc:tn};const AC=1e3;function fc({a:n,b:t,transposeA:e,transposeB:s,backend:r,bias:o=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:l=null}){const c=n.shape.length,u=t.shape.length,h=e?n.shape[c-2]:n.shape[c-1],d=s?t.shape[u-1]:t.shape[u-2],f=e?n.shape[c-1]:n.shape[c-2],p=s?t.shape[u-2]:t.shape[u-1],m=n.shape.slice(0,-2),g=t.shape.slice(0,-2),x=Y(m),b=Y(g),y=kt(n.shape.slice(0,-2),t.shape.slice(0,-2)).concat([f,p]);T(h===d,()=>`Error in matMul: inner shapes (${h}) and (${d}) of Tensors with shapes ${n.shape} and ${t.shape} and transposeA=${e} and transposeB=${s} must match.`);const v=e?[x,h,f]:[x,f,h],$=s?[b,p,d]:[b,d,p],N=ot({inputs:{x:n},backend:r,attrs:{shape:v}}),S=ot({inputs:{x:t},backend:r,attrs:{shape:$}}),I=[N,S],k=Math.max(x,b),C=e?N.shape[1]:N.shape[2],E=o!=null,_=i!=null,R=l==="leakyrelu",M=l!=null?Ii(l,!0):null,z=E||_||R||M!=null;let P;if((f===1||p===1)&&C>AC&&z===!1){let q=N,j=S;e&&(q=tn({inputs:{x:N},backend:r,attrs:{perm:[0,2,1]}}),I.push(q)),s&&(j=tn({inputs:{x:S},backend:r,attrs:{perm:[0,2,1]}}),I.push(j));const Z=p!==1,J=p===1;let Q=q;Z&&(Q=ot({inputs:{x:q},backend:r,attrs:{shape:[k,C,1]}}),I.push(Q));const rt=p===1?2:1;let st=j;J&&(st=ot({inputs:{x:j},backend:r,attrs:{shape:[k,1,C]}}),I.push(st));const lt=pm({inputs:{a:Q,b:st},backend:r});P=Xu({inputs:{x:lt},backend:r,attrs:{axis:rt,keepDims:!0}}),I.push(lt)}else{const q=mn(n.dtype,t.dtype),j=new RC(v,$,[k,f,p],e,s,E,M,_,R),Z=[N,S];if(o!=null&&Z.push(o),_&&Z.push(i),R){const J=r.makeTensorInfo([],"float32",ar(a,"float32"));Z.push(J),I.push(J)}P=r.runWebGLProgram(j,Z,q)}const U=ot({inputs:{x:P},backend:r,attrs:{shape:y}});I.push(P);for(const q of I)r.disposeIntermediateTensorInfo(q);return U}function WH(n){const{inputs:t,backend:e,attrs:s}=n,{a:r,b:o,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;return fc({a:r,b:o,transposeA:l,transposeB:c,backend:e,bias:i,preluActivationWeights:a,leakyreluAlpha:h,activation:u})}const UH={kernelName:Ul,backendName:"webgl",kernelFunc:WH};const Nx="return abs(x);";function GH(n){const{inputs:t,backend:e}=n,{x:s}=t;if(e.shouldExecuteOnCPU([s])&&s.dtype!=="complex64"){const o=e.texData.get(s.dataId),i=CC(o.values);return e.makeTensorInfo(s.shape,s.dtype,i)}let r;return X().getBool("WEBGL_PACK_UNARY_OPERATIONS")?r=new Ks(s.shape,Nx):r=new us(s.shape,Nx),e.runWebGLProgram(r,[s],s.dtype)}const HH={kernelName:wc,backendName:"webgl",kernelFunc:GH};const qH=Ln+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,XH=_t({opSnippet:qH}),KH={kernelName:Di,backendName:"webgl",kernelFunc:XH};const jH=Ln+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,YH=_t({opSnippet:jH}),ZH={kernelName:_i,backendName:"webgl",kernelFunc:YH};const Tx="return a + b;",JH=Pe({opSnippet:Tx,packedOpSnippet:Tx,supportsComplex:!0,cpuKernelImpl:lG}),QH={kernelName:Ao,backendName:"webgl",kernelFunc:JH};class t6{constructor(t,e){this.outputShape=[],this.outputShape=t,this.variableNames=e.map((o,i)=>`T${i}`);const s=[];this.variableNames.forEach(o=>{s.push(`float v${o} = get${o}AtOutCoords();`)});const r=this.variableNames.map(o=>`v${o}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        float result = ${r};
        setOutput(result);
      }
    `}}class e6{constructor(t,e){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.variableNames=e.map((o,i)=>`T${i}`);const s=[];this.variableNames.forEach(o=>{s.push(`vec4 v${o} = get${o}AtOutCoords();`)});const r=this.variableNames.map(o=>`v${o}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        vec4 result = ${r};
        setOutput(result);
      }
    `}}function El(n){const{inputs:t,backend:e}=n,s=t;if(s.length===1)return xn({inputs:{x:s[0]},backend:e});if(s.length>X().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const l=Math.floor(s.length/2),c=El({inputs:s.slice(0,l),backend:e}),u=El({inputs:s.slice(l),backend:e});return El({inputs:[c,u],backend:e})}const r=s.map(l=>l.dtype).reduce((l,c)=>mn(l,c)),o=s.map(l=>l.shape),a=X().getBool("WEBGL_PACK")?new e6(s[0].shape,o):new t6(s[0].shape,o);return e.runWebGLProgram(a,s,r)}const n6={kernelName:Ud,backendName:"webgl",kernelFunc:El};function s6(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s,a=r.shape.length,l=Tt(o,r.shape);let c=l;const u=ie(c,a);let h=r;u!=null&&(h=tn({inputs:{x:r},backend:e,attrs:{perm:u}}),c=pe(c.length,a)),Le("all",c,a);const[d,f]=De(h.shape,c),p=Y(f),m=ot({inputs:{x:h},backend:e,attrs:{shape:[-1,p]}}),g=Jr(m,m.dtype,"all",e);let x;if(i){const b=ye(d,l);x=ot({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=ot({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const r6={kernelName:Gd,backendName:"webgl",kernelFunc:s6};function o6(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s,a=r.shape.length,l=Tt(o,r.shape);let c=l;const u=ie(c,a);let h=r;u!=null&&(h=tn({inputs:{x:r},backend:e,attrs:{perm:u}}),c=pe(c.length,a)),Le("any",c,a);const[d,f]=De(h.shape,c),p=Y(f),m=ot({inputs:{x:h},backend:e,attrs:{shape:[-1,p]}}),g=Jr(m,m.dtype,"any",e);let x;if(i){const b=ye(d,l);x=ot({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=ot({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const i6={kernelName:Hd,backendName:"webgl",kernelFunc:o6};class a6{constructor(t,e,s){this.variableNames=["A"];const{windowSize:r,batchSize:o,outSize:i}=t;s||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];const a=e==="max"?">":"<",l=s?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${r}; i++) {
          int inIdx = ${l};
          float candidate = getA(batch, inIdx);
          if (candidate ${a} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}class l6{constructor(t,e,s,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,T(t.length>2,()=>`Packed arg${s.charAt(0).toUpperCase()+s.slice(1)} supports only inputs with rank above 2.`);const o=t[t.length-1],i=Math.ceil(o/e);this.outputShape=t.slice(0,-1),i>1&&this.outputShape.push(i),r||this.variableNames.push("bestIndicesA");const a=this.outputShape,l=a.length,c=qt(l),u=Je("coords",l);let h,d;if(i===1){d=l+1;const S=qt(d);h=`
        ${S} sourceLocR = ${S}(${u.join()}, 0);
        ++${u[l-1]};
        ${S} sourceLocG = ${S}(${u.join()}, 0);
        ++${u[l-2]};
        ${S} sourceLocA = ${S}(${u.join()}, 0);
        --${u[l-1]};
        ${S} sourceLocB = ${S}(${u.join()}, 0);
        --${u[l-2]};`}else d=l,h=`
        ${c} sourceLocR = coords;
        ++${u[l-1]};
        ${c} sourceLocG = coords;
        ++${u[l-2]};
        ${c} sourceLocA = coords;
        --${u[l-1]};
        ${c} sourceLocB = coords;
        --${u[l-2]};`;const f=["x","y","z","w","u","v"].slice(0,d),p="."+f[d-1],m=f.map(S=>"int "+S),g=Je("sourceLocR",d-1).concat("inIdx.r"),x=Je("sourceLocG",d-1).concat("inIdx.g"),b=Je("sourceLocB",d-1).concat("inIdx.b"),w=Je("sourceLocA",d-1).concat("inIdx.a"),y=s==="max"?"greaterThan":"lessThan",v=r?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${w.join()})));`,$=`vec4(
            getAChannel(${g.join()}),
            hasNextCol ? getAChannel(${x.join()}) : 0.,
            hasNextRow ? getAChannel(${b.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${w.join()}) : 0.)`,N=r?"":`
      float getBestIndicesAChannel(${m.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${m.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${N}
      void main() {
        ${c} coords = getOutputCoords();
        bool hasNextCol = ${u[l-1]} < ${a[l-1]-1};
        bool hasNextRow = ${u[l-2]} < ${a[l-2]-1};
        ${h}
        ivec4 srcIdx = ivec4(sourceLocR${p}, sourceLocG${p},
          sourceLocB${p}, sourceLocA${p}) * ${e};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${$};

        for (int i = 0; i < ${e}; i++) {
          inIdx = srcIdx;
          ${v}
          vec4 candidate = ${$};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${y}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}function DC(n,t,e,s=null){let r=t.shape[0],o=t.shape[1];s!=null&&(r=s.shape[0],o=s.shape[1]);const i=Eu(o),a={windowSize:i,inSize:o,batchSize:r,outSize:Math.ceil(o/i)},l=new a6(a,e,s==null),c=[t];s!=null&&c.push(s);const u=n.runWebGLProgram(l,c,"int32");if(u.shape[1]===1)return u;const h=DC(n,t,e,u);return n.disposeIntermediateTensorInfo(u),h}function _C(n,t,e,s=null){const r=s!=null?s.shape:t.shape,o=r[r.length-1],i=Eu(o),a=new l6(r,i,e,s==null),l=s==null?[t]:[t,s],c=n.runWebGLProgram(a,l,"int32");if(c.shape.length===t.shape.length){const u=_C(n,t,e,c);return n.disposeIntermediateTensorInfo(c),u}return c}function FC(n,t,e,s){const r=[e];if(Le("arg"+s.charAt(0).toUpperCase()+s.slice(1),r,t.shape.length),!X().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){const o=[],i=n.texData.get(t.dataId),a=i!==null&&i.isPacked;let l=t;a&&(l=n.unpackTensor(t),o.push(l));const[c,u]=De(l.shape,r),h=Y(u),d=ot({inputs:{x:l},backend:n,attrs:{shape:[-1,h]}});o.push(d);const f=DC(n,d,s);o.push(f);const p=ot({inputs:{x:f},backend:n,attrs:{shape:c}});return o.forEach(m=>n.disposeIntermediateTensorInfo(m)),p}return _C(n,t,s)}function c6(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o}=s;let i=Tt(o,r.shape);const a=ie(i,r.shape.length);let l=r;const c=[];a!=null&&(l=tn({inputs:{x:r},backend:e,attrs:{perm:a}}),c.push(l),i=pe(i.length,l.shape.length)),Le("argMax",[i[0]],l.shape.length);const u=FC(e,l,i[0],"max");return c.forEach(h=>e.disposeIntermediateTensorInfo(h)),u}const u6={kernelName:vc,backendName:"webgl",kernelFunc:c6};function h6(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o}=s;let i=Tt(o,r.shape);const a=ie(i,r.shape.length);let l=r;const c=[];a!=null&&(l=tn({inputs:{x:r},backend:e,attrs:{perm:a}}),c.push(l),i=pe(i.length,l.shape.length)),Le("argMin",[i[0]],l.shape.length);const u=FC(e,l,i[0],"min");return c.forEach(h=>e.disposeIntermediateTensorInfo(h)),u}const d6={kernelName:Cc,backendName:"webgl",kernelFunc:h6};const f6=Ln+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,p6=_t({opSnippet:f6}),m6={kernelName:Fi,backendName:"webgl",kernelFunc:p6};const g6=Ln+"return log(x + sqrt(x * x + 1.0));",x6=_t({opSnippet:g6}),b6={kernelName:Oi,backendName:"webgl",kernelFunc:x6};const y6=Ln+`
  return atan(x);
`,w6=_t({opSnippet:y6}),v6={kernelName:Mi,backendName:"webgl",kernelFunc:w6};const C6=fm+`
  return atan(a, b);
`,$6=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Zr+`
  return result;
`,k6=Pe({opSnippet:C6,packedOpSnippet:$6}),I6={kernelName:Pi,backendName:"webgl",kernelFunc:k6};const S6=Ln+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,N6=_t({opSnippet:S6}),T6={kernelName:Li,backendName:"webgl",kernelFunc:N6};class Si{constructor(t,e,s,r=!1,o=!1){if(this.variableNames=["x"],e==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideHeight,l=t.strideWidth,c=t.dilationHeight,u=t.dilationWidth,h=t.effectiveFilterHeight,d=t.effectiveFilterWidth,f=t.padInfo.top,p=t.padInfo.left;this.outputShape=t.outShape;const m=e==="avg",g=`((batch  * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + d`,x=`(xR * ${t.inWidth} + xC) * ${t.inChannels} + d`;let b="0.0";if(m||(b="-1.0 / 1e-20"),s){this.userCode=`
        const ivec2 strides = ivec2(${a}, ${l});
        const ivec2 pads = ivec2(${f}, ${p});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${h};
              wR += ${c}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d};
                wC += ${u}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${r?o?g:x:`wR * ${d} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const w="max";let y=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&(y="avgValue / max(count, 1.0)");const v=Math.floor(i/4)*4,$=i%4,N=`
      if (${m}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${w}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${l});
      const ivec2 pads = ivec2(${f}, ${p});
      const float initializationValue = ${b};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${b});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${h};
            wR += ${c}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${v}; wC += 4) {
            int xC = xCCorner + wC * ${u};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              getValue(batch, xR, xC + 3 * ${u}, d)
            );

            ${N}
          }

          int xC = xCCorner + ${v};
          if (${$===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${N}
          } else if (${$===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${N}
          } else if (${$===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              initializationValue
            );

            ${N}
          }
        }
        setOutput(${y});
      }
    `}}class mm{constructor(t,e,s,r=!1,o=!1){if(this.variableNames=["x"],e==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideDepth,l=t.strideHeight,c=t.strideWidth,u=t.dilationDepth,h=t.dilationHeight,d=t.dilationWidth,f=t.effectiveFilterDepth,p=t.effectiveFilterHeight,m=t.effectiveFilterWidth,g=t.padInfo.front,x=t.padInfo.top,b=t.padInfo.left;this.outputShape=t.outShape;const w=e==="avg";let y="0.0";if(w||(y="-1.0 / 1e-20"),s){this.userCode=`
        const ivec3 strides =
            ivec3(${a}, ${l}, ${c});
        const ivec3 pads = ivec3(${g}, ${x}, ${b});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${f};
              wD += ${u}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${t.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${p};
                wR += ${h}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${m};
                  wC += ${d}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${r?o?`(((batch * ${t.inDepth} + xD) * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`((xD * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`wD * ${p} * ${m} +
                      wR * ${m} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const v="max";let $=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&($="avgValue / max(count, 1.0)");const N=Math.floor(i/4)*4,S=i%4,I=`
      if (${w}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${v}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${l}, ${c});
      const ivec3 pads = ivec3(${g}, ${x}, ${b});
      const float initializationValue = ${y};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${y});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${f};
            wD += ${u}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${p};
            wR += ${h}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${N}; wC += 4) {
              int xC = xCCorner + wC * ${d};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                getValue(batch, xD, xR, xC + 3 * ${d}, ch)
              );

              ${I}
            }

            int xC = xCCorner + ${N};
            if (${S===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${I}
            } else if (${S===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                initializationValue,
                initializationValue
              );

              ${I}
            } else if (${S===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                initializationValue
              );

              ${I}
            }
          }
        }
        setOutput(${$});
      }
    `}}function E6(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t;Ha(r,"avgPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=s,c=1;T(Ue(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=On(r.shape,o,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Pt(u.inShape,u.outShape))return xn({inputs:{x:r},backend:e});const h=new Si(u,"avg",!1);return e.runWebGLProgram(h,[r],"float32")}const R6={kernelName:$c,backendName:"webgl",kernelFunc:E6};function A6(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{filterSize:o,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s,u=[1,1,1],h=Ps(r.shape,o,i,u,a,l,c),d=new mm(h,"avg",!1);return e.runWebGLProgram(d,[r],"float32")}const D6={kernelName:kc,backendName:"webgl",kernelFunc:A6};class _6{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,r=t.strideHeight,o=t.strideWidth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterHeight,c=t.effectiveFilterWidth,u=l-1-t.padInfo.top,h=c-1-t.padInfo.left,d=1/(e*s);this.userCode=`
      const ivec2 pads = ivec2(${u}, ${h});
      const float avgMultiplier = float(${d});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${l};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${c};
            wC+= ${a}) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class F6{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const e=t.filterDepth,s=t.filterHeight,r=t.filterWidth,o=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,h=t.effectiveFilterDepth,d=t.effectiveFilterHeight,f=t.effectiveFilterWidth,p=h-1-t.padInfo.front,m=d-1-t.padInfo.top,g=f-1-t.padInfo.left,x=1/(e*s*r);this.userCode=`
      const ivec3 pads = ivec3(${p}, ${m}, ${g});
      const float avgMultiplier = float(${x});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${h};
            wD += ${l}) {
          float dyD = float(dyDCorner + wD) / ${o}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${d};
              wR += ${c}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${f};
                wC += ${u}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function O6(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,i=o,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=Ps(i.shape,a,l,h,c,u),f=new F6(d);return e.runWebGLProgram(f,[r],i.dtype)}const M6={kernelName:Xd,backendName:"webgl",kernelFunc:O6};function L6(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,i=o;Ha([r,o],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=On(i.shape,a,l,1,c),h=new _6(u);return e.runWebGLProgram(h,[r],i.dtype)}const P6={kernelName:qd,backendName:"webgl",kernelFunc:L6};function z6(n){const{inputs:t,backend:e,attrs:s}=n,{a:r,b:o}=t,{transposeA:i,transposeB:a}=s;return fc({a:r,b:o,transposeA:i,transposeB:a,backend:e})}const B6={kernelName:Ic,backendName:"webgl",kernelFunc:z6};class V6{constructor(t,e,s,r,o,i){this.outputShape=[],this.variableNames=["x","mean","variance"],kt(t,e),kt(t,s);let a="0.0";r!=null&&(kt(t,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="1.0";o!=null&&(kt(t,o),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${l};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}class W6{constructor(t,e,s,r,o,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],kt(t,e),kt(t,s);let a="vec4(0.0)";r!=null&&(kt(t,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="vec4(1.0)";o!=null&&(kt(t,o),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${l};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}}const U6=({inputs:n,backend:t,attrs:e})=>{const{x:s,mean:r,variance:o,offset:i,scale:a}=n;T(r.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),T(i==null||r.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),T(a==null||r.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=e;l==null&&(l=.001);const c=[s,r,o];let u=null;i!=null&&(u=i.shape,c.push(i));let h=null;a!=null&&(h=a.shape,c.push(a));const d=X().getBool("WEBGL_PACK_NORMALIZATION")?new W6(s.shape,r.shape,o.shape,u,h,l):new V6(s.shape,r.shape,o.shape,u,h,l);return t.runWebGLProgram(d,c,c[0].dtype)},G6={kernelName:Lc,backendName:"webgl",kernelFunc:U6};class H6{constructor(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;const e=qt(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const s=q6(this.rank);let r;const o=t.map((i,a)=>`sourceLoc.${xd[a]} = start[${a}] + coords.${xd[a]};`);r=`
        ${e} sourceLoc;
        ${e} coords = getOutputCoords();
        ${o.join(`
`)}
      `,this.userCode=`
      void main() {
        ${r}
        setOutput(getSource(${s}));
      }
    `}}const xd=["x","y","z","w","u","v"];function q6(n){if(n===1)return"sourceLoc";if(n<=6)return xd.slice(0,n).map(t=>"sourceLoc."+t).join(",");throw Error(`Slicing for rank ${n} is not yet supported`)}class X6{constructor(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const e=qt(this.rank),s=Je("coords",this.rank),r=Je("sourceLoc",this.rank),o=this.rank===1?"sourceLoc":`vec2(${r.slice(-2).join()})`,i=`getChannel(getSource(${r.join()}), ${o})`,a=`
      result.x = ${i};
      if (++${s[this.rank-1]} < ${t[this.rank-1]}) {
        ++${r[this.rank-1]};
        result.y = ${i};
        --${r[this.rank-1]};
      }
    `,l=this.rank===1?"":`
      --${s[this.rank-1]};
      if (++${s[this.rank-2]} < ${t[this.rank-2]}) {
        ++${r[this.rank-2]};
        result.z = ${i};
        if (++${s[this.rank-1]} < ${t[this.rank-1]}) {
          ++${r[this.rank-1]};
          result.w = ${i};
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            ${e}(${t.map((u,h)=>`start[${h}]`).join()});`:t.map((u,h)=>`${r[h]} = ${s[h]} + start[${h}];`).join(`
`);this.userCode=`
      void main() {
        ${e} coords = getOutputCoords();
        ${e} sourceLoc;
        ${c}
        vec4 result = vec4(0.);
        ${a}
        ${l}
        setOutput(result);
      }
    `}}function K6(n,t,e,s){const r=s.texData.get(n.dataId),o=s.makeTensorInfo(e,n.dtype),i=s.texData.get(o.dataId);Object.assign(i,r),i.refCount=1,i.shape=e,i.dtype=n.dtype;let a=hy(t,xt(n.shape));r.slice&&(a+=r.slice.flatOffset),i.slice={flatOffset:a,origDataId:r.slice&&r.slice.origDataId||n.dataId};const l=s.dataRefCount.get(i.slice.origDataId)||1;return s.dataRefCount.set(i.slice.origDataId,l+1),o}function Ho(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{begin:o,size:i}=s,[a,l]=dp(r,o,i);if(ly(r,a,l),Y(l)===0)return e.makeTensorInfo(l,r.dtype,[]);if(e.shouldExecuteOnCPU([r])||r.dtype==="string"){const h=e.texData.get(r.dataId),d=BG(h.values,a,l,r.shape,r.dtype);return e.makeTensorInfo(l,r.dtype,d)}const{isPacked:c}=e.texData.get(r.dataId),u=uy(r.shape,a,l);if(c||!u){const h=X().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new X6(l):new H6(l),d=[a];return e.runWebGLProgram(h,[r],r.dtype,d)}return e.uploadToGPU(r.dataId),K6(r,a,l,e)}const j6={kernelName:du,backendName:"webgl",kernelFunc:Ho};const Y6=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockShape:o,crops:i}=s;T(r.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const a=o.reduce((b,w)=>b*w),l=Da(r.shape,o,a),c=_a(l.length,o.length),u=Fa(r.shape,o,a),h=gp(i,o.length),d=xp(u,i,o.length),f=[],p=ot({inputs:{x:r},backend:e,attrs:{shape:l}}),m=tn({inputs:{x:p},backend:e,attrs:{perm:c}}),g=ot({inputs:{x:m},backend:e,attrs:{shape:u}}),x=Ho({inputs:{x:g},backend:e,attrs:{begin:h,size:d}});return f.push(p),f.push(m),f.push(g),f.forEach(b=>e.disposeIntermediateTensorInfo(b)),x},Z6={kernelName:Sc,backendName:"webgl",kernelFunc:Y6};function J6(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,weights:o}=t,{size:i}=s,a=e.readSync(r.dataId),l=e.readSync(o.dataId),c=vC(a,l,o.dtype,o.shape,i);return e.makeTensorInfo([i],o.dtype,c)}const Q6={kernelName:Kd,backendName:"webgl",kernelFunc:J6};const tq=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,eq=`
  return float(int(a.r) & int(b.r));
`;function nq(n){const{inputs:t,backend:e}=n,{a:s,b:r}=t,o=X().getBool("WEBGL_PACK_BINARY_OPERATIONS"),i=X().getNumber("WEBGL_VERSION");if(e.shouldExecuteOnCPU([s,r])||i===1){const l=e.texData.get(s.dataId).values,c=e.texData.get(r.dataId).values,[u,h]=uG(s.shape,r.shape,l,c,s.dtype),d=e.makeTensorInfo(h,s.dtype),f=e.texData.get(d.dataId);return f.values=u,d}let a;return o?a=new Uo(tq,s.shape,r.shape,!1):a=new Wr(eq,s.shape,r.shape),e.runWebGLProgram(a,[s,r],s.dtype)}const sq={kernelName:jd,backendName:"webgl",kernelFunc:nq};function rq(n){const{inputs:t,backend:e}=n,{s0:s,s1:r}=t,o=e.readSync(s.dataId),i=e.readSync(r.dataId),a=kt(Array.from(o),Array.from(i));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const oq={kernelName:F0,backendName:"webgl",kernelFunc:rq};const iq="return float(a != b);",OC=Pe({opSnippet:iq,cpuKernelImpl:AG,dtype:"bool"}),aq={kernelName:tu,backendName:"webgl",kernelFunc:OC};function Xa(n){const{inputs:t,backend:e}=n,{input:s}=t,r=e.texData.get(s.dataId);return xn({inputs:{x:r.complexTensorInfos.real},backend:e})}const lq={kernelName:Cf,backendName:"webgl",kernelFunc:Xa};const cq="return float(int(x));";function uq(n,t){const e=new us(n.shape,cq),s=t.runWebGLProgram(e,[n],"int32");return{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}function bd(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{dtype:o}=s;if(o==="complex64"){if(r.dtype==="complex64")return xn({inputs:{x:r},backend:e});const i=Re(r.shape),a=bd({inputs:{x:r},backend:e,attrs:{dtype:"float32"}}),l=pr({inputs:{real:a,imag:i},backend:e});return i.dispose(),e.disposeIntermediateTensorInfo(a),l}if(r.dtype==="complex64"){const i=Xa({inputs:{input:r},backend:e}),a=bd({inputs:{x:i},backend:e,attrs:{dtype:o}});return e.disposeIntermediateTensorInfo(i),a}if(!E0(r.dtype,o)){const i=xn({inputs:{x:r},backend:e});return{dataId:i.dataId,shape:i.shape,dtype:o}}if(e.shouldExecuteOnCPU([r])){const i=e.texData.get(r.dataId).values,[a,l,c]=hG(i,r.shape,r.dtype,o);return e.makeTensorInfo(a,l,c)}if(o==="int32")return uq(r,e);if(o==="bool"){const i=e.makeTensorInfo([],"bool",Be("bool",1)),l=OC({inputs:{a:r,b:i},backend:e});return e.disposeIntermediateTensorInfo(i),l}throw new Error(`Error in Cast: failed to cast ${r.dtype} to ${o}`)}const hq={kernelName:zi,backendName:"webgl",kernelFunc:bd};const Ex="return ceil(x);",dq=_t({opSnippet:Ex,packedOpSnippet:Ex,cpuKernelImpl:dG}),fq={kernelName:Bi,backendName:"webgl",kernelFunc:dq};class pq{constructor(t){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}class mq{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}function gq(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{clipValueMin:o,clipValueMax:i}=s;let a;X().getBool("WEBGL_PACK_CLIP")?a=new mq(r.shape):a=new pq(r.shape);const l=[[o],[i]];return e.runWebGLProgram(a,[r],r.dtype,l)}const xq={kernelName:Vi,backendName:"webgl",kernelFunc:gq};class bq{constructor(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}function Rx(n,t){return{dataId:t.dataId,dtype:t.dtype,shape:n.shape}}function yq(n){const{inputs:t,backend:e}=n,{x:s}=t,r=e.texData.get(s.dataId),o=new bq(s.shape),i=[Rx(s,r.complexTensorInfos.real),Rx(s,r.complexTensorInfos.imag)];return e.runWebGLProgram(o,i,i[0].dtype)}const wq={kernelName:Nc,backendName:"webgl",kernelFunc:yq};class vq{constructor(t){this.outputShape=[],this.outputShape=ps(t,1),this.variableNames=t.map((i,a)=>`T${a}`);const e=new Array(t.length-1);e[0]=t[0][1];for(let i=1;i<e.length;i++)e[i]=e[i-1]+t[i][1];const s=[`if (yC < ${e[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<e.length;i++){const a=e[i-1];s.push(`else if (yC < ${e[i]}) setOutput(getT${i}(yR, yC-${a}));`)}const r=e.length,o=e[e.length-1];s.push(`else setOutput(getT${r}(yR, yC-${o}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${s.join(`
        `)}
      }
    `}}class Cq{constructor(t,e){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=ps(t,e);const s=this.outputShape,r=s.length,o=qt(r),i=Je("coords",r),a=["x","y","z","w","u","v"].slice(0,r);this.variableNames=t.map((m,g)=>`T${g}`);const l=new Array(t.length-1);l[0]=t[0][e];for(let m=1;m<l.length;m++)l[m]=l[m-1]+t[m][e];const c=a[e],u=a.slice(-2),h=a.join();let d=`if (${c} < ${l[0]}) {
        return getChannel(
            getT0(${h}), vec2(${u.join()}));
        }`;for(let m=1;m<l.length;m++){const g=l[m-1];d+=`
        if (${c} < ${l[m]}  && ${c} >= ${l[m-1]}) {
          return getChannel(
            getT${m}(${pl(a,c,g)}),
            vec2(${pl(u,c,g)}));
        }`}const f=l.length,p=l[l.length-1];d+=`
        return getChannel(
          getT${f}(${pl(a,c,p)}),
          vec2(${pl(u,c,p)}));`,this.userCode=`
      float getValue(${a.map(m=>"int "+m)}) {
        ${d}
      }

      void main() {
        ${o} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[r-1]} = ${i[r-1]} + 1;
        if (${i[r-1]} < ${s[r-1]}) {
          result.g = getValue(${i});
        }

        ${i[r-2]} = ${i[r-2]} + 1;
        if (${i[r-2]} < ${s[r-2]}) {
          result.a = getValue(${i});
        }

        ${i[r-1]} = ${i[r-1]} - 1;
        if (${i[r-2]} < ${s[r-2]} &&
            ${i[r-1]} < ${s[r-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}}function pl(n,t,e){const s=n.indexOf(t);return n.map((o,i)=>i===s?`${o} - ${e}`:o).join()}function Ku(n){const{inputs:t,backend:e}=n,{input:s}=t,r=e.texData.get(s.dataId);return xn({inputs:{x:r.complexTensorInfos.imag},backend:e})}const $q={kernelName:pf,backendName:"webgl",kernelFunc:Ku};function ii(n,t,e){const s=n[0].dtype;if(s==="complex64"){const f=n.map(b=>Xa({inputs:{input:b},backend:e})),p=n.map(b=>Ku({inputs:{input:b},backend:e})),m=ii(f,t,e),g=ii(p,t,e),x=pr({inputs:{real:m,imag:g},backend:e});return f.forEach(b=>e.disposeIntermediateTensorInfo(b)),p.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),x}let r=e.shouldExecuteOnCPU(n);if(s==="string"&&(r=!0),r){const f=n.map(y=>{const $=[-1,Y(y.shape.slice(t))];return ot({inputs:{x:y},backend:e,attrs:{shape:$}})}),p=f.map(y=>({vals:e.readSync(y.dataId),shape:y.shape})),m=ps(f.map(y=>y.shape),1),g=f[0].shape[0]===1,x=fG(p,m,s,g),b=ps(n.map(y=>y.shape),t),w=e.makeTensorInfo(b,s,x);return f.forEach(y=>e.disposeIntermediateTensorInfo(y)),w}const o=n.filter(f=>Y(f.shape)>0),i=X().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&o[0].shape.length>1;if(o.length===1){const f=i?new us(n[0].shape,Gs):new Ks(n[0].shape,Gs);return e.runWebGLProgram(f,n,s)}const a=X().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(o.length>a){const f=[];for(let m=0;m<o.length;m+=a){const g=o.slice(m,m+a);f.push(ii(g,t,e))}const p=ii(f,t,e);for(const m of f)e.disposeIntermediateTensorInfo(m);return p}if(i){const f=new Cq(o.map(p=>p.shape),t);return e.runWebGLProgram(f,o,s)}const{tensors2D:l,outShape:c}=kq(o,t,e),u=new vq(l.map(f=>f.shape)),h=e.runWebGLProgram(u,l,s);l.forEach(f=>e.disposeIntermediateTensorInfo(f));const d=ot({inputs:{x:h},attrs:{shape:c},backend:e});return e.disposeIntermediateTensorInfo(h),d}function kq(n,t,e){const s=ps(n.map(o=>o.shape),t);return{tensors2D:n.map(o=>ot({inputs:{x:o},attrs:{shape:[-1,Y(o.shape.slice(t))]},backend:e})),outShape:s}}function MC(n){const{inputs:t,backend:e,attrs:s}=n,{axis:r}=s,o=Tt(r,t[0].shape)[0],i=t.map(c=>c.shape);fp(i,o);const a=ps(t.map(c=>c.shape),o);if(Y(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);const l=t.filter(c=>Y(c.shape)>0);return l.length===1?xn({inputs:{x:l[0]},backend:e}):ii(l,o,e)}const Iq={kernelName:Tc,backendName:"webgl",kernelFunc:MC};class LC{constructor(t,e=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.outputShape=t.outShape;const i=t.padInfo.top,a=t.padInfo.left,l=t.strideHeight,c=t.strideWidth,u=t.dilationHeight,h=t.dilationWidth,d=t.filterHeight,f=t.filterWidth,p=Math.floor(t.inChannels/4)*4,m=t.inChannels%4,g=t.dataFormat==="channelsLast",x=g?1:2,b=g?2:3,w=g?3:1;let y="",v="";s&&(r?y=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:o?y=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:y=`
          float activation(float x) {
            ${s}
          }
        `,v="result = activation(result);");const $=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${y}

      const ivec2 strides = ivec2(${l}, ${c});
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${w}];

        ivec2 xRCCorner =
            ivec2(coords[${x}], coords[${b}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${d}; wR++) {
          int xR = xRCorner + wR * ${u};

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${h};

            if (xC < 0 || xC >= ${t.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${p}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${g}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${m===1}) {

              if (${g}) {
                dotProd +=
                    getX(batch, xR, xC, ${p}) *
                    getW(wR, wC, ${p}, d2);
              } else {
                dotProd +=
                    getX(batch, ${p}, xR, xC) *
                    getW(wR, wC, ${p}, d2);
              }

            } else if (${m===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2)
              );

              if (${g}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${m===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2),
                getW(wR, wC, ${p} + 2, d2)
              );

              if (${g}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1),
                  getX(batch, xR, xC, ${p} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC),
                  getX(batch, ${p} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${$}
        ${v}
        setOutput(result);
      }
    `}}class Sq{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const e=t.padInfo.front,s=t.padInfo.top,r=t.padInfo.left,o=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,h=t.filterDepth,d=t.filterHeight,f=t.filterWidth,p=Math.floor(t.inChannels/4)*4,m=t.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${o}, ${i}, ${a});
      const ivec3 pads = ivec3(${e}, ${s}, ${r});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${h}; wF++) {
          int xF = xFCorner + wF * ${l};

          if (xF < 0 || xF >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${d}; wR++) {
            int xR = xRCorner + wR * ${c};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${u};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${p}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${m===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${p}) *
                  getW(wF, wR, wC, ${p}, d2);
              } else if (${m===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${m===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1),
                  getX(batch, xF, xR, xC, ${p} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2),
                  getW(wF, wR, wC, ${p} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class PC{constructor(t,e=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=He(this.outputShape.length);const i=t.padInfo.left,a=t.strideWidth,l=t.dilationWidth,c=t.filterHeight,u=t.filterWidth,h=u;let d=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let g=0;g<u;g++)d+=`
           vec4 xTexelC${g*2};
           int xTexelC${g*2}Ready;
           vec4 xTexelC${g*2+1};
           int xTexelC${g*2+1}Ready;
           vec4 xC${g};`;d+=`
     for (int r = 0; r < ${c}; r++) {
      for (int d1 = 0; d1 < ${t.inChannels}; d1 += 2) {
       `;for(let g=0;g<u;g++)d+=`
           xTexelC${g*2} = vec4(0.0);
           xTexelC${g*2}Ready = 0;
           xTexelC${g*2+1} = vec4(0.0);
           xTexelC${g*2+1}Ready = 0;
           xC${g} = vec4(0.0);`;d+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let g=0;g<(h+1)/2;g++){const x=g*2;if(d+=`
           xC = xCCorner + ${x*l};
           `,a===1){if(x<u&&(i%2===1?(d+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }
               `,l===1&&x>0?d+=`
                 xC${x} = vec4(xTexelC${x-2}.zw, xTexelC${x}.xy);
                 `:d+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${x} = vec4(previous.zw, xTexelC${x}.xy);
                   } else {
                     xC${x} = vec4(0.0, 0.0, xTexelC${x}.xy);
                   }
                   `):d+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xC${x} = xTexelC${x};
                 `,x+1<u)){const b=i%2===0?Pd(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(d+=`
                   xCOffset = xC + imod(pads[1], 2) + ${b};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                     xTexelC${x+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${x+1}.zw = vec2(0.0);
                     }
                     xTexelC${x+1}Ready = 1;
                   }
                   `,l>1?d+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${x+1} = vec4(previous.zw, xTexelC${x+1}.xy);
                     } else {
                      xC${x+1} = vec4(0.0, 0.0, xTexelC${x+1}.xy);
                     }
                     `:d+=`
                     xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.xy);
                     `):b===1?d+=`
                     xC${x+1} = xTexelC${x};
                     `:d+=`
                     xCOffset = xC + ${b};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                       xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${x+1}.zw = vec2(0.0);
                       }
                       xTexelC${x+1}Ready = 1;
                     }

                     xC${x+1} = xTexelC${x+1};
                     `}}else x<u&&(i%2===1?(d+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.0);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
               `,x+1<u&&(d+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${x+1} = vec4(xTexelC${x+1}.xy, final.xy);
                 `)):(d+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(
                   xTexelC${x}.xy, xTexelC${x+1}.xy);
               `,x+1<u&&(d+=`
                   xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
                 `)));x<u&&(d+=`
             wTexel = getW(r, ${x}, d1, d2);
             dotProd += xC${x}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${t.inChannels}) {
               dotProd += xC${x}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,x+1<u&&(d+=`
               wTexel = getW(r, ${x+1}, d1, d2);
               dotProd += xC${x+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${t.inChannels}) {
                 dotProd += xC${x+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}d+=`
     }
   `,d+=`
     }
   `,d+=`
     }
   `;let f="",p="";s&&(r?f=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${s}
         }`:o?f=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${s}
         }`:f=`vec4 activation(vec4 x) {
           ${s}
         }`,p="result = activation(result);");const m=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${f}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${d}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${m}
         ${p}
         setOutput(result);
       }
     `}}class Nq{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=t,this.enableShapeUniforms=He(this.outputShape.length);const{dataFormat:s}=e,r=en(),o=s==="channelsLast",i=o?1:2,a=o?2:3,l=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${t[2]} && pos < ${t[1]}) {`;let c="";for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)c+=`
          blockIndex = rc.z + ${h};
          pos = rc.y + ${u};

          ${l}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${a}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${o}) {
                  innerDims = vec2(d1, ch);
                  result[${u*2+h}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${u*2+h}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${c}

        ${r.output} = result;
      }
    `}}function pc(n,t){const e=n.length;return e>=3?t?[...n.slice(0,-3),n[e-3]*n[e-2],n[e-1]]:[...n.slice(0,-3),n[e-3],n[e-2]*n[e-1]]:!t&&e===1&&n[0]>1?[n[0],1]:null}function zC({x:n,filter:t,convInfo:e,backend:s,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:a=null}){const l=n.shape,c=s.texData.get(n.dataId),u=e.inChannels,h=l[0]*l[1]*l[2],d=e.outChannels,f=e.dataFormat==="channelsLast",p=!1,m=!1;let g;const x=[];if(o!=null){const y=pc(o.shape,f);y!=null&&(o=ot({inputs:{x:o},backend:s,attrs:{shape:y}}),x.push(o))}if(r!=null){const y=pc(r.shape,f);y!=null&&(r=ot({inputs:{x:r},backend:s,attrs:{shape:y}}),x.push(r))}if(!((h===1||d===1)&&u>AC)&&c.isPacked&&f&&c.texture!=null&&l[2]%2!==0&&Pt(c.shape.slice(-3),l.slice(-3))){const y=l[0]*l[1]*(l[2]+1),v={dataId:n.dataId,shape:[1,y,e.inChannels],dtype:n.dtype},$=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,T(dc(c.shape,v.shape),()=>`packed reshape ${c.shape} to ${v.shape} isn't free`);const N=ot({inputs:{x:t},backend:s,attrs:{shape:[1,e.inChannels,e.outChannels]}});x.push(N);const S=fc({a:v,b:N,backend:s,transposeA:p,transposeB:m,bias:r,activation:a,preluActivationWeights:o,leakyreluAlpha:i}),I=s.texData.get(S.dataId);T(I.isPacked,()=>"batchMatMul result is expected to be packed"),c.shape=$,I.shape=e.outShape,g=xn({inputs:{x:S},backend:s}),g.shape=e.outShape,x.push(S)}else{const y=e.outHeight*e.outWidth,v=ot({inputs:{x:n},backend:s,attrs:{shape:f?[e.batchSize,y,e.inChannels]:[e.batchSize,e.inChannels,y]}}),$=ot({inputs:{x:t},backend:s,attrs:{shape:[1,e.inChannels,e.outChannels]}}),N=fc({a:f?v:$,b:f?$:v,transposeA:!f,transposeB:m,backend:s,bias:r,activation:a,preluActivationWeights:o,leakyreluAlpha:i});g=ot({inputs:{x:N},backend:s,attrs:{shape:e.outShape}}),x.push(v),x.push($),x.push(N)}for(const y of x)s.disposeIntermediateTensorInfo(y);return g}function BC({x:n,filter:t,convInfo:e,backend:s,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:a=null}){const{filterWidth:l,filterHeight:c,inChannels:u,outWidth:h,outHeight:d,dataFormat:f}=e,p=f==="channelsLast",m=l*c*u,g=d*h,x=[e.batchSize,m,g],b=!0,w=!1,y=[];if(o!=null){const U=pc(o.shape,p);U!=null&&(o=ot({inputs:{x:o},backend:s,attrs:{shape:U}}),y.push(o))}if(r!=null){const U=pc(r.shape,p);U!=null&&(r=ot({inputs:{x:r},backend:s,attrs:{shape:U}}),y.push(r))}const v=ot({inputs:{x:t},backend:s,attrs:{shape:[1,m,Y(t.shape)/m]}});y.push(v);const $=new Nq(x,e),N=[n.shape,[e.padInfo.top,e.padInfo.left],[e.strideHeight,e.strideWidth],[e.dilationHeight,e.dilationWidth],[e.inChannels],[e.filterWidth*e.inChannels],[e.outWidth]],S=s.runWebGLProgram($,[n],"float32",N),I=ot({inputs:{x:S},backend:s,attrs:{shape:x}});y.push(S),y.push(I);const k=r!=null,C=o!=null,E=a==="leakyrelu",_=a?Ii(a,!0):null,R=new RC(p?I.shape:v.shape,p?v.shape:I.shape,p?[e.batchSize,g,e.outChannels]:[e.batchSize,e.outChannels,g],b,w,k,_,C,E),M=p?[I,v]:[v,I];if(r&&M.push(r),C&&M.push(o),E){const U=s.makeTensorInfo([],"float32",ar(i,"float32"));M.push(U),y.push(U)}const z=s.runWebGLProgram(R,M,"float32"),P=ot({inputs:{x:z},backend:s,attrs:{shape:e.outShape}});y.push(z);for(const U of y)s.disposeIntermediateTensorInfo(U);return P}function Tq(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s,h=zs(l),d=Me(r.shape,o.shape,i,c,a,u,!1,h);let f;if(d.filterHeight===1&&d.filterWidth===1&&d.dilationHeight===1&&d.dilationWidth===1&&d.strideHeight===1&&d.strideWidth===1&&(d.padInfo.type==="SAME"||d.padInfo.type==="VALID"))f=zC({x:r,filter:o,convInfo:d,backend:e});else if(d.strideWidth<=2&&h==="channelsLast"&&X().getBool("WEBGL_EXP_CONV")){const m=new PC(d),g=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];f=e.runWebGLProgram(m,[r,o],"float32",g)}else if(X().getBool("WEBGL_CONV_IM2COL"))f=BC({x:r,filter:o,convInfo:d,backend:e});else{const m=new LC(d);f=e.runWebGLProgram(m,[r,o],"float32")}const p=ot({inputs:{x:f},backend:e,attrs:{shape:d.outShape}});return e.disposeIntermediateTensorInfo(f),p}const Eq={kernelName:Ec,backendName:"webgl",kernelFunc:Tq};class Rq{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideHeight,s=t.strideWidth,r=t.padInfo.top,o=t.padInfo.left,i=t.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${e} - ${r};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${o};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              ${i?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class Aq{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,r=t.strideHeight,o=t.strideWidth,i=t.dataFormat==="channelsLast",a=e-1-t.padInfo.top,l=s-1-t.padInfo.left,c=i?1:2,u=i?2:3,h=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${h}];

        ivec2 dyCorner = ivec2(coords[${c}], coords[${u}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            for (int d2 = 0; d2 < ${t.outChannels}; d2++) {

              if (${i}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class Dq{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideDepth,s=t.strideHeight,r=t.strideWidth,o=t.padInfo.front,i=t.padInfo.top,a=t.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yF = 0; yF < ${t.outDepth}; yF++) {
            int xF = wF + yF * ${e} - ${o};

            if (xF < 0 || xF >= ${t.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${t.outHeight}; yR++) {
              int xR = wR + yR * ${s} - ${i};

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${t.outWidth}; yC++) {
                int xC = wC + yC * ${r} - ${a};

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class _q{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterDepth,s=t.filterHeight,r=t.filterWidth,o=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=e-1-t.padInfo.front,c=s-1-t.padInfo.top,u=r-1-t.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${l}, ${c}, ${u});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${e}; wF++) {
          float dyF = float(dyFCorner + wF) / ${o}.0;

          if (dyF < 0.0 || dyF >= ${t.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${e} - 1 - wF;

          for (int wR = 0; wR < ${s}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${s} - 1 - wR;

            for (int wC = 0; wC < ${r}; wC++) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${r} - 1 - wC;

              for (int d2 = 0; d2 < ${t.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function Fq(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s,h=zs(l),d=Me(r.shape,u,i,1,a,c,!1,h),f=new Rq(d);return e.runWebGLProgram(f,[r,o],"float32")}const Oq={kernelName:Zd,backendName:"webgl",kernelFunc:Fq};class Mq{constructor(t){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=t.inShape,this.enableShapeUniforms=He(this.outputShape.length);const e=t.filterHeight,s=t.filterWidth,r=e-1-t.padInfo.top,o=s-1-t.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${r}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            int wCPerm = ${s} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${t.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${t.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}}function Lq(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s,h=zs(c),d=Me(i,o.shape,a,1,l,u,!1,h);if(X().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&h==="channelsLast"){const f=[[d.strideHeight,d.strideWidth]],p=new Mq(d);return e.runWebGLProgram(p,[r,o],"float32",f)}else{const f=new Aq(d);return e.runWebGLProgram(f,[r,o],"float32")}}const Pq={kernelName:Rc,backendName:"webgl",kernelFunc:Lq};function zq(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dilations:l}=s,c=lr(r.shape,o.shape,i,l,a),u=new Sq(c);return e.runWebGLProgram(u,[r,o],"float32")}const Bq={kernelName:Ac,backendName:"webgl",kernelFunc:zq};function Vq(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,pad:a,filterShape:l}=s,c=lr(r.shape,l,i,1,a),u=new Dq(c);return e.runWebGLProgram(u,[r,o],"float32")}const Wq={kernelName:Jd,backendName:"webgl",kernelFunc:Vq};function Uq(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{pad:i,strides:a,inputShape:l}=s,c=lr(l,o.shape,a,1,i),u=new _q(c);return e.runWebGLProgram(u,[r,o],"float32")}const Gq={kernelName:Qd,backendName:"webgl",kernelFunc:Uq};const Hq=Go+`
  return cos(x);
`,qq=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${Zr}
  return result;
`,Xq=_t({opSnippet:Hq,packedOpSnippet:qq}),Kq={kernelName:Wi,backendName:"webgl",kernelFunc:Xq};const jq=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,Yq=_t({opSnippet:jq}),Zq={kernelName:Ui,backendName:"webgl",kernelFunc:Yq};class Jq{constructor(t,e,s,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[i,a,l,c]=t,[u]=e,[h,d]=s;this.outputShape=[u,h,d,c];const f=r==="bilinear"?1:0,[p,m]=[`${a-1}.0`,`${l-1}.0`],[g,x,b]=h>1?[`${(a-1)/(h-1)}`,"(y2-y1) * height_ratio",`y1*${p} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${p}`],[w,y,v]=d>1?[`${(l-1)/(d-1)}`,"(x2-x1) * width_ratio",`x1*${m} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${m}`];this.userCode=`
      const float height_ratio = float(${g});
      const float width_ratio = float(${w});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${i}) {
          return;
        }

        float height_scale = ${x};
        float width_scale = ${y};

        float in_y = ${b};
        if( in_y < 0.0 || in_y > ${p} ) {
          setOutput(float(${o}));
          return;
        }
        float in_x = ${v};
        if( in_x < 0.0 || in_x > ${m} ) {
          setOutput(float(${o}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}const Qq=n=>{const{inputs:t,backend:e,attrs:s}=n,{image:r,boxes:o,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:c}=s,u=new Jq(r.shape,o.shape,a,l,c);return e.runWebGLProgram(u,[r,o,i],"float32")},t5={kernelName:ef,backendName:"webgl",kernelFunc:Qq};var Ni;(function(n){n.Prod="*",n.Sum="+"})(Ni||(Ni={}));class Ax{constructor(t,e,s,r){this.op=t,this.outputShape=e,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const o=this.outputShape.length,i=this.op===Ni.Prod?"1.0":"0.0",a=s?i:`getX(${Dx(o,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1];let c="",u="";s?(c=r?`end != ${l-1}`:"end != 0",u=r?"end + 1":"end - 1"):(c=r?`end + pow2 < ${l}`:"end >= pow2",u=r?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${qt(o)} coords = getOutputCoords();
        int end = ${_x(o,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${u};
          ${_x(o,"coords",this.op)} = idx;
          val ${this.op}= getX(${Dx(o,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function Dx(n,t,e){if(n===1)return`${t}`;if(n===2)return`${t}.x, ${t}.y`;if(n===3)return`${t}.x, ${t}.y, ${t}.z`;if(n===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw new Error(`Cumulative ${e} for rank ${n} is not yet supported`)}function _x(n,t,e){if(n===1)return`${t}`;if(n===2)return`${t}.y`;if(n===3)return`${t}.z`;if(n===4)return`${t}.w`;throw new Error(`Cumulative ${e} for rank ${n} is not yet supported`)}function VC(n,t,e,s,r,o){const i=t.shape.length,a=ie([s],i);let l=t;a!=null&&(l=tn({inputs:{x:t},backend:e,attrs:{perm:a}}));const c=pe(1,i)[0];if(c!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${s}`);const u=l.shape[c];let h=xn({inputs:{x:l},backend:e});for(let d=0;d<=Math.ceil(Math.log2(u))-1;d++){const f=new Ax(n,l.shape,!1,o),p=[[d]],m=h;h=e.runWebGLProgram(f,[h],h.dtype,p),e.disposeIntermediateTensorInfo(m)}if(r){const d=new Ax(n,l.shape,r,o),f=h;h=e.runWebGLProgram(d,[h],h.dtype),e.disposeIntermediateTensorInfo(f)}if(a!=null){const d=cr(a),f=tn({inputs:{x:h},backend:e,attrs:{perm:d}});return e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(l),f}return h}function e5(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,exclusive:i,reverse:a}=s;return VC(Ni.Prod,r,e,o,i,a)}const n5={kernelName:tf,backendName:"webgl",kernelFunc:e5};function s5(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,exclusive:i,reverse:a}=s;return VC(Ni.Sum,r,e,o,i,a)}const r5={kernelName:Dc,backendName:"webgl",kernelFunc:s5};function o5(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,weights:o}=t,{size:i,binaryOutput:a}=s;if(r.shape.length===1){const l=e.readSync(r.dataId),c=e.readSync(o.dataId),u=vC(l,c,o.dtype,o.shape,i);return e.makeTensorInfo([i],o.dtype,u)}else if(r.shape.length===2){const l=e.bufferSync(r),c=e.bufferSync(o),u=cG(l,c,i,a);return e.makeTensorInfo(u.shape,o.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${r.shape.length}.`)}const i5={kernelName:nf,backendName:"webgl",kernelFunc:o5};class a5{constructor(t,e,s){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=s,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${e};
      int offset_h = imod(h, ${e});
      int in_w = w / ${e};
      int offset_w = imod(w, ${e});
      int offset_d = (offset_h * ${e} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}function l5(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockSize:o,dataFormat:i}=s,a=r.shape[0],l=i==="NHWC"?r.shape[1]:r.shape[2],c=i==="NHWC"?r.shape[2]:r.shape[3],u=i==="NHWC"?r.shape[3]:r.shape[1],h=l*o,d=c*o,f=u/(o*o),p=i==="NHWC"?[a,h,d,f]:[a,f,h,d],m=new a5(p,o,i);return e.runWebGLProgram(m,[r],r.dtype)}const c5={kernelName:sf,backendName:"webgl",kernelFunc:l5};class WC{constructor(t,e=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=He(this.outputShape.length);const i=t.filterHeight,a=t.filterWidth,l=t.outChannels/t.inChannels;let c="",u="";s&&(r?c=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:o?c=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:c=`
          float activation(float x) {
            ${s}
          }
        `,u="result = activation(result);");const h=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${c}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${l};
        int q = d2 - d1 * ${l};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${i}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${a}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${h}
        ${u}
        setOutput(result);
      }
    `}}class UC{constructor(t,e=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=He(this.outputShape.length);const i=t.outChannels/t.inChannels,a=t.padInfo.left,l=t.strideWidth,c=t.dilationWidth,u=t.filterHeight,h=t.filterWidth,d=h;let f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let x=0;x<h;x++)f+=`
          vec4 xTexelC${x*2};
          int xTexelC${x*2}Ready;
          vec4 xTexelC${x*2+1};
          int xTexelC${x*2+1}Ready;
          vec4 xC${x};`;f+=`
    for (int r = 0; r < ${u}; r++) {
      `;for(let x=0;x<h;x++)f+=`
          xTexelC${x*2} = vec4(0.0);
          xTexelC${x*2}Ready = 0;
          xTexelC${x*2+1} = vec4(0.0);
          xTexelC${x*2+1}Ready = 0;
          xC${x} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let x=0;x<(d+1)/2;x++){const b=x*2;if(f+=`
          xC = xCCorner + ${b*c};
          `,l===1){if(b<h&&(a%2===1?(f+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }
              `,c===1&&b>0?f+=`
                xC${b} = vec4(xTexelC${b-2}.zw, xTexelC${b}.xy);
                `:f+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${b} = vec4(previous.zw, xTexelC${b}.xy);
                  } else {
                    xC${b} = vec4(0.0, 0.0, xTexelC${b}.xy);
                  }
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xC${b} = xTexelC${b};
                `,b+1<h)){const w=a%2===0?Pd(c):c;c%2===0&&a%2===1||c%2!==0&&a%2!==1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${w};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                    xTexelC${b+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${b+1}.zw = vec2(0.0);
                    }
                    xTexelC${b+1}Ready = 1;
                  }
                  `,c>1?f+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${b+1} = vec4(previous.zw, xTexelC${b+1}.xy);
                    } else {
                     xC${b+1} = vec4(0.0, 0.0, xTexelC${b+1}.xy);
                    }
                    `:f+=`
                    xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.xy);
                    `):w===1?f+=`
                    xC${b+1} = xTexelC${b};
                    `:f+=`
                    xCOffset = xC + ${w};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                      xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${b+1}.zw = vec2(0.0);
                      }
                      xTexelC${b+1}Ready = 1;
                    }

                    xC${b+1} = xTexelC${b+1};
                    `}}else b<h&&(a%2===1?(f+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.0);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
              `,b+1<h&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${b+1} = vec4(xTexelC${b+1}.xy, final.xy);
                `)):(f+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(
                  xTexelC${b}.xy, xTexelC${b+1}.xy);
              `,b+1<h&&(f+=`
                  xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
                `)));b<h&&(f+=`
            wTexel = getW(r, ${b}, d1, q);
            dotProd += xC${b} * vec4(wTexel.xz, wTexel.xz);
          `,b+1<h&&(f+=`
              wTexel = getW(r, ${b+1}, d1, q);
              dotProd += xC${b+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let p="",m="";s&&(r?p=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:o?p=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:p=`vec4 activation(vec4 x) {
          ${s}
        }`,m="result = activation(result);");const g=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${p}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${g}
        ${m}
        setOutput(result);
      }
    `}}function u5(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;let u=l;u==null&&(u=[1,1]),T(Ue(i,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);const h=Me(r.shape,o.shape,i,u,a,c,!0);let d;X().getBool("WEBGL_PACK_DEPTHWISECONV")&&h.strideWidth<=2&&h.outChannels/h.inChannels===1?d=new UC(h):d=new WC(h);const f=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];return e.runWebGLProgram(d,[r,o],"float32",f)}const h5={kernelName:_c,backendName:"webgl",kernelFunc:u5};class d5{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideHeight,s=t.strideWidth,r=t.padInfo.top,o=t.padInfo.left,i=t.outChannels/t.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${e} - ${r};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${o};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class f5{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,r=t.strideHeight,o=t.strideWidth,i=e-1-t.padInfo.top,a=s-1-t.padInfo.left,l=t.outChannels/t.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${l}; dm++) {
              int d2 = d1 * ${l} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function p5(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,dy:o}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s,h=Me(r.shape,u,i,a,l,c,!0),d=new d5(h);return e.runWebGLProgram(d,[r,o],"float32")}const m5={kernelName:rf,backendName:"webgl",kernelFunc:p5};function g5(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,filter:o}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s,h=Me(u,o.shape,i,a,l,c,!0),d=new f5(h);return e.runWebGLProgram(d,[r,o],"float32")}const x5={kernelName:of,backendName:"webgl",kernelFunc:g5};class b5{constructor(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}function y5(n){const{inputs:t,backend:e}=n,{x:s}=t,r=[...s.shape,...s.shape],o=Y(s.shape),i=ot({inputs:{x:s},backend:e,attrs:{shape:[o]}}),a=new b5(o),l=e.runWebGLProgram(a,[i],i.dtype),c=ot({inputs:{x:l},backend:e,attrs:{shape:r}});return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(l),c}const w5={kernelName:af,backendName:"webgl",kernelFunc:y5};class v5{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const{inHeight:e,inWidth:s,padInfo:r,strideHeight:o,strideWidth:i,filterHeight:a,filterWidth:l,dilationHeight:c,dilationWidth:u}=t,{top:h,left:d}=r;this.userCode=`
      const ivec2 strides = ivec2(${o}, ${i});
      const ivec2 pads = ivec2(${h}, ${d});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${a}; h++) {
          int hIn = hBeg + h * ${c};

          if (hIn >= 0 && hIn < ${e}) {
            for (int w = 0; w < ${l}; w++) {
              int wIn = wBeg + w * ${u};

              if (wIn >= 0 && wIn < ${s}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}function C5(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o}=t,{strides:i,pad:a,dilations:l}=s,c=Na(r.shape,o.shape,i,a,"NHWC",l);let u;const h=new v5(c);u=e.runWebGLProgram(h,[r,o],"float32");const d=ot({inputs:{x:u},backend:e,attrs:{shape:c.outShape}});return e.disposeIntermediateTensorInfo(u),d}const $5={kernelName:Fc,backendName:"webgl",kernelFunc:C5};function k5(n){const{inputs:t,backend:e,attrs:s}=n,{equation:r}=s,o=t,{allDims:i,summedDims:a,idDims:l}=Ip(r,o.length);Np(i.length,l,o);const{path:c,steps:u}=Tp(a,l),h=u.length;let d=null,f=i.length;const p=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=Sp(f,l[g]);let w;Ep(x)?w=o[g]:(w=tn({inputs:{x:o[g]},backend:e,attrs:{perm:x}}),p.push(w));const y=w.shape.slice();for(let v=0;v<b.length;++v)y.splice(b[v],0,1);Pt(w.shape,y)||(w=ot({inputs:{x:w},backend:e,attrs:{shape:y}}),p.push(w)),d===null?d=w:(d=pm({inputs:{a:w,b:d},backend:e}),p.push(d))}m<h-1&&(c[m]>=0&&(d=Xu({inputs:{x:d},backend:e,attrs:{axis:c[m]-(i.length-f),keepDims:!1}}),p.push(d)),f--)}for(const m of p)m!==d&&e.disposeIntermediateTensorInfo(m);return d}const I5={kernelName:lf,backendName:"webgl",kernelFunc:k5};const S5="return (x >= 0.0) ? x : (exp(x) - 1.0);",N5=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,T5=_t({opSnippet:S5,packedOpSnippet:N5}),E5={kernelName:Hi,backendName:"webgl",kernelFunc:T5};const R5="return (b >= 0.0) ? a : a * (b + 1.0);",A5=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,D5=n=>{const{inputs:t,backend:e}=n,{dy:s,y:r}=t,o=X().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Uo(A5,s.shape,r.shape):new Wr(R5,s.shape,r.shape);return e.runWebGLProgram(o,[s,r],s.dtype)},_5={kernelName:cf,backendName:"webgl",kernelFunc:D5};const F5=`
  return vec4(equal(a, b));
`,O5="return float(a == b);",M5=Pe({opSnippet:O5,packedOpSnippet:F5,dtype:"bool",cpuKernelImpl:pG}),L5={kernelName:Oc,backendName:"webgl",kernelFunc:M5};const P5=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${bp};
  float a1 = ${yp};
  float a2 = ${wp};
  float a3 = ${vp};
  float a4 = ${Cp};
  float a5 = ${$p};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,z5=_t({opSnippet:P5}),B5={kernelName:qi,backendName:"webgl",kernelFunc:z5};const V5=Go+`
  return exp(x);
`,W5=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,GC=_t({opSnippet:V5,packedOpSnippet:W5,cpuKernelImpl:mG,dtype:"float32"}),U5={kernelName:Xi,backendName:"webgl",kernelFunc:GC};function yd(n){const{inputs:t,attrs:e,backend:s}=n,{dim:r}=e,{input:o}=t,i=o.shape.length,a=o.shape.slice();let l=r;return r<0&&(T(-(i+1)<=r,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+r+1),a.splice(l,0,1),ot({inputs:{x:o},backend:s,attrs:{shape:a}})}const G5={kernelName:Mc,backendName:"webgl",kernelFunc:yd};const Fx="return exp(x) - 1.0;",H5=_t({opSnippet:Fx,packedOpSnippet:Fx,cpuKernelImpl:gG}),q5={kernelName:Ki,backendName:"webgl",kernelFunc:H5};class Ox{constructor(t,e,s){this.variableNames=["real","imag"];const r=e[1];this.outputShape=e;const o=s?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=s?`${r}.0`:"1.0";let a;if(t==="real")a="return real * expR - imag * expI;";else if(t==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${t}.`);this.userCode=`
      const float exponentMultiplier = ${o};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${a}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${r});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${r}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${i};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}function HC(n,t,e){const s=e.texData.get(n.dataId),r=Y(n.shape),o=n.shape[n.shape.length-1],i=r/o,a=ot({inputs:{x:n},backend:e,attrs:{shape:[i,o]}}),l=a.shape,c=new Ox("real",l,t),u=new Ox("imag",l,t),h=[{dataId:s.complexTensorInfos.real.dataId,dtype:s.complexTensorInfos.real.dtype,shape:l},{dataId:s.complexTensorInfos.imag.dataId,dtype:s.complexTensorInfos.imag.dtype,shape:l}],d=e.runWebGLProgram(c,h,"float32"),f=e.runWebGLProgram(u,h,"float32"),p=pr({inputs:{real:d,imag:f},backend:e});e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f);const m=ot({inputs:{x:p},backend:e,attrs:{shape:n.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(p),m}function X5(n){const{inputs:t,backend:e}=n,{input:s}=t;return HC(s,!1,e)}const K5={kernelName:uf,backendName:"webgl",kernelFunc:X5};class j5{constructor(t,e){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}function Ka(n){const{backend:t,attrs:e}=n,{shape:s,value:r}=e;let{dtype:o}=e;if(o=o||Eo(r),o==="string"){const i=he(o,Y(s));return i.fill(r),t.makeTensorInfo(s,o,i)}else{const i=new j5(s,r),a=[[r]];return t.runWebGLProgram(i,[],o,a)}}const Y5={kernelName:hf,backendName:"webgl",kernelFunc:Ka};class Z5{constructor(t){this.variableNames=["Image"],this.outputShape=[];const e=t[2];this.outputShape=t,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${e} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${e}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const J5={kernelName:df,backendName:"webgl",kernelFunc:({inputs:n,backend:t})=>{const{image:e}=n,s=t,r=new Z5(e.shape);return s.runWebGLProgram(r,[e],e.dtype)}};const Mx="return floor(x);",Q5=_t({opSnippet:Mx,packedOpSnippet:Mx,cpuKernelImpl:xG}),tX={kernelName:ji,backendName:"webgl",kernelFunc:Q5};const eX=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,nX=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,sX=Pe({opSnippet:eX,packedOpSnippet:nX,dtype:"int32"}),rX={kernelName:Yi,backendName:"webgl",kernelFunc:sX};class oX{constructor(t){this.variableNames=["A"];const e=en(),[s,r]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}.0, ${s}.0);

        vec4 values = ${e.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}class iX{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const e=en(),[s,r]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${r}.0, ${s}.0);
            vec4 values = ${e.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${e.output} = result;
      }
    `}}const aX={kernelName:$N,backendName:"webgl",kernelFunc:lX};let eo,Ch=X().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function lX(n){const{inputs:t,backend:e,attrs:s}=n;let{pixels:r}=t;const{numChannels:o}=s,i=typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement,a=typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement,[l,c]=i?[r.videoWidth,r.videoHeight]:[r.width,r.height],u=[c,l],h=[c,l,o];if(a||i){const m=X().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(eo==null||m!==Ch)&&(Ch=m,eo=document.createElement("canvas").getContext("2d",{willReadFrequently:Ch})),eo.canvas.width=l,eo.canvas.height=c,eo.drawImage(r,0,0,l,c),r=eo.canvas}const d=e.makeTensorInfo(u,"int32");e.texData.get(d.dataId).usage=wn.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),r);const f=X().getBool("WEBGL_PACK")?new iX(h):new oX(h),p=e.runWebGLProgram(f,[d],"int32");return e.disposeData(d.dataId),p}function cX(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:f,leakyreluAlpha:p}=s,m=zs(u),g=Me(r.shape,o.shape,l,h,c,d,!1,m);let x;const b=[],w=i!=null,y=a!=null,v=f==="leakyrelu",$=()=>{const S=[r,o],I=(k,C)=>{if(C==="NCHW"&&k.shape.length===1&&k.shape[0]!==1){const E=ot({inputs:{x:k},backend:e,attrs:{shape:[k.shape[0],1,1]}});return b.push(E),E}return k};if(w&&S.push(I(i,u)),y&&S.push(I(a,u)),v){const k=e.makeTensorInfo([],"float32",ar(p,"float32"));S.push(k),b.push(k)}return S};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type==="SAME"||g.padInfo.type==="VALID"))x=zC({x:r,filter:o,convInfo:g,backend:e,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:p});else if(g.strideWidth<=2&&m==="channelsLast"&&X().getBool("WEBGL_EXP_CONV")){const S=f?Ii(f,!0):null,I=new PC(g,w,S,y,v),k=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],C=$();x=e.runWebGLProgram(I,C,"float32",k)}else if(X().getBool("WEBGL_CONV_IM2COL"))x=BC({x:r,filter:o,convInfo:g,backend:e,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:p});else{const S=f?Ii(f,!1):null,I=new LC(g,w,S,y,v),k=$();x=e.runWebGLProgram(I,k,"float32")}const N=ot({inputs:{x},backend:e,attrs:{shape:g.outShape}});return b.push(x),b.forEach(S=>e.disposeIntermediateTensorInfo(S)),N}const uX={kernelName:Gl,backendName:"webgl",kernelFunc:cX};function hX(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,filter:o,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dilations:u,dimRoundingMode:h,activation:d,leakyreluAlpha:f}=s,p=[];let m=u;m==null&&(m=[1,1]),T(Ue(l,m),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${m}'`);const g=Me(r.shape,o.shape,l,m,c,h,!0),x=X().getBool("WEBGL_PACK_DEPTHWISECONV")&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,b=d?Ii(d,x):null,w=[r,o],y=i!=null,v=a!=null,$=d==="leakyrelu";if(y&&w.push(i),v&&w.push(a),$){const k=e.makeTensorInfo([],"float32",ar(f,"float32"));w.push(k),p.push(k)}let N;x?N=new UC(g,y,b,v,$):N=new WC(g,y,b,v,$);const S=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],I=e.runWebGLProgram(N,w,"float32",S);return p.forEach(k=>e.disposeIntermediateTensorInfo(k)),I}const dX={kernelName:Q0,backendName:"webgl",kernelFunc:hX};class fX{constructor(t,e,s,r){this.sliceDim=t,this.strides=e,this.paramsShape=r,this.variableNames=["x","indices"],this.outputShape=s;const o=qt(s.length);let i=`
    int index;`;for(let a=0;a<this.sliceDim;a++)i+=`
          index = round(getIndices(coords[0], ${a}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[a]};
          flattenIndex += index * ${this.strides[a]};`;this.userCode=`
         void main() {
          ${o} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${i}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}function pX(n){const{inputs:t,backend:e}=n,{params:s,indices:r}=t,o=r.shape,i=o[o.length-1],a=Y(s.shape),[l,c,u,h]=hp(s,r),d=ot({inputs:{x:r},backend:e,attrs:{shape:[c,i]}}),f=ot({inputs:{x:s},backend:e,attrs:{shape:[Y(s.shape)/u,u]}});if(e.shouldExecuteOnCPU([s,r])||s.dtype==="string"){const x=e.readSync(r.dataId),b=e.bufferSync(s),w=bG(x,b,s.dtype,c,i,u,h,s.shape,a);return e.makeTensorInfo(l,s.dtype,w.values)}const p=new fX(i,h,[c,u],s.shape),m=e.runWebGLProgram(p,[f,d],f.dtype),g=ot({inputs:{x:m},backend:e,attrs:{shape:l}});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),g}const mX={kernelName:O0,backendName:"webgl",kernelFunc:pX};class gX{constructor(t,e){this.variableNames=["A","indices"],this.outputShape=e,this.rank=e.length;const s=qt(this.rank),r=xX(t);this.userCode=`
      void main() {
        ${s} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${t[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${r}));
      }
    `}}function xX(n,t){const e=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[];for(let r=0;r<n.length;r++)r===2?s.push("index"):s.push(`${e[r]}`);return s.join()}function qC(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,indices:o}=t,{axis:i,batchDims:a}=s,l=Tt(i,r.shape)[0];if(X().get("DEBUG")){const b=e.readSync(o.dataId),w=r.shape[l];for(let y=0;y<b.length;++y){const v=b[y];T(v<=w-1&&v>=0,()=>`GatherV2: the index value ${v} is not in [0, ${w-1}]`)}}const c=Oy(r,o,l,a),u=Y(o.shape),h=[],d=ot({inputs:{x:r},backend:e,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),f=ot({inputs:{x:o},backend:e,attrs:{shape:[c.batchSize,u/c.batchSize]}});h.push(d),h.push(f);const p=[c.batchSize,c.outerSize,u/c.batchSize,c.sliceSize];if(e.shouldExecuteOnCPU([r,o])||r.dtype==="string"){const b=e.bufferSync(f),w=e.bufferSync(d),y=yG(w,b,p);return h.forEach(v=>e.disposeIntermediateTensorInfo(v)),e.makeTensorInfo(c.outputShape,y.dtype,y.values)}const m=new gX(d.shape,p),g=e.runWebGLProgram(m,[d,f],d.dtype);h.push(g);const x=ot({inputs:{x:g},backend:e,attrs:{shape:c.outputShape}});return h.forEach(b=>e.disposeIntermediateTensorInfo(b)),x}const bX={kernelName:Pc,backendName:"webgl",kernelFunc:qC};const yX="return float(a > b);",wX=`
  return vec4(greaterThan(a, b));
`,vX=Pe({opSnippet:yX,packedOpSnippet:wX,cpuKernelImpl:wG,dtype:"bool"}),CX={kernelName:zc,backendName:"webgl",kernelFunc:vX};const $X="return float(a >= b);",kX=`
  return vec4(greaterThanEqual(a, b));
`,IX=Pe({opSnippet:$X,packedOpSnippet:kX,dtype:"bool",cpuKernelImpl:vG}),SX={kernelName:Zi,backendName:"webgl",kernelFunc:IX};function NX(n){const{inputs:t,backend:e}=n,{input:s}=t;return HC(s,!0,e)}const TX={kernelName:ff,backendName:"webgl",kernelFunc:NX};const EX="return float(!isnan(x) && !isinf(x));",RX=_t({opSnippet:EX,dtype:"bool"}),AX={kernelName:Qi,backendName:"webgl",kernelFunc:RX};const DX="return float(isinf(x));",_X=_t({opSnippet:DX,dtype:"bool"}),FX={kernelName:ta,backendName:"webgl",kernelFunc:_X};const OX="return float(isnan(x));",MX=_t({opSnippet:OX,dtype:"bool"}),LX={kernelName:ea,backendName:"webgl",kernelFunc:MX};const PX="return float(a < b);",zX=`
  return vec4(lessThan(a, b));
`,BX=Pe({opSnippet:PX,packedOpSnippet:zX,cpuKernelImpl:CG,dtype:"bool"}),VX={kernelName:Vc,backendName:"webgl",kernelFunc:BX};const WX="return float(a <= b);",UX=`
  return vec4(lessThanEqual(a, b));
`,GX=Pe({opSnippet:WX,packedOpSnippet:UX,cpuKernelImpl:$G,dtype:"bool"}),HX={kernelName:Wc,backendName:"webgl",kernelFunc:GX};function qX(n){const{backend:t,attrs:e}=n,{start:s,stop:r,num:o}=e,i=kG(s,r,o);return t.makeTensorInfo([i.length],"float32",i)}const XX={kernelName:M0,backendName:"webgl",kernelFunc:qX};const KX=Go+`
  return x < 0.0 ? 0./0. : log(x);
`,jX=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,YX=_t({opSnippet:KX,packedOpSnippet:jX,cpuKernelImpl:IG}),ZX={kernelName:na,backendName:"webgl",kernelFunc:YX};const JX=Go+`
  return log(1.0 + x);
`,QX=_t({opSnippet:JX}),tK={kernelName:sa,backendName:"webgl",kernelFunc:QX};const eK="return float(a >= 1.0 && b >= 1.0);",nK=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,sK=Pe({opSnippet:eK,packedOpSnippet:nK,dtype:"bool"}),rK={kernelName:Uc,backendName:"webgl",kernelFunc:sK};const oK="return float(!(x >= 1.0));",iK=_t({opSnippet:oK}),aK={kernelName:Gc,backendName:"webgl",kernelFunc:iK};const lK="return float(a >= 1.0 || b >= 1.0);",cK=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,uK=Pe({opSnippet:lK,packedOpSnippet:cK,dtype:"bool"}),hK={kernelName:Hc,backendName:"webgl",kernelFunc:uK};class dK{constructor(t,e,s,r,o){this.variableNames=["x"],this.outputShape=[];const i=e,a=t[3]-1;this.outputShape=t;let l;const c=`float(${s}) + float(${r}) * sum`;o===.5?l=`inversesqrt(${c})`:o===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${o}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${i}; j <= ${i}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${a}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${l};
        setOutput(val);
      }
    `}}class fK{constructor(t,e,s,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const i=e,a=t[3]-1;this.outputShape=t;let l;const c=`float(${s}) + float(${r}) * sum`;o===.5?l=`inversesqrt(${c})`:o===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${o}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${i};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${i}; j <= ${i}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${a}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${l};
        setOutput(result);
      }
    `}}const pK=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{depthRadius:o,bias:i,alpha:a,beta:l}=s,c=X().getBool("WEBGL_PACK_NORMALIZATION")?new fK(r.shape,o,i,a,l):new dK(r.shape,o,i,a,l);return e.runWebGLProgram(c,[r],r.dtype)},mK={kernelName:qc,backendName:"webgl",kernelFunc:pK};class gK{constructor(t,e,s,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=e,this.bias=s,this.alpha=r,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${e})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${e} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${r}) * norm + float(${s});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${r})
                * float(${o})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${o});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}const xK=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:r,y:o,dy:i}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=s,h=new gK(r.shape,a,l,c,u);return e.runWebGLProgram(h,[r,o,i],r.dtype)},bK={kernelName:mf,backendName:"webgl",kernelFunc:xK};function yK(n,t,e,s){const r=Y(t),i=Y(n.shape)/r,a=ot({inputs:{x:n},attrs:{shape:[i,r]},backend:s}),l=Jr(a,n.dtype,"max",s),c=ot({inputs:{x:l},attrs:{shape:e},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}function XC(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{reductionIndices:o,keepDims:i}=s,a=r.shape.length,l=Tt(o,r.shape);let c=l;const u=ie(c,a),h=u!=null,d=e.shouldExecuteOnCPU([r]);let f=r;if(h){if(d){const w=e.texData.get(f.dataId).values,y=new Array(a);for(let N=0;N<y.length;N++)y[N]=r.shape[u[N]];const v=dm(w,r.shape,r.dtype,u,y);f=e.makeTensorInfo(y,r.dtype);const $=e.texData.get(f.dataId);$.values=v}else f=qu(r,u,e);c=pe(c.length,a)}Le("max",c,a);const[p,m]=De(f.shape,c);let g=p;i&&(g=ye(p,l));let x;if(d){const w=e.texData.get(f.dataId).values,y=SG(w,Y(m),g,r.dtype);x=e.makeTensorInfo(g,r.dtype);const v=e.texData.get(x.dataId);v.values=y}else x=yK(f,m,g,e);return h&&e.disposeIntermediateTensorInfo(f),x}const wK={kernelName:Xc,backendName:"webgl",kernelFunc:XC};const vK=fm+`
  return max(a, b);
`,CK=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Zr+`
  return result;
`,$K=Pe({opSnippet:vK,packedOpSnippet:CK,cpuKernelImpl:NG}),kK={kernelName:ra,backendName:"webgl",kernelFunc:$K};function IK(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t;Ha(r,"maxPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=s,c=1;T(Ue(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=On(r.shape,o,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Pt(u.inShape,u.outShape))return xn({inputs:{x:r},backend:e});const h=new Si(u,"max",!1);return e.runWebGLProgram(h,[r],r.dtype)}const SK={kernelName:Kc,backendName:"webgl",kernelFunc:IK};function NK(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{filterSize:o,strides:i,pad:a,dataFormat:l,dimRoundingMode:c}=s,u=[1,1,1],h=Ps(r.shape,o,i,u,a,c,l),d=new mm(h,"max",!1);return e.runWebGLProgram(d,[r],r.dtype)}const TK={kernelName:jc,backendName:"webgl",kernelFunc:NK};class EK{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const e=t.strideHeight,s=t.strideWidth,r=t.dilationHeight,o=t.effectiveFilterHeight,i=t.effectiveFilterWidth,a=o-1-t.padInfo.top,l=i-1-t.padInfo.left,c=o*i-1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${o};
          wR += ${r}) {
          float dyR = float(dyRCorner + wR) / ${e}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${c} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class RK{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const e=t.strideDepth,s=t.strideHeight,r=t.strideWidth,o=t.dilationDepth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterDepth,c=t.effectiveFilterHeight,u=t.effectiveFilterWidth,h=l-1-t.padInfo.front,d=c-1-t.padInfo.top,f=u-1-t.padInfo.left,p=l*c*u-1;this.userCode=`
      const ivec3 pads = ivec3(${h}, ${d}, ${f});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${l};
           wD += ${o}) {
          float dyD = float(dyDCorner + wD) / ${e}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${s}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${u};
                wC += ${a}) {
              float dyC = float(dyCCorner + wC) / ${r}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${p} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${c} * ${u} +
                  wR * ${u} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function AK(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o}=t,i=o,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=Ps(i.shape,a,l,h,c,u),f=new mm(d,"max",!0),p=e.runWebGLProgram(f,[i],i.dtype),m=new RK(d),g=e.runWebGLProgram(m,[r,p],i.dtype);return e.disposeIntermediateTensorInfo(p),g}const DK={kernelName:xf,backendName:"webgl",kernelFunc:AK};function _K(n){const{inputs:t,backend:e,attrs:s}=n,{dy:r,input:o,output:i}=t,a=o;Ha([o,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=On(a.shape,l,c,1,u,h),f=!0,p=new Si(d,"max",f),m=e.runWebGLProgram(p,[a],a.dtype),g=new EK(d),x=e.runWebGLProgram(g,[r,m],a.dtype);return e.disposeIntermediateTensorInfo(m),x}const FK={kernelName:gf,backendName:"webgl",kernelFunc:_K};function OK(n,t,e,s){let r=new Si(e,"max",!1);const o=s.runWebGLProgram(r,[n],"float32");r=new Si(e,"max",!0,!0,t);const i=s.runWebGLProgram(r,[n],"float32");return[o,i]}const MK={kernelName:L0,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{filterSize:r,strides:o,pad:i,includeBatchInIndex:a}=t,l=e;T(s.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${s.shape.length}.`);const c=[1,1];T(Ue(o,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${c}'`);const u=On(s.shape,r,o,c,i),[h,d]=OK(s,a,u,l);return[h,d]}};function LK(n,t,e,s){const r=Y(t),i=Y(n.shape)/r,a=ot({inputs:{x:n},attrs:{shape:[i,r]},backend:s}),l=Jr(a,"float32","mean",s),c=ot({inputs:{x:l},attrs:{shape:e},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}const PK={kernelName:Yc,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{keepDims:r,axis:o}=t,i=e,a=s.shape.length,l=Tt(o,s.shape);let c=l;const u=ie(c,a),h=u!=null,d=i.shouldExecuteOnCPU([s]),f=[];let p=s;if(h){if(d){const y=i.texData.get(p.dataId).values,v=new Array(a);for(let S=0;S<v.length;S++)v[S]=s.shape[u[S]];const $=dm(y,s.shape,s.dtype,u,v);p=i.makeTensorInfo(v,s.dtype);const N=i.texData.get(p.dataId);N.values=$}else p=qu(s,u,i);f.push(p),c=pe(c.length,a)}Le("sum",c,a);const[m,g]=De(p.shape,c);let x=m;r&&(x=ye(m,l));const b=LK(p,g,x,i);for(const w of f)i.disposeIntermediateTensorInfo(w);return b}};function zK(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s,a=r.shape.length,l=Tt(o,r.shape);let c=l;const u=ie(c,a);let h=r;u!=null&&(h=tn({inputs:{x:r},backend:e,attrs:{perm:u}}),c=pe(c.length,r.shape.length)),Le("min",c,a);const[d,f]=De(h.shape,c),p=Y(f),m=ot({inputs:{x:h},backend:e,attrs:{shape:[-1,p]}}),g=Jr(m,m.dtype,"min",e);let x;if(i){const b=ye(d,l);x=ot({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=ot({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const BK={kernelName:Zc,backendName:"webgl",kernelFunc:zK};const VK=fm+`
  return min(a, b);
`,WK=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Zr+`
  return result;
`,UK=Pe({opSnippet:VK,packedOpSnippet:WK,cpuKernelImpl:TG}),GK={kernelName:oa,backendName:"webgl",kernelFunc:UK};class HK{constructor(t,e,s){this.variableNames=["x"],this.outputShape=e.map((u,h)=>u[0]+t[h]+u[1]);const r=t.length,o=qt(r),i=e.map(u=>u[0]).join(","),a=e.map((u,h)=>u[0]+t[h]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r),c=s==="reflect"?0:1;if(r===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${c};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${c};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${o} start = ${o}(${i});
      ${o} end = ${o}(${a});

      void main() {
        ${o} outC = getOutputCoords();
        for (int i = 0; i < ${r}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${c};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};
          }
        }
        ${o} coords = outC - start;
        setOutput(getX(${l}));
      }
    `}}class qK{constructor(t,e,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.map((p,m)=>p[0]+t[m]+p[1]);const r=t.length,o=qt(r),i=e.map(p=>p[0]).join(","),a=e.map((p,m)=>p[0]+t[m]).join(","),l=Je("rc",r),c=Je("source",r),u=`${l[r-1]} < ${this.outputShape[r-1]}`,h=r===1?"source":`vec2(${c.slice(-2).join()})`,d=s==="reflect"?0:1;let f="";if(r===1){const p=`
        ${o} source = rc;
        if (source < start) {
          source = start * 2 - source - ${d};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${d};
        }
        source -= start;
      `;f=`
        ${o} rc = outputLoc;
        ${p}
        result[0] = getChannel(getX(${c.join()}), ${h});
        ${l[r-1]} += 1;
        if(${u}) {
          ${p}
          result[1] = getChannel(getX(${c.join()}), ${h});
        }
      `}else{const p=`
        ${o} source = rc;
        ${o} lt = ${o}(lessThan(source, start));
        ${o} gte = ${o}(greaterThanEqual(source, end));
        ${o} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${d}) +
                gte * ((end - 1) * 2 - source + ${d});
        source -= start;
      `;f=`
        ${o} rc = outputLoc;
        ${p}
        result[0] = getChannel(getX(${c.join()}), ${h});
        ${l[r-1]} += 1;
        if(${u}) {
          ${p}
          result[1] = getChannel(getX(${c.join()}), ${h});
        }
        rc = outputLoc;
        ${l[r-2]} += 1;
        if(${l[r-2]} < ${this.outputShape[r-2]}) {
          ${p}
          result[2] = getChannel(getX(${c.join()}), ${h});
          ${l[r-1]} += 1;
          if(${u}) {
            ${p}
            result[3] = getChannel(getX(${c.join()}), ${h});
          }
        }
      `}this.userCode=`
      const ${o} start = ${o}(${i});
      const ${o} end = ${o}(${a});

      void main() {
        ${o} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}}const XK=({inputs:n,backend:t,attrs:e})=>{const{x:s}=n,{paddings:r,mode:o}=e,i=X().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new qK(s.shape,r,o):new HK(s.shape,r,o);return t.runWebGLProgram(i,[s],s.dtype)},KK={kernelName:Jc,backendName:"webgl",kernelFunc:XK};const jK=`if (b == 0.0) return NAN;
  return mod(a, b);`,YK=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+Zr+`
  return result;
`,ZK=Pe({opSnippet:jK,packedOpSnippet:YK}),JK={kernelName:ia,backendName:"webgl",kernelFunc:ZK};class QK{constructor(t,e,s){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[t,s],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${e-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${e-1}));
      }
    `}}const tj=`
if (a == b) {
  return 1.0;
};
return a / b;`,ej=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,KC=Pe({opSnippet:tj,packedOpSnippet:ej,checkOutOfBounds:!0}),nj={kernelName:Gi,backendName:"webgl",kernelFunc:KC};const Lx="return a - b;",jC=Pe({opSnippet:Lx,packedOpSnippet:Lx,supportsComplex:!0,cpuKernelImpl:jG}),sj={kernelName:Ca,backendName:"webgl",kernelFunc:jC};function YC(n){const{inputs:t,backend:e,attrs:s}=n,{logits:r}=t,{dim:o}=s,i=Tt([o],r.shape),a=XC({inputs:{x:r},backend:e,attrs:{reductionIndices:i,keepDims:!1}}),l=ye(a.shape,i),c=ot({inputs:{x:a},backend:e,attrs:{shape:l}}),u=jC({inputs:{a:r,b:c},backend:e}),h=GC({inputs:{x:u},backend:e}),d=Xu({inputs:{x:h},backend:e,attrs:{axis:i,keepDims:!1}}),f=ot({inputs:{x:d},backend:e,attrs:{shape:l}}),p=KC({inputs:{a:h,b:f},backend:e});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(f),p}const rj={kernelName:gu,backendName:"webgl",kernelFunc:YC};function oj(n){const{inputs:t,backend:e,attrs:s}=n,{logits:r}=t,{numSamples:o,seed:i,normalized:a}=s,l=a?r:YC({inputs:{logits:r},backend:e,attrs:{dim:r.shape.length-1}}),c=l.shape[0],u=l.shape[1],h=new QK(c,u,o),d=[[i]],f=e.runWebGLProgram(h,[l],"int32",d);return a||e.disposeIntermediateTensorInfo(l),f}const ij={kernelName:P0,backendName:"webgl",kernelFunc:oj};const aj=Ln+`
  return -x;
`,lj=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function cj(n){const{inputs:t,backend:e}=n,{x:s}=t;if(e.shouldExecuteOnCPU([s])){const o=e.texData.get(s.dataId),[i,a]=RG(o.values,s.shape,s.dtype);return e.makeTensorInfo(a,s.dtype,i)}let r;return X().getBool("WEBGL_PACK_UNARY_OPERATIONS")?r=new Ks(s.shape,lj):r=new us(s.shape,aj),e.runWebGLProgram(r,[s],s.dtype)}const uj={kernelName:Qc,backendName:"webgl",kernelFunc:cj};const hj=ip;function dj(n){yn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s,c=e.readSync(r.dataId),u=e.readSync(o.dataId),{selectedIndices:h}=hj(c,u,i,a,l);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}const fj={kernelName:bf,backendName:"webgl",kernelFunc:dj};const pj=ap;function mj(n){yn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s,u=e.readSync(r.dataId),h=e.readSync(o.dataId),{selectedIndices:d,validOutputs:f}=pj(u,h,i,a,l,c);return[e.makeTensorInfo([d.length],"int32",new Int32Array(d)),e.makeTensorInfo([],"int32",new Int32Array([f]))]}const gj={kernelName:yf,backendName:"webgl",kernelFunc:mj};const xj=lp;function bj(n){yn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s,u=e.readSync(r.dataId),h=e.readSync(o.dataId),d=i,f=a,p=l,m=c,{selectedIndices:g,selectedScores:x}=xj(u,h,d,f,p,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const yj={kernelName:wf,backendName:"webgl",kernelFunc:bj};class wj{constructor(t,e,s,r){this.variableNames=["indices"],this.outputShape=[t,e],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${r}), float(${s}),
                      float(index == coords.y)));
      }
    `}}const vj=n=>{const{inputs:t,backend:e,attrs:s}=n,{indices:r}=t,{dtype:o,depth:i,onValue:a,offValue:l}=s,c=Y(r.shape),u=new wj(c,i,a,l),h=ot({inputs:{x:r},backend:e,attrs:{shape:[c]}}),d=e.runWebGLProgram(u,[h],o);e.disposeIntermediateTensorInfo(h);const f=[...r.shape,i],p=ot({inputs:{x:d},backend:e,attrs:{shape:f}});return e.disposeIntermediateTensorInfo(d),p},Cj={kernelName:nu,backendName:"webgl",kernelFunc:vj};function mc(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="complex64"){const r=Xa({inputs:{input:s},backend:e}),o=mc({inputs:{x:r},backend:e}),i=Ku({inputs:{input:s},backend:e}),a=mc({inputs:{x:i},backend:e}),l=pr({inputs:{real:o,imag:a},backend:e});return e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return Ka({attrs:{shape:s.shape,dtype:s.dtype,value:s.dtype==="string"?"":0},backend:e})}const $j={kernelName:yu,backendName:"webgl",kernelFunc:mc};function ZC(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(s.dtype==="complex64"){const r=Xa({inputs:{input:s},backend:e}),o=ZC({inputs:{x:r},backend:e}),i=Ku({inputs:{input:s},backend:e}),a=mc({inputs:{x:i},backend:e}),l=pr({inputs:{real:o,imag:a},backend:e});return e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return Ka({attrs:{shape:s.shape,dtype:s.dtype,value:1},backend:e})}const kj={kernelName:eu,backendName:"webgl",kernelFunc:ZC};function Ij(n){const{inputs:t,backend:e,attrs:s}=n,{axis:r}=s;if(t.length===1)return yd({inputs:{input:t[0]},backend:e,attrs:{dim:r}});const o=t[0].shape,i=t[0].dtype;t.forEach(u=>{zd(o,u.shape,"All tensors passed to stack must have matching shapes"),T(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=t.map(u=>{const h=yd({inputs:{input:u},backend:e,attrs:{dim:r}});return a.push(h),h}),c=MC({inputs:l,backend:e,attrs:{axis:r}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),c}const Sj={kernelName:su,backendName:"webgl",kernelFunc:Ij};class Nj{constructor(t,e,s){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((c,u)=>c[0]+t[u]+c[1]);const r=t.length,o=qt(r),i=e.map(c=>c[0]).join(","),a=e.map((c,u)=>c[0]+t[u]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);if(r===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${o} start = ${o}(${i});
      ${o} end = ${o}(${a});

      void main() {
        ${o} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${o} coords = outC - start;
          setOutput(getX(${l}));
        }
      }
    `}}class Tj{constructor(t,e,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((m,g)=>m[0]+t[g]+m[1]);const r=t.length,o=qt(r),i=e.map(m=>m[0]).join(","),a=e.map((m,g)=>m[0]+t[g]).join(","),l=Je("rc",r),c=Je("source",r),u=`${l[r-1]} < ${this.outputShape[r-1]}`,h=r===1?"source":`vec2(${c.slice(-2).join()})`,d=[`${o} rc = outputLoc;`,`${l[r-1]} += 1;
       if(${u}) {
      `,r===1?"":`}
       rc = outputLoc;
       ${l[r-2]} += 1;
       if(${l[r-2]} < ${this.outputShape[r-2]}) {`,r===1?"":`  ${l[r-1]} += 1;
         if(${u}) {`],f=r===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let p="";for(let m=0,g=r===1?2:4;m<g;m++)p+=`
        ${d[m]}
        if (${f}) {
          result[${m}] = float(value);
        } else {
          ${o} source = rc - start;
          result[${m}] = getChannel(getX(${c.join()}), ${h});
        }
      `;p+=r===1?"} ":"}}",this.userCode=`
      const ${o} start = ${o}(${i});
      const ${o} end = ${o}(${a});

      void main() {
        ${o} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}}const JC=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{paddings:o,constantValue:i}=s;if(Y(r.shape)===0){const c=o.map((u,h)=>u[0]+r.shape[h]+u[1]);return Ka({backend:e,attrs:{shape:c,value:i,dtype:r.dtype}})}const a=X().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Tj(r.shape,o,i):new Nj(r.shape,o,i),l=[[i]];return e.runWebGLProgram(a,[r],r.dtype,l)},Ej={kernelName:ru,backendName:"webgl",kernelFunc:JC};const Rj=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,Aj=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+Zr+`
  return result;
`,Dj=Pe({opSnippet:Rj,packedOpSnippet:Aj}),_j={kernelName:la,backendName:"webgl",kernelFunc:Dj};function Fj(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{axis:o,keepDims:i}=s,a=r.shape.length,l=[],c=Tt(o,r.shape);let u=c;const h=ie(u,a);let d=r;h!=null&&(d=tn({inputs:{x:r},backend:e,attrs:{perm:h}}),u=pe(u.length,a),l.push(d)),Le("prod",u,a);let f;if(e.shouldExecuteOnCPU([d])){const p=e.texData.get(d.dataId).values,{outVals:m,outShape:g,outDtype:x}=DG(d.shape,d.dtype,p,u);f=e.makeTensorInfo(g,x,m)}else{const[p,m]=De(d.shape,u),g=Y(m),x=ot({inputs:{x:d},backend:e,attrs:{shape:[-1,g]}}),b=Df(r.dtype),w=Jr(x,b,"prod",e);f=ot({inputs:{x:w},backend:e,attrs:{shape:p}}),l.push(x),l.push(w)}if(i){l.push(f);const p=ye(f.shape,c);f=ot({inputs:{x:f},backend:e,attrs:{shape:p}})}return l.forEach(p=>e.disposeIntermediateTensorInfo(p)),f}const Oj={kernelName:iu,backendName:"webgl",kernelFunc:Fj};function Mj(n){const{inputs:t,backend:e,attrs:s}=n,{paramsNestedSplits:r,paramsDenseValues:o,indices:i}=t,{outputRaggedRank:a}=s,l=r.map(x=>e.readSync(x.dataId)),c=r.map(x=>x.shape),u=e.readSync(o.dataId),h=e.readSync(i.dataId),[d,f,p]=_G(l,c,u,o.shape,o.dtype,h,i.shape,a),m=d.map(x=>e.makeTensorInfo([x.length],"int32",x)),g=e.makeTensorInfo(p,o.dtype,f);return m.concat([g])}const Lj={kernelName:z0,backendName:"webgl",kernelFunc:Mj};function Pj(n){const{inputs:t,backend:e}=n,{starts:s,limits:r,deltas:o}=t,i=e.readSync(s.dataId),a=e.readSync(r.dataId),l=e.readSync(o.dataId),[c,u]=FG(i,s.shape,s.dtype,a,r.shape,l,o.shape),h=e.makeTensorInfo([c.length],"int32",c),d=e.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const zj={kernelName:B0,backendName:"webgl",kernelFunc:Pj};function Bj(n){const{inputs:t,backend:e,attrs:s}=n,{shape:r,values:o,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=s,c=e.readSync(r.dataId),u=e.readSync(o.dataId),h=e.readSync(i.dataId),d=a.map(g=>e.readSync(g.dataId)),f=a.map(g=>g.shape),[p,m]=OG(c,r.shape,u,o.shape,o.dtype,h,i.shape,d,f,l);return e.makeTensorInfo(p,o.dtype,m)}const Vj={kernelName:V0,backendName:"webgl",kernelFunc:Bj};const QC=n=>{const{backend:t,attrs:e}=n,{start:s,stop:r,step:o,dtype:i}=e,a=MG(s,r,o,i);return t.makeTensorInfo([a.length],i,a)},Wj={kernelName:vf,backendName:"webgl",kernelFunc:QC};const Uj="return 1.0 / x;",Gj=_t({opSnippet:Uj}),Hj={kernelName:ca,backendName:"webgl",kernelFunc:Gj};const qj=Ln+`
  return (x < 0.0) ? 0.0 : x;
`,Xj=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Kj=_t({opSnippet:qj,packedOpSnippet:Xj}),jj={kernelName:ua,backendName:"webgl",kernelFunc:Kj};const Yj=Ln+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Zj=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Jj=_t({opSnippet:Yj,packedOpSnippet:Zj}),Qj={kernelName:ha,backendName:"webgl",kernelFunc:Jj};class t8{constructor(t,e,s,r,o){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[r&&e>1?a-1:a,r&&s>1?l-1:l],h=[r&&e>1?e-1:e,r&&s>1?s-1:s];let d;o?d="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":d="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/h[0]},
          ${u[1]/h[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}class e8{constructor(t,e,s,r,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[r&&e>1?a-1:a,r&&s>1?l-1:l],h=[r&&e>1?e-1:e,r&&s>1?s-1:s];let d;o?d="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":d="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/h[0]},
          ${u[1]/h[1]},
          ${u[1]/h[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${s-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}function n8(n){const{inputs:t,backend:e,attrs:s}=n,{images:r}=t,{alignCorners:o,halfPixelCenters:i,size:a}=s,[l,c]=a,u=X().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new e8(r.shape,l,c,o,i):new t8(r.shape,l,c,o,i);return e.runWebGLProgram(u,[r],"float32")}const s8={kernelName:cu,backendName:"webgl",kernelFunc:n8};class r8{constructor(t,e,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,r,o]=e,[,i,a]=t,l=[s&&i>1?r-1:r,s&&a>1?o-1:o],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,f=1/h,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${h});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${r-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${o-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}function o8(n){const{inputs:t,backend:e,attrs:s}=n,{images:r,dy:o}=t,{alignCorners:i}=s,a=new r8(o.shape,r.shape,i);return e.runWebGLProgram(a,[o],o.dtype)}const i8={kernelName:kf,backendName:"webgl",kernelFunc:o8};class a8{constructor(t,e,s,r,o){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[r&&e>1?a-1:a,r&&s>1?l-1:l],h=[r&&e>1?e-1:e,r&&s>1?s-1:s],d=r?"0.5":"0.0";let f;o?f="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":f="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/h[0]},
          ${u[1]/h[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}class l8{constructor(t,e,s,r,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[r&&e>1?a-1:a,r&&s>1?l-1:l],h=[r&&e>1?e-1:e,r&&s>1?s-1:s],d=r?"0.5":"0.0";let f;o?f="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":f="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/h[0]},
          ${u[1]/h[1]},
          ${u[1]/h[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${s-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}function c8(n){const{inputs:t,backend:e,attrs:s}=n,{images:r}=t,{alignCorners:o,halfPixelCenters:i,size:a}=s,[l,c]=a,u=X().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new l8(r.shape,l,c,o,i):new a8(r.shape,l,c,o,i);return e.runWebGLProgram(u,[r],r.dtype)}const u8={kernelName:lu,backendName:"webgl",kernelFunc:c8};class h8{constructor(t,e,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,r,o]=e,[,i,a]=t,l=[s&&i>1?r-1:r,s&&a>1?o-1:o],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,f=1/h,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${h});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float sourceFracRow =
              float(${l[0]}) *
                (float(dyR) / float(${c[0]}));

            float sourceFracCol =
                float(${l[1]}) *
                  (float(dyC) / float(${c[1]}));

            int sourceNearestRow = int(min(
                float(int(${r}) - 1),
                ${s} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${o}) - 1),
                ${s} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}function d8(n){const{inputs:t,backend:e,attrs:s}=n,{images:r,dy:o}=t,{alignCorners:i}=s,a=new h8(o.shape,r.shape,i);return e.runWebGLProgram(a,[o],o.dtype)}const f8={kernelName:$f,backendName:"webgl",kernelFunc:d8};class p8{constructor(t,e){this.variableNames=["x"];const s=t.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);if(this.outputShape=t,s===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${t[0]} - coord - 1));
        }
      `;return}const r=a=>e.indexOf(a)!==-1&&t[a]!==1?`${t[a]} - coords[${a}] - 1`:`coords[${a}]`,o=t.map((a,l)=>r(l)).join(","),i=qt(s);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${o}));
      }
    `}}class m8{constructor(t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const s=t.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);this.outputShape=t;const r=Je("rc",s),o=`${r[s-1]} + 1 < ${this.outputShape[s-1]}`,i=`${r[s-2]} + 1 < ${this.outputShape[s-2]}`,a=qt(s);s===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${t[0]} - rc - 1),
            ${t[0]} - rc - 1);
          if(${o}){
              result.g = getChannel(getX(${t[0]} - (rc  + 1) - 1),
                ${t[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${a} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${l(r.slice())};
          if(${o}){
            result.g = ${c(r.slice())};
          }
          if(${i}) {
            result.b = ${u(r.slice())};
            if(${o}) {
              result.a = ${h(r.slice())};
            }
          }
          setOutput(result);
        }
    `;function l(p){return d(p)}function c(p){return p[s-1]="("+p[s-1]+" + 1)",d(p)}function u(p){return p[s-2]="("+p[s-2]+" + 1)",d(p)}function h(p){return p[s-1]="("+p[s-1]+" + 1)",p[s-2]="("+p[s-2]+" + 1)",d(p)}function d(p){const m=t.map((b,w)=>f(w,p)),g=m.join(","),x=m.slice(-2).join(",");return`getChannel(getX(${g}), vec2(${x}))`}function f(p,m){return e.indexOf(p)!==-1&&t[p]!==1?`${t[p]} - ${m[p]} - 1`:`${m[p]}`}}}function g8(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{dims:o}=s,i=r.shape.length,a=Tt(o,r.shape);if(i===0)return xn({inputs:{x:r},backend:e});const l=X().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new m8(r.shape,a):new p8(r.shape,a);return e.runWebGLProgram(l,[r],r.dtype)}const x8={kernelName:uu,backendName:"webgl",kernelFunc:g8};class b8{constructor(t,e){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const s=t[1],r=t[2];this.outputShape=t;let o="";typeof e=="number"?o=`float outputValue = ${e.toFixed(2)};`:o=`
        vec3 fill = vec3(${e.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${o}
          if(coordX >= 0 && coordX < ${r} && coordY >= 0 && coordY < ${s}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const y8={kernelName:Af,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,{radians:r,fillValue:o,center:i}=t,a=e,l=new b8(s.shape,o),[c,u]=mp(i,s.shape[1],s.shape[2]),h=[[c,u,Math.sin(r),Math.cos(r)]];return a.runWebGLProgram(l,[s],s.dtype,h)}};const w8=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,v8=_t({opSnippet:w8}),C8={kernelName:da,backendName:"webgl",kernelFunc:v8};const $8="return inversesqrt(x);",k8=_t({opSnippet:$8,cpuKernelImpl:LG}),I8={kernelName:fa,backendName:"webgl",kernelFunc:k8};class gm{constructor(t,e,s,r,o,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;const c=qt(o.length),u=qt(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let f="";r===1?f="i":r===2&&(f="i, coords[1]");const p=`getUpdates(${f})`;let m="";l&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=e>1?"strides[j]":"strides";this.userCode=`
        ${c} strides = ${c}(${o});

        void main() {
          ${u} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${t}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${e}; j++) {
              int index = round(${d});
              flattenedIndex += index * ${x};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${p};
              found = true;
            }
          }
          setOutput(mix(${g}, sum, float(found)));
        }
      `}}class S8{constructor(t,e,s,r,o,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=i;const c=qt(o.length),u=qt(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let f="";r===1?f="i":r===2&&(f="i, coords[1]");const p=`getUpdates(${f})`;let m="";l&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=e>1?"strides[j]":"strides",b=e>1?"strides[j + 1]":"strides";this.userCode=`
        ${c} strides = ${c}(${o});

        void main() {
          ${u} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${t}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${e}; j+=2) {
              ivec4 index = round(${d});
              flattenedIndex += index.xz * ${x};
              if (j + 1 < ${e}) {
                flattenedIndex += index.yw * ${b};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${p};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${g}, sum, found));
        }
      `}}function N8(n){const{inputs:t,backend:e,attrs:s}=n,{indices:r,updates:o}=t,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=qr(o,r,i),d=[h/c,c];if(h===0)return e.makeTensorInfo(i,r.dtype);const f=ot({inputs:{x:r},backend:e,attrs:{shape:[l,a]}}),p=ot({inputs:{x:o},backend:e,attrs:{shape:[l,c]}}),m=e.makeTensorInfo([],"float32",new Float32Array([0]));let g;X().getBool("WEBGL_PACK")?g=new S8(l,a,f.shape.length,p.shape.length,u,d):g=new gm(l,a,f.shape.length,p.shape.length,u,d);const x=e.runWebGLProgram(g,[p,f,m],p.dtype),b=ot({inputs:{x},backend:e,attrs:{shape:i}});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(m),b}const T8={kernelName:W0,backendName:"webgl",kernelFunc:N8};class E8{constructor(t,e,s,r){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[t,s];const o="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(e+1))}; ++i) { if (left >= right) break;`,a=X().getNumber("WEBGL_VERSION")===2?o:i,l=r==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${l} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}function R8(n){const{inputs:t,backend:e,attrs:s}=n,{sortedSequence:r,values:o}=t,{side:i}=s,a=new E8(r.shape[0],r.shape[1],o.shape[1],i),l=[[r.shape[1]]];return e.runWebGLProgram(a,[r,o],"int32",l)}const A8={kernelName:G0,backendName:"webgl",kernelFunc:R8};class D8{constructor(t,e,s){this.variableNames=["c","a","b"],this.outputShape=e;let r,o;if(s>4)throw Error(`Where for rank ${s} is not yet supported`);if(s===1)o="resRC",r="resRC";else{const a=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],c=[];for(let u=0;u<e.length;u++)c.push(`${a[u]}`),u<t&&l.push(`${a[u]}`);r=l.join(),o=c.join()}const i=qt(s);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${r});
        if (cVal >= 1.0) {
          setOutput(getA(${o}));
        } else {
          setOutput(getB(${o}));
        }
      }
    `}}function _8(n){const{inputs:t,backend:e}=n,{condition:s,t:r,e:o}=t,i=new D8(s.shape.length,r.shape,r.shape.length);return e.runWebGLProgram(i,[s,r,o],mn(r.dtype,o.dtype))}const F8={kernelName:hu,backendName:"webgl",kernelFunc:_8};const O8=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${Ru};
  float scale = ${Au};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,M8=_t({opSnippet:O8}),L8={kernelName:pa,backendName:"webgl",kernelFunc:M8};const P8=Go+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,z8=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,B8=_t({opSnippet:P8,packedOpSnippet:z8,cpuKernelImpl:zG}),V8={kernelName:ba,backendName:"webgl",kernelFunc:B8};const W8=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,U8=_t({opSnippet:W8}),G8={kernelName:xa,backendName:"webgl",kernelFunc:U8};const H8=Go+`
  return sin(x);
`,q8=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${Zr}
  return result;
`,X8=_t({opSnippet:H8,packedOpSnippet:q8}),K8={kernelName:ma,backendName:"webgl",kernelFunc:X8};const j8=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,Y8=_t({opSnippet:j8}),Z8={kernelName:ga,backendName:"webgl",kernelFunc:Y8};const J8=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,Q8=_t({opSnippet:J8}),tY={kernelName:ya,backendName:"webgl",kernelFunc:Q8};const eY=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{blockShape:o,paddings:i}=s;T(r.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const a=o.reduce((x,b)=>x*b),l=[[0,0]];l.push(...i);for(let x=1+o.length;x<r.shape.length;++x)l.push([0,0]);const c=[],u=JC({inputs:{x:r},backend:e,attrs:{paddings:l,constantValue:0}}),h=Da(u.shape,o,a,!1),d=_a(h.length,o.length,!1),f=Fa(u.shape,o,a,!1),p=ot({inputs:{x:u},backend:e,attrs:{shape:h}}),m=tn({inputs:{x:p},backend:e,attrs:{perm:d}}),g=ot({inputs:{x:m},backend:e,attrs:{shape:f}});return c.push(u),c.push(p),c.push(m),c.forEach(x=>e.disposeIntermediateTensorInfo(x)),g},nY={kernelName:pu,backendName:"webgl",kernelFunc:eY};function sY(n){const{inputs:t,backend:e}=n,{indices:s,values:r,denseShape:o,defaultValue:i}=t;if(o.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${o.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${s.shape}`);if(r.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${r.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=e.readSync(s.dataId),l=e.readSync(r.dataId),c=e.readSync(o.dataId),u=e.readSync(i.dataId)[0],[h,d,f,p,m]=VG(a,s.shape,s.dtype,l,r.dtype,c,u);return[e.makeTensorInfo(d,s.dtype,h),e.makeTensorInfo([d[0]],r.dtype,f),e.makeTensorInfo([p.length],"bool",new Uint8Array(p.map(g=>Number(g)))),e.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const rY={kernelName:H0,backendName:"webgl",kernelFunc:sY};function oY(n){const{inputs:t,backend:e}=n,{inputIndices:s,inputShape:r,newShape:o}=t;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${s.shape}`);if(r.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${r.shape}`);if(o.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${o.shape}`);const i=Array.from(e.readSync(r.dataId)),a=e.readSync(s.dataId),l=Array.from(e.readSync(o.dataId)),[c,u,h]=WG(a,s.shape,s.dtype,i,l);return[e.makeTensorInfo(u,s.dtype,c),e.makeTensorInfo([h.length],o.dtype,new Int32Array(h))]}const iY={kernelName:q0,backendName:"webgl",kernelFunc:oY};function aY(n){const{inputs:t,backend:e}=n,{data:s,indices:r,segmentIds:o}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${o.shape}`);const i=e.readSync(s.dataId),a=e.readSync(r.dataId),l=e.readSync(o.dataId),[c,u]=$C(i,s.shape,s.dtype,a,l,!0);return e.makeTensorInfo(u,s.dtype,c)}const lY={kernelName:X0,backendName:"webgl",kernelFunc:aY};function cY(n){const{inputs:t,backend:e}=n,{data:s,indices:r,segmentIds:o}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${o.shape}`);const i=e.readSync(s.dataId),a=e.readSync(r.dataId),l=e.readSync(o.dataId),[c,u]=$C(i,s.shape,s.dtype,a,l);return e.makeTensorInfo(u,s.dtype,c)}const uY={kernelName:K0,backendName:"webgl",kernelFunc:cY};function hY(n){const{inputs:t,backend:e,attrs:s}=n,{sparseIndices:r,sparseValues:o,defaultValue:i}=t,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=qr(o,r,a),f=!1;if(o.dtype==="string"){const x=e.bufferSync(r),b=e.bufferSync(o),w=tr(e.readSync(i.dataId)[0]),y=PG(x,b,a,d,u,c,l,h,w,f);return e.makeTensorInfo(a,y.dtype,y.values)}const p=new gm(c,l,r.shape.length,o.shape.length,h,[d,1],f),m=e.runWebGLProgram(p,[o,r,i],o.dtype),g=ot({inputs:{x:m},backend:e,attrs:{shape:a}});return e.disposeIntermediateTensorInfo(m),g}const dY={kernelName:j0,backendName:"webgl",kernelFunc:hY};function fY(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{numOrSizeSplits:o,axis:i}=s,a=Tt(i,r.shape)[0],l=Rp(r,o,a),c=r.shape.length,u=new Array(c).fill(0),h=r.shape.slice();return l.map(d=>{const f=[...h];f[a]=d;const p=Ho({inputs:{x:r},backend:e,attrs:{begin:u,size:f}});return u[a]+=d,p})}const pY={kernelName:mu,backendName:"webgl",kernelFunc:fY};const Px="return sqrt(x);",mY=_t({opSnippet:Px,packedOpSnippet:Px,cpuKernelImpl:UG}),gY={kernelName:wa,backendName:"webgl",kernelFunc:mY};const xY="return x * x;",bY=_t({opSnippet:xY}),yY={kernelName:If,backendName:"webgl",kernelFunc:bY};const zx="return (a - b) * (a - b);",wY=Pe({opSnippet:zx,packedOpSnippet:zx}),vY={kernelName:va,backendName:"webgl",kernelFunc:wY};function CY(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");const o=e.readSync(r.dataId),i=Ms(o),a=GG(i,"string",s);return e.makeTensorInfo(r.shape,"string",a)}const $Y={kernelName:Sf,backendName:"webgl",kernelFunc:CY};function kY({inputs:n,attrs:t,backend:e}){const{x:s}=n,r=Ln+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,o=new us(s.shape,r);return e.runWebGLProgram(o,[s],s.dtype)}const IY={kernelName:Sa,backendName:"webgl",kernelFunc:kY};class SY{constructor(t,e,s){this.variableNames=["x"],this.outputShape=s;const r=s.length,o=qt(s.length),i=qt(s.length);let a="";if(r===1)a="coords * strides + begin";else{let l=0;a=s.map((c,u)=>(l++,s.length===1?`coords * strides[${u}] + begin[${u}]`:`coords[${l-1}] * strides[${u}] + begin[${u}]`)).join(",")}this.userCode=`
      ${o} begin = ${o}(${t});
      ${o} strides = ${o}(${e});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}}function NY(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{begin:o,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s,{finalShapeSparse:f,finalShape:p,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:w,strides:y}=dy(r.shape,o,i,a,l,c,u,h,d);let v;if(m)v=ot({inputs:{x:r},backend:e,attrs:{shape:p}});else if(g||x){T(r.shape.length>=1,()=>`Input must have rank at least 1, got: ${r.shape.length}`);const N=cy(b,w,y),S=Ho({inputs:{x:r},backend:e,attrs:{begin:b,size:N}});v=ot({inputs:{x:S},backend:e,attrs:{shape:p}}),e.disposeIntermediateTensorInfo(S)}else if(e.shouldExecuteOnCPU([r])){const S=e.readSync(r.dataId),I=Nt(r.shape,r.dtype,S),k=HG(f,I,y,b);v=e.makeTensorInfo(p,r.dtype,k.values)}else{const S=new SY(b,y,f);v=e.runWebGLProgram(S,[r],r.dtype)}const $=ot({inputs:{x:v},backend:e,attrs:{shape:p}});return e.disposeIntermediateTensorInfo(v),$}const TY={kernelName:Nf,backendName:"webgl",kernelFunc:NY};function EY(n){const{inputs:t,backend:e,attrs:s}=n,{separator:r,nGramWidths:o,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=t,d=e.readSync(u.dataId),f=e.readSync(h.dataId),[p,m]=qG(d,f,r,o,i,a,l,c);return[e.makeTensorInfo([p.length],"string",p),e.makeTensorInfo(h.shape,"int32",m)]}const RY={kernelName:Y0,backendName:"webgl",kernelFunc:EY};function AY(n){const{inputs:t,backend:e,attrs:s}=n,{skipEmpty:r}=s,{input:o,delimiter:i}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(o.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${o.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=e.readSync(o.dataId),l=e.readSync(i.dataId)[0],[c,u,h]=XG(a,l,r),d=u.length;return[e.makeTensorInfo([d,2],"int32",c),e.makeTensorInfo([d],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}const DY={kernelName:Z0,backendName:"webgl",kernelFunc:AY};function _Y(n){const{inputs:t,backend:e,attrs:s}=n,{numBuckets:r}=s,{input:o}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(r<=0)throw new Error("Number of buckets must be at least 1");const i=e.readSync(o.dataId),a=KG(i,r);return e.makeTensorInfo(o.shape,"int32",a)}const FY={kernelName:J0,backendName:"webgl",kernelFunc:_Y};const OY="return tan(x);",MY=_t({opSnippet:OY}),LY={kernelName:$a,backendName:"webgl",kernelFunc:MY};const PY=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,zY=_t({opSnippet:PY}),BY={kernelName:ka,backendName:"webgl",kernelFunc:zY};function VY(n){const{inputs:t,backend:e,attrs:s}=n,{tensor:r,indices:o,updates:i}=t,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=qr(i,o,r.shape),d=[h/c,c];if(h===0)return e.makeTensorInfo(r.shape,o.dtype);const f=ot({inputs:{x:o},backend:e,attrs:{shape:[l,a]}}),p=ot({inputs:{x:i},backend:e,attrs:{shape:[l,c]}}),m=ot({inputs:{x:r},backend:e,attrs:{shape:d}}),g=new gm(l,a,f.shape.length,p.shape.length,u,d,!1,!0),x=e.runWebGLProgram(g,[p,f,m],m.dtype),b=ot({inputs:{x},backend:e,attrs:{shape:r.shape}});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(x),b}const WY={kernelName:U0,backendName:"webgl",kernelFunc:VY};class UY{constructor(t,e){this.variableNames=["A"];const s=new Array(t.length);for(let i=0;i<s.length;i++)s[i]=t[i]*e[i];this.outputShape=s,this.rank=s.length;const r=qt(this.rank),o=GY(t);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        setOutput(getA(${o}));
      }
    `}}function GY(n){const t=n.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${n[0]})`;const e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],s=[];for(let r=0;r<n.length;r++)s.push(`imod(${e[r]}, ${n[r]})`);return s.join()}function t$(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{reps:o}=s;if(r.dtype==="string"||r.shape.length>5){const l=e.readSync(r.dataId),c=r.dtype==="string"?l.map(d=>tr(d)):l,u=Nt(r.shape,r.dtype,c),h=YG(u,o);return e.makeTensorInfo(h.shape,h.dtype,h.values)}const i=new UY(r.shape,o);return e.runWebGLProgram(i,[r],r.dtype)}const HY={kernelName:Ia,backendName:"webgl",kernelFunc:t$};class qY{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=t,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class XY{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=t,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}function gr(n,t){t!==null&&n.disposeIntermediateTensorInfo(t)}function Bx(n){let t=1;for(;t<n;)t*=2;return t}function KY(n){const{inputs:t,backend:e,attrs:s}=n,{x:r}=t,{k:o,sorted:i}=s,a=X().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=X().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),c=r.shape,u=c[c.length-1];if(e.shouldExecuteOnCPU([r])||u<a||o>l){const k=e.readSync(r.dataId),[C,E]=ZG(k,c,r.dtype,o,i);return[e.makeTensorInfo(C.shape,C.dtype,C.values),e.makeTensorInfo(E.shape,E.dtype,E.values)]}if(o===0)return c[c.length-1]=0,[e.makeTensorInfo(c,r.dtype,[]),e.makeTensorInfo(c,"int32",[])];if(u===1)return[r,Ka({attrs:{shape:c,dtype:"int32",value:0},backend:e})];const h=e.texData.get(r.dataId),d=h!==null&&h.isPacked,f=d?e.unpackTensor(r):r,m=Y(c)/u,g=ot({inputs:{x:f},attrs:{shape:[m,u]},backend:e});d&&gr(e,f);const x=Bx(o),b=Bx(u);let w=null;const y=()=>w===null?[g,g]:[g,w],v=(k,C,E)=>{const _=y(),R=new qY(E),z=[[u],[w===null?1:0],[Number.NEGATIVE_INFINITY],[k],[C]],P=w;w=e.runWebGLProgram(R,_,"int32",z),gr(e,P)};for(let k=1;k<x;k*=2){const C=k*2;for(let E=k;E>=1;E/=2)v(C,E,[m,b])}for(let k=b;k>x;k/=2){const C=y(),E=new XY([m,k/2]),R=[[u],[w===null?1:0],[x]],M=w;w=e.runWebGLProgram(E,C,"int32",R),gr(e,M);const z=x/2,P=z*2;for(let U=z;U>=1;U/=2)v(P,U,w.shape)}let $=w;w=Ho({inputs:{x:w},backend:e,attrs:{begin:0,size:[m,o]}}),gr(e,$);let N=qC({inputs:{x:g,indices:w},backend:e,attrs:{axis:1,batchDims:1}});gr(e,g);const S=c.slice(0,-1);S.push(o),$=w,w=ot({inputs:{x:w},attrs:{shape:S},backend:e}),gr(e,$);const I=N;return N=ot({inputs:{x:N},attrs:{shape:S},backend:e}),gr(e,I),[N,w]}const jY={kernelName:Tf,backendName:"webgl",kernelFunc:KY};class YY{constructor(t,e,s,r,o,i){this.variableNames=["Image","Transforms"],this.outputShape=i;const a=s==="nearest"?1:2;let l;switch(r){case"constant":l=1;break;case"reflect":l=2;break;case"wrap":l=3;break;case"nearest":l=4;break;default:l=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${l} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${t} && 0 <= coordX && coordX < ${e}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${o});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${o});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${e}));
                float mapY = mapCoord(inY, float(${t}));

                if (${a} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}function ZY(n){const{inputs:t,backend:e,attrs:s}=n,{image:r,transforms:o}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=s,[u,h,d,f]=r.shape,[p,m]=c??[h,d],g=[u,p,m,f],x=new YY(h,d,i,a,l,g);return e.runWebGLProgram(x,[r,o],"float32")}const JY={kernelName:Ef,backendName:"webgl",kernelFunc:ZY};function QY(n){const{inputs:t,attrs:e,backend:s}=n,{axis:r}=e,{x:o}=t;Ha(o,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const i=s.readSync(o.dataId),{outputValues:a,outputShape:l,indices:c}=JG(i,r,o.shape,o.dtype);return[s.makeTensorInfo(l,o.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const t7={kernelName:Rf,backendName:"webgl",kernelFunc:QY};function e7(n){const{inputs:t,backend:e,attrs:s}=n,{value:r}=t;let{axis:o}=s;o<0&&(o+=r.shape.length);const i=r,a=i.shape.length,l=r.shape[o],c=new Array(a-1);let u=0;for(let m=0;m<a;m++)m!==o&&(c[u++]=i.shape[m]);const h=[],d=new Array(a).fill(0),f=i.shape.slice();f[o]=1;const p=new Array(l);for(let m=0;m<p.length;m++){d[o]=m;const g=Ho({inputs:{x:i},backend:e,attrs:{begin:d,size:f}}),x=ot({inputs:{x:g},backend:e,attrs:{shape:c}});p[m]=x,h.push(g)}return h.forEach(m=>e.disposeIntermediateTensorInfo(m)),p}const n7={kernelName:xu,backendName:"webgl",kernelFunc:e7};class s7{constructor(t,e){this.variableNames=["x","segmentIds"];const s=t.windowSize,r=t.batchSize,o=t.inSize,i=t.numSegments,a=i*Math.ceil(o/s);this.outputShape=[r,a];const l="0.0",c="sumValue",u=Math.floor(s/4)*4,h=s%4,d=`
        sumValue += dot(values, segFilter);
    `;let f="";o%s>0&&(f=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return initializationValue;
        }
      `);let p="";o%s>0&&(p=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${l};

      float getValue(int batch, int inIdx) {
        ${f}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${p}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${i})) * float(${s}));
        int currentSeg = int(mod(float(outIdx), float(${i})));

        float sumValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${d}
        }

        int inIdx = inOffset + ${u};
        if (${h===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${d}
        } else if (${h===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${d}
        } else if (${h===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${d}
        }
        setOutput(${c});
      }
    `}}function r7(n){const{inputs:t,backend:e,attrs:s}=n,{x:r,segmentIds:o}=t,{numSegments:i}=s,a=r.shape.length,l=[];let c=0;const u=ie([c],a);let h=r;u!=null&&(h=tn({inputs:{x:r},backend:e,attrs:{perm:u}}),l.push(h),c=pe(1,a)[0]);const d=W_(h.shape,c,i),f=Y([h.shape[c]]),p=ot({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}});l.push(p);const m=Df(r.dtype),g=(y,v,$,N,S)=>{const I=y.shape[0],k=y.shape[1],C=V_(k,S),E={windowSize:C,inSize:k,batchSize:I,numSegments:S},_=new s7(E,v),R=e.compileAndRun(_,[y,$],N);if(l.push(R),R.shape[1]===S)return R;const M=QC({backend:e,attrs:{start:0,stop:S,step:1,dtype:"float32"}}),z=t$({inputs:{x:M},backend:e,attrs:{reps:[k/C]}});return l.push(M),l.push(z),g(R,v,z,N,S)},x=g(p,"unsortedSegmentSum",o,m,i),b=ot({inputs:{x},backend:e,attrs:{shape:d}});let w=b;if(u!=null){l.push(b);const y=cr(u);w=tn({inputs:{x:w},backend:e,attrs:{perm:y}})}return l.forEach(y=>e.disposeIntermediateTensorInfo(y)),w}const o7={kernelName:bu,backendName:"webgl",kernelFunc:r7};const i7=[UH,HH,KH,ZH,QH,n6,r6,i6,u6,d6,m6,b6,v6,I6,T6,R6,D6,M6,P6,B6,G6,Z6,Q6,sq,oq,hq,fq,xq,SH,wq,Iq,Eq,Oq,Pq,Bq,Wq,Gq,Kq,Zq,t5,n5,r5,i5,c5,h5,m5,x5,w5,$5,I5,E5,_5,L5,B5,U5,G5,q5,K5,Y5,J5,tX,rX,aX,uX,dX,mX,bX,CX,SX,IH,TX,$q,AX,FX,LX,TH,VX,HX,XX,ZX,tK,rK,aK,hK,mK,bK,wK,kK,SK,TK,DK,FK,MK,PK,BK,GK,KK,JK,ij,AH,uj,fj,gj,yj,aq,Cj,kj,Sj,Ej,_j,RH,Oj,Lj,zj,Vj,Wj,lq,nj,Hj,jj,Qj,_H,s8,i8,u8,f8,x8,y8,C8,I8,T8,A8,F8,L8,V8,G8,K8,Z8,j6,rj,tY,nY,rY,iY,lY,uY,dY,pY,gY,yY,vY,$Y,IY,TY,RY,DY,FY,sj,BH,LY,BY,WY,HY,jY,JY,VH,t7,n7,o7,$j];for(const n of i7)tb(n);const wd=[{id:"Republican",label:"Republican",color:"#e41a1c"},{id:"Democratic",label:"Democrat",color:"#377eb8"},{id:"Libertarian",label:"Libertarian",color:"#ffd100"},{id:"Independent",label:"Independent",color:"#838382ff"}],xe={point:{radius:5,opacity:.7,strokeColor:"#333",strokeWidth:.5},edge:{color:"#999",opacity:.4,strokeWidth:.5}};let vd=null,Cd=null,$d=null,kd=null;function a7(n){const t=document.getElementById("member-panel"),e=document.getElementById("member-panel-content"),s=document.getElementById("member-panel-title");if(!n)return;s.innerHTML=`
    <a href="https://www.govtrack.us/congress/members/${n.bioid}" target="_blank" style="color: inherit;">${n.name}</a>
    <div style="font-size: 0.75em; font-weight: normal; color: #666; margin-top: 4px;">
      ${n.party} · ${n.state}-${n.district||"N/A"}
    </div>
  `;const o=(ai.get(n.bioid)||[]).map(i=>{const a=Ti.get(i.bill_id);if(!a)return"";const l=i.spon?"Sponsor":"Cosponsor",c=a.topic||"Uncategorized",h={HR:"house-bill",HRES:"house-resolution",HCONRES:"house-concurrent-resolution",HJRES:"house-joint-resolution"}[a.billtype]||"house-bill";return`
      <div style="margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px solid #eee;">
        <div style="font-weight: 600; margin-bottom: 4px; font-size: 0.55em;">
          <a href="${`https://www.congress.gov/bill/${a.congress}th-congress/${h}/${a.number}`}" target="_blank" style="color: inherit; text-decoration: underline;">${a.billtype}-${a.number}: ${a.title}</a>
        </div>
        <div style="font-size: 0.55em; color: #666;">
          ${l} · ${i.date} <br> ${c}
        </div>
        <div style="font-size: 0.55em; margin-top: 4px;">
          <span class="bill-sponsors-link" data-bill-id="${i.bill_id}" style="color: #377eb8; cursor: pointer; text-decoration: underline;">Show Bill Sponsors</span>
        </div>
      </div>
    `}).join("");e.innerHTML=o||'<p style="color: #666;">No bills in this time window</p>',e.querySelectorAll(".bill-sponsors-link").forEach(i=>{i.addEventListener("click",()=>{const a=parseInt(i.dataset.billId,10);vd&&vd(a)})}),t.classList.add("open")}function e$(){document.getElementById("member-panel").classList.remove("open")}function l7(){document.getElementById("bill-panel").classList.remove("open")}function c7(n){const t=document.getElementById("bill-panel"),e=document.getElementById("bill-panel-content"),s=document.getElementById("bill-panel-title"),r=Ti.get(n);if(!r)return;const i={HR:"house-bill",HRES:"house-resolution",HCONRES:"house-concurrent-resolution",HJRES:"house-joint-resolution"}[r.billtype]||"house-bill",a=`https://www.congress.gov/bill/${r.congress}th-congress/${i}/${r.number}`,l=r.topic||"Uncategorized";s.innerHTML=`
    <a href="${a}" target="_blank" style="color: inherit;">${r.billtype}-${r.number}</a>
    <div style="font-size: 0.65em; font-weight: normal; margin-top: 4px;">
      ${r.title}
    </div>
    <div style="font-size: 0.6em; font-weight: normal; color: #666; margin-top: 4px;">
      ${l}
    </div>
  `;const c=Hs.get(n)||[];c.sort((h,d)=>d.spon-h.spon);const u=c.map(h=>{const d=n$.get(h.bioid);if(!d)return"";const f=h.spon?"Sponsor":"Cosponsor";return`
      <div style="margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px solid #eee;">
        <div style="font-weight: 600; margin-bottom: 4px; font-size: 0.55em;">
          <span class="member-select-link" data-bioid="${d.bioid}" style="color: #377eb8; cursor: pointer; text-decoration: underline;">${d.name}</span>
        </div>
        <div style="font-size: 0.55em; color: #666;">
          ${d.party} · ${d.state}-${d.district||"N/A"} <br>
          ${f} · ${h.date}
        </div>
      </div>
    `}).join("");e.innerHTML=u||'<p style="color: #666;">No sponsors found</p>',e.querySelectorAll(".member-select-link").forEach(h=>{h.addEventListener("click",()=>{const d=h.dataset.bioid;$d&&$d(d)})}),t.classList.add("open")}document.getElementById("member-panel-close").addEventListener("click",()=>{e$(),kd&&kd()});document.getElementById("bill-panel-close").addEventListener("click",()=>{l7(),Cd&&Cd()});async function u7(n,t,e){const s=`/api/visualization-data?start_date=${n}&end_date=${t}`,r=await fetch(s,{signal:e});if(!r.ok)throw new Error("Failed to fetch data");return r.json()}function Vx(n){return G(()=>{const t=gt(te(n),1,!0),e=Ft(n,n,!1,!0);return t.add(t.transpose()).sub(e.mul(2)).maximum(0).sqrt()})}function h7(n){return G(()=>{const t=n.shape[0],e=wt(Bs([t,t]),Vf(t)),s=O(n,e),r=gt(s,1).neg();return et(s,qE(r))})}function d7(n,t,e=100){const s=n.length;let r=n.map(l=>[...l]);const o=[],i=[];for(let l=0;l<t;l++){let c=Array(s).fill(0).map(()=>Math.random()),u=Math.hypot(...c);c=c.map(d=>d/u);let h=0;for(let d=0;d<e;d++){const f=new Array(s).fill(0);for(let x=0;x<s;x++){let b=0;for(let w=0;w<s;w++)b+=r[x][w]*c[w];f[x]=b}const p=Math.hypot(...f),m=f.map(x=>x/p),g=c.reduce((x,b,w)=>x+b*m[w],0);if(Math.abs(1-Math.abs(g))<1e-9){c=m,h=p;let x=0;for(let b=0;b<s;b++)x+=f[b]*c[b];h=x;break}c=m,h=p}o.push(h),i.push(c);for(let d=0;d<s;d++)for(let f=0;f<s;f++)r[d][f]-=h*c[d]*c[f]}const a=Array(s).fill(0).map(()=>Array(t).fill(0));for(let l=0;l<s;l++)for(let c=0;c<t;c++)a[l][c]=i[c][l];return{values:o,vectors:a}}function f7(n,t=2){const e=n.length,s=n.map(u=>u.map(h=>h*h)),r=s.map(u=>u.reduce((h,d)=>h+d,0)/e),o=r.reduce((u,h)=>u+h,0)/e,i=[];for(let u=0;u<e;u++){const h=[];for(let d=0;d<e;d++){const f=-.5*(s[u][d]-r[u]-r[d]+o);h.push(f)}i.push(h)}const{values:a,vectors:l}=d7(i,t),c=[];for(let u=0;u<e;u++){const h=[];for(let d=0;d<t;d++){const f=Math.sqrt(Math.max(0,a[d]));h.push(l[u][d]*f)}c.push(h)}return c}function p7(n,t,e,s=100,r=1e-4){let o=e;const i=gt(t,1,!0);let a=Vx(o);return G(()=>{for(let l=0;l<s;l++){const c=a,[u,h]=G(()=>{const d=bt(n,et(a,1e-4)),f=O(t,wt(1,d)),p=h7(f),m=Ft(p,o),g=et(o,bt(m,i)),x=Vx(g);return[g,x]});o.dispose(),c.dispose(),o=u,a=h}return o})}function m7(n,t){const e=Zs(n),s=Zs(t),r=e.shape[1];let o=[];for(let i=0;i<r;i++){const a=e.slice([0,i],[-1,1]),l=s.slice([0,i],[-1,1]);a.mul([-1]).sub(l).sum().dataSync()[0]<a.sub(l).sum().dataSync()[0]?o.push(-1):o.push(1)}return o}async function g7(n,t=null){const{cosimilarity:e,bioids:s}=x7(n.cooccurrenceMatrix),r=s.length;if(r<2)throw new Error(`Need at least 2 members, got ${r}`);const o=1.5,i=e.map(f=>f.map(p=>Math.pow(2.78,-1*p))),a=e.map(f=>f.map(p=>Math.pow(p,o)+.001)),l=await f7(i,2),c=p7(Zs(i),Zs(a),Zs(l),100,1e-4),u=await c.array(),h=new Map(n.members.map(f=>[f.bioid,f])),d=s.map((f,p)=>({bioid:f,x:u[p][0],y:u[p][1],...h.get(f)}));if(c.dispose(),t){const f=d.filter(p=>t.has(p.bioid));if(f.length>=2){const p=f.map(x=>[x.x,x.y]),m=f.map(x=>{const b=t.get(x.bioid);return[b.x,b.y]}),g=m7(p,m);for(const x of d)x.x*=g[0],x.y*=g[1]}}return{points:d,bioids:s}}function x7(n){const t=[...new Set(n.flatMap(o=>[o.bioid_1,o.bioid_2]))],e=new Map(t.map((o,i)=>[o,i])),s=t.length,r=Array.from({length:s},()=>Array(s).fill(0));for(const{bioid_1:o,bioid_2:i,count:a}of n){const l=e.get(o),c=e.get(i);r[l][c]=a,r[c][l]=a}return{cosimilarity:r,bioids:t}}function b7(n,t,e){if(!n.cooccurrenceMatrix||n.cooccurrenceMatrix.length===0)throw new Error(`No co-occurrence data found for ${t} to ${e}`)}function y7(n,t,e){ce("#chart").selectAll("*").remove();const s=ce("#chart").style("position","relative").style("width",`${t+n.left+n.right}px`).style("height",`${e+n.top+n.bottom}px`),r=window.devicePixelRatio||1,o=s.append("canvas").attr("width",t*r).attr("height",e*r).style("width",`${t}px`).style("height",`${e}px`).style("position","absolute").style("left",`${n.left}px`).style("top",`${n.top}px`).style("z-index","1").style("display","none").style("opacity","0.15"),i=o.node().getContext("2d");i.scale(r,r);const a=s.append("canvas").attr("width",t*r).attr("height",e*r).style("width",`${t}px`).style("height",`${e}px`).style("position","absolute").style("left",`${n.left}px`).style("top",`${n.top}px`).style("z-index","2").style("display","none"),l=a.node().getContext("2d");l.scale(r,r);const c=s.append("svg").attr("width",t+n.left+n.right).attr("height",e+n.top+n.bottom).style("position","absolute").style("left","0").style("top","0").style("z-index","2").style("background","transparent"),u=s.append("div").attr("class","node-tooltip").style("position","absolute").style("left","0").style("top","0").style("background","rgba(0,0,0,0.8)").style("color","#fff").style("padding","8px 12px").style("border-radius","4px").style("font-size","12px").style("font-family","sans-serif").style("pointer-events","none").style("opacity",0).style("z-index","10").style("will-change","transform").style("transform","translate(0, 0)"),h=c.append("g").attr("transform",`translate(${n.left},${n.top})`);h.append("defs").append("clipPath").attr("id","chart-clip").append("rect").attr("width",t).attr("height",e);const d=h.append("g").attr("clip-path","url(#chart-clip)");return{container:s,canvas:a,ctx:l,canvasFaded:o,ctxFaded:i,svgElement:c,svg:h,chartArea:d,tooltip:u}}function w7(n,t){const e=n.map(r=>r.count).sort((r,o)=>r-o),s=e[Math.floor(e.length*.95)];return n.filter(r=>r.count>=s).map(r=>{const o=t.get(r.bioid_1),i=t.get(r.bioid_2);return{x1:o.x,y1:o.y,x2:i.x,y2:i.y,bioid_1:r.bioid_1,bioid_2:r.bioid_2}})}function v7(n,t,e,s){const r=$m(n,l=>l.x),o=$m(n,l=>l.y),i=r[1]-r[0],a=o[1]-o[0];return function(c,u,h){const d=(r[0]+r[1])/2+u,f=(o[0]+o[1])/2+h,p=i*(1+s)/(2*c),m=a*(1+s)/(2*c),g=Fh().domain([d-p,d+p]).range([0,t]),x=Fh().domain([f-m,f+m]).range([e,0]);return{xScale:g,yScale:x}}}function Wx(n,t,e,s,r,o,i,a,l=null,c=null){const{xScale:u,yScale:h}=i(a.zoomLevel,a.panX,a.panY);n.clearRect(0,0,t,e),l&&l.clearRect(0,0,t,e);const d=c&&c.size>0;n.strokeStyle=xe.edge.color,n.globalAlpha=d?.15:xe.edge.opacity,n.lineWidth=xe.edge.strokeWidth;for(const f of r)n.beginPath(),n.moveTo(u(f.x1),h(f.y1)),n.lineTo(u(f.x2),h(f.y2)),n.stroke();if(a.selectedBioid){n.strokeStyle="#333",n.globalAlpha=.8,n.lineWidth=xe.edge.strokeWidth;for(const f of r)(f.bioid_1===a.selectedBioid||f.bioid_2===a.selectedBioid)&&(n.beginPath(),n.moveTo(u(f.x1),h(f.y1)),n.lineTo(u(f.x2),h(f.y2)),n.stroke())}for(const f of s){const p=!d||c.has(f.bioid),m=d&&!p&&l?l:n;m.globalAlpha=xe.point.opacity,m.beginPath(),m.arc(u(f.x),h(f.y),xe.point.radius,0,Math.PI*2),m.fillStyle=o(f.party),m.fill(),m.strokeStyle=xe.point.strokeColor,m.lineWidth=d&&p?2:xe.point.strokeWidth,m.stroke()}if(a.selectedBioid){const f=s.find(p=>p.bioid===a.selectedBioid);f&&(n.beginPath(),n.arc(u(f.x),h(f.y),xe.point.radius*1.5,0,Math.PI*2),n.strokeStyle="#ffd000c2",n.globalAlpha=1,n.lineWidth=2,n.stroke())}n.globalAlpha=1}function C7(n,t,e,s){n.selectAll("*").remove();const r=t.domain()[1]-t.domain()[0],o=e/r,i=Math.round(Math.log(100/o)/-1.5),a=c=>Math.exp(-1.5*c)*o,l=[i,i+1,i+2];n.append("text").attr("x",0).attr("y",-18).style("font-size","11px").style("font-family","sans-serif").style("font-weight","bold").text("Co-sponsorships"),n.append("line").attr("x1",0).attr("y1",0).attr("x2",a(i)).attr("y2",0).attr("stroke","#333").attr("stroke-width",1.5),l.forEach(c=>{const u=a(c);n.append("line").attr("x1",u).attr("y1",-5).attr("x2",u).attr("y2",5).attr("stroke","#333").attr("stroke-width",1.5),n.append("text").attr("x",u).attr("y",15).attr("text-anchor","middle").style("font-size","10px").style("font-family","sans-serif").text(c)}),n.append("line").attr("x1",0).attr("y1",-5).attr("x2",0).attr("y2",5).attr("stroke","#333").attr("stroke-width",1.5)}function $7(n,t,e,s,r){const o=n.append("g").attr("transform",`translate(${t+20}, ${e/2-30})`);o.append("rect").attr("x",0).attr("y",0).attr("width",28).attr("height",28).attr("fill","#fff").attr("stroke","#333").attr("rx",4).style("cursor","pointer").on("click",()=>{s.zoomLevel=Math.min(s.zoomLevel*1.5,35),r()}),o.append("text").attr("x",14).attr("y",19).attr("text-anchor","middle").style("font-size","18px").style("font-family","sans-serif").style("pointer-events","none").text("+"),o.append("rect").attr("x",0).attr("y",35).attr("width",28).attr("height",28).attr("fill","#fff").attr("stroke","#333").attr("rx",4).style("cursor","pointer").on("click",()=>{s.zoomLevel=Math.max(s.zoomLevel/1.5,.5),r()}),o.append("text").attr("x",14).attr("y",54).attr("text-anchor","middle").style("font-size","18px").style("font-family","sans-serif").style("pointer-events","none").text("−")}function k7(n,t,e,s,r,o,i,a,l,c,u,h,d,f){const p=fI().filter(m=>m.target.tagName!=="circle").on("start",()=>{const m=d.selectedBillId?new Set(Hs.get(d.selectedBillId)?.map(g=>g.bioid)||[]):null;t.style("display","block"),m&&s.style("display","block"),o.style("visibility","hidden"),Wx(e,i,a,l,c,u,h,d,r,m)}).on("drag",m=>{const g=d.selectedBillId?new Set(Hs.get(d.selectedBillId)?.map(v=>v.bioid)||[]):null,{xScale:x,yScale:b}=h(d.zoomLevel,d.panX,d.panY),w=x.invert(0)-x.invert(m.dx),y=b.invert(0)-b.invert(m.dy);d.panX+=w,d.panY+=y,Wx(e,i,a,l,c,u,h,d,r,g)}).on("end",()=>{t.style("display","none"),s.style("display","none"),o.style("visibility","visible"),f()});n.call(p)}function I7(n,t){const e=ce("#controls");e.select(".search-wrapper").remove();const r=e.insert("div",":first-child").attr("class","search-wrapper").style("display","flex").style("gap","30px").style("margin-bottom","15px").append("div").attr("class","search-container");r.append("label").attr("for","member-search").style("font-weight","bold").style("margin-right","10px").text("Search Member:");const o=r.append("div").style("display","inline-block").style("position","relative"),i=o.append("input").attr("type","text").attr("id","member-search").attr("placeholder","Type a name...").style("padding","6px 10px").style("font-size","14px").style("width","250px").style("border","1px solid #ccc").style("border-radius","4px"),a=o.append("div").attr("class","search-dropdown").style("position","absolute").style("top","100%").style("left","0").style("width","250px").style("max-height","200px").style("overflow-y","auto").style("background","#fff").style("border","1px solid #ccc").style("border-top","none").style("border-radius","0 0 4px 4px").style("display","none").style("z-index","100");i.on("input",function(){const l=this.value.toLowerCase().trim();if(l.length<2){a.style("display","none");return}const c=n.filter(u=>u.name.toLowerCase().includes(l)).slice(0,10);if(a.selectAll("*").remove(),c.length===0){a.style("display","none");return}c.forEach(u=>{a.append("div").style("padding","8px 10px").style("cursor","pointer").style("border-bottom","1px solid #eee").html(`<strong>${u.name}</strong> <span style="color:#666">(${u.party}-${u.state})</span>`).on("mouseover",function(){ce(this).style("background","#f0f0f0")}).on("mouseout",function(){ce(this).style("background","#fff")}).on("click",()=>{a.style("display","none"),t(u.bioid)})}),a.style("display","block")}),ce("body").on("click.search",l=>{!l.target.closest("#member-search")&&!l.target.closest(".search-dropdown")&&a.style("display","none")})}function S7(n){const t=ce(".search-wrapper");t.select(".bill-search-container").remove();const e=t.append("div").attr("class","bill-search-container");e.append("label").attr("for","bill-search").style("font-weight","bold").style("margin-right","10px").text("Search Bill:");const s=e.append("div").style("display","inline-block").style("position","relative"),r=s.append("input").attr("type","text").attr("id","bill-search").attr("placeholder","Type bill ID or title...").style("padding","6px 10px").style("font-size","14px").style("width","300px").style("border","1px solid #ccc").style("border-radius","4px"),o=s.append("div").attr("class","bill-search-dropdown").style("position","absolute").style("top","100%").style("left","0").style("width","400px").style("max-height","250px").style("overflow-y","auto").style("background","#fff").style("border","1px solid #ccc").style("border-top","none").style("border-radius","0 0 4px 4px").style("display","none").style("z-index","100");r.on("input",function(){const i=this.value.toLowerCase().trim();if(i.length<2){o.style("display","none");return}const a=Array.from(Ti.values()).filter(l=>{const c=`${l.billtype}-${l.number}`.toLowerCase(),u=(l.title||"").toLowerCase();return c.includes(i)||u.includes(i)}).slice(0,10);if(o.selectAll("*").remove(),a.length===0){o.style("display","none");return}a.forEach(l=>{const c=l.topic||"Uncategorized",u=l.title.length>60?l.title.substring(0,60)+"...":l.title;o.append("div").style("padding","8px 10px").style("cursor","pointer").style("border-bottom","1px solid #eee").html(`<strong>${l.billtype}-${l.number}</strong><br><span style="font-size:12px">${u}</span><br><span style="color:#666;font-size:11px">${c}</span>`).on("mouseover",function(){ce(this).style("background","#f0f0f0")}).on("mouseout",function(){ce(this).style("background","#fff")}).on("click",()=>{o.style("display","none"),r.property("value",`${l.billtype}-${l.number}`),n(l.id)})}),o.style("display","block")}),ce("body").on("click.billsearch",i=>{!i.target.closest("#bill-search")&&!i.target.closest(".bill-search-dropdown")&&o.style("display","none")})}function N7(n,t){const e=n.append("g").attr("transform",`translate(${t+20}, 20)`);wd.forEach((s,r)=>{const o=e.append("g").attr("transform",`translate(0, ${r*25})`);o.append("circle").attr("r",6).attr("fill",s.color),o.append("text").attr("x",15).attr("y",5).style("font-size","13px").text(s.label)})}let Ti=new Map,Hs=new Map,ai=new Map,n$=new Map;async function T7(n,t,e,s){const r=await u7(n,t,s);if(s?.aborted)throw new DOMException("Aborted","AbortError");b7(r,n,t),Ti=new Map(r.bills.map(R=>[R.id,R])),n$=new Map(r.members.map(R=>[R.bioid,R])),Hs=new Map,ai=new Map;for(const R of r.sponsorships)Hs.has(R.bill_id)||Hs.set(R.bill_id,[]),Hs.get(R.bill_id).push({bioid:R.bioid,spon:R.spon,date:R.date}),ai.has(R.bioid)||ai.set(R.bioid,[]),ai.get(R.bioid).push({bill_id:R.bill_id,date:R.date,spon:R.spon});const{points:o}=await g7(r,e);if(s?.aborted)throw new DOMException("Aborted","AbortError");const i={top:40,right:150,bottom:60,left:60},a=800-i.left-i.right,l=600-i.top-i.bottom,c=.1,{canvas:u,ctx:h,canvasFaded:d,ctxFaded:f,svgElement:p,svg:m,chartArea:g,tooltip:x}=y7(i,a,l),b=new Map(o.map(R=>[R.bioid,R])),w=w7(r.cooccurrenceMatrix,b),y=y0().domain(wd.map(R=>R.id)).range(wd.map(R=>R.color)),v={zoomLevel:1,panX:0,panY:0,selectedBioid:null,selectedBillId:null};function $(R){console.log("setSelection called with:",R),v.selectedBioid=R,Zo=R;const M=ce("#member-search");if(R){const P=b.get(R);P&&M.property("value",P.name)}else M.property("value","");if(k.select(".selection-ring").remove(),R){const P=b.get(R),{xScale:U,yScale:q}=S(v.zoomLevel,v.panX,v.panY);k.selectAll("circle").filter(j=>j.bioid===R).raise(),k.append("circle").attr("class","selection-ring").attr("cx",U(P.x)).attr("cy",q(P.y)).attr("r",xe.point.radius*1.5).attr("fill","none").attr("stroke","#ffd000c2").attr("stroke-width",2),a7(P)}else e$();const z=v.selectedBillId?.15:xe.edge.opacity;I.selectAll("line.edge").attr("stroke",P=>P.bioid_1===R||P.bioid_2===R?"#333":xe.edge.color).attr("opacity",P=>P.bioid_1===R||P.bioid_2===R?.8:z).filter(P=>P.bioid_1===R||P.bioid_2===R).raise()}function N(R){v.selectedBillId=R;const M=ce("#bill-search");if(R){const z=Ti.get(R);z&&M.property("value",`${z.billtype}-${z.number}`)}else M.property("value","");_(),c7(R)}vd=N,Cd=()=>{v.selectedBillId=null,ce("#bill-search").property("value",""),_()},$d=$,kd=()=>{v.selectedBioid=null,Zo=null,ce("#member-search").property("value",""),_()};const S=v7(o,a,l,c),I=g.append("g").attr("class","edges"),k=g.append("g").attr("class","points"),C=m.append("g").attr("class","scale-bar").attr("transform",`translate(20, ${l-25})`);let E=null;m.append("text").attr("x",a/2).attr("y",-15).attr("text-anchor","middle").style("font-size","16px").style("font-weight","bold").text("Congressional Co-sponsorship MDS");function _(){const{xScale:R,yScale:M}=S(v.zoomLevel,v.panX,v.panY),z=v.selectedBillId?new Set(Hs.get(v.selectedBillId)?.map(P=>P.bioid)||[]):null;I.selectAll("line.edge").data(w).join("line").attr("class","edge").attr("x1",P=>R(P.x1)).attr("y1",P=>M(P.y1)).attr("x2",P=>R(P.x2)).attr("y2",P=>M(P.y2)).attr("stroke",xe.edge.color).attr("stroke-width",xe.edge.strokeWidth).attr("opacity",z?.15:xe.edge.opacity),k.selectAll("circle").data(o).join("circle").attr("r",xe.point.radius).attr("fill",P=>y(P.party)).attr("opacity",P=>z?z.has(P.bioid)?xe.point.opacity:.1:xe.point.opacity).attr("stroke",xe.point.strokeColor).attr("stroke-width",P=>z&&z.has(P.bioid)?2:xe.point.strokeWidth).style("cursor","pointer").attr("cx",P=>R(P.x)).attr("cy",P=>M(P.y)).on("click",(P,U)=>{console.log("click handler fired",U.bioid),P.stopPropagation(),$(v.selectedBioid===U.bioid?null:U.bioid)}).on("mouseover",(P,U)=>{x.style("opacity",1).html(`<strong>${U.name}</strong><br>${U.party}-${U.state}-${U.district}`)}).on("mousemove",P=>{E||(E=requestAnimationFrame(()=>{x.style("transform",`translate(${P.offsetX+15}px, ${P.offsetY-10}px)`),E=null}))}).on("mouseout",()=>{E&&(cancelAnimationFrame(E),E=null),x.style("opacity",0)}),z&&k.selectAll("circle").filter(P=>z.has(P.bioid)).raise(),C7(C,R,a),v.selectedBioid&&$(v.selectedBioid)}return $7(m,a,l,v,_),k7(p,u,h,d,f,g,a,l,o,w,y,S,v,_),N7(m,a),I7(o,$),S7(N),_(),Zo&&b.has(Zo)&&$(Zo),new Map(o.map(R=>[R.bioid,{x:R.x,y:R.y}]))}function E7(){const n=[];for(let e=2009;e<=2025;e+=2)n.push(new Date(`${e}-01-03`).getTime());for(let e=2009;e<=2025;e++){let s=new Date(`${e}-03-01`).getTime();const r=new Date(`${e}-10-31`).getTime();for(;s<=r;)n.push(s),s+=12096e5}for(let e=2009;e<=2024;e++){const s=e+1;if(s%2===1)continue;let r=new Date(`${e}-11-01`).getTime();const o=new Date(`${e}-12-31`).getTime();for(;r<=o;)n.push(r),r+=12096e5;r=new Date(`${s}-01-01`).getTime();const i=new Date(`${s}-02-28`).getTime();for(;r<=i;)n.push(r),r+=12096e5}return n.sort((e,s)=>e-s),n}const R7=E7();function io(n){return new Date(Number(n)).toISOString().split("T")[0]}function A7(n){const t=n[0],e=n[n.length-1],s={min:t,max:e};for(let r=1;r<n.length-1;r++){const o=(n[r]-t)/(e-t)*100;s[`${o.toFixed(4)}%`]=n[r]}return s}function D7(){const n=ce("#visualization-area").insert("div","#chart").attr("id","controls").style("margin","20px").style("font-family","sans-serif");n.append("div").attr("id","date-label").style("margin-bottom","10px").style("font-weight","bold"),n.append("div").attr("id","date-slider").style("width","600px").style("margin","20px 0"),n.append("span").attr("id","status").style("margin-left","20px").style("color","#666");const t=document.getElementById("date-slider"),e=new Date("2023-01-03").getTime(),s=new Date("2025-01-03").getTime();rN.create(t,{start:[e,s],connect:!0,snap:!0,range:A7(R7),tooltips:[{to:io},{to:io}]});const r=document.createElement("style");return r.textContent=`
    .noUi-tooltip {
      bottom: auto !important;
      top: 120% !important;
      font-size: 11px;
      padding: 2px 6px;
    }
  `,document.head.appendChild(r),t.noUiSlider.on("start",()=>{clearTimeout($h)}),t.noUiSlider.on("update",o=>{const i=io(o[0]),a=io(o[1]);ce("#date-label").text(`Date Range: ${i} to ${a}`),clearTimeout($h),$h=setTimeout(r$,1e3)}),t}let s$=null,$h=null,Zo=null,Ux=null,ml=null;async function r$(){ml&&ml.abort(),ml=new AbortController;const n=ml.signal,t=s$.noUiSlider.get(),e=io(t[0]),s=io(t[1]);ce("#status").text("Loading...").style("color","#666");try{Ux=await T7(e,s,Ux,n),ce("#status").text("")}catch(r){if(r.name==="AbortError")return;ce("#status").text("Error: "+r.message).style("color","red"),console.error("Visualization error:",r)}}s$=D7();r$();
