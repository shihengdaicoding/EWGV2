(function(t){function e(e){for(var r,a,u=e[0],p=e[1],l=e[2],c=0,f=[];c<u.length;c++)a=u[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(t[r]=p[r]);s&&s(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var p=n[u];0!==o[p]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/EWGV2/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=p;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("English Word Game")])])],1),n("v-content",[n("v-textarea",{attrs:{label:"Input an English paragraph."},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),n("v-btn",{on:{click:function(e){return t.submitInput()}}},[t._v("Submit")]),n("br"),t._l(t.brokenInput,(function(e,r){return[n("v-chip",{key:"chip"+r+e,attrs:{outlined:""},on:{click:function(e){return t.clickChip(r)}}},[t._v(t._s(e))])]})),t._l(t.selected,(function(e,r){return n("p",{key:"given_answer"+r+e},[t._v(t._s(e))])}))],2)],1)},i=[],a={name:"App",data:()=>({input:"",answer:"",brokenInput:[],selected:[],output:[]}),methods:{shuffle(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t},submitInput(){this.brokenInput=this.shuffle(this.input.split(" ")),this.answer=this.input,this.input=""},clickChip(t){this.selected.push(this.brokenInput.splice(t,1)[0]),this.selected.length==this.answer.split(" ").length&&(this.selected.join(" ")==this.answer?alert("Congratulations, you got it right!"):alert("00No, you got it wrong! :("))}}},u=a,p=n("2877"),l=n("6544"),s=n.n(l),c=n("7496"),f=n("40dc"),h=n("8336"),d=n("cc20"),b=n("a75b"),v=n("a844"),g=n("2a7f"),y=Object(p["a"])(u,o,i,!1,null,null,null),w=y.exports;s()(y,{VApp:c["a"],VAppBar:f["a"],VBtn:h["a"],VChip:d["a"],VContent:b["a"],VTextarea:v["a"],VToolbarTitle:g["a"]});var m=n("f309");r["a"].use(m["a"]);var _=new m["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({vuetify:_,render:t=>t(w)}).$mount("#app")}});
//# sourceMappingURL=app.805ae0a0.js.map