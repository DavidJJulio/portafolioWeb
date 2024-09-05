function escribirEnPantalla(texto){
    let arr=texto.split("");
    let i=0;
   let intervalo= setInterval(function(){
      if(i==arr.length-1){ 
        document.getElementById("quote").innerHTML+=arr[i];
        clearInterval(intervalo);
    } 
      else {
      if(arr[i]==" "){
       document.getElementById("quote").innerHTML+=arr[i];
       document.getElementById("quote").innerHTML+=arr[i+1];
        i+=2;
      }else{
      document.getElementById("quote").innerHTML+=arr[i];
      i++;
        }
      }
    },80); 
  }
  
  escribirEnPantalla("The quality of a programmer is not only measured by the quality of their code but also by the quality of their solutions.");
  