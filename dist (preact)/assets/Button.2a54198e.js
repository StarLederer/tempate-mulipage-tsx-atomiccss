(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var H,d,G,w,B,D={},V=[],te=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(t,e){for(var n in e)t[n]=e[n];return t}function q(t){var e=t.parentNode;e&&e.removeChild(t)}function b(t,e,n){var l,r,o,s={};for(o in e)o=="key"?l=e[o]:o=="ref"?r=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?H.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return N(t,s,l,r,null)}function N(t,e,n,l,r){var o={type:t,props:e,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r==null?++G:r};return r==null&&d.vnode!=null&&d.vnode(o),o}function O(t){return t.children}function E(t,e){this.props=t,this.context=e}function A(t,e){if(e==null)return t.__?A(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?A(t):null}function K(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return K(t)}}function $(t){(!t.__d&&(t.__d=!0)&&w.push(t)&&!M.__r++||B!==d.debounceRendering)&&((B=d.debounceRendering)||setTimeout)(M)}function M(){for(var t;M.__r=w.length;)t=w.sort(function(e,n){return e.__v.__b-n.__v.__b}),w=[],t.some(function(e){var n,l,r,o,s,p;e.__d&&(s=(o=(n=e).__v).__e,(p=n.__P)&&(l=[],(r=k({},o)).__v=o.__v+1,F(p,o,r,n.__n,p.ownerSVGElement!==void 0,o.__h!=null?[s]:null,l,s==null?A(o):s,o.__h),Y(l,o),o.__e!=s&&K(o)))})}function X(t,e,n,l,r,o,s,p,u,a){var _,h,c,i,f,x,v,y=l&&l.__k||V,g=y.length;for(n.__k=[],_=0;_<e.length;_++)if((i=n.__k[_]=(i=e[_])==null||typeof i=="boolean"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?N(null,i,null,null,i):Array.isArray(i)?N(O,{children:i},null,null,null):i.__b>0?N(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null){if(i.__=n,i.__b=n.__b+1,(c=y[_])===null||c&&i.key==c.key&&i.type===c.type)y[_]=void 0;else for(h=0;h<g;h++){if((c=y[h])&&i.key==c.key&&i.type===c.type){y[h]=void 0;break}c=null}F(t,i,c=c||D,r,o,s,p,u,a),f=i.__e,(h=i.ref)&&c.ref!=h&&(v||(v=[]),c.ref&&v.push(c.ref,null,i),v.push(h,i.__c||f,i)),f!=null?(x==null&&(x=f),typeof i.type=="function"&&i.__k===c.__k?i.__d=u=J(i,u,t):u=Q(t,i,c,y,f,u),typeof n.type=="function"&&(n.__d=u)):u&&c.__e==u&&u.parentNode!=t&&(u=A(c))}for(n.__e=x,_=g;_--;)y[_]!=null&&ee(y[_],y[_]);if(v)for(_=0;_<v.length;_++)Z(v[_],v[++_],v[++_])}function J(t,e,n){for(var l,r=t.__k,o=0;r&&o<r.length;o++)(l=r[o])&&(l.__=t,e=typeof l.type=="function"?J(l,e,n):Q(n,l,l,r,l.__e,e));return e}function Q(t,e,n,l,r,o){var s,p,u;if(e.__d!==void 0)s=e.__d,e.__d=void 0;else if(n==null||r!=o||r.parentNode==null)e:if(o==null||o.parentNode!==t)t.appendChild(r),s=null;else{for(p=o,u=0;(p=p.nextSibling)&&u<l.length;u+=2)if(p==r)break e;t.insertBefore(r,o),s=o}return s!==void 0?s:r.nextSibling}function _e(t,e,n,l,r){var o;for(o in n)o==="children"||o==="key"||o in e||U(t,o,null,n[o],l);for(o in e)r&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===e[o]||U(t,o,e[o],n[o],l)}function R(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||te.test(e)?n:n+"px"}function U(t,e,n,l,r){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof l=="string"&&(t.style.cssText=l=""),l)for(e in l)n&&e in n||R(t.style,e,"");if(n)for(e in n)l&&n[e]===l[e]||R(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?l||t.addEventListener(e,o?z:j,o):t.removeEventListener(e,o?z:j,o);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n==null?"":n;break e}catch{}typeof n=="function"||(n==null||n===!1&&e.indexOf("-")==-1?t.removeAttribute(e):t.setAttribute(e,n))}}function j(t){this.l[t.type+!1](d.event?d.event(t):t)}function z(t){this.l[t.type+!0](d.event?d.event(t):t)}function F(t,e,n,l,r,o,s,p,u){var a,_,h,c,i,f,x,v,y,g,C,S,I,P,L,m=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(u=n.__h,p=e.__e=n.__e,e.__h=null,o=[p]),(a=d.__b)&&a(e);try{e:if(typeof m=="function"){if(v=e.props,y=(a=m.contextType)&&l[a.__c],g=a?y?y.props.value:a.__:l,n.__c?x=(_=e.__c=n.__c).__=_.__E:("prototype"in m&&m.prototype.render?e.__c=_=new m(v,g):(e.__c=_=new E(v,g),_.constructor=m,_.render=oe),y&&y.sub(_),_.props=v,_.state||(_.state={}),_.context=g,_.__n=l,h=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),m.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=k({},_.__s)),k(_.__s,m.getDerivedStateFromProps(v,_.__s))),c=_.props,i=_.state,h)m.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(m.getDerivedStateFromProps==null&&v!==c&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(v,g),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(v,_.__s,g)===!1||e.__v===n.__v){for(_.props=v,_.state=_.__s,e.__v!==n.__v&&(_.__d=!1),_.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(T){T&&(T.__=e)}),C=0;C<_._sb.length;C++)_.__h.push(_._sb[C]);_._sb=[],_.__h.length&&s.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(v,_.__s,g),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(c,i,f)})}if(_.context=g,_.props=v,_.__v=e,_.__P=t,S=d.__r,I=0,"prototype"in m&&m.prototype.render){for(_.state=_.__s,_.__d=!1,S&&S(e),a=_.render(_.props,_.state,_.context),P=0;P<_._sb.length;P++)_.__h.push(_._sb[P]);_._sb=[]}else do _.__d=!1,S&&S(e),a=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++I<25);_.state=_.__s,_.getChildContext!=null&&(l=k(k({},l),_.getChildContext())),h||_.getSnapshotBeforeUpdate==null||(f=_.getSnapshotBeforeUpdate(c,i)),L=a!=null&&a.type===O&&a.key==null?a.props.children:a,X(t,Array.isArray(L)?L:[L],e,n,l,r,o,s,p,u),_.base=e.__e,e.__h=null,_.__h.length&&s.push(_),x&&(_.__E=_.__=null),_.__e=!1}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=ne(n.__e,e,n,l,r,o,s,u);(a=d.diffed)&&a(e)}catch(T){e.__v=null,(u||o!=null)&&(e.__e=p,e.__h=!!u,o[o.indexOf(p)]=null),d.__e(T,e,n)}}function Y(t,e){d.__c&&d.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(l){l.call(n)})}catch(l){d.__e(l,n.__v)}})}function ne(t,e,n,l,r,o,s,p){var u,a,_,h=n.props,c=e.props,i=e.type,f=0;if(i==="svg"&&(r=!0),o!=null){for(;f<o.length;f++)if((u=o[f])&&"setAttribute"in u==!!i&&(i?u.localName===i:u.nodeType===3)){t=u,o[f]=null;break}}if(t==null){if(i===null)return document.createTextNode(c);t=r?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,c.is&&c),o=null,p=!1}if(i===null)h===c||p&&t.data===c||(t.data=c);else{if(o=o&&H.call(t.childNodes),a=(h=n.props||D).dangerouslySetInnerHTML,_=c.dangerouslySetInnerHTML,!p){if(o!=null)for(h={},f=0;f<t.attributes.length;f++)h[t.attributes[f].name]=t.attributes[f].value;(_||a)&&(_&&(a&&_.__html==a.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(_e(t,c,h,r,p),_)e.__k=[];else if(f=e.props.children,X(t,Array.isArray(f)?f:[f],e,n,l,r&&i!=="foreignObject",o,s,o?o[0]:n.__k&&A(n,0),p),o!=null)for(f=o.length;f--;)o[f]!=null&&q(o[f]);p||("value"in c&&(f=c.value)!==void 0&&(f!==t.value||i==="progress"&&!f||i==="option"&&f!==h.value)&&U(t,"value",f,h.value,!1),"checked"in c&&(f=c.checked)!==void 0&&f!==t.checked&&U(t,"checked",f,h.checked,!1))}return t}function Z(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(l){d.__e(l,n)}}function ee(t,e,n){var l,r;if(d.unmount&&d.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||Z(l,null,e)),(l=t.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(o){d.__e(o,e)}l.base=l.__P=null,t.__c=void 0}if(l=t.__k)for(r=0;r<l.length;r++)l[r]&&ee(l[r],e,n||typeof t.type!="function");n||t.__e==null||q(t.__e),t.__=t.__e=t.__d=void 0}function oe(t,e,n){return this.constructor(t,n)}function re(t,e,n){var l,r,o;d.__&&d.__(t,e),r=(l=typeof n=="function")?null:n&&n.__k||e.__k,o=[],F(e,t=(!l&&n||e).__k=b(O,null,[t]),r||D,D,e.ownerSVGElement!==void 0,!l&&n?[n]:r?null:e.firstChild?H.call(e.childNodes):null,o,!l&&n?n:r?r.__e:e.firstChild,l),Y(o,t)}H=V.slice,d={__e:function(t,e,n,l){for(var r,o,s;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(t)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,l||{}),s=r.__d),s)return r.__E=r}catch(p){t=p}throw t}},G=0,E.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof t=="function"&&(t=t(k({},n),this.props)),t&&k(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),$(this))},E.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),$(this))},E.prototype.render=O,w=[],M.__r=0;const W=({children:t})=>b("span",{class:"text-slate-300"},t),le=()=>b("header",null,b("h1",{class:"text-2xl text-slate-900 p-6 font-extrabold flex items-center justify-center",style:"min-height: 50vh;"},"Multipage \xA0",b(W,null,"+")," \xA0 TSX \xA0",b(W,null,"+")," \xA0 Atomic CSS \xA0",b(W,null,"= this")," \xA0 template")),ie=({href:t,children:e})=>b("a",{class:"bg-blue-100 text-blue-600 font-bold rounded-full p-1 px-6 hover:bg-indigo-100 hover:text-indigo-600 transition",href:t},e);export{ie as B,le as H,re as P,b as h,O as p};