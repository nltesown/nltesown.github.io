import{S as w,i as y,s as z,e as d,t as v,c as E,a as b,h as N,d as m,g as n,N as P,j as R,k as j,l as q,m as S,O as C}from"./chunks/vendor-c7d759e4.js";function H(r){let l,t=r[1].frame+"",a;return{c(){l=d("pre"),a=v(t)},l(f){l=E(f,"PRE",{});var s=b(l);a=N(s,t),s.forEach(m)},m(f,s){n(f,l,s),P(l,a)},p(f,s){s&2&&t!==(t=f[1].frame+"")&&R(a,t)},d(f){f&&m(l)}}}function O(r){let l,t=r[1].stack+"",a;return{c(){l=d("pre"),a=v(t)},l(f){l=E(f,"PRE",{});var s=b(l);a=N(s,t),s.forEach(m)},m(f,s){n(f,l,s),P(l,a)},p(f,s){s&2&&t!==(t=f[1].stack+"")&&R(a,t)},d(f){f&&m(l)}}}function A(r){let l,t,a,f,s=r[1].message+"",c,k,u,p,i=r[1].frame&&H(r),o=r[1].stack&&O(r);return{c(){l=d("h1"),t=v(r[0]),a=j(),f=d("pre"),c=v(s),k=j(),i&&i.c(),u=j(),o&&o.c(),p=q()},l(e){l=E(e,"H1",{});var _=b(l);t=N(_,r[0]),_.forEach(m),a=S(e),f=E(e,"PRE",{});var h=b(f);c=N(h,s),h.forEach(m),k=S(e),i&&i.l(e),u=S(e),o&&o.l(e),p=q()},m(e,_){n(e,l,_),P(l,t),n(e,a,_),n(e,f,_),P(f,c),n(e,k,_),i&&i.m(e,_),n(e,u,_),o&&o.m(e,_),n(e,p,_)},p(e,[_]){_&1&&R(t,e[0]),_&2&&s!==(s=e[1].message+"")&&R(c,s),e[1].frame?i?i.p(e,_):(i=H(e),i.c(),i.m(u.parentNode,u)):i&&(i.d(1),i=null),e[1].stack?o?o.p(e,_):(o=O(e),o.c(),o.m(p.parentNode,p)):o&&(o.d(1),o=null)},i:C,o:C,d(e){e&&m(l),e&&m(a),e&&m(f),e&&m(k),i&&i.d(e),e&&m(u),o&&o.d(e),e&&m(p)}}}function F({error:r,status:l}){return{props:{error:r,status:l}}}function B(r,l,t){let{status:a}=l,{error:f}=l;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,f=s.error)},[a,f]}class G extends w{constructor(l){super();y(this,l,B,A,z,{status:0,error:1})}}export{G as default,F as load};
