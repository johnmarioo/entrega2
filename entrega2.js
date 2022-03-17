let arreglo2 = new Array(5);
for (let i=0;i<5;i++)
{
  let random = Math.round(100*Math.random());
  arreglo2[i]=random;     
}
console.log(arreglo2);

const borrar = (arreglo) => {    
  arreglo.splice(3,1);
  return arreglo;
}
console.log(borrar(arreglo2))

const Insertar = (arreglo) => {    
  arreglo.splice(2,0,'John');
  return arreglo;
}
console.log(Insertar(arreglo2))

const cambiar = (arreglo) => {    
  arreglo.splice(2,1,'Mario');
  return arreglo;
}
console.log(cambiar(arreglo2))