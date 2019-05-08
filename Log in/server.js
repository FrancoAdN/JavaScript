'use strict';
 
const ADODB = require('node-adodb');
const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=db.mdb;');

const express = require("express");
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

app.post("/login", (req, res, next) => {
  let reg = req.body;
  connection
  .query('SELECT * FROM Users WHERE Nombre = '+ '"'+ reg.name + '"')
  .then(data => {
    let cont = 0;
    for(let i = 0; i < data.length; i++){
      let pass = data[i].Pass;
      if(reg.pass && pass){
        if(pass == reg.pass){
          console.log(`Bienvenido ${reg.name}`);
          break;
        }else
          cont++;
      }
    }
    if(cont == data.length)
      console.log("Contraseña incorrecta");
  })
  .catch(error => {
    console.error(error);
  });
}); 

app.post("/register", (req, res, next) => {
  let reg = req.body;
  
  let inst = `INSERT INTO Users(Nombre, Apellido, Pass, Nickname, Email, Pais) VALUES ("${reg.nombre}", "${reg.apellido}", "${reg.pass}", "${reg.nick}", "${reg.email}", "${reg.pais}")`;
  
  connection
  .execute(inst)
  .then(data => {
      //console.log(data);
      console.log(JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error(error);
  });

  res.json({mensaje:"insercion exitosa"});  
});




app.listen(3000, () => {
 console.log("Server running on port 3000");
});