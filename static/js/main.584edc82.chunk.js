(this["webpackJsonpreact-ecommerce"]=this["webpackJsonpreact-ecommerce"]||[]).push([[0],{103:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(26),s=c.n(a),o=(c(86),c(11)),i=(c(87),c(112)),l=c(113),d=c(78),j=c(121),u=c(80),b=c(119),h=c(122),m=c(17),p=c(1);var O=function(e){var t=e.cardType;return Object(p.jsx)(d.a,{lg:4,md:6,sm:9,xs:9,children:Object(p.jsx)(h.a,{children:Object(p.jsxs)(h.a.Body,{children:[Object(p.jsxs)(h.a.Text,{className:"h3 text-center",children:[" ",t," "]}),Object(p.jsx)(m.b,{to:"/shop",target:"_blank",className:"text-center",children:"Shop now"})]})})})};var x=function(e){var t=e.preload;return Object(p.jsxs)(j.a,{as:u.a,href:"/test/".concat(t[4]),children:[Object(p.jsx)(j.a.Image,{src:"".concat(t[0])}),Object(p.jsxs)(j.a.Caption,{children:[Object(p.jsxs)("h5",{children:[" ",t[1]," "]}),Object(p.jsxs)("p",{children:[" ",t[2]," "]}),""!==t[3]?Object(p.jsxs)("p",{children:[" ",t[3]," "]}):Object(p.jsx)("p",{style:{display:"none"}})]})]})};var f=function(e){var t=e.preload;return Object(p.jsxs)(j.a,{className:"newSection_row_item",children:[Object(p.jsx)(j.a.Image,{src:"".concat(t[0])}),Object(p.jsxs)(j.a.Caption,{className:"h5",children:[" ",t[1]," ",Object(p.jsx)("span",{children:t[2]})]}),Object(p.jsx)(m.b,{to:"/test/".concat(t[3]),target:"_blank",className:"text-center",children:"Shop now"})]})};var g=function(e){var t=e.preload;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Customer Testimonial"}),Object(p.jsx)("p",{children:t[0]}),Object(p.jsx)(b.a.Caption,{children:Object(p.jsxs)(j.a,{children:[Object(p.jsx)(j.a.Image,{src:"".concat(t[1]),alt:"171x180"}),Object(p.jsxs)(j.a.Caption,{children:[Object(p.jsx)("p",{children:t[2]}),"    ",Object(p.jsx)("p",{children:t[3]})]})]})})]})},v=c.p+"static/media/services1.f68ecd71.svg",y=c.p+"static/media/services2.22555a9e.svg",C=c.p+"static/media/services3.62fde65f.svg",w=c.p+"static/media/services4.1364ffa4.svg";var _=function(e){var t=e.preload,c=[v,y,C,w];return Object(p.jsxs)(d.a,{lg:3,md:6,sm:10,className:"text-center",children:[Object(p.jsx)("img",{src:c[t[0]],alt:"img"}),Object(p.jsx)("h5",{children:t[1]}),Object(p.jsx)("p",{children:t[2]})]})},S=c(18),P=c.n(S),k=c(31),N=c(10),I=c(55);c(107),c(106),c(94);I.a.initializeApp({apiKey:"AIzaSyCAimAP6y8xotXnD10D0_77o8A1J7Em6CU",authDomain:"abdo-app-98e08.firebaseapp.com",projectId:"abdo-app-98e08",storageBucket:"abdo-app-98e08.appspot.com",messagingSenderId:"815571317134",appId:"1:815571317134:web:0d163d76873b6a47a3b4df"});I.a;var E=I.a.firestore(),A=I.a.auth(),F=Object(n.createContext)(),L=function(e){var t=e.children,c=Object(n.useState)(null),r=Object(o.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(!0),l=Object(o.a)(i,2),d=l[0],j=l[1];return Object(n.useEffect)((function(){return A.onAuthStateChanged((function(e){s(e),j(!1),console.log(e)}))}),[]),d?Object(p.jsx)("p",{children:"Loading ...."}):Object(p.jsx)(F.Provider,{value:{user:a},children:t})};var T=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(o.a)(a,2),i=s[0],l=s[1],d=Object(n.useState)([]),j=Object(o.a)(d,2),u=j[0],b=j[1],h=Object(n.useState)([]),m=Object(o.a)(h,2),p=m[0],O=m[1];Object(n.useEffect)((function(){return E.collection("Product Items").orderBy("createdAt").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)(Object(N.a)({},e.data()),{},{id:e.id})}));r(t)}))}),[]);var x=function(){var e=Object(k.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.collection("Product Items").add(Object(N.a)({},t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){return E.collection("Product Items").orderBy("price","desc").limit(5).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)(Object(N.a)({},e.data()),{},{id:e.id})}));b(t)}))}),[]),Object(n.useEffect)((function(){return E.collection("Product Items").where("filter","==","shirt").orderBy("createdAt","desc").limit(4).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)(Object(N.a)({},e.data()),{},{id:e.id})}));O(t)}))}),[]);var f=Object(n.useContext)(F).user;return Object(n.useEffect)((function(){return f?E.collection("User-".concat(f.email)).orderBy("createdAt").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)(Object(N.a)({},e.data()),{},{id:e.id})}));l(t)})):E.collection("Cart Items").orderBy("createdAt").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)(Object(N.a)({},e.data()),{},{id:e.id})}));l(t)}))}),[]),[c,x,u,p,i,function(){var e=Object(k.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.collection("User-".concat(f.email)).add(Object(N.a)({},t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),function(e){E.collection("User-".concat(f.email)).doc(e).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}))},function(e,t,c,n){"+"===c?E.collection("User-".concat(f.email)).doc("".concat(n)).update({amount:"".concat(e+1>=t?t:e+1)}).then((function(){console.log("doc with id : ".concat(n," updated"))})).catch((function(e){console.log("Error getting document : ".concat(n),e)})):E.collection("User-".concat(f.email)).doc("".concat(n)).update({amount:"".concat(e-1<=t?t+1:e-1)}).then((function(){console.log("doc with id : ".concat(n," updated"))})).catch((function(e){console.log("Error getting document : ".concat(n),e)}))}]},q=c.p+"static/media/brand.adfc432b.jpg";var D=function(){var e=T(),t=Object(o.a)(e,6),c=t[2],r=t[3];return Object(n.useEffect)((function(){for(var e=document.querySelectorAll("#saleSection .saleSection_4sm > a .figure-caption p:first-of-type"),t=0;t<e.length;t++)"none"===e[t].nextElementSibling.style.display&&(e[t].style.float="none",e[t].style.clear="both",e[t].style.width="100%",e[t].style.textAlign="center")})),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("section",{id:"familySection",className:"beforeNav",children:Object(p.jsx)(i.a,{children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(O,{cardType:"Men"}),Object(p.jsx)(O,{cardType:"Women"}),Object(p.jsx)(O,{cardType:"Twinz"})]})})}),Object(p.jsxs)("section",{id:"videoSection",children:[Object(p.jsx)("p",{className:"text-center text-muted",children:" Graduation Project from Institute 2020 - MIS "}),Object(p.jsx)("video",{controls:!0,autoPlay:!0,poster:q})]}),Object(p.jsx)("section",{id:"addsSection",children:Object(p.jsx)("img",{src:"https://souqcms.s3.eu-west-1.amazonaws.com/sanfronto/eg/2020/web/Banners/HPs/Apr/SellonSouq-HP-Strip-en.jpg",className:"img-fluid"})}),Object(p.jsxs)(i.a,{id:"saleSection",children:[Object(p.jsx)("h1",{children:"Monthly Sale"}),Object(p.jsxs)(l.a,{className:"text-center",children:[Object(p.jsx)(d.a,{lg:6,md:9,sm:12,children:c.map((function(e,t){return 0===t&&Object(p.jsxs)(j.a,{as:u.a,href:"/test/".concat(e.id),children:[Object(p.jsx)(j.a.Image,{src:"".concat(e.images[0]),style:{width:"70%"}}),Object(p.jsxs)(j.a.Caption,{children:[Object(p.jsx)("h3",{className:"text-center",children:e.title}),e.PriceBeforeDescount?Object(p.jsxs)(p.Fragment,{children:[" ",Object(p.jsxs)("p",{children:[" EGP ",e.price," "]})," ",Object(p.jsxs)("p",{children:[" EGP ",e.PriceBeforeDescount," "]})," "]}):Object(p.jsxs)("p",{children:[" EGP ",e.price," "]})]})]})}))}),Object(p.jsx)(d.a,{lg:6,md:11,sm:12,children:Object(p.jsx)("section",{className:"saleSection_4sm",children:c.map((function(e,t){return t>0&&Object(p.jsx)(x,{preload:["".concat(e.images[0]),"".concat(e.title),"EGP ".concat(e.price),"".concat(e.PriceBeforeDescount?"EGP ".concat(e.PriceBeforeDescount):""),"".concat(e.id)]},t)}))})})]})]}),Object(p.jsxs)("section",{id:"newSection",children:[Object(p.jsx)("h1",{children:"New Shirts"}),Object(p.jsx)("article",{className:"newSection_row",children:r.map((function(e,t){return Object(p.jsx)(f,{preload:["".concat(e.images[0]),"".concat(e.title),"".concat(e.price),e.id.trim()]},t)}))})]}),Object(p.jsxs)(b.a,{children:[Object(p.jsx)(b.a.Item,{children:Object(p.jsx)(g,{preload:["Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.","https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg","Petey Cruiser","Designer at colorlib"]})}),Object(p.jsx)(b.a.Item,{children:Object(p.jsx)(g,{preload:["Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.","https://365psd.com/images/istock/previews/9730/97305669-avatar-icon-of-girl-in-a-baseball-cap.jpg","Laila Hassan","Developer at colorlib"]})}),Object(p.jsx)(b.a.Item,{children:Object(p.jsx)(g,{preload:["Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.","https://kehrer24.de/wp-content/uploads/2021/05/bearded-man-icon-64.png","7oda Child","Tester at colorlib"]})})]}),Object(p.jsx)(i.a,{id:"servicesSection",children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(_,{preload:[0,"Fast & Free Delivery","Free delivery on all orders"]}),Object(p.jsx)(_,{preload:[1,"Secure Payment","Free delivery on all orders"]}),Object(p.jsx)(_,{preload:[2,"Money Back Guarantee","Free delivery on all orders"]}),Object(p.jsx)(_,{preload:[3,"Online Support","Free delivery on all orders"]})]})})]})},z=c(120),B=c(123),G=c(114),U=c(116),M=c(115),W=c(124),H=c(66);var X=function(e){return Object(p.jsxs)(m.b,{to:"/test/".concat(e.indx),as:j.a,className:"shop_container_item text-center ".concat(Object(H.a)(e.inf)),children:[Object(p.jsx)(j.a.Image,{src:e.ing}),Object(p.jsxs)(j.a.Caption,{children:[Object(p.jsx)("h5",{children:e.int}),e.invbd?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{children:["EGP",e.inv]}),Object(p.jsxs)("p",{children:["EGP",e.invbd]})]}):Object(p.jsxs)("p",{className:"ShopItem1Price",children:["EGP",e.inv]})]})]})},J=(c(96),c(27)),Q=(c(97),c(118)),Z=new Date,K={title:"",desc:"",price:"",PriceBeforeDescount:"",createdAt:Z.toLocaleString().substring(0,Z.toLocaleString().indexOf(",")),colors:[],sizes:{},filter:"",gender:"",images:[]};var R=function(){var e=Object(n.useState)(K),t=Object(o.a)(e,2),c=t[0],r=t[1],a=T(),s=Object(o.a)(a,2)[1],i=function(e){var t=e.target.name,n=e.target.value;r("sm"===t||"md"===t||"lg"===t||"xl"===t?Object(N.a)(Object(N.a)({},c),{},{sizes:Object(N.a)(Object(N.a)({},c.sizes),{},Object(J.a)({},t,parseInt(n)))}):"colors"===t?Object(N.a)(Object(N.a)({},c),{},{colors:n.split(",")}):"images"===t?Object(N.a)(Object(N.a)({},c),{},{images:n.split("*")}):Object(N.a)(Object(N.a)({},c),{},Object(J.a)({},t,n)))},j=function(){var e=Object(k.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s(c);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e){if(e.target.checked){var t=e.target.name,n=e.target.value;r("filter"===t?Object(N.a)(Object(N.a)({},c),{},{filter:n}):"gender"===t?Object(N.a)(Object(N.a)({},c),{},{gender:n}):Object(N.a)(Object(N.a)({},c),{},Object(J.a)({},t,n)))}};return Object(p.jsxs)("div",{id:"AddItemModal",children:[Object(p.jsxs)("h1",{className:"text-center",children:["Type Product Item Details",Object(p.jsx)(G.a,{id:"form__close",onClick:function(){return document.getElementById("AddItemModal").style.display="none"},children:"X"})]}),Object(p.jsxs)(Q.a,{onSubmit:j,children:[Object(p.jsx)(Q.a.Control,{type:"text",placeholder:"Title : ",required:!0,onChange:i,name:"title"}),Object(p.jsx)(Q.a.Control,{as:"textarea",rows:3,placeholder:"Description : ",required:!0,onChange:i,name:"desc"}),Object(p.jsxs)(l.a,{children:[Object(p.jsx)(d.a,{children:Object(p.jsx)(Q.a.Control,{type:"text",placeholder:"Price : 99.00",required:!0,onChange:i,name:"price"})}),Object(p.jsx)(d.a,{children:Object(p.jsx)(Q.a.Control,{type:"text",placeholder:"PriceBeforeDescount : 102.00",onChange:i,name:"PriceBeforeDescount"})})]}),Object(p.jsx)(Q.a.Control,{type:"text",placeholder:"Colors : #333,rgb(0,255,0),blue,...etc",required:!0,onChange:i,name:"colors"}),Object(p.jsx)(Q.a.Control,{type:"text",placeholder:"Images : link*link*...etc",required:!0,onChange:i,name:"images"}),Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(p.jsx)(Q.a.Control,{required:!0,type:"number",placeholder:"small: ",onChange:i,name:"sm"}),Object(p.jsx)(Q.a.Control,{required:!0,type:"number",placeholder:"medium: ",onChange:i,name:"md"}),Object(p.jsx)(Q.a.Control,{required:!0,type:"number",placeholder:"large: ",onChange:i,name:"lg"}),Object(p.jsx)(Q.a.Control,{required:!0,type:"number",placeholder:"x large: ",onChange:i,name:"xl"})]}),Object(p.jsxs)(Q.a.Group,{className:"AddItemModal__filters",children:[Object(p.jsx)(Q.a.Label,{children:" Item Type "}),Object(p.jsx)(Q.a.Control,{name:"filter",type:"radio",id:"radio1",value:"shirt",onChange:u}),Object(p.jsx)(Q.a.Label,{htmlFor:"radio1",children:" Shirts "}),Object(p.jsx)(Q.a.Control,{name:"filter",type:"radio",id:"radio2",value:"pant",onChange:u}),Object(p.jsx)(Q.a.Label,{htmlFor:"radio2",children:" Pants "}),Object(p.jsx)(Q.a.Control,{name:"filter",type:"radio",id:"radio3",value:"shoes",onChange:u}),Object(p.jsx)(Q.a.Label,{htmlFor:"radio3",children:" Shoes "})]}),Object(p.jsxs)(Q.a.Group,{className:"AddItemModal__gender",children:[Object(p.jsx)(Q.a.Label,{children:" Gender "}),Object(p.jsx)(Q.a.Control,{name:"gender",type:"radio",id:"radio4",value:"men",onChange:u}),Object(p.jsx)(Q.a.Label,{htmlFor:"radio4",children:" Men "}),Object(p.jsx)(Q.a.Control,{name:"gender",type:"radio",id:"radio5",value:"female",onChange:u}),Object(p.jsx)(Q.a.Label,{htmlFor:"radio5",children:" Female "}),Object(p.jsx)(Q.a.Control,{name:"gender",type:"radio",id:"radio6",value:"twinz",onChange:u}),Object(p.jsx)(Q.a.Label,{htmlFor:"radio6",children:" Twinz "})]}),Object(p.jsx)(G.a,{variant:"primary",type:"submit",className:"w-100",children:"Add"})]})]})},Y=c(20),V=c(28);var $=function(){var e=T(),t=Object(o.a)(e,1)[0],c=Object(n.useState)([]),r=Object(o.a)(c,2),a=r[0],s=r[1],i=Object(n.useContext)(F).user;Object(n.useEffect)((function(){document.getElementById("AddItemModal").style.display="none",window.innerWidth>=992?s([3,8,3,4,0]):window.innerWidth>=768&&window.innerWidth<992?s([2,6,2,3,0]):window.innerWidth<768&&s([1,4,1,2,0]),window.onresize=function(){window.innerWidth>=992?s([3,8,3,4,0]):window.innerWidth>=768&&window.innerWidth<992?s([2,6,2,3,0]):window.innerWidth<768&&s([1,4,1,2,0])}}),[]);var l=["white","#16161a","transparent","white"],d=["#6c757d","#16161a","#16161a","#6c757d"],j=function(e,t){for(var c=0;c<e.target.parentElement.children.length;c++)e.target.parentElement.children[c]==e.target?(e.target.style.backgroundColor=t[0],e.target.style.color=t[1]):(e.target.parentElement.children[c].style.backgroundColor=t[2],e.target.parentElement.children[c].style.color=t[3])},u=Object(n.useState)("shirt"),b=Object(o.a)(u,2),h=b[0],m=b[1],O=Object(n.useState)("men"),x=Object(o.a)(O,2),f=x[0],g=x[1],v=t.filter((function(e){return e.filter===h&&e.gender===f})),y=Object(n.useState)(0),C=Object(o.a)(y,2),w=C[0],_=C[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("section",{id:"shop_nav",className:"beforeNav",children:Object(p.jsxs)(z.a,{bg:"dark",variant:"dark",children:[Object(p.jsxs)(B.a,{className:"shop_nav_basic",children:[Object(p.jsx)(B.a.Link,{as:G.a,onClick:function(e){m("shirt"),j(e,l)},children:"Shirts"}),Object(p.jsx)(B.a.Link,{as:G.a,onClick:function(e){m("pant"),j(e,l)},children:"Pants"}),Object(p.jsx)(B.a.Link,{as:G.a,onClick:function(e){m("shoes"),j(e,l)},children:"Shoes"})]}),Object(p.jsxs)(B.a,{className:"shop_nav_gender",children:[Object(p.jsxs)(G.a,{variant:"outline-info",title:"men",onClick:function(e){g("men"),j(e,d)},children:[" ",Object(p.jsx)(V.a,{icon:Y.b})," "]}),Object(p.jsxs)(G.a,{variant:"outline-info",title:"female",onClick:function(e){g("female"),j(e,d)},children:[" ",Object(p.jsx)(V.a,{icon:Y.a})," "]}),Object(p.jsxs)(G.a,{variant:"outline-info",title:"twinz",onClick:function(e){g("twinz"),j(e,d)},children:[" ",Object(p.jsx)(V.a,{icon:Y.d})," "]})]}),i&&"abdomadridesta"===i.email.slice(0,i.email.indexOf("@"))?Object(p.jsx)(U.a,{placement:"top",overlay:Object(p.jsx)(M.a,{children:" Add Item  "}),children:Object(p.jsxs)(G.a,{id:"addItemBtn",onClick:function(){return document.getElementById("AddItemModal").style.display="block"},children:[" ",Object(p.jsx)(V.a,{icon:Y.c})," "]})}):null]})}),Object(p.jsx)("section",{id:"shop_container",children:Object(p.jsx)("article",{className:"justify-content-around",children:Object(p.jsx)("div",{children:v.map((function(e,t){return t>=w&&t<=w+a[0]&&t<v.length?Object(p.jsx)(X,{prpk:t,int:e.title,inv:e.price,invbd:e.PriceBeforeDescount,ing:e.images[0],inf:[e.filter,e.gender],indx:e.id},t):null}))})})}),Object(p.jsxs)(W.a,{children:[Object(p.jsx)(W.a.Prev,{onClick:function(){return _((function(e){return e-a[3]<=a[4]?a[4]:e-a[3]}))}}),Object(p.jsx)(W.a.Item,{onClick:function(){return _(0)},children:1}),Object(p.jsx)(W.a.Item,{onClick:function(){return _(a[3])},children:2}),Object(p.jsx)(W.a.Item,{onClick:function(){return _(2*a[3])},children:3}),Object(p.jsx)(W.a.Next,{onClick:function(){return _((function(e){return e+a[1]>v.length-1?v.length-1-a[2]:e+a[3]}))}})]}),Object(p.jsx)(R,{})]})},ee=(c(102),c(13));var te=function(){var e=T(),t=Object(o.a)(e,5)[4];return Object(p.jsxs)("nav",{className:"navbar",id:"nav",children:[Object(p.jsx)(m.b,{to:"/",children:"Home"}),Object(p.jsx)(m.b,{to:"/shop",children:"Shop"}),Object(p.jsxs)(m.b,{to:"/shopingcart",children:[Object(p.jsx)(V.a,{icon:Y.f})," ",Object(p.jsx)("span",{children:t.length})," "]}),Object(p.jsx)(m.b,{to:"/account",children:Object(p.jsx)(V.a,{icon:Y.g})})]})},ce=c(125);c(103);var ne=function(e){var t=e.preload,c=e.cTg,n=e.sizesCount,a=function(e,t){var c=document.querySelectorAll(e);console.log(c[t]),c[t].onClick=function(e,t){var c=document.querySelectorAll(e);c[t].classList.add("checked"),c[t].classList.remove("unChecked"),console.log(c[t])}(e,t);for(var n=0;n<c.length;n++)n!=t&&(c[n].classList.add("unChecked"),c[n].classList.remove("checked"),console.log(c[n]))};return Object(p.jsx)(ce.a,{horizontal:!0,children:t.map((function(e,s){return s===c[1]?Object(p.jsx)(ce.a.Item,{children:r.a.createElement("".concat(c[0]),null,"".concat(e))},s):"Color"===t[0]?Object(p.jsx)(ce.a.Item,{onClick:function(){return a("#Test_Product_view .row > div:last-of-type .list-group:nth-of-type(3) .list-group-item:not(:first-of-type)",s-1)},children:r.a.createElement("p",{style:{backgroundColor:"".concat(e)}},null)},s):Object(p.jsx)(ce.a.Item,{onClick:function(){document.querySelector(".Product_view_sizeStock").style.display="block",document.querySelector(".Product_view_sizeStock span").textContent=n[s-1],a("#Test_Product_view  .row:first-of-type > div:last-of-type > .list-group:nth-of-type(2) .list-group-item:not(:first-of-type)",s-1)},children:e},s)}))})},re=c(34);var ae=function(e){var t=e.preload;return Object(n.useEffect)((function(){for(var e=document.querySelectorAll("#Test_Product_view > div:nth-of-type(2) > div"),t=0;t<e.length;t++)t>=4&&(e[t].style.display="none")}),[]),Object(p.jsx)(d.a,{lg:3,md:4,sm:6,xs:9,children:Object(p.jsxs)(j.a,{className:"Test_Product_related_item text-center",as:re.a,href:"/test/".concat(t[0]),children:[Object(p.jsx)(j.a.Image,{src:"".concat(t[1])}),Object(p.jsxs)(j.a.Caption,{children:[" ",Object(p.jsx)("p",{children:t[2]})," ",Object(p.jsxs)("p",{children:["EGP ",t[3]]})," "]})]})})},se=new Date,oe=function(){var e=[],t=[],c=function(c){for(var n in e.length=0,t.length=0,c)Object.hasOwnProperty.call(c,n)&&(e.push(n),t.push(c[n]),console.log(n,c[n],e))},r=Object(n.useState)(1),a=Object(o.a)(r,2),s=a[0],j=a[1],u=T(),h=Object(o.a)(u,6),m=h[0],O=h[5],x=window.location.href.substring(window.location.href.lastIndexOf("/")+1,window.location.href.length);console.log(m.filter((function(e){return e.id===x})));var f=function(){var e=Object(k.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={createdAt:se.toLocaleString().substring(0,se.toLocaleString().indexOf(",")),image:document.querySelector("#Test_Product_view__row1 > div:first-of-type img").getAttribute("src"),name:document.querySelector("#Test_Product_view__row1 > div:last-of-type h1").textContent,price:document.querySelector("#Test_Product_view__row1 > div:last-of-type p.h3").textContent,size:document.querySelector("#Test_Product_view__row1 > div:last-of-type .list-group:nth-of-type(2) .list-group-item.checked").textContent,color:document.querySelector("#Test_Product_view__row1 > div:last-of-type .list-group:nth-of-type(3) .list-group-item.checked p").style.backgroundColor,amount:document.querySelector("#Test_Product_view__row1 > div:last-of-type .list-group:nth-of-type(4) .list-group-item:nth-of-type(2)").textContent,storeAmount:document.querySelector("#Test_Product_view__row1 > div:last-of-type .Product_view_sizeStock span").textContent,totId:document.querySelector("#Test_Product_view__row1 > div:last-of-type .ProductId").textContent},e.next=3,O(t);case 3:console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:m.map((function(n,r){return n.id===x&&Object(p.jsxs)(i.a,{id:"Test_Product_view",className:"beforeNav",children:[Object(p.jsxs)(l.a,{id:"Test_Product_view__row1",className:"justify-content-center",children:[Object(p.jsx)(d.a,{lg:5,md:6,sm:11,xs:11,children:Object(p.jsxs)(b.a,{className:"Product_view__carousel",children:[" ",n.images.map((function(e,t){return Object(p.jsx)(b.a.Item,{children:Object(p.jsx)("img",{src:"".concat(e),alt:"img#0"})},t)}))]})}),Object(p.jsxs)(d.a,{lg:7,md:6,sm:11,xs:11,children:[Object(p.jsx)("h1",{children:n.title}),Object(p.jsx)("p",{children:n.desc}),Object(p.jsxs)(b.a,{className:"Product_view__carousel d-md-none d-lg-none d-xl-none",children:[" ",n.images.map((function(e,t){return Object(p.jsx)(b.a.Item,{children:Object(p.jsx)("img",{src:"".concat(e),alt:"img#0"})},t)}))]}),Object(p.jsxs)("p",{className:"h3",children:["EGP",n.price]}),n.PriceBeforeDescount&&Object(p.jsxs)("p",{className:"h4 text-muted",children:["EGP",n.PriceBeforeDescount]}),c(n.sizes),Object(p.jsx)(ne,{preload:["Size"].concat(e),cTg:["h5",0],sizesCount:[].concat(t)}),Object(p.jsxs)("p",{className:"Product_view_sizeStock",style:{display:"none"},children:[" ",Object(p.jsx)("span",{})," in stock "]}),Object(p.jsxs)("span",{className:"d-none ProductId",children:[" ",n.id," "]}),Object(p.jsx)(ne,{preload:["Color"].concat(Object(H.a)(n.colors)),cTg:["h5",0]}),Object(p.jsxs)(ce.a,{horizontal:!0,children:[Object(p.jsx)(ce.a.Item,{onClick:function(){return j((function(e){return e-1<=0?1:e-1}))},children:" - "}),Object(p.jsxs)(ce.a.Item,{children:[" ",s," "]}),Object(p.jsx)(ce.a.Item,{onClick:function(){j((function(e){return e+1>=parseInt(document.querySelector(".Product_view_sizeStock span").textContent)?parseInt(document.querySelector(".Product_view_sizeStock span").textContent):e+1}))},children:" + "}),Object(p.jsxs)(ce.a.Item,{children:[" ",Object(p.jsx)("button",{type:"button",onClick:f,children:"ADD TO CART"})," "]})]})]})]}),Object(p.jsxs)(l.a,{id:"Test_Product_view__row2",className:"justify-content-around",children:[Object(p.jsx)("h2",{className:"col-12",children:"You May Like"}),m.map((function(e,t){return e.id!==x&&"shirt"===e.filter&&Object(p.jsx)(ae,{preload:["".concat(e.id),"".concat(e.images[0]),"".concat(e.title),"".concat(e.price)]},t)}))]})]},r)}))})},ie=c(81),le=function(e){var t=e.component,c=Object(ie.a)(e,["component"]),r=Object(n.useContext)(F).user;return Object(p.jsx)(ee.b,Object(N.a)(Object(N.a)({},c),{},{render:function(e){return r?Object(p.jsx)(t,Object(N.a)({},e)):Object(p.jsx)(ee.a,{to:"/login"})}}))},de=(c(71),function(){var e=Object(n.useContext)(F).user;return Object(p.jsx)("div",{id:"account",className:"beforeNav",children:Object(p.jsxs)("div",{className:"userAuth",children:[Object(p.jsx)("h1",{children:"Profile"}),Object(p.jsxs)("h3",{children:["  Welcome ",Object(p.jsx)("br",{})," ",Object(p.jsx)(V.a,{icon:Y.g})," ",e.email.slice(0,e.email.indexOf("@"))," "]}),Object(p.jsx)("button",{onClick:function(){return A.signOut()},children:"Sign Out"})]})})}),je={email:"",password:""},ue=function(){var e=Object(ee.g)(),t=Object(n.useState)(je),c=Object(o.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),l=i[0],d=i[1],j=function(e){var t=e.target;a(Object(N.a)(Object(N.a)({},r),{},Object(J.a)({},t.name,t.value))),d("")},u=function(){var t=Object(k.a)(P.a.mark((function t(c){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,t.next=4,A.signInWithEmailAndPassword(r.email,r.password);case 4:a(je),e.push("/account"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),d(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsx)("div",{id:"account",className:"beforeNav",children:Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("h1",{children:"Login Page"}),Object(p.jsxs)("form",{onSubmit:u,children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"text",value:r.email,autoComplete:"off",onChange:j,name:"email"}),Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",value:r.password,autoComplete:"off",onChange:j,name:"password"}),Object(p.jsx)("button",{type:"submit",children:"Submit"}),Object(p.jsx)("p",{className:"form__error",children:l})]}),Object(p.jsxs)("p",{children:["Not a user? ",Object(p.jsx)(m.b,{to:"/signup",children:"Sign Up"})]})]})})},be={email:"",password:"",confirmPassword:""},he=function(){var e=Object(ee.g)(),t=Object(n.useState)(""),c=Object(o.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),l=i[0],d=i[1],j=function(e){var t=e.target;a(Object(N.a)(Object(N.a)({},r),{},Object(J.a)({},t.name,t.value))),d("")},u=function(){var t=Object(k.a)(P.a.mark((function t(c){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),r.password===r.confirmPassword){t.next=3;break}return t.abrupt("return",d("Password don`t match"));case 3:return t.prev=3,t.next=6,A.createUserWithEmailAndPassword(r.email,r.password);case 6:a(be),e.push("/account"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),d(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsx)("div",{id:"account",className:"beforeNav",children:Object(p.jsxs)("div",{className:"signup",children:[Object(p.jsx)("h1",{children:"Sign Up Page"}),Object(p.jsxs)("form",{onSubmit:u,children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"text",value:r.email,autoComplete:"off",onChange:j,name:"email"}),Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",value:r.password,autoComplete:"off",onChange:j,name:"password"}),Object(p.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(p.jsx)("input",{type:"confirmPassword",value:r.confirmPassword,autoComplete:"off",onChange:j,name:"confirmPassword"}),Object(p.jsx)("button",{type:"submit",children:"Submit"}),Object(p.jsx)("p",{className:"form__error",children:l})]}),Object(p.jsxs)("p",{children:["Already a user? ",Object(p.jsx)(m.b,{to:"/login",children:"Log In"})]})]})})},me=c(117),pe=(c(104),function(e){var t=e.cid,c=e.amount,r=e.totalAmount,a=e.price,s=e.Alltot,i=e.setAlltot,l=e.prCls,d=Object(n.useState)(parseInt(c)),j=Object(o.a)(d,2),u=j[0],b=j[1],h=document.querySelector(".ShCartContainer__Calculate p:first-of-type span"),m=document.querySelector(".ShCartContainer__Calculate p:last-of-type span"),O=T(),x=Object(o.a)(O,8)[7];return Object(n.useEffect)((function(){for(var e=document.querySelectorAll(".ShCartContainer__ProductList__item__subtotal"),t=0,c=0;c<e.length;c++)t+=parseFloat(e[c].textContent.substr(3));i(t)}),[]),h.textContent="EGP ".concat(s),m.textContent="EGP ".concat(s-35),Object(p.jsx)(p.Fragment,{children:"ShCartContainer__ProductList__item"===l?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{type:"button",onClick:function(){b((function(e){return e-1<=0?1:e-1})),x(u,0,"-",t),u>1&&i((function(e){return e-parseFloat(a.substr(3))}))},children:"-"}),Object(p.jsx)("p",{children:u}),Object(p.jsx)("button",{type:"button",onClick:function(){b((function(e){return e+1>=r?r:e+1})),x(u,r,"+",t),u<r&&i((function(e){return e+parseFloat(a.substr(3))}))},children:"+"})]}),Object(p.jsxs)("span",{className:"spnStr , d-none",children:[" ",parseFloat(a.substr(3))," "]}),Object(p.jsx)("p",{className:"ShCartContainer__ProductList__item__subtotal",children:"EGP".concat(parseFloat(a.substr(3))*u)})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"Quantity"}),Object(p.jsx)("button",{type:"button",onClick:function(){b((function(e){return e+1>=r?r:e+1})),x(u,r,"+",t),u<r&&i((function(e){return e+parseFloat(a.substr(3))}))},children:"+"}),Object(p.jsx)("p",{children:u}),Object(p.jsx)("button",{type:"button",onClick:function(){b((function(e){return e-1<=0?1:e-1})),x(u,0,"-",t),u>1&&i((function(e){return e-parseFloat(a.substr(3))}))},children:"-"})]}),Object(p.jsxs)("p",{children:[Object(p.jsxs)("span",{className:"spnStr , d-none",children:[" ",parseFloat(a.substr(3))*u," "]}),Object(p.jsx)("span",{children:"Subtotal"})," ",Object(p.jsxs)("span",{children:[" ","EGP".concat(parseFloat(a.substr(3))*u)," "]})]})]})})});var Oe=function(){var e=Object(n.useContext)(F).user,t=T(),c=Object(o.a)(t,7),r=c[4],a=c[6],s=Object(n.useState)(0),j=Object(o.a)(s,2),u=j[0],b=j[1],h=function(e){e.target.parentElement.parentElement.parentElement.style.display="none",e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.style.display="block"},m=function(e){e.target.parentElement.lastElementChild.style.display="block",e.target.style.display="none"};return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(i.a,{id:"ShCartContainer",className:"beforeNav",children:Object(p.jsxs)(l.a,{children:[Object(p.jsxs)(d.a,{lg:8,md:12,sm:12,children:[Object(p.jsxs)("div",{className:"ShCartContainer__ProductList__head d-none d-md-block",children:[Object(p.jsx)("p",{children:"Product"}),"      ",Object(p.jsx)("p",{children:"Price"}),"      ",Object(p.jsx)("p",{children:"Quantity"}),"      ",Object(p.jsx)("p",{children:"Subtotal"})]}),r.map((function(e,t){return Object(p.jsxs)("div",{className:"w-100",children:[Object(p.jsxs)("div",{className:"ShCartContainer__ProductList__item d-none d-md-flex",children:[Object(p.jsx)("button",{type:"button",onClick:function(e){return m(e)},children:" X "}),Object(p.jsx)("img",{src:"".concat(e.image),alt:"img".concat(t)}),Object(p.jsx)("p",{children:e.name}),Object(p.jsx)("p",{children:e.price}),Object(p.jsx)(pe,{cid:e.id,amount:e.amount,totalAmount:e.storeAmount,price:e.price,Alltot:u,setAlltot:b,prCls:"ShCartContainer__ProductList__item"}),Object(p.jsxs)(me.a.Dialog,{children:[Object(p.jsx)(me.a.Body,{children:Object(p.jsx)("p",{children:"Are you sure to delete this item"})}),Object(p.jsxs)(me.a.Footer,{children:[Object(p.jsx)(G.a,{variant:"danger",onClick:function(t){a("".concat(e.id)),h(t)},children:"Delete"}),Object(p.jsx)(G.a,{variant:"light",onClick:function(e){return h(e)},children:"Cancel"})]})]})]}),Object(p.jsxs)("div",{className:"ShCartContainer__ProductList__itemSm d-flex d-md-none",children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:"".concat(e.image),alt:"img".concat(t),className:"img-fluid"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{type:"button",onClick:function(e){return m(e)},children:" X "}),Object(p.jsx)("p",{children:e.name}),Object(p.jsxs)("p",{children:[" ",Object(p.jsx)("span",{children:"Price"})," ",Object(p.jsx)("span",{children:e.price})," "]}),Object(p.jsx)(pe,{cid:e.id,amount:e.amount,totalAmount:e.storeAmount,price:e.price,Alltot:u,setAlltot:b,prCls:"ShCartContainer__ProductList__itemSm"}),Object(p.jsxs)(me.a.Dialog,{children:[Object(p.jsx)(me.a.Body,{children:Object(p.jsx)("p",{children:"Are you sure to delete this item"})}),Object(p.jsxs)(me.a.Footer,{children:[Object(p.jsx)(G.a,{variant:"danger",onClick:function(t){a("".concat(e.id)),h(t)},children:"Delete"}),Object(p.jsx)(G.a,{variant:"light",onClick:function(e){return h(e)},children:"Cancel"})]})]})]})]})]},t)}))]}),Object(p.jsxs)(d.a,{lg:4,md:12,sm:7,style:{marginInline:"auto"},children:[Object(p.jsxs)("div",{className:"ShCartContainer__Calculate",children:[Object(p.jsx)("h2",{children:"Cart Totals"}),Object(p.jsxs)("p",{children:["Subtotal     ",Object(p.jsx)("span",{})]}),Object(p.jsxs)("p",{children:["Shipping     ",Object(p.jsx)("span",{children:"EGP 35.00"})]}),Object(p.jsxs)("p",{children:["Total     ",Object(p.jsx)("span",{})]}),Object(p.jsx)("button",{type:"button",onClick:function(){r.map((function(t){var c="sizes.".concat(t.size);t.totId&&E.collection("Product Items").doc("".concat(t.totId.trim())).update(Object(J.a)({},c,t.storeAmount-t.amount)).then((function(){console.log("user with id aUserUid updated")})).catch((function(e){console.log("Error getting document:",e)})),t.totId&&E.collection("User-".concat(e.email)).doc("".concat(t.id)).update({storeAmount:t.storeAmount-t.amount}).then((function(){console.log("user with id aUserUid updated")})).catch((function(e){console.log("Error getting document:",e)})),E.collection("User-".concat(e.email)).get().then((function(e){e.forEach((function(e){e.ref.delete()}))}))})),document.querySelector(".ShCartContainer_SuccessMsg").style.display="block"},children:" Proceed to checkout "})]}),Object(p.jsx)("p",{className:"ShCartContainer_SuccessMsg",children:" The order has been successfully submitted and will be delivered within an hour  "})]})]})})})};var xe=function(){var e=[Y.e,Y.e,Y.e,Y.e],t=["https://www.linkedin.com/in/ahmed-zakaria-a554a4183/","https://codepen.io/ahmedzkaria22","https://github.com/AhmedZkaria22?tab=repositories","https://www.pinterest.com/zikoser/_saved/"];return Object(p.jsxs)("footer",{children:[Object(p.jsxs)("h6",{children:["Copyright \xa92021 All rights reserved | Developed by",Object(p.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100009428856148",children:"Ahmed Zakaria"})]}),Object(p.jsx)(ce.a,{horizontal:!0,children:e.map((function(e,c){return Object(p.jsx)(ce.a.Item,{children:Object(p.jsx)("a",{href:"".concat(t[c]),children:Object(p.jsx)(V.a,{icon:e})})},c)}))})]})};var fe=function(){return Object(n.useEffect)((function(){var e=document.getElementsByClassName("navbar")[0],t=document.getElementsByClassName("App")[0],c=document.getElementsByClassName("beforeNav")[0];t.insertBefore(e,c)}),[]),Object(p.jsxs)(m.a,{children:[Object(p.jsx)("header",{}),Object(p.jsx)(te,{}),Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(ee.d,{children:[Object(p.jsx)(ee.b,{path:"/",exact:!0,component:D}),Object(p.jsx)(ee.b,{path:"/shop",component:$}),Object(p.jsx)(ee.b,{path:"/test",component:oe}),Object(p.jsx)(le,{path:"/account",exact:!0,component:de}),Object(p.jsx)(ee.b,{path:"/login",component:ue}),Object(p.jsx)(ee.b,{path:"/signup",component:he}),Object(p.jsx)(ee.b,{path:"/shopingcart",component:Oe})]})}),Object(p.jsx)(xe,{})]})},ge=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,126)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(L,{children:Object(p.jsx)(fe,{})}),document.getElementById("root")),ge()},71:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){}},[[105,1,2]]]);
//# sourceMappingURL=main.584edc82.chunk.js.map