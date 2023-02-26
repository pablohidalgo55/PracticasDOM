const start = () => {
    console.log("Bienvenido");
    document.getElementById("x").value = "";
    document.getElementById("y").value = "";
    document.getElementById("modulo").value = "";
    document.getElementById("argumento").value = "";
    document.getElementById("cambio").selectedIndex = 0;
    
}

const seleccionado = (ob) => {
    //console.log(ob.selectedIndex);
    if (ob.selectedIndex == 1)
        document.getElementById("titulo").innerText = "Cartesianas a polares";
    else if (ob.selectedIndex == 2)
        document.getElementById("titulo").innerText = "Polares a cartesianas";
    else
        document.getElementById("titulo").innerText = "Conversor";
}
const calcular = () => {
     const seleccion = document.getElementById("cambio").selectedIndex;
    //console.log(seleccion);
    if (seleccion == 1) {
        const x = parseInt(document.getElementById("x").value)||0;
         const y = parseInt(document.getElementById("y").value) || 0;
   
        const modulo = Math.sqrt(x ** 2 + y ** 2);
        let argumento = (180 * Math.atan(y / x)) / Math.PI;
    
        if (x >= 0 && y >= 0) argumento = argumento;
        if (x < 0 && y >= 0) argumento = argumento + 180;
        if (x < 0 && y < 0) argumento = argumento + 180;
        if (x >= 0 && y < 0) argumento = argumento + 360;
        document.getElementById("modulo").value = modulo;
        document.getElementById("argumento").value = argumento;
    }
    else if (seleccion == 2)
    {
        const modulo = parseFloat(document.getElementById("x").value || 0);
        const angulo = parseFloat(document.getElementById("y").value || 0);
        x = modulo * Math.cos(angulo * Math.PI / 180);
        y = modulo * Math.sin(angulo * Math.PI / 180);
        document.getElementById("modulo").value = x;
        document.getElementById("argumento").value = y;
        
        }
}

window.onload = start;