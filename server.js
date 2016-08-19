var express=require('express');
var app=express();
var port=3000;

function link(page,name){
    return(`<p></p><a href="${page}">${name}</a></p>`);
   }

var middleware={
    requireAuthentication:function (req,res,next) {
        console.log('private route hit');

    next();
    },
    logger:function (req,rest,next) {
        console.log('Request: '+ new Date().toString() +' '+ req.method + ' - URL: '+req.url );
        next();

    }
};

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);



app.get('/about',middleware.requireAuthentication,function (req,res) {
    res.send('About us'+link('/','Index'))
});

app.use(express.static(__dirname + '/public'));


app.listen(port,function () {
    console.log(`Express server started on port ${port}! `);
});
