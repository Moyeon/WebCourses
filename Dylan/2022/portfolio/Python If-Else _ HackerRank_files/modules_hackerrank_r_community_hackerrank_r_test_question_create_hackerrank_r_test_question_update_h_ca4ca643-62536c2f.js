(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2Ica":function(e,o,r){"use strict";var t=r("pVnL"),n=r.n(t),a=r("QILm"),s=r.n(a),c=r("lSNA"),d=r.n(c),i=r("cDcd"),l=r.n(i),p=r("TSYQ"),u=r.n(p),h=r("37OS"),m=r.n(h),b=r("WEWv"),x=r("I53q");const v=["className","children","dropdownContext","element"];class w extends i.PureComponent{constructor(){super(...arguments),d()(this,"handleClick",e=>{if("keydown"===e.type){if(e.key!==x.a.Enter&&e.key!==x.a.Space)return;e.preventDefault()}const o=this.props,r=o.onClick,t=o.dropdownContext,n=t.disabled,a=t.open,s=t.setOpenState;r&&r(e),n||s(!a)})}render(){const e=this.props,o=e.className,r=e.children,t=e.dropdownContext,a=t.open,c=t.as,d=e.element,i=s()(e,v);return l.a.createElement(d,n()({},i,{"aria-haspopup":c,"aria-expanded":a,className:u()("dropdown-handle",o),onClick:this.handleClick,onKeyDown:this.handleClick}),r)}}d()(w,"defaultProps",{onClick:m.a,element:"div"}),o.a=Object(b.c)("DropdownHandle can be only used inside Dropdown scope.")(w)},"53eb":function(e,o,r){"use strict";r("rGqo");var t=r("lSNA"),n=r.n(t),a=r("Bxx2");function s(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?s(Object(r),!0).forEach((function(o){n()(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}o.a=(e,o)=>{const r="outset"===o;return{control:(o,t)=>{let n=t.isFocused,s=t.hasValue,d=t.isMulti;return c(c({},o),{},{border:0,borderRadius:0,height:d?"inherit":a.inputHeight,backgroundColor:r?"var(--color-white)":"var(--color-shade-lighter)",boxShadow:e?"inset 0 1px 4px rgba(var(--color-shade-medium-2-rgb), 0.5), 0 2px 0 "+a.colorError:n?r?"0px 3px 10px rgba(var(--color-shade-medium-2-rgb), 0.6), 0 2px 0 "+a.colorShadeDark:"inset 0 1px 4px rgba(var(--color-shade-medium-2-rgb), 0.5), 0 2px 0 "+a.colorShadeDark:s?r?"0px 3px 10px rgba(var(--color-shade-medium-2-rgb), 0.6), 0 0 0 transparent":"inset 0 1px 4px var(--color-shade-medium-2), 0 0 0 transparent":r?"0px 3px 10px rgba(var(--color-shade-medium-2-rgb), 0.6), 0 0 0 transparent":"inset 0 1px 4px rgba(var(--color-shade-medium-2-rgb), 0.5), 0 0 0 transparent"})},valueContainer:(e,o)=>{let r=o.isMulti;return c(c({},e),{},{padding:r?"4px 8px":e.padding})},menu:e=>c(c({},e),{},{boxShadow:"none",borderRadius:0,borderBottomRightRadius:a.borderRadiusS,borderBottomLeftRadius:a.borderRadiusS,margin:0}),menuList:e=>c(c({},e),{},{padding:0,borderBottomRightRadius:a.borderRadiusS,borderBottomLeftRadius:a.borderRadiusS,boxShadow:"0 3px 10px 0 rgba(115, 143, 147, 0.3)"}),indicatorSeparator:(e,o)=>{let r=o.selectProps,t=o.hasValue;return c(c({},e),{},{display:r.isClearable&&t?"inline-block":"none",backgroundColor:"var(--color-shade-medium)"})},clearIndicator:e=>c(c({},e),{},{transform:"scale(0.8)",padding:a.spaceXs,cursor:"pointer",color:"var(--color-text-medium-dark)",":hover":{color:"var(--color-text-dark)"}}),dropdownIndicator:e=>c(c({},e),{},{transform:"scale(0.8)",padding:a.spaceXs,cursor:"pointer",color:"var(--color-text-medium-dark)",":hover":{color:"var(--color-text-dark)"}}),option:(e,o)=>{let r=o.isSelected,t=o.isFocused;return c(c({},e),{},{color:"var(--color-text-dark)",cursor:"pointer",backgroundColor:r?"var(--color-shade-medium)":t?"var(--color-shade-light)":"var(--color-white)",":active":{backgroundColor:"var(--color-white)"},":last-child":{borderBottomLeftRadius:a.borderRadiusS,borderBottomRightRadius:a.borderRadiusS}})},noOptionsMessage:e=>c(c({},e),{},{color:"var(--color-text-dark-faded)",backgroundColor:"var(--color-white)"}),placeholder:e=>c(c({},e),{},{color:"var(--color-shade-dark)"}),singleValue:e=>c(c({},e),{},{color:"var(--color-shade-darker)"}),multiValue:e=>c(c({},e),{},{borderRadius:a.borderRadiusS,backgroundColor:"var(--card-shadow-2)",boxShadow:"0 2px 3px 0 var(--color-multivalue-box-shadow)",color:a.colorSecondary,marginBottom:a.spaceXs}),multiValueLabel:e=>c(c({},e),{},{color:"var(--color-shade-darker)"}),multiValueRemove:e=>c(c({},e),{},{cursor:"pointer",transform:"scale(0.8)",color:"var(--color-text-medium-dark)",":hover":{color:"var(--color-text-dark)"}}),input:e=>c(c({},e),{},{color:"var(--color-shade-darker)",'input[type = "text"]':{marginBottom:"0",boxShadow:"none",transition:"none"},'input[type = "text"]:focus':{boxShadow:"none"}})}}},ECpG:function(e,o,r){},I53q:function(e,o,r){"use strict";r.d(o,"a",(function(){return t}));const t={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight",Home:"Home",End:"End",PageUp:"PageUp",PageDown:"PageDown",Tab:"Tab",Space:" ",Enter:"Enter",Escape:"Escape"}},LD1s:function(e,o,r){"use strict";r.d(o,"a",(function(){return p}));var t=r("lSNA"),n=r.n(t),a=r("cDcd"),s=r("TSYQ"),c=r.n(s),d=r("37OS"),i=r.n(d),l=r("WEWv");r("ECpG");const p={LISTBOX:"listbox",MENU:"menu"};class u extends a.PureComponent{static getDerivedStateFromProps(e,o){const r=e.disabled,t=e.open;return r||e.open!==o.openValueFromProps?{open:!r&&t,openValueFromProps:e.open}:null}constructor(e){super(e),n()(this,"setOpenState",e=>{if(this.state.open===e)return;const o=this.props,r=o.onOpen,t=o.onClose;this.setState({open:e},e?r:t)}),this.state={open:e.open,openValueFromProps:e.open}}render(){const e=this.props,o=e.className,r=e.children,t=e.closeHandleSelector,n=e.disabled,s=e.as,d=this.state.open,i={open:d,closeHandleSelector:t,disabled:n,setOpenState:this.setOpenState,as:s};return a.createElement(l.b,{value:i},a.createElement("div",{className:c()("dropdown",o,{open:d})},r))}}n()(u,"defaultProps",{onOpen:i.a,onClose:i.a,open:!1,disabled:!1,as:p.MENU}),o.b=u},WEWv:function(e,o,r){"use strict";r.d(o,"b",(function(){return s})),r.d(o,"a",(function(){return c})),r.d(o,"c",(function(){return d}));var t=r("cDcd"),n=r("f/Vi");const a=Object(t.createContext)(),s=a.Provider,c=a.Consumer;function d(e){return Object(n.a)(e,c,"dropdownContext")}},"f/Vi":function(e,o,r){"use strict";r.d(o,"a",(function(){return n}));var t=r("eHHv");function n(e,o,r){return Object(t.b)(o,o=>{if(!o)throw new Error(e);return{[r]:o}})}},hF3m:function(e,o,r){"use strict";var t=r("pVnL"),n=r.n(t),a=r("QILm"),s=r.n(a),c=r("lSNA"),d=r.n(c),i=r("cDcd"),l=r.n(i),p=r("TSYQ"),u=r.n(p),h=r("dvg7"),m=r.n(h),b=r("WEWv");const x=["className","children","dropdownContext"];class v extends i.PureComponent{constructor(){super(...arguments),d()(this,"containerRef",l.a.createRef()),d()(this,"handleClick",e=>{const o=this.props.dropdownContext,r=o.closeHandleSelector,t=o.setOpenState;r&&e.target.closest(r)&&t(!1)}),d()(this,"closeDropdown",e=>{const o=this.props.dropdownContext.setOpenState;setTimeout(()=>o(!1))})}componentDidMount(){this.props.dropdownContext.open&&this.containerRef.current&&this.containerRef.current.container.focus()}componentDidUpdate(e){let o=e.dropdownContext;const r=this.props.dropdownContext;o.open!==r.open&&r.open&&this.containerRef.current&&this.containerRef.current.container.focus()}render(){const e=this.props,o=e.className,r=e.children,t=e.dropdownContext,a=t.open,c=t.as,d=s()(e,x);return a?l.a.createElement(m.a,n()({role:c,tabIndex:-1},d,{className:u()("dropdown-body",o),ref:this.containerRef,"aria-hidden":a?"false":"true",onClick:this.handleClick,onClickOutside:this.closeDropdown}),r):null}}o.a=Object(b.c)("DropdownBody can be only used inside Dropdown scope.")(v)},oign:function(e,o,r){"use strict";var t=r("pVnL"),n=r.n(t),a=r("MVZn"),s=r.n(a),c=r("QILm"),d=r.n(c),i=r("cDcd"),l=r.n(i);r("Jkfs");o.a=e=>{let o=e.className,r=void 0===o?"":o,t=d()(e,["className"]);return t=s()({},t,{className:r+" ui-svg-icon"}),l.a.createElement("svg",n()({width:"1em",height:"1em",viewBox:"0 0 24 24"},t,{fill:"currentColor"}),l.a.createElement("path",{d:"M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z"}))}}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/modules~hackerrank_r_community~hackerrank_r_test_question_create~hackerrank_r_test_question_update~h~ca4ca643-62536c2f.js.map