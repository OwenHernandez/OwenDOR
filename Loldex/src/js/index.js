import Legend from './Legend.js';

async function getLegends() {
    const response = await fetch('https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json');
    const responseData = await response.json();
    const champions = responseData.data;
    const legends = Object.values(champions);
    return legends;
}

async function renderLegends() {
    const legends = await getLegends();
    const cardList = document.querySelector('.cardList');
    legends.forEach(legend => {
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.src = `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${legend.image.full}`;
        const h2 = document.createElement('h2');
        h2.innerHTML = legend.name;
        const pTitle = document.createElement('p');
        pTitle.innerHTML = legend.title;
        
        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(pTitle);

        const divTags = document.createElement('div');
        divTags.classList.add('tags');

        const divTag1 = document.createElement('div');
        divTag1.classList.add('tag');
        switch (legend.tags[0]) {
            case 'Fighter':
                divTag1.classList.add('fighter');
                break;
            case 'Mage':
                divTag1.classList.add('mage');
                break;
            case 'Assassin':
                divTag1.classList.add('assassin');
                break;
            case 'Tank':
                divTag1.classList.add('tank');
                break;
            case 'Support':
                divTag1.classList.add('support');
                break;
            case 'Marksman':
                divTag1.classList.add('marksman');
                break;
        }

        divTags.appendChild(divTag1);

        if (legend.tags[1]) {
            const divTag2 = document.createElement('div');
            divTag2.classList.add('tag');
        
            switch (legend.tags[1]) {
                case 'Fighter':
                    divTag2.classList.add('fighter');
                    break;
                case 'Mage':
                    divTag2.classList.add('mage');
                    break;
                case 'Assassin':
                    divTag2.classList.add('assassin');
                    break;
                case 'Tank':
                    divTag2.classList.add('tank');
                    break;
                case 'Support':
                    divTag2.classList.add('support');
                    break;
                case 'Marksman':
                    divTag2.classList.add('marksman');
                    break;
            }
            divTags.appendChild(divTag2);
        }
        card.appendChild(divTags);
        card.addEventListener('click', () => showModal(legend));

        cardList.appendChild(card);
    });
}

renderLegends();

function renderLegend(legend) {
    const cardList = document.querySelector('.cardList');
    const card = document.createElement('div');
    card.classList.add('card');
    const img = document.createElement('img');
    img.src = `https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/${legend.image.full}`;
    const h2 = document.createElement('h2');
    h2.innerHTML = legend.name;
    const pTitle = document.createElement('p');
    pTitle.innerHTML = legend.title;
    
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(pTitle);

    const divTags = document.createElement('div');
    divTags.classList.add('tags');

    const divTag1 = document.createElement('div');
    divTag1.classList.add('tag');
    switch (legend.tags[0]) {
        case 'Fighter':
            divTag1.classList.add('fighter');
            break;
        case 'Mage':
            divTag1.classList.add('mage');
            break;
        case 'Assassin':
            divTag1.classList.add('assassin');
            break;
        case 'Tank':
            divTag1.classList.add('tank');
            break;
        case 'Support':
            divTag1.classList.add('support');
            break;
        case 'Marksman':
            divTag1.classList.add('marksman');
            break;
    }

    divTags.appendChild(divTag1);

    if (legend.tags[1]) {
        const divTag2 = document.createElement('div');
        divTag2.classList.add('tag');
    
        switch (legend.tags[1]) {
            case 'Fighter':
                divTag2.classList.add('fighter');
                break;
            case 'Mage':
                divTag2.classList.add('mage');
                break;
            case 'Assassin':
                divTag2.classList.add('assassin');
                break;
            case 'Tank':
                divTag2.classList.add('tank');
                break;
            case 'Support':
                divTag2.classList.add('support');
                break;
            case 'Marksman':
                divTag2.classList.add('marksman');
                break;
        }
        divTags.appendChild(divTag2);
    }
    card.appendChild(divTags);

    cardList.appendChild(card);
}

const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal-close');

// Función para mostrar el modal
function showModal(legend) {
    // Set modal title and description (or any other content)
    document.getElementById('modal-img').src = `https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/${legend.image.full}`;
    document.getElementById('modalTitle').innerHTML = legend.name;
    document.getElementById('modalDescription').innerHTML = legend.title;

    document.querySelector('.modal-tags').innerHTML = '';
    legend.tags.forEach(tag => {
        const divTag = document.createElement('div');
        divTag.classList.add('tag');
        switch (tag) {
            case 'Fighter':
                divTag.classList.add('fighter');
                break;
            case 'Mage':
                divTag.classList.add('mage');
                break;
            case 'Assassin':
                divTag.classList.add('assassin');
                break;
            case 'Tank':
                divTag.classList.add('tank');
                break;
            case 'Support':
                divTag.classList.add('support');
                break;
            case 'Marksman':
                divTag.classList.add('marksman');
                break;
        }
        document.querySelector('.modal-tags').appendChild(divTag);
    });

    document.querySelector('.modal-stats').innerHTML = '';
    const stats = legend.stats;
    for (const [key, value] of Object.entries(stats)) {
        const divStat = document.createElement('div');
        divStat.classList.add('stat');
        divStat.innerHTML = `${key}: ${value}`;
        document.querySelector('.modal-stats').appendChild(divStat);
    }

    document.querySelector('.modal-info').innerHTML = '';
    const info = legend.info;
    for (const [key, value] of Object.entries(info)) {
        const divInfo = document.createElement('div');
        divInfo.classList.add('info');
        divInfo.innerHTML = `${key}: ${value}`;
        document.querySelector('.modal-info').appendChild(divInfo);
    }

    modal.style.display = 'flex';

    setTimeout(() => {
        modal.classList.remove('hide');
        modal.classList.add('show'); 
    }, 200);
}

function hideModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');

    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
}

// Cerrar el modal cuando se hace clic en el botón de cerrar
closeButton.addEventListener('click', hideModal);