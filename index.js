		function checkinfo() {
	const nameInput = document.getElementById('uname').value;
	const passInput = document.getElementById('pword').value;
	if (passInput === "Adminpass" && nameInput === "Admin") openHome = true;
			window.location.href = "ulhome.html";

		else if (passInput === "T@nn3r" && nameInput === "Tman")  openHome = true;
			window.location.href = "ulhome.html";

		else if (passInput === "12345678910" && nameInput === "OP_Gamer23194") openHome = true;
			window.location.href = "ulhome.html";

        	else if (passInput === "Willisawesome" && nameInput === "Will.Myers")  openHome = true;
			window.location.href = "ulhome.html";
			
		else if (passInput === "bypass" && nameInput === "bypass") openHome = true;
			window.location.href = "ulhome.html";
			
		}
