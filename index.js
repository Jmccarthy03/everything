let openHome = false
		function checkinfo() {
	const nameInput = document.getElementById('uname').value;
	const passInput = document.getElementById('pword').value;
	if (passInput === "Adminpass" && nameInput === "Admin") {
			window.location.href = "ulhome.html";
			}
		else if (passInput === "T@nn3r" && nameInput === "Tman")  {
			window.location.href = "ulhome.html";
	}
		else if (passInput === "12345678910" && nameInput === "OP_Gamer23194"){
			window.location.href = "ulhome.html";
		}
        	else if (passInput === "Willisawesome" && nameInput === "Will.Myers") {
			window.location.href = "ulhome.html";
			}
		else if (passInput === "bypass" && nameInput === "bypass") {
			window.location.href = "ulhome.html";
			}
		}
	

	
	//if (openHome === false) window.location.href = "index.html";
	
