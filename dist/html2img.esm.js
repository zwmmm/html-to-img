import e from"@babel/runtime-corejs3/regenerator";import t from"@babel/runtime-corejs3/core-js/promise";import r from"@babel/runtime-corejs3/core-js/instance/for-each";import n from"@babel/runtime-corejs3/core-js/array/from";import a from"html2canvas";var o=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;function c(a,c){var s,u,i;return e.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,s=c?a.querySelectorAll("img"):a.querySelectorAll("img[data-base64]"),u=n(s,(function(e){return r=e.src,new t((function(e,t){if(!r.match(o))return e(r);var n=document.createElement("canvas"),a=n.getContext("2d"),c=new Image;c.crossOrigin="Anonymous",c.src=r,c.onload=function(){n.width=c.width,n.height=c.height,a&&a.drawImage(c,0,0),e(n.toDataURL("image/png"))},c.onerror=t}));var r})),l.next=5,e.awrap(t.all(u));case 5:i=l.sent,r(i).call(i,(function(e,t){return s[t].src=e})),l.next=13;break;case 9:return l.prev=9,l.t0=l.catch(0),console.error(l.t0,"图片错误"),l.abrupt("return",l.t0);case 13:return l.prev=13,l.abrupt("return",a);case 16:case"end":return l.stop()}}),null,null,[[0,9,13,16]])}function s(r,n){var o,c,s,u,i;return e.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,o=document.createElement("canvas"),c=r.offsetWidth,s=r.offsetHeight,u=n.scale,o.width=c*u,o.height=s*u,o.style.width="".concat(c,"px"),o.style.height="".concat(s,"px"),l.next=11,e.awrap(a(r,{width:c,height:s,scale:u,useCORS:!0,canvas:o,scrollX:0,scrollY:0,imageTimeout:0}));case 11:return i=l.sent,l.abrupt("return",i.toDataURL("image/jpeg",1));case 15:return l.prev=15,l.t0=l.catch(0),l.abrupt("return",t.resolve(l.t0));case 18:case"end":return l.stop()}}),null,null,[[0,15]])}function u(e){e.style.position="fixed",e.style.left="-100vw",e.style.top="0"}function i(e){e.style.left="0"}function l(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new(t.extend(e))({el:document.createElement("div"),propsData:r}).$mount().$el}export default function(r,n,a){var o,l,p,m,d,f,h,v,b,g;return e.async((function(w){for(;;)switch(w.prev=w.next){case 0:return l=(o=n||{}).debug,p=void 0!==l&&l,m=o.scale,d=void 0===m?2:m,f=o.base64,h=void 0!==f&&f,u(v=r.cloneNode(!0)),w.next=5,e.awrap(c(v,h));case 5:if(b=w.sent,document.body.appendChild(b),!p){w.next=10;break}return i(v),w.abrupt("return",t.resolve(""));case 10:return w.next=12,e.awrap(s(b,{scale:d}));case 12:return g=w.sent,document.body.removeChild(b),a&&a(g),w.abrupt("return",g);case 16:case"end":return w.stop()}}))}export{l as vueComponentToHtml};
