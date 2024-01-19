"use strict";(self.webpackChunkreact_movie_finder=self.webpackChunkreact_movie_finder||[]).push([[192],{6192:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,a,i,c,s,o=t(5861),u=t(885),f=t(7757),p=t.n(f),l=t(2791),d=t(7953),h=t(3708),x=function(){var n=(0,o.Z)(p().mark((function n(e){var t,r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(h.fp.MOVIE,"/").concat(e,"/").concat(h.fp.CREDITS),n.prev=1,n.next=4,d.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",null);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),m=t(7689),g=t(168),v=t(6444),Z=v.ZP.ul(r||(r=(0,g.Z)(["\n  padding: ","px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: ","px;\n  list-style: none;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]})),y=t(8088),j=v.ZP.div(a||(a=(0,g.Z)(["\n  padding: ","px;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: ","px;\n  box-shadow: ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.shadows[2]}),(function(n){return n.theme.radii.normal})),w=v.ZP.img(i||(i=(0,g.Z)(["\n  width: 100px;\n  height: 150px;\n  object-fit: cover;\n  border-radius: ",";\n"])),(function(n){return n.theme.radii.normal})),b=v.ZP.h2(c||(c=(0,g.Z)(["\n  font-size: ",";\n  font-style: normal;\n"])),(function(n){return n.theme.fontSizes.m})),P=v.ZP.div(s||(s=(0,g.Z)(["\n  font-size: ",";\n  font-style: italic;\n  color: black;\n"])),(function(n){return n.theme.fontSizes.xs})),S=t(184),E=function(n){var e=n.profilePath,t=n.name,r=n.character,a=e?"".concat(h.yA).concat(e):y;return(0,S.jsxs)(j,{children:[(0,S.jsx)(w,{src:a,alt:t}),(0,S.jsxs)(P,{children:[(0,S.jsx)(b,{children:t}),(0,S.jsxs)("p",{children:["Character: ",r]})]})]})},R=t(7092),k=t(7013),_=t(1526),z=function(){var n=(0,m.UO)().movieId,e=(0,l.useState)([]),t=(0,u.Z)(e,2),r=t[0],a=t[1],i=(0,l.useState)(!1),c=(0,u.Z)(i,2),s=c[0],f=c[1],d=(0,l.useState)(null),h=(0,u.Z)(d,2),g=h[0],v=h[1];(0,l.useEffect)((function(){return f(!0),(0,o.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(n);case 3:t=e.sent,a(t.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v(e.t0);case 10:return e.prev=10,f(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))(),function(){v(null),a([])}}),[n]);var y={hasError:g,hasResults:r.length>0},j=(0,R.Z)(y);return(0,S.jsxs)("div",{children:[r.length>0&&(0,S.jsx)(Z,{children:r.map((function(n){return(0,S.jsx)("li",{children:(0,S.jsx)(E,{profilePath:n.profile_path,name:n.name,character:n.character})},n.id)}))}),s&&(0,S.jsx)(k.Z,{}),!s&&j&&(0,S.jsx)(_.Z,{type:j})]})}},1526:function(n,e,t){t.d(e,{Z:function(){return m}});var r,a,i,c=t(168),s=t(6444),o=s.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: ","px;\n"])),(function(n){return n.theme.space[5]})),u=s.ZP.p(a||(a=(0,c.Z)(["\n  text-align: center;\n  font-weight: ",";\n  font-size: 24px;\n"])),(function(n){return n.theme.fontWeights.bold})),f=s.ZP.img(i||(i=(0,c.Z)(["\n  max-width: 200px;\n"]))),p=t(6316),l=t(9057),d=t(7001),h=t(184),x={emptyQuery:{text:"Type to search something",image:p},error:{text:"Something went wrong. Try again later",image:l},noResults:{text:"Nothing to see here",image:d}},m=function(n){var e=n.type,t=x[e];return(0,h.jsxs)(o,{children:[(0,h.jsx)(u,{children:t.text}),(0,h.jsx)(f,{src:t.image,alt:t.text})]})}},7092:function(n,e,t){var r=t(3708);e.Z=function(n){var e=n.hasError,t=n.hasResults,a=n.hasSearchQuery,i=void 0===a||a;return e?r.oK.ERROR:t||i?!t&&i?r.oK.NO_RESULTS:null:r.oK.EMPTY_QUERY}},6316:function(n,e,t){n.exports=t.p+"static/media/empty-query.cf923ecdacb47d96d5ff.png"},9057:function(n,e,t){n.exports=t.p+"static/media/error.5496863544fb5a519bcf.png"},8088:function(n,e,t){n.exports=t.p+"static/media/image-not-found.0ee629d08e998d7c4c0d.png"},7001:function(n,e,t){n.exports=t.p+"static/media/no-results.d438399ff68428d0774c.png"}}]);
//# sourceMappingURL=192.555b2581.chunk.js.map