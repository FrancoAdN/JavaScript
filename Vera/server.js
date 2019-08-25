'use strict';
 
const ADODB = require('node-adodb');
const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=database.mdb;');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.post('/insertar', (req, resp) => {

    let instruccion = `INSERT INTO Pendrives(Marca, USB, GIGA) VALUES ("${req.body.marca}", "${req.body.usb}", ${req.body.giga})`;
    connection
    .execute(instruccion)
    .then(data => {
        console.log(JSON.stringify(data, null, 2));
    })
    .catch(error => {
        console.error(error);
    });
    
    
    resp.redirect('/');
});

app.get('/data', (req, resp) => {
    
    connection
    .query('SELECT * FROM Pendrives')
    .then(data => {
        resp.json({data: data});
    })
    .catch(error => {
        console.error(error);
    });
});

app.delete('/del', (req, resp) => {
    connection
    .execute(`DELETE * FROM Pendrives WHERE Id = ${req.body.id}`)
    .then(data => {
        resp.end();
    })
    .catch(error => {
        console.error(error);
    });
})


app.post('/up', (req, resp) => {
    const data = req.body.data;
    const exe = `UPDATE Pendrives
    SET Marca = "${data.marca}", USB = "${data.usb}", GIGA = ${data.giga}
    WHERE Id = ${data.id};`;
      connection
      .execute(exe)
      .then(data => {
        console.log("DONE!");
      })
      .catch(error => {
        console.error(error);
      });

      resp.end();
});


app.post('/marca', (req, resp) => {
    const query = 'SELECT * FROM Pendrives WHERE Marca = "'+ req.body.s+'"';
    connection
        .query(query)
        .then(data => {
            resp.json({data: data});
        })
        .catch(error => {
            console.error(error);
        });
});

app.post('/giga', (req, resp) => {
    const query = 'SELECT * FROM Pendrives WHERE GIGA = '+ req.body.s;
    connection
        .query(query)
        .then(data => {
            resp.json({data: data});
        })
        .catch(error => {
            console.error(error);
        });
});


app.use(express.static('public'));

app.listen(3000, () => {
 console.log("Server running on port 3000");
});