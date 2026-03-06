const selectJogadores = document.getElementById("jogadores");
let numeroJogadores = 0;
let impostor;
let dicaImpostor;
const dica = document.getElementById("dica");
const secreto = document.getElementById("secreto");
let mostrarbtn = document.getElementById("mostrar");
let resetbtn= document.getElementById("reset");
let playbtn = document.getElementById("play");
   let cartas = [
  {nome: "Cavaleiro", img: "Cartas/cavaleiro.png", dica1:"3",dica2:"Antigo",dica3:"masculino",dica4:"evo", dica5:"perto"},
  {nome: "Bombardeiro", img:"Cartas/bombardeiro.png", dica1:"2",dica2:"fraco",dica3:"barato",dica4:"antigo", dica5:"1 unidade"},
  {nome:"Arqueiras", img:"Cartas/arqueiras.png", dica1:"2",dica2:"dupla",dica3:"equipamento",dica4:"evo", dica5:"distância"},
  {nome:"Mini P.E.K.K.A", img:"Cartas/minipekka.png", dica1:"4",dica2:"feminino",dica3:"perto",dica4:"antigo", dica5:"mini-tank"},
  {nome:"Mosqueteira", img:"Cartas/mosqueteira.png", dica1:"4",dica2:"feminino",dica3:"3",dica4:"distância", dica5:"evo"},
  {nome:"Gigante", img:"Cartas/gigante.png", dica1:"5",dica2:"masculino",dica3:"tanque",dica4:"antigo", dica5:"condição de vitória"},
  {nome:"Príncipe", img:"Cartas/principe.png", dica1:"5",dica2:"masculino",dica3:"antigo",dica4:"equipamento", dica5:"2"},
  {nome:"Bebe dragão", img:"Cartas/bebedragao.png", dica1:"4",dica2:"distância",dica3:"antigo",dica4:"1 unidade", dica5:"elemento"},
  {nome:"Exército de esqueletos", img:"Cartas/exercito.png", dica1:"3",dica2:"multiplos",dica3:"barato",dica4:"não-humano", dica5:"épica"},
  {nome:"Bruxa", img:"Cartas/bruxa.png", dica1:"4",dica2:"épica",dica3:"feminino",dica4:"3", dica5:"antigo"},
  {nome:"Goblins lanceiros", img:"Cartas/goblinlanceiro.png", dica1:"2",dica2:"distância",dica3:"3",dica4:"equipamento", dica5:"comum"},
  {nome:"Goblins", img:"Cartas/goblin.png", dica1:"2",dica2:"comum",dica3:"4",dica4:"perto", dica5:"multiplos"},
  {nome:"Valquíria", img:"Cartas/valquiria.png", dica1:"4",dica2:"1 unidade",dica3:"equipamento",dica4:"evo", dica5:"perto"},
  {nome:"Esqueletos", img:"Cartas/esqueletos.png", dica1:"1",dica2:"fraco",dica3:"defesa",dica4:"4", dica5:"multiplos"},
  {nome:"Servos", img:"Cartas/servos.png", dica1:"3",dica2:"multiplos",dica3:"barato",dica4:"fraco", dica5:"distância"},
  {nome:"Esqueleto gigante", img:"Cartas/esqueletogigante.png", dica1:"6",dica2:"tanque",dica3:"caro",dica4:"1 unidade", dica5:"dano de morte"},
  {nome:"Balão", img:"Cartas/balao.png", dica1:"5",dica2:"dano de morte",dica3:"condição de vitória",dica4:"1 unidade", dica5:"aéreo"},
  {nome:"Bárbaros", img:"Cartas/barbaro.png", dica1:"5",dica2:"multiplos",dica3:"equipamento",dica4:"perto", dica5:"evo"},
  {nome:"Horda de servos", img:"Cartas/horda.png", dica1:"5",dica2:"multiplos",dica3:"distância",dica4:"aéreo", dica5:"comum"},
  {nome:"Corredor", img:"Cartas/corredor.png", dica1:"4",dica2:"raro",dica3:"condição de vitória",dica4:"rápido", dica5:"humano"},
  {nome:"P.E.K.K.A", img:"Cartas/pekka.png", dica1:"7",dica2:"épica",dica3:"tank",dica4:"perto", dica5:"feminino"},
  {nome:"Mago", img:"Cartas/mago.png", dica1:"5",dica2:"distância",dica3:"splash",dica4:"raro", dica5:"humano"},
  {nome:"Golem", img:"Cartas/golem.png", dica1:"lento",dica2:"épica",dica3:"tank",dica4:"caro", dica5:"dano de morte"},
  {nome:"Gigante real", img:"Cartas/gigantereal.png", dica1:"6",dica2:"comum",dica3:"distância",dica4:"condição de vitória", dica5:"masculino"},
  {nome:"Três mosqueteiras", img:"Cartas/tresmosqueteiras.png", dica1:"9",dica2:"distância",dica3:"raro",dica4:"multiplos", dica5:"feminino"},
  {nome:"Príncipe das trevas", img:"Cartas/principedastrevas.png", dica1:"4",dica2:"épica",dica3:"splash",dica4:"perto", dica5:"escudo"},
  {nome:"Mago de gelo", img:"Cartas/magodegelo.png", dica1:"3",dica2:"lendária",dica3:"lento",dica4:"distância", dica5:"elemento"},
  {nome:"Princesa", img:"Cartas/princesa.png", dica1:"3",dica2:"lendária",dica3:"distância",dica4:"splash", dica5:"feminino"},
  {nome:"Fornalha", img:"Cartas/fornalha.png", dica1:"4",dica2:"estático",dica3:"raro",dica4:"fogo", dica5:"invocador"},
  {nome:"Espírito de fogo", img:"Cartas/espiritodefogo.png", dica1:"1",dica2:"splash",dica3:"barato",dica4:"comum", dica5:"elemento"},
  {nome:"Guardas", img:"Cartas/guardas.png", dica1:"3",dica2:"escudo",dica3:"épica",dica4:"multiplos", dica5:"não-humano"},
  {nome:"Lava hound", img:"Cartas/lavahound.png", dica1:"7",dica2:"lendária",dica3:"tank",dica4:"aéreo", dica5:"lento"},
  {nome:"Mineiro", img:"Cartas/mineiro.png", dica1:"3",dica2:"lendária",dica3:"perto",dica4:"surpresa", dica5:"humano"},
  {nome:"Sparky", img:"Cartas/sparky.png", dica1:"6",dica2:"lendária",dica3:"dano alto",dica4:"lento", dica5:"não-humano"},
  {nome:"Lançador", img:"Cartas/lancador.png", dica1:"5",dica2:"épica",dica3:"splash",dica4:"não-humano",dica5:"distância"},
  {nome:"Espírito de gelo", img:"Cartas/espiritodegelo.png", dica1:"1",dica2:"comum",dica3:"atordoar",dica4:"elemento", dica5:"barato"},
  {nome:"Lenhador", img:"Cartas/lenhador.png", dica1:"4",dica2:"lendária",dica3:"fúria",dica4:"perto", dica5:"rápido"},
  {nome:"Mega servo", img:"Cartas/megaservo.png", dica1:"3",dica2:"raro",dica3:"aéreo",dica4:"forte", dica5:"não-humano"},
  {nome:"Dragão infernal", img:"Cartas/dragaoinfernal.png", dica1:"4",dica2:"lendária",dica3:"aéreo",dica4:"foco", dica5:"elemento"},
  {nome:"Golem de gelo", img:"Cartas/gelemdegelo.png", dica1:"2",dica2:"raro",dica3:"lento",dica4:"mini-tank", dica5:"não-humano"},
  {nome:"Bárbaros de elite", img:"Cartas/barbarosdeelite.png", dica1:"6",dica2:"comum",dica3:"rápido",dica4:"dupla", dica5:"perto"},
  {nome:"Mago elétrico", img:"Cartas/magoeletrico.png", dica1:"4",dica2:"lendária",dica3:"atordoar",dica4:"distância", dica5:"humano"},
  {nome:"Goblin com dardo", img:"Cartas/goblincomdardo.png", dica1:"3",dica2:"raro",dica3:"rápido",dica4:"distância", dica5:"não-humano"},
  {nome:"Executor", img:"Cartas/executor.png", dica1:"5",dica2:"épica",dica3:"splash",dica4:"equipamento", dica5:"distância"},
  {nome:"Aríate de batalha", img:"Cartas/ariate.png", dica1:"4",dica2:"raro",dica3:"perto",dica4:"condição de vitória", dica5:"dupla"},
  {nome:"Guangue de goblins", img:"Cartas/gangue.png", dica1:"3",dica2:"comum",dica3:"multiplos",dica4:"defesa", dica5:"não-humano"},
  {nome:"Bandida", img:"Cartas/bandida.png", dica1:"3",dica2:"lendária",dica3:"rápida",dica4:"feminino", dica5:"perto"},
  {nome:"Bruxa sombria", img:"Cartas/bruxasombria.png", dica1:"4",dica2:"lendária",dica3:"invocador",dica4:"perto", dica5:"feminino"},
  {nome:"Morcegos", img:"Cartas/morcegos.png", dica1:"2",dica2:"comum",dica3:"aéreo",dica4:"multiplos", dica5:"fraco"},
  {nome:"Máquina voadora", img:"Cartas/maquinavoadora.png", dica1:"4",dica2:"raro",dica3:"aéreo",dica4:"distância", dica5:"equipamento"},
  {nome:"Carrinho de canhão", img:"Cartas/carrinho.png", dica1:"5",dica2:"épica",dica3:"estático",dica4:"escudo", dica5:"perto"},
  {nome:"Barril de esqueletos", img:"Cartas/barrilesqueletos.png", dica1:"3",dica2:"comum",dica3:"aéreo",dica4:"dano de morte", dica5:"multiplos"},
  {nome:"Megacavaleiro", img:"Cartas/megacavaleiro.png", dica1:"7",dica2:"lendária",dica3:"splash",dica4:"tank", dica5:"perto"},
  {nome:"Eletrocutadores", img:"Cartas/eletrocutadores.png", dica1:"4",dica2:"raro",dica3:"atordoar",dica4:"multiplos", dica5:"não-humano"},
  {nome:"Caçador", img:"Cartas/cacador.png", dica1:"4",dica2:"épica",dica3:"perto",dica4:"masculino", dica5:"distância"},
  {nome:"Fantasma real", img:"Cartas/fantasma real.png", dica1:"3",dica2:"lendária",dica3:"splash",dica4:"perto", dica5:"masculino"},
  {nome:"Patifes", img:"Cartas/patifes.png", dica1:"5",dica2:"comum",dica3:"multiplos",dica4:"distância", dica5:"tanque"},
  {nome:"Porcos reais", img:"Cartas/porcos.png", dica1:"5",dica2:"raro",dica3:"condição de vitória",dica4:"rápido", dica5:"multiplos"},
  {nome:"Recrutas reais", img:"Cartas/recrutas.png", dica1:"7",dica2:"comum",dica3:"multiplos",dica4:"escudo", dica5:"perto"},
  {nome:"Goblin gigante", img:"Cartas/goblingigante.png", dica1:"6",dica2:"épica",dica3:"condição de vitória",dica4:"invocador", dica5:"tanque"},
  {nome:"Dragão elétrico", img:"Cartas/dragaoeletrico.png", dica1:"5",dica2:"épica",dica3:"aéreo",dica4:"atordoar", dica5:"elemento"},
  {nome:"Domadora de carneiros", img:"Cartas/domadora.png", dica1:"5",dica2:"lendária",dica3:"condição de vitória",dica4:"feminino", dica5:"rápido"},
  {nome:"Destruidores de muro", img:"Cartas/destruidores.png", dica1:"2",dica2:"épica",dica3:"condição de vitória",dica4:"dupla", dica5:"não-humano"},
  {nome:"Pescador", img:"Cartas/pescador.png", dica1:"3",dica2:"lendária",dica3:"controle",dica4:"perto", dica5:"masculino"},
  {nome:"Golem de elixir", img:"Cartas/golemdeelixir.png", dica1:"3",dica2:"raro",dica3:"divisível",dica4:"tank", dica5:"não-humano"},
  {nome:"Curadora guerreira", img:"Cartas/curadora.png", dica1:"4",dica2:"raro",dica3:"feminino",dica4:"perto", dica5:"suporte"},
  {nome:"Pirotécnica", img:"Cartas/pirotecnica.png", dica1:"3",dica2:"comum",dica3:"distância",dica4:"splash", dica5:"feminino"},
  {nome:"Espírito de cura", img:"Cartas/espiritocurador.png", dica1:"1",dica2:"raro",dica3:"elemento",dica4:"suporte", dica5:"barato"},
  {nome:"Dragões esqueletos", img:"Cartas/dragoesesqueletos.png", dica1:"4",dica2:"comum",dica3:"aéreo",dica4:"dupla", dica5:"splash"},
  {nome:"Gigante elétrico", img:"Cartas/giganteeletrico.png", dica1:"6",dica2:"épica",dica3:"tank",dica4:"atordoar", dica5:"condição de vitória"},
  {nome:"Espírito elétrico", img:"Cartas/espiritoeletrico.png", dica1:"1",dica2:"comum",dica3:"atordoar",dica4:"elemento", dica5:"barato"},
  {nome:"Bruxa-Mãe", img:"Cartas/bruxamae.png", dica1:"4",dica2:"lendária",dica3:"invocador",dica4:"distância", dica5:"feminino"},
  {nome:"Cavaleiro dourado", img:"Cartas/cavaleirodourado.png", dica1:"4",dica2:"campeão",dica3:"habilidade",dica4:"masculino", dica5:"perto"},
  {nome:"Rainha arqueira", img:"Cartas/rainhaarqueira.png", dica1:"5",dica2:"campeão",dica3:"habilidade",dica4:"distância", dica5:"feminino"},
  {nome:"Rei esqueleto", img:"Cartas/reiesqueleto.png", dica1:"4",dica2:"campeão",dica3:"habilidade",dica4:"invocador", dica5:"perto"},
  {nome:"Mineiro bombado", img:"Cartas/mineirobombado.png", dica1:"4",dica2:"campeão",dica3:"habilidade",dica4:"perto", dica5:"masculino"},
  {nome:"Monge", img:"Cartas/monge.png", dica1:"5",dica2:"campeão",dica3:"habilidade",dica4:"perto", dica5:"masculino"},
  {nome:"Fênix", img:"Cartas/fenix.png", dica1:"4",dica2:"lendária",dica3:"aéreo",dica4:"não-humano", dica5:"forte"},
  {nome:"Pequeno príncipe", img:"Cartas/pequenoprincipe.png", dica1:"3",dica2:"campeão",dica3:"habilidade",dica4:"invocador", dica5:"distância"},
  {nome:"Goblin demolidor", img:"Cartas/goblindemolidor.png", dica1:"4",dica2:"épica",dica3:"distância",dica4:"não-humano", dica5:"fogo"},
  {nome:"Máquina goblin", img:"Cartas/maquinagoblin.png", dica1:"5",dica2:"lendária",dica3:"tanque",dica4:"não-humano", dica5:"perto"},
  {nome:"Arbusto traiçoeiro", img:"Cartas/arbusto.png", dica1:"2",dica2:"comum",dica3:"estático",dica4:"surpresa", dica5:"não-humano"},
  {nome:"Goblinstein", img:"Cartas/goblinstein.png", dica1:"5",dica2:"lendária",dica3:"multiplos",dica4:"tanque", dica5:"não-humano"},
  {nome:"Gigante das runas", img:"Cartas/gigantedasrunas.png", dica1:"4",dica2:"lendária",dica3:"tank",dica4:"atordoar", dica5:"masculino"},
  {nome:"berserker", img:"Cartas/berserker.png", dica1:"2",dica2:"raro",dica3:"rápido",dica4:"masculino", dica5:"perto"},
  {nome:"Imperatriz espiritual", img:"Cartas/imperatriz.png", dica1:"6",dica2:"3",dica3:"feminino",dica4:"lendária", dica5:"distância"}
]
   let cartaescolhida;
   let cartaimpostor;
   const textoimpostor = document.getElementById("secretoTexto");
   const dicas = document.getElementById("dicas");
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
    dica.style.display="none";
    dicas.innerText="";
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

    let numerodica = Math.floor(Math.random() * 5) + 1;
    dicaImpostor = cartaescolhida["dica" + numerodica];
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
        if (jogadorAtual === impostor && dica.checked){
        texto.innerText = `Você é o impostor! 
Dica: ${dicaImpostor}`
        } else if(jogadorAtual === impostor){
            texto.innerText = "você é o impostor"
        }
     else{
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

    jogadores = [];
    jogadorAtual = 1;
    selectJogadores.style.display = "block";
    playbtn.style.display = "block";
    tela.style.display = "none";
    resetbtn.style.display = "none";
    passar.style.display = "block";
    texto.innerText = "";
    secreto.style.display = "block";
    dica.style.display="block";
    textoimpostor.innerText = "Modo impostor secreto";
    dicas.innerText = "dicas"
    
}
