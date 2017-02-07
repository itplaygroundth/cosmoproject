
var express=require('express');
var path=require('path');
var mysql=require('mysql');
var app=express();

var port=process.env.PORT || 8082;

var connection=mysql.createConnection({
host:'localhost',
user :'cosmo_admin',
password:'IBMP@w0rd1234',
database:'cosmo2017'
});

app.set('views',path.join(__dirname,'/views'));
app.set('view engine','jade');
app.use(express.static(path.join(__dirname,'/public')));

//app.get('/',function(req,res){
//	connection.query('SELECT * FROM users',function(err,rows){
//		res.render('users',{users:rows});
//	})
	//res.send('hello world');
//});
//function getHomePage(req,res){
//	res.render('index.jade');
//}
//app.get('/',getHomePage);
app.get('/jade', function(req ,res) {

  res.render('index', {
    title: 'This is title of Jade Template',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    names: ['John Doe', 'Jane Doe', 'Jane Dane']
  });
});

app.listen(port,function () {
	console.log('Start host on'+port);
	// body...
});