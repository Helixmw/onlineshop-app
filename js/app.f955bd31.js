(function(e){function t(t){for(var s,l,n=t[0],o=t[1],r=t[2],b=0,v=[];b<n.length;b++)l=n[b],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&v.push(i[l][0]),i[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);d&&d(t);while(v.length)v.shift()();return a.push.apply(a,r||[]),c()}function c(){for(var e,t=0;t<a.length;t++){for(var c=a[t],s=!0,n=1;n<c.length;n++){var o=c[n];0!==i[o]&&(s=!1)}s&&(a.splice(t--,1),e=l(l.s=c[0]))}return e}var s={},i={app:0},a=[];function l(t){if(s[t])return s[t].exports;var c=s[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=s,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(c,s,function(t){return e[t]}.bind(null,s));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/ecommerce-shop/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=t,n=n.slice();for(var r=0;r<n.length;r++)t(n[r]);var d=o;a.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0be5":function(e,t,c){},"10c2":function(e,t,c){"use strict";c("63f2")},3692:function(e,t,c){},"3e80":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);var s=c("7a23");const i={class:""},a={class:"item-preview"},l={class:"item-modal"},n={class:"image-frame"},o=["src"],r={class:"item-details"},d={class:"info"},b={class:"item-name"},v={class:"price"},f={class:"ratings"},j={class:"item-rating"},O={class:"level"},p={class:"rating"},m=Object(s["f"])("div",{class:"buttons"},[Object(s["f"])("a",{href:"#",class:"button"},"Buy it")],-1),u={class:"container-1"},h={class:"list"},w={class:"tabs"},g={class:"scroll"},y={class:"box preview"},k={class:"frame"},S={class:"container-2"},E={class:"products"},P={class:"section"},T=Object(s["f"])("div",{class:"cat"},"MEN",-1),C={class:"display"},M={class:"section"},q=Object(s["f"])("div",{class:"cat"},"WOMEN",-1),_={class:"display"},x={class:"section"},L=Object(s["f"])("div",{class:"cat"},"JEWELERY",-1),B={class:"display"};function I(e,t,c,I,N,A){const R=Object(s["p"])("Nav"),$=Object(s["p"])("Men"),D=Object(s["p"])("Women"),J=Object(s["p"])("Jewels"),W=Object(s["p"])("Description"),U=Object(s["p"])("Blank"),H=Object(s["p"])("BottomNav");return Object(s["l"])(),Object(s["e"])("div",i,[Object(s["h"])(R),Object(s["t"])(Object(s["f"])("div",a,[Object(s["f"])("div",l,[Object(s["f"])("div",{class:"close",onClick:t[0]||(t[0]=e=>A.closeModal())},"Close"),Object(s["f"])("div",n,[Object(s["f"])("img",{src:N.details.image,class:"item-image",style:{height:"8rem"}},null,8,o)]),Object(s["f"])("div",r,[Object(s["f"])("div",d,[Object(s["f"])("div",b,Object(s["q"])(N.details.title),1),Object(s["f"])("div",v,"$"+Object(s["q"])(N.details.price),1)]),Object(s["f"])("div",f,[Object(s["f"])("div",j,[Object(s["f"])("div",O,[Object(s["f"])("div",{class:"item-progress",style:Object(s["k"])({width:N.details.rating/N.total*100+"%"})},null,4)]),Object(s["f"])("div",p,Object(s["q"])(N.details.rating),1)])])]),m])],512),[[s["r"],N.preview]]),Object(s["f"])("div",u,[Object(s["f"])("div",h,[Object(s["f"])("div",w,[Object(s["f"])("div",{class:"tab",id:"men",onClick:t[1]||(t[1]=e=>A.switchTab(1))},"MEN"),Object(s["f"])("div",{class:"tab",id:"wom",onClick:t[2]||(t[2]=e=>A.switchTab(2))},"WOMEN"),Object(s["f"])("div",{class:"tab",id:"jwl",onClick:t[3]||(t[3]=e=>A.switchTab(3))},"JEWELERY")]),Object(s["f"])("div",g,[Object(s["t"])(Object(s["h"])($,{men:N.formen,onSwitchtopreview:A.changeToPreview},null,8,["men","onSwitchtopreview"]),[[s["r"],N.men]]),Object(s["t"])(Object(s["h"])(D,{women:N.forwom,onSwitchtopreview:A.changeToPreview},null,8,["women","onSwitchtopreview"]),[[s["r"],N.women]]),Object(s["t"])(Object(s["h"])(J,{jewels:N.forjwls,onSwitchtopreview:A.changeToPreview},null,8,["jewels","onSwitchtopreview"]),[[s["r"],N.jewels]])])]),Object(s["f"])("div",y,[Object(s["f"])("div",k,[N.descr?(Object(s["l"])(),Object(s["d"])(W,{key:0,details:N.details},null,8,["details"])):(Object(s["l"])(),Object(s["d"])(U,{key:1}))])])]),Object(s["f"])("div",S,[Object(s["f"])("div",E,[Object(s["f"])("div",P,[T,Object(s["f"])("div",C,[Object(s["t"])(Object(s["h"])($,{men:N.formen,onSwitchtopreview:A.changeToPreview},null,8,["men","onSwitchtopreview"]),[[s["r"],!0]])])]),Object(s["f"])("div",M,[q,Object(s["f"])("div",_,[Object(s["t"])(Object(s["h"])(D,{women:N.forwom,onSwitchtopreview:A.changeToPreview},null,8,["women","onSwitchtopreview"]),[[s["r"],!0]])])]),Object(s["f"])("div",x,[L,Object(s["f"])("div",B,[Object(s["t"])(Object(s["h"])(J,{jewels:N.forjwls,onSwitchtopreview:A.changeToPreview},null,8,["jewels","onSwitchtopreview"]),[[s["r"],!0]])])])])]),Object(s["h"])(H)])}const N=e=>(Object(s["n"])("data-v-2c4fe2bb"),e=e(),Object(s["m"])(),e),A={class:"content"},R={class:"nav"},$={class:"header"},D=Object(s["g"])('<div class="logo" data-v-2c4fe2bb>DRESS</div><div class="links" data-v-2c4fe2bb><a href="#" class="link" data-v-2c4fe2bb>HOME </a><a href="#" class="link" data-v-2c4fe2bb>ABOUT</a><a href="#" class="link" data-v-2c4fe2bb>PRODUCTS</a><a href="#" class="link" data-v-2c4fe2bb>ACCOUNT</a><a href="#" class="link" data-v-2c4fe2bb>CONTACT US</a></div>',2),J={class:"dropdown"},W={class:"top"},U=N(()=>Object(s["f"])("div",{class:"logo mainlogo"}," DRESS ",-1)),H=Object(s["g"])('<div class="menu" data-v-2c4fe2bb><div class="heading" data-v-2c4fe2bb>Store Menu</div><div class="line line-delay animate-line" data-v-2c4fe2bb></div><div class="options" data-v-2c4fe2bb><a href="#" class="opt slider first" data-v-2c4fe2bb>HOME </a><a href="#" class="opt slider second" data-v-2c4fe2bb>products </a><a href="#" class="opt slider third" data-v-2c4fe2bb>About US</a><a href="#" class="opt slider fourth" data-v-2c4fe2bb>contact us</a></div></div>',1);function Y(e,t,c,i,a,l){const n=Object(s["p"])("font-awesome-icon");return Object(s["l"])(),Object(s["e"])("div",A,[Object(s["f"])("div",R,[Object(s["f"])("div",$,[D,Object(s["f"])("div",{class:"bars",onClick:t[0]||(t[0]=e=>l.toggle())},[Object(s["h"])(n,{icon:"fa-solid fa-bars"})])]),Object(s["t"])(Object(s["f"])("div",J,[Object(s["f"])("div",W,[U,Object(s["f"])("div",{class:"navbars",onClick:t[1]||(t[1]=e=>l.toggle())},[Object(s["h"])(n,{icon:"fa-solid fa-bars"})])]),H],512),[[s["r"],a.dropdown]])])])}var G={data(){return{dropdown:!1}},methods:{toggle(){1==this.dropdown?this.dropdown=!1:this.dropdown=!0}}},X=(c("9edd"),c("6b0d")),z=c.n(X);const F=z()(G,[["render",Y],["__scopeId","data-v-2c4fe2bb"]]);var K=F;function Q(e,t,c,i,a,l){return Object(s["l"])(),Object(s["e"])("div")}var V={};c("a08a");const Z=z()(V,[["render",Q],["__scopeId","data-v-58d12286"]]);var ee=Z;const te={class:"blank"};function ce(e,t,c,i,a,l){return Object(s["l"])(),Object(s["e"])("div",te,"Come on, pick something to buy!")}var se={};c("a3d7");const ie=z()(se,[["render",ce]]);var ae=ie;const le=e=>(Object(s["n"])("data-v-c7df0084"),e=e(),Object(s["m"])(),e),ne={class:"content"},oe=["onClick"],re={class:"image"},de=["src"],be={class:"bottom"},ve={class:"box1"},fe={class:"title"},je={class:"price"},Oe={class:"box1"},pe={class:"rate"},me={class:"level"},ue={class:"rating"},he=le(()=>Object(s["f"])("div",{class:"mobile"},[Object(s["f"])("div",{class:"more"}," See More ")],-1));function we(e,t,c,i,a,l){return Object(s["l"])(),Object(s["e"])("div",ne,[(Object(s["l"])(!0),Object(s["e"])(s["a"],null,Object(s["o"])(c.men,e=>(Object(s["l"])(),Object(s["e"])("div",{key:e.id,class:"card",onClick:t=>l.toPreview(e.id,e.title,e.cat,e.des,e.price,e.image,e.rating)},[Object(s["f"])("div",re,[Object(s["f"])("img",{src:e.image,alt:"",class:"img"},null,8,de)]),Object(s["f"])("div",be,[Object(s["f"])("div",ve,[Object(s["f"])("div",fe,Object(s["q"])(e.title),1),Object(s["f"])("div",je,"$"+Object(s["q"])(e.price),1)]),Object(s["f"])("div",Oe,[Object(s["f"])("div",pe,[Object(s["f"])("div",me,[Object(s["f"])("div",{class:"progress",style:Object(s["k"])({width:e.rating/a.total*100+"%"})},null,4)]),Object(s["f"])("div",ue,Object(s["q"])(e.rating),1)])])])],8,oe))),128)),he])}var ge={props:{men:Array},data(){return{total:5}},methods:{toPreview(e,t,c,s,i,a,l){let n={id:e,title:t,cat:c,des:s,price:i,image:a,visible:!0,rating:l};this.$emit("switchtopreview",n)}}};c("6296");const ye=z()(ge,[["render",we],["__scopeId","data-v-c7df0084"]]);var ke=ye;const Se=e=>(Object(s["n"])("data-v-447049c3"),e=e(),Object(s["m"])(),e),Ee={class:"content"},Pe=["onClick"],Te={class:"image"},Ce=["src"],Me={class:"bottom"},qe={class:"box1"},_e={class:"title"},xe={class:"price"},Le={class:"box1"},Be={class:"rate"},Ie={class:"level"},Ne={class:"rating"},Ae=Se(()=>Object(s["f"])("div",{class:"mobile"},[Object(s["f"])("div",{class:"more"}," See More ")],-1));function Re(e,t,c,i,a,l){return Object(s["l"])(),Object(s["e"])("div",Ee,[(Object(s["l"])(!0),Object(s["e"])(s["a"],null,Object(s["o"])(c.women,e=>(Object(s["l"])(),Object(s["e"])("div",{key:e.id,class:"card",onClick:t=>l.toPreview(e.id,e.title,e.cat,e.des,e.price,e.image,e.rating)},[Object(s["f"])("div",Te,[Object(s["f"])("img",{src:e.image,alt:"",class:"img"},null,8,Ce)]),Object(s["f"])("div",Me,[Object(s["f"])("div",qe,[Object(s["f"])("div",_e,Object(s["q"])(e.title),1),Object(s["f"])("div",xe,"$"+Object(s["q"])(e.price),1)]),Object(s["f"])("div",Le,[Object(s["f"])("div",Be,[Object(s["f"])("div",Ie,[Object(s["f"])("div",{class:"progress",style:Object(s["k"])({width:e.rating/a.total*100+"%"})},null,4)]),Object(s["f"])("div",Ne,Object(s["q"])(e.rating),1)])])])],8,Pe))),128)),Ae])}var $e={props:{women:Array},data(){return{total:5}},methods:{toPreview(e,t,c,s,i,a,l){let n={id:e,title:t,cat:c,des:s,price:i,image:a,visible:!0,rating:l};this.$emit("switchtopreview",n)}}};c("10c2");const De=z()($e,[["render",Re],["__scopeId","data-v-447049c3"]]);var Je=De;const We=e=>(Object(s["n"])("data-v-50cf218a"),e=e(),Object(s["m"])(),e),Ue={class:"content"},He=["onClick"],Ye={class:"image"},Ge=["src"],Xe={class:"bottom"},ze={class:"box1"},Fe={class:"title"},Ke={class:"price"},Qe={class:"box1"},Ve={class:"rate"},Ze={class:"level"},et={class:"rating"},tt=We(()=>Object(s["f"])("div",{class:"mobile"},[Object(s["f"])("div",{class:"more"}," See More ")],-1));function ct(e,t,c,i,a,l){return Object(s["l"])(),Object(s["e"])("div",Ue,[(Object(s["l"])(!0),Object(s["e"])(s["a"],null,Object(s["o"])(c.jewels,e=>(Object(s["l"])(),Object(s["e"])("div",{key:e.id,class:"card",onClick:t=>l.toPreview(e.id,e.title,e.cat,e.des,e.price,e.image,e.rating)},[Object(s["f"])("div",Ye,[Object(s["f"])("img",{src:e.image,alt:"",class:"img"},null,8,Ge)]),Object(s["f"])("div",Xe,[Object(s["f"])("div",ze,[Object(s["f"])("div",Fe,Object(s["q"])(e.title),1),Object(s["f"])("div",Ke,"$"+Object(s["q"])(e.price),1)]),Object(s["f"])("div",Qe,[Object(s["f"])("div",Ve,[Object(s["f"])("div",Ze,[Object(s["f"])("div",{class:"progress",style:Object(s["k"])({width:e.rating/a.total*100+"%"})},null,4)]),Object(s["f"])("div",et,Object(s["q"])(e.rating),1)])])])],8,He))),128)),tt])}var st={props:{jewels:Array},data(){return{total:5}},methods:{toPreview(e,t,c,s,i,a,l){let n={id:e,title:t,cat:c,des:s,price:i,image:a,visible:!0,rating:l};this.$emit("switchtopreview",n)}}};c("ced2");const it=z()(st,[["render",ct],["__scopeId","data-v-50cf218a"]]);var at=it;const lt=e=>(Object(s["n"])("data-v-2a294c65"),e=e(),Object(s["m"])(),e),nt=lt(()=>Object(s["f"])("div",{class:"preview"},null,-1)),ot={class:"prev"},rt={class:"imge"},dt=["src"],bt={class:"details"},vt={class:"basic"},ft={class:"title ttle"},jt={class:"cat"},Ot={class:"price pr"},pt=lt(()=>Object(s["f"])("div",{class:"grey"},"Rating",-1)),mt={class:"rte"},ut={class:"rating-number"},ht=lt(()=>Object(s["f"])("div",{class:"level"},[Object(s["f"])("div",{class:"progress description",style:{width:"70%"}})],-1)),wt={class:"des"},gt=lt(()=>Object(s["f"])("div",{class:"bttn"},[Object(s["f"])("div",{class:"button secondarybg"},"ADD TO CART")],-1));function yt(e,t,c,i,a,l){return Object(s["l"])(),Object(s["e"])(s["a"],null,[nt,Object(s["f"])("div",ot,[Object(s["f"])("div",rt,[Object(s["f"])("img",{src:c.details.image,alt:"",class:"img-prev"},null,8,dt)]),Object(s["f"])("div",bt,[Object(s["f"])("div",vt,[Object(s["f"])("div",ft,Object(s["q"])(c.details.title),1),Object(s["f"])("div",jt,Object(s["q"])(c.details.cat),1),Object(s["f"])("div",Ot,"$"+Object(s["q"])(c.details.price),1),pt,Object(s["f"])("div",mt,[Object(s["f"])("div",ut,Object(s["q"])(c.details.rating),1),ht])]),Object(s["f"])("div",wt,Object(s["q"])(c.details.des),1)])]),gt],64)}var kt={props:{details:Object}};c("90bf");const St=z()(kt,[["render",yt],["__scopeId","data-v-2a294c65"]]);var Et=St,Pt={name:"App",components:{Nav:K,Men:ke,Women:Je,Jewels:at,Description:Et,BottomNav:ee,Blank:ae},data(){return{men:!0,women:!1,jewels:!1,descr:!1,blank:!0,formen:[],forwom:[],forjwls:[],details:{},preview:!1,total:5}},mounted(){this.getShop(),this.displayShop()},methods:{changeToPreview(e){this.descr=e.visible,this.details=e,this.preview=!0},closeModal(){this.preview=!1},displayShop(){let e=document.getElementById("men");document.getElementById("wom"),document.getElementById("jwl");e.classList.add("sel")},switchTab(e){let t=document.getElementById("men"),c=document.getElementById("wom"),s=document.getElementById("jwl");1==e?(this.men=!0,this.women=!1,this.jewels=!1,t.classList.add("sel"),c.classList.remove("sel"),s.classList.remove("sel")):2==e?(this.men=!1,this.women=!0,this.jewels=!1,t.classList.remove("sel"),c.classList.add("sel"),s.classList.remove("sel")):3==e&&(this.men=!1,this.women=!1,this.jewels=!0,t.classList.remove("sel"),c.classList.remove("sel"),s.classList.add("sel"))},sortShop(e){"men's clothing"==e.cat?this.formen.push(e):"women's clothing"==e.cat?this.forwom.push(e):"jewelery"==e.cat&&this.forjwls.push(e)},getShop(){let e;try{let t=new XMLHttpRequest;t.open("GET","https://fakestoreapi.com/products"),t.onload=()=>{e=JSON.parse(t.response);for(let t=0;t<=e.length;t++){let c={id:e[t].id,title:e[t].title,des:e[t].description,price:e[t].price,cat:e[t].category,image:e[t].image,rating:e[t].rating.rate};this.sortShop(c)}},t.send()}catch(t){console.log("Error"+t)}}}};c("a48d");const Tt=z()(Pt,[["render",I]]);var Ct=Tt,Mt=c("be33"),qt=c("ad3d"),_t=c("2753"),xt=c("11ca");Mt["c"].add(_t["a"],xt["a"],xt["b"]),Object(s["c"])(Ct).component("font-awesome-icon",qt["a"]).mount("#app")},6296:function(e,t,c){"use strict";c("728d")},"63f2":function(e,t,c){},"728d":function(e,t,c){},"90bf":function(e,t,c){"use strict";c("3692")},"9afd":function(e,t,c){},"9edd":function(e,t,c){"use strict";c("3e80")},a08a:function(e,t,c){"use strict";c("0be5")},a3d7:function(e,t,c){"use strict";c("9afd")},a48d:function(e,t,c){"use strict";c("cd5f")},b32f:function(e,t,c){},cd5f:function(e,t,c){},ced2:function(e,t,c){"use strict";c("b32f")}});
//# sourceMappingURL=app.f955bd31.js.map