import{_ as s}from"./Icon.vue_vue_type_script_setup_true_lang.HcrD2yTj.js";import{d as p,h as i,l as f,a1 as y,o as t,c as m,b as l,e as r,n as c,r as _,_ as B}from"./framework.1ZhN5mGv.js";const b=["disabled","autofocus","nativeType"],v=p({name:"XINButton",__name:"Button",props:{type:{},size:{},plain:{type:Boolean},round:{type:Boolean},circle:{type:Boolean},disabled:{type:Boolean},nativeType:{default:"button"},autofocus:{type:Boolean},loading:{type:Boolean},icon:{}},setup(u,{expose:d}){const a=i(!1);f(()=>{var o;a.value=!!((o=y())!=null&&o.default)});const e=u,n=i();return d({ref:n}),(o,k)=>(t(),m("button",{ref_key:"_ref",ref:n,disabled:o.disabled,class:c(["xin-button",{[`xin-button--${o.type}`]:e.type,[`xin-button--${o.size}`]:e.size,"is-plain":e.plain,"is-round":e.round,"is-circle":e.circle,"is-disabled":e.disabled||e.loading,"is-loading":e.loading}]),autofocus:e.autofocus,nativeType:e.nativeType},[e.loading?(t(),l(s,{key:0,class:"mr-10",icon:"spinner",spin:""})):r("",!0),e.icon?(t(),l(s,{key:1,class:c({"mr-10":a.value}),icon:e.icon},null,8,["class","icon"])):r("",!0),_(o.$slots,"default",{},void 0,!0)],10,b))}}),T=B(v,[["__scopeId","data-v-4ec9095b"]]);export{T as B};