(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__1kYGJ",control:"Checkout_control__1bkgC",actions:"Checkout_actions__3TSNf",submit:"Checkout_submit__J57mh",invalid:"Checkout_invalid__1jZyx"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3giN8",total:"Cart_total__30ZvP",actions:"Cart_actions__2k1dG","button--alt":"Cart_button--alt__16gst",button:"Cart_button__3HHWJ"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__Bmy3M",summary:"CartItem_summary__1Qrbl",price:"CartItem_price__1CNdF",amount:"CartItem_amount__1sM0v",actions:"CartItem_actions__2eA3P"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1rPQC",icon:"HeaderCartButton_icon__XY_NC",badge:"HeaderCartButton_badge__Z6N0Z",bump:"HeaderCartButton_bump___QJDr"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__1Vi3u",description:"MealItem_description__3Gxcg",price:"MealItem_price__2QZ3F"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ydPH","meals-appear":"AvailableMeals_meals-appear__lnlZx",MealsLoading:"AvailableMeals_MealsLoading__3wPIw",MealsError:"AvailableMeals_MealsError__29sL-"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3pnxv",modal:"Modal_modal__25B3U","slide-down":"Modal_slide-down__2c-8e"}},,function(e,t,n){e.exports={header:"Header_header__-eOs7","main-image":"Header_main-image__1gVNj"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__11_5q"}},function(e,t,n){e.exports={card:"Card_card__2PD3W"}},function(e,t,n){e.exports={input:"Input_input__1nzVR"}},function(e,t,n){e.exports={form:"MealItemForm_form__2ykxg"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=(n(27),n(2)),s=n(1),i=n.n(s),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),d=n(10),j=n.n(d),m=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useContext)(u).items,d=i.reduce((function(e,t){return e+t.amount}),0),m="".concat(j.a.button," ").concat(a?j.a.bump:"");return Object(s.useEffect)((function(){if(0!==i.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:j.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:j.a.badge,children:d})]})},b=n.p+"static/media/meals.6a545d4d.jpg",O=n(17),x=n.n(O),h=function(e){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsxs)("header",{className:x.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:x.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},p=n(19),f=n.n(p),_=function(){return Object(o.jsxs)("section",{className:f.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(12),C=n(6),N=n.n(C),y=n(20),g=n.n(y),k=function(e){return Object(o.jsx)("div",{className:g.a.card,children:e.children})},A=n(5),M=n(21),w=n.n(M),I=i.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:w.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(A.a)({ref:t},e.input))]})})),S=n(22),F=n.n(S),P=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)();return Object(o.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(I,{ref:i,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},H=n(13),R=n.n(H),E=function(e){var t=Object(s.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:R.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:R.a.description,children:e.description}),Object(o.jsx)("div",{className:R.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(P,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},D=n(14),B=n.n(D),T=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!0),i=Object(r.a)(c,2),l=i[0],u=i[1],d=Object(s.useState)(),j=Object(r.a)(d,2),m=j[0],b=j[1];if(Object(s.useEffect)((function(){var e=function(){var e=Object(v.a)(N.a.mark((function e(){var t,n,c,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://realtime-database-53b1d-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,description:n[r].description,name:n[r].name,price:n[r].price});a(c),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),b(e.message)}))}),[]),l)return Object(o.jsx)("section",{className:B.a.MealsLoading,children:Object(o.jsx)("p",{children:"Loading..."})});if(m)return Object(o.jsx)("section",{className:B.a.MealsError,children:Object(o.jsx)("p",{children:m})});var O=n.map((function(e){return Object(o.jsx)(E,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:B.a.meals,children:Object(o.jsx)(k,{children:Object(o.jsx)("ul",{children:O})})})},J=function(){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(T,{})]})},L=n(15),V=n.n(L),Z=function(e){return Object(o.jsx)("div",{className:V.a.backdrop,onClick:e.onClose})},Y=function(e){return Object(o.jsx)("div",{className:V.a.modal,children:Object(o.jsx)("div",{className:V.a.content,children:e.children})})},z=document.getElementById("overlays"),Q=function(e){return Object(o.jsxs)(s.Fragment,{children:[c.a.createPortal(Object(o.jsx)(Z,{onClose:e.onClose}),z),c.a.createPortal(Object(o.jsx)(Y,{children:e.children}),z)]})},G=n(7),$=n.n(G),q=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:$.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:$.a.summary,children:[Object(o.jsx)("span",{className:$.a.price,children:t}),Object(o.jsxs)("span",{className:$.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:$.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},W=n(4),U=n.n(W),X=n(3),K=n.n(X),ee=function(e){return""===e.trim()},te=function(e){var t=Object(s.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)(),d=Object(s.useRef)(),j="".concat(K.a.control," ").concat(a.name?"":K.a.invalid),m="".concat(K.a.control," ").concat(a.street?"":K.a.invalid),b="".concat(K.a.control," ").concat(a.postalCode?"":K.a.invalid),O="".concat(K.a.control," ").concat(a.city?"":K.a.invalid);return Object(o.jsxs)("form",{className:K.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=l.current.value,r=u.current.value,s=d.current.value,o=!ee(n),j=!ee(a),m=!ee(s),b=5===r.trim().length;c({name:o,street:j,city:m,postalCode:b}),o&&j&&m&&b&&e.onConfirm({name:n,street:a,city:s,postalCode:r})},children:[Object(o.jsxs)("div",{className:j,children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:i}),!a.name&&Object(o.jsx)("p",{children:"Please enter a valid name!"})]}),Object(o.jsxs)("div",{className:m,children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:l}),!a.street&&Object(o.jsx)("p",{children:"Please enter a valid street!"})]}),Object(o.jsxs)("div",{className:b,children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:u}),!a.postalCode&&Object(o.jsx)("p",{children:"Please enter a valid postal code (5 characters long)!"})]}),Object(o.jsxs)("div",{className:O,children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:d}),!a.city&&Object(o.jsx)("p",{children:"Please enter a valid city!"})]}),Object(o.jsxs)("div",{className:K.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:K.a.submit,children:"Confirm"})]})]})},ne=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],l=Object(s.useState)(!1),d=Object(r.a)(l,2),j=d[0],m=d[1],b=Object(s.useState)(!1),O=Object(r.a)(b,2),x=O[0],h=O[1],p=Object(s.useContext)(u),f="$".concat(p.totalAmount.toFixed(2)),_=p.items.length>0,C=function(e){p.removeItem(e)},y=function(e){p.addItem(e)},g=function(){var e=Object(v.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://react-http-6b4a6.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:p.items})});case 3:m(!1),h(!0),p.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=Object(o.jsx)("ul",{className:U.a["cart-items"],children:p.items.map((function(e){return Object(o.jsx)(q,{name:e.name,amount:e.amount,price:e.price,onRemove:C.bind(null,e.id),onAdd:y.bind(null,e)},e.id)}))}),A=Object(o.jsxs)("div",{className:U.a.actions,children:[Object(o.jsx)("button",{className:U.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(o.jsx)("button",{className:U.a.button,onClick:function(){c(!0)},children:"Order"})]}),M=Object(o.jsxs)(i.a.Fragment,{children:[k,Object(o.jsxs)("div",{className:U.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:f})]}),a&&Object(o.jsx)(te,{onConfirm:g,onCancel:e.onClose}),!a&&A]}),w=Object(o.jsx)("p",{children:"Sending order data..."}),I=Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)("p",{children:"Successfully sent the order!"}),Object(o.jsx)("div",{className:U.a.actions,children:Object(o.jsx)("button",{className:U.a.button,onClick:e.onClose,children:"Close"})})]});return Object(o.jsxs)(Q,{onClose:e.onClose,children:[!j&&!x&&M,j&&w,!j&&x&&I]})},ae=n(18),ce={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var s=Object(A.a)(Object(A.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ae.a)(e.items))[c]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(A.a)(Object(A.a)({},l),{},{amount:l.amount-1});(i=Object(ae.a)(e.items))[o]=d}return{items:i,totalAmount:u}}return t.type,ce},se=function(e){var t=Object(s.useReducer)(re,ce),n=Object(r.a)(t,2),a=n[0],c=n[1],i={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(o.jsx)(u.Provider,{value:i,children:e.children})};var ie=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(se,{children:[n&&Object(o.jsx)(ne,{onClose:function(){a(!1)}}),Object(o.jsx)(h,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(J,{})})]})};c.a.render(Object(o.jsx)(ie,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.2ba5a745.chunk.js.map