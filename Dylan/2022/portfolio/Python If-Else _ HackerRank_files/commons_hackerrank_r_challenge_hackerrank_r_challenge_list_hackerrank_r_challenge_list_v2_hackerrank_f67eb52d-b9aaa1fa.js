(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"8KV7":function(e,t,a){"use strict";var r=a("lSNA"),n=a.n(r),o=a("pVnL"),c=a.n(o),s=a("QILm"),i=a.n(s),m=a("cDcd"),l=a.n(m),u=a("MfAl"),p=a("V6Zm"),h=a("TSYQ"),d=a.n(h),g=a("gQMU"),k=a.n(g),w=a("u6S6"),$=a.n(w),_=a("OEX3"),b=a("iiin"),f=a("zlWU"),v=a("Rakn"),C=a("ZQce"),y=a("EfbJ"),R=a("oBtd"),I=a("CFIE"),E=a("jx0p");a("P9et");function H(e){let t=e.text,a=e.Icon,r=e.onClick,n=e.fab,o=e.coloredLogo,s=i()(e,["text","Icon","onClick","fab","coloredLogo"]);return n?l.a.createElement(_.c,c()({className:"social-btn-fab",onClick:r},s),l.a.createElement(a,{className:"social-share-icon"}),l.a.createElement("span",{className:"fab-fallback-share"},t)):o?l.a.createElement(_.c,c()({onClick:r},s),l.a.createElement("img",{src:o,className:"social-btn-colored-logo",alt:t})):l.a.createElement(b.a,c()({Icon:a,onClick:r,btnText:t,className:"social-share-icon",tooltip:!1},s))}class J extends l.a.Component{constructor(){super(...arguments),n()(this,"shareOnPopup",e=>{const t=screen.width/2-300,a=screen.height/2-150;window.open(e,"_blank","noopener noreferrer",`height=300,width=600,top=${a},left=${t}`),window.focus()}),n()(this,"sharedProps",e=>{const t=this.props,a=t.fab,r=t.page,n=t.name,o=t.isColored,c=t.appUtil,s=k()($()(r));return{fab:a,coloredLogo:o&&c.assetPath(`social_share/${e}.svg`),onClick:this.shareLink.bind(this,e),"data-event-category":"HRC Skills","data-event-label":`${k()(e)}${s}`,"data-cd-skill":n}})}shareLink(e,t){t.preventDefault();const a=this.props,r=a.quote,n=a.hashtag,o=a.name;let c="";const s=function(e,t){const a=t.name,r=t.page,n=t.slug,o=t.meta,c=t.badge,s=void 0===c?{}:c,i="trigger"===a?"social-dialog":"social-buttons",m=t.profile.username,l={attribute1:r,attribute2:e,attribute3:i,attribute4:n,attribute5:JSON.stringify(s)},u=s.badge_type,p=s.stars,h=s.level;switch(R.a.track("Click","SocialShare",l),r){case"30daysofcode":return`https://www.hackerrank.com/domains/tutorials/30-days-of-code?utm_campaign=${i}&utm_medium=${e}&utm_source=tutorial`;case"crackingthecodinginterview":return`https://www.hackerrank.com/domains/tutorials/cracking-the-coding-interview?utm_campaign=${i}&utm_medium=${e}&utm_source=tutorial`;case"tutorial":return`https://www.hackerrank.com/${n}?utm_campaign=${i}&utm_medium=${e}&utm_source=tutorial`;case"contest":return`https://www.hackerrank.com/${n}?utm_campaign=${i}&utm_medium=${e}&utm_source=contest`;case"domain":return`https://www.hackerrank.com/domains/${n}?utm_campaign=${i}&utm_medium=${e}&utm_source=domain`;case"domains":return`https://www.hackerrank.com?utm_campaign=${i}&utm_medium=${e}&utm_source=domainlist`;case"challenges":case"challenge_attempt_share":return`https://www.hackerrank.com/challenges/${n}?utm_campaign=${i}&utm_medium=${e}&utm_source=challenge`;case"chapter_completed":return`https://www.hackerrank.com/domains/${o.track_slug}/${o.chapter_slug}?utm_campaign=${i}&utm_medium=${e}&utm_source=${r}`;case"code_snippet":return`https://www.hackerrank.com/snippets/${n}?utm_campaign=${i}&utm_medium=${e}&utm_source=${r}`;case"badge_share":case"badge_share_profile":return`https://www.hackerrank.com/${m}?badge=${u}&stars=${p}&level=${h}&hr_r=1&utm_campaign=${i}&utm_medium=${e}&utm_source=${r}&social=linkedin`;case"certificate_social_share":return`https://www.hackerrank.com/certificates/${n}?hr_r=1&utm_campaign=${i}&utm_medium=${e}&utm_source=${r}&social=linkedin`;case"interview_preparation":return`https://www.hackerrank.com/interview/${n}?hr_r=1&utm_campaign=${i}&utm_medium=${e}&utm_source=${r}&social=linkedin`;default:return`https://www.hackerrank.com?utm_campaign=${i}&utm_medium=${e}&utm_source=domains`}}(e,this.props);Object(u.a)(s).then(t=>{let a;const i=p.a.url(t)?t:s;switch(e){case"twitter":a="https://twitter.com/intent/tweet?text="+encodeURIComponent(function(e,t){const a=t.name,r=t.meta,n=t.page,o=t.badge,c=void 0===o?{}:o;let s="";switch(t.slug&&(s=t.slug.charAt(0).toUpperCase()+t.slug.slice(1)),n){case"30daysofcode":return`Just joined the #30DaysofCode challenge to improve my #coding skills! Join me and thousands of coders ${e} @HackerRank`;case"crackingthecodinginterview":return`Started Cracking the Coding Interview on @HackerRank! Join me and learn the secrets from @gayle ${e} @HackerRank`;case"tutorial":return`Just joined ${a} on @HackerRank to improve my #programming skills! Join me and thousands of coders ${e}`;case"contest":return`Join me and sign up to compete in ${a} on @HackerRank ${e} #programming`;case"domain":return`Want to boost your coding skills? @HackerRank is the best way to practice ${a} ${e} #programming`;case"domains":return`Keep your coding skills sharp by solving programming challenges ${e}  on @HackerRank #programming`;case"challenges":return`Success! Just solved ${a} on @HackerRank. Can you complete the challenge? ${e} #programming`;case"challenge_attempt_share":return`Can you help me solve this challenge? ${e} #programming`;case"chapter_completed":return`Just solved all ${r.chapter} challenges in ${r.track} on @HackerRank. Try it out! ${e} #programming`;case"code_snippet":return"Check out my code snippet on @HackerRank. "+e;case"badge_share":case"badge_share_profile":return`${Object(I.c)(c)} ${e}`;case"certificate_social_share":return`I just earned ${a} skill certificate via @HackerRank. Get your skills certified and show the world what you can do! #skilloverpedigree ${e}`;case"interview_preparation":return`Are you preparing for interview? Try ${s}'s interview preparation challenges ${e}`;default:return`Keep your coding skills sharp by solving programming challenges ${e} on @HackerRank #programming`}}(i,this.props));break;case"facebook":r&&(c+="&quote="+encodeURIComponent(r)),n&&(c+="&hashtag="+encodeURIComponent(n)),a=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(i)}${c}`;break;case"linkedin":r&&(c+=o?"&title="+encodeURIComponent(`${r} - (${o})`):"&title="+encodeURIComponent(r)),a=`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(i)}${c}`}this.shareOnPopup(a)})}render(){const e=this.props,t=e.fab,a=e.className,r=e.align;return l.a.createElement("div",{className:d()(a,t?"fab-icon-share-wrapper":"social-links-wrapper",{"pull-left":"left"===r,"text-center":"center"===r,"pull-right":"right"===r||!r})},l.a.createElement(H,c()({text:"Share on Facebook",Icon:f.a},this.sharedProps("facebook"))),l.a.createElement(H,c()({text:"Share on Twitter",Icon:v.a},this.sharedProps("twitter"))),l.a.createElement(H,c()({text:"Share on LinkedIn",Icon:C.a},this.sharedProps("linkedin"))))}}n()(J,"defaultProps",{meta:{},align:"right",fab:!1}),t.a=Object(E.a)(Object(y.b)(J))},P9et:function(e,t,a){}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/commons~hackerrank_r_challenge~hackerrank_r_challenge_list~hackerrank_r_challenge_list_v2~hackerrank~f67eb52d-b9aaa1fa.js.map