import{S as z,i as K,s as U,e as p,k as I,t as P,a2 as F,c as f,a as y,d as i,m as D,h as B,a3 as G,b as v,a0 as Z,f as j,g as E,I as l,$ as Q,M as R,_ as b,v as J,a4 as W}from"../chunks/vendor-7240305d.js";function X(h){let o,t,a,u,M,g,r,d,c,e,n,_,S,w,C,k,T,x;return{c(){o=p("div"),t=p("div"),a=p("video"),u=p("track"),g=I(),r=p("div"),d=p("div"),c=p("h1"),e=I(),n=p("h2"),_=P("Visa n\xB0\u2009"),S=new F,w=I(),C=p("div"),k=P("Un g\xE9n\xE9rateur, pour quoi faire en effet ?"),this.h()},l(s){o=f(s,"DIV",{class:!0});var m=y(o);t=f(m,"DIV",{class:!0});var A=y(t);a=f(A,"VIDEO",{preload:!0,src:!0,class:!0});var H=y(a);u=f(H,"TRACK",{kind:!0}),H.forEach(i),g=D(A),r=f(A,"DIV",{class:!0});var V=y(r);d=f(V,"DIV",{class:!0});var N=y(d);c=f(N,"H1",{class:!0});var $=y(c);$.forEach(i),N.forEach(i),e=D(V),n=f(V,"H2",{class:!0});var L=y(n);_=B(L,"Visa n\xB0\u2009"),S=G(L),L.forEach(i),V.forEach(i),A.forEach(i),m.forEach(i),w=D(s),C=f(s,"DIV",{style:!0});var O=y(C);k=B(O,"Un g\xE9n\xE9rateur, pour quoi faire en effet ?"),O.forEach(i),this.h()},h(){v(u,"kind","captions"),a.autoplay=!0,a.loop=!0,v(a,"preload","auto"),Z(a.src,M="../video/sndv.mp4")||v(a,"src",M),v(a,"class","svelte-cwctwt"),v(c,"class","shake svelte-cwctwt"),v(d,"class","title-container svelte-cwctwt"),S.a=null,v(n,"class","shake svelte-cwctwt"),v(r,"class","text-container svelte-cwctwt"),v(t,"class","video-container svelte-cwctwt"),v(o,"class","video-wrapper svelte-cwctwt"),j(C,"height","100vh")},m(s,m){E(s,o,m),l(o,t),l(t,a),l(a,u),l(t,g),l(t,r),l(r,d),l(d,c),c.innerHTML=h[0],l(r,e),l(r,n),l(n,_),S.m(h[1],n),E(s,w,m),E(s,C,m),l(C,k),T||(x=Q(t,"click",h[2]),T=!0)},p(s,[m]){m&1&&(c.innerHTML=s[0]),m&2&&S.p(s[1])},i:R,o:R,d(s){s&&i(o),s&&i(w),s&&i(C),T=!1,x()}}}function q(h){return`Son nom ${"AEIOU".indexOf(h[0].n.substring(0,1).toUpperCase())!==-1?"d'":"de "}${h[0].n}<br>dans ${h[1].n}<br>desert`}function Y(h,o,t){let a=[["Astrakhan","Amalfi","Andernos","Arcachon","Asmara","Aubenas","Aubusson","Bayeux","Bergame","Cabourg","Carlsbad","Carthage","Catane","Chaville","Cholet","Coblence","Corfou","Corinthe","Cythere","Drancy","Dunkerque","Sochaux","Etretat","Fecamp","Geneve","Gueret","Hanovre","Hanoi","Honfleur","Houlgate","Ispahan","Khartoum","La Baule","Lahore","Lausanne","Lhassa","Limoges","Livourne","Louksor","Louvain","Thionville","Manille","Mascate","Melun","Messine","Moulins","Naxos","Namur","Nemours","Nevers","Odessa","Oleron","Oyonnax","Phnom Penh","Paris","Poitiers","Quimper","Roubaix","Rangoun","Ravenne","Venise","Roissy","Royan","Sanaa","Saigon","Saint-Maur","Chiraz","Tachkent","Tanger","Toulon","Trevise","Trouville","Trieste","Valence","Vesoul","Vichy","Vincennes","Vientiane","Vitrolles"],["Astrakhan","Angouleme","Andernos","Ankara","Annonay","Asmara","Aubusson","Bangalore","Bassora","Benares","Beyrouth","Carthagene","Carpentras","Charenton","Chatellerault","Chateauroux","Charleroi","Charleville","Colombo","Djibouti","Dubrovnik","Flamanville","Fontainebleau","Ispahan","Katmandou","Knokke-Le-Zoute","Tripoli","La Rochelle","Le Crotoy","Le Treport","L'Isle-Adam","Libreville","Luxembourg","Macao","Macassar","Malmaison","Mandalay","Marienbad","Marrakech","Marsala","Mombasa","Montargis","Montlu\xE7on","Mourmelon","Nagoya","Nairobi","Nazareth","Nicosie","Nuremberg","Odessa","Omaha","Orleans","Panama","Port-Said","Pristina","Salonique","Saint-Amand","Saint-Dizier","Saint-Germain","Saint-Mande","Saint-Malo","Saint-Nazaire","Calcutta","Samara","Savannah","Sils Maria","Singapour","Syracuse","Tbilissi","Teheran","Tirana","Varsovie","Ville-d'Avray","Zanzibar"]];a=b(a).map(e=>b(e).map((n,_)=>({n,i:_})).value()).value();let u=[b(a[0]).find(e=>e.n==="Venise"),b(a[1]).find(e=>e.n==="Calcutta")],M="",g="",r;J(async()=>{t(0,M=q(u)),t(1,g=c(u)),r=setInterval(d,5e3)}),W(async()=>{r&&clearInterval(r)});async function d(){for(let e=0;e<14;e++)await new Promise(n=>{setTimeout(()=>{let _=b.sample([0,1]);u[_]=b.sample(a[_]),t(0,M=q(u)),t(1,g=c(u)),n()},35)})}function c(e){let n=`4${b.pad(e[0].i,2,"0")}${b.pad(e[1].i,2,"0")}`;return`${n.substring(0,2)}&thinsp;${n.substring(2)}`}return[M,g,d]}class ea extends z{constructor(o){super();K(this,o,Y,X,U,{})}}export{ea as default};
