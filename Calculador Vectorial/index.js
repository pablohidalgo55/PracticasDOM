const start = () => {
    console.log("Bienvenido");
    document.getElementById("vector1").value=""
    document.getElementById("vector2").value=""
    document.getElementById("resultado").value=""
}

const operacion = (op) => {
    const vector1 = (document.getElementById("vector1").value).split(",").map((valor) => parseInt(valor) || 0);
    const vector2 = (document.getElementById("vector2").value).split(",").map((valor) => parseInt(valor) || 0);
    const resultado = document.getElementById("resultado");

  
    switch (op) {
        case '+':
            (vector1.length === vector2.length) ? resultado.value = vector1.map((valor, i) => valor + vector2[i]) : resultado.value = "Dimensiones de los vectores desigual";
            break;
        case '-':
            (vector1.length === vector2.length) ? resultado.value = vector1.map((valor, i) => valor - vector2[i]) : resultado.value = "Dimensiones de los vectores desigual";
            break;
        case '*':
            (vector1.length === vector2.length) ? resultado.value = vector1.map((valor, i) => valor * vector2[i]) : resultado.value = "Dimensiones de los vectores desigual";
            break;
        case '.*':
            resultado.value = vector1.map((valor) => valor * vector2[0]);
            break;
        default:
            console.log("Operacion invalida");
            
    }
    
}

window.onload = start;