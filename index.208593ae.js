async function e(){try{let e=await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json");return(await e.json()).data}catch(e){return console.error("Error fetching data from API:",e),null}}!async function(){let a=document.getElementById("champion-list"),n=await e();if(!n){a.innerHTML="<p>Error loading champions.</p>";return}for(let e in a.innerHTML="",n){let t=n[e],s=t.stats,i=t.tags.join(", "),r=`
            <div class="card">
                <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${e}_0.jpg" alt="${t.name}">
                <div class="card-info">
                    <h2>${t.name}</h2>
                    <p>${t.title}</p>
                </div>
                <div class="blurb">
                    <p>${t.blurb}</p>
                    <span class="read-more">Ver m\xe1s</span>
                    <div class="stats hidden">
                        <h3>Tags: ${i}</h3>
                        <p>Ataque: ${s.attackdamage} - Defensa: ${s.armor}</p>
                        <p>Velocidad: ${s.movespeed} - Mana: ${s.mp}</p>
                        <p>Vida: ${s.hp} - Regeneraci\xf3n de vida: ${s.hpregen}</p>
                    </div>
                </div>
            </div>
        `;a.innerHTML+=r}document.querySelectorAll(".read-more").forEach(e=>{e.addEventListener("click",function(){let e=this.parentElement.querySelector(".stats");e.classList.toggle("hidden"),e.classList.contains("hidden")?this.innerText="Ver más":this.innerText="Ver menos"})})}();
//# sourceMappingURL=index.208593ae.js.map
