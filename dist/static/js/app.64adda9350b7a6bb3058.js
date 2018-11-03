webpackJsonp([1],{"0C0G":function(t,e){},"2W88":function(t,e){},Alhj:function(t,e){},LCRO:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=i("VU/8")({name:"App"},s,!1,function(t){i("LCRO")},null,null).exports,o=i("/ocq"),a=i("c/Tr"),u=i.n(a),c={name:"Gift",props:{trigger:{type:Date,default:!1},config:{type:Object,required:!0}},data:function(){return{isRunning:!1,currentDeg:0,targetDeg:0,giftsDeg:[]}},computed:{displayType:function(){return this.config.run3D?"three-dimension":"flat"},rotate:function(){return 360/this.config.gifts.length},translateZ:function(){return this.config.height/2/Math.tan(this.rotate/2/180*Math.PI)}},watch:{config:{handler:function(){this.setConfig()},deep:!0},trigger:function(){this.autoTurn()},isRunning:function(){var t=this;this.isRunning&&setTimeout(function(){t.autoTurnStop()},this.config.duration+200)}},mounted:function(){this.setConfig(),this.logGiftsDeg()},destroyed:function(){},methods:{logGiftsDeg:function(){var t=this;this.config.gifts.forEach(function(e,i){t.giftsDeg[i]={from:0===i?0:t.giftsDeg[i-1].to,to:0===i?t.rotate:t.giftsDeg[i-1].to+t.rotate,name:e.name}})},setConfig:function(){this.$el.style.setProperty("--rotateY",this.config.rotateY+"deg"),this.$el.style.setProperty("--duration",this.config.duration+"ms"),this.$el.style.setProperty("--fontSize",this.config.fontSize+"px"),this.$el.style.setProperty("--height",this.config.height+"px"),this.$el.style.setProperty("--width",this.config.width+"px"),this.$el.style.setProperty("--currentDeg","-"+this.currentDeg+"deg")},autoTurn:function(){var t=360*Math.random()+1800;t-=t%this.rotate,this.targetDeg=t;var e=this.config.rollback?Math.random()*this.config.rollback+1:1;this.$el.style.setProperty("--targetDeg","-"+this.targetDeg+"deg"),this.$el.style.setProperty("--rollBackDeg",""+e),this.isRunning=!0},autoTurnStop:function(){this.currentDeg=this.targetDeg%360,this.$el.style.setProperty("--currentDeg","-"+this.currentDeg+"deg");var t=null,e=this.currentDeg+this.rotate/2;this.giftsDeg.forEach(function(i){e>=i.from&&e<=i.to&&(t=i.name)}),this.isRunning=!1,this.$emit("finished",t)}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["gift-container",t.displayType,{autoTurn:t.isRunning}]},t._l(t.config.gifts,function(e,n){return i("div",{key:n,class:["gift",t.config.style],style:"transform: rotateX("+t.rotate*n+"deg) translateZ("+t.translateZ+"px)"},["text"===e.type?[t._v(t._s(e.name))]:t._e(),t._v(" "),"image"===e.type?[i("img",{attrs:{src:e.path,height:t.config.height}})]:t._e()],2)}))},staticRenderFns:[]};var h={name:"DemoSlotMachine",components:{Gift:i("VU/8")(c,l,!1,function(t){i("Alhj")},null,null).exports},data:function(){return{run3D:!0,trigger:null,disabled:!1,configs:[{run3D:!1,rotateY:-25,duration:4e3,rollback:.3,fontSize:100,height:100,width:200,gifts:u()(new Array(10),function(t,e){return{type:"text",name:e}})},{run3D:!1,rotateY:-25,duration:5e3,rollback:.3,fontSize:100,height:100,width:200,gifts:u()(new Array(10),function(t,e){return{type:"text",name:e}})},{run3D:!1,rotateY:-25,duration:6e3,rollback:.3,fontSize:100,height:100,width:200,gifts:u()(new Array(10),function(t,e){return{type:"text",name:e}})}],openResultHistory:!1,result:[],resultHistory:[]}},methods:{turn:function(){this.disabled=!0,this.trigger=new Date},isFinished:function(t){var e=this.$el.querySelectorAll(".autoTurn");this.result.push(t),1===e.length&&(this.disabled=!1,this.resultHistory.push(this.result),this.result=[])},changeDisplayMode:function(t){this.configs.forEach(function(e){return e.run3D=t.target.checked})}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"DemoSlotMachine"},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.openResultHistory=!1}}},[i("div",{class:["resultHistory",{openResultHistory:t.openResultHistory}]},t._l(t.resultHistory,function(e,n){return i("div",{key:n,staticClass:"result"},[t._v(t._s("Round"+(n+1)+": "+e))])})),t._v(" "),i("div",{staticClass:"container"},t._l(t.configs,function(e,n){return i("Gift",{key:n,attrs:{trigger:t.trigger,config:e},on:{finished:t.isFinished}})})),t._v(" "),i("div",{staticClass:"settings"},[i("button",{staticClass:"btn",attrs:{disabled:t.disabled},on:{click:t.turn}},[t._v("\n      START\n    ")]),t._v(" "),i("button",{staticClass:"btn",on:{click:function(e){t.openResultHistory=!0}}},[t._v("\n      Result History\n    ")]),t._v(" "),i("input",{staticClass:"displayType",attrs:{type:"checkbox",disabled:t.disabled},on:{change:t.changeDisplayMode}})])])},staticRenderFns:[]};var f=i("VU/8")(h,g,!1,function(t){i("r4hn")},"data-v-10e2530d",null).exports,d={name:"Gift",props:{trigger:{type:Date,default:!1},config:{type:Object,required:!0}},data:function(){return{isRunning:!1,currentDeg:0,targetDeg:0,giftsDeg:[]}},computed:{displayType:function(){return this.config.run3D?"three-dimension":"flat"},rotate:function(){return 360/this.config.gifts.length},translateZ:function(){return this.config.height/2/Math.tan(this.rotate/2/180*Math.PI)}},watch:{config:{handler:function(){this.setConfig()},deep:!0},trigger:function(){this.autoTurn()},isRunning:function(){var t=this;this.isRunning&&setTimeout(function(){t.autoTurnStop()},this.config.duration+200)}},mounted:function(){this.setConfig(),this.logGiftsDeg()},destroyed:function(){},methods:{logGiftsDeg:function(){var t=this;this.config.gifts.forEach(function(e,i){t.giftsDeg[i]={from:0===i?0:t.giftsDeg[i-1].to,to:0===i?t.rotate:t.giftsDeg[i-1].to+t.rotate,name:e.name}})},setConfig:function(){this.$el.style.setProperty("--rotateY",this.config.rotateY+"deg"),this.$el.style.setProperty("--duration",this.config.duration+"ms"),this.$el.style.setProperty("--fontSize",this.config.fontSize+"px"),this.$el.style.setProperty("--height",this.config.height+"px"),this.$el.style.setProperty("--width",this.config.width+"px"),this.$el.style.setProperty("--currentDeg","-"+this.currentDeg+"deg")},autoTurn:function(){var t=360*Math.random()+1800;t-=t%this.rotate,this.targetDeg=t;var e=this.config.rollback?Math.random()*this.config.rollback+1:1;this.$el.style.setProperty("--targetDeg","-"+this.targetDeg+"deg"),this.$el.style.setProperty("--rollBackDeg",""+e),this.isRunning=!0},autoTurnStop:function(){this.currentDeg=this.targetDeg%360,this.$el.style.setProperty("--currentDeg","-"+this.currentDeg+"deg");var t=null,e=this.currentDeg+this.rotate/2;this.giftsDeg.forEach(function(i){e>=i.from&&e<=i.to&&(t=i.name)}),this.isRunning=!1,this.$emit("finished",t)}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["gift-container",t.displayType,{autoTurn:t.isRunning}]},t._l(t.config.gifts,function(e,n){return i("div",{key:n,class:["gift",t.config.style],style:"transform: rotateX("+t.rotate*n+"deg) translateZ("+t.translateZ+"px)"},["text"===e.type?[t._v(t._s(e.name))]:t._e(),t._v(" "),"image"===e.type?[i("img",{attrs:{src:e.path,height:t.config.height}})]:t._e()],2)}))},staticRenderFns:[]};var y=i("VU/8")(d,p,!1,function(t){i("0C0G")},null,null).exports,v=i("S2hl"),m={name:"SlotMachine",components:{Gift:y,Snowf:i.n(v).a},data:function(){return{run3D:!1,trigger:null,active:!1,disabled:!1,configs:[{style:"gift-style",gifts:u()(new Array(10),function(t,e){return{type:"text",name:e}}),duration:4e3,fontSize:150,height:200,width:200},{style:"gift-style",gifts:u()(new Array(10),function(t,e){return{type:"text",name:e}}),duration:5e3,fontSize:150,height:200,width:200},{style:"gift-style",gifts:u()(new Array(10),function(t,e){return{type:"text",name:e}}),duration:6e3,fontSize:150,height:200,width:200}],openResultList:!1,resultList:[],result:[]}},methods:{turn:function(){var t=this;this.active=!0,setTimeout(function(){t.active=!1},500),this.disabled=!0,this.trigger=new Date},isFinished:function(t){var e=this.$el.querySelectorAll(".autoTurn");this.result.push(t),1===e.length&&(this.disabled=!1,this.resultList.push(this.result),this.result=[])}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"SlotMachine"}},[t._m(0),t._v(" "),i("div",{staticClass:"body"},[i("div",{staticClass:"window"},[i("div",{staticClass:"container"},[t._l(t.configs,function(e,n){return i("Gift",{key:n,attrs:{trigger:t.trigger,config:e},on:{finished:t.isFinished}})}),t._v(" "),i("div",{staticClass:"fence1"}),t._v(" "),i("div",{staticClass:"fence2"})],2)]),t._v(" "),i("div",{class:["handler",{active:t.active},{disabled:t.disabled}]},[i("div",{staticClass:"stick2"}),t._v(" "),i("div",{staticClass:"stick"}),t._v(" "),i("div",{staticClass:"ball",on:{click:function(e){!t.disabled&&t.turn()}}})])]),t._v(" "),i("button",{staticClass:"history",attrs:{type:"primary"},on:{click:function(e){t.openResultList=!0}}},[t._v("\n    OPEN RESULT\n  ")]),t._v(" "),i("div",{class:["resultList",{openResultList:t.openResultList}],on:{click:function(e){if(e.target!==e.currentTarget)return null;t.openResultList=!1}}},[i("div",{staticClass:"resultList-container"},t._l(t.resultList,function(e,n){return i("div",{key:n,staticClass:"result"},[t._v(t._s("Round"+(n+1)+": "+e))])}))]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"badge"},[e("span",[this._v("SlotMachine")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"github"},[e("a",{attrs:{href:"https://github.com/guahsu/Vue-SlotMachine/",target:"_blank"}},[this._v("→ GitHub Source Code")])])}]};var _=i("VU/8")(m,D,!1,function(t){i("2W88")},null,null).exports;n.a.use(o.a);var b=new o.a({routes:[{path:"/demo",name:"Demo",component:f},{path:"/",name:"SlotMachine",component:_}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:b,components:{App:r},template:"<App/>"})},r4hn:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.64adda9350b7a6bb3058.js.map