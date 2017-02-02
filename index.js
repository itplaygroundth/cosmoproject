var app=require('express'){};
var port=process.env.PORT || 8082;
app.get('/',function(req,res){
	res.send('hello world');
});
app.listen(port,function () {
	console.log('Start host on'+port);
	// body...
});