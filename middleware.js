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

module.exports=middleware;