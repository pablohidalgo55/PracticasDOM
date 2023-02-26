const inicializar = () => {
    console.log("Bienvenido");
    document.getElementById("texto").value = "";
}

const generar = (largo=20) => {
    const cadena = [];
    largo = parseInt(document.getElementById("largo").value||10);
    for (let i = 0; i < largo; i++){
        cadena.push(genAleatorio('Mmn'));
    }

    document.getElementById("texto").value = cadena.join("");
}

const genAleatorio = (tipo) => {
    
    switch (tipo)
    {
        case 'm':
            return genAle(1);
            break;
        case 'Mm':
            return genAle(2);
            break;
        case 'Mmn':
            return genAle(3);
            break;
        default:
            console.log("Tipo invalido");

    }
}


const genAle = (cant=1) => {
    const sel = parseInt(Math.random() * cant);
    
    switch (sel)
    {
        case 0:
            return String.fromCodePoint(parseInt(Math.random() * ('{'.charCodeAt(0) - 'a'.charCodeAt(0))) + 'a'.charCodeAt(0));
            break;
        case 1:
            return String.fromCodePoint(parseInt(Math.random() * ('['.charCodeAt(0) - 'A'.charCodeAt(0))) + 'A'.charCodeAt(0));
            break;
        case 2:
            return String.fromCodePoint(parseInt(Math.random() * (':'.charCodeAt(0) - '0'.charCodeAt(0))) + '0'.charCodeAt(0));
            break;
        default:
            console.log("cantidad invalida");
            

    }
}



window.onload = inicializar;