import{d,r as i,j as t,c as h}from"./styled-components.browser.esm-DF6RYU2E.js";import{u as g,b,N as p,L as $,B as w,R as j,c as v,d as A,i as k,a as S,e as y}from"./Router-BVEtLtNW.js";const I="/assets/CTMB_title-Bl0FhaIK.png",L=d.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${e=>e.$isAnim?"100vh":"40px"};
    background: linear-gradient(45deg, #03df50, #1a9bd4);
    box-shadow: 0 2px 10px rgba(13, 156, 253, 0.8);
    backdrop-filter: blur(10px);
    z-index: 1234;
    display: flex;
    align-items: center;
    padding: 0 10px;
    transition: height 1s ease-in-out;
`,R=d.img`
    position: absolute;
    top: ${e=>e.$isAnim?"50%":"5px"};
    left: ${e=>e.$isAnim?"50%":"50px"};
    width: 6rem;
    transform: ${e=>e.$isAnim?"translate(-50%, -50%) scale(5.5)":"none"};
    opacity: ${e=>e.$Alpha&&e.$isAnim?"0":"1"};
    transition: all 1s ease-in-out;
    z-index: 1100;

    @media (max-width: 768px) {
        transform: ${e=>e.$isAnim?"translate(calc(-50% - 10px), -50%) scale(3)":"none"};
    }
`,z=d.nav`
    display: flex;
    align-items: center;
    transform: ${e=>e.$isAnim?"translateX(-200%)":"translateX(0)"};
    transition: transform 1s ease-in-out;
    overflow: auto;

    @media (max-width: 768px) {
        position: fixed;
        top: 40px;
        left: 0;
        width: 180px;
        height: 100vh;
        background: linear-gradient(120deg, #03df50, #1a9bd4);
        backdrop-filter: blur(10px);
        flex-direction: column;
        padding: 20px;
        transform: ${e=>e.$isOpen?"translateX(0)":"translateX(-100%)"};
        transition: transform 0.3s ease-in-out;
    }

    @media (min-width: 769px) {
        margin-left: 180px;
    }
`,C=d(p)`
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

    &.active {
        color: #007bff;
        border-bottom: 2px solid #005fc5;
    }

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        // margin: 5px 0;
        border-bottom-style: dashed;
    }
`,E=d(p)`
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

    &.active {
        color: #007bff;
        border-bottom: 10px solid #005fc5;
        padding-bottom: 0px;
        animation: rainbow-border 2s linear infinite;
    }

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
`,O=d.div`
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
        margin-right: 20px;
        transform: ${e=>e.$isAnim?"translateX(-200%)":"translateX(0)"};
        transition: all 1s ease;
    }

    div {
        width: 25px;
        height: 3px;
        background: white;
        margin: 5px 0;
        transition: all 0.3s ease;

        &:nth-child(1) {
            transform: ${e=>e.$isOpen?"rotate(45deg) translate(7px, 7px)":"none"};
        }
        &:nth-child(2) {
            opacity: ${e=>e.$isOpen?"0":"1"};
        }
        &:nth-child(3) {
            transform: ${e=>e.$isOpen?"rotate(-45deg) translate(7px, -7px)":"none"};
        }
    }
`;function T({navItems:e}){const l=g(),s=b("ShowOpening"),[c,a]=i.useState(!1),[n,o]=i.useState(s),[f,m]=i.useState(s);i.useEffect(()=>{if(s){const r=setTimeout(()=>m(!1),100),u=setTimeout(()=>o(!1),1500);return()=>{clearTimeout(r),clearTimeout(u)}}},[s]);const x=i.useCallback(()=>{a(!1)},[]);return t.jsxs(L,{$isAnim:n,children:[t.jsxs(O,{$isOpen:c,$isAnim:n,onClick:()=>a(!c),children:[t.jsx("div",{}),t.jsx("div",{}),t.jsx("div",{})]}),t.jsx(R,{$isAnim:n,$Alpha:f,src:I,onClick:()=>l("/"),alt:"Logo"}),t.jsx(z,{$isOpen:c,$isAnim:n,children:e.map(r=>r.re!==!1?t.jsx(C,{to:r.p,end:!0,onClick:x,children:r.l},r.p):location.pathname.toLowerCase()===r.p.toLowerCase()?t.jsx(E,{to:r.p,end:!0,onClick:()=>a(!1),children:r.l},r.p):null)})]})}const N=i.memo(T),H=(e={})=>{const{threshold:l=30,timeWindowInMs:s=1e4}=e,[c,a]=i.useState(!1),n=i.useRef(0),o=i.useRef(null);return i.useEffect(()=>{const f=()=>{n.current+=1,o.current&&clearTimeout(o.current),n.current>l&&a(!0),o.current=setTimeout(()=>{n.current=0,a(!1)},s)};return window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f),o.current&&clearTimeout(o.current)}},[l,s]),c};function X(){const[e,l]=i.useState(!0),[s,c]=i.useState([]);i.useEffect(()=>{async function n(){try{await k(),c(S()),l(!0)}catch(o){console.error("App: Failed to initialize navigation settings:",o)}finally{l(!1)}}n()},[]);const a=H();return e?t.jsx($,{}):s.length===0&&!e?t.jsx("div",{children:"Error: No routes available. Please check configuration or try again later."}):t.jsx("div",{className:`${a?"shaking":""}`,children:t.jsxs(w,{children:[t.jsx(j,{}),t.jsx(N,{navItems:s}),t.jsx(v,{children:s.map(n=>{if(n.c){const o=n.c;return t.jsx(A,{path:n.p,element:t.jsx(o,{})},n.p)}return null})})]})})}h.createRoot(document.getElementById("root")).render(t.jsx(i.Suspense,{fallback:t.jsx(y,{}),children:t.jsx(i.StrictMode,{children:t.jsx(X,{})})}));
