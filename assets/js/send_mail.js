function sendMail()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("message").value;
	
	if(name == "" || email == "" || msg == "") return;

    var hr = new XMLHttpRequest();
    var url = "send_mail.php";
    var mailInfo = "name="+name+"&email="+email+"&msg="+msg;

    hr.open("POST", url, true);
    hr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    hr.onreadystatechange = function()
    {
        if (hr.readyState==4 && hr.status==200)
        {
            var returnData = hr.responseText;
			if (returnData == "Message sent successfully!") {
				document.getElementById("name").value = "";
				document.getElementById("email").value = "";
				document.getElementById("message").value = "";
				document.getElementById("send_mail").style.display = 'none';
			}
            var p = document.createElement("P");
            p.innerHTML = returnData;
            document.getElementById("emailStatus").appendChild(p);
        }
    }

    hr.send(mailInfo);
}