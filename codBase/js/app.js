var teclas = document.getElementsByClassName("tecla");
var numero1 ="";
var numero2 ="";
var operacion="";
document.getElementById("igual").classList.add("igual");
 var display = document.getElementById("display");
for(var i=0;i<teclas.length;i++){
  teclas[i].addEventListener("click",function(e){ //hacemos todos las teclas de la calculadora clickeables
      var classtecla= e.currentTarget.getAttribute("class"); //obtenemos la clase de la tecla
     var idtecla = e.target.getAttribute("id"); //obtenemos el id de la tecla

    if(classtecla=="tecla" && idtecla!="on") teclear(idtecla);
    else if(idtecla=="on") {resetear();display.textContent="0";}
    switch (classtecla) {
      case "tecla suma": numero1 = display.textContent;
                         operacion="+";
                         limpiar();break;
      case "tecla resta": numero1=display.textContent;
                          operacion="-";
                          limpiar();break;
      case "tecla divide": numero1=display.textContent;
                          operacion="/";
                          limpiar();break;
      case "tecla multiplica": numero1=display.textContent;
                               operacion="*";
                          limpiar();     break;
      case "tecla igual": var numero2 = display.textContent;
                          resolver(numero1,numero2,operacion);break;

      default:

    }
    if(idtecla=="sign"){ //cambio de signo
      resultado =parseFloat(display.textContent);
      resultado *=(-1);
      limpiar();display.textContent=resultado;
    }

  });

}




  function resolver(numero1,numero2,operacion){
    var res=0;
    switch (operacion) {
      case "+": res= parseFloat(numero1) + parseFloat(numero2);break;
      case "-": res= parseFloat(numero1) - parseFloat(numero2);break;
      case "*": res= parseFloat(numero1) * parseFloat(numero2);break;
      case "/": res= parseFloat(numero1) / parseFloat(numero2);break;
      default:

    }
    resetear();

    display.textContent=res;
  }

  function resetear(){
    display.textContent="";
    numero1=0;
    numero2=0;
    operacion="";
  }

function limpiar(){
  display.textContent="";
}
function teclear(a){
  if(display.textContent.substring(0,1)=="0"){
    display.innerHTML="";
    teclear(a);
  }else{
    if(display.textContent.length<=8)
   {
        if(a=="punto") n1 = ".";
        else
          n1=a;
          display.textContent+=n1;
        }
      }
    }
