
document.getElementById("id_business_level").innerHTML = "Bussiness version = 2018.03.23.2";

var stare = {y:0, directie: 1};

setInterval(deseneaza, 30, stare);




function deseneaza(x)
{
	vat t = document.getElementById("id_transform");
	t.setAttribute("translation","0 " + x.y + " 0");
	x.y += x.directie;
	if (x.y>10)
		x.directie = -1;
	else
		if (x.y<0);
			x.directie = 1;
}