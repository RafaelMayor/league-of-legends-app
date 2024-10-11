const apiURL = 'https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json';

export async function getChampions() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        return null;
    }
}
