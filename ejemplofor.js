let tope = parseInt(prompt("ingrese hasta donde llega la serie"));
let i;
let factorial = 1;
for (i=1; i<=tope; i++){
    factorial=factorial*i;
    document.write(factorial+"<br>");
}