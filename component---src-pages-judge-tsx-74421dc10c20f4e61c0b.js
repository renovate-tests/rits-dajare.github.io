(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ZiRl:function(t,e,r){var n=r("P8UN");n(n.P,"String",{repeat:r("gd4K")})},gd4K:function(t,e,r){"use strict";var n=r("1Llc"),o=r("ap2Z");t.exports=function(t){var e=String(o(this)),r="",i=n(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(r+=e);return r}},kD0k:function(t,e,r){t.exports=r("ls82")},ls82:function(t,e,r){r("rzGZ"),r("Dq+y"),r("q8oJ"),r("C9fy"),r("6kNP"),r("8npG"),r("LagC"),r("pJf4"),r("JHok"),r("pS08"),r("m210"),r("4DPX");var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var s={};function l(){}function f(){}function h(){}var p={};p[o]=function(){return this};var d=Object.getPrototypeOf,v=d&&d(d(x([])));v&&v!==e&&r.call(v,o)&&(p=v);var g=h.prototype=l.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function m(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function x(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=g.constructor=h,h.constructor=f,h[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(m.prototype),m.prototype[i]=function(){return this},t.AsyncIterator=m,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new m(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(g),g[a]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=x,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;w(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},n9eF:function(t,e,r){"use strict";r.r(e);r("ZiRl");var n=r("wTIg"),o=r("q1tI"),i=r("izhR"),a=r("ZdEh"),c=r("qqPP"),u=(r("xtjI"),r("4DPX"),r("Ggvi"),r("6kNP"),r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("sC2a"),r("kD0k")),s=r.n(u);r("ls82");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}var d=function(){var t,e=(t=s.a.mark((function t(e,r){var n,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://script.google.com/macros/s/AKfycbz6gJafNJO-Q8R5fqOP5XiklkVqeJAaePpDTcHIowR4JSxkRqr_/exec?url=http://abelab.dev:8080/dajare/"+e+"?dajare="+encodeURIComponent(r),t.next=3,fetch(n);case 3:return o=t.sent,t.abrupt("return",o.json());case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){p(i,n,o,a,c,"next",t)}function c(t){p(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t,r){return e.apply(this,arguments)}}(),v=function(t){return 0!==t.replace(/\s/g,"").length},g=function(){var t=Object(o.useState)(!1),e=t[0],r=t[1],n=Object(o.useState)(null),i=n[0],a=n[1],c=Object(o.useState)(null),u=c[0],s=c[1],l=Object(o.useState)(null),h=l[0],p=l[1];return Object(o.useEffect)((function(){return null===u||""===u?(r(!1),function(){}):(r(!0),a(null),Promise.all([d("judge",u),d("eval",u),d("reading",u)]).then((function(t){var e=t.reduce((function(t,e){return f(f({},t),e)}),{});r(!1),a(e)})).catch((function(t){p(t)})),function(){r(!1)})}),[u]),{isSubmitting:e,judge:s,result:i,error:h}},y=r("7cJT"),m=r("qKvR"),b=function(t){var e,r=t.onSubmit,n=t.text,o=t.onInput,a=t.result,u=t.error,s=t.isSubmitting,l=t.className,f=t.inputTextRef,h=t.showScore,p=t.forceShowScore,d=Math.ceil(null!==(e=null==a?void 0:a.score)&&void 0!==e?e:0),v=a&&""+"★".repeat(d)+"☆".repeat(5-d),g=h?v&&"ダジャレ："+n+"\nスコア："+v+"\n\n#ダジャレ判定 by @rits_dajare\n\nhttps://rits-dajare.github.io/judge":"ダジャレ："+n+"\nダジャレと判定できませんでした。\n\n#ダジャレ判定 by @rits_dajare\n\nhttps://rits-dajare.github.io/judge";return Object(m.c)(i.a,{as:"main",id:"main",className:l},Object(m.c)(y.b,{title:"ダジャレ判定",description:"あなたのダジャレを判定します！",pathname:"/judge"}),Object(m.c)(y.a,null),Object(m.c)(i.d,{as:"h1"},"ダジャレ判定"),Object(m.c)(c.a,null,"あなたのダジャレを判定します！"),Object(m.c)(c.a,null,"ダジャレを入力し、「判定！」ボタンを押してください"),Object(m.c)("form",{onSubmit:r},Object(m.c)(i.f,{htmlFor:"dajare"}),Object(m.c)("div",{className:"input-group"},Object(m.c)(i.e,{type:"text",name:"dajare",value:n,onChange:o,placeholder:"布団がふっとんだ",disabled:s,required:!0,className:"input-text",minLength:4,ref:f,autoFocus:!0}),Object(m.c)(i.b,{type:"submit",className:"submit",disabled:s},"判定！"))),(null!==a||s)&&Object(m.c)(i.a,{className:"result"},s&&Object(m.c)(i.h,{className:"loading"}),null!==a&&!h&&Object(m.c)(c.a,null,"ダジャレではありません"),h&&Object(m.c)(c.a,null,"あなたのダジャレのスコアは",v,"です！")),Object(m.c)("div",{className:"buttons"},a&&g&&Object(m.c)(y.c,{sns:"twitter",text:g}),null!==a&&!h&&Object(m.c)(i.b,{type:"button",onClick:p},"ダジャレとして判定する")),u&&Object(m.c)(i.g,null,"string"==typeof u?u:"string"==typeof u.message?u.message:"エラーが発生しました"))},j=Object(n.a)(b,{target:"erus1ca0"})(".input-group{display:flex;}.input-text{flex:1 1;}.input-text,.submit{",Object(a.a)({margin:3}),"}.result{display:flex;flex-direction:column;align-items:center;justify-content:center;max-width:30em;height:15em;margin:1em auto;border-radius:1em;border:solid 1px;",Object(a.a)({borderColor:"muted"}),"}.loading{width:4em;height:4em;margin:0 auto;}.buttons{display:flex;flex-direction:column;align-items:center;button{margin:1em;}}");e.default=function(){var t=Object(o.useState)(""),e=t[0],r=t[1],n=g(),i=n.result,a=n.isSubmitting,c=n.judge,u=n.error,s=Object(o.useRef)(null),l=Object(o.useState)(!1),f=l[0],h=l[1];return Object(m.c)(j,{text:e,result:i,error:u,isSubmitting:a,onInput:function(t){var e,n,o=t.currentTarget.value;(r(o),v(o))?null===(e=s.current)||void 0===e||e.setCustomValidity(""):null===(n=s.current)||void 0===n||n.setCustomValidity("空白以外の文字を入力してください")},onSubmit:function(t){t.preventDefault(),h(!1),v(e)&&c(e)},inputTextRef:s,showScore:(null==i?void 0:i.is_dajare)||f,forceShowScore:function(){return h(!0)}})}}}]);
//# sourceMappingURL=component---src-pages-judge-tsx-74421dc10c20f4e61c0b.js.map