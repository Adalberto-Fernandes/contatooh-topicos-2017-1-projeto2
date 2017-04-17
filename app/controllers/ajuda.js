var ajuda = [
     {
         texto: 'Na página inicial podemos visualizar os contatos existentes'
     },
     {
         texto: 'No botão vermelho podemos excluir um contato'
     },
     {
         texto: 'No botão azul podemos adicionar um novo contato'
     },
     {
        texto: 'Após tentar adiconar novo contato, vamos para uma página onde podemos inserir nome, e-mail e telefone e logo após salvar'
    },
     {
         texto: 'Voltando a página inicial podemos visualizar abaixo do botão azul, quantos contatos temos existentes'
     },
     {
         texto: 'No botão laranja exatamente onde você clicou, nos trás a esta página de ajuda'
     },
     {
         texto: 'Caso não tenha encontrado a ajuda necessária contate o adiministrador'
     }
 ];
 
 module.exports = function () {
     var controller = {};
 
     controller.listaAjuda = function (req, res) {
         res.json(ajuda);
     };
 
     return controller;
 }; 