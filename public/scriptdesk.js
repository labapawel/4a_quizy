let socket = io("ws://10.40.50.206:3000");

let pytania = [];
const $ = (name)=>document.querySelector(name);
const wczytaj_nastepne = () => {

    let p = pytania.filter(e=>!e.wys)[0];
    p.wys = true;
    $('.pytanie').innerHTML = p.pytanie;
    for(let i=1; i<5; i++)
        $(".odp"+i).innerHTML = p.odp[i-1];
}


fetch('pytania.json')
    .then(e=>e.json())
    .then(pyt => {
        pytania = pyt;
        wczytaj_nastepne();
    })