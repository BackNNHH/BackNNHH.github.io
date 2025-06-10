import{d as r,r as i,u as b,b as $,c as w,j as e,L as f,e as j,B as v,f as A,h as k,k as S,i as y,g as L,l as I,m as C}from"./Router-DzDavRjf.js";const O="/assets/CTMB_title-Bl0FhaIK.png",R=r.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${t=>t.$isAnim?"100vh":"40px"};
    background: linear-gradient(45deg, #03df50, #1a9bd4);
    box-shadow: 0 2px 10px rgba(13, 156, 253, 0.8);
    backdrop-filter: blur(10px);
    z-index: 1234;
    display: flex;
    align-items: center;
    padding: 0 10px;
    transition: height 1s ease-in-out;
`,E=r.img`
    position: absolute;
    top: ${t=>t.$isAnim?"50%":"5px"};
    left: ${t=>t.$isAnim?"50%":"50px"};
    width: 6rem;
    transform: ${t=>t.$isAnim?"translate(-50%, -50%) scale(5.5)":"none"};
    opacity: ${t=>t.$Alpha&&t.$isAnim?"0":"1"};
    transition: all 1s ease-in-out;
    z-index: 1100;

    @media (max-width: 768px) {
        transform: ${t=>t.$isAnim?"translate(calc(-50% - 10px), -50%) scale(3)":"none"};
    }
`,T=r.nav`
    display: flex;
    align-items: center;
    transform: ${t=>t.$isAnim?"translateX(-200%)":"translateX(0)"};
    transition: transform 1s ease-in-out;
    overflow: auto;

    @media (max-width: 768px) {
        position: fixed;
        top: 40px;
        left: 0;
        width: 180px;
        height: calc(100vh - 60px);
        background: linear-gradient(120deg, #03df50, #1a9bd4);
        backdrop-filter: blur(10px);
        flex-direction: column;
        padding: 20px;
        transform: ${t=>t.$isOpen?"translateX(0)":"translateX(-100%)"};
        transition: transform 0.3s ease-in-out;
    }

    @media (min-width: 769px) {
        margin-left: 180px;
    }
`,H=r(f)`
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    font-size: 18px;
    font-family: 'Mojangles', sans-serif;
    transition: all 0.3s ease;

    &:hover {
        color: #b7ff00;
        transform: translateY(-2px);
    }

    ${t=>t.$isActive&&"color: #007bff;border-bottom: 2px solid #005fc5;"}

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        margin: 10px 0;
        border-bottom-style: dashed;
    }
`,X=r(f)`
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    font-size: 18px;
    font-family: 'Mojangles', sans-serif, emoji;
    transition: all 0.3s ease;

    &:hover {
        color: #b7ff00;
        transform: translateY(-2px);
    }

    ${t=>t.$isActive&&`
    color: #007bff;
    border-bottom: 10px solid #005fc5;
    padding-bottom: 0px;
    animation: rainbow-border 2s linear infinite;
    `}

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        margin: 10px 0;
    }

    // prettier-ignore
    @keyframes rainbow-border {
        0%   { border-bottom-color: #ff0000; }  
        16%  { border-bottom-color: #ffff00; } 
        33%  { border-bottom-color: #00ff00; }
        50%  { border-bottom-color: #00ffff; }
        66%  { border-bottom-color: #0000ff; }
        83%  { border-bottom-color: #ff00ff; }
        100% { border-bottom-color: #ff0000; }
    }
`,z=r.div`
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
        margin-right: 20px;
        transform: ${t=>t.$isAnim?"translateX(-200%)":"translateX(0)"};
        transition: all 1s ease;
    }

    div {
        width: 25px;
        height: 3px;
        background: white;
        margin: 5px 0;
        transition: all 0.3s ease;

        &:nth-child(1) {
            transform: ${t=>t.$isOpen?"rotate(45deg) translate(7px, 7px)":"none"};
        }
        &:nth-child(2) {
            opacity: ${t=>t.$isOpen?"0":"1"};
        }
        &:nth-child(3) {
            transform: ${t=>t.$isOpen?"rotate(-45deg) translate(7px, -7px)":"none"};
        }
    }
`;function p(t){return location.pathname.toLowerCase()===t.p.toLowerCase()}function B({navItems:t}){const c=b(),l=$(),s=w("ShowOpening"),[o,a]=i.useState(!1),[d,x]=i.useState(s),[m,h]=i.useState(s);i.useEffect(()=>{if(s){const n=setTimeout(()=>h(!1),100),u=setTimeout(()=>x(!1),1500);return()=>{clearTimeout(n),clearTimeout(u)}}},[s]);const g=i.useCallback(()=>{a(!1)},[]);return e.jsxs(R,{$isAnim:d,children:[e.jsxs(z,{$isOpen:o,$isAnim:d,onClick:()=>a(!o),children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsx(E,{$isAnim:d,$Alpha:m,src:O,onClick:()=>l("/"),alt:"Logo"}),e.jsx(T,{$isOpen:o,$isAnim:d,children:t.map(n=>n.re!==!1?e.jsx(H,{to:n.p,$isActive:p(n),onClick:g,children:n.l},n.p):p(n)?e.jsx(X,{to:n.p,$isActive:c.pathname.toLowerCase()===n.p.toLowerCase(),onClick:()=>a(!1),children:n.l},n.p):null)})]})}const M=i.memo(B);function N(){const[t,c]=i.useState(!0),[l,s]=i.useState([]);return i.useEffect(()=>{async function o(){try{await y(),s(L()),c(!0)}catch(a){console.error("App: Failed to initialize navigation settings:",a)}finally{c(!1)}}o()},[]),t?e.jsx(j,{}):l.length===0&&!t?e.jsx("div",{children:"Error: No routes available. Please check configuration or try again later."}):e.jsxs(v,{children:[e.jsx(A,{}),e.jsx(M,{navItems:l}),e.jsx(k,{children:l.map(o=>{if(o.c){const a=o.c;return e.jsx(S,{path:o.p,element:e.jsx(a,{})},o.p)}return null})})]})}I.createRoot(document.getElementById("root")).render(e.jsx(i.Suspense,{fallback:e.jsx(C,{}),children:e.jsx(i.StrictMode,{children:e.jsx(N,{})})}));
