import { getChampions } from './api.js';

async function displayChampions() {
    const championList = document.getElementById('champion-list');
    const champions = await getChampions();

    if (!champions) {
        championList.innerHTML = '<p>Error loading champions.</p>';
        return;
    }

    championList.innerHTML = '';

    for (const key in champions) {
        const champ = champions[key];
        const stats = champ.stats;
        const tags = champ.tags.join(', ');
        
        const championCard = `
            <div class="card">
                <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${key}_0.jpg" alt="${champ.name}">
                <div class="card-info">
                    <h2>${champ.name}</h2>
                    <p>${champ.title}</p>
                </div>
                <div class="blurb">
                    <p>${champ.blurb}</p>
                    <span class="read-more">Ver más</span>
                    <div class="stats hidden">
                        <h3>Tags: ${tags}</h3>
                        <p>Ataque: ${stats.attackdamage} - Defensa: ${stats.armor}</p>
                        <p>Velocidad: ${stats.movespeed} - Mana: ${stats.mp}</p>
                        <p>Vida: ${stats.hp} - Regeneración de vida: ${stats.hpregen}</p>
                    </div>
                </div>
            </div>
        `;
        championList.innerHTML += championCard;
    }

    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const blurbElement = this.parentElement;
            const statsElement = blurbElement.querySelector('.stats');
            statsElement.classList.toggle('hidden');
            
            if (!statsElement.classList.contains('hidden')) {
                this.innerText = 'Ver menos';
            } else {
                this.innerText = 'Ver más';
            }
        });
    });
}

displayChampions();
