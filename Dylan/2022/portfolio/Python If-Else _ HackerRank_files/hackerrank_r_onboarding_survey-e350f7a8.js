(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{"9cm2":function(e,a,t){"use strict";t.r(a);var n=t("QILm"),r=t.n(n),s=(t("CX2u"),t("MVZn")),o=t.n(s),c=t("yXPU"),l=t.n(c),i=t("J4zp"),d=t.n(i),u=t("cDcd"),m=t.n(u),p=t("ANjH"),b=t("/MKj"),g=t("BkRI"),h=t.n(g),v=t("f0wr"),f=t("OEX3"),E=t("pVnL"),k=t.n(E);t("Jkfs");var y=e=>{let a=e.className,t=void 0===a?"":a,n=r()(e,["className"]);return n=o()({},n,{className:t+" ui-svg-icon"}),m.a.createElement("svg",k()({viewBox:"0 0 16 16",width:"1em",height:"1em"},n,{fill:"currentColor"}),m.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.313 4.313a.5.5 0 0 1 .707 0l3.334 3.333a.5.5 0 0 1 0 .708L9.02 11.687a.5.5 0 0 1-.707-.707L11.293 8l-2.98-2.98a.5.5 0 0 1 0-.707zm-4.667 0a.5.5 0 0 1 .708 0l3.333 3.333a.5.5 0 0 1 0 .708l-3.333 3.333a.5.5 0 0 1-.708-.707L6.626 8l-2.98-2.98a.5.5 0 0 1 0-.707z"}))},S=t("EfbJ"),N=t("MGin"),O=t("LPUq");t("worT");var w=Object(S.b)((function(e){const a=e.name,t=e.appUtil;return m.a.createElement("aside",{className:"onboarding-sidebar"},m.a.createElement(O.a,null,m.a.createElement("img",{className:"onboarding-sidebar-logo",src:t.assetPath("brand/hr-logo-new-black-green.svg"),height:20,alt:"HackerRank"})),m.a.createElement("div",{className:"onboarding-sidebar-greeting"},m.a.createElement("div",{className:"onboarding-sidebar-heading-wrapper"},m.a.createElement("h1",{className:"onboarding-sidebar-heading"},"Hey, ",a),m.a.createElement(O.b,null,m.a.createElement("span",{className:"onboarding-sidebar-cursor"}))),m.a.createElement("h6",{className:"onboarding-sidebar-subtitle"},"Help us personalize your experience by telling us a bit about yourself.")),m.a.createElement(O.a,null,m.a.createElement("div",{className:"onboarding-sidebar-spacer"}),m.a.createElement("img",{src:t.assetPath("onboarding/hackers_working.svg"),alt:""}),m.a.createElement("footer",{className:"onboarding-sidebar-footer"},m.a.createElement(N.Link,{target:"_blank",to:"/terms-of-service",className:"text-link"},"Terms Of Service"),m.a.createElement("div",{className:"divider"},"|"),m.a.createElement(N.Link,{target:"_blank",to:"/privacy",className:"text-link"},"Privacy Policy"))))})),j=t("TSYQ"),C=t.n(j),x=t("KD+3"),D=t("53eb"),L=t("wqqT"),P=t("zwaM"),_=t("g+WX"),I=t("PtY2"),J=t("Bxx2"),R=t("cUYI");t("G4vw");const z=Object(D.a)(!1,"outset"),H=o()({},z,{control:function(){const e=`@media screen and (max-width: ${J.mobileBreakPoint})`,a=z.control(...arguments);return o()({},a,{padding:`${J.spaceSm} ${J.spaceL}`,height:"auto",fontSize:J.fsInputL,[e]:{padding:`${J.spaceS} ${J.spaceL}`,fontSize:J.fsInput}})},singleValue:()=>({padding:J.spaceS+" 0"}),indicatorSeparator:()=>({display:"none"}),menuList:e=>o()({},e,{maxHeight:200,boxShadow:J.shadowBorderSpread})});function M(e){const a=e.label,t=e.name,n=e.value,r=e.checked,s={name:t,value:n,type:"radio",checked:r,onChange:e.onChange};return m.a.createElement("label",{className:C()("step-radio-label",{checked:r})},m.a.createElement("input",s),m.a.createElement("span",null,a))}var T=function(e){const a=e.isSaving,t=e.stepData,n=e.stepNumber,r=e.stepId,s=e.maxSteps,o=e.onChange,c=e.isCtaShown,l=e.handleCheckboxChange,i=e.jobsConsent,d=e.isDashobardV2,p=e.currentStepName,b=Object(u.useRef)(),g=n===s,h="legend-label-"+r,v=["experience"].includes(r),E=1===n;Object(u.useEffect)(()=>{var e,a;t.selectedOption.value||(null===(e=(a=b.current).scrollIntoView)||void 0===e||e.call(a,{behavior:"smooth"}))},[]);const k=m.a.createElement("span",{className:"step-heading"},m.a.createElement("span",{className:"step-progress"},"Step ",n,!E&&m.a.createElement(m.a.Fragment,null," of ",s)),m.a.createElement("span",null,m.a.createElement("b",{className:"step-title",ref:b},t.title),a&&m.a.createElement("span",{className:"step-loader"},m.a.createElement(L.a,{color:J.colorShadeMedium})))),y=E?"step-info-label":"";return m.a.createElement("div",{className:C()("step-wrapper",y)},v?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"step-group"},m.a.createElement("div",{className:"step-group-label"},k),m.a.createElement(x.a,{name:t.name,instanceId:"select-input-"+r,options:t.options,value:t.selectedOption,onChange:function(e,a){"select-option"===a.action&&o(r,e)},styles:H,className:"step-select-menu"}))):m.a.createElement(P.a,{name:t.name,label:k,labelId:h,labelClassName:"step-group-label",list:t.options,value:t.selectedOption.value,component:M,onChange:function(e){const a=Object(R.d)(t.options,e);o(r,a)},className:"step-group"}),g&&m.a.createElement("div",{className:"onboarding-survey-check"},m.a.createElement(_.a,{label:"I am interested in being contacted about job opportunities.",checked:i,onChange:l}),m.a.createElement("div",{className:"onboarding-survey-check-block"},m.a.createElement(I.a,{className:"onboarding-survey-tip-icon"}),m.a.createElement("p",{className:"onboarding-survey-check-block-text"},"Your profile and contact information will be shared with recruiters using HackerRank products.")),c&&m.a.createElement("div",{className:"onboarding-survey-cta"},m.a.createElement(f.d,{type:"submit",size:"large","data-event-category":"HRC Onboarding","data-event-label":"SubmitOnboarding","data-cd-survey-step-name":p,"data-analytics":"SubmitOnboarding","data-attr1":p},"Let's go"))),E&&d&&m.a.createElement("aside",{className:"step-tip"},m.a.createElement(I.a,{className:"step-tip-icon"}),m.a.createElement("p",null,"You can update these later in the settings")))},q=t("bh43"),B=t("fe33");t("ZX85");function V(e){var a,t;const n=e.journey,s=e.stepsMapping,c=e.profile,i=e.updateProfile,p=e.createJobSeekerDetails,b=e.updateJobSeekerDetails,g=e.appUtil,E=Object(u.useState)("idle"),k=d()(E,2),S=k[0],N=k[1],O=Object(u.useState)(()=>Object(R.c)(n,c)),j=d()(O,2),C=j[0],x=j[1],D=Object(u.useState)(!1),L=d()(D,2),P=L[0],_=L[1],I=Object(u.useRef)(new v.a({type:"error_strong",placement:"topRight",message:"Something went wrong. Please try again.",icon:"ui-icon-cross-circle"})),J="saving"===S,z="surveyFilled"===C&&"idle"===S,H="surveyFilled"!==C&&s.intent.selectedOption.value,M=null!==(a=null===(t=s[C])||void 0===t?void 0:t.name)&&void 0!==a?a:null;function B(){return(B=l()((function*(e,a){const t=a.job_seeker_details,n=r()(a,["job_seeker_details"]);"interviewTime"===e&&(yield Object(q.o)({data:t,profile:c,createJobSeekerDetails:p,updateJobSeekerDetails:b})),yield i("me",n)}))).apply(this,arguments)}function V(e,a){if(J)return;const t=h()(s);t[e].selectedOption=a;const r=Object(R.f)(t),c=Object(R.b)(n,e,C),l=o()({},r,{onboarding_status:c});N("saving"),function(e,a){return B.apply(this,arguments)}(e,l).then(()=>{I.current.hide(),x(c)}).catch(()=>{I.current.show()}).finally(()=>{N("idle")});const i=t[e].name;Object(R.g)(i,a.value)}function U(){i("me",{onboarding_status:"done",sourcing_jobs_consent:P}).then(()=>{const e=g.goto,a=g.location,t=a.query,n=t.redirect,s=r()(t,["redirect"]);I.current.hide(),e(o()({},a,{query:s,pathname:n||"/dashboard"}))}).catch(()=>{I.current.show()})}function X(){Object(R.g)("jobsConsent",!P),_(!P)}return Object(u.useEffect)(()=>(document.querySelector("html").classList.add("onboarding-survey-page"),()=>{document.querySelector("html").classList.remove("onboarding-survey-page")}),[]),m.a.createElement("div",{className:"onboarding-survey"},m.a.createElement(w,{name:c.personal_first_name}),m.a.createElement("main",{className:"onboarding-survey-main"},m.a.createElement("form",{className:"onboarding-survey-form",onSubmit:function(e){e.preventDefault(),U()},autoComplete:"off",noValidate:!0},function(){const a=e.profile.show_dashboard_v2,t=[],r=n.length;for(let e=0;e<r;e++){const o=n[e],c=s[o];if(t.push(m.a.createElement(T,{key:o,isSaving:J,stepId:o,stepData:c,stepNumber:e+1,maxSteps:r,onChange:V,isLastStep:r===e+1,isCtaShown:z,currentStepName:M,handleCheckboxChange:X,jobsConsent:P,isDashobardV2:a})),o===C)break}return t}(),H&&m.a.createElement(f.c,{className:"onboarding-survey-skip fadeInUp",Icon:y,onClick:U,"data-event-category":"HRC Onboarding","data-event-label":"SkipOnboarding","data-cd-survey-step-name":M,"data-analytics":"SkipOnboarding","data-attr1":M},"Skip"))))}t.d(a,"PureOnboardingSurvey",(function(){return V})),t.d(a,"mapStateToProps",(function(){return U})),t.d(a,"mapDispatchToProps",(function(){return X}));const U=e=>{const a=e.community.profile;return{journey:Object(R.a)(a),stepsMapping:Object(R.e)(a),profile:a}},X={updateProfile:B.a.updateProfile,createJobSeekerDetails:B.a.createJobSeekerDetails,updateJobSeekerDetails:B.a.updateJobSeekerDetails};a.default=Object(p.c)(Object(b.d)(U,X),S.b)(V)},BkRI:function(e,a,t){var n=t("OBhP");e.exports=function(e){return n(e,5)}},G4vw:function(e,a,t){},ZX85:function(e,a,t){},worT:function(e,a,t){}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/hackerrank_r_onboarding_survey-e350f7a8.js.map