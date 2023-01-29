import { getAttributes } from "./http-provider";

const data = JSON.parse(localStorage.getItem('user'));
const id = data.id;
const fate = data.fate;
const fateP = document.querySelector('.fate');

let tBody = document.querySelector('tbody');

export const init = () => {
    getAttributes(id).then(result => {
        console.log(result.attributes);
        crearFilaAtributos(result.attributes);
    })
}

export const initFate = () => {
    agregarDestino();
}

const crearFilaAtributos = (attributes) => {
    document.querySelector('.valor-sabiduria').value = `${[attributes[0].value]}`;
    document.querySelector('.lvl-sabiduria').style.width = `${[attributes[0].value * 20]}%`;
    document.querySelector('.valor-nobleza').value = `${[attributes[1].value]}`;
    document.querySelector('.lvl-nobleza').style.width = `${[attributes[1].value * 20]}%`;
    document.querySelector('.valor-virtud').value = `${[attributes[2].value]}`;
    document.querySelector('.lvl-virtud').style.width = `${[attributes[2].value * 20]}%`;
    document.querySelector('.valor-maldad').value = `${[attributes[3].value]}`;
    document.querySelector('.lvl-maldad').style.width = `${[attributes[3].value * 20]}%`;
    document.querySelector('.valor-audacia').value = `${[attributes[4].value]}`;
    document.querySelector('.lvl-audacia').style.width = `${[attributes[4].value * 20]}%`;



}

const agregarDestino = () => {
    fateP.innerHTML = `${fate}`;
}