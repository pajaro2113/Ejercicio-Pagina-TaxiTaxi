let tope = parseInt(prompt("ingrese hasta donde quiere llegar"));
let i=0;
let cadena;
let tope2;

for (i; i<tope; i++){
      cadena = '';
      for(tope2=0; tope2<=i; tope2++){
        cadena += 1;
      }
        
      document.write(`${cadena}<br>`)
}