import{S as d,i as v,s as y,e as g,m as h,p as B,t as k,n as q,Q as C,I as S,g as w,K as I,q as K,y as Q}from"./index-7e026d9e.js";import{a as R}from"./Button-f9baf3c9.js";import{X}from"./Blocks-85470727.js";function j(i){let t=i[9](i[6])+"",l;return{c(){l=S(t)},m(e,s){w(e,l,s)},p(e,s){s&576&&t!==(t=e[9](e[6])+"")&&I(l,t)},d(e){e&&K(l)}}}function z(i){let t,l;return t=new R({props:{value:i[6],variant:i[7],elem_id:i[1],elem_classes:i[2],info_str:i[4],proxy_of:i[5],style:i[0],visible:i[3],disabled:i[8]==="static",$$slots:{default:[j]},$$scope:{ctx:i}}}),t.$on("click",i[10]),{c(){g(t.$$.fragment)},m(e,s){h(t,e,s),l=!0},p(e,[s]){const a={};s&64&&(a.value=e[6]),s&128&&(a.variant=e[7]),s&2&&(a.elem_id=e[1]),s&4&&(a.elem_classes=e[2]),s&16&&(a.info_str=e[4]),s&32&&(a.proxy_of=e[5]),s&1&&(a.style=e[0]),s&8&&(a.visible=e[3]),s&256&&(a.disabled=e[8]==="static"),s&2624&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){l||(B(t.$$.fragment,e),l=!0)},o(e){k(t.$$.fragment,e),l=!1},d(e){q(t,e)}}}function A(i,t,l){let e;C(i,X,n=>l(9,e=n));let{style:s={}}=t,{elem_id:a=""}=t,{elem_classes:o=[]}=t,{visible:f=!0}=t,{info_str:_=null}=t,{proxy_of:m=null}=t,{value:u}=t,{variant:c="secondary"}=t,{mode:r="dynamic"}=t;function b(n){Q.call(this,i,n)}return i.$$set=n=>{"style"in n&&l(0,s=n.style),"elem_id"in n&&l(1,a=n.elem_id),"elem_classes"in n&&l(2,o=n.elem_classes),"visible"in n&&l(3,f=n.visible),"info_str"in n&&l(4,_=n.info_str),"proxy_of"in n&&l(5,m=n.proxy_of),"value"in n&&l(6,u=n.value),"variant"in n&&l(7,c=n.variant),"mode"in n&&l(8,r=n.mode)},[s,a,o,f,_,m,u,c,r,e,b]}class D extends d{constructor(t){super(),v(this,t,A,z,y,{style:0,elem_id:1,elem_classes:2,visible:3,info_str:4,proxy_of:5,value:6,variant:7,mode:8})}}const H=D,J=["static","dynamic"],L=i=>({type:{payload:"string"},description:{payload:"button label"},example_data:i.value||"Run"});export{H as Component,L as document,J as modes};
//# sourceMappingURL=index-0c5318b6.js.map