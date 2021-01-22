import{ isValid, maskify} from './validator.js'

window.validacion= function validacion(){
    let numeroTarjeta, clave;
    numeroTarjeta = document.getElementById("numeroTarjeta").value;
    clave = document.getElementById("clave").value;
   
    if(numeroTarjeta=="" | clave==""){
    alert("Estimado usuario es necesario llenar todos los campos");
    return false;
    }
    //para que solo acepte números
    
   if(!(/^\d+$/.test(numeroTarjeta))){
    alert("Estimado usuario el número de tarjeta deben de ser datos numericos");
    return false;
    }
    if(!(/^\d+$/.test(clave))){
        alert("Estimado usuario la clave debe de ser datos numericos");
        return false;
    }
    if (isValid(numeroTarjeta)){
        document.getElementById('resultado').value =  maskify(numeroTarjeta);
        document.getElementById("ventana").style.display="none";
        document.getElementById("valido").style.display="block";
        document.getElementById("invalido").style.display="none"; 
        document.getElementById("aviso").style.display="none";
        return false;
    }
    else {
        document.getElementById('otroresultado').value =  maskify(numeroTarjeta);
        document.getElementById("ventana").style.display="none";
        document.getElementById("valido").style.display="none";
        document.getElementById("invalido").style.display="block"; 
        document.getElementById("aviso").style.display="none"; 
        return false;
    }
}



