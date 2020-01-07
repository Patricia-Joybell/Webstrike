	function validateForm()
	{
		var nameFlag = 0;
		var lastFlag = 0;
		var mailFlag = 0;
		var pwdFlag = 0;
		var pwdtest = 0;
		
		var uname = document.forms["myForm"]["fname"].value;
		var letters = /^[A-Za-z]+$/;
		if(!uname.match(letters))
		{
			alert("Firstname must have alphabet characters only");
		}
		else
		{
			nameFlag = 1;
		}
	
        var lname = document.forms["myForm"]["lname"].value;
		var letters = /^[A-Za-z]+$/;
		if(!lname.match(letters))
		{
			alert("Lastname must have alphabet characters only");
		}
		else
		{
			lastFlag = 1;
		}

	    var email =document.forms["myForm"]["email"].value;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!email.match(mailformat))
		{
			alert("Invalid email");
		}
		else
		{
			mailFlag = 1;
		}
	
	    var password = document.forms["myForm"]["pass"].value;
		var psw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
		if(!password.match(psw))
		{
			alert("Password must contains 7 to 14 characters.It includes number and underscore");
			return;
	
		}
		else
		{
			pwdtest = 1;
		}
		
        var confirmpass = document.forms["myForm"]["confirmpassword"].value;
	    if(!confirmpass.match(password))
	   {
        alert("Password Mismatch");
		return;
	   }
	   else
		{
			pwdFlag = 1;
		}
	   
	   if (nameFlag && lastFlag && mailFlag && pwdFlag)
	   {
		   alert("Your Registration is completed");
		   return;
	   }
}