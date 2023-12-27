"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[602],{8615:function(n,e,t){t.d(e,{Z:function(){return x}});var r,a,o,u=t(7689),i=t(168),c=t(5706),s=t(1087),p=c.Z.ul(r||(r=(0,i.Z)(["\n  list-style-type: none;\n"]))),f=c.Z.li(a||(a=(0,i.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),l=(0,c.Z)(s.rU)(o||(o=(0,i.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),d=t(184),x=function(n){var e=n.films,t=(0,u.TH)();return(0,d.jsx)(p,{children:e.map((function(n){return(0,d.jsx)(f,{children:(0,d.jsx)(l,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})}},5602:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,o,u=t(5861),i=t(9439),c=t(4687),s=t.n(c),p=t(2791),f=t(8794),l=t(8615),d=t(168),x=t(5706),h=x.Z.form(r||(r=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n"]))),v=x.Z.input(a||(a=(0,d.Z)(["\n  padding: 12px 14px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  margin-right: 10px;\n  border-radius: 4px 8px;\n  outline: none;\n\n  &:hover {\n    color: tomato;\n    border: 3px solid tomato;\n  }\n"]))),m=x.Z.button(o||(o=(0,d.Z)(["\n  padding: 12px 12px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  border-radius: 4px 8px;\n\n  &:hover {\n    color: tomato;\n    border: 3px solid tomato;\n  }\n"]))),g=t(1087),Z=t(184),b=function(n){var e=n.searchMovies,t=(0,g.lr)(),r=(0,i.Z)(t,1)[0],a=(0,p.useState)(r.get("query")),o=(0,i.Z)(a,2),u=o[0],c=o[1];return(0,Z.jsxs)(h,{onSubmit:function(n){n.preventDefault(),e(u.toLowerCase())},children:[(0,Z.jsx)(v,{type:"text",name:"query",autoFocus:!0,value:u,onChange:function(n){c(n.target.value)}}),(0,Z.jsx)(m,{type:"submit",children:"Search"})]})},w=t(5975),y=function(){var n=(0,p.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(!1),o=(0,i.Z)(a,2),c=o[0],d=o[1],x=(0,p.useState)(!1),h=(0,i.Z)(x,2),v=h[0],m=h[1],y=(0,g.lr)(),k=(0,i.Z)(y,2),j=k[0],S=k[1];(0,p.useEffect)((function(){var n=function(){var n=(0,u.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=j.get("query")){n.next=3;break}return n.abrupt("return");case 3:return n.prev=3,d(!0),n.next=7,(0,w.Ml)(e);case 7:t=n.sent,r(t),m(0===t.length),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(3),console.log(n.t0);case 15:return n.prev=15,d(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[3,12,15,18]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){}}),[j]);return(0,Z.jsxs)("main",{children:[(0,Z.jsx)(b,{searchMovies:function(n){S({query:n})}}),c&&(0,Z.jsx)(f.Z,{}),v&&(0,Z.jsx)("p",{children:"There is no movie with this request. Please try again."}),t&&(0,Z.jsx)(l.Z,{films:t})]})}},5975:function(n,e,t){t.d(e,{Bt:function(){return l},Ml:function(){return s},Tg:function(){return c},Y5:function(){return p},wL:function(){return f}});var r=t(5861),a=t(4687),o=t.n(a),u=t(5294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="e9462daacd1f784977b9edb52a3fe6ae",c=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=602.641c47c0.chunk.js.map