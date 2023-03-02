var oceano, oceanoImagem
var barco, barcoAnimacao

function preload(){
 barcoAnimacao = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 oceanoImagem = loadImage("sea.png");
 console.log("Hello World");
}

function setup(){
  createCanvas(2000,1000);
  
  oceano = createSprite(200,200,100,100);
  oceano.addImage(oceanoImagem);

  barco = createSprite(1000,500,100,100);
  barco.addAnimation("tremendo", barcoAnimacao);
}

function draw() {
  background("white");
   
  
  drawSprites();
}

//AVISO!! quando tu for dar "Go Live" por favor, colocar o zoom em 67% ou mais, obrigado pela atenção, espero que tenha cumprido a proposta da atividade.