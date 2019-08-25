function mostrarDiv(id){
    const inst = document.getElementById('inst-data');
    inst.style.display = "none";
    const del = document.getElementById('del-data');
    del.style.display = "none";
    const act = document.getElementById('act-data');
    act.style.display = "none";
    const buscar = document.getElementById('busc-data');
    buscar.style.display = "none";

   const mostrar = document.getElementById(id);
   mostrar.style.display = "block";
   
}


async function viewD(){
    const options = { 
        method: 'GET',
        headers:{
             'Content-Type': 'application/json'
        }
    };
    
    const response = await fetch('/data', options).catch(error => console.error(error));
    const json = await response.json();

    const table = document.getElementById("tbd");
    table.innerHTML=" ";
    table.innerHTML += "<tr><th>Marca</th><th>USB</th><th>GIGA</th><th>&nbsp;</th></tr>";
    for(let i = 0; i < json.data.length; i++){
        table.innerHTML += `<tr>
        <td>${json.data[i].Marca}</td>
        <td>${json.data[i].USB}</td> 
        <td>${json.data[i].GIGA}</td>
        <td><button onclick="del(${json.data[i].Id})">DEL</button></td>
      </tr>`;
    }

}

function del(id){
    
    fetch("/del", {
        method: 'DELETE', 
        body: JSON.stringify({id:id}), 
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => location.href ="/")
    .catch(error => console.error('Error:', error));
}

async function viewU(){
    const options = { 
        method: 'GET',
        headers:{
             'Content-Type': 'application/json'
        }
    };
    
    const response = await fetch('/data', options).catch(error => console.error(error));
    const json = await response.json();

    const table = document.getElementById("tbu");
    table.innerHTML=" ";
    table.innerHTML += "<tr><th>Marca</th><th>USB</th><th>GIGA</th><th>&nbsp;</th></tr>";
    for(let i = 0; i < json.data.length; i++){
        table.innerHTML += `<tr>
        <td><input type="text" id="marc${json.data[i].Id}"value=${json.data[i].Marca}></td>
        <td><input type="text" id="usb${json.data[i].Id}" value=${json.data[i].USB}></td> 
        <td><input type="number" id="giga${json.data[i].Id}" value=${json.data[i].GIGA}></td>
        <td><button onclick="update(${json.data[i].Id})">UPDATE</button></td>
      </tr>`;
    }
}

function update(id){

    const data = {
        id: id,
        marca: document.getElementById("marc"+id).value,
        usb: document.getElementById("usb"+id).value,
        giga: document.getElementById("giga"+id).value,
    };
    fetch("/up", {
        method: 'POST', 
        body: JSON.stringify({data:data}), 
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => location.href ="/")
    .catch(error => console.error('Error:', error));

}



async function marca(){
    

    const options = { 
        method: 'POST',
        body: JSON.stringify({s:document.getElementById("search1").value}),
        headers:{
            'Content-Type': 'application/json'
        }
    };
    
    const response = await fetch('/marca', options).catch(error => console.error(error));
    const json = await response.json();

    const table = document.getElementById("res");
    table.innerHTML=" ";
    table.innerHTML += "<tr><th>Marca</th><th>USB</th><th>GIGA</th></tr>";
    for(let i = 0; i < json.data.length; i++){
        table.innerHTML += `<tr>
        <td>${json.data[i].Marca}</td>
        <td>${json.data[i].USB}</td> 
        <td>${json.data[i].GIGA}</td>
      </tr>`;
    }
}


async function giga(){
    const options = { 
        method: 'POST',
        body: JSON.stringify({s:document.getElementById("search2").value}),
        headers:{
            'Content-Type': 'application/json'
        }
    };
    
    const response = await fetch('/giga', options).catch(error => console.error(error));
    const json = await response.json();

    const table = document.getElementById("res");
    table.innerHTML=" ";
    table.innerHTML += "<tr><th>Marca</th><th>USB</th><th>GIGA</th></tr>";
    for(let i = 0; i < json.data.length; i++){
        table.innerHTML += `<tr>
        <td>${json.data[i].Marca}</td>
        <td>${json.data[i].USB}</td> 
        <td>${json.data[i].GIGA}</td>
      </tr>`;
    }
}