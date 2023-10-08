const seznamSirin = [13, 44.6765765, 12.432542, 45.432423]
const seznamDolzin = [44, 12.432542, 45.432423, 3.321312]
const natancnost = 1

const inputBtn = document.querySelector("#inputBtn");
const dolzina = document.querySelector("#dolzina");
const sirina = document.querySelector("#sirina");
const sirinaErr = document.querySelector("#sirinaErr");
const dolzinaErr = document.querySelector("#dolzinaErr");
const slika = document.querySelector("#slika");


inputBtn.addEventListener("click", vnesiKoordinate);

function vnesiKoordinate(){
    let vnesenaSirina = sirina.value
    let vnesenaDolzina = dolzina.value
    let napakaMin = 10000
    let coordIdMin = 0;

    for (let i = 0; i < seznamSirin.length; i++){
        let razlikaSirine = Math.abs(vnesenaSirina - seznamSirin[i])
        let razlikaDolzine = Math.abs(vnesenaDolzina - seznamDolzin[i])
        let napaka = Math.sqrt(razlikaSirine*razlikaSirine +  razlikaDolzine*razlikaDolzine);

        if (napaka < napakaMin){
            napakaMin = napaka;
            coordIdMin = i
        }

    if (napakaMin < natancnost){
        console.log(coordIdMin)
        sirinaErr.textContent = "Čestitam";
        dolzinaErr.textContent = "Čestitam";
        slika.src = "slike/slika" + (coordIdMin +1) + ".png"
    }

    else{
        slika.src = "";
        sirinaErr.textContent = "Zmotil si se za: " + Math.abs(vnesenaSirina - seznamSirin[coordIdMin]);
        dolzinaErr.textContent = "Zmotil si se za: " + Math.abs(vnesenaDolzina - seznamDolzin[coordIdMin]);
    }


    }
}