!function(t){"use strict";function e(){function t(t){"splice"===t[0].type&&"splice"===t[1].type&&(e=!0)}if("function"!=typeof Object.observe||"function"!=typeof Array.observe)return!1;var e=!1,n=[0];return Array.observe(n,t),n[1]=1,n.length=0,Object.deliverChangeRecords(t),e}function n(t){return+t===t>>>0}function r(t){return+t}function i(t){return t===Object(t)}function o(t,e){return t===e?0!==t||1/t===1/e:P(t)&&P(e)?!0:t!==t&&e!==e}function a(t){return"string"!=typeof t?!1:(t=t.replace(/\s/g,""),""==t?!0:"."==t[0]?!1:B.test(t))}function s(t){var e=W[t];if(e)return e;if(a(t)){var e=new u(t);return W[t]=e,e}}function u(t){return""==t.trim()?this:n(t)?(this.push(String(t)),this):(t.split(/\./).filter(function(t){return t}).forEach(function(t){this.push(t)},this),F&&this.length&&(this.getValueFrom=this.compiledGetValueFromFn()),void 0)}function c(t){for(var e=0;z>e&&t.check();)t.report(),e++}function l(t){for(var e in t)return!1;return!0}function f(t){return l(t.added)&&l(t.removed)&&l(t.changed)}function h(t,e){var n={},r={},i={};for(var o in e){var a=t[o];(void 0===a||a!==e[o])&&(o in t?a!==e[o]&&(i[o]=a):r[o]=void 0)}for(var o in t)o in e||(n[o]=t[o]);return Array.isArray(t)&&t.length!==e.length&&(i.length=t.length),{added:n,removed:r,changed:i}}function p(t,e){var n=e||(Array.isArray(t)?[]:{});for(var r in t)n[r]=t[r];return Array.isArray(t)&&(n.length=t.length),n}function d(t,e,n,r){if(this.closed=!1,this.object=t,this.callback=e,this.target=n,this.token=r,this.reporting=!0,N){var i=this;this.boundInternalCallback=function(t){i.internalCallback(t)}}g(this),this.connect(),this.sync(!0)}function g(t){J&&(Q.push(t),d._allObserversCount++)}function v(t,e,n,r){d.call(this,t,e,n,r)}function m(t,e,n,r){if(!Array.isArray(t))throw Error("Provided object is not an Array");d.call(this,t,e,n,r)}function y(t){this.arr=[],this.callback=t,this.isObserved=!0}function b(t,e,n,r,o){this.value=void 0;var a=s(e);return a?a.length?i(t)?(this.path=a,d.call(this,t,n,r,o),void 0):(this.closed=!0,this.value=void 0,void 0):(this.closed=!0,this.value=t,void 0):(this.closed=!0,this.value=void 0,void 0)}function $(t,e){if("function"==typeof Object.observe){var n=Object.getNotifier(t);return function(r,i){var o={object:t,type:r,name:e};2===arguments.length&&(o.oldValue=i),n.notify(o)}}}function w(t,e,n){for(var r={},i={},o=0;o<e.length;o++){var a=e[o];G[a.type]?(a.name in n||(n[a.name]=a.oldValue),"updated"!=a.type&&("new"!=a.type?a.name in r?(delete r[a.name],delete n[a.name]):i[a.name]=!0:a.name in i?delete i[a.name]:r[a.name]=!0)):(console.error("Unknown changeRecord type: "+a.type),console.error(a))}for(var s in r)r[s]=t[s];for(var s in i)i[s]=void 0;var u={};for(var s in n)if(!(s in r||s in i)){var c=t[s];n[s]!==c&&(u[s]=c)}return{added:r,removed:i,changed:u}}function k(t,e,n,r,i,o){for(var a=o-i+1,s=n-e+1,u=new Array(a),c=0;a>c;c++)u[c]=new Array(s),u[c][0]=c;for(var l=0;s>l;l++)u[0][l]=l;for(var c=1;a>c;c++)for(var l=1;s>l;l++)if(r[i+c-1]===t[e+l-1])u[c][l]=u[c-1][l-1];else{var f=u[c-1][l]+1,h=u[c][l-1]+1;u[c][l]=h>f?f:h}return u}function x(t){for(var e=t.length-1,n=t[0].length-1,r=t[e][n],i=[];e>0||n>0;)if(0!=e)if(0!=n){var o,a=t[e-1][n-1],s=t[e-1][n],u=t[e][n-1];o=u>s?a>s?s:a:a>u?u:a,o==a?(a==r?i.push(te):(i.push(ee),r=a),e--,n--):o==s?(i.push(re),e--,r=s):(i.push(ne),n--,r=u)}else i.push(re),e--;else i.push(ne),n--;return i.reverse(),i}function C(t,e,n){for(var r=0;n>r;r++)if(t[r]!==e[r])return r;return n}function S(t,e,n){for(var r=t.length,i=e.length,o=0;n>o&&t[--r]===e[--i];)o++;return o}function j(t,e,n){return{index:t,removed:e,addedCount:n}}function E(t,e,n,r,i,o){var a=0,s=0,u=Math.min(n-e,o-i);if(0==e&&0==i&&(a=C(t,r,u)),n==t.length&&o==r.length&&(s=S(t,r,u-a)),e+=a,i+=a,n-=s,o-=s,n-e==0&&o-i==0)return[];if(e==n){for(var c=j(e,[],0);o>i;)c.removed.push(r[i++]);return[c]}if(i==o)return[j(e,[],n-e)];for(var l=x(k(t,e,n,r,i,o)),c=void 0,f=[],h=e,p=i,d=0;d<l.length;d++)switch(l[d]){case te:c&&(f.push(c),c=void 0),h++,p++;break;case ee:c||(c=j(h,[],0)),c.addedCount++,h++,c.removed.push(r[p]),p++;break;case ne:c||(c=j(h,[],0)),c.addedCount++,h++;break;case re:c||(c=j(h,[],0)),c.removed.push(r[p]),p++}return c&&f.push(c),f}function T(t,e,n,r){return n>e||t>r?-1:e==n||r==t?0:n>t?r>e?e-n:r-n:e>r?r-t:e-t}function A(t,e,n,r){for(var i=j(e,n,r),o=!1,a=0,s=0;s<t.length;s++){var u=t[s];if(u.index+=a,!o){var c=T(i.index,i.index+i.removed.length,u.index,u.index+u.addedCount);if(c>=0){t.splice(s,1),s--,a-=u.addedCount-u.removed.length,i.addedCount+=u.addedCount-c;var l=i.removed.length+u.removed.length-c;if(i.addedCount||l){var n=u.removed;if(i.index<u.index){var f=i.removed.slice(0,u.index-i.index);Array.prototype.push.apply(f,n),n=f}if(i.index+i.removed.length>u.index+u.addedCount){var h=i.removed.slice(u.index+u.addedCount-i.index);Array.prototype.push.apply(n,h)}i.removed=n,u.index<i.index&&(i.index=u.index)}else o=!0}else if(i.index<u.index){o=!0,t.splice(s,0,i),s++;var p=i.addedCount-i.removed.length;u.index+=p,a+=p}}}o||t.push(i)}function O(t,e){for(var i=[],o=0;o<e.length;o++){var a=e[o];switch(a.type){case"splice":A(i,a.index,a.removed.slice(),a.addedCount);break;case"new":case"updated":case"deleted":if(!n(a.name))continue;var s=r(a.name);if(0>s)continue;A(i,s,[a.oldValue],1);break;default:console.error("Unexpected record type: "+JSON.stringify(a))}}return i}function D(t,e){var n=[];return O(t,e).forEach(function(e){return 1==e.addedCount&&1==e.removed.length?(e.removed[0]!==t[e.index]&&n.push(e),void 0):(n=n.concat(E(t,e.index,e.index+e.addedCount,e.removed,0,e.removed.length)),void 0)}),n}var N=e(),F=!1;try{var _=new Function("","return true;");F=_()}catch(R){}var P=t.Number.isNaN||function(e){return"number"==typeof e&&t.isNaN(e)},M="__proto__"in{}?function(t){return t}:function(t){var e=t.__proto__;if(!e)return t;var n=Object.create(e);return Object.getOwnPropertyNames(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}),n},H="[$_a-zA-Z]",L="[$_a-zA-Z0-9]",q=H+"+"+L+"*",I="(?:[0-9]|[1-9]+[0-9]+)",U="(?:"+q+"|"+I+")",V="(?:"+U+")(?:\\."+U+")*",B=new RegExp("^"+V+"$"),W={};u.prototype=M({__proto__:[],toString:function(){return this.join(".")},getValueFrom:function(t){for(var e=0;e<this.length;e++){if(void 0===t||null===t)return;t=t[this[e]]}return t},getValueFromObserved:function(t,e){e.reset();for(var n=0;n<this.length;n++){if(void 0===t||null===t)return e.cleanup(),void 0;e.observe(t),t=t[this[n]]}return t},compiledGetValueFromFn:function(){var t=this.map(function(t){return n(t)?'["'+t+'"]':"."+t}),e="",r="obj";e+="if (obj !== null && obj !== undefined";for(var i=0;i<this.length-1;i++){{this[i]}r+=t[i],e+=" &&\n     "+r+" !== null && "+r+" !== undefined"}return e+=")\n",r+=t[i],e+="  return "+r+";\nelse\n  return undefined;",new Function("obj",e)},setValueFrom:function(t,e){if(!this.length)return!1;for(var n=0;n<this.length-1;n++){if(void 0===t||null===t)return!1;t=t[this[n]]}return void 0===t||null===t?!1:(t[this[this.length-1]]=e,!0)}});var z=1e3;d.prototype={internalCallback:function(t){this.closed||this.reporting&&this.check(t)&&(this.report(),this.testingResults&&(this.testingResults.anyChanged=!0))},close:function(){this.closed||(this.object&&"function"==typeof this.object.unobserved&&this.object.unobserved(),this.disconnect(),this.object=void 0,this.closed=!0)},deliver:function(t){this.closed||(N?(this.testingResults=t,Object.deliverChangeRecords(this.boundInternalCallback),this.testingResults=void 0):c(this))},report:function(){this.reporting&&(this.sync(!1),this.reportArgs.push(this.token),this.invokeCallback(this.reportArgs),this.reportArgs=void 0)},invokeCallback:function(t){try{this.callback.apply(this.target,t)}catch(e){d._errorThrownDuringCallback=!0,console.error("Exception caught during observer callback: "+e)}},reset:function(){this.closed||(N&&(this.reporting=!1,Object.deliverChangeRecords(this.boundInternalCallback),this.reporting=!0),this.sync(!0))}};var Q,J=!N||t.forceCollectObservers;d._allObserversCount=0,J&&(Q=[]);var X=!1,Z="function"==typeof Object.deliverAllChangeRecords;t.Platform=t.Platform||{},t.Platform.performMicrotaskCheckpoint=function(){if(!X){if(Z)return Object.deliverAllChangeRecords(),void 0;if(J){X=!0;var t=0,e={};do{t++;var n=Q;Q=[],e.anyChanged=!1;for(var r=0;r<n.length;r++){var i=n[r];i.closed||(N?i.deliver(e):i.check()&&(e.anyChanged=!0,i.report()),Q.push(i))}}while(z>t&&e.anyChanged);d._allObserversCount=Q.length,X=!1}}},J&&(t.Platform.clearObservers=function(){Q=[]}),v.prototype=M({__proto__:d.prototype,connect:function(){N&&Object.observe(this.object,this.boundInternalCallback)},sync:function(){N||(this.oldObject=p(this.object))},check:function(t){var e,n;if(N){if(!t)return!1;n={},e=w(this.object,t,n)}else n=this.oldObject,e=h(this.object,this.oldObject);return f(e)?!1:(this.reportArgs=[e.added||{},e.removed||{},e.changed||{}],this.reportArgs.push(function(t){return n[t]}),!0)},disconnect:function(){N?this.object&&Object.unobserve(this.object,this.boundInternalCallback):this.oldObject=void 0}}),m.prototype=M({__proto__:v.prototype,connect:function(){N&&Array.observe(this.object,this.boundInternalCallback)},sync:function(){N||(this.oldObject=this.object.slice())},check:function(t){var e;if(N){if(!t)return!1;e=D(this.object,t)}else e=E(this.object,0,this.object.length,this.oldObject,0,this.oldObject.length);return e&&e.length?(this.reportArgs=[e],!0):!1}}),m.applySplices=function(t,e,n){n.forEach(function(n){for(var r=[n.index,n.removed.length],i=n.index;i<n.index+n.addedCount;)r.push(e[i]),i++;Array.prototype.splice.apply(t,r)})};var K=Object.getPrototypeOf({}),Y=Object.getPrototypeOf([]);y.prototype={reset:function(){this.isObserved=!this.isObserved},observe:function(t){if(i(t)&&t!==K&&t!==Y){var e=this.arr.indexOf(t);e>=0&&this.arr[e+1]===this.isObserved||(0>e&&(e=this.arr.length,this.arr[e]=t,Object.observe(t,this.callback)),this.arr[e+1]=this.isObserved,this.observe(Object.getPrototypeOf(t)))}},cleanup:function(){for(var t=0,e=0,n=this.isObserved;e<this.arr.length;){var r=this.arr[e];this.arr[e+1]==n?(e>t&&(this.arr[t]=r,this.arr[t+1]=n),t+=2):Object.unobserve(r,this.callback),e+=2}this.arr.length=t}},b.prototype=M({__proto__:d.prototype,connect:function(){N&&(this.observedSet=new y(this.boundInternalCallback))},disconnect:function(){this.value=void 0,N&&(this.observedSet.reset(),this.observedSet.cleanup(),this.observedSet=void 0)},check:function(){return this.value=N?this.path.getValueFromObserved(this.object,this.observedSet):this.path.getValueFrom(this.object),o(this.value,this.oldValue)?!1:(this.reportArgs=[this.value,this.oldValue],!0)},sync:function(t){t&&(this.value=N?this.path.getValueFromObserved(this.object,this.observedSet):this.path.getValueFrom(this.object)),this.oldValue=this.value}}),b.getValueAtPath=function(t,e){var n=s(e);if(n)return n.getValueFrom(t)},b.setValueAtPath=function(t,e,n){var r=s(e);r&&r.setValueFrom(t,n)};var G={"new":!0,updated:!0,deleted:!0};b.defineProperty=function(t,e,n){var r=n.object,i=s(n.path),o=$(t,e),a=new b(r,n.path,function(t,e){o&&o("updated",e)});return Object.defineProperty(t,e,{get:function(){return i.getValueFrom(r)},set:function(t){i.setValueFrom(r,t)},configurable:!0}),{close:function(){var n=i.getValueFrom(r);o&&a.deliver(),a.close(),Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0})}}};var te=0,ee=1,ne=2,re=3;t.Observer=d,t.Observer.hasObjectObserve=N,t.ArrayObserver=m,t.ArrayObserver.calculateSplices=function(t,e){return E(t,0,t.length,e,0,e.length)},t.ObjectObserver=v,t.PathObserver=b,t.Path=u}("undefined"!=typeof global&&global?global:this);