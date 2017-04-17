module.exports = function(app) {
    var controller = app.controllers.ajuda;

    app.route('/ajuda').get(controller.listaAjuda);
};

