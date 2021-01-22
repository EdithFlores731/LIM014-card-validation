export const isValid = (creditCardNumber) =>{
    let  i, numeroTarjeta, digitoTarjeta, longitudTarjeta, acumulador, dobleDigito;
    numeroTarjeta= creditCardNumber;
    longitudTarjeta=numeroTarjeta.length;
    
   /*los ubica de el ultimo al primero*/
    acumulador=0;
    for(i=(numeroTarjeta.length-1);i>=0;i--){
        digitoTarjeta=parseInt(numeroTarjeta.charAt(i));
        
        if ((longitudTarjeta-i)%2==0){
            dobleDigito= digitoTarjeta*2;
           
            if(dobleDigito>9){
                acumulador=acumulador+sumaDigitos(dobleDigito);
            }
            else{
                acumulador=acumulador+dobleDigito;
            }
        }
        else{
            acumulador=acumulador+digitoTarjeta;
        }
    }
    if(acumulador%10==0){
      return true;
    }
    else {
      return false;
    }
}
/*funcion de suma de digitos*/
function sumaDigitos(numero){
    let suma=0;
    do {
        suma=suma+(numero%10);
        numero=Math.trunc(numero/10);   
      }
      while(numero>0);
      return suma;
}
export const maskify = (creditCardNumber) =>{
    let  ultimosDigitos, ocultar, simbolo, resultadoInput, longitudTarjeta, numeroTarjeta;
    ocultar=0;
    simbolo = "#";
    numeroTarjeta= creditCardNumber;
    ultimosDigitos = numeroTarjeta.slice(-4);
    longitudTarjeta=numeroTarjeta.length;
    if (longitudTarjeta>=4){
        ocultar = longitudTarjeta - 4;
    }
    resultadoInput = simbolo.repeat(ocultar) + ultimosDigitos;
    return resultadoInput;
}