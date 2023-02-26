
const inicializar = () => {
    console.log("Bienvenido");
    document.getElementById("nm1").value = "";
    document.getElementById("nm2").value = "";
    document.getElementById("factor").value = "";
}
const generar = () => {
    const factor = parseInt(document.getElementById("factor").value||4)-1;
    const nm1 = document.getElementById("nm1").value = parseInt( Math.random() * 9*10**factor+10**factor);
    const nm2 = document.getElementById("nm2").value = parseInt( Math.random() * 9*10**factor+10**factor);
    
}


window.onload = inicializar;




