(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{"5T8g":function(t,e,a){"use strict";a.r(e);var l=a("lSNA"),r=a.n(l),c=a("cDcd"),s=a.n(c),n=a("17x9"),o=a.n(n),i=a("/MKj"),u=a("MGin"),p=a("eOGF"),m=a("EfbJ"),g=a("oDz9");a("nq5B");function d(t){const e=t.tutorial,a=t.assetPath;return s.a.createElement("div",{className:"col-md-6"},s.a.createElement(u.Link,{to:"/domains/tutorials/"+e.slug,className:"tutorial-tile"},s.a.createElement("img",{src:a(`dashboard/${e.slug}.svg`),alt:"Track Image",className:"tutorial-img"}),s.a.createElement("span",{className:"tutorial-name bold"},e.name)))}Object(p.N)("dashboard/.*.svg");class h extends c.PureComponent{render(){const t=this.props,e=t.track,a=t.chapters,l=t.appUtil.assetPath;return s.a.createElement("div",{className:"b4 tutorials-list-page"},s.a.createElement("div",{className:"container"},s.a.createElement(g.a,{track:e}),s.a.createElement("div",{className:"tutorials-list row"},a.map(t=>s.a.createElement(d,{key:t.slug,tutorial:t,assetPath:l})))))}}r()(h,"propTypes",{chapters:o.a.arrayOf(o.a.object),track:o.a.object,appUtil:o.a.object}),h=Object(i.d)(t=>{const e=t.community.domains.dict.tutorials;return{chapters:e.chapters,track:{id:e.id,slug:e.slug,name:e.name}}})(h),h=Object(m.b)(h),e.default=h},"6acW":function(t,e,a){var l=a("dt0z"),r=a("gQMU");t.exports=function(t){return r(l(t).toLowerCase())}},Vdmo:function(t,e,a){"use strict";a.r(e),a.d(e,"makeTrackChallengesProps",(function(){return j})),a.d(e,"mapDispatchToProps",(function(){return v})),a.d(e,"mergeProps",(function(){return C}));var l=a("MVZn"),r=a.n(l),c=a("/MKj"),s=a("ANjH"),n=a("peh1"),o=a("iGQG"),i=a("EfbJ"),u=a("cK/l"),p=a("LNHK"),m=a("e8Oo"),g=a("Z/B0");const d=t=>t.community.profile,h=(t,e)=>e.appUtil.params,b=Object(n.createSelector)([(t,e)=>e.appUtil.location,h],(t,e)=>{const a=e.trackSlug,l=e.chapterSlug;return Object(u.j)(t,a,l)}),f=t=>t.community.challenges.challengeList,k=t=>t.community.domains.dict,j=()=>Object(n.createSelector)([d,u.h,f,b,h,k],(t,e,a,l,r,c)=>{const s=r.trackSlug,n=r.chapterSlug,o=a.challengePages,i=a.current_track,p=o[Object(u.k)(s,l)]||{list:[],firstUnsolvedChallenge:null,total:0},m=p.list,d=p.firstUnsolvedChallenge,h=p.total,b=m.length;let f=m.map(t=>e[Object(u.l)(t,"master")]);d&&(f=f.filter(t=>t.slug!==d.slug));const k=c[i.slug],j=k.chapterDict;return{challenges:f,currentChallengesCount:b,totalChallenges:h||0,chapters:k.chapters,skills:k.skills,chapter:j[n],profile:t,filters:l,track:i,firstUnsolvedChallenge:d,listType:g.b.TRACK}}),v=t=>({challengeActions:Object(s.a)(p.a,t)}),C=(t,e,a)=>{const l=t.track,c=void 0===l?{}:l,s=t.filters,n=t.currentChallengesCount,o=t.chapter,i=void 0===o?{}:o;return r()({},t,e,a,{loadChallenges:()=>e.challengeActions.getTrackChallengeList({trackSlug:c.slug,filters:s,offset:n,limit:Object(u.i)(i.slug)})})},O=Object(s.c)(i.b,o.b,Object(c.d)(j(),v,C))(m.a);e.default=O},nq5B:function(t,e,a){},u6S6:function(t,e,a){var l=a("6acW"),r=a("sgoq")((function(t,e,a){return e=e.toLowerCase(),t+(a?l(e):e)}));t.exports=r}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/hackerrank_r_challenge_list-4e39a3aa.js.map