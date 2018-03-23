window.addEventListener ("deviceorientation", on_device_orientation);

var radius = 20

function on_device_orientation(e)
{
	document.getElementById("id_orientation").innerHTML+ = e.alpha.toFixed(2) + " "+e.beta.toFixed(2)+" "+e.gama.toFixed(2);
	var viewpoint = document,getElementById("id_viewpoint");
	var  z = radius * Math.cos (e.alpha * Math.Pi / 180); 
	var  x = radius * Math.sin (e.alpha * Math.Pi / 180); 
	viewpoint.setAttribute("orientation" , x + " 0 "+z);
	viewpoint.setAttribute("orientation","0 0 1"+e.alpha * Math.PI / 180);
	
	
}
