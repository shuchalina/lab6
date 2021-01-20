const express = require("express");
const serv = express();

/*const bodyParser = require('body-parser');
const cors = require('cors');**/

let array = [];

/*serv.use(cors());
serv.use(bodyParser.urlencoded({extended: true}));*/

serv.post('/guide',(req,res)=>{
    const newid = storage.push(req.body)-1;
    res.send(newid.toString());
});

serv.get('/guide', function (req, res) {
    res.send(array);
});

serv.get('/guide/:id', function (req,res){
    const id = req.params.id;
    const item = storage[id];
    if (item===null|| id>=storage.length) {
        res.sendStatus(404);
    } else res.send(storage[id]);

});



serv.put('/guide/:id',(req,res) =>{
    const id = req.params.id;
    storage[id] = req.body;
    res.send(id.toString());
});

serv.delete('/guide/:id', (req,res) =>{
    const id = req.params.id;
    storage[id] = null;
    res.send(id.toString()  );
});

serv.listen(3000,function(){console.log('Server started')});
