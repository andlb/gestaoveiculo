const mongoose = require('mongoose');

const sinesp = require('sinesp-nodejs');
const client = require('node-rest-client').Client;

var oClient = new client();

//chamando tabela FIPE.
oClient.get("http://fipeapi.appspot.com/api/1/carros/marcas.json", function (data, response) {  
  for (let cData in data) {
    //console.log(data[cData].key);
    getMarcas(data[cData].id);
    return;
  }
});



async function getMarcas(keyMarca) {
 
  var oClient = new client();
  await oClient.get("http://fipeapi.appspot.com/api/1/carros/veiculos/"+keyMarca+".json", function (dataMarca, response) {
    //console.log(response  );      
    console.log(dataMarca  );  
 
  });
  
}
/*
sinesp.consultaPlaca('EKH9064', function (retorno) {
  console.log(retorno);
});
*/