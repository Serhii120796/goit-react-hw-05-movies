/*! For license information please see 593.d3519f6f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[593],{174:function(t,r,e){e.d(r,{O:function(){return m}});var n,o,i,a,c,u=e(689),s=e(168),l=e(867),f=e(87),h=l.ZP.ul(n||(n=(0,s.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\ngap: 20px;\n"]))),p=l.ZP.li(o||(o=(0,s.Z)(["\ndisplay: flex;\nwidth: calc((100vw - 160px) / 5);\n    box-shadow: 0 2px 8px rgba(0,0,0,.1);\n    border-radius: 5px;\njustify-content: space-between;\n"]))),v=(0,l.ZP)(f.rU)(i||(i=(0,s.Z)(["\ndisplay: flex;\nflex-direction: column;\nwidth: 275px;\n"]))),y=l.ZP.img(a||(a=(0,s.Z)(["\nwidth: 100%;\nheight: 413px;\nobject-fit: cover;\n"]))),d=l.ZP.h2(c||(c=(0,s.Z)(["\ntext-align: center;\npadding: 10px 0;\nfont-size: 16px;\ncolor: ","\n"])),(function(t){return t.theme.colors.black})),g=e(184),m=function(t){var r=t.movies,e=(0,u.TH)();return(0,g.jsx)(h,{children:r.map((function(t){var r=t.title,n=t.name,o=t.id,i=t.poster_path;return(0,g.jsx)(p,{children:(0,g.jsxs)(v,{to:"/movies/".concat(o),state:{from:e},children:[(0,g.jsx)(y,{src:i?"https://image.tmdb.org/t/p/w500".concat(i):"https://kartinki.pics/uploads/posts/2021-11/1636576247_22-kartinkin-net-p-kinokompaniya-art-pikchers-krasivie-arti-27.jpg",alt:r}),(0,g.jsx)(d,{children:r||n})]})},o)}))})}},77:function(t,r,e){e.d(r,{D:function(){return u},o:function(){return c}});var n,o,i=e(168),a=e(867),c=a.ZP.main(n||(n=(0,i.Z)(["\npadding: 10px 30px;\n"]))),u=a.ZP.h1(o||(o=(0,i.Z)(["\nmargin-bottom: 10px;\n"])))},593:function(t,r,e){e.r(r),e.d(r,{default:function(){return b}});var n,o,i=e(861),a=e(439),c=e(174),u=e(791),s=e(718),l=e(87),f=e(168),h=e(867),p=h.ZP.form(n||(n=(0,f.Z)(["\nmargin-bottom: 10px;\n"]))),v=h.ZP.input(o||(o=(0,f.Z)(["\nmargin-right: 10px;\n"]))),y=e(184),d=function(){var t=(0,l.lr)(),r=(0,a.Z)(t,2)[1];return(0,y.jsxs)(p,{onSubmit:function(t){t.preventDefault();var e=t.target.elements.input.value;r({query:e})},children:[(0,y.jsx)(v,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"",name:"input",required:!0}),(0,y.jsx)("button",{type:"submit",children:"Search"})]})},g=e(77),m=e(510),x=e(777);function w(){w=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof d?r:d,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:Z(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var h="suspendedStart",p="executing",v="completed",y={};function d(){}function g(){}function m(){}var x={};s(x,a,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(G([])));j&&j!==e&&n.call(j,a)&&(x=j);var L=m.prototype=d.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function Z(r,e,n){var o=h;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function _(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,_(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function G(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return g.prototype=m,o(L,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=s(m,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},k(E.prototype),s(E.prototype,c,(function(){return this})),r.AsyncIterator=E,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(L),s(L,u,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:G(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}function b(){var t,r=(0,u.useState)([]),e=(0,a.Z)(r,2),n=e[0],o=e[1],f=(0,l.lr)(),h=null!==(t=(0,a.Z)(f,1)[0].get("query"))&&void 0!==t?t:"",p=(0,u.useState)(!1),v=(0,a.Z)(p,2),b=v[0],j=v[1],L=(0,u.useState)(!1),k=(0,a.Z)(L,2),E=k[0],Z=k[1];return(0,u.useEffect)((function(){function t(){return(t=(0,i.Z)(w().mark((function t(){var r,e;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.LI)(h);case 3:r=t.sent,e=r.results,o(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),Z(t.t0);case 11:return t.prev=11,j(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))).apply(this,arguments)}""!==h&&(j(!0),Z(!1),function(){t.apply(this,arguments)}())}),[h]),(0,y.jsxs)(g.o,{children:[(0,y.jsx)(d,{}),n.length>0&&(0,y.jsx)(c.O,{movies:n}),b&&(0,y.jsx)(m.a,{}),E&&(0,y.jsx)(x.j,{})]})}}}]);
//# sourceMappingURL=593.d3519f6f.chunk.js.map