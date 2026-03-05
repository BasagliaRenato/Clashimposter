const selectJogadores = document.getElementById("jogadores");
let numeroJogadores = 0;
let impostor;
const secreto = document.getElementById("secreto");
let mostrarbtn = document.getElementById("mostrar");
let resetbtn= document.getElementById("reset");
let playbtn = document.getElementById("play");
   let cartas = [
    {nome: "Cavaleiro", img: "Cartas/cavaleiro.png"},
    {nome: "Bombardeiro", img:"Cartas/bombardeiro.png"},
    {nome:"Arqueiras", img:"Cartas/arqueiras.png"},
    {nome:"Mini P.E.K.K.A", img:"Cartas/minipekka.png"},
    {nome:"Mosqueteira", img:"Cartas/mosqueteira.png"},
    {nome:"Gigante", img:"Cartas/gigante.png"},
    {nome:"Príncipe", img:"Cartas/principe.png"},
    {nome:"Bebe dragão", img:"Cartas/bebedragao.png"},
    {nome:"Exército de esqueletos", img:"Cartas/exercito.png"},
    {nome:"Bruxa", img:"Cartas/bruxa.png"},
    {nome:"Goblins lanceiros", img:"Cartas/goblinlanceiro.png"},
    {nome:"Goblins", img:"Cartas/goblin.png"},
    {nome:"Valquíria", img:"Cartas/valquiria.png"},
    {nome:"Esqueletos", img:"Cartas/esqueletos.png"},
    {nome:"Servos", img:"Cartas/servos.png"},
    {nome:"Esqueleto gigante", img:"Cartas/esqueletogigante.png"},
    {nome:"Balão", img:"Cartas/balao.png"},
    {nome:"Bárbaros", img:"Cartas/barbaros.png"},
    {nome:"Horda de servos", img:"Cartas/horda.png"},
    {nome:"Corredor", img:"Cartas/corredor.png"},
    {nome:"P.E.K.K.A", img:"Cartas/pekka.png"},
    {nome:"Mago", img:"Cartas/mago.png"},
    {nome:"Golem", img:"Cartas/golem.png"},
    {nome:"Gigante real", img:"Cartas/gigantereal.png"},
    {nome:"Três mosqueteiras", img:"Cartas/tresmosqueteiras.png"},
    {nome:"Príncipe das trevas", img:"Cartas/principedastrevas.png"},
    {nome:"Mago de gelo", img:"Cartas/magodegelo.png"},
    {nome:"Princesa", img:"Cartas/princesa.png"},
    {nome:"Fornalha", img:"Cartas/fornalha.png"},
    {nome:"Espírito de fogo", img:"Cartas/espiritodefogo.png"},
    {nome:"Guardas", img:"Cartas/guardas.png"},
    {nome:"Lava hound", img:"Cartas/lavahound.png"},
    {nome:"Mineiro", img:"Cartas/mineiro.png"},
    {nome:"Sparky", img:"Cartas/sparky.png"},
    {nome:"Lançador", img:"Cartas/lancador.png"},
    {nome:"Espírito de gelo", img:"Cartas/espiritodegelo.png"},
    {nome:"Lenhador", img:"Cartas/lenhador.png"},
    {nome:"Mega servo", img:"Cartas/megaservo.png"},
    {nome:"Dragão infernal", img:"Cartas/dragaoinfernal.png"},
    {nome:"Golem de gelo", img:"Cartas/gelemdegelo.png"},
    {nome:"Bárbaros de elite", img:"Cartas/barbarosdeelite.png"},
    {nome:"Mago elétrico", img:"Cartas/magoeletrico.png"},
    {nome:"Goblin com dardo", img:"Cartas/goblincomdardo.png"},
    {nome:"Executor", img:"Cartas/executor.png"},
    {nome:"Aríate de batalha", img:"Cartas/ariate.png"},
    {nome:"Guangue de goblins", img:"Cartas/gangue.png"},
    {nome:"Bandida", img:"Cartas/bandida.png"},
    {nome:"Bruxa sombria", img:"Cartas/bruxasombria.png"},
    {nome:"Morcegos", img:"Cartas/morcegos.png"},
    {nome:"Máquina voadora", img:"Cartas/maquinavoadora.png"},
    {nome:"Carrinho de canhão", img:"Cartas/carrinho.png"},
    {nome:"Barril de esqueletos", img:"Cartas/barrilesqueletos.png"},
    {nome:"Megacavaleiro", img:"Cartas/megacavaleiro.png"},
    {nome:"Eletrocutadores", img:"Cartas/eletrocutadores.png"},
    {nome:"Caçador", img:"Cartas/cacador.png"},
    {nome:"Fantasma real", img:"Cartas/fantasma real.png"},
    {nome:"Patifes", img:"Cartas/patifes.png"},
    {nome:"Porcos reais", img:"Cartas/porcos.png"},
    {nome:"Recrutas reais", img:"Cartas/recrutas.png"},
    {nome:"Goblin gigante", img:"Cartas/goblingigante.png"},
    {nome:"Dragão elétrico", img:"Cartas/dragaoeletrico.png"},
    {nome:"Domadora de carneiros", img:"Cartas/domadora.png"},
    {nome:"Destruidores de muro", img:"Cartas/destruidores.png"},
    {nome:"Pescador", img:"Cartas/pescador.png"},
    {nome:"Golem de elixir", img:"Cartas/golemdeelixir.png"},
    {nome:"Curadora guerreira", img:"Cartas/curadora.png"},
    {nome:"Pirotécnica", img:"Cartas/pirotecnica.png"},
    {nome:"Espírito de cura", img:"Cartas/espiritocurador.png"},
    {nome:"Dragões esqueletos", img:"Cartas/dragoesesqueletos.png"},
    {nome:"Gigante elétrico", img:"Cartas/giganteeletrico.png"},
    {nome:"Espírito elétrico", img:"Cartas/espiritoeletrico.png"},
    {nome:"Bruxa-Mãe", img:"Cartas/bruxamae.png"},
    {nome:"Cavaleiro dourado", img:"Cartas/cavaleirodourado.png"},
    {nome:"Rainha arqueira", img:"Cartas/rainhaarqueira.png"},
    {nome:"Rei esqueleto", img:"Cartas/reiesqueleto.png"},
    {nome:"Mineiro bombado", img:"Cartas/mineirobombado.png"},
    {nome:"Monge", img:"Cartas/monge.png"},
    {nome:"Fênix", img:"Cartas/fenix.png"},
    {nome:"Pequeno príncipe", img:"Cartas/pequenoprincipe.png"},
    {nome:"Goblin demolidor", img:"Cartas/goblindemolidor.png"},
    {nome:"Máquina goblin", img:"Cartas/maquinagoblin.png"},
    {nome:"Arbusto traiçoeiro", img:"Cartas/arbusto.png"},
    {nome:"Goblinstein", img:"Cartas/goblinstein.png"},
    {nome:"Gigante das runas", img:"Cartas/gigantedasrunas.png"},
    {nome:"berserker", img:"Cartas/berserker.png"},
    {nome:"Imperatriz espiritual", img:"Cartas/imperatriz.png"},

   ]
   let cartaescolhida;
   let cartaimpostor;
   const textoimpostor = document.getElementById("secretoTexto");
    let jogadores = [];
