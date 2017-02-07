
var app=require('express')();
var path=require('path');
var mysql=require('mysql');

var port=process.env.PORT || 8082;

var connection=mysql.createConnection({
host:'192.168.1.117',
user :'root',
password:'xxxxxxxx'
});

connection.query('USE cosmo2017');
app.set('views',path.join(_dirname,'views'));
app.set('views engine','jade');
app.use(express.static(path.join(_dirname,'public')));

app.get('/',function(req,res){
	connection.query('SELECT * FROM users',function(err,rows){
		res.render('users',{users:rows});
	})
	//res.send('hello world');
});
app.listen(port,function () {
	console.log('Start host on'+port);
	// body...
});