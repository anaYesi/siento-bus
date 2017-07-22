var N=32;
var asientos = new Array(N);
var asientoSelec = -1;
 for (var i = 0; i < N; i++) {
      asientos[i] = undefined;
   }

function buscar(dni)
{
	
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
	var html = "";
	for (var i = 0; i < N; i++) 
	{
      if(asientos[i] != undefined)
      {
      	name.innerHTML= asientos[i]
      	var nombresitos = asientos[i];
      	var apellidos = asientos[i];
      	var dni=asientos[i];
      	var s = "Nombre: "+  nombresitos.nombre + "apellidos"+ apellidos.apellido+"dni"+dni.dni;
      	html += s;
      }
    }
    console.log(html);
   document.getElementById("listar1").innerText = html;

}

var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
var celda;
function redirect(event){

    asientoSelec=(event.target.textContent);
    var mostrar=document.getElementById("mostrar");
    mostrar.innerHTML=asientoSelec;
    celda = event.target;
}


