(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{eqDc:function(e,t,r){},kDgx:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return y}));r("rGqo");var n=r("pVnL"),a=r.n(n),l=r("lSNA"),s=r.n(l),o=r("cDcd"),c=r.n(o),i=r("TSYQ"),u=r.n(i),d=r("LD1s"),m=r("2Ica"),p=r("hF3m");r("eqDc");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const f=()=>{};class y extends o.PureComponent{render(){return null}}s()(y,"defaultProps",{renderCell:e=>e,renderHeaderCell:e=>e,onColumnSelect:f});class b extends o.Component{constructor(e){super(e),s()(this,"columnsConfig",void 0),s()(this,"getColumnsConfig",e=>{let t=e.children;const r=e.flexLayout;if(!t)return[];Array.isArray(t)||(t=[t]);const n=t.filter(e=>!!e).map(e=>function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props));if(r){const e=n.reduce((e,t)=>e+Number(t.flex),0);n.forEach(t=>{t.flexRule=`${t.flex} 1 ${100*Number(t.flex)/e}%`})}return n}),s()(this,"getColumnStyle",e=>{const t={},r=this.props.flexLayout?"flex":"width",n="width"===r?r:"flexRule";return t[r]=e[n],t}),s()(this,"renderHeaderDropdown",e=>{const t=e.columnKey,r=e.onColumnSelect,n=e.columnOptions,l=e.header,s=e.dropdownProps;return c.a.createElement(d.b,a()({className:"header-dropdown",closeHandleSelector:".header-item"},s),c.a.createElement(m.a,null,c.a.createElement("span",{className:"selected-column"},l),c.a.createElement("i",{className:"ui-icon-chevron-down"})),c.a.createElement(p.a,null,c.a.createElement("ul",{className:"header-list"},n.map((e,n)=>{const a=e.key,l=e.name;return c.a.createElement("li",{key:n,className:u()("header-item",{selected:a===t}),onClick:r.bind(null,a,l)},l)}))))}),s()(this,"layoutClass",()=>this.props.flexLayout?"flex":"table clearfix"),s()(this,"renderHeader",()=>{const e=this.columnsConfig;return c.a.createElement("div",{className:"table-header-wrapper"},c.a.createElement("header",{className:u()("table-header",this.layoutClass())},e.map((e,t)=>{const r=e.headerClass,n=e.columnOptions,a=e.header,l=e.renderHeaderCell;return c.a.createElement("div",{key:t,className:u()("table-header-column",r),style:this.getColumnStyle(e)},n?this.renderHeaderDropdown(e):c.a.createElement("div",{className:"ellipsis"},l(a,e)))})))}),s()(this,"renderRow",(e,t,r)=>{const n=this.columnsConfig,l=r?r.className:null;return c.a.createElement("div",a()({key:t},r,{className:u()("table-row-wrapper",l)}),c.a.createElement("div",{className:u()("table-row",this.layoutClass())},n.map((t,n)=>{const a=t.columnClass,l=t.columnKey,s=t.renderCell;return c.a.createElement("div",{key:n,className:u()("table-row-column ellipsis",a),style:this.getColumnStyle(t)},s(e[l],e,t,r))})))}),s()(this,"renderBody",()=>{const e=this.props,t=e.data,r=e.getRowProps;return c.a.createElement("div",{className:"table-body"},t.map((e,t)=>{const n=r(e,t);return this.renderRow(e,t,n)}))}),this.columnsConfig=this.getColumnsConfig(e)}componentWillReceiveProps(e){this.columnsConfig=this.getColumnsConfig(e)}render(){const e=this.props,t=e.tableClass,r=e.noHeader,n=e.hover,a=e.data,l={"ui-table-hover":n,"first-col-raised":e.firstColRaised&&a.length};return c.a.createElement("div",{className:u()("ui-table",t,l)},!r&&this.renderHeader(),this.renderBody())}}s()(b,"defaultProps",{data:[],noHeader:!1,flexLayout:!0,hover:!1,getRowProps:f,firstColRaised:!0})}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/modules~hackerrank_r_billing_settings~hackerrank_r_candidate_search_results~hackerrank_r_challenge~h~67df7a85-e88228aa.js.map