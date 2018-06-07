var exp = require("express");
var app = exp();
var bodyparser=require('body-parser')
var session=require('express-session');
var handlers=require('./routes/routes.js')
var hbars=require('express-handlebars');
app.use(exp.static(__dirname + "/public"));

//body-parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))

//session
app.use(session({secret:"secret",resave:true,saveUninitialized:true }));

app.set('view engine','handlebars');
app.engine('handlebars',hbars({}))



app.get('/', handlers.loginPageHandler);
app.get('/toLanding', handlers.landinPageHandler);
app.post('/toCity',handlers.cityPageHandler);

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
     	console.log('Node app is running on port', app.get('port'));
})    
