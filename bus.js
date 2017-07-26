var N=32;
var asientos = new Array(N);
var asientoSelec = -1;
 

function buscar(dni)
{
	var d1 = document.getElementById("dniInput").value;
	var datos_mostrar = "";
	for (var i = 0; i < N; i++) 
	{
       if(asientos[i] != undefined)
       {
       	var as = asientos[i];
      	 if(d1 == as.dni)
      	 {
      	 	var a=asientos[i];
      	var s = "Nombre: "+  a.nombre +"\n"+ "Apellidos: "+ a.apellido+
      	"\n"+"DNI:"+a.dni +"\n"+ "asiento: "+ (i+1)+"\n";
      	datos_mostrar += s;
			alert("hola");	
	     }
	     else
	     	alert("no hola")

       }
		
	}
   document.getElementById("listar2").innerText = datos_mostrar;

	
}

function reservar()
{
	if(asientoSelec == -1)
	{
		alert("Pasejro no registrado, elija un asiento");
	}
	else
	{
		var n = document.getElementById("nombre").value;
		var a = document.getElementById("apellido").value;
		var d = document.getElementById("dni").value;
		var pasajero = new mostrarReserva(n,a,d);
		asientos[asientoSelec-1] = pasajero;
		alert("pasajero registrado correctamente");
		asientoSelec=-1;		
		console.log(asientos);
 
		celda.style.backgroundColor = '#F8ED50';
	}

}

function mostrarReserva(nom,apell,d)
{    
	this.nombre = nom;
	this.apellido = apell;
	this.dni = d;
}


function cancelar()
{

}
function listar()
{
	var datos_mostrar = "";
	for (var i = 0; i < N; i++) 
	{
      if(asientos[i] != undefined)
      {
      	//name.innerHTML= asientos[i]
      //	var nombresitos = asientos[i];
      	//var apelliditos = asientos[i];
      	var a=asientos[i];
      	var s = "Nombre: "+  a.nombre +"\n"+ "Apellidos: "+ a.apellido+
      	"\n"+"DNI:"+a.dni +"\n"+ "asiento: "+ (i+1)+"\n";
      	datos_mostrar += s;
      }
    }
    //console.log(datos_mostrar);
   document.getElementById("listar1").innerText = datos_mostrar;

}

var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
var celda;
function redirect(event){

    asientoSelec=(event.target.textContent);
    var mostrar=document.getElementById("mostrar");
    mostrar.innerHTML="asiento seleccionado: "+asientoSelec ;
    celda = event.target;

}

function clear()
{

}

