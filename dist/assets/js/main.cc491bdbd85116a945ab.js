(()=>{"use strict";var e,t,r={4955:(e,t,r)=>{var n=r(2661),a=r(8917),o={class:"container"},l={class:"surface-ground px-4 py-5 md:px-6 lg:px-8"};var i=r(9954),u=["Id","Imei","TruckId","Time"];var s,c;function d(e,t,r,n,a,o,l){try{var i=e[o](l),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,a)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v,g,h="setControllers",y="setParamsSetting",b="loadMessages",w="getControllers",S="getControllersForUI",k="getControllerById",x=(0,i.MT)({state:function(){return{loading:!1,controllers:[],paramsSetting:[]}},mutations:(s={},m(s,h,(function(e,t){var r=t.reduce((function(e,r){if(!e.some((function(e){return e.Id===r.Imei}))){var n=t.filter((function(e){return e.Imei===r.Imei}));e.push({Id:r.Imei,TruckId:r.TruckId,messages:n})}return e}),[]);e.controllers=r,e.loading=!0})),m(s,y,(function(e,t){var r,n,a;e.paramsSetting=(n=t,a=f(null!==(r=function(e){try{return JSON.parse(localStorage.getItem(e))}catch(e){return console.log("Error getting data from localstorage",e),null}}("hideParamsSetting"))&&void 0!==r?r:""),n.sort().map((function(e){var t={showValue:e};if(!u.includes(e))return a.includes(e)?(t.isShow=!1,t):(t.isShow=!0,t)})).filter((function(e){return void 0!==e})))})),s),actions:m({},b,(v=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,fetch("https://telemetry-app-56995-default-rtdb.firebaseio.com/.json");case 4:e.sent.json().then((function(e){var t=Object.keys(e[0]).map((function(e){return e}));r(y,t),r(h,e)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})),g=function(){var e=this,t=arguments;return new Promise((function(r,n){var a=v.apply(e,t);function o(e){d(a,r,n,o,l,"next",e)}function l(e){d(a,r,n,o,l,"throw",e)}o(void 0)}))},function(e){return g.apply(this,arguments)})),getters:(c={},m(c,w,(function(e){return e.controllers})),m(c,S,(function(e){return e.controllers.map((function(e){var t;return{Id:e.Id,TruckId:null!==(t=e.TruckId)&&void 0!==t?t:0}}))})),m(c,k,(function(e){return function(t){return e.controllers.filter((function(e){return e.Id===t}))[0]}})),c)}),I=r(8319),A=function(e){return(0,a.dD)("data-v-d3c6f352"),e=e(),(0,a.Cn)(),e}((function(){return(0,a._)("div",{class:"font-medium text-3xl text-900"},"Telemetry",-1)}));const D={name:"AppTheNavbar",setup:function(){return{items:[{label:"Список контроллеров",to:"/controllers"},{label:"Настройка отображения параметров",to:"/settings"}]}}};var P=r(6959);const _=(0,P.Z)(D,[["render",function(e,t,r,n,o,l){var i=(0,a.up)("Button"),u=(0,a.up)("router-link"),s=(0,a.up)("Menubar");return(0,a.wg)(),(0,a.j4)(s,{model:n.items,class:"surface-section justify-content-between px-4 py-5 md:px-6 lg:px-8"},{start:(0,a.w5)((function(){return[A]})),item:(0,a.w5)((function(e){var t=e.item;return[(0,a.Wm)(u,{to:t.to,custom:""},{default:(0,a.w5)((function(e){var r=e.navigate,n=e.isActive,o=e.isExactActive;return[(0,a.Wm)(i,{onClick:r,class:(0,I.C_)(["p-button-secondary p-button-text mr-2 p-button-sm",{"active-link":n,"active-link-exact":o}])},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,I.zw)(t.label),1)]})),_:2},1032,["onClick","class"])]})),_:2},1032,["to"])]})),_:1},8,["model"])}],["__scopeId","data-v-d3c6f352"]]),j={name:"App",setup:function(){var e=(0,i.oR)();(0,a.bv)((function(){e.dispatch(b)}))},components:{TheNavbar:_}},C=(0,P.Z)(j,[["render",function(e,t,r,n,i,u){var s=(0,a.up)("the-navbar"),c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(s),(0,a._)("div",l,[(0,a.Wm)(c)])])}]]);var E=r(3047),O={key:0};var F=r(2117),T={key:0,class:"grid"},V={class:"surface-card shadow-2 p-3 border-round"},q={class:"text-900 font-medium text-xl mb-3"},W=(0,a._)("span",null,"TruckId: ",-1),Z={class:"text-900 font-medium text-xl flex align-items-center"},H=(0,a._)("span",{class:"mr-3"},"Imei: ",-1);var L=function(e){try{return e.toJSON()}catch(e){console.log("Error convert date",e)}},M=function(e){try{return new Date(e)}catch(e){console.log("Error convert date",e)}};const R={props:{controllers:{type:Array,requered:!0}},setup:function(){var e=(0,i.oR)(),t=new Date,r=new Date;return t.setDate(t.getDate()-1),{firstDefaultParam:(0,F.Fl)((function(){var t,r;return null!==(t=null===(r=e.state.paramsSetting.filter((function(e){return e.isShow}))[0])||void 0===r?void 0:r.showValue)&&void 0!==t?t:""})),startFilterValue:L(t),endFilterValue:L(r)}}},U={components:{ControllersList:(0,P.Z)(R,[["render",function(e,t,r,n,o,l){var i=(0,a.up)("Button"),u=(0,a.up)("router-link");return r.controllers.length?((0,a.wg)(),(0,a.iD)("div",T,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.controllers,(function(e){return(0,a.wg)(),(0,a.iD)("div",{class:"col-12 md:col-6 lg:col-3",key:e.Id},[(0,a._)("div",V,[(0,a._)("div",q,[W,(0,a._)("span",null,(0,I.zw)(e.TruckId),1)]),(0,a._)("div",Z,[H,(0,a.Wm)(u,{to:{name:"controller/params",params:{id:e.Id},query:{selectParam:n.firstDefaultParam,dateStart:n.startFilterValue,dateEnd:n.endFilterValue}}},{default:(0,a.w5)((function(){return[(0,a.Wm)(i,{label:e.Id,class:"p-button-raised p-button-info"},null,8,["label"])]})),_:2},1032,["to"])])])])})),128))])):(0,a.kq)("",!0)}]])},name:"AppHomePage",setup:function(){var e=(0,i.oR)();return{controllers:(0,F.Fl)((function(){return e.getters[S]})),loading:(0,F.Fl)((function(){return!e.state.loading}))}}},B=(0,P.Z)(U,[["render",function(e,t,r,n,o,l){var i=(0,a.up)("ProgressSpinner"),u=(0,a.up)("controllers-list");return n.loading?((0,a.wg)(),(0,a.iD)("div",O,[(0,a.Wm)(i,{animationDuration:"1s"})])):((0,a.wg)(),(0,a.j4)(u,{key:1,controllers:n.controllers},null,8,["controllers"]))}]]);var N={class:"mb-3"},$=(0,a.Uk)("Выбрать все: "),z={class:"mr-5"},Y=["value","checked"];const J={name:"AppSettinsPage",setup:function(){var e=(0,i.oR)(),t=(0,E.tv)();return{params:(0,F.Fl)((function(){return e.state.paramsSetting})),saveParams:function(r){var n=r.target.elements.param;if(n){var a=[],o=[];n.forEach((function(e){var t=e.value;e.checked?a.push(t):o.push(t)})),function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.log("Error saving data in localstorage",e)}}("hideParamsSetting",o);var l=[].concat(o,a).sort((function(e,t){return t-e}));e.commit(y,l),t.push({name:"controllers"})}},checkAll:function(e){document.querySelectorAll('input[name="param"]').forEach((function(t){return t.checked=e.target.checked}))}}}},K=(0,P.Z)(J,[["render",function(e,t,r,o,l,i){var u=(0,a.up)("Button");return(0,a.wg)(),(0,a.iD)("form",{onSubmit:t[1]||(t[1]=(0,n.iM)((function(){return o.saveParams&&o.saveParams.apply(o,arguments)}),["prevent"]))},[(0,a._)("h4",N,[$,(0,a._)("input",{type:"checkbox",onChange:t[0]||(t[0]=function(){return o.checkAll&&o.checkAll.apply(o,arguments)})},null,32)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.params,(function(e,t){return(0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a._)("span",z,(0,I.zw)(e.showValue),1),(0,a._)("input",{type:"checkbox",name:"param",value:e.showValue,checked:e.isShow},null,8,Y)])})),128)),(0,a.Wm)(u,{type:"submit",class:"mt-3",label:"Сохранить"})],32)}]]);var G={key:0},Q={key:0},X={class:"mb-3"},ee={class:"mb-3"},te={class:"flex"},re={class:"flex flex-column ml-5"},ne={key:0,class:"flex flex-column"},ae={key:0},oe={key:1},le={key:1};var ie=(0,a._)("h3",{class:"mb-3"},"Выберите период:",-1),ue={class:"mr-5"},se={class:"mr-5"};const ce={name:"AppDateFilter",props:["modelValue"],emits:["update:modelValue"],setup:function(e,t){var r=t.emit,n=(0,F.iH)(e.modelValue.dateStart),a=(0,F.iH)(e.modelValue.dateEnd);return{dateStart:n,dateEnd:a,onSelectFilter:function(){r("update:modelValue",{dateStart:L(n.value),dateEnd:L(a.value)})}}}},de={props:{id:{type:String,requered:!0}},setup:function(e){var t=(0,i.oR)(),r=(0,E.tv)(),n=(0,E.yj)(),o=(0,F.iH)({dateStart:M(n.query.dateStart),dateEnd:M(n.query.dateEnd)}),l=(0,F.Fl)((function(){return t.getters[k](e.id)})),u=(0,F.Fl)((function(){return!t.state.loading})),s=(0,F.Fl)((function(){return Object.keys(l.value).length})),c=(0,F.Fl)((function(){return t.state.paramsSetting})),d=(0,F.Fl)((function(){return t.state.paramsSetting.filter((function(e){return e.isShow})).length}));return(0,a.YP)(o,(function(e){r.push({push:"".concat(r.currentRoute.value.fullPath),query:{selectParam:n.query.selectParam,dateStart:e.dateStart,dateEnd:e.dateEnd}})})),{isController:s,controller:l,loading:u,paramsSetting:c,filter:o,isParamActiveLength:d}},components:{DateFilter:(0,P.Z)(ce,[["render",function(e,t,r,o,l,i){var u=(0,a.up)("Calendar"),s=(0,a.up)("Button");return(0,a.wg)(),(0,a.iD)(a.HY,null,[ie,(0,a._)("form",{class:"flex",onSubmit:t[2]||(t[2]=(0,n.iM)((function(){return o.onSelectFilter&&o.onSelectFilter.apply(o,arguments)}),["prevent"]))},[(0,a._)("div",ue,[(0,a.Wm)(u,{id:"timeStart",modelValue:o.dateStart,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.dateStart=e}),showTime:!0,showSeconds:!1,dateFormat:"dd.mm.yy"},null,8,["modelValue"])]),(0,a._)("div",se,[(0,a.Wm)(u,{id:"timeEnd",modelValue:o.dateEnd,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.dateEnd=e}),showTime:!0,showSeconds:!1,dateFormat:"dd.mm.yy"},null,8,["modelValue"])]),(0,a.Wm)(s,{type:"submit",class:"p-button-success p-button-sm",label:"Показать"})],32)],64)}]])}},me=(0,P.Z)(de,[["render",function(e,t,r,n,o,l){var i=(0,a.up)("ProgressSpinner"),u=(0,a.up)("date-filter"),s=(0,a.up)("router-view"),c=(0,a.up)("Button"),d=(0,a.up)("router-link");return n.loading?((0,a.wg)(),(0,a.iD)("div",G,[(0,a.Wm)(i,{animationDuration:"1s"})])):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[n.isController?((0,a.wg)(),(0,a.iD)("div",Q,[(0,a._)("div",X,[(0,a.Wm)(u,{modelValue:n.filter,"onUpdate:modelValue":t[0]||(t[0]=function(e){return n.filter=e})},null,8,["modelValue"])]),(0,a._)("h3",ee,"Отображение данных по контроллеру "+(0,I.zw)(n.controller.Id),1),(0,a._)("div",te,[(0,a.Wm)(s,{class:"flex-1",key:e.$route.fullPath}),(0,a._)("div",re,[n.isParamActiveLength?((0,a.wg)(),(0,a.iD)("div",ne,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.paramsSetting,(function(t){return(0,a.wg)(),(0,a.iD)("div",{key:t},[t.isShow?((0,a.wg)(),(0,a.iD)("div",ae,[(0,a.Wm)(d,{to:{name:"controller/params",params:{id:n.controller.Id},query:{selectParam:t.showValue,dateStart:e.$route.query.dateStart,dateEnd:e.$route.query.dateEnd}},custom:""},{default:(0,a.w5)((function(r){var n=r.navigate;return[(0,a.Wm)(c,{onClick:n,label:t.showValue,class:(0,I.C_)(["p-button-link",{"active-link":t.showValue==e.$route.query.selectParam}])},null,8,["onClick","label","class"])]})),_:2},1032,["to"])])):(0,a.kq)("",!0)])})),128))])):((0,a.wg)(),(0,a.iD)("div",oe," Нет доступных параметров, перейдите в настройки "))])])])):((0,a.wg)(),(0,a.iD)("div",le," Контроллер не найден "))],64))}],["__scopeId","data-v-8a3db124"]]);var fe={class:"flex flex-column"},pe={class:"card"};function ve(e){return function(e){if(Array.isArray(e))return ge(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return ge(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ge(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ge(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const he={setup:function(){var e=(0,i.oR)(),t=(0,E.yj)(),r=(0,F.Fl)((function(){var r=new Date(t.query.dateStart),n=new Date(t.query.dateEnd);return e.getters[k](t.params.id).messages.filter((function(e){var t=new Date(e.Time);if(t>=r&&t<=n)return e}))})),n=(0,F.Fl)((function(){return r.value.length?"Данные за заданный промежуток времени":"Данных за заданный промежуток времени нет"})),a=(0,F.Fl)((function(){return r.value.map((function(e){return e.Time})).length})),o=(0,F.iH)({labels:ve(r.value.map((function(e){return new Date(e.Time).toLocaleString()}))),datasets:[{label:n.value,backgroundColor:"#42A5F5",data:ve(r.value.map((function(e){return e[t.query.selectParam]})))}]}),l=(0,F.iH)({indexAxis:"y",plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057",maxTicksLimit:a},grid:{color:"#ebedef"}}}});return{messages:r,chartData:o,horizontaChartlOptions:l,messagesLength:a}}},ye=(0,P.Z)(he,[["render",function(e,t,r,n,o,l){var i=(0,a.up)("Chart");return(0,a.wg)(),(0,a.iD)("div",fe,[(0,a._)("div",pe,[(0,a.Wm)(i,{type:"bar",data:n.chartData,options:n.horizontaChartlOptions,height:n.messagesLength>50?4*n.messagesLength:8*n.messagesLength},null,8,["data","options","height"])])])}]]);const be=(0,E.p7)({history:(0,E.PO)(),base:"/",routes:[{path:"/controllers",name:"controllers",component:B,alias:"/"},{path:"/settings",name:"settings",component:K},{path:"/controller/:id",name:"controller",props:!0,component:me,children:[{path:"params/",name:"controller/params",component:ye}]},{path:"/:notFound(.*)",redirect:"/"}]});var we=r(5636),Se=r(2924),ke=r(54),xe=r(6290),Ie=r(2843),Ae=r(1907),De=r(483);function Pe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _e(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _e(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var je=(0,n.ri)(C);je.use(x).use(be).use(we.Z);var Ce={Button:Se.Z,Menubar:ke.Z,ProgressSpinner:xe.Z,Calendar:Ie.Z,Checkbox:Ae.Z,Chart:De.Z};Object.entries(Ce).forEach((function(e){var t=Pe(e,2),r=t[0],n=t[1];je.component(r,n)})),je.mount("#app")}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,a),o.exports}a.m=r,e=[],a.O=(t,r,n,o)=>{if(!r){var l=1/0;for(c=0;c<e.length;c++){for(var[r,n,o]=e[c],i=!0,u=0;u<r.length;u++)(!1&o||l>=o)&&Object.keys(a.O).every((e=>a.O[e](r[u])))?r.splice(u--,1):(i=!1,o<l&&(l=o));if(i){e.splice(c--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,n,o]},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>"assets/js/"+e+"."+a.h()+".js",a.miniCssF=e=>"assets/css/"+(179===e?"main":e)+"."+a.h()+".css",a.h=()=>"cc491bdbd85116a945ab",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},a.l=(e,r,n,o)=>{if(t[e])t[e].push(r);else{var l,i;if(void 0!==n)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var c=u[s];if(c.getAttribute("src")==e){l=c;break}}l||(i=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=e),t[e]=[r];var d=(r,n)=>{l.onerror=l.onload=null,clearTimeout(m);var a=t[e];if(delete t[e],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),r)return r(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),i&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/",(()=>{var e={179:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=o);var l=a.p+a.u(t),i=new Error;a.l(l,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",i.name="ChunkLoadError",i.type=o,i.request=l,n[1](i)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[l,i,u]=r,s=0;if(l.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(u)var c=u(a)}for(t&&t(r);s<l.length;s++)o=l[s],a.o(e,o)&&e[o]&&e[o][0](),e[l[s]]=0;return a.O(c)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.O(void 0,[797],(()=>a(1202)));var o=a.O(void 0,[797],(()=>a(4955)));o=a.O(o)})();