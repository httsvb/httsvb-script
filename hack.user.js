// ==UserScript==
// @name         Speed Hack V8 (GitHub Version)
// @namespace    http://tampermonkey.net/
// @version      8.1
// @description  Speed Hack V8 - Protected & Working
// @author       Gemini Enterprise
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function _runner() {
        const _w=window,_d=document,_l=localStorage,_c=console,_j=JSON,_p=parseFloat;
        const _B=["google.com/recaptcha","hcaptcha","cloudflare","turnstile"];
        if(_B.some(x=>_w.location.href.includes(x)))return;
        _c.log("%c🚀 SPEED HACK V8","color:#0f0");
        const _K='GM_SPD_SET',_G='gmHack';
        const _LS=()=>{try{return _j.parse(_l.getItem(_K))}catch(e){return null}};
        const _S=_LS()||{s:100,e:false,t:"50px",l:"50px"};
        const _SV=()=>{try{_l.setItem(_K,_j.stringify({s:_w[_G].s,e:_w[_G].e,t:_d.getElementById('gr').style.top,l:_d.getElementById('gr').style.left}))}catch(e){}};
        const _N={p:_w.performance.now.bind(_w.performance),d:Date.now.bind(Date),r:_w.requestAnimationFrame.bind(_w),t:_w.setTimeout.bind(_w),i:_w.setInterval.bind(_w)};
        _w[_G]={s:_S.s,e:_S.e,r:_N.p(),v:_N.p()};
        const _V=()=>{const n=_N.p();if(!_w[_G].e)return n;return _w[_G].v+(n-_w[_G].r)*_w[_G].s};
        const _C=()=>{const n=_N.p();_w[_G].v=_w[_G].v+(n-_w[_G].r)*_w[_G].s;_w[_G].r=n};
        if(_w.performance){try{Object.defineProperty(Object.getPrototypeOf(_w.performance),'now',{value:()=>_V()})}catch(e){_w.performance.now=()=>_V()}}
        const _O=_N.d()-_N.p();Date.now=()=>Math.floor(_V()+_O);_w.Date=new Proxy(Date,{construct(t,a){return a.length===0?new t(Math.floor(_V()+_O)):new t(...a)}});
        _w.requestAnimationFrame=c=>_N.r(t=>c(_V()));
        _w.setTimeout=(f,d,...a)=>_N.t(f,(_w[_G].e&&d>50)?d/_w[_G].s:d,...a);
        _w.setInterval=(f,d,...a)=>_N.i(f,(_w[_G].e&&d>50)?d/_w[_G].s:d,...a);
        const _UI=setInterval(()=>{if(!_d.body)return;clearInterval(_UI);if(_d.getElementById('gr'))_d.getElementById('gr').remove();
        const r=_d.createElement('div');r.id='gr';
        r.style.cssText=`position:fixed;top:${_S.t};left:${_S.l};z-index:2147483647;background:#111;border:1px solid #333;border-radius:4px;box-shadow:0 4px 10px rgba(0,0,0,0.5);font-family:sans-serif;display:flex;flex-direction:column;width:130px;user-select:none;`;
        r.innerHTML=`<div id="gh" style="background:#222;color:#888;padding:4px 8px;font-size:10px;font-weight:bold;cursor:move;border-bottom:1px solid #333;display:flex;justify-content:space-between"><span>⚡ SPD</span><span>:::</span></div><div style="padding:8px;display:flex;gap:4px;align-items:center"><input type="number" id="gi" value="${_S.s}" style="width:50px;background:#000;border:1px solid #444;color:#fff;font-size:12px;padding:2px;text-align:center;border-radius:2px"><button id="gb" style="flex:1;border:none;font-size:11px;font-weight:bold;cursor:pointer;border-radius:2px;padding:3px 0;color:#fff;background:${_S.e?'#28a745':'#dc3545'}">${_S.e?'ON':'OFF'}</button></div>`;
        _d.body.appendChild(r);const h=_d.getElementById('gh'),i=_d.getElementById('gi'),b=_d.getElementById('gb');
        i.onkeydown=e=>e.stopPropagation();i.onchange=e=>{_C();let v=_p(e.target.value);if(v<=0)v=1;_w[_G].s=v;_SV()};
        b.onclick=()=>{_C();_w[_G].e=!_w[_G].e;b.innerText=_w[_G].e?'ON':'OFF';b.style.background=_w[_G].e?'#28a745':'#dc3545';_SV()};
        let id=false,sx,sy,ix,iy;h.onmousedown=e=>{id=true;sx=e.clientX;sy=e.clientY;const rt=r.getBoundingClientRect();ix=rt.left;iy=rt.top;_d.addEventListener('mousemove',om);_d.addEventListener('mouseup',ou)};
        function om(e){if(!id)return;r.style.left=(ix+e.clientX-sx)+'px';r.style.top=(iy+e.clientY-sy)+'px'}
        function ou(){id=false;_d.removeEventListener('mousemove',om);_d.removeEventListener('mouseup',ou);_SV()}},50);
    }
    const s = document.createElement('script');
    s.textContent = `(${_runner.toString()})();`;
    (document.head || document.documentElement).appendChild(s);
    s.remove();
})();