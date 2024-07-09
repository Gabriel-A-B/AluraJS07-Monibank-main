const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const cameraCampo = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const enviar = document.querySelector("[data-enviar]");

let imagemURL = "";

botaoIniciarCamera.addEventListener("click", async function () {
    const iniciarVideo = await navigator.mediaDevices
    .getUserMedia({video: true, audio: false});

    botaoIniciarCamera.style.display = "none";
    cameraCampo.style.display = "block";

    video.srcObject = iniciarVideo;
});

botaoTirarFoto.addEventListener("click", function () {
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL('image/jpeg');

    cameraCampo.style.display = "none";
    mensagem.style.display = "block";
});

enviar.addEventListener("click", () => {
    const receberInformações = localStorage.getItem("cadastro");
    const converteInfo = JSON.parse(receberInformações);

    converteInfo.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteInfo));
    window.location.href = "./abrir-conta-form-3.html";
});