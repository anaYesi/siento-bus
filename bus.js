var N=32;
var a = [];
var asientoSelec = -1;

function buscar(dni)
{
	for(var i = 0; i < N; i++)
	{
		
            
	}
}
function reservar()
{
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	nombre.push(a);
	apellido.push(a);
	dni.push(a);
}
function cancelar()
{

}
function listar()
{
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	document.getElementById("listar1").innerHTML = nombre;
	document.getElementById("listar2").innerHTML = apellido;
	document.getElementById("listar3").innerHTML = dni;

}
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
function redirect(event){

    document.getElementById("mostrar").innerHTML=(event.target.textContent);
}