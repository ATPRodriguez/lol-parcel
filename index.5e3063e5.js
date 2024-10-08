class e{constructor(e){this.id=e.id,this.title=e.title.toUpperCase(),this.skin="",this.icon="",this.splash=""}setSplash(e){this.splash=e}setIcon(e){this.icon=e}setSkin(e){this.skin=e}}var s=[],t=[];const n=document.getElementById("button"),i=document.getElementById("maps");n.addEventListener("click",()=>{document.querySelector("#button").style.visibility="hidden",document.querySelector("#maps").style.visibility="hidden",document.querySelector("#campeones").style.visibility="visible",d()}),i.addEventListener("click",()=>{document.querySelector("#button").style.visibility="hidden",document.querySelector("#maps").style.visibility="hidden",document.querySelector("#campeones").style.visibility="visible",c()});const d=async()=>{await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json").then(function(e){return e.json()}).then(function(t){for(let n in t.data){let i=t.data[n],d=new e(i);d.setSplash(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${i.id}_0.jpg`),d.setSkin(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${i.id}_1.jpg`),d.setIcon(`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${i.id}.png`),s.push(d)}}),await o()},o=async()=>{let e=document.getElementById("campeones");for(var t=0;t<s.length;t++)e.innerHTML+=`<div class="card">                                    
                                            <img class="splash" src="${s[t].splash}" onclick="src='${s[t].skin}'"/>
                                            <div class="inside">
                                                <img class="icon" src="${s[t].icon}"/>
                                                <br/>
                                                <div class="info">
                                                    <div class="nombre">
                                                        ${s[t].id} 
                                                    </div>
                                                    <div class="titulo">
                                                        ${s[t].title}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`},c=async()=>{let e=document.getElementById("mapsShow");t.push("https://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map1.png"),t.push("https://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map8.png"),t.push("https://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map10.png"),t.push("https://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map11.png"),t.push("https://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map12.png"),console.log(t);for(let s=0;s<t.length;s++)e.innerHTML+=`<div class="map">
                                    <img src="${t[s]}"/>
                                </div>`};
//# sourceMappingURL=index.5e3063e5.js.map
