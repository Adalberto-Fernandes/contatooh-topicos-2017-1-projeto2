var ajuda = [
    {
        texto: 'Mussum Ipsum, cacilds vidis litro abertis. in elementis mé pra quem é amistosis quis leo. Cevadis im ampola pa arma uma pindureta. Quem manda na minha terra sou Euzis! Detraxit consequat et quo num tendi nada.'
    },
    {
        texto: 'Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Sapien in monti palavris qui num significa nadis i pareci latim. Ta deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.” Paisis, filhis, espiritis santis.'
    },
    {
        texto: 'Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta. Leite de capivaris, leite de mula manquis.'
    },
    {
        texto: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.'
    },
    {
        texto: 'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Si num tem leite então bota uma pinga aí cumpadi! Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.'
    },
    {
        texto: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Leite de capivaris, leite de mula manquis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.'
    },
    {
        texto: 'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantiss. Mais vale um bebadis conhecidiss, que um alcoolatra anonimiss. Manduma pindureta quium dia nois paga. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.'
    }
];

module.exports = function () {
    var controller = {};

    controller.listaAjuda = function (req, res) {
        res.json(ajuda);
    };

    return controller;
};