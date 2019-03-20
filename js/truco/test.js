//ORDENAMIENTO
    //ORDENAMIENTO DE MAYOR A MENOR, PARA HACER DE MENOR A MAYOR CAMBIAR > A < EN EL IF
// var arr = [43, 56, 23, 89, 88, 90, 99, 652, 1, 10, 200, 70, 60];

// for (var i = 0; i < arr.length - 1; i++) {
//     for(var j = i + 1; j < arr.length; j++){
//         if(arr[j] > arr[i]){
//             var aux = arr[i];
//             arr[i] = arr[j];
//             arr[j] = aux;
//         }
//     }
// }

// console.log(arr);



//MAYOR, MENOR, PROMEDIO

// var arr = [43, 56, 23, 89, 88, 90, 99, 652, 1, 10, 200, 70, 60];
// var mayor = -1000, menor = 1000;
// var suma = 0;

// for(var i = 0; i < arr.length; i++){
//     if(arr[i] > mayor){
//         mayor = arr[i];
//     }
//     if(arr[i] < menor){
//         menor = arr[i];
//     }

//     suma += arr[i];
// }

// var promedio = suma / arr.length;
// console.log(mayor);
// console.log(menor);
// console.log(promedio);


//MATRICES Y ORDENAMIENTO DE MATRICES

// var i,j,k,aux;
// var matriz = [
//     [43, 56, 23, 89],
//     [88, 90, 99, 652],
//     [1, 10, 200, 70],
//     [60, 2, 200, 783]
// ];

// for(i = 0; i < matriz.length; i++){
//     for(j = 0; j < matriz[i].length - 1; j++){
//         for(k = j + 1; k < matriz[i].length; k++){
//             if(matriz[i][k] < matriz[i][j]){
//                 aux = matriz[i][j];
//                 matriz[i][j] = matriz[i][k];
//                 matriz[i][k] = aux;
//             }
//         }
//     }
// }

// for(i = 0; i < matriz.length - 1; i++){
//     for(j = i + 1; j < matriz.length; j++){
//         if(matriz[j][0] < matriz[i][0]){
//             aux = matriz[i];
//             matriz[i] = matriz[j];
//             matriz[j] = aux;
//         }
//     }
// }

// console.log(matriz);


//JSON

// var json = {
//     nombre: 'Andres',
//     apellido: 'Perez',
//     dni: 36667890,
//     cant_hijos: 3
// };

// console.log(json.nombre);
// console.log(json.apellido);
// console.log(json.dni);
// console.log(json.cant_hijos);


//AGRUPAMIENTO
    //AGRUPAMIENTO DE LETRAS EN UN TEXTO

var text = 'JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. It was inspired by Java, Scheme and Self.';
var is_there = false;
var arg = [];

arg.push({letra: text[0], cant: 1});


for(var i = 1; i < text.length; i++){
    for(var j = 0; j < arg.length; j++){
        if(arg[j].letra == text[i]){
            arg[j].cant++;
            is_there = true;
        }else{
            is_there = false;
        }
    }

    if(!is_there){
        arg.push({letra: text[i], cant: 1});
    }
}

console.log(arg);


