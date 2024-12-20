"use strict";(self.webpackChunksolgdocs=self.webpackChunksolgdocs||[]).push([[70],{7208:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"faq","title":"Frequently Asked Questions (FAQ)","description":"---","source":"@site/docs/faq.md","sourceDirName":".","slug":"/faq","permalink":"/faq","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"faq","slug":"/faq"},"sidebar":"tutorialSidebar","next":{"title":"Making a Prediction for the Next Round","permalink":"/"}}');var r=s(4848),o=s(8453);const i={id:"faq",slug:"/faq"},l="Frequently Asked Questions (FAQ)",a={},c=[{value:"<strong>Is there a time limit before I can collect my winnings?</strong>",id:"is-there-a-time-limit-before-i-can-collect-my-winnings",level:3},{value:"<strong>How is the payout calculated?</strong>",id:"how-is-the-payout-calculated",level:3},{value:"Formulas:",id:"formulas",level:4},{value:"Example:",id:"example",level:4},{value:"<strong>What are the fees?</strong>",id:"what-are-the-fees",level:3},{value:"<strong>What are you using for your price feed?</strong>",id:"what-are-you-using-for-your-price-feed",level:3}];function h(e){const n={br:"br",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"frequently-asked-questions-faq",children:"Frequently Asked Questions (FAQ)"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"is-there-a-time-limit-before-i-can-collect-my-winnings",children:(0,r.jsx)(n.strong,{children:"Is there a time limit before I can collect my winnings?"})}),"\n",(0,r.jsx)(n.p,{children:"No, you\u2019ll be able to collect your winnings at any time in the future."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"how-is-the-payout-calculated",children:(0,r.jsx)(n.strong,{children:"How is the payout calculated?"})}),"\n",(0,r.jsx)(n.p,{children:"The payout is determined based on the total value of the prize pool and the amount committed to each position (UP or DOWN)."}),"\n",(0,r.jsx)(n.h4,{id:"formulas",children:"Formulas:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Payout Ratio for UP Pool"})," = Total Value of Both Pools \xf7 Value of UP Pool"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Payout Ratio for DOWN Pool"})," = Total Value of Both Pools \xf7 Value of DOWN Pool"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example:"}),"\n",(0,r.jsx)(n.p,{children:"If there\u2019s 15 SOL in the DOWN pool of a round, and the overall prize pool is 150 SOL:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"DOWN payout ratio"})," will be ",(0,r.jsx)(n.code,{children:"(150 \xf7 15) = 10x"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The payout amount is then calculated using the formula:",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Payout Amount"})," = Payout Ratio \xd7 Position \xd7 (1 - Treasury Fee)"]}),"\n",(0,r.jsx)(n.p,{children:"If the round ends on a DOWN result and you committed 2 SOL to a DOWN position:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Payout"})," = ",(0,r.jsx)(n.code,{children:"(2 \xd7 10) \xd7 (1 - 0.05)"})," = ",(0,r.jsx)(n.strong,{children:"19 SOL"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Profit"})," = ",(0,r.jsx)(n.code,{children:"19 - 2"})," = ",(0,r.jsx)(n.strong,{children:"17 SOL"})]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"what-are-the-fees",children:(0,r.jsx)(n.strong,{children:"What are the fees?"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"5% of each round's total pot"})," will go to SOLGuesser as a fee."]}),"\n",(0,r.jsx)(n.li,{children:"This fee ensures the platform runs smoothly and supports team expenses."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The fee rate may change, and updates will be announced via official communication channels."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"what-are-you-using-for-your-price-feed",children:(0,r.jsx)(n.strong,{children:"What are you using for your price feed?"})}),"\n",(0,r.jsxs)(n.p,{children:["SOLGuesser uses the ",(0,r.jsx)(n.strong,{children:"Pyth Oracle"})," for its price feeds, which are updated every second."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Lock Price"}),": The price at the beginning of a round."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"End Price"}),": The price at the conclusion of a round."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These prices determine whether a user\u2019s prediction wins or loses. Pyth Oracle ensures accurate and timely pricing for the prediction market."})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(6540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);