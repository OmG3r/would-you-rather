var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function i(t,e,n=e){return t.set(n),e}function r(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function p(){return v(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let k;function w(t){k=t}function b(t){(function(){if(!k)throw new Error("Function called outside component initialization");return k})().$$.on_mount.push(t)}const x=[],$=[],y=[],_=[],C=Promise.resolve();let z=!1;function E(t){y.push(t)}let M=!1;const N=new Set;function S(){if(!M){M=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];w(e),T(e.$$)}for(x.length=0;$.length;)$.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];N.has(e)||(N.add(e),e())}y.length=0}while(x.length);for(;_.length;)_.pop()();z=!1,M=!1,N.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const j=new Set;let A;function L(){A={r:0,c:[],p:A}}function O(){A.r||o(A.c),A=A.p}function F(t,e){t&&t.i&&(j.delete(t),t.i(e))}function Q(t,e,n,o){if(t&&t.o){if(j.has(t))return;j.add(t),A.c.push(()=>{j.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function P(t){t&&t.c()}function q(t,n,s){const{fragment:l,on_mount:i,on_destroy:r,after_update:u}=t.$$;l&&l.m(n,s),E(()=>{const n=i.map(e).filter(c);r?r.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(E)}function B(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&(x.push(t),z||(z=!0,C.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,c,s,l,i,r,u=[-1]){const d=k;w(e);const f=c.props||{},v=e.$$={fragment:null,ctx:null,props:r,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u};let p=!1;if(v.ctx=s?s(e,f,(t,n,...o)=>{const c=o.length?o[0]:n;return v.ctx&&i(v.ctx[t],v.ctx[t]=c)&&(v.bound[t]&&v.bound[t](c),p&&H(e,t)),n}):[],v.update(),p=!0,o(v.before_update),v.fragment=!!l&&l(v.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);v.fragment&&v.fragment.l(t),t.forEach(a)}else v.fragment&&v.fragment.c();c.intro&&F(e.$$.fragment),q(e,c.target,c.anchor),S()}w(d)}class R{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const W=[];const X=function(e,n=t){let o;const c=[];function l(t){if(s(e,t)&&(e=t,o)){const t=!W.length;for(let t=0;t<c.length;t+=1){const n=c[t];n[1](),W.push(n,e)}if(t){for(let t=0;t<W.length;t+=2)W[t][0](W[t+1]);W.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(s,i=t){const r=[s,i];return c.push(r),1===c.length&&(o=n(l)||t),s(e),()=>{const t=c.indexOf(r);-1!==t&&c.splice(t,1),0===c.length&&(o(),o=null)}}}}(0),D={1001:{1:{one:{text:"Nod5lo na9raw w njibo A",clicks:958},two:{text:"Nel3abo belote",clicks:600}},2:{one:{text:"nor9do",clicks:958},two:{text:"neklo kaskrout",clicks:600}}},1002:{1:{one:{text:"buy a car",clicks:9571},two:{text:"buy a bike",clicks:3598}},2:{one:{text:"go to tunisia",clicks:958},two:{text:"go to america",clicks:600}}},1003:{1:{one:{text:"boy",clicks:751},two:{text:"girl",clicks:369}},2:{one:{text:"yes we are here",clicks:958},two:{text:"no we are not",clicks:600}},3:{one:{text:"league of legends",clicks:958},two:{text:"dota 2",clicks:600}}}};function G(t,e,n){const o=t.slice();return o[4]=e[n],o}function J(t){let e,n,o,c,s,l,i,d,h,k,w,b,x,$,y,_,C,z,E,M,N,S=t[4].title+"",T=t[4].subtitle+"",j=Object.keys(D[t[4].id]).length+"";function A(...e){return t[2](t[4],...e)}return{c(){e=f("div"),n=f("div"),o=f("img"),l=p(),i=f("div"),d=f("div"),h=v(S),k=p(),w=f("div"),b=v(T),x=p(),$=f("div"),y=v(j),_=v(" Questions"),z=p(),g(o,"class","u-cat-image svelte-zpdmr1"),o.src!==(c="/imgs/"+t[4].img)&&g(o,"src",c),g(o,"alt",s=t[4].img),g(n,"class","u-cat-image-container svelte-zpdmr1"),g(d,"class","u-cat-title svelte-zpdmr1"),g(w,"class","u-cat-subtitle"),g($,"class","u-cat-questions"),g(i,"class","u-cat-text svelte-zpdmr1"),g(i,"style",C="color: "+t[4].textColor+";"),g(e,"class","u-categorey svelte-zpdmr1"),g(e,"style",E="background-color: "+t[4].backgroundColor+";")},m(t,c){u(t,e,c),r(e,n),r(n,o),r(e,l),r(e,i),r(i,d),r(d,h),r(i,k),r(i,w),r(w,b),r(i,x),r(i,$),r($,y),r($,_),r(e,z),M||(N=m(e,"click",A),M=!0)},p(e,n){t=e},d(t){t&&a(e),M=!1,N()}}}function K(e){let n,o,c,s,l,i=e[0],v=[];for(let t=0;t<i.length;t+=1)v[t]=J(G(e,i,t));return{c(){n=f("div"),o=f("div"),c=f("header"),c.innerHTML='<div class="u-game-title svelte-zpdmr1">Would you Rather</div> \n            <div class="u-page-title svelte-zpdmr1">Questions</div>',s=p(),l=f("div");for(let t=0;t<v.length;t+=1)v[t].c();g(c,"class","svelte-zpdmr1"),g(l,"class","u-categories svelte-zpdmr1"),g(o,"class","u-content svelte-zpdmr1"),g(n,"class","u-view svelte-zpdmr1")},m(t,e){u(t,n,e),r(n,o),r(o,c),r(o,s),r(o,l);for(let t=0;t<v.length;t+=1)v[t].m(l,null)},p(t,[e]){if(3&e){let n;for(i=t[0],n=0;n<i.length;n+=1){const o=G(t,i,n);v[n]?v[n].p(o,e):(v[n]=J(o),v[n].c(),v[n].m(l,null))}for(;n<v.length;n+=1)v[n].d(1);v.length=i.length}},i:t,o:t,d(t){t&&a(n),d(v,t)}}}function U(t,e,n){let o;l(t,X,t=>n(3,o=t));let c=t=>{i(X,o=t)};return[[{id:"1001",title:"Love",subtitle:"Package",img:"heart-01.png",backgroundColor:"#F94865",textColor:"#100406",numberQuestions:"30"},{id:"1002",title:"Food",subtitle:"Package",img:"food-01.png",backgroundColor:"#F9CF29",textColor:"#191918",numberQuestions:"30"},{id:"1003",title:"Tech Lovers",subtitle:"Package",img:"phone-01.png",backgroundColor:"#152033",textColor:"#E6E6E6",numberQuestions:"30"}],c,t=>{c(t.id)}]}class V extends R{constructor(t){super(),I(this,t,U,K,s,{})}}function Y(t){let e,n;return{c(){e=f("img"),g(e,"class","u-ticked svelte-1i6svvr"),e.src!==(n="/imgs/misc/tick-01.png")&&g(e,"src","/imgs/misc/tick-01.png"),g(e,"alt","ticked")},m(t,n){u(t,e,n)},d(t){t&&a(e)}}}function Z(t){let e,n;return{c(){e=f("img"),g(e,"class","u-ticked svelte-1i6svvr"),e.src!==(n="/imgs/misc/tick-01.png")&&g(e,"src","/imgs/misc/tick-01.png"),g(e,"alt","ticked")},m(t,n){u(t,e,n)},d(t){t&&a(e)}}}function tt(t){let e,n,o,c,s,l,i,d,m,k,w=Math.round(t[0].one.clicks/(t[0].one.clicks+t[0].two.clicks)*100)+"",b=100-Math.round(t[0].one.clicks/(t[0].one.clicks+t[0].two.clicks)*100)+"";return{c(){e=f("div"),n=f("div"),o=v(w),c=v(" %"),l=p(),i=f("div"),d=v(b),m=v(" %"),g(n,"class","u-choice u-one svelte-1i6svvr"),g(n,"style",s="width: "+Math.round(t[0].one.clicks/(t[0].one.clicks+t[0].two.clicks)*100)+"%;"),g(i,"class","u-choice u-two svelte-1i6svvr"),g(i,"style",k="width: "+(100-Math.round(t[0].one.clicks/(t[0].one.clicks+t[0].two.clicks)*100))+"%;"),g(e,"class","absolute-center u-result svelte-1i6svvr")},m(t,s){u(t,e,s),r(e,n),r(n,o),r(n,c),r(e,l),r(e,i),r(i,d),r(i,m)},p(t,e){1&e&&w!==(w=Math.round(t[0].one.clicks/(t[0].one.clicks+t[0].two.clicks)*100)+"")&&h(o,w),1&e&&s!==(s="width: "+Math.round(t[0].one.clicks/(t[0].one.clicks+t[0].two.clicks)*100)+"%;")&&g(n,"style",s),1&e&&b!==(b=100-Math.round(t[0].one.clicks/(t[0].one.clicks+t[0].two.clicks)*100)+"")&&h(d,b),1&e&&k!==(k="width: "+(100-Math.round(t[0].one.clicks/(t[0].one.clicks+t[0].two.clicks)*100))+"%;")&&g(i,"style",k)},d(t){t&&a(e)}}}function et(e){let n;return{c(){n=f("div"),n.textContent="or",g(n,"class","u-or absolute-center svelte-1i6svvr")},m(t,e){u(t,n,e)},p:t,d(t){t&&a(n)}}}function nt(e){let n,o,c;return{c(){n=f("div"),n.textContent="NEXT",g(n,"class","u-button svelte-1i6svvr")},m(t,s){u(t,n,s),o||(c=m(n,"click",e[3]),o=!0)},p:t,d(t){t&&a(n),o=!1,c()}}}function ot(e){let n,c,s,l,i,d,k,w,b,x,$,y,_,C,z,E,M,N,S,T,j,A,L,O,F,Q,P=e[0].one.text+"",q=e[0].two.text+"",B="one"==e[1]&&Y(),H="two"==e[1]&&Z();function I(t,e){return"none"==t[1]?et:tt}let R=I(e),W=R(e),X="none"!=e[1]&&nt(e);return{c(){n=f("div"),c=f("div"),s=f("header"),l=f("img"),d=p(),k=f("div"),k.innerHTML='<div class="u-game-title svelte-1i6svvr">Would</div> \n                <div class="u-game-title svelte-1i6svvr">you Rather</div>',w=p(),b=f("div"),x=f("div"),$=f("div"),y=v(P),_=p(),B&&B.c(),C=p(),z=f("div"),E=p(),M=f("div"),N=f("div"),S=v(q),T=p(),H&&H.c(),j=p(),W.c(),A=p(),X&&X.c(),L=p(),O=f("footer"),g(l,"class","u-back svelte-1i6svvr"),l.src!==(i="/imgs/misc/back.png")&&g(l,"src","/imgs/misc/back.png"),g(l,"alt",""),g(k,"class","u-game-title-container svelte-1i6svvr"),g(s,"class","svelte-1i6svvr"),g($,"class","u-option-text svelte-1i6svvr"),g(x,"class","u-option u-one svelte-1i6svvr"),g(z,"class","u-spacer svelte-1i6svvr"),g(N,"class","u-option-text svelte-1i6svvr"),g(M,"class","u-option u-two svelte-1i6svvr"),g(b,"class","u-option-box svelte-1i6svvr"),g(c,"class","u-content svelte-1i6svvr"),g(n,"class","u-view svelte-1i6svvr")},m(t,o){u(t,n,o),r(n,c),r(c,s),r(s,l),r(s,d),r(s,k),r(c,w),r(c,b),r(b,x),r(x,$),r($,y),r(x,_),B&&B.m(x,null),r(b,C),r(b,z),r(b,E),r(b,M),r(M,N),r(N,S),r(M,T),H&&H.m(M,null),r(b,j),W.m(b,null),r(c,A),X&&X.m(c,null),r(n,L),r(n,O),F||(Q=[m(l,"click",e[4]),m(x,"click",e[6]),m(M,"click",e[7])],F=!0)},p(t,[e]){1&e&&P!==(P=t[0].one.text+"")&&h(y,P),"one"==t[1]?B||(B=Y(),B.c(),B.m(x,null)):B&&(B.d(1),B=null),1&e&&q!==(q=t[0].two.text+"")&&h(S,q),"two"==t[1]?H||(H=Z(),H.c(),H.m(M,null)):H&&(H.d(1),H=null),R===(R=I(t))&&W?W.p(t,e):(W.d(1),W=R(t),W&&(W.c(),W.m(b,null))),"none"!=t[1]?X?X.p(t,e):(X=nt(t),X.c(),X.m(c,null)):X&&(X.d(1),X=null)},i:t,o:t,d(t){t&&a(n),B&&B.d(),H&&H.d(),W.d(),X&&X.d(),F=!1,o(Q)}}}function ct(t,e,n){let o;l(t,X,t=>n(8,o=t));let{mySwiper:c={}}=e,{option:s={one:{text:"Nod5lo na9raw w njibo A",clicks:958},two:{text:"Nel3abo belote",clicks:600}}}=e,r="none",u=t=>{n(0,s[t].clicks+=1,s),n(1,r=t)},a=()=>{c.slideTo(0,500),setTimeout(()=>{i(X,o=0)},500)};return t.$set=t=>{"mySwiper"in t&&n(5,c=t.mySwiper),"option"in t&&n(0,s=t.option)},[s,r,u,()=>{c.activeIndex!=c.slides.length-1?(c.slideNext(500),console.log(c.activeIndex),console.log(c.slides.length)):a()},a,c,()=>{u("one")},()=>{u("two")}]}class st extends R{constructor(t){super(),I(this,t,ct,ot,s,{mySwiper:5,option:0})}}function lt(t,e,n){const o=t.slice();return o[2]=e[n][0],o[3]=e[n][1],o}function it(t){let e,n,o=Object.entries(D[t[1]]),c=[];for(let e=0;e<o.length;e+=1)c[e]=rt(lt(t,o,e));const s=t=>Q(c[t],1,1,()=>{c[t]=null});return{c(){for(let t=0;t<c.length;t+=1)c[t].c();e=v("")},m(t,o){for(let e=0;e<c.length;e+=1)c[e].m(t,o);u(t,e,o),n=!0},p(t,n){if(3&n){let l;for(o=Object.entries(D[t[1]]),l=0;l<o.length;l+=1){const s=lt(t,o,l);c[l]?(c[l].p(s,n),F(c[l],1)):(c[l]=rt(s),c[l].c(),F(c[l],1),c[l].m(e.parentNode,e))}for(L(),l=o.length;l<c.length;l+=1)s(l);O()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)F(c[t]);n=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)Q(c[t]);n=!1},d(t){d(c,t),t&&a(e)}}}function rt(t){let e,n,o,c;return n=new st({props:{mySwiper:t[0],option:t[3]}}),{c(){e=f("div"),P(n.$$.fragment),o=p(),g(e,"class","swiper-slide")},m(t,s){u(t,e,s),q(n,e,null),r(e,o),c=!0},p(t,e){const o={};1&e&&(o.mySwiper=t[0]),2&e&&(o.option=t[3]),n.$set(o)},i(t){c||(F(n.$$.fragment,t),c=!0)},o(t){Q(n.$$.fragment,t),c=!1},d(t){t&&a(e),B(n)}}}function ut(t){let e,n,o,c,s,l;c=new V({});let i=t[1]&&it(t);return{c(){e=f("div"),n=f("div"),o=f("div"),P(c.$$.fragment),s=p(),i&&i.c(),g(o,"class","swiper-slide"),g(n,"class","swiper-wrapper"),g(e,"class","swiper-container svelte-14ctl8j")},m(t,a){u(t,e,a),r(e,n),r(n,o),q(c,o,null),r(n,s),i&&i.m(n,null),l=!0},p(t,[e]){t[1]?i?(i.p(t,e),2&e&&F(i,1)):(i=it(t),i.c(),F(i,1),i.m(n,null)):i&&(L(),Q(i,1,1,()=>{i=null}),O())},i(t){l||(F(c.$$.fragment,t),F(i),l=!0)},o(t){Q(c.$$.fragment,t),Q(i),l=!1},d(t){t&&a(e),B(c),i&&i.d()}}}function at(t,e,n){let o;l(t,X,t=>n(1,o=t));let c={};return b(async()=>{n(0,c=new Swiper(".swiper-container",{speed:400}))}),console.log(D),X.subscribe(t=>{console.log(t),setTimeout(()=>{c.update(),c.slideNext(500)},50)}),[c,o]}return new class extends R{constructor(t){super(),I(this,t,at,ut,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
