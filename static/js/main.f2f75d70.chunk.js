(this["webpackJsonpfinal-project-frontend"]=this["webpackJsonpfinal-project-frontend"]||[]).push([[0],{43:function(e,t,n){},49:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(14),r=n.n(s),o=(n(43),n(6)),i=n(24),l=n(8),u=n(1);var j=function(){return Object(u.jsx)("h1",{children:"Home"})},b=n(7),d=n(37);var p=function(e){var t=e.array,n=e.label,a={labels:Object(b.a)(new Array(t.length).keys()),datasets:[{label:n,data:t,borderColor:["rgba(54, 162, 235 ,0.2)"],backgroundColor:["rgba(54, 162, 235 ,0.2)"],pointBackgroundColor:["rgba(54, 162, 235 ,0.2)"],pointBorderColor:["rgba(54, 162, 235 ,0.2)"]}]};return Object(u.jsx)(d.a,{data:a})};var f=function(e){var t=e.times,n=e.setTimes,c=e.user,s=Object(a.useState)(""),r=Object(o.a)(s,2),i=r[0],l=r[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){fetch("".concat("https://we-fitness-backend.herokuapp.com/","api/v1/miles"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({time:i,user_id:c.id})}).then((function(e){return n([].concat(Object(b.a)(t),[e]))}))},children:[Object(u.jsx)("label",{children:"Enter Mile time"}),Object(u.jsx)("input",{type:"text",id:"time",value:i,onChange:function(e){return l(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Submit"})]})})};var h=function(e){var t=e.squatWeight,n=e.setSquatWeight,c=e.user,s=Object(a.useState)(""),r=Object(o.a)(s,2),i=r[0],l=r[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){console.log(i),fetch("".concat("http://localhost:3000/","api/v1/squats"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({weight:i,user_id:c.id})}).then((function(e){return n([].concat(Object(b.a)(t),[e]))}))},children:[Object(u.jsx)("label",{children:"Enter Squat Max"}),Object(u.jsx)("input",{type:"text",id:"squat",value:i,onChange:function(e){return l(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Submit"})]})})};var O=function(e){var t=e.benchWeight,n=e.setBenchWeight,c=e.user,s=Object(a.useState)(""),r=Object(o.a)(s,2),i=r[0],l=r[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){console.log(i),fetch("".concat("http://localhost:3000/","api/v1/benchpresses"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({weight:i,user_id:c.id})}).then((function(e){return n([].concat(Object(b.a)(t),[e]))}))},children:[Object(u.jsx)("label",{children:"Enter Bench Max"}),Object(u.jsx)("input",{type:"text",id:"bench",value:i,onChange:function(e){return l(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Submit"})]})})};var g=function(e){var t=e.distances,n=e.setDistances,c=e.user,s=Object(a.useState)(""),r=Object(o.a)(s,2),i=r[0],l=r[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){console.log(i),fetch("".concat("http://localhost:3000/","api/v1/distances"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({distance:i,user_id:c.id})}).then((function(e){return n([].concat(Object(b.a)(t),[e]))}))},children:[Object(u.jsx)("label",{children:"Enter Distance:"}),Object(u.jsx)("input",{type:"text",id:"distance",value:i,onChange:function(e){return l(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Submit"})]})})},m="http://localhost:3000/";var x=function(e){var t=e.user,n=Object(a.useState)([]),c=Object(o.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)([]),l=Object(o.a)(i,2),j=l[0],b=l[1],d=Object(a.useState)([]),x=Object(o.a)(d,2),y=x[0],v=x[1],T=Object(a.useState)([]),w=Object(o.a)(T,2),S=w[0],k=w[1];Object(a.useEffect)((function(){fetch("".concat(m,"api/v1/distances")).then((function(e){return e.json()})).then((function(e){return b(e)}))}),[]),Object(a.useEffect)((function(){fetch("".concat(m,"api/v1/miles")).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(a.useEffect)((function(){fetch("".concat(m,"api/v1/squats")).then((function(e){return e.json()})).then((function(e){return v(e)}))}),[]),Object(a.useEffect)((function(){fetch("".concat(m,"api/v1/benchpresses")).then((function(e){return e.json()})).then((function(e){return k(e)}))}),[]);var C=s.filter((function(e){return e.user_id===t.id})).map((function(e){return e.time})),N=j.filter((function(e){return e.user_id===t.id})).map((function(e){return e.distance})),P=y.filter((function(e){return e.user_id===t.id})).map((function(e){return e.weight})),E=S.filter((function(e){return e.user_id===t.id})).map((function(e){return e.weight}));return Object(u.jsxs)("div",{className:"graph",children:[Object(u.jsx)(p,{array:C,label:"Mile Times"}),Object(u.jsx)(f,{times:s,setTimes:r,user:t}),Object(u.jsx)(p,{array:N,label:"Distance Ran"}),Object(u.jsx)(g,{distances:j,setDistances:b,user:t}),Object(u.jsx)(p,{array:P,label:"Squats"}),Object(u.jsx)(h,{squatWeight:y,setSquatWeight:v,user:t}),Object(u.jsx)(p,{array:E,label:"BenchPress"}),Object(u.jsx)(O,{benchWeight:S,setBenchWeight:k,user:t})]})},y=n(19),v=n.n(y),T=n(32),w=n(25),S=n(60),k=n(26),C=n(20),N=(n(46),["places"]),P={width:"100vw",height:"40vw"},E={lat:37.561112,lng:-122.322289},B={styles:[{featureType:"water",stylers:[{color:"#19a0d8"}]},{featureType:"administrative",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"},{weight:6}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#e85113"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#efe9e4"},{lightness:-40}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#efe9e4"},{lightness:-20}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{lightness:100}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{lightness:-100}]},{featureType:"road.highway",elementType:"labels.icon"},{featureType:"landscape",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"landscape",stylers:[{lightness:20},{color:"#efe9e4"}]},{featureType:"landscape.man_made",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{lightness:100}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{lightness:-100}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{hue:"#11ff00"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{lightness:100}]},{featureType:"poi",elementType:"labels.icon",stylers:[{hue:"#4cff00"},{saturation:58}]},{featureType:"poi",elementType:"geometry",stylers:[{visibility:"on"},{color:"#f0e4d3"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#efe9e4"},{lightness:-25}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#efe9e4"},{lightness:-10}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"simplified"}]}],disableDefaultUI:!0,zoomControl:!0};function W(e){var t=e.panTo;return Object(u.jsx)("button",{className:"locate",onClick:function(){navigator.geolocation.getCurrentPosition((function(e){t({lat:e.coords.latitude,lng:e.coords.longitude})}),(function(){return console.log("error")}),B)},children:Object(u.jsx)("img",{src:"https://www.freepnglogos.com/uploads/compass-png/compass-maximum-motivation-boot-camp-for-creators-dreamers-20.png",alt:"locate me"})})}function _(e){var t=e.panTo,n=Object(k.a)({requestOptions:{location:{lat:function(){return 37.561112},lng:function(){return-122.322289}},radius:4e4}}),a=n.ready,c=n.value,s=n.suggestions,r=s.status,o=s.data,i=n.setValue,l=n.clearSuggestions;return Object(u.jsx)("div",{className:"search",children:Object(u.jsxs)(C.a,{onSelect:function(){var e=Object(T.a)(v.a.mark((function e(n){var a,c,s,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(n,!1),l(),e.prev=2,e.next=5,Object(k.b)({address:n});case 5:return a=e.sent,e.next=8,Object(k.c)(a[0]);case 8:c=e.sent,s=c.lat,r=c.lng,t({lat:s,lng:r}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:console.log(n);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),children:[Object(u.jsx)(C.b,{value:c,onChange:function(e){i(e.target.value)},disabled:!a,placeholder:"Enter an address"}),Object(u.jsx)(C.e,{children:Object(u.jsx)(C.c,{children:"OK"===r&&o.map((function(e){var t=e.id,n=e.description;return Object(u.jsx)(C.d,{value:n},t)}))})})]})})}var q=function(){var e=Object(w.d)({googleMapsApiKey:"AIzaSyAxXDePVkccG3JCwBL80BfjBh2wR_WBV9w",libraries:N}),t=e.isLoaded,n=e.loadError,s=Object(a.useState)([]),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(a.useState)(null),d=Object(o.a)(j,2),p=d[0],f=d[1],h=Object(a.useState)([]),O=Object(o.a)(h,2),g=O[0],m=O[1];Object(a.useEffect)((function(){fetch("".concat("http://localhost:3000/","api/v1/hikes")).then((function(e){return e.json()})).then((function(e){return m(e)}))}),[]),console.log(i);var x=c.a.useCallback((function(e){l((function(t){return[].concat(Object(b.a)(t),[{lat:e.latLng.lat(),lng:e.latLng.lng(),time:new Date}])}))}),[]),y=c.a.useRef(),v=c.a.useCallback((function(e){y.current=e}),[]),T=c.a.useCallback((function(e){var t=e.lat,n=e.lng;y.current.panTo({lat:t,lng:n}),y.current.setZoom(14)}),[]);return n?"Error loading maps":t?Object(u.jsxs)("div",{children:[Object(u.jsx)(_,{panTo:T}),Object(u.jsx)(W,{panTo:T}),Object(u.jsxs)(w.a,{mapContainerStyle:P,zoom:11,center:E,options:B,onClick:x,onLoad:v,children:[g.map((function(e){return Object(u.jsx)(w.c,{position:{lat:parseFloat(e.lat),lng:parseFloat(e.lng)},onClick:function(){f(e),console.log(p)}},e.id)})),p?Object(u.jsx)(w.b,{position:{lat:p.lat,lng:p.lng},onCloseClick:function(){f(null)},children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Hike Title"}),Object(u.jsx)("p",{children:Object(S.a)(p.time,new Date)})]})}):null]})]}):"Loading Maps..."};var D=function(e){var t=e.signUp,n=Object(a.useState)(""),c=Object(o.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),j=l[0],b=l[1],d=Object(a.useState)(""),p=Object(o.a)(d,2),f=p[0],h=p[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s,j)},children:["Username:",Object(u.jsx)("input",{className:"login-inputs",type:"text",id:"username",placeholder:" Username",value:s,onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("br",{}),"Password:",Object(u.jsx)("input",{className:"login-inputs",type:"password",id:"password",placeholder:" Password",value:j,onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("br",{}),"Confirm Password",Object(u.jsx)("input",{className:"login-inputs",type:"password",id:"password",placeholder:"Confirm Password",value:f,onChange:function(e){return h(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"submit",children:"Signup"})]})})};n(49);var L,M,U,J,A,I,z=function(e){var t=e.onLogin,n=e.signUp,c=Object(a.useState)(""),s=Object(o.a)(c,2),r=s[0],i=s[1],l=Object(a.useState)(""),j=Object(o.a)(l,2),b=j[0],d=j[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Welcome to WeFit!"}),Object(u.jsxs)("div",{className:"div-login",children:[Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r,b)},className:"SignIn",children:["Username:",Object(u.jsx)("input",{className:"login-inputs",type:"text",id:"username",placeholder:" Username",value:r,onChange:function(e){return i(e.target.value)}}),Object(u.jsx)("br",{}),"Password:",Object(u.jsx)("input",{className:"login-inputs",type:"password",id:"password",placeholder:" Password",value:b,onChange:function(e){return d(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"submit",children:"Login"})]}),Object(u.jsx)("br",{}),"Not a Member Yet?",Object(u.jsx)(D,{signUp:n})]})]})},F=n(16),H=n(17),R=n(38),V=H.a.nav(L||(L=Object(F.a)(["\n    background: #000;\n    height: 80px;\n    display: flex;\n    justify-content; space-between;  \n    padding; 0.5rem calc((100vw - 1000px) / 2);\n    z-index: 10\n"]))),G=Object(H.a)(i.b)(M||(M=Object(F.a)(["\n    color: #fff;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    padding: 0 1rem;\n    height: 100%;\n    cursor: pointer;\n\n    &.active {\n        color: #15cdfc\n    }\n"]))),K=Object(H.a)(R.a)(U||(U=Object(F.a)(["\n    display: none;\n    color: #fff;\n\n    @media screen and (max-width: 768px) {\n        display: block;\n        position: absolute;\n        top: 0;\n        right: 0;\n        tranform: translate(-100%, 75%);\n        font_size: 1.8rem;\n        cursor: pointer;\n    }\n"]))),X=H.a.div(J||(J=Object(F.a)(["\n    display: flex;\n    allign-items: center;\n    margin-right: -24px;\n\n    @media screen and (max-width: 768px) {\n        display: none;\n    }\n"])));H.a.nav(A||(A=Object(F.a)(["\n    display: flex;\n    align-items: center;\n    margin-right: 24px;\n\n    @media screen and (max-width: 768px) {\n        display: none;\n    }\n"]))),Object(H.a)(i.b)(I||(I=Object(F.a)(["\n    border-radius: 4px;\n    background: #256ce1;\n    padding: 10px 22px;\n    color: #fff;\n    border:none;\n    outline:none;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    text-decoration: none;\n\n    &:hover {\n        transition: all 0.2s ease-in-out;\n        background: #fff;\n        color: #010606;\n    }\n"])));var Y=function(e){var t=e.logout;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(V,{children:[Object(u.jsx)(G,{to:"/home",children:Object(u.jsx)("img",{src:"logo.svg",alt:"logo"})}),Object(u.jsx)(K,{}),Object(u.jsxs)(X,{children:[Object(u.jsx)(G,{to:"/progress",children:"Progress"}),Object(u.jsx)(G,{to:"/hikemap",children:"HikeMap"}),Object(u.jsx)(G,{to:"/contact-info",children:"Contact Info"})]}),Object(u.jsx)("button",{className:"logout",onClick:t,children:"Logout"})]})})};var Z=function(){var e="http://localhost:3000/",t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(),b=Object(o.a)(r,2),d=b[0],p=b[1];return Object(a.useEffect)((function(){var t=localStorage.getItem("jwt");console.log("token: "+t),fetch("".concat(e,"/api/v1/profile"),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){e.ok?e.json().then((function(e){s(!0),p(e.user)})):console.log("please log in")}))}),[]),Object(u.jsx)("div",{className:"App",children:c?Object(u.jsx)("div",{children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(Y,{logout:function(){localStorage.clear(),p(null),s(!1)}}),Object(u.jsx)("nav",{className:"navbar-container"}),Object(u.jsx)(l.a,{exact:!0,path:"/",children:Object(u.jsx)(j,{currentUser:d})}),Object(u.jsx)(l.a,{exact:!0,path:"/progress",children:Object(u.jsx)(x,{user:d})}),Object(u.jsx)(l.a,{exact:!0,path:"/hikeMap",children:Object(u.jsx)(q,{})}),Object(u.jsx)(l.a,{exact:!0,path:"/signup",children:Object(u.jsx)(D,{})}),Object(u.jsx)(l.a,{exact:!0,path:"/home",children:Object(u.jsx)(j,{})})]})}):Object(u.jsx)("div",{children:Object(u.jsx)(z,{onLogin:function(t,n){fetch("".concat(e,"/api/v1/login"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:{username:"".concat(t),password:"".concat(n)}})}).then((function(e){console.log(e),e.ok?e.json().then((function(e){console.log("hi"+e.jwt),p(e.user),s(!0),localStorage.setItem("jwt",e.jwt),console.log("signed in!!!!!!!!!!!!!!!!!!")})):console.log("wrong username/password")}))},signUp:function(t,n){fetch("".concat(e,"/api/v1/users"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:{username:"".concat(t),password:"".concat(n)}})}).then((function(e){e.ok?e.json().then((function(e){p(e.user),s(!0),localStorage.setItem("jwt",e.jwt)})):console.log("form incorrectly filled out")}))}})})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(Z,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.f2f75d70.chunk.js.map