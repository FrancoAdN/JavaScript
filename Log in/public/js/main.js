$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});

function sing(){
    let url = 'http://localhost:3000/register';
    let data = {};
    data.nombre = document.getElementById("name").value;
    data.apellido = document.getElementById("last").value;
    data.pass = document.getElementById("pass").value;
    data.nick = document.getElementById("nick").value;
    data.email = document.getElementById("email").value;
    data.pais = document.getElementById("cont").value;

    if(data.nombre && data.apellido && data.pass && data.nick && data.email && data.pais){
        var miInit = { 
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        };

        fetch(url, miInit)
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }
}

function login(){
    let url = 'http://localhost:3000/login';
    let user = {};

    user.name = document.getElementById("user").value;
    user.pass = document.getElementById("uPass").value;
    
    if(user.name && user.pass){
        var miInit = { 
            method: 'POST', // or 'PUT'
            body: JSON.stringify(user), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        };

        fetch(url, miInit)
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
            
    }
    
}
