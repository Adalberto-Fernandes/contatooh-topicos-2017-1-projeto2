var http = require('http');
var app = require('./config/express')(); // Cuidado com
                                         // os parênteses

require('./config/passport')( /* vazio */);
var dbConn = require('./config/database');
dbConn('mongodb://localhost/contatooh_top');                                         

http
   .createServer(app)
   .listen(app.get('port'), function() {
      console.log('Express escutando na porta ' + app.get('port'));
   });