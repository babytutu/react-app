(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[186],{7463:function(t,e,n){Promise.resolve().then(n.bind(n,8437))},8437:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var i=n(9268),r=n(6006),s=n(292),a=n(329);function c(t){let{params:e}=t,[n,c]=(0,r.useState)([]),[u,o]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{o(!0),fetch("https://fakerapi.it/api/v1/".concat(e.name,"?_quantity=20&_characters=50")).then(t=>t.json()).then(t=>{let e=t.data.map(t=>({title:t.title||t.city||t.name||t.username,content:t.author||t.streetName||t.email||t.description,more:t.published||t.zipcode||t.phone||t.price||t.ip,id:t.id}));c(e),o(!1)}).catch(()=>{c([]),o(!1)})},[e.name]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.G,{loading:u,isEmpty:0===n.length}),n.length>0&&(0,i.jsx)(s.aV,{children:n.map(t=>(0,i.jsx)(s.aV.Item,{description:t.content,title:t.more,children:t.title},t.id))})]})}},329:function(t,e,n){"use strict";n.d(e,{G:function(){return s}});var i=n(9268),r=n(292);function s(t){let{loading:e,isEmpty:n}=t;return(0,i.jsxs)(i.Fragment,{children:[e&&(0,i.jsx)(r.k_,{}),!e&&n&&(0,i.jsx)(r.iE,{status:"empty"})]})}}},function(t){t.O(0,[133,253,769,744],function(){return t(t.s=7463)}),_N_E=t.O()}]);