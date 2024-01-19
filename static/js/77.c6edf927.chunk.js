"use strict";(self.webpackChunkreact_movie_finder=self.webpackChunkreact_movie_finder||[]).push([[77],{1526:function(e,n,t){t.d(n,{Z:function(){return m}});var r,i,a,s=t(168),c=t(6444),o=c.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: ","px;\n"])),(function(e){return e.theme.space[5]})),u=c.ZP.p(i||(i=(0,s.Z)(["\n  text-align: center;\n  font-weight: ",";\n  font-size: 24px;\n"])),(function(e){return e.theme.fontWeights.bold})),p=c.ZP.img(a||(a=(0,s.Z)(["\n  max-width: 200px;\n"]))),d=t(6316),f=t(9057),l=t(7001),x=t(184),h={emptyQuery:{text:"Type to search something",image:d},error:{text:"Something went wrong. Try again later",image:f},noResults:{text:"Nothing to see here",image:l}},m=function(e){var n=e.type,t=h[n];return(0,x.jsxs)(o,{children:[(0,x.jsx)(u,{children:t.text}),(0,x.jsx)(p,{src:t.image,alt:t.text})]})}},2178:function(e,n,t){t.d(n,{Z:function(){return P}});var r,i,a,s,c,o,u=t(168),p=t(6444),d=p.ZP.ul(r||(r=(0,u.Z)(["\n  padding: ","px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  grid-gap: ","px;\n  list-style: none;\n"])),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[4]})),f=p.ZP.li(i||(i=(0,u.Z)(["\n  box-shadow: ",";\n  border-radius: ",";\n"])),(function(e){return e.theme.shadows[2]}),(function(e){return e.theme.radii.normal})),l=t(6731),x=(0,p.ZP)(l.OL)(a||(a=(0,u.Z)(["\n  padding: ","px;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: ","px;\n  text-decoration: none;\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[4]})),h=p.ZP.img(s||(s=(0,u.Z)(["\n  width: 100px;\n  height: 150px;\n  object-fit: cover;\n  border-radius: ",";\n"])),(function(e){return e.theme.radii.normal})),m=p.ZP.h2(c||(c=(0,u.Z)(["\n  font-size: ",";\n  font-style: normal;\n"])),(function(e){return e.theme.fontSizes.m})),g=p.ZP.div(o||(o=(0,u.Z)(["\n  font-size: ",";\n  font-style: italic;\n  color: black;\n\n  > p {\n    margin: ","px 0;\n  }\n"])),(function(e){return e.theme.fontSizes.xs}),(function(e){return e.theme.space[3]})),Z=t(8088),v=t(4345),y=t(7689),j=t(3708),w=t(184),b=function(e){var n=e.id,t=e.posterPath,r=e.title,i=e.release,a=e.genresIds,s=(0,v.F)().getGenresByIds,c=(0,y.TH)(),o=t?"".concat(j.yA).concat(t):Z,u=new Date(i).getFullYear(),p=s(a);return(0,w.jsxs)(x,{to:"/movies/".concat(n),state:{from:c},children:[(0,w.jsx)(h,{src:o,alt:r}),(0,w.jsxs)(g,{children:[(0,w.jsx)(m,{children:r}),!isNaN(u)&&(0,w.jsxs)("p",{children:["Year: ",u]}),""!==p&&(0,w.jsxs)("p",{children:["Genres: ",p]})]})]})},P=function(e){var n=e.items;return(0,w.jsx)(d,{children:n.map((function(e){return(0,w.jsx)(f,{children:(0,w.jsx)(b,{id:e.id,posterPath:e.poster_path,title:e.original_title,release:e.release_date,genresIds:e.genre_ids})},e.id)}))})}},2077:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r,i=t(5861),a=t(885),s=t(7757),c=t.n(s),o=t(168),u=t(6444).ZP.h1(r||(r=(0,o.Z)(["\n  text-align: center;\n"]))),p=t(7953),d=t(3708),f=function(){var e=(0,i.Z)(c().mark((function e(){var n,t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{page:d.oe.page}},t="".concat(d.fp.TRENDING,"/").concat(d.oe.mediaType,"/").concat(d.oe.timeWindow),e.prev=2,e.next=5,p.Z.get(t,n);case 5:return r=e.sent,e.abrupt("return",r.data);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),l=t(2791),x=t(2178),h=t(7013),m=t(1526),g=t(184),Z=function(){var e=(0,l.useState)([]),n=(0,a.Z)(e,2),t=n[0],r=n[1],s=(0,l.useState)(!1),o=(0,a.Z)(s,2),p=o[0],Z=o[1],v=(0,l.useState)(null),y=(0,a.Z)(v,2),j=y[0],w=y[1];return(0,l.useEffect)((function(){w(null),Z(!0),(0,i.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:n=e.sent,r(n.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),w(e.t0);case 10:return e.prev=10,Z(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()}),[]),(0,g.jsxs)("section",{children:[(0,g.jsx)(u,{children:"Trending today"}),t.length>0&&(0,g.jsx)(x.Z,{items:t}),p&&(0,g.jsx)(h.Z,{}),!p&&j&&(0,g.jsx)(m.Z,{type:d.oK.ERROR})]})}},6316:function(e,n,t){e.exports=t.p+"static/media/empty-query.cf923ecdacb47d96d5ff.png"},9057:function(e,n,t){e.exports=t.p+"static/media/error.5496863544fb5a519bcf.png"},8088:function(e,n,t){e.exports=t.p+"static/media/image-not-found.0ee629d08e998d7c4c0d.png"},7001:function(e,n,t){e.exports=t.p+"static/media/no-results.d438399ff68428d0774c.png"}}]);
//# sourceMappingURL=77.c6edf927.chunk.js.map