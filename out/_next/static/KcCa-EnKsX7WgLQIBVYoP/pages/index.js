(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+wdc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=null,i=!1,r=3,l=-1,o=-1,u=!1,s=!1;function c(){if(!u){var e=a.expirationTime;s?_():s=!0,k(m,e)}}function f(){var e=a,t=a.next;if(a===t)a=null;else{var n=a.previous;a=n.next=t,t.previous=n}e.next=e.previous=null,n=e.callback,t=e.expirationTime,e=e.priorityLevel;var i=r,l=o;r=e,o=t;try{var u=n()}finally{r=i,o=l}if("function"===typeof u)if(u={callback:u,priorityLevel:e,expirationTime:t,next:null,previous:null},null===a)a=u.next=u.previous=u;else{n=null,e=a;do{if(e.expirationTime>=t){n=e;break}e=e.next}while(e!==a);null===n?n=a:n===a&&(a=u,c()),(t=n.previous).next=n.previous=u,u.next=n,u.previous=t}}function d(){if(-1===l&&null!==a&&1===a.priorityLevel){u=!0;try{do{f()}while(null!==a&&1===a.priorityLevel)}finally{u=!1,null!==a?c():s=!1}}}function m(e){u=!0;var n=i;i=e;try{if(e)for(;null!==a;){var r=t.unstable_now();if(!(a.expirationTime<=r))break;do{f()}while(null!==a&&a.expirationTime<=r)}else if(null!==a)do{f()}while(null!==a&&!E())}finally{u=!1,i=n,null!==a?c():s=!1,d()}}var p,b,h=Date,v="function"===typeof setTimeout?setTimeout:void 0,w="function"===typeof clearTimeout?clearTimeout:void 0,y="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,x="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function g(e){p=y(function(t){w(b),e(t)}),b=v(function(){x(p),e(t.unstable_now())},100)}if("object"===typeof performance&&"function"===typeof performance.now){var j=performance;t.unstable_now=function(){return j.now()}}else t.unstable_now=function(){return h.now()};var k,_,E,N=null;if((N=window)&&N._schedMock){var T=N._schedMock;k=T[0],_=T[1],E=T[2],t.unstable_now=T[3]}else if("function"!==typeof MessageChannel){var O=null,M=function(e){if(null!==O)try{O(e)}finally{O=null}};k=function(e){null!==O?setTimeout(k,0,e):(O=e,setTimeout(M,0,!1))},_=function(){O=null},E=function(){return!1}}else{"undefined"!==typeof console&&("function"!==typeof y&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof x&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var C=null,P=!1,A=-1,L=!1,q=!1,F=0,H=33,z=33;E=function(){return F<=t.unstable_now()};var R=new MessageChannel,W=R.port2;R.port1.onmessage=function(){P=!1;var e=C,n=A;C=null,A=-1;var a=t.unstable_now(),i=!1;if(0>=F-a){if(!(-1!==n&&n<=a))return L||(L=!0,g(S)),C=e,void(A=n);i=!0}if(null!==e){q=!0;try{e(i)}finally{q=!1}}};var S=function(e){if(null!==C){g(S);var t=e-F+z;t<z&&H<z?(8>t&&(t=8),z=t<H?H:t):H=t,F=e+z,P||(P=!0,W.postMessage(void 0))}else L=!1};k=function(e,t){C=e,A=t,q||0>t?W.postMessage(void 0):L||(L=!0,g(S))},_=function(){C=null,P=!1,A=-1}}t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=r,i=l;r=e,l=t.unstable_now();try{return n()}finally{r=a,l=i,d()}},t.unstable_next=function(e){switch(r){case 1:case 2:case 3:var n=3;break;default:n=r}var a=r,i=l;r=n,l=t.unstable_now();try{return e()}finally{r=a,l=i,d()}},t.unstable_scheduleCallback=function(e,n){var i=-1!==l?l:t.unstable_now();if("object"===typeof n&&null!==n&&"number"===typeof n.timeout)n=i+n.timeout;else switch(r){case 1:n=i+-1;break;case 2:n=i+250;break;case 5:n=i+1073741823;break;case 4:n=i+1e4;break;default:n=i+5e3}if(e={callback:e,priorityLevel:r,expirationTime:n,next:null,previous:null},null===a)a=e.next=e.previous=e,c();else{i=null;var o=a;do{if(o.expirationTime>n){i=o;break}o=o.next}while(o!==a);null===i?i=a:i===a&&(a=e,c()),(n=i.previous).next=i.previous=e,e.next=i,e.previous=n}return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(t===e)a=null;else{e===a&&(a=t);var n=e.previous;n.next=t,t.previous=n}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var n=r;return function(){var a=r,i=l;r=n,l=t.unstable_now();try{return e.apply(this,arguments)}finally{r=a,l=i,d()}}},t.unstable_getCurrentPriorityLevel=function(){return r},t.unstable_shouldYield=function(){return!i&&(null!==a&&a.expirationTime<o||E())},t.unstable_continueExecution=function(){null!==a&&c()},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return a}},QCnb:function(e,t,n){"use strict";e.exports=n("+wdc")},RNiq:function(e,t,n){"use strict";n.r(t);var a=n("0iUn"),i=n("sLSF"),r=n("MI3g"),l=n("a7VT"),o=n("Tit0"),u=n("q1tI"),s=n.n(u),c=n("gaPq"),f=n("Cgje"),d=n("naWs"),m=n("AT/M"),p=n("vYYK"),b=n("MX0m"),h=n.n(b),v=n("YFqc"),w=n.n(v),y=(n("i8i4"),n("m/Pd")),x=n.n(y),g=function(e){function t(){var e,n;Object(a.default)(this,t);for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];return n=Object(r.default)(this,(e=Object(l.default)(t)).call.apply(e,[this].concat(o))),Object(p.a)(Object(m.default)(n),"state",{height:"",width:"",color:"",r:""}),Object(p.a)(Object(m.default)(n),"getRandomArbitrary",function(e,t){return Math.random()*(t-e)+e}),Object(p.a)(Object(m.default)(n),"color",function(){return"#"+Math.random().toString(16).slice(2,8).toUpperCase()}),Object(p.a)(Object(m.default)(n),"r",n.getRandomArbitrary(n.getRandomArbitrary(1.3432,270.6546),n.getRandomArbitrary(1.3432,70.6546))),n}return Object(o.default)(t,e),Object(i.default)(t,[{key:"componentDidMount",value:function(){var e=this;document.body.style.overflowX="hidden",this.setState({height:window.innerHeight,width:window.innerWidth,color:this.color(),r:"rotate3d(1, 1, 1, "+this.r+"deg)"}),window.addEventListener("resize",function(){e.setState({height:window.innerHeight,width:window.innerWidth,color:e.color(),r:"rotate3d(1, 1, 1, "+e.r+"deg)"})}),window.addEventListener("orientationchange",function(){e.setState({height:window.innerHeight,width:window.innerWidth,color:e.color(),r:"rotate3d(1, 1, 1, "+e.r+"deg)"})})}},{key:"render",value:function(){return s.a.createElement("section",{className:"jsx-1905242795"},s.a.createElement(x.a,null,s.a.createElement("title",{className:"jsx-1905242795"},"Nick Hulea"),s.a.createElement("meta",{name:"title",content:"Nick Hulea's Website!",className:"jsx-1905242795"}),s.a.createElement("meta",{name:"description",content:"Nick Hulea's Website!",className:"jsx-1905242795"})),s.a.createElement("h1",{className:"jsx-1905242795"},"Welcome!"),s.a.createElement("p",{className:"jsx-1905242795"},"Hello you have arrived at the website of Nick Hulea !"),s.a.createElement("p",{className:"jsx-1905242795"},"Samples of my work can be found"," ",s.a.createElement(w.a,{href:"/work"},s.a.createElement("a",{prefetch:"true",className:"jsx-1905242795"},"here")),"."),s.a.createElement("p",{className:"jsx-1905242795"},"If you would like to contact me or if you have any questions click"," ",s.a.createElement(w.a,{href:"/contact"},s.a.createElement("a",{prefetch:"true",className:"jsx-1905242795"},"here")),"."),s.a.createElement("div",{id:"block",ref:"block",style:{transform:this.state.r,backgroundColor:this.state.color,height:this.state.height,width:this.state.width},className:"jsx-1905242795"}),s.a.createElement("div",{className:"jsx-1905242795 clear"}),s.a.createElement(h.a,{id:"1905242795"},["h1.jsx-1905242795{font-weight:900;font-size:100px;line-height:1;-webkit-letter-spacing:-0.05em;-moz-letter-spacing:-0.05em;-ms-letter-spacing:-0.05em;letter-spacing:-0.05em;}","p.jsx-1905242795{font-weight:600;font-size:45px;line-height:1.1;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;}","@media only screen and (max-width:480px){h1.jsx-1905242795{font-size:45px;}p.jsx-1905242795{font-size:35px;}}","body.jsx-1905242795,#block.jsx-1905242795{overflow-x:hidden;}","#block.jsx-1905242795{position:fixed;top:0;left:0;z-index:-1;}",".clear.jsx-1905242795{clear:both;height:75vh;}"]))}}]),t}(s.a.Component),j=function(e){function t(){return Object(a.default)(this,t),Object(r.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(o.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){return s.a.createElement(c.a,null,s.a.createElement(f.a,null),s.a.createElement(g,{title:"Home Page"}),s.a.createElement(d.a,null))}}]),t}(s.a.Component);t.default=j},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);