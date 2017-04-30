var http = require('http');
var app = require('./config/express')(); // Cuidado com
                                         // os parênteses

http
   .createServer(app)
   .listen(app.get('port'), function() {
      console.log('Express escutando na porta ' + app.get('port'));
   });