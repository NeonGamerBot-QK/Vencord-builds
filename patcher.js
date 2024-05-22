// Vencord e624dbe
// Standalone: true
// Platform: Universal
// Updater disabled: false
"use strict";var Nn=Object.create;var _e=Object.defineProperty;var Ln=Object.getOwnPropertyDescriptor;var Mn=Object.getOwnPropertyNames;var Un=Object.getPrototypeOf,Fn=Object.prototype.hasOwnProperty;var p=(e,t)=>()=>(e&&(t=e(e=0)),t);var B=(e,t)=>{for(var r in t)_e(e,r,{get:t[r],enumerable:!0})},Ut=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Mn(t))!Fn.call(e,i)&&i!==r&&_e(e,i,{get:()=>t[i],enumerable:!(n=Ln(t,i))||n.enumerable});return e};var K=(e,t,r)=>(r=e!=null?Nn(Un(e)):{},Ut(t||!e||!e.__esModule?_e(r,"default",{value:e,enumerable:!0}):r,e)),Ft=e=>Ut(_e({},"__esModule",{value:!0}),e);var c=p(()=>{"use strict"});var ye=p(()=>{"use strict";c()});var we,Ye=p(()=>{c();we="e624dbe"});var ie,Je=p(()=>{c();ie="NeonGamerBot-QK/Vencord"});var Vt,zt=p(()=>{"use strict";c();Ye();Je();Vt=`Vencord/${we}${ie?` (https://github.com/${ie})`:""}`});function oe(e,t={}){return new Promise((r,n)=>{bt.default.get(e,t,i=>{let{statusCode:o,statusMessage:a,headers:s}=i;if(o>=400)return void n(`${o}: ${a} - ${e}`);if(o>=300)return void r(oe(s.location,t));let l=[];i.on("error",n),i.on("data",u=>l.push(u)),i.once("end",()=>r(Buffer.concat(l)))})})}var bt,qe=p(()=>{"use strict";c();bt=K(require("https"))});function Se(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(t){return{ok:!1,error:t instanceof Error?{...t}:t}}}}var Wt,jt=p(()=>{"use strict";c();Wt=["patcher.js","preload.js","renderer.js","renderer.css"]});var Wn={};async function Bt(e){return oe(Vn+e,{headers:{Accept:"application/vnd.github+json","User-Agent":Vt}})}async function zn(){if(!await Kt())return[];let t=await Bt(`/compare/${we}...HEAD`);return JSON.parse(t.toString("utf-8")).commits.map(n=>({hash:n.sha.slice(0,7),author:n.author.login,message:n.commit.message.split(`
`)[0]}))}async function Kt(){let e=await Bt("/releases/latest"),t=JSON.parse(e.toString());return t.name.slice(t.name.lastIndexOf(" ")+1)===we?!1:(t.assets.forEach(({name:n,browser_download_url:i})=>{Wt.some(o=>n.startsWith(o))&&$e.push([n,i])}),!0)}async function bn(){return await Promise.all($e.map(async([e,t])=>(0,Zt.writeFile)((0,Ht.join)(__dirname,e),await oe(t)))),$e=[],!0}var xe,Zt,Ht,Vn,$e,Yt=p(()=>{"use strict";c();ye();zt();xe=require("electron"),Zt=require("fs/promises"),Ht=require("path");Ye();Je();qe();jt();Vn=`https://api.github.com/repos/${ie}`,$e=[];xe.ipcMain.handle("VencordGetRepo",Se(()=>`https://github.com/${ie}`));xe.ipcMain.handle("VencordGetUpdates",Se(zn));xe.ipcMain.handle("VencordUpdate",Se(Kt));xe.ipcMain.handle("VencordBuild",Se(bn))});var Jt=p(()=>{"use strict";c();Promise.resolve().then(()=>Yt())});var Qe={};B(Qe,{openFilePrompt:()=>jn,readFilePath:()=>Hn,uniqueIdForThisPluginCalledCustomUpload:()=>Zn});function jn(){return new Promise((e,t)=>{let r=qt.dialog.showOpenDialogSync({properties:["openFile"]});console.log(r),r||(r=[]),e(r)})}function Zn(){}function Hn(e,t){return console.log(e,t),(0,$t.readFileSync)(t)}var qt,$t,Xt=p(()=>{"use strict";c();qt=require("electron"),$t=require("fs")});var et={};B(et,{noop:()=>Bn});var Bn,Qt=p(()=>{"use strict";c();Bn=()=>{}});var Te,er=p(()=>{"use strict";c();Te=class{pathListeners=new Map;globalListeners=new Set;constructor(t,r={}){this.plain=t,this.store=this.makeProxy(t),Object.assign(this,r)}makeProxy(t,r=t,n=""){let i=this;return new Proxy(t,{get(o,a){let s=o[a];return!(a in o)&&i.getDefaultValue&&(s=i.getDefaultValue({target:o,key:a,root:r,path:n})),typeof s=="object"&&s!==null&&!Array.isArray(s)?i.makeProxy(s,r,`${n}${n&&"."}${a}`):s},set(o,a,s){if(o[a]===s)return!0;Reflect.set(o,a,s);let l=`${n}${n&&"."}${a}`;return i.globalListeners.forEach(u=>u(s,l)),i.pathListeners.get(l)?.forEach(u=>u(s)),!0}})}setData(t,r){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=t,this.store=this.makeProxy(t),r){let n=t,i=r.split(".");for(let o of i){if(!n){console.warn(`Settings#setData: Path ${r} does not exist in new data. Not dispatching update`);return}n=n[o]}this.pathListeners.get(r)?.forEach(o=>o(n))}this.markAsChanged()}addGlobalChangeListener(t){this.globalListeners.add(t)}addChangeListener(t,r){let n=this.pathListeners.get(t)??new Set;n.add(r),this.pathListeners.set(t,n)}removeGlobalChangeListener(t){this.globalListeners.delete(t)}removeChangeListener(t,r){let n=this.pathListeners.get(t);!n||(n.delete(r),n.size||this.pathListeners.delete(t))}markAsChanged(){this.globalListeners.forEach(t=>t(this.plain,""))}}});function tt(e,t){for(let r in t){let n=t[r];typeof n=="object"&&!Array.isArray(n)?(e[r]??={},tt(e[r],n)):e[r]??=n}return e}var tr=p(()=>{"use strict";c()});var rr,V,ae,se,z,ce,rt,nt,nr,ke,Y=p(()=>{"use strict";c();rr=require("electron"),V=require("path"),ae=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,V.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,V.join)(rr.app.getPath("userData"),"..","Vencord")),se=(0,V.join)(ae,"settings"),z=(0,V.join)(ae,"themes"),ce=(0,V.join)(se,"quickCss.css"),rt=(0,V.join)(se,"settings.json"),nt=(0,V.join)(se,"native-settings.json"),nr=["https:","http:","steam:","spotify:","com.epicgames.launcher:","tidal:"],ke=process.argv.includes("--vanilla")});function or(e,t){try{return JSON.parse((0,J.readFileSync)(t,"utf-8"))}catch(r){return r?.code!=="ENOENT"&&console.error(`Failed to read ${e} settings`,r),{}}}var Ge,J,T,Kn,ar,ir,le=p(()=>{"use strict";c();ye();er();tr();Ge=require("electron"),J=require("fs");Y();(0,J.mkdirSync)(se,{recursive:!0});T=new Te(or("renderer",rt));T.addGlobalChangeListener(()=>{try{(0,J.writeFileSync)(rt,JSON.stringify(T.plain,null,4))}catch(e){console.error("Failed to write renderer settings",e)}});Ge.ipcMain.handle("VencordGetSettingsDir",()=>se);Ge.ipcMain.on("VencordGetSettings",e=>e.returnValue=T.plain);Ge.ipcMain.handle("VencordSetSettings",(e,t,r)=>{T.setData(t,r)});Kn={plugins:{}},ar=or("native",nt);tt(ar,Kn);ir=new Te(ar);ir.addGlobalChangeListener(()=>{try{(0,J.writeFileSync)(nt,JSON.stringify(ir.plain,null,4))}catch(e){console.error("Failed to write native settings",e)}})});var cr={};var sr,lr=p(()=>{"use strict";c();le();sr=require("electron");sr.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://open.spotify.com/embed/")){let i=T.store.plugins?.FixSpotifyEmbeds;if(!i?.enabled)return;n.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${i.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})})});var fr={};var ur,gr=p(()=>{"use strict";c();le();ur=require("electron");ur.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://www.youtube.com/")){if(!T.store.plugins?.FixYoutubeEmbeds?.enabled)return;n.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})})});var Ne,pr=p(()=>{"use strict";c();Ne=class{constructor(t=1/0){this.maxSize=t}queue=[];promise;next(){let t=this.queue.shift();t?this.promise=Promise.resolve().then(t).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(t){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(t),this.run()}unshift(t){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(t),this.run()}get size(){return this.queue.length}}});async function Yn(e){try{return await(0,Le.access)(e),!0}catch{return!1}}async function ue(e){await Yn(e)||await(0,Le.mkdir)(e)}function it(e){return hr.default.parse(e).name}var Le,hr,ot=p(()=>{"use strict";c();Le=require("fs/promises"),hr=K(require("path"))});async function Me(){try{let e=await at.default.readFile(await vr(),"utf8");return JSON.parse(e)}catch{let t={logsDir:await b(),imageCacheDir:await De()};try{await st(t)}catch{}return t}}async function st(e){!e||await at.default.writeFile(await vr(),JSON.stringify(e,null,4),"utf8")}async function vr(){let e=await b();return await ue(e),mr.default.join(e,"mlSettings.json")}var at,mr,dr=p(()=>{"use strict";c();at=K(require("fs/promises")),mr=K(require("path"));ct();ot()});function Ir(e){let t=new Map,r=(...n)=>{let i=JSON.stringify(n);if(t.has(i))return t.get(i);let o=e(...n);return t.set(i,o),o};return r.clear=()=>t.clear(),r}var Ar=p(()=>{"use strict";c()});async function fe(...e){let t={cwd:await qn(),shell:!0};try{let r;return Jn?r=await Cr("flatpak-spawn",["--host","git",...e],t):r=await Cr("git",e,t),{value:r.stdout.trim(),stderr:r.stderr,ok:!0}}catch(r){return{ok:!1,cmd:r.cmd,message:r.stderr,error:r}}}async function $n(){return await fe("pull")}async function Sr(){return await fe("rev-parse","HEAD")}async function Xn(){let e=await fe("remote","get-url","origin");if(!e.ok)return e;let t=await Sr();return t.ok?{ok:!0,value:{repo:e.value.replace(/git@(.+):/,"https://$1/").replace(/\.git$/,""),gitHash:t.value}}:t}async function Qn(){let e=await fe("branch","--show-current");if(!e.ok)return e;let t="%H;%an;%s",r=`HEAD..origin/${e.value}`;try{await fe("fetch");let n=await fe("log",`--format="${t}"`,r);return n.ok?n.value.trim()===""?{ok:!0,value:[]}:{ok:!0,value:n.value.trim().split(`
`).map(a=>{let[s,l,...u]=a.split(";");return{longHash:s,hash:s.slice(0,7),author:l,message:u.join(";")}})}:n}catch(n){return{ok:!1,cmd:n.cmd,message:n.message,error:n}}}var yr,ut,Ue,wr,Cr,Jn,lt,qn,xr=p(()=>{"use strict";c();yr=require("node:child_process"),ut=require("fs/promises"),Ue=require("path"),wr=require("util");Ar();Cr=(0,wr.promisify)(yr.execFile),Jn=process.platform==="linux"&&Boolean(process.env.FLATPAK_ID?.includes("discordapp")||process.env.FLATPAK_ID?.includes("Discord"));process.platform==="darwin"&&(process.env.PATH=`/usr/local/bin:${process.env.PATH}`);lt=(0,Ue.join)(__dirname,"..","src","userplugins"),qn=Ir(async()=>{let e=await(0,ut.readdir)(lt,{withFileTypes:!0});for(let t of e){if(!t.isDirectory())continue;let r=(0,Ue.join)(lt,t.name);if((await(0,ut.readdir)(r)).includes("LoggedMessageManager.ts"))return(0,Ue.join)(lt,t.name)}})});var pt={};B(pt,{chooseDir:()=>ci,deleteFileNative:()=>ii,getCommitHash:()=>Sr,getDefaultNativeDataDir:()=>b,getDefaultNativeImageDir:()=>De,getImageNative:()=>ri,getLogsFromFs:()=>ai,getNativeSavedImages:()=>ti,getNewCommits:()=>Qn,getRepoInfo:()=>Xn,getSettings:()=>Me,init:()=>Pr,initDirs:()=>Er,messageLoggerEnhancedUniqueIdThingyIdkMan:()=>ei,showItemInFolder:()=>li,update:()=>$n,writeImageNative:()=>ni,writeLogs:()=>si});function ei(){}async function Er(){let{logsDir:e,imageCacheDir:t}=await Me();ft=e||await b(),gt=t||await De()}async function Pr(e){let t=await Tr();await ue(t);let r=await(0,O.readdir)(t);for(let n of r){let i=it(n);ge.set(i,q.default.join(t,n))}}async function ri(e,t){let r=ge.get(t);return r?await(0,O.readFile)(r):null}async function ni(e,t,r){if(!t||!r)return;let n=await Tr(),i=it(t);if(ge.get(i))return;let a=q.default.join(n,t);await ue(n),await(0,O.writeFile)(a,r),ge.set(i,a)}async function ii(e,t){let r=ge.get(t);!r||await(0,O.unlink)(r)}async function ai(e){let t=await Dr();await ue(t);try{return JSON.parse(await(0,O.readFile)(q.default.join(t,Rr),"utf-8"))}catch{}return null}async function si(e,t){let r=await Dr();oi.push(()=>(0,O.writeFile)(q.default.join(r,Rr),t))}async function De(){return q.default.join(await b(),"savedImages")}async function b(){return q.default.join(ae,"MessageLoggerData")}async function ci(e,t){let r=await Me(),n=r[t]||await b(),o=(await Fe.dialog.showOpenDialog({properties:["openDirectory"],defaultPath:n})).filePaths[0];if(!o)throw Error("Invalid Directory");switch(r[t]=o,await st(r),t){case"logsDir":ft=o;break;case"imageCacheDir":gt=o;break}return t==="imageCacheDir"&&await Pr(e),o}async function li(e,t){Fe.shell.showItemInFolder(t)}var O,q,Fe,ge,ti,ft,gt,Tr,Dr,Rr,oi,ct=p(()=>{"use strict";c();O=require("node:fs/promises"),q=K(require("node:path"));pr();Fe=require("electron");Y();dr();xr();ot();ge=new Map,ti=()=>ge,Tr=async()=>gt??await De(),Dr=async()=>ft??await b();Er();Rr="message-logger-logs.json",oi=new Ne});var ht={};B(ht,{resolveRedirect:()=>fi});function _r(e){return new Promise((t,r)=>{let n=(0,Or.request)(new URL(e),{method:"HEAD"},i=>{t(i.headers.location?_r(i.headers.location):e)});n.on("error",r),n.end()})}async function fi(e,t){return ui.test(t)?_r(t):t}var Or,ui,kr=p(()=>{"use strict";c();Or=require("https"),ui=/^https:\/\/(spotify\.link|s\.team)\/.+$/});var mt={};B(mt,{readRecording:()=>gi});async function gi(e,t){t=(0,Ee.normalize)(t);let r=(0,Ee.basename)(t),n=(0,Ee.normalize)(Gr.app.getPath("userData")+"/");if(console.log(r,n,t),r!=="recording.ogg"||!t.startsWith(n))return null;try{let i=await(0,Nr.readFile)(t);return new Uint8Array(i.buffer)}catch{return null}}var Gr,Nr,Ee,Lr=p(()=>{"use strict";c();Gr=require("electron"),Nr=require("fs/promises"),Ee=require("path")});var vt={};B(vt,{sendToOverlay:()=>pi});function pi(e,t){t.icon=Buffer.from(t.icon).toString("base64");let r=JSON.stringify(t);Mr??=(0,Ur.createSocket)("udp4"),Mr.send(r,42069,"127.0.0.1")}var Ur,Mr,Fr=p(()=>{"use strict";c();Ur=require("dgram")});var dt={};B(dt,{openFilePrompt:()=>hi,readFilePath:()=>vi,uniqueIdForThisPluginCalledCustomUpload:()=>mi});function hi(){return new Promise((e,t)=>{let r=Vr.dialog.showOpenDialogSync({properties:["openFile"]});console.log(r),r||(r=[]),e(r)})}function mi(){}function vi(e,t){return console.log(e,t),(0,zr.readFileSync)(t)}var Vr,zr,br=p(()=>{"use strict";c();Vr=require("electron"),zr=require("fs")});var Wr,jr=p(()=>{c();Xt();Qt();lr();gr();ct();kr();Lr();Fr();br();Wr={CustomUpload:Qe,Zeon:et,FixSpotifyEmbeds:cr,FixYoutubeEmbeds:fr,"Message-logger-enh":pt,OpenInApp:ht,VoiceMessages:mt,XsOverlay:vt,ZiplineImages:dt}});var It,Zr,Hr=p(()=>{"use strict";c();ye();It=require("electron");jr();Zr={};for(let[e,t]of Object.entries(Wr)){let r=Object.entries(t);if(!r.length)continue;let n=Zr[e]={};for(let[i,o]of r){let a=`VencordPluginNative_${e}_${i}`;It.ipcMain.handle(a,o),n[i]=a}}It.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=Zr})});function At(e,t=300){let r;return function(...n){clearTimeout(r),r=setTimeout(()=>{e(...n)},t)}}var Br=p(()=>{"use strict";c()});var Kr,Yr=p(()=>{c();Kr="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLm1pbi5jc3MiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLU1Pb1EwMmg4MGhrbGNjZkxyWEZZa0N6RytXVmpPUmZsT3A5WnA4ZGx0aWFSUCszNUxZbk80TEtPa2xSNjRvTUdmR2dKRExPOFdKcGtNMW81Z1pYWVpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICAvPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgaHRtbCwKICAgICAgICAgICAgYm9keSwKICAgICAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2hlYWQ+CgogICAgPGJvZHk+CiAgICAgICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgICAgICA8c2NyaXB0CiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjQwLjAvbWluL3ZzL2xvYWRlci5taW4uanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLVF6TXBYZUNQY2lBSFA0d2JZbFYyUFlnclFjYUVrRFFVanprUFU0eG5qeVZTRDlUMzYvdWRhbXh0TkJxYjRxSzQvYk1RTVBaOGF5ckJlOWhyR2RCRmpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICA+PC9zY3JpcHQ+CgogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgICAgIHJlcXVpcmUuY29uZmlnKHsKICAgICAgICAgICAgICAgIHBhdGhzOiB7CiAgICAgICAgICAgICAgICAgICAgdnM6ICJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo="});function Ct(e,t={}){return{fileName:e,name:t.name??e.replace(/\.css$/i,""),author:t.author??"Unknown Author",description:t.description??"A Discord Theme.",version:t.version,license:t.license,source:t.source,website:t.website,invite:t.invite}}function Jr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function qr(e,t){if(!e)return Ct(t);let r=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!r)return Ct(t);let n={},i="",o="";for(let a of r.split(di))if(a.length!==0)if(a.charAt(0)==="@"&&a.charAt(1)!==" "){n[i]=o.trim();let s=a.indexOf(" ");i=a.substring(1,s),o=a.substring(s+1)}else o+=" "+a.replace("\\n",`
`).replace(Ii,"@");return n[i]=o.trim(),delete n[""],Ct(t,n)}var di,Ii,$r=p(()=>{"use strict";c();di=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,Ii=/^\\@/});function Qr(e){e.webContents.setWindowOpenHandler(({url:t})=>{switch(t){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":case"https://saahild.com":return{action:"allow"}}try{var{protocol:r}=new URL(t)}catch{return{action:"deny"}}switch(r){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":Xr.shell.openExternal(t)}return{action:"deny"}})}var Xr,en=p(()=>{"use strict";c();Xr=require("electron")});function yt(e,t){let r=(0,pe.normalize)(e),n=(0,pe.join)(e,t),i=(0,pe.normalize)(n);return i.startsWith(r)?i:null}function tn(){return(0,X.readFile)(ce,"utf-8").catch(()=>"")}async function Ai(){let e=await(0,X.readdir)(z).catch(()=>[]),t=[];for(let r of e){if(!r.endsWith(".css"))continue;let n=await rn(r).then(Jr).catch(()=>null);n!=null&&t.push(qr(n,r))}return t}function rn(e){e=e.replace(/\?v=\d+$/,"");let t=yt(z,e);return t?(0,X.readFile)(t,"utf-8"):Promise.reject(`Unsafe path ${e}`)}function nn(e){let t;(0,X.open)(ce,"a+").then(n=>{n.close(),t=(0,$.watch)(ce,{persistent:!1},At(async()=>{e.webContents.postMessage("VencordQuickCssUpdate",await tn())},50))}).catch(()=>{});let r=(0,$.watch)(z,{persistent:!1},At(()=>{e.webContents.postMessage("VencordThemeUpdate",void 0)}));e.once("closed",()=>{t?.close(),r.close()})}var v,$,X,pe,wt=p(()=>{"use strict";c();Jt();Hr();le();Br();ye();v=require("electron"),$=require("fs"),X=require("fs/promises"),pe=require("path");Yr();$r();Y();en();(0,$.mkdirSync)(z,{recursive:!0});v.ipcMain.handle("VencordOpenQuickCss",()=>v.shell.openPath(ce));v.ipcMain.handle("VencordOpenExternal",(e,t)=>{try{var{protocol:r}=new URL(t)}catch{throw"Malformed URL"}if(!nr.includes(r))throw"Disallowed protocol.";v.shell.openExternal(t)});v.ipcMain.handle("VencordGetQuickCss",()=>tn());v.ipcMain.handle("VencordSetQuickCss",(e,t)=>(0,$.writeFileSync)(ce,t));v.ipcMain.handle("VencordGetThemesDir",()=>z);v.ipcMain.handle("VencordGetThemesList",()=>Ai());v.ipcMain.handle("VencordGetThemeData",(e,t)=>rn(t));v.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${v.systemPreferences.getAccentColor?.()||""}`}));v.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Vencord QuickCSS Editor",t=v.BrowserWindow.getAllWindows().find(n=>n.title===e);if(t&&!t.isDestroyed()){t.focus();return}let r=new v.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,pe.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});Qr(r),await r.loadURL(`data:text/html;base64,${Kr}`)})});function Dn(e,t,r){let n=t;if(t in e)return void r(e[n]);Object.defineProperty(e,t,{set(i){delete e[n],e[n]=i,r(i)},configurable:!0,enumerable:!1})}var En=p(()=>{"use strict";c()});var bi={};function Vi(e,t){let r=e.slice(4).split(".").map(Number),n=t.slice(4).split(".").map(Number);for(let i=0;i<n.length;i++){if(r[i]>n[i])return!0;if(r[i]<n[i])return!1}return!1}function zi(){if(!process.env.DISABLE_UPDATER_AUTO_PATCHING)try{let e=(0,E.dirname)(process.execPath),t=(0,E.basename)(e),r=(0,E.join)(e,".."),n=(0,w.readdirSync)(r).reduce((s,l)=>l.startsWith("app-")&&Vi(l,s)?l:s,t);if(n===t)return;let i=(0,E.join)(r,n,"resources"),o=(0,E.join)(i,"app.asar"),a=(0,E.join)(i,"_app.asar");if(!(0,w.existsSync)(o)||(0,w.statSync)(o).isDirectory())return;console.info("[Vencord] Detected Host Update. Repatching..."),(0,w.renameSync)(o,a),(0,w.mkdirSync)(o),(0,w.writeFileSync)((0,E.join)(o,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,w.writeFileSync)((0,E.join)(o,"index.js"),`require(${JSON.stringify((0,E.join)(__dirname,"patcher.js"))});`)}catch(e){console.error("[Vencord] Failed to repatch latest host update",e)}}var Pn,w,E,Rn=p(()=>{"use strict";c();Pn=require("electron"),w=require("original-fs"),E=require("path");Pn.app.on("before-quit",zi)});var Hi={};var S,j,Wi,ji,Ot,Zi,On=p(()=>{"use strict";c();En();S=K(require("electron")),j=require("path");wt();le();Y();console.log("[Vencord] Starting up...");Wi=require.main.filename,ji=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",Ot=(0,j.join)((0,j.dirname)(Wi),"..",ji),Zi=require((0,j.join)(Ot,"package.json"));require.main.filename=(0,j.join)(Ot,Zi.main);S.app.setAppPath(Ot);if(ke)console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{let e=T.store;if(process.platform==="win32"&&(Rn(),e.winCtrlQ)){let i=S.Menu.buildFromTemplate;S.Menu.buildFromTemplate=function(o){if(o[0]?.label==="&File"){let{submenu:a}=o[0];Array.isArray(a)&&a.push({label:"Quit (Hidden)",visible:!1,acceleratorWorksWhenHidden:!0,accelerator:"Control+Q",click:()=>S.app.quit()})}return i.call(this,o)}}class t extends S.default.BrowserWindow{constructor(o){if(o?.webPreferences?.preload&&o.title){let a=o.webPreferences.preload;o.webPreferences.preload=(0,j.join)(__dirname,"preload.js"),o.webPreferences.sandbox=!1,e.frameless?o.frame=!1:process.platform==="win32"&&e.winNativeTitleBar&&delete o.frame,e.transparent&&(o.transparent=!0,o.backgroundColor="#00000000"),process.platform==="darwin"&&e.macosVibrancyStyle&&(o.backgroundColor="#00000000",e.macosVibrancyStyle&&(o.vibrancy=e.macosVibrancyStyle)),process.env.DISCORD_PRELOAD=a,super(o),nn(this)}else super(o)}}Object.assign(t,S.default.BrowserWindow),Object.defineProperty(t,"name",{value:"BrowserWindow",configurable:!0});let r=require.resolve("electron");delete require.cache[r].exports,require.cache[r].exports={...S.default,BrowserWindow:t},Dn(global,"appSettings",i=>{i.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0),e.disableMinSize?(i.set("MIN_WIDTH",0),i.set("MIN_HEIGHT",0)):(i.set("MIN_WIDTH",940),i.set("MIN_HEIGHT",500))}),process.env.DATA_DIR=(0,j.join)(S.app.getPath("userData"),"..","Vencord");let n=S.app.commandLine.appendSwitch;S.app.commandLine.appendSwitch=function(...i){return i[0]==="disable-features"&&!i[1]?.includes("WidgetLayering")&&(i[1]+=",WidgetLayering"),n.apply(this,i)}}console.log("[Vencord] Loading original Discord app.asar");require(require.main.filename)});c();var Q=require("electron"),_n=require("path");wt();le();Y();c();var Sn=require("electron");c();var sn=require("module"),Ci=(0,sn.createRequire)("/"),ze,yi=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{ze=Ci("worker_threads").Worker}catch{}var wi=ze?function(e,t,r,n,i){var o=!1,a=new ze(e+yi,{eval:!0}).on("error",function(s){return i(s,null)}).on("message",function(s){return i(null,s)}).on("exit",function(s){s&&!o&&i(new Error("exited with code "+s),null)});return a.postMessage(r,n),a.terminate=function(){return o=!0,ze.prototype.terminate.call(a)},a}:function(e,t,r,n,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},C=Uint8Array,W=Uint16Array,Tt=Uint32Array,Dt=new C([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Et=new C([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),cn=new C([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ln=function(e,t){for(var r=new W(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var i=new Tt(r[30]),n=1;n<30;++n)for(var o=r[n];o<r[n+1];++o)i[o]=o-r[n]<<5|n;return[r,i]},un=ln(Dt,2),Pt=un[0],Si=un[1];Pt[28]=258,Si[258]=28;var fn=ln(Et,0),gn=fn[0],Ga=fn[1],je=new W(32768);for(h=0;h<32768;++h)N=(h&43690)>>>1|(h&21845)<<1,N=(N&52428)>>>2|(N&13107)<<2,N=(N&61680)>>>4|(N&3855)<<4,je[h]=((N&65280)>>>8|(N&255)<<8)>>>1;var N,h,he=function(e,t,r){for(var n=e.length,i=0,o=new W(t);i<n;++i)e[i]&&++o[e[i]-1];var a=new W(t);for(i=0;i<t;++i)a[i]=a[i-1]+o[i-1]<<1;var s;if(r){s=new W(1<<t);var l=15-t;for(i=0;i<n;++i)if(e[i])for(var u=i<<4|e[i],m=t-e[i],d=a[e[i]-1]++<<m,P=d|(1<<m)-1;d<=P;++d)s[je[d]>>>l]=u}else for(s=new W(n),i=0;i<n;++i)e[i]&&(s[i]=je[a[e[i]-1]++]>>>15-e[i]);return s},Pe=new C(288);for(h=0;h<144;++h)Pe[h]=8;var h;for(h=144;h<256;++h)Pe[h]=9;var h;for(h=256;h<280;++h)Pe[h]=7;var h;for(h=280;h<288;++h)Pe[h]=8;var h,pn=new C(32);for(h=0;h<32;++h)pn[h]=5;var h;var hn=he(Pe,9,1);var mn=he(pn,5,1),be=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},D=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(t&7)&r},We=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},vn=function(e){return(e+7)/8|0},Ze=function(e,t,r){(t==null||t<0)&&(t=0),(r==null||r>e.length)&&(r=e.length);var n=new(e.BYTES_PER_ELEMENT==2?W:e.BYTES_PER_ELEMENT==4?Tt:C)(r-t);return n.set(e.subarray(t,r)),n};var dn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],y=function(e,t,r){var n=new Error(t||dn[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,y),!r)throw n;return n},In=function(e,t,r){var n=e.length;if(!n||r&&r.f&&!r.l)return t||new C(0);var i=!t||r,o=!r||r.i;r||(r={}),t||(t=new C(n*3));var a=function(Nt){var Lt=t.length;if(Nt>Lt){var Mt=new C(Math.max(Lt*2,Nt));Mt.set(t),t=Mt}},s=r.f||0,l=r.p||0,u=r.b||0,m=r.l,d=r.d,P=r.m,L=r.n,ve=n*8;do{if(!m){s=D(e,l,1);var Z=D(e,l+1,3);if(l+=3,Z)if(Z==1)m=hn,d=mn,P=9,L=5;else if(Z==2){var U=D(e,l,31)+257,ee=D(e,l+10,15)+4,de=U+D(e,l+5,31)+1;l+=14;for(var H=new C(de),Ie=new C(19),A=0;A<ee;++A)Ie[cn[A]]=D(e,l+A*3,7);l+=ee*3;for(var G=be(Ie),Re=(1<<G)-1,te=he(Ie,G,1),A=0;A<de;){var Ae=te[D(e,l,Re)];l+=Ae&15;var I=Ae>>>4;if(I<16)H[A++]=I;else{var re=0,Oe=0;for(I==16?(Oe=3+D(e,l,3),l+=2,re=H[A-1]):I==17?(Oe=3+D(e,l,7),l+=3):I==18&&(Oe=11+D(e,l,127),l+=7);Oe--;)H[A++]=re}}var _t=H.subarray(0,U),F=H.subarray(U);P=be(_t),L=be(F),m=he(_t,P,1),d=he(F,L,1)}else y(1);else{var I=vn(l)+4,x=e[I-4]|e[I-3]<<8,M=I+x;if(M>n){o&&y(0);break}i&&a(u+x),t.set(e.subarray(I,M),u),r.b=u+=x,r.p=l=M*8,r.f=s;continue}if(l>ve){o&&y(0);break}}i&&a(u+131072);for(var kn=(1<<P)-1,Gn=(1<<L)-1,He=l;;He=l){var re=m[We(e,l)&kn],ne=re>>>4;if(l+=re&15,l>ve){o&&y(0);break}if(re||y(2),ne<256)t[u++]=ne;else if(ne==256){He=l,m=null;break}else{var kt=ne-254;if(ne>264){var A=ne-257,Ce=Dt[A];kt=D(e,l,(1<<Ce)-1)+Pt[A],l+=Ce}var Be=d[We(e,l)&Gn],Ke=Be>>>4;Be||y(3),l+=Be&15;var F=gn[Ke];if(Ke>3){var Ce=Et[Ke];F+=We(e,l)&(1<<Ce)-1,l+=Ce}if(l>ve){o&&y(0);break}i&&a(u+131072);for(var Gt=u+kt;u<Gt;u+=4)t[u]=t[u-F],t[u+1]=t[u+1-F],t[u+2]=t[u+2-F],t[u+3]=t[u+3-F];u=Gt}}r.l=m,r.p=He,r.b=u,r.f=s,m&&(s=1,r.m=P,r.d=d,r.n=L)}while(!s);return u==t.length?t:Ze(t,0,u)};var xi=new C(0);var Ti=function(e,t){var r={};for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r},on=function(e,t,r){for(var n=e(),i=e.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var s=n[a],l=o[a];if(typeof s=="function"){t+=";"+l+"=";var u=s.toString();if(s.prototype)if(u.indexOf("[native code]")!=-1){var m=u.indexOf(" ",8)+1;t+=u.slice(m,u.indexOf("(",m))}else{t+=u;for(var d in s.prototype)t+=";"+l+".prototype."+d+"="+s.prototype[d].toString()}else t+=u}else r[l]=s}return[t,r]},Ve=[],Di=function(e){var t=[];for(var r in e)e[r].buffer&&t.push((e[r]=new e[r].constructor(e[r])).buffer);return t},Ei=function(e,t,r,n){var i;if(!Ve[r]){for(var o="",a={},s=e.length-1,l=0;l<s;++l)i=on(e[l],o,a),o=i[0],a=i[1];Ve[r]=on(e[s],o,a)}var u=Ti({},Ve[r][1]);return wi(Ve[r][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",r,u,Di(u),n)},Pi=function(){return[C,W,Tt,Dt,Et,cn,Pt,gn,hn,mn,je,dn,he,be,D,We,vn,Ze,y,In,Rt,An,Cn]};var An=function(e){return postMessage(e,[e.buffer])},Cn=function(e){return e&&e.size&&new C(e.size)},Ri=function(e,t,r,n,i,o){var a=Ei(r,n,i,function(s,l){a.terminate(),o(s,l)});return a.postMessage([e,t],t.consume?[e.buffer]:[]),function(){a.terminate()}};var _=function(e,t){return e[t]|e[t+1]<<8},R=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},St=function(e,t){return R(e,t)+R(e,t+4)*4294967296};function Oi(e,t,r){return r||(r=t,t={}),typeof r!="function"&&y(7),Ri(e,t,[Pi],function(n){return An(Rt(n.data[0],Cn(n.data[1])))},1,r)}function Rt(e,t){return In(e,t)}var xt=typeof TextDecoder<"u"&&new TextDecoder,_i=0;try{xt.decode(xi,{stream:!0}),_i=1}catch{}var ki=function(e){for(var t="",r=0;;){var n=e[r++],i=(n>127)+(n>223)+(n>239);if(r+i>e.length)return[t,Ze(e,r-1)];i?i==3?(n=((n&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):i&1?t+=String.fromCharCode((n&31)<<6|e[r++]&63):t+=String.fromCharCode((n&15)<<12|(e[r++]&63)<<6|e[r++]&63):t+=String.fromCharCode(n)}};function Gi(e,t){if(t){for(var r="",n=0;n<e.length;n+=16384)r+=String.fromCharCode.apply(null,e.subarray(n,n+16384));return r}else{if(xt)return xt.decode(e);var i=ki(e),o=i[0],a=i[1];return a.length&&y(8),o}}var Ni=function(e,t){return t+30+_(e,t+26)+_(e,t+28)},Li=function(e,t,r){var n=_(e,t+28),i=Gi(e.subarray(t+46,t+46+n),!(_(e,t+8)&2048)),o=t+46+n,a=R(e,t+20),s=r&&a==4294967295?Mi(e,o):[a,R(e,t+24),R(e,t+42)],l=s[0],u=s[1],m=s[2];return[_(e,t+10),l,u,i,o+_(e,t+30)+_(e,t+32),m]},Mi=function(e,t){for(;_(e,t)!=1;t+=4+_(e,t+2));return[St(e,t+12),St(e,t+4),St(e,t+20)]};var an=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function yn(e,t,r){r||(r=t,t={}),typeof r!="function"&&y(7);var n=[],i=function(){for(var I=0;I<n.length;++I)n[I]()},o={},a=function(I,x){an(function(){r(I,x)})};an(function(){a=r});for(var s=e.length-22;R(e,s)!=101010256;--s)if(!s||e.length-s>65558)return a(y(13,0,1),null),i;var l=_(e,s+8);if(l){var u=l,m=R(e,s+16),d=m==4294967295||u==65535;if(d){var P=R(e,s-12);d=R(e,P)==101075792,d&&(u=l=R(e,P+32),m=R(e,P+48))}for(var L=t&&t.filter,ve=function(I){var x=Li(e,m,d),M=x[0],U=x[1],ee=x[2],de=x[3],H=x[4],Ie=x[5],A=Ni(e,Ie);m=H;var G=function(te,Ae){te?(i(),a(te,null)):(Ae&&(o[de]=Ae),--l||a(null,o))};if(!L||L({name:de,size:U,originalSize:ee,compression:M}))if(!M)G(null,Ze(e,A,A+U));else if(M==8){var Re=e.subarray(A,A+U);if(U<32e4)try{G(null,Rt(Re,new C(ee)))}catch(te){G(te,null)}else n.push(Oi(Re,{size:ee},G))}else G(y(14,"unknown compression type "+M,1),null);else G(null,null)},Z=0;Z<u;++Z)ve(Z)}else a(null,{});return i}var xn=require("fs"),k=require("fs/promises"),me=require("path");Y();c();function wn(e){function t(a,s,l,u){let m=0;return m+=a<<0,m+=s<<8,m+=l<<16,m+=u<<24>>>0,m}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,n=e[4]===2;if(!n&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(n){let a=t(e[8],e[9],e[10],e[11]),s=t(e[12],e[13],e[14],e[15]),l=16+a+s;return e.subarray(l,e.length)}let o=12+t(e[8],e[9],e[10],e[11]);return e.subarray(o,e.length)}qe();var Ui=(0,me.join)(ae,"ExtensionCache");async function Fi(e,t){return await(0,k.mkdir)(t,{recursive:!0}),new Promise((r,n)=>{yn(e,(i,o)=>{if(i)return void n(i);Promise.all(Object.keys(o).map(async a=>{if(a.startsWith("_metadata/"))return;if(a.endsWith("/"))return void(0,k.mkdir)((0,me.join)(t,a),{recursive:!0});let s=a.split("/"),l=s.pop(),u=s.join("/"),m=(0,me.join)(t,u);u&&await(0,k.mkdir)(m,{recursive:!0}),await(0,k.writeFile)((0,me.join)(m,l),o[a])})).then(()=>r()).catch(a=>{(0,k.rm)(t,{recursive:!0,force:!0}),n(a)})})})}async function Tn(e){let t=(0,me.join)(Ui,`${e}`);try{await(0,k.access)(t,xn.constants.F_OK)}catch{let n=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await oe(n,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await Fi(wn(i),t).catch(console.error)}Sn.session.defaultSession.loadExtension(t)}ke||Q.app.whenReady().then(()=>{Q.protocol.registerFileProtocol("vencord",({url:i},o)=>{let a=i.slice(10);if(a.endsWith("/")&&(a=a.slice(0,-1)),a.startsWith("/themes/")){let s=a.slice(8),l=yt(z,s);if(!l){o({statusCode:403});return}o(l.replace(/\?v=\d+$/,""));return}switch(a){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":o((0,_n.join)(__dirname,a));break;default:o({statusCode:403})}});try{T.store.enableReactDevtools&&Tn("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(i=>console.error("[Vencord] Failed to install React Developer Tools",i))}catch{}let e=(i,o)=>Object.keys(i).find(a=>a.toLowerCase()===o),t=i=>{let o={};return i.split(";").forEach(a=>{let[s,...l]=a.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(o,s)&&(o[s]=l)}),o},r=i=>Object.entries(i).filter(([,o])=>o?.length).map(o=>o.flat().join(" ")).join("; "),n=i=>{let o=e(i,"content-security-policy");if(o){let a=t(i[o][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[s]??=[],a[s].push("*","blob:","data:","vencord:","'unsafe-inline'");a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),i[o]=[r(a)]}};Q.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:i,resourceType:o},a)=>{if(i&&(o==="mainFrame"&&n(i),o==="stylesheet")){let s=e(i,"content-type");s&&(i[s]=["text/css"])}a({cancel:!1,responseHeaders:i})}),Q.session.defaultSession.webRequest.onHeadersReceived=()=>{}});On();
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
