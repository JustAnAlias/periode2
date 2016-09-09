var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/calculator/:operation/:n1/:n2', function(req, res, next){
    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)cd
    }
    req.calculatorRequest = calculatorRequest;
    next();
});

app.get('/api/calculator/*', function(req, res){
    switch (req.calculatorRequest.operation){
        // Case Add, set status code and parse toString to avoid statusCode Error
        case 'add': res.status(200).send((req.calculatorRequest.n1 + req.calculatorRequest.n2).toString());
            break;
        case 'sub' : res.status(200).send((req.calculatorRequest.n1 - req.calculatorRequest.n2).toString());
            break;
        case 'mul' : res.status(200).send((req.calculatorRequest.n1 * req.calculatorRequest.n2).toString());
            break;
        case 'div' : res.status(200).send((req.calculatorRequest.n1 / req.calculatorRequest.n2).toString());
        break;
    }
});

// Start the server
app.listen(3000, function(){
    console.log('server started, listening on: port 3000 ');
});
