(function(t){function e(e){for(var n,r,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)r=i[u],o[r]&&d.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},o={app:0},s=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"964b2e61"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"1245a8e6"}[t]+".css",o=l.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===n||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.request=n,delete r[t],f.parentNode.removeChild(f),a(s)},f.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(f)}).then(function(){r[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise(function(e,a){n=o[t]=[e,a]});e.push(n[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");s.type=n,s.request=r,a[1](s)}o[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"0418":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"one"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item active"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n     \n       \n      ")],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/about"}},[t._v("Weather")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/display"}},[t._v("Notes")])],1)])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o=a("2877"),s={},i=Object(o["a"])(s,n,r,!1,null,null,null);i.options.__file="Header.vue";e["a"]=i.exports},"2c59":function(t,e,a){"use strict";var n=a("f35c"),r=a.n(n);r.a},"346f":function(t,e,a){},"51a9":function(t,e,a){"use strict";var n=a("346f"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],s={},i=s,l=(a("034f"),a("2877")),c=Object(l["a"])(i,r,o,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,d=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Header"),a("div",{staticClass:"contaner text-center"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-sm-12 col-lg-10"},[a("h1",{staticClass:"home"},[t._v("Home")]),a("form",{staticClass:"form_area"},[a("div",{staticClass:"form-group text",on:{submit:function(e){return e.preventDefault(),t.addText(e)}}},[a("label",{attrs:{for:"itemTitle",id:"firstTitle"}},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newText.name,expression:"newText.name"}],staticClass:"form-control",attrs:{type:"text",id:"itemTitle"},domProps:{value:t.newText.name},on:{input:function(e){e.target.composing||t.$set(t.newText,"name",e.target.value)}}})]),a("div",{staticClass:"form-group text"},[a("label",{attrs:{for:"Textarea"}},[t._v("Enter Text")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newText.text,expression:"newText.text"}],staticClass:"form-control",attrs:{id:"Textarea1",rows:"3"},domProps:{value:t.newText.text},on:{input:function(e){e.target.composing||t.$set(t.newText,"text",e.target.value)}}}),a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit",value:"Add Text"},on:{click:t.addText}},[t._v("Submit")])])])])])])],1)},v=[],p=(a("a481"),a("7f7f"),a("8aa5")),m=a.n(p),b=a("0418"),x={apiKey:"AIzaSyAVGWadO8KOW9XA6hl2xjD3i25IRVzcrS0",authDomain:"text-d26b6.firebaseapp.com",databaseURL:"https://text-d26b6.firebaseio.com",projectId:"text-d26b6",storageBucket:"text-d26b6.appspot.com",messagingSenderId:"235321307920"},h=m.a.initializeApp(x),g=h.database(),y=g.ref("texts"),C={name:"home",firebase:{texts:y},data:function(){return{title:"texts",newText:{name:"",text:""}}},components:{Header:b["a"]},methods:{addText:function(){y.push({name:this.newText.name,text:this.newText.text,edit:!1}),this.newText.name="",this.newText.text="",this.$router.replace("/display")}}},_=C,w=(a("51a9"),Object(l["a"])(_,f,v,!1,null,"548579b2",null));w.options.__file="Home.vue";var T=w.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"one"},[a("Header"),a("div",{staticClass:"container"},[a("h1",{staticClass:"title text-center"},[t._v("Notes")]),a("div",{staticClass:" row"},t._l(t.texts,function(e){return a("div",{key:e[".key"],staticClass:"col-sm-6 mb-4 col-lg-6"},[e.edit?a("div",{staticClass:"col-6"},[a("div",{staticClass:"card card-body mb-2"},[a("div",{staticClass:"form-group text"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"newText.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}})]),a("div",{staticClass:"form-group text"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"newText.text"}],staticClass:"form-control",attrs:{id:"Textarea1",rows:"3"},domProps:{value:e.text},on:{input:function(a){a.target.composing||t.$set(e,"text",a.target.value)}}})]),a("button",{staticClass:"btn btn-success",on:{click:function(a){t.saveEdit(e)}}},[t._v("Save")]),a("button",{staticClass:"btn btn-danger",on:{click:function(a){t.cancelEdit(e[".key"])}}},[t._v("Cancel")])])]):a("div",{staticClass:"col-6"},[a("div",{staticClass:"card card-body"},[a("h5",{staticClass:"card-title"},[t._v(" "+t._s(e.name)+" ")]),a("h6",{staticClass:"card-subtitle mb-2"},[t._v("  "+t._s(e.text))]),a("i",{staticClass:"fa fa-trash fa-lg",attrs:{"aria-hidden":"true"},on:{click:function(a){t.removeText(e)}}}),a("br"),a("button",{staticClass:"btn btn-info",on:{click:function(a){t.editText(e[".key"])}}},[t._v("Edit")])])])])}),0)])],1)},E=[],j={firebase:{texts:y},data:function(){return{title:"texts",newtext:{name:"",text:"",edit:""}}},components:{Home:T,Header:b["a"]},methods:{removeText:function(t){y.child(t[".key"]).remove()},editText:function(t){y.child(t).update({edit:!0})},saveEdit:function(t){var e=t[".key"];y.child(e).set({name:t.name,text:t.text,edit:!1})},cancelEdit:function(t){y.child(t).update({edit:!1})}}},O=j,N=(a("2c59"),Object(l["a"])(O,k,E,!1,null,"2e259f9c",null));N.options.__file="Display.vue";var P=N.exports;n["a"].use(d["a"]);var S=new d["a"]({routes:[{path:"/",name:"home",component:T},{path:"/display",name:"display",component:P},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),$=a("5f30"),A=a.n($);n["a"].config.productionTip=!1,n["a"].use(A.a),new n["a"]({router:S,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,e,a){},f35c:function(t,e,a){}});
//# sourceMappingURL=app.1c77df43.js.map