selectJogadores.addEventListener("change", function(){
    numeroJogadores = Number(this.value);
})

playbtn.onclick = function() {
    start();
    sorteio();
    cartasorteio();
    iniciar();
    if(secreto.checked){
        cartasorteioimpostor();
    }
    playbtn.style.display = "none"
    selectJogadores.style.display = "none";
    secreto.style.display="none";
    textoimpostor.innerText="";
}

function start(){
    jogadores = [];
    for(let x = 1; x <= numeroJogadores; x++){
        jogadores.push(x);
    }
}
function sorteio(){
    let i = Math.floor(Math.random() * jogadores.length);
    impostor = jogadores[i];
}
function cartasorteio(){
   
    let r = Math.floor(Math.random() * cartas.length);
    cartaescolhida = cartas[r];
    console.log("palavra escolhida: " + cartaescolhida.nome);
}
function cartasorteioimpostor(){
    let r = Math.floor(Math.random() * cartas.length);
    cartaimpostor = cartas[r];
    console.log("palavra escolhida: " + cartaimpostor.nome);
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
    if(secreto.checked){
    if (jogadorAtual === impostor){
        texto.innerHTML = `
        <p>${cartaimpostor.nome}</p>
        <img src="${cartaimpostor.img}" class="imgcarta">
    `;
    } else {
        texto.innerHTML = `
        <p>${cartaescolhida.nome}</p>
        <img src="${cartaescolhida.img}" class="imgcarta">
    `;
    }
    } else {
        if (jogadorAtual === impostor){
        texto.innerText = "Você é o impostor!"
    } else {
        texto.innerHTML = `
        <p>${cartaescolhida.nome}</p>
        <img src="${cartaescolhida.img}" class="imgcarta">
    `;
    }
    }
    passar.innerText = "próximo jogador"
    passar.onclick = proximo;

}

function proximo(){
    jogadorAtual++;
    if(jogadorAtual > numeroJogadores){
        texto.innerText = "Hora da discussão"
        passar.style.display = "none";
        mostrarbtn.style.display = "block";
    } else {
        mensagem();
    }
}
    mostrarbtn.onclick = function()
    {
        texto.innerText = `O impostor era o jogador número ${impostor}`;
        mostrarbtn.style.display = "none";
        resetbtn.style.display = "block";
    }

resetbtn.onclick = function() {

  //  numeroJogadores = 0;
    jogadores = [];
    jogadorAtual = 1;
    selectJogadores.style.display = "block";
    playbtn.style.display = "block";
    tela.style.display = "none";
    resetbtn.style.display = "none";
    passar.style.display = "block";
    texto.innerText = "";
    //selectJogadores.value = "0";
    secreto.style.display = "block";
    textoimpostor.innerText = "Modo impostor secreto";
    
}
