import Campeon from './campeon.js';

var campeones = [];
var mapsList = [];

const button = document.getElementById("button");
const mapsButton = document.getElementById("maps");

button.addEventListener("click", () => {
    document.querySelector('#button').style.visibility = 'hidden';
    document.querySelector('#maps').style.visibility = 'hidden';
    
    document.querySelector('#campeones').style.visibility = 'visible';

    startGenerating();
});

mapsButton.addEventListener("click", () => {
    document.querySelector('#button').style.visibility = 'hidden';
    document.querySelector('#maps').style.visibility = 'hidden';
    
    document.querySelector('#campeones').style.visibility = 'visible';

    startGeneratingMaps();
});



const startGenerating = async () => {
    await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json")
    .then(function(result) {
        return result.json();
    }).then(function (result) {
        for (let champion in result.data) {
            let data = result.data[champion];
            let campeon = new Campeon(data);
            campeon.setSplash(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.id}_0.jpg`);
            campeon.setSkin(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.id}_1.jpg`);
            campeon.setIcon(`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${data.id}.png`);
            pushCampeon(campeon);
        }
    });

    await showCampeones();
}

function pushCampeon(campeon) {
    campeones.push(campeon);
}

const showCampeones = async () => {
    const campeonesList = document.getElementById("campeones");
    for(var i = 0; i < campeones.length; i++) {
        campeonesList.innerHTML +=    `<div class="card">                                    
                                            <img class="splash" src="${campeones[i].splash}" onclick="src='${campeones[i].skin}'"/>
                                            <div class="inside">
                                                <img class="icon" src="${campeones[i].icon}"/>
                                                <br/>
                                                <div class="info">
                                                    <div class="nombre">
                                                        ${campeones[i].id} 
                                                    </div>
                                                    <div class="titulo">
                                                        ${campeones[i].title}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`
    }
};


const startGeneratingMaps = async () => {
    const maps = document.getElementById("mapsShow");
    llenarMaps();
    console.log(mapsList);
    for (let i = 0; i < mapsList.length; i++) {
        maps.innerHTML += `<div class="map">
                                    <img src="${mapsList[i]}"/>
                                </div>`
    }
}

function llenarMaps() {
    mapsList.push("https://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map1.png");
    mapsList.push("https://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map8.png");
    mapsList.push("https://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map10.png"); 
    mapsList.push("https://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map11.png");
    mapsList.push("https://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map12.png");
}