(this["webpackJsonpelectron-react"]=this["webpackJsonpelectron-react"]||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},53:function(e,t){},54:function(e,t,n){"use strict";n.r(t);n(20);var a=n(0),c=n.n(a),i=n(8),l=n.n(i),s=(n(25),n(4)),o=n.n(s),r=n(6),u=n(3),b=(n(27),n(16)),d=n(15),j=(n(33),n(1));function v(e){var t=e.name,n=e.setName,a=e.password,c=e.setPassword;return Object(j.jsx)("div",{className:"form-container",children:Object(j.jsx)("form",{children:Object(j.jsxs)("div",{className:"form-inner",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Email:"}),Object(j.jsx)("input",{type:"text",name:"name",id:"name",onChange:function(e){return n(e.target.value)},value:t})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"Password",children:"Password:"}),Object(j.jsx)("input",{type:"Password",name:"Password",id:"Password",onChange:function(e){return c(e.target.value)},value:a})]})]})})})}n(35);function p(e){var t=e.active,n=e.action,a=e.text,c=function(){n()};return"GO"===a?Object(j.jsx)("div",{className:t?"button-container isActivated":"button-container",onClick:function(){return c()},children:Object(j.jsx)("div",{className:"button-text",children:a})}):"STOP"===a?Object(j.jsx)("div",{className:t?"button-container isActivated red":"button-container red",onClick:function(){return c()},children:Object(j.jsx)("div",{className:"button-text",children:a})}):void 0}function m(){return(m=Object(r.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:t.name,password:t.password},e.next=3,fetch(t.login_url,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return a=e.sent,e.next=6,a.json();case 6:if("null"!==(c=e.sent).username&&"null"!==c.access_token){e.next=10;break}return t.setError("Invalid email or password"),e.abrupt("return");case 10:t.setUserId(c.username),t.setAccessToken(c.access_token),document.getElementById("go-button").style.transition="0.2s",document.getElementById("go-button").style.opacity="0",t.setError("Successfully logged in."),setTimeout((function(){document.getElementById("go-button").style.opacity="1",t.setIsRunning(!0)}),500);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=n(7),h=(n(36),n(19));function O(e){var t=e.handleDropdownChange,n={option:function(e,t){return Object(y.a)(Object(y.a)({},e),{},{color:(t.isSelected,"black"),padding:5,fontSize:"14px",fontWeight:"800"})},control:function(e){return Object(y.a)(Object(y.a)({},e),{},{border:0,boxShadow:"none"})},singleValue:function(e,t){var n=t.isDisabled?.5:1;return Object(y.a)(Object(y.a)({},e),{},{opacity:n,transition:"opacity 300ms"})}};return Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"special-label",htmlFor:"Activity",children:"Activity:"}),Object(j.jsx)("div",{className:"select",children:Object(j.jsx)(h.a,{options:[{label:"Badminton Advanced",value:"Badminton Avancerad"},{label:"Badminton Advanced - Matchplay",value:"Badminton Avancerad - Matchspel"},{label:"Badminton Medium",value:"Badminton Medel"},{label:"Badminton Beginner",value:"Badminton Nyb\xf6rjare"},{label:"Basketball - Matchplay",value:"Basket matchspel"},{label:"Basketball Beginner",value:"Basket nyb\xf6rjare"},{label:"BodyBalance\xae",value:"BodyBalance\xae"},{label:"BodyCombat\xae",value:"BodyCombat\xae"},{label:"BodyJam\xae",value:"BodyJam\xae"},{label:"BodyPump\xae",value:"BodyPump\xae"},{label:"Table Tennis Advanced",value:"Bordtennis Avancerad"},{label:"Table Tennis Beginner",value:"Bordtennis Nyb\xf6rjare"},{label:"Contemporary Dance",value:"Contemporary Dance"},{label:"Football - Matchplay",value:"Fotboll Matchspel"},{label:"Fencing Beginner",value:"F\xe4ktning Nyb\xf6rjare"},{label:"Fencing Level 2",value:"F\xe4ktning Steg 2"},{label:"Gymnastics Beginner",value:"Gymnastik - Nyb\xf6rjare"},{label:"Gymnastics - tools",value:"Gymnastik - Redskap"},{label:"HIIT",value:"HIIT"},{label:"Floorball",value:"Innebandy"},{label:"Jazz Advanced",value:"Jazz - Advanced"},{label:"Jazz Beginner",value:"Jazz - Nyb\xf6rjare"},{label:"Les Mills Core\xae",value:"Les Mills Core\xae"},{label:"Pilates",value:"Pilates"},{label:"Roller Skis Beginner",value:"Rullskidor Nyb\xf6rjare"},{label:"Roller Skis Level 2",value:"Rullskidor Steg 2"},{label:"Thaiboxing Beginner",value:"Thaiboxing - beginners"},{label:"Tone\xae",value:"Tone\xae"},{label:"Volleyball Beginner",value:"Volleyboll Nyb\xf6rjare"},{label:"Volleyball Level 2",value:"Volleyboll Steg 2"},{label:"Volleyball Level 3",value:"Volleyboll Steg 3"},{label:"Volleyball Level 4",value:"Volleyboll steg 4"},{label:"Volleyball Level 5",value:"Volleyboll steg 5"},{label:"Yoga",value:"Yoga"},{label:"Zumba",value:"Zumba"}],styles:n,onChange:function(e){return t(e.value)}})})]})}function f(){return(f=Object(r.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={activity_name:t.activity},e.next=3,fetch(t.activity_url,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return a=e.sent,e.next=6,a.json();case 6:if(-1!==(c=e.sent).activity_id){e.next=10;break}return t.setError("There is no such activity one week from today."),e.abrupt("return");case 10:t.setError("Found activity_id."),t.setActivityId(c.activity_id);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(r.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={activity_id:t.activityId,access_token:t.accessToken,username:t.userId},e.next=3,fetch(t.book_url,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return a=e.sent,e.next=6,a.json();case 6:if("201"!==e.sent.status_code){e.next=13;break}return t.setError("Successfully booked slot."),t.setIsRunning(!1),e.abrupt("return");case 13:t.setError("Failed attempt to book. Attempt number: "+t.attemptNumber),t.setAttemptNumber(t.attemptNumber+1);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),l=Object(u.a)(i,2),s=l[0],y=l[1],h=Object(a.useState)(""),x=Object(u.a)(h,2),k=x[0],B=x[1],N=Object(a.useState)(""),S=Object(u.a)(N,2),w=S[0],T=S[1],I=Object(a.useState)(""),A=Object(u.a)(I,2),F=A[0],C=A[1],P=Object(a.useState)(""),_=Object(u.a)(P,2),E=_[0],z=_[1],J=Object(a.useState)(!1),V=Object(u.a)(J,2),L=V[0],M=V[1],R=Object(a.useState)(1),G=Object(u.a)(R,2),D=G[0],H=G[1],U=Object(a.useState)("No error yet."),Y=Object(u.a)(U,2),Z=Y[0],W=Y[1],q=Object(a.useState)(!1),K=Object(u.a)(q,2),Q=(K[0],K[1],Object(a.useState)(!0)),X=Object(u.a)(Q,2),$=(X[0],X[1],Object(a.useState)(!1)),ee=Object(u.a)($,2),te=ee[0],ne=ee[1],ae={login_url:"https://ssifautobooking.herokuapp.com/login",activity_url:"https://ssifautobooking.herokuapp.com/activity",book_url:"https://ssifautobooking.herokuapp.com/book",activity:F,activityId:E,accessToken:k,attemptNumber:D,userId:w,name:n,password:s,isRunning:L,setAttemptNumber:H,setUserId:T,setAccessToken:B,setError:W,setActivityId:z,setIsRunning:M},ce=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W("Fetching activity_id.");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){if("Fetching activity_id."===Z){if(""===F)return void W("wtf select activity");!function(e){f.apply(this,arguments)}(ae)}"Found activity_id."===Z&&setTimeout((function(){W("Attempting to login.")}),500),"Attempting to login."===Z&&function(e){m.apply(this,arguments)}(ae)}),[Z]),Object(a.useEffect)((function(){L&&(!function(e){g.apply(this,arguments)}(ae),setTimeout((function(){ne(!te)}),12e3))}),[L,te,ne]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{className:"outer-container",children:Object(j.jsxs)("div",{className:"inner-container",children:[Object(j.jsx)("div",{className:"credits",children:"ssif-auto-booking"}),Object(j.jsx)("div",{children:Z}),L?Object(j.jsxs)("div",{className:"cog-wheel",children:[Object(j.jsx)(d.a,{icon:b.a,size:"6x",spin:!0})," "]}):Object(j.jsxs)("div",{className:"cog-wheel",children:[Object(j.jsx)(d.a,{icon:b.a,size:"6x"})," "]}),Object(j.jsx)("div",{children:"First, select an activity and enter your SSIF email and password. Then, click GO to start attempting to book the activity one week in advance. The program will stop after a successful attempt."}),Object(j.jsx)(O,{handleDropdownChange:function(e){C(e)}}),Object(j.jsx)(v,{name:n,setName:c,password:s,setPassword:y}),Object(j.jsx)("div",{children:L?Object(j.jsx)("div",{id:"stop-button",children:Object(j.jsx)(p,{active:!0,action:function(){document.getElementById("stop-button").style.transition="0.2s",document.getElementById("stop-button").style.opacity="0",setTimeout((function(){document.getElementById("stop-button").style.opacity="1",M(!1),W("No error yet."),H(1)}),100)},text:"STOP"})}):Object(j.jsx)("div",{id:"go-button",children:""!==n&&""!==s?Object(j.jsx)(p,{active:!0,action:ce,text:"GO"}):Object(j.jsx)(p,{active:!1,action:ce,text:"GO"})})})]})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),i(e),l(e)}))};n(53);l.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),k()}},[[54,1,2]]]);
//# sourceMappingURL=main.1df10f53.chunk.js.map