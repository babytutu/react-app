(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[558],{1530:function(t,e,n){Promise.resolve().then(n.bind(n,5906))},5906:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});var c=n(9268),i=n(6006),r=n(2694),a=n(329);let l=t=>{let e=!1;try{let n=document.createElement("input");n.value=t,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),e=!0}catch(t){console.log(t)}return e};function o(){let[t,e]=(0,i.useState)([]),[n,o]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{o(!0),fetch("https://87tetwnrqe.hk.aircode.run/xml2js",{body:JSON.stringify({url:"https://www.digit77.com/categories/macapps/index.xml"}),method:"POST",headers:{"content-type":"application/json; charset=utf-8"}}).then(t=>t.json()).then(t=>{let n=t.data.rss.channel.item.map(t=>({id:t.guid,title:t.title,content:t.description.replace(/\n/g,"").replace(/.*欢迎每日关注更新内容/,""),extra:new Date(t.pubDate.replace(" &#43;0800","")).toLocaleString(),link:t.link,avatar:t.description.replace(/\n/g,"").replace(/.*src="(https.*?)".*/,"$1")}));e(n),o(!1)}).catch(()=>{e([]),o(!1)})},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.G,{loading:n,isEmpty:0===t.length}),t.length>0&&(0,c.jsx)(r.aV,{children:t.map(t=>(0,c.jsx)(r.aV.Item,{title:t.extra,onClick:()=>{r.Vq.confirm({title:t.title,content:t.content,confirmText:"复制下载地址",cancelText:"关闭",onConfirm:()=>{let e=l(t.link);e&&r.FN.show("复制成功")}})},prefix:(0,c.jsx)(r.Ee,{src:t.avatar,alt:t.title,fit:"cover",width:50,height:50}),children:t.title},t.id))})]})}},329:function(t,e,n){"use strict";n.d(e,{G:function(){return r}});var c=n(9268),i=n(2694);function r(t){let{loading:e,isEmpty:n}=t;return(0,c.jsxs)(c.Fragment,{children:[e&&(0,c.jsx)(i.k_,{}),!e&&n&&(0,c.jsx)(i.iE,{status:"empty"})]})}}},function(t){t.O(0,[112,253,769,744],function(){return t(t.s=1530)}),_N_E=t.O()}]);