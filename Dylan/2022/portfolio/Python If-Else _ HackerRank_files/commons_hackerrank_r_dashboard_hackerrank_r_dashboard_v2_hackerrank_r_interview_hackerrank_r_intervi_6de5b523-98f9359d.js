(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{RBRs:function(e,t,a){},Twey:function(e,t,a){},"cl+i":function(e,t,a){"use strict";var s=a("pVnL"),n=a.n(s),c=a("QILm"),l=a.n(c),o=a("cDcd"),r=a.n(o),i=a("TSYQ"),m=a.n(i),u=a("2VWb"),p=a("iiin"),d=a("QU3h");a("l80c");t.a=function(e){let t=e.onClose,a=e.imgProps,s=e.className,c=e.children,o=l()(e,["onClose","imgProps","className","children"]);const i=a.src,g=a.alt,h=a.className,E=l()(a,["src","alt","className"]);return r.a.createElement(u.a,n()({onClose:t,className:m()("graphic-modal",s)},o),r.a.createElement(p.a,{Icon:d.a,btnText:"Close",onClick:t,className:"graphic-modal-btn-close"}),r.a.createElement("div",{className:"graphic-modal-img-wrapper"},r.a.createElement("img",n()({src:i,alt:g||"",className:m()("graphic-modal-img",h)},E))),r.a.createElement("div",{className:"graphic-modal-content"},c))}},exN9:function(e,t,a){"use strict";a("rGqo");var s=a("J4zp"),n=a.n(s),c=a("cDcd"),l=a.n(c),o=a("/MKj"),r=a("f0wr"),i=a("ZaSc"),m=a("EfbJ"),u=a("IreD"),p=a("cl+i"),d=a("TSYQ"),g=a.n(d),h=a("PtY2");a("vZ6Y");var E=function(e){let t=e.children,a=e.Icon,s=void 0===a?h.a:a,n=e.className;return l.a.createElement("div",{className:"ui-note-wrapper"},l.a.createElement("p",{className:g()("ui-note",n)},l.a.createElement(s,{className:"ui-note-icon"}),l.a.createElement("span",{className:"ui-note-content"},t)))},N=a("DM5n"),k=a("Nd9t"),v=a("+ip1"),f=a("5Rf8");a("RBRs");function b(e){return Object(i.c)({url:Object(N.e)("getPlaylist",{playlistSlug:e})+"/update_mock_test_progress"})}function w(e){new r.a({type:"error_strong",placement:"topCenter",message:"Something went wrong. Please try again."}).show(),e()}t.a=Object(m.b)((function(e){let t=e.onClose,a=e.appUtil,s=e.mockTest,r=e.type;const i=Object(c.useState)("Preparing"),m=n()(i,2),d=m[0],g=m[1],h=Object(o.e)(),N=s.name,T=s.duration,P=s.total_questions,y=s.total_attempts,S=s.unique_id,j=s.testUrl,C=Object(u.e)(T),O="playlist"===r;Object(c.useEffect)(()=>{if(j){return void(O?b(a.params.playlistSlug):new Promise(e=>setTimeout(()=>{e()},500))).then(()=>{a.goto(j)}).catch(()=>w(t))}const e=[h(f.a.fetchMockTestInvite(S))];O&&e.push(b(a.params.playlistSlug)),Promise.all(e).then(()=>{g("Redirecting")}).catch(()=>w(t))},[s,a]);const x=Object(k.a)()===v.a.dark;return l.a.createElement(p.a,{open:!0,onClose:t,imgProps:{src:a.assetPath(x?"mock-tests/mock-test-prepare-dark.svg":"mock-tests/mock-test-prepare.svg")}},l.a.createElement("div",{className:"take-test-modal-wrapper theme-m"},l.a.createElement("h1",{className:"take-test-modal-heading"},d),l.a.createElement("h2",{className:"text-para-headline take-test-modal-subheading"},N),l.a.createElement("div",{className:"take-test-modal-content"},l.a.createElement("p",{className:"take-test-modal-text"},"Questions: ",l.a.createElement("strong",null,P)),l.a.createElement("p",{className:"take-test-modal-text"},"Test Time: ",l.a.createElement("strong",null,C)),l.a.createElement("p",{className:"take-test-modal-text"},"Total Attempts: ",l.a.createElement("strong",null,y))),l.a.createElement(E,{className:"take-test-modal-text-footer"},"You will be automatically redirected to your mock test once it’s ready.")))}))},gpaR:function(e,t,a){"use strict";var s=a("cDcd"),n=a.n(s),c=a("EfbJ"),l=a("cl+i");a("Twey");t.a=Object(c.b)((function(e){const t=e.mockTestName,a=e.onClose,s=e.appUtil,c=e.content;return n.a.createElement(l.a,{open:!0,onClose:a,imgProps:{src:s.assetPath("mock-tests/mock-test-evaluating.svg")}},n.a.createElement("div",{className:"view-status-modal-wrapper theme-m"},n.a.createElement("h1",{className:"view-status-modal-heading"},"Evaluating"),n.a.createElement("h2",{className:"text-para-headline view-status-modal-subheading"},t),n.a.createElement("p",{className:"view-status-modal-text"},c||"We are evaluating your mock test submission. This might sometimes take up to 30 minutes. Your report will be available under the Past Mock Tests section.")))}))},"j//G":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));const s={INITIATED:"initiated",STARTED:"started",PROCESSING:"test_finished",PASSED:"test_passed"}},l80c:function(e,t,a){},vZ6Y:function(e,t,a){}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/commons~hackerrank_r_dashboard~hackerrank_r_dashboard_v2~hackerrank_r_interview~hackerrank_r_intervi~6de5b523-98f9359d.js.map