(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{24:function(e,t,a){e.exports=a(46)},34:function(e,t,a){e.exports=a.p+"static/media/logo.bd90fca8.png"},35:function(e,t,a){e.exports=a.p+"static/media/video-placeholder.a622fc5d.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},39:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},40:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},41:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},42:function(e,t,a){e.exports=a.p+"static/media/reactionrole.749f6510.png"},43:function(e,t,a){e.exports=a.p+"static/media/rolemessages.79916dbc.png"},44:function(e,t,a){e.exports=a.p+"static/media/rolesets.e6876e9d.gif"},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),s=a(21),n=a.n(s),l=a(10),o=a(6),c=a(2),m=function(e){var t=e.component,a=e.layout,r=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return i.a.createElement(i.a.Fragment,null,e.children)}:a,i.a.createElement(l.a,Object.assign({},r,{render:function(e){return i.a.createElement(a,null,i.a.createElement(t,e))}}))},d=a(9),v=a(3),u=a.n(v),h=a(17),p=i.a.forwardRef((function(e,t){var a=Object(r.useState)(window.innerHeight),s=Object(d.a)(a,2),n=s[0],l=s[1],o=Object(r.useState)([]),c=Object(d.a)(o,2),m=c[0],v=c[1],u=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!u())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),r=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=n-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,r)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(r.useImperativeHandle)(t,(function(){return{init:function(){v(document.querySelectorAll("[class*=reveal-]"))}}})),Object(r.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(u()||(window.addEventListener("scroll",b),window.addEventListener("resize",g)),p())}),[m]);var f=function(){u()&&(window.removeEventListener("scroll",b),window.removeEventListener("resize",g))},b=Object(h.throttle)((function(){f(),p()}),30),g=Object(h.throttle)((function(){l(window.innerHeight)}),30);return Object(r.useEffect)((function(){f(),p()}),[n]),i.a.createElement(i.a.Fragment,null,e.children())}));p.propTypes={children:u.a.func.isRequired};var f=p,b=a(13),g=a(1),E=a.n(g),N=a(12),y=function(e){var t=e.className,a=e.src,s=e.width,n=e.height,l=e.alt,o=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(r.useState)(!1),v=Object(d.a)(m,2),u=v[0],h=v[1],p=Object(r.useRef)(null);Object(r.useEffect)((function(){f(p.current)}),[]);var f=function(e){var t,a,r=document.createElement("img");u||(e.style.display="none",e.before(r),r.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),r.width=e.getAttribute("width"),r.height=e.getAttribute("height"),r.style.opacity="0",e.className&&r.classList.add(e.className),r.remove(),e.style.display="")};return i.a.createElement("img",Object.assign({},o,{ref:p,className:t,src:a,width:s,height:n,alt:l,onLoad:function(){h(!0)}}))};y.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var w=y,O=function(e){var t=e.className,r=Object(c.a)(e,["className"]),s=E()("brand",t);return i.a.createElement("div",Object.assign({},r,{className:s}),i.a.createElement("h1",{className:"m-0"},i.a.createElement(N.a,{to:"/"},i.a.createElement(w,{src:a(34),alt:"Open",width:32,height:32}))))},D=function(e){var t=e.className,a=e.navPosition,s=e.hideNav,n=e.hideSignin,l=e.bottomOuterDivider,o=e.bottomDivider,m=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),v=Object(r.useState)(!1),u=Object(d.a)(v,2),h=u[0],p=u[1],f=Object(r.useRef)(null),b=Object(r.useRef)(null);Object(r.useEffect)((function(){return h&&g(),document.addEventListener("keydown",y),document.addEventListener("click",w),function(){document.removeEventListener("keydown",y),document.addEventListener("click",w),N()}}));var g=function(){document.body.classList.add("off-nav-is-active"),f.current.style.maxHeight=f.current.scrollHeight+"px",p(!0)},N=function(){document.body.classList.remove("off-nav-is-active"),f.current&&(f.current.style.maxHeight=null),p(!1)},y=function(e){h&&27===e.keyCode&&N()},w=function(e){f.current&&h&&!f.current.contains(e.target)&&e.target!==b.current&&N()},D=E()("site-header",l&&"has-bottom-divider",t);return i.a.createElement("header",Object.assign({},m,{className:D}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:E()("site-header-inner",o&&"has-bottom-divider")},i.a.createElement(O,null),!s&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{ref:b,className:"header-nav-toggle",onClick:h?N:g},i.a.createElement("span",{className:"screen-reader"},"Menu"),i.a.createElement("span",{className:"hamburger"},i.a.createElement("span",{className:"hamburger-inner"}))),i.a.createElement("nav",{ref:f,className:E()("header-nav",h&&"is-active")},i.a.createElement("div",{className:"header-nav-inner"},i.a.createElement("ul",{className:E()("list-reset text-xs",a&&"header-nav-".concat(a))},i.a.createElement("li",null,i.a.createElement("a",{href:"https://gamer.mod.land/docs/",onClick:N},"Guides"))),!n&&i.a.createElement("ul",{className:"list-reset header-nav-right"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://gamer.mod.land/docs/vip.html",className:"button button-primary button-wide-mobile button-sm",onClick:N},"Premium/VIP")))))))))};D.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var j=D,x=function(e){var t=e.className,a=Object(c.a)(e,["className"]),r=E()("footer-nav",t);return i.a.createElement("nav",Object.assign({},a,{className:r}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://gamer.mod.land"},"Guides")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://gamer.mod.land/docs/policy.html"},"Privacy Policy")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://gamer.mod.land/docs/faq.html"},"FAQ's")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://gamer.mod.land/docs/vip.html"},"VIP"))))},C=function(e){var t=e.className,a=e.topOuterDivider,r=e.topDivider,s=Object(c.a)(e,["className","topOuterDivider","topDivider"]),n=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return i.a.createElement("footer",Object.assign({},s,{className:n}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:E()("site-footer-inner",r&&"has-top-divider")},i.a.createElement("div",{className:"footer-top space-between text-xxs"},i.a.createElement(O,null)),i.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},i.a.createElement(x,null),i.a.createElement("div",{className:"footer-copyright"},"Made by ",i.a.createElement("a",{href:"https://discord.gg/J4NqJ72"},"Dligence"),". All rights reserved")))))};C.defaultProps={topOuterDivider:!1,topDivider:!1};var k=C,L=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{navPosition:"right",className:"reveal-from-bottom"}),i.a.createElement("main",{className:"site-content"},t),i.a.createElement(k,null))},S=a(5),A={types:{topOuterDivider:u.a.bool,bottomOuterDivider:u.a.bool,topDivider:u.a.bool,bottomDivider:u.a.bool,hasBgColor:u.a.bool,invertColor:u.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},F={types:Object(S.a)({},A.types),defaults:Object(S.a)({},A.defaults)},P={types:Object(S.a)({},A.types,{invertMobile:u.a.bool,invertDesktop:u.a.bool,alignTop:u.a.bool,imageFill:u.a.bool}),defaults:Object(S.a)({},A.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},T={types:Object(S.a)({},A.types,{pushLeft:u.a.bool}),defaults:Object(S.a)({},A.defaults,{pushLeft:!1})},B=function(e){var t=e.className,a=Object(c.a)(e,["className"]),r=E()("button-group",t);return i.a.createElement("div",Object.assign({},a,{className:r}))},R=function(e){var t=e.className,a=e.tag,r=e.color,s=e.size,n=e.loading,l=e.wide,o=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),v=E()("button",r&&"button-".concat(r),s&&"button-".concat(s),n&&"is-loading",l&&"button-block",o&&"button-wide-mobile",t),u=a;return i.a.createElement(u,Object.assign({},d,{className:v,disabled:m}))};R.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var H=R,M=function(e){var t=e.className,a=e.children,s=e.handleClose,n=e.show,l=e.closeHidden,o=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(r.useEffect)((function(){return document.addEventListener("keydown",u),document.addEventListener("click",h),function(){document.removeEventListener("keydown",u),document.removeEventListener("click",h)}})),Object(r.useEffect)((function(){v()}),[d.show]);var v=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},u=function(e){27===e.keyCode&&s(e)},h=function(e){e.stopPropagation()},p=E()("modal",n&&"is-active",o&&"modal-video",t);return i.a.createElement(i.a.Fragment,null,n&&i.a.createElement("div",Object.assign({},d,{className:p,onClick:s}),i.a.createElement("div",{className:"modal-inner",onClick:h},o?i.a.createElement("div",{className:"responsive-video"},"iframe"===m?i.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):i.a.createElement("video",{"v-else":!0,controls:!0,src:o})):i.a.createElement(i.a.Fragment,null,!l&&i.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:s}),i.a.createElement("div",{className:"modal-content"},a)))))};M.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var z=M,G=Object(S.a)({},F.defaults),J=function(e){var t=e.className,s=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,o=e.bottomDivider,m=e.hasBgColor,v=e.invertColor,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),h=Object(r.useState)(!1),p=Object(d.a)(h,2),f=p[0],b=p[1],g=E()("hero section center-content",s&&"has-top-divider",n&&"has-bottom-divider",m&&"has-bg-color",v&&"invert-color",t),N=E()("hero-inner section-inner",l&&"has-top-divider",o&&"has-bottom-divider");return i.a.createElement("section",Object.assign({},u,{className:g}),i.a.createElement("div",{className:"container-sm"},i.a.createElement("div",{className:N},i.a.createElement("div",{className:"hero-content"},i.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Designed For ",i.a.createElement("span",{className:"text-color-primary"},"Official Gaming Discord Servers")),i.a.createElement("div",{className:"container-xs"},i.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"The Discord bot for every gamer! Games, moderation, leveling, alerts, and much more!"),i.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},i.a.createElement(B,null,i.a.createElement(H,{tag:"a",color:"primary",wideMobile:!0,href:"https://discord.gg/J4NqJ72"},"Join Discord"),i.a.createElement(H,{tag:"a",color:"dark",wideMobile:!0,href:"https://discordapp.com/oauth2/authorize?client_id=635877338462027783&scope=bot+applications.commands&permissions=2111302911"},"Invite Bot"))))),i.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},i.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),b(!0)}},i.a.createElement(w,{className:"has-shadow",src:a(35),alt:"Hero",width:896,height:504}))),i.a.createElement(z,{id:"video-modal",show:f,handleClose:function(e){e.preventDefault(),b(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};J.defaultProps=G;var _=J,q=function(e){var t=e.className,a=e.data,r=e.children,s=e.tag,n=Object(c.a)(e,["className","data","children","tag"]),l=E()("section-header",t),o=s;return i.a.createElement(i.a.Fragment,null,(a.title||a.paragraph)&&i.a.createElement("div",Object.assign({},n,{className:l}),i.a.createElement("div",{className:"container-xs"},r,a.title&&i.a.createElement(o,{className:E()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&i.a.createElement("p",{className:"m-0"},a.paragraph))))};q.defaultProps={children:null,tag:"h2"};var I=q,U=Object(S.a)({},T.defaults),W=function(e){var t=e.className,r=e.topOuterDivider,s=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=E()("features-tiles section",r&&"has-top-divider",s&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),h=E()("features-tiles-inner section-inner pt-0",n&&"has-top-divider",l&&"has-bottom-divider"),p=E()("tiles-wrap center-content",d&&"push-left");return i.a.createElement("section",Object.assign({},v,{className:u}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:h},i.a.createElement(I,{data:{title:"What Gamer Can Do For You!",paragraph:"Gamer is one of the most advanced bots on Discord. It was designed specifically for official gaming servers. But it is built in a way that it can be used by any server!"},className:"center-content"}),i.a.createElement("div",{className:p},i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(w,{src:a(36),alt:"Features tile icon 01",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Idle Game & Counting Game & Free Nitro"),i.a.createElement("p",{className:"m-0 text-sm"},"An amazingly entertaining idle game to keep your server constantly active and giving your users a chance to win Discord Nitro!"),i.a.createElement("img",{src:"https://i.imgur.com/54JXspA.png",alt:""})))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(w,{src:a(37),alt:"Features tile icon 02",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Leveling, Missions/Quests, XP!"),i.a.createElement("p",{className:"m-0 text-sm"},"The most beautiful and extremely customizable profile/rank cards on Discord! Give or take roles when users gain or lose levels. Remove XP automatically for inactivity and reward XP for activity!"),i.a.createElement("img",{src:"https://i.imgur.com/3MTeIXH.png",alt:""}),i.a.createElement("img",{src:"https://i.imgur.com/mznXR6k.png",alt:""})))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(w,{src:a(38),alt:"Features tile icon 03",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Looking For Group / Events"),i.a.createElement("p",{className:"m-0 text-sm"},"Organize and schedule a gathering whether it be in real life, or on the server. It will provide you with a method of sending out pertinent information to those you want, while allowing users the ability to RSVP to the event to let you know they\u2019ll be there (or that they can\u2019t make it)."),i.a.createElement("img",{src:"https://i.imgur.com/iKaUFKU.gif",alt:""})))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(w,{src:a(39),alt:"Features tile icon 04",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Subscribe To Alerts You Care About!"),i.a.createElement("p",{className:"m-0 text-sm"},"Don't you hate getting @ mentions for posts that don't matter? Using Gamers advanced alerts system you can filter them to be exactly what you want!"),i.a.createElement("img",{src:"https://i.imgur.com/gSAJCUL.png",alt:""}),i.a.createElement("img",{src:"https://i.imgur.com/NzlRwVY.png",alt:""})))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(w,{src:a(40),alt:"Features tile icon 05",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Feedback / Bug Reports Feature"),i.a.createElement("p",{className:"m-0 text-sm"},"Collect suggestions or bug reports from your users. A flexible and customizable feedback feature that provides the best experience for not just developers but users as well for sending feedback."),i.a.createElement("img",{src:"https://i.imgur.com/Q0dNsCc.png",alt:""})))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(w,{src:a(41),alt:"Features tile icon 06",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Best Support System Ever!"),i.a.createElement("p",{className:"m-0 text-sm"},"Allow users to create private tickets right on Discord! Create a list of questions users must answer to send a ticket! And so much more!!! Why waste money on third party support who don't really understand your game, when you can just have your most helpful players like your moderators help the players! They understand the players needs and concerns better than anyone else!"),i.a.createElement("img",{src:"https://i.imgur.com/VPCA4oz.png",alt:""}))))))))};W.defaultProps=U;var Y=W,X=Object(S.a)({},P.defaults),V=function(e){var t=e.className,r=e.topOuterDivider,s=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,v=e.invertDesktop,u=e.alignTop,h=e.imageFill,p=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),f=E()("features-split section",r&&"has-top-divider",s&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),b=E()("features-split-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider"),g=E()("split-wrap",d&&"invert-mobile",v&&"invert-desktop",u&&"align-top");return i.a.createElement("section",Object.assign({},p,{className:f}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:b},i.a.createElement(I,{data:{title:"Bot that just works!",paragraph:"Each and every feature in Gamer is designed as a separate piece. You can combine multiple pieces together to create amazing possibilities!"},className:"center-content"}),i.a.createElement("div",{className:g},i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast!"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Reaction Roles"),i.a.createElement("p",{className:"m-0"},"Reaction roles are a fun, easy and visual way for users to assign roles to themselves without having to go through the effort of having to type .give role. Once setup, users can now join your server and give themself the right roles.")),i.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(w,{src:a(42),alt:"Features split 01",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Send A @alert When Someone Changes Roles"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Role Messages"),i.a.createElement("p",{className:"m-0"},"Setup customizable messages to be sent when a user gains or loses a role! Role messages can be used as welcome or goodbye messages for specific roles/groups on your server. For example, you can use this to give players a specific code to enter for their specific region role. Mix this with your XP system to alert users that are inactive! And so much more!")),i.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(w,{src:a(43),alt:"Features split 02",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"A Role Set For Everyone!"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Automatically Manage Your Roles With Role Sets"),i.a.createElement("p",{className:"m-0"},"- Use a Unique role set to make sure users can only have one role in that set."),i.a.createElement("p",{className:"m-0"},"- Use the Grouped role sets to assign a Player role whenever a user gains a role from the reaction role!"),i.a.createElement("p",{className:"m-0"},"- Use the Default role sets to automatically assign a role when a user does not have any role in that set."),i.a.createElement("p",{className:"m-0"},"- Use the Required role sets to make sure the user has the required role in order to gain another role.")),i.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(w,{src:a(44),alt:"Features split 03",width:528,height:396})))))))};V.defaultProps=X;var K=V,Q=Object(S.a)({},T.defaults),$=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,s=e.topDivider,n=e.bottomDivider,l=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=E()("testimonial section",a&&"has-top-divider",r&&"has-bottom-divider",l&&"has-bg-color",o&&"invert-color",t),u=E()("testimonial-inner section-inner",s&&"has-top-divider",n&&"has-bottom-divider"),h=E()("tiles-wrap",m&&"push-left");return i.a.createElement("section",Object.assign({},d,{className:v}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:u},i.a.createElement(I,{data:{title:"Testimonials",paragraph:"Here's what our users have to say about Gamer! Check out their server's for yourself to get a view on how they make use of Gamer to create an amazing community!"},className:"center-content"}),i.a.createElement("div",{className:h},i.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"Testimonial here")),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Server Name Here"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"Admin Name & Discord Link Here To Your Server"))))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"Testimonial here")),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Server Name Here"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"Admin Name & Discord Link Here To Your Server"))))),i.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"Testimonial here")),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Server Name Here"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"Admin Name & Discord Link Here To Your Server")))))))))};$.defaultProps=Q;var Z=$,ee=Object(S.a)({},F.defaults,{split:!1}),te=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,s=e.topDivider,n=e.bottomDivider,l=e.hasBgColor,o=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),v=E()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",r&&"has-bottom-divider",l&&"has-bg-color",o&&"invert-color",t),u=E()("cta-inner section-inner",s&&"has-top-divider",n&&"has-bottom-divider",m&&"cta-split");return i.a.createElement("section",Object.assign({},d,{className:v}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:u},i.a.createElement("div",{className:"cta-slogan"},i.a.createElement("h3",{className:"m-0"},"Join Discord for more info!"),i.a.createElement("h3",{className:"m-0"},"Get The Bot Today!"),i.a.createElement("p",{className:"m-0"},"10,000+ servers!"),i.a.createElement("p",{className:"m-0"},"2,000,000+ users!")),i.a.createElement(B,{className:"cta-action"},i.a.createElement(H,{tag:"a",color:"primary",wideMobile:!0,href:"https://discord.gg/J4NqJ72"},"Join Discord!"),i.a.createElement(H,{tag:"a",color:"dark",wideMobile:!0,href:"https://discordapp.com/oauth2/authorize?client_id=635877338462027783&scope=bot+applications.commands&permissions=2111302911"},"Invite The Bot")))))};te.defaultProps=ee;var ae=te,re=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(_,{className:"illustration-section-01"}),i.a.createElement(Y,null),i.a.createElement(K,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),i.a.createElement(Z,{topDivider:!0}),i.a.createElement(ae,{split:!0}))};b.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var ie=function(){var e=Object(r.useRef)(),t=Object(l.f)();return Object(r.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){b.a.set({page:e}),b.a.pageview(e)}(a)}),[t]),i.a.createElement(f,{ref:e,children:function(){return i.a.createElement(l.c,null,i.a.createElement(m,{exact:!0,path:"/",component:re,layout:L}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(45);var se=Object(o.a)();n.a.render(i.a.createElement(l.b,{history:se},i.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.7891fa14.chunk.js.map