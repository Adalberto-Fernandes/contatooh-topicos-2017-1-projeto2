var instrucoes = [
    {
        descricao: 'Na página inicial temos as listas de contatos'
    },
    {
        descricao: 'No botão de "Remover" podemos excluir um contato'
    },
    {
        descricao: 'No botão de "Novos Contato" podemos adicionar um novo contato'
    },
    {
       descricao: 'No fomrulário de contato temos nome, e-mail e telefone'
    },
    {
        descricao: 'Apenas números são suportador pelo formulário'
    },
    {
        descricao: 'No nome do contato, na lista de contatos, existe um link edição do mesmo'
    },
    {
        descricao: 'Qualquer duvida entrar em contato com thiago@scalone.com.br'
    }
];
 
module.exports = function () {
    var controller = {};

    controller.listaAjuda = function (req, res) {
        res.json(instrucoes);
    };

    return controller;
};
