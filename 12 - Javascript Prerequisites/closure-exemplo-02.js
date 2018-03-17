var CriadorDeTelefones = function() {
    var ordem = 0;

    var adicionarTelefone = function(telefone) {
        ordem++;
        return {
            ordem: ordem,
            telefone: telefone
        };
    };

    return adicionarTelefone;

};

var novoTelefone = CriadorDeTelefones();

var tel1 = novoTelefone(16992088288);
var tel2 = novoTelefone(1637017605);

console.log(tel1);
console.log(tel2);