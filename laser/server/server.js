var express = require("express");
var path = require("path");



var app = express();

app.set('port', 8080);

//Set static path:
app.use(express.static(path.join(__dirname, '../')));

app.listen(app.get('port'), function(){
	console.log('listening on port:'+app.get('port'));
});
