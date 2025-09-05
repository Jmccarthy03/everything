//let openHome = false;
		function checkinfo() {
	const nameInput = document.getElementById('uname').value;
	const passInput = document.getElementById('pword').value;
	if (passInput === "Adminpass" && nameInput === "Admin") {
			window.location.href = "ulhome.html";
			//sessionStorage.setItem("sec, true);
			//openHome = sessionStorage.getItem("sec");
			}
		else if (passInput === "T@nn3r" && nameInput === "Tman")  {
			window.location.href = "ulhome.html";
			//sessionStorage.setItem("sec, true);
			//openHome = sessionStorage.getItem("sec");
			window.alert("Malware Detected" "Please Use an Anti-Virus program before your data is lost"); 
		}
		else if (passInput === "12345678910" && nameInput === "OP_Gamer23194"){
			window.location.href = "ulhome.html";
			//sessionStorage.setItem("sec, true);
			//openHome = sessionStorage.getItem("sec");
		}
        else if (passInput === "Willisawesome" && nameInput === "Will.Myers") {
			window.location.href = "ulhome.html";
			//sessionStorage.setItem("sec, true);
			//openHome = sessionStorage.getItem("sec");
			}
		else if (passInput === "Bypass" && nameInput === "Bypass") {
			window.location.href = "ulhome.html";
			//sessionStorage.setItem("sec, true);
			//openHome = sessionStorage.getItem("sec");
			}
		else {
			document.getElementById('signin').innerHTML = "Your Username and/or Password are incorrect";
			}
		}

	//function security() {
	//	if (openHome === false) { window.location.href = "index.html"; }
	//}
