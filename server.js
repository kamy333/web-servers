var express=require('express');
var app=express();
var port=process.env.PORT || 3000;


var middleware=require('./middleware');

function link(page,name){
    return(`<p></p><a href="${page}">${name}</a></p>`);
   }

// var middleware=

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);



app.get('/about',middleware.requireAuthentication,function (req,res) {
    res.send('About us!'+link('/','Index'))
});

app.use(express.static(__dirname + '/public'));


app.listen(port,function () {
    console.log(`Express server started on port ${port}! `);
});
