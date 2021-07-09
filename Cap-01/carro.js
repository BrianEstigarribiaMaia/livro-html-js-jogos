// função construtora equivale a uma classe
function Carro(cor, velocMaxima){
    this.cor = cor;
    this.velocMaxima = velocMaxima;
    this.velocAtual = 0;
}


//protótipo com método 
Carro.prototype = {
    acelerar: function(){
        this.velocAtual += 20;
    }
}
