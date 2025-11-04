const selectJogadores = document.getElementById("jogadores");
let numeroJogadores = 0;
let palavraescolhida = "";
let impostor;
let resetbtn= document.getElementById("reset");
let playbtn = document.getElementById("play");
 let palavras = ["Cavaleiro", "Bruxa", "Mosqueteira", "Pekka", "Mini-pekka", "Fantasma-Real", "Dragão-Elétrico", "Cemitério", "Bruxa-mãe", "Guardas-Reais", "Porcos-Reais","Mineiro", "Esqueletos",
        "Espírito de fogo", "Espírito elétrico", "espírito de gelo", "Goblins", "Goblins lanceiros", "Bombardeiro", "Morcegos", "Berserker", "Arqueiras", "Servos", "Gangue de goblins", "Pirotécnica", 
        "Entrega Real", "Dragões esqueletos", "Bárbaros", "Horda de servos", "Patifes", "Gigante real", "Bárbaros de elite", "Espírito de cura", "Golem de gelo", "Arbusto Traiçoeiro", "Mega servo",
        "Goblin com dardo", "Golem de elixir", "Valquíria", "Aríate de batalha", "Máquina voadora", "Curandeira", "Fornalha", "Goblin demolidor", "Gigante", "Mago", "Três mosqueteiras", "Barril de bárbaros",
        "Destruidores de muro", "Guardas", "Príncipe das trevas", "Gigante das runas", "Caçador", "Balão", "Lançador", "Executor", "Gigante esqueleto", "Goblin Gigante", "Gigante elétrico", "Golem",
        "Princesa", "Mago de gelo", "Dragão inferno", "Mago elétrico", "Fênix", "Domadora de carneiro", "Máquina goblin", "Spark", "Mega-cavaleiro", "Bandida", "Pescador", "Arqueiro mágico", "Lenhador",
        "Bruxa sombria", "Lava Hound", "Corredor", "barril de goblins", "Bebe dragão", "Exército de esqueletos"

    ];
    let jogadores = [];
selectJogadores.addEventListener("change", function(){
    numeroJogadores = Number(this.value);
   // console.log(`Número de jogadores: ${numeroJogadores}`);
})


playbtn.onclick = function() {
    start();
    sorteio();
    palavrasorteio();
    iniciar();
    playbtn.style.display = "none"
    selectJogadores.style.display = "none";
  //  let i = Math.floor(Math.random() * numeroJogadores) + 1;
  //  console.log("o impostor é o jogador número: " + i);
}
function start(){
    jogadores = [];
    for(let x = 1; x <= numeroJogadores; x++){
        jogadores.push(x);
     //   console.log(jogadores);
    }
}
function sorteio(){
    let i = Math.floor(Math.random() * jogadores.length);
    impostor = jogadores[i];
    console.log("o impostor é o jogador: " + impostor);
}
function palavrasorteio(){
   
    let r = Math.floor(Math.random() * palavras.length);
    palavraescolhida = palavras[r];
    console.log("palavra escolhida: " + palavraescolhida);
}
let jogadorAtual = 1;
const tela = document.getElementById("tela") ;
const texto = document.getElementById("texto");
const passar = document.getElementById("passar");

function iniciar(){
    jogadorAtual = 1;
    tela.style.display = "block";
    mensagem();
}
function mensagem(){
    texto.innerText = `Jogador ${jogadorAtual}, Clique para ver sua carta`
    passar.innerText = "ver carta"
    passar.onclick = mostrar;
}
function mostrar(){
    if (jogadorAtual === impostor){
        texto.innerText = "Você é o impostor!"
    } else {
        texto.innerText = palavraescolhida;
    }
    passar.innerText = "próximo jogador"
    passar.onclick = proximo;

}
function proximo(){
    jogadorAtual++;
    if(jogadorAtual > numeroJogadores){
        texto.innerText = "Hora da discussão"
        passar.style.display = "none";
        resetbtn.style.display = "block";
    } else {
        mensagem();
    }
}
resetbtn.onclick = function() {

    numeroJogadores = 0;
    jogadores = [];
    jogadorAtual = 1;
    selectJogadores.style.display = "block";
    playbtn.style.display = "block";
    tela.style.display = "none";
    resetbtn.style.display = "none";
    passar.style.display = "block";
    texto.innerText = "";
    selectJogadores.value = "0";
}
