import {eUmCPF} from "CPF.js";
const inputAll = document.querySelectorAll("[required]");

inputAll.forEach((campo) => {
    campo.addEventListener("blur", () => {
        verificarCampo(campo.value);
    })
})

function verificarCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        eUmCPF(campo);
    }
}