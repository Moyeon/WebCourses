(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"1OM/":function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return f}));var n=a("pVnL"),s=a.n(n),c=a("QILm"),i=a.n(c),r=a("lSNA"),o=a.n(r),l=a("cDcd"),m=a.n(l),h=a("TSYQ"),d=a.n(h),p=a("/n7Q"),u=a("PtY2"),g=a("wqqT"),w=a("61np");a("ufwU");const N=["icon","iconAlignment","wrapperClass","className","hintMessage","loading","error","inputRef","theme","size","placeholder","id","type","showToggleIcon","variant"],k=["type"];class E extends l.PureComponent{constructor(){super(),o()(this,"input",void 0),o()(this,"tooltip",void 0),this.state={showPassword:!1}}render(){const e=this.props,t=e.icon,a=e.iconAlignment,n=e.wrapperClass,c=e.className,r=e.hintMessage,o=e.loading,l=e.error,h=e.inputRef,p=e.theme,k=e.size,E=e.placeholder,b=e.id,f=e.type,v=e.showToggleIcon,x=e.variant,y=i()(e,N),C="tooltip-"+b,P=m.a.createElement("span",null,r),S="textarea"===f,T="password"===f,A=S?"textarea":"input",I="string"==typeof t&&m.a.createElement("i",{className:d()(t,"input-icon")}),Q="outset"===x,R=S?{}:{["align-icon-"+a]:t,"has-icon":t,"has-loader":o};return m.a.createElement("div",{className:d()("custom-input",p,"size-"+k)},m.a.createElement("div",{className:d()("input-wrap",R,n)},m.a.createElement(w.a,{id:C,align:"right",content:P,disabled:!r},m.a.createElement(A,s()({ref:h,id:b,type:(()=>{if(!S)return T?this.state.showPassword?"text":"password":f})(),className:d()("input",{error:!!l,"text-area":S,outset:Q,"toggle-icon":v},c),placeholder:E,"aria-label":E,"aria-invalid":!!l},y))),!S&&t&&!(o&&"right"===a)&&(I||m.a.createElement(t,{className:"input-icon"})),!S&&o&&m.a.createElement(g.a,{className:"input-loading",diameter:24}),T&&v&&!o&&m.a.createElement("button",{type:"button",className:"input-toggle",onClick:()=>this.setState({showPassword:!this.state.showPassword})},m.a.createElement("i",{className:this.state.showPassword?"ui-icon-hide":"ui-icon-show"}))),l&&"string"==typeof l&&m.a.createElement("div",{className:"d-flex align-items-start error-message",role:"alert"},m.a.createElement(u.a,{className:"error-icon"}),l),l&&m.a.isValidElement(l)&&m.a.createElement("div",{className:"error-message",role:"alert"},l))}}o()(E,"defaultProps",{iconAlignment:"left",hintMessage:"",error:!1,icon:"",loading:!1,theme:"theme-old",size:"medium",type:"text",variant:"inset",showToggleIcon:!1});const b=Object(p.d)("input")(E),f=Object(p.d)("input")((function(e){e.type;let t=i()(e,k);return m.a.createElement(E,s()({type:"textarea"},t))}))},"g+WX":function(e,t,a){"use strict";var n=a("pVnL"),s=a.n(n),c=a("QILm"),i=a.n(c),r=a("lSNA"),o=a.n(r),l=a("cDcd"),m=a.n(l),h=a("TSYQ"),d=a.n(h),p=a("37OS"),u=a.n(p),g=a("oign"),w=a("iylS");a("vjD1");const N=["className","indeterminate","label","theme","error","variant","inputRef"];class k extends l.Component{constructor(e){super(e),o()(this,"toggleCheckbox",e=>{e.persist(),this.setState(e=>({checked:!e.checked}),()=>{this.props.onChange(e)})}),this.state={checked:!!e.checked}}componentWillReceiveProps(e){const t=e.checked;null!=t&&t!==this.state.checked&&this.setState({checked:t})}render(){const e=this.props,t=e.className,a=e.indeterminate,n=e.label,c=e.theme,r=e.error,o=e.variant,l=e.inputRef,h=i()(e,N),p=this.state.checked;delete h.checked;const u=m.a.createElement("div",{className:"checkbox-wrap"},m.a.createElement("input",s()({type:"checkbox",className:"checkbox-input",checked:p},h,{onChange:this.toggleCheckbox,ref:l})),m.a.createElement("span",{className:d()("custom-holder",o,{error:r})},a?m.a.createElement(g.a,{className:"checkbox__minus-icon"}):m.a.createElement(w.a,{className:"checkbox__check-icon"})));return m.a.createElement("div",{className:d()("ui-checkbox",c,{indeterminate:!!a,checked:p},t)},n?m.a.createElement("label",{className:"label-wrap"},u,m.a.createElement("div",{className:"label"},n)):u)}}o()(k,"defaultProps",{indeterminate:!1,onChange:u.a,theme:"theme-m",variant:"inset",error:!1}),t.a=k},ufwU:function(e,t,a){},vjD1:function(e,t,a){}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/modules~hackerrank_r_community~hackerrank_r_krackjack~hackerrank_r_testinvite~hackerrank_r_testquest~9083c7e4-8e8cfedf.js.map