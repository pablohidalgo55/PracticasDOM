const mensaje = () => console.log("%cBienvenido", "color:tomato");
const inicializar=() => {
    document.getElementById("op1").value = "";
    document.getElementById("op2").value = "";
    document.getElementById("res").value = "";
}
const operacion = (op) => {
    
    const op1 = parseInt(document.getElementById("op1").value||0,2);
    const op2 = parseInt(document.getElementById("op2").value||0,2);
    const res = document.getElementById("res");


    switch (op)
    {
        case '+':
            res.value = (op1 + op2).toString(2);
            break;
        case '-':
             res.value = (op1 - op2).toString(2);
            break;
        case '*':
             res.value = (op1 * op2).toString(2);
            break;
        case '/':
             res.value = (op1 / op2).toString(2);
            break;
        default:
            console.log("Operacion invalida");
    }
}